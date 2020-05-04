if (self.CavalryLogger) { CavalryLogger.start_js(["HHi9b"]); }

__d("ExternalTrackingTag",["AsyncSignal","Event","TrackingPixel"],(function(a,b,c,d,e,f){var g={listenForElementClick:function(a,c,d,e,f){b("Event").listen(a,"click",function(){g.sendRequest(c,d,e,f)})},sendRequest:function(a,c,d,e){if(!a)return;new(b("AsyncSignal"))("/ads/external_tracking_tag/",{href:a,tracking_tag_id:c,adgroup_id:d,ad_id:e}).send();b("TrackingPixel").loadWithNoReferrer(a)}};e.exports=g}),null);
__d("FBLynxWrapper",["URI","isLinkshimURI"],(function(a,b,c,d,e,f){"use strict";var g;a={SUBDOMAIN:"l",SUBDOMAIN_M:"lm",PATH:"/",URL_PARAM:"u",ENC_PARAM:"e",isLynxLink:function(a){if(a.getAttribute("data-lynx-async-dest"))return!0;if(a.getAttribute("data-lynx-uri"))return!0;return b("isLinkshimURI")(new(g||(g=b("URI")))(a.href))?!0:!1}};e.exports=a}),null);
__d("LitestandColumnManager",["Arbiter","BlueBar","Event","NavigationMessage","Run","SubscriptionsHandler","clamp","getScrollPosition"],(function(a,b,c,d,e,f){"use strict";var g=0,h=null;function i(){if(h)return;h=new(b("SubscriptionsHandler"))();h.addSubscriptions(b("Arbiter").subscribe(b("NavigationMessage").NAVIGATION_BEGIN,function(){l(0),j()}),b("Event").listen(window,"resize",function(){b("BlueBar").hasFixedBlueBar()||(l(0),j())}),b("Event").listen(window,"scroll",function(){k()||j()}));b("Run").onLeave(function(){h&&h.release()})}function j(){h&&h.release(),h=null}function k(){if(g<=0)return!1;l(b("clamp")(b("getScrollPosition")(window).y,0,g));return g>0}function l(a){g=a}a={adjustVerticalWindowPosition:function(a,b){i(),l(b),window.scrollTo(a.x,a.y+g)}};e.exports=a}),null);
__d("LitestandStream",["csx","invariant","Arbiter","CSS","EventEmitter","LitestandColumnManager","Run","getScrollPosition","nullthrows"],(function(a,b,c,d,e,f,g,h){var i,j,k,l,m=new(b("EventEmitter"))(),n={init:function(a,c,d,e){i=d,k=a,j=e,l||(l=b("Arbiter").subscribe("ufi/didUpdate",function(a,c){c.offsetY&&b("LitestandColumnManager").adjustVerticalWindowPosition(b("getScrollPosition")(window),c.offsetY)})),b("Run").onLeave(function(){l&&l.unsubscribe(),l=null,m.removeAllListeners("ready"),k=null}),m.emit("ready")},getStoriesSelector:function(){return"._5jmm"},getStreamRoot:function(){return k},getSectionID:function(){return i},getStoryID:function(){return j},isStory:function(a){return b("CSS").matchesSelector(a,"._5jmm")},getFeedStreamID:function(){return parseInt(b("nullthrows")(k).id.split("feed_stream_")[1],16)%1e8},isReady:function(){return!!k},addReadyListener:function(a){n.isReady()||h(0,1974);return m.once("ready",a)}};e.exports=n}),null);
__d("FeedAdsClickLogger",["Arbiter","AsyncRequest","BanzaiODS","DataAttributeUtils","DOM","ExternalTrackingTag","FBLynxWrapper","LitestandMessages","LitestandStream","Parent","SLConfig","TrackingNodes","URI","collectDataAttributes","ge","isFacebookURI","isLinkshimURI"],(function(a,b,c,d,e,f){"use strict";var g,h={},i=!1,j,k=!1,l=function(){function a(){}var c=a.prototype;c.init=function(a){j=b("SLConfig").gk.sl_replace_s,b("Arbiter").subscribe("ClickRefAction/new",this.onNewUserAction.bind(this)),b("Arbiter").subscribe("ClickRefAction/contextmenu",this.onNewUserAction.bind(this)),b("Arbiter").subscribe("ClickRefAction/middleclick",this.onNewUserAction.bind(this)),k=a.see_more_logging_enabled,a.append_tracking_data_to_links&&(this.appendTrackingDataToLinks(),b("Arbiter").subscribe(b("LitestandMessages").STORIES_INSERTED,this.appendTrackingDataToLinks.bind(this)),b("Arbiter").subscribe("FeedAdsClickLogger/refreshTrackingData",this.appendTrackingDataToLinks.bind(this),"new"))};c.getStories=function(){var a=b("LitestandStream").getStreamRoot();if(a)return b("DOM").scry(a,b("LitestandStream").getStoriesSelector());else{a=b("ge")("home_stream");if(a)return b("DOM").scry(a,".uiStreamStory")}return[]};c.appendTrackingDataToLinks=function(){var a=this.getStories();for(var c=0;c<a.length;c++){var d=a[c],e=b("DataAttributeUtils").getDataFt(d);if(!e||e.indexOf("ei")===-1&&e.indexOf("mei")===-1)continue;e=b("DOM").scry(d,"a");for(var d=0;d<e.length;d++){var f=e[d];if(f.getAttribute("ajaxify")!=null)continue;if(f.getAttribute("rel")!=null)continue;var h=f.getAttribute("href");if(!h||h.charAt(0)==="#")continue;h=new(g||(g=b("URI")))(f);if(h.getDomain()==="m.facebook.com")continue;if(b("isFacebookURI")(h)===!1)continue;if(b("isLinkshimURI")(h)||b("FBLynxWrapper").isLynxLink(f))continue;if("hash"in h.getQueryData())continue;if(j&&(h.getPath()==="/ads/about"||h.getPath()==="/about/ads"))continue;f.setAttribute("href",m(f).toString());f.setAttribute("onmousedown","this.href = this.href.replace('__md__=0', '__md__=1');")}}};c.getHref=function(a){return a.getAttribute&&(a.getAttribute("ajaxify")||a.getAttribute("data-endpoint"))||a.action||a.href};c.sendLogRequest=function(a,c){var d=a.ei||a.ai;!d&&a.mei&&(d=a.mf_story_key);if(a!==null&&typeof d==="string"){var e=!1;if(a.tn){var f=b("TrackingNodes").parseTrackingNodeString(a.tn);for(var i=0;i<f.length;i++){var j=f[i][0];switch(j){case b("TrackingNodes").types.LIKE_LINK:case b("TrackingNodes").types.UNLIKE_LINK:case b("TrackingNodes").types.COMMENT:case b("TrackingNodes").types.COMMENT_LINK:case b("TrackingNodes").types.ADD_COMMENT_BOX:case b("TrackingNodes").types.MULTI_ATTACHMENT_VIDEO:return;case b("TrackingNodes").types.XBUTTON:case b("TrackingNodes").types.HIDE_LINK:case b("TrackingNodes").types.REPORT_SPAM_LINK:case b("TrackingNodes").types.HIDE_ALL_LINK:case b("TrackingNodes").types.DROPDOWN_BUTTON:case b("TrackingNodes").types.UNHIDE_LINK:return;case b("TrackingNodes").types.RELATED_SHARE_ARTICLE:case b("TrackingNodes").types.RELATED_SHARE_VIDEO:return;case b("TrackingNodes").types.TRANSLATION:return;case b("TrackingNodes").types.ATTACHMENT:case b("TrackingNodes").types.USER_MESSAGE:e=!0;break}}}j=Date.now();i=500;a.duplicate_click=!!h[d]&&j-h[d]<i;h[d]=j;f=new(b("AsyncRequest"))("/ajax/ssinfeed/end/").setData(a).setAllowCrossPageTransition(!0).setMethod("POST");f.send();i=a.href;b("isLinkshimURI")(new(g||(g=b("URI")))(i))&&new(g||(g=b("URI")))(i).getQueryData()&&(i=new(g||(g=b("URI")))(i).getQueryData().u);e&&!a.duplicate_click&&c!==null&&c.url&&i&&b("isFacebookURI")(new(g||(g=b("URI")))(i))===!1&&(b("ExternalTrackingTag").sendRequest(c.url,c.tag_id,c.adgroup_id),b("BanzaiODS").bumpEntityKey(2966,"external_tracking_tags","request_sent"))}};c.onNewUserAction=function(a,c){if(!c.node)return;a=this.getHref(c.node);var d=b("Parent").byTag(c.node,"input")||b("Parent").byTag(c.node,"button");!a&&d&&d.type=="submit"&&d.getAttribute&&b("DataAttributeUtils").getDataFt(d)&&(a="#");d=!1;if(c.node.getAttribute){var e=b("DataAttributeUtils").getDataFt(c.node);d=e&&e.indexOf("force_log_href")!=-1}!d&&c.event&&c.node.tagName==="A"&&c.event.defaultPrevented&&k&&(a="#");c.event&&(c.event.type==="click"||c.event.type==="contextmenu"||c.event.type==="mousedown")&&(e=b("collectDataAttributes")(c.node,["ft"]),e.ft.href=a,e.ft.mouse_type=c.event.type,e.ft.is_right_click=c.event.isRightClick()?1:0,e.ft.click_type=c.event.isRightClick()?"right_click":c.event.type==="click"?"left_click":"middle_click",d=b("collectDataAttributes")(c.node,["external-tracking-tags"]),a=b("collectDataAttributes")(c.node,["leadgen"]),a&&a.leadgen&&a.leadgen.submitted&&(e.ft.leadgen_submitted=1),this.sendLogRequest(e.ft,d["external-tracking-tags"]))};return a}();function m(a){var c=new(g||(g=b("URI")))(a.href);a=b("collectDataAttributes")(a,["ft"]).ft;var d=c.getQueryData();d.ft=a;d.__md__=0;c.setQueryData(d);return c}e.exports={init:function(a){i===!1&&(new l().init(a),i=!0)},buildURL:m}}),null);
__d("SLPerfTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:SLPerfLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:SLPerfLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:SLPerfLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setCount=function(a){this.$1.count=a;return this};c.setDurationMs=function(a){this.$1.duration_ms=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={count:!0,duration_ms:!0,event:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("cxodecode",["invariant"],(function(a,b,c,d,e,f,g){"use strict";var h=36,i=2;function a(a){if(!a)return"";a=a.cxononce;a||g(0,4289);var b=a.substr(0,a.length-i);a=parseInt(a.substr(-i),h);var c="";for(var d=0;d<b.length;d+=i)c+=String.fromCharCode(parseInt(b.substr(d,i),h)^a);return c}e.exports=a}),null);
__d("SLUtils",["csx","Arbiter","DOM","Event","FeedAdsClickLogger","LitestandMessages","LitestandStream","Run","SLConfig","SLPerfTypedLogger","URI","clearTimeout","curry","cxodecode","gkx","goURI","joinClasses","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g){"use strict";var h,i=b("gkx")("677764"),j=!1,k=[];function a(a,c){if(j)return;j=!0;if(!b("SLConfig").gk.s_link_utils)return;A()&&(B().setEvent("init").log(),D("init_timer"));l();b("SLConfig").gk.sl_replace_about_link&&!i&&q(function(a,b){return r(a,b)});if(b("SLConfig").gk.sl_replace_s){x(a);var d=c.map(function(a){return{nonce:b("cxodecode")(a.nonce),className:b("cxodecode")(a.className)}});q(function(a,c){d.forEach(function(c){var d=b("DOM").scry(a,c.nonce);d.forEach(function(a){while(a.firstChild)a.removeChild(a.firstChild);a.className=b("joinClasses")(a.className,c.className)})})})}n();A()&&B().setEvent("init_duration").setDurationMs(E("init_timer")).log()}function l(){b("Arbiter").subscribe(b("LitestandMessages").STORIES_INSERTED,n),b("Arbiter").subscribe("FeedAdsClickLogger/refreshTrackingData",n,"new")}function c(){A()&&D("cleanup_timer"),k.forEach(function(a){a.unsubscribe()}),j=!1,k=[],A()&&B().setEvent("cleanup_duration").setDurationMs(E("cleanup_timer")).log()}var m=null;function n(){A()&&D("hsa_timer");b("clearTimeout")(m);m=null;var a=[],c=u(),d=z(),e=!1;d.forEach(function(b){if(!b.id)return;if(c.has(b.id))return;if(!w(b,b.id)){e=!0;return}c.add(b.id);a.push([b,b.id])});e&&(m=b("setTimeoutAcrossTransitions")(n,b("SLConfig").sv.sl_content_waiting_delay),A()&&B().setEvent("hsa_waiting_for_content").log());A()&&B().setEvent("hsa_stories_added").setCount(a.length).log();if(a.length===0)return;a.forEach(function(a){var b=a[0],c=a[1];return p().forEach(function(a){return a(b,c)})});A()&&B().setEvent("hsa_duration").setDurationMs(E("hsa_timer")).log()}var o=[];function p(){return o}function q(a){o.push(a)}function r(a,c){a=w(a,c);if(!a){A()&&B().setEvent("usl_real_subtitle_missing").log();return}c=b("DOM").scry(a,"a");a=c.filter(function(a){a=new(h||(h=b("URI")))(a.href).getPath();return a==="/ads/about"||a==="/about/ads"});A()&&B().setEvent("usl_links_updated").setCount(a.length).log();a.forEach(function(a){var c=b("FeedAdsClickLogger").buildURL(a);b("Event").listen(a,"click",b("curry")(s,c));a.href="#"})}function d(a){b("Event").listen(a.link,"click",b("curry")(s,new(h||(h=b("URI")))("/ads/about")))}function f(a){return}function s(a,c){b("goURI")(a),b("Event").stop(c)}var t=new Set();function u(){return t}var v=new Map();function w(a,c){var d=null;v.has(c)?d=v.get(c):d=a;c=b("DOM").scry(d,"._5pcp");if(c.length===0)return null;else return c[0]}function x(a){var c=document.createElement("style");c.type="text/css";c.textContent=b("cxodecode")(a);document.getElementsByTagName("head")[0].appendChild(c)}function y(){return b("LitestandStream").getStreamRoot()||document.body}function z(){return b("DOM").scry(y(),"._5pat")}function A(){return!!b("SLConfig").gk.sl_perf_logging}function B(){return new(b("SLPerfTypedLogger"))()}var C=new Map();function D(a){C.set(a,Date.now())}function E(a){a=C.get(a);return a==null?-1:Date.now()-a}b("Run").onBeforeUnload(c);g={init:a,openLink:f,openLabelLink:d};e.exports=g}),null);
__d("EntstreamFeedObjectTracking",["csx","CSS","DOM","EntstreamFeedObject","Focus","ge"],(function(a,b,c,d,e,f,g){"use strict";var h=new Map();e.exports={register:function(a){var c=this.getRoot(a.nodeID);if(!c)return;var d=b("DOM").scry(c,"._5v9_"),e=d&&d.length?d:[c];a.actorIDs.forEach(function(a){var b=[].concat(h.get(a)||[]);b.push.apply(b,e);h.set(a,b)})},hideAllFromActor:function(a){var c=this.getRoot(a.nodeID);(h.get(a.actorID)||[]).forEach(function(a){if(a===c)return;b("CSS").hide(a)})},unhideAllFromActor:function(a){var c=this.getRoot(a.nodeID);(h.get(a.actorID)||[]).forEach(function(a){b("CSS").show(a)});c&&b("Focus").setWithoutOutline(c)},getRoot:function(a){a=b("ge")(a);return a?b("EntstreamFeedObject").getRoot(a):null}}}),null);
__d("ConditionClassOnVisible",["CSS","Run","intersectionObserverEntryIsIntersecting","observeIntersection"],(function(a,b,c,d,e,f){"use strict";a={track:function(a,c,d){var e=b("observeIntersection")(a,function(a){b("CSS").conditionClass(a.target,c,d===b("intersectionObserverEntryIsIntersecting")(a))});b("Run").onLeave(function(){e.remove()})}};e.exports=a}),null);
__d("FeedTrackingAsync",["Arbiter","Run","collectDataAttributes"],(function(a,b,c,d,e,f){var g;e.exports.init=function(){if(g)return;g=b("Arbiter").subscribe("AsyncRequest/send",function(a,c){a=c.request;c=a.getRelativeTo();if(c){a=a.getData();c=b("collectDataAttributes")(c,["ft"]);c.ft&&Object.keys(c.ft).length&&Object.assign(a,c)}});b("Run").onLeave(function(){g&&(g.unsubscribe(),g=null)})}}),null);
__d("CtaImpressionsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:CtaImpressionsLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:CtaImpressionsLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:CtaImpressionsLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setCtaType=function(a){this.$1.cta_type=a;return this};c.setOriginalURI=function(a){this.$1.original_uri=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={cta_type:!0,original_uri:!0,time:!0,weight:!0};e.exports=a}),null);
__d("SeoClickTrackerTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:SeoClickTrackerLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:SeoClickTrackerLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:SeoClickTrackerLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setClickedFbid=function(a){this.$1.clicked_fbid=a;return this};c.setComponent=function(a){this.$1.component=a;return this};c.setFbid=function(a){this.$1.fbid=a;return this};c.setPosition=function(a){this.$1.position=a;return this};return a}();c={clicked_fbid:!0,component:!0,fbid:!0,position:!0};e.exports=a}),null);
__d("DimensionLogging",["BanzaiNectar","getViewportDimensions"],(function(a,b,c,d,e,f){a=b("getViewportDimensions")();b("BanzaiNectar").log("browser_dimension","homeload",{x:a.width,y:a.height,sw:window.screen.width,sh:window.screen.height,aw:window.screen.availWidth,ah:window.screen.availHeight,at:window.screen.availTop,al:window.screen.availLeft})}),null);
__d("ExpandingCtaModern",["Animation","CtaImpressionsTypedLogger","Style","setInterval","setTimeout","clearInterval"],(function(a,b,c,d,e,f){var g=150,h=750;a={show:function(a,c,d,e,f,i,j,k){if(document.documentElement!==null){var l=function(){!p&&window.pageYOffset>h&&(m(),b("clearInterval")(q))},m=function(){if(!p){b("Style").set(c,"display","none");b("Style").set(d,"display","block");n(a,"height",o+"px");n(a,"background","rgba(0,0,0,0.5)");p=!0;var e=new(b("CtaImpressionsTypedLogger"))();e.setCtaType("www_pages_cta");e.setOriginalURI(window.location.href);e.logVital()}},n=function(a,c,d){new(b("Animation"))(a).to(c,d).duration(g).ease(b("Animation").ease.both).go()},o=document.documentElement.clientHeight,p=!1;b("Style").set(document.body,"margin-bottom",j+"px");k&&b("Style").set(c,"display","none");var q=b("setInterval")(l,1e3);f&&b("setTimeout")(m,3e3);window.onload=function(){!f&&window.pageYOffset<=h&&n(a,"height",j+"px")};e.addEventListener("click",function(){!i?(b("Style").set(d,"display","none"),b("Style").set(a,"height","70%"),k||b("Style").set(c,"display","block"),b("Style").set(a,"background","none"),n(a,"height",j+"px")):n(a,"height","0px"),b("clearInterval")(q)})}}};e.exports=a}),null);
__d("FbFeedAccessible",["csx","fbt","invariant","Arbiter","ARIA","CSS","DataAttributeUtils","DOMQuery","LitestandMessages","SubscriptionsHandler","ge","getOrCreateDOMID"],(function(a,b,c,d,e,f,g,h,i){var j="Accessibility/StoriesRequested",k="Accessibility/StoriesLoaded",l="Accessibility/StoryContentInserted",m="Accessibility/SubstreamInserted",n,o,p=!1;a={init:function(a){n=a,p||this._initSubscriptions(),this._enumerateStories()},_initSubscriptions:function(){p=!0;var a=new(b("SubscriptionsHandler"))();a.addSubscriptions((a=b("Arbiter")).subscribe(b("LitestandMessages").STORIES_REQUESTED,this._onStoriesRequested.bind(this)),a.subscribe(b("LitestandMessages").STORIES_INSERTED,this._onInsertedSubstream.bind(this)),a.subscribe(b("LitestandMessages").NEWER_STORIES_INSERTED,this._onInsertedSubstream.bind(this)),a.subscribe(k,this._processStoriesLoaded.bind(this)),a.subscribe(j,this._processStoriesRequested.bind(this)),a.subscribe(l,this._processStoryContentInserted.bind(this)),a.subscribe(m,this._processInsertedSubstream.bind(this)))},informStoryContentInserted:function(a){b("Arbiter").inform(l,a);a=b("ge")(a);a&&this._addAriaMarkup(a)},setARIARole:function(a){a.setAttribute("role","article")},setAriaLabelledBy:function(a){if(a.getAttribute("aria-labelledby"))return;var c=this._filterForElement(a,["._5pbw"]);c.length>0&&a.setAttribute("aria-labelledby",c.map(function(a){return b("getOrCreateDOMID")(a)}).join(" "))},setAriaDescribedBy:function(a){if(a.getAttribute("aria-describedby"))return;var c=this._filterForElement(a,[".timestampContent","._5pbx"]);c.length>0&&a.setAttribute("aria-describedby",c.map(function(a){return b("getOrCreateDOMID")(a)}).join(" "))},_getStories:function(a){return b("DOMQuery").scry(a||n,"._5jmm")},_onInsertedSubstream:function(a,c){c&&c.substream_id&&b("Arbiter").inform(m,c.substream_id)},_onStoriesRequested:function(){b("Arbiter").inform(j)},_enumerateStories:function(){var a=this,b=this._getStories(n);o=b.length;b.forEach(function(b,c){a._enumerateStory(b,c+=1)})},_enumerateSubstream:function(a){var c=this._getStories();o=c.length;c=this._getStories(b("ge")(a));a=c.length||0;for(var d=0;d<a;d++)this._registerStoryEnumerationPosition(c[d],o-a+(d+1),d+1)},_enumerateStory:function(a,b){this._isStory(a)||i(0,4854),b>0&&(a.setAttribute("aria-posinset",""+b),a.setAttribute("aria-setsize",o))},_processStoriesLoaded:function(){b("ARIA").notify(h._("\u0e42\u0e2b\u0e25\u0e14\u0e2a\u0e15\u0e2d\u0e23\u0e35\u0e48\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21\u0e41\u0e25\u0e49\u0e27"))},_processStoriesRequested:function(){b("ARIA").notify(h._("\u0e2a\u0e48\u0e07\u0e04\u0e33\u0e02\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e23\u0e32\u0e27\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21\u0e41\u0e25\u0e49\u0e27"))},_processInsertedSubstream:function(a,b){this._enumerateSubstream(b),this._enumerateStories()},_processStoryContentInserted:function(a,c){var d;a=b("ge")(c);a&&(d=JSON.parse(b("DataAttributeUtils").getDataFt(a)),this._addAriaMarkup(a));if(d&&d.ordinal_position){c=d.ordinal_position.split(":");var e=c[0];c=c[1];e=parseInt(e,10);c=parseInt(c,10);this._enumerateStory(a,e);c===1&&b("Arbiter").inform(k)}},_addAriaMarkup:function(a){if(!this._isStory(a))return;this.setARIARole(a);this.setAriaLabelledBy(a);this.setAriaDescribedBy(a)},_registerStoryEnumerationPosition:function(a,c,d){var e=JSON.parse(b("DataAttributeUtils").getDataFt(a));e&&(e.ordinal_position=c+":"+d,b("DataAttributeUtils").setDataFt(a,JSON.stringify(e)))},_isStory:function(a){return b("CSS").matchesSelector(a,"._5jmm")},_filterForElement:function(a,c){return c.map(function(c){return b("DOMQuery").scry(a||document,c)[0]}).filter(function(a){return!!a})}};e.exports=a}),null);
__d("SeoRhsItemWrapper",["Parent","SeoClickTrackerTypedLogger"],(function(a,b,c,d,e,f){"use strict";a={log:function(a){a.child.addEventListener("click",this._onClick(a))},clickHandler:function(a){var c=a.evt.target;if(!(c instanceof Node))return;c=c&&b("Parent").byTag(c,"a");c!==null&&c.getAttribute("href")!=="#"&&c.getAttribute("ajaxify")===null&&new(b("SeoClickTrackerTypedLogger"))().setFbid(a.page_fbid).setClickedFbid(a.component_fbid).setComponent(a.component).setPosition(a.position).log()},_onClick:function(a){var b=this;return function(c){c=babelHelpers["extends"]({},a,{evt:c});b.clickHandler(c)}}};e.exports=a}),null);