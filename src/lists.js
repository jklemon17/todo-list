import { allLists } from "./index";
import { displayAll } from "./DOM_display";
import { itemFactory } from "./items";


const listFactory = (title="Untitled List", description="", items=[]) => {
  let addItem = (state, content) => {
    items.push(itemFactory(false, content));
  }
  let removeItem = (content) => {
    let index = items.indexOf(items.find(x => x.content == content))
    items.splice(index, 1)
  }
  return { title, description, items, addItem, removeItem }
};


function newList() {
  allLists.push(listFactory());
  displayAll();
}


function deleteList(e) {
  let index = allLists.indexOf(e.target.listToDelete);
  allLists.splice(index, 1);
  displayAll();
}




export { listFactory, newList, deleteList }
