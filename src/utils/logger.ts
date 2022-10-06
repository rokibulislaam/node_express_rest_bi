import winston from 'winston';

const logFormat = winston.format.printf(
  ({ timestamp, level, message }) => `${timestamp} level: ${level} message: ${message}`
);

const logger = winston.createLogger({
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.label({ label: 'Test label: ' }),
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss"
    }),
    logFormat
  ),
});


const morganStream = {
  write: (message: string) => {
    logger.info(message)
  }
} 


export { logger, morganStream };
