import{w as Ut,r as i,j as f,A as we,x as re,i as D,d as h,e as ye,f as G,h as ge,u as Bt,t as oe,C as Qe,z as Ze,F as Se,a3 as Vt,Y as et,a4 as Wt}from"./index.0198b741.js";import{K as me,T as Ft,t as tt,u as ve,a as Ee,b as Jt,R as Gt,C as Xt}from"./button.bfc14c32.js";var rt=function(t){if(Ut()&&window.document.documentElement){var n=Array.isArray(t)?t:[t],r=window.document.documentElement;return n.some(function(a){return a in r.style})}return!1},Yt=function(t,n){if(!rt(t))return!1;var r=document.createElement("div"),a=r.style[t];return r.style[t]=n,r.style[t]!==a};function We(e,t){return!Array.isArray(e)&&t!==void 0?Yt(e,t):rt(e)}var qt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"};const Qt=qt;var nt=function(t,n){return f(we,{...re(re({},t),{},{ref:n,icon:Qt})})};nt.displayName="CopyOutlined";const Zt=i.exports.forwardRef(nt);var er={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"};const tr=er;var at=function(t,n){return f(we,{...re(re({},t),{},{ref:n,icon:tr})})};at.displayName="EditOutlined";const rr=i.exports.forwardRef(at);var nr=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||n.forEach(function(a){e.addRange(a)}),t&&t.focus()}},ar=nr,Fe={"text/plain":"Text","text/html":"Url",default:"Text"},or="Copy to clipboard: #{key}, Enter";function ir(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function lr(e,t){var n,r,a,s,v,c,p=!1;t||(t={}),n=t.debug||!1;try{a=ar(),s=document.createRange(),v=document.getSelection(),c=document.createElement("span"),c.textContent=e,c.ariaHidden="true",c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",function(l){if(l.stopPropagation(),t.format)if(l.preventDefault(),typeof l.clipboardData>"u"){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var b=Fe[t.format]||Fe.default;window.clipboardData.setData(b,e)}else l.clipboardData.clearData(),l.clipboardData.setData(t.format,e);t.onCopy&&(l.preventDefault(),t.onCopy(l.clipboardData))}),document.body.appendChild(c),s.selectNodeContents(c),v.addRange(s);var C=document.execCommand("copy");if(!C)throw new Error("copy command was unsuccessful");p=!0}catch(l){n&&console.error("unable to copy using execCommand: ",l),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),p=!0}catch(b){n&&console.error("unable to copy using clipboardData: ",b),n&&console.error("falling back to prompt"),r=ir("message"in t?t.message:or),window.prompt(r,e)}}finally{v&&(typeof v.removeRange=="function"?v.removeRange(s):v.removeAllRanges()),c&&document.body.removeChild(c),a()}return p}var sr=lr,cr=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},ur={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},dr=i.exports.forwardRef(function(e,t){var n=function(l){var b=l.keyCode;b===me.ENTER&&l.preventDefault()},r=function(l){var b=l.keyCode,w=e.onClick;b===me.ENTER&&w&&w()},a=e.style,s=e.noStyle,v=e.disabled,c=cr(e,["style","noStyle","disabled"]),p={};return s||(p=D({},ur)),v&&(p.pointerEvents="none"),p=D(D({},p),a),f("div",{role:"button",tabIndex:0,ref:t,...c,onKeyDown:n,onKeyUp:r,style:p})});const Je=dr;var fr={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"};const pr=fr;var ot=function(t,n){return f(we,{...re(re({},t),{},{ref:n,icon:pr})})};ot.displayName="EnterOutlined";const vr=i.exports.forwardRef(ot);var yr=function(t){var n=t.prefixCls,r=t["aria-label"],a=t.className,s=t.style,v=t.direction,c=t.maxLength,p=t.autoSize,C=p===void 0?!0:p,l=t.value,b=t.onSave,w=t.onCancel,T=t.onEnd,$=t.component,_=t.enterIcon,U=_===void 0?f(vr,{}):_,j=i.exports.useRef(null),S=i.exports.useRef(!1),K=i.exports.useRef(),L=i.exports.useState(l),H=h(L,2),A=H[0],O=H[1];i.exports.useEffect(function(){O(l)},[l]),i.exports.useEffect(function(){if(j.current&&j.current.resizableTextArea){var g=j.current.resizableTextArea.textArea;g.focus();var m=g.value.length;g.setSelectionRange(m,m)}},[]);var Q=function(m){var E=m.target;O(E.value.replace(/[\n\r]/g,""))},B=function(){S.current=!0},k=function(){S.current=!1},N=function(m){var E=m.keyCode;S.current||(K.current=E)},y=function(){b(A.trim())},Z=function(m){var E=m.keyCode,ee=m.ctrlKey,ne=m.altKey,Y=m.metaKey,W=m.shiftKey;K.current===E&&!S.current&&!ee&&!ne&&!Y&&!W&&(E===me.ENTER?(y(),T==null||T()):E===me.ESC&&w())},V=function(){y()},X=$?"".concat(n,"-").concat($):"",P=ye(n,"".concat(n,"-edit-content"),G({},"".concat(n,"-rtl"),v==="rtl"),a,X);return ge("div",{className:P,style:s,children:[f(Ft,{ref:j,maxLength:c,value:A,onChange:Q,onKeyDown:N,onKeyUp:Z,onCompositionStart:B,onCompositionEnd:k,onBlur:V,"aria-label":r,rows:1,autoSize:C}),U!==null?Bt(U,{className:"".concat(n,"-edit-content-confirm")}):null]})};const gr=yr;function he(e,t){return i.exports.useMemo(function(){var n=!!e;return[n,D(D({},t),n&&oe(e)==="object"?e:null)]},[e])}var mr=function(t,n){var r=i.exports.useRef(!1);i.exports.useEffect(function(){r.current?t():r.current=!0},n)};const br=mr;var xr=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},hr=i.exports.forwardRef(function(e,t){var n=e.prefixCls,r=e.component,a=r===void 0?"article":r,s=e.className,v=e.setContentRef,c=e.children,p=e.direction,C=xr(e,["prefixCls","component","className","setContentRef","children","direction"]),l=i.exports.useContext(Qe),b=l.getPrefixCls,w=l.direction,T=p!=null?p:w,$=t;v&&($=Ze(t,v));var _=b("typography",n),U=ye(_,G({},"".concat(_,"-rtl"),T==="rtl"),s);return f(a,{className:U,ref:$,...C,children:c})});const it=hr;function lt(e){var t=oe(e);return t==="string"||t==="number"}function Cr(e){var t=0;return e.forEach(function(n){lt(n)?t+=String(n).length:t+=1}),t}function Ge(e,t){for(var n=0,r=[],a=0;a<e.length;a+=1){if(n===t)return r;var s=e[a],v=lt(s),c=v?String(s).length:1,p=n+c;if(p>t){var C=t-n;return r.push(String(s).slice(0,C)),r}r.push(s),n=p}return e}var Sr=0,fe=1,Xe=2,Ce=3,Ye=4,Er=function(t){var n=t.enabledMeasure,r=t.children,a=t.text,s=t.width,v=t.fontSize,c=t.rows,p=t.onEllipsis,C=i.exports.useState([0,0,0]),l=h(C,2),b=h(l[0],3),w=b[0],T=b[1],$=b[2],_=l[1],U=i.exports.useState(Sr),j=h(U,2),S=j[0],K=j[1],L=i.exports.useState(0),H=h(L,2),A=H[0],O=H[1],Q=i.exports.useRef(null),B=i.exports.useRef(null),k=i.exports.useMemo(function(){return tt(a)},[a]),N=i.exports.useMemo(function(){return Cr(k)},[k]),y=i.exports.useMemo(function(){return!n||S!==Ce?r(k,!1):r(Ge(k,T),T<N)},[n,S,r,k,T,N]);ve(function(){n&&s&&v&&N&&(K(fe),_([0,Math.ceil(N/2),N]))},[n,s,v,a,N,c]),ve(function(){var P;S===fe&&O(((P=Q.current)===null||P===void 0?void 0:P.offsetHeight)||0)},[S]),ve(function(){var P,g;if(A){if(S===fe){var m=((P=B.current)===null||P===void 0?void 0:P.offsetHeight)||0,E=c*A;m<=E?(K(Ye),p(!1)):K(Xe)}else if(S===Xe)if(w!==$){var ee=((g=B.current)===null||g===void 0?void 0:g.offsetHeight)||0,ne=c*A,Y=w,W=$;w===$-1?W=w:ee<=ne?Y=T:W=T;var le=Math.ceil((Y+W)/2);_([Y,le,W])}else K(Ce),p(!0)}},[S,w,$,c,A]);var Z={width:s,whiteSpace:"normal",margin:0,padding:0},V=function(g,m,E){return f("span",{"aria-hidden":!0,ref:m,style:D({position:"fixed",display:"block",left:0,top:0,zIndex:-9999,visibility:"hidden",pointerEvents:"none",fontSize:Math.floor(v/2)*2},E),children:g})},X=function(g,m){var E=Ge(k,g);return V(r(E,!0),m,Z)};return ge(Se,{children:[y,n&&S!==Ce&&S!==Ye&&ge(Se,{children:[V("lg",Q,{wordBreak:"keep-all",whiteSpace:"nowrap"}),S===fe?V(r(k,!1),B,Z):X(T,B)]})]})};const wr=Er;var Or=function(t){var n=t.enabledEllipsis,r=t.isEllipsis,a=t.children,s=t.tooltipProps;return!(s!=null&&s.title)||!n?a:f(Ee,{open:r?void 0:!1,...s,children:a})};const Rr=Or;var Tr=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function $r(e,t){var n=e.mark,r=e.code,a=e.underline,s=e.delete,v=e.strong,c=e.keyboard,p=e.italic,C=t;function l(b,w){!b||(C=i.exports.createElement(w,{},C))}return l(v,"strong"),l(a,"u"),l(s,"del"),l(r,"code"),l(n,"mark"),l(c,"kbd"),l(p,"i"),C}function pe(e,t,n){return e===!0||e===void 0?t:e||n&&t}function qe(e){return e===!1?[!1,!1]:Array.isArray(e)?e:[e]}var _r="...",Pr=i.exports.forwardRef(function(e,t){var n,r,a,s=e.prefixCls,v=e.className,c=e.style,p=e.type,C=e.disabled,l=e.children,b=e.ellipsis,w=e.editable,T=e.copyable,$=e.component,_=e.title,U=Tr(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),j=i.exports.useContext(Qe),S=j.getPrefixCls,K=j.direction,L=Vt("Text")[0],H=i.exports.useRef(null),A=i.exports.useRef(null),O=S("typography",s),Q=et(U,["mark","code","delete","underline","strong","keyboard","italic"]),B=he(w),k=h(B,2),N=k[0],y=k[1],Z=Jt(!1,{value:y.editing}),V=h(Z,2),X=V[0],P=V[1],g=y.triggerType,m=g===void 0?["icon"]:g,E=function(o){var d;o&&((d=y.onStart)===null||d===void 0||d.call(y)),P(o)};br(function(){var u;X||(u=A.current)===null||u===void 0||u.focus()},[X]);var ee=function(o){o==null||o.preventDefault(),E(!0)},ne=function(o){var d;(d=y.onChange)===null||d===void 0||d.call(y,o),E(!1)},Y=function(){var o;(o=y.onCancel)===null||o===void 0||o.call(y),E(!1)},W=he(T),le=h(W,2),xe=le[0],q=le[1],st=i.exports.useState(!1),Oe=h(st,2),se=Oe[0],Re=Oe[1],Te=i.exports.useRef(),$e={};q.format&&($e.format=q.format);var _e=function(){window.clearTimeout(Te.current)},ct=function(o){var d;o==null||o.preventDefault(),o==null||o.stopPropagation(),sr(q.text||String(l)||"",$e),Re(!0),_e(),Te.current=window.setTimeout(function(){Re(!1)},3e3),(d=q.onCopy)===null||d===void 0||d.call(q,o)};i.exports.useEffect(function(){return _e},[]);var ut=i.exports.useState(!1),Pe=h(ut,2),ke=Pe[0],dt=Pe[1],ft=i.exports.useState(!1),Ne=h(ft,2),Ie=Ne[0],pt=Ne[1],vt=i.exports.useState(!1),Le=h(vt,2),yt=Le[0],gt=Le[1],mt=i.exports.useState(!1),Me=h(mt,2),ze=Me[0],bt=Me[1],xt=i.exports.useState(!1),De=h(xt,2),je=De[0],ht=De[1],Ct=i.exports.useState(!0),Ke=h(Ct,2),St=Ke[0],Et=Ke[1],wt=he(b,{expandable:!1}),Ae=h(wt,2),F=Ae[0],x=Ae[1],M=F&&!yt,He=x.rows,te=He===void 0?1:He,ce=i.exports.useMemo(function(){return!M||x.suffix!==void 0||x.onEllipsis||x.expandable||N||xe},[M,x,N,xe]);ve(function(){F&&!ce&&(dt(We("webkitLineClamp")),pt(We("textOverflow")))},[ce,F]);var z=i.exports.useMemo(function(){return ce?!1:te===1?Ie:ke},[ce,Ie,ke]),Ue=M&&(z?je:ze),Ot=M&&te===1&&z,ue=M&&te>1&&z,Rt=function(o){var d;gt(!0),(d=x.onExpand)===null||d===void 0||d.call(x,o)},Tt=i.exports.useState(0),Be=h(Tt,2),$t=Be[0],_t=Be[1],Pt=i.exports.useState(0),Ve=h(Pt,2),kt=Ve[0],Nt=Ve[1],It=function(o,d){var R=o.offsetWidth,I;_t(R),Nt(parseInt((I=window.getComputedStyle)===null||I===void 0?void 0:I.call(window,d).fontSize,10)||0)},Lt=function(o){var d;bt(o),ze!==o&&((d=x.onEllipsis)===null||d===void 0||d.call(x,o))};i.exports.useEffect(function(){var u=H.current;if(F&&z&&u){var o=ue?u.offsetHeight<u.scrollHeight:u.offsetWidth<u.scrollWidth;je!==o&&ht(o)}},[F,z,l,ue,St]),i.exports.useEffect(function(){var u=H.current;if(!(typeof IntersectionObserver>"u"||!u||!z||!M)){var o=new IntersectionObserver(function(){Et(!!u.offsetParent)});return o.observe(u),function(){o.disconnect()}}},[z,M]);var J={};x.tooltip===!0?J={title:(n=y.text)!==null&&n!==void 0?n:l}:i.exports.isValidElement(x.tooltip)?J={title:x.tooltip}:oe(x.tooltip)==="object"?J=D({title:(r=y.text)!==null&&r!==void 0?r:l},x.tooltip):J={title:x.tooltip};var de=i.exports.useMemo(function(){var u=function(d){return["string","number"].includes(oe(d))};if(!(!F||z)){if(u(y.text))return y.text;if(u(l))return l;if(u(_))return _;if(u(J.title))return J.title}},[F,z,_,J.title,Ue]);if(X)return f(gr,{value:(a=y.text)!==null&&a!==void 0?a:typeof l=="string"?l:"",onSave:ne,onCancel:Y,onEnd:y.onEnd,prefixCls:O,className:v,style:c,direction:K,component:$,maxLength:y.maxLength,autoSize:y.autoSize,enterIcon:y.enterIcon});var Mt=function(){var o=x.expandable,d=x.symbol;if(!o)return null;var R;return d?R=d:R=L.expand,f("a",{className:"".concat(O,"-expand"),onClick:Rt,"aria-label":L.expand,children:R},"expand")},zt=function(){if(!!N){var o=y.icon,d=y.tooltip,R=tt(d)[0]||L.edit,I=typeof R=="string"?R:"";return m.includes("icon")?f(Ee,{title:d===!1?"":R,children:f(Je,{ref:A,className:"".concat(O,"-edit"),onClick:ee,"aria-label":I,children:o||f(rr,{role:"button"})})},"edit"):null}},Dt=function(){if(!!xe){var o=q.tooltips,d=q.icon,R=qe(o),I=qe(d),ae=se?pe(R[1],L.copied):pe(R[0],L.copy),At=se?L.copied:L.copy,Ht=typeof ae=="string"?ae:At;return f(Ee,{title:ae,children:f(Je,{className:ye("".concat(O,"-copy"),se&&"".concat(O,"-copy-success")),onClick:ct,"aria-label":Ht,children:se?pe(I[1],f(Xt,{}),!0):pe(I[0],f(Zt,{}),!0)})},"copy")}},jt=function(o){return[o&&Mt(),zt(),Dt()]},Kt=function(o){return[o&&f("span",{"aria-hidden":!0,children:_r},"ellipsis"),x.suffix,jt(o)]};return f(Gt,{onResize:It,disabled:!M||z,children:function(u){var o;return f(Rr,{tooltipProps:J,enabledEllipsis:M,isEllipsis:Ue,children:f(it,{className:ye((o={},G(o,"".concat(O,"-").concat(p),p),G(o,"".concat(O,"-disabled"),C),G(o,"".concat(O,"-ellipsis"),F),G(o,"".concat(O,"-single-line"),M&&te===1),G(o,"".concat(O,"-ellipsis-single-line"),Ot),G(o,"".concat(O,"-ellipsis-multiple-line"),ue),o),v),prefixCls:s,style:D(D({},c),{WebkitLineClamp:ue?te:void 0}),component:$,ref:Ze(u,H,t),direction:K,onClick:m.includes("text")?ee:void 0,"aria-label":de==null?void 0:de.toString(),title:_,...Q,children:f(wr,{enabledMeasure:M&&!z,text:l,rows:te,width:$t,fontSize:kt,onEllipsis:Lt,children:function(d,R){var I=d;d.length&&R&&de&&(I=f("span",{"aria-hidden":!0,children:I},"show-content"));var ae=$r(e,ge(Se,{children:[I,Kt(R)]}));return ae}})})})}})});const be=Pr;var kr=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},Nr=i.exports.forwardRef(function(e,t){var n=e.ellipsis,r=e.rel,a=kr(e,["ellipsis","rel"]),s=D(D({},a),{rel:r===void 0&&a.target==="_blank"?"noopener noreferrer":r});return delete s.navigate,f(be,{...s,ref:t,ellipsis:!!n,component:"a"})});const Ir=Nr;var Lr=i.exports.forwardRef(function(e,t){return f(be,{ref:t,...e,component:"div"})});const Mr=Lr;var zr=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},Dr=function(t,n){var r=t.ellipsis,a=zr(t,["ellipsis"]),s=i.exports.useMemo(function(){return r&&oe(r)==="object"?et(r,["expandable","rows"]):r},[r]);return f(be,{ref:n,...a,ellipsis:s,component:"span"})};const jr=i.exports.forwardRef(Dr);var Kr=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},Ar=Wt(1,2,3,4,5),Hr=i.exports.forwardRef(function(e,t){var n=e.level,r=n===void 0?1:n,a=Kr(e,["level"]),s;return Ar.includes(r)?s="h".concat(r):s="h1",f(be,{ref:t,...a,component:s})});const Ur=Hr;var ie=it;ie.Text=jr;ie.Link=Ir;ie.Title=Ur;ie.Paragraph=Mr;const Wr=ie;export{Wr as T};