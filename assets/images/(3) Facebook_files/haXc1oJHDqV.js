if (self.CavalryLogger) { CavalryLogger.start_js(["G+wAh"]); }

__d("CometOptInUpsellInteractionFalcoEvent",["FalcoLoggerInternal"],(function(a,b,c,d,e,f){"use strict";a=b("FalcoLoggerInternal").create("comet_opt_in_upsell_interaction");e.exports=a}),null);
__d("CometTrialUpsellFunnelLogger",["CurrentUser","WebFunnelLogger"],(function(a,b,c,d,e,f){"use strict";var g=b("CurrentUser").getAccountID();a={listenToLogoutMenuItemImpression:function(a){a.subscribeOnce("show",function(){new(b("WebFunnelLogger"))("CometTrialUpsellWebFunnelDefinition").setAction("Rendered Settings Menu Item").setSessionKey(g).markStart().log()})},handleQPImpression:function(){new(b("WebFunnelLogger"))("CometTrialUpsellWebFunnelDefinition").setAction("Rendered Upsell: QP").setSessionKey(g).markStart().log()},handleBannerImpression:function(){new(b("WebFunnelLogger"))("CometTrialUpsellWebFunnelDefinition").setAction("Rendered Upsell: Banner").setSessionKey(g).markStart().log()}};e.exports=a}),null);
__d("CometUpsellBanner",["Arbiter","BasicFBNux","CometOptInUpsellInteractionFalcoEvent","CometTrialUpsellFunnelLogger","CSS","DOM","Event","PageEvents","URI"],(function(a,b,c,d,e,f){"use strict";var g;a={initComponent:function(a,c,d,e,f){b("CometTrialUpsellFunnelLogger").handleBannerImpression();var h=null,i=function(c){b("DOM").remove(a),h!=null&&(b("Arbiter").unsubscribe(h),h=null),b("BasicFBNux").onDismiss(e),b("CometOptInUpsellInteractionFalcoEvent").log(function(){return{event:c,source:"NEWS_FEED_BANNER",variation:f}})};h=b("Arbiter").subscribe(b("PageEvents").AJAXPIPE_ONBEFORECLEARCANVAS,function(c,d){c=(g||(g=b("URI"))).getNextURI().getPath();c==="/"?b("CSS").show(a):b("CSS").hide(a)});b("Event").listen(c,"click",function(){return i("OPT_IN")});b("Event").listen(d,"click",function(){return i("DISMISS")});b("CometOptInUpsellInteractionFalcoEvent").log(function(){return{event:"VIEW",source:"NEWS_FEED_BANNER",variation:f}})}};e.exports=a}),null);