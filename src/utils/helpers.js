```javascript
// src/utils/helpers.js

/**
 * Helper function to sanitize user input to prevent security threats.
 * @param {string} input - The user input to sanitize.
 * @return {string} - The sanitized user input.
 */
export function sanitizeInput(input) {
  const sanitizedInput = input.replace(/<[^>]*>?/gm, '');
  return sanitizedInput;
}

/**
 * Helper function to calculate progress percentage for the progress bar.
 * @param {number} current - The current step in the journey.
 * @param {number} total - The total number of steps in the journey.
 * @return {number} - The progress percentage.
 */
export function calculateProgress(current, total) {
  const progress = (current / total) * 100;
  return progress;
}

/**
 * Helper function to validate email for the waitlist signup.
 * @param {string} email - The email to validate.
 * @return {boolean} - Whether the email is valid or not.
 */
export function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
```