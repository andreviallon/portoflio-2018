!function($,e){var t=e.customize;t.HeaderTool={},t.HeaderTool.ImageModel=Backbone.Model.extend({defaults:function(){return{header:{attachment_id:0,url:"",timestamp:_.now(),thumbnail_url:""},choice:"",selected:!1,random:!1}},initialize:function(){this.on("hide",this.hide,this)},hide:function(){this.set("choice",""),t("header_image").set("remove-header"),t("header_image_data").set("remove-header")},destroy:function(){var i=this.get("header"),a=t.HeaderTool.currentHeader.get("header").attachment_id;a&&i.attachment_id===a&&t.HeaderTool.currentHeader.trigger("hide"),e.ajax.post("custom-header-remove",{nonce:_wpCustomizeHeader.nonces.remove,wp_customize:"on",theme:t.settings.theme.stylesheet,attachment_id:i.attachment_id}),this.trigger("destroy",this,this.collection)},save:function(){this.get("random")?(t("header_image").set(this.get("header").random),t("header_image_data").set(this.get("header").random)):this.get("header").defaultName?(t("header_image").set(this.get("header").url),t("header_image_data").set(this.get("header").defaultName)):(t("header_image").set(this.get("header").url),t("header_image_data").set(this.get("header"))),t.HeaderTool.combinedList.trigger("control:setImage",this)},importImage:function(){var i=this.get("header");void 0!==i.attachment_id&&e.ajax.post("custom-header-add",{nonce:_wpCustomizeHeader.nonces.add,wp_customize:"on",theme:t.settings.theme.stylesheet,attachment_id:i.attachment_id})},shouldBeCropped:function(){return(!0!==this.get("themeFlexWidth")||!0!==this.get("themeFlexHeight"))&&((!0!==this.get("themeFlexWidth")||this.get("themeHeight")!==this.get("imageHeight"))&&((!0!==this.get("themeFlexHeight")||this.get("themeWidth")!==this.get("imageWidth"))&&((this.get("themeWidth")!==this.get("imageWidth")||this.get("themeHeight")!==this.get("imageHeight"))&&!(this.get("imageWidth")<=this.get("themeWidth")))))}}),t.HeaderTool.ChoiceList=Backbone.Collection.extend({model:t.HeaderTool.ImageModel,comparator:function(e){return-e.get("header").timestamp},initialize:function(){var e=t.HeaderTool.currentHeader.get("choice").replace(/^https?:\/\//,""),i=this.isRandomChoice(t.get().header_image);this.type||(this.type="uploaded"),void 0===this.data&&(this.data=_wpCustomizeHeader.uploads),i&&(e=t.get().header_image),this.on("control:setImage",this.setImage,this),this.on("control:removeImage",this.removeImage,this),this.on("add",this.maybeRemoveOldCrop,this),this.on("add",this.maybeAddRandomChoice,this),_.each(this.data,function(t,i){t.attachment_id||(t.defaultName=i),void 0===t.timestamp&&(t.timestamp=0),this.add({header:t,choice:t.url.split("/").pop(),selected:e===t.url.replace(/^https?:\/\//,"")},{silent:!0})},this),this.size()>0&&this.addRandomChoice(e)},maybeRemoveOldCrop:function(e){var t=e.get("header").attachment_id||!1,i;t&&(i=this.find(function(i){return i.cid!==e.cid&&i.get("header").attachment_id===t}))&&this.remove(i)},maybeAddRandomChoice:function(){1===this.size()&&this.addRandomChoice()},addRandomChoice:function(e){var t=RegExp(this.type).test(e),i="random-"+this.type+"-image";this.add({header:{timestamp:0,random:i,width:245,height:41},choice:i,random:!0,selected:t})},isRandomChoice:function(e){return/^random-(uploaded|default)-image$/.test(e)},shouldHideTitle:function(){return this.size()<2},setImage:function(e){this.each(function(e){e.set("selected",!1)}),e&&e.set("selected",!0)},removeImage:function(){this.each(function(e){e.set("selected",!1)})}}),t.HeaderTool.DefaultsList=t.HeaderTool.ChoiceList.extend({initialize:function(){this.type="default",this.data=_wpCustomizeHeader.defaults,t.HeaderTool.ChoiceList.prototype.initialize.apply(this)}})}(jQuery,window.wp);