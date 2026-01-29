// Main application file

// Import task functions
import { addTask, getAllTasks, completeTask } from './task.js';

// 1. Add some tasks
console.log(addTask('Buy groceries', 'medium', '2026-12-01')); // Valid
console.log(addTask('Do', 'high', '2023-01-01'));              // Invalid title
console.log(addTask('Clean house', 'urgent', '2026-11-01'));  // Invalid priority
console.log(addTask('Pay bills', 'low', '2022-05-01'));       // Invalid due date

// 2. Display all tasks
console.log(getAllTasks());

// 3. Complete a task
console.log(completeTask(0)); // Valid index
console.log(completeTask(5)); // Invalid index

// 4. Display all tasks again
console.log(getAllTasks());
