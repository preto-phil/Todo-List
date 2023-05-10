export default function buildCard() {
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
    });
    createDiv.appendChild(deleteDiv);
  }

  cardTitle();
  cardDescription();
  cardDate();
  cardDelete();

}

