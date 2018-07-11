const form = document.getElementById("list");
// const title = document.getElementById("title");
const newItem = document.getElementById("new-item");

function saveItem(e) {
  if (e.keyCode == 13) {
      e.preventDefault();
      list.addItem(false, this.value);
      displayList(list);
      // create a new blank at top of page:
      this.value = "";
      this.placeholder = "Add another item";
  }
}

// function changeListTitle(item) {
//   let titleInput = document.getElementById("title");
//   titleInput.onkeypress = () => { item.title = titleInput.value; };
// }

// function showNewItem(content, dueDate, priority) {
function showNewItem(item) {
  let itemDiv = document.createElement('div');
  itemDiv.classList = "itemDiv";
  form.appendChild(itemDiv);

  let checkboxInput = document.createElement('input');
  checkboxInput.type = "checkbox";
  checkboxInput.checked = item.state;

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
  deleteButton.addEventListener('click', deleteItem);

  itemDiv.appendChild(checkboxInput);
  itemDiv.appendChild(contentInput);
  itemDiv.appendChild(dateInput);
  itemDiv.appendChild(prioritySelect);
  itemDiv.appendChild(deleteButton);
  // itemDiv.addEventListener('keypress', item.setContent);
  // checkboxInput.onclick = () => checkboxInput.checked.toggle; );
  checkboxInput.onclick = () => {
    item.state = checkboxInput.checked;
    itemDiv.classList.toggle("checked");
  };
  contentInput.onchange = () => { item.content = contentInput.value; };
  dateInput.onchange = () => { item.dueDate = dateInput.value; };
  prioritySelect.onchange = () => { item.priority = priorities[prioritySelect.selectedIndex] };
}

// remove and item:
function deleteItem() {
  // children[1] is the second element inside the itemDiv (the text input)
  list.removeItem(this.parentNode.children[1].value);
  console.log(list);
  displayList(list);
}

function displayList(list) {
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

  //should be separate displayInput function
  let input = document.createElement('input');
  input.placeholder = "Add an item";
  input.addEventListener('keypress', saveItem);
  form.appendChild(input);

  list.items.forEach(item => showNewItem(item));
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

const list = listFactory("Groceries", "For the party!");

list.addItem(false, "Grab bananas", "2018-08-10", "medium");
list.addItem(false, "Grab napkins", "2018-08-10", "low");
list.addItem(false, "Grab cake", "2018-08-10", "high");

console.log(list);

displayList(list);
