import config from "config";
import { createLogger, format, transports } from "winston";
const { combine, timestamp, printf } = format;

const level = config.get<string>("logLevel");

const myFormat = printf(({ level, message, timestamp, stack }) => {
  return `[${level}] [${timestamp}]: ${stack || message}`;
});

const logger = createLogger({
  level,
  format: combine(
    format.colorize(),
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.errors({ stack: true }),
    myFormat
  ),
  transports: [new transports.Console()],
});

export default logger;
