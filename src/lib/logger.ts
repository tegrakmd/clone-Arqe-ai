/**
 * @module lib/logger
 * Logger utility for development and production
 */

type LogLevel = "debug" | "info" | "warn" | "error"

interface LogEntry {
  timestamp: string
  level: LogLevel
  message: string
  data?: unknown
}

/**
 * Simple logger utility
 */
class Logger {
  private isDevelopment: boolean

  constructor(isDevelopment = true) {
    this.isDevelopment = isDevelopment
  }

  private formatLog(
    level: LogLevel,
    message: string,
    data?: unknown
  ): LogEntry {
    return {
      timestamp: new Date().toISOString(),
      level,
      message,
      data,
    }
  }

  private log(entry: LogEntry): void {
    if (!this.isDevelopment) return

    const { timestamp, level, message, data } = entry
    const prefix = `[${timestamp}] [${level.toUpperCase()}]`

    if (data) {
      console.log(prefix, message, data)
    } else {
      console.log(prefix, message)
    }
  }

  debug(message: string, data?: unknown): void {
    this.log(this.formatLog("debug", message, data))
  }

  info(message: string, data?: unknown): void {
    this.log(this.formatLog("info", message, data))
  }

  warn(message: string, data?: unknown): void {
    console.warn(this.formatLog("warn", message, data))
  }

  error(message: string, error?: unknown): void {
    console.error(this.formatLog("error", message, error))
  }
}

export const logger = new Logger(process.env.NODE_ENV === "development")
