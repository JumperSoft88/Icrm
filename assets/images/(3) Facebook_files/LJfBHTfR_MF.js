if (self.CavalryLogger) { CavalryLogger.start_js(["+iFC8"]); }

__d("CometSuspenseList.react",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");e.exports=a.SuspenseList}),null);
__d("useCometDeferredDialog",["CometDialogContext","CometSuspendedDialogImpl.react","React","deferredLoadComponent"],(function(a,b,c,d,e,f){"use strict";c=b("React");var g=c.useCallback,h=c.useContext,i=c.useRef;function a(a,c){var d=i(null),e=h(b("CometDialogContext")),f=g(function(d,f){var g=b("deferredLoadComponent")(a);e(b("CometSuspendedDialogImpl.react"),{dialog:g,dialogProps:babelHelpers["extends"]({},d,{loadImmediately:!0}),fallback:c},f)},[e,a,c]);return[f,d]}e.exports=a}),null);
__d("useCometConfirmationDialogComet",["requireDeferred","CometCardedDialogLoadingState.react","React","useCometDeferredDialog"],(function(a,b,c,d,e,f){"use strict";var g=b("requireDeferred")("CometConfirmationDialogImpl.react"),h=b("React");a=b("React");var i=a.useCallback;c=function(){var a=i(function(){return h.jsx(b("CometCardedDialogLoadingState.react"),{})},[]);a=b("useCometDeferredDialog")(g,a);var c=a[0];a=a[1];var d=i(function(a,b,d){d===void 0&&(d=function(){}),c(a,function(a){a?b():d()})},[c]);return[d,a]};e.exports=c}),null);
__d("CometImageCover.react",["BaseImage.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";var g=b("React");d=b("React");var h=d.useCallback,i=d.useRef,j=d.useState;f=function(){var a=document.documentElement;return a==null?!0:Boolean("objectFit"in a.style)}();function a(a){var c=a.loading,d=a.onLoad,e=a.src;a=a.style;var f=j(null),k=f[0],l=f[1],m=i();f=h(function(){var a=m.current;if(a==null||!(a instanceof HTMLImageElement)||typeof a.src!=="string")return;l(a.src);d!=null&&d()},[d]);return k!=null?g.jsx("div",{className:"k4urcfbm bixrwtb6 datstx6m q9uorilb",style:babelHelpers["extends"]({backgroundImage:"url("+k+")",backgroundPosition:"center center",backgroundSize:"cover"},a)}):g.jsx(b("BaseImage.react"),babelHelpers["extends"]({className:"ttbfdpzt do00u71z"},c?{loading:c}:{},{onLoad:f,ref:m,src:e,style:a}))}function c(a){return g.jsx(b("BaseImage.react"),babelHelpers["extends"]({className:"k4urcfbm bixrwtb6 datstx6m q9uorilb"},a))}e.exports=f?c:a}),null);
__d("CometInfiniteScrollTrigger.react",["CometInteractionTracingMetrics","JSTracing","React","mergeRefs","useSuspenseTransition","useVisibilityObserver"],(function(a,b,c,d,e,f){"use strict";var g=b("React");c=b("React");var h=c.useCallback,i=c.useEffect,j=c.useMemo,k=c.useRef;function a(a){var c=a.children,d=a.hasMore,e=a.isLoading,f=a.onLoadMore;a=a.rootMargin;var l=k(!1),m=b("useSuspenseTransition")(),n=m[0],o=k(null),p=h(function(){n(function(){b("JSTracing").clear(function(){f(o)})})},[f,n,o]);i(function(){d&&!e&&l.current&&p()},[p,e,d]);m=h(function(){var a=l.current;l.current=!0;!a&&d&&!e&&p()},[d,e,p]);var q=h(function(){l.current=!1},[]),r=h(function(a){o.current!==a&&(o.current=a,a&&b("CometInteractionTracingMetrics").currentInteractionLogger().forEach(function(b){b.vcTracker&&b.vcTracker.observeLoadingState(a)}))},[]),s=b("useVisibilityObserver")({onHidden:q,onVisible:m,options:{rootMargin:(q=a)!=null?q:0}});m=j(function(){return b("mergeRefs")(s,o,r)},[s,o,r]);return d||e?g.jsx("div",{ref:m,children:c}):null}e.exports=a}),null);
__d("CometScrollableArea.react",["BaseScrollableArea.react","React"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a,c){var d=a.horizontal;d=d===void 0?!0:d;var e=a.id,f=a.tagName;f=f===void 0?"div":f;var h=a.vertical;h=h===void 0?!0:h;a=babelHelpers.objectWithoutPropertiesLoose(a,["horizontal","id","tagName","vertical"]);return g.jsx(b("BaseScrollableArea.react"),babelHelpers["extends"]({horizontal:d,id:e,tagName:f,vertical:h},a,{ref:c,testid:void 0}))}e.exports=g.forwardRef(a)}),null);
__d("NullStateMedia",["IconSource"],(function(a,b,c,d,e,f){"use strict";a={dark:new(b("IconSource"))("nullStateGlyphs","/images/comet/empty_states_icons/media/null_states_media_dark_mode.svg",112),"default":new(b("IconSource"))("nullStateGlyphs","/images/comet/empty_states_icons/media/null_states_media_gray_wash.svg",112)};e.exports=a}),null);
__d("getFeedComposerCometStatusAreaRelayPlaceholderText",["fbt"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){return a?b!=null?g._("\u0e04\u0e38\u0e13\u0e04\u0e34\u0e14\u0e2d\u0e30\u0e44\u0e23\u0e2d\u0e22\u0e39\u0e48 {short name}",[g._param("short name",b)]):g._("\u0e04\u0e38\u0e13\u0e01\u0e33\u0e25\u0e31\u0e07\u0e04\u0e34\u0e14\u0e2d\u0e30\u0e44\u0e23\u0e2d\u0e22\u0e39\u0e48"):b!=null?g._("\u0e40\u0e02\u0e35\u0e22\u0e19\u0e2d\u0e30\u0e44\u0e23\u0e1a\u0e32\u0e07\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e16\u0e36\u0e07 {short name} ...",[g._param("short name",b)]):g._("\u0e40\u0e02\u0e35\u0e22\u0e19\u0e2d\u0e30\u0e44\u0e23\u0e2b\u0e19\u0e48\u0e2d\u0e22...")}e.exports=a}),null);
__d("CometPagelet.react",["requireCond","CometBackupPlaceholder.react","CometPlaceholder.react","CometSuspenseList.react","cr:1191379","React"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React");f=h.forwardRef(function(a,b){a=a.children;return h.jsxs(h.Fragment,{children:[" ",a(b,function(){return null})," "]})});var i=(g=b("cr:1191379"))!=null?g:f;function a(a,c){var d=a.children,e=a.className,f=a.fallback,g=a.hidden,j=a.name,k=a.position;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","className","fallback","hidden","name","position"]);var l=j;k!=null&&k<2?l+="_"+k:k!=null&&(l+="_{n}");return h.jsx(i,babelHelpers["extends"]({},a,{name:l,position:k,ref:c,children:function(a,c){return h.jsxs(b("CometPlaceholder.react"),{fallback:f,children:[h.jsx(c,{}),h.jsx("div",{className:e,"data-pagelet":l,hidden:g,ref:a,children:d})]})}}))}function c(a,c){var d=a.children,e=a.className,f=a.fallback,g=a.hidden,j=a.name,k=a.position;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","className","fallback","hidden","name","position"]);var l=j;k!=null&&k<2?l+="_"+k:k!=null&&(l+="_{n}");return h.jsx(i,babelHelpers["extends"]({},a,{name:l,position:k,ref:c,children:function(a,c){return h.jsxs(b("CometBackupPlaceholder.react"),{fallback:f,children:[h.jsx(c,{}),h.jsx("div",{className:e,"data-pagelet":l,hidden:g,ref:a,children:d})]})}}))}function d(a,c){var d=a.children,e=a.className,f=a.hidden,g=a.name,j=a.position,k=a.revealOrder,l=a.tail;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","className","hidden","name","position","revealOrder","tail"]);var m=g;j!=null&&j<2?m+="_"+j:j!=null&&(m+="_{n}");return h.jsx(i,babelHelpers["extends"]({},a,{name:m,position:j,ref:c,children:function(a,c){return h.jsxs("div",{className:e,"data-pagelet":m,hidden:f,ref:a,children:[h.jsx(c,{}),h.jsx(b("CometSuspenseList.react"),{revealOrder:k,tail:l,children:d})]})}}))}g={BackupPlaceholder:h.forwardRef(c),Placeholder:h.forwardRef(a),SuspenseList:h.forwardRef(d)};e.exports=g}),null);
__d("FBStoriesLoggingConstants",[],(function(a,b,c,d,e,f){"use strict";a={EVENT_STORY:"event",FOLLOWEE_STORY:"followee",FRIEND_STORY:"friend",GROUP_STORY:"group",MISSING_STORY_DATA:"missingStoryData",PAGE_STORY:"page",SELF_STORY:"self",STORY_PROMOTION:"promotion",ACTION_OPEN_MEDIA:"open_media",ACTION_DELETE_MEDIA:"delete_media_attempted",ACTION_SEND_REPLY_ATTEMPT:"attempt_to_send_reply",ACTION_SEND_REACTION_STICKER_INTERACTED:"reaction_sticker_interacted",ACTION_OPEN_SEEN_SUMMARY:"open_seen_summary",ACTION_OPEN_STORY:"open_story",ACTION_CLOSE_STORY:"close_story",ACTION_TRAY_LOAD:"story_tray_load",ACTION_SEND_STORY_FAILED:"send_story_failed",ACTION_SEND_STORY_SUCCEEDED:"send_story_succeed",ACTION_REPLY_ATTEMPT_COMPLETED:"reply_attempt_completed",ACTION_STORY_NAVIGATION:"story_navigation",INTERACTION_TAP_RESHARED_STORY:"reshared_story_tap",INTERACTION_TAP_RESHARED_TOOLTIP:"reshared_story_view_story_tap",GESTURES:{CLOSE_STORY:{CLICK_RIGHT:"click_right",CLICK_LEFT:"click_left",AUTO_JUMP:"auto_jump",AUTO_EXIT:"auto_exit",CLICK_EXIT:"click_exit",SWIPE_RIGHT:"swipe_right",SWIPE_LEFT:"swipe_left",SWIPE_EXIT:"swipe_exit",SWIPE_DOWN_EXIT:"swipe_down_exit",CLOSE_BUTTON_EXIT:"close_button_exit",BACK_BUTTON_EXIT:"back_button_exit"}},SOURCE_CLOSE_FROM_MODAL:"closeFromClickingOnModal",SOURCE_CLOSE_FROM_MODAL_CLOSE_BUTTON:"closeFromClickingOnModalCloseButton",SOURCE_CLOSE_FROM_LAST_STORY_FINISHING:"closeFromLastStoryFinishing",SOURCES:{ARCHIVE:"archive",POST_HEADER:"post_header_actor_photo",STORY_TRAY:"story_tray",IN_FEED:"in_feed",UNKNOWN:"unknown"}};e.exports=a}),null);
__d("XFBStoriesSingleStoryAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/stories/view/async/",{card_id:{type:"FBID"},story_id:{type:"FBID"},auto_open_viewersheet:{type:"Bool",defaultValue:!1},story_action_source:{type:"String"}})}),null);
__d("FBStoriesRing",["csx","cx","Arbiter","CSS","DOM","FBStoriesLoggingConstants","XFBStoriesSingleStoryAsyncController"],(function(a,b,c,d,e,f,g,h){"use strict";a=function(){function a(a){this.$1=a.element;this.$2=a.profileId;this.$3=a.storyId;this.$4=!1;a=b("DOM").scry(this.$1,"._6_ut");a.length>0&&(this.$4=!0);this.$5()}var c=a.prototype;c.$5=function(){var a=this;b("Arbiter").subscribe("has_story_bucket_been_seen",function(c,d){if(a.$2===d){c=b("DOM").scry(a.$1,"._6_ut");c.length>0&&(b("CSS").removeClass(c[0],"_6_ut"),a.$4=!1)}});b("Arbiter").subscribe("update_next_thread_to_view",function(c,d){c=d.bucketOwnerId;d=d.threadId;if(a.$2===c&&a.$4){c=b("XFBStoriesSingleStoryAsyncController").getURIBuilder().setFBID("story_id",a.$3).setFBID("card_id",d).setBool("auto_open_viewersheet",!1).setString("story_action_source",b("FBStoriesLoggingConstants").SOURCES.POST_HEADER).getURI();a.$1.setAttribute("ajaxify",c)}})};return a}();e.exports=a}),null);
__d("PagesLikeFollowNotifDispatcher",["Arbiter","ExplicitRegistrationReactDispatcher","SubscriptionsHandler"],(function(a,b,c,d,e,f){"use strict";a=function(a){babelHelpers.inheritsLoose(c,a);function c(c){var d;d=a.call(this,c)||this;c=new(b("SubscriptionsHandler"))();c.addSubscriptions(b("Arbiter").subscribe("liked",function(a,b){return d.dispatchLike(b.profile_id)}),b("Arbiter").subscribe("unliked",function(a,b){return d.dispatchUnlike(b.profile_id)}));return d}var d=c.prototype;d.dispatchLike=function(a){this.dispatch({type:"like",data:{pageID:a,likeStatus:!0}})};d.dispatchUnlike=function(a){this.dispatch({type:"unlike",data:{pageID:a,likeStatus:!1}})};return c}(b("ExplicitRegistrationReactDispatcher"));e.exports=new a({strict:!0})}),null);
__d("PagesFollowStore",["FluxReduceStore","PagesLikeFollowNotifDispatcher"],(function(a,b,c,d,e,f){"use strict";a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.getInitialState=function(){return{}};c.reduce=function(a,b){var c=babelHelpers["extends"]({},a);switch(b.type){case"init_data":if(b.data.pageID in a)return a;c[b.data.pageID]=b.data.followStatus;return c;case"follow_changed":c[b.data.pageID]=b.data.followStatus;return c}return a};return b}(b("FluxReduceStore"));a.__moduleID=e.id;e.exports=new a(b("PagesLikeFollowNotifDispatcher"))}),null);