(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Vhje:function(t,e,n){"use strict";n.r(e),n.d(e,"JobFinderModule",function(){return j});var o=n("ofXK"),a=n("tyNb");function i(t,e){return n=this,void 0,a=function*(){if(e instanceof Array){const n=[];return e.forEach(e=>{n.push(t.get(e,{responseType:"text"}).toPromise())}),(yield Promise.all(n)).join()}return yield t.get(e,{responseType:"text"}).toPromise()},new((o=void 0)||(o=Promise))(function(t,e){function i(t){try{r(a.next(t))}catch(n){e(n)}}function c(t){try{r(a.throw(t))}catch(n){e(n)}}function r(e){var n;e.done?t(e.value):(n=e.value,n instanceof o?n:new o(function(t){t(n)})).then(i,c)}r((a=a.apply(n,[])).next())});var n,o,a}var c=n("fXoL"),r=n("tk/3"),s=n("wZkO"),b=n("MutI"),p=n("f0Cb");function f(t,e){if(1&t&&(c.Rb(0),c.Tb(1,"mat-list"),c.Tb(2,"a",6),c.Tb(3,"mat-list-item"),c.yc(4),c.Sb(),c.Sb(),c.Ob(5,"mat-divider"),c.Sb(),c.Qb()),2&t){const t=e.$implicit;c.Cb(2),c.kc("href",t.url,c.sc),c.Cb(2),c.zc(t.name+" - "+t.date)}}function h(t,e){if(1&t&&c.xc(0,f,6,2,"ng-container",5),2&t){const t=c.ec();c.jc("ngForOf",t.getLoadedJobs(1))}}function l(t,e){1&t&&(c.Tb(0,"span",8),c.yc(1,"Loading jobs, please wait..."),c.Sb())}function u(t,e){if(1&t&&(c.Rb(0),c.Tb(1,"mat-list"),c.Tb(2,"a",6),c.Tb(3,"mat-list-item"),c.yc(4),c.Sb(),c.Sb(),c.Ob(5,"mat-divider"),c.Sb(),c.Qb()),2&t){const t=e.$implicit;c.Cb(2),c.kc("href",t.url,c.sc),c.Cb(2),c.zc(t.name+" - "+t.date)}}function m(t,e){if(1&t&&(c.xc(0,l,2,0,"span",7),c.xc(1,u,6,2,"ng-container",5)),2&t){const t=c.ec();c.jc("ngIf",!t.getLoadedJobs(2).length),c.Cb(1),c.jc("ngForOf",t.getLoadedJobs(2))}}function d(t,e){if(1&t&&(c.Rb(0),c.Tb(1,"mat-list"),c.Tb(2,"a",6),c.Tb(3,"mat-list-item"),c.yc(4),c.Sb(),c.Sb(),c.Ob(5,"mat-divider"),c.Sb(),c.Qb()),2&t){const t=e.$implicit;c.Cb(2),c.kc("href",t.url,c.sc),c.Cb(2),c.zc(t.name+" - "+t.date)}}function g(t,e){if(1&t&&c.xc(0,d,6,2,"ng-container",5),2&t){const t=c.ec();c.jc("ngForOf",t.getLoadedJobs(3))}}const w=[{path:"",component:(()=>{class t{constructor(t){this.http=t,this.jobs={}}getLoadedJobs(t){return this.jobs[t]||(this.jobs[t]=function(t,e){let n=[];switch(e){case 1:n=function(t){const e=[];return i(t,["https://cpsrk.foi.hr/novosti?f%5B0%5D=type_o%3APosao","https://cpsrk.foi.hr/novosti?f%5B0%5D=type_o%3APosao&page=1","https://cpsrk.foi.hr/novosti?f%5B0%5D=type_o%3APosao&page=2"]).then(t=>{t.split('<div class="views-row').forEach(t=>{const n=t.match(new RegExp('hreflang="und">(.*)<')),o=t.match(new RegExp("<span>(.*)</span></span>")),a=t.match(new RegExp('a href="(.*)" hreflang="und">'));n&&o&&a&&e.push({name:n[1],date:new Date(o[1]).toLocaleDateString("hr"),url:`https://cpsrk.foi.hr${a[1]}`})})}),e}(t);break;case 2:n=function(t){const e=[];return i(t,"https://cors-anywhere.herokuapp.com/https://www.fer.unizg.hr/karijere/ponuda_poslova").then(t=>{t.split('<div class="news_article ').forEach(t=>{const n=t.match(new RegExp('title="Pro\u010ditaj obavijest:(.*)"')),o=t.match(new RegExp('time datetime="(.*)">')),a=t.match(new RegExp('<a href="(.*)" title="'));n&&o&&a&&e.push({name:n[1],date:new Date(o[1]).toLocaleDateString("hr"),url:`https://www.fer.unizg.hr${a[1]}`})})}),e}(t)}return n}(this.http,t)),this.jobs[t]}}return t.\u0275fac=function(e){return new(e||t)(c.Nb(r.a))},t.\u0275cmp=c.Hb({type:t,selectors:[["app-job-finder"]],decls:7,vars:0,consts:[["mat-align-tabs","center"],["label","CPRSK"],["matTabContent",""],["label","FER - Centar karijera"],["label","MojPosao"],[4,"ngFor","ngForOf"],[1,"hyperlinks",3,"href"],["class","loading",4,"ngIf"],[1,"loading"]],template:function(t,e){1&t&&(c.Tb(0,"mat-tab-group",0),c.Tb(1,"mat-tab",1),c.xc(2,h,1,1,"ng-template",2),c.Sb(),c.Tb(3,"mat-tab",3),c.xc(4,m,2,2,"ng-template",2),c.Sb(),c.Tb(5,"mat-tab",4),c.xc(6,g,1,1,"ng-template",2),c.Sb(),c.Sb())},directives:[s.c,s.a,s.b,o.j,b.a,b.b,p.a,o.k],styles:[".mat-tab-body{height:84vh!important}.hyperlinks[_ngcontent-%COMP%]{cursor:pointer;text-decoration:none}.loading[_ngcontent-%COMP%]{display:flex;justify-content:center;height:50vh;align-items:center;font-size:1.25em}"]}),t})()}];let y=(()=>{class t{}return t.\u0275mod=c.Lb({type:t}),t.\u0275inj=c.Kb({factory:function(e){return new(e||t)},imports:[[a.c.forChild(w)],a.c]}),t})();var v=n("vvyD");let j=(()=>{class t{}return t.\u0275mod=c.Lb({type:t}),t.\u0275inj=c.Kb({factory:function(e){return new(e||t)},imports:[[o.c,y,r.b,v.a]]}),t})()}}]);