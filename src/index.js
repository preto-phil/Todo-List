import './style.css';
import openGithub from './github';
import buildCard from './buildCard';

let data = [];

// Dropdown for add

function toggleNewTodo() {
  const newTodoBtn = document.getElementById('new-todo-btn');
  newTodoBtn.addEventListener('click', () => {
    const add = document.getElementById('add');
    if (add.style.display === 'none') {
      add.style.display = 'grid';
      newTodoBtn.innerText = 'Close';
    } else if (add.style.display === 'grid') {
      add.style.display = 'none';
      newTodoBtn.innerText = 'New Todo';
    }
  });
}

toggleNewTodo();


// Store data
function storeData() {
  const title = document.getElementById('title');
  const description = document.getElementById('description');
  const date = document.getElementById('date');

  data.push({
    title: title.value,
    description: description.value,
    date: date.value,
  });

  localStorage.setItem('data', JSON.stringify(data));
}


// Build card on add click

function addTodo() {
  const addTodoBtn = document.getElementById('add-todo');
  addTodoBtn.addEventListener('click', () => {
    storeData();
    buildCard();
    resetForm();
  })
}

addTodo();

/// Reset form

function resetForm() {
  title.value = "";
  description.value = "";
  date.value = "";
};





// Click on github icon to open github
openGithub();