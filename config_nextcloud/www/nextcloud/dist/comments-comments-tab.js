/*! For license information please see comments-comments-tab.js.LICENSE.txt */
!function(){"use strict";var n,e={62641:function(n,e,r){var o=r(44350);function i(n,e,t,r,o,i,u){try{var c=n[i](u),a=c.value}catch(n){return void t(n)}c.done?e(a):Promise.resolve(a).then(r,o)}var u=null,c=new OCA.Files.Sidebar.Tab({id:"comments",name:t("comments","Comments"),iconSvg:o,mount:function(n,e,t){return(r=regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return u&&u.$destroy(),u=new OCA.Comments.View("files",{parent:t}),r.next=4,u.update(e.id);case 4:u.$mount(n);case 5:case"end":return r.stop()}}),r)})),function(){var n=this,e=arguments;return new Promise((function(t,o){var u=r.apply(n,e);function c(n){i(u,t,o,c,a,"next",n)}function a(n){i(u,t,o,c,a,"throw",n)}c(void 0)}))})();var r},update:function(n){u.update(n.id)},destroy:function(){u.$destroy(),u=null},scrollBottomReached:function(){u.onScrollBottomReached()}});window.addEventListener("DOMContentLoaded",(function(){OCA.Files&&OCA.Files.Sidebar&&OCA.Files.Sidebar.registerTab(c)}))}},r={};function o(n){var t=r[n];if(void 0!==t)return t.exports;var i=r[n]={id:n,loaded:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.loaded=!0,i.exports}o.m=e,n=[],o.O=function(e,t,r,i){if(!t){var u=1/0;for(d=0;d<n.length;d++){t=n[d][0],r=n[d][1],i=n[d][2];for(var c=!0,a=0;a<t.length;a++)(!1&i||u>=i)&&Object.keys(o.O).every((function(n){return o.O[n](t[a])}))?t.splice(a--,1):(c=!1,i<u&&(u=i));if(c){n.splice(d--,1);var f=r();void 0!==f&&(e=f)}}return e}i=i||0;for(var d=n.length;d>0&&n[d-1][2]>i;d--)n[d]=n[d-1];n[d]=[t,r,i]},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,{a:e}),e},o.d=function(n,e){for(var t in e)o.o(e,t)&&!o.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.nmd=function(n){return n.paths=[],n.children||(n.children=[]),n},o.j=576,function(){o.b=document.baseURI||self.location.href;var n={576:0};o.O.j=function(e){return 0===n[e]};var e=function(e,t){var r,i,u=t[0],c=t[1],a=t[2],f=0;if(u.some((function(e){return 0!==n[e]}))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);if(a)var d=a(o)}for(e&&e(t);f<u.length;f++)i=u[f],o.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return o.O(d)},t=self.webpackChunknextcloud=self.webpackChunknextcloud||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}(),o.nc=void 0;var i=o.O(void 0,[7874],(function(){return o(62641)}));i=o.O(i)}();
//# sourceMappingURL=comments-comments-tab.js.map?v=3a70635751a93583d170