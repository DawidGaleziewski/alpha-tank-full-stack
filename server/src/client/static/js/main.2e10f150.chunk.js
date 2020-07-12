(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{41:function(e,n,t){e.exports=t(71)},71:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),c=t(37),o=t.n(c),i=t(17),l=t(13),s=t.n(l),u=t(16),b=t(3),d=t(2),f=t(9),m=t(4),p=t(6),g=t.n(p),O=t(0),j=t(20),h=t(39),v=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){return n.reduce((function(e,n){return n(e)}),e)}},k=function(e,n){try{document.cookie="".concat(e,"=").concat(n)}catch(t){console.log("Error setting cookies")}};function x(){var e=Object(d.a)(["\n  background-color: rgba(0, 0, 0, 0);\n  border: 1px solid #7e84cc;\n  padding: 0.8rem 4rem;\n  border-radius: 16px;\n  color: #7e84cc;\n  cursor: pointer;\n  margin-left: auto;\n  font-size: 1.2rem;\n"]);return x=function(){return e},e}var y=Object(O.b)(x()),w=function(e){var n=e.btnText,t=e.setIsUserLoggedIn,a=e.setTokenState;return Object(O.c)("button",{className:"logout-button",css:y,onClick:function(){var e;e="token",document.cookie="".concat(e,"= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"),t(!1),a(null)}},n)};function T(){var e=Object(d.a)(["\n    background-color: #fff;\n    max-width: 1170px;\n    margin-left: auto;\n    margin-right: auto;\n    border-radius: 16px;\n    padding: 0 2rem;\n\n    @media screen and (max-width: 768px) {\n      padding-top: 8rem;\n      /* background-color: rgba(0,0,0,0); */\n      background-color: ",";\n    }\n\n    & > ul {\n      list-style: none;\n      display: flex;\n      & > li:last-of-type {\n        margin-left: auto;\n      }\n      @media screen and (max-width: 768px) {\n        display: ",";\n        flex-direction: column;\n        padding: 2rem;\n        justify-content: right;\n\n        & > li {\n          display: inline-block;\n          text-align: right;\n        }\n      }\n    }\n\n    & .logout-button {\n      margin-top: 1.3rem;\n    }\n  "]);return T=function(){return e},e}function S(){var e=Object(d.a)(["\n  position: absolute;\n  top: 2rem;\n  right: 4rem;\n  height: 5rem;\n  width: 5rem;\n  font-size: 0;\n  color: rgba(0, 0, 0, 0);\n  display: none;\n  border-radius: 16px;\n  border: 1px solid #000;\n  background-color: #fff;\n  &:after {\n    position: absolute;\n  }\n  @media screen and (max-width: 768px) {\n    display: block;\n  }\n"]);return S=function(){return e},e}function C(){var e=Object(d.a)(["\n  font-weight: 700;\n  color: #7e84cc;\n  text-decoration: none;\n  padding: 2rem;\n  padding-bottom: 1.5rem;\n  display: block;\n  border-bottom: 5px solid #fff;\n  transition: all ease-in 0.3s;\n  &:hover {\n    border-bottom-color: #b0b3df;\n  }\n\n  @media screen and (max-width: 768px) {\n    display: inline-block;\n  }\n"]);return C=function(){return e},e}function I(){var e=Object(d.a)(["\n  margin-top: 4rem;\n  margin-bottom: 4rem;\n  @media screen and (max-width: 768px) {\n    margin-top: 0;\n  }\n"]);return I=function(){return e},e}var E=Object(O.b)(I()),A=Object(O.b)(C()),L=Object(O.b)(S()),U=function(e){var n=e.setIsUserLoggedIn,t=e.setTokenState,r=Object(a.useState)(!1),c=Object(b.a)(r,2),o=c[0],i=c[1],l=Object(O.b)(T(),o?"#ffffff":"rgba(0,0,0,0);",o?"flex":"none");return Object(O.c)("header",{css:E},Object(O.c)("nav",{css:l},Object(O.c)("button",{onClick:function(){i(!o),console.log(o)},css:L},Object(O.c)("img",{src:"navbar/icons8-menu.svg"})),Object(O.c)("ul",null,Object(O.c)("li",null,Object(O.c)(f.b,{css:A,to:"/"},"home")),Object(O.c)("li",null,Object(O.c)(f.b,{css:A,to:"/tanks"},"my tanks")),Object(O.c)("li",null,Object(O.c)(f.b,{css:A,to:"/me"},"my profile")),Object(O.c)("li",null,Object(O.c)(w,{btnText:"Logout",setIsUserLoggedIn:n,setTokenState:t})))))};function z(){var e=Object(d.a)(["\n  position: absolute;\n  right: 2rem;\n  top: 50%;\n  transform: translate(0, -50%);\n  padding: 0;\n  background-color: rgba(0, 0, 0, 0);\n  color: #fff;\n  margin: 0;\n  border: none;\n  cursor: pointer;\n  display: block;\n"]);return z=function(){return e},e}function N(){var e=Object(d.a)(["\n    background-color: ",";\n    max-width: 1170px;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 1.6rem 4rem;\n    color: ",";\n    border-radius: 4px;\n    position: relative;\n    margin-bottom: 2rem;\n    box-shadow: -1px 1px 21px 10px rgba(240, 243, 248, 1);\n  "]);return N=function(){return e},e}var H=function(e){var n="",t="";switch(e){case"danger":n="#f45356",t="#f9d6d4";break;case"success":n="#44cb9a",t="#ddf8f4";break;case"warning":n="#f9d687",t="#62543a";break;default:n="#5fc1dd",t="#ddf4f9"}return Object(O.b)(N(),n,t)},D=Object(O.b)(z()),F=function(e){var n=e.alertText,t=e.alertType,a=e.removeAlert,r=e.id;return Object(O.c)("div",{css:H(t)},n,Object(O.c)("span",{onClick:function(e){a(r)},css:D},"X"))};function Y(){var e=Object(d.a)(["\n  max-width: 1170px;\n  margin-left: auto;\n  margin-right: auto;\n"]);return Y=function(){return e},e}var P=Object(O.b)(Y()),q=function(e){var n=e.setIsUserLoggedIn,t=e.children,r=e.setTokenState,c=e.alerts,o=e.removeAlert;return Object(O.c)(a.Fragment,null,Object(O.c)(U,{setIsUserLoggedIn:n,setTokenState:r}),c.map((function(e){return Object(O.c)(F,{key:e.id,alertType:e.type,alertText:e.text,removeAlert:o,id:e.id})})),Object(O.c)("main",{css:P},t))};function X(){var e=Object(d.a)(["\n  padding: 4rem 4rem;\n  background-color: #ffffff;\n  border-radius: 16px;\n"]);return X=function(){return e},e}var Z=Object(O.b)(X()),_=function(e){var n=e.children;return Object(O.c)("section",{css:Z},n)};function B(){var e=Object(d.a)(["\n  /* display: block; */\n  font-size: 1.6rem;\n  text-align: left;\n  background-color: #fff;\n  /* padding: 2rem 4rem; */\n  border-collapse: collapse;\n  /* border-radius: 16px; */\n\n  & thead tr {\n    font-weight: 700;\n    color: #7e84cc;\n    border-bottom: 1px solid #b4b8e1;\n  }\n\n  th,\n  td {\n    padding: 1.6rem;\n    /* &:first-of-type {\n      padding: 0.8rem 0.8rem 0.8rem 0;\n    } */\n    &:nth-of-type(2n + 1) {\n      background-color: #f8f8fc;\n    }\n  }\n"]);return B=function(){return e},e}function J(){var e=Object(d.a)(["\n  overflow-y: scroll;\n"]);return J=function(){return e},e}var R=Object(O.b)(J()),M=Object(O.b)(B()),W=function(e){var n=e.testsState;return Object(O.c)("section",{css:R},Object(O.c)("table",{css:M},Object(O.c)("thead",null,Object(O.c)("tr",null,Object(O.c)("th",null,"Date of test"),Object(O.c)("th",null,"NH3"),Object(O.c)("th",null,"NH4"),Object(O.c)("th",null,"NO3"),Object(O.c)("th",null,"PH"),Object(O.c)("th",null,"temperature (celc)"))),Object(O.c)("tbody",null,n.map((function(e){return Object(O.c)("tr",{key:e._id},Object(O.c)("td",null,e.dateOfTest),Object(O.c)("td",null,e.nh3),Object(O.c)("td",null,e.nh4),Object(O.c)("td",null,e.no3),Object(O.c)("td",null,e.ph),Object(O.c)("td",null,e.tempCelc))})))))},G=t(12),K=t(7);function Q(){var e=Object(d.a)(["\n    position: absolute;\n    left: 0.8rem;\n    top: 50%;\n    font-size: 1.6rem;\n    color: #92a2ae;\n    transform: translate(-10%, -170%) scale(0.8);\n\n    input:placeholder-shown + & {\n      transform: translate(0, -50%);\n    }\n    transition: all ease-in 0.3s;\n    pointer-events: none;\n  "]);return Q=function(){return e},e}function V(){var e=Object(d.a)(["\n  width: 100%;\n  padding: 0.8rem;\n  border: none;\n  border-bottom: 1px solid #92a2ae;\n  outline: none;\n  display: block;\n  &:focus {\n    border-bottom: 1px solid #5a95e6;\n  }\n"]);return V=function(){return e},e}function $(){var e=Object(d.a)(["\n  width: 100%;\n  position: relative;\n  display: block;\n"]);return $=function(){return e},e}var ee=Object(O.b)($()),ne=Object(O.b)(V()),te=function(e){var n=e.id,t=e.type,a=e.name,r=e.labelText,c=e.value,o=e.onChange,i=Object(O.b)(Q());return Object(O.c)("div",{className:"input-slider-wrapper",css:ee},Object(O.c)("input",{onChange:o,css:ne,id:n,type:t,name:a,value:c,placeholder:" "}),Object(O.c)("label",{css:i,htmlFor:n},r))};function ae(){var e=Object(d.a)(["\n  min-width: 18rem;\n  position: relative;\n\n  & > label {\n    position: absolute;\n    left: 0.8rem;\n    top: 50%;\n    font-size: 1.6rem;\n    /* transform: translate(0, -50%); */\n    transform: translate(-16%, -170%) scale(0.8);\n    pointer-events: none;\n    color: #92a2ae;\n  }\n\n  & > input {\n    display: block;\n    width: 100%;\n    height: 100%;\n    border: none;\n    border-bottom: 1px solid #92a2ae;\n    outline: none;\n    display: block;\n  }\n"]);return ae=function(){return e},e}var re=Object(O.b)(ae()),ce=function(e){var n=e.id,t=e.name,a=e.labelText,r=e.value,c=e.onChangeHandler;return Object(O.c)("div",Object(G.a)({className:"input-slider-wrapper--date",css:re},"className","inputWrapper"),Object(O.c)("input",{id:n,type:"date",name:t,onChange:c,value:r}),Object(O.c)("label",{htmlFor:n},a))};function oe(){var e=Object(d.a)(["\n  background-color: #9da7b4;\n  border: none;\n  padding: 0.8rem;\n  border-radius: 2px;\n  cursor: pointer;\n  text-transform: uppercase;\n  color: #ffffff;\n  display: block;\n  width: 100%;\n"]);return oe=function(){return e},e}var ie=Object(O.b)(oe()),le=function(e){var n=e.btnText,t=e.autoFocus;return Object(O.c)("button",{onClick:function(){j.a.event({category:"Button",action:"Click button ".concat(n," from ").concat(window.location.pathname+window.location.search)})},autoFocus:t,css:ie},n)};function se(){var e=Object(d.a)(["\n  background-color: #3fbe90;\n  border: none;\n  padding: 0.8rem;\n  border-radius: 2px;\n  cursor: pointer;\n  text-transform: uppercase;\n  color: #ffffff;\n  display: block;\n\n  @media screen and (min-width: 768px) {\n    display: none;\n  }\n"]);return se=function(){return e},e}var ue=Object(O.b)(se()),be=function(e){var n=e.buttonText,t=e.onClickHandler;return Object(O.c)("button",{onClick:t,css:ue},n)};function de(){var e=Object(d.a)(["\n  width: 2rem;\n  height: 2rem;\n  padding: 0;\n  border: none;\n  cursor: pointer;\n  background-color: #fff;\n  & > img {\n    width: 100%;\n  }\n\n  @media screen and (min-width: 768px) {\n    display: none;\n  }\n"]);return de=function(){return e},e}var fe=Object(O.b)(de()),me=function(e){var n=e.onClickHandler;return Object(O.c)("button",{onClick:n,className:"close-window-btn",css:fe},Object(O.c)("img",{src:"/close-x.png",alt:"close"}))};function pe(){var e=Object(d.a)(["\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  & > .loading-gif {\n    /* margin-left: auto;\n    margin-right: auto;\n    display: inline-block; */\n  }\n"]);return pe=function(){return e},e}var ge=Object(O.b)(pe()),Oe=function(){return Object(O.c)("div",{css:ge},Object(O.c)("img",{className:"loading-gif",src:"/animations/loading_sharks.gif",alt:"Loading please wait..."}))},je=function(e){return v(ke,ve,he)(e)},he=function(e){return e?{Authorization:e}:null},ve=function(e){return e?"Bearer ".concat(e):null},ke=function(e){var n=null;if(e)console.log("utils token state is:",e),n=e;else if(-1!==document.cookie.indexOf("token"))try{n=function(e){var n=null;try{document.cookie.indexOf(0!==e)&&(n=document.cookie.split(";").filter((function(n){return-1!==n.indexOf(e)}))[0].split("=")[1])}catch(t){console.log(t)}return n}("token")}catch(t){console.log(t)}return n};function xe(){var e=Object(d.a)(["\n  background-color: #fff;\n  /* padding: 2rem 4rem; */\n  /* border-radius: 16px 16px 0 0; */\n  display: flex;\n  margin-bottom: 4rem;\n  & > .inputWrapper {\n    margin-right: 1.6rem;\n  }\n\n  & > .input-slider-wrapper {\n    margin-right: 1.6rem;\n  }\n\n  @media screen and (max-width: 768px) {\n    position: absolute;\n    background-color: #fff;\n    display: ",";\n    padding: 4rem;\n    border-radius: 16px;\n    box-shadow: -1px 1px 21px 10px rgba(240, 243, 248, 1);\n    left: 16px;\n    width: calc(100vw - 32px);\n    & > .input-slider-wrapper {\n      margin-bottom: 2rem;\n    }\n    & > .close-window-btn {\n      position: absolute;\n      top: 2rem;\n      right: 2rem;\n    }\n  }\n"]);return xe=function(){return e},e}function ye(){var e=Object(d.a)(["\n  @media screen and (max-width: 768px) {\n    padding: 1.6rem 0;\n  }\n"]);return ye=function(){return e},e}var we=Object(O.b)(ye()),Te=function(e){return Object(O.b)(xe(),e?"block":"none")},Se=function(e){var n=e.tokenState,t=e.tankID,r=e.setTestsState,c=e.testsState,o=e.addAlert,l=Object(a.useState)({dateOfTest:"",nh3:"",nh4:"",no3:"",ph:"",tempCelc:""}),d=Object(b.a)(l,2),f=d[0],m=d[1],p=Object(a.useState)(!1),j=Object(b.a)(p,2),h=j[0],v=j[1],k=Object(a.useState)(!1),x=Object(b.a)(k,2),y=x[0],w=x[1],T=function(e){e.preventDefault(),v(!h),console.log(h)},S=function(){var e=Object(u.a)(s.a.mark((function e(a){var l,u,b;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),l=je(n),w(!0),e.prev=3,e.next=6,g.a.post("/tests",Object(K.a)(Object(K.a)({},f),{},{tankID:t}),{headers:l});case 6:u=e.sent,b=u.data,r([].concat(Object(i.a)(c),[b])),w(!1),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(3),o("danger","Ups. Unable to add test. Check data and try again",3e3),console.log(e.t0),w(!1);case 17:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(n){return e.apply(this,arguments)}}(),C=function(e){var n="checkbox"===e.target.type?e.target.checked:e.target.value;m(Object(K.a)(Object(K.a)({},f),{},Object(G.a)({},e.target.name,n)))};return Object(O.c)("section",{css:we},Object(O.c)(be,{buttonText:"New test",onClickHandler:T}),Object(O.c)("form",{css:Te(h),onSubmit:S},y?Object(O.c)(Oe,null):Object(O.c)(a.Fragment,null,Object(O.c)(me,{onClickHandler:T}),Object(O.c)(ce,{id:"testDate",name:"dateOfTest",labelText:"date of testing",value:f.dateOfTest,onChangeHandler:C}),Object(O.c)(te,{id:"testNH3",type:"number",name:"nh3",labelText:"NH3",value:f.nh3,onChange:C}),Object(O.c)(te,{id:"testNH4",type:"number",name:"nh4",labelText:"NH4",value:f.nh4,onChange:C}),Object(O.c)(te,{id:"testNO3",type:"number",name:"no3",labelText:"NO3",value:f.no3,onChange:C}),Object(O.c)(te,{id:"testPH",type:"number",name:"ph",labelText:"PH",value:f.ph,onChange:C}),Object(O.c)(te,{id:"tempCelc",type:"number",name:"tempCelc",labelText:"temperature C",value:f.tempCelc,onChange:C}),Object(O.c)(le,{btnText:"add test"}))))},Ce=function(e){var n=e.isUserLoggedIn,t=e.tokenState,c=e.match,o=e.addAlert;console.log(n,t,c),console.log(n);var i=c.params.tankID,l=Object(a.useState)([]),d=Object(b.a)(l,2),f=d[0],p=d[1],O=Object(a.useState)([]),j=Object(b.a)(O,2),h=j[0],v=j[1],k=Object(a.useState)(!1),x=Object(b.a)(k,2),y=x[0],w=x[1],T=function(){var e=Object(u.a)(s.a.mark((function e(n,t){var a,r,c,o,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=je(n),w(!0),e.next=4,g.a.get("/tanks/".concat(t),{headers:a});case 4:r=e.sent,c=r.data,o=c.tank,i=c.tests,console.log(i),p(o),v(i),w(!1);case 12:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){T(t,i)}),[t,i]),n?r.a.createElement(_,null,r.a.createElement("h2",null,f.name),r.a.createElement(Se,{tankID:i,tokenState:t,testsState:h,setTestsState:v,addAlert:o}),y?r.a.createElement(Oe,null):r.a.createElement(W,{testsState:h})):r.a.createElement(m.a,{to:"/"})};function Ie(){var e=Object(d.a)(["\n  background-color: #fff;\n  padding: 4rem;\n  border-radius: 16px;\n  max-width: 58.5rem;\n  margin-left: auto;\n  margin-right: auto;\n\n  & > .input-slider-wrapper {\n    margin-bottom: 1.6rem;\n  }\n"]);return Ie=function(){return e},e}var Ee=Object(O.b)(Ie()),Ae=function(e){var n=e.setIsUserLoggedIn,t=e.setTokenState,r=e.addAlert,c=Object(a.useState)({email:"",password:"",name:"",surname:"",age:""}),o=Object(b.a)(c,2),i=o[0],l=o[1],s=Object(a.useState)(!1),u=Object(b.a)(s,2),d=u[0],f=u[1],m=function(e){var n="checkbox"===e.target.type?e.target.checked:e.target.value;l(Object(K.a)(Object(K.a)({},i),{},Object(G.a)({},e.target.name,n)))};return Object(O.c)("form",{css:Ee,onSubmit:function(e){e.preventDefault(),f(!0),g.a.post("/users",i).then((function(e){var a=e.data.token;f(!1),n(!0),t(a),k("token",a)})).catch((function(e){f(!1),console.log(e.response);409===e.response.status?r("danger","This email is taken. Try another one",3e3):r("danger","Ups, unable to register. Check your data and try once again",3e3)}))}},d?Object(O.c)(Oe,null):Object(O.c)(a.Fragment,null,Object(O.c)(te,{id:"registerEmail",type:"email",name:"email",labelText:"Your email",value:i.email,onChange:m}),Object(O.c)(te,{id:"registerPassword",type:"password",name:"password",labelText:"Password",value:i.password,onChange:m}),Object(O.c)(te,{id:"registerName",type:"text",name:"name",labelText:"Your name",value:i.name,onChange:m}),Object(O.c)(te,{id:"registerSurname",type:"text",name:"surname",labelText:"Your surname",value:i.surname,onChange:m}),Object(O.c)(te,{id:"registerAge",type:"number",name:"age",labelText:"Your age",value:i.age,onChange:m}),Object(O.c)(le,{btnText:"register"})))},Le=function(e){var n=e.setTokenState,t=e.setIsUserLoggedIn,r=e.addAlert,c=function(e){var n=e.target,t=n.value,a=n.name;s(Object(K.a)(Object(K.a)({},l),{},Object(G.a)({},a,t)))},o=Object(a.useState)({email:"",password:""}),i=Object(b.a)(o,2),l=i[0],s=i[1],u=Object(a.useState)(!1),d=Object(b.a)(u,2),f=d[0],m=d[1];return Object(O.c)("form",{css:Ee,onSubmit:function(e){e.preventDefault(),m(!0),g.a.post("/users/login",l).then((function(e){var a=e.data.token;m(!1),n(a),t(!0),k("token",a)})).catch((function(e){m(!1),r("danger","unable to login",3e3),console.log(e)}))}},f?Object(O.c)(Oe,null):Object(O.c)(a.Fragment,null,Object(O.c)(te,{id:"loginEmail",type:"email",name:"email",labelText:"Your email",value:l.email,onChange:c,autoFocus:!0}),Object(O.c)(te,{id:"loginPassword",type:"password",name:"password",labelText:"Password",value:l.password,onChange:c}),Object(O.c)(le,{btnText:"login"})))},Ue=function(e){var n=e.setIsUserLoggedIn,t=e.setTokenState,c=e.isUserLoggedIn,o=e.addAlert;return c?r.a.createElement(m.a,{to:"/tanks"}):r.a.createElement(a.Fragment,null,r.a.createElement(Le,{setIsUserLoggedIn:n,setTokenState:t,addAlert:o}),r.a.createElement(Ae,{setIsUserLoggedIn:n,setTokenState:t,addAlert:o}))},ze=function(e){var n=e.tokenState,t=e.setTanksListingState,r=e.tanksListingState,c=e.addAlert,o=Object(a.useState)(!1),l=Object(b.a)(o,2),s=l[0],u=l[1],d=function(e){var n=e.target,t=n.value,a=n.name;j(Object(K.a)(Object(K.a)({},p),{},Object(G.a)({},a,t)))},f=Object(a.useState)({name:"",sizeX:"",sizeY:"",sizeZ:"",aquariumType:""}),m=Object(b.a)(f,2),p=m[0],j=m[1],h=Object(a.useState)(!1),v=Object(b.a)(h,2),k=v[0],x=v[1],y=function(e){e.preventDefault(),x(!k)};return Object(O.c)("section",{css:we},Object(O.c)(be,{buttonText:"New tank",onClickHandler:y}),Object(O.c)("form",{css:Te(k),onSubmit:function(e){e.preventDefault();var a=je(n);u(!0),g.a.post("/tanks",p,{headers:a}).then((function(e){u(!1),t([].concat(Object(i.a)(r),[e.data]))})).catch((function(e){u(!1),c("danger","Ups. Unable to add tank. Check data and try again",3e3),console.log("add alert fn:",c),console.log(e)}))}},s?Object(O.c)(Oe,null):Object(O.c)(a.Fragment,null,Object(O.c)(me,{onClickHandler:y}),Object(O.c)(te,{id:"tankName",type:"text",name:"name",labelText:"tank name",value:p.name,onChange:d}),Object(O.c)(te,{id:"TankSizeX",type:"number",name:"sizeX",labelText:"tank size on X axis",value:p.sizeX,onChange:d}),Object(O.c)(te,{id:"TankSizeY",type:"number",name:"sizeY",labelText:"tank size on Y axis",value:p.sizeY,onChange:d}),Object(O.c)(te,{id:"TankSizeZ",type:"number",name:"sizeZ",labelText:"tank size on Z axis",value:p.sizeZ,onChange:d}),Object(O.c)(te,{id:"tankAquariumType",type:"text",name:"aquariumType",labelText:"aquarium type",value:p.aquariumType,onChange:d}),Object(O.c)(le,{btnText:"Add tank"})," ")))};function Ne(){var e=Object(d.a)(["\n  text-decoration: none;\n  padding: 2rem 4rem;\n  display: block;\n"]);return Ne=function(){return e},e}function He(){var e=Object(d.a)(["\n  background-color: #fff;\n  border-radius: 16px;\n  list-style: none;\n  box-shadow: -1px 1px 21px 10px rgba(240, 243, 248, 1);\n  margin-bottom: 2rem;\n  & .card-header {\n    color: #7e84cc;\n  }\n"]);return He=function(){return e},e}var De=Object(O.b)(He()),Fe=Object(O.b)(Ne()),Ye=function(e){var n=e.tankData;return Object(O.c)("li",{className:"tank-card",css:De},Object(O.c)(f.b,{css:Fe,to:"/tanks/".concat(n._id)},Object(O.c)("h3",{className:"card-header"},n.name)))};function Pe(){var e=Object(d.a)(["\n  /* padding: 2rem 4rem; */\n  /* background-color: #fff; */\n  /* border-radius: 0 0 16px 16px; */\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  & > .tank-card {\n    flex-basis: calc(50% - 2rem);\n  }\n\n  @media screen and (max-width: 768px) {\n    display: block;\n  }\n"]);return Pe=function(){return e},e}var qe=Object(O.b)(Pe()),Xe=function(e){var n=e.tanksListingState;return Object(O.c)("ul",{css:qe},n.map((function(e){return Object(O.c)(Ye,{key:e._id,tankData:e})})))},Ze=function(e){var n=e.isUserLoggedIn,t=e.tokenState,c=e.addAlert,o=Object(a.useState)([]),i=Object(b.a)(o,2),l=i[0],d=i[1],f=Object(a.useState)(!1),p=Object(b.a)(f,2),O=p[0],j=p[1],h=function(){var e=Object(u.a)(s.a.mark((function e(n){var t,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=je(n),e.prev=1,j(!0),e.next=5,g.a.get("/tanks",{headers:t});case 5:a=e.sent,r=a.data,d(r),j(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),j(!1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){n&&h()}),[n,t]),n?r.a.createElement(a.Fragment,null,r.a.createElement(_,null,r.a.createElement(ze,{tokenState:t,setTanksListingState:d,tanksListingState:l,addAlert:c}),O?r.a.createElement(Oe,null):r.a.createElement(Xe,{tanksListingState:l}))):r.a.createElement(m.a,{to:"/"})},_e=function(e){var n=e.userAccountInfo,t=e.isUserLoggedIn;if(console.log("profile ingfo is:",n),t){var c=n.name,o=n.email,i=n.surname,l=n.age,s=n.date;return r.a.createElement(a.Fragment,null,r.a.createElement("h2",null,"Hello ",c),r.a.createElement("p",null,"Email: ",o," "),r.a.createElement("p",null,"Name and surname: ",c," ",i),r.a.createElement("p",null,"age: ",l),r.a.createElement("p",null,"account created date: ",s," "))}return r.a.createElement(m.a,{to:"/"})},Be=function(){return r.a.createElement(a.Fragment,null,r.a.createElement("h2",null,"About alpha tank"),r.a.createElement("article",null,r.a.createElement("p",null,"Alpha tanks is a application created in order to help aquarium owners manage their water test results."),r.a.createElement("p",null,"Current app version: pre-alpha")))};function Je(){var e=Object(d.a)(['\n  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");\n  *,\n  *::after,\n  *::before {\n    box-sizing: border-box;\n  }\n  html {\n    font-size: 10px;\n  }\n  body {\n    font-family: "Roboto", sans-serif;\n    font-size: 16px;\n    background-color: #f0f3f8;\n    margin: 0;\n    padding: 0;\n  }\n  ul,\n  li,\n  ol {\n    margin: 0;\n    padding-inline-start: 0;\n  }\n']);return Je=function(){return e},e}var Re=Object(O.b)(Je());var Me=function(){var e=Object(a.useState)(null),n=Object(b.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)({}),o=Object(b.a)(c,2),l=o[0],d=o[1],p=Object(a.useState)(!1),k=Object(b.a)(p,2),x=k[0],y=k[1],w=Object(a.useState)([]),T=Object(b.a)(w,2),S=T[0],C=T[1],I=function(){var e=Object(u.a)(s.a.mark((function e(n,t){var a,c,o,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=ke(t),n||!a){e.next=18;break}return console.log(a),c=v(ve,he)(a),console.log(c),e.prev=5,e.next=8,g.a.get("/users/me",{headers:c});case 8:o=e.sent,i=o.data,r(a),y(!0),d(i),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(n,t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){j.a.initialize("UA-172045582-1"),j.a.pageview(window.location.pathname+window.location.search)}),[]),Object(a.useEffect)((function(){I(x,t)}),[x]);var E=function(e,n,t){var a=Object(h.v4)();C([].concat(Object(i.a)(S),[{text:n,type:e,id:a}]))},A=Object(a.useRef)(null);Object(a.useEffect)((function(){if(S.length>0){clearTimeout(A.current);var e=setTimeout((function(){L(S[S.length-1].id)}),3e3);A.current=e}}),[S]);var L=function(e){console.log(e),C(Object(i.a)(S).filter((function(n){return n.id!==e})))};return Object(O.c)("div",{className:"App"},Object(O.c)(O.a,{styles:Re}),Object(O.c)(f.a,null,Object(O.c)(q,{setIsUserLoggedIn:y,setTokenState:r,setAlerts:C,alerts:S,removeAlert:L},Object(O.c)(m.b,{path:"/",exact:!0,render:function(){return Object(O.c)(Ue,{isUserLoggedIn:x,setIsUserLoggedIn:y,tokenState:t,setTokenState:r,addAlert:E})}}),Object(O.c)(m.b,{path:"/tanks",exact:!0,render:function(){return Object(O.c)(Ze,{isUserLoggedIn:x,tokenState:t,addAlert:E})}}),Object(O.c)(m.b,{path:"/tanks/:tankID",exact:!0,render:function(e){return Object(O.c)(Ce,Object.assign({},e,{tokenState:t,isUserLoggedIn:x,addAlert:E}))}}),Object(O.c)(m.b,{path:"/me",render:function(){return Object(O.c)(_e,{userAccountInfo:l,isUserLoggedIn:x,setIsUserLoggedIn:y})}}),Object(O.c)(m.b,{path:"/about",exec:!0,component:Be}))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Me,null)),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.2e10f150.chunk.js.map