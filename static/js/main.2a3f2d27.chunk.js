(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{17:function(e,t,n){},32:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(26),r=n.n(s),l=(n(32),n(17),n(0)),o=function(){return Object(l.jsx)("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(l.jsxs)("div",{class:"container-fluid",children:[Object(l.jsx)("a",{class:"navbar-brand",href:"#",children:"Eiccin"}),Object(l.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(l.jsxs)("div",{class:"navbar-nav",children:[Object(l.jsx)("a",{class:"nav-link",href:"/myfirstreact",children:"Home"}),Object(l.jsx)("a",{class:"nav-link",href:"/myfirstreact/employee",children:"Employee"}),Object(l.jsx)("a",{class:"nav-link",href:"/myfirstreact/add",children:"Add Employees"})]})})]})})},i=n(15),j=n(2),d=n.p+"static/media/logo.6ce24c58.svg",b=n(3),m=n(4),h=n(7),u=n(6),p=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(b.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={count:0},e.handleIncrement=function(){e.setState({count:e.state.count+1})},e}return Object(m.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{className:this.getClassBadge(),children:this.formatCount()}),Object(l.jsx)("button",{onClick:this.handleIncrement,className:"btn btn-secondary btn-sm",children:"Increment"})]})}},{key:"getClassBadge",value:function(){var e="badge m-2 bg-";return e+=0===this.state.count?"warning":"primary"}},{key:"formatCount",value:function(){return 0===this.state.count?Object(l.jsx)("h1",{children:"Zero"}):this.state.count}}]),n}(c.Component),O=p;var f=function(e){return Object(l.jsx)("div",{children:Object(l.jsxs)("p",{children:["Hello, ",e.name,"! Welcome to the offical list of employees"]})})};var x=function(){return Object(l.jsx)("div",{className:"Home",children:Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsx)("h1",{children:"Employee List"}),Object(l.jsx)("img",{src:d,className:"App-logo",alt:"logo"}),Object(l.jsx)(f,{name:"Idan"}),Object(l.jsx)("h4",{children:"Hello! I'm a Counter"}),Object(l.jsx)(O,{})]})})},v=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{class:"fw-bold",children:"Page not found."})})},y=n(5),g=(n(53),n(27)),N=n.n(g).a.create({baseURL:"http://localhost:8080/api/v1",headers:{"Content-Type":"application/json"}}),C=function(){return N.get("/employees")},k=function(e){return N.post("/employees",e)},w=function(e){return N.put("/employees",e)},I=function(e){return N.get("/employees/".concat(e))},A=function(e){return N.delete("/employees/".concat(e))},E=function(){var e=Object(c.useState)([]),t=Object(y.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){s()}));var s=function(){C().then((function(e){a(e.data)})).catch((function(e){console.log("something went wrong")}))};return Object(l.jsxs)("div",{id:"employee",children:[Object(l.jsx)("h3",{className:"d-flex p-2 bd-highlight justify-content-center",children:"List of employees"}),Object(l.jsxs)("table",{className:"container table table-hover table-dark table-striped",border:"2",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{className:"table table-primary",children:[Object(l.jsx)("td",{children:"Name"}),Object(l.jsx)("td",{children:"Department"}),Object(l.jsx)("td",{children:"Location"}),Object(l.jsx)("td",{children:"Action"})]})}),Object(l.jsx)("tbody",{children:n.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.name}),Object(l.jsx)("td",{children:e.department}),Object(l.jsx)("td",{children:e.location}),Object(l.jsx)("td",{children:Object(l.jsxs)("div",{children:[Object(l.jsx)(i.b,{className:"btn btn-primary",to:"/edit/".concat(e.employeeId),children:"Update"}),Object(l.jsx)("button",{onClick:function(t){return n=e.employeeId,void A(n).then((function(e){console.log("successfully deleted the employee"),s()})).catch((function(e){console.log("something went wrong",e)}));var n},className:"btn btn-danger",children:"Delete"})]})})]},e.employeeId)}))})]})]})},L=function(){var e=Object(c.useState)(""),t=Object(y.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(y.a)(s,2),o=r[0],i=r[1],d=Object(c.useState)(""),b=Object(y.a)(d,2),m=b[0],h=b[1],u=Object(j.f)(),p=Object(j.g)().employeeId;Object(c.useEffect)((function(){p&&I(p).then((function(e){a(e.data.name),h(e.data.department),i(e.data.location)})).catch((function(e){console.log("error!")}))}),[]);return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h3",{children:"Add Employees"}),Object(l.jsxs)("form",{children:[Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{for:"name",className:"form-label",children:"Name"}),Object(l.jsx)("input",{type:"text",className:"form-control",value:n,id:"name",placeholder:"Add employee name",onChange:function(e){a(e.target.value)}})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{for:"department",className:"form-label",children:"Department"}),Object(l.jsx)("input",{type:"text",className:"form-control",value:o,id:"department",placeholder:"Add department",onChange:function(e){i(e.target.value)}})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{for:"location",className:"form-label",children:"Location"}),Object(l.jsx)("input",{type:"text",className:"form-control",value:m,id:"location",placeholder:"Add Location",onChange:function(e){h(e.target.value)}})]}),Object(l.jsx)("button",{type:"save",className:"btn btn-primary",onClick:function(e){return function(e){e.preventDefault(),p?w({employeeId:p,name:n,department:o,location:m}).then((function(e){console.log("Updated an employee!",e.data),u("/employee")})).catch((function(e){console.error("something went wrong!")})):k({name:n,department:o,location:m}).then((function(e){console.log("added new employee!",e.data),u("/employee")})).catch((function(e){console.error("something went wrong!")}))}(e)},children:"Save"})]})]})},S=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(i.a,{children:Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{exact:!0,path:"/myfirstreact",element:Object(l.jsx)(x,{})}),Object(l.jsx)(j.a,{exact:!0,path:"/myfirstreact/employee",element:Object(l.jsx)(E,{})}),Object(l.jsx)(j.a,{exact:!0,path:"/myfirstreact/add",element:Object(l.jsx)(L,{})}),Object(l.jsx)(j.a,{exact:!0,path:"/myfirstreact/edit/:employeeId",element:Object(l.jsx)(L,{})}),Object(l.jsx)(j.a,{exact:!0,path:"*",element:Object(l.jsx)(v,{})})]})})})};var D=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(o,{}),Object(l.jsx)(S,{})]})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};n(52);r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(D,{})}),document.getElementById("root")),B()}},[[54,1,2]]]);
//# sourceMappingURL=main.2a3f2d27.chunk.js.map