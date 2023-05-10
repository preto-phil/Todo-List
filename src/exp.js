import './style.css';
/* import buildCard from './buildCard'; */

const obj = (title, description, date) => {
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
}

/* const task1 = obj('Guitar Practice', 'Practice G an C chord for 15 min, followed by 15min free play', '19:00, 09 May 2013');

task1.getTitle();
task1.getDescription();
task1.getDate();
task1.getCard(); */




//// Experimental Section

function newTodoDiv() {
  const newTodo = document.getElementById('new-todo');
  newTodo.addEventListener('click', () => {
    const add = document.getElementById('add');
    add.style.display = 'grid';
  });
}

newTodoDiv();




/* const addTodo = document.getElementById('add-todo');
addTodo.addEventListener('click', () => {
  console.log(title.value);
  console.log(description.value);
  console.log(date.value);
}) */

const title = document.getElementById('title');
const description = document.getElementById('description');
const date = document.getElementById('date');

function buildCard() {
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
  

  cardTitle();
  cardDescription();
  cardDate();


}

const addTodo = document.getElementById('add-todo');
addTodo.addEventListener('click', () => {
  
/*   const task = obj(title.value, description.value, date.value); */
/*   task.getTitle();
  task.getDescription();
  task.getDate();
  task.getCard(); */

  buildCard();
});
