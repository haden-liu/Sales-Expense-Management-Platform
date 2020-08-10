(this["webpackJsonpexpense-management-app"]=this["webpackJsonpexpense-management-app"]||[]).push([[0],{147:function(e,t,a){e.exports=a.p+"static/media/background.a6aab40b.jpg"},149:function(e,t,a){e.exports=a(328)},154:function(e,t,a){},328:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(39),o=a.n(l),c=(a(154),a(11)),i=a(12),s=a(32);var u=function(){return r.a.createElement(r.a.Fragment,null)},m=a(29),d=a(35);function p(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("input",Object.assign({className:"form-control",autoComplete:"off"},e)))}function b(e){return r.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-secondary"}),e.children)}var f=a(38),h=a.n(f),g=function(e){return h.a.post("/api/expenses/add",e)},v=function(e){return h.a.post("/api/users/signup",e)},E=function(e){return h.a.post("/api/users/login",e)},x=function(){return h.a.get("/api/expenses/")},j=function(e){return h.a.delete("/api/expenses/".concat(e))},C=r.a.createContext({firstname:"",userId:"",setUserId:function(){console.log("hello")},setUserName:function(){console.log("hello")}});var O=function(){var e=Object(n.useState)({firstname:"",lastname:"",email:"",password:"",isSubmitting:!1,errorMessage:null}),t=Object(c.a)(e,2),a=t[0],l=t[1],o=Object(n.useContext)(C),u=o.setUserId,f=o.setUserName,h=Object(s.f)();function g(e){var t=e.target,n=t.name,r=t.value;l(Object(d.a)({},a,Object(m.a)({},n,r)))}return r.a.createElement("div",null,r.a.createElement("p",null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 col-md-offset-3"},r.a.createElement("h2",null,"Sign Up Form"),r.a.createElement("p",null),r.a.createElement("form",null,r.a.createElement(p,{onChange:g,name:"firstname",placeholder:"First name (required)",value:a.firstName}),r.a.createElement(p,{onChange:g,name:"lastname",placeholder:"Last name (required)",value:a.lastName}),r.a.createElement(p,{onChange:g,name:"email",placeholder:"Email (required)",value:a.email}),r.a.createElement(p,{onChange:g,name:"password",placeholder:"Password (required)",value:a.password}),a.errorMessage&&r.a.createElement("span",{className:"form-error"},a.errorMessage),r.a.createElement(b,{disabled:!(a.firstname&&a.lastname&&a.email&&a.password)||a.isSubmitting,onClick:function(e){e.preventDefault(),v({firstname:a.firstname,lastname:a.lastname,email:a.email,password:a.password}).then((function(e){var t=e.data.user.id,a=e.data.user.firstname;u(t),f(a)})).then((function(){return l({firstname:"",lastname:"",email:"",password:""})})).then((function(){h.push("/account")})).catch((function(e){return console.log(e)}))}},a.isSubmitting?"Loading...":"Submit")),r.a.createElement("br",null),r.a.createElement("p",null,"Already have an account? Log in ",r.a.createElement(i.b,{to:"/login"},"here"),".")))))};var y=function(){var e=Object(n.useState)({email:"",password:"",isSubmitting:!1,errorMessage:null}),t=Object(c.a)(e,2),a=t[0],l=t[1],o=Object(n.useContext)(C),u=o.setUserId,f=o.setUserName,h=Object(s.f)();function g(e){var t=e.target,n=t.name,r=t.value;l(Object(d.a)({},a,Object(m.a)({},n,r)))}return r.a.createElement("div",null,r.a.createElement("p",null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 col-md-offset-3"},r.a.createElement("h2",null,"Login Form"),r.a.createElement("p",null),r.a.createElement("form",null,r.a.createElement(p,{onChange:g,name:"email",placeholder:"Email (required)",value:a.email}),r.a.createElement(p,{onChange:g,name:"password",placeholder:"Password (required)",value:a.password}),a.errorMessage&&r.a.createElement("span",{className:"form-error"},a.errorMessage),r.a.createElement(b,{disabled:!(a.email&&a.password)||a.isSubmitting,onClick:function(e){e.preventDefault(),a.email&&a.password&&E({email:a.email,password:a.password}).then((function(e){var t=e.data.user.id,a=e.data.user.firstname;u(t),f(a)})).then((function(){return l({email:"",password:""})})).then((function(){h.push("/account")})).catch((function(e){return console.log(e)}))}},a.isSubmitting?"Loading...":"Submit")),r.a.createElement("br",null),r.a.createElement("p",null,"Haven't signed up with us yet? Click"," ",r.a.createElement(i.b,{to:"/signup"},"here"),".")))))},w=a(13),k=a(339),N=a(334),S=a(14);function F(){var e=Object(w.a)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  .card {\n    margin: 10px;\n  }\n"]);return F=function(){return e},e}var A=S.a.div(F());var P=function(){return r.a.createElement(A,null,[{id:1,img:"assets/img/allclaims.jpg",title:"View Claims",text:"An overview of all expense claims you have created.",buttonText:"View Claims",buttonPath:"/allclaims"},{id:2,img:"assets/img/createclaim.jpg",title:"Create a Claim",text:"Create a new expense claim to receive your money back.",buttonText:"Create a Claim",buttonPath:"/createclaim"},{id:3,img:"assets/img/charts.jpg",title:"View Charts",text:"Visual representations of your expense claims in charts.",buttonText:"View Charts",buttonPath:"/charts"},{id:4,img:"assets/img/logout.jpg",title:"Log out",text:"Finished viewing your expense claims? Return to the homepage.",buttonText:"Log out",buttonPath:"/"}].map((function(e){return r.a.createElement(k.a,{className:"card",key:e.id,style:{width:"18rem"}},r.a.createElement(k.a.Img,{variant:"top",src:e.img}),r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,null,e.title),r.a.createElement(k.a.Text,null,e.text),r.a.createElement(i.b,{to:e.buttonPath},r.a.createElement(N.a,{className:"btn btn-secondary"},e.buttonText))))})))};var I=function(){var e=Object(n.useContext)(C).userName;return r.a.createElement("div",null,r.a.createElement("h2",null,"Hello ",e,","),r.a.createElement("p",null,"Welcome to Expense Management App! Please select one of the options below..."),r.a.createElement(P,null))},T=a(136),z=a(137);function H(){var e=Object(w.a)(['\n  padding: 1rem;\n  table {\n    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;\n    margin-left: -15px;\n    border-spacing: 0;\n    border: solid 1px #dddddd;\n    border-collapse: collapse;\n    width: 900px;\n    tr {\n      :nth-child(even){background-color: #f2f2f2;}\n      :last-child {\n        td {\n          border-bottom: 0;\n        }\n      }\n      :hover {\n        background-color: #ddd;\n        transition: 0.5s;\n      }\n    }\n      border: 1px solid #ddd;\n    }\n    th {\n      padding: 0.1rem 0.5rem 0.5rem 0.5rem;\n      text-align: left;\n      background-color: #996ab8;\n      color: white;\n    }\n    td {\n      margin: 0;\n      padding: 0.5rem;\n      border-bottom: solid 1px #dddddd;\n      border-top: solid 1px #dddddd;\n      :last-child {\n        border-right: 0;\n      }\n    }\n  }\n  .--is-filtering {\n    opacity: 0;\n    transition: 10s;\n  }\n  button {\n    border: solid 1px #9777ad;\n    border-radius: 50%;\n    background: none;\n    color: #9777ad;\n    :hover {\n      background-color: white;\n      transition: 1s;\n  }\n']);return H=function(){return e},e}var L=S.a.div(H());var M=function(e){var t=e.columns,a=e.data,n=Object(z.useTable)({columns:t,data:a}),l=n.getTableProps,o=n.getTableBodyProps,c=n.headerGroups,i=n.rows,s=n.prepareRow;return r.a.createElement(L,null,r.a.createElement("table",l(),r.a.createElement("thead",null,c.map((function(e){return r.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map((function(e){return r.a.createElement("th",e.getHeaderProps(),e.render("Header"))})))}))),r.a.createElement("tbody",o(),i.map((function(e,t){return s(e),r.a.createElement("tr",e.getRowProps(),e.cells.map((function(e){return r.a.createElement("td",e.getCellProps(),e.render("Cell"))})))})))))};var q=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],l=t[1],o=Object(n.useContext)(C).userId;Object(n.useEffect)((function(){x().then((function(e){l(e.data.filter((function(e){return e.creator==o})))}))}),[]);var i=r.a.useMemo((function(){return[{Header:" ",columns:[{Header:"Title",accessor:"title"},{Header:"Date",accessor:"date"},{Header:"Category",accessor:"category"},{Header:"Client to charge",accessor:"clienttocharge"},{Header:"Amount",accessor:"amount"},{Header:"Notes",accessor:"notes"},{Header:" ",Cell:function(e){var t=e.row,a=Object(T.a)(e,["row"]);return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return function(e,t){j(e).then(l(t.data.filter((function(t){return t._id!==e}))))}(t.original._id,a)}},"x"))}}]}]}),[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"All Expense Claims"),r.a.createElement(M,{columns:i,data:a}))},B=a(138),U=a.n(B);a(178);var D=function(){var e=Object(n.useState)({title:"",date:"",category:"",clienttocharge:"",amount:"",notes:""}),t=Object(c.a)(e,2),a=t[0],l=t[1];function o(e){var t=e.target,n=t.name,r=t.value;l(Object(d.a)({},a,Object(m.a)({},n,r)))}var i=Object(n.useContext)(C).userId,u=Object(s.f)();return r.a.createElement("div",null,r.a.createElement("p",null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 col-md-offset-3"},r.a.createElement("h2",null,"Create an expense claim"),r.a.createElement("p",null),r.a.createElement("form",null,r.a.createElement(p,{onChange:o,name:"title",placeholder:"Title (required)",value:a.title}),r.a.createElement("div",{className:"datepicker-wrapper"},r.a.createElement(U.a,{className:"datepicker",onChange:function(e){l(Object(d.a)({},a,{date:e}))},name:"date",placeholderText:"Date (required)",selected:a.date,autoComplete:"off"})),r.a.createElement(p,{onChange:o,name:"category",placeholder:"Category (required)",value:a.category}),r.a.createElement(p,{onChange:o,name:"clienttocharge",placeholder:"Client to charge (required)",value:a.clienttocharge}),r.a.createElement(p,{onChange:o,name:"amount",placeholder:"Amount (required)",value:a.amount}),r.a.createElement(p,{onChange:o,name:"notes",placeholder:"Notes",value:a.notes}),r.a.createElement(b,{onClick:function(e){return e.preventDefault(),void g({title:a.title,date:a.date,category:a.category,clienttocharge:a.clienttocharge,amount:a.amount,notes:a.notes,creator:i}).then((function(){return l({title:"",date:"",category:"",clienttocharge:"",amount:"",notes:""})})).then((function(){u.push("/allclaims")})).catch((function(e){return console.log(e)}))}},"Submit")),r.a.createElement("br",null)))))},R=(a(30),a(65)),V=a(66),_=a.n(V);var G=function(e){e.expenses;var t=Object(n.useState)({labels:["Food","Travel","Peripherals"],datasets:[{data:[25,90,150],backgroundColor:["#FF6384","#36A2EB","#FFCE56"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56"]}]}),a=Object(c.a)(t,2),l=a[0],o=(a[1],Object(n.useState)({options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]},title:{display:!0,text:"Amount per category",fontSize:20},legend:{display:!0,position:"top"}}})),i=Object(c.a)(o,2),s=i[0];return i[1],r.a.createElement("div",{className:_.a.graphContainer},r.a.createElement(R.b,{data:l,options:s.options}))};var J=function(e){var t=Object(n.useState)({labels:["03-09","03-13","03-16","03-21"],datasets:[{label:"Expenses",data:[25,40,150,50],borderColor:["#996ab8"],borderWidth:3}]}),a=Object(c.a)(t,2),l=a[0],o=(a[1],Object(n.useState)({options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]},title:{display:!0,text:"Amount per date",fontSize:20},legend:{display:!0,position:"top"}}})),i=Object(c.a)(o,2),s=i[0];return i[1],r.a.createElement("div",{className:_.a.graphContainer},r.a.createElement(R.a,{data:l,options:s.options}))};var W=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){x().then((function(e){console.log(e.data),l(e.data)}))}),[]),r.a.createElement("div",null,r.a.createElement("h2",null,"Charts Dashboard"),r.a.createElement(G,{expenses:a}),r.a.createElement(J,{expenses:a}))},Z=a(337),K=a(338);function Q(){var e=Object(w.a)(["\n  .navbar {\n    background-color: #222;\n    height: 70px;\n    border-bottom: 1px solid #bbb;\n  }\n\n  a,\n  .navbar-brand,\n  .navbar-nav .nav-link {\n    color: #bbb;\n\n    &:hover {\n      color: white;\n      text-decoration: none;\n      transition: all 1s;\n    }\n  }\n"]);return Q=function(){return e},e}var X=S.a.div(Q()),Y=function(){return r.a.createElement(X,null,r.a.createElement(Z.a,{expand:"lg"},r.a.createElement(Z.a.Brand,{href:"/"},"Expense Management App"),r.a.createElement(Z.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(Z.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(K.a,{className:"ml-auto"},r.a.createElement(K.a.Item,null,r.a.createElement(K.a.Link,null,r.a.createElement(i.b,{to:"/signup"},"Sign up"))),r.a.createElement(K.a.Item,null,r.a.createElement(K.a.Link,null,r.a.createElement(i.b,{to:"/login"},"Log in")))))))};function $(){var e=Object(w.a)(["\n  .navbar {\n    position: fixed;\n    width: 100%;\n    background-color: #222;\n    height: 70px;\n    z-index: 1;\n  }\n\n  a,\n  .navbar-brand,\n  .navbar-nav .nav-link {\n    color: #bbb;\n\n    &:hover {\n      color: white;\n    }\n  }\n"]);return $=function(){return e},e}var ee=S.a.div($()),te=function(){return r.a.createElement(ee,null,r.a.createElement(Z.a,{expand:"lg"},r.a.createElement(Z.a.Brand,{href:"/"},"Expense Management App"),r.a.createElement(Z.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(Z.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(K.a,{className:"ml-auto"},r.a.createElement(K.a.Item,null,r.a.createElement(K.a.Link,null,r.a.createElement(i.b,{to:"/"},"Log out")))))))},ae=a(73),ne=a(74),re=a(76),le=a(75),oe=a(77);function ce(){var e=Object(w.a)([""]);return ce=function(){return e},e}function ie(){var e=Object(w.a)(["\n  height: 70px;\n  width: 200px; /* width must be same size as NavBar to center */\n  text-align: right; /* Aligns <a> inside of NavIcon div */\n  margin-bottom: 0; /* Puts space between NavItems */\n  padding: 20px 20px 0px 0px;\n  z-index: -1;\n  color: #bbb;\n  a {\n    font-family: 'Roboto', sans-serif;\n    font-size: 0.9em;\n    color: ",";\n    :hover {\n      opacity: 0.7;\n      text-decoration: none; /* Gets rid of underlining of icons */\n    }\n  }\n"]);return ie=function(){return e},e}function se(){var e=Object(w.a)(["\n  position: fixed; /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */\n  height: 100%;\n  width: 200px; /* Set the width of the sidebar */\n  z-index: 0; /* Stay on top of everything */\n  top: 4em; /* Stay at the top */\n  background-color: #2b2b2b;\n  overflow-x: hidden; /* Disable horizontal scroll */\n  padding-top: 40px;\n"]);return se=function(){return e},e}var ue=S.a.div(se()),me=function(e){function t(e){var a;return Object(ae.a)(this,t),(a=Object(re.a)(this,Object(le.a)(t).call(this,e))).onItemClick=function(e){a.setState({activePath:e})},a.state={activePath:e.location.pathname,items:[{path:"/account",name:"Account",css:"fas fa-user",key:1},{path:"/allclaims",name:"All Claims",css:"fas fa-briefcase",key:2},{path:"/createclaim",name:"Create Claim",css:"fas fa-envelope-open-text",key:3},{path:"/charts",name:"Charts",css:"fas fa-chart-bar",key:4}]},a}return Object(oe.a)(t,e),Object(ne.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.items,n=t.activePath;return r.a.createElement(ue,null,a.map((function(t){return r.a.createElement(be,{path:t.path,name:t.name,css:t.css,onItemClick:e.onItemClick,active:t.path===n,key:t.key})})))}}]),t}(r.a.Component),de=Object(s.g)(me),pe=S.a.div(ie(),(function(e){return e.active?"white":"#996ab8"})),be=function(e){function t(){var e,a;Object(ae.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(re.a)(this,(e=Object(le.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(){var e=a.props,t=e.path;(0,e.onItemClick)(t)},a}return Object(oe.a)(t,e),Object(ne.a)(t,[{key:"render",value:function(){var e=this.props.active;return r.a.createElement(pe,{active:e,className:this.props.css},r.a.createElement(i.b,{to:this.props.path,onClick:this.handleClick}," ",this.props.name,r.a.createElement(fe,null)))}}]),t}(r.a.Component),fe=S.a.div(ce()),he=function(e){function t(){return Object(ae.a)(this,t),Object(re.a)(this,Object(le.a)(t).apply(this,arguments))}return Object(oe.a)(t,e),Object(ne.a)(t,[{key:"render",value:function(){return r.a.createElement(de,null)}}]),t}(r.a.Component),ge=a(335);function ve(){var e=Object(w.a)(["\n  padding: 120px 80px 80px 260px;\n"]);return ve=function(){return e},e}var Ee=S.a.div(ve());var xe=function(e){return r.a.createElement(Ee,null,r.a.createElement(ge.a,{fluid:!0},e.children))},je=a(336),Ce=a(147),Oe=a.n(Ce);function ye(){var e=Object(w.a)(["\n.button1 {\n    display:inline-block;\n    padding:0.35em 1.2em;\n    border:0.1em solid rgba(255, 255, 255, 0.7);\n    margin:0 0.3em 0.3em 0;\n    border-radius:2.5em;\n    box-sizing: border-box;\n    text-decoration:none;\n    font-family:'Roboto',sans-serif;\n    font-weight:300;\n    font-size: 28px;\n    color:#FFFFFF;\n    text-align:center;\n    transition: all 1.4s;\n    background: rgba(255, 255, 255, 0.1);\n}\n.button1:hover {\n    color:transparent;\n    background: rgba(0, 0, 0, 0);\n    font-size: 5px;\n    border:0.1em solid transparent;\n}\n@media all and (max-width:30em){\n    a.button1{\n        display:block;\n        margin:0.4em auto;\n    }\n}"]);return ye=function(){return e},e}var we=S.a.div(ye());var ke=function(e){var t=e.children,a=e.type,n=e.onClick;return e.buttonStyle,e.buttonSize,r.a.createElement(we,null,r.a.createElement("button",{onClick:n,type:a,className:"button1"},t))};function Ne(){var e=Object(w.a)(["\n  .jumbo {\n    background: url(",") no-repeat fixed bottom;\n    background-size: cover;\n    color: #efefef;\n    height: 800px;\n    position: relative;\n    z-index: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n  }\n  .overlay {\n    background-color: #000;\n    opacity: 0.5;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    z-index: -1;\n  }\n"]);return Ne=function(){return e},e}var Se=S.a.div(Ne(),Oe.a);var Fe=function(){return r.a.createElement(Se,null,r.a.createElement(je.a,{fluid:!0,className:"jumbo"},r.a.createElement("div",{className:"overlay"}),r.a.createElement(ge.a,null,r.a.createElement("h1",null,"Hello There"),r.a.createElement("span",null,"A free expense management application for smaller businesses and start ups."),r.a.createElement("p",null),r.a.createElement("span",null,r.a.createElement(i.b,{to:"/signup"},r.a.createElement(ke,null,"Sign Up"))))))};function Ae(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Y,null),r.a.createElement(Fe,null),r.a.createElement(xe,null,r.a.createElement(s.a,{exact:!0,path:"/",component:u})))}function Pe(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Y,null),r.a.createElement(xe,null,r.a.createElement(s.a,{exact:!0,path:"/signup",component:O}),r.a.createElement(s.a,{exact:!0,path:"/login",component:y})))}function Ie(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(te,null),r.a.createElement(he,null),r.a.createElement(xe,null,r.a.createElement(s.a,{exact:!0,path:"/account",component:I}),r.a.createElement(s.a,{exact:!0,path:"/allclaims",component:q}),r.a.createElement(s.a,{exact:!0,path:"/createclaim",component:D}),r.a.createElement(s.a,{exact:!0,path:"/charts",component:W})))}var Te=function(){var e=Object(n.useState)(""),t=Object(c.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(""),u=Object(c.a)(o,2),m={userId:a,setUserId:l,userName:u[0],setUserName:u[1]};return r.a.createElement(C.Provider,{value:m},r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:Ae}),r.a.createElement(s.a,{exact:!0,path:"/signup",component:Pe}),r.a.createElement(s.a,{exact:!0,path:"/login",component:Pe}),r.a.createElement(s.a,{component:Ie})))))};o.a.render(r.a.createElement(Te,null),document.getElementById("root"))},66:function(e,t,a){e.exports={graphContainer:"Chart_graphContainer__3o3Mj"}}},[[149,1,2]]]);
//# sourceMappingURL=main.73107a6f.chunk.js.map