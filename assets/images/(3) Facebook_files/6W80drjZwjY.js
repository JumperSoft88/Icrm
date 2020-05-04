if (self.CavalryLogger) { CavalryLogger.start_js(["WAk1O"]); }

__d("XCometVideoControllerRouteBuilder",["cometRouteBuilder"],(function(a,b,c,d,e,f){a=b("cometRouteBuilder")("/{page_token}/videos/{?set}/{story_token}/",Object.freeze({}),void 0);e.exports=a}),null);
__d("XCometVideoHomePlaylistControllerRouteBuilder",["cometRouteBuilder"],(function(a,b,c,d,e,f){a=b("cometRouteBuilder")("/watch/{?idorvanity}/",Object.freeze({}),void 0);e.exports=a}),null);
__d("VideoPlayerOzModuleRenderer_videoData$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{derivedFrom:"VideoPlayerOzModuleRenderer_videoData"},name:"VideoPlayerOzModuleRenderer_videoData$normalization",selections:[{alias:null,args:null,kind:"ScalarField",name:"json_encoded_video_data",storageKey:null}]};e.exports=a}),null);
__d("VideoPlayerOzModuleRenderer_videoData.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VideoPlayerOzModuleRenderer_videoData",selections:[{alias:null,args:null,kind:"ScalarField",name:"json_encoded_video_data",storageKey:null}],type:"VideoPlayerOzModuleRenderer"};e.exports=a}),null);
__d("VideoPlayerShakaModuleRenderer_videoData$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{derivedFrom:"VideoPlayerShakaModuleRenderer_videoData"},name:"VideoPlayerShakaModuleRenderer_videoData$normalization",selections:[{alias:null,args:null,kind:"ScalarField",name:"json_encoded_video_data",storageKey:null}]};e.exports=a}),null);
__d("useOnBeforeUnloadBlue",["React","Run"],(function(a,b,c,d,e,f){"use strict";c=b("React");var g=c.useEffect;function a(a){var c=function(){var b=a();return b==null?void 0:b.warnMessage};g(function(){return b("Run").onBeforeUnload(c,!0).remove})}e.exports=a}),null);
__d("usePartialViewImpression",["useVisibilityObserver"],(function(a,b,c,d,e,f){"use strict";a=function(a){var c=a.onImpressionEnd;a=a.onImpressionStart;return b("useVisibilityObserver")({onHidden:c,onVisible:a,options:{hiddenWhenCSSStyleHidden:!0,hiddenWhenZeroArea:!0}})};e.exports=a}),null);
__d("BaseCard.react",["React"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a,b){return g.jsx("div",babelHelpers["extends"]({},a,{ref:b}))}e.exports=g.forwardRef(a)}),null);
__d("BaseAccessibleElement_DEPRECATED.react",["React","stylex"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){var b=a.children;a=a.id;return g.jsx("span",{className:"pmk7jnqg g0aa4cga q45zohi1","data-html2canvas-ignore":"true",id:a,children:b})}e.exports=a}),null);
__d("createCometRelayEntryPointEnvironmentProvider",["CometRelayEnvironmentFactory"],(function(a,b,c,d,e,f){"use strict";function a(a){a===void 0&&(a=b("CometRelayEnvironmentFactory")["default"]);var c=function(c){c=c==null?void 0:c.actorID;return c==null?a:b("CometRelayEnvironmentFactory").getForActorID(String(c))};return{getEnvironment:c}}e.exports=a}),null);
__d("useCometRelayEntrypointContextualEnvironmentProvider",["CometRelay","React","createCometRelayEntryPointEnvironmentProvider"],(function(a,b,c,d,e,f){"use strict";var g=b("CometRelay").useRelayEnvironment;c=b("React");var h=c.useMemo;function a(){var a=g();return h(function(){return b("createCometRelayEntryPointEnvironmentProvider")(a)},[a])}e.exports=a}),null);
__d("CometEntryPointPopoverTrigger.react",["BasePopoverTrigger.react","CometPopoverLoadingState.react","CometRelay","React","useCometPopoverInteractionTracing","useCometRelayEntrypointContextualEnvironmentProvider"],(function(a,b,c,d,e,f){"use strict";var g=b("CometRelay").LazyLoadEntryPointContainer_DEPRECATED,h=b("React");c=b("React");var i=c.useCallback,j=c.useMemo;function k(a){var c=a.entryPoint,d=a.entryPointParams,e=a.otherProps,f=babelHelpers.objectWithoutPropertiesLoose(a,["entryPoint","entryPointParams","otherProps"]);a=j(function(){return babelHelpers["extends"]({},e,f)},[e,f]);var i=b("useCometRelayEntrypointContextualEnvironmentProvider")();return h.jsx(g,{entryPoint:c,entryPointParams:d,environmentProvider:i,props:a})}function a(a){var c=a.fallback;c=c===void 0?h.jsx(b("CometPopoverLoadingState.react"),{withArrow:!0}):c;var d=a.popoverEntryPoint,e=a.entryPointParams,f=a.otherProps,g=a.preloadTrigger,l=a.tracePolicy;a=babelHelpers.objectWithoutPropertiesLoose(a,["fallback","popoverEntryPoint","entryPointParams","otherProps","preloadTrigger","tracePolicy"]);l=b("useCometPopoverInteractionTracing")(l);var m=b("useCometRelayEntrypointContextualEnvironmentProvider")(),n=j(function(){return{entryPoint:d,entryPointParams:e,otherProps:f}},[e,f,d]);return h.jsx(b("BasePopoverTrigger.react"),babelHelpers["extends"]({fallback:c,interactionTracker:l,onHighIntentPreload:i(function(){var a=d;if(e==null||a==null)return;b("CometRelay").prepareEntryPoint(m,a,e)},[d,e,m]),popover:k,popoverPreloadResource:d.root,popoverProps:n,preloadTrigger:g},a))}e.exports=a}),null);
__d("useCometEntryPointDialog",["CometDialogContext","CometRelay","CometSuspendedDialogImpl.react","React","recoverableViolation","stableStringify","useCometPrerenderer","useCometRelayEntrypointContextualEnvironmentProvider"],(function(a,b,c,d,e,f){"use strict";var g=b("CometRelay").EntryPointContainer,h=b("CometRelay").prepareEntryPoint,i=b("React");c=b("React");var j=c.useCallback,k=c.useContext,l=c.useRef;function m(a){var b=a.onClose,c=a.otherProps;a=a.preloadedEntryPoint;c=babelHelpers["extends"]({},c,{onClose:b});return i.jsx(g,{entryPointReference:a,props:c})}function a(a,c,d,e){var f=l(null),g=b("stableStringify")(c),i=j(function(){f.current=null},[]),n=b("useCometRelayEntrypointContextualEnvironmentProvider")(),o=j(function(){var b;if(c==null)return;(f.current==null||f.current.dialogEntryPoint!==a||f.current.preloadParamsHash!==g)&&(f.current={dialogEntryPoint:a,preloadParamsHash:g,preloadedEntryPoint:h(n,a,c)});return(b=f.current)==null?void 0:b.preloadedEntryPoint},[a,g]);d=b("useCometPrerenderer")(d,!1,a.root,o,i);d[0];var p=d[1],q=d[2];d=d[3];var r=l(null),s=k(b("CometDialogContext")),t=j(function(a,c,d){var f=o();if(f==null){b("recoverableViolation")("Unable to present comet EntryPoint dialog, preloadParams not set","comet_ui");return}i();var g=m;s(b("CometSuspendedDialogImpl.react"),{dialog:g,dialogProps:{otherProps:a,preloadedEntryPoint:f},fallback:e},c,d)},[s,e,o,i]);return[t,r,p,q,d]}e.exports=a}),null);
__d("CometEntryPointDialogTrigger.react",["React","useCometEntryPointDialog"],(function(a,b,c,d,e,f){"use strict";b("React");c=b("React");var g=c.useCallback;function a(a){var c=a.children,d=a.dialogEntryPoint,e=a.fallback,f=a.onHide,h=a.preloadParams,i=a.preloadTrigger,j=a.otherProps,k=a.onShow,l=k===void 0?function(){}:k,m=a.tracePolicy;k=b("useCometEntryPointDialog")(d,h,i,e);var n=k[0];k[1];a=k[2];d=k[3];h=k[4];i=g(function(){n(j,f,m),l()},[n,j,f,m,l]);return c(i,a,d,h)}e.exports=a}),null);
__d("CometCard.react",["requireCond","BaseCard.react","cr:1393064","React","gkx","stylex"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i={"base-wash":{backgroundColor:"g6srhlxm"},"dark-wash":{backgroundColor:"ora8z2hr"},error:{backgroundColor:"l44iypv3"},highlight:{backgroundColor:"is6700om"},"light-wash":{backgroundColor:"qsy8amke"},transparent:{backgroundColor:"g5ia77u1"},white:{backgroundColor:"hybvsw6c"}},j={borderHighlightAnimationOverlay:{animationDuration:"r8dsh44q",animationName:"j4rmde5a",borderTop:"gcieejh5",borderEnd:"bn081pho",borderBottom:"humdl8nn",borderStart:"izx4hr6d",borderTopStartRadius:"ue3kfks5",borderTopEndRadius:"pw54ja7n",borderBottomEndRadius:"uo3d90p7",borderBottomStartRadius:"l82x9zwi",bottom:"i09qtzwb",end:"n7fi1qx3",pointerEvents:"hzruof5a",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",zIndex:"tkr6xdv7"},borderOnWash:{borderTopColor:"qbxu24ho",borderEndColor:"bxzzcbxg",borderBottomColor:"lxuwth05",borderStartColor:"h2mp5456"},borderOnWhite:{borderTopColor:"qbxu24ho",borderEndColor:"bxzzcbxg",borderBottomColor:"lxuwth05",borderStartColor:"h2mp5456"},borderSolid:{borderTopStyle:"goun2846",borderEndStyle:"ccm00jje",borderBottomStyle:"s44p3ltw",borderStartStyle:"mk2mc5f4",borderTopWidth:"frvqaej8",borderEndWidth:"ed0hlay0",borderBottomWidth:"afxsp9o4",borderStartWidth:"jcgfde61"},expanding:{flexGrow:"buofh1pr"},root:{borderTopStartRadius:"ue3kfks5",borderTopEndRadius:"pw54ja7n",borderBottomEndRadius:"uo3d90p7",borderBottomStartRadius:"l82x9zwi",boxSizing:"rq0escxv",overflowX:"ni8dbmo4",overflowY:"stjgntxs",position:"l9j0dhe7",width:"k4urcfbm"}},k=(c={},c[1]={boxShadow:"dsne8k7f"},c[2]={boxShadow:"kmp5kqmu"},c.darkOne={boxShadow:"sbcfpzgs"},c);function a(a,c){var d=a.background;d=d===void 0?"transparent":d;var e=a.border;e=e===void 0?"none":e;var f=a.borderHighlightAnimation;f=f===void 0?!1:f;var l=a.children,m=a.dropShadow;m=m===void 0?0:m;var n=a.expanding;n=n===void 0?!1:n;a=a.xstyle;m=b("gkx")("1355003")&&m===1?k.darkOne:k[m];return h.jsxs(b("BaseCard.react"),{className:(g||(g=b("stylex")))(i[d],e==="solid"&&d!=="white"&&j.borderOnWash,e==="solid"&&d==="white"&&j.borderOnWhite,e==="solid"&&j.borderSolid,j.root,m,n&&j.expanding,a),ref:c,children:[f?h.jsx("div",{className:(g||(g=b("stylex")))(j.borderHighlightAnimationOverlay)}):null,l]})}e.exports=(d=b("cr:1393064"))!=null?d:h.forwardRef(a)}),null);
__d("CometBoldedEntityRenderer",["React"],(function(a,b,c,d,e,f){"use strict";var g=b("React");a=function(a){return g.jsx("strong",{children:a})};e.exports=a}),null);
__d("CometTimestamp.react",["fbt","React","formatDate","useServerTime"],(function(a,b,c,d,e,f,g){"use strict";c=b("React");var h=1e3*60*60*24,i=h*30;function j(a,b){return a.getFullYear()===b.getFullYear()&&a.getMonth()===b.getMonth()&&a.getDate()===b.getDate()}function k(a,c){var d=b("formatDate")(c,"g:i A");if(j(c,a))return g._("\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32 {time} \u0e19.",[g._param("time",d)]);var e=new Date(a.valueOf()-h);if(j(c,e))return g._("\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e27\u0e32\u0e19\u0e19\u0e35\u0e49\u0e40\u0e27\u0e25\u0e32 {time}",[g._param("time",d)]);e=new Date(a.valueOf()+h);if(j(c,e))return g._("\u0e1e\u0e23\u0e38\u0e48\u0e07\u0e19\u0e35\u0e49\u0e40\u0e27\u0e25\u0e32 {time} \u0e19.",[g._param("time",d)]);e=b("formatDate")(c,"F j");a.getFullYear()!==c.getFullYear()&&(e=b("formatDate")(c,"F j, Y"));return Math.abs(a.valueOf()-c.valueOf())<i?g._("{date} \u0e40\u0e27\u0e25\u0e32 {time} \u0e19.",[g._param("date",e),g._param("time",d)]):e}function a(a){a=a.date;var c=b("useServerTime")();c=k(c,a);return c}a.getTimestamp=k;e.exports=a}),null);
__d("CometGranularTimestamp.react",["fbt","CometTimestamp.react","React","formatDate","useServerTime"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React"),i=1e3*60*60,j=i*24;function k(a,b){return a.getFullYear()===b.getFullYear()&&a.getMonth()===b.getMonth()&&a.getDate()===b.getDate()}function a(a){var c=a.date;a=a.granularity;a=a===void 0?"none":a;var d=b("useServerTime")();if(a==="none"||a==="min")return h.jsx(b("CometTimestamp.react"),{date:c});if(a==="hour"){var e=c.valueOf()%i;e=new Date(c.valueOf()-e);return h.jsx(b("CometTimestamp.react"),{date:e})}if(a==="year")return b("formatDate")(c,"Y");if(a==="month")return d.getFullYear()===c.getFullYear()?b("formatDate")(c,"F"):b("formatDate")(c,"F Y");if(k(c,d))return g._("\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49");e=new Date(d.valueOf()-j);if(k(c,e))return g._("\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e27\u0e32\u0e19\u0e19\u0e35\u0e49");a=new Date(d.valueOf()+j);if(k(c,a))return g._("\u0e27\u0e31\u0e19\u0e1e\u0e23\u0e38\u0e48\u0e07\u0e19\u0e35\u0e49");return d.getFullYear()!==c.getFullYear()?b("formatDate")(c,"F j, Y"):b("formatDate")(c,"F j")}e.exports=a}),null);
__d("CometLazyTooltip.react",["BaseTooltip.react","CometTooltipImpl.react","React","lazyLoadComponent"],(function(a,b,c,d,e,f){"use strict";var g=b("React");c=b("React");var h=c.useCallback,i=c.useMemo;function a(a){var c=a.delayContentMs;c=c===void 0?0:c;var d=a.delayTooltipMs;d=d===void 0?300:d;var e=a.onVisibilityChange,f=a.tooltipProps,j=a.tooltipResource;a=babelHelpers.objectWithoutPropertiesLoose(a,["delayContentMs","delayTooltipMs","onVisibilityChange","tooltipProps","tooltipResource"]);var k=h(function(a){a&&j.preload(),e&&e(a)},[e,j]),l=i(function(){return b("lazyLoadComponent")(j)},[j]);return g.jsx(b("BaseTooltip.react"),babelHelpers["extends"]({delayContentMs:c,delayTooltipMs:d,onVisibilityChange:k,tooltip:g.jsx(l,babelHelpers["extends"]({},f)),tooltipImpl:b("CometTooltipImpl.react")},a))}e.exports=a}),null);
__d("CometFallbackEffectWorkaround.react",["React"],(function(a,b,c,d,e,f){"use strict";c=b("React");var g=c.useEffect;function a(a){var b=a.onMount;g(function(){b()},[]);return null}e.exports=a}),null);
__d("CometFeedUnitLoggingContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({position:null,renderLocation:null});e.exports=c}),null);
__d("CometFeedUnitOnFeedUnitErrorContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext(null);e.exports=c}),null);
__d("CometFeedUnitShouldPropagateErrorContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext(!0);e.exports=c}),null);
__d("useCommitCountRef",["React","useLayoutEffect_SAFE_FOR_SSR"],(function(a,b,c,d,e,f){"use strict";c=b("React");var g=c.useRef;function a(){var a=g(0);b("useLayoutEffect_SAFE_FOR_SSR")(function(){a.current+=1});return a}e.exports=a}),null);
__d("CometFeedMatchRenderer.react",["requireDeferred","BanzaiODS","CometErrorBoundary.react","CometFallbackEffectWorkaround.react","CometFeedUnitLoggingContext","CometFeedUnitOnFeedUnitErrorContext","CometFeedUnitShouldPropagateErrorContext","CometRelay","FBLogger","React","recoverableViolation","useCommitCountRef"],(function(a,b,c,d,e,f){"use strict";var g=b("requireDeferred")("CometFeedStoriesStrategyErrorsTypedLoggerLite"),h=b("CometRelay").MatchContainer,i=b("CometRelay").ModuleResource,j=b("React");c=b("React");var k=c.useCallback,l=c.useContext,m=c.useEffect,n=c.useRef;function a(a){var c=a.match,d=a.matchRequired,e=d===void 0?!1:d,f=a.onUnsupported;d=a.preventErrorsFromFailingTheFeedUnit_USE_WITH_CAUTION;var o=a.props,p=a.section,q=a.trackingData,r=b("useCommitCountRef")(),s=l(b("CometFeedUnitOnFeedUnitErrorContext"));a=l(b("CometFeedUnitShouldPropagateErrorContext"));var t=l(b("CometFeedUnitLoggingContext")),u=t.position,v=t.renderLocation,w=c!=null?i.getModuleId(c):null,x=n(!1);m(function(){!x.current&&w!=null&&(b("BanzaiODS").bumpFraction(3478,"comet_feed_strategy_errors",w,0,1),x.current=!0)},[w]);t=function(){f!=null&&f(),e&&b("recoverableViolation")("match required for Comet Feed section "+p+" and none was found","comet_feed")};var y=d!=null?!d:a;d=k(function(a){w!=null&&b("BanzaiODS").bumpFraction(3478,"comet_feed_strategy_errors",w,1,0);g.onReady(function(b){b.log({error_name:a.message,error_propagated_to_feed_unit:s!=null&&y,is_within_feed_unit:s!=null,num_commits_before_error:r.current,position:u,render_location:v!=="%future added value"?v:null,section:p,strategy:w,tracking_data:q})});if(s==null){var c;b("FBLogger")("CometFeedSectionErrorOutsideFeedUnit").info(((c=w)!=null?c:"Unknown Strategy/Attachment Renderer")+" threw a js error outside of CometFeedUnit.");throw a}else y&&s(a)},[s,y,r,w,u,v,p,q]);return c==null?j.jsx(b("CometFallbackEffectWorkaround.react"),{onMount:t}):j.jsx(b("CometErrorBoundary.react"),{fallback:null,onError:d,project:"CometFeedSectionErrorBoundary",children:j.jsx(b("CometFeedUnitShouldPropagateErrorContext").Provider,{value:y,children:j.jsx(h,{fallback:j.jsx(b("CometFallbackEffectWorkaround.react"),{onMount:t}),match:c,props:o})})})}e.exports=a}),null);
__d("CometAdPreviewContext",["React"],(function(a,b,c,d,e,f){"use strict";var g=b("React");d=b("React");var h=d.useContext,i=g.createContext(!1);function a(a){return g.jsx(i.Provider,{value:a.value,children:a.children})}function c(){return h(i)}e.exports={CometAdPreviewContextProvider:a,useCometAdPreviewContext:c}}),null);
__d("CometUFITooltip.react",["CometErrorBoundary.react","CometLazyTooltip.react","React"],(function(a,b,c,d,e,f){"use strict";var g=b("React");c=b("React");var h=c.useCallback,i=c.useState;function a(a){var c=a.children,d=a.delayContentMs;d=d===void 0?0:d;var e=a.delayTooltipMs;e=e===void 0?75:e;var f=a.headline,j=a.tooltipContentComponent;a=a.tooltipContentProps;var k=i(0),l=k[0],m=k[1];k=h(function(a){a&&m(l+1)},[l,m]);d=g.jsx(b("CometLazyTooltip.react"),{align:"middle",delayContentMs:d,delayTooltipMs:e,headline:f,onVisibilityChange:k,tooltipProps:babelHelpers["extends"]({},a,{shownCount:l}),tooltipResource:j,children:c});return g.jsx(b("CometErrorBoundary.react"),{fallback:function(){return c},children:d})}e.exports=a}),null);
__d("VideoPlayerOzModuleRenderer.react",["React","RelayHooks","VideoData","VideoPlayerHTML5Oz","VideoPlayerOzModuleRenderer_videoData.graphql"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React");b("RelayHooks").graphql;var i=b("RelayHooks").useFragment;function a(a){var c=i(g!==void 0?g:g=b("VideoPlayerOzModuleRenderer_videoData.graphql"),a.videoData);return c.json_encoded_video_data==null?null:h.cloneElement(a.children,{videoData:new(b("VideoData"))(JSON.parse(c.json_encoded_video_data)),dashModule:b("VideoPlayerHTML5Oz")})}e.exports=a}),null);