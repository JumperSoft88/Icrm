if (self.CavalryLogger) { CavalryLogger.start_js(["CLmtW"]); }

__d("StartCallWithZenonOrFBRTC",["requireCond","Bootloader","cr:1335884","cr:1335885","RTWebIncomingRingConfiguration","cr:1335886","cr:1335887"],(function(a,b,c,d,e,f){"use strict";a={startP2PCall:function(a,c,d,e,f){b("cr:1335886")!=null&&b("cr:1335885")!=null&&b("cr:1335887")!=null?b("cr:1335887").startCall(b("cr:1335886").get(),{existingCall:null,invitees:[c],mediaType:a?"audio":"video",thread:{id:d,type:b("cr:1335885").ONE_TO_ONE},trigger:e}):b("cr:1335884")!=null&&b("cr:1335884").startOutgoingCall(c,e,a,!1,f)},startGroupCall:function(a,c,d,e,f){f===void 0&&(f=null);if(b("cr:1335886")!=null&&b("cr:1335885")!=null&&b("cr:1335887")!=null){if(!b("RTWebIncomingRingConfiguration").isSupportedClientForProtocol("mw")){b("Bootloader").loadModules(["MessengerRTCUnsupportedBrowserDialogController"],function(b){b.render({hasVideo:!a,isGroupCall:!0})},"StartCallWithZenonOrFBRTC");return}b("cr:1335887").startCall(b("cr:1335886").get(),{existingCall:f,invitees:d,mediaType:a?"audio":"video",thread:{id:c,type:b("cr:1335885").GROUP},trigger:e})}else b("cr:1335884")!=null&&(f!=null&&f.server_info_data!=null?b("cr:1335884").startGroupCall({conferenceName:"GROUP:"+c,hasVideo:!a,serverInfoData:f.server_info_data,trigger:e}):d.length>0?b("cr:1335884").startGroupCall({conferenceName:"GROUP:"+c,hasVideo:!a,trigger:e,usersToRing:d}):b("cr:1335884").startGroupCall({conferenceName:"GROUP:"+c,hasVideo:!a,trigger:e}))}};e.exports=a}),null);
__d("FBRTCCallabilityStore",["FBRTCDispatcher","RTCCallabilityStore"],(function(a,b,c,d,e,f){"use strict";e.exports=new(b("RTCCallabilityStore"))(b("FBRTCDispatcher"))}),null);
__d("ChatJoinCallSheet.react",["cx","fbt","FBRTCLogger","Link.react","React","StartCallWithZenonOrFBRTC"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("FBRTCLogger").Trigger,j=b("React");a=function(a){var c=a.rtcCallData,d=a.threadFBID;a=c.call_state==="VIDEO_GROUP_CALL"?h._("\u0e01\u0e33\u0e25\u0e31\u0e07\u0e43\u0e0a\u0e49\u0e27\u0e34\u0e14\u0e35\u0e42\u0e2d\u0e41\u0e0a\u0e17\u0e41\u0e1a\u0e1a\u0e01\u0e25\u0e38\u0e48\u0e21\u0e2d\u0e22\u0e39\u0e48"):h._("\u0e01\u0e32\u0e23\u0e42\u0e17\u0e23\u0e41\u0e1a\u0e1a\u0e01\u0e25\u0e38\u0e48\u0e21\u0e01\u0e33\u0e25\u0e31\u0e07\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e2d\u0e22\u0e39\u0e48");return j.jsxs("div",{className:"_4jnc",children:[j.jsx("div",{className:"_4jnd",children:a}),j.jsx(b("Link.react"),{className:"_4jne",onClick:function(){return k(c,d)},children:h._("\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21")})]})};var k=function(a,c){var d=a.call_state,e=a.server_info_data;a=a.initiator_fbid;b("StartCallWithZenonOrFBRTC").startGroupCall(d!=="VIDEO_GROUP_CALL",c,[],i.MULTIWAY_CHAT_TAB_SHEET_JOIN_CALL_BUTTON,{call_state:d,server_info_data:e,initiator_fbid:a})};e.exports=a}),null);
__d("ChatSidebarCallButtons.react",["ix","cx","fbt","Image.react","MercuryIDs","React","RTWebUserActionLogger","ShimButton.react","StartCallWithZenonOrFBRTC","asset","nullthrows","qex"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=b("React");c=b("React");var k=c.useEffect,l=c.useState;function a(a){var c,d,e=a.hover,f=a.shortName;a=a.threadID;c=(c=b("qex")._("1406110"))!=null?c:!1;d=(d=b("qex")._("1406111"))!=null?d:!1;return e?j.jsxs(j.Fragment,{children:[d?j.jsx(m,{shortName:f,threadID:a,isAudioCall:!0}):null,c?j.jsx(m,{shortName:f,threadID:a,isAudioCall:!1}):null]}):null}function m(a){var c=a.isAudioCall,d=a.shortName,e=a.threadID;k(function(){b("RTWebUserActionLogger").logPreCallImpression({callType:"p2p",surface:"chat_sidebar",component:c?"audio_button":"video_button"})},[c]);a=l(!1);var f=a[0],h=a[1];a=c?j.jsx(b("Image.react"),{src:g("588631")}):j.jsx(b("Image.react"),{src:g("480009")});var m=c?j.jsx(b("Image.react"),{src:g("531568")}):j.jsx(b("Image.react"),{src:g("788092")});return j.jsx(b("ShimButton.react"),{"aria-label":d!=null?c?i._("\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19\u0e01\u0e32\u0e23\u0e42\u0e17\u0e23\u0e2a\u0e19\u0e17\u0e19\u0e32\u0e01\u0e31\u0e1a {shortname}",[i._param("shortname",d)]):i._("\u0e40\u0e23\u0e34\u0e48\u0e21\u0e27\u0e34\u0e14\u0e35\u0e42\u0e2d\u0e41\u0e0a\u0e17\u0e01\u0e31\u0e1a {shortname}",[i._param("shortname",d)]):null,"data-testID":c?"startVoiceCall":"startVideoCall",className:"_8_e2",onMouseEnter:function(){return h(!0)},onMouseLeave:function(){return h(!1)},onClick:function(a){a.preventDefault(),b("RTWebUserActionLogger").logPreCallClick({callType:"p2p",surface:"chat_sidebar",component:c?"audio_button":"video_button"}),n(c,e)},children:f?m:a})}function n(a,c){var d=a?"chat_sidebar_audio_button":"chat_sidebar_video_button";if(b("MercuryIDs").isCanonical(c)){var e=b("nullthrows")(b("MercuryIDs").getUserIDFromThreadID(c)),f=b("MercuryIDs").getThreadFBIDFromThreadID(c);b("StartCallWithZenonOrFBRTC").startP2PCall(a,e,f,d,!0)}else{e=b("MercuryIDs").getThreadFBIDFromThreadID(c);b("StartCallWithZenonOrFBRTC").startGroupCall(a,e,[],d)}}e.exports=a}),null);
__d("ChatVideoCallButton.react",["cx","fbt","invariant","Bootloader","ChatVideoCallIcon.bs","CurrentUser","FantaAvailableStatus","FBIDCheck","FBRTCCallabilityStore","ImmutableObject","Keys","LayerFadeOnHide","Link.react","MercuryIDs","MessengerParticipants.bs","RTWebUserActionLogger","StartCallWithZenonOrFBRTC","immutable","isStringNullOrEmpty","MercuryThreadIDMap","React","TrackingNodes","FBRTCLogger","XUIAmbientNUX.react","qex"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=b("ChatVideoCallIcon.bs").jsComponent,k=b("MercuryThreadIDMap").get(),l=b("React"),m=b("FBRTCLogger").Trigger;a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=null,d.$2=null,d.state={isCallable:!1,user:null},d.$7=function(a){a.preventDefault(),d.$9()},d.$8=function(a){a.preventDefault();if(a.keyCode!==b("Keys").RETURN)return;a.target&&(a.target instanceof HTMLElement||i(0,5852),a.target.blur());d.$9()},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){var a=this,c=this.props,d=c.isAudio;c=c.isGroupChat;c=[b("RTWebUserActionLogger").getCallType(c),b("RTWebUserActionLogger").getAudioVideoComponent(d)];d=c[0];c=c[1];b("RTWebUserActionLogger").logPreCallImpression({callType:d,surface:"chat_tab",component:c});this.setState({isCallable:this.$3(),user:this.$4()});this.$2=b("FBRTCCallabilityStore").addListener(function(b){a.setState({isCallable:a.$3(),user:a.$4()})})};d.componentDidUpdate=function(){if(!this.$1){var a=this.$5();this.state.user&&this.state.user.id!==a&&this.setState({user:this.$4()})}a=this.$3();a!==this.state.isCallable&&this.setState({isCallable:a})};d.componentWillUnmount=function(){this.$1&&b("MessengerParticipants.bs").removeCallback(this.$1),this.$2&&this.$2.remove()};d.$6=function(){var a=!b("isStringNullOrEmpty")(this.props.threadID)&&b("FantaAvailableStatus").isAvailable(this.props.thread,this.props.threadID);return a&&this.state.isCallable};d.$5=function(){var a=b("MercuryIDs").getUserIDFromThreadID(this.props.threadID);if(a===this.props.viewer||!b("FBIDCheck").isUser_deprecated(a))return null;a&&b("FBIDCheck").isUser_deprecated(a)||i(0,5851);return b("MercuryIDs").getParticipantIDFromUserID(a)};d.$4=function(){var a=this,c=this.$5(),d=null;if(c){var e=b("MessengerParticipants.bs").getNow(c);this.$1&&b("MessengerParticipants.bs").removeCallback(this.$1);e?(this.$1=null,d=e):this.$1=b("MessengerParticipants.bs").getMulti([c],function(b){a.$1=null,a.setState({user:b[c]})})}return d};d.$3=function(){if(!this.props.threadID)return!1;if(this.props.isGroupChat)return!0;var a=b("MercuryIDs").getUserIDFromThreadID(this.props.threadID);if(a===this.props.viewer||!b("FBIDCheck").isUser_deprecated(a))return!1;a&&b("FBIDCheck").isUser_deprecated(a)||i(0,5851);return!b("FBRTCCallabilityStore").isBlocked(a,this.props.thread)&&b("FBRTCCallabilityStore").isCallable(a,this.props.thread)};d.getTooltipLabel=function(){if(this.props.isGroupChat)return this.props.isAudio?h._("\u0e40\u0e23\u0e34\u0e48\u0e21\u0e01\u0e32\u0e23\u0e42\u0e17\u0e23\u0e41\u0e1a\u0e1a\u0e01\u0e25\u0e38\u0e48\u0e21"):h._("\u0e40\u0e23\u0e34\u0e48\u0e21\u0e27\u0e34\u0e14\u0e35\u0e42\u0e2d\u0e41\u0e0a\u0e17\u0e41\u0e1a\u0e1a\u0e01\u0e25\u0e38\u0e48\u0e21");var a=this.state.user;return!a||!a.fbid?void 0:this.props.isAudio?b("FBRTCCallabilityStore").voiceCallButtonTooltip(a.fbid,a.short_name,this.state.isCallable,this.props.thread):b("FBRTCCallabilityStore").callButtonTooltip(a.fbid,a.short_name,this.state.isCallable,this.props.thread)};d.render=function(){var a=this;if(!this.props.shown||!this.state.isCallable)return null;var c=b("TrackingNodes").getTrackingInfo(this.props.isAudio?b("TrackingNodes").types.VIDEOCHAT:b("TrackingNodes").types.VOICECHAT),d=JSON.stringify({videochat:"call_clicked_bhat_tab"});return l.jsxs("div",{children:[l.jsx(b("Link.react"),{"aria-label":this.getTooltipLabel(),className:"button _3olv"+(this.state.isCallable?" enabled":""),"data-ft":c,"data-gt":d,"data-hover":"tooltip","data-tooltip-content":this.getTooltipLabel(),"data-tooltip-position":"above","data-testID":this.props.isAudio?"startVoiceCall":"startVideoCall",onClick:this.$7,onKeyUp:this.$8,ref:"button",role:"button",children:l.jsx(j,{isAudio:this.props.isAudio,iconStyle:this.props.iconStyle})}),l.jsx("div",{className:this.$6()&&!this.props.isAudio?"_18pe":""}),l.jsx(b("XUIAmbientNUX.react"),{alignment:"right",behaviors:{LayerFadeOnHide:b("LayerFadeOnHide")},contextRef:function(){return a.refs.button},onCloseButtonClick:this.props.onRTCNuxCloseButtonClick,shown:this.props.rtcNuxShown,width:"auto",children:h._("\u0e04\u0e38\u0e13\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e42\u0e17\u0e23\u0e41\u0e1a\u0e1a\u0e01\u0e25\u0e38\u0e48\u0e21\u0e44\u0e14\u0e49\u0e41\u0e25\u0e49\u0e27\u0e43\u0e19\u0e15\u0e2d\u0e19\u0e19\u0e35\u0e49")})]})};d.$9=function(){if(!this.state.isCallable)return;this.props.onRTCNuxCloseButtonClick();this.$10()};d.$10=function(){var a=this,c=this.props,d=c.isAudio,e=c.isGroupChat;c=c.threadID;!c&&i(0,5853);if(e){e=b("RTWebUserActionLogger").getAudioVideoComponent(d);b("RTWebUserActionLogger").logPreCallClick({callType:"mw",surface:"chat_tab",component:e});b("MercuryIDs").isLocalThread(c)?k.getServerIDFromClientID(c,function(b){return a.$11(b)}):this.$11(b("MercuryIDs").getThreadFBIDFromThreadID(c))}else{e=this.state.user&&this.state.user.fbid;if(!e)return;var f=d?"chattab_audio_button":"chattab_video_button";b("StartCallWithZenonOrFBRTC").startP2PCall(!!d,e,b("MercuryIDs").getThreadFBIDFromThreadID(c),f,this.$6())}};d.$11=function(a){var c=this,d=this.props,e=d.isAudio;d=d.rtcCallData;var f=d?d:{},g=f.call_state;f=f.server_info_data;if(g!=="NO_ONGOING_CALL"&&f){b("StartCallWithZenonOrFBRTC").startGroupCall(!!e,a,[],g!=="AUDIO_GROUP_CALL"?e?m.MULTIWAY_THREAD_HEADER_JOIN_AUDIO_CALL_AUDIO_BUTTON:m.MULTIWAY_THREAD_HEADER_JOIN_AUDIO_CALL_VIDEO_BUTTON:e?m.MULTIWAY_THREAD_HEADER_JOIN_VIDEO_CALL_AUDIO_BUTTON:m.MULTIWAY_THREAD_HEADER_JOIN_VIDEO_CALL_VIDEO_BUTTON,{call_state:g,server_info_data:f,initiator_fbid:d==null?void 0:d.initiator_fbid});return}b("Bootloader").loadModules(["FBRTCSupport","MessengerState.bs","MessengerParticipantsFetcher.bs","FBRTCUnsupportedBrowserMessage","MessengerRTCGroupCallParticipantsPickerDialogController"],function(d,f,g,h,i){if(!d.isGroupCallWebtrcSupported()){h.showForOutgoingGroupCall();return}f.getThreadMeta(b("CurrentUser").getID(),c.props.threadID,function(d){var f=d.participants?d.participants.filter(function(a){return a!==b("MercuryIDs").getParticipantIDFromUserID(c.props.viewer)}).map(function(a){return b("MercuryIDs").getUserIDFromParticipantID(a)}):[];if(f.length>0){var h=b("qex")._("1006758")||0;if(f.length<h)b("StartCallWithZenonOrFBRTC").startGroupCall(!!e,a,f,e?m.MULTIWAY_THREAD_HEADER_AUDIO_BUTTON:m.MULTIWAY_THREAD_HEADER_VIDEO_BUTTON);else{var j=null;b("qex")._("1277463")&&(j=function(c){b("StartCallWithZenonOrFBRTC").startGroupCall(!!e,a,c,e?m.MULTIWAY_THREAD_HEADER_AUDIO_BUTTON:m.MULTIWAY_THREAD_HEADER_VIDEO_BUTTON)});g.$$fetch({ids:f}).done(function(e){i.render({participants:b("immutable").Map(e.map(function(a){return[a.id,new(b("ImmutableObject"))(a)]})),thread:d,viewerID:c.props.viewer,trigger:c.props.isAudio?m.MULTIWAY_THREAD_HEADER_AUDIO_BUTTON:m.MULTIWAY_THREAD_HEADER_VIDEO_BUTTON,conferenceName:"GROUP:"+a,hasVideo:!c.props.isAudio,handleCall:j})})}}else b("StartCallWithZenonOrFBRTC").startGroupCall(!!e,a,f,e?m.MULTIWAY_THREAD_HEADER_AUDIO_BUTTON:m.MULTIWAY_THREAD_HEADER_VIDEO_BUTTON)})},"ChatVideoCallButton.react")};return c}(l.PureComponent);a.defaultProps={shown:!0,rtcCallData:{call_state:"NO_ONGOING_CALL"}};e.exports=a}),null);