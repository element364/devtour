import{S as t,i as e,s as n,e as s,t as a,b as l,f as o,g as r,d as c,h as u,j as i,k as f,A as h,a as g,q as p,c as d,n as v,y as m}from"./client.79298881.js";function _(t,e,n){const s=t.slice();return s[2]=e[n],s}function x(t){let e,n,g,p,d=t[2].title+"";return{c(){e=s("li"),n=s("a"),g=a(d),this.h()},l(t){e=l(t,"LI",{});var s=o(e);n=l(s,"A",{href:!0,rel:!0});var a=o(n);g=r(a,d),a.forEach(c),s.forEach(c),this.h()},h(){u(n,"href",p="/"+t[2].slug),u(n,"rel","prefetch")},m(t,s){i(t,e,s),f(e,n),f(n,g)},p(t,e){2&e&&d!==(d=t[2].title+"")&&h(g,d),2&e&&p!==(p="/"+t[2].slug)&&u(n,"href",p)},d(t){t&&c(e)}}}function y(t){let e,n,u,y,E,j,w;document.title=e=t[0];let $=t[1],A=[];for(let e=0;e<$.length;e+=1)A[e]=x(_(t,$,e));return{c(){n=g(),u=s("h1"),y=a("Тег: "),E=a(t[0]),j=g(),w=s("ul");for(let t=0;t<A.length;t+=1)A[t].c()},l(e){p('[data-svelte="svelte-wf665n"]',document.head).forEach(c),n=d(e),u=l(e,"H1",{});var s=o(u);y=r(s,"Тег: "),E=r(s,t[0]),s.forEach(c),j=d(e),w=l(e,"UL",{});var a=o(w);for(let t=0;t<A.length;t+=1)A[t].l(a);a.forEach(c)},m(t,e){i(t,n,e),i(t,u,e),f(u,y),f(u,E),i(t,j,e),i(t,w,e);for(let t=0;t<A.length;t+=1)A[t].m(w,null)},p(t,[n]){if(1&n&&e!==(e=t[0])&&(document.title=e),1&n&&h(E,t[0]),2&n){let e;for($=t[1],e=0;e<$.length;e+=1){const s=_(t,$,e);A[e]?A[e].p(s,n):(A[e]=x(s),A[e].c(),A[e].m(w,null))}for(;e<A.length;e+=1)A[e].d(1);A.length=$.length}},i:v,o:v,d(t){t&&c(n),t&&c(u),t&&c(j),t&&c(w),m(A,t)}}}var E=function(t,e,n,s){return new(n||(n=Promise))((function(a,l){function o(t){try{c(s.next(t))}catch(t){l(t)}}function r(t){try{c(s.throw(t))}catch(t){l(t)}}function c(t){var e;t.done?a(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,r)}c((s=s.apply(t,e||[])).next())}))};function j(t){return E(this,void 0,void 0,(function*(){const{tag_slug:e}=t.params;return{tag_slug:e,posts:yield this.fetch(`/tag/${e}.json`).then((t=>t.json()))}}))}function w(t,e,n){let{tag_slug:s=""}=e,{posts:a=[]}=e;return t.$$set=t=>{"tag_slug"in t&&n(0,s=t.tag_slug),"posts"in t&&n(1,a=t.posts)},[s,a]}export default class extends t{constructor(t){super(),e(this,t,w,y,n,{tag_slug:0,posts:1})}}export{j as preload};
