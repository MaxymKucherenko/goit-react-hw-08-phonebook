(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[3],{90:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(36);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,c=void 0;try{for(var s,o=e[Symbol.iterator]();!(r=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(i){a=!0,c=i}finally{try{r||null==o.return||o.return()}finally{if(a)throw c}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},91:function(e,t,n){},92:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return _}));var r,a=n(90),c=n(4),s=n(0),o=n(29),i=n(11),u=n(32),d=new Uint8Array(16);function l(){if(!r&&!(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(d)}var b=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var j=function(e){return"string"===typeof e&&b.test(e)},f=[],h=0;h<256;++h)f.push((h+256).toString(16).substr(1));var m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(f[e[t+0]]+f[e[t+1]]+f[e[t+2]]+f[e[t+3]]+"-"+f[e[t+4]]+f[e[t+5]]+"-"+f[e[t+6]]+f[e[t+7]]+"-"+f[e[t+8]]+f[e[t+9]]+"-"+f[e[t+10]]+f[e[t+11]]+f[e[t+12]]+f[e[t+13]]+f[e[t+14]]+f[e[t+15]]).toLowerCase();if(!j(n))throw TypeError("Stringified UUID is invalid");return n};var p=function(e,t,n){var r=(e=e||{}).random||(e.rng||l)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var a=0;a<16;++a)t[n+a]=r[a];return t}return m(r)},O=(n(91),n(2));function x(){var e=Object(s.useState)(""),t=Object(a.a)(e,2),n=t[0],r=t[1],c=Object(s.useState)(""),i=Object(a.a)(c,2),d=i[0],l=i[1],b=p(),j=p(),f=Object(o.b)(),h=Object(a.a)(f,2),m=h[0],x=h[1].isLoading,v=Object(o.d)().data,y=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":r(a);break;case"number":l(a);break;default:return}},g=function(){r(""),l("")};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("form",{className:"submit__form",onSubmit:function(e){e.preventDefault(),void 0===v.find((function(e){return e.name.toLowerCase()===n.toLowerCase()}))?(m({name:n,number:d}),u.b.success("Contact added"),g()):alert("".concat(n," is already in the Contact List"))},children:[Object(O.jsxs)("label",{htmlFor:b,children:[Object(O.jsx)("h2",{children:"Name"}),Object(O.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"The name can only consist of letters, apostrophes, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc. ",required:!0,value:n,onChange:y})]}),Object(O.jsxs)("label",{htmlFor:j,children:[Object(O.jsx)("h2",{children:"Number"}),Object(O.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:d,onChange:y})]}),Object(O.jsx)("button",{className:"submit__btn",type:"submit",disabled:x,children:"Add contact"})]}),Object(O.jsx)("div",{children:Object(O.jsx)(u.a,{})})]})}var v=n(15),y=n.n(v),g=n(21),w=(n(92),function(e){var t=e.contacts,n=e.isFetching,r=Object(o.c)(),c=Object(a.a)(r,1)[0],s=function(){var e=Object(g.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(t).unwrap();case 2:u.b.success("Contact deleted");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsx)(O.Fragment,{children:n?Object(O.jsx)("h1",{children:"Waiting..."}):Object(O.jsxs)("div",{children:[t&&Object(O.jsx)("ul",{className:"contacts__list",children:t.map((function(e){var t=e.name,n=e.number,r=e.id;return Object(O.jsxs)("li",{className:"contacts__item",children:[Object(O.jsx)("p",{className:"contacts__name",children:t}),Object(O.jsx)("p",{className:"contacts__number",children:n}),Object(O.jsx)("button",{className:"contacts__btn",onClick:function(){return s(r)},children:"Delete"})]},r)}))}),Object(O.jsx)("div",{children:Object(O.jsx)(u.a,{})})]})})});function C(e){var t=e.filter;return Object(O.jsxs)("label",{className:"filter",children:[Object(O.jsx)("h3",{children:"Find contacts by name"}),Object(O.jsx)("input",{type:"text",onChange:function(e){t(e.currentTarget.value)}})]})}function _(){var e=Object(s.useState)([]),t=Object(a.a)(e,2),n=t[0],r=t[1],u=Object(o.d)(),d=u.data,l=u.isFetching,b=Object(c.e)(i.b);Object(s.useEffect)((function(){d&&r(d)}),[d]);return Object(O.jsx)(O.Fragment,{children:b?Object(O.jsxs)("div",{className:"phonebook",children:[Object(O.jsx)("section",{className:"addNew",children:Object(O.jsx)(x,{})}),Object(O.jsxs)("section",{className:"contacts",children:[Object(O.jsx)("h2",{className:"contacts__title",children:"Contacts"}),Object(O.jsx)(C,{filter:function(e){if(e){var t=e.toLowerCase();return r(n.filter((function(e){return e.name.toLowerCase().includes(t)})))}r(d)}}),Object(O.jsx)(w,{contacts:n,isFetching:l})]})]}):Object(O.jsx)("div",{children:Object(O.jsx)("h1",{children:"Please login to access to your phonebook"})})})}}}]);
//# sourceMappingURL=3.5e24279c.chunk.js.map