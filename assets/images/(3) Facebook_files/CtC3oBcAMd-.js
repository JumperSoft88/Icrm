if (self.CavalryLogger) { CavalryLogger.start_js(["Eem\/r"]); }

__d("ChatImpressionLogger",["AsyncSignal","ChatConfig","ChatVisibility","Poller","PresencePrivacy","PresenceStatus","debounceAcrossTransitions","requireWeak"],(function(a,b,c,d,e,f){var g=null;b("requireWeak")("AvailableList",function(a){return g=a});var h=null;function i(a){!h?a([]):h.getSortedList(function(b){return a(b)})}function j(a){if(!h||!g)return"";var b=[];for(var c=0;c<a.length;c++)b[c]=g.get(a[c]);return b.toString()}a={init:function(a){h=a,i(function(a){var c=a.toString(),d=j(a);a=b("ChatConfig").get("chat_impression_logging_periodical",0);if(a){a=b("ChatConfig").get("periodical_impression_logging_config.interval");var e=new(b("Poller"))({interval:a,setupRequest:function(a){a.setURI("/ajax/chat/imps_logging.php").setData({list_availability:d,sorted_list:c,source:"periodical_imps"})},clearOnQuicklingEvents:!1,dontStart:!0});b("PresencePrivacy").subscribe("privacy-user-presence-changed",b("debounceAcrossTransitions")(function(){b("ChatVisibility").isOnline()?e.start():e.stop()}))}}),this.init=function(){}},logImpression:function(a,c,d){i(function(e){var f=b("ChatConfig").get("chat_impression_logging_with_click");f={list_availability:f?j(e):"",sorted_list:f?e.toString():"",source:a,target:c,target_presence:b("PresenceStatus").get(c),viewport_width:document.body.clientWidth};new(b("AsyncSignal"))("/ajax/chat/ct.php",Object.assign(f,d)).send()})}};e.exports=a}),null);
__d("XVideoInCommentUploadController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/video/in_comment_upload/",{})}),null);