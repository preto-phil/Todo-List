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

function addTodoClick() {
  const addTodoBtn = document.getElementById('add-todo');
  addTodoBtn.addEventListener('click', () => {
    formValidation();
  })
}

addTodoClick();

let createTodo = () => {
  const contentDiv = document.getElementById('content');
  contentDiv.replaceChildren();
  data.map((x, y) => {
    return (contentDiv.innerHTML += `
    <div id=${y} class="createdDiv">
      <div class="titleDiv">${x.title}</div>
      <div class="desDiv">${x.description}</div>
      <div class="dateDiv">${x.date}</div>

      <div class="options">
        <button onclick="editTodo(this)" class="edit">
          <i class="fas fa-edit"></i>
        </button>
        <button onclick="deleteTodo(this)" class="dlt">
          <i class="fas fa-trash-alt dlt"></i>
        </button>
      </div>
    </div>
    `);
  });
};

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



// Add from local storage
(() => {
  data = JSON.parse(localStorage.getItem('data')) || [];
  console.log(data);
  createTodo()
})();


// Click on github icon to open github
function openGithub() {
  const githubIcon = document.getElementById('github-icon');
  githubIcon.addEventListener('click', () => {
    window.open('https://github.com/preto-phil');
});
}

openGithub();



/// Form Validation

function formValidation() {
  const titleMsg = document.getElementById('title-msg');
  const descriptionMsg = document.getElementById('description-msg');
  const dateMsg = document.getElementById('date-msg');

  if (title.value === '') {
    titleMsg.innerHTML = "Add a title";
  }
  
  if (description.value === '') {
    descriptionMsg.innerHTML = "Add a Description";
  } 
  
  if (date.value === '') {
    dateMsg.innerHTML = "Add a Date";
  } 
  
  if (title.value !== '' && description.value !== '' && date.value !== '') {
    titleMsg.innerHTML = "";
    descriptionMsg.innerHTML = "";
    dateMsg.innerHTML = "";
    storeData();
    createTodo();
    resetForm();
  }
} 