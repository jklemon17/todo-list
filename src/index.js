import { listFactory } from "./lists";
import { displayAll } from "./DOM_display";
// import { loadLocalStorage } from "./storage";

"use strict";

let allLists;

// if previous list exists in browser storage, load it:
if (localStorage.getItem('to-do-storage')) {
  allLists = JSON.parse(localStorage.getItem('to-do-storage'));
  allLists = allLists.map(list => listFactory(list.title, list.description, list.items ));
} else {
  // else create a default starting list:
  allLists = [];
  allLists.push(listFactory());
  allLists[0].addItem();
}
// loadLocalStorage();


displayAll();


export { allLists }
