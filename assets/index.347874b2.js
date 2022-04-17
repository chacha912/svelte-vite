const re=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}};re();function A(){}function se(t,e){for(const n in e)t[n]=e[n];return t}function ee(t){return t()}function W(){return Object.create(null)}function T(t){t.forEach(ee)}function oe(t){return typeof t=="function"}function B(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let M;function le(t,e){return M||(M=document.createElement("a")),M.href=e,t===M.href}function ie(t){return Object.keys(t).length===0}function a(t,e){t.appendChild(e)}function j(t,e,n){t.insertBefore(e,n||null)}function v(t){t.parentNode.removeChild(t)}function b(t){return document.createElement(t)}function _(t){return document.createTextNode(t)}function C(){return _(" ")}function J(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function w(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function fe(t){return Array.from(t.childNodes)}function E(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let V;function I(t){V=t}const q=[],X=[],F=[],Y=[],ue=Promise.resolve();let Q=!1;function ce(){Q||(Q=!0,ue.then(te))}function R(t){F.push(t)}const G=new Set;let D=0;function te(){const t=V;do{for(;D<q.length;){const e=q[D];D++,I(e),ae(e.$$)}for(I(null),q.length=0,D=0;X.length;)X.pop()();for(let e=0;e<F.length;e+=1){const n=F[e];G.has(n)||(G.add(n),n())}F.length=0}while(q.length);for(;Y.length;)Y.pop()();Q=!1,G.clear(),I(t)}function ae(t){if(t.fragment!==null){t.update(),T(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(R)}}const H=new Set;let de;function N(t,e){t&&t.i&&(H.delete(t),t.i(e))}function O(t,e,n,o){if(t&&t.o){if(H.has(t))return;H.add(t),de.c.push(()=>{H.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function me(t,e){const n={},o={},r={$$scope:1};let s=t.length;for(;s--;){const l=t[s],i=e[s];if(i){for(const c in l)c in i||(o[c]=1);for(const c in i)r[c]||(n[c]=i[c],r[c]=1);t[s]=i}else for(const c in l)r[c]=1}for(const l in o)l in n||(n[l]=void 0);return n}function _e(t){return typeof t=="object"&&t!==null?t:{}}function S(t){t&&t.c()}function L(t,e,n,o){const{fragment:r,on_mount:s,on_destroy:l,after_update:i}=t.$$;r&&r.m(e,n),o||R(()=>{const c=s.map(ee).filter(oe);l?l.push(...c):T(c),t.$$.on_mount=[]}),i.forEach(R)}function x(t,e){const n=t.$$;n.fragment!==null&&(T(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function pe(t,e){t.$$.dirty[0]===-1&&(q.push(t),ce(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function P(t,e,n,o,r,s,l,i=[-1]){const c=V;I(t);const f=t.$$={fragment:null,ctx:null,props:s,update:A,not_equal:r,bound:W(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:W(),dirty:i,skip_bound:!1,root:e.target||c.$$.root};l&&l(f.root);let h=!1;if(f.ctx=n?n(t,e.props||{},(u,p,...y)=>{const $=y.length?y[0]:p;return f.ctx&&r(f.ctx[u],f.ctx[u]=$)&&(!f.skip_bound&&f.bound[u]&&f.bound[u]($),h&&pe(t,u)),p}):[],f.update(),h=!0,T(f.before_update),f.fragment=o?o(f.ctx):!1,e.target){if(e.hydrate){const u=fe(e.target);f.fragment&&f.fragment.l(u),u.forEach(v)}else f.fragment&&f.fragment.c();e.intro&&N(t.$$.fragment),L(t,e.target,e.anchor,e.customElement),te()}I(c)}class z{$destroy(){x(this,1),this.$destroy=A}$on(e,n){const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(e){this.$$set&&!ie(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var ge="/assets/svelte.d72399d3.png";function he(t){let e,n,o,r,s,l,i,c,f,h;return{c(){e=b("button"),n=_("Clicks: "),o=_(t[0]),r=C(),s=b("p"),l=_(t[0]),i=_(" doubled is "),c=_(t[1]),w(e,"class","svelte-1c7643s")},m(u,p){j(u,e,p),a(e,n),a(e,o),j(u,r,p),j(u,s,p),a(s,l),a(s,i),a(s,c),f||(h=J(e,"click",t[2]),f=!0)},p(u,[p]){p&1&&E(o,u[0]),p&1&&E(l,u[0]),p&2&&E(c,u[1])},i:A,o:A,d(u){u&&v(e),u&&v(r),u&&v(s),f=!1,h()}}}function ye(t,e,n){let o,r=0;const s=()=>{n(0,r+=1)};return t.$$.update=()=>{t.$$.dirty&1&&(console.log("count",r),r>=10&&(alert("count is dangerously high!"),n(0,r=9))),t.$$.dirty&1&&n(1,o=r*2)},[r,o,s]}class $e extends z{constructor(e){super(),P(this,e,ye,he,B,{})}}function be(t){let e,n,o,r;return{c(){e=b("p"),n=_("This is a "),o=_(t[0]),r=_("."),w(e,"class","svelte-khfsyq")},m(s,l){j(s,e,l),a(e,n),a(e,o),a(e,r)},p(s,[l]){l&1&&E(o,s[0])},i:A,o:A,d(s){s&&v(e)}}}function ve(t,e,n){let{name:o="paragraph"}=e;return t.$$set=r=>{"name"in r&&n(0,o=r.name)},[o]}class Z extends z{constructor(e){super(),P(this,e,ve,be,B,{name:0})}}function we(t){let e,n,o,r,s,l,i,c,f,h,u,p,y,$,d;return{c(){e=b("p"),n=_("The "),o=b("code"),r=_(t[0]),s=_(" package is "),l=_(t[2]),i=_(` fast.
	Download version `),c=_(t[1]),f=_(" from "),h=b("a"),u=_("npm"),y=_(`
	and `),$=b("a"),d=_("learn more here"),w(h,"href",p="https://www.npmjs.com/package/"+t[0]),w($,"href",t[3]),w(e,"class","svelte-5r9bc8")},m(m,k){j(m,e,k),a(e,n),a(e,o),a(o,r),a(e,s),a(e,l),a(e,i),a(e,c),a(e,f),a(e,h),a(h,u),a(e,y),a(e,$),a($,d)},p(m,[k]){k&1&&E(r,m[0]),k&4&&E(l,m[2]),k&2&&E(c,m[1]),k&1&&p!==(p="https://www.npmjs.com/package/"+m[0])&&w(h,"href",p),k&8&&w($,"href",m[3])},i:A,o:A,d(m){m&&v(e)}}}function ke(t,e,n){let{name:o}=e,{version:r}=e,{speed:s}=e,{website:l}=e;return t.$$set=i=>{"name"in i&&n(0,o=i.name),"version"in i&&n(1,r=i.version),"speed"in i&&n(2,s=i.speed),"website"in i&&n(3,l=i.website)},[o,r,s,l]}class je extends z{constructor(e){super(),P(this,e,ke,we,B,{name:0,version:1,speed:2,website:3})}}function Ee(t){let e,n=t[0].join(" + ")+"",o,r,s,l,i,c,f,h,u=t[1].foo.bar+"",p,y,$;return{c(){e=b("p"),o=_(n),r=_(" = "),s=_(t[2]),l=C(),i=b("button"),i.textContent="Add a number",c=C(),f=b("p"),h=_("bar: "),p=_(u)},m(d,m){j(d,e,m),a(e,o),a(e,r),a(e,s),j(d,l,m),j(d,i,m),j(d,c,m),j(d,f,m),a(f,h),a(f,p),y||($=[J(i,"click",t[3]),J(f,"click",t[4])],y=!0)},p(d,[m]){m&1&&n!==(n=d[0].join(" + ")+"")&&E(o,n),m&4&&E(s,d[2]),m&2&&u!==(u=d[1].foo.bar+"")&&E(p,u)},i:A,o:A,d(d){d&&v(e),d&&v(l),d&&v(i),d&&v(c),d&&v(f),y=!1,T($)}}}function Ae(t,e,n){let o,r=[1,2,3,4],s={foo:{bar:"bar"}};function l(){n(0,r=[...r,r.length+1]),n(0,r[r.length]=r.length+1,r)}function i(){n(1,s.foo.bar="baz",s)}return t.$$.update=()=>{t.$$.dirty&1&&n(2,o=r.reduce((c,f)=>c+f,0))},[r,s,o,l,i]}class Ce extends z{constructor(e){super(),P(this,e,Ae,Ee,B,{})}}function Ne(t){let e,n,o,r,s,l,i,c,f,h,u,p,y,$,d,m;i=new $e({}),f=new Z({}),u=new Z({props:{name:"world"}});const k=[t[0]];let K={};for(let g=0;g<k.length;g+=1)K=se(K,k[g]);return y=new je({props:K}),d=new Ce({}),{c(){e=b("main"),n=b("img"),r=C(),s=b("h1"),s.textContent=`Hello ${Le.toUpperCase()}`,l=C(),S(i.$$.fragment),c=C(),S(f.$$.fragment),h=C(),S(u.$$.fragment),p=C(),S(y.$$.fragment),$=C(),S(d.$$.fragment),le(n.src,o=ge)||w(n,"src",o),w(n,"alt","Svelte Logo"),w(n,"class","svelte-20mxg3"),w(s,"class","svelte-20mxg3"),w(e,"class","svelte-20mxg3")},m(g,U){j(g,e,U),a(e,n),a(e,r),a(e,s),a(e,l),L(i,e,null),a(e,c),L(f,e,null),a(e,h),L(u,e,null),a(e,p),L(y,e,null),a(e,$),L(d,e,null),m=!0},p(g,[U]){const ne=U&1?me(k,[_e(g[0])]):{};y.$set(ne)},i(g){m||(N(i.$$.fragment,g),N(f.$$.fragment,g),N(u.$$.fragment,g),N(y.$$.fragment,g),N(d.$$.fragment,g),m=!0)},o(g){O(i.$$.fragment,g),O(f.$$.fragment,g),O(u.$$.fragment,g),O(y.$$.fragment,g),O(d.$$.fragment,g),m=!1},d(g){g&&v(e),x(i),x(f),x(u),x(y),x(d)}}}let Le="world";function xe(t){return[{name:"svelte",version:3,speed:"blazing",website:"https://svelte.dev"}]}class Oe extends z{constructor(e){super(),P(this,e,xe,Ne,B,{})}}new Oe({target:document.getElementById("app")});
