/**
 * Routes that do not require authentication
 */

export const publicRoutes = ["/"];

/**
 * Routes for Authentication
 */

export const authRoutes = ["/login", "/register", "/error"];

/**
 * The prefix for authentication routes
 */

export const apiAuthPrefix = "/api/auth";

/**
 * Login path for logged in users
 */

export const DEFAULT_LOGIN_REDIRECT = "/dashboard";
