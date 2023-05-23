import './style.css';
import openGithub from './github';

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
    createTodo();
    resetForm();
  })
}

let createTodo = () => {
  const contentDiv = document.getElementById('content');
  contentDiv.replaceChildren();
  data.map((x, y) => {
    return (contentDiv.innerHTML += `
    <div id=${y} class="createdDiv">
      <div class="titleDiv">${x.title}</div>
      <div class="desDiv">${x.description}</div>
      <div class="date.div">${x.date}</div>

      <div class="options">
        <i class="fas fa-edit edit"></i>
        <i class="fas fa-trash-alt dlt"></i>
      </div>
    </div>
    `);
  });
};

let editDiv = document.getElementsByClassName("edit");
for (let i = 0; i < editDiv.length; i++) {
  editDiv[i].addEventListener('click', (e) => {
    editTodo(e);
  });
}


const dltDiv = document.getElementsByClassName('dlt');
for (let i = 0; i < dltDiv.length; i++) {
  dltDiv[i].addEventListener('click', (e) => {
    deleteTodo(e);
    createTodo();
  });
}

/// Reset form

function resetForm() {
  title.value = "";
  description.value = "";
  date.value = "";
};

// Delete todo function

function deleteTodo(e) {
  e.parentElement.parentElement.remove();

  data.splice(e.parentElement.parentElement.id, 1);

  localStorage.setItem("data", JSON.stringify(data));

  console.log(data);
};

// Edit todo function

let editTodo = (e) => {
  let selectedTodo = e.parentElement.parentElement;

  title.value = selectedTodo.children[0].innerHTML;
  description.value = selectedTodo.children[1].innerHTML;
  date.value = selectedTodo.children[2].innerHTML;

  deleteTodo(e);
};


// Add todo
addTodo();

// Click on github icon to open github
openGithub();