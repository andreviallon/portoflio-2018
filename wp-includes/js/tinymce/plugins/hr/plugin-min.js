!function(){var n={},e=function(n){for(var e=o(n),i=n.split("."),t=Function("return this;")(),r=0;r<i.length-1;++r)void 0===t[i[r]]&&(t[i[r]]={}),t=t[i[r]];t[i[i.length-1]]=e},i=function(e){for(var i=n[e],t=i.deps,r=i.defn,l=t.length,u=new Array(l),d=0;d<l;++d)u[d]=o(t[d]);var a=r.apply(null,u);if(void 0===a)throw"module ["+e+"] returned undefined";i.instance=a},t=function(e,i,t){if("string"!=typeof e)throw"module id must be a string";if(void 0===i)throw"no dependencies for "+e;if(void 0===t)throw"no definition function for "+e;n[e]={deps:i,defn:t,instance:void 0}},o=function(e){var t=n[e];if(void 0===t)throw"module ["+e+"] was undefined";return void 0===t.instance&&i(e),t.instance},r=function(n,e){for(var i=n.length,t=new Array(i),r=0;r<i;++r)t.push(o(n[r]));e.apply(null,e)};({}).bolt={module:{api:{define:t,require:r,demand:o}}};var l=t,u=r,d=o;(function(n,e){l(n,[],function(){return e})})("global!tinymce.util.Tools.resolve",tinymce.util.Tools.resolve),l("tinymce.core.PluginManager",["global!tinymce.util.Tools.resolve"],function(n){return n("tinymce.PluginManager")}),l("tinymce.plugins.hr.Plugin",["tinymce.core.PluginManager"],function(n){return n.add("hr",function(n){n.addCommand("InsertHorizontalRule",function(){n.execCommand("mceInsertContent",!1,"<hr />")}),n.addButton("hr",{icon:"hr",tooltip:"Horizontal line",cmd:"InsertHorizontalRule"}),n.addMenuItem("hr",{icon:"hr",text:"Horizontal line",cmd:"InsertHorizontalRule",context:"insert"})}),function(){}}),o("tinymce.plugins.hr.Plugin")()}();