if (self.CavalryLogger) { CavalryLogger.start_js(["6u4rW"]); }

__d("adsMessengerDataModelGetPayload",["AdsMessengerJSONMediaFormatType","adsMessengerDataModelGetMediaFormat","getByPath"],(function(a,b,c,d,e,f){"use strict";function a(a){var c=b("adsMessengerDataModelGetMediaFormat")(a);switch(c){case b("AdsMessengerJSONMediaFormatType").IMAGE:return b("getByPath")(a,["image_format","message","attachment","payload"]);case b("AdsMessengerJSONMediaFormatType").TEXT:return b("getByPath")(a,["text_format","message","attachment","payload"]);case b("AdsMessengerJSONMediaFormatType").VIDEO:return b("getByPath")(a,["video_format","message","attachment","payload"]);default:return null}}e.exports=a}),null);
__d("adsMessengerDataModelGetSecondText",["AdsMessengerJSONPaths","adsMessengerDataModelIsTextWithQR","getByPath"],(function(a,b,c,d,e,f){"use strict";function a(a){if(b("adsMessengerDataModelIsTextWithQR")(a)){var c=b("AdsMessengerJSONPaths").TEXT_FORMAT.MESSAGE.SECOND_TEXT;return b("getByPath")(a,c)}return null}e.exports=a}),null);
__d("adsMessengerDataModelGetTemplateType",["AdsMessengerJSONMediaFormatType","AdsMessengerJSONPaths","adsMessengerDataModelGetMediaFormat","getByPath"],(function(a,b,c,d,e,f){"use strict";function a(a){if(a==null)return null;var c=b("adsMessengerDataModelGetMediaFormat")(a);switch(c){case b("AdsMessengerJSONMediaFormatType").IMAGE:return b("getByPath")(a,b("AdsMessengerJSONPaths").IMAGE_FORMAT.MESSAGE.ATTACHMENT.TYPE);case b("AdsMessengerJSONMediaFormatType").TEXT:return b("getByPath")(a,b("AdsMessengerJSONPaths").TEXT_FORMAT.MESSAGE.ATTACHMENT.TYPE);case b("AdsMessengerJSONMediaFormatType").VIDEO:return b("getByPath")(a,b("AdsMessengerJSONPaths").VIDEO_FORMAT.MESSAGE.ATTACHMENT.TYPE);default:c=!!a.message_data;var d=c?a.message_data:a;if(d instanceof Array)try{var e=JSON.parse(JSON.stringify(d)).length===1;return e?(e=d[0].message)==null?void 0:(e=e.attachment)==null?void 0:e.type:null}catch(a){return null}if(c&&d instanceof Object){return(e=d.message)==null?void 0:(c=e.attachment)==null?void 0:c.type}return(d=a.message)==null?void 0:(e=d.attachment)==null?void 0:e.type}}e.exports=a}),null);
__d("MessengerSearchSourceUtils",["MessengerConfig","compactArray"],(function(a,b,c,d,e,f){"use strict";a={getNullStateEntries:function(a){var c=a;if(b("MessengerConfig").NSDB)switch(b("MessengerConfig").NSDBT){case"top_friends":c=b("compactArray")(a.map(function(a){return a.getType()==="friend"?a:null}));break;case"top_groups":c=b("compactArray")(a.map(function(a){return a.getType()==="thread"?a:null}));break;case"top_friends_and_groups":var d=b("compactArray")(a.map(function(a){return a.getType()==="thread"?a:null}));a=b("compactArray")(a.map(function(a){return a.getType()==="friend"?a:null})).slice(0,b("MessengerConfig").NSDBNF);c=a.concat(d);break}return c}};e.exports=a}),null);
__d("MessengerSearchSource",["ChatSearchSource","MercuryConfig","MercuryIDs","MercurySingletonProvider","MessengerConfig","MessengerEnvironment","MessengerParticipants.bs","MessengerSearchFunnelLoggerConstants","MessengerSearchSourceUtils","MessengerTypeaheadUtils","SearchableEntry","emptyFunction","requireWeak"],(function(a,b,c,d,e,f){"use strict";var g=50,h=b("MessengerEnvironment").messengerui;a=function(a){babelHelpers.inheritsLoose(c,a);c.getForFBID=function(a){return i.getForFBID(a)};c.get=function(){return i.get()};function c(c){var d;d=a.call(this,{queryRequests:[{uri:"/ajax/mercury/composer_query.php"}],searchType:b("MessengerSearchFunnelLoggerConstants").WWW_SIDEBAR_TAG})||this;d.$MessengerSearchSource1=[];d.$MessengerSearchSource2=c;return d}var d=c.prototype;d.getDefaultEntriesStatus=function(){return b("MessengerConfig").NSDB&&this.$MessengerSearchSource1&&this.$MessengerSearchSource1.length>0};d.bootstrapImpl=function(c){var d=this;b("requireWeak")("OrderedFriendsList",function(c){return c.getSearchableEntries(g,!0,function(c){d.$MessengerSearchSource1=b("MessengerSearchSourceUtils").getNullStateEntries(c),a.prototype.addLocalEntries.call(d,c)})});var e=b("MercuryIDs").getParticipantIDFromUserID(this.$MessengerSearchSource2);b("MessengerParticipants.bs").get(e,function(c){a.prototype.addLocalEntries.call(d,[new(b("SearchableEntry"))({uniqueID:c.fbid?c.fbid.toString():c.id,title:c.name,type:"friend",photo:c.big_image_src||c.image_src,uri:c.href,auxiliaryData:{isMessengerUser:c.is_messenger_user}})])});a.prototype.bootstrapImpl.call(this,b("emptyFunction"));c()};d.searchImpl=function(c,d,e){e=e||{};if(c===""&&e.showDefaultEntries){d(this.$MessengerSearchSource1,c);var f=e&&e.onQueryFinished;f&&f("",this.$MessengerSearchSource1);return}e.threadLimit=b("MercuryConfig").MaxThreadResults;a.prototype.searchImpl.call(this,c,this.$MessengerSearchSource3(d,e),e)};d.$MessengerSearchSource3=function(a,c){return h&&c&&c.showThreadSearchEntry?function(c,d){var e=b("MessengerTypeaheadUtils").getMessageSearchEntry(d);e?a([e].concat(c),d):a(c,d)}:a};return c}(b("ChatSearchSource"));var i=new(b("MercurySingletonProvider"))(a);e.exports=a}),null);
__d("MessengerSearchTypeahead.react",["cx","fbt","ix","AbstractTypeahead.react","Bootloader","BootloadOnRender.react","CurrentUser","Image.react","JSResource","LazyComponent.react","MercuryIDs","MercuryThreadIDMap","MercuryVanityIDMap.bs","MessengerConfig","MessengerSearchFunnelLoggerConstants","MessengerSearchFunnelState","MessengerSearchLoggerUtil","MessengerSearchSource","MessengerSpinner.react","MessengerState.bs","MessengerUniversalSearchFunnelLoggerConstants","prop-types","React","TypeaheadNavigation","ifRequired","joinClasses"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=b("MercuryThreadIDMap").get(),k=b("React"),l=i("86933"),m=100,n=null,o=null;a=b("MessengerUniversalSearchFunnelLoggerConstants").END_ACTIONS;var p=a.ABANDON,q=a.RESULT_SELECTED;c=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c;c=a.apply(this,arguments)||this;c.state={isLoading:!1,orderable:!!o,gameID:null};c.$6=function(){var a;(a=c.props).onBlur.apply(a,arguments);b("Bootloader").loadModules(["MessengerSearchFunnelLogger","MessengerUniversalSearchFunnelLogger"],function(a,d){a.endFunnel(b("MessengerSearchFunnelLoggerConstants").NAME),!c.$17?d.endFunnel(b("MessengerUniversalSearchFunnelLoggerConstants").END_REASONS.END_ACTION,p):(d.endFunnel(b("MessengerUniversalSearchFunnelLoggerConstants").END_REASONS.END_ACTION,q),c.$17=!1)},"MessengerSearchTypeahead.react");c.setState({isLoading:!1})};c.$7=function(){var a;(a=c.props).onChange.apply(a,arguments)};c.$8=function(){c.$9();c.$3!==null&&c.props.onFocus(c.$3.getDefaultEntriesStatus());var a=Math.floor(Math.random()*65536);c.$2.setSessionID(a);b("Bootloader").loadModules(["MessengerSearchFunnelLogger","MessengerUniversalSearchFunnelLogger"],function(a,d){a.startFunnel(b("MessengerSearchFunnelLoggerConstants").NAME,b("MessengerSearchFunnelLoggerConstants").WWW_SIDEBAR_TAG,b("MessengerSearchFunnelLoggerConstants").UNIVERSAL_SEARCH),d.startFunnel(b("MessengerUniversalSearchFunnelLoggerConstants").ENTRY_SURFACES.SIDEBAR,b("MessengerUniversalSearchFunnelLoggerConstants").INTERFACES.WWW,c.$2)},"MessengerSearchTypeahead.react")};c.$9=function(){c.state.orderable||b("Bootloader").loadModules(["MessengerTypeaheadView.react","MessengerTypeaheadUtils"],function(a,d){b("ifRequired")("FantaTabsEagerBootloader",function(a){return a.bootload()}),n=a,o=d,c.setState({orderable:!0})},"MessengerSearchTypeahead.react")};c.$13=function(a){a===c.props.queryString&&c.setState({isLoading:!0})};c.$12=function(a,d){a===c.props.queryString&&(a===""&&d!=null&&d.length>0&&b("Bootloader").loadModules(["MessengerUniversalSearchFunnelLogger"],function(a){a.logNullStateImpressions(d,c.props.maxEntries)},"MessengerSearchTypeahead.react"),c.setState({isLoading:!1}))};c.$14=function(a,d){b("Bootloader").loadModules(["MessengerUniversalSearchFunnelLogger"],function(e){e.logSourceEnded(a,b("MessengerUniversalSearchFunnelLoggerConstants").SOURCES.SERVER_XCONTROLLER,d,b("MessengerUniversalSearchFunnelLoggerConstants").QUERY_PROGRESS.FINISHED,a===c.props.queryString)},"MessengerSearchTypeahead.react")};c.$11=function(a){return o?o.sortEntries(a,c.props.queryString):a};c.$1=function(){c.setState({gameID:null})};c.$10=function(a,d){d=a.getUniqueID();var e=a.getType();a=a.getAuxiliaryData().alias;var f=c.props.queryString;a&&b("MercuryVanityIDMap.bs").set(a,b("MercuryIDs").getParticipantIDFromUserID(d));c.$17=!0;if(e==="thread")j.getClientIDFromServerID(d,function(a){c.props.onSelect(a,e),b("Bootloader").loadModules(["MessengerSearchFunnelLogger","MessengerUniversalSearchFunnelLogger"],function(c,d){c.logResultSelection(b("MessengerSearchFunnelLoggerConstants").NAME,f,a,b("MessengerSearchFunnelLoggerConstants").GROUP),d.logResultSelected(f,a,b("MessengerUniversalSearchFunnelLoggerConstants").RESULT_TYPES.GROUP,b("MessengerUniversalSearchFunnelLoggerConstants").RESULT_SURFACES.TYPEAHEAD)},"MessengerSearchTypeahead.react")});else if(e==="game")c.setState({gameID:d});else{var g=b("MessengerSearchLoggerUtil").getLoggingTypeFromMercuryType(e);b("MessengerState.bs").getThreadMeta(b("CurrentUser").getID(),b("MercuryIDs").getThreadIDFromUserID(d),function(a){c.props.onSelect(a.thread_id,e),b("Bootloader").loadModules(["MessengerSearchFunnelLogger","MessengerUniversalSearchFunnelLogger"],function(c,d){c.logResultSelection(b("MessengerSearchFunnelLoggerConstants").NAME,f,a.thread_id,g),d.logResultSelected(f,a.thread_id,g,b("MessengerUniversalSearchFunnelLoggerConstants").RESULT_SURFACES.TYPEAHEAD)},"MessengerSearchTypeahead.react")})}};babelHelpers.assertThisInitialized(c).$1=c.$1.bind(babelHelpers.assertThisInitialized(c));c.$2=new(b("MessengerSearchFunnelState"))();c.$3=b("MessengerSearchSource").getForFBID(c.props.viewer);return c}var d=c.prototype;d.UNSAFE_componentWillMount=function(){var a=this,c=function(a,b,c){b=a.indexOf(b);b=b==-1?a.length-1:b-1;c(b==-1?a[a.length-1]:a[b])},d=function(a,b,c){b=a.indexOf(b)+1;c(b==a.length?a[0]:a[b])};c=b("TypeaheadNavigation").moveDown;d=b("TypeaheadNavigation").moveUp;this.$4=function(b){for(var d=arguments.length,e=new Array(d>1?d-1:0),f=1;f<d;f++)e[f-1]=arguments[f];return c.apply(void 0,[o.orderEntries(b,a.props.queryString)].concat(e))};this.$5=function(b){for(var c=arguments.length,e=new Array(c>1?c-1:0),f=1;f<c;f++)e[f-1]=arguments[f];return d.apply(void 0,[o.orderEntries(b,a.props.queryString)].concat(e))}};d.render=function(){var a=this,c=this.props.isFacebookChat?h._("\u0e04\u0e49\u0e19\u0e2b\u0e32"):h._("\u0e04\u0e49\u0e19\u0e2b\u0e32 Messenger"),d=b("CurrentUser").isWorkUser()?h._("\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e19\u0e23\u0e48\u0e27\u0e21\u0e07\u0e32\u0e19\u0e17\u0e35\u0e48\u0e08\u0e30\u0e2a\u0e48\u0e07\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21"):h._("\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e19\u0e17\u0e35\u0e48\u0e08\u0e30\u0e2a\u0e48\u0e07\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21");return k.jsxs("div",{className:"_1nq2",children:[k.jsx(b("AbstractTypeahead.react"),{"aria-label":d,autoHighlight:this.props.isFacebookChat,blurOnWindowBlur:!1,className:b("joinClasses")(this.props.className||"","_5iwm"+(this.props.isFocused||!!this.props.queryString?" _5iwn":"")+" _150g"+(this.props.isMessageSearchMode?" _1a03":"")),disabled:this.props.isMessageSearchMode,inputClassName:"_3rhb navigationFocus",navigation:{moveUp:this.$4,moveDown:this.$5},onBlur:this.$6,onChange:this.$7,entryFilter:void 0,onFocus:this.$8,onMouseOver:this.$9,onClick:this.$9,onSelectAttempt:this.$10,placeholder:c.toString(),presenter:{ViewRenderer:n,alwaysVisibleOnFocus:!0,extraRendererProps:{className:"_11_d",hasHoverState:this.props.isFacebookChat,isLoading:this.state.isLoading,onScrollIntoView:this.props.onScrollIntoView,viewer:this.props.viewer},maxEntries:this.props.maxEntries||m,sortEntries:this.$11,useLayer:!1},queryString:this.props.queryString,role:"search",searchSource:this.$3,searchSourceOptions:{loggingID:this.$2.getSessionID(),onQueryFinished:this.$12,onQueryStarted:this.$13,onResponseReturned:this.$14,showDefaultEntries:this.props.isFacebookChat?b("MessengerConfig").NSDB:!0,showThreadSearchEntry:!this.props.isFacebookChat&&!!this.props.queryString},selectOnTab:!0,spellCheck:!1,showEntriesOnFocus:this.props.isFacebookChat?b("MessengerConfig").NSDB:!0}),k.jsx(b("Image.react"),{onMouseDown:function(){var b;a.$15();(b=a.props).onClear.apply(b,arguments)},className:b("joinClasses")(this.props.className||"",(this.props.queryString?"":"hidden_elem")+" _2xme"),src:l}),this.$16()]})};d.$16=function(){return!this.state.gameID?null:k.jsx(b("BootloadOnRender.react"),{loader:b("JSResource")("MessengerGamesQuicksilverPlayerContainer.react").__setRef("MessengerSearchTypeahead.react"),placeholder:k.jsx(b("MessengerSpinner.react"),{}),component:k.jsx(b("LazyComponent.react"),{initialContextType:"SOLO",initialGameID:this.state.gameID,onHide:this.$1,initialSource:"messenger_search",sourceID:null})})};d.$15=function(){b("Bootloader").loadModules(["MessengerSearchFunnelLogger"],function(a){a.logClearQuery(b("MessengerSearchFunnelLoggerConstants").NAME)},"MessengerSearchTypeahead.react")};return c}(k.PureComponent);c.propTypes={className:(d=b("prop-types")).string,isMessageSearchMode:d.bool,isFacebookChat:d.bool,isFocused:d.bool,maxEntries:d.number,onBlur:d.func,onChange:d.func,onClear:d.func,onFocus:d.func,onSelect:d.func.isRequired,onScrollIntoView:d.func,queryString:d.string,viewer:d.string.isRequired};e.exports=c}),null);
__d("MessengerAdPreviewThreadList.react",["cx","CurrentUser","ImmutableObject","MercuryFilters.bs","MessagingTag","MessengerMasterViewHeaderReact.bs","MessengerReadReceipt.bs","MessengerSearchTypeahead.react","MessengerThreadlistReact.bs","MessengerView","React","emptyFunction","immutable","prop-types"],(function(a,b,c,d,e,f,g){"use strict";var h=b("MessengerMasterViewHeaderReact.bs").jsComponent,i=b("MessengerThreadlistReact.bs").jsComponent,j=b("React");b("immutable").OrderedMap;a=b("React");c=a.Component;d=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return j.jsxs("div",{className:this.props.className,children:[j.jsx(h,{filter:b("MercuryFilters.bs").all,folder:b("MessagingTag").INBOX,view:b("MessengerView").MASTER.RECENT,viewer:b("CurrentUser").getAccountID()}),j.jsx(b("MessengerSearchTypeahead.react"),{viewer:b("CurrentUser").getAccountID(),onSelect:b("emptyFunction")}),this.$1()]})};d.$1=function(){if(!this.props.pageID||!this.props.pageName)return null;var a=this.$2("user",this.props.pageID),c=[this.$2("fbid",this.props.pageID),this.$2("fbid",b("CurrentUser").getAccountID())],d=b("MessengerReadReceipt.bs").emptyReadReceipts;return j.jsx("div",{className:"_4zg8",children:j.jsx(i,{filter:b("MercuryFilters.bs").all,folder:"ads",newMessageRequestThreads:[new(b("ImmutableObject"))({})],onLoadMoreRequest:b("emptyFunction"),readReceipts:d,threads:[new(b("ImmutableObject"))({is_subscribed:!0,name:this.props.pageName,other_user_fbid:this.props.pageID,participants:c,snippet:this.props.message,thread_id:a,timestamp:Date.now(),unread_count:1})],viewer:b("CurrentUser").getAccountID()})})};d.$2=function(a,b){return!a||!b?"":[a,b].join(":")};return c}(c);d.propTypes={className:(f=b("prop-types")).string,message:f.string,pageID:f.string,pageName:f.string};e.exports=d}),null);
__d("MessengerAdPreviewContainer.react",["cx","fbt","AdsFluxContainer","CenteredContainer.react","Link.react","MessengerAdPreviewConversation.react","MessengerAdPreviewThreadList.react","PagesReplyComposerActions","PagesReplyComposerDispatcher","PagesReplyComposerStore","PagesReplyComposerTextUtilities","React","adsMessengerDataModelGetPayload","adsMessengerDataModelGetQuickReplies","adsMessengerDataModelGetSecondText","adsMessengerDataModelGetSurface","adsMessengerDataModelGetTemplateType","adsMessengerDataModelGetWelcomeMessage","adsMessengerDataModelIsTextWithQR","cxMargin","prop-types","setByPath"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("React");a=b("React");c=a.Component;var j="welcomeMessage",k="CONVERSATION",l="THREAD_LIST";d=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}c.getStores=function(){return[b("PagesReplyComposerStore").getByKey(j)]};c.calculateState=function(){var a=b("PagesReplyComposerStore").getByKey(j).getState();return{composerState:a,viewType:k}};var d=c.prototype;d.UNSAFE_componentWillMount=function(){b("PagesReplyComposerDispatcher").getByKey(j).explicitlyRegisterStore(b("PagesReplyComposerStore").getByKey(j)),b("PagesReplyComposerActions").getActionsByKey(j).initializeStoreWithConfig({composerKey:j,initialReply:"",initialDisabled:!1,isAdsInterfaceSource:!0,pageID:this.props.pageID||"",placeholderText:""})};d.render=function(){var a=this.state.viewType===k?h._("\u0e41\u0e2a\u0e14\u0e07\u0e20\u0e32\u0e1e\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e01\u0e25\u0e48\u0e2d\u0e07\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21"):h._("\u0e41\u0e2a\u0e14\u0e07\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21");return i.jsxs(b("CenteredContainer.react"),{className:"_3_0r",children:[i.jsx("div",{className:"_3-96",children:i.jsx(b("Link.react"),{onClick:this.$1.bind(this),children:a})}),this.$2()]})};d.$2=function(){return this.state.viewType===k?this.props.messengerSponsoredMessage?this.$3():i.jsx(b("MessengerAdPreviewConversation.react"),{className:"_4vv8",callToAction:this.props.callToAction,description:this.props.description,imageURL:this.props.imageURL,message:this.props.message,name:this.props.name,pageID:this.props.pageID,pageName:this.props.pageName,clickable:this.props.clickable}):i.jsx(b("MessengerAdPreviewThreadList.react"),{className:"_4vv8 _5z1b",message:this.$4(this.props.message),pageID:this.props.pageID,pageName:this.props.pageName})};d.$4=function(a){return b("PagesReplyComposerTextUtilities").processMessage(a||"",this.state.composerState.supportedMacros)};d.$3=function(){var a=null,c=null,d=null,e=null,f=null,g=null,h=null;if(this.props.messengerSponsoredMessage){var j,k=JSON.parse(this.props.messengerSponsoredMessage);a=b("adsMessengerDataModelIsTextWithQR")(k);var l=b("adsMessengerDataModelGetQuickReplies")(k);l=l&&l.filter(function(a){return!!a});d=l&&l.length?(j={},j.quick_replies=l,j.message_classification="ad_message",j):null;c=b("adsMessengerDataModelGetPayload")(k);e=b("adsMessengerDataModelGetSurface")(k);f=b("adsMessengerDataModelGetSecondText")(k);g=b("adsMessengerDataModelGetTemplateType")(k);l=b("adsMessengerDataModelGetWelcomeMessage")(k);h=this.$4(l);if(c&&c.text){j=this.$4(String(c.text));b("setByPath")(c,["text"],j)}}return i.jsx(b("MessengerAdPreviewConversation.react"),{className:"_4vv8",description:this.props.description,isTextWithQR:a,jsonImageURL:this.props.imageURL,message:h,name:this.props.name,pageID:this.props.pageID,pageName:this.props.pageName,payload:c,platformXMD:d,surface:e,textSecondMessage:f,type:g,clickable:!0})};d.$1=function(){var a=this.state.viewType===k?l:k;this.setState({viewType:a})};return c}(c);d.propTypes={callToAction:(f=b("prop-types")).string,description:f.string,imageURL:f.string,message:f.string,messengerSponsoredMessage:f.string,name:f.string,pageID:f.string,pageName:f.string,clickable:f.bool};e.exports=b("AdsFluxContainer").create(d,{name:e.id})}),null);