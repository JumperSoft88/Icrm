if (self.CavalryLogger) { CavalryLogger.start_js(["tub1T"]); }

__d("DesktopHscrollUnit",["csx","cx","Arbiter","BanzaiLogger","BanzaiODS","CSS","DataAttributeUtils","DesktopHscrollUnitEventConstants","DOM","DOMQuery","Locale","Parent","PixelNumConverter","Style","getStyleProperty","queryThenMutateDOM"],(function(a,b,c,d,e,f,g,h){var i="_2_tg",j=300,k="_2_th",l="_2_ti",m="_2_tj",n="_hy9",o="_1kf5",p="_20yh",q="_i6m",r="_1mrv",s="_5pat",t="div._3938",u="._nxj",v="div._20yh",w;a=function(){"use strict";function a(a,c,d,e,f,g,h,i,j,l){this.$1=a,this.$2=c,this.$3=d,this.$4=e,this.$5=g,this.$6=0,this.$7=1+g.length,this.$8=[f],this.$9=h,this.$10=new(b("Arbiter"))(),this.$11=0,this.$12=j,this.$13=[],this.$14=-1,this.$15=l,w=l,this.$16=b("DOMQuery").find(a,"^div._5jmm"),this.$17=b("DataAttributeUtils").getDataFt(this.$16),this.$3.initPager(this,this.$4),i.forEach(function(a){a.init(this)},this),b("CSS").addClass(f.ad,k),b("CSS").addClass(f.ad,p),f.subheader&&this.$18(f.subheader),this.$19(this.$6),b("CSS").addClass(this.$16,"_sf6"),b("CSS").conditionClass(this.$16,"_2_tl",this.$9),this.$20(),b("Arbiter").subscribe(b("DesktopHscrollUnitEventConstants").HSCROLL_ITEM_HIDE_EVENT,this.hideItem.bind(this)),b("Arbiter").subscribe(b("DesktopHscrollUnitEventConstants").HSCROLL_ITEM_SCROLL_BEFORE_XOUT_EVENT,this.scrollItemBeforeXout.bind(this)),b("Arbiter").subscribe(b("DesktopHscrollUnitEventConstants").HSCROLL_ITEM_UNHIDE_EVENT,this.unhideItem.bind(this)),b("Arbiter").subscribe(b("DesktopHscrollUnitEventConstants").HSCROLL_LAST_ITEM_NFX_ACTION_TAKEN,this.logLastAdXoutEvent.bind(this))}a.getFirstAdsHscrollElement=function(a){a=b("DOMQuery").scry(a,t);return a[0]};a.hideAdsHscroll=function(c){var d=a.getFirstAdsHscrollElement(c);c=b("CSS").hasClass(c,q);if(d&&!c){b("Arbiter").inform(b("DesktopHscrollUnitEventConstants").HSCROLL_ITEM_HIDE_EVENT,d.id);return!0}return!1};a.removeHeaderMargin=function(a){a=b("DOMQuery").find(a,u);b("CSS").removeClass(a,r)};a.handleOptimisticHideInUnit=function(c){c=a.getFirstAdsHscrollElement(c);if(c&&w){b("Arbiter").inform(b("DesktopHscrollUnitEventConstants").HSCROLL_ITEM_SCROLL_BEFORE_XOUT_EVENT,c.id);var d=b("DOM").scry(c,v);if(d.length!=1)return!0;b("Arbiter").inform(b("DesktopHscrollUnitEventConstants").HSCROLL_LAST_ITEM_NFX_ACTION_TAKEN,{id:c.id,action:"Hide"})}return!1};a.handleOptimisticUnhideInUnit=function(c){c=b("Parent").byClass(c,s);var d=a.getFirstAdsHscrollElement(c);c=b("CSS").matchesSelector(c,"._i6m");d&&c&&b("Arbiter").inform(b("DesktopHscrollUnitEventConstants").HSCROLL_LAST_ITEM_NFX_ACTION_TAKEN,{id:d.id,action:"Unhide"});return d&&!c};var c=a.prototype;c.scrollItemBeforeXout=function(a,b){if(this.$1.id!=b||!this.$15)return;this.$14=this.$6;this.$6+1==this.getNumVisibleAds()?this.scrollPrevious():this.scrollNext()};c.hideItem=function(a,c){if(this.$1.id!=c||!this.$15)return;a={item:this.$8.splice(this.$14,1)[0],index:this.$14};this.$13.push(a);b("CSS").removeClass(a.item.ad,p);this.$14!=this.getNumVisibleAds()&&(this.$6=this.$14);this.$10.inform(b("DesktopHscrollUnitEventConstants").HSCROLL_PAGER_ITEM_HIDE_EVENT,this.$6,"event");this.logIndividualXout(c,"Hide")};c.unhideItem=function(a,c){if(this.$1.id!=c||!this.$15)return;a=this.$13.pop();this.$8.splice(a.index,0,a.item);b("CSS").addClass(a.item.ad,p);this.$21(a.index);this.logIndividualXout(c,"Unhide")};c.logLastAdXoutEvent=function(a,b){if(this.$1.id!=b.id)return;this.logIndividualXout(b.id,b.action)};c.logIndividualXout=function(a,c){a=document.getElementById(a);a=b("Parent").byClass(a,s).getAttribute("id");var d;c=="Hide"?d=1:d=-1;b("BanzaiLogger").log("FeedAdsHscrollIndividualXoutLoggerConfig",{ads_hscroll_unit_id:a,number_of_total_ads:this.$7,number_of_hidden_ads:d,action:c})};c.getArbiter=function(){return this.$10};c.getAdContainer=function(){return this.$1};c.getPager=function(){return this.$3};c.getSelectedItem=function(){return this.$8[this.$6]};c.getSelectedIndex=function(){return this.$6};c.getNumItems=function(){return this.$7};c.getID=function(){return this.$16.id};c.getNumOfHiddenItems=function(){return this.$13.length};c.getNumVisibleAds=function(){return this.$7-this.$13.length};c.scrollNext=function(){this.$6+1<this.getNumVisibleAds()&&(this.$21(this.$6+1),this.$6===1&&b("BanzaiODS").bumpEntityKey(2966,"feed_ads",this.$22()))};c.scrollPrevious=function(){this.$6-1>=0&&this.$21(this.$6-1)};c.addOffscreenItems=function(a){this.$5.push.apply(this.$5,a),this.$7+=a.length,this.$10.inform("onAdditionalItemsAdded",{})};c.$19=function(a){var c=this.$8[a];this.$9&&c.subheader&&(b("DOM").remove(c.subheader),b("DOM").appendContent(this.$2,c.subheader),this.$2.offsetHeight);this.$8.forEach(function(c,d){d=d==a;b("CSS").conditionClass(c.ad,m,d);b("CSS").conditionClass(c.ad,n,!d);c.subheader&&b("CSS").conditionClass(c.subheader,m,d)});this.$10.inform("onShow",{item:c,index:a},"event");b("Arbiter").inform(b("DesktopHscrollUnitEventConstants").HSCROLL_ITEM_SHOWN_EVENT)};c.$21=function(a){this.$10.inform("onBeforeTransition",{item:this.$8[this.$6]},"event");while(this.$5.length>0&&a>=this.$8.length)this.$23(this.$5.shift());this.$19(a);if(this.$9){this.$11++;b("CSS").addClass(this.$1,i);setTimeout(function(){--this.$11===0&&b("CSS").removeClass(this.$1,i)}.bind(this),j);this.$10.inform("onAnimate",{item:this.$8[a]},"event");var c,d;b("queryThenMutateDOM")(function(){c=b("PixelNumConverter").numValue(b("getStyleProperty")(this.$1,"padding-bottom")),d=this.$1.offsetHeight}.bind(this),function(){b("Style").set(this.$1,"min-height",b("CSS").hasClass(this.$8[a].ad,o)?"0px":b("PixelNumConverter").pixelValue(d-c)),b("Style").set(this.$8[0].ad,b("Locale").isRTL()?"margin-right":"margin-left",a*-100+"%")}.bind(this))}this.$6=a;this.$20()};c.$23=function(a){b("CSS").addClass(a.ad,k),b("CSS").addClass(a.ad,p),b("DOM").appendContent(this.$1,a.ad),b("Arbiter").inform(b("DesktopHscrollUnitEventConstants").HSCROLL_ITEM_INSERTED_EVENT),a.subheader&&(this.$18(a.subheader),b("DOM").appendContent(this.$2,a.subheader)),this.$8.push(a)};c.$20=function(){var a=JSON.parse(b("DataAttributeUtils").getDataFt(this.$8[this.$6].ad)),c=JSON.parse(this.$17);for(var d in a)c[d]=a[d];b("DataAttributeUtils").setDataFt(this.$16,JSON.stringify(c));b("Arbiter").inform("FeedAdsClickLogger/refreshTrackingData",{})};c.$18=function(a){b("CSS").addClass(a,l);if(this.$9){var c=b("DOM").create("div");b("CSS").addClass(c,"_2_tm");b("DOM").appendContent(a,c)}};c.$22=function(){var a="old_desktop_hscroll_first_next_pos_";return a.concat(this.$12)};return a}();e.exports=a;e.exports.getFirstAdsHscrollElement=a.getFirstAdsHscrollElement;e.exports.hideAdsHscroll=a.hideAdsHscroll;e.exports.removeHeaderMargin=a.removeHeaderMargin;e.exports.handleOptimisticHideInUnit=a.handleOptimisticHideInUnit;e.exports.handleOptimisticUnhideInUnit=a.handleOptimisticUnhideInUnit}),null);
__d("EntstreamFeedObjectHide",["cx","CSS","DesktopHscrollUnit","EntstreamFeedObject","EntstreamFeedObjectFollowup","Event","Focus","TabbableElements","ge"],(function(a,b,c,d,e,f,g){var h={hide:function(a,c){a=b("EntstreamFeedObject").getRoot(b("ge")(a));a=b("EntstreamFeedObject").getHscrollOuterRootIfAvailable(a);b("EntstreamFeedObjectFollowup").addFollowup(a,c);c=b("DesktopHscrollUnit").hideAdsHscroll(a);c||b("CSS").addClass(a,"_i6m");h.setFocus(a)},registerUnhide:function(a,c){b("Event").listen(a,"click",function(){c&&c.send();var d=b("EntstreamFeedObject").getRoot(a);d=b("EntstreamFeedObject").getHscrollOuterRootIfAvailable(d);h.unhide(d)})},setFocus:function(a){a=b("TabbableElements").find(a);a&&a[0]&&b("Focus").setWithoutOutline(a[0])},unhide:function(a){b("EntstreamFeedObjectFollowup").removeFollowup(a),b("CSS").removeClass(a,"_i6m"),h.setFocus(a)}};e.exports=h}),null);
__d("YouTube",["cx","CSS","DOM","DOMQuery","Event","Focus","Keys","LitestandStoryInsertionStatus","SubscriptionsHandler","UserAgent_DEPRECATED"],(function(a,b,c,d,e,f,g){a=function(){"use strict";function a(c,d,e){var f=new(b("SubscriptionsHandler"))();f.addSubscriptions(b("Event").listen(c,"load",this.listening.bind(this)),b("LitestandStoryInsertionStatus").registerBlocker(function(){return this.playerState===a.STATE_PLAYING}.bind(this)));Object.assign(this,{iframe:c,autofocus:d,autoplay:e,playerState:a.STATE_UNSTARTED,muted:!1,volume:100,currentTime:0,timer:null,handler:f});d&&b("Focus").set(c)}var c=a.prototype;c.id=function(){return this.iframe.id};c.post=function(a){a.id=this.id(),this.iframe.contentWindow.postMessage(JSON.stringify(a),"*")};c.listening=function(){this.post({event:"listening"}),clearTimeout(this.timer),this.timer=setTimeout(this.listening.bind(this),100)};c.update=function(a){a.event=="initialDelivery"&&(clearTimeout(this.timer),(b("UserAgent_DEPRECATED").webkit()||b("UserAgent_DEPRECATED").firefox())&&a.info&&a.info.debugText.match(/flashVersion/)&&(this.addAccessibleButtons(),b("UserAgent_DEPRECATED").firefox()&&(this.iframe.tabIndex=-1))),a.info&&["playerState","muted","volume","currentTime"].forEach(function(b){Object.prototype.hasOwnProperty.call(a.info,b)&&(this[b]=a.info[b])}.bind(this))};c.togglePlay=function(){this.post({event:"command",func:this.playerState==a.STATE_PLAYING?"pauseVideo":"playVideo"})};c.toggleMute=function(){this.post({event:"command",func:this.muted?"unMute":"mute"})};c.addAccessibleButtons=function(){this.addAccessibleButton("Mute","_505m",this.toggleMute.bind(this)),this.addAccessibleButton("Play","_505n",this.togglePlay.bind(this))};c.addAccessibleButton=function(c,d,e){d=b("DOM").create("button",{"class":d,tabindex:0},c);b("DOM").insertAfter(this.iframe,d);this.handler.addSubscriptions((c=b("Event")).listen(d,"click",e),c.listen(d,"mouseover",b("CSS").hide.bind(null,d)),c.listen(this.iframe,"mouseout",b("CSS").show.bind(null,d)),c.listen(d,"focus",function(){!this.autoplay&&this.playerState==a.STATE_UNSTARTED&&(this.post({event:"command",func:"playVideo"}),this.post({event:"command",func:"pauseVideo"}))}.bind(this)),c.listen(d,"keydown",function(a){switch(a.keyCode){case b("Keys").UP:case b("Keys").DOWN:this.post({event:"command",func:"setVolume",args:[this.volume+(a.keyCode==b("Keys").UP?10:-10)]});a.prevent();break;case b("Keys").RIGHT:case b("Keys").LEFT:this.post({event:"command",func:"seekTo",args:[this.currentTime+(a.keyCode==b("Keys").RIGHT?10:-10)]});a.prevent();break}}.bind(this)));return d};c.destroy=function(){this.handler.release(),delete a.instances[this.id()],Object.keys(a.instances).length||a.handler.remove()};a.register=function(c,d,e){if(!window.postMessage)return;Object.keys(a.instances).length||(a.handler=b("Event").listen(window,"message",function(b){try{b=JSON.parse(b.data);a.instances[b.id]&&a.instances[b.id].update(b)}catch(a){}}));c=new a(b("DOMQuery").find(c,"iframe"),d,e);a.instances[c.id()]=c};return a}();Object.assign(a,{STATE_UNSTARTED:-1,STATE_PLAYING:1,instances:{},handler:null});e.exports=a}),null);
__d("EntstreamHomeFeedObjectHide",["csx","cx","fbt","AsyncRequest","CSS","DOM","EntstreamFeedObject","EntstreamFeedObjectHide","Event","TrackingNodes","YouTube","$","ge","getOrCreateDOMID"],(function(a,b,c,d,e,f,g,h,i){var j={stopVideo:function(a){a=b("$")(a);a=b("DOM").find(a,"^._5jmm");var c=b("DOM").scry(a,"iframe");for(var d=0;d<c.length;d++){var e=b("YouTube").instances[b("getOrCreateDOMID")(c[d])];e&&e.playerState===b("YouTube").STATE_PLAYING&&e.togglePlay()}e=b("DOM").scry(a,"video");for(var d=0;d<e.length;d++)"paused"in e[d]&&!e[d].paused&&(typeof e[d].pause==="function"&&e[d].pause())},registerHideButtonClick:function(a,c,d,e){b("Event").listen(a,"click",function(){j.hide(e,c,"afrostart",d)})},hide:function(a,c,d,e){j.stopVideo(a);var f=b("EntstreamFeedObject").getRoot(b("ge")(a));f=b("CSS").matchesSelector(f,"._5pat");if(f&&d=="afrostart")f="";else{var g=d=="hide"||d=="afrostart"?i._("\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e19\u0e35\u0e49\u0e44\u0e14\u0e49\u0e16\u0e39\u0e01\u0e0b\u0e48\u0e2d\u0e19\u0e08\u0e32\u0e01\u0e1f\u0e35\u0e14\u0e02\u0e48\u0e32\u0e27\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e41\u0e25\u0e49\u0e27"):i._("\u0e17\u0e33\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2b\u0e21\u0e32\u0e22\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e23\u0e32\u0e27\u0e19\u0e35\u0e49\u0e27\u0e48\u0e32\u0e40\u0e1b\u0e47\u0e19\u0e2a\u0e41\u0e1b\u0e21\u0e41\u0e25\u0e49\u0e27");d=d=="hide"||d=="afrostart"?i._("\u0e40\u0e25\u0e34\u0e01\u0e0b\u0e48\u0e2d\u0e19"):i._("\u0e40\u0e25\u0e34\u0e01\u0e17\u0e33");var h=b("TrackingNodes").getTrackingInfo(b("TrackingNodes").types.UNHIDE_LINK);h=b("DOM").create("a",{href:"#","data-ft":h},d);d={};c&&(d.token=c);e&&(d.hideable_token=e);c=new(b("AsyncRequest"))().setURI("/ajax/entstream/home/story/unhide").setMethod("POST").setData(d).setRelativeTo(h);b("EntstreamFeedObjectHide").registerUnhide(h,c);f=b("DOM").create("div",{"class":"_1f86"},[g," ",h])}b("EntstreamFeedObjectHide").hide(a,f)},registerHide:function(a,c,d,e){b("Event").listen(a,"click",function(){j.hide(a.getAttribute("id"),c,d,e)})}};e.exports=j}),null);
__d("MenuTogglingItem",["DOM","MenuItem"],(function(a,b,c,d,e,f){a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.handleClick=function(){this.toggleMenuItem();return a.prototype.handleClick.call(this)};d.toggleMenuItem=function(){this._data=babelHelpers["extends"]({},this._data,{ajaxify:this._data.toggleAjaxify,toggleAjaxify:this._data.ajaxify,value:this._data.toggleValue,toggleValue:this._data.value,markup:this._data.toggleMarkup,toggleMarkup:this._data.markup}),this._rerender()};d.setValue=function(a){this._data=babelHelpers["extends"]({},this._data,{value:a})};d._rerender=function(){var a=this._anchor;b("DOM").replace(a,this._renderItemContent())};return c}(b("MenuItem"));e.exports=a}),null);
__d("getEventTarget",[],(function(a,b,c,d,e,f){"use strict";var g=3;function a(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return a.nodeType===g?a.parentNode:a}e.exports=a}),null);