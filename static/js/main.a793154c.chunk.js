(this["webpackJsonpsmart-thermostat-web"]=this["webpackJsonpsmart-thermostat-web"]||[]).push([[0],{32:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),c=a.n(n),s=a(22),r=a.n(s),j=a(44),i=a(65),l=a(24),d=a(36),o=function(){localStorage.removeItem("token"),location.reload()},b={dashboard:"/",schedule:"/schedule"},h=a(3);var O=function(){return Object(h.jsx)(l.a,{collapseOnSelect:!0,expand:"sm",bg:"primary",variant:"dark",className:"mb-4",children:Object(h.jsxs)(j.a,{children:[Object(h.jsx)(l.a.Brand,{href:b.dashboard,children:"Smart Thermostat"}),Object(h.jsx)(l.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(h.jsx)(l.a.Collapse,{id:"responsive-navbar-nav",children:Object(h.jsxs)(i.a,{className:"me-auto",children:[Object(h.jsx)(d.LinkContainer,{to:b.dashboard,children:Object(h.jsx)(i.a.Link,{children:"Dashboard"})}),Object(h.jsx)(d.LinkContainer,{to:b.schedule,children:Object(h.jsx)(i.a.Link,{children:"Schedule"})}),Object(h.jsx)(i.a.Link,{onClick:o,children:"Sign Out"})]})})]})})},x=a(26),u=a(6);var m=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Dashboard"}),Object(h.jsx)("p",{children:"This is the dashboard page"})]})};var p=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Schedule"}),Object(h.jsx)("p",{children:"This is the schedule page"})]})};var v=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(x.HashRouter,{basename:"/",children:[Object(h.jsx)(O,{}),Object(h.jsx)(u.g,{children:Object(h.jsxs)(j.a,{children:[Object(h.jsx)(u.d,{exact:!0,path:b.dashboard,component:m}),Object(h.jsx)(u.d,{exact:!0,path:b.schedule,component:p})]})})]})})},g=(a(60),a(30)),f=a(67),S=a(64),k=a(66),C=a(63);function y(){var e=Object(n.useState)(""),t=Object(g.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),r=Object(g.a)(s,2),j=r[0],i=r[1],l=Object(n.useState)(),d=Object(g.a)(l,2),o=d[0],b=d[1];return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(f.a,{className:"signin-card shadow mx-auto",children:[Object(h.jsx)(f.a.Header,{children:"Sign In"}),Object(h.jsx)(f.a.Body,{children:Object(h.jsxs)(S.a,{onSubmit:function(e){e.preventDefault(),a&&j?(localStorage.setItem("token","1234"),location.reload()):b("Please enter all required fields")},children:[Object(h.jsxs)(S.a.Group,{children:[Object(h.jsx)(S.a.Label,{children:"Username"}),Object(h.jsx)(S.a.Control,{type:"text",onChange:function(e){return c(e.target.value)},isInvalid:!1}),Object(h.jsx)(S.a.Control.Feedback,{type:"invalid"})]}),Object(h.jsxs)(S.a.Group,{children:[Object(h.jsx)(S.a.Label,{children:"Password"}),Object(h.jsx)(S.a.Control,{type:"password",onChange:function(e){return i(e.target.value)},isInvalid:!1}),Object(h.jsx)(S.a.Control.Feedback,{type:"invalid"})]}),o&&Object(h.jsx)(k.a,{variant:"secondary",className:"mt-3",children:o}),Object(h.jsx)(C.a,{type:"submit",className:"w-100 mt-3",children:"Sign In"})]})})]})})}var w=function(){return Object(h.jsx)("div",{className:"app-unauthorized",children:Object(h.jsx)(j.a,{children:Object(h.jsx)(y,{})})})};r.a.render(Object(h.jsx)(c.a.StrictMode,{children:localStorage.getItem("token")?Object(h.jsx)(v,{}):Object(h.jsx)(w,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.a793154c.chunk.js.map