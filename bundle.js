!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){document.getElementById("list");function n(){u.push(r()),d()}function o(e){index=u.indexOf(e.target.listToDelete),u.splice(index,1),d()}function d(){for(localStorage.setItem("to-do-storage",JSON.stringify(u));document.body.firstChild;)document.body.removeChild(document.body.firstChild);let e=document.createElement("div");e.innerHTML="+",e.classList="newListButton",document.body.appendChild(e),e.addEventListener("click",n),u.forEach(e=>{!function(e){let t=document.createElement("form");t.classList="list",document.body.appendChild(t);let n=document.createElement("div");n.innerHTML="X",n.classList="delete-list-button",n.listToDelete=e,n.addEventListener("click",o),t.appendChild(n);let d=document.createElement("input");d.value=e.title,d.id="title",d.onchange=(()=>{e.title=d.value}),t.appendChild(d),t.appendChild(document.createElement("br"));let r=document.createElement("input");r.placeholder="Add an item",r.inputList=e,r.addEventListener("keypress",l),t.appendChild(r),e.items.forEach(n=>(function(e,t,n){let o=document.createElement("div");o.classList="itemDiv",e.appendChild(o);let d=document.createElement("input");d.type="checkbox",d.checked=n.state,d.checked&&o.classList.toggle("checked");d.onclick=(()=>{n.state=d.checked,o.classList.toggle("checked")});let l=document.createElement("input");l.type="text",l.value=n.content;let r=document.createElement("input");r.type="date",r.valueAsDate=new Date(n.dueDate);let a=document.createElement("select"),u=["low","medium","high"];for(i=0;i<u.length;i++){let e=new Option(u[i]);a.options.add(e)}a.selectedIndex=u.indexOf(n.priority);let s=document.createElement("div");s.innerHTML="X",s.classList="delete",s.delButtonList=t,s.addEventListener("click",c),o.appendChild(d),o.appendChild(l),o.appendChild(r),o.appendChild(a),o.appendChild(s),l.onchange=(()=>{n.content=l.value}),r.onchange=(()=>{n.dueDate=r.value}),a.onchange=(()=>{n.priority=u[a.selectedIndex]})})(t,e,n))}(e)})}function l(e){13==e.keyCode&&(e.preventDefault(),e.target.inputList.addItem(!1,this.value),d(),this.value="",this.placeholder="Add another item")}function c(e){e.target.delButtonList.removeItem(this.parentNode.children[1].value),d()}const r=(e="Untitled List",t="",n=[])=>{return{title:e,description:t,items:n,addItem:(e,t)=>{n.push(a(!1,t))},removeItem:e=>{index=n.indexOf(n.find(t=>t.content==e)),n.splice(index,1)}}},a=(e=!1,t="New to-do item",n=new Date,i="low")=>({state:e,content:t,dueDate:n,priority:i});let u;localStorage.getItem("to-do-storage")?(u=JSON.parse(localStorage.getItem("to-do-storage")),console.log(u)):(u=[],console.log(u),u.push(r()),u[0].addItem()),d()}]);