const redis = require("redis");
require("dotenv").config();

// Create Redis client with v5 API
// Support both REDIS_URL (cloud) and individual env vars (local)
const client = process.env.REDIS_URL 
  ? redis.createClient({
      url: process.env.REDIS_URL,
      socket: {
        reconnectStrategy: (retries) => {
          if (retries > 10) {
            console.error("Redis: Max reconnection attempts reached");
            return new Error("Redis reconnection failed");
          }
          return Math.min(retries * 100, 3000);
        },
      },
    })
  : redis.createClient({
      socket: {
        host: process.env.REDIS_HOST || "localhost",
        port: process.env.REDIS_PORT || 6379,
        reconnectStrategy: (retries) => {
          if (retries > 10) {
            console.error("Redis: Max reconnection attempts reached");
            return new Error("Redis reconnection failed");
          }
          return Math.min(retries * 100, 3000);
        },
      },
      password: process.env.REDIS_PASSWORD || undefined,
    });

// Event handlers
client.on("error", (err) => console.error("Redis Error:", err));
client.on("connect", () => console.log("Redis: Connecting..."));
client.on("ready", () => console.log("Redis: Connected and ready"));
client.on("reconnecting", () => console.log("Redis: Reconnecting..."));

// Initialize connection
const connectRedis = async () => {
  try {
    await client.connect();
  } catch (error) {
    console.error("Redis connection failed:", error);
  }
};

connectRedis();

// Cache helper functions
const cache = {
  /**
   * Get cached value
   * @param {string} key - Cache key
   * @returns {Promise<any|null>} - Cached value or null
   */
  async get(key) {
    try {
      const data = await client.get(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error("Cache GET error:", error);
      return null;
    }
  },

  /**
   * Set cache value with TTL
   * @param {string} key - Cache key
   * @param {any} value - Value to cache
   * @param {number} ttl - Time to live in seconds
   * @returns {Promise<boolean>}
   */
  async set(key, value, ttl = 3600) {
    try {
      await client.setEx(key, ttl, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error("Cache SET error:", error);
      return false;
    }
  },

  /**
   * Delete cache key
   * @param {string} key - Cache key
   * @returns {Promise<boolean>}
   */
  async del(key) {
    try {
      await client.del(key);
      return true;
    } catch (error) {
      console.error("Cache DEL error:", error);
      return false;
    }
  },

  /**
   * Delete cache keys matching pattern
   * @param {string} pattern - Key pattern (e.g., 'restaurants:*')
   * @returns {Promise<boolean>}
   */
  async delPattern(pattern) {
    try {
      const keys = await client.keys(pattern);
      if (keys.length > 0) {
        await client.del(keys);
        console.log(`Cache: Deleted ${keys.length} keys matching ${pattern}`);
      }
      return true;
    } catch (error) {
      console.error("Cache DEL PATTERN error:", error);
      return false;
    }
  },

  /**
   * Check if key exists
   * @param {string} key - Cache key
   * @returns {Promise<boolean>}
   */
  async exists(key) {
    try {
      return (await client.exists(key)) === 1;
    } catch (error) {
      console.error("Cache EXISTS error:", error);
      return false;
    }
  },
};

module.exports = { client, cache };
