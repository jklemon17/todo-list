!function(e){var t={};function n(i){if(t[i])return t[i].exports;var d=t[i]={i:i,l:!1,exports:{}};return e[i].call(d.exports,d,d.exports,n),d.l=!0,d.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)n.d(i,d,function(t){return e[t]}.bind(null,d));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){let n=[],d=document.createElement("div");d.innerHTML="+",d.classList="newListButton",document.body.appendChild(d),d.addEventListener("click",function e(){n.push(u());console.log(n);for(;document.body.firstChild;)document.body.removeChild(document.body.firstChild);n.forEach(e=>{l(e)});let t=document.createElement("div");t.innerHTML="+";t.classList="newListButton";document.body.appendChild(t);t.addEventListener("click",e)});let o=document.getElementById("list");document.getElementById("new-item");function l(e){let t=document.createElement("form");for(document.body.appendChild(t),t.classList="list";t.firstChild;)t.removeChild(t.firstChild);let n=document.createElement("input");n.value=e.title,n.id="title",n.onchange=(()=>{e.title=n.value}),t.appendChild(n),t.appendChild(document.createElement("br"));let i=document.createElement("input");i.placeholder="Add an item",i.inputList=e,i.addEventListener("keypress",r),t.appendChild(i),e.items.forEach(t=>c(t,e))}function c(e,t){let n=document.createElement("div");n.classList="itemDiv",o.appendChild(n);let d=document.createElement("input");d.type="checkbox",d.checked=e.state,d.checked&&n.classList.toggle("checked"),d.onclick=(()=>{e.state=d.checked,n.classList.toggle("checked")});let l=document.createElement("input");l.type="text",l.value=e.content;let c=document.createElement("input");c.type="date",c.valueAsDate=new Date(e.dueDate);let r=document.createElement("select"),u=["low","medium","high"];for(i=0;i<u.length;i++){let e=new Option(u[i]);r.options.add(e)}r.selectedIndex=u.indexOf(e.priority);let s=document.createElement("div");s.innerHTML="X",s.classList="delete",s.delButtonList=t,s.addEventListener("click",a),n.appendChild(d),n.appendChild(l),n.appendChild(c),n.appendChild(r),n.appendChild(s),l.onchange=(()=>{e.content=l.value}),c.onchange=(()=>{e.dueDate=c.value}),r.onchange=(()=>{e.priority=u[r.selectedIndex]})}function r(e){13==e.keyCode&&(e.preventDefault(),e.target.inputList.addItem(!1,this.value),l(e.target.inputList),this.value="",this.placeholder="Add another item")}function a(e){e.target.delButtonList.removeItem(this.parentNode.children[1].value),l(e.target.delButtonList)}const u=(e="Untitled List",t="",n=[])=>{return{title:e,description:t,items:n,addItem:(e,t)=>{n.push(s(!1,t))},removeItem:e=>{index=n.indexOf(n.find(t=>t.content==e)),n.splice(index,1)}}},s=(e=!1,t="New to-do item",n=new Date,i="low")=>({state:e,content:t,dueDate:n,priority:i});n.push(u("Groceries","For the party!")),console.log(n),n.forEach(e=>l(e))}]);