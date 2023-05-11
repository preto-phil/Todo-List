import './style.css';
import openGithub from './github';

/* import buildCard from './buildCard'; */

/* const obj = (title, description, date) => {
  const getTitle = () => console.log(`Title: ${title}`);
  const getDescription = () => console.log(`Description: ${description}`);
  const getDate = () => console.log(`Date: ${date}`);
  const getCard = () => console.log(`${title}, ${description}, ${date}`)

  return {
    getTitle,
    getDescription,
    getDate,
    getCard
  }
} */

let idNumber = 0;

const array = [];

function buildCard() {
  const title = document.getElementById('title');
  const description = document.getElementById('description');
  const date = document.getElementById('date');
  
  const contentDiv = document.getElementById('content');

  const createDiv = document.createElement('div');
  createDiv.classList.add('createdDiv');
  contentDiv.appendChild(createDiv);

  function cardTitle() {
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('titleDiv');
    titleDiv.innerText = title.value;
    console.log(title.value);
    createDiv.appendChild(titleDiv);
  }
  
  function cardDescription() {
    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('desDiv');
    descriptionDiv.innerText = description.value;
    console.log(description.value);
    createDiv.appendChild(descriptionDiv);
  }
  
  function cardDate() {
    const dateDiv = document.createElement('div');
    dateDiv.classList.add('dateDiv');
    dateDiv.innerText = date.value;
    console.log(date.value);
    createDiv.appendChild(dateDiv);
  }
  
  // Remove from array
  function cardDelete() {
    const deleteDiv = document.createElement('div');
    deleteDiv.classList.add('deleteDiv');
    deleteDiv.innerText = 'Delete';
    deleteDiv.addEventListener('click', () => {
      createDiv.remove();
      dltArrayObj();
    });
    createDiv.appendChild(deleteDiv);
  }

  cardTitle();
  cardDescription();
  cardDate();
  cardDelete();

}

function dltArrayObj() {
  const index = idNumber;
  console.log(index);
  array.splice(index, 1);
  console.log(array);
}


//// Experimental Section

function newTodoDiv() {
  const newTodo = document.getElementById('new-todo');
  newTodo.addEventListener('click', () => {
    const add = document.getElementById('add');
    add.style.display = 'grid';
  });
}

newTodoDiv();

const addTodo = document.getElementById('add-todo');
addTodo.addEventListener('click', () => {
  buildCard();
  addToArray();
});


function addToArray() {
  const obj = {
    id: idNumber,
    title: title.value,
    description: description.value,
    date: date.value
  }
  
  array.push(obj);
  
  console.log(obj);
  console.log(array);

  idNumber += 1;
}


/* function createArray() {

  for (const x of array) {
    
  }
} */

/* function deleteMode() {
  deleteDiv.addEventListener('click', () => {
    createDiv.remove();
  });
} */

// Gebruik for loop om div cards te maak


// Click on github icon to open github
openGithub();