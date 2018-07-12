let allLists = [];

let newListButton = document.createElement('div');
newListButton.innerHTML = "+";
newListButton.classList = "newListButton";
document.body.appendChild(newListButton);
// newListButton.addEventListener('click', listFactory);
newListButton.addEventListener('click', addToAllLists);

function addToAllLists() {
  allLists.push(listFactory());
  console.log(allLists);
  // remove all forms each time to "refresh the page"
  while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild);
  }

  allLists.forEach(list => {

    displayList(list);
  });


  let newListButton = document.createElement('div');
  newListButton.innerHTML = "+";
  newListButton.classList = "newListButton";
  document.body.appendChild(newListButton);
  // newListButton.addEventListener('click', listFactory);
  newListButton.addEventListener('click', addToAllLists);
  
}

let form = document.getElementById("list");
// const title = document.getElementById("title");
const newItem = document.getElementById("new-item");


function displayList(list) {

  let form = document.createElement('form');
  document.body.appendChild(form);

  form.classList = "list";

  // remove every item first to clear page:
  while (form.firstChild) {
    form.removeChild(form.firstChild);
  }
  //should be separate displayTitle function
  let titleInput = document.createElement('input');
  titleInput.value = list.title;
  titleInput.id = "title";
  titleInput.onchange = () => { list.title = titleInput.value; };
  form.appendChild(titleInput);

  form.appendChild(document.createElement('br'));

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

  list.items.forEach(item => showNewItem(item, list));
}


function showNewItem(item, list) {
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

      // let input = document.createElement('input');
      // input.placeholder = "Add an item";
      // input.addEventListener('keypress', saveItem);

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
      displayList(e.target.inputList);
      // create a new blank at top of page:
      this.value = "";
      this.placeholder = "Add another item";
  }
}




function deleteItem(e) {
  // children[1] is the second element inside the itemDiv (the text input)
  e.target.delButtonList.removeItem(this.parentNode.children[1].value);
  displayList(e.target.delButtonList);
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
  // const setContent = (content) => {
  //   // if (e.keyCode == 13) {
  //       // e.preventDefault();
  //       console.log(1);
  //       console.log(this);
  //       // console.log(target.value);
  //       // content = this.value;
  //       // displayList(list);
  //   // }
  // }
  // const setDate = (dueDate) => "function to edit the dueDate";
  // const setPriority = (priority) => "function to edit the priority";
  // return { content, dueDate, priority, setContent, setDate, setPriority }
  return { state, content, dueDate, priority }
};

allLists.push(listFactory("Groceries", "For the party!"));

// list.addItem(false, "Grab bananas", "2018-08-10", "medium");
// list.addItem(false, "Grab napkins", "2018-08-10", "low");
// list.addItem(false, "Grab cake", "2018-08-10", "high");

// console.log(list);

// displayList(list);

console.log(allLists);

allLists.forEach(list => displayList(list));
// list.items.forEach(item => showNewItem(item));
