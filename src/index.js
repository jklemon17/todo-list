let allLists = [];

let form = document.getElementById("list");

function addToAllLists() {
  allLists.push(listFactory());
  displayAll();
  // console.log(allLists);
}

function deleteList(e) {
  index = allLists.indexOf(e.target.listToDelete);
  allLists.splice(index, 1);
  displayAll();
}

function displayAll() {
// remove all forms each time to "refresh the page"
  while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild);
  }

  let newListButton = document.createElement('div');
  newListButton.innerHTML = "+";
  newListButton.classList = "newListButton";
  document.body.appendChild(newListButton);
  newListButton.addEventListener('click', addToAllLists);

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
  console.log(deleteListButton.listToDelete);
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

      // IMPORTANT EXAMPLE!!!!
      // var someInput = document.querySelector('input');
      // someInput.addEventListener('click', myFunc, false);
      // someInput.myParam = 'This is my parameter';
      // function myFunc(evt)
      // {
      //   window.alert( evt.target.myParam );
      // }


  form.appendChild(input);
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

  let contentInput = document.createElement('input');
  contentInput.type = "text";
  contentInput.value = item.content;

  let dateInput = document.createElement('input');
  dateInput.type = "date";
  // Below was suuuper annoying but required for dates:
  dateInput.valueAsDate = new Date(item.dueDate);

  let prioritySelect = document.createElement('select');
  let priorities = ['low', 'medium', 'high'];
  for (i = 0; i < priorities.length; i++) {
     let p = new Option(priorities[i]);
     prioritySelect.options.add(p);
  }
  prioritySelect.selectedIndex = priorities.indexOf(item.priority);

  let deleteButton = document.createElement('div');
  deleteButton.innerHTML = "X";
  deleteButton.classList = "delete";
  deleteButton.delButtonList = list;
  deleteButton.addEventListener('click', deleteItem);

  itemDiv.appendChild(checkboxInput);
  itemDiv.appendChild(contentInput);
  itemDiv.appendChild(dateInput);
  itemDiv.appendChild(prioritySelect);
  itemDiv.appendChild(deleteButton);

  contentInput.onchange = () => { item.content = contentInput.value; };
  dateInput.onchange = () => { item.dueDate = dateInput.value; };
  prioritySelect.onchange = () => { item.priority = priorities[prioritySelect.selectedIndex] };
}

function saveItem(e) {
  if (e.keyCode == 13) {
      e.preventDefault();
      e.target.inputList.addItem(false, this.value);
      displayAll();
      // create a new blank at top of page:
      this.value = "";
      this.placeholder = "Add another item";
  }
}

function deleteItem(e) {
  // children[1] is the second element inside the itemDiv (the text input)
  e.target.delButtonList.removeItem(this.parentNode.children[1].value);
  displayAll();
}




const listFactory = (title="Untitled List", description="", items=[]) => {
  const addItem = (state, content) => {
     items.push(itemFactory(false, content));
  }
  const removeItem = (content) => {
    index = items.indexOf(items.find(x => x.content == content))
    items.splice(index, 1)
  }
  return { title, description, items, addItem, removeItem }
};



const itemFactory = (state=false, content="New to-do item", dueDate=new Date(), priority="low" ) => {
  return { state, content, dueDate, priority }
};

allLists.push(listFactory());

allLists[0].addItem();

displayAll();
