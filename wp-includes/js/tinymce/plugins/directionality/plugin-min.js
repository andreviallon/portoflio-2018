!function(){var t={},n=function(t){for(var n=o(t),e=t.split("."),i=Function("return this;")(),r=0;r<e.length-1;++r)void 0===i[e[r]]&&(i[e[r]]={}),i=i[e[r]];i[e[e.length-1]]=n},e=function(n){for(var e=t[n],i=e.deps,r=e.defn,l=i.length,c=new Array(l),u=0;u<l;++u)c[u]=o(i[u]);var d=r.apply(null,c);if(void 0===d)throw"module ["+n+"] returned undefined";e.instance=d},i=function(n,e,i){if("string"!=typeof n)throw"module id must be a string";if(void 0===e)throw"no dependencies for "+n;if(void 0===i)throw"no definition function for "+n;t[n]={deps:e,defn:i,instance:void 0}},o=function(n){var i=t[n];if(void 0===i)throw"module ["+n+"] was undefined";return void 0===i.instance&&e(n),i.instance},r=function(t,n){for(var e=t.length,i=new Array(e),r=0;r<e;++r)i.push(o(t[r]));n.apply(null,n)};({}).bolt={module:{api:{define:i,require:r,demand:o}}};var l=i,c=r,u=o;(function(t,n){l(t,[],function(){return n})})("global!tinymce.util.Tools.resolve",tinymce.util.Tools.resolve),l("tinymce.core.PluginManager",["global!tinymce.util.Tools.resolve"],function(t){return t("tinymce.PluginManager")}),l("tinymce.core.util.Tools",["global!tinymce.util.Tools.resolve"],function(t){return t("tinymce.util.Tools")}),l("tinymce.plugins.directionality.Plugin",["tinymce.core.PluginManager","tinymce.core.util.Tools"],function(t,n){return t.add("directionality",function(t){function e(e){var i=t.dom,o,r=t.selection.getSelectedBlocks();r.length&&(o=i.getAttrib(r[0],"dir"),n.each(r,function(t){i.getParent(t.parentNode,"*[dir='"+e+"']",i.getRoot())||(o!=e?i.setAttrib(t,"dir",e):i.setAttrib(t,"dir",null))}),t.nodeChanged())}function i(t){var e=[];return n.each("h1 h2 h3 h4 h5 h6 div p".split(" "),function(n){e.push(n+"[dir="+t+"]")}),e.join(",")}t.addCommand("mceDirectionLTR",function(){e("ltr")}),t.addCommand("mceDirectionRTL",function(){e("rtl")}),t.addButton("ltr",{title:"Left to right",cmd:"mceDirectionLTR",stateSelector:i("ltr")}),t.addButton("rtl",{title:"Right to left",cmd:"mceDirectionRTL",stateSelector:i("rtl")})}),function(){}}),o("tinymce.plugins.directionality.Plugin")()}();