/**
 * SSE (Server-Sent Events) Manager for Vendor Order Notifications
 * 
 * Manages connections to vendors and broadcasts order updates in real-time.
 * More efficient than polling - vendor only gets updates when orders are placed.
 */

// Store active SSE connections by restaurantId
const vendorConnections = new Map();

/**
 * Register a new SSE connection for a vendor
 * @param {string} restaurantId - The restaurant ID
 * @param {Response} res - Express response object
 */
const registerConnection = (restaurantId, res) => {
    // If there's an existing connection, close it first
    if (vendorConnections.has(restaurantId)) {
        const existingConnection = vendorConnections.get(restaurantId);
        try {
            existingConnection.end();
        } catch (e) {
            // Connection already closed
        }
    }
    
    vendorConnections.set(restaurantId, res);
    console.log(`[SSE] Vendor ${restaurantId} connected. Total connections: ${vendorConnections.size}`);
};

/**
 * Remove a vendor's SSE connection
 * @param {string} restaurantId - The restaurant ID
 */
const removeConnection = (restaurantId) => {
    vendorConnections.delete(restaurantId);
    console.log(`[SSE] Vendor ${restaurantId} disconnected. Total connections: ${vendorConnections.size}`);
};

/**
 * Send an event to a specific vendor
 * @param {string} restaurantId - The restaurant ID
 * @param {string} eventType - Event type (e.g., 'new-order', 'order-update')
 * @param {Object} data - The data to send
 */
const sendToVendor = (restaurantId, eventType, data) => {
    const connection = vendorConnections.get(restaurantId);
    if (connection) {
        try {
            connection.write(`event: ${eventType}\n`);
            connection.write(`data: ${JSON.stringify(data)}\n\n`);
            return true;
        } catch (error) {
            console.error(`[SSE] Error sending to vendor ${restaurantId}:`, error.message);
            removeConnection(restaurantId);
            return false;
        }
    }
    return false;
};

/**
 * Notify a vendor about a new order
 * @param {string} restaurantId - The restaurant ID
 * @param {Object} order - The order object
 */
const notifyNewOrder = (restaurantId, order) => {
    const sent = sendToVendor(restaurantId, 'new-order', {
        type: 'new-order',
        order: order,
        timestamp: new Date().toISOString()
    });
    
    if (sent) {
        console.log(`[SSE] New order notification sent to vendor ${restaurantId}`);
    } else {
        console.log(`[SSE] Vendor ${restaurantId} not connected - order will be fetched on next poll`);
    }
    
    return sent;
};

/**
 * Get the number of active vendor connections
 */
const getActiveConnections = () => vendorConnections.size;

/**
 * Check if a vendor is connected
 * @param {string} restaurantId - The restaurant ID
 */
const isVendorConnected = (restaurantId) => vendorConnections.has(restaurantId);

module.exports = {
    registerConnection,
    removeConnection,
    sendToVendor,
    notifyNewOrder,
    getActiveConnections,
    isVendorConnected
};
