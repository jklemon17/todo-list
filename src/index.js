const form = document.getElementById("list");
const title = document.getElementById("title");
const newItem = document.getElementById("new-item");

function saveItem(e) {
  if (e.keyCode == 13) {
      e.preventDefault();
      list.addItem(this.value);
      displayList(list);
      this.value = "";
      this.placeholder = "Add another item";
  }
}

// function showNewItem(content, dueDate, priority) {
function showNewItem(item) {
  let itemDiv = document.createElement('div');
  form.appendChild(itemDiv);

  let contentInput = document.createElement('input');
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

  itemDiv.appendChild(contentInput);
  itemDiv.appendChild(dateInput);
  itemDiv.appendChild(prioritySelect);
  itemDiv.appendChild(deleteButton);
  // itemDiv.addEventListener('keypress', item.setContent);
  contentInput.onkeypress = () => { item.content = contentInput.value; };
  dateInput.onchange = () => { item.dueDate = dateInput.value; };
  prioritySelect.onchange = () => { item.priority = priorities[prioritySelect.selectedIndex] };
}

// remove and item:
function deleteItem() {
  list.removeItem(this.parentNode.firstChild.value);
  console.log(list);
  displayList(list);
}

function displayList(list) {
  while (form.firstChild) {
    form.removeChild(form.firstChild);
  }
  //should be separate displayTitle function
  let title = document.createElement('input');
  title.value = list.title;
  form.appendChild(title);

  form.appendChild(document.createElement('br'));

  //should be separate displayInput function
  let input = document.createElement('input');
  input.placeholder = "Add an item";
  input.addEventListener('keypress', saveItem);
  form.appendChild(input);

  list.items.forEach(item => showNewItem(item));
}

const listFactory = (title="Untitled List", description="", items=[]) => {
  const addItem = (content, dueDate, priority) => {
     items.push(itemFactory(content, dueDate, priority));
  }
  const removeItem = (content) => {
    index = items.indexOf(items.find(x => x.content == content))
    items.splice(index, 1)
    // for (i in items) {
    //   if (content == items[i].content) {
    //     items.splice(i, 1);
    //     break;
    //   }
    // }
  }
  return { title, description, items, addItem, removeItem }
};



const itemFactory = (content="New to-do item", dueDate=new Date(), priority="low" ) => {
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
  return { content, dueDate, priority }
};

const list = listFactory("Groceries", "For the party!");

list.addItem("Grab bananas", "2018-08-10", "medium");
list.addItem("Grab napkins", "2018-08-10","low");
list.addItem("Grab cake", "2018-08-10","high");

console.log(list);

displayList(list);
