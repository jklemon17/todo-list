!function(e){var t={};function n(i){if(t[i])return t[i].exports;var d=t[i]={i:i,l:!1,exports:{}};return e[i].call(d.exports,d,d.exports,n),d.l=!0,d.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)n.d(i,d,function(t){return e[t]}.bind(null,d));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function d(){s.push(a()),l()}function o(e){index=s.indexOf(e.target.listToDelete),s.splice(index,1),l()}function l(){for(localStorage.setItem("to-do-storage",JSON.stringify(s));document.body.firstChild;)document.body.removeChild(document.body.firstChild);let e=document.createElement("div");e.innerHTML="+",e.classList="newListButton",document.body.appendChild(e),e.addEventListener("click",d),s.forEach(e=>{!function(e){let t=document.createElement("form");t.classList="list",document.body.appendChild(t);let n=document.createElement("div");n.innerHTML="X",n.classList="delete-list-button",n.listToDelete=e,n.addEventListener("click",o),t.appendChild(n);let d=document.createElement("input");d.value=e.title,d.id="title",d.onchange=(()=>{e.title=d.value}),t.appendChild(d),t.appendChild(document.createElement("br"));let l=document.createElement("input");l.placeholder="Add an item",l.inputList=e,l.addEventListener("keypress",r),l.addEventListener("blur",r),t.appendChild(l),e.items.forEach(n=>(function(e,t,n){let d=document.createElement("div");d.classList="itemDiv",e.appendChild(d);let o=document.createElement("input");o.type="checkbox",o.checked=n.state,o.checked&&d.classList.toggle("checked");o.onclick=(()=>{n.state=o.checked,d.classList.toggle("checked")}),d.appendChild(o);let l=document.createElement("input");l.type="text",l.value=n.content,l.onchange=(()=>{n.content=l.value}),d.appendChild(l);let r=document.createElement("input");r.type="date",r.valueAsDate=new Date(n.dueDate),r.onchange=(()=>{n.dueDate=r.value}),d.appendChild(r);let a=document.createElement("select"),u=["low","medium","high"];for(i=0;i<u.length;i++){let e=new Option(u[i]);a.options.add(e)}a.selectedIndex=u.indexOf(n.priority),a.onchange=(()=>{n.priority=u[a.selectedIndex]}),d.appendChild(a);let s=document.createElement("div");s.innerHTML="X",s.classList="delete",s.delButtonList=t,s.addEventListener("click",c),d.appendChild(s)})(t,e,n))}(e)})}function r(e){13!=e.keyCode&&"blur"!=e.type||(e.target.removeEventListener("blur",r),e.target.removeEventListener("keypress",r),e.target.inputList.addItem(!1,this.value),l(),this.value="",this.placeholder="Add another item")}function c(e){e.target.delButtonList.removeItem(this.parentNode.children[1].value),l()}n.r(t),n.d(t,"allLists",function(){return s}),n.d(t,"listFactory",function(){return a}),n.d(t,"displayAll",function(){return l});const a=(e="Untitled List",t="",n=[])=>{return{title:e,description:t,items:n,addItem:(e,t)=>{n.push(u(!1,t))},removeItem:e=>{index=n.indexOf(n.find(t=>t.content==e)),n.splice(index,1)}}},u=(e=!1,t="New to-do item",n=new Date,i="low")=>({state:e,content:t,dueDate:n,priority:i});let s;localStorage.getItem("to-do-storage")?s=(s=JSON.parse(localStorage.getItem("to-do-storage"))).map(e=>a(e.title,e.description,e.items)):((s=[]).push(a()),s[0].addItem()),l()}]);