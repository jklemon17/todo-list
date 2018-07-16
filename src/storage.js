import { allLists } from "./index";
import { listFactory } from "./lists";

// if previous list exists in browser storage, load it:
function loadLocalStorage() {
    if (localStorage.getItem('to-do-storage')) {
      allLists = JSON.parse(localStorage.getItem('to-do-storage'));
      allLists = allLists.map(list => listFactory(list.title, list.description, list.items ));
    } else {
      // else create a default starting list:
      allLists = [];
      allLists.push(listFactory());
      allLists[0].addItem();
    }
}


export { loadLocalStorage }
