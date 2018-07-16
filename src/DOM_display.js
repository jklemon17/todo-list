import { allLists } from "./index.js";
import { saveItem, deleteItem } from "./items.js";
import { newList, deleteList } from "./lists.js";


function displayAll() {
  localStorage.setItem('to-do-storage', JSON.stringify(allLists));
// remove all forms each time to "refresh the page"
  while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild);
  }

  let newListButton = document.createElement('div');
  newListButton.innerHTML = "+";
  newListButton.classList = "newListButton";
  document.body.appendChild(newListButton);
  newListButton.addEventListener('click', newList);

  allLists.forEach(list => { displayList(list); });
}



function displayList(list) {

  let form = document.createElement('form');
  form.classList = "list";
  document.body.appendChild(form);

  let deleteListButton = document.createElement('div');
  deleteListButton.innerHTML = "X";
  deleteListButton.classList = "delete-list-button";
  deleteListButton.listToDelete = list;
  deleteListButton.addEventListener('click', deleteList);
  form.appendChild(deleteListButton);

  //should be separate displayTitle function
  let titleInput = document.createElement('input');
  titleInput.value = list.title;
  titleInput.id = "title";
  titleInput.onchange = () => { list.title = titleInput.value; };
  form.appendChild(titleInput);

  form.appendChild(document.createElement('br'));

  //should be separate displayInput function
  let input = document.createElement('input');
  input.placeholder = "Add an item";
  input.inputList = list;
  input.addEventListener('keypress', saveItem);
  input.addEventListener('blur', saveItem);
  form.appendChild(input);

      // IMPORTANT EXAMPLE!!!!
      // var someInput = document.querySelector('input');
      // someInput.addEventListener('click', myFunc, false);
      // someInput.myParam = 'This is my parameter';
      // function myFunc(evt)
      // {
      //   window.alert( evt.target.myParam );
      // }


  list.items.forEach(item => showNewItem(form, list, item));
}



function showNewItem(form, list, item) {
  let itemDiv = document.createElement('div');
  itemDiv.classList = "itemDiv";
  form.appendChild(itemDiv);

  let checkboxInput = document.createElement('input');
  checkboxInput.type = "checkbox";
  checkboxInput.checked = item.state;
  if (checkboxInput.checked) {
    itemDiv.classList.toggle("checked");
  }
  checkboxInput.onclick = () => {
    item.state = checkboxInput.checked;
    itemDiv.classList.toggle("checked");
  };
  itemDiv.appendChild(checkboxInput);


  let contentInput = document.createElement('input');
  contentInput.type = "text";
  contentInput.value = item.content;
  contentInput.onchange = () => { item.content = contentInput.value; };
  itemDiv.appendChild(contentInput);


  let dateInput = document.createElement('input');
  dateInput.type = "date";
  // Below was suuuper annoying but required for dates:
  dateInput.valueAsDate = new Date(item.dueDate);
  dateInput.onchange = () => { item.dueDate = dateInput.value; };
  itemDiv.appendChild(dateInput);


  let prioritySelect = document.createElement('select');
  let priorities = ['low', 'medium', 'high'];
  for (let i = 0; i < priorities.length; i++) {
     let p = new Option(priorities[i]);
     prioritySelect.options.add(p);
  }
  prioritySelect.selectedIndex = priorities.indexOf(item.priority);
  prioritySelect.onchange = () => { item.priority = priorities[prioritySelect.selectedIndex] };
  itemDiv.appendChild(prioritySelect);


  let deleteButton = document.createElement('div');
  deleteButton.innerHTML = "X";
  deleteButton.classList = "delete";
  deleteButton.delButtonList = list;
  deleteButton.addEventListener('click', deleteItem);
  itemDiv.appendChild(deleteButton);

}


export { displayAll, displayList, showNewItem }
