import './styles.css';

import { Todo, TodoList } from "./classes" // Si no se especifica busca "index.js" por defecto
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

// todoList.todos.forEach(todo =>crearTodoHtml(todo));
todoList.todos.forEach(crearTodoHtml); // Cuando hay un solo argumento se puede hacer de esta manera

console.log('todos', todoList.todos);