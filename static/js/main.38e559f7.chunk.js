(this["webpackJsonpsmart-thermostat-web"]=this["webpackJsonpsmart-thermostat-web"]||[]).push([[0],{56:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);n(56);var a=n(1),c=n.n(a),r=n(37),s=n.n(r),i=n(65),o=n(50),d=Object(i.a)({apiKey:"AIzaSyAEqiutxiK9K41-zYltwLMIxNjMZvAq014",authDomain:"smart-thermostat-92710.firebaseapp.com",projectId:"smart-thermostat-92710",storageBucket:"smart-thermostat-92710.appspot.com",messagingSenderId:"31001839536",appId:"1:31001839536:web:a4c255c21db37087f37875"}),l=Object(o.a)(d),j=n(30),u=function(e){return e?{id:e.uid,name:e.displayName,email:e.email,phone:e.phoneNumber}:null},b=n(12),h=n(61),O=n(92),x=n(47),m=n(46),v={dashboard:"/dashboard",schedule:"/schedule",settings:"/settings",signIn:"/signin"},p=n(4);var f=function(){return Object(p.jsx)(x.a,{collapseOnSelect:!0,expand:"md",bg:"primary",variant:"dark",className:"mb-4",children:Object(p.jsxs)(h.a,{children:[Object(p.jsx)(m.LinkContainer,{to:v.dashboard,children:Object(p.jsx)(x.a.Brand,{href:v.dashboard,children:"Smart Thermostat"})}),Object(p.jsx)(x.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(p.jsx)(x.a.Collapse,{id:"responsive-navbar-nav",children:Object(p.jsxs)(O.a,{className:"me-auto",children:[Object(p.jsx)(m.LinkContainer,{to:v.dashboard,children:Object(p.jsx)(O.a.Link,{children:"Dashboard"})}),Object(p.jsx)(m.LinkContainer,{to:v.schedule,children:Object(p.jsx)(O.a.Link,{children:"Schedule"})}),Object(p.jsx)(m.LinkContainer,{to:v.settings,children:Object(p.jsx)(O.a.Link,{children:"Settings"})})]})})]})})},g=n(38),N=n(15),w=n(53),S=["children"];var C=function(e){var t=e.children;return Object(w.a)(e,S),Object(p.jsx)("div",{className:"dial dial-circle",children:Object(p.jsx)("div",{className:"circle__inner",children:Object(p.jsx)("div",{className:"circle__wrapper",children:Object(p.jsx)("div",{className:"circle__content",children:t})})})})};var y=function(){var e=Object(a.useState)(72),t=Object(b.a)(e,2),n=t[0],c=t[1];return Object(p.jsx)(C,{children:Object(p.jsxs)("div",{className:"dial-stack",children:[Object(p.jsx)("div",{className:"adjust-button up",onClick:function(){return c((function(e){return++e}))},children:"\u2191"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:"Set to"}),Object(p.jsxs)("div",{className:"set-temp",children:[n,"\xba"]})]}),Object(p.jsx)("div",{className:"adjust-button down",onClick:function(){return c((function(e){return--e}))},children:"\u2193"})]})})};var L=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(y,{})})};var k=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Schedule"}),Object(p.jsx)("p",{children:"This is the schedule page"})]})},I=n(94),A=n(89),P=function(){l.signOut()},T=n(91),U=n(93),_=n(62),E=n(90),G=["buttonText","showLoading","onClick"];var R,B=function(e){var t=e.buttonText,n=e.showLoading,a=e.onClick,c=Object(w.a)(e,G);return Object(p.jsx)(A.a,Object(_.a)(Object(_.a)({disabled:n,onClick:a},c),{},{children:n?Object(p.jsx)(E.a,{animation:"border",as:"span",size:"sm"}):t}))};!function(e){e.auth="auth",e.user="user"}(R||(R={}));var D=function(e){var t=H[e.code];return null!==t&&void 0!==t?t:e.message.replace("Firebase: ","").replace(" (".concat(e.code,")"),"")},H={"auth/email-already-exists":"An account already exists with this email.","auth/requires-recent-login":"Please sign out then sign back in to perform this action","auth/invalid-password":"This password is invalid.","auth/invalid-email":"Email address is invalid","auth/user-not-found":"Account does not exist for this email address","auth/wrong-password":"Incorrect password"};var q=function(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=Object(a.useState)(!1),c=Object(b.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(!1),o=Object(b.a)(i,2),d=o[0],u=o[1],h=Object(a.useState)(),O=Object(b.a)(h,2),x=O[0],m=O[1],v=function(){var n,a,c=!!(null===(n=e.current)||void 0===n?void 0:n.value)&&!!(null===(a=t.current)||void 0===a?void 0:a.value);!c&&m(""),u(c)};return Object(p.jsxs)(T.a,{onSubmit:function(n){var a,c;n.preventDefault(),s(!0),m("");var r,i=null===(a=e.current)||void 0===a?void 0:a.value,o=null===(c=t.current)||void 0===c?void 0:c.value;i&&i===o?(r=i,l.currentUser?Object(j.e)(l.currentUser,r):Promise.reject()).then((function(){return n.target.reset()})).catch((function(e){(function(e){return e.code===j.a.CREDENTIAL_TOO_OLD_LOGIN_AGAIN})(e)&&console.log("SIGN IN AGAIN"),m(D(e))})).finally((function(){return s(!1)})):(m("Passwords do not match"),s(!1))},children:[Object(p.jsxs)(T.a.Group,{children:[Object(p.jsx)(T.a.Label,{children:"New Password"}),Object(p.jsx)(T.a.Control,{ref:e,type:"password",onChange:v,disabled:r,placeholder:"New Password"}),Object(p.jsx)(T.a.Control,{ref:t,type:"password",onChange:v,disabled:r,placeholder:"Confirm New Password",className:"mt-2"})]}),x&&Object(p.jsx)(U.a,{className:"mt-2 mb-0",variant:"danger",children:x}),Object(p.jsx)(B,{className:"mt-3 w-100",buttonText:"Change Password",showLoading:r,hidden:!d,type:"submit"})]})};var z=function(){var e=Object(a.useContext)(F),t=e.user,n=e.updateUser,c=Object(a.useRef)(null),r=Object(a.useRef)(null),s=Object(a.useState)(0),i=Object(b.a)(s,2),o=i[0],d=i[1],u=Object(a.useState)(!1),h=Object(b.a)(u,2),O=h[0],x=h[1],m=Object(a.useState)(!1),v=Object(b.a)(m,2),f=v[0],g=v[1],N=Object(a.useState)(),w=Object(b.a)(N,2),S=w[0],C=w[1];Object(a.useEffect)((function(){return x(o>0)}),[o]);var y=function(){var e,n,a=(null===(e=c.current)||void 0===e?void 0:e.value)!==t.name||(null===(n=r.current)||void 0===n?void 0:n.value)!==t.email;!a&&C(""),g(a)};return Object(p.jsxs)(T.a,{onSubmit:function(e){var a,s;e.preventDefault(),C("");var i,o,u=null===(a=c.current)||void 0===a?void 0:a.value,b=null===(s=r.current)||void 0===s?void 0:s.value;if(u&&u!==t.name&&(d((function(e){return++e})),(i=u,l.currentUser?Object(j.f)(l.currentUser,{displayName:i}):Promise.reject()).then((function(){n()})).catch((function(e){C(D(e))})).finally((function(){return d((function(e){return--e}))}))),void 0!==b&&b!==t.email){if(d((function(e){return++e})),""===b)return C("You must provide a valid email"),void d((function(e){return--e}));(o=b,l.currentUser?Object(j.d)(l.currentUser,o):Promise.reject()).then((function(){n()})).catch((function(e){C(D(e))})).finally((function(){return d((function(e){return--e}))}))}},noValidate:!0,children:[Object(p.jsxs)(T.a.Group,{children:[Object(p.jsx)(T.a.Label,{children:"Name"}),Object(p.jsx)(T.a.Control,{ref:c,type:"text",defaultValue:t.name||"",placeholder:"Name",onChange:y,disabled:O})]}),Object(p.jsxs)(T.a.Group,{children:[Object(p.jsx)(T.a.Label,{children:"Email"}),Object(p.jsx)(T.a.Control,{ref:r,type:"email",defaultValue:t.email||"",placeholder:"Email",onChange:y,disabled:O}),Object(p.jsx)(T.a.Text,{children:"This email used for account sign in"})]}),S&&Object(p.jsx)(U.a,{className:"mt-2 mb-0",variant:"danger",children:S}),Object(p.jsx)(B,{className:"mt-3 w-100",buttonText:"Save Changes",showLoading:O,hidden:!f,type:"submit"})]})};var F,M=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Settings"}),Object(p.jsxs)(I.a,{className:"content-card",children:[Object(p.jsx)(I.a.Header,{children:"Account"}),Object(p.jsx)(I.a.Body,{children:Object(p.jsx)(z,{})})]}),Object(p.jsxs)(I.a,{className:"content-card mt-4",children:[Object(p.jsx)(I.a.Header,{children:"Change Password"}),Object(p.jsx)(I.a.Body,{children:Object(p.jsx)(q,{})})]}),Object(p.jsx)("hr",{className:"mt-5 mb-3"}),Object(p.jsx)(A.a,{variant:"secondary",className:"w-100",onClick:P,children:"Sign Out \xa0\u2192"}),Object(p.jsx)(A.a,{variant:"outline-secondary",className:"w-100 mt-2",onClick:function(){return location.reload()},children:"Reload App"})]})};var K=function(e){var t=Object(a.useState)(e.user),n=Object(b.a)(t,2),r=n[0],s=n[1],i=function(){var e=u(l.currentUser);e&&s(e)};return F=c.a.createContext({user:r,updateUser:i}),Object(p.jsx)(F.Provider,{value:{user:r,updateUser:i},children:Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)(g.HashRouter,{basename:"/",children:[Object(p.jsx)(f,{}),Object(p.jsx)(N.g,{children:Object(p.jsxs)(h.a,{className:"pb-5",children:[Object(p.jsx)(N.d,{exact:!0,path:v.dashboard,component:L}),Object(p.jsx)(N.d,{exact:!0,path:v.schedule,component:k}),Object(p.jsx)(N.d,{exact:!0,path:v.settings,component:M}),Object(p.jsx)(N.d,{exact:!0,path:v.signIn,children:Object(p.jsx)(N.c,{to:v.dashboard})}),Object(p.jsx)(N.d,{exact:!0,path:"/",children:Object(p.jsx)(N.c,{to:v.dashboard})})]})})]})})})};n(86);function V(){var e=Object(a.useState)(""),t=Object(b.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(b.a)(r,2),i=s[0],d=s[1],j=Object(a.useState)(),u=Object(b.a)(j,2),h=u[0],O=u[1],x=Object(a.useState)(!1),m=Object(b.a)(x,2),v=m[0],f=m[1];return Object(p.jsxs)(T.a,{onSubmit:function(e){e.preventDefault(),O(""),n&&i?(f(!0),function(e,t){return Object(o.b)(l,e,t).then((function(){return Promise.resolve()}))}(n,i).catch((function(e){O(D(e)),f(!1)}))):O("Please enter all required fields")},children:[Object(p.jsxs)(T.a.Group,{children:[Object(p.jsx)(T.a.Label,{children:"Username"}),Object(p.jsx)(T.a.Control,{type:"text",onChange:function(e){return c(e.target.value)}})]}),Object(p.jsxs)(T.a.Group,{children:[Object(p.jsx)(T.a.Label,{children:"Password"}),Object(p.jsx)(T.a.Control,{type:"password",onChange:function(e){return d(e.target.value)}})]}),h&&Object(p.jsx)(U.a,{variant:"secondary",className:"mt-3",children:h}),Object(p.jsx)(B,{type:"submit",className:"mt-3 w-100",buttonText:"Sign In",showLoading:v})]})}function J(){return Object(p.jsxs)(I.a,{className:"signin-card shadow mx-auto",children:[Object(p.jsx)(I.a.Header,{children:"Sign In"}),Object(p.jsx)(I.a.Body,{children:Object(p.jsx)(V,{})})]})}var Y=function(){return Object(p.jsx)("div",{className:"app-unauthorized",children:Object(p.jsx)(h.a,{children:Object(p.jsx)(g.HashRouter,{basename:"/",children:Object(p.jsx)(N.g,{children:Object(p.jsxs)(h.a,{children:[Object(p.jsx)(N.d,{exact:!0,path:v.signIn,component:J}),Object(p.jsx)(N.c,{push:!0,to:v.signIn})]})})})})})};l.onAuthStateChanged((function(e){var t=u(e);t?s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(K,{user:t})}),document.getElementById("root")):s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(Y,{})}),document.getElementById("root"))}))}},[[87,1,2]]]);
//# sourceMappingURL=main.38e559f7.chunk.js.map