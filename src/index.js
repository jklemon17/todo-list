const form = document.querySelector("#list");
const title = document.querySelector("#title");
const newItem = document.querySelector("#new-item");
console.log(title);
console.log(newItem);

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
  var element = document.createElement('div');
  element.innerHTML = text;
  form.appendChild(element);
  return element;
}
