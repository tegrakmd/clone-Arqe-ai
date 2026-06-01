/**
 * @module lib/errors
 * Custom error classes and error handling utilities
 */

export class AppError extends Error {
  constructor(
    message: string,
    public code: string = "UNKNOWN_ERROR",
    public statusCode: number = 500
  ) {
    super(message)
    this.name = "AppError"
    Object.setPrototypeOf(this, AppError.prototype)
  }
}

export class ValidationError extends AppError {
  constructor(message: string, code: string = "VALIDATION_ERROR") {
    super(message, code, 400)
    this.name = "ValidationError"
    Object.setPrototypeOf(this, ValidationError.prototype)
  }
}

export class NotFoundError extends AppError {
  constructor(resource: string = "Resource") {
    super(`${resource} not found`, "NOT_FOUND", 404)
    this.name = "NotFoundError"
    Object.setPrototypeOf(this, NotFoundError.prototype)
  }
}

export class UnauthorizedError extends AppError {
  constructor(message: string = "Unauthorized") {
    super(message, "UNAUTHORIZED", 401)
    this.name = "UnauthorizedError"
    Object.setPrototypeOf(this, UnauthorizedError.prototype)
  }
}

export class ForbiddenError extends AppError {
  constructor(message: string = "Forbidden") {
    super(message, "FORBIDDEN", 403)
    this.name = "ForbiddenError"
    Object.setPrototypeOf(this, ForbiddenError.prototype)
  }
}

export function isAppError(error: unknown): error is AppError {
  return error instanceof AppError
}

export function handleError(error: unknown): { message: string; code: string } {
  if (isAppError(error)) {
    return { message: error.message, code: error.code }
  }

  if (error instanceof Error) {
    return { message: error.message, code: "INTERNAL_ERROR" }
  }

  return { message: "An unexpected error occurred", code: "UNKNOWN_ERROR" }
}
