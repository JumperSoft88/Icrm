if (self.CavalryLogger) { CavalryLogger.start_js(["H4sEU"]); }

__d("RTWebExperiments",["FBRTCConfig","qex"],(function(a,b,c,d,e,f){"use strict";a={enableCallCollisionFix:function(){return b("FBRTCConfig").isVCEndpointCall()?!1:b("qex")._("771668")},passOfferWithWindowMessages:function(){return b("FBRTCConfig").isVCEndpointCall()?!1:b("qex")._("771669")}};e.exports=a}),null);
__d("FBRTCLocalMessageQueue",["CacheStorage","FBRTCConstants","RTWebExperiments"],(function(a,b,c,d,e,f){var g="localstorage",h="RTC_",i="offer",j="offer_msg",k="data_",l=30*1e3,m=new Map(),n={STORAGE_TYPE:g,PREFIX:h,OFFER_KEY:i,OFFER_SUFFIX:j,DATA_KEY_PREFIX:k,CACHE_LIFE:l,clearQueue:function(a){m.set(a,new Map())},writePeerOfferToStorage:function(a,b){a=n.getStorage(a,j);n._storeData(a,i,b)},getPeerOfferFromStorage:function(a){a=n.getStorage(a,j);return n._getData(a,i)},clearPeerOfferFromStorage:function(a){a=n.getStorage(a,j);a.remove(i)},pluckOffer:function(a){if(b("RTWebExperiments").passOfferWithWindowMessages()){var c=m.get(a)||new Map(),d=c.get(i);c["delete"](i);return d||null}else{c=n.getPeerOfferFromStorage(a);n.clearPeerOfferFromStorage(a);return c||null}},enqueueMessage:function(a,c,d){c=k+c.toString();var e=m.get(a)||new Map();d.msg_type===b("FBRTCConstants").PayloadType.OFFER&&(c=i);e.set(c,d);m.set(a,e)},drainQueue:function(a,b){var c=m.get(a)||new Map();for(var c=c,d=Array.isArray(c),e=0,c=d?c:c[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=c.length)break;f=c[e++]}else{e=c.next();if(e.done)break;f=e.value}f=f;f[0];f=f[1];b(f)}m.set(a,new Map())},_storeData:function(a,b,c){c={__t:Date.now(),__d:c};a.set(b,c)},_getData:function(a,b){var c=a.get(b);if(c&&n._isValid(c))return c.__d;else c&&a.remove(b);return null},_getAndRemoveData:function(a,b){var c=n._getData(a,b);if(c!==null){a.remove(b);return c}return null},_isValid:function(a){return Date.now()-a.__t<l},getStorage:function(a,c){return new(b("CacheStorage"))(g,""+h+a+"_"+c+"_")}};e.exports=n}),null);
__d("FBRTCMessageListener",["invariant","Bootloader","FBMqttChannel","FBRTCConstants","FBRTCLocalMessageQueue","FBRTCSupport","RTWebExperiments","Run","gkx","guid","mixInEventEmitter"],(function(a,b,c,d,e,f,g){"use strict";var h=b("FBRTCConstants").ChildWindowMessageType,i=45*1e3,j=[],k=null,l=null,m,n=null,o=null,p=!1,q=!1,r=null,s=null,t=null,u=null,v=null,w=[];a={logCheckpoint:function(a){b("Bootloader").loadModules(["RTWebUserActionLogger"],function(b){b.logCheckpoint({checkpoint:a})},"FBRTCMessageListener")},init:function(a,c){var d=this;if(p)return;p=!0;q=a;r=c;this.subscribeToMqtt();if(b("FBRTCSupport").isWebrtcSupported()&&window.addEventListener){var e=a?this._handleWindowMessageToChild.bind(this):this._handleWindowMessageToParent.bind(this);window.addEventListener("message",e,!1)}a&&this._connectToParentWindow(c);b("Run").onUnload(function(){d.unsubscribeToAll()})},subscribeToMqtt:function(){var a=this;w.push("/webrtc");b("FBMqttChannel").subscribe("/webrtc",function(b){b=JSON.parse(b);a._onMessage(b)});w.push("/rtc_multi");b("FBMqttChannel").subscribe("/rtc_multi",function(b){b=JSON.parse(b);a._onMultiwayMessage(b)});w.push("/onevc");b("FBMqttChannel").subscribe("/onevc",function(b){b=JSON.parse(b);a._onOneVCMessage(b)})},unsubscribeToAll:function(){w.forEach(function(a){b("FBMqttChannel").unsubscribeAll(a)})},setParentWindowNonce:function(a){n=a},generateNewNonce:function(){o=b("guid")();return o},setMultiwayMessageHandler:function(a){s&&g(0,1011),s=a},removeMultiwayMessageHandler:function(){s=null},_emit:function(a,b){this.emit(a,b)},_onMultiwayMessage:function(a){this._emit("multiwayMessageReceived",a),s&&s(a)},setOneVCMessegeHandler:function(a){t==null&&(t=a)},_onOneVCMessage:function(a){t!=null&&t(a)},setMessageHandler:function(a){k&&g(0,1013);k=a;while(j.length)k(j.shift())},removeMessageHandler:function(){k=null},removeOneVCMessageHandler:function(){t=null},setParentWindowStartCallHandler:function(a){u=a},_onMessage:function(a){a.from&&(a.from=a.from.toString()),this._emit("messageReceived",a),k?k(a):j.push(a),q||this._passOrQueueToChildWindow(a)},_connectToParentWindow:function(a){var b=this;if(window.opener&&window.opener.postMessage){a={type:h.CHILD_WINDOW_READY,nonce:n,childNonce:this.generateNewNonce(),peerID:a};var c=new MessageChannel();c.port1.onmessage=function(a){b._handleWindowMessageToChild(a,!0)};window.opener.postMessage(a,window.location.origin,[c.port2])}},_verifyWindowMessage:function(a){return Boolean(a.origin===window.location.origin&&a.data&&o!==null&&a.data.nonce===o)},_verifyPortMessage:function(a){return Boolean(o!==null&&(a==null?void 0:(a=a.data)==null?void 0:a.nonce)===o)},_handleWindowMessageToParent:function(a){if(!this._verifyWindowMessage(a))return;if(a.data.type===h.CHILD_WINDOW_READY){var c=a.data,d=c.childNonce;c=c.peerID;b("gkx")("1098789")&&a.ports!=null&&Array.isArray(a.ports)&&a.ports[0]!=null&&(v=a.ports[0]);this.setParentWindowNonce(d);this._setChildWindow(a.source);this._startCallInChildWindow(c);this.generateNewNonce();this._replayQueuedMessagesToChild(c,l)}},_handleWindowMessageToChild:function(a,c){c===void 0&&(c=!1);if(c&&!this._verifyPortMessage(a)||!c&&!this._verifyWindowMessage(a))return;a.data.type===h.CHILD_WINDOW_MESSAGE&&this._onMessage(a.data.message);if(a.data.type===h.CHILD_WINDOW_START_CALL&&u){c=a.data.offer;!c&&r&&(c=b("FBRTCLocalMessageQueue").getPeerOfferFromStorage(r),c&&b("RTWebExperiments").passOfferWithWindowMessages()&&this.logCheckpoint("got_offer_from_storage_while_in_experiment"));u(c)}},_replayQueuedMessagesToChild:function(a,c){var d=this;b("FBRTCLocalMessageQueue").drainQueue(a,function(a){d._postToChildWindowMessage(c,a)})},_setChildWindow:function(a){l=a,window.clearTimeout(m),m=window.setTimeout(function(){l=null},i)},_postToChildWindowMessage:function(a,c){c={type:h.CHILD_WINDOW_MESSAGE,nonce:n,message:c};b("gkx")("1098789")&&v!=null?v.postMessage(c):a.postMessage(c,window.location.origin)},_passOrQueueToChildWindow:function(a){l&&this._postToChildWindowMessage(l,a),b("RTWebExperiments").enableCallCollisionFix()&&b("FBRTCLocalMessageQueue").enqueueMessage(a.from,a.id,a)},_startCallInChildWindow:function(a){if(l){a={type:h.CHILD_WINDOW_START_CALL,nonce:n,offer:b("RTWebExperiments").passOfferWithWindowMessages()?b("FBRTCLocalMessageQueue").pluckOffer(a):null};b("gkx")("1098789")&&v!=null?v.postMessage(a):l.postMessage(a,window.location.origin)}},listenOnce:function(a,b){this.once(a,b)}};b("mixInEventEmitter")(a,{messageReceived:!0,multiwayMessageReceived:!0});e.exports=a}),null);
__d("MessagingThreadEventTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:MessagingThreadEventLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:MessagingThreadEventLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:MessagingThreadEventLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setActiveTimeMs=function(a){this.$1.active_time_ms=a;return this};c.setClientEventTimeMs=function(a){this.$1.client_event_time_ms=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setPageData=function(a){this.$1.page_data=b("GeneratedLoggerUtils").serializeMap(a);return this};c.setPageID=function(a){this.$1.page_id=a;return this};c.setScriptPath=function(a){this.$1.script_path=a;return this};c.setSource=function(a){this.$1.source=a;return this};c.setThreadID=function(a){this.$1.thread_id=a;return this};c.setVC=function(a){this.$1.vc=a;return this};return a}();c={active_time_ms:!0,client_event_time_ms:!0,event:!0,page_data:!0,page_id:!0,script_path:!0,source:!0,thread_id:!0,vc:!0};e.exports=a}),null);
__d("VideoChatLinksUserActionsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:VideoChatLinksUserActionsLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:VideoChatLinksUserActionsLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:VideoChatLinksUserActionsLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setClientAppVersion=function(a){this.$1.client_app_version=a;return this};c.setClientLockStatus=function(a){this.$1.client_lock_status=a;return this};c.setClienttime=function(a){this.$1.clienttime=a;return this};c.setComponent=function(a){this.$1.component=a;return this};c.setConferenceNameRaw=function(a){this.$1.conference_name_raw=a;return this};c.setCreationAction=function(a){this.$1.creation_action=a;return this};c.setErrorDetails=function(a){this.$1.error_details=a;return this};c.setErrorType=function(a){this.$1.error_type=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setExperimentsEnabled=function(a){this.$1.experiments_enabled=b("GeneratedLoggerUtils").serializeMap(a);return this};c.setGroupSize=function(a){this.$1.group_size=a;return this};c.setKickedUserID=function(a){this.$1.kicked_user_id=a;return this};c.setLinkShareTo=function(a){this.$1.link_share_to=a;return this};c.setOpenLinkFrom=function(a){this.$1.open_link_from=a;return this};c.setReason=function(a){this.$1.reason=a;return this};c.setReferralSurface=function(a){this.$1.referral_surface=a;return this};c.setRoomIDRaw=function(a){this.$1.room_id_raw=a;return this};c.setSurface=function(a){this.$1.surface=a;return this};c.setThreadType=function(a){this.$1.thread_type=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setUserIdsToBeRemoved=function(a){this.$1.user_ids_to_be_removed=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setVC=function(a){this.$1.vc=a;return this};c.setVideoCallLinkHashRaw=function(a){this.$1.video_call_link_hash_raw=a;return this};c.setVideoCallLinkIDRaw=function(a){this.$1.video_call_link_id_raw=a;return this};c.setVideoCallLinkURLRaw=function(a){this.$1.video_call_link_url_raw=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={client_app_version:!0,client_lock_status:!0,clienttime:!0,component:!0,conference_name_raw:!0,creation_action:!0,error_details:!0,error_type:!0,event:!0,experiments_enabled:!0,group_size:!0,kicked_user_id:!0,link_share_to:!0,open_link_from:!0,reason:!0,referral_surface:!0,room_id_raw:!0,surface:!0,thread_type:!0,time:!0,user_ids_to_be_removed:!0,vc:!0,video_call_link_hash_raw:!0,video_call_link_id_raw:!0,video_call_link_url_raw:!0,weight:!0};e.exports=a}),null);
__d("MessengerLoggerUtils",["MercuryIDs","MessagingThreadEventTypedLogger","ScriptPath","pageID"],(function(a,b,c,d,e,f){a={logThreadChangeEvent:function(a,b,c,d){c.activeThreadID&&a&&this.log({activeThreadID:c.activeThreadID,event:"inactive",clientEventTimeMs:b,activeTimeMs:b-a}),d.activeThreadID&&this.log({activeThreadID:d.activeThreadID,event:"active",clientEventTimeMs:b,activeTimeMs:0})},log:function(a){var c=b("MercuryIDs").tokenize(a.activeThreadID.toString()),d=b("ScriptPath").getPageInfo();new(b("MessagingThreadEventTypedLogger"))().setEvent(a.event).setClientEventTimeMs(a.clientEventTimeMs).setActiveTimeMs(a.activeTimeMs).setPageID(b("pageID")).setPageData(d?d.extraData:{}).setThreadID(c.value).setSource("messenger").log()}};e.exports=a}),null);
__d("MessengerURIStore",["LogHistory","MessengerActions","MessengerLoggerUtils","MessengerStore"],(function(a,b,c,d,e,f){"use strict";var g=b("LogHistory").getInstance("messenger_uri_store");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var b;b=a.call(this)||this;b.$MessengerURIStore1={activeThreadID:null,folderKey:null,detailView:null,filter:null,folder:null,masterView:null,query:null,mid:null,sa:null,seeAllType:null,serverThreadID:null,extraQueryParams:null};b.$MessengerURIStore2=babelHelpers["extends"]({},b.$MessengerURIStore1);b.$MessengerURIStore4=b.$MessengerURIStore3=null;return b}var d=c.prototype;d.getState=function(){return this.$MessengerURIStore1};d.getPrevState=function(){return this.$MessengerURIStore2};d.__onDispatch=function(a){switch(a.type){case b("MessengerActions").Types.REPLACE_STATE:this.$MessengerURIStore2=this.$MessengerURIStore1;this.$MessengerURIStore4=this.$MessengerURIStore3;this.$MessengerURIStore1=babelHelpers["extends"]({activeThreadID:null,folderKey:null,detailView:null,filter:null,folder:null,masterView:null,query:null,mid:null,sa:null,seeAllType:null,serverThreadID:null,extraQueryParams:null,threadsIDs:null},a.nextState);a=Date.now();this.$MessengerURIStore3=a;g.debug("replace_state",JSON.stringify({previousThreadID:this.$MessengerURIStore2.activeThreadID,nextThreadID:this.$MessengerURIStore1.activeThreadID}));b("MessengerLoggerUtils").logThreadChangeEvent(this.$MessengerURIStore4,a,this.$MessengerURIStore2,this.$MessengerURIStore1);this.emitChange();break}};return c}(b("MessengerStore"));e.exports=new a()}),null);
__d("MessengerBrowserAlerts",["fbt","Bootloader","CurrentUser","DocumentTitle","Event","FavIcon","ImageSourceRequest","ImageSourceType","MercuryAttachmentSnippetRenderer","MercuryIDs","MercuryIgnoredBlockedParticipants.bs","MercuryNotificationRenderer","MercuryThreadInfo","MercuryThreadInformer","MessagingTag","MessengerActions","MessengerConfig","MessengerDesktopNotifications","MessengerFaviconUrls","MessengerParticipants.bs","MessengerSettingsStore","MessengerState.bs","MessengerURIStore","Sound","UserActivity","WorkplaceChatHelper","clearInterval","gkx","setIntervalAcrossTransitions"],(function(a,b,c,d,e,f,g){"use strict";var h=8e3,i=80,j=3,k=6e5,l=new Map(),m=null,n=null;function o(){l=new Map()}function p(a){var c=b("MessengerSettingsStore").getSettings().sound_enabled,d=a.action_type=="ma-type:log-message";d=d&&(a.log_message_type=="log:phone-call"||a.log_message_type=="log:video-call")&&a.log_message_data.answered;c&&!d&&b("Sound").play([b("MessengerConfig")["sound.notif_ogg_url"],b("MessengerConfig")["sound.notif_mp3_url"]],a.timestamp,!1)}function q(a,c,d){if(!a.snippet_sender)return;var e=l.get(a.thread_id)||0;if(e>=j)return;l.set(a.thread_id,e+1);b("MessengerParticipants.bs").get(a.snippet_sender,function(e){var f=a.snippet,h=a.custom_nickname&&a.custom_nickname[b("MercuryIDs").getUserIDFromParticipantID(e.id)],i=h?h:e.short_name;!f&&a.snippet_attachments&&a.snippet_attachments.length>0&&(f=b("MercuryAttachmentSnippetRenderer").renderAttachmentSnippetText(b("MercuryAttachmentSnippetRenderer").getAttachmentSnippetType(a.snippet_attachments),!1,i,a.snippet_attachments));h=h?h:e.name;a.is_canonical||(h=a.name?g._("{sender's name} \u0e16\u0e36\u0e07 {group name}",[g._param("sender's name",i),g._param("group name",a.name)]):g._("{sender's name} \u0e16\u0e36\u0e07\u0e01\u0e25\u0e38\u0e48\u0e21\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13",[g._param("sender's name",i)]));b("MessengerDesktopNotifications").showNotification({title:h,body:f,icon:a.image_src||c||e.big_image_src||e.image_src,closeTime:null,onClick:function(){window.focus(),b("MessengerActions").selectThread(a.thread_id)},tag:d.message_id,silent:!b("MessengerSettingsStore").getSettings().sound_enabled});b("MessengerDesktopNotifications").hasDefaultSound()||p(d)})}a={_shouldUpdateTitle:!0,init:function(a){var c=this;this._viewer=a;this._threadInformer=b("MercuryThreadInformer").getForFBID(this._viewer);this._highResImageMap=new Map();this._shouldMarkAllAsSeenWhenActive=!0;this._shouldUpdateFavicon=!0;this._enabled=!0;b("CurrentUser").isWorkUser()&&(this._availabilityStatusStore=null,b("Bootloader").loadModules(["WorkChatAvailabilityStatusStore"],function(a){c._availabilityStatusStore=a},"MessengerBrowserAlerts"));b("Event").listen(window,"focus",function(){o(),b("clearInterval")(m)});b("Event").listen(window,"blur",function(){m=b("setIntervalAcrossTransitions")(o,k)});this._threadInformer.subscribe("messages-received",function(a,b){for(var d in b)b[d].forEach(function(a){c.handleMessageReceived(a)})});this._threadInformer.subscribe("unseen-updated",this._handleUnseenUpdated.bind(this));this._threadInformer.subscribe("unread-updated",this._handleUnseenUpdated.bind(this))},disable:function(){this._enabled=!1},enable:function(){this._enabled=!0},disableMarkAllAsSeenWhenActive:function(){this._shouldMarkAllAsSeenWhenActive=!1},enableMarkAllAsSeenWhenActive:function(){this._shouldMarkAllAsSeenWhenActive=!0},disableFaviconUpdate:function(){this._shouldUpdateFavicon=!1},disableTitleUpdate:function(){this._shouldUpdateTitle=!1},enableTitleUpdate:function(){this._shouldUpdateTitle=!0},handleMessageReceived:function(a){var c=this;if(!this._enabled)return;var d=b("WorkplaceChatHelper").getIsSystemDoNotDisturbOn();d=d||this._availabilityStatusStore&&this._availabilityStatusStore.getIsDoNotDisturb(this._viewer);if(d||a.author===this._viewer||!a.is_unread||a.thread_id===b("MessengerURIStore").getState().activeThreadID&&b("UserActivity").isOnTab()||a.folder!=b("MessagingTag").INBOX&&a.folder!=b("MessagingTag").ARCHIVED)return;b("MessengerState.bs").getThreadMeta(this._viewer,a.thread_id,function(d){if(b("MercuryThreadInfo").isMuted(d))if(!b("MercuryThreadInfo").areMentionsMuted(d)){if(!a.profile_ranges||!a.profile_ranges.some||!a.profile_ranges.some(function(a){return a.id===c._viewer}))return}else return;var e=b("CurrentUser").getID();b("MessengerState.bs").compute(e,function(f){f=f.blocked_ids;if(b("MercuryIgnoredBlockedParticipants.bs").isPresentInGroupThread(e,f,d))return;b("MessengerSettingsStore").getSettings().desktopNotifsEnabled&&!b("UserActivity").isOnTab()?c._attemptDesktopNotification(d,a):a.log_message_type!=="log:unsubscribe"&&p(a);b("CurrentUser").isWorkUser()?f=b("gkx")("997564")?b("MessengerState.bs").getUnreadThreadCount(c._viewer):b("MessengerState.bs").getUnseenCount(c._viewer):f=b("MessengerState.bs").getUnseenUnreadCount(c._viewer);!b("UserActivity").isOnTab()&&f>0&&b("MercuryNotificationRenderer").renderDocumentTitle(a.thread_id,function(a){!n&&c._shouldUpdateTitle&&(n=b("DocumentTitle").blink(a))})})})},showRTCNotification:function(a,c){var d=this;if(b("UserActivity").isOnTab()){c(null);return}var e=this._availabilityStatusStore&&this._availabilityStatusStore.getIsDoNotDisturb(this._viewer);if(e){c(null);return}this._highResImageMap||(this._highResImageMap=new Map());var f=a.peerID;if(!this._highResImageMap.has(f)){e=function(b,e){d._highResImageMap.set(f.toString(),e.uri),d._displayRTCDesktopNotification(e.uri,a,c)};new(b("ImageSourceRequest"))().setFBID(f).setType(b("ImageSourceType").PROFILE_PICTURE).setDimensions(i,i).setResizeMode("p").setCallback(e.bind(null,f)).send()}else this._displayRTCDesktopNotification(this._highResImageMap.get(f),a,c)},_updateFavicon:function(a){if(!this._shouldUpdateFavicon)return;a===0?b("FavIcon").set(b("MessengerFaviconUrls")["default"]):b("FavIcon").set(b("MessengerFaviconUrls").unread)},_displayRTCDesktopNotification:function(a,c,d){var e=b("MercuryIDs").getParticipantIDFromUserID(c.peerID);b("MessengerParticipants.bs").get(e,function(f){var i;c.isVideoCall?c.isGroupCall?i=g._("\u0e2a\u0e32\u0e22\u0e40\u0e23\u0e35\u0e22\u0e01\u0e40\u0e02\u0e49\u0e32\u0e27\u0e34\u0e14\u0e35\u0e42\u0e2d\u0e41\u0e0a\u0e17\u0e41\u0e1a\u0e1a\u0e01\u0e25\u0e38\u0e48\u0e21"):i=g._("\u0e21\u0e35\u0e2a\u0e32\u0e22\u0e27\u0e34\u0e14\u0e35\u0e42\u0e2d\u0e04\u0e2d\u0e25\u0e40\u0e02\u0e49\u0e32\u0e21\u0e32"):c.isGroupCall?i=g._("\u0e2a\u0e32\u0e22\u0e40\u0e23\u0e35\u0e22\u0e01\u0e40\u0e02\u0e49\u0e32\u0e01\u0e32\u0e23\u0e42\u0e17\u0e23\u0e41\u0e1a\u0e1a\u0e01\u0e25\u0e38\u0e48\u0e21"):i=g._("\u0e21\u0e35\u0e2a\u0e32\u0e22\u0e42\u0e17\u0e23\u0e40\u0e02\u0e49\u0e32");f=g._("{caller} \u0e01\u0e33\u0e25\u0e31\u0e07\u0e42\u0e17\u0e23\u0e2b\u0e32\u0e04\u0e38\u0e13 \u0e04\u0e25\u0e34\u0e01\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e23\u0e31\u0e1a\u0e2a\u0e32\u0e22",[g._param("caller",f.short_name)]);e=b("MessengerDesktopNotifications").showNotification({title:i,body:f,icon:a,closeTime:h,onShow:function(){b("Bootloader").loadModules(["RTWebUserActionLogger"],function(a){a.logPreCallImpression({callID:c.callID,callType:a.getCallType(c.isGroupCall),mediaType:a.getMediaType(!c.isVideoCall),surface:"desktop_notification",component:"accept_button"})},"MessengerBrowserAlerts")},onClick:function(){window.focus(),b("Bootloader").loadModules(["RTWebUserActionLogger"],function(a){a.logPreCallClick({callID:c.callID,callType:a.getCallType(c.isGroupCall),mediaType:a.getMediaType(!c.isVideoCall),surface:"desktop_notification",component:"accept_button"})},"MessengerBrowserAlerts"),c.onNotificationClicked()}});d(e)})},_handleUnseenUpdated:function(){var a=this;if(!this._enabled)return;var c=b("MessengerState.bs").getUnseenUnreadCount(this._viewer);if(this._shouldMarkAllAsSeenWhenActive&&b("UserActivity").isOnTab()&&b("UserActivity").isActive()&&c>0){this._updateFavicon(0);b("MessengerState.bs").markAsSeen(this._viewer);return}this._shouldUpdateTitle&&b("DocumentTitle").badge(c);this._updateFavicon(c);n&&c===0&&(n.stop(),n=null);this._shouldMarkAllAsSeenWhenActive&&!this._focusToken&&c>0&&(this._focusToken=b("UserActivity").subscribe(function(){b("UserActivity").isOnTab()&&(a._focusToken&&a._focusToken.unsubscribe(),a._focusToken=null,b("MessengerState.bs").markAsSeen(a._viewer))}))},_attemptDesktopNotification:function(a,c){var d=this;if(!a.snippet_sender)return;if(!this._highResImageMap.has(a.snippet_sender)){var e=function(b,e){d._highResImageMap.set(a.snippet_sender,e.uri),q(a,e.uri,c)};new(b("ImageSourceRequest"))().setFBID(b("MercuryIDs").getUserIDFromParticipantID(a.snippet_sender)).setType(b("ImageSourceType").PROFILE_PICTURE).setDimensions(i,i).setResizeMode("p").setCallback(e.bind(null,a.snippet_sender)).send()}else q(a,this._highResImageMap.get(a.snippet_sender),c)}};e.exports=a}),null);
__d("XMessengerDotComLogoutController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/logout/",{next:{type:"String"}})}),null);