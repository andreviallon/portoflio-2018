!function(u,e){function t(){function t(){return!i.implementation.hasFeature||i.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")}function n(){if(!f){if(void 0===u.twemoji){if(c>600)return;return u.clearTimeout(d),d=u.setTimeout(n,50),void c++}s=u.twemoji,f=!0,o&&new o(function(u){for(var e=u.length,t,n,o,i;e--;){if(t=u[e].addedNodes,n=u[e].removedNodes,1===(o=t.length)&&1===n.length&&3===t[0].nodeType&&"IMG"===n[0].nodeName&&t[0].data===n[0].alt&&"load-failed"===n[0].getAttribute("data-error"))return;for(;o--;){if(i=t[o],3===i.nodeType){if(!i.parentNode)continue;if(l)for(;i.nextSibling&&3===i.nextSibling.nodeType;)i.nodeValue=i.nodeValue+i.nextSibling.nodeValue,i.parentNode.removeChild(i.nextSibling);i=i.parentNode}!i||1!==i.nodeType||i.className&&"string"==typeof i.className&&-1!==i.className.indexOf("wp-exclude-emoji")||a(i.textContent)&&r(i)}}}).observe(i.body,{childList:!0,subtree:!0}),r(i.body)}}function a(u){var e=/[\u203C\u2049\u20E3\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2300\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638\u2639\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692\u2693\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753\u2754\u2755\u2757\u2763\u2764\u2795\u2796\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05\u2B06\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]/,t=/[\uDC00-\uDFFF]/;return!!u&&(t.test(u)||e.test(u))}function r(u,n){var a;return!e.supports.everything&&s&&u&&("string"==typeof u||u.childNodes&&u.childNodes.length)?(n=n||{},a={base:t()?e.svgUrl:e.baseUrl,ext:t()?e.svgExt:e.ext,className:n.className||"emoji",callback:function(u,t){switch(u){case"a9":case"ae":case"2122":case"2194":case"2660":case"2663":case"2665":case"2666":return!1}return!(e.supports.everythingExceptFlag&&!/^1f1(?:e[6-9a-f]|f[0-9a-f])-1f1(?:e[6-9a-f]|f[0-9a-f])$/.test(u)&&!/^(1f3f3-fe0f-200d-1f308|1f3f4-200d-2620-fe0f)$/.test(u))&&"".concat(t.base,u,t.ext)},onerror:function(){s.parentNode&&(this.setAttribute("data-error","load-failed"),s.parentNode.replaceChild(i.createTextNode(s.alt),s))}},"object"==typeof n.imgAttr&&(a.attributes=function(){return n.imgAttr}),s.parse(u,a)):u}var o=u.MutationObserver||u.WebKitMutationObserver||u.MozMutationObserver,i=u.document,s,d,f=!1,c=0,l=u.navigator.userAgent.indexOf("Trident/7.0")>0;return e&&(e.DOMReady?n():e.readyCallback=n),{parse:r,test:a}}u.wp=u.wp||{},u.wp.emoji=new t}(window,window._wpemojiSettings);