const form = document.getElementById("list");
const title = document.getElementById("title");
const newItem = document.getElementById("new-item");
// console.log(title);
// console.log(newItem);

newItem.addEventListener('keypress', saveItem);

function saveItem(e) {
  if (e.keyCode == 13) {
      e.preventDefault();
      createNewItem(this.value);
      this.value = "";
      this.placeholder = "Add another item";
  }
}

function createNewItem(text) {
  let item = document.createElement('div');
  let input = document.createElement('input');
  let deleteButton = document.createElement('div');
  input.value = text;
  form.appendChild(item);
  deleteButton.innerHTML = "X";
  deleteButton.classList = "delete";
  deleteButton.addEventListener('click', deleteItem);
  item.appendChild(input);
  item.appendChild(deleteButton);
}

// remove and item:
function deleteItem() {
  this.parentNode.parentNode.removeChild(this.parentNode);
}


// const listFactory = (title="Untitled List", description="", items=[]) => {
//   const addItem = () => "function to add item";
//   const removeItem = () => "funtion to remove item";
//   return { title, description, items, addItem, removeItem }
// };
//
//
// const firstList = listFactory();
// // console.log(firstList);
//


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
