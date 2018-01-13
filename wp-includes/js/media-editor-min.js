!function($,e){var t={};wp.media.coerce=function(t,i){return e.isUndefined(t[i])&&!e.isUndefined(this.defaults[i])?t[i]=this.defaults[i]:"true"===t[i]?t[i]=!0:"false"===t[i]&&(t[i]=!1),t[i]},wp.media.string={props:function(t,i){var n,a,d,r,s=wp.media.view.settings.defaultProps;return t=t?e.clone(t):{},i&&i.type&&(t.type=i.type),"image"===t.type&&(t=e.defaults(t||{},{align:s.align||getUserSetting("align","none"),size:s.size||getUserSetting("imgsize","medium"),url:"",classes:[]})),i?(t.title=t.title||i.title,n=t.link||s.link||getUserSetting("urlbutton","file"),"file"===n||"embed"===n?a=i.url:"post"===n?a=i.link:"custom"===n&&(a=t.linkUrl),t.linkUrl=a||"","image"===i.type?(t.classes.push("wp-image-"+i.id),r=i.sizes,d=r&&r[t.size]?r[t.size]:i,e.extend(t,e.pick(i,"align","caption","alt"),{width:d.width,height:d.height,src:d.url,captionId:"attachment_"+i.id})):"video"===i.type||"audio"===i.type?e.extend(t,e.pick(i,"title","type","icon","mime")):(t.title=t.title||i.filename,t.rel=t.rel||"attachment wp-att-"+i.id),t):t},link:function(e,t){var i;return e=wp.media.string.props(e,t),i={tag:"a",content:e.title,attrs:{href:e.linkUrl}},e.rel&&(i.attrs.rel=e.rel),wp.html.string(i)},audio:function(e,t){return wp.media.string._audioVideo("audio",e,t)},video:function(e,t){return wp.media.string._audioVideo("video",e,t)},_audioVideo:function(t,i,n){var a,d,r;return i=wp.media.string.props(i,n),"embed"!==i.link?wp.media.string.link(i):(a={},"video"===t&&(n.image&&-1===n.image.src.indexOf(n.icon)&&(a.poster=n.image.src),n.width&&(a.width=n.width),n.height&&(a.height=n.height)),r=n.filename.split(".").pop(),e.contains(wp.media.view.settings.embedExts,r)?(a[r]=n.url,d=wp.shortcode.string({tag:t,attrs:a})):wp.media.string.link(i))},image:function(t,i){var n={},a,d,r,s;return t.type="image",t=wp.media.string.props(t,i),d=t.classes||[],n.src=e.isUndefined(i)?t.url:i.url,e.extend(n,e.pick(t,"width","height","alt")),t.align&&!t.caption&&d.push("align"+t.align),t.size&&d.push("size-"+t.size),n.class=e.compact(d).join(" "),a={tag:"img",attrs:n,single:!0},t.linkUrl&&(a={tag:"a",attrs:{href:t.linkUrl},content:a}),s=wp.html.string(a),t.caption&&(r={},n.width&&(r.width=n.width),t.captionId&&(r.id=t.captionId),t.align&&(r.align="align"+t.align),s=wp.shortcode.string({tag:"caption",attrs:r,content:s+" "+t.caption})),s}},wp.media.embed={coerce:wp.media.coerce,defaults:{url:"",width:"",height:""},edit:function(t,i){var n,a={},d;return i?a.url=t.replace(/<[^>]+>/g,""):(d=wp.shortcode.next("embed",t).shortcode,a=e.defaults(d.attrs.named,this.defaults),d.content&&(a.url=d.content)),n=wp.media({frame:"post",state:"embed",metadata:a})},shortcode:function(t){var i=this,n;return e.each(this.defaults,function(e,n){t[n]=i.coerce(t,n),e===t[n]&&delete t[n]}),n=t.url,delete t.url,new wp.shortcode({tag:"embed",attrs:t,content:n})}},wp.media.collection=function(t){var i={};return e.extend({coerce:wp.media.coerce,attachments:function(t){var n=t.string(),a=i[n],d,r,s,o,l=this;return delete i[n],a||(d=e.defaults(t.attrs.named,this.defaults),r=e.pick(d,"orderby","order"),r.type=this.type,r.perPage=-1,void 0!==d.orderby&&(d._orderByField=d.orderby),"rand"===d.orderby&&(d._orderbyRandom=!0),d.orderby&&!/^menu_order(?: ID)?$/i.test(d.orderby)||(r.orderby="menuOrder"),d.ids?(r.post__in=d.ids.split(","),r.orderby="post__in"):d.include&&(r.post__in=d.include.split(",")),d.exclude&&(r.post__not_in=d.exclude.split(",")),r.post__in||(r.uploadedTo=d.id),o=e.omit(d,"id","ids","include","exclude","orderby","order"),e.each(this.defaults,function(e,t){o[t]=l.coerce(o,t)}),s=wp.media.query(r),s[this.tag]=new Backbone.Model(o),s)},shortcode:function(t){var n=t.props.toJSON(),a=e.pick(n,"orderby","order"),d,r;return t.type&&(a.type=t.type,delete t.type),t[this.tag]&&e.extend(a,t[this.tag].toJSON()),a.ids=t.pluck("id"),n.uploadedTo&&(a.id=n.uploadedTo),delete a.orderby,a._orderbyRandom?a.orderby="rand":a._orderByField&&"rand"!=a._orderByField&&(a.orderby=a._orderByField),delete a._orderbyRandom,delete a._orderByField,a.ids&&"post__in"===a.orderby&&delete a.orderby,a=this.setDefaults(a),d=new wp.shortcode({tag:this.tag,attrs:a,type:"single"}),r=new wp.media.model.Attachments(t.models,{props:n}),r[this.tag]=t[this.tag],i[d.string()]=r,d},edit:function(t){var i=wp.shortcode.next(this.tag,t),n=this.defaults.id,a,d,r;if(i&&i.content===t)return i=i.shortcode,e.isUndefined(i.get("id"))&&!e.isUndefined(n)&&i.set("id",n),a=this.attachments(i),d=new wp.media.model.Selection(a.models,{props:a.props.toJSON(),multiple:!0}),d[this.tag]=a[this.tag],d.more().done(function(){d.props.set({query:!1}),d.unmirror(),d.props.unset("orderby")}),this.frame&&this.frame.dispose(),r=i.attrs.named.type&&"video"===i.attrs.named.type?"video-"+this.tag+"-edit":this.tag+"-edit",this.frame=wp.media({frame:"post",state:r,title:this.editTitle,editing:!0,multiple:!0,selection:d}).open(),this.frame},setDefaults:function(t){var i=this;return e.each(this.defaults,function(e,n){t[n]=i.coerce(t,n),e===t[n]&&delete t[n]}),t}},t)},wp.media._galleryDefaults={itemtag:"dl",icontag:"dt",captiontag:"dd",columns:"3",link:"post",size:"thumbnail",order:"ASC",id:wp.media.view.settings.post&&wp.media.view.settings.post.id,orderby:"menu_order ID"},wp.media.view.settings.galleryDefaults?wp.media.galleryDefaults=e.extend({},wp.media._galleryDefaults,wp.media.view.settings.galleryDefaults):wp.media.galleryDefaults=wp.media._galleryDefaults,wp.media.gallery=new wp.media.collection({tag:"gallery",type:"image",editTitle:wp.media.view.l10n.editGalleryTitle,defaults:wp.media.galleryDefaults,setDefaults:function(t){var i=this,n=!e.isEqual(wp.media.galleryDefaults,wp.media._galleryDefaults);return e.each(this.defaults,function(e,a){t[a]=i.coerce(t,a),e!==t[a]||n&&e!==wp.media._galleryDefaults[a]||delete t[a]}),t}}),wp.media.featuredImage={get:function(){return wp.media.view.settings.post.featuredImageId},set:function(e){var t=wp.media.view.settings;t.post.featuredImageId=e,wp.media.post("get-post-thumbnail-html",{post_id:t.post.id,thumbnail_id:t.post.featuredImageId,_wpnonce:t.post.nonce}).done(function(e){if("0"==e)return void window.alert(window.setPostThumbnailL10n.error);$(".inside","#postimagediv").html(e)})},remove:function(){wp.media.featuredImage.set(-1)},frame:function(){return this._frame?(wp.media.frame=this._frame,this._frame):(this._frame=wp.media({state:"featured-image",states:[new wp.media.controller.FeaturedImage,new wp.media.controller.EditImage]}),this._frame.on("toolbar:create:featured-image",function(e){this.createSelectToolbar(e,{text:wp.media.view.l10n.setFeaturedImage})},this._frame),this._frame.on("content:render:edit-image",function(){var e=this.state("featured-image").get("selection"),t=new wp.media.view.EditImage({model:e.single(),controller:this}).render();this.content.set(t),t.loadEditor()},this._frame),this._frame.state("featured-image").on("select",this.select),this._frame)},select:function(){var e=this.get("selection").single();wp.media.view.settings.post.featuredImageId&&wp.media.featuredImage.set(e?e.id:-1)},init:function(){$("#postimagediv").on("click","#set-post-thumbnail",function(e){e.preventDefault(),e.stopPropagation(),wp.media.featuredImage.frame().open()}).on("click","#remove-post-thumbnail",function(){return wp.media.featuredImage.remove(),!1})}},$(wp.media.featuredImage.init),wp.media.editor={insert:function(t){var i,n,a=!e.isUndefined(window.tinymce),d=!e.isUndefined(window.QTags);if(n=this.activeEditor?window.wpActiveEditor=this.activeEditor:window.wpActiveEditor,window.send_to_editor)return window.send_to_editor.apply(this,arguments);if(n)a&&(i=tinymce.get(n));else if(a&&tinymce.activeEditor)i=tinymce.activeEditor,n=window.wpActiveEditor=i.id;else if(!d)return!1;if(i&&!i.isHidden()?i.execCommand("mceInsertContent",!1,t):d?QTags.insertContent(t):document.getElementById(n).value+=t,window.tb_remove)try{window.tb_remove()}catch(e){}},add:function(i,n){var a=this.get(i);return a||(a=t[i]=wp.media(e.defaults(n||{},{frame:"post",state:"insert",title:wp.media.view.l10n.addMedia,multiple:!0})),a.on("insert",function(t){var i=a.state();(t=t||i.get("selection"))&&$.when.apply($,t.map(function(e){var t=i.display(e).toJSON();return this.send.attachment(t,e.toJSON())},this)).done(function(){wp.media.editor.insert(e.toArray(arguments).join("\n\n"))})},this),a.state("gallery-edit").on("update",function(e){this.insert(wp.media.gallery.shortcode(e).string())},this),a.state("playlist-edit").on("update",function(e){this.insert(wp.media.playlist.shortcode(e).string())},this),a.state("video-playlist-edit").on("update",function(e){this.insert(wp.media.playlist.shortcode(e).string())},this),a.state("embed").on("select",function(){var t=a.state(),i=t.get("type"),n=t.props.toJSON();n.url=n.url||"","link"===i?(e.defaults(n,{linkText:n.url,linkUrl:n.url}),this.send.link(n).done(function(e){wp.media.editor.insert(e)})):"image"===i&&(e.defaults(n,{title:n.url,linkUrl:"",align:"none",link:"none"}),"none"===n.link?n.linkUrl="":"file"===n.link&&(n.linkUrl=n.url),this.insert(wp.media.string.image(n)))},this),a.state("featured-image").on("select",wp.media.featuredImage.select),a.setState(a.options.state),a)},id:function(t){return t||(t=window.wpActiveEditor,t||e.isUndefined(window.tinymce)||!tinymce.activeEditor||(t=tinymce.activeEditor.id),t=t||"")},get:function(e){return e=this.id(e),t[e]},remove:function(e){e=this.id(e),delete t[e]},send:{attachment:function(t,i){var n=i.caption,a,d;return wp.media.view.settings.captions||delete i.caption,t=wp.media.string.props(t,i),a={id:i.id,post_content:i.description,post_excerpt:n},t.linkUrl&&(a.url=t.linkUrl),"image"===i.type?(d=wp.media.string.image(t),e.each({align:"align",size:"image-size",alt:"image_alt"},function(e,i){t[i]&&(a[e]=t[i])})):"video"===i.type?d=wp.media.string.video(t,i):"audio"===i.type?d=wp.media.string.audio(t,i):(d=wp.media.string.link(t),a.post_title=t.title),wp.media.post("send-attachment-to-editor",{nonce:wp.media.view.settings.nonce.sendToEditor,attachment:a,html:d,post_id:wp.media.view.settings.post.id})},link:function(e){return wp.media.post("send-link-to-editor",{nonce:wp.media.view.settings.nonce.sendToEditor,src:e.linkUrl,link_text:e.linkText,html:wp.media.string.link(e),post_id:wp.media.view.settings.post.id})}},open:function(e,t){var i;return t=t||{},e=this.id(e),this.activeEditor=e,i=this.get(e),(!i||i.options&&t.state!==i.options.state)&&(i=this.add(e,t)),wp.media.frame=i,i.open()},init:function(){$(document.body).on("click.add-media-button",".insert-media",function(e){var t=$(e.currentTarget),i=t.data("editor"),n={frame:"post",state:"insert",title:wp.media.view.l10n.addMedia,multiple:!0};e.preventDefault(),t.hasClass("gallery")&&(n.state="gallery",n.title=wp.media.view.l10n.createGalleryTitle),wp.media.editor.open(i,n)}),(new wp.media.view.EditorUploader).render()}},e.bindAll(wp.media.editor,"open"),$(wp.media.editor.init)}(jQuery,_);