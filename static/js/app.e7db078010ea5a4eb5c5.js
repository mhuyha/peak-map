webpackJsonp([2],{"9SxT":function(n,e,t){"use strict";var o={angle:0,currentState:"intro",lineDensity:28,lineWidth:1,smoothSteps:1,mapOpacity:100,heightScale:42,oceanLevel:0,aboutVisible:!1,error:null,zazzleLink:null,generatingPreview:!1,settingsOpen:!1,shouldDraw:!1,renderProgress:null,width:window.innerWidth,height:window.innerHeight,backgroundColor:{r:247,g:242,b:232,a:1},lineBackground:{r:247,g:242,b:232,a:1},lineColor:{r:22,g:22,b:22,a:1}};e.a=o},NHnr:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t("9SxT"),i=t("1e2d"),r=t.n(i),a=t("5dBV"),l=t.n(a);function c(n,e){var t=[],o=void 0,i={serialize:function(){return'<?xml version="1.0" encoding="utf-8"?>\n\x3c!-- Generator: https://github.com/anvaka/peak-map  --\x3e\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\n   viewBox="0 0 '+n+" "+e+"\">\n<g id='paths'>\n   "+t.map(function(n){return n.serialize()}).join("\n")+"\n</g>\n</svg>"},beginPath:function(){o=function(){var n=[],e=null,t=void 0,o=void 0,i=0;return{lineTo:function(t,o){i+=1;var r="L"===e?"":"L";n.push(""+r+u(t)+" "+u(o)),e="L"},moveTo:function(t,o){var i="M"===e?"":"M";n.push(""+i+u(t)+" "+u(o)),e="M"},serialize:function(){var e=t?'stroke="'+t+'" ':"",i=1!==o?'stroke-width="'+o+'"':"";return'<path d="'+n.join(" ")+'" fill="none" '+e+i+"></path>"},isEmpty:function(){return 0===i},setStroke:function(n){t=n},setLineWidth:function(n){o=n}}}()},lineTo:function(n,e){o.lineTo(n,e)},moveTo:function(n,e){o.moveTo(n,e)},stroke:function(){o&&!o.isEmpty()&&(i.strokeStyle&&o.setStroke(i.strokeStyle),i.lineWidth&&o.setLineWidth(i.lineWidth),t.push(o))},lineWidth:1,strokeStyle:"#161616"};return i}function u(n){return Math.round(100*n)/100}function s(n,e,t){var o=void 0;return i(),{cancel:function(){cancelAnimationFrame(o),n.renderProgress=null},render:i};function i(i){n.renderProgress&&(n.renderProgress.message="Rendering...");var u=l()(n.oceanLevel),s=parseFloat(n.smoothSteps);t.style.opacity=n.mapOpacity/100;var d=t.getContext("2d"),h=a(n.lineColor),m=a(n.lineBackground),g=l()(n.lineWidth),f=window.innerHeight,v=window.innerWidth,w=Math.round(f*n.lineDensity/100),p=n.heightScale,x=e.getAllHeightData(),y=x.minHeight,T=x.maxHeight,b=x.rowWithHighestPoint,k=function(n,e,t){var o=Math.round(e/n),i=t-Math.floor(t/o)*o,r=i+o*Math.floor((e-i)/o);return{start:i,stop:r,step:o}}(w,f,b),P=T-y,W=[],S=k.start,M=void 0;if(i){h=a(n.lineColor,!0),M=new Float32Array(window.innerWidth),S=k.stop;for(var z=0;z<window.innerWidth;++z)M[z]=window.innerHeight;return function(){for(var t=c(window.innerWidth,window.innerHeight),o=0,i=window.innerWidth,r=S;r>0;r-=k.step){H(W,t),W=[];var a=o%2==0;o+=1;for(var l=0;l<i;l+=1){var s=a?l:i-1-l,d=e.getHeightAtPoint(s,r),h=r-Math.floor(p*(d-y)/P);d<=u?(H(W,t),W=[]):W.push(s,h)}S=r-k.step}if(H(W,t),n.renderProgress=null,t.serialize)return t.serialize()}()}return d.beginPath(),d.clearRect(0,0,v,f),d.fillStyle=a(n.backgroundColor),d.fillRect(0,0,v,f),function t(){var i=performance.now();for(var r=S;r<=k.stop;r+=k.step){I(W),W=[];for(var a=0;a<window.innerWidth;++a){var l=e.getHeightAtPoint(a,r),c=r-Math.floor(p*(l-y)/P);l<=u?(I(W),W=[]):W.push(a,c)}S=r+k.step;var s=performance.now()-i;if(s>200)return void(o=requestAnimationFrame(t))}I(W);n.renderProgress=null}();function H(n,e){if(!(n.length<3)){n=r(n,s).points,e.beginPath(),e.strokeStyle=h,e.lineWidth=g;for(var t=!1,o=0;o<n.length;o+=2){var i=n[o],a=n[o+1],l=M[i],c=a<=l&&a>=0;c?(M[i]=Math.min(a,l),t?e.lineTo(i,a):e.moveTo(i,a)):t?e.lineTo(i,a<0?0:l):e.moveTo(i,a<0?0:l),t=c}e.stroke()}}function I(n){if(!(n.length<3)){var e=r(n,s);if(n=e.points,e.max-e.min>2){d.beginPath(),d.fillStyle=m,d.moveTo(n[0],n[1]);for(var t=2;t<n.length;t+=2)d.lineTo(n[t],n[t+1]);d.lineTo(n[n.length-2],e.max),d.lineTo(n[0],e.max),d.closePath(),d.fill()}d.beginPath(),d.strokeStyle=h,d.lineWidth=g,d.moveTo(n[0],n[1]);for(var o=2;o<n.length;o+=2)d.lineTo(n[o],n[o+1]);d.stroke()}}}function r(n,e){for(var t=[],o=Number.NEGATIVE_INFINITY,i=Number.POSITIVE_INFINITY,r=n.length/2,a=0;a<r;a+=1){for(var l=a-e,c=a+e+1,u=0,s=0,d=l>=0?l:0;d<c&&d<r;d+=1)s+=n[2*d+1],u+=1;var h=s/u;t[2*a]=n[2*a],t[2*a+1]=h,o<h&&(o=h),i>h&&(i=h)}return{points:t,min:i,max:o}}function a(n,e){return e?"#"+d(n.r)+d(n.g)+d(n.b):"rgba("+n.r+", "+n.g+", "+n.b+", "+n.a+")"}}function d(n){if(0===n)return"00";var e=n.toString(16);return n<16?"0"+e:e}var h="pk.eyJ1IjoiYW52YWthIiwiYSI6ImNrNWRqcDdnNTF4MHYzbXAzNDJzODludnYifQ.2WDAbuAzUuchNtCAcZitAw",m=t("//Fk"),g=t.n(m),f=t("ifoU"),v="https://api.mapbox.com/v4/mapbox.terrain-rgb/zoom/tLong/tLat@2x.pngraw?access_token="+h,w=new(t.n(f).a);function p(n,e,t){e||(e={});var o=512,i=n.transform.tileZoom,r=Math.pow(2,i),a=n.transform.coveringTiles({minzoom:i,maxzoom:i,tileSize:o}),l=a.reduce(function(n,e){var t=e.canonical;return n.minX>t.x&&(n.minX=t.x),n.minY>t.y&&(n.minY=t.y),n.maxX<t.x&&(n.maxX=t.x),n.maxY<t.y&&(n.maxY=t.y),n},{minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}),c=document.createElement("canvas"),u=l.maxX-l.minX,s=l.maxY-l.minY;if(u>50||s>50)throw new Error("Too many tiles requested. How did you do it?");c.width=u*o+o,c.height=s*o+o;var d=c.getContext("2d"),h=l.minX,m=l.minY;e.total=a.length,y();var f=void 0,p=!1,x=a.map(function(n){var e=function(n){var e=n.canonical;return{url:v.replace("zoom",e.z).replace("tLat",e.y).replace("tLong",e.x),x:o*(e.x-l.minX),y:o*(e.y-l.minY)}}(n);return(t=e.url,i=w.get(t),i||(i=new g.a(function(n,e){var o=new Image;o.onload=function(){n(o)},o.onerror=e,o.crossOrigin="anonymous",o.src=t}),w.set(t,i)),i).then(function(n){d.drawImage(n,e.x,e.y)}).catch(function(){d.beginPath(),d.fillStyle="#0186a0",d.fillRect(e.x,e.y,o,o)}).finally(y);var t,i});return g.a.all(x).then(function(){var e=c.width,t=d.getImageData(0,0,e,c.height).data,i=window.innerWidth,a=window.innerHeight,l=new Float32Array(i*a),u=void 0,s=16,v=1/0,w=-1/0,x=-1,y=0;return f=requestAnimationFrame(function n(){for(var e=window.performance.now(),t=y;t<a;++t){for(var o=0;o<i;++o){var r=t*i+o,c=T(o,t);l[r]=c,c<v&&(v=c),c>w&&(w=c,x=t)}var d=window.performance.now()-e;if(d>s)return void(p||(f=requestAnimationFrame(n)));y=t}u({minHeight:v,maxHeight:w,rowWithHighestPoint:x,allHeights:l,windowWidth:i,windowHeight:a})}),new g.a(function(n){u=n});function T(i,a){var l=n.transform.pointLocation({x:i,y:a}),c=function(n,e){return(n+180)/360*e}(l.lng,r),u=(c-h)*o,s=function(n,e){var t=n*Math.PI/180;return(1-Math.log(Math.tan(t)+1/Math.cos(t))/Math.PI)/2*e}(l.lat,r),d=(s-m)*o,g=Math.round(d),f=Math.round(u),v=4*(g*e+f),w=t[v+0],p=t[v+1],x=t[v+2];return function(n,e,t){var o=.1*(256*n*256+256*e+t)-1e4;o<-100&&(o/=5e3);return o}(w,p,x)}}).then(function(n){var e=n.windowWidth,t=n.allHeights;return{getHeightAtPoint:function(n,o){return t[n+o*e]},getAllHeightData:function(){return n}}}).then(function(n){p||t(n)}),{cancel:function(){p=!0,cancelAnimationFrame(f)}};function y(){void 0===e.completed&&(e.completed=-1),e.completed=Math.min(e.total,e.completed+1),e.message="Downloading tiles: "+e.completed+" of "+e.total+"..."}}var x=t("xQT3");t.e(0).then(function(){t("WOBu")}.bind(null,t)).catch(t.oe);var y=void 0,T=void 0,b=void 0;function k(){o.a.zazzleLink=null;var n=document.querySelector(".height-map");n&&(n.style.opacity=.02)}function P(){if(y){var n=document.querySelector(".height-map");n&&(T&&T.cancel(),b&&b.cancel(),o.a.shouldDraw?(n.style.display="",o.a.renderProgress={message:"",isCancelled:!1,completed:!1},b=p(y,o.a.renderProgress,function(e){T=s(o.a,e,n)})):n.style.display="none")}}o.a.init=function(){r.a.accessToken=h,window.map=y=new r.a.Map({trackResize:!0,container:"map",minZoom:0,style:"mapbox://styles/mapbox/light-v10",center:[-122.574,47.727],zoom:7.68,hash:!0}),y.addControl(new r.a.NavigationControl({showCompass:!1}),"bottom-right"),y.addControl(new x({accessToken:r.a.accessToken})),y.on("moveend",function(){y.once("idle",P)}),y.on("movestart",k),y.on("load",function(){o.a.angle=y.getBearing()}),y.dragRotate.disable(),y.touchZoomRotate.disableRotation()},o.a.redraw=function(){if(!T)return;T.cancel(),T.render()},o.a.updateMap=P,o.a.exportToSVG=function(){if(!T)return;return T.render(!0)}}},["NHnr"]);
//# sourceMappingURL=app.e7db078010ea5a4eb5c5.js.map