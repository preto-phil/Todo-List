import './style.css';
import openGithub from './github';

// Dropdown for add

function toggleNewTodo() {
  const newTodoBtn = document.getElementById('new-todo-btn');
  newTodoBtn.addEventListener('click', () => {
    const add = document.getElementById('add');
    if (add.style.display === 'none') {
      add.style.display = 'grid';
      newTodoBtn.innerText = 'Close'
    } else if (add.style.display === 'grid') {
      add.style.display = 'none';
    }
  });
}

toggleNewTodo();


// Click on github icon to open github
openGithub();
