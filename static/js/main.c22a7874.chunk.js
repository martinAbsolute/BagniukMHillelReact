(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),o=n(8),s=n.n(o),r=(n(15),n(6)),l=n(1),c=n(2),u=n(4),d=n(3),m=n(5),h=(n(16),function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(u.a)(this,Object(d.a)(e).call(this,t))).startEdit=function(){n.setState({isBeingEdited:!0})},n.onChange=function(t){n.setState({editField:t.target.value})},n.confirmEdit=function(t){t.preventDefault(),null!==n.state.editField&&n.props.editChild(t.target.parentNode.getAttribute("data-index"),n.state.editField),n.setState({isBeingEdited:!1})},n.state={isBeingEdited:!1,editField:null},n}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this,e={display:this.state.isBeingEdited?"none":""},n={display:this.state.isBeingEdited?"":"none"};return a.a.createElement("div",{"data-index":this.props.index},a.a.createElement("li",{style:e},this.props.item),a.a.createElement("button",{onClick:this.props.onDelete},"X"),a.a.createElement("button",{onClick:this.startEdit,style:e},"Edit"),a.a.createElement("input",{onChange:this.onChange,placeholder:this.props.item,style:n,type:"text",onKeyDown:function(e){return"Enter"===e.key?t.confirmEdit(e):null}}),a.a.createElement("button",{onClick:this.confirmEdit,style:n},"Confirm"))}}]),e}(a.a.Component)),f=function(t){function e(){var t;return Object(l.a)(this,e),(t=Object(u.a)(this,Object(d.a)(e).call(this))).onChange=function(e){t.setState({inputField:e.target.value})},t.onSubmit=function(e){e.preventDefault(),t.setState({inputField:"",items:[].concat(Object(r.a)(t.state.items),[t.state.inputField])},function(){localStorage.setItem("items",JSON.stringify(t.state.items))})},t.editChild=function(e,n){var i=t.state.items;i[e]=n,t.setState({items:i},function(){localStorage.setItem("items",JSON.stringify(t.state.items))})},t.onDelete=function(e){var n=t.state.items;n.splice(e.target.parentNode.getAttribute("data-index"),1),t.setState({items:n},function(){localStorage.setItem("items",JSON.stringify(t.state.items))})},t.fetchJSON=function(e){e.preventDefault();for(var n=0;n<10;n++){var i=Math.floor(200*Math.random()+1);fetch("https://jsonplaceholder.typicode.com/todos/"+i).then(function(t){return t.json()}).then(function(e){return t.setState({items:[].concat(Object(r.a)(t.state.items),[e.title])},function(){localStorage.setItem("items",JSON.stringify(t.state.items))})}).catch(function(t){return"There was an error with the Fetch request: "+t})}},t.state={inputField:"",items:[]},t}return Object(m.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){null!==localStorage.getItem("items")&&this.setState({items:JSON.parse(localStorage.getItem("items"))})}},{key:"render",value:function(){var t=this;return a.a.createElement("div",{style:{textAlign:"center"}},a.a.createElement("form",{className:"App",onSubmit:this.onSubmit},a.a.createElement("input",{value:this.state.inputField,onChange:this.onChange}),a.a.createElement("button",null,"Submit"),a.a.createElement("hr",null),a.a.createElement("button",{onClick:this.fetchJSON},"Load 10 random placeholder posts from JSONplaceholder")),a.a.createElement("br",null),a.a.createElement("div",{className:"List"},a.a.createElement("ul",null,this.state.items.map(function(e,n){return a.a.createElement(h,{key:n,editChild:t.editChild,index:n,item:e,onDelete:t.onDelete})}))))}}]),e}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,n){t.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.c22a7874.chunk.js.map