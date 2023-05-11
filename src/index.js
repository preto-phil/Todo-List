import './style.css';
import openGithub from './github';

// Dropdown for add

function newTodoDiv() {
  const newTodo = document.getElementById('new-todo-btn');
  newTodo.addEventListener('click', () => {
    const add = document.getElementById('add');
    add.style.display = 'grid';
  });
}

newTodoDiv();


// Click on github icon to open github
openGithub();
