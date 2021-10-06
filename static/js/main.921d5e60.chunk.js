(this["webpackJsonpsmart-thermostat-web"]=this["webpackJsonpsmart-thermostat-web"]||[]).push([[0],{56:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);a(56);var n=a(1),c=a.n(n),r=a(38),s=a.n(r),i=a(64),j=a(51),d=Object(i.a)({apiKey:"AIzaSyAEqiutxiK9K41-zYltwLMIxNjMZvAq014",authDomain:"smart-thermostat-92710.firebaseapp.com",projectId:"smart-thermostat-92710",storageBucket:"smart-thermostat-92710.appspot.com",messagingSenderId:"31001839536",appId:"1:31001839536:web:a4c255c21db37087f37875"}),o=Object(j.a)(d),l=a(32),u=function(e){return e?{id:e.uid,name:e.displayName,email:e.email,phone:e.phoneNumber}:null},b=a(12),h=a(61),O=a(92),x=a(48),m=a(47),v={dashboard:"/dashboard",schedule:"/schedule",settings:"/settings",signIn:"/signin"},p=a(4);var f=function(){return Object(p.jsx)(x.a,{collapseOnSelect:!0,expand:"md",bg:"primary",variant:"dark",className:"mb-4",children:Object(p.jsxs)(h.a,{children:[Object(p.jsx)(m.LinkContainer,{to:v.dashboard,children:Object(p.jsx)(x.a.Brand,{href:v.dashboard,children:"Smart Thermostat"})}),Object(p.jsx)(x.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(p.jsx)(x.a.Collapse,{id:"responsive-navbar-nav",children:Object(p.jsxs)(O.a,{className:"me-auto",children:[Object(p.jsx)(m.LinkContainer,{to:v.dashboard,children:Object(p.jsx)(O.a.Link,{children:"Dashboard"})}),Object(p.jsx)(m.LinkContainer,{to:v.schedule,children:Object(p.jsx)(O.a.Link,{children:"Schedule"})}),Object(p.jsx)(m.LinkContainer,{to:v.settings,children:Object(p.jsx)(O.a.Link,{children:"Settings"})})]})})]})})},g=a(39),N=a(15);var w=function(e){var t=e.children;return Object(p.jsx)("div",{className:"dial dial-circle",children:Object(p.jsx)("div",{className:"circle__inner",children:Object(p.jsx)("div",{className:"circle__wrapper",children:Object(p.jsx)("div",{className:"circle__content",children:t})})})})};var S=function(){var e=Object(n.useState)(72),t=Object(b.a)(e,2),a=t[0],c=t[1],r=65,s="6:00pm";return Object(p.jsx)(w,{children:Object(p.jsxs)("div",{className:"dial-stack",children:[Object(p.jsx)("div",{className:"adjust-button up",onClick:function(){return c((function(e){return++e}))},children:"\u2191"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"text-secondary",children:"SET TO"}),Object(p.jsxs)("div",{className:"set-temp",children:[a,"\xba"]}),Object(p.jsxs)("div",{className:"text-muted mt-3",children:["Scheduled change to ",r,"\xba",Object(p.jsx)("br",{}),"at ",s]})]}),Object(p.jsx)("div",{className:"adjust-button down",onClick:function(){return c((function(e){return--e}))},children:"\u2193"})]})})},y=a(29),C=a(94);var I=function(e){var t=Object.assign({},e);return Object(p.jsxs)(C.a,Object(y.a)(Object(y.a)({className:"content-card"},t),{},{children:[Object(p.jsx)(C.a.Header,{children:"Indoor"}),Object(p.jsxs)(C.a.Body,{children:["Temperature: ",Object(p.jsxs)("b",{children:[71,"\xba"]}),Object(p.jsx)("br",{}),"Humidity: ",Object(p.jsxs)("b",{children:[40,"%"]})]})]}))};var L=function(e){var t=Object.assign({},e);return Object(p.jsxs)(C.a,Object(y.a)(Object(y.a)({className:"content-card"},t),{},{children:[Object(p.jsx)(C.a.Header,{children:"Outdoor"}),Object(p.jsxs)(C.a.Body,{children:["Temperature: ",Object(p.jsxs)("b",{children:[43,"\xba"]}),Object(p.jsx)("br",{}),"Humidity: ",Object(p.jsxs)("b",{children:[60,"%"]})]})]}))};var k=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(S,{}),Object(p.jsx)(I,{className:"mt-3"}),Object(p.jsx)(L,{className:"mt-3"})]})};var T=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Schedule"}),Object(p.jsx)("p",{children:"This is the schedule page"})]})},A=a(89),P=function(){o.signOut()},U=a(91),E=a(93),_=a(69),B=a(90),G=["buttonText","showLoading","onClick"];var H,R=function(e){var t=e.buttonText,a=e.showLoading,n=e.onClick,c=Object(_.a)(e,G);return Object(p.jsx)(A.a,Object(y.a)(Object(y.a)({disabled:a,onClick:n},c),{},{children:a?Object(p.jsx)(B.a,{animation:"border",as:"span",size:"sm"}):t}))};!function(e){e.auth="auth",e.user="user"}(H||(H={}));var D=function(e){var t=q[e.code];return null!==t&&void 0!==t?t:e.message.replace("Firebase: ","").replace(" (".concat(e.code,")"),"")},q={"auth/email-already-exists":"An account already exists with this email.","auth/requires-recent-login":"Please sign out then sign back in to perform this action","auth/invalid-password":"This password is invalid.","auth/invalid-email":"Email address is invalid","auth/user-not-found":"Account does not exist for this email address","auth/wrong-password":"Incorrect password"};var z=function(){var e=Object(n.useRef)(null),t=Object(n.useRef)(null),a=Object(n.useState)(!1),c=Object(b.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)(!1),j=Object(b.a)(i,2),d=j[0],u=j[1],h=Object(n.useState)(),O=Object(b.a)(h,2),x=O[0],m=O[1],v=function(){var a,n,c=!!(null===(a=e.current)||void 0===a?void 0:a.value)&&!!(null===(n=t.current)||void 0===n?void 0:n.value);!c&&m(""),u(c)};return Object(p.jsxs)(U.a,{onSubmit:function(a){var n,c;a.preventDefault(),s(!0),m("");var r,i=null===(n=e.current)||void 0===n?void 0:n.value,j=null===(c=t.current)||void 0===c?void 0:c.value;i&&i===j?(r=i,o.currentUser?Object(l.e)(o.currentUser,r):Promise.reject()).then((function(){return a.target.reset()})).catch((function(e){(function(e){return e.code===l.a.CREDENTIAL_TOO_OLD_LOGIN_AGAIN})(e)&&console.log("SIGN IN AGAIN"),m(D(e))})).finally((function(){return s(!1)})):(m("Passwords do not match"),s(!1))},children:[Object(p.jsxs)(U.a.Group,{children:[Object(p.jsx)(U.a.Label,{children:"New Password"}),Object(p.jsx)(U.a.Control,{ref:e,type:"password",onChange:v,disabled:r,placeholder:"New Password"}),Object(p.jsx)(U.a.Control,{ref:t,type:"password",onChange:v,disabled:r,placeholder:"Confirm New Password",className:"mt-2"})]}),x&&Object(p.jsx)(E.a,{className:"mt-2 mb-0",variant:"danger",children:x}),Object(p.jsx)(R,{className:"mt-3 w-100",buttonText:"Change Password",showLoading:r,hidden:!d,type:"submit"})]})};var F=function(){var e=Object(n.useContext)(M),t=e.user,a=e.updateUser,c=Object(n.useRef)(null),r=Object(n.useRef)(null),s=Object(n.useState)(0),i=Object(b.a)(s,2),j=i[0],d=i[1],u=Object(n.useState)(!1),h=Object(b.a)(u,2),O=h[0],x=h[1],m=Object(n.useState)(!1),v=Object(b.a)(m,2),f=v[0],g=v[1],N=Object(n.useState)(),w=Object(b.a)(N,2),S=w[0],y=w[1];Object(n.useEffect)((function(){return x(j>0)}),[j]);var C=function(){var e,a,n=(null===(e=c.current)||void 0===e?void 0:e.value)!==t.name||(null===(a=r.current)||void 0===a?void 0:a.value)!==t.email;!n&&y(""),g(n)};return Object(p.jsxs)(U.a,{onSubmit:function(e){var n,s;e.preventDefault(),y("");var i,j,u=null===(n=c.current)||void 0===n?void 0:n.value,b=null===(s=r.current)||void 0===s?void 0:s.value;if(u&&u!==t.name&&(d((function(e){return++e})),(i=u,o.currentUser?Object(l.f)(o.currentUser,{displayName:i}):Promise.reject()).then((function(){a()})).catch((function(e){y(D(e))})).finally((function(){return d((function(e){return--e}))}))),void 0!==b&&b!==t.email){if(d((function(e){return++e})),""===b)return y("You must provide a valid email"),void d((function(e){return--e}));(j=b,o.currentUser?Object(l.d)(o.currentUser,j):Promise.reject()).then((function(){a()})).catch((function(e){y(D(e))})).finally((function(){return d((function(e){return--e}))}))}},noValidate:!0,children:[Object(p.jsxs)(U.a.Group,{children:[Object(p.jsx)(U.a.Label,{children:"Name"}),Object(p.jsx)(U.a.Control,{ref:c,type:"text",defaultValue:t.name||"",placeholder:"Name",onChange:C,disabled:O})]}),Object(p.jsxs)(U.a.Group,{children:[Object(p.jsx)(U.a.Label,{children:"Email"}),Object(p.jsx)(U.a.Control,{ref:r,type:"email",defaultValue:t.email||"",placeholder:"Email",onChange:C,disabled:O}),Object(p.jsx)(U.a.Text,{children:"This email used for account sign in"})]}),S&&Object(p.jsx)(E.a,{className:"mt-2 mb-0",variant:"danger",children:S}),Object(p.jsx)(R,{className:"mt-3 w-100",buttonText:"Save Changes",showLoading:O,hidden:!f,type:"submit"})]})};var M,K=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Settings"}),Object(p.jsxs)(C.a,{className:"content-card",children:[Object(p.jsx)(C.a.Header,{children:"Account"}),Object(p.jsx)(C.a.Body,{children:Object(p.jsx)(F,{})})]}),Object(p.jsxs)(C.a,{className:"content-card mt-4",children:[Object(p.jsx)(C.a.Header,{children:"Change Password"}),Object(p.jsx)(C.a.Body,{children:Object(p.jsx)(z,{})})]}),Object(p.jsx)("hr",{className:"mt-5 mb-3"}),Object(p.jsx)(A.a,{variant:"secondary",className:"w-100",onClick:P,children:"Sign Out \xa0\u2192"}),Object(p.jsx)(A.a,{variant:"outline-secondary",className:"w-100 mt-2",onClick:function(){return location.reload()},children:"Reload App"})]})};var V=function(e){var t=Object(n.useState)(e.user),a=Object(b.a)(t,2),r=a[0],s=a[1],i=function(){var e=u(o.currentUser);e&&s(e)};return M=c.a.createContext({user:r,updateUser:i}),Object(p.jsx)(M.Provider,{value:{user:r,updateUser:i},children:Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)(g.HashRouter,{basename:"/",children:[Object(p.jsx)(f,{}),Object(p.jsx)(N.g,{children:Object(p.jsxs)(h.a,{className:"pb-5",children:[Object(p.jsx)(N.d,{exact:!0,path:v.dashboard,component:k}),Object(p.jsx)(N.d,{exact:!0,path:v.schedule,component:T}),Object(p.jsx)(N.d,{exact:!0,path:v.settings,component:K}),Object(p.jsx)(N.d,{exact:!0,path:v.signIn,children:Object(p.jsx)(N.c,{to:v.dashboard})}),Object(p.jsx)(N.d,{exact:!0,path:"/",children:Object(p.jsx)(N.c,{to:v.dashboard})})]})})]})})})};a(86);function J(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(b.a)(r,2),i=s[0],d=s[1],l=Object(n.useState)(),u=Object(b.a)(l,2),h=u[0],O=u[1],x=Object(n.useState)(!1),m=Object(b.a)(x,2),v=m[0],f=m[1];return Object(p.jsxs)(U.a,{onSubmit:function(e){e.preventDefault(),O(""),a&&i?(f(!0),function(e,t){return Object(j.b)(o,e,t).then((function(){return Promise.resolve()}))}(a,i).catch((function(e){O(D(e)),f(!1)}))):O("Please enter all required fields")},children:[Object(p.jsxs)(U.a.Group,{children:[Object(p.jsx)(U.a.Label,{children:"Username"}),Object(p.jsx)(U.a.Control,{type:"text",onChange:function(e){return c(e.target.value)}})]}),Object(p.jsxs)(U.a.Group,{children:[Object(p.jsx)(U.a.Label,{children:"Password"}),Object(p.jsx)(U.a.Control,{type:"password",onChange:function(e){return d(e.target.value)}})]}),h&&Object(p.jsx)(E.a,{variant:"secondary",className:"mt-3",children:h}),Object(p.jsx)(R,{type:"submit",className:"mt-3 w-100",buttonText:"Sign In",showLoading:v})]})}function Y(){return Object(p.jsxs)(C.a,{className:"signin-card shadow mx-auto",children:[Object(p.jsx)(C.a.Header,{children:"Sign In"}),Object(p.jsx)(C.a.Body,{children:Object(p.jsx)(J,{})})]})}var Z=function(){return Object(p.jsx)("div",{className:"app-unauthorized",children:Object(p.jsx)(h.a,{children:Object(p.jsx)(g.HashRouter,{basename:"/",children:Object(p.jsx)(N.g,{children:Object(p.jsxs)(h.a,{children:[Object(p.jsx)(N.d,{exact:!0,path:v.signIn,component:Y}),Object(p.jsx)(N.c,{push:!0,to:v.signIn})]})})})})})};o.onAuthStateChanged((function(e){var t=u(e);t?s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(V,{user:t})}),document.getElementById("root")):s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(Z,{})}),document.getElementById("root"))}))}},[[87,1,2]]]);
//# sourceMappingURL=main.921d5e60.chunk.js.map