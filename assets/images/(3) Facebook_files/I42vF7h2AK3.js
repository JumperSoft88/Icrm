if (self.CavalryLogger) { CavalryLogger.start_js(["sjcW9"]); }

__d("NotificationCounter",["Arbiter","CrossWindowEventEmitter","DocumentTitle","JSLogger","MessengerEnvironment"],(function(a,b,c,d,e,f){var g=new(b("CrossWindowEventEmitter"))("JewelBase"),h={messages:0,notifications:0,requests:0};a={init:function(){var a=this;b("Arbiter").subscribe("update_title",this._handleUpdate.bind(this));b("Arbiter").subscribe("jewel/count-updated",this._handleCountUpdate.bind(this));g.addListener("count-updated",function(b){a._handleCountUpdate("",b)})},getCount:function(){var a=0;for(var c in h){var d=Number(h[c]);if(typeof h[c]==="string"&&isNaN(d))return h[c];if(isNaN(d)||d<0){b("JSLogger").create("jewels").error("bad_count",{jewel:c,count:h[c]});continue}a+=d}return a},updateTitle:function(){if(b("MessengerEnvironment").messengerui)return;var a=this.getCount();b("DocumentTitle").badge(a)},_handleCountUpdate:function(a,b){h[b.jewel]=b.count,this.updateTitle()},_handleUpdate:function(a,b){this.updateTitle()}};e.exports=a}),null);
__d("XWorkHubController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/notifications/hub/{?tab}/{?alert_id}/",{ref:{type:"String"},tab:{type:"String"},selected_key:{type:"String",defaultValue:"app_401904056828201"},alert_id:{type:"String"},mini:{type:"Bool",defaultValue:!1}})}),null);
__d("NotificationJewelController",["Arbiter","Bootloader","Event","EventProfiler","FunnelLogger","IndeterminateNotificationCounter","NotificationConstants","NotificationCounter","NotificationJewelFunnelLoggingConstants","NotificationSeenState","NotificationStore","NotificationUpdates","XWorkHubController","clearTimeout","createObjectFrom","curry","gkx","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){var g=b("NotificationConstants").PayloadSourceType,h=b("NotificationJewelFunnelLoggingConstants").FUNNEL_LOGGING_EVENT,i=b("NotificationJewelFunnelLoggingConstants").FUNNEL_LOGGING_NAME,j=0,k=!1,l=null;function m(a){var c=b("NotificationSeenState").getUnseenCount();b("Arbiter").inform("jewel/count-updated",{jewel:a,count:c,animation:"none"},"state")}a=function(){"use strict";function a(a,c){var d=this,e=c.badgeAnimationData,f=c.classification,k=c.endPoint,n=c.isBizsite,o=c.list;c=c.unseenNotifs;k&&b("NotificationStore").registerEndpoint({endpointControllerName:k,classification:f});n?b("IndeterminateNotificationCounter").init(c.length):b("NotificationCounter").init();var p=b("Event").listen(a.getRoot(),"mouseover",function(){b("FunnelLogger").startFunnel(i),p&&p.remove(),p=null,b("FunnelLogger").appendAction(i,h.MOUSE_OVER_ON_JEWEL),d.eagerRender(o)}),q=null;b("Event").listen(a.getRoot(),"mouseover",function(){q=b("setTimeoutAcrossTransitions")(function(){b("Bootloader").loadModules(["QE2Logger"],function(a){a.logExposureForUser("www_jewel_tooltip_experiment")},"NotificationJewelController"),q=null},500)});b("Event").listen(a.getRoot(),"mouseout",function(){q&&b("clearTimeout")(q)});b("gkx")("678265")&&b("Event").listen(a.getButton(),"click",function(a){if(a.metaKey||a.ctrlKey){a=b("XWorkHubController").getURIBuilder().setString("ref","jewel").setString("tab","all").getURI();window.open(a,"notification_hub_tab_identifier")}});var r=!1,s=a.subscribe("opened",function(){r||(r=!0,b("EventProfiler").tagCurrentActiveInteractionsAs("FirstNotificationJewelOpen")),l&&l(),s&&s.unsubscribe(),s=null,o.open()}),t=o.pause.bind(o);a.subscribe("opened",function(){window.setTimeout(t,0),m(a.name),b("Bootloader").loadModules(["NotificationVPVs"],function(a){return a.clearImpressions()},"NotificationJewelController"),b("Arbiter").inform("notificationJewel/opened")});a.subscribe("closed",function(){o.unpause(),m(a.name),b("Arbiter").inform("notificationJewel/closed"),o.setFlyoutOpenState(!1)});a.subscribe("user-open",function(a,b){o.setFlyoutOpenState(!0)});a.isOpen()&&o.setFlyoutOpenState(!0);b("NotificationUpdates").subscribe("seen-state-updated",b("curry")(m,a.name));e&&(e.logWithQEUniverse&&b("Bootloader").loadModules(["QE2Logger"],function(a){return a.logExposureForUser(e.logWithQEUniverse)},"NotificationJewelController"),e.injectWithAnimation&&b("Bootloader").loadModules(["RelationshipDelightsBadge"],function(b){return b.inject(a,e.injectWithAnimation)},"NotificationJewelController"));b("NotificationUpdates").handleUpdate(g.INITIAL_LOAD,{seenState:b("createObjectFrom")(c,j)});m(a.name);b("Arbiter").inform("jewel_mounted")}var c=a.prototype;c.eagerRender=function(a){k||(k=!0,l=b("EventProfiler").notifyRunningEagerInteraction(["Notifications_Jewel_Button"],"click"),a.open())};return a}();e.exports=a}),null);
__d("NotificationBucketUtils",["JSResource"],(function(a,b,c,d,e,f){"use strict";a={getCustomModuleForType:function(a){switch(a){case"TICKER":return b("JSResource")("NotificationBucketTicker.react").__setRef("NotificationBucketUtils");default:return null}}};e.exports=a}),null);
__d("NotificationAsyncWrapper",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");e.exports=a.Fragment}),null);
__d("NotificationJewelListBucketHeader.react",["cx","FDSText.react","React"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");function a(a){return a.isNotifsBiz===!0?h.jsx("div",{className:"_7ghi",id:"notif_jewel_bucket_header",children:h.jsx(b("FDSText.react"),{size:"body3",weight:"bold",children:a.title})}):h.jsx("div",{className:"_fyy",children:a.title.toUpperCase()})}e.exports=a}),null);
__d("NotificationBucketGeneric.react",["cx","NotificationJewelListBucketHeader.react","React"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.ids,d=a.isNotifsBiz,e=a.isSingleBucketInList,f=a.listRenderer,g=a.startIndex;a=a.title;if(c.length===0)return null;f=f(c,g);return h.jsxs("div",{className:"_32hm",children:[a&&!e?h.jsx(b("NotificationJewelListBucketHeader.react"),{isNotifsBiz:d,title:a}):null,h.jsx("ul",{children:f})]})};return c}(h.Component);e.exports=a}),null);
__d("NotificationBucket.react",["cx","BootloadedComponent.react","NotificationBucketGeneric.react","NotificationBucketUtils","NotificationJewelListBucketHeader.react","React","XUISpinner.react"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.$1=function(){var a=this.props.bucket,c=a.bucketType;a=a.title;return h.jsxs("div",{children:[h.jsx(b("NotificationJewelListBucketHeader.react"),{title:a,bucketType:c}),h.jsx(b("XUISpinner.react"),{className:"_1e00"})]})};d.render=function(){var a=this.props,c=a.bucket,d=a.listRenderer;a=a.startIndex;var e=c.bucketType;e=b("NotificationBucketUtils").getCustomModuleForType(e);return!e?h.jsx(b("NotificationBucketGeneric.react"),babelHelpers["extends"]({},c,{isNotifsBiz:this.props.isNotifsBiz,isSingleBucketInList:this.props.isSingleBucketInList,listRenderer:d,startIndex:a})):h.jsx(b("BootloadedComponent.react"),babelHelpers["extends"]({bootloadLoader:e,bootloadPlaceholder:this.$1()},c))};return c}(h.Component);e.exports=a}),null);
__d("WebNotificationsBottomCollisionsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:WebNotificationsBottomCollisionsLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:WebNotificationsBottomCollisionsLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:WebNotificationsBottomCollisionsLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setVC=function(a){this.$1.vc=a;return this};return a}();c={vc:!0};e.exports=a}),null);
__d("NotificationJewelList.react",["cx","fbt","Animation","ErrorBoundary.react","Event","FunnelLogger","JewelLogger","LogicalGrid.react","NotificationBucket.react","NotificationJewelFunnelLoggingConstants","NotificationListConfig","NotificationListItem.react","NotificationListPropTypes","NotificationListRetryFetchButton.react","NotificationVPVs","React","ReactDOM","ScrollableArea.react","SubscriptionsHandler","TimeSlice","TrackingNodes","Vector","WebNotificationsBottomCollisionsTypedLogger","XUISpinner.react","clearTimeout","debounce","getObjectValues","isEmpty","performanceNowNoFallback","setTimeoutAcrossTransitions","throttle"],(function(a,b,c,d,e,f,g,h){var i,j=b("NotificationJewelFunnelLoggingConstants").FUNNEL_LOGGING_EVENT,k=b("NotificationJewelFunnelLoggingConstants").FUNNEL_LOGGING_NAME;a=b("NotificationListConfig").numStoriesFromEndBeforeAFetchIsTriggered;var l=b("React"),m=160,n=530,o=61,p=Math.ceil(o*a),q=430,r;function s(a){r!=a&&(new(b("WebNotificationsBottomCollisionsTypedLogger"))().log(),r=a)}c=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={lastMeasuredHeight:null},d.$2=[],d.$6=new(b("SubscriptionsHandler"))(),d.$7=!1,d.$10=function(){if(!d.$3||!d.$5)return;var a=b("ReactDOM").findDOMNode(d.$3);if(!a)return;var c=b("ReactDOM").findDOMNode(d.$5);if(!c)return;var e=b("NotificationVPVs").getValidatedRectangle(c);if(d.props.afterScroll){var f=function(){d.props.afterScroll(d.$8(),a,e)};c=b("Vector").getElementDimensions(c).y;var g=d.$5&&d.$5.getArea();g&&g.getContentHeight()>0&&d.$7===!1&&b("performanceNowNoFallback")&&b("getObjectValues")(d.props.notifs).length>0&&(d.$7=!0,b("JewelLogger").logJewelListComponentEvent({jewelName:"notifications",eventName:"list_population_initial",timestamp:b("performanceNowNoFallback")()}));g&&c>0&&g.getContentHeight()>=c?(b("performanceNowNoFallback")&&b("JewelLogger").logJewelListComponentEvent({jewelName:"notifications",eventName:"list_populated",timestamp:b("performanceNowNoFallback")()}),b("TimeSlice").guard(f,"NotificationJewelList afterScrollCallback",{propagationType:b("TimeSlice").PropagationType.ORPHAN})()):f()}},d.$16=function(a,b){b=b||0;return a.map(function(a,c){a=d.props.notifs[a];if(!a)return null;c=c+b;return d.$17(a,c,c)})},d.$18=function(){d.setState(function(a){return babelHelpers["extends"]({},a,{lastMeasuredHeight:d.$9()})})},d.$19=function(){var a=b("debounce")(d.$18);d.$6.addSubscriptions(a);return a}(),d.$22=function(){d.props.onResetRetryCount&&d.props.onResetRetryCount()},d.$23=function(){b("FunnelLogger").appendAction(k,j.SCROLL_TO_FETCH),d.$10()},d.$24=b("throttle").acrossTransitionsWithBlocking(d.$23),c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.$8=function(){if(!this.$4||!this.$5)return!1;var a=b("ReactDOM").findDOMNode(this.$5);if(!a)return!1;var c=b("ReactDOM").findDOMNode(this.$4);if(!c)return!1;var d=b("Vector").getElementDimensions(a).y;if(d===0)return!1;a=b("Vector").getElementPosition(a).y+d;d=b("Vector").getElementPosition(c).y;c=this.$5&&this.$5.getArea();c&&c.getScrollTop()>0&&d<a&&s(b("getObjectValues")(this.props.notifs).length);return d-p<a};d.$9=function(){var a=b("Vector").getViewportDimensions().y;a=Math.min(this.props.maxHeight||n,a-m);return a};d.$11=function(a){return this.$2.slice(0,a).reduce(function(a,b){return a+b},0)};d.$12=function(a){var b=0;a.forEach(function(a){a.ids&&a.ids.length!==0&&b++});return b<=1};d.$13=function(a){this.$2=a?a.map(function(a){return a.ids.length}):[]};d.$14=function(){var a=this,b=this.props.buckets;if(!b)return null;var c=this.$12(b);return b.map(function(b,d){return a.$15(b,d,c)})};d.$15=function(a,c,d){var e=this.$11(c);if(a.ids&&a.ids.length){var f=this.props.notifs,g=a.ids.filter(function(a){return!!f[a]});if(g.length===0)return null}return l.jsx("li",{children:l.jsx(b("NotificationBucket.react"),{bucket:a,isNotifsBiz:this.props.isNotifsBiz,isSingleBucketInList:d,listRenderer:this.$16,startIndex:e})},c)};d.$17=function(a,c,d){var e=a.alert_id;return l.jsx(b("ErrorBoundary.react"),{children:l.jsx(b("NotificationListItem.react"),{isNotifsBiz:this.props.isNotifsBiz,isNotifsIntl:this.props.isNotifsIntl,isRead:this.props.readState[e],onChevronHide:this.props.onChevronHide,onChevronShow:this.props.onChevronShow,onClick:this.props.onClick,onRead:this.props.onRead,parent:this,paused:this.props.paused,row:c,rowIndex:d,shortenTimestamp:this.props.shortenTimestamp,sourceView:this.props.sourceView,target:this.props.target,visible:!this.props.hiddenState[e],notification:a})},e)};d.$20=function(a){this.props.onNumNotificationsViewableChange&&this.props.onNumNotificationsViewableChange(a/o)};d.UNSAFE_componentWillMount=function(){this.$13(this.props.buckets),this.$6.addSubscriptions(b("Event").listen(window,"resize",this.$19)),this.$18()};d.componentDidMount=function(){var a=this.state.lastMeasuredHeight;a!=null&&this.$20(a);b("performanceNowNoFallback")&&b("JewelLogger").logJewelListComponentEvent({jewelName:"notifications",eventName:"list_did_mount",timestamp:b("performanceNowNoFallback")()})};d.UNSAFE_componentWillReceiveProps=function(a){if(a.buckets===this.props.buckets)return;this.$13(a.buckets)};d.componentDidUpdate=function(a,c){if(this.props.paused&&!a.paused&&(this.props.shouldScroll&&this.$5)){a=this.$5.getArea();a&&a.scrollToTop(!1)}this.props.retryLimitReached&&b("JewelLogger").logJewelFail();a=this.state.lastMeasuredHeight;if(a!=null&&a!==c.lastMeasuredHeight){this.$20(a);this.$1&&(this.$1.stop(),delete this.$1);if(!(i||(i=b("isEmpty")))(this.props.notifs)){c=b("ReactDOM").findDOMNode(this.$5);c&&(this.$1=new(b("Animation"))(c).to("height",a+"px").duration(100).go())}}var d=b("setTimeoutAcrossTransitions")(this.$10,0);this.$6.addSubscriptions({remove:function(){b("clearTimeout")(d)}})};d.componentWillUnmount=function(){this.$6.release(),this.$1&&(this.$1.stop(),delete this.$1)};d.$21=function(a,b){return b.indexOf(a)};d.$25=function(){var a=this;if(this.props.buckets&&this.props.buckets.length)return this.$14();var c=b("getObjectValues")(this.props.notifs).filter(Boolean).map(function(a){return a.alert_id});return b("getObjectValues")(this.props.notifs).filter(Boolean).map(function(b,d){var e=b.alert_id;e=a.$21(e,c);return a.$17(b,e,d)})};d.render=function(){var a=this,c=this.props.notifs,d=null,e=null,f=q,g=null,j=l.jsx("ul",{"data-ft":b("TrackingNodes").getTrackingInfo(b("TrackingNodes").types.NOTIFICATION_JEWEL),"data-gt":this.props.tracking,"data-testid":void 0});if(!(i||(i=b("isEmpty")))(c))d=l.jsx(b("LogicalGrid.react"),{ref:function(b){return a.$3=b},component:j,children:this.$25()}),e=this.state.lastMeasuredHeight;else if(!this.props.canFetchMore){c=this.props.isNotifsBiz&&this.props.emptyState?this.props.emptyState:h._("\u0e44\u0e21\u0e48\u0e21\u0e35\u0e01\u0e32\u0e23\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19\u0e43\u0e2b\u0e21\u0e48");d=l.jsx("div",{className:"_572e","data-testid":void 0,children:c})}this.props.canFetchMore&&(this.props.retryLimitReached&&this.props.onResetRetryCount!=null?g=l.jsx(b("NotificationListRetryFetchButton.react"),{handleRetryClick:this.$22}):g=l.jsx(b("XUISpinner.react"),{ref:function(b){return a.$4=b},paused:!this.props.currentlyFetching,className:"jewelLoading"}));j=null;if(this.props.upsell){c=this.props.upsell.module;j=l.jsx(c,babelHelpers["extends"]({},this.props.upsell.props))}c="_50-t"+(this.props.showingChevron?" _2iy1":"");f=l.jsxs(b("ScrollableArea.react"),{ref:function(b){return a.$5=b},width:f,fade:!0,persistent:!0,onScroll:this.$24,children:[d,g]});return l.jsxs("div",{style:e?{height:e+"px"}:{},className:c,children:[f,j]})};return c}(l.Component);c.defaultProps={retryLimitExceeded:!1};c.propTypes=b("NotificationListPropTypes");e.exports=c}),null);
__d("ChatGroupLeaveConversationDialogBootloader",["Bootloader","React"],(function(a,b,c,d,e,f){"use strict";var g=b("React");a={show:function(a,c){b("Bootloader").loadModules(["MessengerDialogs.bs","MessengerState.bs","ChatGroupLeaveConversationDialog.react","MercuryIgnoredBlockedParticipants.bs","MessengerAdminGroupUtils"],function(b,d,e,f,h){d.compute(a,function(i){i=i.blocked_ids;var j=d.getThreadMetaNow(a,c),k=f.isPresentInGroupThread(a,i,j),l=(j==null?void 0:j.admins)&&(j==null?void 0:j.admins[a])!==void 0;b.showDialog(function(){return g.jsx(e,{isAdmin:l,isShown:!0,isWorkSyncedChat:h.isWorkSyncedGroupChat(j),onHide:function(){return b.removeDialog()},threadID:c,viewer:a,showCanAddBack:k})})})},"ChatGroupLeaveConversationDialogBootloader")}};e.exports=a}),null);
__d("FantaDropdownMenuLeaveConversation",["ix","cx","fbt","Bootloader","ChatGroupLeaveConversationDialogBootloader","Dialog","FantaTabActions","Image.react","MercuryMessageObject","MercuryMessageActions","MessengerAdminGroupUtils","MessengerState.bs","React","asset","qex"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=b("MercuryMessageObject").get(),k=b("MercuryMessageActions").get(),l=b("React");function m(a){a=b("MessengerAdminGroupUtils").isWorkSyncedGroupChat(a);a=a?i._("\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e41\u0e0a\u0e17\u0e41\u0e25\u0e30\u0e01\u0e25\u0e38\u0e48\u0e21"):i._("\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e01\u0e25\u0e38\u0e48\u0e21");return l.jsxs("div",{className:"_6pdg","data-testid":void 0,children:[l.jsx(b("Image.react"),{className:"_6ng3",src:g("637999")}),l.jsx("span",{className:"_6ng4",children:a})]})}function n(a,c,d,e){return function(){b("qex")._("922586")===!0?b("ChatGroupLeaveConversationDialogBootloader").show(d,c):o(a,c,d),q(e)}}function o(a,c,d){var e=[];e.push({name:"unsubscribe",label:i._("\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e01\u0e32\u0e23\u0e2a\u0e19\u0e17\u0e19\u0e32"),handler:function(){return p(c,d)}});e.push(b("Dialog").CANCEL);var f,g=b("MessengerAdminGroupUtils").isWorkSyncedGroupChat(a);a=(a==null?void 0:a.admins)&&(a==null?void 0:a.admins[d])!==void 0;g&&a?f=i._("\u0e01\u0e32\u0e23\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e01\u0e25\u0e38\u0e48\u0e21\u0e08\u0e30\u0e40\u0e1b\u0e47\u0e19\u0e01\u0e32\u0e23\u0e15\u0e31\u0e14\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e4c\u0e04\u0e38\u0e13\u0e08\u0e32\u0e01\u0e01\u0e32\u0e23\u0e40\u0e1b\u0e47\u0e19\u0e40\u0e08\u0e49\u0e32\u0e02\u0e2d\u0e07\u0e41\u0e25\u0e30\u0e2d\u0e19\u0e38\u0e0d\u0e32\u0e15\u0e43\u0e2b\u0e49\u0e2a\u0e21\u0e32\u0e0a\u0e34\u0e01\u0e04\u0e19\u0e2d\u0e37\u0e48\u0e19\u0e46 \u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e40\u0e18\u0e23\u0e14\u0e41\u0e0a\u0e17\u0e19\u0e35\u0e49\u0e44\u0e14\u0e49 \u0e04\u0e38\u0e13\u0e08\u0e30\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e2a\u0e48\u0e07\u0e2b\u0e23\u0e37\u0e2d\u0e23\u0e31\u0e1a\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e43\u0e2b\u0e21\u0e48\u0e44\u0e14\u0e49\u0e2d\u0e35\u0e01\u0e15\u0e48\u0e2d\u0e44\u0e1b \u0e41\u0e25\u0e30\u0e22\u0e31\u0e07\u0e08\u0e30\u0e16\u0e39\u0e01\u0e25\u0e1a\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e01\u0e25\u0e38\u0e48\u0e21\u0e2d\u0e35\u0e01\u0e14\u0e49\u0e27\u0e22"):g?f=i._("\u0e04\u0e38\u0e13\u0e08\u0e30\u0e2b\u0e22\u0e38\u0e14\u0e23\u0e31\u0e1a\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e08\u0e32\u0e01\u0e01\u0e32\u0e23\u0e2a\u0e19\u0e17\u0e19\u0e32\u0e19\u0e35\u0e49\u0e41\u0e25\u0e30\u0e1c\u0e39\u0e49\u0e04\u0e19\u0e08\u0e30\u0e40\u0e2b\u0e47\u0e19\u0e27\u0e48\u0e32\u0e04\u0e38\u0e13\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e41\u0e0a\u0e17 \u0e04\u0e38\u0e13\u0e22\u0e31\u0e07\u0e08\u0e30\u0e16\u0e39\u0e01\u0e25\u0e1a\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e01\u0e25\u0e38\u0e48\u0e21\u0e2d\u0e35\u0e01\u0e14\u0e49\u0e27\u0e22"):a?f=i._("Leaving this group will remove you as an owner and allow other members to manage the group. You will no longer be able to send and receive messages."):f=i._("\u0e04\u0e38\u0e13\u0e08\u0e30\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e08\u0e32\u0e01\u0e01\u0e32\u0e23\u0e2a\u0e19\u0e17\u0e19\u0e32\u0e19\u0e35\u0e49\u0e2d\u0e35\u0e01\u0e41\u0e25\u0e30\u0e04\u0e19\u0e2d\u0e37\u0e48\u0e19\u0e08\u0e30\u0e40\u0e2b\u0e47\u0e19\u0e27\u0e48\u0e32\u0e04\u0e38\u0e13\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e01\u0e32\u0e23\u0e2a\u0e19\u0e17\u0e19\u0e32");a=g?i._("\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e01\u0e25\u0e38\u0e48\u0e21\u0e41\u0e25\u0e30\u0e01\u0e32\u0e23\u0e41\u0e0a\u0e17"):i._("\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e01\u0e32\u0e23\u0e2a\u0e19\u0e17\u0e19\u0e32\u0e43\u0e0a\u0e48\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48");new(b("Dialog"))().setTitle(a).setBody(f).setButtons(e).show()}function p(a,c){if(!b("MessengerState.bs").isEmptyLocalThread(c,a)){c=j.constructLogMessageObject("source:chat:web",a,"log:unsubscribe",{removed_participants:[c]});k.send(c)}b("FantaTabActions").closeTab(a);return!0}function q(a){b("Bootloader").loadModules(["FantaDropdownMenuFunnelLogger","FantaDropdownMenuFunnelLoggerConstants"],function(b,c){b.logMenuItem(c.OPTIONS.LEAVE_CONVERSATION,a)},"FantaDropdownMenuLeaveConversation")}function a(a,c){var d=[];d.push({name:"unsubscribe",label:i._("\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e01\u0e32\u0e23\u0e2a\u0e19\u0e17\u0e19\u0e32"),handler:function(){return p(a,c)}});d.push(b("Dialog").CANCEL);var e=i._("\u0e04\u0e38\u0e13\u0e08\u0e30\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e08\u0e32\u0e01\u0e01\u0e32\u0e23\u0e2a\u0e19\u0e17\u0e19\u0e32\u0e19\u0e35\u0e49\u0e2d\u0e35\u0e01\u0e41\u0e25\u0e30\u0e04\u0e19\u0e2d\u0e37\u0e48\u0e19\u0e08\u0e30\u0e40\u0e2b\u0e47\u0e19\u0e27\u0e48\u0e32\u0e04\u0e38\u0e13\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e01\u0e32\u0e23\u0e2a\u0e19\u0e17\u0e19\u0e32"),f=i._("\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e01\u0e32\u0e23\u0e2a\u0e19\u0e17\u0e19\u0e32\u0e43\u0e0a\u0e48\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48");new(b("Dialog"))().setTitle(f).setBody(e).setButtons(d).show()}function c(a,b,c,d,e){return a===!0?{type:"item",label:m(b),onClick:n(b,c,d,e)}:null}e.exports={getMenuItem:c,showLeaveDialog:a}}),null);
__d("WebMessengerConfirmBlockDialog",["fbt","React","SimpleXUIDialog","XUIDialogButton.react"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");a={show:function(a){a=a&&a.length>0?g._("\u0e04\u0e38\u0e13\u0e44\u0e14\u0e49\u0e1a\u0e25\u0e47\u0e2d\u0e01 {name} \u0e41\u0e25\u0e49\u0e27",[g._param("name",a)]):g._("You have blocked the sender");var c=g._("\u0e04\u0e38\u0e13\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e02\u0e49\u0e32\u0e16\u0e36\u0e07\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e17\u0e35\u0e48\u0e04\u0e38\u0e13\u0e1a\u0e25\u0e47\u0e2d\u0e01\u0e44\u0e1b\u0e41\u0e25\u0e49\u0e27\u0e42\u0e14\u0e22\u0e01\u0e32\u0e23\u0e44\u0e1b\u0e17\u0e35\u0e48\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e17\u0e35\u0e48\u0e01\u0e23\u0e2d\u0e07"),d=h.jsx("div",{children:h.jsx(b("XUIDialogButton.react"),{action:"cancel",label:g._("\u0e15\u0e01\u0e25\u0e07"),use:"confirm"})});b("SimpleXUIDialog").showEx(c,a,d)}};e.exports=a}),null);
__d("WebMessengerDeclineMRDialog",["fbt","FantaDropdownMenuLeaveConversation","MessengerParticipants.bs","React","SimpleXUIDialog","MercuryThreadActions","XUIDialogButton.react","XUIDialogCancelButton.react","MercuryIDs","MessengerMessageRequestsTypedLogger","WebMessengerConfirmBlockDialog","FantaTabActions","MessagingTag","CurrentUser"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React"),i=b("MercuryThreadActions").get();a={show:function(a,c,d,e){var f=function(a){b("WebMessengerConfirmBlockDialog").show(a);a=b("MercuryIDs").getThreadKeyfromThreadIDUserID(c,b("CurrentUser").getID());b("FantaTabActions").closeTab(c);i.changeFolder(c,b("MessagingTag").OTHER);new(b("MessengerMessageRequestsTypedLogger"))().setAction("message_requests_block_request").setThreadID(b("MercuryIDs").getThreadFBIDFromThreadID(c)).setSurface("thread").setFolderType(b("MessagingTag").PENDING).setThreadKey(a).setEntryPoint(null).log()};a=e?h.jsx(b("XUIDialogButton.react"),{action:"cancel",label:g._("\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e01\u0e25\u0e38\u0e48\u0e21"),use:"confirm",onClick:function(a){b("FantaDropdownMenuLeaveConversation").showLeaveDialog(c,b("CurrentUser").getID())}}):h.jsx(b("XUIDialogButton.react"),{action:"cancel",label:g._("\u0e1a\u0e25\u0e47\u0e2d\u0e01"),use:"confirm",onClick:function(){i.blockMessages(c,"message_request_decline",f)}});var j=b("CurrentUser").isWorkUser(),k=b("MessengerParticipants.bs").getNow(b("MercuryIDs").getParticipantIDFromFromThreadID(c));k=k==null?void 0:k.short_name;var l=!e&&!j&&k?g._("\u0e44\u0e21\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e08\u0e32\u0e01 {name} \u0e43\u0e0a\u0e48\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48",[g._param("name",k)]):g._("\u0e1b\u0e0f\u0e34\u0e40\u0e2a\u0e18\u0e01\u0e32\u0e23\u0e2a\u0e19\u0e17\u0e19\u0e32");e?e=g._("\u0e04\u0e38\u0e13\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e01\u0e25\u0e38\u0e48\u0e21\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48 \u0e2a\u0e21\u0e32\u0e0a\u0e34\u0e01\u0e43\u0e19\u0e01\u0e25\u0e38\u0e48\u0e21\u0e08\u0e30\u0e40\u0e2b\u0e47\u0e19\u0e27\u0e48\u0e32\u0e04\u0e38\u0e13\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e01\u0e25\u0e38\u0e48\u0e21"):k?e=j?g._("\u0e04\u0e33\u0e02\u0e2d\u0e2a\u0e48\u0e07\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e08\u0e30\u0e16\u0e39\u0e01\u0e1b\u0e0f\u0e34\u0e40\u0e2a\u0e18 \u0e04\u0e38\u0e13\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e1a\u0e25\u0e47\u0e2d\u0e01 {name} \u0e1a\u0e19 Workplace Chat \u0e2b\u0e23\u0e37\u0e2d\u0e25\u0e1a\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e40\u0e2b\u0e25\u0e48\u0e32\u0e19\u0e35\u0e49\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48",[g._param("name",k)]):g._("\u0e04\u0e38\u0e13\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e25\u0e1a\u0e01\u0e32\u0e23\u0e2a\u0e19\u0e17\u0e19\u0e32\u0e19\u0e35\u0e49\u0e16\u0e32\u0e27\u0e23 \u0e1a\u0e25\u0e47\u0e2d\u0e01 {name} \u0e44\u0e21\u0e48\u0e43\u0e2b\u0e49\u0e2a\u0e48\u0e07\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e16\u0e36\u0e07\u0e04\u0e38\u0e13 \u0e2b\u0e23\u0e37\u0e2d\u0e04\u0e38\u0e13\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e41\u0e08\u0e49\u0e07\u0e1b\u0e31\u0e0d\u0e2b\u0e32\u0e43\u0e2b\u0e49\u0e40\u0e23\u0e32\u0e17\u0e23\u0e32\u0e1a \u0e40\u0e23\u0e32\u0e08\u0e30\u0e44\u0e21\u0e48\u0e41\u0e08\u0e49\u0e07\u0e43\u0e2b\u0e49 {name} \u0e27\u0e48\u0e32\u0e04\u0e38\u0e13\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e01\u0e32\u0e23\u0e40\u0e2b\u0e25\u0e48\u0e32\u0e19\u0e35\u0e49",[g._param("name",k)]):e=g._({"Workplace chat":"\u0e04\u0e33\u0e02\u0e2d\u0e2a\u0e48\u0e07\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e08\u0e30\u0e16\u0e39\u0e01\u0e1b\u0e0f\u0e34\u0e40\u0e2a\u0e18 \u0e04\u0e38\u0e13\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e1a\u0e25\u0e47\u0e2d\u0e01\u0e1a\u0e38\u0e04\u0e04\u0e25\u0e19\u0e35\u0e49\u0e1a\u0e19 Workplace Chat \u0e2b\u0e23\u0e37\u0e2d\u0e25\u0e1a\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e40\u0e2b\u0e25\u0e48\u0e32\u0e19\u0e35\u0e49\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48","Messenger":"\u0e04\u0e33\u0e02\u0e2d\u0e2a\u0e48\u0e07\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e08\u0e30\u0e16\u0e39\u0e01\u0e1b\u0e0f\u0e34\u0e40\u0e2a\u0e18 \u0e04\u0e38\u0e13\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e1a\u0e25\u0e47\u0e2d\u0e01\u0e1a\u0e38\u0e04\u0e04\u0e25\u0e19\u0e35\u0e49\u0e1a\u0e19 Messenger \u0e2b\u0e23\u0e37\u0e2d\u0e25\u0e1a\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e40\u0e2b\u0e25\u0e48\u0e32\u0e19\u0e35\u0e49\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48"},[g._enum(j?"Workplace chat":"Messenger",{"Workplace chat":"Workplace chat",Messenger:"Messenger"})]);k=b("CurrentUser").getID();var m=b("MercuryIDs").getThreadKeyfromThreadIDUserID(c,k);j=function(a){a==="hide"&&new(b("MessengerMessageRequestsTypedLogger"))().setAction("message_requests_decline_cancel").setThreadID(b("MercuryIDs").getThreadFBIDFromThreadID(c)).setSurface("thread").setFolderType(b("MessagingTag").PENDING).setThreadKey(m).setEntryPoint(null).log()};k=h.jsxs("div",{children:[h.jsx(b("XUIDialogCancelButton.react"),{}),h.jsx(b("XUIDialogButton.react"),{action:"cancel",label:g._("\u0e25\u0e1a"),use:"confirm",onClick:function(){i["delete"](c),d&&d(),new(b("MessengerMessageRequestsTypedLogger"))().setAction("message_requests_delete_request").setThreadID(b("MercuryIDs").getThreadFBIDFromThreadID(c)).setSurface("thread").setFolderType(b("MessagingTag").PENDING).setThreadKey(m).setEntryPoint(null).log()}}),a]});b("SimpleXUIDialog").showEx(e,l,k,j,{})}};e.exports=a}),null);