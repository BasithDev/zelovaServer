const winston = require('winston');
const path = require('path');
const fs = require('fs');

// Create logs directory if it doesn't exist
const logsDir = path.join(__dirname, '../logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

// Color codes for different log levels
const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'cyan',
  debug: 'gray'
};

winston.addColors(colors);

// Pretty console format for development
const prettyConsoleFormat = winston.format.printf(({ level, message, timestamp, ...meta }) => {
  // Status code color coding
  const status = meta.status;
  let statusColor = '';
  if (status >= 500) statusColor = '\x1b[31m'; // Red
  else if (status >= 400) statusColor = '\x1b[33m'; // Yellow  
  else if (status >= 300) statusColor = '\x1b[36m'; // Cyan
  else if (status >= 200) statusColor = '\x1b[32m'; // Green
  
  const reset = '\x1b[0m';
  
  // Format timestamp nicely
  const time = timestamp ? `\x1b[90m${timestamp}\x1b[0m` : '';
  
  // If it's a request log (has method), format it specially
  if (meta.method) {
    const method = meta.method.padEnd(7);
    const url = meta.url || '';
    const duration = meta.duration || '';
    return `${time} ${statusColor}${status}${reset} ${method} ${url} ${'\x1b[90m'}${duration}${reset}`;
  }
  
  // Regular log message
  return `${time} ${message}`;
});

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'HH:mm:ss' }),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'zelova-api' },
  transports: [
    // Error logs
    new winston.transports.File({ 
      filename: path.join(logsDir, 'error.log'), 
      level: 'error',
      maxsize: 5242880, // 5MB
      maxFiles: 5
    }),
    // Combined logs
    new winston.transports.File({ 
      filename: path.join(logsDir, 'combined.log'),
      maxsize: 5242880,
      maxFiles: 5
    })
  ]
});

// Console logging in development - pretty format
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.combine(
      winston.format.timestamp({ format: 'HH:mm:ss' }),
      winston.format.colorize({ all: false }),
      prettyConsoleFormat
    )
  }));
}

module.exports = logger;
