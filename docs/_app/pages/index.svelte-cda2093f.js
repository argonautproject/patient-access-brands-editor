var Qe=Object.defineProperty,Xe=Object.defineProperties;var Ye=Object.getOwnPropertyDescriptors;var ye=Object.getOwnPropertySymbols;var Ze=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable;var Ee=(n,t,l)=>t in n?Qe(n,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):n[t]=l,ce=(n,t)=>{for(var l in t||(t={}))Ze.call(t,l)&&Ee(n,l,t[l]);if(ye)for(var l of ye(t))xe.call(t,l)&&Ee(n,l,t[l]);return n},ge=(n,t)=>Xe(n,Ye(t));import{D as et,S as be,i as we,s as de,L as tt,w as I,x as B,y,q as d,o as h,B as E,t as N,k as D,l as F,h as P,m as U,g,j as ie,n as ee,p as te,d as _,M as je,N as lt,O as ve,P as rt,e as O,c as C,a as L,b as q,Q as $e,J as T,R as ke,T as nt,U as he,V as me,f as J,W as it,X as x,E as Te,Y as j,Z as st,_ as se,$ as K,a0 as Q,a1 as Ie,a2 as ot,a3 as at,a4 as Be,a5 as ft,a6 as Je,a7 as De,a8 as _e,a9 as ut,K as pt,aa as ct}from"../chunks/vendor-225d4569.js";const ae=et({id:null});function $t(n){var p,c,$,b,w,A;let t,l,e=(((c=(p=n[0])==null?void 0:p.portalInherit)!=null&&c.name?(b=($=n[1])==null?void 0:$.portal)==null?void 0:b.name:(A=(w=n[0])==null?void 0:w.portal)==null?void 0:A.name)||"TODO: Add portal name, URL, and description")+"",r,s,i,u,o,a,f;return{c(){t=O("div"),l=O("p"),r=N(e),s=D(),i=O("button"),u=N("View data"),o=D(),a=O("button"),f=N("Connect"),this.h()},l(V){t=C(V,"DIV",{style:!0});var S=L(t);l=C(S,"P",{style:!0});var G=L(l);r=P(G,e),G.forEach(_),s=U(S),i=C(S,"BUTTON",{class:!0,kind:!0});var W=L(i);u=P(W,"View data"),W.forEach(_),o=U(S),a=C(S,"BUTTON",{class:!0,kind:!0});var z=L(a);f=P(z,"Connect"),z.forEach(_),S.forEach(_),this.h()},h(){J(l,"font-size",".8rem"),J(l,"margin-top",".5em"),q(i,"class","example svelte-lrfg47"),q(i,"kind","primary"),q(a,"class","example svelte-lrfg47"),q(a,"kind","primary"),J(t,"margin-left","1em"),J(t,"display","flex"),J(t,"align-items","self-end")},m(V,S){g(V,t,S),T(t,l),T(l,r),T(t,s),T(t,i),T(i,u),T(t,o),T(t,a),T(a,f)},p(V,S){var G,W,z,Y,H,Z;S&3&&e!==(e=(((W=(G=V[0])==null?void 0:G.portalInherit)!=null&&W.name?(Y=(z=V[1])==null?void 0:z.portal)==null?void 0:Y.name:(Z=(H=V[0])==null?void 0:H.portal)==null?void 0:Z.name)||"TODO: Add portal name, URL, and description")+"")&&ie(r,e)},d(V){V&&_(t)}}}function mt(n){let t,l;return t=new me({props:{$$slots:{default:[$t]},$$scope:{ctx:n}}}),{c(){I(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,r){y(t,e,r),l=!0},p(e,r){const s={};r&131&&(s.$$scope={dirty:r,ctx:e}),t.$set(s)},i(e){l||(d(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){E(t,e)}}}function _t(n){let t,l,e,r,s=n[0].name+"",i,u,o,a,f,p,c;return a=new ve({props:{noGutter:!0,$$slots:{default:[mt]},$$scope:{ctx:n}}}),p=new rt({props:{style:"cursor: pointer; position: absolute; top: 0%; right: 0%;"}}),p.$on("click",n[4]),{c(){t=O("h3"),l=O("img"),r=D(),i=N(s),u=N(`
    \xA0`),o=D(),I(a.$$.fragment),f=D(),I(p.$$.fragment),this.h()},l($){t=C($,"H3",{class:!0});var b=L(t);l=C(b,"IMG",{alt:!0,class:!0,src:!0}),r=U(b),i=P(b,s),u=P(b,`
    \xA0`),b.forEach(_),o=U($),B(a.$$.fragment,$),f=U($),B(p.$$.fragment,$),this.h()},h(){var $;q(l,"alt","logo"),q(l,"class","logo svelte-lrfg47"),$e(l.src,e=($=n[0].logo)!=null?$:"smart-burst.svg")||q(l,"src",e),q(t,"class","name svelte-lrfg47")},m($,b){g($,t,b),T(t,l),T(t,r),T(t,i),T(t,u),g($,o,b),y(a,$,b),g($,f,b),y(p,$,b),c=!0},p($,b){var A;(!c||b&1&&!$e(l.src,e=(A=$[0].logo)!=null?A:"smart-burst.svg"))&&q(l,"src",e),(!c||b&1)&&s!==(s=$[0].name+"")&&ie(i,s);const w={};b&131&&(w.$$scope={dirty:b,ctx:$}),a.$set(w)},i($){c||(d(a.$$.fragment,$),d(p.$$.fragment,$),c=!0)},o($){h(a.$$.fragment,$),h(p.$$.fragment,$),c=!1},d($){$&&_(t),$&&_(o),E(a,$),$&&_(f),E(p,$)}}}function Ue(n){let t,l;return t=new ke({props:{small:!0,style:"display: flex; align-items: centered",kind:"tertiary",$$slots:{default:[dt]},$$scope:{ctx:n}}}),t.$on("click",n[6]),{c(){I(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,r){y(t,e,r),l=!0},p(e,r){const s={};r&128&&(s.$$scope={dirty:r,ctx:e}),t.$set(s)},i(e){l||(d(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){E(t,e)}}}function dt(n){let t,l,e;return t=new nt({}),{c(){I(t.$$.fragment),l=N(" Add affiliated brand")},l(r){B(t.$$.fragment,r),l=P(r," Add affiliated brand")},m(r,s){y(t,r,s),g(r,l,s),e=!0},i(r){e||(d(t.$$.fragment,r),e=!0)},o(r){h(t.$$.fragment,r),e=!1},d(r){E(t,r),r&&_(l)}}}function gt(n){var a;let t="",l,e,r,s,i,u;r=new tt({props:{class:"tile",style:`opacity: ${((a=n[2])==null?void 0:a.id)!==null&&n[2].id!==n[0].id?"50":100}%`,$$slots:{default:[_t]},$$scope:{ctx:n}}}),r.$on("click",n[5]);let o=!n[0].parentId&&Ue(n);return{c(){l=N(t),e=D(),I(r.$$.fragment),s=D(),o&&o.c(),i=F()},l(f){l=P(f,t),e=U(f),B(r.$$.fragment,f),s=U(f),o&&o.l(f),i=F()},m(f,p){g(f,l,p),g(f,e,p),y(r,f,p),g(f,s,p),o&&o.m(f,p),g(f,i,p),u=!0},p(f,[p]){var $;(!u||p&1)&&t!==(t="")&&ie(l,t);const c={};p&5&&(c.style=`opacity: ${(($=f[2])==null?void 0:$.id)!==null&&f[2].id!==f[0].id?"50":100}%`),p&135&&(c.$$scope={dirty:p,ctx:f}),r.$set(c),f[0].parentId?o&&(ee(),h(o,1,1,()=>{o=null}),te()):o?(o.p(f,p),p&1&&d(o,1)):(o=Ue(f),o.c(),d(o,1),o.m(i.parentNode,i))},i(f){u||(d(r.$$.fragment,f),d(o),u=!0)},o(f){h(r.$$.fragment,f),h(o),u=!1},d(f){f&&_(l),f&&_(e),E(r,f),f&&_(s),o&&o.d(f),f&&_(i)}}}function ht(n,t,l){let e;je(n,ae,f=>l(2,e=f));const r=lt();let{brand:s}=t,{parentBrand:i}=t;const u=()=>{he(ae,e={id:s.id},e),console.log("Editing",s.id)},o=()=>{he(ae,e={id:s.id},e),console.log("Editing",s.id)},a=()=>{r("add-affiliated-brand",s)};return n.$$set=f=>{"brand"in f&&l(0,s=f.brand),"parentBrand"in f&&l(1,i=f.parentBrand)},[s,i,e,r,u,o,a]}class bt extends be{constructor(t){super();we(this,t,ht,gt,de,{brand:0,parentBrand:1})}}const{Boolean:Ke}=ft;function Ne(n,t,l){const e=n.slice();return e[30]=t[l],e[31]=t,e[32]=l,e}function Pe(n,t,l){const e=n.slice();return e[33]=t[l],e[34]=t,e[32]=l,e}function Ae(n){let t,l;return t=new it({props:{$$slots:{default:[Pt]},$$scope:{ctx:n}}}),{c(){I(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,r){y(t,e,r),l=!0},p(e,r){const s={};r[0]&127|r[1]&16&&(s.$$scope={dirty:r,ctx:e}),t.$set(s)},i(e){l||(d(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){E(t,e)}}}function wt(n){let t,l,e,r,s,i;function u(a){n[8](a)}let o={autofocus:!0,invalid:n[0].name=="",placeholder:"Associated Physicians of Madison"};return n[0].name!==void 0&&(o.value=n[0].name),r=new se({props:o}),j.push(()=>K(r,"value",u)),{c(){t=O("div"),l=N("The primary name associated with your brand."),e=D(),I(r.$$.fragment),this.h()},l(a){t=C(a,"DIV",{class:!0});var f=L(t);l=P(f,"The primary name associated with your brand."),f.forEach(_),e=U(a),B(r.$$.fragment,a),this.h()},h(){q(t,"class","bx--form__helper-text")},m(a,f){g(a,t,f),T(t,l),g(a,e,f),y(r,a,f),i=!0},p(a,f){const p={};f[0]&1&&(p.invalid=a[0].name==""),!s&&f[0]&1&&(s=!0,p.value=a[0].name,Q(()=>s=!1)),r.$set(p)},i(a){i||(d(r.$$.fragment,a),i=!0)},o(a){h(r.$$.fragment,a),i=!1},d(a){a&&_(t),a&&_(e),E(r,a)}}}function vt(n){var a,f;let t,l,e,r,s,i;function u(p){n[9](p)}let o={invalid:!((f=(a=n[0])==null?void 0:a.website)!=null&&f.startsWith("https://")),placeholder:"https://apmadison.com"};return n[0].website!==void 0&&(o.value=n[0].website),r=new se({props:o}),j.push(()=>K(r,"value",u)),{c(){t=O("div"),l=N(`The primary website associated with your brand. Note: this is distinct
        from your patient portal.`),e=D(),I(r.$$.fragment),this.h()},l(p){t=C(p,"DIV",{class:!0});var c=L(t);l=P(c,`The primary website associated with your brand. Note: this is distinct
        from your patient portal.`),c.forEach(_),e=U(p),B(r.$$.fragment,p),this.h()},h(){q(t,"class","bx--form__helper-text")},m(p,c){g(p,t,c),T(t,l),g(p,e,c),y(r,p,c),i=!0},p(p,c){var b,w;const $={};c[0]&1&&($.invalid=!((w=(b=p[0])==null?void 0:b.website)!=null&&w.startsWith("https://"))),!s&&c[0]&1&&(s=!0,$.value=p[0].website,Q(()=>s=!1)),r.$set($)},i(p){i||(d(r.$$.fragment,p),i=!0)},o(p){h(r.$$.fragment,p),i=!1},d(p){p&&_(t),p&&_(e),E(r,p)}}}function Oe(n){let t,l,e,r,s,i,u;function o(c){n[10](c,n[32])}function a(c){n[11](c,n[32])}let f={invalid:n[0].alias[n[32]]=="",style:"width: 100%;",placeholder:"Madison Doctors Group"};n[0].alias[n[32]]!==void 0&&(f.value=n[0].alias[n[32]]),n[3][n[32]]!==void 0&&(f.ref=n[3][n[32]]),l=new se({props:f}),j.push(()=>K(l,"value",o)),j.push(()=>K(l,"ref",a));function p(){return n[12](n[32])}return i=new Je({props:{style:"margin-left: .5em; cursor: pointer; min-width: 16px;"}}),i.$on("click",p),{c(){t=O("div"),I(l.$$.fragment),s=D(),I(i.$$.fragment),this.h()},l(c){t=C(c,"DIV",{style:!0});var $=L(t);B(l.$$.fragment,$),s=U($),B(i.$$.fragment,$),$.forEach(_),this.h()},h(){J(t,"display","flex"),J(t,"align-items","baseline")},m(c,$){g(c,t,$),y(l,t,null),T(t,s),y(i,t,null),u=!0},p(c,$){n=c;const b={};$[0]&1&&(b.invalid=n[0].alias[n[32]]==""),!e&&$[0]&1&&(e=!0,b.value=n[0].alias[n[32]],Q(()=>e=!1)),!r&&$[0]&8&&(r=!0,b.ref=n[3][n[32]],Q(()=>r=!1)),l.$set(b)},i(c){u||(d(l.$$.fragment,c),d(i.$$.fragment,c),u=!0)},o(c){h(l.$$.fragment,c),h(i.$$.fragment,c),u=!1},d(c){c&&_(t),E(l),E(i)}}}function kt(n){let t;return{c(){t=N("Add alias")},l(l){t=P(l,"Add alias")},m(l,e){g(l,t,e)},d(l){l&&_(t)}}}function It(n){var f;let t,l,e,r,s,i,u=((f=n[0])==null?void 0:f.alias)||[],o=[];for(let p=0;p<u.length;p+=1)o[p]=Oe(Pe(n,u,p));const a=p=>h(o[p],1,1,()=>{o[p]=null});return s=new ke({props:{small:!0,kind:"ghost",$$slots:{default:[kt]},$$scope:{ctx:n}}}),s.$on("click",n[13]),{c(){t=O("div"),l=N(`An alias associated with your Brand (e.g., a former name or other term
        patients might use to search for your brand)`),e=D();for(let p=0;p<o.length;p+=1)o[p].c();r=D(),I(s.$$.fragment),this.h()},l(p){t=C(p,"DIV",{class:!0});var c=L(t);l=P(c,`An alias associated with your Brand (e.g., a former name or other term
        patients might use to search for your brand)`),c.forEach(_),e=U(p);for(let $=0;$<o.length;$+=1)o[$].l(p);r=U(p),B(s.$$.fragment,p),this.h()},h(){q(t,"class","bx--form__helper-text")},m(p,c){g(p,t,c),T(t,l),g(p,e,c);for(let $=0;$<o.length;$+=1)o[$].m(p,c);g(p,r,c),y(s,p,c),i=!0},p(p,c){var b;if(c[0]&9){u=((b=p[0])==null?void 0:b.alias)||[];let w;for(w=0;w<u.length;w+=1){const A=Pe(p,u,w);o[w]?(o[w].p(A,c),d(o[w],1)):(o[w]=Oe(A),o[w].c(),d(o[w],1),o[w].m(r.parentNode,r))}for(ee(),w=u.length;w<o.length;w+=1)a(w);te()}const $={};c[1]&16&&($.$$scope={dirty:c,ctx:p}),s.$set($)},i(p){if(!i){for(let c=0;c<u.length;c+=1)d(o[c]);d(s.$$.fragment,p),i=!0}},o(p){o=o.filter(Ke);for(let c=0;c<o.length;c+=1)h(o[c]);h(s.$$.fragment,p),i=!1},d(p){p&&_(t),p&&_(e),Ie(o,p),p&&_(r),E(s,p)}}}function Ce(n){let t,l;return{c(){t=O("img"),this.h()},l(e){t=C(e,"IMG",{style:!0,alt:!0,src:!0}),this.h()},h(){J(t,"width","1em"),J(t,"height","1em"),q(t,"alt","logo"),$e(t.src,l=n[0].logo)||q(t,"src",l)},m(e,r){g(e,t,r)},p(e,r){r[0]&1&&!$e(t.src,l=e[0].logo)&&q(t,"src",l)},d(e){e&&_(t)}}}function Bt(n){let t,l,e,r=n[0].logo&&Ce(n),s={buttonLabel:"Choose logo file",labelDescription:"Square PNG or SVG, 1024x1024 pixels with transparent background preferred",accept:[".png",".svg"],status:"complete"};return l=new ot({props:s}),n[14](l),l.$on("change",n[15]),{c(){r&&r.c(),t=D(),I(l.$$.fragment)},l(i){r&&r.l(i),t=U(i),B(l.$$.fragment,i)},m(i,u){r&&r.m(i,u),g(i,t,u),y(l,i,u),e=!0},p(i,u){i[0].logo?r?r.p(i,u):(r=Ce(i),r.c(),r.m(t.parentNode,t)):r&&(r.d(1),r=null);const o={};l.$set(o)},i(i){e||(d(l.$$.fragment,i),e=!0)},o(i){h(l.$$.fragment,i),e=!1},d(i){r&&r.d(i),i&&_(t),n[14](null),E(l,i)}}}function Ve(n){var $,b;let t,l,e,r,s,i,u;function o(w){n[16](w,n[32])}function a(w){n[17](w,n[32])}function f(...w){return n[18](n[32],...w)}let p={invalid:!((b=($=n[0])==null?void 0:$.locations)!=null&&b[n[32]]),style:"width: 100%;",placeholder:"123 Regent St, Madison, WI 53726"};n[5][n[32]]!==void 0&&(p.value=n[5][n[32]]),n[4][n[32]]!==void 0&&(p.ref=n[4][n[32]]),l=new se({props:p}),j.push(()=>K(l,"value",o)),j.push(()=>K(l,"ref",a)),l.$on("keyup",f);function c(){return n[19](n[32])}return i=new Je({props:{style:"margin-left: .5em; cursor: pointer; min-width: 16px;"}}),i.$on("click",c),{c(){t=O("div"),I(l.$$.fragment),s=D(),I(i.$$.fragment),this.h()},l(w){t=C(w,"DIV",{style:!0});var A=L(t);B(l.$$.fragment,A),s=U(A),B(i.$$.fragment,A),A.forEach(_),this.h()},h(){J(t,"display","flex"),J(t,"align-items","baseline")},m(w,A){g(w,t,A),y(l,t,null),T(t,s),y(i,t,null),u=!0},p(w,A){var S,G;n=w;const V={};A[0]&1&&(V.invalid=!((G=(S=n[0])==null?void 0:S.locations)!=null&&G[n[32]])),!e&&A[0]&32&&(e=!0,V.value=n[5][n[32]],Q(()=>e=!1)),!r&&A[0]&16&&(r=!0,V.ref=n[4][n[32]],Q(()=>r=!1)),l.$set(V)},i(w){u||(d(l.$$.fragment,w),d(i.$$.fragment,w),u=!0)},o(w){h(l.$$.fragment,w),h(i.$$.fragment,w),u=!1},d(w){w&&_(t),E(l),E(i)}}}function yt(n){let t;return{c(){t=N("Add location")},l(l){t=P(l,"Add location")},m(l,e){g(l,t,e)},d(l){l&&_(t)}}}function Et(n){let t,l,e,r,s,i,u=n[5]||[],o=[];for(let f=0;f<u.length;f+=1)o[f]=Ve(Ne(n,u,f));const a=f=>h(o[f],1,1,()=>{o[f]=null});return s=new ke({props:{small:!0,kind:"ghost",$$slots:{default:[yt]},$$scope:{ctx:n}}}),s.$on("click",n[20]),{c(){t=O("div"),l=N(`A location (street address, city/state, or city/state/zip) associated
        with your Brand`),e=D();for(let f=0;f<o.length;f+=1)o[f].c();r=D(),I(s.$$.fragment),this.h()},l(f){t=C(f,"DIV",{class:!0});var p=L(t);l=P(p,`A location (street address, city/state, or city/state/zip) associated
        with your Brand`),p.forEach(_),e=U(f);for(let c=0;c<o.length;c+=1)o[c].l(f);r=U(f),B(s.$$.fragment,f),this.h()},h(){q(t,"class","bx--form__helper-text")},m(f,p){g(f,t,p),T(t,l),g(f,e,p);for(let c=0;c<o.length;c+=1)o[c].m(f,p);g(f,r,p),y(s,f,p),i=!0},p(f,p){if(p[0]&49){u=f[5]||[];let $;for($=0;$<u.length;$+=1){const b=Ne(f,u,$);o[$]?(o[$].p(b,p),d(o[$],1)):(o[$]=Ve(b),o[$].c(),d(o[$],1),o[$].m(r.parentNode,r))}for(ee(),$=u.length;$<o.length;$+=1)a($);te()}const c={};p[1]&16&&(c.$$scope={dirty:p,ctx:f}),s.$set(c)},i(f){if(!i){for(let p=0;p<u.length;p+=1)d(o[p]);d(s.$$.fragment,f),i=!0}},o(f){o=o.filter(Ke);for(let p=0;p<o.length;p+=1)h(o[p]);h(s.$$.fragment,f),i=!1},d(f){f&&_(t),f&&_(e),Ie(o,f),f&&_(r),E(s,f)}}}function Tt(n){let t,l,e;function r(i){n[21](i)}let s={label:"Select categories",items:[{id:"outpatient",text:"Outpatient (clinic, office)"},{id:"hospital",text:"Hospital"},{id:"health-system",text:"Health system"},{id:"lab",text:"Lab"},{id:"pharmacy",text:"Pharmacy"},{id:"insurer",text:"Insurer"},{id:"network",text:"Data Network"},{id:"aggregator",text:"Data Aggregator"}]};return n[0].categories!==void 0&&(s.selectedIds=n[0].categories),t=new at({props:s}),j.push(()=>K(t,"selectedIds",r)),{c(){I(t.$$.fragment)},l(i){B(t.$$.fragment,i)},m(i,u){y(t,i,u),e=!0},p(i,u){const o={};!l&&u[0]&1&&(l=!0,o.selectedIds=i[0].categories,Q(()=>l=!1)),t.$set(o)},i(i){e||(d(t.$$.fragment,i),e=!0)},o(i){h(t.$$.fragment,i),e=!1},d(i){E(t,i)}}}function qe(n){var a,f;let t,l,e,r=(((f=(a=n[6])==null?void 0:a.portal)==null?void 0:f.website)||"")+"",s,i,u,o;return{c(){t=O("div"),l=O("input"),e=N(` Use
          portal URL from Primary Brand ("`),s=N(r),i=N('")'),this.h()},l(p){t=C(p,"DIV",{});var c=L(t);l=C(c,"INPUT",{type:!0}),e=P(c,` Use
          portal URL from Primary Brand ("`),s=P(c,r),i=P(c,'")'),c.forEach(_),this.h()},h(){q(l,"type","checkbox")},m(p,c){g(p,t,c),T(t,l),l.checked=n[0].portalInherit.website,T(t,e),T(t,s),T(t,i),u||(o=Be(l,"change",n[22]),u=!0)},p(p,c){var $,b;c[0]&1&&(l.checked=p[0].portalInherit.website),c[0]&64&&r!==(r=(((b=($=p[6])==null?void 0:$.portal)==null?void 0:b.website)||"")+"")&&ie(s,r)},d(p){p&&_(t),u=!1,o()}}}function Re(n){var i,u,o;let t,l,e;function r(a){n[23](a)}let s={invalid:!((o=(u=(i=n[0])==null?void 0:i.portal)==null?void 0:u.website)!=null&&o.startsWith("https://")),placeholder:"https://www.chart.myunitypoint.org/"};return n[0].portal.website!==void 0&&(s.value=n[0].portal.website),t=new se({props:s}),j.push(()=>K(t,"value",r)),{c(){I(t.$$.fragment)},l(a){B(t.$$.fragment,a)},m(a,f){y(t,a,f),e=!0},p(a,f){var c,$,b;const p={};f[0]&1&&(p.invalid=!((b=($=(c=a[0])==null?void 0:c.portal)==null?void 0:$.website)!=null&&b.startsWith("https://"))),!l&&f[0]&1&&(l=!0,p.value=a[0].portal.website,Q(()=>l=!1)),t.$set(p)},i(a){e||(d(t.$$.fragment,a),e=!0)},o(a){h(t.$$.fragment,a),e=!1},d(a){E(t,a)}}}function Dt(n){let t,l,e,r,s,i,u=n[1]&&qe(n),o=(!n[1]||!n[0].portalInherit.website)&&Re(n);return{c(){t=O("div"),l=N("URL of patient portal where records are available (https only)"),e=D(),u&&u.c(),r=D(),o&&o.c(),s=F(),this.h()},l(a){t=C(a,"DIV",{class:!0});var f=L(t);l=P(f,"URL of patient portal where records are available (https only)"),f.forEach(_),e=U(a),u&&u.l(a),r=U(a),o&&o.l(a),s=F(),this.h()},h(){q(t,"class","bx--form__helper-text")},m(a,f){g(a,t,f),T(t,l),g(a,e,f),u&&u.m(a,f),g(a,r,f),o&&o.m(a,f),g(a,s,f),i=!0},p(a,f){a[1]?u?u.p(a,f):(u=qe(a),u.c(),u.m(r.parentNode,r)):u&&(u.d(1),u=null),!a[1]||!a[0].portalInherit.website?o?(o.p(a,f),f[0]&3&&d(o,1)):(o=Re(a),o.c(),d(o,1),o.m(s.parentNode,s)):o&&(ee(),h(o,1,1,()=>{o=null}),te())},i(a){i||(d(o),i=!0)},o(a){h(o),i=!1},d(a){a&&_(t),a&&_(e),u&&u.d(a),a&&_(r),o&&o.d(a),a&&_(s)}}}function Le(n){var a,f;let t,l,e,r=(((f=(a=n[6])==null?void 0:a.portal)==null?void 0:f.name)||"")+"",s,i,u,o;return{c(){t=O("div"),l=O("input"),e=N(` Use
          name from Primary Brand ("`),s=N(r),i=N('")'),this.h()},l(p){t=C(p,"DIV",{});var c=L(t);l=C(c,"INPUT",{type:!0}),e=P(c,` Use
          name from Primary Brand ("`),s=P(c,r),i=P(c,'")'),c.forEach(_),this.h()},h(){q(l,"type","checkbox")},m(p,c){g(p,t,c),T(t,l),l.checked=n[0].portalInherit.name,T(t,e),T(t,s),T(t,i),u||(o=Be(l,"change",n[24]),u=!0)},p(p,c){var $,b;c[0]&1&&(l.checked=p[0].portalInherit.name),c[0]&64&&r!==(r=(((b=($=p[6])==null?void 0:$.portal)==null?void 0:b.name)||"")+"")&&ie(s,r)},d(p){p&&_(t),u=!1,o()}}}function Se(n){let t,l,e;function r(i){n[25](i)}let s={invalid:!1,placeholder:"MyUnityPoint"};return n[0].portal.name!==void 0&&(s.value=n[0].portal.name),t=new se({props:s}),j.push(()=>K(t,"value",r)),{c(){I(t.$$.fragment)},l(i){B(t.$$.fragment,i)},m(i,u){y(t,i,u),e=!0},p(i,u){const o={};u[0]&1&&(o.invalid=!1),!l&&u[0]&1&&(l=!0,o.value=i[0].portal.name,Q(()=>l=!1)),t.$set(o)},i(i){e||(d(t.$$.fragment,i),e=!0)},o(i){h(t.$$.fragment,i),e=!1},d(i){E(t,i)}}}function Ut(n){let t,l,e,r,s,i,u=n[1]&&Le(n),o=(!n[1]||!n[0].portalInherit.name)&&Se(n);return{c(){t=O("div"),l=N("Name of the portal as known to patients"),e=D(),u&&u.c(),r=D(),o&&o.c(),s=F(),this.h()},l(a){t=C(a,"DIV",{class:!0});var f=L(t);l=P(f,"Name of the portal as known to patients"),f.forEach(_),e=U(a),u&&u.l(a),r=U(a),o&&o.l(a),s=F(),this.h()},h(){q(t,"class","bx--form__helper-text")},m(a,f){g(a,t,f),T(t,l),g(a,e,f),u&&u.m(a,f),g(a,r,f),o&&o.m(a,f),g(a,s,f),i=!0},p(a,f){a[1]?u?u.p(a,f):(u=Le(a),u.c(),u.m(r.parentNode,r)):u&&(u.d(1),u=null),!a[1]||!a[0].portalInherit.name?o?(o.p(a,f),f[0]&3&&d(o,1)):(o=Se(a),o.c(),d(o,1),o.m(s.parentNode,s)):o&&(ee(),h(o,1,1,()=>{o=null}),te())},i(a){i||(d(o),i=!0)},o(a){h(o),i=!1},d(a){a&&_(t),a&&_(e),u&&u.d(a),a&&_(r),o&&o.d(a),a&&_(s)}}}function ze(n){var a,f;let t,l,e,r=(f=(a=n[6])==null?void 0:a.portal)!=null&&f.description?n[6].portal.description.slice(40)+"...":"",s,i,u,o;return{c(){t=O("div"),l=O("input"),e=N(`
          Use description from Primary Brand ("`),s=N(r),i=N('")'),this.h()},l(p){t=C(p,"DIV",{});var c=L(t);l=C(c,"INPUT",{type:!0}),e=P(c,`
          Use description from Primary Brand ("`),s=P(c,r),i=P(c,'")'),c.forEach(_),this.h()},h(){q(l,"type","checkbox")},m(p,c){g(p,t,c),T(t,l),l.checked=n[0].portalInherit.description,T(t,e),T(t,s),T(t,i),u||(o=Be(l,"change",n[26]),u=!0)},p(p,c){var $,b;c[0]&1&&(l.checked=p[0].portalInherit.description),c[0]&64&&r!==(r=(b=($=p[6])==null?void 0:$.portal)!=null&&b.description?p[6].portal.description.slice(40)+"...":"")&&ie(s,r)},d(p){p&&_(t),u=!1,o()}}}function Me(n){let t,l,e;function r(i){n[27](i)}let s={invalid:!1,placeholder:"Access your clinical records..."};return n[0].portal.description!==void 0&&(s.value=n[0].portal.description),t=new se({props:s}),j.push(()=>K(t,"value",r)),{c(){I(t.$$.fragment)},l(i){B(t.$$.fragment,i)},m(i,u){y(t,i,u),e=!0},p(i,u){const o={};u[0]&1&&(o.invalid=!1),!l&&u[0]&1&&(l=!0,o.value=i[0].portal.description,Q(()=>l=!1)),t.$set(o)},i(i){e||(d(t.$$.fragment,i),e=!0)},o(i){h(t.$$.fragment,i),e=!1},d(i){E(t,i)}}}function Nt(n){let t,l,e,r,s,i,u=n[1]&&ze(n),o=(!n[1]||!n[0].portalInherit.description)&&Me(n);return{c(){t=O("div"),l=N(`Description of the portal to help patients connect to the right place.
        Explain the intended audience of the portal, if you offer more than one
        portal for different audiences.`),e=D(),u&&u.c(),r=D(),o&&o.c(),s=F(),this.h()},l(a){t=C(a,"DIV",{class:!0});var f=L(t);l=P(f,`Description of the portal to help patients connect to the right place.
        Explain the intended audience of the portal, if you offer more than one
        portal for different audiences.`),f.forEach(_),e=U(a),u&&u.l(a),r=U(a),o&&o.l(a),s=F(),this.h()},h(){q(t,"class","bx--form__helper-text")},m(a,f){g(a,t,f),T(t,l),g(a,e,f),u&&u.m(a,f),g(a,r,f),o&&o.m(a,f),g(a,s,f),i=!0},p(a,f){a[1]?u?u.p(a,f):(u=ze(a),u.c(),u.m(r.parentNode,r)):u&&(u.d(1),u=null),!a[1]||!a[0].portalInherit.description?o?(o.p(a,f),f[0]&3&&d(o,1)):(o=Me(a),o.c(),d(o,1),o.m(s.parentNode,s)):o&&(ee(),h(o,1,1,()=>{o=null}),te())},i(a){i||(d(o),i=!0)},o(a){h(o),i=!1},d(a){a&&_(t),a&&_(e),u&&u.d(a),a&&_(r),o&&o.d(a),a&&_(s)}}}function Pt(n){let t,l=`${n[1]?"Affiliated":"Primary"} Brand Details`,e,r,s,i,u,o,a,f,p,c,$,b,w,A,V,S="Patient Portal Details",G,W,z,Y,H,Z,X,re;return s=new x({props:{legendText:"Brand name",$$slots:{default:[wt]},$$scope:{ctx:n}}}),u=new x({props:{legendText:"Brand website (https only)",$$slots:{default:[vt]},$$scope:{ctx:n}}}),a=new x({props:{legendText:"Brand aliases (optional)",$$slots:{default:[It]},$$scope:{ctx:n}}}),p=new x({props:{legendText:"Brand logo",$$slots:{default:[Bt]},$$scope:{ctx:n}}}),$=new x({props:{legendText:"Locations (optional)",$$slots:{default:[Et]},$$scope:{ctx:n}}}),w=new x({props:{legendText:"Categories (optional)",$$slots:{default:[Tt]},$$scope:{ctx:n}}}),z=new x({props:{legendText:"Portal URL",$$slots:{default:[Dt]},$$scope:{ctx:n}}}),H=new x({props:{legendText:"Portal name",$$slots:{default:[Ut]},$$scope:{ctx:n}}}),X=new x({props:{legendText:"Portal description",$$slots:{default:[Nt]},$$scope:{ctx:n}}}),{c(){t=O("h5"),e=N(l),r=D(),I(s.$$.fragment),i=D(),I(u.$$.fragment),o=D(),I(a.$$.fragment),f=D(),I(p.$$.fragment),c=D(),I($.$$.fragment),b=D(),I(w.$$.fragment),A=D(),V=O("h5"),G=N(S),W=D(),I(z.$$.fragment),Y=D(),I(H.$$.fragment),Z=D(),I(X.$$.fragment)},l(m){t=C(m,"H5",{});var v=L(t);e=P(v,l),v.forEach(_),r=U(m),B(s.$$.fragment,m),i=U(m),B(u.$$.fragment,m),o=U(m),B(a.$$.fragment,m),f=U(m),B(p.$$.fragment,m),c=U(m),B($.$$.fragment,m),b=U(m),B(w.$$.fragment,m),A=U(m),V=C(m,"H5",{});var ne=L(V);G=P(ne,S),ne.forEach(_),W=U(m),B(z.$$.fragment,m),Y=U(m),B(H.$$.fragment,m),Z=U(m),B(X.$$.fragment,m)},m(m,v){g(m,t,v),T(t,e),g(m,r,v),y(s,m,v),g(m,i,v),y(u,m,v),g(m,o,v),y(a,m,v),g(m,f,v),y(p,m,v),g(m,c,v),y($,m,v),g(m,b,v),y(w,m,v),g(m,A,v),g(m,V,v),T(V,G),g(m,W,v),y(z,m,v),g(m,Y,v),y(H,m,v),g(m,Z,v),y(X,m,v),re=!0},p(m,v){(!re||v[0]&2)&&l!==(l=`${m[1]?"Affiliated":"Primary"} Brand Details`)&&ie(e,l);const ne={};v[0]&1|v[1]&16&&(ne.$$scope={dirty:v,ctx:m}),s.$set(ne);const fe={};v[0]&1|v[1]&16&&(fe.$$scope={dirty:v,ctx:m}),u.$set(fe);const k={};v[0]&9|v[1]&16&&(k.$$scope={dirty:v,ctx:m}),a.$set(k);const R={};v[0]&5|v[1]&16&&(R.$$scope={dirty:v,ctx:m}),p.$set(R);const M={};v[0]&49|v[1]&16&&(M.$$scope={dirty:v,ctx:m}),$.$set(M);const le={};v[0]&1|v[1]&16&&(le.$$scope={dirty:v,ctx:m}),w.$set(le);const ue={};v[0]&67|v[1]&16&&(ue.$$scope={dirty:v,ctx:m}),z.$set(ue);const pe={};v[0]&67|v[1]&16&&(pe.$$scope={dirty:v,ctx:m}),H.$set(pe);const oe={};v[0]&67|v[1]&16&&(oe.$$scope={dirty:v,ctx:m}),X.$set(oe)},i(m){re||(d(s.$$.fragment,m),d(u.$$.fragment,m),d(a.$$.fragment,m),d(p.$$.fragment,m),d($.$$.fragment,m),d(w.$$.fragment,m),d(z.$$.fragment,m),d(H.$$.fragment,m),d(X.$$.fragment,m),re=!0)},o(m){h(s.$$.fragment,m),h(u.$$.fragment,m),h(a.$$.fragment,m),h(p.$$.fragment,m),h($.$$.fragment,m),h(w.$$.fragment,m),h(z.$$.fragment,m),h(H.$$.fragment,m),h(X.$$.fragment,m),re=!1},d(m){m&&_(t),m&&_(r),E(s,m),m&&_(i),E(u,m),m&&_(o),E(a,m),m&&_(f),E(p,m),m&&_(c),E($,m),m&&_(b),E(w,m),m&&_(A),m&&_(V),m&&_(W),E(z,m),m&&_(Y),E(H,m),m&&_(Z),E(X,m)}}}function At(n){let t,l,e=n[0]&&Ae(n);return{c(){e&&e.c(),t=F()},l(r){e&&e.l(r),t=F()},m(r,s){e&&e.m(r,s),g(r,t,s),l=!0},p(r,s){r[0]?e?(e.p(r,s),s[0]&1&&d(e,1)):(e=Ae(r),e.c(),d(e,1),e.m(t.parentNode,t)):e&&(ee(),h(e,1,1,()=>{e=null}),te())},i(r){l||(d(e),l=!0)},o(r){h(e),l=!1},d(r){e&&e.d(r),r&&_(t)}}}function Ot(n,t,l){let{brand:e}=t,{brands:r}=t,s,i=[],u=[],o=[],a=!1,f;function p(k){n.$$.not_equal(e.name,k)&&(e.name=k,l(0,e),l(7,r),l(1,a))}function c(k){n.$$.not_equal(e.website,k)&&(e.website=k,l(0,e),l(7,r),l(1,a))}function $(k,R){n.$$.not_equal(e.alias[R],k)&&(e.alias[R]=k,l(0,e),l(7,r),l(1,a))}function b(k,R){n.$$.not_equal(i[R],k)&&(i[R]=k,l(3,i))}const w=k=>l(0,e.alias=e.alias.filter((R,M)=>M!==k),e),A=async()=>{l(0,e.alias=e.alias||[],e).push(""),await Te(),i.slice(-1)[0].focus()};function V(k){j[k?"unshift":"push"](()=>{s=k,l(2,s)})}const S=async function(R){console.log(R.detail);const M=R.detail[0],le=new Uint8Array(await M.arrayBuffer());console.log(le);const ue=st(le);let pe=M.name.split(".")[1],oe=`data:image/${{svg:"svg+xml",png:"png"}[pe]};base64,${ue}`;l(0,e.logo=oe,e),console.log(oe),s.clearFiles()};function G(k,R){n.$$.not_equal(o[R],k)&&(o[R]=k,l(5,o))}function W(k,R){n.$$.not_equal(u[R],k)&&(u[R]=k,l(4,u))}const z=(k,R)=>{var le;R.target;let M=o[k].match(/(^(.*?),\s+)?(.+?),?\s*([A-z][A-z])\s*?([\d-]{5,})?$/);if(M==null){l(0,e.locations[k]=null,e);return}l(0,e.locations=(le=e.locations)!=null?le:[],e),l(0,e.locations[k]={line:[M[2]].filter(Boolean),city:M[3],state:M[4],zip:M[5]},e)},Y=k=>l(5,o=o.filter((R,M)=>M!==k)),H=async()=>{l(5,o=o||[]).push(""),await Te(),u.slice(-1)[0].focus()};function Z(k){n.$$.not_equal(e.categories,k)&&(e.categories=k,l(0,e),l(7,r),l(1,a))}function X(){e.portalInherit.website=this.checked,l(0,e),l(7,r),l(1,a)}function re(k){n.$$.not_equal(e.portal.website,k)&&(e.portal.website=k,l(0,e),l(7,r),l(1,a))}function m(){e.portalInherit.name=this.checked,l(0,e),l(7,r),l(1,a)}function v(k){n.$$.not_equal(e.portal.name,k)&&(e.portal.name=k,l(0,e),l(7,r),l(1,a))}function ne(){e.portalInherit.description=this.checked,l(0,e),l(7,r),l(1,a)}function fe(k){n.$$.not_equal(e.portal.description,k)&&(e.portal.description=k,l(0,e),l(7,r),l(1,a))}return n.$$set=k=>{"brand"in k&&l(0,e=k.brand),"brands"in k&&l(7,r=k.brands)},n.$$.update=()=>{n.$$.dirty[0]&131&&(e!=null&&e.parentId&&(l(1,a=!0),l(6,f=r[e.parentId])),e&&!(e!=null&&e.portal)&&(l(0,e.portal={},e),console.log("Brand",e,a),l(0,e.portalInherit={name:a,website:a,description:a},e)))},[e,a,s,i,u,o,f,r,p,c,$,b,w,A,V,S,G,W,z,Y,H,Z,X,re,m,v,ne,fe]}class Ct extends be{constructor(t){super();we(this,t,Ot,At,de,{brand:0,brands:7},null,[-1,-1])}}function Ge(n){try{return new URL(n).origin.replace(/^https:\/\/www\./,"https://")}catch{return}}function Vt(n,t){return{resourceType:"Bundle",type:"collection",entry:Object.entries(n).map(([l,e])=>{var r,s,i,u,o,a;return{fullUrl:`${t}/Organization/${l}`,resource:{resourceType:"Organization",id:l,extension:[...e!=null&&e.logo?[{url:"https://argonaut.fhir.us/brand-logo",valueUrl:e.logo}]:[],...!((r=e==null?void 0:e.portalInherit)!=null&&r.website)&&((s=e==null?void 0:e.portal)==null?void 0:s.website)?[{url:"https://argonaut.fhir.us/patient-access-url",valueUrl:e.portal.website}]:[],...!((i=e==null?void 0:e.portalInherit)!=null&&i.name)&&((u=e.portal)==null?void 0:u.name)?[{url:"https://argonaut.fhir.us/patient-access-name",valueString:e.portal.name}]:[],...!((o=e.portalInherit)!=null&&o.description)&&((a=e.portal)==null?void 0:a.description)?[{url:"https://argonaut.fhir.us/patient-access-description",valueString:e.portal.description}]:[]],name:e.name,partOf:e.parentId?{reference:`Organization/${e.parentId}`}:void 0,alias:e.alias,address:(e.locations||[]).map(f=>({line:f==null?void 0:f.line,city:f==null?void 0:f.city,state:f==null?void 0:f.state,postalCode:f==null?void 0:f.zip})),telecom:[...e.website?[{system:"url",value:e.website}]:[]],identifier:[...Ge(e==null?void 0:e.website)?[{system:"urn:ietf:rfc:3986",value:Ge(e==null?void 0:e.website)}]:[]],type:((e==null?void 0:e.categories)||[]).map(f=>({coding:[{system:"https://argonaut.fhir.us",code:f}]}))}}})}}function Fe(n,t,l){const e=n.slice();return e[6]=t[l][0],e[7]=t[l][1],e}function qt(n){let t,l,e,r;return e=new ut({props:{text:n[1],feedback:"Copied Brand Bundle to clipboard"}}),{c(){t=O("h1"),l=N("SMART Patient Brand Editor "),I(e.$$.fragment),this.h()},l(s){t=C(s,"H1",{class:!0});var i=L(t);l=P(i,"SMART Patient Brand Editor "),B(e.$$.fragment,i),i.forEach(_),this.h()},h(){q(t,"class","svelte-1hkba25")},m(s,i){g(s,t,i),T(t,l),y(e,t,null),r=!0},p(s,i){const u={};i&2&&(u.text=s[1]),e.$set(u)},i(s){r||(d(e.$$.fragment,s),r=!0)},o(s){h(e.$$.fragment,s),r=!1},d(s){s&&_(t),E(e)}}}function Rt(n){let t,l;return t=new _e({props:{sm:4,$$slots:{default:[qt]},$$scope:{ctx:n}}}),{c(){I(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,r){y(t,e,r),l=!0},p(e,r){const s={};r&1026&&(s.$$scope={dirty:r,ctx:e}),t.$set(s)},i(e){l||(d(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){E(t,e)}}}function Lt(n){let t,l,e;return t=new bt({props:{brand:n[7],parentBrand:n[0][n[7].parentId]}}),t.$on("add-affiliated-brand",function(){ct(n[3](n[6]))&&n[3](n[6]).apply(this,arguments)}),{c(){I(t.$$.fragment),l=D()},l(r){B(t.$$.fragment,r),l=U(r)},m(r,s){y(t,r,s),g(r,l,s),e=!0},p(r,s){n=r;const i={};s&1&&(i.brand=n[7]),s&1&&(i.parentBrand=n[0][n[7].parentId]),t.$set(i)},i(r){e||(d(t.$$.fragment,r),e=!0)},o(r){h(t.$$.fragment,r),e=!1},d(r){E(t,r),r&&_(l)}}}function He(n){let t,l;return t=new _e({props:{class:"tile-column",sm:3,$$slots:{default:[Lt]},$$scope:{ctx:n}}}),{c(){I(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,r){y(t,e,r),l=!0},p(e,r){const s={};r&1025&&(s.$$scope={dirty:r,ctx:e}),t.$set(s)},i(e){l||(d(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){E(t,e)}}}function St(n){let t,l,e=Object.entries(n[0]),r=[];for(let i=0;i<e.length;i+=1)r[i]=He(Fe(n,e,i));const s=i=>h(r[i],1,1,()=>{r[i]=null});return{c(){for(let i=0;i<r.length;i+=1)r[i].c();t=F()},l(i){for(let u=0;u<r.length;u+=1)r[u].l(i);t=F()},m(i,u){for(let o=0;o<r.length;o+=1)r[o].m(i,u);g(i,t,u),l=!0},p(i,u){if(u&9){e=Object.entries(i[0]);let o;for(o=0;o<e.length;o+=1){const a=Fe(i,e,o);r[o]?(r[o].p(a,u),d(r[o],1)):(r[o]=He(a),r[o].c(),d(r[o],1),r[o].m(t.parentNode,t))}for(ee(),o=e.length;o<r.length;o+=1)s(o);te()}},i(i){if(!l){for(let u=0;u<e.length;u+=1)d(r[u]);l=!0}},o(i){r=r.filter(Boolean);for(let u=0;u<r.length;u+=1)h(r[u]);l=!1},d(i){Ie(r,i),i&&_(t)}}}function zt(n){let t,l;return t=new me({props:{$$slots:{default:[St]},$$scope:{ctx:n}}}),{c(){I(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,r){y(t,e,r),l=!0},p(e,r){const s={};r&1025&&(s.$$scope={dirty:r,ctx:e}),t.$set(s)},i(e){l||(d(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){E(t,e)}}}function Mt(n){let t,l;return t=new ve({props:{noGutter:!0,$$slots:{default:[zt]},$$scope:{ctx:n}}}),{c(){I(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,r){y(t,e,r),l=!0},p(e,r){const s={};r&1025&&(s.$$scope={dirty:r,ctx:e}),t.$set(s)},i(e){l||(d(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){E(t,e)}}}function We(n){let t,l,e;function r(i){n[4](i)}let s={brands:n[0]};return n[0][n[2].id]!==void 0&&(s.brand=n[0][n[2].id]),t=new Ct({props:s}),j.push(()=>K(t,"brand",r)),{c(){I(t.$$.fragment)},l(i){B(t.$$.fragment,i)},m(i,u){y(t,i,u),e=!0},p(i,u){const o={};u&1&&(o.brands=i[0]),!l&&u&5&&(l=!0,o.brand=i[0][i[2].id],Q(()=>l=!1)),t.$set(o)},i(i){e||(d(t.$$.fragment,i),e=!0)},o(i){h(t.$$.fragment,i),e=!1},d(i){E(t,i)}}}function Gt(n){let t=n[2].id,l,e,r=We(n);return{c(){r.c(),l=F()},l(s){r.l(s),l=F()},m(s,i){r.m(s,i),g(s,l,i),e=!0},p(s,i){i&4&&de(t,t=s[2].id)?(ee(),h(r,1,1,pt),te(),r=We(s),r.c(),d(r),r.m(l.parentNode,l)):r.p(s,i)},i(s){e||(d(r),e=!0)},o(s){h(r),e=!1},d(s){s&&_(l),r.d(s)}}}function Ft(n){let t,l,e,r;return t=new _e({props:{lg:8,sm:4,$$slots:{default:[Mt]},$$scope:{ctx:n}}}),e=new _e({props:{lg:8,sm:4,$$slots:{default:[Gt]},$$scope:{ctx:n}}}),{c(){I(t.$$.fragment),l=D(),I(e.$$.fragment)},l(s){B(t.$$.fragment,s),l=U(s),B(e.$$.fragment,s)},m(s,i){y(t,s,i),g(s,l,i),y(e,s,i),r=!0},p(s,i){const u={};i&1025&&(u.$$scope={dirty:i,ctx:s}),t.$set(u);const o={};i&1029&&(o.$$scope={dirty:i,ctx:s}),e.$set(o)},i(s){r||(d(t.$$.fragment,s),d(e.$$.fragment,s),r=!0)},o(s){h(t.$$.fragment,s),h(e.$$.fragment,s),r=!1},d(s){E(t,s),s&&_(l),E(e,s)}}}function Ht(n){let t,l,e,r;return t=new me({props:{$$slots:{default:[Rt]},$$scope:{ctx:n}}}),e=new me({props:{$$slots:{default:[Ft]},$$scope:{ctx:n}}}),{c(){I(t.$$.fragment),l=D(),I(e.$$.fragment)},l(s){B(t.$$.fragment,s),l=U(s),B(e.$$.fragment,s)},m(s,i){y(t,s,i),g(s,l,i),y(e,s,i),r=!0},p(s,i){const u={};i&1026&&(u.$$scope={dirty:i,ctx:s}),t.$set(u);const o={};i&1029&&(o.$$scope={dirty:i,ctx:s}),e.$set(o)},i(s){r||(d(t.$$.fragment,s),d(e.$$.fragment,s),r=!0)},o(s){h(t.$$.fragment,s),h(e.$$.fragment,s),r=!1},d(s){E(t,s),s&&_(l),E(e,s)}}}function Wt(n){let t,l;return t=new ve({props:{$$slots:{default:[Ht]},$$scope:{ctx:n}}}),{c(){I(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,r){y(t,e,r),l=!0},p(e,[r]){const s={};r&1031&&(s.$$scope={dirty:r,ctx:e}),t.$set(s)},i(e){l||(d(t.$$.fragment,e),l=!0)},o(e){h(t.$$.fragment,e),l=!1},d(e){E(t,e)}}}function jt(n,t,l){let e;je(n,ae,a=>l(2,e=a));let r={id:De(),name:"TODO: Add a name"},s={[r.id]:ce({},r)},i="";function u(a){return f=>{const p=ge(ce({},r),{id:De(),parentId:a});l(0,s=ge(ce({},s),{[p.id]:p})),he(ae,e={id:p.id},e)}}function o(a){n.$$.not_equal(s[e.id],a)&&(s[e.id]=a,l(0,s))}return n.$$.update=()=>{n.$$.dirty&1&&l(1,i=JSON.stringify(Vt(s,"https://ehr.example.org"),null,2))},[s,i,e,u,o]}class Qt extends be{constructor(t){super();we(this,t,jt,Wt,de,{})}}export{Qt as default};