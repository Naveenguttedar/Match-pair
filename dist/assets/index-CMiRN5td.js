(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();var R,h,v_,P,t_,m_,B,Q,z,V,E={},y_=[],$_=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Y=Array.isArray;function C(e,_){for(var t in _)e[t]=_[t];return e}function g_(e){var _=e.parentNode;_&&_.removeChild(e)}function N_(e,_,t){var n,o,r,c={};for(r in _)r=="key"?n=_[r]:r=="ref"?o=_[r]:c[r]=_[r];if(arguments.length>2&&(c.children=arguments.length>3?R.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)c[r]===void 0&&(c[r]=e.defaultProps[r]);return O(e,c,n,o,null)}function O(e,_,t,n,o){var r={type:e,props:_,key:t,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++v_,__i:-1,__u:0};return o==null&&h.vnode!=null&&h.vnode(r),r}function L(e){return e.children}function D(e,_){this.props=e,this.context=_}function N(e,_){if(_==null)return e.__?N(e.__,e.__i+1):null;for(var t;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?N(e):null}function b_(e){var _,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,_=0;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return b_(e)}}function n_(e){(!e.__d&&(e.__d=!0)&&P.push(e)&&!W.__r++||t_!==h.debounceRendering)&&((t_=h.debounceRendering)||m_)(W)}function W(){var e,_,t,n,o,r,c,u;for(P.sort(B);e=P.shift();)e.__d&&(_=P.length,n=void 0,r=(o=(t=e).__v).__e,c=[],u=[],t.__P&&((n=C({},o)).__v=o.__v+1,h.vnode&&h.vnode(n),Z(t.__P,n,o,t.__n,t.__P.namespaceURI,32&o.__u?[r]:null,c,r??N(o),!!(32&o.__u),u),n.__v=o.__v,n.__.__k[n.__i]=n,x_(c,n,u),n.__e!=r&&b_(n)),P.length>_&&P.sort(B));W.__r=0}function k_(e,_,t,n,o,r,c,u,s,l,a){var i,p,f,g,k,b=n&&n.__k||y_,d=_.length;for(t.__d=s,H_(t,_,b),s=t.__d,i=0;i<d;i++)(f=t.__k[i])!=null&&typeof f!="boolean"&&typeof f!="function"&&(p=f.__i===-1?E:b[f.__i]||E,f.__i=i,Z(e,f,p,o,r,c,u,s,l,a),g=f.__e,f.ref&&p.ref!=f.ref&&(p.ref&&__(p.ref,null,f),a.push(f.ref,f.__c||g,f)),k==null&&g!=null&&(k=g),65536&f.__u||p.__k===f.__k?(s&&typeof f.type=="string"&&!e.contains(s)&&(s=N(p)),s=w_(f,s,e)):typeof f.type=="function"&&f.__d!==void 0?s=f.__d:g&&(s=g.nextSibling),f.__d=void 0,f.__u&=-196609);t.__d=s,t.__e=k}function H_(e,_,t){var n,o,r,c,u,s=_.length,l=t.length,a=l,i=0;for(e.__k=[],n=0;n<s;n++)c=n+i,(o=e.__k[n]=(o=_[n])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?O(null,o,null,null,null):Y(o)?O(L,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?O(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=e,o.__b=e.__b+1,u=S_(o,t,c,a),o.__i=u,r=null,u!==-1&&(a--,(r=t[u])&&(r.__u|=131072)),r==null||r.__v===null?(u==-1&&i--,typeof o.type!="function"&&(o.__u|=65536)):u!==c&&(u==c-1?i=u-c:u==c+1?i++:u>c?a>s-c?i+=u-c:i--:u<c&&i++,u!==n+i&&(o.__u|=65536))):(r=t[c])&&r.key==null&&r.__e&&!(131072&r.__u)&&(r.__e==e.__d&&(e.__d=N(r)),G(r,r,!1),t[c]=null,a--);if(a)for(n=0;n<l;n++)(r=t[n])!=null&&!(131072&r.__u)&&(r.__e==e.__d&&(e.__d=N(r)),G(r,r))}function w_(e,_,t){var n,o;if(typeof e.type=="function"){for(n=e.__k,o=0;n&&o<n.length;o++)n[o]&&(n[o].__=e,_=w_(n[o],_,t));return _}e.__e!=_&&(t.insertBefore(e.__e,_||null),_=e.__e);do _=_&&_.nextSibling;while(_!=null&&_.nodeType===8);return _}function S_(e,_,t,n){var o=e.key,r=e.type,c=t-1,u=t+1,s=_[t];if(s===null||s&&o==s.key&&r===s.type&&!(131072&s.__u))return t;if(n>(s!=null&&!(131072&s.__u)?1:0))for(;c>=0||u<_.length;){if(c>=0){if((s=_[c])&&!(131072&s.__u)&&o==s.key&&r===s.type)return c;c--}if(u<_.length){if((s=_[u])&&!(131072&s.__u)&&o==s.key&&r===s.type)return u;u++}}return-1}function o_(e,_,t){_[0]==="-"?e.setProperty(_,t??""):e[_]=t==null?"":typeof t!="number"||$_.test(_)?t:t+"px"}function F(e,_,t,n,o){var r;_:if(_==="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(_ in n)t&&_ in t||o_(e.style,_,"");if(t)for(_ in t)n&&t[_]===n[_]||o_(e.style,_,t[_])}else if(_[0]==="o"&&_[1]==="n")r=_!==(_=_.replace(/(PointerCapture)$|Capture$/i,"$1")),_=_.toLowerCase()in e||_==="onFocusOut"||_==="onFocusIn"?_.toLowerCase().slice(2):_.slice(2),e.l||(e.l={}),e.l[_+r]=t,t?n?t.u=n.u:(t.u=Q,e.addEventListener(_,r?V:z,r)):e.removeEventListener(_,r?V:z,r);else{if(o=="http://www.w3.org/2000/svg")_=_.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(_!="width"&&_!="height"&&_!="href"&&_!="list"&&_!="form"&&_!="tabIndex"&&_!="download"&&_!="rowSpan"&&_!="colSpan"&&_!="role"&&_!="popover"&&_ in e)try{e[_]=t??"";break _}catch{}typeof t=="function"||(t==null||t===!1&&_[4]!=="-"?e.removeAttribute(_):e.setAttribute(_,_=="popover"&&t==1?"":t))}}function r_(e){return function(_){if(this.l){var t=this.l[_.type+e];if(_.t==null)_.t=Q++;else if(_.t<t.u)return;return t(h.event?h.event(_):_)}}}function Z(e,_,t,n,o,r,c,u,s,l){var a,i,p,f,g,k,b,d,v,H,x,A,S,e_,T,j,w=_.type;if(_.constructor!==void 0)return null;128&t.__u&&(s=!!(32&t.__u),r=[u=_.__e=t.__e]),(a=h.__b)&&a(_);_:if(typeof w=="function")try{if(d=_.props,v="prototype"in w&&w.prototype.render,H=(a=w.contextType)&&n[a.__c],x=a?H?H.props.value:a.__:n,t.__c?b=(i=_.__c=t.__c).__=i.__E:(v?_.__c=i=new w(d,x):(_.__c=i=new D(d,x),i.constructor=w,i.render=M_),H&&H.sub(i),i.props=d,i.state||(i.state={}),i.context=x,i.__n=n,p=i.__d=!0,i.__h=[],i._sb=[]),v&&i.__s==null&&(i.__s=i.state),v&&w.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=C({},i.__s)),C(i.__s,w.getDerivedStateFromProps(d,i.__s))),f=i.props,g=i.state,i.__v=_,p)v&&w.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),v&&i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(v&&w.getDerivedStateFromProps==null&&d!==f&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(d,x),!i.__e&&(i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(d,i.__s,x)===!1||_.__v===t.__v)){for(_.__v!==t.__v&&(i.props=d,i.state=i.__s,i.__d=!1),_.__e=t.__e,_.__k=t.__k,_.__k.forEach(function(U){U&&(U.__=_)}),A=0;A<i._sb.length;A++)i.__h.push(i._sb[A]);i._sb=[],i.__h.length&&c.push(i);break _}i.componentWillUpdate!=null&&i.componentWillUpdate(d,i.__s,x),v&&i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(f,g,k)})}if(i.context=x,i.props=d,i.__P=e,i.__e=!1,S=h.__r,e_=0,v){for(i.state=i.__s,i.__d=!1,S&&S(_),a=i.render(i.props,i.state,i.context),T=0;T<i._sb.length;T++)i.__h.push(i._sb[T]);i._sb=[]}else do i.__d=!1,S&&S(_),a=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++e_<25);i.state=i.__s,i.getChildContext!=null&&(n=C(C({},n),i.getChildContext())),v&&!p&&i.getSnapshotBeforeUpdate!=null&&(k=i.getSnapshotBeforeUpdate(f,g)),k_(e,Y(j=a!=null&&a.type===L&&a.key==null?a.props.children:a)?j:[j],_,t,n,o,r,c,u,s,l),i.base=_.__e,_.__u&=-161,i.__h.length&&c.push(i),b&&(i.__E=i.__=null)}catch(U){_.__v=null,s||r!=null?(_.__e=u,_.__u|=s?160:32,r[r.indexOf(u)]=null):(_.__e=t.__e,_.__k=t.__k),h.__e(U,_,t)}else r==null&&_.__v===t.__v?(_.__k=t.__k,_.__e=t.__e):_.__e=E_(t.__e,_,t,n,o,r,c,s,l);(a=h.diffed)&&a(_)}function x_(e,_,t){_.__d=void 0;for(var n=0;n<t.length;n++)__(t[n],t[++n],t[++n]);h.__c&&h.__c(_,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(r){r.call(o)})}catch(r){h.__e(r,o.__v)}})}function E_(e,_,t,n,o,r,c,u,s){var l,a,i,p,f,g,k,b=t.props,d=_.props,v=_.type;if(v==="svg"?o="http://www.w3.org/2000/svg":v==="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),r!=null){for(l=0;l<r.length;l++)if((f=r[l])&&"setAttribute"in f==!!v&&(v?f.localName===v:f.nodeType===3)){e=f,r[l]=null;break}}if(e==null){if(v===null)return document.createTextNode(d);e=document.createElementNS(o,v,d.is&&d),r=null,u=!1}if(v===null)b===d||u&&e.data===d||(e.data=d);else{if(r=r&&R.call(e.childNodes),b=t.props||E,!u&&r!=null)for(b={},l=0;l<e.attributes.length;l++)b[(f=e.attributes[l]).name]=f.value;for(l in b)if(f=b[l],l!="children"){if(l=="dangerouslySetInnerHTML")i=f;else if(l!=="key"&&!(l in d)){if(l=="value"&&"defaultValue"in d||l=="checked"&&"defaultChecked"in d)continue;F(e,l,null,f,o)}}for(l in d)f=d[l],l=="children"?p=f:l=="dangerouslySetInnerHTML"?a=f:l=="value"?g=f:l=="checked"?k=f:l==="key"||u&&typeof f!="function"||b[l]===f||F(e,l,f,b[l],o);if(a)u||i&&(a.__html===i.__html||a.__html===e.innerHTML)||(e.innerHTML=a.__html),_.__k=[];else if(i&&(e.innerHTML=""),k_(e,Y(p)?p:[p],_,t,n,v==="foreignObject"?"http://www.w3.org/1999/xhtml":o,r,c,r?r[0]:t.__k&&N(t,0),u,s),r!=null)for(l=r.length;l--;)r[l]!=null&&g_(r[l]);u||(l="value",g!==void 0&&(g!==e[l]||v==="progress"&&!g||v==="option"&&g!==b[l])&&F(e,l,g,b[l],o),l="checked",k!==void 0&&k!==e[l]&&F(e,l,k,b[l],o))}return e}function __(e,_,t){try{typeof e=="function"?e(_):e.current=_}catch(n){h.__e(n,t)}}function G(e,_,t){var n,o;if(h.unmount&&h.unmount(e),(n=e.ref)&&(n.current&&n.current!==e.__e||__(n,null,_)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(r){h.__e(r,_)}n.base=n.__P=null}if(n=e.__k)for(o=0;o<n.length;o++)n[o]&&G(n[o],_,t||typeof e.type!="function");t||e.__e==null||g_(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function M_(e,_,t){return this.constructor(e,t)}function L_(e,_,t){var n,o,r,c;h.__&&h.__(e,_),o=(n=typeof t=="function")?null:_.__k,r=[],c=[],Z(_,e=(!n&&t||_).__k=N_(L,null,[e]),o||E,E,_.namespaceURI,!n&&t?[t]:o?null:_.firstChild?R.call(_.childNodes):null,r,!n&&t?t:o?o.__e:_.firstChild,n,c),x_(r,e,c)}R=y_.slice,h={__e:function(e,_,t,n){for(var o,r,c;_=_.__;)if((o=_.__c)&&!o.__)try{if((r=o.constructor)&&r.getDerivedStateFromError!=null&&(o.setState(r.getDerivedStateFromError(e)),c=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,n||{}),c=o.__d),c)return o.__E=o}catch(u){e=u}throw e}},v_=0,D.prototype.setState=function(e,_){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=C({},this.state),typeof e=="function"&&(e=e(C({},t),this.props)),e&&C(t,e),e!=null&&this.__v&&(_&&this._sb.push(_),n_(this))},D.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),n_(this))},D.prototype.render=L,P=[],m_=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,B=function(e,_){return e.__v.__b-_.__v.__b},W.__r=0,Q=0,z=r_(!1),V=r_(!0);var A_=0;function $(e,_,t,n,o,r){_||(_={});var c,u,s=_;if("ref"in s)for(u in s={},_)u=="ref"?c=_[u]:s[u]=_[u];var l={type:e,props:s,key:t,ref:c,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--A_,__i:-1,__u:0,__source:o,__self:r};if(typeof e=="function"&&(c=e.defaultProps))for(u in c)s[u]===void 0&&(s[u]=c[u]);return h.vnode&&h.vnode(l),l}var X,m,q,i_,K=0,C_=[],y=h,l_=y.__b,c_=y.__r,u_=y.diffed,s_=y.__c,f_=y.unmount,a_=y.__;function T_(e,_){y.__h&&y.__h(m,e,K||_),K=0;var t=m.__H||(m.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function U_(e){return K=1,F_(P_,e)}function F_(e,_,t){var n=T_(X++,2);if(n.t=e,!n.__c&&(n.__=[P_(void 0,_),function(u){var s=n.__N?n.__N[0]:n.__[0],l=n.t(s,u);s!==l&&(n.__N=[l,n.__[1]],n.__c.setState({}))}],n.__c=m,!m.u)){var o=function(u,s,l){if(!n.__c.__H)return!0;var a=n.__c.__H.__.filter(function(p){return!!p.__c});if(a.every(function(p){return!p.__N}))return!r||r.call(this,u,s,l);var i=!1;return a.forEach(function(p){if(p.__N){var f=p.__[0];p.__=p.__N,p.__N=void 0,f!==p.__[0]&&(i=!0)}}),!(!i&&n.__c.props===u)&&(!r||r.call(this,u,s,l))};m.u=!0;var r=m.shouldComponentUpdate,c=m.componentWillUpdate;m.componentWillUpdate=function(u,s,l){if(this.__e){var a=r;r=void 0,o(u,s,l),r=a}c&&c.call(this,u,s,l)},m.shouldComponentUpdate=o}return n.__N||n.__}function O_(){for(var e;e=C_.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(I),e.__H.__h.forEach(J),e.__H.__h=[]}catch(_){e.__H.__h=[],y.__e(_,e.__v)}}y.__b=function(e){m=null,l_&&l_(e)},y.__=function(e,_){e&&_.__k&&_.__k.__m&&(e.__m=_.__k.__m),a_&&a_(e,_)},y.__r=function(e){c_&&c_(e),X=0;var _=(m=e.__c).__H;_&&(q===m?(_.__h=[],m.__h=[],_.__.forEach(function(t){t.__N&&(t.__=t.__N),t.i=t.__N=void 0})):(_.__h.forEach(I),_.__h.forEach(J),_.__h=[],X=0)),q=m},y.diffed=function(e){u_&&u_(e);var _=e.__c;_&&_.__H&&(_.__H.__h.length&&(C_.push(_)!==1&&i_===y.requestAnimationFrame||((i_=y.requestAnimationFrame)||D_)(O_)),_.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.i=void 0})),q=m=null},y.__c=function(e,_){_.some(function(t){try{t.__h.forEach(I),t.__h=t.__h.filter(function(n){return!n.__||J(n)})}catch(n){_.some(function(o){o.__h&&(o.__h=[])}),_=[],y.__e(n,t.__v)}}),s_&&s_(e,_)},y.unmount=function(e){f_&&f_(e);var _,t=e.__c;t&&t.__H&&(t.__H.__.forEach(function(n){try{I(n)}catch(o){_=o}}),t.__H=void 0,_&&y.__e(_,t.__v))};var p_=typeof requestAnimationFrame=="function";function D_(e){var _,t=function(){clearTimeout(n),p_&&cancelAnimationFrame(_),setTimeout(e)},n=setTimeout(t,100);p_&&(_=requestAnimationFrame(t))}function I(e){var _=m,t=e.__c;typeof t=="function"&&(e.__c=void 0,t()),m=_}function J(e){var _=m;e.__c=e.__(),m=_}function P_(e,_){return typeof _=="function"?_(e):_}const I_=4,W_=4,M=[];function R_(e,_){return Math.floor(Math.random()*(_-e)+e)}const d_=[1,2,3,4,5,6,7,8],h_=[...d_,...d_];function j_(e){for(let _=e.length-1;_>=0;_--){let t=R_(0,_+1),n=e[_];e[_]=e[t],e[t]=n}return e}function q_(){j_(h_);let e=0;for(let _=0;_<I_;_++){let t=[];for(let n=0;n<W_;n++)t.push(h_[e++]);M.push(t)}return M}q_();console.log(M);const B_=e=>{const _=parseInt(""+e.getAttribute("data-row")),t=parseInt(""+e.getAttribute("data-col"));return[_,t]},z_=({updateCount:e})=>$("div",{className:"  w-[400px] h-[400px]  gap-2 grid grid-cols-4",onClick:t=>{e();const n=t.target,[o,r]=B_(n);n.className="flex justify-center text-2xl font-semibold    items-center border-2 border-white bg-transparent",console.log(o,r),n.textContent=""+M[o][r]},children:M.map((t,n)=>t.map((o,r)=>$("div",{className:" flex justify-center text-2xl font-semibold    items-center border-2  bg-white cursor-pointer","data-row":n,"data-col":r,children:0})))});function V_(){const[e,_]=U_(0);return $(L,{children:$("div",{class:"card",children:[$(z_,{updateCount:()=>{_(e+1)}}),$("button",{children:["count is ",e]})]})})}L_($(V_,{}),document.getElementById("app"));
