!function(e,t,a){function r(e,t){var a=String.fromCharCode;d.clearRect(0,0,l.width,l.height),d.fillText(a.apply(this,e),0,0);var r=l.toDataURL();return d.clearRect(0,0,l.width,l.height),d.fillText(a.apply(this,t),0,0),r===l.toDataURL()}function n(e){var t;if(!d||!d.fillText)return!1;switch(d.textBaseline="top",d.font="600 32px Arial",e){case"flag":return!(t=r([55356,56826,55356,56819],[55356,56826,8203,55356,56819]))&&!(t=r([55356,57332,56128,56423,56128,56418,56128,56421,56128,56430,56128,56423,56128,56447],[55356,57332,8203,56128,56423,8203,56128,56418,8203,56128,56421,8203,56128,56430,8203,56128,56423,8203,56128,56447]));case"emoji":return!(t=r([55358,56794,8205,9794,65039],[55358,56794,8203,9794,65039]))}return!1}function o(e){var a=t.createElement("script");a.src=e,a.defer=a.type="text/javascript",t.getElementsByTagName("head")[0].appendChild(a)}var i,p,s,c,l=t.createElement("canvas"),d=l.getContext&&l.getContext("2d");for(c=Array("flag","emoji"),a.supports={everything:!0,everythingExceptFlag:!0},s=0;s<c.length;s++)a.supports[c[s]]=n(c[s]),a.supports.everything=a.supports.everything&&a.supports[c[s]],"flag"!==c[s]&&(a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&a.supports[c[s]]);a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&!a.supports.flag,a.DOMReady=!1,a.readyCallback=function(){a.DOMReady=!0},a.supports.everything||(p=function(){a.readyCallback()},t.addEventListener?(t.addEventListener("DOMContentLoaded",p,!1),e.addEventListener("load",p,!1)):(e.attachEvent("onload",p),t.attachEvent("onreadystatechange",function(){"complete"===t.readyState&&a.readyCallback()})),i=a.source||{},i.concatemoji?o(i.concatemoji):i.wpemoji&&i.twemoji&&(o(i.twemoji),o(i.wpemoji)))}(window,document,window._wpemojiSettings);