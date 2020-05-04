if (self.CavalryLogger) { CavalryLogger.start_js(["x++HM"]); }

__d("EgoUnitSlideInsert",["csx","cx","Animation","CSS","DataStore","DOM","Ease","Event","Parent","TidyArbiterMixin","tidyEvent"],(function(a,b,c,d,e,f,g,h){var i="sliding",j="EgoSlider/End",k=babelHelpers["extends"]({isSliding:function(a){return b("DataStore").get(a,i)},runAfterSlide:function(a,c){var d=b("tidyEvent")(k.subscribe(j,function(b,e){e===a&&(d&&d.unsubscribe(),c())}))},registerSlide:function(a,c){b("Event").listen(a,"click",function(d){d=b("Parent").bySelector(d.getTarget(),"._5cl_");if(!d)return;var e=b("Parent").byClass(a,"ego_unit");d=0;var f=b("Parent").byClass(e,"ego_unit_container"),g=b("DOM").scry(f,".ego_unit")[0];g===e&&(e.nextSibling&&(e.nextSibling.style.paddingTop="0px",e.nextSibling.style.borderTop="0px"));b("CSS").addClass(e,"_5cl-");b("DataStore").set(e,i,!0);new(b("Animation"))(e).to("height",0).to("padding-top",d).to("padding-bottom",0).to("margin",0).from("opacity",1).to("opacity",0).ease(b("Ease").circOut).duration(300).checkpoint(1,function(){b("DOM").appendContent(f,e),b("DOM").prependContent(e,c),b("DataStore").remove(e,i)}).to("height",12).to("opacity",1).to("margin-bottom",10).duration(0).checkpoint(2,function(){k.inform(j,e)}).go()})}},b("TidyArbiterMixin"));e.exports=k}),null);
__d("NetEgo",["csx","Animation","Arbiter","CSS","DOM","EgoUnitSlideInsert","Parent","URI","ge","gkx"],(function(a,b,c,d,e,f,g){var h,i={setup:function(a){var c=["liked"];b("gkx")("929262")?b("Arbiter").subscribe(["FriendRequest/sending"],function(c,d){if(a==d.profile_id&&d.origin=="hovercard"||a==d.uid){c=b("ge")(document.body,".ego_unit_container");if(c){d=b("DOM").scry(c,".ego_unit");c=d.length;for(var e=0;e<c;e++){var f=d[e].getAttribute("data-ego-fbid");if(f==a){d[e].remove();break}}}}}):c.push("FriendRequest/sending");b("Arbiter").subscribe(c,function(c,d){if(a==d.profile_id&&d.origin=="hovercard"||a==d.uid){c=b("ge")(document.body,".ego_unit_container");if(c){d=b("DOM").scry(c,".ego_unit");c=d.length;for(var e=0;e<c;e++){var f=d[e].getAttribute("data-ego-fbid");if(f==a){f=b("DOM").scry(d[e],".ego_action a")[0];f&&f.click();break}}}}})},updateXids:function(a,c){if(a.length==0&&c.length==0)return;a=function(a){return function(c){c=c.getAttribute(a);if(!c)return!1;c=new(h||(h=b("URI")))(c).getQueryData();return!!c.xids}};var d=b("DOM").scry(document.body,".ego_section a");d=d.filter(a("ajaxify"));if(d.length==0)return;var e=new(h||(h=b("URI")))(d[0].getAttribute("ajaxify")),f=e.getQueryData();if(!f.xids)return;var g=null;try{g=JSON.parse(f.xids)}catch(a){return}for(var i=0;i<c.length;++i)g[c[i]]=1;var j=JSON.stringify(g);c=function(a,c){e=new(h||(h=b("URI")))(a.getAttribute(c)),f=e.getQueryData(),f.xids=j,e.setQueryData(f),a.setAttribute(c,e.toString())};for(i=0;i<d.length;++i)c(d[i],"ajaxify");g=b("DOM").scry(document.body,".ego_unit form");g=g.filter(a("action"));for(i=0;i<g.length;++i)c(g[i],"action")},replaceUnit:function(a,b,c,d){i.replaceUnitCheckParent(a,b,c,d,"")},replaceUnitCheckParent:function(a,c,d,e,f){var g=b("Parent").byClass(a,"ego_unit_container");if(g&&b("EgoUnitSlideInsert").isSliding(a)){g=b("DOM").appendContent(g,c);g.forEach(b("CSS").hide);b("EgoUnitSlideInsert").runAfterSlide(a,i._replaceUnitElement.bind(null,a,g,f))}else i._replaceUnit(a,c,d,e,f)},_replaceUnit:function(a,c,d,e,f){var g=b("DOM").insertAfter(a,c);g.forEach(b("CSS").hide);e!==void 0&&e!==null?setTimeout(function(){i._replaceUnitFadeout(a,g,d,f)},e):i._replaceUnitFadeout(a,g,d,f)},_replaceUnitFadeout:function(a,c,d,e){d?new(b("Animation"))(a).from("opacity",1).to("opacity",0).duration(d).checkpoint(1,function(){i._replaceUnitElement(a,c,e)}).go():i._replaceUnitElement(a,c,e)},_replaceUnitElement:function(a,c,d){var e=b("CSS").hasClass(a,"ego_unit")?a.parentNode:null;e&&e.tagName==="LI"&&(e=b("DOM").scry(a.parentNode,"^ul")[0]);b("DOM").remove(a);c.length&&c.forEach(b("CSS").show);b("Arbiter").inform("netego_replacedUnit",{serializedData:d,numUnitsRemained:e.childNodes.length});i.clearHeader()},clearHeader:function(){var a=b("DOM").scry(document.body,".ego_column"),c=[];for(var d=0;d<a.length;++d)c=c.concat(b("DOM").scry(a[d],".uiHeader"));for(d=0;d<c.length;++d){a=c[d].nextSibling;var e=b("DOM").find(a,"._2xq");e||(e=a);if(!e||e.childNodes.length===0)b("DOM").remove(c[d]);else if(e.childNodes.length===1){a=e.childNodes[0];b("CSS").hasClass(a,"ego_appended_units")&&a.childNodes.length===0&&b("DOM").remove(c[d])}}}};e.exports=i}),null);
__d("NetEgoLogger",["AsyncSignal"],(function(a,b,c,d,e,f){e.exports={log:function(a){var c=a.uri,d=a.sid,e=a.fbid;a=a.element;new(b("AsyncSignal"))(c,{sid:d,fbid:e,height:a.offsetHeight}).send()}}}),null);