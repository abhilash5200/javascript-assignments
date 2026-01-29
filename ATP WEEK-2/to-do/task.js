// Task operations module

// Import validation functions
import { validateTitle, validatePriority, validateDueDate } from './validator.js';

const tasks = []; // store all tasks

// 1. Add new task
function addTask(title, priority, dueDate) {

  // Validate title
  if (validateTitle(title) !== true) {
    return validateTitle(title); 
  }

  // Validate priority
  if (!validatePriority(priority)) {
    return 'Invalid priority';
  }

  // Validate due date
  if (!validateDueDate(dueDate)) {
    return 'Invalid due date';
  }

  // If valid, create task object
  const newTask = {
    title,
    priority,
    dueDate,
    completed: false
  };

  // Add to tasks array
  tasks.push(newTask);

  return 'Task added successfully';
}

// 2. Get all tasks
function getAllTasks() {
  return tasks;
}

// 3. Mark task as complete
function completeTask(taskId) {
  // taskId is array index
  if (tasks[taskId]) {
    tasks[taskId].completed = true;
    return 'Task marked as complete';
  } else {
    return 'Invalid task ID';
  }
}

// Export task functions
export { addTask, getAllTasks, completeTask };
