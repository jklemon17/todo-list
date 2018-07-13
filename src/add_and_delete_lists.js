import { allLists, listFactory, displayAll } from "./index"


function newList() {
  allLists.push(listFactory());
  displayAll();
}

function deleteList(e) {
  index = allLists.indexOf(e.target.listToDelete);
  allLists.splice(index, 1);
  displayAll();
}


export { newList, deleteList }
