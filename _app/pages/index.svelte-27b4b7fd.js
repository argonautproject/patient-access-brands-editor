var Qe=Object.defineProperty,Xe=Object.defineProperties;var Ye=Object.getOwnPropertyDescriptors;var Ue=Object.getOwnPropertySymbols;var Ze=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable;var Ee=(s,e,r)=>e in s?Qe(s,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[e]=r,me=(s,e)=>{for(var r in e||(e={}))Ze.call(e,r)&&Ee(s,r,e[r]);if(Ue)for(var r of Ue(e))xe.call(e,r)&&Ee(s,r,e[r]);return s},be=(s,e)=>Xe(s,Ye(e));import{D as et,S as we,i as ve,s as he,L as tt,t as A,k as T,w as I,l as F,h as N,m as D,x as y,g as b,y as B,j as re,n as ee,o as w,p as te,q as g,d,B as U,M as Je,N as rt,O as ke,P as nt,e as P,c as O,a as q,b as S,Q as $e,J as E,R as _e,T as de,U as ge,V as Ie,f as j,W as lt,X as st,Y as x,E as Te,Z as W,_ as it,$ as se,a0 as K,a1 as Q,a2 as ye,a3 as ot,a4 as at,a5 as Be,a6 as ft,a7 as ut,a8 as De,v as pt,a9 as fe,aa as ct,K as mt,ab as Ae}from"../chunks/vendor-8fdeefa1.js";const ie=et({id:null});function $t(s){var u,c,m,$,h,C;let e,r,t=(((c=(u=s[0])==null?void 0:u.portalInherit)!=null&&c.name?($=(m=s[1])==null?void 0:m.portal)==null?void 0:$.name:(C=(h=s[0])==null?void 0:h.portal)==null?void 0:C.name)||"TODO: Add portal name, URL, and description")+"",n,i,l,o,a,f,p;return{c(){e=P("div"),r=P("p"),n=A(t),i=T(),l=P("button"),o=A("View data"),a=T(),f=P("button"),p=A("Connect"),this.h()},l(V){e=O(V,"DIV",{style:!0});var z=q(e);r=O(z,"P",{style:!0});var J=q(r);n=N(J,t),J.forEach(d),i=D(z),l=O(z,"BUTTON",{class:!0,kind:!0});var H=q(l);o=N(H,"View data"),H.forEach(d),a=D(z),f=O(z,"BUTTON",{class:!0,kind:!0});var L=q(f);p=N(L,"Connect"),L.forEach(d),z.forEach(d),this.h()},h(){j(r,"font-size",".8rem"),j(r,"margin-top",".5em"),S(l,"class","example svelte-1g6h6zr"),S(l,"kind","primary"),S(f,"class","example svelte-1g6h6zr"),S(f,"kind","primary"),j(e,"margin-left","1em"),j(e,"margin-right","1em"),j(e,"display","flex"),j(e,"align-items","self-end")},m(V,z){b(V,e,z),E(e,r),E(r,n),E(e,i),E(e,l),E(l,o),E(e,a),E(e,f),E(f,p)},p(V,z){var J,H,L,Y,G,Z;z&3&&t!==(t=(((H=(J=V[0])==null?void 0:J.portalInherit)!=null&&H.name?(Y=(L=V[1])==null?void 0:L.portal)==null?void 0:Y.name:(Z=(G=V[0])==null?void 0:G.portal)==null?void 0:Z.name)||"TODO: Add portal name, URL, and description")+"")&&re(n,t)},d(V){V&&d(e)}}}function _t(s){let e,r;return e=new de({props:{$$slots:{default:[$t]},$$scope:{ctx:s}}}),{c(){I(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,n){B(e,t,n),r=!0},p(t,n){const i={};n&259&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){U(e,t)}}}function dt(s){let e,r,t,n,i=s[0].name+"",l,o,a,f,p,u,c;return f=new ke({props:{noGutter:!0,$$slots:{default:[_t]},$$scope:{ctx:s}}}),u=new nt({props:{style:"cursor: pointer; position: absolute; top: 0%; right: 0%;"}}),u.$on("click",s[4]),{c(){e=P("h3"),r=P("img"),n=T(),l=A(i),o=A(`
    \xA0`),a=T(),I(f.$$.fragment),p=T(),I(u.$$.fragment),this.h()},l(m){e=O(m,"H3",{class:!0});var $=q(e);r=O($,"IMG",{alt:!0,class:!0,src:!0}),n=D($),l=N($,i),o=N($,`
    \xA0`),$.forEach(d),a=D(m),y(f.$$.fragment,m),p=D(m),y(u.$$.fragment,m),this.h()},h(){var m;S(r,"alt","logo"),S(r,"class","logo svelte-1g6h6zr"),$e(r.src,t=(m=s[0].logo)!=null?m:"smart-burst.svg")||S(r,"src",t),S(e,"class","name svelte-1g6h6zr")},m(m,$){b(m,e,$),E(e,r),E(e,n),E(e,l),E(e,o),b(m,a,$),B(f,m,$),b(m,p,$),B(u,m,$),c=!0},p(m,$){var C;(!c||$&1&&!$e(r.src,t=(C=m[0].logo)!=null?C:"smart-burst.svg"))&&S(r,"src",t),(!c||$&1)&&i!==(i=m[0].name+"")&&re(l,i);const h={};$&259&&(h.$$scope={dirty:$,ctx:m}),f.$set(h)},i(m){c||(g(f.$$.fragment,m),g(u.$$.fragment,m),c=!0)},o(m){w(f.$$.fragment,m),w(u.$$.fragment,m),c=!1},d(m){m&&d(e),m&&d(a),U(f,m),m&&d(p),U(u,m)}}}function ht(s){let e,r;return e=new ge({props:{small:!0,style:"display: flex; align-items: centered; padding-left: 1em; padding-right: 1em; width: 100%; max-width: unset; min-height: 2rem; gap: 1em;",kind:"danger-tertiary",$$slots:{default:[bt]},$$scope:{ctx:s}}}),e.$on("click",s[7]),{c(){I(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,n){B(e,t,n),r=!0},p(t,n){const i={};n&256&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){U(e,t)}}}function gt(s){let e,r;return e=new ge({props:{small:!0,style:"display: flex; align-items: centered; padding-left: 1em; padding-right: 1em; width: 100%; max-width: unset; min-height: 2rem; gap: 1em;",kind:"tertiary",$$slots:{default:[wt]},$$scope:{ctx:s}}}),e.$on("click",s[6]),{c(){I(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,n){B(e,t,n),r=!0},p(t,n){const i={};n&256&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){U(e,t)}}}function bt(s){let e,r,t,n,i;return e=new Ie({}),{c(){I(e.$$.fragment),r=T(),t=P("div"),n=A("Remove affiliated brand"),this.h()},l(l){y(e.$$.fragment,l),r=D(l),t=O(l,"DIV",{style:!0});var o=q(t);n=N(o,"Remove affiliated brand"),o.forEach(d),this.h()},h(){j(t,"flex-grow","1")},m(l,o){B(e,l,o),b(l,r,o),b(l,t,o),E(t,n),i=!0},i(l){i||(g(e.$$.fragment,l),i=!0)},o(l){w(e.$$.fragment,l),i=!1},d(l){U(e,l),l&&d(r),l&&d(t)}}}function wt(s){let e,r,t,n,i;return e=new lt({}),{c(){I(e.$$.fragment),r=T(),t=P("div"),n=A("Add affiliated brand"),this.h()},l(l){y(e.$$.fragment,l),r=D(l),t=O(l,"DIV",{style:!0});var o=q(t);n=N(o,"Add affiliated brand"),o.forEach(d),this.h()},h(){j(t,"flex-grow","1")},m(l,o){B(e,l,o),b(l,r,o),b(l,t,o),E(t,n),i=!0},i(l){i||(g(e.$$.fragment,l),i=!0)},o(l){w(e.$$.fragment,l),i=!1},d(l){U(e,l),l&&d(r),l&&d(t)}}}function vt(s){var m;let e="",r,t,n,i,l,o,a,f;n=new tt({props:{class:"tile",style:`opacity: ${((m=s[2])==null?void 0:m.id)!==null&&s[2].id!==s[0].id?"50":100}%`,$$slots:{default:[dt]},$$scope:{ctx:s}}}),n.$on("click",s[5]);const p=[gt,ht],u=[];function c($,h){return $[0].parentId?1:0}return l=c(s),o=u[l]=p[l](s),{c(){r=A(e),t=T(),I(n.$$.fragment),i=T(),o.c(),a=F()},l($){r=N($,e),t=D($),y(n.$$.fragment,$),i=D($),o.l($),a=F()},m($,h){b($,r,h),b($,t,h),B(n,$,h),b($,i,h),u[l].m($,h),b($,a,h),f=!0},p($,[h]){var z;(!f||h&1)&&e!==(e="")&&re(r,e);const C={};h&5&&(C.style=`opacity: ${((z=$[2])==null?void 0:z.id)!==null&&$[2].id!==$[0].id?"50":100}%`),h&263&&(C.$$scope={dirty:h,ctx:$}),n.$set(C);let V=l;l=c($),l===V?u[l].p($,h):(ee(),w(u[V],1,1,()=>{u[V]=null}),te(),o=u[l],o?o.p($,h):(o=u[l]=p[l]($),o.c()),g(o,1),o.m(a.parentNode,a))},i($){f||(g(n.$$.fragment,$),g(o),f=!0)},o($){w(n.$$.fragment,$),w(o),f=!1},d($){$&&d(r),$&&d(t),U(n,$),$&&d(i),u[l].d($),$&&d(a)}}}function kt(s,e,r){let t;Je(s,ie,u=>r(2,t=u));const n=rt();let{brand:i}=e,{parentBrand:l}=e;const o=()=>{_e(ie,t={id:i.id},t),console.log("Editing",i.id)},a=()=>{_e(ie,t={id:i.id},t),console.log("Editing",i.id)},f=()=>{n("add-affiliated-brand",i)},p=()=>{n("remove-affiliated-brand",i)};return s.$$set=u=>{"brand"in u&&r(0,i=u.brand),"parentBrand"in u&&r(1,l=u.parentBrand)},[i,l,t,n,o,a,f,p]}class It extends we{constructor(e){super();ve(this,e,kt,vt,he,{brand:0,parentBrand:1})}}const{Boolean:Ke}=ft;function Ne(s,e,r){const t=s.slice();return t[28]=e[r],t[29]=e,t[30]=r,t}function Pe(s,e,r){const t=s.slice();return t[31]=e[r],t[32]=e,t[30]=r,t}function Oe(s){let e,r;return e=new st({props:{$$slots:{default:[Rt]},$$scope:{ctx:s}}}),{c(){I(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,n){B(e,t,n),r=!0},p(t,n){const i={};n[0]&127|n[1]&4&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){U(e,t)}}}function yt(s){let e,r,t,n,i,l;function o(f){s[9](f)}let a={autofocus:!0,invalid:s[0].name=="",placeholder:"Associated Physicians of Madison"};return s[0].name!==void 0&&(a.value=s[0].name),n=new se({props:a}),W.push(()=>K(n,"value",o)),{c(){e=P("div"),r=A("The primary name associated with your brand."),t=T(),I(n.$$.fragment),this.h()},l(f){e=O(f,"DIV",{class:!0});var p=q(e);r=N(p,"The primary name associated with your brand."),p.forEach(d),t=D(f),y(n.$$.fragment,f),this.h()},h(){S(e,"class","bx--form__helper-text")},m(f,p){b(f,e,p),E(e,r),b(f,t,p),B(n,f,p),l=!0},p(f,p){const u={};p[0]&1&&(u.invalid=f[0].name==""),!i&&p[0]&1&&(i=!0,u.value=f[0].name,Q(()=>i=!1)),n.$set(u)},i(f){l||(g(n.$$.fragment,f),l=!0)},o(f){w(n.$$.fragment,f),l=!1},d(f){f&&d(e),f&&d(t),U(n,f)}}}function Bt(s){var f,p;let e,r,t,n,i,l;function o(u){s[10](u)}let a={invalid:!((p=(f=s[0])==null?void 0:f.website)!=null&&p.startsWith("https://")),placeholder:"https://apmadison.com"};return s[0].website!==void 0&&(a.value=s[0].website),n=new se({props:a}),W.push(()=>K(n,"value",o)),{c(){e=P("div"),r=A(`The primary website associated with your brand. Note: this is distinct
        from your patient portal.`),t=T(),I(n.$$.fragment),this.h()},l(u){e=O(u,"DIV",{class:!0});var c=q(e);r=N(c,`The primary website associated with your brand. Note: this is distinct
        from your patient portal.`),c.forEach(d),t=D(u),y(n.$$.fragment,u),this.h()},h(){S(e,"class","bx--form__helper-text")},m(u,c){b(u,e,c),E(e,r),b(u,t,c),B(n,u,c),l=!0},p(u,c){var $,h;const m={};c[0]&1&&(m.invalid=!((h=($=u[0])==null?void 0:$.website)!=null&&h.startsWith("https://"))),!i&&c[0]&1&&(i=!0,m.value=u[0].website,Q(()=>i=!1)),n.$set(m)},i(u){l||(g(n.$$.fragment,u),l=!0)},o(u){w(n.$$.fragment,u),l=!1},d(u){u&&d(e),u&&d(t),U(n,u)}}}function Ce(s){let e,r,t,n,i,l,o;function a(c){s[11](c,s[30])}function f(c){s[12](c,s[30])}let p={invalid:s[0].alias[s[30]]=="",style:"width: 100%;",placeholder:"Madison Doctors Group"};s[0].alias[s[30]]!==void 0&&(p.value=s[0].alias[s[30]]),s[4][s[30]]!==void 0&&(p.ref=s[4][s[30]]),r=new se({props:p}),W.push(()=>K(r,"value",a)),W.push(()=>K(r,"ref",f));function u(){return s[13](s[30])}return l=new Ie({props:{style:"margin-left: .5em; cursor: pointer; min-width: 16px;"}}),l.$on("click",u),{c(){e=P("div"),I(r.$$.fragment),i=T(),I(l.$$.fragment),this.h()},l(c){e=O(c,"DIV",{style:!0});var m=q(e);y(r.$$.fragment,m),i=D(m),y(l.$$.fragment,m),m.forEach(d),this.h()},h(){j(e,"display","flex"),j(e,"align-items","baseline")},m(c,m){b(c,e,m),B(r,e,null),E(e,i),B(l,e,null),o=!0},p(c,m){s=c;const $={};m[0]&1&&($.invalid=s[0].alias[s[30]]==""),!t&&m[0]&1&&(t=!0,$.value=s[0].alias[s[30]],Q(()=>t=!1)),!n&&m[0]&16&&(n=!0,$.ref=s[4][s[30]],Q(()=>n=!1)),r.$set($)},i(c){o||(g(r.$$.fragment,c),g(l.$$.fragment,c),o=!0)},o(c){w(r.$$.fragment,c),w(l.$$.fragment,c),o=!1},d(c){c&&d(e),U(r),U(l)}}}function Ut(s){let e;return{c(){e=A("Add alias")},l(r){e=N(r,"Add alias")},m(r,t){b(r,e,t)},d(r){r&&d(e)}}}function Et(s){var p;let e,r,t,n,i,l,o=((p=s[0])==null?void 0:p.alias)||[],a=[];for(let u=0;u<o.length;u+=1)a[u]=Ce(Pe(s,o,u));const f=u=>w(a[u],1,1,()=>{a[u]=null});return i=new ge({props:{small:!0,kind:"ghost",$$slots:{default:[Ut]},$$scope:{ctx:s}}}),i.$on("click",s[14]),{c(){e=P("div"),r=A(`An alias associated with your Brand (e.g., a former name or other term
        patients might use to search for your brand)`),t=T();for(let u=0;u<a.length;u+=1)a[u].c();n=T(),I(i.$$.fragment),this.h()},l(u){e=O(u,"DIV",{class:!0});var c=q(e);r=N(c,`An alias associated with your Brand (e.g., a former name or other term
        patients might use to search for your brand)`),c.forEach(d),t=D(u);for(let m=0;m<a.length;m+=1)a[m].l(u);n=D(u),y(i.$$.fragment,u),this.h()},h(){S(e,"class","bx--form__helper-text")},m(u,c){b(u,e,c),E(e,r),b(u,t,c);for(let m=0;m<a.length;m+=1)a[m].m(u,c);b(u,n,c),B(i,u,c),l=!0},p(u,c){var $;if(c[0]&17){o=(($=u[0])==null?void 0:$.alias)||[];let h;for(h=0;h<o.length;h+=1){const C=Pe(u,o,h);a[h]?(a[h].p(C,c),g(a[h],1)):(a[h]=Ce(C),a[h].c(),g(a[h],1),a[h].m(n.parentNode,n))}for(ee(),h=o.length;h<a.length;h+=1)f(h);te()}const m={};c[1]&4&&(m.$$scope={dirty:c,ctx:u}),i.$set(m)},i(u){if(!l){for(let c=0;c<o.length;c+=1)g(a[c]);g(i.$$.fragment,u),l=!0}},o(u){a=a.filter(Ke);for(let c=0;c<a.length;c+=1)w(a[c]);w(i.$$.fragment,u),l=!1},d(u){u&&d(e),u&&d(t),ye(a,u),u&&d(n),U(i,u)}}}function Re(s){let e,r;return{c(){e=P("img"),this.h()},l(t){e=O(t,"IMG",{style:!0,alt:!0,src:!0}),this.h()},h(){j(e,"width","1em"),j(e,"height","1em"),S(e,"alt","logo"),$e(e.src,r=s[0].logo)||S(e,"src",r)},m(t,n){b(t,e,n)},p(t,n){n[0]&1&&!$e(e.src,r=t[0].logo)&&S(e,"src",r)},d(t){t&&d(e)}}}function Tt(s){let e,r,t,n=s[0].logo&&Re(s),i={buttonLabel:"Choose logo file",labelDescription:"Square PNG or SVG, 1024x1024 pixels with transparent background preferred",accept:[".png",".svg"],status:"complete"};return r=new ot({props:i}),s[15](r),r.$on("change",s[16]),{c(){n&&n.c(),e=T(),I(r.$$.fragment)},l(l){n&&n.l(l),e=D(l),y(r.$$.fragment,l)},m(l,o){n&&n.m(l,o),b(l,e,o),B(r,l,o),t=!0},p(l,o){l[0].logo?n?n.p(l,o):(n=Re(l),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null);const a={};r.$set(a)},i(l){t||(g(r.$$.fragment,l),t=!0)},o(l){w(r.$$.fragment,l),t=!1},d(l){n&&n.d(l),l&&d(e),s[15](null),U(r,l)}}}function Ve(s){var c,m;let e,r,t,n,i,l,o;function a($){s[17]($,s[30])}function f($){s[18]($,s[30])}let p={invalid:!((m=(c=s[0])==null?void 0:c.locations)!=null&&m[s[30]]),style:"width: 100%;",placeholder:"123 Regent St, Madison, WI 53726"};s[1][s[30]]!==void 0&&(p.value=s[1][s[30]]),s[5][s[30]]!==void 0&&(p.ref=s[5][s[30]]),r=new se({props:p}),W.push(()=>K(r,"value",a)),W.push(()=>K(r,"ref",f)),r.$on("keyup",St);function u(){return s[19](s[30])}return l=new Ie({props:{style:"margin-left: .5em; cursor: pointer; min-width: 16px;"}}),l.$on("click",u),{c(){e=P("div"),I(r.$$.fragment),i=T(),I(l.$$.fragment),this.h()},l($){e=O($,"DIV",{style:!0});var h=q(e);y(r.$$.fragment,h),i=D(h),y(l.$$.fragment,h),h.forEach(d),this.h()},h(){j(e,"display","flex"),j(e,"align-items","baseline")},m($,h){b($,e,h),B(r,e,null),E(e,i),B(l,e,null),o=!0},p($,h){var V,z;s=$;const C={};h[0]&1&&(C.invalid=!((z=(V=s[0])==null?void 0:V.locations)!=null&&z[s[30]])),!t&&h[0]&2&&(t=!0,C.value=s[1][s[30]],Q(()=>t=!1)),!n&&h[0]&32&&(n=!0,C.ref=s[5][s[30]],Q(()=>n=!1)),r.$set(C)},i($){o||(g(r.$$.fragment,$),g(l.$$.fragment,$),o=!0)},o($){w(r.$$.fragment,$),w(l.$$.fragment,$),o=!1},d($){$&&d(e),U(r),U(l)}}}function Dt(s){let e;return{c(){e=A("Add location")},l(r){e=N(r,"Add location")},m(r,t){b(r,e,t)},d(r){r&&d(e)}}}function At(s){let e,r,t,n,i,l,o=s[1]||[],a=[];for(let p=0;p<o.length;p+=1)a[p]=Ve(Ne(s,o,p));const f=p=>w(a[p],1,1,()=>{a[p]=null});return i=new ge({props:{small:!0,kind:"ghost",$$slots:{default:[Dt]},$$scope:{ctx:s}}}),i.$on("click",s[20]),{c(){e=P("div"),r=A(`A location (street address, city/state, or city/state/zip) associated
        with your Brand`),t=T();for(let p=0;p<a.length;p+=1)a[p].c();n=T(),I(i.$$.fragment),this.h()},l(p){e=O(p,"DIV",{class:!0});var u=q(e);r=N(u,`A location (street address, city/state, or city/state/zip) associated
        with your Brand`),u.forEach(d),t=D(p);for(let c=0;c<a.length;c+=1)a[c].l(p);n=D(p),y(i.$$.fragment,p),this.h()},h(){S(e,"class","bx--form__helper-text")},m(p,u){b(p,e,u),E(e,r),b(p,t,u);for(let c=0;c<a.length;c+=1)a[c].m(p,u);b(p,n,u),B(i,p,u),l=!0},p(p,u){if(u[0]&35){o=p[1]||[];let m;for(m=0;m<o.length;m+=1){const $=Ne(p,o,m);a[m]?(a[m].p($,u),g(a[m],1)):(a[m]=Ve($),a[m].c(),g(a[m],1),a[m].m(n.parentNode,n))}for(ee(),m=o.length;m<a.length;m+=1)f(m);te()}const c={};u[1]&4&&(c.$$scope={dirty:u,ctx:p}),i.$set(c)},i(p){if(!l){for(let u=0;u<o.length;u+=1)g(a[u]);g(i.$$.fragment,p),l=!0}},o(p){a=a.filter(Ke);for(let u=0;u<a.length;u+=1)w(a[u]);w(i.$$.fragment,p),l=!1},d(p){p&&d(e),p&&d(t),ye(a,p),p&&d(n),U(i,p)}}}function Nt(s){let e,r,t;function n(l){s[21](l)}let i={label:"Select categories",items:[{id:"outpatient",text:"Outpatient (clinic, office)"},{id:"hospital",text:"Hospital"},{id:"health-system",text:"Health system"},{id:"lab",text:"Lab"},{id:"pharmacy",text:"Pharmacy"},{id:"insurer",text:"Insurer"},{id:"network",text:"Data Network"},{id:"aggregator",text:"Data Aggregator"}]};return s[0].categories!==void 0&&(i.selectedIds=s[0].categories),e=new at({props:i}),W.push(()=>K(e,"selectedIds",n)),{c(){I(e.$$.fragment)},l(l){y(e.$$.fragment,l)},m(l,o){B(e,l,o),t=!0},p(l,o){const a={};!r&&o[0]&1&&(r=!0,a.selectedIds=l[0].categories,Q(()=>r=!1)),e.$set(a)},i(l){t||(g(e.$$.fragment,l),t=!0)},o(l){w(e.$$.fragment,l),t=!1},d(l){U(e,l)}}}function Se(s){var f,p;let e,r,t,n=(((p=(f=s[6])==null?void 0:f.portal)==null?void 0:p.website)||"")+"",i,l,o,a;return{c(){e=P("div"),r=P("input"),t=A(`
          Use portal URL from Primary Brand ("`),i=A(n),l=A('")'),this.h()},l(u){e=O(u,"DIV",{});var c=q(e);r=O(c,"INPUT",{type:!0}),t=N(c,`
          Use portal URL from Primary Brand ("`),i=N(c,n),l=N(c,'")'),c.forEach(d),this.h()},h(){S(r,"type","checkbox")},m(u,c){b(u,e,c),E(e,r),r.checked=s[0].portalInherit.website,E(e,t),E(e,i),E(e,l),o||(a=Be(r,"change",s[22]),o=!0)},p(u,c){var m,$;c[0]&1&&(r.checked=u[0].portalInherit.website),c[0]&64&&n!==(n=((($=(m=u[6])==null?void 0:m.portal)==null?void 0:$.website)||"")+"")&&re(i,n)},d(u){u&&d(e),o=!1,a()}}}function qe(s){var l,o,a;let e,r,t;function n(f){s[23](f)}let i={invalid:!((a=(o=(l=s[0])==null?void 0:l.portal)==null?void 0:o.website)!=null&&a.startsWith("https://")),placeholder:"https://www.chart.myunitypoint.org/"};return s[0].portal.website!==void 0&&(i.value=s[0].portal.website),e=new se({props:i}),W.push(()=>K(e,"value",n)),{c(){I(e.$$.fragment)},l(f){y(e.$$.fragment,f)},m(f,p){B(e,f,p),t=!0},p(f,p){var c,m,$;const u={};p[0]&1&&(u.invalid=!(($=(m=(c=f[0])==null?void 0:c.portal)==null?void 0:m.website)!=null&&$.startsWith("https://"))),!r&&p[0]&1&&(r=!0,u.value=f[0].portal.website,Q(()=>r=!1)),e.$set(u)},i(f){t||(g(e.$$.fragment,f),t=!0)},o(f){w(e.$$.fragment,f),t=!1},d(f){U(e,f)}}}function Pt(s){let e,r,t,n,i,l,o=s[2]&&Se(s),a=(!s[2]||!s[0].portalInherit.website)&&qe(s);return{c(){e=P("div"),r=A("URL of patient portal where records are available (https only)"),t=T(),o&&o.c(),n=T(),a&&a.c(),i=F(),this.h()},l(f){e=O(f,"DIV",{class:!0});var p=q(e);r=N(p,"URL of patient portal where records are available (https only)"),p.forEach(d),t=D(f),o&&o.l(f),n=D(f),a&&a.l(f),i=F(),this.h()},h(){S(e,"class","bx--form__helper-text")},m(f,p){b(f,e,p),E(e,r),b(f,t,p),o&&o.m(f,p),b(f,n,p),a&&a.m(f,p),b(f,i,p),l=!0},p(f,p){f[2]?o?o.p(f,p):(o=Se(f),o.c(),o.m(n.parentNode,n)):o&&(o.d(1),o=null),!f[2]||!f[0].portalInherit.website?a?(a.p(f,p),p[0]&5&&g(a,1)):(a=qe(f),a.c(),g(a,1),a.m(i.parentNode,i)):a&&(ee(),w(a,1,1,()=>{a=null}),te())},i(f){l||(g(a),l=!0)},o(f){w(a),l=!1},d(f){f&&d(e),f&&d(t),o&&o.d(f),f&&d(n),a&&a.d(f),f&&d(i)}}}function ze(s){var f,p;let e,r,t,n=(((p=(f=s[6])==null?void 0:f.portal)==null?void 0:p.name)||"")+"",i,l,o,a;return{c(){e=P("div"),r=P("input"),t=A(` Use
          name from Primary Brand ("`),i=A(n),l=A('")'),this.h()},l(u){e=O(u,"DIV",{});var c=q(e);r=O(c,"INPUT",{type:!0}),t=N(c,` Use
          name from Primary Brand ("`),i=N(c,n),l=N(c,'")'),c.forEach(d),this.h()},h(){S(r,"type","checkbox")},m(u,c){b(u,e,c),E(e,r),r.checked=s[0].portalInherit.name,E(e,t),E(e,i),E(e,l),o||(a=Be(r,"change",s[24]),o=!0)},p(u,c){var m,$;c[0]&1&&(r.checked=u[0].portalInherit.name),c[0]&64&&n!==(n=((($=(m=u[6])==null?void 0:m.portal)==null?void 0:$.name)||"")+"")&&re(i,n)},d(u){u&&d(e),o=!1,a()}}}function Le(s){let e,r,t;function n(l){s[25](l)}let i={invalid:!1,placeholder:"MyUnityPoint"};return s[0].portal.name!==void 0&&(i.value=s[0].portal.name),e=new se({props:i}),W.push(()=>K(e,"value",n)),{c(){I(e.$$.fragment)},l(l){y(e.$$.fragment,l)},m(l,o){B(e,l,o),t=!0},p(l,o){const a={};o[0]&1&&(a.invalid=!1),!r&&o[0]&1&&(r=!0,a.value=l[0].portal.name,Q(()=>r=!1)),e.$set(a)},i(l){t||(g(e.$$.fragment,l),t=!0)},o(l){w(e.$$.fragment,l),t=!1},d(l){U(e,l)}}}function Ot(s){let e,r,t,n,i,l,o=s[2]&&ze(s),a=(!s[2]||!s[0].portalInherit.name)&&Le(s);return{c(){e=P("div"),r=A("Name of the portal as known to patients"),t=T(),o&&o.c(),n=T(),a&&a.c(),i=F(),this.h()},l(f){e=O(f,"DIV",{class:!0});var p=q(e);r=N(p,"Name of the portal as known to patients"),p.forEach(d),t=D(f),o&&o.l(f),n=D(f),a&&a.l(f),i=F(),this.h()},h(){S(e,"class","bx--form__helper-text")},m(f,p){b(f,e,p),E(e,r),b(f,t,p),o&&o.m(f,p),b(f,n,p),a&&a.m(f,p),b(f,i,p),l=!0},p(f,p){f[2]?o?o.p(f,p):(o=ze(f),o.c(),o.m(n.parentNode,n)):o&&(o.d(1),o=null),!f[2]||!f[0].portalInherit.name?a?(a.p(f,p),p[0]&5&&g(a,1)):(a=Le(f),a.c(),g(a,1),a.m(i.parentNode,i)):a&&(ee(),w(a,1,1,()=>{a=null}),te())},i(f){l||(g(a),l=!0)},o(f){w(a),l=!1},d(f){f&&d(e),f&&d(t),o&&o.d(f),f&&d(n),a&&a.d(f),f&&d(i)}}}function Me(s){var f,p;let e,r,t,n=(p=(f=s[6])==null?void 0:f.portal)!=null&&p.description?s[6].portal.description.slice(40)+"...":"",i,l,o,a;return{c(){e=P("div"),r=P("input"),t=A(`
          Use description from Primary Brand ("`),i=A(n),l=A('")'),this.h()},l(u){e=O(u,"DIV",{});var c=q(e);r=O(c,"INPUT",{type:!0}),t=N(c,`
          Use description from Primary Brand ("`),i=N(c,n),l=N(c,'")'),c.forEach(d),this.h()},h(){S(r,"type","checkbox")},m(u,c){b(u,e,c),E(e,r),r.checked=s[0].portalInherit.description,E(e,t),E(e,i),E(e,l),o||(a=Be(r,"change",s[26]),o=!0)},p(u,c){var m,$;c[0]&1&&(r.checked=u[0].portalInherit.description),c[0]&64&&n!==(n=($=(m=u[6])==null?void 0:m.portal)!=null&&$.description?u[6].portal.description.slice(40)+"...":"")&&re(i,n)},d(u){u&&d(e),o=!1,a()}}}function je(s){let e,r,t;function n(l){s[27](l)}let i={invalid:!1,placeholder:"Access your clinical records..."};return s[0].portal.description!==void 0&&(i.value=s[0].portal.description),e=new se({props:i}),W.push(()=>K(e,"value",n)),{c(){I(e.$$.fragment)},l(l){y(e.$$.fragment,l)},m(l,o){B(e,l,o),t=!0},p(l,o){const a={};o[0]&1&&(a.invalid=!1),!r&&o[0]&1&&(r=!0,a.value=l[0].portal.description,Q(()=>r=!1)),e.$set(a)},i(l){t||(g(e.$$.fragment,l),t=!0)},o(l){w(e.$$.fragment,l),t=!1},d(l){U(e,l)}}}function Ct(s){let e,r,t,n,i,l,o=s[2]&&Me(s),a=(!s[2]||!s[0].portalInherit.description)&&je(s);return{c(){e=P("div"),r=A(`Description of the portal to help patients connect to the right place.
        Explain the intended audience of the portal, if you offer more than one
        portal for different audiences.`),t=T(),o&&o.c(),n=T(),a&&a.c(),i=F(),this.h()},l(f){e=O(f,"DIV",{class:!0});var p=q(e);r=N(p,`Description of the portal to help patients connect to the right place.
        Explain the intended audience of the portal, if you offer more than one
        portal for different audiences.`),p.forEach(d),t=D(f),o&&o.l(f),n=D(f),a&&a.l(f),i=F(),this.h()},h(){S(e,"class","bx--form__helper-text")},m(f,p){b(f,e,p),E(e,r),b(f,t,p),o&&o.m(f,p),b(f,n,p),a&&a.m(f,p),b(f,i,p),l=!0},p(f,p){f[2]?o?o.p(f,p):(o=Me(f),o.c(),o.m(n.parentNode,n)):o&&(o.d(1),o=null),!f[2]||!f[0].portalInherit.description?a?(a.p(f,p),p[0]&5&&g(a,1)):(a=je(f),a.c(),g(a,1),a.m(i.parentNode,i)):a&&(ee(),w(a,1,1,()=>{a=null}),te())},i(f){l||(g(a),l=!0)},o(f){w(a),l=!1},d(f){f&&d(e),f&&d(t),o&&o.d(f),f&&d(n),a&&a.d(f),f&&d(i)}}}function Rt(s){let e,r=`${s[2]?"Affiliated":"Primary"} Brand Details`,t,n,i,l,o,a,f,p,u,c,m,$,h,C,V,z="Patient Portal Details",J,H,L,Y,G,Z,X,ne;return i=new x({props:{legendText:"Brand name",$$slots:{default:[yt]},$$scope:{ctx:s}}}),o=new x({props:{legendText:"Brand website (https only)",$$slots:{default:[Bt]},$$scope:{ctx:s}}}),f=new x({props:{legendText:"Brand aliases (optional)",$$slots:{default:[Et]},$$scope:{ctx:s}}}),u=new x({props:{legendText:"Brand logo",$$slots:{default:[Tt]},$$scope:{ctx:s}}}),m=new x({props:{legendText:"Locations (optional)",$$slots:{default:[At]},$$scope:{ctx:s}}}),h=new x({props:{legendText:"Categories (optional)",$$slots:{default:[Nt]},$$scope:{ctx:s}}}),L=new x({props:{legendText:"Portal URL",$$slots:{default:[Pt]},$$scope:{ctx:s}}}),G=new x({props:{legendText:"Portal name",$$slots:{default:[Ot]},$$scope:{ctx:s}}}),X=new x({props:{legendText:"Portal description",$$slots:{default:[Ct]},$$scope:{ctx:s}}}),{c(){e=P("h5"),t=A(r),n=T(),I(i.$$.fragment),l=T(),I(o.$$.fragment),a=T(),I(f.$$.fragment),p=T(),I(u.$$.fragment),c=T(),I(m.$$.fragment),$=T(),I(h.$$.fragment),C=T(),V=P("h5"),J=A(z),H=T(),I(L.$$.fragment),Y=T(),I(G.$$.fragment),Z=T(),I(X.$$.fragment)},l(_){e=O(_,"H5",{});var k=q(e);t=N(k,r),k.forEach(d),n=D(_),y(i.$$.fragment,_),l=D(_),y(o.$$.fragment,_),a=D(_),y(f.$$.fragment,_),p=D(_),y(u.$$.fragment,_),c=D(_),y(m.$$.fragment,_),$=D(_),y(h.$$.fragment,_),C=D(_),V=O(_,"H5",{});var le=q(V);J=N(le,z),le.forEach(d),H=D(_),y(L.$$.fragment,_),Y=D(_),y(G.$$.fragment,_),Z=D(_),y(X.$$.fragment,_)},m(_,k){b(_,e,k),E(e,t),b(_,n,k),B(i,_,k),b(_,l,k),B(o,_,k),b(_,a,k),B(f,_,k),b(_,p,k),B(u,_,k),b(_,c,k),B(m,_,k),b(_,$,k),B(h,_,k),b(_,C,k),b(_,V,k),E(V,J),b(_,H,k),B(L,_,k),b(_,Y,k),B(G,_,k),b(_,Z,k),B(X,_,k),ne=!0},p(_,k){(!ne||k[0]&4)&&r!==(r=`${_[2]?"Affiliated":"Primary"} Brand Details`)&&re(t,r);const le={};k[0]&1|k[1]&4&&(le.$$scope={dirty:k,ctx:_}),i.$set(le);const ue={};k[0]&1|k[1]&4&&(ue.$$scope={dirty:k,ctx:_}),o.$set(ue);const v={};k[0]&17|k[1]&4&&(v.$$scope={dirty:k,ctx:_}),f.$set(v);const R={};k[0]&9|k[1]&4&&(R.$$scope={dirty:k,ctx:_}),u.$set(R);const M={};k[0]&35|k[1]&4&&(M.$$scope={dirty:k,ctx:_}),m.$set(M);const oe={};k[0]&1|k[1]&4&&(oe.$$scope={dirty:k,ctx:_}),h.$set(oe);const pe={};k[0]&69|k[1]&4&&(pe.$$scope={dirty:k,ctx:_}),L.$set(pe);const ce={};k[0]&69|k[1]&4&&(ce.$$scope={dirty:k,ctx:_}),G.$set(ce);const ae={};k[0]&69|k[1]&4&&(ae.$$scope={dirty:k,ctx:_}),X.$set(ae)},i(_){ne||(g(i.$$.fragment,_),g(o.$$.fragment,_),g(f.$$.fragment,_),g(u.$$.fragment,_),g(m.$$.fragment,_),g(h.$$.fragment,_),g(L.$$.fragment,_),g(G.$$.fragment,_),g(X.$$.fragment,_),ne=!0)},o(_){w(i.$$.fragment,_),w(o.$$.fragment,_),w(f.$$.fragment,_),w(u.$$.fragment,_),w(m.$$.fragment,_),w(h.$$.fragment,_),w(L.$$.fragment,_),w(G.$$.fragment,_),w(X.$$.fragment,_),ne=!1},d(_){_&&d(e),_&&d(n),U(i,_),_&&d(l),U(o,_),_&&d(a),U(f,_),_&&d(p),U(u,_),_&&d(c),U(m,_),_&&d($),U(h,_),_&&d(C),_&&d(V),_&&d(H),U(L,_),_&&d(Y),U(G,_),_&&d(Z),U(X,_)}}}function Vt(s){let e,r,t=s[0]&&Oe(s);return{c(){t&&t.c(),e=F()},l(n){t&&t.l(n),e=F()},m(n,i){t&&t.m(n,i),b(n,e,i),r=!0},p(n,i){n[0]?t?(t.p(n,i),i[0]&1&&g(t,1)):(t=Oe(n),t.c(),g(t,1),t.m(e.parentNode,e)):t&&(ee(),w(t,1,1,()=>{t=null}),te())},i(n){r||(g(t),r=!0)},o(n){w(t),r=!1},d(n){t&&t.d(n),n&&d(e)}}}const St=s=>{};function qt(s,e,r){let{brand:t}=e,{brands:n}=e,i,l=[],o=[],a=[],f=!1,p,u=!1;function c(v){s.$$.not_equal(t.name,v)&&(t.name=v,r(0,t),r(7,n),r(2,f),r(8,u),r(1,a))}function m(v){s.$$.not_equal(t.website,v)&&(t.website=v,r(0,t),r(7,n),r(2,f),r(8,u),r(1,a))}function $(v,R){s.$$.not_equal(t.alias[R],v)&&(t.alias[R]=v,r(0,t),r(7,n),r(2,f),r(8,u),r(1,a))}function h(v,R){s.$$.not_equal(l[R],v)&&(l[R]=v,r(4,l))}const C=v=>r(0,t.alias=t.alias.filter((R,M)=>M!==v),t),V=async()=>{r(0,t.alias=t.alias||[],t).push(""),await Te(),l.slice(-1)[0].focus()};function z(v){W[v?"unshift":"push"](()=>{i=v,r(3,i)})}const J=async function(R){console.log(R.detail);const M=R.detail[0],oe=new Uint8Array(await M.arrayBuffer());console.log(oe);const pe=it(oe);let ce=M.name.split(".")[1],ae=`data:image/${{svg:"svg+xml",png:"png"}[ce]};base64,${pe}`;r(0,t.logo=ae,t),console.log(ae),i.clearFiles()};function H(v,R){s.$$.not_equal(a[R],v)&&(a[R]=v,r(1,a),r(8,u),r(0,t),r(7,n),r(2,f))}function L(v,R){s.$$.not_equal(o[R],v)&&(o[R]=v,r(5,o))}const Y=v=>{r(1,a=a.filter((R,M)=>M!==v))},G=async()=>{r(1,a=a||[]).push(""),await Te(),o.slice(-1)[0].focus()};function Z(v){s.$$.not_equal(t.categories,v)&&(t.categories=v,r(0,t),r(7,n),r(2,f),r(8,u),r(1,a))}function X(){t.portalInherit.website=this.checked,r(0,t),r(7,n),r(2,f),r(8,u),r(1,a)}function ne(v){s.$$.not_equal(t.portal.website,v)&&(t.portal.website=v,r(0,t),r(7,n),r(2,f),r(8,u),r(1,a))}function _(){t.portalInherit.name=this.checked,r(0,t),r(7,n),r(2,f),r(8,u),r(1,a)}function k(v){s.$$.not_equal(t.portal.name,v)&&(t.portal.name=v,r(0,t),r(7,n),r(2,f),r(8,u),r(1,a))}function le(){t.portalInherit.description=this.checked,r(0,t),r(7,n),r(2,f),r(8,u),r(1,a)}function ue(v){s.$$.not_equal(t.portal.description,v)&&(t.portal.description=v,r(0,t),r(7,n),r(2,f),r(8,u),r(1,a))}return s.$$set=v=>{"brand"in v&&r(0,t=v.brand),"brands"in v&&r(7,n=v.brands)},s.$$.update=()=>{s.$$.dirty[0]&133&&(t!=null&&t.parentId&&(r(2,f=!0),r(6,p=n[t.parentId])),t&&!(t!=null&&t.portal)&&(r(0,t.portal={},t),r(0,t.portalInherit={name:f,website:f,description:f},t))),s.$$.dirty[0]&259&&(u?t&&u&&r(0,t.locations=a.map(v=>{let R=v.match(/(^(.*?),\s+)?(.+?),?\s*([A-z][A-z])\s*?([\d-]{5,})?$/);if(!R){let M=v.match(/^[A-z][A-z]$/);return console.log("ParsedState",M,`|${v}|`),M?{state:M[0]}:null}return{line:[R[2]].filter(Boolean),city:R[3],state:R[4],postalCode:R[5]}}),t):(r(8,u=!0),t!=null&&t.locations&&r(1,a=((t==null?void 0:t.locations)||[]).map(v=>{var R,M;return`${(R=v==null?void 0:v.line)!=null&&R.length?v.line.join(" ")+" ":""}${v.city?v.city+", ":""}${v.state?v.state+" ":""}${(M=v.postalCode)!=null?M:""}`.trim()}))))},[t,a,f,i,l,o,p,n,u,c,m,$,h,C,V,z,J,H,L,Y,G,Z,X,ne,_,k,le,ue]}class zt extends we{constructor(e){super();ve(this,e,qt,Vt,he,{brand:0,brands:7},null,[-1,-1])}}function Lt(){let s=null;return(e,r)=>{s&&clearInterval(s),s=setTimeout(e,r)}}function Fe(s){try{return new URL(s).origin.replace(/^https:\/\/www\./,"https://")}catch{return}}const Mt="https://example.org/fhir";function jt(s){let e=s.match(/(https:\/\/.+)\/[^/]+\/[^/]+/);return e?e[1]:Mt}function Ft(s){var o,a,f,p;const e={id:s.id,parentId:(o=s==null?void 0:s.partOf)!=null&&o.reference?s.partOf.reference.split("Organization/")[1]:void 0,name:s.name,alias:s.alias,categories:(s.type||[]).map(u=>u.coding[0].code),locations:s.address,portal:{},portalInherit:{name:!1,description:!1,website:!1}},r=s.extension.filter(u=>u.url==="https://argonaut.fhir.us/brand-logo");r.length>0&&(e.logo=r[0].valueUrl);const t=s.extension.filter(u=>u.url==="https://argonaut.fhir.us/patient-access-name");t.length>0&&(e.portal.name=t[0].valueString);const n=s.extension.filter(u=>u.url==="https://argonaut.fhir.us/patient-access-description");n.length>0&&(e.portal.description=n[0].valueString);const i=s.extension.filter(u=>u.url==="https://argonaut.fhir.us/patient-access-url");i.length>0&&(e.portal.website=i[0].valueUrl),e.parentId&&((a=e==null?void 0:e.portal)!=null&&a.name||(e.portalInherit.name=!0),(f=e==null?void 0:e.portal)!=null&&f.description||(e.portalInherit.description=!0),(p=e==null?void 0:e.portal)!=null&&p.website||(e.portalInherit.website=!0));const l=s.telecom.filter(u=>u.system==="url");return l.length>0&&(e.website=l[0].value),e}function Gt(s){const e=s.entry.map(i=>i.fullUrl).filter(i=>i.startsWith("https://")).map(jt);let r=ut.uniq(e);r.length>1&&(console.log("Can't determine base URL",r),r=[]);const t=r[0];console.log("base",t);const n=s.entry.map(i=>i.resource).filter(i=>i.resourceType==="Organization").map(i=>Ft(i));return{baseUrl:t,brands:Object.fromEntries(n.map(i=>[i.id,i]))}}function Ht(s,e){return{resourceType:"Bundle",type:"collection",entry:Object.entries(s).map(([r,t])=>{var n,i,l,o,a,f;return{fullUrl:`${e}/Organization/${r}`,resource:{resourceType:"Organization",id:r,extension:[...t!=null&&t.logo?[{url:"https://argonaut.fhir.us/brand-logo",valueUrl:t.logo}]:[],...!((n=t==null?void 0:t.portalInherit)!=null&&n.website)&&((i=t==null?void 0:t.portal)==null?void 0:i.website)?[{url:"https://argonaut.fhir.us/patient-access-url",valueUrl:t.portal.website}]:[],...!((l=t==null?void 0:t.portalInherit)!=null&&l.name)&&((o=t.portal)==null?void 0:o.name)?[{url:"https://argonaut.fhir.us/patient-access-name",valueString:t.portal.name}]:[],...!((a=t.portalInherit)!=null&&a.description)&&((f=t.portal)==null?void 0:f.description)?[{url:"https://argonaut.fhir.us/patient-access-description",valueString:t.portal.description}]:[]],name:t.name,partOf:t.parentId?{reference:`Organization/${t.parentId}`}:void 0,alias:t.alias,address:(t.locations||[]).map(p=>({line:p==null?void 0:p.line,city:p==null?void 0:p.city,state:p==null?void 0:p.state,postalCode:p==null?void 0:p.postalCode})),telecom:[...t.website?[{system:"url",value:t.website}]:[]],identifier:[...Fe(t==null?void 0:t.website)?[{system:"urn:ietf:rfc:3986",value:Fe(t==null?void 0:t.website)}]:[]],type:((t==null?void 0:t.categories)||[]).map(p=>({coding:[{system:"https://argonaut.fhir.us",code:p}]}))}}})}}function Ge(s,e,r){const t=s.slice();return t[10]=e[r][0],t[11]=e[r][1],t}function Wt(s){let e,r,t,n,i;return{c(){e=P("h1"),r=A("SMART Patient Access: Brand Editor ("),t=P("a"),n=A("?"),i=A(")"),this.h()},l(l){e=O(l,"H1",{class:!0});var o=q(e);r=N(o,"SMART Patient Access: Brand Editor ("),t=O(o,"A",{target:!0,href:!0});var a=q(t);n=N(a,"?"),a.forEach(d),i=N(o,")"),o.forEach(d),this.h()},h(){S(t,"target","_blank"),S(t,"href","https://hackmd.io/@argonaut/patient-access-brands"),S(e,"class","svelte-1ggurck")},m(l,o){b(l,e,o),E(e,r),E(e,t),E(t,n),E(e,i)},d(l){l&&d(e)}}}function Jt(s){let e,r;return e=new fe({props:{sm:4,$$slots:{default:[Wt]},$$scope:{ctx:s}}}),{c(){I(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,n){B(e,t,n),r=!0},p(t,n){const i={};n&16384&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){U(e,t)}}}function Kt(s){let e,r,t,n,i;return n=new ct({props:{style:"position: absolute; top: 0px; right: 1rem;",text:s[1],feedback:"Copied Brand Bundle to clipboard"}}),{c(){e=P("pre"),r=A(s[1]),t=T(),I(n.$$.fragment),this.h()},l(l){e=O(l,"PRE",{style:!0});var o=q(e);r=N(o,s[1]),o.forEach(d),t=D(l),y(n.$$.fragment,l),this.h()},h(){j(e,"overflow-x","clip"),j(e,"margin-bottom","1em")},m(l,o){b(l,e,o),E(e,r),b(l,t,o),B(n,l,o),i=!0},p(l,o){(!i||o&2)&&re(r,l[1]);const a={};o&2&&(a.text=l[1]),n.$set(a)},i(l){i||(g(n.$$.fragment,l),i=!0)},o(l){w(n.$$.fragment,l),i=!1},d(l){l&&d(e),l&&d(t),U(n,l)}}}function Qt(s){let e,r,t;return e=new It({props:{brand:s[11],parentBrand:s[0][s[11].parentId]}}),e.$on("add-affiliated-brand",function(){Ae(s[3](s[10]))&&s[3](s[10]).apply(this,arguments)}),e.$on("remove-affiliated-brand",function(){Ae(s[4](s[10]))&&s[4](s[10]).apply(this,arguments)}),{c(){I(e.$$.fragment),r=T()},l(n){y(e.$$.fragment,n),r=D(n)},m(n,i){B(e,n,i),b(n,r,i),t=!0},p(n,i){s=n;const l={};i&1&&(l.brand=s[11]),i&1&&(l.parentBrand=s[0][s[11].parentId]),e.$set(l)},i(n){t||(g(e.$$.fragment,n),t=!0)},o(n){w(e.$$.fragment,n),t=!1},d(n){U(e,n),n&&d(r)}}}function He(s){let e,r;return e=new fe({props:{class:"tile-column",sm:4,$$slots:{default:[Qt]},$$scope:{ctx:s}}}),{c(){I(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,n){B(e,t,n),r=!0},p(t,n){const i={};n&16385&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){U(e,t)}}}function Xt(s){let e,r,t=Object.entries(s[0]),n=[];for(let l=0;l<t.length;l+=1)n[l]=He(Ge(s,t,l));const i=l=>w(n[l],1,1,()=>{n[l]=null});return{c(){for(let l=0;l<n.length;l+=1)n[l].c();e=F()},l(l){for(let o=0;o<n.length;o+=1)n[o].l(l);e=F()},m(l,o){for(let a=0;a<n.length;a+=1)n[a].m(l,o);b(l,e,o),r=!0},p(l,o){if(o&25){t=Object.entries(l[0]);let a;for(a=0;a<t.length;a+=1){const f=Ge(l,t,a);n[a]?(n[a].p(f,o),g(n[a],1)):(n[a]=He(f),n[a].c(),g(n[a],1),n[a].m(e.parentNode,e))}for(ee(),a=t.length;a<n.length;a+=1)i(a);te()}},i(l){if(!r){for(let o=0;o<t.length;o+=1)g(n[o]);r=!0}},o(l){n=n.filter(Boolean);for(let o=0;o<n.length;o+=1)w(n[o]);r=!1},d(l){ye(n,l),l&&d(e)}}}function Yt(s){let e,r;return e=new de({props:{$$slots:{default:[Xt]},$$scope:{ctx:s}}}),{c(){I(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,n){B(e,t,n),r=!0},p(t,n){const i={};n&16385&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){U(e,t)}}}function Zt(s){let e,r;return e=new ke({props:{noGutter:!0,$$slots:{default:[Yt]},$$scope:{ctx:s}}}),{c(){I(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,n){B(e,t,n),r=!0},p(t,n){const i={};n&16385&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){U(e,t)}}}function We(s){let e,r,t;function n(l){s[6](l)}let i={brands:s[0]};return s[0][s[2].id]!==void 0&&(i.brand=s[0][s[2].id]),e=new zt({props:i}),W.push(()=>K(e,"brand",n)),{c(){I(e.$$.fragment)},l(l){y(e.$$.fragment,l)},m(l,o){B(e,l,o),t=!0},p(l,o){const a={};o&1&&(a.brands=l[0]),!r&&o&5&&(r=!0,a.brand=l[0][l[2].id],Q(()=>r=!1)),e.$set(a)},i(l){t||(g(e.$$.fragment,l),t=!0)},o(l){w(e.$$.fragment,l),t=!1},d(l){U(e,l)}}}function xt(s){let e=s[2].id,r,t,n=We(s);return{c(){n.c(),r=F()},l(i){n.l(i),r=F()},m(i,l){n.m(i,l),b(i,r,l),t=!0},p(i,l){l&4&&he(e,e=i[2].id)?(ee(),w(n,1,1,mt),te(),n=We(i),n.c(),g(n),n.m(r.parentNode,r)):n.p(i,l)},i(i){t||(g(n),t=!0)},o(i){w(n),t=!1},d(i){i&&d(r),n.d(i)}}}function er(s){let e,r,t,n,i,l;return e=new fe({props:{style:"position: relative;",lg:4,sm:4,$$slots:{default:[Kt]},$$scope:{ctx:s}}}),t=new fe({props:{lg:4,sm:4,style:"margin-bottom: 1em;",$$slots:{default:[Zt]},$$scope:{ctx:s}}}),i=new fe({props:{lg:8,sm:4,$$slots:{default:[xt]},$$scope:{ctx:s}}}),{c(){I(e.$$.fragment),r=T(),I(t.$$.fragment),n=T(),I(i.$$.fragment)},l(o){y(e.$$.fragment,o),r=D(o),y(t.$$.fragment,o),n=D(o),y(i.$$.fragment,o)},m(o,a){B(e,o,a),b(o,r,a),B(t,o,a),b(o,n,a),B(i,o,a),l=!0},p(o,a){const f={};a&16386&&(f.$$scope={dirty:a,ctx:o}),e.$set(f);const p={};a&16385&&(p.$$scope={dirty:a,ctx:o}),t.$set(p);const u={};a&16389&&(u.$$scope={dirty:a,ctx:o}),i.$set(u)},i(o){l||(g(e.$$.fragment,o),g(t.$$.fragment,o),g(i.$$.fragment,o),l=!0)},o(o){w(e.$$.fragment,o),w(t.$$.fragment,o),w(i.$$.fragment,o),l=!1},d(o){U(e,o),o&&d(r),U(t,o),o&&d(n),U(i,o)}}}function tr(s){let e,r,t,n;return e=new de({props:{$$slots:{default:[Jt]},$$scope:{ctx:s}}}),t=new de({props:{$$slots:{default:[er]},$$scope:{ctx:s}}}),{c(){I(e.$$.fragment),r=T(),I(t.$$.fragment)},l(i){y(e.$$.fragment,i),r=D(i),y(t.$$.fragment,i)},m(i,l){B(e,i,l),b(i,r,l),B(t,i,l),n=!0},p(i,l){const o={};l&16384&&(o.$$scope={dirty:l,ctx:i}),e.$set(o);const a={};l&16391&&(a.$$scope={dirty:l,ctx:i}),t.$set(a)},i(i){n||(g(e.$$.fragment,i),g(t.$$.fragment,i),n=!0)},o(i){w(e.$$.fragment,i),w(t.$$.fragment,i),n=!1},d(i){U(e,i),i&&d(r),U(t,i)}}}function rr(s){let e,r;return e=new ke({props:{$$slots:{default:[tr]},$$scope:{ctx:s}}}),{c(){I(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,n){B(e,t,n),r=!0},p(t,[n]){const i={};n&16391&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){U(e,t)}}}const nr="https://ehr.example.org";function lr(s,e,r){let t;Je(s,ie,m=>r(2,t=m));let n={id:De(),name:"TODO: Add a name"},i={[n.id]:me({},n)};o();let l=nr;pt(async()=>{const $=new URLSearchParams(window.location.search).get("source");if($){let h=await fetch($).then(V=>V.json()),C=Gt(h);r(5,l=C.baseUrl),r(0,i=C.brands),o()}});function o(){_e(ie,t={id:Object.values(i).filter(m=>!m.parentId)[0].id},t)}let a="",f=Lt();function p(m){return $=>{const h=be(me({},n),{id:De(),parentId:m});r(0,i=be(me({},i),{[h.id]:h})),_e(ie,t={id:h.id},t)}}function u(m){return $=>{r(0,i=Object.fromEntries(Object.entries(i).filter(([h,C])=>h!==m)))}}function c(m){s.$$.not_equal(i[t.id],m)&&(i[t.id]=m,r(0,i))}return s.$$.update=()=>{s.$$.dirty&33&&f(()=>{r(1,a=JSON.stringify(Ht(i,l||"https://ehr.example.org"),null,2))},200)},[i,a,t,p,u,l,c]}class or extends we{constructor(e){super();ve(this,e,lr,rr,he,{})}}export{or as default};
