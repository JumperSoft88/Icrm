if (self.CavalryLogger) { CavalryLogger.start_js(["CeptF"]); }

__d("CometFocusTableContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({FocusCell:null,FocusRow:null,FocusTable:null});e.exports=c}),null);
__d("TetraButtonGroup.react",["CometFocusTableContext","CometRow.react","CometRowItem.react","React","TetraButton.react","stylex"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React");c=b("React");var i=c.useContext,j={hiddenButton:{height:"do00u71z",visibility:"kr9hpln1"},resetFlexBasis:{flexBasis:"mg4g778l"}};function k(a){var c=i(b("CometFocusTableContext"));c=c.FocusCell;a=a.children;return c!=null?h.jsx(c,{children:h.jsx("div",{role:"gridcell",children:a})}):a}function a(a){var c=a.align,d=c===void 0?"justify":c;c=a.direction;c=c===void 0?"forward":c;var e=a.paddingHorizontal,f=a.paddingTop,i=a.primary,l=a.secondary,m=a.size,n=a.wrap;n=n===void 0?"none":n;var o=[],p=[],q=i.testid;q=babelHelpers.objectWithoutPropertiesLoose(i,["testid"]);i=h.jsx(k,{children:h.jsx(b("TetraButton.react"),babelHelpers["extends"]({},q,{size:m,testid:void 0}))});o.push({hidden:h.jsx(b("TetraButton.react"),babelHelpers["extends"]({},q,{disabled:!0,padding:"normal",size:m})),visible:i});if(l!=null){q=l.testid;q=babelHelpers.objectWithoutPropertiesLoose(l,["testid"]);o.push({hidden:h.jsx(b("TetraButton.react"),babelHelpers["extends"]({},q,{disabled:!0,padding:"normal",size:m,type:"secondary"})),visible:h.jsx(k,{children:h.jsx(b("TetraButton.react"),babelHelpers["extends"]({},q,{size:m,testid:void 0,type:"secondary"}))})})}else if(a.secondaryIcon!=null)p.push(h.jsx(b("CometRowItem.react"),{children:h.jsx(k,{children:h.jsx(b("TetraButton.react"),babelHelpers["extends"]({},a.secondaryIcon,{labelIsHidden:!0,size:m,type:"secondary"}))})},"secondary-icon"));else if(a.secondaryIconGroup!=null){l=a.secondaryIconGroup;q=l.primaryIcon;a=l.secondaryIcon;p.push(h.jsx(b("CometRowItem.react"),{children:h.jsx(k,{children:h.jsx(b("TetraButton.react"),babelHelpers["extends"]({},q,{labelIsHidden:!0,size:m,type:"secondary"}))})},"secondary-icon-1"),h.jsx(b("CometRowItem.react"),{children:h.jsx(k,{children:h.jsx(b("TetraButton.react"),babelHelpers["extends"]({},a,{labelIsHidden:!0,size:m,type:"secondary"}))})},"secondary-icon-2"))}l=o.map(function(a,c){return h.jsx(b("CometRowItem.react"),{expanding:d==="justify",xstyle:j.resetFlexBasis,children:o.map(function(a,d){return h.jsx(h.Fragment,{children:c!==d?h.jsx("div",{"aria-hidden":!0,className:(g||(g=b("stylex")))(j.hiddenButton),children:a.hidden}):a.visible},d)})},c)});q=[h.jsx(b("CometRowItem.react"),{expanding:d==="justify",xstyle:j.resetFlexBasis,children:i},"primary")].concat(p);a=o.length===2;return h.jsx(b("CometRow.react"),{align:d,direction:c,paddingHorizontal:e,paddingTop:f,spacing:8,wrap:n,children:a?l:q})}e.exports=a}),null);
__d("CometConfirmationDialogImpl.react",["fbt","CometCardedDialog.react","CometTrackingNodeProvider.react","React","TetraButtonGroup.react","TetraText.react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");c=b("React");var i=c.useCallback;function a(a){var c=a.body,d=a.cancel,e=a.confirm,f=a.disabled;f=f===void 0?!1:f;var j=a.onClose;a=a.title;var k=i(function(){j(!0)},[j]),l=i(function(){j(!1)},[j]);return h.jsx(b("CometTrackingNodeProvider.react"),{trackingNode:163,children:h.jsxs(b("CometCardedDialog.react"),{onClose:l,testid:void 0,title:a,titleHorizontalAlignment:"start",withCloseButton:!0,children:[h.jsx("div",{className:"l9j0dhe7 dati1w0a f10w8fjw hv4rvrfc pybr56ya",children:h.jsx(b("TetraText.react"),{type:"body3",children:c})}),h.jsx("div",{className:"a8nywdso ihqw7lf3 rz4wbd8a jb3vyjys bkfpd7mw btwxx1t3 j83agx80",children:h.jsx(b("TetraButtonGroup.react"),{direction:"backward",primary:{disabled:f,label:(a=e)!=null?a:g._("\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19"),onPress:k,testid:"CometConfirmationDialogConfirmButton"},secondary:{disabled:f,label:(c=d)!=null?c:g._("\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01"),onPress:l,reduceEmphasis:!0,testid:"CometConfirmationDialogCancelButton"}})})]})})}e.exports=a}),null);
__d("StoriesDefaultBucketListWrapper.react",["requireCond","cr:1187815","React"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){var c=a.children,d=a.initialBucketID;a=a.viewerSessionID;return g.jsx(b("cr:1187815"),{initialBucketID:d,viewerSessionID:a,children:c})}e.exports=a}),null);
__d("StoriesViewerSuspense.react",["fbt","requireCond","CometErrorBoundary.react","CometPlaceholder.react","CometStyleXSheet","QuickPerformanceLogger","React","cr:989159","StoriesBucketError.react","StoriesCenterPaneErrorBoundary.react","StoriesDefaultBucketListWrapper.react","StoriesEnums","StoriesGating","StoriesImagePrefetchingContext","StoriesLoggerSession","StoriesQueryArgumentsContext","StoriesResizeToView.react","StoriesRootError.react","StoriesSetBucketHelper","StoriesSuspenseBucketDataContext","StoriesSuspenseBucketTransitioningContext","StoriesSuspenseContentPanePlaceholder.react","StoriesSuspenseContentPaneRoot.react","StoriesSuspenseNavigationPaneHelpers","StoriesSuspenseViewerKeyboardListener.react","StoriesUtils","StoriesViewerSuspenseEventEmitterContext","WebFunnelLogger","gkx","storiesViewerSuspenseEmitter","stylex","useCometWindowSize","useStable"],(function(a,b,c,d,e,f,g){"use strict";c=b("CometStyleXSheet").rootStyleSheet;var h=b("React");d=b("React");var i=d.useEffect,j=d.useMemo,k=d.useState,l=b("StoriesEnums").NAV_DIRECTIONS;c.injectTheme();function a(a){var c=b("useStable")(function(){return b("storiesViewerSuspenseEmitter")()}),d=a.bucketID,e=a.cardID,f=a.openSource,m=a.traySessionID,n=a.viewerSessionID;a=k(!1);var o=a[0],p=a[1];a=k(b("StoriesSetBucketHelper").defaultBucketData(d));var q=a[0],r=a[1];a=k(l.NEXT_BUCKET);var s=a[0],t=a[1];i(function(){var a;new(b("WebFunnelLogger"))("FBStoriesWebSuspenseViewerFunnelDefinition").setSessionKey((a=n)!=null?a:"null").setAction("Viewer Mounted").log();b("QuickPerformanceLogger").markerPoint(13238353,"viewer mounted");b("StoriesLoggerSession").initialize(m,n,f);b("cr:989159")!=null&&b("cr:989159").openOverlayView("stories_viewer");return function(){b("cr:989159")!=null&&b("cr:989159").closeOverlayView("stories_viewer")}},[f,m,n]);var u=q.bucketID;a=q.bucketIndex;var v=u==="",w=b("useCometWindowSize")(),x=j(function(){function a(a){b("StoriesSetBucketHelper").updateBucketData(r,p,q,a)}return{bucketData:q,bucketNavDirection:s,setBucketData:a,setNavigationDirection:t}},[q,s,p]),y=j(function(){return{isBucketTransitionInProgress:o,setIsBucketTransitionInProgress:p}},[o,p]),z=j(function(){return{hideSelfBucket:!1,initialBucketID:d,initialBucketsCount:b("StoriesSuspenseNavigationPaneHelpers").getInitialBucketsCount(),pageBucketsCount:b("StoriesSuspenseNavigationPaneHelpers").getPageBucketsCount()}},[d]),A=b("StoriesGating").shouldPreloadPhotoUri(),B=b("StoriesGating").shouldPreloadPhotoUriWithBucketPrefetching(),C=j(function(){return{shouldPrefetchPhotoUri:A,shouldPrefetchPhotoUriWithBucketPrefetching:B}},[A,B]);if(b("StoriesUtils").shouldResizeToViewStories(w.innerHeight))return h.jsx(b("CometErrorBoundary.react"),{fallback:function(a){return h.jsx(b("StoriesRootError.react"),{error:a})},children:h.jsx(b("StoriesResizeToView.react"),{})});w=b("StoriesGating").shouldSuspendBothQueries();e=h.jsx(b("StoriesSuspenseContentPaneRoot.react"),{bucketID:u,initialBucketID:d,initialCardID:e,viewerSessionID:n});e=w?e:h.jsx(b("CometPlaceholder.react"),{fallback:h.jsx(b("StoriesSuspenseContentPanePlaceholder.react"),{isNullState:v}),children:e});C=h.jsx("div",{className:"k4urcfbm j83agx80","data-testid":void 0,id:"viewer_dialog",children:h.jsx(b("StoriesImagePrefetchingContext").Provider,{value:C,children:h.jsxs(b("StoriesSuspenseViewerKeyboardListener.react"),{children:[h.jsx(b("StoriesDefaultBucketListWrapper.react"),{initialBucketID:d,viewerSessionID:n,children:h.jsx(b("StoriesCenterPaneErrorBoundary.react"),{bucketIndex:a,fallback:function(a){return h.jsx(b("StoriesBucketError.react"),{bucketID:u,cardID:"",error:a})},children:e})}),b("gkx")("678680")&&h.jsx("div",{className:"fwizqjfa j9ispegn pmk7jnqg cyypbtt7 g7xisrfe ljqsnud1 i09qtzwb v0lkmu4y",children:g._("SV")})]})})});a=w?h.jsx(b("CometPlaceholder.react"),{fallback:h.jsx(b("StoriesSuspenseContentPanePlaceholder.react"),{isNullState:v}),children:C}):C;return h.jsx(b("CometErrorBoundary.react"),{fallback:function(a){return h.jsx(b("StoriesRootError.react"),{error:a})},children:h.jsx(b("StoriesQueryArgumentsContext").Provider,{value:z,children:h.jsx(b("StoriesViewerSuspenseEventEmitterContext").Provider,{value:c,children:h.jsx(b("StoriesSuspenseBucketTransitioningContext").Provider,{value:y,children:h.jsx(b("StoriesSuspenseBucketDataContext").Provider,{value:x,children:a})})})})})}e.exports=a}),null);
__d("StoriesViewerSuspenseRoot.react",["CometBlueBridge.react","CometErrorBoundary.react","React","StoriesConstants","StoriesRootError.react","StoriesViewerBucketListFetchPolicyContext","StoriesViewerOpenAnimationContextProvider.react","StoriesViewerSuspense.react","stylex"],(function(a,b,c,d,e,f){"use strict";var g=b("React");c=b("React");var h=c.useMemo,i=b("StoriesConstants").RELAY_FETCH_POLICY;function a(a){var c=a.bucketListFetchPolicy;a.tilePosition;var d=babelHelpers.objectWithoutPropertiesLoose(a,["bucketListFetchPolicy","tilePosition"]),e=h(function(){var a;return{fetchPolicy:(a=c)!=null?a:i.STORE_OR_NETWORK}},[c]);return g.jsx(b("CometErrorBoundary.react"),{fallback:function(a){return g.jsx(b("StoriesRootError.react"),{error:a})},children:g.jsx(b("CometBlueBridge.react"),{children:g.jsx(b("StoriesViewerOpenAnimationContextProvider.react"),{tilePosition:a.tilePosition,children:g.jsx(b("StoriesViewerBucketListFetchPolicyContext").Provider,{value:e,children:g.jsx("div",{className:"t38bcc6f j9ispegn poy2od1o g5gj957u buofh1pr rj1gh0hx n7fi1qx3 j83agx80 i09qtzwb",children:g.jsx(b("StoriesViewerSuspense.react"),babelHelpers["extends"]({},d))})})})})})}e.exports=a}),null);
__d("StoriesViewerSingleBucket.react",["fbt","CometErrorBoundary.react","CometPlaceholder.react","CometStyleXSheet","QuickPerformanceLogger","React","StoriesEnums","StoriesLoggerSession","StoriesQueryArgumentsContext","StoriesRootError.react","StoriesSetBucketHelper","StoriesSuspenseBucketDataContext","StoriesSuspenseContentPanePlaceholder.react","StoriesSuspenseContentPaneRoot.react","StoriesSuspenseViewerKeyboardListener.react","emptyFunction","gkx","stylex"],(function(a,b,c,d,e,f,g){"use strict";c=b("CometStyleXSheet").rootStyleSheet;var h=b("React");d=b("React");var i=d.useEffect,j=d.useMemo,k=b("StoriesEnums").NAV_DIRECTIONS;c.injectTheme();function a(a){var c=a.bucketID,d=a.cardID,e=a.openSource,f=a.traySessionID,l=a.viewerSessionID;i(function(){b("QuickPerformanceLogger").markerPoint(13238353,"viewer mounted"),b("StoriesLoggerSession").initialize(f,l,e)},[e,f,l]);a=j(function(){return{bucketData:b("StoriesSetBucketHelper").defaultBucketData(c),bucketNavDirection:k.NEXT_BUCKET,setBucketData:b("emptyFunction"),setNavigationDirection:b("emptyFunction")}},[c]);var m=c,n=m==="";return h.jsx(b("CometErrorBoundary.react"),{fallback:function(a){return h.jsx(b("StoriesRootError.react"),{error:a})},children:h.jsx(b("StoriesQueryArgumentsContext").Provider,{value:{hideSelfBucket:!1,initialBucketID:c,initialBucketsCount:9,pageBucketsCount:9},children:h.jsx(b("StoriesSuspenseBucketDataContext").Provider,{value:a,children:h.jsx("div",{className:"k4urcfbm j83agx80","data-testid":void 0,children:h.jsxs(b("StoriesSuspenseViewerKeyboardListener.react"),{children:[h.jsx(b("CometPlaceholder.react"),{fallback:h.jsx(b("StoriesSuspenseContentPanePlaceholder.react"),{isNullState:n}),children:h.jsx(b("StoriesSuspenseContentPaneRoot.react"),{bucketID:m,initialBucketID:c,initialCardID:d,viewerSessionID:l})}),b("gkx")("678680")&&h.jsx("div",{className:"fwizqjfa j9ispegn pmk7jnqg cyypbtt7 g7xisrfe h4pr0btg i09qtzwb v0lkmu4y",children:g._("SVS")})]})})})})})}e.exports=a}),null);
__d("StoriesViewerSingleBucketRoot.react",["CometBlueBridge.react","CometErrorBoundary.react","React","StoriesLoggingConstants","StoriesRootError.react","StoriesViewerSingleBucket.react","stylex"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React");function a(a){return h.jsx(b("CometErrorBoundary.react"),{fallback:function(a){return h.jsx(b("StoriesRootError.react"),{error:a})},children:h.jsx(b("CometBlueBridge.react"),{children:h.jsx("div",{className:(g||(g=b("stylex"))).dedupe({"bottom-1":"i09qtzwb","end-1":"n7fi1qx3","position-1":"poy2od1o","start-1":"j9ispegn","top-1":"t38bcc6f"},a.openSource===b("StoriesLoggingConstants").ACTION_SOURCE.MESSENGER_DOT_COM?{"top-1":"kr520xx4"}:null),children:h.jsx(b("StoriesViewerSingleBucket.react"),babelHelpers["extends"]({},a))})})})}e.exports=a}),null);
__d("ChatTabViewEvents",["Arbiter"],(function(a,b,c,d,e,f){"use strict";e.exports=new(b("Arbiter"))()}),null);
__d("PageTimelineChainingTypeConstants",[],(function(a,b,c,d,e,f){e.exports={FANNING:"fanning",FOLLOW:"follow",SHOW_FOLLOW:"show_follow"}}),null);
__d("PagesPostsByOthersUnit",["DOM"],(function(a,b,c,d,e,f){var g;a=function(){"use strict";function a(a,b){this.$1=a,this.$2=b,g=this}var c=a.prototype;c.getRoot=function(){return this.$1};c.insertPost=function(a){var c=this.getRoot();b("DOM").prependContent(c,a);c.children.length>this.$2&&b("DOM").remove(c.lastChild);this.$3&&(b("DOM").remove(this.$3),this.$3=null)};a.insertPostIntoCurrentInstance=function(a){this.getInstance().insertPost(a)};a.initPlaceholderElement=function(a){this.getInstance().$3=a};a.getInstance=function(){return g};return a}();e.exports=a}),null);
__d("PagesTimelineChaining",["Arbiter","Banzai","ChatTabViewEvents","CSS","Event","PagesFollowStore","PageTimelineChainingTypeConstants","Run","Style","SubscriptionsHandler","UIPagelet"],(function(a,b,c,d,e,f){var g=0;a={_recentlyLikedPageIDs:{},_recentlyMessagedPageIDs:{},container:null,_subscriptions:[],_chatSubscriptions:[],_followSubscription:null,_isFollow:!1,init:function(a,c){var d=this;this.container=a;this._followSubscription=new(b("SubscriptionsHandler"))();this._isFollow=c.isFollow;b("Run").onLeave(function(){return d._unsubscribe()});this._showChainSuggestions(c.pageID,!1)||(this._subscriptions=[b("Arbiter").subscribe("liked",this.onLike.bind(this,c.pageID))],c.canFollow&&this._followSubscription.addSubscriptions(b("PagesFollowStore").addListener(function(){var a=b("PagesFollowStore").getState();if(!(c.pageID in a))return;a[c.pageID]&&!d._isFollow&&d._onFollow(c.pageID);d._isFollow=a[c.pageID]})),c.enableLikeCheckup&&this._subscriptions.push(b("Arbiter").subscribe("unliked",this.onUnlike.bind(this))),c.onMessageEnabled&&this._chatSubscriptions.push(b("ChatTabViewEvents").subscribe("chat-send-to-page",this.onMessage.bind(this,c.pageID))))},onScroll:function(a){if(document.documentElement){var b=window.pageYOffset||document.documentElement.scrollTop;b<=g&&(this._showChainSuggestions(a,!0),this._unsubscribe());g=b}},onLike:function(a,b,c){c.profile_id===a&&c.target&&(this._recentlyLikedPageIDs[a]=!0,this._showChainSuggestions(a,!1),this._unsubscribe())},_onFollow:function(a){this._showChainFollowSuggestions(a),this._unsubscribe()},onMessage:function(a,b,c){c&&c.pageID===a&&(this._recentlyMessagedPageIDs[a]=!0,this._showMessageSuggestions(a),this._unsubscribe())},onUnlike:function(a,c){b("UIPagelet").loadFromEndpoint("PagesLikeCheckupPagelet",this.container,{},{displayCallback:this.displayCallback.bind(this)}),this._unsubscribe()},displayCallback:function(a){a&&a();a=this.container.firstChild;a&&b("Style").set(this.container,"height",a.offsetHeight+"px")},_showChainSuggestions:function(a,c){if(!(a in this._recentlyLikedPageIDs))return!1;c=b("PageTimelineChainingTypeConstants").FANNING;b("UIPagelet").loadFromEndpoint("PagesTimelineChainingPagelet",this.container,{pageID:a,type:c},{displayCallback:this.displayCallback.bind(this)});return!0},_showChainFollowSuggestions:function(a){var c=b("PageTimelineChainingTypeConstants").FOLLOW;b("UIPagelet").loadFromEndpoint("PagesTimelineChainingPagelet",this.container,{pageID:a,type:c},{displayCallback:this.displayCallback.bind(this)});return!0},_showMessageSuggestions:function(a){if(!(a in this._recentlyMessagedPageIDs))return!1;b("UIPagelet").loadFromEndpoint("PagesMessageChainingPagelet",this.container,{pageID:a},{displayCallback:this.displayCallback.bind(this)});return!0},dismissCallback:function(a,c,d){b("CSS").hide(this.container);delete this._recentlyLikedPageIDs[c];this._unsubscribe();if(d==="friend_inviter_chaining"){a="pages_growth_general_analytical_logger";d={id:c,event:"dismiss_carousel",event_target:"friend_inviter_chaining",feature_name:"friend_inviter_chaining_investigate"};b("Banzai").post(a,d)}},attachDismissCallback:function(a,c,d,e){b("Event").listen(a,"click",this.dismissCallback.bind(this,c,d,e))},_unsubscribe:function(){this._subscriptions.length&&(this._subscriptions.forEach(function(a){return b("Arbiter").unsubscribe(a)}),this._subscriptions=[]),this._chatSubscriptions.length&&(this._chatSubscriptions.forEach(function(a){return b("ChatTabViewEvents").unsubscribe(a)}),this._chatSubscriptions=[]),this._followSubscription&&this._followSubscription.release()}};e.exports=a}),null);
__d("PagesTimelineSearchBar.react",["ix","cx","fbt","Arbiter","Image.react","PagesEventObserver","React","XUIButton.react","XUITextInput.react","fbglyph","prop-types"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={query:d.props.searchQuery,disabled:!1},d.$1="",d.$3=function(a){!d.$1?d.setState({query:""}):d.state.disabled||(d.setState({disabled:!0,query:""}),b("Arbiter").inform("PagesTimelineSearch/search",{query:""}),b("PagesEventObserver").notify("search_timeline_posts",d.props.pageID,{searchTerm:""}))},d.$5=function(a){a=a.target.value;a.length<=d.props.maxLength&&d.setState({query:a})},d.$4=function(a){d.state.disabled||(d.setState({disabled:!0}),b("Arbiter").inform("PagesTimelineSearch/search",{query:d.state.query}),b("PagesEventObserver").notify("search_timeline_posts",d.props.pageID,{searchTerm:d.state.query}))},d.$2=function(a,b){b.query===d.state.query&&(d.setState({disabled:!1}),d.$1=b.query)},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.UNSAFE_componentWillMount=function(){b("Arbiter").subscribe("PagesTimelineSearch/searchDone",this.$2)};d.render=function(){var a=i._("\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e42\u0e1e\u0e2a\u0e15\u0e4c\u0e1a\u0e19\u0e40\u0e1e\u0e08\u0e19\u0e35\u0e49"),c=null;!this.state.disabled&&this.state.query&&(c=j.jsx(b("XUIButton.react"),{className:"_5wkw",image:j.jsx(b("Image.react"),{src:g("141941")}),label:i._("\u0e25\u0e49\u0e32\u0e07"),labelIsHidden:!0,onClick:this.$3}));var d=this.state.disabled?"_1fa6 _1wqb":"_1fa6";return j.jsxs("div",{className:d,children:[j.jsx(b("XUIButton.react"),{className:"_3fbq",disabled:this.state.disabled,image:j.jsx(b("Image.react"),{src:g("142454")}),label:i._("\u0e04\u0e49\u0e19\u0e2b\u0e32"),labelIsHidden:!0,onClick:this.$4}),j.jsx(b("XUITextInput.react"),{className:"_3fbp",onChange:this.$5,placeholder:a,value:this.state.query,onEnter:this.$4,disabled:this.state.disabled}),c]})};return c}(j.Component);a.propTypes={pageID:b("prop-types").string.isRequired,searchQuery:b("prop-types").string.isRequired,maxLength:b("prop-types").number.isRequired};e.exports=a}),null);
__d("FBStoriesQPLUtils",["QuickPerformanceLogger","Run"],(function(a,b,c,d,e,f){"use strict";function g(a){a.navigationStart?b("QuickPerformanceLogger").markerStartFromNavStart(a.qplMarker):b("QuickPerformanceLogger").markerStart(a.qplMarker,0),b("Run").onUnload(function(){b("QuickPerformanceLogger").markerEnd(a.qplMarker,4)})}a={start:function(a){g(a)},end:function(a){b("QuickPerformanceLogger").markerEnd(a.qplMarker,a.action?a.action:2)}};e.exports=a}),null);