const logger = require('../utils/logger');

/**
 * Request logging middleware
 * Logs all incoming requests with method, URL, status, duration, request body, and response
 */
const requestLogger = (req, res, next) => {
  const start = Date.now();
  
  // Capture request body (sanitize sensitive fields)
  const sanitizeBody = (body) => {
    if (!body || typeof body !== 'object') return body;
    const sanitized = { ...body };
    // Mask sensitive fields
    if (sanitized.password) sanitized.password = '***';
    if (sanitized.confirmPassword) sanitized.confirmPassword = '***';
    if (sanitized.accessToken) sanitized.accessToken = '***';
    if (sanitized.refreshToken) sanitized.refreshToken = '***';
    return sanitized;
  };

  const requestBody = Object.keys(req.body || {}).length > 0 
    ? sanitizeBody(req.body) 
    : null;

  const requestQuery = Object.keys(req.query || {}).length > 0 
    ? req.query 
    : null;

  // Capture response body
  const originalSend = res.send;
  let responseBody;
  
  res.send = function(body) {
    responseBody = body;
    return originalSend.call(this, body);
  };

  res.on('finish', () => {
    const duration = Date.now() - start;
    const isError = res.statusCode >= 400;
    const logLevel = isError ? 'warn' : 'info';
    
    // Parse response body if JSON
    let parsedResponse;
    try {
      if (responseBody && typeof responseBody === 'string') {
        parsedResponse = JSON.parse(responseBody);
        // Sanitize sensitive response fields
        if (parsedResponse.accessToken) parsedResponse.accessToken = '[hidden]';
        if (parsedResponse.refreshToken) parsedResponse.refreshToken = '[hidden]';
        if (parsedResponse.token) parsedResponse.token = '[hidden]';
      }
    } catch (e) {
      parsedResponse = responseBody?.slice?.(0, 100);
    }

    // Console log with colors
    const statusColor = isError ? '\x1b[31m' : '\x1b[32m';
    const reset = '\x1b[0m';
    const dim = '\x1b[90m';
    const cyan = '\x1b[36m';
    const yellow = '\x1b[33m';

    console.log(`${statusColor}${res.statusCode}${reset} ${req.method.padEnd(7)} ${req.originalUrl} ${dim}${duration}ms${reset}`);
    
    // Show query params for GET requests
    if (requestQuery) {
      console.log(`  ${cyan}Query:${reset}`, JSON.stringify(requestQuery));
    }
    
    // Show request body for POST/PUT/PATCH
    if (requestBody) {
      console.log(`  ${cyan}Body:${reset}`, JSON.stringify(requestBody));
    }
    
    // Show response for errors OR for POST/PUT/PATCH/DELETE
    if (parsedResponse && (isError || req.method !== 'GET')) {
      const resStr = JSON.stringify(parsedResponse);
      console.log(`  ${yellow}Response:${reset}`, resStr.length > 500 ? resStr.slice(0, 500) + '...' : resStr);
    }

    // Log to file
    logger[logLevel](`${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`, {
      method: req.method,
      url: req.originalUrl,
      status: res.statusCode,
      duration: `${duration}ms`,
      query: requestQuery,
      body: requestBody,
      response: parsedResponse
    });
  });
  
  next();
};

module.exports = requestLogger;
