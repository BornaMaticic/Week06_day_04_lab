document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  const form = document.querySelector('#new-item-form');
form.addEventListener('submit', handleSubmit);

const inputDelete = document.querySelector('#delete');
inputDelete.addEventListener('click', deleteButton);
})

const deleteButton = function () {
  const readingList = document.querySelector('#reading-list');
  readingList.innerHTML = '';
}

const handleSubmit = function (event) {
  event.preventDefault();

  // get values from form
  const inputTitle = event.target.title.value;
  const inputAuthor = event.target.author.value;
  const inputCategory = event.target.category.value;

  const readingList = document.querySelector('#reading-list');

  //create new blank elements
  const readingListItem = document.createElement('section');
  const title = document.createElement('h1');
  const author = document.createElement('h2');
  const category = document.createElement('h3');

  // set the text of new blank elements using values from form (above)
  title.textContent = inputTitle;
  author.textContent = inputAuthor;
  category.textContent = inputCategory;

  readingListItem.appendChild(title);
  readingListItem.appendChild(author);
  readingListItem.appendChild(category);

  readingList.appendChild(readingListItem);

  event.target.reset();
}
