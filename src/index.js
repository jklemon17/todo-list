const form = document.getElementById("list");
const title = document.getElementById("title");
const newItem = document.getElementById("new-item");

newItem.addEventListener('keypress', saveItem);

function saveItem(e) {
  if (e.keyCode == 13) {
      e.preventDefault();
      showNewItem(this.value);
      this.value = "";
      this.placeholder = "Add another item";
  }
}

function showNewItem(content, dueDate, priority) {
  let item = document.createElement('div');
  form.appendChild(item);

  let contentInput = document.createElement('input');
  contentInput.value = content;

  let dateInput = document.createElement('input');
  dateInput.type = "date";
  dateInput.value = dueDate;

  let prioritySelect = document.createElement('select');
  prioritySelect.type = "low, medium, urgent";
  prioritySelect.option = priority;

  let deleteButton = document.createElement('div');
  deleteButton.innerHTML = "X";
  deleteButton.classList = "delete";
  deleteButton.addEventListener('click', deleteItem);

  item.appendChild(contentInput);
  item.appendChild(dateInput);
  item.appendChild(prioritySelect);
  item.appendChild(deleteButton);
}

// remove and item:
function deleteItem() {
  this.parentNode.parentNode.removeChild(this.parentNode);
}


const listFactory = (title="Untitled List", description="", items=[]) => {
  const addItem = (content,dueDate,priority) => {
     items.push(itemFactory(content,dueDate,priority));
  }
  const removeItem = () => "funtion to remove item";
  return { title, description, items, addItem, removeItem }
};


const firstList = listFactory("Groceries", "For the party!");


const itemFactory = (content="New to-do item", dueDate=new Date()+1, priority="low" ) => {
  const setContent = (content) => "function to edit the content";
  const setDate = (dueDate) => "function to edit the dueDate";
  const setPriority = (priority) => "function to edit the priority";
  return { content, dueDate, priority, setContent, setDate, setPriority }
};



firstList.addItem("Grab bananas", new Date("08-10-2018"), "medium");
firstList.addItem("Grab napkins",new Date("08-10-2018"),"low");
firstList.addItem("Grab cake",new Date("08-10-2018"),"high");

console.log(firstList);

// function displayLists(list) {
//
//   // create the first two inputs?
//   <input id="title" type="text" placeholder="Untitled"></br>
//   <input id="new-item" type="text" name="new-item" value="" placeholder="Type your first to-do item">
//
//   // add each item:
//   list.items.forEach(createNewItem(text));
// }
//
// displayLists(firstList);
