(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),s=a.n(n),r=a(4),i=a.n(r),o=(a(10),a(3));var d=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)({}),i=Object(o.a)(r,2),d=i[0],h=i[1],j="https://api.openweathermap.org/data/2.5/",l="e55eab8f25e3a191959c25fc54b768ce";return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"search",children:Object(c.jsx)("input",{type:"text",placeholder:"search...",value:a,onChange:function(e){return s(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(j,"weather?q=").concat(a,"&APPID=").concat(l,"&units=metric")).then((function(e){return e.json()})).then((function(e){h(e),s("");var t=e.weather[0].main,a="/weather-App-React/assets/icons/"+e.weather[0].icon+".png";document.getElementById("icon").innerHTML="<img id='weatherImg' src=".concat(a,' alt="').concat(t,'" srcset=""> <h3>').concat(t)})).catch((function(e){return console.error(e)}))}})}),"undefined"!=typeof d.main?Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"date",children:[function(e){var t=e.getDate(),a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],c=e.getFullYear(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()];return"".concat(a,", ").concat(t," ").concat(n," ").concat(c)}(new Date)," "]}),Object(c.jsxs)("div",{className:"weather-box",children:[Object(c.jsx)("div",{className:"wethmain"}),Object(c.jsx)("div",{id:"icon"}),Object(c.jsxs)("div",{className:"location",children:[d.name," , ",d.sys.country]}),Object(c.jsxs)("div",{className:"temp",children:[Math.floor(d.main.temp),"\xb0"]}),Object(c.jsx)("div",{className:"misc",children:Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:[Object(c.jsx)("i",{className:"fas fa-wind"}),"  ",Math.floor(d.wind.speed),"m/s"]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("i",{className:"fas fa-tint"})," ",Math.floor(d.main.humidity),"%"]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("i",{className:"fas fa-water"})," ",Math.floor(d.main.pressure),"hpa"]})]})})]})]}):""]})};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(d,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.612b6843.chunk.js.map