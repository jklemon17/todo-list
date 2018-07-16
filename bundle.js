/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/DOM_display.js":
/*!****************************!*\
  !*** ./src/DOM_display.js ***!
  \****************************/
/*! exports provided: displayAll, displayList, showNewItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayAll\", function() { return displayAll; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayList\", function() { return displayList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showNewItem\", function() { return showNewItem; });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _items_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items.js */ \"./src/items.js\");\n/* harmony import */ var _lists_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lists.js */ \"./src/lists.js\");\n\n\n\n\n\nfunction displayAll() {\n  localStorage.setItem('to-do-storage', JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"allLists\"]));\n// remove all forms each time to \"refresh the page\"\n  while (document.body.firstChild) {\n    document.body.removeChild(document.body.firstChild);\n  }\n\n  let newListButton = document.createElement('div');\n  newListButton.innerHTML = \"+\";\n  newListButton.classList = \"newListButton\";\n  document.body.appendChild(newListButton);\n  newListButton.addEventListener('click', _lists_js__WEBPACK_IMPORTED_MODULE_2__[\"newList\"]);\n\n  _index_js__WEBPACK_IMPORTED_MODULE_0__[\"allLists\"].forEach(list => { displayList(list); });\n}\n\n\n\nfunction displayList(list) {\n\n  let form = document.createElement('form');\n  form.classList = \"list\";\n  document.body.appendChild(form);\n\n  let deleteListButton = document.createElement('div');\n  deleteListButton.innerHTML = \"X\";\n  deleteListButton.classList = \"delete-list-button\";\n  deleteListButton.listToDelete = list;\n  deleteListButton.addEventListener('click', _lists_js__WEBPACK_IMPORTED_MODULE_2__[\"deleteList\"]);\n  form.appendChild(deleteListButton);\n\n  //should be separate displayTitle function\n  let titleInput = document.createElement('input');\n  titleInput.value = list.title;\n  titleInput.id = \"title\";\n  titleInput.onchange = () => { list.title = titleInput.value; };\n  form.appendChild(titleInput);\n\n  form.appendChild(document.createElement('br'));\n\n  //should be separate displayInput function\n  let input = document.createElement('input');\n  input.placeholder = \"Add an item\";\n  input.inputList = list;\n  input.addEventListener('keypress', _items_js__WEBPACK_IMPORTED_MODULE_1__[\"saveItem\"]);\n  input.addEventListener('blur', _items_js__WEBPACK_IMPORTED_MODULE_1__[\"saveItem\"]);\n  form.appendChild(input);\n\n      // IMPORTANT EXAMPLE!!!!\n      // var someInput = document.querySelector('input');\n      // someInput.addEventListener('click', myFunc, false);\n      // someInput.myParam = 'This is my parameter';\n      // function myFunc(evt)\n      // {\n      //   window.alert( evt.target.myParam );\n      // }\n\n\n  list.items.forEach(item => showNewItem(form, list, item));\n}\n\n\n\nfunction showNewItem(form, list, item) {\n  let itemDiv = document.createElement('div');\n  itemDiv.classList = \"itemDiv\";\n  form.appendChild(itemDiv);\n\n  let checkboxInput = document.createElement('input');\n  checkboxInput.type = \"checkbox\";\n  checkboxInput.checked = item.state;\n  if (checkboxInput.checked) {\n    itemDiv.classList.toggle(\"checked\");\n  }\n  checkboxInput.onclick = () => {\n    item.state = checkboxInput.checked;\n    itemDiv.classList.toggle(\"checked\");\n  };\n  itemDiv.appendChild(checkboxInput);\n\n\n  let contentInput = document.createElement('input');\n  contentInput.type = \"text\";\n  contentInput.value = item.content;\n  contentInput.onchange = () => { item.content = contentInput.value; };\n  itemDiv.appendChild(contentInput);\n\n\n  let dateInput = document.createElement('input');\n  dateInput.type = \"date\";\n  // Below was suuuper annoying but required for dates:\n  dateInput.valueAsDate = new Date(item.dueDate);\n  dateInput.onchange = () => { item.dueDate = dateInput.value; };\n  itemDiv.appendChild(dateInput);\n\n\n  let prioritySelect = document.createElement('select');\n  let priorities = ['low', 'medium', 'high'];\n  for (let i = 0; i < priorities.length; i++) {\n     let p = new Option(priorities[i]);\n     prioritySelect.options.add(p);\n  }\n  prioritySelect.selectedIndex = priorities.indexOf(item.priority);\n  prioritySelect.onchange = () => { item.priority = priorities[prioritySelect.selectedIndex] };\n  itemDiv.appendChild(prioritySelect);\n\n\n  let deleteButton = document.createElement('div');\n  deleteButton.innerHTML = \"X\";\n  deleteButton.classList = \"delete\";\n  deleteButton.delButtonList = list;\n  deleteButton.addEventListener('click', _items_js__WEBPACK_IMPORTED_MODULE_1__[\"deleteItem\"]);\n  itemDiv.appendChild(deleteButton);\n\n}\n\n\n\n\n\n//# sourceURL=webpack:///./src/DOM_display.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: allLists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"allLists\", function() { return allLists; });\n/* harmony import */ var _lists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lists */ \"./src/lists.js\");\n/* harmony import */ var _DOM_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM_display */ \"./src/DOM_display.js\");\n\n\n// import { loadLocalStorage } from \"./storage\";\n\n\"use strict\";\n\nlet allLists;\n\n// if previous list exists in browser storage, load it:\nif (localStorage.getItem('to-do-storage')) {\n  allLists = JSON.parse(localStorage.getItem('to-do-storage'));\n  allLists = allLists.map(list => Object(_lists__WEBPACK_IMPORTED_MODULE_0__[\"listFactory\"])(list.title, list.description, list.items ));\n} else {\n  // else create a default starting list:\n  allLists = [];\n  allLists.push(Object(_lists__WEBPACK_IMPORTED_MODULE_0__[\"listFactory\"])());\n  allLists[0].addItem();\n}\n// loadLocalStorage();\n\n\nObject(_DOM_display__WEBPACK_IMPORTED_MODULE_1__[\"displayAll\"])();\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/items.js":
/*!**********************!*\
  !*** ./src/items.js ***!
  \**********************/
/*! exports provided: itemFactory, saveItem, deleteItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"itemFactory\", function() { return itemFactory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveItem\", function() { return saveItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteItem\", function() { return deleteItem; });\n/* harmony import */ var _DOM_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM_display */ \"./src/DOM_display.js\");\n\n\nconst itemFactory = (state=false, content=\"New to-do item\", dueDate=new Date(), priority=\"low\" ) => {\n  return { state, content, dueDate, priority }\n};\n\n\nfunction saveItem(e) {\n  if (e.keyCode == 13 || e.type == 'blur') {\n    e.target.removeEventListener('blur', saveItem);\n    e.target.removeEventListener('keypress', saveItem);\n    // e.preventDefault();\n    e.target.inputList.addItem(false, this.value);\n    Object(_DOM_display__WEBPACK_IMPORTED_MODULE_0__[\"displayAll\"])();\n    // create a new blank at top of list:\n    this.value = \"\";\n    this.placeholder = \"Add another item\";\n  }\n}\n\nfunction deleteItem(e) {\n  // children[1] is the second element inside the itemDiv (the text input)\n  e.target.delButtonList.removeItem(this.parentNode.children[1].value);\n  Object(_DOM_display__WEBPACK_IMPORTED_MODULE_0__[\"displayAll\"])();\n}\n\n\n\n\n\n//# sourceURL=webpack:///./src/items.js?");

/***/ }),

/***/ "./src/lists.js":
/*!**********************!*\
  !*** ./src/lists.js ***!
  \**********************/
/*! exports provided: listFactory, newList, deleteList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listFactory\", function() { return listFactory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newList\", function() { return newList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteList\", function() { return deleteList; });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _DOM_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM_display */ \"./src/DOM_display.js\");\n/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./items */ \"./src/items.js\");\n\n\n\n\n\nconst listFactory = (title=\"Untitled List\", description=\"\", items=[]) => {\n  let addItem = (state, content) => {\n    items.push(Object(_items__WEBPACK_IMPORTED_MODULE_2__[\"itemFactory\"])(false, content));\n  }\n  let removeItem = (content) => {\n    let index = items.indexOf(items.find(x => x.content == content))\n    items.splice(index, 1)\n  }\n  return { title, description, items, addItem, removeItem }\n};\n\n\nfunction newList() {\n  _index__WEBPACK_IMPORTED_MODULE_0__[\"allLists\"].push(listFactory());\n  Object(_DOM_display__WEBPACK_IMPORTED_MODULE_1__[\"displayAll\"])();\n}\n\n\nfunction deleteList(e) {\n  let index = _index__WEBPACK_IMPORTED_MODULE_0__[\"allLists\"].indexOf(e.target.listToDelete);\n  _index__WEBPACK_IMPORTED_MODULE_0__[\"allLists\"].splice(index, 1);\n  Object(_DOM_display__WEBPACK_IMPORTED_MODULE_1__[\"displayAll\"])();\n}\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/lists.js?");

/***/ })

/******/ });