import{S as t,i as e,s as n,e as s,t as o,b as r,f as l,g as a,d as c,h as u,j as i,k as h,A as f,a as g,q as p,c as d,n as v,y}from"./client.79298881.js";function m(t,e,n){const s=t.slice();return s[2]=e[n],s}function _(t){let e,n,g,p,d=t[2].title+"";return{c(){e=s("li"),n=s("a"),g=o(d),this.h()},l(t){e=r(t,"LI",{});var s=l(e);n=r(s,"A",{href:!0,rel:!0});var o=l(n);g=a(o,d),o.forEach(c),s.forEach(c),this.h()},h(){u(n,"href",p="/"+t[2].slug),u(n,"rel","prefetch")},m(t,s){i(t,e,s),h(e,n),h(n,g)},p(t,e){2&e&&d!==(d=t[2].title+"")&&f(g,d),2&e&&p!==(p="/"+t[2].slug)&&u(n,"href",p)},d(t){t&&c(e)}}}function x(t){let e,n,u,x,E,j;document.title=e=t[0];let w=t[1],$=[];for(let e=0;e<w.length;e+=1)$[e]=_(m(t,w,e));return{c(){n=g(),u=s("h1"),x=o(t[0]),E=g(),j=s("ul");for(let t=0;t<$.length;t+=1)$[t].c()},l(e){p('[data-svelte="svelte-r0ylnd"]',document.head).forEach(c),n=d(e),u=r(e,"H1",{});var s=l(u);x=a(s,t[0]),s.forEach(c),E=d(e),j=r(e,"UL",{});var o=l(j);for(let t=0;t<$.length;t+=1)$[t].l(o);o.forEach(c)},m(t,e){i(t,n,e),i(t,u,e),h(u,x),i(t,E,e),i(t,j,e);for(let t=0;t<$.length;t+=1)$[t].m(j,null)},p(t,[n]){if(1&n&&e!==(e=t[0])&&(document.title=e),1&n&&f(x,t[0]),2&n){let e;for(w=t[1],e=0;e<w.length;e+=1){const s=m(t,w,e);$[e]?$[e].p(s,n):($[e]=_(s),$[e].c(),$[e].m(j,null))}for(;e<$.length;e+=1)$[e].d(1);$.length=w.length}},i:v,o:v,d(t){t&&c(n),t&&c(u),t&&c(E),t&&c(j),y($,t)}}}var E=function(t,e,n,s){return new(n||(n=Promise))((function(o,r){function l(t){try{c(s.next(t))}catch(t){r(t)}}function a(t){try{c(s.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(l,a)}c((s=s.apply(t,e||[])).next())}))};function j(t){return E(this,void 0,void 0,(function*(){const{category_slug:e}=t.params;return{category_slug:e,posts:yield this.fetch(`/posts/${e}.json`).then((t=>t.json()))}}))}function w(t,e,n){let{category_slug:s=""}=e,{posts:o=[]}=e;return t.$$set=t=>{"category_slug"in t&&n(0,s=t.category_slug),"posts"in t&&n(1,o=t.posts)},[s,o]}export default class extends t{constructor(t){super(),e(this,t,w,x,n,{category_slug:0,posts:1})}}export{j as preload};
