if (self.CavalryLogger) { CavalryLogger.start_js(["7B7KV"]); }

__d("XVideoPlaybackExperienceReportController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/videos/playback_report/",{video_id:{type:"FBID",required:!0},issue_type:{type:"String",required:!0},is_live:{type:"Int"},playback_timestamp:{type:"Int"}})}),null);
__d("VideoSettingsMenu.react",["ix","cx","fbt","AsyncRequest","BUISwitch.react","ClickableAreaButton.react","CurrentEnvironment","Image.react","Layout.react","Link.react","MessengerEnvironment","React","Selector.react","URI","VideoPlayerShakaPerformanceLogger","XUIButton.react","XVideoPlaybackExperienceReportController","asset","isFacebookURI","prop-types","shallowCompare"],(function(a,b,c,d,e,f,g,h,i){var j,k=b("React"),l=b("Layout.react").Column,m=b("Layout.react").FillColumn,n=b("Selector.react").Option,o=/(instagram)/g;function p(a){return{currentMenuContext:"main",currentFeedbackSelected:null,feedbackSubmitted:!1}}a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state=p(c.props),b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.shouldComponentUpdate=function(a,c){return b("shallowCompare")(this,a,c)};d.createMenuItem=function(a,b,c,d,e,f){f===void 0&&(f=!1);var g=function(){};b&&(g=function(a){d(),a.preventDefault()});var h="_2iw4"+(b?"":" _4t7o"),i;if(e==="checkBox"){var j=null;b&&c&&(j=k.jsx("div",{className:"_2iw1"}));i=k.jsx("div",{className:"_2iw3",children:j})}else if(e==="radioButton"){j=null;b&&c&&(j=k.jsx("div",{className:"_4t7r"}));i=k.jsx("div",{className:"_4t7u",children:j})}j=a;f&&(j=k.jsxs("div",{children:[a.slice(0,-1),k.jsx("div",{className:"_4t7w"})]}));return k.jsxs("a",{href:"#",className:h,onClick:g,tabIndex:this.props.tabIndex,"aria-checked":c?"true":"false",role:e==="radioButton"?"radio":"checkbox","aria-disabled":!b,children:[i,k.jsx("div",{className:"_2iw5"+(c?"":" _4t8e"),children:j})]},a)};d.$1=function(){var a=this.props,c=a.hasCaptions,d=a.areCaptionsActive;a=a.areCaptionsAutogenerated;if(!c)return null;c=i._("\u0e04\u0e33\u0e1a\u0e23\u0e23\u0e22\u0e32\u0e22\u0e20\u0e32\u0e1e");var e="_1x4f";a&&(c=i._("\u0e04\u0e33\u0e1a\u0e23\u0e23\u0e22\u0e32\u0e22\u0e20\u0e32\u0e1e [auto-generated]"),e="_1x4f _6m2q");return k.jsxs(b("Layout.react"),{"aria-checked":d,className:"_2iw4 _1x4e",children:[k.jsx(m,{children:c}),k.jsx(l,{children:k.jsx("div",{className:e,children:k.jsx(b("BUISwitch.react"),{animate:!0,showLabel:!0,value:d,onToggle:this.props.onToggleCaptions,tabIndex:this.props.tabIndex})})})]})};d.showQualitySelector=function(){return this.props.showQualitySelector===!0&&this.props.streamingFormat==="dash"&&this.props.availableQualities!=null&&this.props.availableQualities.length>=this.props.qualitySelectorMinStreams&&this.props.availableQualities.every(function(a){return!!a})};d.$2=function(){var a=this;return k.jsx(b("Link.react"),{"aria-label":"Back",role:"button",onClick:function(){return a.setState({currentMenuContext:"main",currentFeedbackSelected:null,feedbackSubmitted:!1})},children:k.jsx(b("Image.react"),{className:"_4t8f",src:g("480579")})})};d.$3=function(){var a=i._("\u0e01\u0e32\u0e23\u0e15\u0e31\u0e49\u0e07\u0e04\u0e48\u0e32\u0e27\u0e34\u0e14\u0e35\u0e42\u0e2d\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21"),c=new(j||(j=b("URI")))("/settings/?tab=videos"),d=c.getQualifiedURI().getSubdomain();(d==="business"||d==="partners"||d==="developers"||d==="ai"||d==="sparkar")&&c.setSubdomain("www");b("isFacebookURI")(c)||c.setDomain(c.getDomain().replace(o,"facebook"));b("MessengerEnvironment").messengerui&&c.setDomain(b("CurrentEnvironment").workplacedotcom?"workplace.com":"facebook.com").setSubdomain(d).setProtocol("https");return k.jsx("a",{href:c,target:"_blank",className:"_4t9q _2iw4",tabIndex:this.props.tabIndex,children:a})};d.$4=function(){var a=this;return k.jsxs(b("Selector.react"),{name:"feedback_selector",onChange:function(b){a.setState({currentFeedbackSelected:b.value?b.value:null})},defaultValue:0,children:[k.jsx(n,{value:0,children:i._("\u0e27\u0e34\u0e14\u0e35\u0e42\u0e2d\u0e19\u0e35\u0e49\u0e21\u0e35\u0e1b\u0e31\u0e0d\u0e2b\u0e32\u0e2d\u0e30\u0e44\u0e23")}),k.jsx(n,{value:"audio_video_sync",children:i._("\u0e27\u0e34\u0e14\u0e35\u0e42\u0e2d\u0e41\u0e25\u0e30\u0e40\u0e2a\u0e35\u0e22\u0e07\u0e44\u0e21\u0e48\u0e15\u0e23\u0e07\u0e01\u0e31\u0e19")}),k.jsx(n,{value:"video_only_stutter",children:i._("\u0e27\u0e35\u0e14\u0e35\u0e42\u0e2d\u0e01\u0e23\u0e30\u0e15\u0e38\u0e01\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48\u0e25\u0e37\u0e48\u0e19\u0e44\u0e2b\u0e25")}),k.jsx(n,{value:"audio_video_stutter",children:i._("\u0e27\u0e34\u0e14\u0e35\u0e42\u0e2d\u0e41\u0e25\u0e30\u0e40\u0e2a\u0e35\u0e22\u0e07\u0e01\u0e23\u0e30\u0e15\u0e38\u0e01\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48\u0e25\u0e37\u0e48\u0e19\u0e44\u0e2b\u0e25")}),k.jsx(n,{value:"black_screen",children:i._("\u0e2b\u0e19\u0e49\u0e32\u0e08\u0e2d\u0e40\u0e1b\u0e47\u0e19\u0e2a\u0e35\u0e14\u0e33")}),k.jsx(n,{value:"video_wont_play",children:i._("\u0e27\u0e34\u0e14\u0e35\u0e42\u0e2d\u0e08\u0e30\u0e44\u0e21\u0e48\u0e40\u0e25\u0e48\u0e19")})]})};d.$5=function(){if(this.state.currentFeedbackSelected!=null&&this.state.currentFeedbackSelected!==""){var a=b("XVideoPlaybackExperienceReportController").getURIBuilder().setString("issue_type",this.state.currentFeedbackSelected).setFBID("video_id",this.props.videoID).setInt("is_live",this.props.isLive?1:0).getURI();new(b("AsyncRequest"))(a).send();this.setState({feedbackSubmitted:!0});b("VideoPlayerShakaPerformanceLogger").setVideoPlaybackExperienceIssue(this.state.currentFeedbackSelected)}};d.render=function(){var a=this,c=null,d=null,e=null,f=null,h=this.props.availableQualities;this.showQualitySelector()&&h!=null?(c=h.map(function(b){return a.createMenuItem(b,!0,b===a.props.preferredQuality,function(){var c=a.props.onSelectQuality;c&&c(b)},"radioButton",a.props.isSphericalVideo)}),c.push(this.createMenuItem(i._("\u0e2d\u0e31\u0e15\u0e42\u0e19\u0e21\u0e31\u0e15\u0e34"),this.props.canAutoSelectVideoQuality===!0,this.props.preferredQuality===null,function(){var b=a.props.onSelectQuality;b&&b(null)},"radioButton")),c.reverse(),d=k.jsx(b("ClickableAreaButton.react"),{onClick:function(){return a.setState({currentMenuContext:"quality"})},label:"Change Quality",children:k.jsx("div",{className:"_2iw4 _4t9t",children:k.jsxs(b("Layout.react"),{children:[k.jsx(m,{children:i._("\u0e04\u0e38\u0e13\u0e20\u0e32\u0e1e")}),k.jsxs(l,{className:"_4t9u",children:[this.props.preferredQuality===null?k.jsxs(k.Fragment,{children:[i._("\u0e2d\u0e31\u0e15\u0e42\u0e19\u0e21\u0e31\u0e15\u0e34"),this.props.selectedQuality!=null?k.jsxs(k.Fragment,{children:[" ",k.jsx("span",{children:this.props.selectedQuality})]}):null]}):k.jsx("span",{children:this.props.preferredQuality}),k.jsx(b("Image.react"),{className:"_4t9v",src:g("480587")})]})]})})})):f=this.createMenuItem(i._("HD"),this.props.hasHD,this.props.isHD,this.props.onToggleHD,"checkBox");e=k.jsx(b("Link.react"),{onClick:function(){return a.setState({currentMenuContext:"feedback"})},className:"_2iw4 _4t9w",children:k.jsxs(b("Layout.react"),{children:[k.jsx(m,{children:i._("\u0e23\u0e32\u0e22\u0e07\u0e32\u0e19\u0e1b\u0e31\u0e0d\u0e2b\u0e32\u0e27\u0e34\u0e14\u0e35\u0e42\u0e2d")}),k.jsx(l,{className:"_4t9u",children:k.jsx(b("Image.react"),{className:"_4t9v",src:g("480587")})})]})});h=null;switch(this.state.currentMenuContext){case"main":h=k.jsxs("div",{className:"_2i_x",children:[f,this.$1(),d,this.$3(),e]});break;case"quality":h=k.jsxs("div",{className:"_2i_x",children:[k.jsxs("div",{className:"_4t9q",children:[this.$2(),i._("\u0e04\u0e38\u0e13\u0e20\u0e32\u0e1e")]}),k.jsx("div",{className:"_4t9z",role:"radiogroup",children:c})]});break;case"feedback":h=k.jsxs("div",{className:"_2i_x",children:[k.jsxs("div",{className:"_4t9q",children:[this.$2(),i._("\u0e23\u0e32\u0e22\u0e07\u0e32\u0e19\u0e1b\u0e31\u0e0d\u0e2b\u0e32\u0e27\u0e34\u0e14\u0e35\u0e42\u0e2d")]}),k.jsxs("div",{className:"_4t9z",children:[this.state.feedbackSubmitted?null:this.$4(),this.state.feedbackSubmitted?k.jsx("div",{className:"_4t9-",children:i._("\u0e02\u0e2d\u0e1a\u0e04\u0e38\u0e13\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e04\u0e33\u0e15\u0e34\u0e0a\u0e21\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13")}):k.jsx("div",{className:"_4ta3",children:k.jsx(b("XUIButton.react"),{disabled:!(this.state.currentFeedbackSelected!=null&&this.state.currentFeedbackSelected!==""),label:i._("\u0e2a\u0e48\u0e07"),use:"confirm",onClick:this.$5.bind(this)})})]})]});break}return k.jsxs("div",{className:"_2i_w",children:[h,k.jsx("div",{className:"_2j03"})]})};return c}(k.Component);a.defaultProps={tabIndex:"-1",availableQualities:null,selectedQuality:null,preferredQuality:null,canAutoSelectVideoQuality:!1,showQualitySelector:!1,qualitySelectorMinStreams:2,streamingFormat:null,onSelectQuality:function(){}};a.propTypes={areCaptionsActive:(c=b("prop-types")).bool,areCaptionsAutogenerated:c.bool,hasHD:c.bool,hasCaptions:c.bool,isHD:c.bool,isLive:c.bool,isSphericalVideo:c.bool,onToggleHD:c.func,onToggleCaptions:c.func,tabIndex:c.string,availableQualities:c.array,selectedQuality:c.string,preferredQuality:c.string,canAutoSelectVideoQuality:c.bool,onSelectQuality:c.func,showQualitySelector:c.bool,qualitySelectorMinStreams:c.number,streamingFormat:c.string};e.exports=a}),null);
__d("VideoSettingsControl.react",["ix","cx","fbt","AbstractButton.react","BanzaiODS","ClickableArea.react","Image.react","React","TooltipData","TrackingNodes","VideoPlayerExperiments","VideoPlayerQualitiesArray","VideoSettingsMenu.react","asset","prop-types","shallowCompare"],(function(a,b,c,d,e,f,g,h,i){var j=b("React"),k=b("VideoPlayerQualitiesArray").isVideoQualityTypicallyConsideredHD,l=b("VideoPlayerQualitiesArray").isVideoQualityTypicallyConsideredHD4K;a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={isFocus:!1},c.$1=j.createRef(),b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.shouldComponentUpdate=function(a,c){return b("shallowCompare")(this,a,c)};d.onClick=function(){!this.state.isFocus&&!this.props.disabled&&this.$1.current&&this.$1.current.showQualitySelector()&&b("BanzaiODS").bumpEntityKey(2966,"videos","quality_selector.impression"),this.setState(function(a){return{isFocus:!a.isFocus}}),this.props.onSettingsClick&&this.props.onSettingsClick()};d.getHDIndicator=function(){var a=b("VideoPlayerExperiments").showHDIndicator===!0&&!this.props.isInline&&this.props.preferredQuality===null?k(this.props.selectedQuality):k(this.props.preferredQuality);if(!a)return null;l(this.props.selectedQuality)?a="4K":a="HD";return j.jsx("span",{className:"_132c",children:a})};d.render=function(){var a=j.jsx(b("Image.react"),{className:"_rwt",src:g("391244")}),c=i._("\u0e01\u0e32\u0e23\u0e15\u0e31\u0e49\u0e07\u0e04\u0e48\u0e32\u0e21\u0e38\u0e21\u0e21\u0e2d\u0e07\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21"),d=null;!this.props.disabled&&this.state.isFocus&&(d=j.jsx("div",{className:"_2iw7"+(this.state.isFocus?" _2iw8":""),children:j.jsx(b("VideoSettingsMenu.react"),{areCaptionsActive:this.props.areCaptionsActive,areCaptionsAutogenerated:this.props.areCaptionsAutogenerated,hasHD:this.props.hasHD,hasCaptions:this.props.hasCaptions,isHD:this.props.isHD,isLive:this.props.isLive,isSphericalVideo:this.props.isSphericalVideo,onToggleHD:this.props.onToggleHD,onToggleCaptions:this.props.onToggleCaptions,tabIndex:this.props.tabIndex,availableQualities:this.props.availableQualities,selectedQuality:this.props.selectedQuality,preferredQuality:this.props.preferredQuality,canAutoSelectVideoQuality:this.props.canAutoSelectVideoQuality,onSelectQuality:this.props.onSelectQuality,showQualitySelector:this.props.showQualitySelector,qualitySelectorMinStreams:this.props.qualitySelectorMinStreams,streamingFormat:this.props.streamingFormat,videoID:this.props.videoID,ref:this.$1})}));var e=this.getHDIndicator(),f="_zbd"+(this.props.disabled?" _132h":""),h=i._("\u0e01\u0e32\u0e23\u0e15\u0e31\u0e49\u0e07\u0e04\u0e48\u0e32");f=j.jsx(b("AbstractButton.react"),{className:f,disabled:this.props.disabled,image:a,label:c,labelIsHidden:!0,ref:"button",tabIndex:this.props.tabIndex,type:"button"});a=b("TrackingNodes").getTrackingInfo(b("TrackingNodes").types.VIDEO_SETTINGS);return j.jsxs("div",{className:"_2j04","data-ft":a,children:[d,j.jsx(b("ClickableArea.react"),babelHelpers["extends"]({},b("TooltipData").propsFor(h,"above"),{onClick:this.onClick.bind(this),children:j.jsxs("div",{children:[f,e]})}))]})};return c}(j.Component);a.defaultProps={tabIndex:"-1"};a.propTypes={disabled:(c=b("prop-types")).bool,hasHD:c.bool,hasCaptions:c.bool,isHD:c.bool,isInline:c.bool,isLive:c.bool,isSphericalVideo:c.bool,areCaptionsActive:c.bool,areCaptionsAutogenerated:c.bool,onToggleHD:c.func,onToggleCaptions:c.func,tabIndex:c.string,availableQualities:c.array,selectedQuality:c.string,canAutoSelectVideoQuality:c.bool,onSelectQuality:c.func,showQualitySelector:c.bool,qualitySelectorMinStreams:c.number,streamingFormat:c.string};e.exports=a}),null);
__d("VideoWatchAndScrollControl.react",["ix","cx","fbt","AbstractButton.react","Arbiter","CurrentUser","Image.react","Locale","React","ReactDOM","TooltipData","VideoPlayerExperiments","XUIAmbientNUX.react","asset","prop-types","shallowCompare"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$1=function(){typeof c.props.onWNSNUXClose==="function"&&c.props.onWNSNUXClose()},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.shouldComponentUpdate=function(a,c){return b("shallowCompare")(this,a,c)};d.onMouseOut=function(a){b("ReactDOM").findDOMNode(this.refs.button).blur()};d.onButtonClick=function(){this.props.showWNSNUX&&this.$1(),b("Arbiter").inform("watch-and-scroll-on"),this.props.onEnterWatchAndScroll&&this.props.onEnterWatchAndScroll()};d.getIconSrc=function(){var a=b("VideoPlayerExperiments").rhcWNSEnabled,c=b("Locale").isRTL();if(a&&!c||!a&&c){a=b("VideoPlayerExperiments").pipEntryIcon;if(a)return a;return this.props.isSlidingWNSEligible?g("1127232"):g("1127233")}return this.props.isSlidingWNSEligible?g("1127225"):g("913222")};d.render=function(){var a=this,c=j.jsx(b("Image.react"),{className:"_rwt",src:this.getIconSrc()}),d=b("CurrentUser").isWorkUser()?i._("\u0e14\u0e39\u0e15\u0e48\u0e2d\u0e44\u0e1b\u0e02\u0e13\u0e30\u0e19\u0e35\u0e48\u0e04\u0e38\u0e13\u0e43\u0e0a\u0e49 Workplace"):i._("\u0e14\u0e39\u0e15\u0e48\u0e2d\u0e44\u0e1b\u0e02\u0e13\u0e30\u0e17\u0e35\u0e48\u0e04\u0e38\u0e13\u0e43\u0e0a\u0e49 Facebook");d=j.jsx(b("AbstractButton.react"),babelHelpers["extends"]({},b("TooltipData").propsFor(d,"above"),{className:"_zbd"+(this.props.disabled?" _132h":""),"data-testid":void 0,disabled:this.props.disabled,image:c,label:i._("\u0e40\u0e02\u0e49\u0e32\u0e0a\u0e21\u0e41\u0e25\u0e30\u0e40\u0e25\u0e37\u0e48\u0e2d\u0e19\u0e14\u0e39"),labelIsHidden:!0,onClick:this.onButtonClick.bind(this),onMouseOut:this.onMouseOut.bind(this),ref:"button",tabIndex:this.props.tabIndex,type:"button"}));c=i._("\u0e27\u0e34\u0e14\u0e35\u0e42\u0e2d\u0e44\u0e21\u0e48\u0e40\u0e25\u0e48\u0e19\u0e43\u0e0a\u0e48\u0e44\u0e2b\u0e21");var e=i._("\u0e04\u0e25\u0e34\u0e01\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e42\u0e2b\u0e25\u0e14\u0e27\u0e34\u0e14\u0e35\u0e42\u0e2d\u0e43\u0e19\u0e02\u0e13\u0e30\u0e17\u0e35\u0e48\u0e04\u0e38\u0e13\u0e43\u0e0a\u0e49 Facebook \u0e15\u0e48\u0e2d");c=j.jsxs(b("XUIAmbientNUX.react"),{alignment:"right",contextRef:function(){return a.refs.button},customwidth:250,onCloseButtonClick:this.$1,shown:this.props.showWNSNUX,position:"above",width:"custom",children:[j.jsx("div",{className:"_302j",children:c}),e]});return j.jsxs("span",{children:[d,c]})};return c}(j.Component);a.propTypes={onEnterWatchAndScroll:b("prop-types").func,tabIndex:b("prop-types").string};e.exports=a}),null);