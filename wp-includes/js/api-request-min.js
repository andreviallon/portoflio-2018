!function($){function e(n){return n=e.buildAjaxOptions(n),e.transport(n)}var n=window.wpApiSettings;e.buildAjaxOptions=function(e){var t=e.url,a=e.path,o,p,r,i,d;if("string"==typeof e.namespace&&"string"==typeof e.endpoint&&(o=e.namespace.replace(/^\/|\/$/g,""),p=e.endpoint.replace(/^\//,""),a=p?o+"/"+p:o),"string"==typeof a&&(t=n.root+a.replace(/^\//,"")),i=!(e.data&&e.data._wpnonce),r=e.headers||{},i)for(d in r)if(r.hasOwnProperty(d)&&"x-wp-nonce"===d.toLowerCase()){i=!1;break}return i&&(r=$.extend({"X-WP-Nonce":n.nonce},r)),e=$.extend({},e,{headers:r,url:t}),delete e.path,delete e.namespace,delete e.endpoint,e},e.transport=$.ajax,window.wp=window.wp||{},window.wp.apiRequest=e}(jQuery);