!function(){"use strict";var t=Object.freeze({setup:function(){for(var t=document.getElementsByClassName("copyable-code"),e=function(){var t=i[n].getElementsByClassName("highlight")[0];if(!t)return{};var e=t.innerText.trim(),o=document.createElement("div"),a=document.createElement("button"),r=document.createElement("span");o.className="copy-button-container",r.className="fa fa-clipboard",a.className="copy-button",a.appendChild(r),a.appendChild(document.createTextNode("Copy")),o.appendChild(a),t.insertBefore(o,t.children[0]),a.addEventListener("click",function(){var t=document.createElement("textarea");t.style.position="fixed",document.body.appendChild(t),t.value=e,t.select();try{if(!document.execCommand("copy"))throw new Error("Failed to copy")}catch(t){console.error("Failed to copy"),console.error(t)}document.body.removeChild(t)})},n=0,i=t;n<i.length;n+=1){var o=e();if(o)return o.v}}});function e(t){return!t.siblings("ul:not(.simple)").length}function n(t){var e=window.docsExcludedNav;if(!e||!e.length)return!1;for(var n=0;n<e.length;n+=1)if(-1!==t[0].href.indexOf(e[n]))return!0;return!1}var i=Object.freeze({setup:function(t){if(void 0===window.history||void 0===document.querySelectorAll||void 0===document.body.classList||void 0===(new XMLHttpRequest).responseURL)return!1;var i=document.querySelector(".sphinxsidebarwrapper"),o=document.querySelector(".body"),a={};function r(){void 0!==a.timeoutID&&window.clearTimeout(a.timeoutID),void 0!==a.xhr&&a.xhr.abort(),a={}}function s(e,n){void 0===e&&console.error("Going to undefined path"),r(),o.classList.add("loading"),a.timeoutID=window.setTimeout(function(){o.classList.remove("loading"),a.timeoutID=-1},1e4);var s=new Date;a.xhr=function(t,e){var n=new XMLHttpRequest;n.onload=function(){n.status>=200&&n.status<400?(e.success(n.responseText,n.responseURL),e.complete()):(e.error(),e.complete())},n.onerror=function(){e.error(),e.complete()},n.open("GET",t,!0);try{n.send()}catch(t){e.error(),e.complete()}}(e,{complete:function(){r()},error:function(t){console.error("Failed to load "+e),window.location=e},success:function(e,a){var r=new Date-s;o.classList.remove("loading"),n&&window.history.pushState({href:a},"",a);var c=document.createElement("html");c.innerHTML=e;var u=c.querySelector("title").textContent,l=c.querySelector(".body"),d=c.querySelector(".sphinxsidebarwrapper");r>62.5&&l.classList.add("loading"),o.parentElement.replaceChild(l,o),o=l,i.parentElement.replaceChild(d,i),i=d,document.title=u,t.update(),window.history.onnavigate&&window.history.onnavigate(),window.setTimeout(function(){o.classList.remove("loading"),n&&window.scroll(0,0)},1)}})}window.history.replaceState({href:window.location.href},document.querySelector("title").textContent,window.location.href);var c=document.querySelectorAll(".sphinxsidebarwrapper > ul a.reference.internal");function u(t){0!==t.button||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),s(t.currentTarget.href,!0))}for(var l=0;l<c.length;l+=1){var d=c[l];(e($(d))||n($(d)))&&d.addEventListener("click",u)}return window.onpopstate=function(t){null!==t.state&&s(t.state.href,!1)},!0}});function o(){}function a(t){for(var e,n,i=arguments,o=1,a=arguments.length;o<a;o++)for(e in n=i[o])t[e]=n[e];return t}function r(t,e){e.appendChild(t)}function s(t,e,n){e.insertBefore(t,n)}function c(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function d(t,e,n){t.addEventListener(e,n,!1)}function f(t,e,n){t.removeEventListener(e,n,!1)}function p(){return Object.create(null)}function h(t){this.destroy=o,this.fire("destroy"),this.set=this.get=o,!1!==t&&this._fragment.u(),this._fragment.d(),this._fragment=this._state=null}function m(t,e){return t!==e||t&&"object"==typeof t||"function"==typeof t}function g(t,e,n,i,o){for(var a in e)if(n[a]){var r=i[a],s=o[a],c=e[a];if(c)for(var u=0;u<c.length;u+=1){var l=c[u];l.__calling||(l.__calling=!0,l.call(t,r,s),l.__calling=!1)}}}function v(t,e){t._observers={pre:p(),post:p()},t._handlers=p(),t._bind=e._bind,t.options=e,t.root=e.root||t,t.store=t.root.store||e.store}function b(t){for(;t&&t.length;)t.shift()()}var w={destroy:h,get:function(t){return t?this._state[t]:this._state},fire:function(t,e){var n=t in this._handlers&&this._handlers[t].slice();if(n)for(var i=0;i<n.length;i+=1)n[i].call(this,e)},observe:function(t,e,n){var i=n&&n.defer?this._observers.post:this._observers.pre;return(i[t]||(i[t]=[])).push(e),n&&!1===n.init||(e.__calling=!0,e.call(this,this._state[t]),e.__calling=!1),{cancel:function(){var n=i[t].indexOf(e);~n&&i[t].splice(n,1)}}},on:function(t,e){if("teardown"===t)return this.on("destroy",e);var n=this._handlers[t]||(this._handlers[t]=[]);return n.push(e),{cancel:function(){var t=n.indexOf(e);~t&&n.splice(t,1)}}},set:function(t){this._set(a({},t)),this.root._lock||(this.root._lock=!0,b(this.root._beforecreate),b(this.root._oncreate),b(this.root._aftercreate),this.root._lock=!1)},teardown:h,_recompute:o,_set:function(t){var e=this._state,n={},i=!1;for(var o in t)m(t[o],e[o])&&(n[o]=i=!0);i&&(this._state=a({},e,t),this._recompute(n,this._state),this._bind&&this._bind(n,this._state),this._fragment&&(g(this,this._observers.pre,n,this._state,e),this._fragment.p(n,this._state),g(this,this._observers.post,n,this._state,e)))},_mount:function(t,e){this._fragment.m(t,e)},_unmount:function(){this._fragment&&this._fragment.u()}};function y(t){v(this,t),this._state=a({name:"",caption:"",answer:null},t.data),this._recompute({answer:1},this._state),this._fragment=function(t,e){var n,i,o,a,p,h,m,g;function v(t){e.change(!0)}function b(t){e.change(!1)}return{c:function(){n=u("div"),i=l("\n"),o=u("div"),a=u("span"),h=l("\n    "),m=u("span"),this.h()},h:function(){a.className=p="switch fa fa-thumbs-up good "+t.upvoteSelected,d(a,"click",v),m.className=g="switch fa fa-thumbs-down bad "+t.downvoteSelected,d(m,"click",b)},m:function(e,c){s(n,e,c),n.innerHTML=t.caption,s(i,e,c),s(o,e,c),r(a,o),r(h,o),r(m,o)},p:function(t,e){t.caption&&(n.innerHTML=e.caption),t.upvoteSelected&&p!==(p="switch fa fa-thumbs-up good "+e.upvoteSelected)&&(a.className=p),t.downvoteSelected&&g!==(g="switch fa fa-thumbs-down bad "+e.downvoteSelected)&&(m.className=g)},u:function(){n.innerHTML="",c(n),c(i),c(o)},d:function(){f(a,"click",v),f(m,"click",b)}}}(this._state,this),t.target&&(this._fragment.c(),this._fragment.m(t.target,t.anchor||null))}a(y.prototype,{change:function(t){this.set({answer:t}),this.fire("change",t)}},w),y.prototype._recompute=function(t,e){t.answer&&(m(e.upvoteSelected,e.upvoteSelected=!0===e.answer?"selected":"")&&(t.upvoteSelected=!0),m(e.downvoteSelected,e.downvoteSelected=function(t){return!1===t?"selected":""}(e.answer))&&(t.downvoteSelected=!0))};function _(t){v(this,t),this._state=a({name:"",caption:"",answer:""},t.data),this._fragment=function(t,e){var n,i=!1;function o(){i=!0,e.set({answer:n.value}),i=!1}function a(t){var n=e.get();e.fire("change",n.answer)}return{c:function(){n=u("textarea"),this.h()},h:function(){d(n,"input",o),n.placeholder=t.caption,d(n,"input",a)},m:function(e,i){s(n,e,i),n.value=t.answer},p:function(t,e){i||(n.value=e.answer),t.caption&&(n.placeholder=e.caption)},u:function(){c(n)},d:function(){f(n,"input",o),f(n,"input",a)}}}(this._state,this),t.target&&(this._fragment.c(),this._fragment.m(t.target,t.anchor||null))}function C(t){var e=document.createElement("script");e.type="application/javascript",e.src=t,document.body.appendChild(e)}a(_.prototype,{change:function(){this.fire("change",this.get("answer"))}},w);var x={open:function(){"Initial"===this.get("state")&&(this.set({answers:{}}),this.set({state:"NotVoted"}))},toggle:function(){this.set({answers:{}}),"Initial"===this.get("state")?this.set({state:"NotVoted"}):this.set({state:"Initial"})},submit:function(){var t=this.get("state");if("boolean"!=typeof t)throw new Error("Assertion failed: Feedback submitted without vote");for(var e=new Map,n=this.get("answers"),i=0,o=Object.keys(n);i<o.length;i+=1){var a=o[i],r=n[a];null!=r&&e.set(a,r)}this.set({state:"Pending"}),this.fire("submit",{vote:t,fields:e})},rate:function(t){this.set({state:t})},addQuestion:function(t,e,n){return this.set({questions:this.get("questions").concat({type:t,name:e,caption:n})}),this},update:function(t,e){this.get("answers")[t]=e},showCollectorDialog:function(){var t=this;if(window.ATL_JQ_PAGE_PROPS={triggerFunction:function(t){window.setTimeout(function(){return t()},1)},fieldValues:{summary:'Comment on: "'+this.get("project")+"/"+this.get("pagename")+'"'}},window.jQuery)C(this.get("jiraurl"));else{var e=document.createElement("script");e.type="application/javascript",e.integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=",e.setAttribute("crossorigin","anonymous"),e.src="https://code.jquery.com/jquery-2.2.4.min.js",e.onload=function(){C(t.get("jiraurl"))},document.body.appendChild(e)}}};function S(t,e){var n;return{c:function(){n=u("span"),this.h()},h:function(){n.className="fa fa-comments deluge-comment-icon"},m:function(t,e){s(n,t,e)},u:function(){c(n)},d:o}}function k(t,e){var n;return{c:function(){n=u("span"),this.h()},h:function(){n.className="fa fa-angle-down deluge-close-icon"},m:function(t,e){s(n,t,e)},u:function(){c(n)},d:o}}function N(t,e){var n;return{c:function(){(n=u("p")).textContent="Thank you for your feedback!"},m:function(t,e){s(n,t,e)},u:function(){c(n)},d:o}}function q(t,e){var n;return{c:function(){(n=u("li")).textContent="We're sorry! Please help us improve this page."},m:function(t,e){s(n,t,e)},u:function(){c(n)},d:o}}function j(t,e,n,i,o){var a,r=B(t,e,n,i),l=r&&r(t,e,n,i,o);return{c:function(){a=u("li"),l&&l.c()},m:function(t,e){s(a,t,e),l&&l.m(a,null)},p:function(t,e,n,i,s){r===(r=B(e,n,i,s))&&l?l.p(t,e,n,i,s):(l&&(l.u(),l.d()),(l=r&&r(e,n,i,s,o))&&l.c(),l&&l.m(a,null))},u:function(){c(a),l&&l.u()},d:function(){l&&l.d()}}}function E(t,e,n,i,o){var a=new y({root:o.root,data:{name:n.name,caption:n.caption}});a.on("change",function(t){var e=r.questions[r.question_index];o.update(e.name,t)});var r={questions:e,question_index:i};return{c:function(){a._fragment.c()},m:function(t,e){a._mount(t,e)},p:function(t,e,n,i,o){var s={};t.questions&&(s.name=i.name),t.questions&&(s.caption=i.caption),a._set(s),r.questions=n,r.question_index=o},u:function(){a._unmount()},d:function(){a.destroy(!1)}}}function T(t,e,n,i,o){var a=new _({root:o.root,data:{name:n.name,caption:n.caption}});a.on("change",function(t){var e=r.questions[r.question_index];o.update(e.name,t)});var r={questions:e,question_index:i};return{c:function(){a._fragment.c()},m:function(t,e){a._mount(t,e)},p:function(t,e,n,i,o){var s={};t.questions&&(s.name=i.name),t.questions&&(s.caption=i.caption),a._set(s),r.questions=n,r.question_index=o},u:function(){a._unmount()},d:function(){a.destroy(!1)}}}function I(t,e){var n,i,o,a;function p(t){e.showCollectorDialog()}return{c:function(){n=u("p"),i=l("If this page contains an error, you may "),(o=u("a")).textContent="report the problem on Jira.",this.h()},h:function(){o.className="deluge-fix-button jira-link jirafeedback",o.target="_blank",o.title=a="Report a problem with "+t.pagename+" on Jira",d(o,"click",p)},m:function(t,e){s(n,t,e),r(i,n),r(o,n)},p:function(t,e){t.pagename&&a!==(a="Report a problem with "+e.pagename+" on Jira")&&(o.title=a)},u:function(){c(n)},d:function(){f(o,"click",p)}}}function L(t,e){var n;return{c:function(){(n=u("p")).textContent="Submitting feedback..."},m:function(t,e){s(n,t,e)},p:o,u:function(){c(n)},d:o}}function D(t,e){var n,i,a;function r(t){e.rate(!0)}function p(t){e.rate(!1)}return{c:function(){(n=u("a")).textContent="Yes",i=l("\n        "),(a=u("a")).textContent="No",this.h()},h:function(){n.className="deluge-vote-button",d(n,"click",r),a.className="deluge-vote-button",d(a,"click",p)},m:function(t,e){s(n,t,e),s(i,t,e),s(a,t,e)},p:o,u:function(){c(n),c(i),c(a)},d:function(){f(n,"click",r),f(a,"click",p)}}}function O(t,e){for(var n,i,o,a,p,h,m,g,v=!1===t.state&&q(),b=t.questions,w=[],y=0;y<b.length;y+=1)w[y]=j(t,b,b[y],y,e);function _(t){e.toggle()}function C(t){e.submit()}return{c:function(){n=u("div"),i=u("ul"),v&&v.c(),o=document.createComment("");for(var t=0;t<w.length;t+=1)w[t].c();a=l("\n\n            "),p=u("div"),(h=u("button")).textContent="Cancel",m=l("\n                "),(g=u("button")).textContent="Submit",this.h()},h:function(){var t,e;t="ref",e=!0,i.setAttribute(t,e),d(h,"click",_),g.className="primary",d(g,"click",C),p.className="deluge-button-group",n.className="deluge-questions"},m:function(t,e){s(n,t,e),r(i,n),v&&v.m(i,null),r(o,i);for(var c=0;c<w.length;c+=1)w[c].m(i,null);r(a,n),r(p,n),r(h,p),r(m,p),r(g,p)},p:function(t,n){!1===n.state?v||((v=q()).c(),v.m(i,o)):v&&(v.u(),v.d(),v=null);var a=n.questions;if(t.questions){for(var r=0;r<a.length;r+=1)w[r]?w[r].p(t,n,a,a[r],r):(w[r]=j(n,a,a[r],r,e),w[r].c(),w[r].m(i,null));for(;r<w.length;r+=1)w[r].u(),w[r].d();w.length=a.length}},u:function(){c(n),v&&v.u();for(var t=0;t<w.length;t+=1)w[t].u()},d:function(){v&&v.d(),function(t){for(var e=0;e<t.length;e+=1)t[e]&&t[e].d()}(w),f(h,"click",_),f(g,"click",C)}}}function B(t,e,n,i){return"binary"===n.type?E:"freeform"===n.type?T:null}function H(t){return"Voted-Down"===t.state?I:"Pending "==t.state?L:"NotVoted"===t.state?D:"boolean"==typeof t.state?O:null}function A(t){v(this,t),this._state=a({project:"",pagename:"",state:"Initial",jiraurl:"https://jira.mongodb.org/s/en_UScn8g8x/782/6/1.2.5/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?collectorId=298ba4e7",questions:[],answers:{}},t.data),this._recompute({state:1},this._state),t.root||(this._oncreate=[],this._beforecreate=[],this._aftercreate=[]),this._fragment=function(t,e){var n,i,o,a,p,h,m,g,v="Initial"===t.state&&S(),b="Initial"!==t.state&&k();function w(t){e.toggle()}var y=("Voted-Up"===t.state||"Voted-Down"===t.state)&&N(),_=H(t),C=_&&_(t,e);return{c:function(){n=u("div"),i=u("div"),v&&v.c(),o=l("\n\n        "),(a=u("span")).textContent="Was this page helpful?",p=l("\n\n    "),b&&b.c(),h=l("\n\n    "),m=u("div"),y&&y.c(),g=l("\n\n    "),C&&C.c(),this.h()},h:function(){a.className="deluge-helpful",i.className=t.delugeHeaderClass,d(i,"click",w),m.className=t.delugeBodyClass,n.className=t.delugeClass},m:function(t,e){s(n,t,e),r(i,n),v&&v.m(i,null),r(o,i),r(a,i),r(p,i),b&&b.m(i,null),r(h,n),r(m,n),y&&y.m(m,null),r(g,m),C&&C.m(m,null)},p:function(t,a){"Initial"===a.state?v||((v=S()).c(),v.m(i,o)):v&&(v.u(),v.d(),v=null),"Initial"!==a.state?b||((b=k()).c(),b.m(i,null)):b&&(b.u(),b.d(),b=null),t.delugeHeaderClass&&(i.className=a.delugeHeaderClass),"Voted-Up"===a.state||"Voted-Down"===a.state?y||((y=N()).c(),y.m(m,g)):y&&(y.u(),y.d(),y=null),_===(_=H(a))&&C?C.p(t,a):(C&&(C.u(),C.d()),(C=_&&_(a,e))&&C.c(),C&&C.m(m,null)),t.delugeBodyClass&&(m.className=a.delugeBodyClass),t.delugeClass&&(n.className=a.delugeClass)},u:function(){c(n),v&&v.u(),b&&b.u(),y&&y.u(),C&&C.u()},d:function(){v&&v.d(),b&&b.d(),f(i,"click",w),y&&y.d(),C&&C.d()}}}(this._state,this),t.target&&(this._fragment.c(),this._fragment.m(t.target,t.anchor||null),this._lock=!0,b(this._beforecreate),b(this._oncreate),b(this._aftercreate),this._lock=!1)}a(A.prototype,x,w),A.prototype._recompute=function(t,e){t.state&&(m(e.delugeClass,e.delugeClass=function(t){return"Initial"===t?"deluge":"deluge deluge-expanded"}(e.state))&&(t.delugeClass=!0),m(e.delugeHeaderClass,e.delugeHeaderClass=function(t){return"Initial"===t?"deluge-header":"deluge-header deluge-header-expanded"}(e.state))&&(t.delugeHeaderClass=!0),m(e.delugeBodyClass,e.delugeBodyClass=function(t){return"Initial"===t?"deluge-body":"deluge-body deluge-body-expanded"}(e.state))&&(t.delugeBodyClass=!0))};var P=function(t,e,n){var i=this;this.project=t,this.path=e,this.app=new A({target:n,data:{state:"Initial",project:t,pagename:e}}),this.app.on("submit",function(t){i.sendRating(t.vote,t.fields).then(function(){t.vote?i.app.set({state:"Voted-Up"}):i.app.set({state:"Voted-Down"})}).catch(function(t){console.error("Error submitting feedback")})})};P.prototype.askQuestion=function(t,e){return this.app.addQuestion("binary",t,e),this},P.prototype.askFreeformQuestion=function(t,e){return this.app.addQuestion("freeform",t,e),this},P.prototype.sendRating=function(t,e){var n=this;return new Promise(function(i,o){e.set("v",t),e.set("p",n.project+"/"+n.path);var a=function(t,e){var n=[];return e.forEach(function(t,e){n.push(encodeURIComponent(e)+"="+encodeURIComponent(JSON.stringify(t)))}),t+"?"+n.join("&")}("http://deluge.us-east-1.elasticbeanstalk.com/",e),r=new Image;r.onload=function(){return i()},r.onerror=function(){return o()},r.src=a})},P.prototype.open=function(){this.app.open()};var Q=null,R={"meta/404":!0,search:!0};var V=Object.freeze({init:function(){Q=document.body.getAttribute("data-project")},setup:function(){void 0!==window.localStorage&&function(){var t=document.querySelector(".body").getAttribute("data-pagename");if(!Object.prototype.hasOwnProperty.call(R,t)){var e=document.getElementById("rating-panel");e&&(e.innerText="",e&&new P(Q,t,e).askFreeformQuestion("reason","What were you looking for?").askQuestion("findability","Did you find it?").askQuestion("accuracy","Was the information you found <strong>accurate</strong>?").askQuestion("clarity","Was the information <strong>clear</strong>?").askQuestion("fragmentation","Was the information you needed <strong>all on one page</strong>?"))}}()}}),F="lightbox__content--activated",U="lightbox__content--scalable",M=document.createElement("div");M.className="lightbox__modal",M.title="click to close";var W=document.createElement("img");function z(t){var e=document.createElement("div"),n=document.createElement("div");e.className="lightbox__imageWrapper",n.className="lightbox__caption",n.innerText="click to enlarge",t.parentNode.replaceChild(e,t),e.appendChild(t),e.appendChild(n),e.addEventListener("click",function(){document.body.appendChild(M),W.src=t.src,W.alt=t.alt+" — Enlarged",/\.svg$/.test(W.src)?W.classList.add(U):W.classList.remove(U),M.addEventListener("click",function(){W.classList.remove(F),M.parentNode&&M.parentNode.removeChild(M)}),setTimeout(function(){W.classList.add(F)},0)})}function J(t,e){var n=e.naturalWidth*e.naturalHeight;e.clientWidth*e.clientHeight<.9*n&&(z(e),t.classList.add("lightbox"))}W.className="lightbox__content",M.appendChild(W);var G=Object.freeze({setup:function(){for(var t=0,e=document.getElementsByClassName("lightbox");t<e.length;t+=1){var n=e[t];0!==n.children.length&&"IMG"===n.children[0].tagName&&z(n.children[0])}for(var i=0,o=document.getElementsByClassName("figure");i<o.length;i+=1){var a=o[i];if(0!==a.children.length&&"IMG"===a.children[0].tagName&&!a.classList.contains("lightbox")){var r=a.children[0];r.complete?J(a,r):r.addEventListener("load",J.bind(null,a,r))}}}});function K(t){return t.hasClass("current")}var X=Object.freeze({setup:function(){var t=$(".sidebar a.current");(e(t)||n(t)||K(t))&&t.parent("li").addClass("selected-item"),t.parents("ul").each(function(t,e){$(e).css("display","block")}),$(".sphinxsidebarwrapper > ul li:not(.current) > ul:not(.current)").hide(),$(".sphinxsidebarwrapper").show(),$(".sphinxsidebarwrapper .toctree-l1").on("click","a",function(i){var o=$(i.currentTarget);e(o)||!o.parent().hasClass("selected-item")&&n(o)||(i.preventDefault(),o.parent().hasClass("current")?(o.parent().removeClass("current selected-item"),o.siblings("ul").slideUp()):(t.parent().removeClass("selected-item"),t.parents().add(t.siblings("ul")).each(function(t,e){var n=$(e);n.has(i.currentTarget).length||(n.is("ul")?n.removeClass("current").slideUp():n.removeClass("current"))}),o.parent().addClass("current"),o.siblings("ul").slideDown(function(){(e(o)||n(o)||K(t))&&o.parent("li").addClass("selected-item")}),t=o))}),$(".sphinxsidebarwrapper > ul ul a.reference").prepend(function(t){var n=$('<span class="expand-icon"></span>');return e($(this))||n.addClass("docs-expand-arrow"),n})}});var Y=function(t){this.key=t,this.tabStrip=document.querySelector(".tab-strip--singleton"),this.type=null,null!==this.tabStrip&&(this.type=this.tabStrip.getAttribute("data-tab-preference"))},Z={tabPref:{configurable:!0}};Z.tabPref.get=function(){return JSON.parse(window.localStorage.getItem(this.key))||{}},Z.tabPref.set=function(t){var e=this.tabPref;this.type?e[t.type]=t.tabId:e.pages?e.pages[window.location.pathname]=t.tabId:(e.pages={},e.pages[window.location.pathname]=t.tabId),window.localStorage.setItem(this.key,JSON.stringify(e))},Y.prototype.getFirstTab=function(){var t=this.tabStrip.querySelector(".tab-strip__element[aria-selected=true]");return t?t.getAttribute("data-tabid"):null},Y.prototype.setup=function(){var t=this;if(this.tabStrip){this.hideTabBars();for(var e=0,n=t.tabStrip.querySelectorAll("[data-tabid]");e<n.length;e+=1){n[e].onclick=function(e){var n=e.target.getAttribute("data-tabid"),i=t.tabStrip.getAttribute("data-tab-preference"),o={};o.tabId=n,o.type=i,n&&(t.tabPref=o,t.update(),e.preventDefault())}}this.update()}},Y.prototype.update=function(){if(this.tabStrip){var t,e=this.type,n=this.tabPref;if(n.pages&&n.pages[window.location.pathname]?(n=n.pages,e=window.location.pathname):this.tabStrip.querySelector('[data-tabid="'+n[e]+'"]')||(n[e]=this.getFirstTab()),n)t=n[e],$(".tabs__content").children().hide(),$(".tabs .tabpanel-"+t).show(),this.showHideSelectedTab(n[e])}},Y.prototype.showHideSelectedTab=function(t){var e=$(this.tabStrip.querySelector('[data-tabid="'+t+'"]')),n=e.parent("ul"),i=$(this.tabStrip.querySelector(".dropdown-toggle")),o=$(this.tabStrip.querySelector(".dropdown"));n.hasClass("dropdown-menu")?(i.text(""+e.first().text()).append('<span class="caret"></span>'),o.attr("aria-selected",!0).siblings().attr("aria-selected",!1)):(e.attr("aria-selected",!0).siblings().attr("aria-selected",!1),i.text("Other ").append('<span class="caret"></span>'))},Y.prototype.hideTabBars=function(){var t=$(".tab-strip--singleton"),e=t.first();t.slice(1).detach(),e.detach().insertAfter("h1").first()},Object.defineProperties(Y.prototype,Z);var tt=Object.freeze({setup:function(){new Y("tabPref").setup()}});var et=Object.freeze({setup:function(){$(".version-selector").on("click",function(t){t.preventDefault();var e=$(t.currentTarget).data("path");window.location.href=function(t){var e=document.getElementsByClassName("body")[0].getAttribute("data-pagename");return"index"===e?e="":e&&(e+="/"),"/"+t+"/"+e}(e)})}}),nt=function(){this.components=[]};nt.prototype.register=function(t){this.components.push(t),t.init&&t.init()},nt.prototype.update=function(){for(var t=0,e=this.components;t<e.length;t+=1){e[t].setup(this)}};var it=new nt;$(function(){it.register(t),it.register(i),it.register(V),it.register(G),it.register(X),it.register(tt),it.register(et),$(".toc > ul > li > ul > li").length||$(".right-column .toc").hide(),$(".expand-toc-icon").on("click",function(t){t.preventDefault(),$(".sidebar").toggleClass("reveal")});var e=$(window),n=$(".sidebar"),o=e.width()<=1093;function a(){location.hash&&document.getElementById(location.hash.substr(1))&&$(window).scrollTop(window.scrollY-75)}if(e.resize(function(t){o&&e.width()>1093?(o=!1,n.removeClass("reveal")):!o&&e.width()<=1093&&(o=!0)}),window.addEventListener("hashchange",a),location.hash&&window.setTimeout(a,10),$(".content").on("click","a",function(t){$(t.currentTarget).attr("href")===location.hash&&window.setTimeout(a,10)}),it.update(),document.querySelector){var r=document.querySelector("a.current");r&&r.scrollIntoView(!1)}})}();
//# sourceMappingURL=controller.js.map