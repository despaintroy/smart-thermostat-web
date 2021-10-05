(this["webpackJsonpsmart-thermostat-web"]=this["webpackJsonpsmart-thermostat-web"]||[]).push([[0],{55:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);n(55);var a=n(1),c=n.n(a),r=n(36),s=n.n(r),i=n(64),o=n(50),l=Object(i.a)({apiKey:"AIzaSyAEqiutxiK9K41-zYltwLMIxNjMZvAq014",authDomain:"smart-thermostat-92710.firebaseapp.com",projectId:"smart-thermostat-92710",storageBucket:"smart-thermostat-92710.appspot.com",messagingSenderId:"31001839536",appId:"1:31001839536:web:a4c255c21db37087f37875"}),d=Object(o.a)(l),j=n(30),u=function(e){return e?{id:e.uid,name:e.displayName,email:e.email,phone:e.phoneNumber}:null},b=n(14),h=n(60),O=n(92),x=n(47),m=n(46),v={dashboard:"/dashboard",schedule:"/schedule",settings:"/settings",signIn:"/signin"},p=n(4);var f=function(){return Object(p.jsx)(x.a,{collapseOnSelect:!0,expand:"md",bg:"primary",variant:"dark",className:"mb-4",children:Object(p.jsxs)(h.a,{children:[Object(p.jsx)(m.LinkContainer,{to:v.dashboard,children:Object(p.jsx)(x.a.Brand,{href:v.dashboard,children:"Smart Thermostat"})}),Object(p.jsx)(x.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(p.jsx)(x.a.Collapse,{id:"responsive-navbar-nav",children:Object(p.jsxs)(O.a,{className:"me-auto",children:[Object(p.jsx)(m.LinkContainer,{to:v.dashboard,children:Object(p.jsx)(O.a.Link,{children:"Dashboard"})}),Object(p.jsx)(m.LinkContainer,{to:v.schedule,children:Object(p.jsx)(O.a.Link,{children:"Schedule"})}),Object(p.jsx)(m.LinkContainer,{to:v.settings,children:Object(p.jsx)(O.a.Link,{children:"Settings"})})]})})]})})},g=n(38),w=n(15);var C=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Dashboard"}),Object(p.jsx)("p",{children:"This is the dashboard page"})]})};var N=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Schedule"}),Object(p.jsx)("p",{children:"This is the schedule page"})]})},S=n(94),y=n(89),I=function(){d.signOut()},L=n(91),k=n(93),P=n(61),T=n(69),A=n(90),U=["buttonText","showLoading","onClick"];var E,G=function(e){var t=e.buttonText,n=e.showLoading,a=e.onClick,c=Object(T.a)(e,U);return Object(p.jsx)(y.a,Object(P.a)(Object(P.a)({disabled:n,onClick:a},c),{},{children:n?Object(p.jsx)(A.a,{animation:"border",as:"span",size:"sm"}):t}))};!function(e){e.auth="auth",e.user="user"}(E||(E={}));var D=function(e){var t=R.errors[e.code];return null!==t&&void 0!==t?t:e.message.replace("Firebase: ","").replace(" (".concat(e.code,")"),"")},R={model:E.auth,errors:{"auth/email-already-exists":"An account already exists with this email.","auth/requires-recent-login":"Please sign out then sign back in to perform this action","auth/invalid-password":"This password is invalid.","auth/invalid-email":"Email address is invalid"}};var B=function(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=Object(a.useState)(!1),c=Object(b.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(!1),o=Object(b.a)(i,2),l=o[0],u=o[1],h=Object(a.useState)(),O=Object(b.a)(h,2),x=O[0],m=O[1],v=function(){var n,a,c=!!(null===(n=e.current)||void 0===n?void 0:n.value)&&!!(null===(a=t.current)||void 0===a?void 0:a.value);!c&&m(""),u(c)};return Object(p.jsxs)(L.a,{onSubmit:function(n){var a,c;n.preventDefault(),s(!0),m("");var r,i=null===(a=e.current)||void 0===a?void 0:a.value,o=null===(c=t.current)||void 0===c?void 0:c.value;i&&i===o?(r=i,d.currentUser?Object(j.e)(d.currentUser,r):Promise.reject()).then((function(){return n.target.reset()})).catch((function(e){(function(e){return e.code===j.a.CREDENTIAL_TOO_OLD_LOGIN_AGAIN})(e)&&console.log("SIGN IN AGAIN"),m(D(e))})).finally((function(){return s(!1)})):(m("Passwords do not match"),s(!1))},children:[Object(p.jsxs)(L.a.Group,{children:[Object(p.jsx)(L.a.Label,{children:"New Password"}),Object(p.jsx)(L.a.Control,{ref:e,type:"password",onChange:v,disabled:r,placeholder:"New Password"}),Object(p.jsx)(L.a.Control,{ref:t,type:"password",onChange:v,disabled:r,placeholder:"Confirm New Password",className:"mt-2"})]}),x&&Object(p.jsx)(k.a,{className:"mt-2 mb-0",variant:"danger",children:x}),Object(p.jsx)(G,{className:"mt-3 w-100",buttonText:"Change Password",showLoading:r,hidden:!l,type:"submit"})]})};var F=function(){var e=Object(a.useContext)(H),t=e.user,n=e.updateUser,c=Object(a.useRef)(null),r=Object(a.useRef)(null),s=Object(a.useState)(0),i=Object(b.a)(s,2),o=i[0],l=i[1],u=Object(a.useState)(!1),h=Object(b.a)(u,2),O=h[0],x=h[1],m=Object(a.useState)(!1),v=Object(b.a)(m,2),f=v[0],g=v[1],w=Object(a.useState)(),C=Object(b.a)(w,2),N=C[0],S=C[1];Object(a.useEffect)((function(){return x(o>0)}),[o]);var y=function(){var e,n,a=(null===(e=c.current)||void 0===e?void 0:e.value)!==t.name||(null===(n=r.current)||void 0===n?void 0:n.value)!==t.email;!a&&S(""),g(a)};return Object(p.jsxs)(L.a,{onSubmit:function(e){var a,s;e.preventDefault(),S("");var i,o,u=null===(a=c.current)||void 0===a?void 0:a.value,b=null===(s=r.current)||void 0===s?void 0:s.value;if(u&&u!==t.name&&(l((function(e){return++e})),(i=u,d.currentUser?Object(j.f)(d.currentUser,{displayName:i}):Promise.reject()).then((function(){n()})).catch((function(e){S(D(e))})).finally((function(){return l((function(e){return--e}))}))),void 0!==b&&b!==t.email){if(l((function(e){return++e})),""===b)return S("You must provide a valid email"),void l((function(e){return--e}));(o=b,d.currentUser?Object(j.d)(d.currentUser,o):Promise.reject()).then((function(){n()})).catch((function(e){S(D(e))})).finally((function(){return l((function(e){return--e}))}))}},noValidate:!0,children:[Object(p.jsxs)(L.a.Group,{children:[Object(p.jsx)(L.a.Label,{children:"Name"}),Object(p.jsx)(L.a.Control,{ref:c,type:"text",defaultValue:t.name||"",placeholder:"Name",onChange:y,disabled:O})]}),Object(p.jsxs)(L.a.Group,{children:[Object(p.jsx)(L.a.Label,{children:"Email"}),Object(p.jsx)(L.a.Control,{ref:r,type:"email",defaultValue:t.email||"",placeholder:"Email",onChange:y,disabled:O}),Object(p.jsx)(L.a.Text,{children:"This email used for account sign in"})]}),N&&Object(p.jsx)(k.a,{className:"mt-2 mb-0",variant:"danger",children:N}),Object(p.jsx)(G,{className:"mt-3 w-100",buttonText:"Save Changes",showLoading:O,hidden:!f,type:"submit"})]})};var H,q=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Settings"}),Object(p.jsxs)(S.a,{className:"content-card",children:[Object(p.jsx)(S.a.Header,{children:"Account"}),Object(p.jsx)(S.a.Body,{children:Object(p.jsx)(F,{})})]}),Object(p.jsxs)(S.a,{className:"content-card mt-4",children:[Object(p.jsx)(S.a.Header,{children:"Change Password"}),Object(p.jsx)(S.a.Body,{children:Object(p.jsx)(B,{})})]}),Object(p.jsx)("hr",{className:"mt-5 mb-3"}),Object(p.jsx)(y.a,{variant:"secondary",className:"w-100",onClick:I,children:"Sign Out \xa0\u2192"}),Object(p.jsx)(y.a,{variant:"outline-secondary",className:"w-100 mt-2",onClick:function(){return location.reload()},children:"Reload App"})]})};var z=function(e){var t=Object(a.useState)(e.user),n=Object(b.a)(t,2),r=n[0],s=n[1],i=function(){var e=u(d.currentUser);e&&s(e)};return H=c.a.createContext({user:r,updateUser:i}),Object(p.jsx)(H.Provider,{value:{user:r,updateUser:i},children:Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)(g.HashRouter,{basename:"/",children:[Object(p.jsx)(f,{}),Object(p.jsx)(w.g,{children:Object(p.jsxs)(h.a,{children:[Object(p.jsx)(w.d,{exact:!0,path:v.dashboard,component:C}),Object(p.jsx)(w.d,{exact:!0,path:v.schedule,component:N}),Object(p.jsx)(w.d,{exact:!0,path:v.settings,component:q}),Object(p.jsx)(w.d,{exact:!0,path:v.signIn,children:Object(p.jsx)(w.c,{to:v.dashboard})}),Object(p.jsx)(w.d,{exact:!0,path:"/",children:Object(p.jsx)(w.c,{to:v.dashboard})})]})})]})})})};n(86);function M(){var e=Object(a.useState)(""),t=Object(b.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(b.a)(r,2),i=s[0],l=s[1],j=Object(a.useState)(),u=Object(b.a)(j,2),h=u[0],O=u[1],x=Object(a.useState)(!1),m=Object(b.a)(x,2),v=m[0],f=m[1];return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(S.a,{className:"signin-card shadow mx-auto",children:[Object(p.jsx)(S.a.Header,{children:"Sign In"}),Object(p.jsx)(S.a.Body,{children:Object(p.jsxs)(L.a,{onSubmit:function(e){e.preventDefault(),O(""),n&&i?(f(!0),function(e,t){return Object(o.b)(d,e,t).then((function(){return Promise.resolve()})).catch((function(e){return console.log("Error Signing In"),console.log(e.code),console.log(e.message),Promise.reject()}))}(n,i).catch((function(){f(!1),O("Could not sign in")}))):O("Please enter all required fields")},children:[Object(p.jsxs)(L.a.Group,{children:[Object(p.jsx)(L.a.Label,{children:"Username"}),Object(p.jsx)(L.a.Control,{type:"text",onChange:function(e){return c(e.target.value)},isInvalid:!1}),Object(p.jsx)(L.a.Control.Feedback,{type:"invalid"})]}),Object(p.jsxs)(L.a.Group,{children:[Object(p.jsx)(L.a.Label,{children:"Password"}),Object(p.jsx)(L.a.Control,{type:"password",onChange:function(e){return l(e.target.value)},isInvalid:!1}),Object(p.jsx)(L.a.Control.Feedback,{type:"invalid"})]}),h&&Object(p.jsx)(k.a,{variant:"secondary",className:"mt-3",children:h}),Object(p.jsx)(G,{type:"submit",className:"mt-3 w-100",buttonText:"Sign In",showLoading:v})]})})]})})}var _=function(){return Object(p.jsx)("div",{className:"app-unauthorized",children:Object(p.jsx)(h.a,{children:Object(p.jsx)(g.HashRouter,{basename:"/",children:Object(p.jsx)(w.g,{children:Object(p.jsxs)(h.a,{children:[Object(p.jsx)(w.d,{exact:!0,path:v.signIn,component:M}),Object(p.jsx)(w.c,{push:!0,to:v.signIn})]})})})})})};d.onAuthStateChanged((function(e){var t=u(e);t?s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(z,{user:t})}),document.getElementById("root")):s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(_,{})}),document.getElementById("root"))}))}},[[87,1,2]]]);
//# sourceMappingURL=main.383a8dfe.chunk.js.map