"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[5],{3005:function(n,e,t){t.r(e),t.d(e,{default:function(){return bn}});var r,o,i,c,u,s,a,l,m,d,h,f,p,g,x,b=t(5705),j=t(6727),Z=t(8185),y=t(9434),v=t(5218),P=t(3634),k=t(6916),C=t(2409),w=function(n){return n.contacts.items},N=function(n){return n.contacts.isLoading},F=function(n){return n.contacts.error},I=(0,k.P1)([w,function(n){return n.filter}],(function(n,e){return(0,C.Lu)(n,e,{keys:["name","number"]})})),R=t(168),S=t(6487),z=(0,S.ZP)(b.l0)(r||(r=(0,R.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n  border: 2px solid ",";\n  border-radius: ",";\n  padding: ",";\n  margin-bottom: ",";\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.colors.main}),(function(n){return n.theme.radius}),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(4)})),_=S.ZP.label(o||(o=(0,R.Z)(["\n  height: 82px;\n  display: flex;\n  flex-direction: column;\n  font-style: italic;\n"]))),q=(0,S.ZP)(b.gN)(i||(i=(0,R.Z)(["\n  margin-top: ",";\n  padding: "," ",";\n  line-height: 1.25;\n  border: 1px solid ",";\n  border-radius: ",";\n"])),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.colors.main}),(function(n){return n.theme.radius})),T=(0,S.ZP)(b.Bc)(c||(c=(0,R.Z)(["\n  color: ",";\n  font-style: italic;\n  margin-left: ",";\n"])),(function(n){return n.theme.colors.error}),(function(n){return n.theme.spacing(1)})),E=S.ZP.button(u||(u=(0,R.Z)(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: ",";\n  padding: "," ",";\n  background-color: ",";\n  font-weight: 500;\n  color: ",";\n  border: 1px solid ",";\n  border-radius: ",";\n  transition: background-color ",",\n    color ",", box-shadow ",";\n\n  &:hover {\n    background-color: ",";\n    color: ",";\n    box-shadow: ",";\n  }\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.colors.main}),(function(n){return n.theme.colors.reverse}),(function(n){return n.theme.colors.main}),(function(n){return n.theme.radius}),(function(n){return n.theme.transition}),(function(n){return n.theme.transition}),(function(n){return n.theme.transition}),(function(n){return n.theme.colors.reverse}),(function(n){return n.theme.colors.main}),(function(n){return n.theme.shadow})),L=t(3329),O=(0,j.Ry)().shape({name:(0,j.Z_)().required("Please enter name"),number:(0,j.Rx)().typeError("Please enter only numbers").required("Please enter phone number")}),A={name:"",number:""},Q=function(){var n=(0,y.v9)(w),e=(0,y.I0)(),t=function(t){!function(e){return console.log(e),n.some((function(n){return n.name.toLowerCase()===e.name.toLowerCase()}))}(t)?(e((0,P.uK)(t)),v.ZP.success("Contact ".concat(t.name," was added!"))):alert("".concat(t.name," is already in contacts."))};return(0,L.jsx)(b.J9,{initialValues:A,validationSchema:O,onSubmit:function(n,e){var r=e.resetForm;t(n),r()},children:(0,L.jsxs)(z,{autoComplete:"off",children:[(0,L.jsxs)(_,{htmlFor:"name",children:["Name",(0,L.jsx)(q,{id:"name",type:"text",name:"name"}),(0,L.jsx)(T,{name:"name",component:"span"})]}),(0,L.jsxs)(_,{htmlFor:"number",children:[(0,L.jsx)("span",{children:"Number"}),(0,L.jsx)(q,{id:"number",type:"tel",name:"number"}),(0,L.jsx)(T,{name:"number",component:"span"})]}),(0,L.jsxs)(E,{type:"submit",children:[(0,L.jsx)(Z.cQX,{size:32}),"Add contact"]})]})})},X=S.ZP.ul(s||(s=(0,R.Z)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n  margin-top: ",";\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(2)})),B=S.ZP.p(a||(a=(0,R.Z)(["\n  margin-top: ",";\n  font-style: italic;\n  color: ",";\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.colors.error})),J=t(9514),K=t(4808),M=t(5165),U=t(697),V=(0,S.ZP)(U.Z)(l||(l=(0,R.Z)(["\n  padding: "," 0;\n  font-size: 16px;\n  border: 1px solid ",";\n  background-color: tomato;\n\n  display: flex;\n  align-items: center;\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.colors.main})),D=(S.ZP.label(m||(m=(0,R.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n  font-style: italic;\n"])),(function(n){return n.theme.spacing(1)})),S.ZP.input(d||(d=(0,R.Z)(["\n  padding: "," ",";\n  line-height: 1.25;\n  border: 1px solid ",";\n  border-radius: ",";\n"])),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.colors.main}),(function(n){return n.theme.radius})),t(1165)),G=function(){var n=(0,y.I0)();return(0,L.jsxs)(V,{children:[(0,L.jsx)(M.Z,{fontSize:"large"}),(0,L.jsx)(D.Z,{sx:{display:"flex"},label:"Find contact",onChange:function(e){return n((0,K.T)(e.target.value))}})]})},$=t(2791),H=t(9439),W=t(7948),Y=t.n(W),nn=(0,S.ZP)(b.l0)(h||(h=(0,R.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n  border: 2px solid ",";\n  border-radius: ",";\n  padding: ",";\n  margin-bottom: ",";\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.colors.main}),(function(n){return n.theme.radius}),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(4)})),en=S.ZP.label(f||(f=(0,R.Z)(["\n  height: 82px;\n  display: flex;\n  flex-direction: column;\n  font-style: italic;\n"]))),tn=(0,S.ZP)(b.gN)(p||(p=(0,R.Z)(["\n  margin-top: ",";\n  padding: "," ",";\n  line-height: 1.25;\n  border: 1px solid ",";\n  border-radius: ",";\n"])),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.colors.main}),(function(n){return n.theme.radius})),rn=(0,S.ZP)(b.Bc)(g||(g=(0,R.Z)(["\n  color: ",";\n  font-style: italic;\n  margin-left: ",";\n"])),(function(n){return n.theme.colors.error}),(function(n){return n.theme.spacing(1)})),on=S.ZP.button(x||(x=(0,R.Z)(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: ",";\n  padding: "," ",";\n  background-color: ",";\n  font-weight: 500;\n  color: ",";\n  border: 1px solid ",";\n  border-radius: ",";\n  transition: background-color ",",\n    color ",", box-shadow ",";\n\n  &:hover {\n    background-color: ",";\n    color: ",";\n    box-shadow: ",";\n  }\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.colors.main}),(function(n){return n.theme.colors.reverse}),(function(n){return n.theme.colors.main}),(function(n){return n.theme.radius}),(function(n){return n.theme.transition}),(function(n){return n.theme.transition}),(function(n){return n.theme.transition}),(function(n){return n.theme.colors.reverse}),(function(n){return n.theme.colors.main}),(function(n){return n.theme.shadow})),cn=(0,j.Ry)().shape({name:(0,j.Z_)().required("Please enter name"),number:(0,j.Rx)().typeError("Please enter only numbers").required("Please enter phone number")}),un=function(n){var e=n.id,t=n.currentName,r=n.currentNumber,o=n.onClose,i=(0,y.I0)(),c={name:t,number:r};return(0,L.jsx)(b.J9,{initialValues:c,validationSchema:cn,onSubmit:function(n,t){var r,o,c=t.resetForm;r=e,o=n,console.log(r),console.log(o),i((0,P.Tk)(r,o)),v.ZP.success("Contact ".concat(o.name," was updated!")),c()},children:(0,L.jsxs)(nn,{autoComplete:"off",children:[(0,L.jsxs)(en,{htmlFor:"name",children:["Name",(0,L.jsx)(tn,{id:"currentName",type:"text",name:"name"}),(0,L.jsx)(rn,{name:"currentName",component:"span"})]}),(0,L.jsxs)(en,{htmlFor:"number",children:[(0,L.jsx)("span",{children:"Number"}),(0,L.jsx)(tn,{id:"currentNumber",type:"tel",name:"number"}),(0,L.jsx)(rn,{name:"currentNumber",component:"span"})]}),(0,L.jsxs)(on,{type:"submit",children:[(0,L.jsx)(Z.cQX,{size:32}),"Update contact"]}),(0,L.jsxs)(on,{type:"button",onClick:o,children:[(0,L.jsx)(Z.cQX,{size:32}),"Cancel"]})]})})};Y().setAppElement("#root");var sn,an,ln,mn={overlay:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0, 0, 0, 0.8)",backdropFilter:"blur(4px)",zIndex:1200},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},dn=function(n){var e=n.id,t=n.name,r=n.number,o=n.isOpen,i=n.onCloseModal;return(0,L.jsx)(Y(),{isOpen:o,onRequestClose:i,style:mn,children:(0,L.jsx)(un,{id:e,currentName:t,currentNumber:r,onClose:i})})},hn=S.ZP.div(sn||(sn=(0,R.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: ",";\n\n  border: none;\n  border-radius: ",";\n\n  transition: background-color ",",\n    color ",", box-shadow ",";\n\n  &:hover {\n    background-color: ",";\n    color: ",";\n    box-shadow: ",";\n  }\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.radius}),(function(n){return n.theme.transition}),(function(n){return n.theme.transition}),(function(n){return n.theme.transition}),(function(n){return n.theme.colors.main}),(function(n){return n.theme.colors.reverse}),(function(n){return n.theme.shadow})),fn=S.ZP.span(an||(an=(0,R.Z)(["\n  color: rgb(1, 180, 228);\n  margin-left: ",";\n"])),(function(n){return n.theme.spacing(2)})),pn=S.ZP.button(ln||(ln=(0,R.Z)(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: ",";\n  padding: "," ",";\n  background-color: ",";\n  color: ",";\n  border: 1px solid ",";\n  border-radius: ",";\n  transition: background-color ",",\n    color ",";\n\n  &:hover {\n    background-color: ",";\n    color: ",";\n  }\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.colors.main}),(function(n){return n.theme.colors.reverse}),(function(n){return n.theme.colors.main}),(function(n){return n.theme.radius}),(function(n){return n.theme.transition}),(function(n){return n.theme.transition}),(function(n){return n.theme.colors.reverse}),(function(n){return n.theme.colors.main})),gn=function(n){var e=n.contact,t=e.id,r=e.name,o=e.number,i=(0,y.I0)(),c=(0,$.useState)(!1),u=(0,H.Z)(c,2),s=u[0],a=u[1];return(0,L.jsxs)(hn,{children:[(0,L.jsx)("div",{children:(0,L.jsxs)("p",{children:[r,": ",(0,L.jsx)(fn,{children:o})]})}),(0,L.jsx)("button",{onClick:function(){a(!0)},children:"Update"}),(0,L.jsxs)(pn,{id:t,onClick:function(){return n=t,i((0,P.GK)(n)),void v.ZP.success("Contact was deleted!");var n},children:[(0,L.jsx)(Z.$TR,{}),"Delete"]}),(0,L.jsx)(dn,{id:t,name:r,number:o,isOpen:s,onCloseModal:function(){a(!1)}})]})},xn=function(){var n=(0,y.I0)(),e=(0,y.v9)(w),t=(0,y.v9)(I);return(0,$.useEffect)((function(){n((0,P.yF)())}),[n]),(0,L.jsxs)(X,{children:[e.length>0&&0===t.length&&(0,L.jsx)(B,{children:"No matches found"}),t.map((function(n){return(0,L.jsx)("li",{children:(0,L.jsx)(gn,{contact:n})},n.id)}))]})};function bn(){var n=(0,y.v9)(w),e=(0,y.v9)(N),t=(0,y.v9)(F);return(0,L.jsxs)("div",{children:[(0,L.jsx)(Q,{}),e&&(0,L.jsx)(J.a,{}),(0,L.jsx)("h2",{children:"CONTACTS"}),t?(0,L.jsxs)(B,{children:[t,"! Please reload this page!"]}):(0,L.jsxs)("div",{children:[(0,L.jsx)(G,{}),(0,L.jsx)(xn,{}),0===n.length&&(0,L.jsx)(B,{children:"Contacts list is empty"})]})]})}}}]);
//# sourceMappingURL=5.5700f989.chunk.js.map