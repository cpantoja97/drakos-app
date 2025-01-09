import { createLogger, format, transports } from 'winston';

/**
 * Logger to manage logging throughout the app
 */
const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.colorize(),
    format.printf(
      ({ timestamp, level, message }) => `[${timestamp}] ${level}: ${message}`,
    ),
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'logs/app.log', level: 'error' }), // Save errors to a file
  ],
});

export default logger;
