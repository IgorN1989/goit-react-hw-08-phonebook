(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[577],{8577:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ne}});var r=t(9434),i="NOT_FOUND";var o=function(e,n){return e===n};function a(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,a=void 0===r?o:r,u=t.maxSize,c=void 0===u?1:u,s=t.resultEqualityCheck,l=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,i=0;i<r;i++)if(!e(n[i],t[i]))return!1;return!0}}(a),d=1===c?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:i},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(l):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var o=t[r];return r>0&&(t.splice(r,1),t.unshift(o)),o.value}return i}return{get:r,put:function(n,o){r(n)===i&&(t.unshift({key:n,value:o}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(c,l);function f(){var n=d.get(arguments);if(n===i){if(n=e.apply(null,arguments),s){var t=d.getEntries(),r=t.find((function(e){return s(e.value,n)}));r&&(n=r.value)}d.put(arguments,n)}return n}return f.clearCache=function(){return d.clear()},f}function u(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function c(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var i=function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var o,a=0,c={memoizeOptions:void 0},s=r.pop();if("object"===typeof s&&(c=s,s=r.pop()),"function"!==typeof s)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof s+"]");var l=c,d=l.memoizeOptions,f=void 0===d?t:d,h=Array.isArray(f)?f:[f],m=u(r),p=e.apply(void 0,[function(){return a++,s.apply(null,arguments)}].concat(h)),x=e((function(){for(var e=[],n=m.length,t=0;t<n;t++)e.push(m[t].apply(null,arguments));return o=p.apply(null,e)}));return Object.assign(x,{resultFunc:s,memoizedResultFunc:p,dependencies:m,lastResult:function(){return o},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),x};return i}var s=c(a),l=t(7462),d=t(1515),f=t.n(d),h={CASE_SENSITIVE_EQUAL:7,EQUAL:6,STARTS_WITH:5,WORD_STARTS_WITH:4,CONTAINS:3,ACRONYM:2,MATCHES:1,NO_MATCH:0};p.rankings=h;var m=function(e,n){return String(e.rankedValue).localeCompare(String(n.rankedValue))};function p(e,n,t){void 0===t&&(t={});var r=t,i=r.keys,o=r.threshold,a=void 0===o?h.MATCHES:o,u=r.baseSort,c=void 0===u?m:u,s=r.sorter,d=void 0===s?function(e){return e.sort((function(e,n){return function(e,n,t){var r=-1,i=1,o=e.rank,a=e.keyIndex,u=n.rank,c=n.keyIndex;return o===u?a===c?t(e,n):a<c?r:i:o>u?r:i}(e,n,c)}))}:s,f=e.reduce((function(e,r,o){var u=function(e,n,t,r){if(!n){return{rankedValue:e,rank:x(e,t,r),keyIndex:-1,keyThreshold:r.threshold}}return function(e,n){for(var t=[],r=0,i=n.length;r<i;r++)for(var o=n[r],a=b(o),u=g(e,o),c=0,s=u.length;c<s;c++)t.push({itemValue:u[c],attributes:a});return t}(e,n).reduce((function(e,n,i){var o=e.rank,a=e.rankedValue,u=e.keyIndex,c=e.keyThreshold,s=n.itemValue,l=n.attributes,d=x(s,t,r),f=a,m=l.minRanking,p=l.maxRanking,v=l.threshold;return d<m&&d>=h.MATCHES?d=m:d>p&&(d=p),d>o&&(o=d,u=i,c=v,f=s),{rankedValue:f,rank:o,keyIndex:u,keyThreshold:c}}),{rankedValue:e,rank:h.NO_MATCH,keyIndex:-1,keyThreshold:r.threshold})}(r,i,n,t),c=u.rank,s=u.keyThreshold;c>=(void 0===s?a:s)&&e.push((0,l.Z)({},u,{item:r,index:o}));return e}),[]);return d(f).map((function(e){return e.item}))}function x(e,n,t){return e=v(e,t),(n=v(n,t)).length>e.length?h.NO_MATCH:e===n?h.CASE_SENSITIVE_EQUAL:(e=e.toLowerCase())===(n=n.toLowerCase())?h.EQUAL:e.startsWith(n)?h.STARTS_WITH:e.includes(" "+n)?h.WORD_STARTS_WITH:e.includes(n)?h.CONTAINS:1===n.length?h.NO_MATCH:function(e){var n="";return e.split(" ").forEach((function(e){e.split("-").forEach((function(e){n+=e.substr(0,1)}))})),n}(e).includes(n)?h.ACRONYM:function(e,n){var t=0,r=0;function i(e,n,r){for(var i=r,o=n.length;i<o;i++){if(n[i]===e)return t+=1,i+1}return-1}function o(e){var r=1/e,i=t/n.length;return h.MATCHES+i*r}var a=i(n[0],e,0);if(a<0)return h.NO_MATCH;r=a;for(var u=1,c=n.length;u<c;u++){if(!((r=i(n[u],e,r))>-1))return h.NO_MATCH}return o(r-a)}(e,n)}function v(e,n){return e=""+e,n.keepDiacritics||(e=f()(e)),e}function g(e,n){var t;if("object"===typeof n&&(n=n.key),"function"===typeof n)t=n(e);else if(null==e)t=null;else if(Object.hasOwnProperty.call(e,n))t=e[n];else{if(n.includes("."))return function(e,n){for(var t=e.split("."),r=[n],i=0,o=t.length;i<o;i++){for(var a=t[i],u=[],c=0,s=r.length;c<s;c++){var l=r[c];if(null!=l)if(Object.hasOwnProperty.call(l,a)){var d=l[a];null!=d&&u.push(d)}else"*"===a&&(u=u.concat(l))}r=u}if(Array.isArray(r[0])){var f=[];return f.concat.apply(f,r)}return r}(n,e);t=null}return null==t?[]:Array.isArray(t)?t:[String(t)]}var y={maxRanking:1/0,minRanking:-1/0};function b(e){return"string"===typeof e?y:(0,l.Z)({},y,e)}var Z=function(e){return e.contacts.items},C=function(e){return e.contacts.isLoading},j=function(e){return e.contacts.error},k=s([Z,function(e){return e.filter}],(function(e,n){return p(e,n,{keys:["name","number"]})})),A=t(4808),S=t(697),O=t(8089),E=t(3859),I=t(3329),w=function(){var e=(0,r.I0)();return(0,I.jsxs)(S.Z,{component:"form",autoComplete:"off",sx:{display:"flex",alignItems:"center",mb:4,color:"#1565c0"},onChange:function(n){return e((0,A.T)(n.target.value))},children:[(0,I.jsx)(E.Z,{fontSize:"large"}),(0,I.jsx)(O.Z,{sx:{display:"flex"},label:"Find contact",fullWidth:!0})]})},T=t(9439),W=t(2791),M=t(3634),N=t(7225),z=t(890),R=t(3400),U=t(3044),H=t(2679),L=t(2809),V=t(5218),_=t(5527),P=t(7293),G=t(8471),D=t(4414),q=t(237),F={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",boxShadow:24,borderRadius:"4px",p:4},Y=function(e){var n=e.isOpen,t=e.onCloseModal,r=e.children;return(0,I.jsx)(q.Z,{open:n,onClose:t,sx:{backdropFilter:"blur(4px)",backgroundColor:"rgba(25, 118, 210, 0.5)"},children:(0,I.jsx)(S.Z,{sx:F,children:r})})},Q=t(4294),X=function(e){var n=e.id,t=e.currentName,i=e.currentNumber,o=e.onClose,a=(0,r.I0)();return(0,I.jsxs)(S.Z,{component:"form",autoComplete:"off",onSubmit:function(e){e.preventDefault();var n=e.currentTarget,t=n.id,r=n.elements.name.value,i=n.elements.number.value;a((0,M.Tk)(t,{name:r,number:i})),V.ZP.success("Contact ".concat(r," was updated!")),o()},id:n,children:[(0,I.jsx)(O.Z,{margin:"normal",label:"Current Name",name:"name",defaultValue:t,fullWidth:!0,autoFocus:!0,required:!0}),(0,I.jsx)(O.Z,{margin:"normal",label:"Current Number",name:"number",type:"tel",defaultValue:i,fullWidth:!0,required:!0}),(0,I.jsx)(Q.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:2},children:"Update contact"}),(0,I.jsx)(Q.Z,{type:"button",fullWidth:!0,variant:"contained",sx:{mt:2},onClick:o,children:"Cancel"})]})},K=function(e){var n=e.contact,t=n.id,i=n.name,o=n.number,a=(0,r.I0)(),u=(0,W.useState)(!1),c=(0,T.Z)(u,2),s=c[0],l=c[1],d=function(){l(!1)};return(0,I.jsxs)(_.Z,{elevation:12,sx:{display:"flex",justifyContent:"space-between",alignItems:"center",py:2,pl:{xs:2,md:4},pr:{xs:1,md:2},background:"linear-gradient(90deg, rgba(21,101,192,1) 33%, rgba(25,118,210,1) 66%, rgba(66,165,245,1) 100%)"},children:[(0,I.jsxs)(S.Z,{sx:{display:"flex",flexDirection:{xs:"column",sm:"row"},alignItems:{xs:"start",sm:"center"},gap:1,color:"white"},children:[(0,I.jsxs)(S.Z,{sx:{display:"flex",alignItems:"center",gap:1,fontSize:{xs:0,sm:20,md:24}},children:[(0,I.jsx)(U.Z,{sx:{bgcolor:"white",color:"#1565c0",mr:1}}),(0,I.jsx)(z.Z,{component:"p",variant:"h6",sx:{fontSize:{xs:16,sm:20,md:24},mr:1},children:i})]}),(0,I.jsxs)(S.Z,{sx:{display:"flex",alignItems:"center",gap:1,fontSize:{xs:16,sm:20,md:24}},children:[(0,I.jsx)(P.Z,{}),(0,I.jsx)(z.Z,{component:"p",variant:"h6",sx:{fontSize:{xs:16,sm:20,md:24}},children:o})]})]}),(0,I.jsxs)(S.Z,{sx:{display:"flex",gap:.5,alignItems:"center"},children:[(0,I.jsx)(R.Z,{type:"button",onClick:function(){l(!0)},children:(0,I.jsx)(U.Z,{sx:{bgcolor:"white",color:"#1565c0",":hover":{bgcolor:"#1565c0",color:"white"}},children:(0,I.jsx)(G.Z,{})})}),(0,I.jsx)(R.Z,{type:"button",id:t,onClick:function(){return e=t,a((0,M.GK)(e)),void V.ZP.success("Contact was deleted!");var e},children:(0,I.jsx)(U.Z,{sx:{bgcolor:"white",color:"#1565c0",":hover":{bgcolor:"#1565c0",color:"white"}},children:(0,I.jsx)(D.Z,{})})})]}),(0,I.jsx)(Y,{isOpen:s,onCloseModal:d,children:(0,I.jsx)(X,{id:t,currentName:i,currentNumber:o,onClose:d})})]})},B=function(e){var n=e.onClose,t=(0,r.v9)(Z),i=(0,r.I0)();return(0,I.jsxs)(S.Z,{component:"form",autoComplete:"off",onSubmit:function(e){e.preventDefault();var r=e.currentTarget,o=r.elements.name.value,a=r.elements.number.value;!function(e){return console.log(e),t.some((function(n){return n.name.toLowerCase()===e.toLowerCase()}))}(o)?(i((0,M.uK)({name:o,number:a})),V.ZP.success("Contact ".concat(o," was added!")),n()):alert("".concat(o," is already in contacts."))},children:[(0,I.jsx)(O.Z,{margin:"normal",label:"Name",name:"name",fullWidth:!0,autoFocus:!0,required:!0}),(0,I.jsx)(O.Z,{margin:"normal",label:"Number",name:"number",type:"tel",fullWidth:!0,required:!0}),(0,I.jsx)(Q.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:2},children:"Add contact"}),(0,I.jsx)(Q.Z,{type:"button",fullWidth:!0,variant:"contained",sx:{mt:2},onClick:n,children:"Cancel"})]})},J=function(){var e=(0,r.I0)(),n=(0,r.v9)(Z),t=(0,r.v9)(k),i=(0,W.useState)(!1),o=(0,T.Z)(i,2),a=o[0],u=o[1],c=function(){u(!1)};return(0,W.useEffect)((function(){e((0,M.yF)())}),[e]),(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(N.Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:[n.length>0&&0===t.length&&(0,I.jsxs)(S.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",gap:1,color:"#1976d2"},children:[(0,I.jsx)(H.Z,{sx:{fontSize:36}}),(0,I.jsx)(z.Z,{color:"#1976d2",component:"h3",variant:"h5",fontWeight:700,children:"No matches found"})]}),t.map((function(e){return(0,I.jsx)("li",{children:(0,I.jsx)(K,{contact:e})},e.id)}))]}),0===n.length&&(0,I.jsx)(S.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,I.jsx)(z.Z,{color:"#1976d2",component:"h3",variant:"h5",fontWeight:700,children:"Contacts list is empty"})}),(0,I.jsx)(S.Z,{sx:{display:"flex",justifyContent:"center",mt:4},children:(0,I.jsx)(R.Z,{type:"button",onClick:function(){u(!0)},children:(0,I.jsx)(U.Z,{sx:{width:96,height:96,bgcolor:"#1976d2",":hover":{bgcolor:"#42a5f5"}},children:(0,I.jsx)(L.Z,{sx:{fontSize:64}})})})}),(0,I.jsx)(Y,{isOpen:a,onCloseModal:c,children:(0,I.jsx)(B,{onClose:c})})]})},$=t(1614),ee=t(7482);function ne(){var e=(0,r.v9)(C),n=(0,r.v9)(j);return(0,I.jsxs)($.Z,{component:"main",sx:{minHeight:"calc(100vh - 48px)",display:"flex",flexDirection:"column",pt:8},children:[e&&(0,I.jsx)(ee.Z,{sx:{height:"8px",position:"fixed",top:0,left:0}}),n?(0,I.jsxs)(z.Z,{color:"#f44336",component:"h3",variant:"h5",fontWeight:700,children:[n,"! Please reload this page!"]}):(0,I.jsxs)("div",{children:[(0,I.jsx)(w,{}),(0,I.jsx)(J,{})]})]})}},4414:function(e,n,t){"use strict";var r=t(4836);n.Z=void 0;var i=r(t(5649)),o=t(3329),a=(0,i.default)((0,o.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}),"ClearOutlined");n.Z=a},8471:function(e,n,t){"use strict";var r=t(4836);n.Z=void 0;var i=r(t(5649)),o=t(3329),a=(0,i.default)((0,o.jsx)("path",{d:"m14.06 9.02.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"}),"EditOutlined");n.Z=a},7293:function(e,n,t){"use strict";var r=t(4836);n.Z=void 0;var i=r(t(5649)),o=t(3329),a=(0,i.default)((0,o.jsx)("path",{d:"M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z"}),"LocalPhoneOutlined");n.Z=a},2809:function(e,n,t){"use strict";var r=t(4836);n.Z=void 0;var i=r(t(5649)),o=t(3329),a=(0,i.default)((0,o.jsx)("path",{d:"M20 9V6h-2v3h-3v2h3v3h2v-3h3V9h-3zM9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm6.39 8.56C13.71 13.7 11.53 13 9 13s-4.71.7-6.39 1.56C1.61 15.07 1 16.1 1 17.22V20h16v-2.78c0-1.12-.61-2.15-1.61-2.66zM15 18H3v-.78c0-.38.2-.72.52-.88C4.71 15.73 6.63 15 9 15c2.37 0 4.29.73 5.48 1.34.32.16.52.5.52.88V18z"}),"PersonAddAltOutlined");n.Z=a},3859:function(e,n,t){"use strict";var r=t(4836);n.Z=void 0;var i=r(t(5649)),o=t(3329),a=(0,i.default)((0,o.jsx)("path",{d:"M10 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM4 18c.22-.72 3.31-2 6-2 0-.7.13-1.37.35-1.99C7.62 13.91 2 15.27 2 18v2h9.54c-.52-.58-.93-1.25-1.19-2H4zm15.43.02c.36-.59.57-1.28.57-2.02 0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4c.74 0 1.43-.22 2.02-.57L20.59 22 22 20.59c-1.5-1.5-.79-.8-2.57-2.57zM16 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"}),"PersonSearchOutlined");n.Z=a},2679:function(e,n,t){"use strict";var r=t(4836);n.Z=void 0;var i=r(t(5649)),o=t(3329),a=(0,i.default)([(0,o.jsx)("circle",{cx:"15.5",cy:"9.5",r:"1.5"},"0"),(0,o.jsx)("circle",{cx:"8.5",cy:"9.5",r:"1.5"},"1"),(0,o.jsx)("path",{d:"M12 14c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5zm-.01-12C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"},"2")],"SentimentDissatisfiedOutlined");n.Z=a},1614:function(e,n,t){"use strict";t.d(n,{Z:function(){return k}});var r=t(4942),i=t(3366),o=t(7462),a=t(2791),u=t(3733),c=t(1122),s=t(1217),l=t(4419),d=t(7078),f=(0,t(4046).ZP)(),h=t(5080),m=t(3329),p=["className","component","disableGutters","fixed","maxWidth","classes"],x=(0,h.Z)(),v=f("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["maxWidth".concat((0,c.Z)(String(t.maxWidth)))],t.fixed&&n.fixed,t.disableGutters&&n.disableGutters]}}),g=function(e){return(0,d.Z)({props:e,name:"MuiContainer",defaultTheme:x})},y=function(e,n){var t=e.classes,r=e.fixed,i=e.disableGutters,o=e.maxWidth,a={root:["root",o&&"maxWidth".concat((0,c.Z)(String(o))),r&&"fixed",i&&"disableGutters"]};return(0,l.Z)(a,(function(e){return(0,s.Z)(n,e)}),t)};var b=t(4036),Z=t(6934),C=t(1402),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.createStyledComponent,t=void 0===n?v:n,c=e.useThemeProps,s=void 0===c?g:c,l=e.componentName,d=void 0===l?"MuiContainer":l,f=t((function(e){var n=e.theme,t=e.ownerState;return(0,o.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&(0,r.Z)({paddingLeft:n.spacing(2),paddingRight:n.spacing(2)},n.breakpoints.up("sm"),{paddingLeft:n.spacing(3),paddingRight:n.spacing(3)}))}),(function(e){var n=e.theme;return e.ownerState.fixed&&Object.keys(n.breakpoints.values).reduce((function(e,t){var r=t,i=n.breakpoints.values[r];return 0!==i&&(e[n.breakpoints.up(r)]={maxWidth:"".concat(i).concat(n.breakpoints.unit)}),e}),{})}),(function(e){var n=e.theme,t=e.ownerState;return(0,o.Z)({},"xs"===t.maxWidth&&(0,r.Z)({},n.breakpoints.up("xs"),{maxWidth:Math.max(n.breakpoints.values.xs,444)}),t.maxWidth&&"xs"!==t.maxWidth&&(0,r.Z)({},n.breakpoints.up(t.maxWidth),{maxWidth:"".concat(n.breakpoints.values[t.maxWidth]).concat(n.breakpoints.unit)}))})),h=a.forwardRef((function(e,n){var t=s(e),r=t.className,a=t.component,c=void 0===a?"div":a,l=t.disableGutters,h=void 0!==l&&l,x=t.fixed,v=void 0!==x&&x,g=t.maxWidth,b=void 0===g?"lg":g,Z=(0,i.Z)(t,p),C=(0,o.Z)({},t,{component:c,disableGutters:h,fixed:v,maxWidth:b}),j=y(C,d);return(0,m.jsx)(f,(0,o.Z)({as:c,ownerState:C,className:(0,u.Z)(j.root,r),ref:n},Z))}));return h}({createStyledComponent:(0,Z.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["maxWidth".concat((0,b.Z)(String(t.maxWidth)))],t.fixed&&n.fixed,t.disableGutters&&n.disableGutters]}}),useThemeProps:function(e){return(0,C.Z)({props:e,name:"MuiContainer"})}}),k=j},1515:function(e){var n={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\u1ea4":"A","\u1eae":"A","\u1eb2":"A","\u1eb4":"A","\u1eb6":"A","\xc6":"AE","\u1ea6":"A","\u1eb0":"A","\u0202":"A","\xc7":"C","\u1e08":"C","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\u1ebe":"E","\u1e16":"E","\u1ec0":"E","\u1e14":"E","\u1e1c":"E","\u0206":"E","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\u1e2e":"I","\u020a":"I","\xd0":"D","\xd1":"N","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\u1ed0":"O","\u1e4c":"O","\u1e52":"O","\u020e":"O","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xdd":"Y","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\u1ea5":"a","\u1eaf":"a","\u1eb3":"a","\u1eb5":"a","\u1eb7":"a","\xe6":"ae","\u1ea7":"a","\u1eb1":"a","\u0203":"a","\xe7":"c","\u1e09":"c","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\u1ebf":"e","\u1e17":"e","\u1ec1":"e","\u1e15":"e","\u1e1d":"e","\u0207":"e","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\u1e2f":"i","\u020b":"i","\xf0":"d","\xf1":"n","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\u1ed1":"o","\u1e4d":"o","\u1e53":"o","\u020f":"o","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xfd":"y","\xff":"y","\u0100":"A","\u0101":"a","\u0102":"A","\u0103":"a","\u0104":"A","\u0105":"a","\u0106":"C","\u0107":"c","\u0108":"C","\u0109":"c","\u010a":"C","\u010b":"c","\u010c":"C","\u010d":"c","C\u0306":"C","c\u0306":"c","\u010e":"D","\u010f":"d","\u0110":"D","\u0111":"d","\u0112":"E","\u0113":"e","\u0114":"E","\u0115":"e","\u0116":"E","\u0117":"e","\u0118":"E","\u0119":"e","\u011a":"E","\u011b":"e","\u011c":"G","\u01f4":"G","\u011d":"g","\u01f5":"g","\u011e":"G","\u011f":"g","\u0120":"G","\u0121":"g","\u0122":"G","\u0123":"g","\u0124":"H","\u0125":"h","\u0126":"H","\u0127":"h","\u1e2a":"H","\u1e2b":"h","\u0128":"I","\u0129":"i","\u012a":"I","\u012b":"i","\u012c":"I","\u012d":"i","\u012e":"I","\u012f":"i","\u0130":"I","\u0131":"i","\u0132":"IJ","\u0133":"ij","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u1e30":"K","\u1e31":"k","K\u0306":"K","k\u0306":"k","\u0139":"L","\u013a":"l","\u013b":"L","\u013c":"l","\u013d":"L","\u013e":"l","\u013f":"L","\u0140":"l","\u0141":"l","\u0142":"l","\u1e3e":"M","\u1e3f":"m","M\u0306":"M","m\u0306":"m","\u0143":"N","\u0144":"n","\u0145":"N","\u0146":"n","\u0147":"N","\u0148":"n","\u0149":"n","N\u0306":"N","n\u0306":"n","\u014c":"O","\u014d":"o","\u014e":"O","\u014f":"o","\u0150":"O","\u0151":"o","\u0152":"OE","\u0153":"oe","P\u0306":"P","p\u0306":"p","\u0154":"R","\u0155":"r","\u0156":"R","\u0157":"r","\u0158":"R","\u0159":"r","R\u0306":"R","r\u0306":"r","\u0212":"R","\u0213":"r","\u015a":"S","\u015b":"s","\u015c":"S","\u015d":"s","\u015e":"S","\u0218":"S","\u0219":"s","\u015f":"s","\u0160":"S","\u0161":"s","\u0162":"T","\u0163":"t","\u021b":"t","\u021a":"T","\u0164":"T","\u0165":"t","\u0166":"T","\u0167":"t","T\u0306":"T","t\u0306":"t","\u0168":"U","\u0169":"u","\u016a":"U","\u016b":"u","\u016c":"U","\u016d":"u","\u016e":"U","\u016f":"u","\u0170":"U","\u0171":"u","\u0172":"U","\u0173":"u","\u0216":"U","\u0217":"u","V\u0306":"V","v\u0306":"v","\u0174":"W","\u0175":"w","\u1e82":"W","\u1e83":"w","X\u0306":"X","x\u0306":"x","\u0176":"Y","\u0177":"y","\u0178":"Y","Y\u0306":"Y","y\u0306":"y","\u0179":"Z","\u017a":"z","\u017b":"Z","\u017c":"z","\u017d":"Z","\u017e":"z","\u017f":"s","\u0192":"f","\u01a0":"O","\u01a1":"o","\u01af":"U","\u01b0":"u","\u01cd":"A","\u01ce":"a","\u01cf":"I","\u01d0":"i","\u01d1":"O","\u01d2":"o","\u01d3":"U","\u01d4":"u","\u01d5":"U","\u01d6":"u","\u01d7":"U","\u01d8":"u","\u01d9":"U","\u01da":"u","\u01db":"U","\u01dc":"u","\u1ee8":"U","\u1ee9":"u","\u1e78":"U","\u1e79":"u","\u01fa":"A","\u01fb":"a","\u01fc":"AE","\u01fd":"ae","\u01fe":"O","\u01ff":"o","\xde":"TH","\xfe":"th","\u1e54":"P","\u1e55":"p","\u1e64":"S","\u1e65":"s","X\u0301":"X","x\u0301":"x","\u0403":"\u0413","\u0453":"\u0433","\u040c":"\u041a","\u045c":"\u043a","A\u030b":"A","a\u030b":"a","E\u030b":"E","e\u030b":"e","I\u030b":"I","i\u030b":"i","\u01f8":"N","\u01f9":"n","\u1ed2":"O","\u1ed3":"o","\u1e50":"O","\u1e51":"o","\u1eea":"U","\u1eeb":"u","\u1e80":"W","\u1e81":"w","\u1ef2":"Y","\u1ef3":"y","\u0200":"A","\u0201":"a","\u0204":"E","\u0205":"e","\u0208":"I","\u0209":"i","\u020c":"O","\u020d":"o","\u0210":"R","\u0211":"r","\u0214":"U","\u0215":"u","B\u030c":"B","b\u030c":"b","\u010c\u0323":"C","\u010d\u0323":"c","\xca\u030c":"E","\xea\u030c":"e","F\u030c":"F","f\u030c":"f","\u01e6":"G","\u01e7":"g","\u021e":"H","\u021f":"h","J\u030c":"J","\u01f0":"j","\u01e8":"K","\u01e9":"k","M\u030c":"M","m\u030c":"m","P\u030c":"P","p\u030c":"p","Q\u030c":"Q","q\u030c":"q","\u0158\u0329":"R","\u0159\u0329":"r","\u1e66":"S","\u1e67":"s","V\u030c":"V","v\u030c":"v","W\u030c":"W","w\u030c":"w","X\u030c":"X","x\u030c":"x","Y\u030c":"Y","y\u030c":"y","A\u0327":"A","a\u0327":"a","B\u0327":"B","b\u0327":"b","\u1e10":"D","\u1e11":"d","\u0228":"E","\u0229":"e","\u0190\u0327":"E","\u025b\u0327":"e","\u1e28":"H","\u1e29":"h","I\u0327":"I","i\u0327":"i","\u0197\u0327":"I","\u0268\u0327":"i","M\u0327":"M","m\u0327":"m","O\u0327":"O","o\u0327":"o","Q\u0327":"Q","q\u0327":"q","U\u0327":"U","u\u0327":"u","X\u0327":"X","x\u0327":"x","Z\u0327":"Z","z\u0327":"z"},t=Object.keys(n).join("|"),r=new RegExp(t,"g"),i=new RegExp(t,""),o=function(e){return e.replace(r,(function(e){return n[e]}))};e.exports=o,e.exports.has=function(e){return!!e.match(i)},e.exports.remove=o}}]);
//# sourceMappingURL=577.f116a378.chunk.js.map