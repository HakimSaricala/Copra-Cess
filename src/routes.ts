/**
 * Routes that do not require authentication
 */

export const publicRoutes = ["/", "/new-verification"];

/**
 * Routes for Authentication
 */

export const authRoutes = [
  "/login",
  "/register",
  "/error",
  "/reset",
  "/new-password",
];

/**
 * The prefix for authentication routes
 */

export const apiAuthPrefix = "/api/auth";

/**
 * Login path for logged in users
 */

export const DEFAULT_LOGIN_REDIRECT = "/dashboard";
