(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(6),s=n.n(c),a=n(2),r=n(1),o=(n(11),n(12),n(13),n(0)),i=function(e){var t=e.posts,n=e.selectedPostId,c=e.onOpenPost;return Object(o.jsxs)("div",{className:"PostsList",children:[Object(o.jsx)("h2",{children:"Posts:"}),Object(o.jsx)("ul",{className:"PostsList__list",children:t.map((function(e){return Object(o.jsxs)("li",{className:"PostsList__item",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("b",{children:"[User #".concat(e.userId,"]: ")}),e.title]}),Object(o.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){return c(e.id)},children:n===e.id?"Close":"Open"})]},e.id)}))})]})},u=n(4),l=n(3),j=n.n(l),b=function(){var e=Object(u.a)(j.a.mark((function e(t,n){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://mate.academy/students-api").concat(t),n);case 2:return c=e.sent,e.abrupt("return",c.json());case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),d=function(e){return b("/comments?postId=".concat(e))},m=function(e){return b("/comments/".concat(e),{method:"DELETE"})},p=function(e){return b("/comments",{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)})},h=(n(16),function(e){var t=e.postId,n=e.onSubmit,c=Object(r.useState)(""),s=Object(a.a)(c,2),i=s[0],u=s[1],l=Object(r.useState)(""),j=Object(a.a)(l,2),b=j[0],d=j[1],m=Object(r.useState)(""),p=Object(a.a)(m,2),h=p[0],O=p[1];return Object(o.jsxs)("form",{className:"NewCommentForm",onSubmit:function(e){n(e,{name:i,email:b,body:h,postId:t}),O(""),d(""),u("")},children:[Object(o.jsx)("div",{className:"form-field",children:Object(o.jsx)("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",value:i,onChange:function(e){return u(e.target.value)}})}),Object(o.jsx)("div",{className:"form-field",children:Object(o.jsx)("input",{type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input",value:b,onChange:function(e){return d(e.target.value)}})}),Object(o.jsx)("div",{className:"form-field",children:Object(o.jsx)("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",value:h,onChange:function(e){return O(e.target.value)}})}),Object(o.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",children:"Add a comment"})]})}),O=(n(17),function(e){var t=e.postId,n=Object(r.useState)(null),c=Object(a.a)(n,2),s=c[0],i=c[1],l=Object(r.useState)([]),O=Object(a.a)(l,2),f=O[0],x=O[1],v=Object(r.useState)(!0),_=Object(a.a)(v,2),N=_[0],y=_[1];Object(r.useEffect)((function(){t?(function(e){return b("/posts/".concat(e))}(t).then((function(e){return i(e)})),d(t).then((function(e){return x(e)}))):i(null)}),[t]);var C=function(){var e=Object(u.a)(j.a.mark((function e(n){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(n);case 2:if(!e.sent){e.next=8;break}return e.next=6,d(t);case 6:c=e.sent,x(c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=Object(r.useCallback)(function(){var e=Object(u.a)(j.a.mark((function e(n,c){var s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,p(c);case 3:if(!e.sent){e.next=9;break}return e.next=7,d(t);case 7:s=e.sent,x(s);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[f]);return Object(o.jsx)("div",{className:"PostDetails",children:s?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{children:"Post details:"}),Object(o.jsx)("section",{className:"PostDetails__post",children:Object(o.jsx)("p",{children:s.title})}),Object(o.jsxs)("section",{className:"PostDetails__comments",children:[Object(o.jsxs)("button",{type:"button",className:"button",onClick:function(){return y(!N)},children:[N?"Hide ".concat(f.length):"Show"," ","comments"]}),N&&Object(o.jsx)("ul",{className:"PostDetails__list",children:f.map((function(e){return Object(o.jsxs)("li",{className:"PostDetails__list-item",children:[Object(o.jsx)("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return C(e.id)},children:"X"}),Object(o.jsx)("p",{children:e.body})]},e.id)}))})]}),Object(o.jsx)("section",{children:Object(o.jsx)("div",{className:"PostDetails__form-wrapper",children:Object(o.jsx)(h,{postId:t,onSubmit:P})})})]}):"Choose the post"})}),f=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(0),u=Object(a.a)(s,2),l=u[0],j=u[1],d=Object(r.useState)(0),m=Object(a.a)(d,2),p=m[0],h=m[1];Object(r.useEffect)((function(){var e;l?(e=l,b("/posts?userId=".concat(e))).then((function(e){return c(e)})):b("/posts").then((function(e){return c(e)}))}),[l]);var f=Object(r.useCallback)((function(e){h(e===p?0:e)}),[p]);return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("header",{className:"App__header",children:Object(o.jsxs)("label",{children:["Select a user: \xa0",Object(o.jsxs)("select",{className:"App__user-selector",onChange:function(e){return j(Number(e.target.value))},children:[Object(o.jsx)("option",{value:"0",children:"All users"}),Object(o.jsx)("option",{value:"1",children:"Leanne Graham"}),Object(o.jsx)("option",{value:"2",children:"Ervin Howell"}),Object(o.jsx)("option",{value:"3",children:"Clementine Bauch"}),Object(o.jsx)("option",{value:"4",children:"Patricia Lebsack"}),Object(o.jsx)("option",{value:"5",children:"Chelsey Dietrich"}),Object(o.jsx)("option",{value:"6",children:"Mrs. Dennis Schulist"}),Object(o.jsx)("option",{value:"7",children:"Kurtis Weissnat"}),Object(o.jsx)("option",{value:"8",children:"Nicholas Runolfsdottir V"}),Object(o.jsx)("option",{value:"9",children:"Glenna Reichert"}),Object(o.jsx)("option",{value:"10",children:"Leanne Graham"})]})]})}),Object(o.jsxs)("main",{className:"App__main",children:[Object(o.jsx)("div",{className:"App__sidebar",children:Object(o.jsx)(i,{posts:n,selectedPostId:p,onOpenPost:f})}),Object(o.jsx)("div",{className:"App__content",children:Object(o.jsx)(O,{postId:p})})]})]})};s.a.render(Object(o.jsx)(f,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.04594330.chunk.js.map