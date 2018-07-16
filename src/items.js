import { displayAll } from "./DOM_display";

const itemFactory = (state=false, content="New to-do item", dueDate=new Date(), priority="low" ) => {
  return { state, content, dueDate, priority }
};


function saveItem(e) {
  if (e.keyCode == 13 || e.type == 'blur') {
    e.target.removeEventListener('blur', saveItem);
    e.target.removeEventListener('keypress', saveItem);
    // e.preventDefault();
    e.target.inputList.addItem(false, this.value);
    displayAll();
    // create a new blank at top of list:
    this.value = "";
    this.placeholder = "Add another item";
  }
}

function deleteItem(e) {
  // children[1] is the second element inside the itemDiv (the text input)
  e.target.delButtonList.removeItem(this.parentNode.children[1].value);
  displayAll();
}


export { itemFactory, saveItem, deleteItem }
