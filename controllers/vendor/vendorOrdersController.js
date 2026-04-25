const Orders = require('../../models/orders')
const getUserId = require('../../helpers/userIdHelper')
const getRestaurantId = require('../../helpers/restaurantIdHelper')
const statusCodes = require('../../config/statusCodes')
const { MESSAGES } = require('../../config/constants')
const { OrderStatus } = require('../../config/enums')
const sseManager = require('../../utils/sseManager')

const getCurrentOrdersForVendor = async (req,res) =>{
    const token = req.cookies.user_token
    if (!token) return res.status(statusCodes.UNAUTHORIZED).json({ error: MESSAGES.GENERIC.UNAUTHORIZED });

    const vendorId = getUserId(token, process.env.JWT_SECRET)
    if (!vendorId) return res.status(statusCodes.BAD_REQUEST).json({ error: MESSAGES.USER.ID_REQUIRED });

    const restaurantId = getRestaurantId(token, process.env.JWT_SECRET);
    if (!restaurantId) return res.status(statusCodes.BAD_REQUEST).json({ error: MESSAGES.GENERIC.RESTAURANT_ID_REQUIRED });

    const orders = await Orders.find({ restaurantId, status: { $ne: OrderStatus.ACCEPTED } })

    res.status(statusCodes.OK).json(orders)
}

/**
 * SSE endpoint for real-time order updates
 * Vendors connect to this endpoint to receive instant order notifications
 */
const streamOrders = (req, res) => {
    const token = req.cookies.user_token;
    if (!token) {
        return res.status(statusCodes.UNAUTHORIZED).json({ error: MESSAGES.GENERIC.UNAUTHORIZED });
    }

    const restaurantId = getRestaurantId(token, process.env.JWT_SECRET);
    if (!restaurantId) {
        return res.status(statusCodes.BAD_REQUEST).json({ error: MESSAGES.GENERIC.RESTAURANT_ID_REQUIRED });
    }

    // Set SSE headers
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('X-Accel-Buffering', 'no'); // Disable nginx buffering
    res.flushHeaders();

    // Send initial connection confirmation
    res.write(`event: connected\n`);
    res.write(`data: ${JSON.stringify({ message: 'Connected to order stream', restaurantId })}\n\n`);

    // Register this connection
    sseManager.registerConnection(restaurantId, res);

    // Send heartbeat every 30 seconds to keep connection alive
    const heartbeatInterval = setInterval(() => {
        try {
            res.write(`event: heartbeat\n`);
            res.write(`data: ${JSON.stringify({ timestamp: new Date().toISOString() })}\n\n`);
        } catch (error) {
            clearInterval(heartbeatInterval);
        }
    }, 30000);

    // Clean up on connection close
    req.on('close', () => {
        clearInterval(heartbeatInterval);
        sseManager.removeConnection(restaurantId);
    });
};

const updateOrderStatus = async (req, res, next) => {
    try {
        const token = req.cookies.user_token;
        if (!token) {
            return res.status(statusCodes.UNAUTHORIZED).json({ message: MESSAGES.GENERIC.UNAUTHORIZED })
        }
        const { orderId, status } = req.body;
        const updatedOrder = await Orders.findOneAndUpdate(
            { orderId },
            { status },
            { new: true }
        );
        if (!updatedOrder) {
            return res.status(statusCodes.NOT_FOUND).json({ message: MESSAGES.ORDER.NOT_FOUND });
        }
        res.status(statusCodes.OK).json({ message: MESSAGES.ORDER.STATUS_UPDATED, order: updatedOrder });
    } catch (error) {
        console.error('Error updating order status:', error);
        next(error);
    }
};

const getPreviousOrdersOnDate = async (req, res, next) => {
    try {
        const token = req.cookies.user_token;
        if (!token) {
            return res.status(statusCodes.UNAUTHORIZED).json({ message: MESSAGES.GENERIC.UNAUTHORIZED });
        }
        const restaurantId = getRestaurantId(token, process.env.JWT_SECRET);
        if (!restaurantId) {
            return res.status(statusCodes.BAD_REQUEST).json({ message: MESSAGES.GENERIC.RESTAURANT_ID_REQUIRED });
        }
        const { date } = req.params;
        const searchDate = new Date(date);
        const startOfDay = new Date(searchDate.setHours(0, 0, 0, 0));
        const endOfDay = new Date(searchDate.setHours(23, 59, 59, 999));

        const orders = await Orders.find({ 
            restaurantId,
            status: OrderStatus.ACCEPTED,
            updatedAt: {
                $gte: startOfDay,
                $lte: endOfDay
            }
        });
        
        res.status(statusCodes.OK).json({ 
            success: true,
            message: MESSAGES.ORDER.RETRIEVED_SUCCESS,
            orders 
        });
    } catch (error) {
        console.error('Error retrieving orders:', error);
        next(error);
    }
}

module.exports = {
    getCurrentOrdersForVendor,
    streamOrders,
    updateOrderStatus,
    getPreviousOrdersOnDate
}