// Input validation module

// 1. Validate task title (not empty, min 3 chars)
function validateTitle(title) {
  if (title.length === 0) {
    return 'Title cannot be empty';   // error message
  }
  if (title.length < 3) {
    return 'Title must be at least 3 characters long'; // error message
  }
  return true; // valid
}

// 2. Validate priority (must be: low, medium, high)
function validatePriority(priority) {
  const validPriorities = ['low', 'medium', 'high'];
  return validPriorities.includes(priority); // true or false
}

// 3. Validate due date (must be future date)
function validateDueDate(date) {
  const now = new Date();          // current date
  const dueDate = new Date(date); // user given date
  return dueDate > now;           // must be in future
}

// Export validation functions
export { validateTitle, validatePriority, validateDueDate };
