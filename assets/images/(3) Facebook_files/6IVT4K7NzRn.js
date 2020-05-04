if (self.CavalryLogger) { CavalryLogger.start_js(["h6qWg"]); }

__d("ProfileVideoPlayerController",["Arbiter","Event","Parent","TimeSlice","destroyOnUnload","getViewportDimensions","setTimeout","tidyEvent"],(function(a,b,c,d,e,f){a=function(){"use strict";function a(a,c){var d=this;this.$1=a;this.$2=c;this.$3=!1;this.$5();var e=b("Parent").byTag(a.getRootNode(),"a")||a.getRootNode();e&&b("tidyEvent")(b("Event").listen(e,"mouseover",this.resetPlaybackTimer.bind(this)));c&&c.isHovercard&&a.addListener("stateChange",function(){!d.$4&&a.isState("paused")&&(d.$4=b("Arbiter").subscribe("Hovercard/show",function(){a.isState("paused")&&d.isVisible()&&d.play("autoplay_initiated")}))});b("destroyOnUnload")(function(){return d.$4&&d.$4.unsubscribe()})}var c=a.prototype;c.isVisible=function(){if(this.$1.isFullscreen())return!0;var a=b("getViewportDimensions")().height,c=this.getDOMPosition();if(c.height===0)return!1;var d=c.y;c=c.y+c.height;return d<0||c>=a?!1:!0};c.play=function(a){this.$3||this.$1.play(a)};c.pause=function(a){this.$1.pause(a)};c.getDOMPosition=function(){return this.$1.getDOMPosition()};c.$5=function(){var a=this;this.$2&&this.$2.playback_limit_ms&&b("setTimeout")(b("TimeSlice").guard(function(){a.$6()},"ProfileVideoPlayerController startPlaybackTimer",{propagationType:b("TimeSlice").PropagationType.EXECUTION}),this.$2.playback_limit_ms)};c.resetPlaybackTimer=function(){this.$3&&(this.$3=!1,this.play("autoplay_initiated"),this.$5())};c.$6=function(){this.pause("autoplay_initiated"),this.$3=!0};c.getPausedPermanently=function(){return this.$3};return a}();e.exports=a}),null);
__d("ProfileVideoManager",["Arbiter","DesktopHscrollUnitEventConstants","Event","ProfileVideoPlayerController","SubscriptionsHandler","Visibility","destroyOnUnload","throttle"],(function(a,b,c,d,e,f){var g=null,h=500;a=function(){"use strict";a.registerVideo=function(c,d){g||(g=new a(d));c=new(b("ProfileVideoPlayerController"))(c,d);g.addVideoUnit(c);c.isVisible()&&g.updateAutoplay()};function a(a){var c=this;this.$1=a.interval?a.interval:h;this.$2=[];this.$5=[];this.$3=null;this.$4=new(b("SubscriptionsHandler"))();this.$4.addSubscriptions(b("Event").listen(window,"resize",this.updateAutoplay.bind(this)),b("Event").listen(window,"blur",this.$7.bind(this)),b("Event").listen(window,"focus",this.$8.bind(this)),b("Visibility").addListener(b("Visibility").HIDDEN,this.$7.bind(this)),b("Visibility").addListener(b("Visibility").VISIBLE,this.$8.bind(this)),b("Arbiter").subscribe(b("DesktopHscrollUnitEventConstants").HSCROLL_ITEM_SHOWN_EVENT,this.updateAutoplay.bind(this)));this.$3=b("Event").listen(window,"scroll",b("throttle")(this.updateAutoplay.bind(this),this.$1));b("destroyOnUnload")(function(){c.$5=[],c.$2=[],c.$3&&c.$3.remove(),c.$3=null,c.$4.release()})}var c=a.prototype;c.getVideoUnits=function(){return this.$5};c.addVideoUnit=function(a){this.$5.push(a),this.$6&&a.pause("page_visibility_initiated"),this.updateAutoplay()};c.getPlayingVideoUnits=function(){return this.$2};c.getVisibleUnits=function(){var a=[];this.$5.forEach(function(b){b.isVisible()&&a.push(b)});return a};c.updateAutoplay=function(){var a=this.getPlayingVideoUnits(),b=this.getVisibleUnits();this.$6?(a.forEach(function(a){a.pause("page_visibility_initiated")}),this.$2=[]):(a.forEach(function(a){b.indexOf(a)===-1&&a.pause("autoplay_initiated")}),b.forEach(function(b){a.indexOf(b)===-1&&b.play("autoplay_initiated")}),this.$2=b)};c.$7=function(){this.getPlayingVideoUnits().forEach(function(a){a.pause("page_visibility_initiated")}),this.$6=!0,this.$2=[]};c.$8=function(){this.$6=!1,this.updateAutoplay()};return a}();e.exports=a}),null);