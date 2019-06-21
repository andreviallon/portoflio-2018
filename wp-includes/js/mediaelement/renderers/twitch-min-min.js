!function e(t,n,r){function i(s,o){if(!n[s]){if(!t[s]){var u="function"==typeof require&&require;if(!o&&u)return u(s,!0);if(a)return a(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var c=n[s]={exports:{}};t[s][0].call(c.exports,function(e){var n;return i(t[s][1][e]||e)},c,c.exports,e,t,n,r)}return n[s].exports}for(var a="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(e,t,n){"use strict";var r={promise:null,load:function e(t){"undefined"!=typeof Twitch?r.promise=new Promise(function(e){e()}).then(function(){r._createPlayer(t)}):(r.promise=r.promise||mejs.Utils.loadScript("https://player.twitch.tv/js/embed/v1.js"),r.promise.then(function(){r._createPlayer(t)}))},_createPlayer:function e(t){var n=new Twitch.Player(t.id,t);window["__ready__"+t.id](n)},getTwitchId:function e(t){var n="";return t.indexOf("?")>0?""===(n=r.getTwitchIdFromParam(t))&&(n=r.getTwitchIdFromUrl(t)):n=r.getTwitchIdFromUrl(t),n},getTwitchIdFromParam:function e(t){if(null==t||!t.trim().length)return null;for(var n,r=t.split("?")[1].split("&"),i="",a=0,s=r.length;a<s;a++){var o=r[a].split("=");if(~o[0].indexOf("channel")){i=o[1];break}if(~o[0].indexOf("video")){i="v"+o[1];break}}return i},getTwitchIdFromUrl:function e(t){if(null==t||!t.trim().length)return null;var n=(t=t.split("?")[0]).substring(t.lastIndexOf("/")+1);return/^\d+$/i.test(n)?"v"+n:n},getTwitchType:function e(t){return/^v\d+/i.test(t)?"video":"channel"}},i={name:"twitch_iframe",options:{prefix:"twitch_iframe"},canPlayType:function e(t){return~["video/twitch","video/x-twitch"].indexOf(t.toLowerCase())},create:function e(t,n,i){function a(e){for(var n=0,r=e.length;n<r;n++){var i=mejs.Utils.createEvent(e[n],s);t.dispatchEvent(i)}}var s={},o=[],u=4,l=r.getTwitchId(i[0].src),c=null,d=!0,h=!1,f=!1,p=1,m=1/0,v=0;s.options=n,s.id=t.id+"_"+n.prefix,s.mediaElement=t;for(var g=mejs.html5media.properties,y=function e(n){var i=""+n.substring(0,1).toUpperCase()+n.substring(1);s["get"+i]=function(){if(null!==c){var e=null;switch(n){case"currentTime":return v=c.getCurrentTime();case"duration":return m=c.getDuration();case"volume":return p=c.getVolume();case"paused":return d=c.isPaused();case"ended":return h=c.getEnded();case"muted":return c.getMuted();case"buffered":return{start:function e(){return 0},end:function e(){return 0},length:1};case"src":return"channel"===r.getTwitchType(l)?c.getChannel():c.getVideo();case"readyState":return 4}return null}return null},s["set"+i]=function(e){if(null!==c)switch(n){case"src":var i="string"==typeof e?e:e[0].src,a=r.getTwitchId(i);"channel"===r.getTwitchType(l)?c.setChannel(a):c.setVideo(a);break;case"currentTime":c.seek(e),setTimeout(function(){var e=mejs.Utils.createEvent("timeupdate",s);t.dispatchEvent(e)},50);break;case"muted":c.setMuted(e),setTimeout(function(){var e=mejs.Utils.createEvent("volumechange",s);t.dispatchEvent(e)},50);break;case"volume":p=e,c.setVolume(e),setTimeout(function(){var e=mejs.Utils.createEvent("volumechange",s);t.dispatchEvent(e)},50);break;case"readyState":var u=mejs.Utils.createEvent("canplay",s);t.dispatchEvent(u);break;default:break}else o.push({type:"set",propName:n,value:e})}},w=0,T=g.length;w<T;w++)y(g[w]);for(var E=mejs.html5media.methods,N=function e(t){s[t]=function(){if(null!==c)switch(t){case"play":return d=!1,c.play();case"pause":return d=!0,c.pause();case"load":return null}else o.push({type:"call",methodName:t})}},b=0,P=E.length;b<P;b++)N(E[b]);window["__ready__"+s.id]=function(e){if(t.twitchPlayer=c=e,o.length)for(var n=0,r=o.length;n<r;n++){var i=o[n];if("set"===i.type){var u=i.propName,l=""+u.substring(0,1).toUpperCase()+u.substring(1);s["set"+l](i.value)}else"call"===i.type&&s[i.methodName]()}var p=document.getElementById(s.id).firstChild;p.style.width="100%",p.style.height="100%";for(var m=["mouseover","mouseout"],v=function e(n){var r=mejs.Utils.createEvent(n.type,s);t.dispatchEvent(r)},g=0,y=m.length;g<y;g++)p.addEventListener(m[g],v,!1);var w=void 0;c.addEventListener(Twitch.Player.READY,function(){d=!1,h=!1,a(["rendererready","loadedmetadata","loadeddata","canplay"])}),c.addEventListener(Twitch.Player.PLAY,function(){f||(f=!0),d=!1,h=!1,a(["play","playing","progress"]),w=setInterval(function(){c.getCurrentTime(),a(["timeupdate"])},250)}),c.addEventListener(Twitch.Player.PAUSE,function(){d=!0,h=!1,c.getEnded()||a(["pause"])}),c.addEventListener(Twitch.Player.ENDED,function(){d=!0,h=!0,a(["ended"]),clearInterval(w),f=!1,w=null})};var U=t.originalNode.height,_=t.originalNode.width,j=document.createElement("div"),x=r.getTwitchType(l),I={id:s.id,width:_,height:U,playsinline:!1,autoplay:t.originalNode.autoplay,muted:t.originalNode.muted};return I[x]=l,j.id=s.id,j.style.width="100%",j.style.height="100%",t.originalNode.parentNode.insertBefore(j,t.originalNode),t.originalNode.style.display="none",t.originalNode.autoplay=!1,s.setSize=function(e,t){null===r||isNaN(e)||isNaN(t)||(j.setAttribute("width",e),j.setAttribute("height",t))},s.hide=function(){s.pause(),j.style.display="none"},s.show=function(){j.style.display=""},s.destroy=function(){},r.load(I),s}};mejs.Utils.typeChecks.push(function(e){return/\/\/(www|player).twitch.tv/i.test(e)?"video/x-twitch":null}),mejs.Renderers.add(i)},{}]},{},[1]);