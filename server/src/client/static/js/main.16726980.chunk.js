(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{41:function(e,n,t){e.exports=t(71)},71:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(37),o=t.n(c),i=t(17),l=t(3),u=t(10),s=t(4),b=t(1),d=t(20),f=t(39),m=t(2),p=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){return n.reduce((function(e,n){return n(e)}),e)}},g=function(e,n){try{document.cookie="".concat(e,"=").concat(n)}catch(t){console.log("Error setting cookies")}},O=function(e){var n=e.toString();return n.length>1?+n:Number("0"+n)};function j(){var e=Object(m.a)(["\n  background-color: rgba(0, 0, 0, 0);\n  border: 1px solid #7e84cc;\n  padding: 0.8rem 4rem;\n  border-radius: 16px;\n  color: #7e84cc;\n  cursor: pointer;\n  margin-left: auto;\n  font-size: 1.2rem;\n"]);return j=function(){return e},e}var v=Object(b.b)(j()),h=function(e){var n=e.btnText,t=e.setIsUserLoggedIn,a=e.setTokenState;return Object(b.c)("button",{className:"logout-button",css:v,onClick:function(){var e;e="token",document.cookie="".concat(e,"= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"),t(!1),a(null)}},n)};function x(){var e=Object(m.a)(["\n    background-color: #fff;\n    max-width: 1170px;\n    margin-left: auto;\n    margin-right: auto;\n    border-radius: 16px;\n    padding: 0 2rem;\n\n    @media screen and (max-width: 768px) {\n      padding-top: 8rem;\n      /* background-color: rgba(0,0,0,0); */\n      background-color: ",";\n    }\n\n    & > ul {\n      list-style: none;\n      display: flex;\n      & > li:last-of-type {\n        margin-left: auto;\n      }\n      @media screen and (max-width: 768px) {\n        display: ",";\n        flex-direction: column;\n        padding: 2rem;\n        justify-content: right;\n\n        & > li {\n          display: inline-block;\n          text-align: right;\n        }\n      }\n    }\n\n    & .logout-button {\n      margin-top: 1.3rem;\n    }\n  "]);return x=function(){return e},e}function k(){var e=Object(m.a)(["\n  position: absolute;\n  top: 2rem;\n  right: 4rem;\n  height: 5rem;\n  width: 5rem;\n  font-size: 0;\n  color: rgba(0, 0, 0, 0);\n  display: none;\n  border-radius: 16px;\n  border: 1px solid #000;\n  background-color: #fff;\n  &:after {\n    position: absolute;\n  }\n  @media screen and (max-width: 768px) {\n    display: block;\n  }\n"]);return k=function(){return e},e}function y(){var e=Object(m.a)(["\n  font-weight: 700;\n  color: #7e84cc;\n  text-decoration: none;\n  padding: 2rem;\n  padding-bottom: 1.5rem;\n  display: block;\n  border-bottom: 5px solid #fff;\n  transition: all ease-in 0.3s;\n  &:hover {\n    border-bottom-color: #b0b3df;\n  }\n\n  @media screen and (max-width: 768px) {\n    display: inline-block;\n  }\n"]);return y=function(){return e},e}function w(){var e=Object(m.a)(["\n  margin-top: 4rem;\n  margin-bottom: 4rem;\n  @media screen and (max-width: 768px) {\n    margin-top: 0;\n  }\n"]);return w=function(){return e},e}var T=Object(b.b)(w()),S=Object(b.b)(y()),E=Object(b.b)(k()),C=function(e){var n=e.setIsUserLoggedIn,t=e.setTokenState,r=Object(a.useState)(!1),c=Object(l.a)(r,2),o=c[0],i=c[1],s=Object(b.b)(x(),o?"#ffffff":"rgba(0,0,0,0);",o?"flex":"none");return Object(b.c)("header",{css:T},Object(b.c)("nav",{css:s},Object(b.c)("button",{onClick:function(){i(!o),console.log(o)},css:E},Object(b.c)("img",{src:"navbar/icons8-menu.svg"})),Object(b.c)("ul",null,Object(b.c)("li",null,Object(b.c)(u.b,{css:S,to:"/"},"home")),Object(b.c)("li",null,Object(b.c)(u.b,{css:S,to:"/tanks"},"my tanks")),Object(b.c)("li",null,Object(b.c)(u.b,{css:S,to:"/me"},"my profile")),Object(b.c)("li",null,Object(b.c)(h,{btnText:"Logout",setIsUserLoggedIn:n,setTokenState:t})))))};function I(){var e=Object(m.a)(["\n  position: absolute;\n  right: 2rem;\n  top: 50%;\n  transform: translate(0, -50%);\n  padding: 0;\n  background-color: rgba(0, 0, 0, 0);\n  color: #fff;\n  margin: 0;\n  border: none;\n  cursor: pointer;\n  display: block;\n"]);return I=function(){return e},e}function A(){var e=Object(m.a)(["\n    background-color: ",";\n    max-width: 1170px;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 1.6rem 4rem;\n    color: ",";\n    border-radius: 4px;\n    position: relative;\n    margin-bottom: 2rem;\n    box-shadow: -1px 1px 21px 10px rgba(240, 243, 248, 1);\n  "]);return A=function(){return e},e}var L=function(e){var n="",t="";switch(e){case"danger":n="#f45356",t="#f9d6d4";break;case"success":n="#44cb9a",t="#ddf8f4";break;case"warning":n="#f9d687",t="#62543a";break;default:n="#5fc1dd",t="#ddf4f9"}return Object(b.b)(A(),n,t)},U=Object(b.b)(I()),N=function(e){var n=e.alertText,t=e.alertType,a=e.removeAlert,r=e.id;return Object(b.c)("div",{css:L(t)},n,Object(b.c)("span",{onClick:function(e){a(r)},css:U},"X"))};function z(){var e=Object(m.a)(["\n  max-width: 1170px;\n  margin-left: auto;\n  margin-right: auto;\n"]);return z=function(){return e},e}var F=Object(b.b)(z()),D=function(e){var n=e.setIsUserLoggedIn,t=e.children,r=e.setTokenState,c=e.alerts,o=e.removeAlert;return Object(b.c)(a.Fragment,null,Object(b.c)(C,{setIsUserLoggedIn:n,setTokenState:r}),c.map((function(e){return Object(b.c)(N,{key:e.id,alertType:e.type,alertText:e.text,removeAlert:o,id:e.id})})),Object(b.c)("main",{css:F},t))},H=t(7),Y=t.n(H),P=t(16),q=t(6),X=t.n(q);function _(){var e=Object(m.a)(["\n  padding: 4rem 4rem;\n  background-color: #ffffff;\n  border-radius: 16px;\n"]);return _=function(){return e},e}var R=Object(b.b)(_()),Z=function(e){var n=e.children;return Object(b.c)("section",{css:R},n)};function B(){var e=Object(m.a)(["\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  & > .loading-gif {\n    /* margin-left: auto;\n    margin-right: auto;\n    display: inline-block; */\n  }\n"]);return B=function(){return e},e}var J=Object(b.b)(B()),M=function(){return Object(b.c)("div",{css:J},Object(b.c)("img",{className:"loading-gif",src:"/animations/loading_sharks.gif",alt:"Loading please wait..."}))},W=function(e){return p(Q,K,G)(e)},G=function(e){return e?{Authorization:e}:null},K=function(e){return e?"Bearer ".concat(e):null},Q=function(e){var n=null;if(e)console.log("utils token state is:",e),n=e;else if(-1!==document.cookie.indexOf("token"))try{n=function(e){var n=null;try{0!==document.cookie.indexOf(e)&&(n=document.cookie.split(";").filter((function(n){return-1!==n.indexOf(e)}))[0].split("=")[1])}catch(t){console.log(t)}return n}("token")}catch(t){console.log(t)}return n};function V(){var e=Object(m.a)(["\n  ","\n  background-color: #db2828;\n"]);return V=function(){return e},e}function $(){var e=Object(m.a)(["\n  ","\n  background-color:#3dba7c;\n"]);return $=function(){return e},e}function ee(){var e=Object(m.a)(["\n","\nbackground-color: "," ;\ncursor: ","  ;\n"]);return ee=function(){return e},e}function ne(){var e=Object(m.a)(["\n  padding: 2rem 4rem;\n  background-color: #fff;\n  border-radius: 16px;\n  box-shadow: -1px 1px 21px 10px rgba(240, 243, 248, 1);\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n\n  & .modal-button:not(:last-of-type) {\n    margin-right: 2rem;\n  }\n"]);return ne=function(){return e},e}function te(){var e=Object(m.a)(["\n  border-radius: 2px;\n  border: 0;\n  color: #fff;\n  cursor: pointer;\n  padding: 0.8rem;\n"]);return te=function(){return e},e}var ae=Object(b.b)(te()),re=Object(b.b)(ne()),ce=function(e){return Object(b.b)(ee(),ae,e?"#5f5f5f":"#db2828",e?"not-allowed":"pointer")},oe=function(){return Object(b.b)($(),ae)},ie=Object(b.b)(V(),ae),le=function(e){var n=e.btnText,t=e.modalText,r=e.tokenState,c=e.testID,o=e.removeItemFromState,i=e.endpointURL,u=function(){m(!f)},s=Object(a.useState)(!1),d=Object(l.a)(s,2),f=d[0],m=d[1],p=Object(a.useState)(!1),g=Object(l.a)(p,2),O=g[0],j=g[1],v=function(){var e=Object(P.a)(Y.a.mark((function e(n,t){var a;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),a=W(t),e.next=5,X.a.delete("".concat(i,"/").concat(n),{headers:a});case 5:o(n),j(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),j(!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n,t){return e.apply(this,arguments)}}();return Object(b.c)(a.Fragment,null,Object(b.c)("button",{onClick:u,css:ce(f)},n),f?Object(b.c)("div",{css:re},O?Object(b.c)(M,null):Object(b.c)(a.Fragment,null,Object(b.c)("p",null,t," "),Object(b.c)("button",{className:"modal-button",onClick:function(){v(c,r)},css:oe},"Yes"),Object(b.c)("button",{className:"modal-button",onClick:u,css:ie},"No"))):null)};function ue(){var e=Object(m.a)(["\n  /* display: block; */\n  font-size: 1.6rem;\n  text-align: left;\n  background-color: #fff;\n  /* padding: 2rem 4rem; */\n  border-collapse: collapse;\n  /* border-radius: 16px; */\n\n  & thead tr {\n    font-weight: 700;\n    color: #7e84cc;\n    border-bottom: 1px solid #b4b8e1;\n  }\n\n  th,\n  td {\n    padding: 1.6rem;\n    /* &:first-of-type {\n      padding: 0.8rem 0.8rem 0.8rem 0;\n    } */\n    &:nth-of-type(2n + 1) {\n      background-color: #f8f8fc;\n    }\n  }\n"]);return ue=function(){return e},e}function se(){var e=Object(m.a)(["\n  overflow-y: scroll;\n"]);return se=function(){return e},e}var be=Object(b.b)(se()),de=Object(b.b)(ue()),fe=function(e){var n=e.testsState,t=e.tokenState,a=e.removeTestFromState;return Object(b.c)("section",{css:be},Object(b.c)("table",{css:de},Object(b.c)("thead",null,Object(b.c)("tr",null,Object(b.c)("th",null,"Date of test"),Object(b.c)("th",null,"NH3"),Object(b.c)("th",null,"NH4"),Object(b.c)("th",null,"NO3"),Object(b.c)("th",null,"PH"),Object(b.c)("th",null,"temperature (celc)"),Object(b.c)("th",null,"delete"))),Object(b.c)("tbody",null,n.map((function(e){return Object(b.c)("tr",{key:e._id},Object(b.c)("td",null,function(e){var n=new Date(e),t=O(n.getUTCMonth()),a=O(n.getDate());return"".concat(n.getFullYear(),"-").concat(t,"-").concat(a)}(e.dateOfTest)),Object(b.c)("td",null,e.nh3),Object(b.c)("td",null,e.nh4),Object(b.c)("td",null,e.no3),Object(b.c)("td",null,e.ph),Object(b.c)("td",null,e.tempCelc),Object(b.c)("td",null,Object(b.c)(le,{btnText:"Delete",modalText:"Are you sure you want to delete this?",tokenState:t,testID:e._id,removeItemFromState:a,endpointURL:"/tests"})))})))))},me=t(13),pe=t(8);function ge(){var e=Object(m.a)(["\n    position: absolute;\n    left: 0.8rem;\n    top: 50%;\n    font-size: 1.6rem;\n    color: #92a2ae;\n    transform: translate(-10%, -170%) scale(0.8);\n\n    input:placeholder-shown + & {\n      transform: translate(0, -50%);\n    }\n\n    input:-webkit-autofill + & {\n      transform: translate(-10%, -170%) scale(0.8);\n    }\n\n    transition: all ease-in 0.3s;\n    pointer-events: none;\n  "]);return ge=function(){return e},e}function Oe(){var e=Object(m.a)(["\n  width: 100%;\n  padding: 0.8rem;\n  border: none;\n  border-bottom: 1px solid #92a2ae;\n  outline: none;\n  display: block;\n  &:focus {\n    border-bottom: 1px solid #5a95e6;\n  }\n"]);return Oe=function(){return e},e}function je(){var e=Object(m.a)(["\n  width: 100%;\n  position: relative;\n  display: block;\n"]);return je=function(){return e},e}var ve=Object(b.b)(je()),he=Object(b.b)(Oe()),xe=function(e){var n=e.id,t=e.type,a=e.name,r=e.labelText,c=e.value,o=e.onChange,i=Object(b.b)(ge());return Object(b.c)("div",{className:"input-slider-wrapper",css:ve},Object(b.c)("input",{onChange:o,css:he,id:n,type:t,name:a,value:c,placeholder:" "}),Object(b.c)("label",{css:i,htmlFor:n},r))};function ke(){var e=Object(m.a)(["\n  min-width: 18rem;\n  position: relative;\n\n  & > label {\n    position: absolute;\n    left: 0.8rem;\n    top: 50%;\n    font-size: 1.6rem;\n    /* transform: translate(0, -50%); */\n    transform: translate(-16%, -170%) scale(0.8);\n    pointer-events: none;\n    color: #92a2ae;\n  }\n\n  & > input {\n    display: block;\n    width: 100%;\n    height: 100%;\n    border: none;\n    border-bottom: 1px solid #92a2ae;\n    outline: none;\n    display: block;\n  }\n"]);return ke=function(){return e},e}var ye=Object(b.b)(ke()),we=function(e){var n=e.id,t=e.name,a=e.labelText,r=e.value,c=e.onChangeHandler;return Object(b.c)("div",Object(me.a)({className:"input-slider-wrapper--date",css:ye},"className","inputWrapper"),Object(b.c)("input",{id:n,type:"date",name:t,onChange:c,value:r}),Object(b.c)("label",{htmlFor:n},a))};function Te(){var e=Object(m.a)(["\n  background-color: #9da7b4;\n  border: none;\n  padding: 0.8rem;\n  border-radius: 2px;\n  cursor: pointer;\n  text-transform: uppercase;\n  color: #ffffff;\n  display: block;\n  width: 100%;\n"]);return Te=function(){return e},e}var Se=Object(b.b)(Te()),Ee=function(e){var n=e.btnText,t=e.autoFocus;return Object(b.c)("button",{onClick:function(){d.a.event({category:"Button",action:"Click button ".concat(n," from ").concat(window.location.pathname+window.location.search)})},autoFocus:t,css:Se},n)};function Ce(){var e=Object(m.a)(["\n  background-color: #3fbe90;\n  border: none;\n  padding: 0.8rem;\n  border-radius: 2px;\n  cursor: pointer;\n  text-transform: uppercase;\n  color: #ffffff;\n  display: block;\n\n  @media screen and (min-width: 768px) {\n    display: none;\n  }\n"]);return Ce=function(){return e},e}var Ie=Object(b.b)(Ce()),Ae=function(e){var n=e.buttonText,t=e.onClickHandler;return Object(b.c)("button",{onClick:t,css:Ie},n)};function Le(){var e=Object(m.a)(["\n  width: 2rem;\n  height: 2rem;\n  padding: 0;\n  border: none;\n  cursor: pointer;\n  background-color: #fff;\n  & > img {\n    width: 100%;\n  }\n\n  @media screen and (min-width: 768px) {\n    display: none;\n  }\n"]);return Le=function(){return e},e}var Ue=Object(b.b)(Le()),Ne=function(e){var n=e.onClickHandler;return Object(b.c)("button",{onClick:n,className:"close-window-btn",css:Ue},Object(b.c)("img",{src:"/close-x.png",alt:"close"}))};function ze(){var e=Object(m.a)(["\n  background-color: #fff;\n  /* padding: 2rem 4rem; */\n  /* border-radius: 16px 16px 0 0; */\n  display: flex;\n  margin-bottom: 4rem;\n  & > .inputWrapper {\n    margin-right: 1.6rem;\n  }\n\n  & > .input-slider-wrapper {\n    margin-right: 1.6rem;\n  }\n\n  @media screen and (max-width: 768px) {\n    position: absolute;\n    background-color: #fff;\n    display: ",";\n    padding: 4rem;\n    border-radius: 16px;\n    box-shadow: -1px 1px 21px 10px rgba(240, 243, 248, 1);\n    left: 16px;\n    width: calc(100vw - 32px);\n    & > .input-slider-wrapper {\n      margin-bottom: 2rem;\n    }\n    & > .close-window-btn {\n      position: absolute;\n      top: 2rem;\n      right: 2rem;\n    }\n  }\n"]);return ze=function(){return e},e}function Fe(){var e=Object(m.a)(["\n  @media screen and (max-width: 768px) {\n    padding: 1.6rem 0;\n  }\n"]);return Fe=function(){return e},e}var De=Object(b.b)(Fe()),He=function(e){return Object(b.b)(ze(),e?"block":"none")},Ye=function(e){var n=e.tokenState,t=e.tankID,r=e.setTestsState,c=e.testsState,o=e.addAlert,u=Object(a.useState)({dateOfTest:"",nh3:"",nh4:"",no3:"",ph:"",tempCelc:""}),s=Object(l.a)(u,2),d=s[0],f=s[1],m=Object(a.useState)(!1),p=Object(l.a)(m,2),g=p[0],O=p[1],j=Object(a.useState)(!1),v=Object(l.a)(j,2),h=v[0],x=v[1],k=function(e){e.preventDefault(),O(!g),console.log(g)},y=function(){var e=Object(P.a)(Y.a.mark((function e(a){var l,u,s;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),l=W(n),x(!0),e.prev=3,e.next=6,X.a.post("/tests",Object(pe.a)(Object(pe.a)({},d),{},{tankID:t}),{headers:l});case 6:u=e.sent,s=u.data,r([].concat(Object(i.a)(c),[s])),x(!1),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(3),o("danger","Ups. Unable to add test. Check data and try again",3e3),console.log(e.t0),x(!1);case 17:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(n){return e.apply(this,arguments)}}(),w=function(e){var n="checkbox"===e.target.type?e.target.checked:e.target.value;f(Object(pe.a)(Object(pe.a)({},d),{},Object(me.a)({},e.target.name,n)))};return Object(b.c)("section",{css:De},Object(b.c)(Ae,{buttonText:"New test",onClickHandler:k}),Object(b.c)("form",{css:He(g),onSubmit:y},h?Object(b.c)(M,null):Object(b.c)(a.Fragment,null,Object(b.c)(Ne,{onClickHandler:k}),Object(b.c)(we,{id:"testDate",name:"dateOfTest",labelText:"date of testing",value:d.dateOfTest,onChangeHandler:w}),Object(b.c)(xe,{id:"testNH3",type:"number",name:"nh3",labelText:"NH3",value:d.nh3,onChange:w}),Object(b.c)(xe,{id:"testNH4",type:"number",name:"nh4",labelText:"NH4",value:d.nh4,onChange:w}),Object(b.c)(xe,{id:"testNO3",type:"number",name:"no3",labelText:"NO3",value:d.no3,onChange:w}),Object(b.c)(xe,{id:"testPH",type:"number",name:"ph",labelText:"PH",value:d.ph,onChange:w}),Object(b.c)(xe,{id:"tempCelc",type:"number",name:"tempCelc",labelText:"temperature C",value:d.tempCelc,onChange:w}),Object(b.c)(Ee,{btnText:"add test"}))))},Pe=function(e){var n=e.isUserLoggedIn,t=e.tokenState,c=e.match,o=e.addAlert;console.log(n,t,c),console.log(n);var i=c.params.tankID,u=Object(a.useState)([]),b=Object(l.a)(u,2),d=b[0],f=b[1],m=Object(a.useState)([]),p=Object(l.a)(m,2),g=p[0],O=p[1],j=Object(a.useState)(!1),v=Object(l.a)(j,2),h=v[0],x=v[1],k=function(){var e=Object(P.a)(Y.a.mark((function e(n,t){var a,r,c,o,i;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=W(n),x(!0),e.next=4,X.a.get("/tanks/".concat(t),{headers:a});case 4:r=e.sent,c=r.data,o=c.tank,i=c.tests,console.log(i),f(o),O(i),x(!1);case 12:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){k(t,i)}),[t,i]),n?r.a.createElement(Z,null,r.a.createElement("h2",null,d.name),r.a.createElement(Ye,{tankID:i,tokenState:t,testsState:g,setTestsState:O,addAlert:o}),h?r.a.createElement(M,null):r.a.createElement(fe,{testsState:g,tokenState:t,setTestsState:O,removeTestFromState:function(e){console.log("Honker remover"),O(g.filter((function(n){return n._id!==e})))}})):r.a.createElement(s.a,{to:"/"})};function qe(){var e=Object(m.a)(["\n  background-color: #fff;\n  padding: 4rem;\n  border-radius: 16px;\n  max-width: 58.5rem;\n  margin-left: auto;\n  margin-right: auto;\n\n  & > .input-slider-wrapper {\n    margin-bottom: 1.6rem;\n  }\n"]);return qe=function(){return e},e}var Xe=Object(b.b)(qe()),_e=function(e){var n=e.setIsUserLoggedIn,t=e.setTokenState,r=e.addAlert,c=Object(a.useState)({email:"",password:"",name:"",surname:"",age:""}),o=Object(l.a)(c,2),i=o[0],u=o[1],s=Object(a.useState)(!1),d=Object(l.a)(s,2),f=d[0],m=d[1],p=function(e){var n="checkbox"===e.target.type?e.target.checked:e.target.value;u(Object(pe.a)(Object(pe.a)({},i),{},Object(me.a)({},e.target.name,n)))};return Object(b.c)("form",{css:Xe,onSubmit:function(e){e.preventDefault(),m(!0),X.a.post("/users",i).then((function(e){var a=e.data.token;m(!1),n(!0),t(a),g("token",a)})).catch((function(e){m(!1),console.log(e.response);409===e.response.status?r("danger","This email is taken. Try another one",3e3):r("danger","Ups, unable to register. Check your data and try once again",3e3)}))}},f?Object(b.c)(M,null):Object(b.c)(a.Fragment,null,Object(b.c)(xe,{id:"registerEmail",type:"email",name:"email",labelText:"Your email",value:i.email,onChange:p}),Object(b.c)(xe,{id:"registerPassword",type:"password",name:"password",labelText:"Password",value:i.password,onChange:p}),Object(b.c)(xe,{id:"registerName",type:"text",name:"name",labelText:"Your name",value:i.name,onChange:p}),Object(b.c)(xe,{id:"registerSurname",type:"text",name:"surname",labelText:"Your surname",value:i.surname,onChange:p}),Object(b.c)(xe,{id:"registerAge",type:"number",name:"age",labelText:"Your age",value:i.age,onChange:p}),Object(b.c)(Ee,{btnText:"register"})))},Re=function(e){var n=e.setTokenState,t=e.setIsUserLoggedIn,r=e.addAlert,c=function(e){var n=e.target,t=n.value,a=n.name;s(Object(pe.a)(Object(pe.a)({},u),{},Object(me.a)({},a,t)))},o=Object(a.useState)({email:"",password:""}),i=Object(l.a)(o,2),u=i[0],s=i[1],d=Object(a.useState)(!1),f=Object(l.a)(d,2),m=f[0],p=f[1];return Object(b.c)("form",{css:Xe,onSubmit:function(e){e.preventDefault(),p(!0),X.a.post("/users/login",u).then((function(e){var a=e.data.token;p(!1),n(a),t(!0),g("token",a)})).catch((function(e){p(!1),r("danger","unable to login",3e3),console.log(e)}))}},m?Object(b.c)(M,null):Object(b.c)(a.Fragment,null,Object(b.c)(xe,{id:"loginEmail",type:"email",name:"email",labelText:"Your email",value:u.email,onChange:c,autoFocus:!0}),Object(b.c)(xe,{id:"loginPassword",type:"password",name:"password",labelText:"Password",value:u.password,onChange:c}),Object(b.c)(Ee,{btnText:"login"})))},Ze=function(e){var n=e.setIsUserLoggedIn,t=e.setTokenState,c=e.isUserLoggedIn,o=e.addAlert;return c?r.a.createElement(s.a,{to:"/tanks"}):r.a.createElement(a.Fragment,null,r.a.createElement(Re,{setIsUserLoggedIn:n,setTokenState:t,addAlert:o}),r.a.createElement(_e,{setIsUserLoggedIn:n,setTokenState:t,addAlert:o}))},Be=function(e){var n=e.tokenState,t=e.setTanksListingState,r=e.tanksListingState,c=e.addAlert,o=Object(a.useState)(!1),u=Object(l.a)(o,2),s=u[0],d=u[1],f=function(e){var n=e.target,t=n.value,a=n.name;O(Object(pe.a)(Object(pe.a)({},g),{},Object(me.a)({},a,t)))},m=Object(a.useState)({name:"",sizeX:"",sizeY:"",sizeZ:"",aquariumType:""}),p=Object(l.a)(m,2),g=p[0],O=p[1],j=Object(a.useState)(!1),v=Object(l.a)(j,2),h=v[0],x=v[1],k=function(e){e.preventDefault(),x(!h)};return Object(b.c)("section",{css:De},Object(b.c)(Ae,{buttonText:"New tank",onClickHandler:k}),Object(b.c)("form",{css:He(h),onSubmit:function(e){e.preventDefault();var a=W(n);d(!0),X.a.post("/tanks",g,{headers:a}).then((function(e){d(!1),t([].concat(Object(i.a)(r),[e.data]))})).catch((function(e){d(!1),c("danger","Ups. Unable to add tank. Check data and try again",3e3),console.log("add alert fn:",c),console.log(e)}))}},s?Object(b.c)(M,null):Object(b.c)(a.Fragment,null,Object(b.c)(Ne,{onClickHandler:k}),Object(b.c)(xe,{id:"tankName",type:"text",name:"name",labelText:"tank name",value:g.name,onChange:f}),Object(b.c)(xe,{id:"TankSizeX",type:"number",name:"sizeX",labelText:"tank size on X axis",value:g.sizeX,onChange:f}),Object(b.c)(xe,{id:"TankSizeY",type:"number",name:"sizeY",labelText:"tank size on Y axis",value:g.sizeY,onChange:f}),Object(b.c)(xe,{id:"TankSizeZ",type:"number",name:"sizeZ",labelText:"tank size on Z axis",value:g.sizeZ,onChange:f}),Object(b.c)(xe,{id:"tankAquariumType",type:"text",name:"aquariumType",labelText:"aquarium type",value:g.aquariumType,onChange:f}),Object(b.c)(Ee,{btnText:"Add tank"})," ")))};function Je(){var e=Object(m.a)(["\n  text-decoration: none;\n  padding: 2rem 4rem;\n  display: block;\n"]);return Je=function(){return e},e}function Me(){var e=Object(m.a)(["\n  background-color: #fff;\n  border-radius: 16px;\n  list-style: none;\n  box-shadow: -1px 1px 21px 10px rgba(240, 243, 248, 1);\n  margin-bottom: 2rem;\n  & .card-header {\n    color: #7e84cc;\n  }\n"]);return Me=function(){return e},e}var We=Object(b.b)(Me()),Ge=Object(b.b)(Je()),Ke=function(e){var n=e.tankData;return Object(b.c)("li",{className:"tank-card",css:We},Object(b.c)(u.b,{css:Ge,to:"/tanks/".concat(n._id)},Object(b.c)("h3",{className:"card-header"},n.name)))};function Qe(){var e=Object(m.a)(["\n  /* padding: 2rem 4rem; */\n  /* background-color: #fff; */\n  /* border-radius: 0 0 16px 16px; */\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  & > .tank-card {\n    flex-basis: calc(50% - 2rem);\n  }\n\n  @media screen and (max-width: 768px) {\n    display: block;\n  }\n"]);return Qe=function(){return e},e}var Ve=Object(b.b)(Qe()),$e=function(e){var n=e.tanksListingState;return Object(b.c)("ul",{css:Ve},n.map((function(e){return Object(b.c)(Ke,{key:e._id,tankData:e})})))},en=function(e){var n=e.isUserLoggedIn,t=e.tokenState,c=e.addAlert,o=Object(a.useState)([]),i=Object(l.a)(o,2),u=i[0],b=i[1],d=Object(a.useState)(!1),f=Object(l.a)(d,2),m=f[0],p=f[1],g=function(){var e=Object(P.a)(Y.a.mark((function e(n){var t,a,r;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=W(n),e.prev=1,p(!0),e.next=5,X.a.get("/tanks",{headers:t});case 5:a=e.sent,r=a.data,b(r),p(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),p(!1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){n&&g()}),[n,t]),n?r.a.createElement(a.Fragment,null,r.a.createElement(Z,null,r.a.createElement(Be,{tokenState:t,setTanksListingState:b,tanksListingState:u,addAlert:c}),m?r.a.createElement(M,null):r.a.createElement($e,{tanksListingState:u}))):r.a.createElement(s.a,{to:"/"})},nn=function(e){var n=e.userAccountInfo,t=e.isUserLoggedIn;if(console.log("profile ingfo is:",n),t){var c=n.name,o=n.email,i=n.surname,l=n.age,u=n.date;return r.a.createElement(a.Fragment,null,r.a.createElement("h2",null,"Hello ",c),r.a.createElement("p",null,"Email: ",o," "),r.a.createElement("p",null,"Name and surname: ",c," ",i),r.a.createElement("p",null,"age: ",l),r.a.createElement("p",null,"account created date: ",u," "))}return r.a.createElement(s.a,{to:"/"})},tn=function(){return r.a.createElement(a.Fragment,null,r.a.createElement("h2",null,"About alpha tank"),r.a.createElement("article",null,r.a.createElement("p",null,"Alpha tanks is a application created in order to help aquarium owners manage their water test results."),r.a.createElement("p",null,"Current app version: pre-alpha")))},an=function(){var e=Object(P.a)(Y.a.mark((function e(n,t,a,r,c){var o,i,l,u;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=Q(t),n||!o){e.next=18;break}return console.log(o),i=p(K,G)(o),console.log(i),e.prev=5,e.next=8,X.a.get("/users/me",{headers:i});case 8:l=e.sent,u=l.data,a(o),r(!0),c(u),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(n,t,a,r,c){return e.apply(this,arguments)}}(),rn=function(e,n,t,r,c){Object(a.useEffect)((function(){an(e,n,t,r,c)}),[e])},cn=function(e,n){var t=Object(a.useRef)(null);Object(a.useEffect)((function(){if(e.length>0){console.log(e),clearTimeout(t.current);var a=setTimeout((function(){var t=e[e.length-1].id;n(t)}),3e3);t.current=a}}),[e])};function on(){var e=Object(m.a)(['\n  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");\n  *,\n  *::after,\n  *::before {\n    box-sizing: border-box;\n  }\n  html {\n    font-size: 10px;\n  }\n  body {\n    font-family: "Roboto", sans-serif;\n    font-size: 16px;\n    background-color: #f0f3f8;\n    margin: 0;\n    padding: 0;\n  }\n  ul,\n  li,\n  ol {\n    margin: 0;\n    padding-inline-start: 0;\n  }\n']);return on=function(){return e},e}var ln=Object(b.b)(on());var un=function(){var e=Object(a.useState)(null),n=Object(l.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)({}),m=Object(l.a)(o,2),p=m[0],g=m[1],O=Object(a.useState)(!1),j=Object(l.a)(O,2),v=j[0],h=j[1],x=Object(a.useState)([]),k=Object(l.a)(x,2),y=k[0],w=k[1];Object(a.useEffect)((function(){d.a.initialize("UA-172045582-1"),d.a.pageview(window.location.pathname+window.location.search)}),[]);var T=function(e){w(Object(i.a)(y).filter((function(n){return n.id!==e})))};cn(y,T),rn(v,t,c,h,g);var S=function(e,n){var t=Object(f.v4)(),a=[].concat(Object(i.a)(y),[{text:n,type:e,id:t}]);w(a)};return r.a.createElement("div",{className:"App"},r.a.createElement(b.a,{styles:ln}),r.a.createElement(u.a,null,r.a.createElement(D,{setIsUserLoggedIn:h,setTokenState:c,alerts:y,removeAlert:T},r.a.createElement(s.b,{path:"/",exact:!0,render:function(){return r.a.createElement(Ze,{isUserLoggedIn:v,setIsUserLoggedIn:h,setTokenState:c,addAlert:S})}}),r.a.createElement(s.b,{path:"/tanks",exact:!0,render:function(){return r.a.createElement(en,{isUserLoggedIn:v,tokenState:t,addAlert:S})}}),r.a.createElement(s.b,{path:"/tanks/:tankID",exact:!0,render:function(e){return r.a.createElement(Pe,Object.assign({},e,{tokenState:t,isUserLoggedIn:v,addAlert:S}))}}),r.a.createElement(s.b,{path:"/me",render:function(){return r.a.createElement(nn,{userAccountInfo:p,isUserLoggedIn:v})}}),r.a.createElement(s.b,{path:"/about",exec:!0,component:tn}))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(un,null)),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.16726980.chunk.js.map