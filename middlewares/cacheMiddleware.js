const { cache } = require('../config/redisCacheConfig');

/**
 * Cache middleware for GET requests
 * @param {number} ttl - Time to live in seconds (default: 5 minutes)
 * @param {function} keyGenerator - Custom key generator function
 */
const cacheResponse = (ttl = 300, keyGenerator = null) => {
  return async (req, res, next) => {
    // Only cache GET requests
    if (req.method !== 'GET') {
      return next();
    }

    // Generate cache key
    const cacheKey = keyGenerator 
      ? keyGenerator(req) 
      : `api:${req.originalUrl}`;

    try {
      // Check cache
      const cachedData = await cache.get(cacheKey);
      
      if (cachedData !== null && cachedData !== undefined) {
        console.log(`Cache HIT: ${cacheKey}`);
        // Return cached data as-is, preserving arrays
        // Don't add metadata to the response to avoid corrupting arrays
        return res.json(cachedData);
      }

      console.log(`Cache MISS: ${cacheKey}`);

      // Store original res.json
      const originalJson = res.json.bind(res);

      // Override res.json to cache successful responses
      res.json = function(data) {
        // Only cache successful responses
        if (res.statusCode >= 200 && res.statusCode < 300) {
          cache.set(cacheKey, data, ttl).catch(err => {
            console.error('Failed to cache response:', err);
          });
        }
        return originalJson(data);
      };

      next();
    } catch (error) {
      console.error('Cache middleware error:', error);
      next(); // Continue without caching on error
    }
  };
};

/**
 * Invalidate cache for specific patterns
 * Use after mutations (POST, PUT, DELETE)
 * @param {string[]} patterns - Array of cache key patterns to invalidate
 */
const invalidateCache = (...patterns) => {
  return async (req, res, next) => {
    // Store original res.json
    const originalJson = res.json.bind(res);

    // Override res.json to invalidate cache after successful mutation
    res.json = async function(data) {
      // Invalidate cache for successful mutations
      if (res.statusCode >= 200 && res.statusCode < 300) {
        for (const pattern of patterns) {
          const resolvedPattern = typeof pattern === 'function' 
            ? pattern(req) 
            : pattern;
          await cache.delPattern(resolvedPattern);
        }
      }
      return originalJson(data);
    };

    next();
  };
};

module.exports = { cacheResponse, invalidateCache };
