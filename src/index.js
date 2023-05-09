import './style.css';

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

const task1 = obj('Guitar Practice', 'Practice G an C chord for 15 min, followed by 15min free play', '19:00, 09 May 2013');

task1.getTitle();
task1.getDescription();
task1.getDate();
task1.getCard();




//// Experimental Section

function newTodoDiv() {
  const newTodo = document.getElementById('new-todo');
  newTodo.addEventListener('click', () => {
    const add = document.getElementById('add');
    add.style.display = 'grid';
  });
}

newTodoDiv();


const title = document.getElementById('title');
const description = document.getElementById('description');
const date = document.getElementById('date');

const addTodo = document.getElementById('add-todo');
addTodo.addEventListener('click', () => {
  console.log(title.value);
  console.log(description.value);
  console.log(date.value);
})
