var wpLink;!function($,e,t){function n(){return o||i.dom.getParent(i.selection.getNode(),"a[href]")}var i,a,r,s,l,o,c=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/i,u=/^(https?|ftp):\/\/[A-Z0-9.-]+\.[A-Z]{2,63}[^ "]*$/i,h={},p={},d="ontouchend"in document;wpLink={timeToTriggerRiver:150,minRiverAJAXDuration:200,riverBottomThreshold:5,keySensitivity:100,lastSearch:"",textarea:"",modalOpen:!1,init:function(){h.wrap=$("#wp-link-wrap"),h.dialog=$("#wp-link"),h.backdrop=$("#wp-link-backdrop"),h.submit=$("#wp-link-submit"),h.close=$("#wp-link-close"),h.text=$("#wp-link-text"),h.url=$("#wp-link-url"),h.nonce=$("#_ajax_linking_nonce"),h.openInNewTab=$("#wp-link-target"),h.search=$("#wp-link-search"),p.search=new r($("#search-results")),p.recent=new r($("#most-recent-results")),p.elements=h.dialog.find(".query-results"),h.queryNotice=$("#query-notice-message"),h.queryNoticeTextDefault=h.queryNotice.find(".query-notice-default"),h.queryNoticeTextHint=h.queryNotice.find(".query-notice-hint"),h.dialog.keydown(wpLink.keydown),h.dialog.keyup(wpLink.keyup),h.submit.click(function(e){e.preventDefault(),wpLink.update()}),h.close.add(h.backdrop).add("#wp-link-cancel button").click(function(e){e.preventDefault(),wpLink.close()}),p.elements.on("river-select",wpLink.updateFields),h.search.on("focus.wplink",function(){h.queryNoticeTextDefault.hide(),h.queryNoticeTextHint.removeClass("screen-reader-text").show()}).on("blur.wplink",function(){h.queryNoticeTextDefault.show(),h.queryNoticeTextHint.addClass("screen-reader-text").hide()}),h.search.on("keyup input",function(){window.clearTimeout(a),a=window.setTimeout(function(){wpLink.searchInternalLinks()},500)}),h.url.on("paste",function(){setTimeout(wpLink.correctURL,0)}),h.url.on("blur",wpLink.correctURL)},correctURL:function(){var e=$.trim(h.url.val());e&&l!==e&&!/^(?:[a-z]+:|#|\?|\.|\/)/.test(e)&&(h.url.val("http://"+e),l=e)},open:function(e,t,n,a){var r,s=$(document.body);s.addClass("modal-open"),wpLink.modalOpen=!0,o=a,wpLink.range=null,e&&(window.wpActiveEditor=e),window.wpActiveEditor&&(this.textarea=$("#"+window.wpActiveEditor).get(0),void 0!==window.tinymce&&(s.append(h.backdrop,h.wrap),r=window.tinymce.get(window.wpActiveEditor),i=r&&!r.isHidden()?r:null),!wpLink.isMCE()&&document.selection&&(this.textarea.focus(),this.range=document.selection.createRange()),h.wrap.show(),h.backdrop.show(),wpLink.refresh(t,n),$(document).trigger("wplink-open",h.wrap))},isMCE:function(){return i&&!i.isHidden()},refresh:function(e,t){var n="";p.search.refresh(),p.recent.refresh(),wpLink.isMCE()?wpLink.mceRefresh(e,t):(h.wrap.hasClass("has-text-field")||h.wrap.addClass("has-text-field"),document.selection?n=document.selection.createRange().text||t||"":void 0!==this.textarea.selectionStart&&this.textarea.selectionStart!==this.textarea.selectionEnd&&(t=this.textarea.value.substring(this.textarea.selectionStart,this.textarea.selectionEnd)||t||""),h.text.val(t),wpLink.setDefaultValues()),d?h.url.focus().blur():window.setTimeout(function(){h.url[0].select(),h.url.focus()}),p.recent.ul.children().length||p.recent.ajax(),l=h.url.val().replace(/^http:\/\//,"")},hasSelectedText:function(e){var t,n,a,r=i.selection.getContent();if(/</.test(r)&&(!/^<a [^>]+>[^<]+<\/a>$/.test(r)||-1===r.indexOf("href=")))return!1;if(e){if(n=e.childNodes,0===n.length)return!1;for(a=n.length-1;a>=0;a--)if(t=n[a],3!=t.nodeType&&!window.tinymce.dom.BookmarkManager.isBookmarkNode(t))return!1}return!0},mceRefresh:function(t,a){var r,s,l=n(),o=this.hasSelectedText(l);l?(r=l.textContent||l.innerText,s=i.dom.getAttrib(l,"href"),$.trim(r)||(r=a||""),t&&(u.test(t)||c.test(t))&&(s=t),"_wp_link_placeholder"!==s?(h.url.val(s),h.openInNewTab.prop("checked","_blank"===i.dom.getAttrib(l,"target")),h.submit.val(e.update)):this.setDefaultValues(r),t&&t!==s?h.search.val(t):h.search.val(""),window.setTimeout(function(){wpLink.searchInternalLinks()})):(r=i.selection.getContent({format:"text"})||a||"",this.setDefaultValues(r)),o?(h.text.val(r),h.wrap.addClass("has-text-field")):(h.text.val(""),h.wrap.removeClass("has-text-field"))},close:function(e){$(document.body).removeClass("modal-open"),wpLink.modalOpen=!1,"noReset"!==e&&(wpLink.isMCE()?(i.plugins.wplink&&i.plugins.wplink.close(),i.focus()):(wpLink.textarea.focus(),wpLink.range&&(wpLink.range.moveToBookmark(wpLink.range.getBookmark()),wpLink.range.select()))),h.backdrop.hide(),h.wrap.hide(),l=!1,$(document).trigger("wplink-close",h.wrap)},getAttrs:function(){return wpLink.correctURL(),{href:$.trim(h.url.val()),target:h.openInNewTab.prop("checked")?"_blank":null}},buildHtml:function(e){var t='<a href="'+e.href+'"';return e.target&&(t+=' rel="noopener" target="'+e.target+'"'),t+">"},update:function(){wpLink.isMCE()?wpLink.mceUpdate():wpLink.htmlUpdate()},htmlUpdate:function(){var n,i,a,r,s,l,o,c=wpLink.textarea;if(c){n=wpLink.getAttrs(),i=h.text.val();var u=document.createElement("a");u.href=n.href,"javascript:"!==u.protocol&&"data:"!==u.protocol||(n.href=""),n.href&&(a=wpLink.buildHtml(n),document.selection&&wpLink.range?(c.focus(),wpLink.range.text=a+(i||wpLink.range.text)+"</a>",wpLink.range.moveToBookmark(wpLink.range.getBookmark()),wpLink.range.select(),wpLink.range=null):void 0!==c.selectionStart&&(r=c.selectionStart,s=c.selectionEnd,o=i||c.value.substring(r,s),a=a+o+"</a>",l=r+a.length,r!==s||o||(l-=4),c.value=c.value.substring(0,r)+a+c.value.substring(s,c.value.length),c.selectionStart=c.selectionEnd=l),wpLink.close(),c.focus(),$(c).trigger("change"),t.a11y.speak(e.linkInserted))}},mceUpdate:function(){var a=wpLink.getAttrs(),r,s,l,o,c=document.createElement("a");if(c.href=a.href,"javascript:"!==c.protocol&&"data:"!==c.protocol||(a.href=""),!a.href)return i.execCommand("unlink"),void wpLink.close();r=i.$(n()),i.undoManager.transact(function(){r.length||(i.execCommand("mceInsertLink",!1,{href:"_wp_link_placeholder","data-wp-temp-link":1}),r=i.$('a[data-wp-temp-link="1"]').removeAttr("data-wp-temp-link"),l=$.trim(r.text())),r.length?(h.wrap.hasClass("has-text-field")&&(s=h.text.val(),s?r.text(s):l||r.text(a.href)),a["data-wplink-edit"]=null,a["data-mce-href"]=null,r.attr(a)):i.execCommand("unlink")}),wpLink.close("noReset"),i.focus(),r.length&&(o=r.parent("#_mce_caret"),o.length&&o.before(r.removeAttr("data-mce-bogus")),i.selection.select(r[0]),i.selection.collapse(),i.plugins.wplink&&i.plugins.wplink.checkLink(r[0])),i.nodeChanged(),t.a11y.speak(e.linkInserted)},updateFields:function(e,t){h.url.val(t.children(".item-permalink").val())},getUrlFromSelection:function(e){return e||(this.isMCE()?e=i.selection.getContent({format:"text"}):document.selection&&wpLink.range?e=wpLink.range.text:void 0!==this.textarea.selectionStart&&(e=this.textarea.value.substring(this.textarea.selectionStart,this.textarea.selectionEnd))),e=$.trim(e),e&&c.test(e)?"mailto:"+e:e&&u.test(e)?e.replace(/&amp;|&#0?38;/gi,"&"):""},setDefaultValues:function(t){h.url.val(this.getUrlFromSelection(t)),h.search.val(""),wpLink.searchInternalLinks(),h.submit.val(e.save)},searchInternalLinks:function(){var e,t=h.search.val()||"";if(t.length>2){if(p.recent.hide(),p.search.show(),wpLink.lastSearch==t)return;wpLink.lastSearch=t,e=h.search.parent().find(".spinner").addClass("is-active"),p.search.change(t),p.search.ajax(function(){e.removeClass("is-active")})}else p.search.hide(),p.recent.show()},next:function(){p.search.next(),p.recent.next()},prev:function(){p.search.prev(),p.recent.prev()},keydown:function(e){var t,n;27===e.keyCode?(wpLink.close(),e.stopImmediatePropagation()):9===e.keyCode&&(n=e.target.id,"wp-link-submit"!==n||e.shiftKey?"wp-link-close"===n&&e.shiftKey&&(h.submit.focus(),e.preventDefault()):(h.close.focus(),e.preventDefault())),38!==e.keyCode&&40!==e.keyCode||(!document.activeElement||"link-title-field"!==document.activeElement.id&&"url-field"!==document.activeElement.id)&&(t=38===e.keyCode?"prev":"next",clearInterval(wpLink.keyInterval),wpLink[t](),wpLink.keyInterval=setInterval(wpLink[t],wpLink.keySensitivity),e.preventDefault())},keyup:function(e){38!==e.keyCode&&40!==e.keyCode||(clearInterval(wpLink.keyInterval),e.preventDefault())},delayedCallback:function(e,t){var n,i,a,r;return t?(setTimeout(function(){if(i)return e.apply(r,a);n=!0},t),function(){if(n)return e.apply(this,arguments);a=arguments,r=this,i=!0}):e}},r=function(e,t){var n=this;this.element=e,this.ul=e.children("ul"),this.contentHeight=e.children("#link-selector-height"),this.waiting=e.find(".river-waiting"),this.change(t),this.refresh(),$("#wp-link .query-results, #wp-link #link-selector").scroll(function(){n.maybeLoad()}),e.on("click","li",function(e){n.select($(this),e)})},$.extend(r.prototype,{refresh:function(){this.deselect(),this.visible=this.element.is(":visible")},show:function(){this.visible||(this.deselect(),this.element.show(),this.visible=!0)},hide:function(){this.element.hide(),this.visible=!1},select:function(e,t){var n,i,a,r;e.hasClass("unselectable")||e==this.selected||(this.deselect(),this.selected=e.addClass("selected"),n=e.outerHeight(),i=this.element.height(),a=e.position().top,r=this.element.scrollTop(),a<0?this.element.scrollTop(r+a):a+n>i&&this.element.scrollTop(r+a-i+n),this.element.trigger("river-select",[e,t,this]))},deselect:function(){this.selected&&this.selected.removeClass("selected"),this.selected=!1},prev:function(){if(this.visible){var e;this.selected&&(e=this.selected.prev("li"),e.length&&this.select(e))}},next:function(){if(this.visible){var e=this.selected?this.selected.next("li"):$("li:not(.unselectable):first",this.element);e.length&&this.select(e)}},ajax:function(e){var t=this,n=1==this.query.page?0:wpLink.minRiverAJAXDuration,i=wpLink.delayedCallback(function(n,i){t.process(n,i),e&&e(n,i)},n);this.query.ajax(i)},change:function(e){this.query&&this._search==e||(this._search=e,this.query=new s(e),this.element.scrollTop(0))},process:function(t,n){var i="",a=!0,r="",s=1==n.page;t?$.each(t,function(){r=a?"alternate":"",r+=this.title?"":" no-title",i+=r?'<li class="'+r+'">':"<li>",i+='<input type="hidden" class="item-permalink" value="'+this.permalink+'" />',i+='<span class="item-title">',i+=this.title?this.title:e.noTitle,i+='</span><span class="item-info">'+this.info+"</span></li>",a=!a}):s&&(i+='<li class="unselectable no-matches-found"><span class="item-title"><em>'+e.noMatchesFound+"</em></span></li>"),this.ul[s?"html":"append"](i)},maybeLoad:function(){var e=this,t=this.element,n=t.scrollTop()+t.height();!this.query.ready()||n<this.contentHeight.height()-wpLink.riverBottomThreshold||setTimeout(function(){var n=t.scrollTop(),i=n+t.height();!e.query.ready()||i<e.contentHeight.height()-wpLink.riverBottomThreshold||(e.waiting.addClass("is-active"),t.scrollTop(n+e.waiting.outerHeight()),e.ajax(function(){e.waiting.removeClass("is-active")}))},wpLink.timeToTriggerRiver)}}),s=function(e){this.page=1,this.allLoaded=!1,this.querying=!1,this.search=e},$.extend(s.prototype,{ready:function(){return!(this.querying||this.allLoaded)},ajax:function(e){var t=this,n={action:"wp-link-ajax",page:this.page,_ajax_linking_nonce:h.nonce.val()};this.search&&(n.search=this.search),this.querying=!0,$.post(window.ajaxurl,n,function(i){t.page++,t.querying=!1,t.allLoaded=!i,e(i,n)},"json")}}),$(document).ready(wpLink.init)}(jQuery,window.wpLinkL10n,window.wp);