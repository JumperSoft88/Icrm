if (self.CavalryLogger) { CavalryLogger.start_js(["eFs+j"]); }

__d("MessengerComposerFlyoutButton.react",["AutoFocusableLink.react","Bootloader","BootloadOnRender.react","ChatFlyoutPlaceholder.react","LazyComponent.react","MessengerContextualDialog.react","React","TooltipData","performanceAbsoluteNow"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i=300;a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$1=!1,c.state={open:!!c.props.clicked},c.$2=function(a){a.preventDefault();if(c.$1||c.state.open)return;c.$5();c.$6();c.setState({open:!0})},c.$10=function(a){c.setState({open:a})},c.$3=function(a){c.$1=c.state.open},c.$9=function(){c.$7(),c.props.onHideDialog&&c.props.onHideDialog(),c.setState({open:!1})},c.$8=function(){return c.refs.root},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.render=function(){var a=this.props.renderSVGIcon,c=this.props.title,d=c;this.props.showCustomizedToolTip?c="":d="";return[h.jsx(b("AutoFocusableLink.react"),babelHelpers["extends"]({autoFocus:this.props.autoFocus,className:this.props.className,label:"chat tab buttons",onClick:this.$2,onMouseDown:this.$3,ref:"root"},b("TooltipData").propsFor(d),{title:c,children:a&&a(this.state.open)}),"button"),this.$4()]};d.$6=function(){var a="click_"+this.props.buttonName;b("Bootloader").loadModules(["M4ComposerTypedLogger","M4ComposerLoggerEvents"],function(b,c){new b().setEvent(a).log()},"MessengerComposerFlyoutButton.react")};d.$5=function(){var a=(g||(g=b("performanceAbsoluteNow")))();b("Bootloader").loadModules(["QuickPerformanceLogger","MessengerWebQuickLogModule"],function(b,c){b.markerStart(c.COMPOSER_INTERACTION,0,a)},"MessengerComposerFlyoutButton.react")};d.$7=function(){var a=(g||(g=b("performanceAbsoluteNow")))();b("Bootloader").loadModules(["QuickPerformanceLogger","MessengerWebQuickLogModule"],function(b,c){b.markerEnd(c.COMPOSER_INTERACTION,"SUCCESS",0,a)},"MessengerComposerFlyoutButton.react")};d.$4=function(){if(!this.state.open)return null;var a=this.props.flyoutProps.customWidth?this.props.flyoutProps.customWidth:i;return h.jsx(b("MessengerContextualDialog.react"),babelHelpers["extends"]({},this.props.dialogProps,{alignment:this.props.flyoutAlignment,contextRef:this.$8,onBlur:this.$9,onToggle:this.$10,shown:!0,width:a,children:h.jsx(b("BootloadOnRender.react"),{component:h.jsx(b("LazyComponent.react"),babelHelpers["extends"]({placeholder:h.jsx(b("ChatFlyoutPlaceholder.react"),{})},this.props.flyoutProps,{shown:this.state.open,onHideDialog:this.$9})),loader:this.props.flyoutLoader,placeholder:h.jsx(b("ChatFlyoutPlaceholder.react"),{})})}),"flyout")};return c}(h.PureComponent);e.exports=a}),null);
__d("ChatNoRecipientsTabSheet.react",["cx","fbt","React"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("React");a=function(){return i.jsxs("div",{className:"_2phz",children:[i.jsx("div",{className:"_1skc","data-jsid":"image"}),i.jsx("div",{className:"_1skd","data-jsid":"text",children:h._("\u0e17\u0e38\u0e01\u0e04\u0e19\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e01\u0e32\u0e23\u0e2a\u0e19\u0e17\u0e19\u0e32\u0e19\u0e35\u0e49\u0e41\u0e25\u0e49\u0e27")})]})};e.exports=a}),null);