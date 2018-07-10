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

function showNewItem(content, dueDate, priority) {
  let item = document.createElement('div');
  form.appendChild(item);

  let contentInput = document.createElement('input');
  contentInput.value = content;

  let dateInput = document.createElement('input');
  dateInput.type = "date";
  dateInput.value = dueDate;

  let prioritySelect = document.createElement('select');
  let priorities = ['low', 'medium', 'high'];
  for (i = 0; i < priorities.length; i++) {
     let p = new Option(priorities[i]);
     prioritySelect.options.add(p);
  }
  prioritySelect.selectedIndex = priorities.indexOf(priority);

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

  list.items.forEach(item => showNewItem(item.content, item.dueDate, item.priority));
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

const itemFactory = (content="New to-do item", dueDate=new Date()+1, priority="low" ) => {
  const setContent = (content) => "function to edit the content";
  const setDate = (dueDate) => "function to edit the dueDate";
  const setPriority = (priority) => "function to edit the priority";
  return { content, dueDate, priority, setContent, setDate, setPriority }
};

const list = listFactory("Groceries", "For the party!");

list.addItem("Grab bananas", new Date("08-10-2018"), "medium");
list.addItem("Grab napkins",new Date("08-10-2018"),"low");
list.addItem("Grab cake",new Date("08-10-2018"),"high");

console.log(list);

displayList(list);
