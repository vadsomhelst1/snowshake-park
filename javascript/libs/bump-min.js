"use strict";var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}();function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Bump=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?PIXI:arguments[0];if(_classCallCheck(this,t),void 0===e)throw new Error("Please assign a rendering engine in the constructor before using bump.js");this.renderer="pixi"}return _createClass(t,[{key:"addCollisionProperties",value:function(t){"pixi"===this.renderer&&(void 0===t.gx&&Object.defineProperty(t,"gx",{get:function(){return t.getGlobalPosition().x},enumerable:!0,configurable:!0}),void 0===t.gy&&Object.defineProperty(t,"gy",{get:function(){return t.getGlobalPosition().y},enumerable:!0,configurable:!0}),void 0===t.centerX&&Object.defineProperty(t,"centerX",{get:function(){return t.x+t.width/2},enumerable:!0,configurable:!0}),void 0===t.centerY&&Object.defineProperty(t,"centerY",{get:function(){return t.y+t.height/2},enumerable:!0,configurable:!0}),void 0===t.halfWidth&&Object.defineProperty(t,"halfWidth",{get:function(){return t.width/2},enumerable:!0,configurable:!0}),void 0===t.halfHeight&&Object.defineProperty(t,"halfHeight",{get:function(){return t.height/2},enumerable:!0,configurable:!0}),void 0===t.xAnchorOffset&&Object.defineProperty(t,"xAnchorOffset",{get:function(){return void 0!==t.anchor?t.width*t.anchor.x:0},enumerable:!0,configurable:!0}),void 0===t.yAnchorOffset&&Object.defineProperty(t,"yAnchorOffset",{get:function(){return void 0!==t.anchor?t.height*t.anchor.y:0},enumerable:!0,configurable:!0}),t.circular&&void 0===t.radius&&Object.defineProperty(t,"radius",{get:function(){return t.width/2},enumerable:!0,configurable:!0})),t._bumpPropertiesAdded=!0}},{key:"hitTestPoint",value:function(t,e){e._bumpPropertiesAdded||this.addCollisionProperties(e);var i=void 0,r=void 0,o=void 0,n=void 0,h=void 0,s=void 0;if("rectangle"===(i=e.radius?"circle":"rectangle")&&(r=e.x-e.xAnchorOffset,o=e.x+e.width-e.xAnchorOffset,n=e.y-e.yAnchorOffset,h=e.y+e.height-e.yAnchorOffset,s=t.x>r&&t.x<o&&t.y>n&&t.y<h),"circle"===i){var a=t.x-e.x-e.width/2+e.xAnchorOffset,d=t.y-e.y-e.height/2+e.yAnchorOffset;s=Math.sqrt(a*a+d*d)<e.radius}return s}},{key:"hitTestCircle",value:function(t,e){var i=!(arguments.length<=2||void 0===arguments[2])&&arguments[2];t._bumpPropertiesAdded||this.addCollisionProperties(t),e._bumpPropertiesAdded||this.addCollisionProperties(e);var r=void 0,o=void 0;return i?(r=e.gx+e.width/2-e.xAnchorOffset-(t.gx+t.width/2-t.xAnchorOffset),o=e.gy+e.width/2-e.yAnchorOffset-(t.gy+t.width/2-t.yAnchorOffset)):(r=e.x+e.width/2-e.xAnchorOffset-(t.x+t.width/2-t.xAnchorOffset),o=e.y+e.width/2-e.yAnchorOffset-(t.y+t.width/2-t.yAnchorOffset)),Math.sqrt(r*r+o*o)<t.radius+e.radius}},{key:"circleCollision",value:function(t,e){var i=!(arguments.length<=2||void 0===arguments[2])&&arguments[2],r=!(arguments.length<=3||void 0===arguments[3])&&arguments[3];t._bumpPropertiesAdded||this.addCollisionProperties(t),e._bumpPropertiesAdded||this.addCollisionProperties(e);var o,n,h=void 0,s=void 0,a=void 0,d=void 0,f=void 0,c={},l=!1;if(r?(s=e.gx+e.width/2-e.xAnchorOffset-(t.gx+t.width/2-t.xAnchorOffset),a=e.gy+e.width/2-e.yAnchorOffset-(t.gy+t.width/2-t.yAnchorOffset)):(s=e.x+e.width/2-e.xAnchorOffset-(t.x+t.width/2-t.xAnchorOffset),a=e.y+e.width/2-e.yAnchorOffset-(t.y+t.width/2-t.yAnchorOffset)),(o=Math.sqrt(s*s+a*a))<(n=t.radius+e.radius)){l=!0,h=n-o;h+=.3,d=s/o,f=a/o,t.x-=h*d,t.y-=h*f,i&&(c.x=a,c.y=-s,this.bounceOffSurface(t,c))}return l}},{key:"movingCircleCollision",value:function(t,e){var i=!(arguments.length<=2||void 0===arguments[2])&&arguments[2];t._bumpPropertiesAdded||this.addCollisionProperties(t),e._bumpPropertiesAdded||this.addCollisionProperties(e);var r,o=void 0,n=void 0,h=void 0,s={},a={},d={},f={},c={},l=!1;if(t.mass=t.mass||1,e.mass=e.mass||1,i?(s.vx=e.gx+e.radius-e.xAnchorOffset-(t.gx+t.radius-t.xAnchorOffset),s.vy=e.gy+e.radius-e.yAnchorOffset-(t.gy+t.radius-t.yAnchorOffset)):(s.vx=e.x+e.radius-e.xAnchorOffset-(t.x+t.radius-t.xAnchorOffset),s.vy=e.y+e.radius-e.yAnchorOffset-(t.y+t.radius-t.yAnchorOffset)),s.magnitude=Math.sqrt(s.vx*s.vx+s.vy*s.vy),r=t.radius+e.radius,s.magnitude<r){l=!0,o=r-s.magnitude,o+=.3,s.dx=s.vx/s.magnitude,s.dy=s.vy/s.magnitude,s.vxHalf=Math.abs(s.dx*o/2),s.vyHalf=Math.abs(s.dy*o/2),n=t.x>e.x?1:-1,h=t.y>e.y?1:-1,t.x=t.x+s.vxHalf*n,t.y=t.y+s.vyHalf*h,e.x=e.x+s.vxHalf*-n,e.y=e.y+s.vyHalf*-h,s.lx=s.vy,s.ly=-s.vx;var y=t.vx*s.dx+t.vy*s.dy;a.x=y*s.dx,a.y=y*s.dy;var x=t.vx*(s.lx/s.magnitude)+t.vy*(s.ly/s.magnitude);d.x=x*(s.lx/s.magnitude),d.y=x*(s.ly/s.magnitude);var v=e.vx*s.dx+e.vy*s.dy;f.x=v*s.dx,f.y=v*s.dy;var u=e.vx*(s.lx/s.magnitude)+e.vy*(s.ly/s.magnitude);c.x=u*(s.lx/s.magnitude),c.y=u*(s.ly/s.magnitude),t.bounce={},t.bounce.x=d.x+f.x,t.bounce.y=d.y+f.y,e.bounce={},e.bounce.x=a.x+c.x,e.bounce.y=a.y+c.y,t.vx=t.bounce.x/t.mass,t.vy=t.bounce.y/t.mass,e.vx=e.bounce.x/e.mass,e.vy=e.bounce.y/e.mass}return l}},{key:"multipleCircleCollision",value:function(t){for(var e=!(arguments.length<=1||void 0===arguments[1])&&arguments[1],i=0;i<t.length;i++)for(var r=t[i],o=i+1;o<t.length;o++){var n=t[o];this.movingCircleCollision(r,n,e)}}},{key:"rectangleCollision",value:function(t,e){var i=!(arguments.length<=2||void 0===arguments[2])&&arguments[2],r=arguments.length<=3||void 0===arguments[3]||arguments[3];t._bumpPropertiesAdded||this.addCollisionProperties(t),e._bumpPropertiesAdded||this.addCollisionProperties(e);var o,n,h=void 0,s=void 0,a=void 0,d=void 0,f=void 0;return r?(d=t.gx+Math.abs(t.halfWidth)-t.xAnchorOffset-(e.gx+Math.abs(e.halfWidth)-e.xAnchorOffset),f=t.gy+Math.abs(t.halfHeight)-t.yAnchorOffset-(e.gy+Math.abs(e.halfHeight)-e.yAnchorOffset)):(d=t.x+Math.abs(t.halfWidth)-t.xAnchorOffset-(e.x+Math.abs(e.halfWidth)-e.xAnchorOffset),f=t.y+Math.abs(t.halfHeight)-t.yAnchorOffset-(e.y+Math.abs(e.halfHeight)-e.yAnchorOffset)),o=Math.abs(t.halfWidth)+Math.abs(e.halfWidth),n=Math.abs(t.halfHeight)+Math.abs(e.halfHeight),Math.abs(d)<o&&Math.abs(f)<n&&((s=o-Math.abs(d))>=(a=n-Math.abs(f))?(f>0?(h="top",t.y=t.y+a):(h="bottom",t.y=t.y-a),i&&(t.vy*=-1)):(d>0?(h="left",t.x=t.x+s):(h="right",t.x=t.x-s),i&&(t.vx*=-1))),h}},{key:"hitTestRectangle",value:function(t,e){var i=!(arguments.length<=2||void 0===arguments[2])&&arguments[2];t._bumpPropertiesAdded||this.addCollisionProperties(t),e._bumpPropertiesAdded||this.addCollisionProperties(e);var r,o,n=void 0,h=void 0;return!1,i?(n=t.gx+Math.abs(t.halfWidth)-t.xAnchorOffset-(e.gx+Math.abs(e.halfWidth)-e.xAnchorOffset),h=t.gy+Math.abs(t.halfHeight)-t.yAnchorOffset-(e.gy+Math.abs(e.halfHeight)-e.yAnchorOffset)):(n=t.x+Math.abs(t.halfWidth)-t.xAnchorOffset-(e.x+Math.abs(e.halfWidth)-e.xAnchorOffset),h=t.y+Math.abs(t.halfHeight)-t.yAnchorOffset-(e.y+Math.abs(e.halfHeight)-e.yAnchorOffset)),r=Math.abs(t.halfWidth)+Math.abs(e.halfWidth),o=Math.abs(t.halfHeight)+Math.abs(e.halfHeight),Math.abs(n)<r&&Math.abs(h)<o}},{key:"hitTestCircleRectangle",value:function(t,e){var i=!(arguments.length<=2||void 0===arguments[2])&&arguments[2];e._bumpPropertiesAdded||this.addCollisionProperties(e),t._bumpPropertiesAdded||this.addCollisionProperties(t);var r=void 0,o=void 0,n=void 0,h=void 0,s=void 0,a=void 0;if(i?(n=t.gx,h=t.gy,s=e.gx,a=e.gy):(n=t.x,h=t.y,s=e.x,a=e.y),"topMiddle"===(r=h-t.yAnchorOffset<a-Math.abs(e.halfHeight)-e.yAnchorOffset?n-t.xAnchorOffset<s-1-Math.abs(e.halfWidth)-e.xAnchorOffset?"topLeft":n-t.xAnchorOffset>s+1+Math.abs(e.halfWidth)-e.xAnchorOffset?"topRight":"topMiddle":h-t.yAnchorOffset>a+Math.abs(e.halfHeight)-e.yAnchorOffset?n-t.xAnchorOffset<s-1-Math.abs(e.halfWidth)-e.xAnchorOffset?"bottomLeft":n-t.xAnchorOffset>s+1+Math.abs(e.halfWidth)-e.xAnchorOffset?"bottomRight":"bottomMiddle":n-t.xAnchorOffset<s-Math.abs(e.halfWidth)-e.xAnchorOffset?"leftMiddle":"rightMiddle")||"bottomMiddle"===r||"leftMiddle"===r||"rightMiddle"===r)o=this.hitTestRectangle(t,e,i);else{var d={};switch(r){case"topLeft":d.x=s-e.xAnchorOffset,d.y=a-e.yAnchorOffset;break;case"topRight":d.x=s+e.width-e.xAnchorOffset,d.y=a-e.yAnchorOffset;break;case"bottomLeft":d.x=s-e.xAnchorOffset,d.y=a+e.height-e.yAnchorOffset;break;case"bottomRight":d.x=s+e.width-e.xAnchorOffset,d.y=a+e.height-e.yAnchorOffset}o=this.hitTestCirclePoint(t,d,i)}return o?r:o}},{key:"hitTestCirclePoint",value:function(t,e){var i=!(arguments.length<=2||void 0===arguments[2])&&arguments[2];return t._bumpPropertiesAdded||this.addCollisionProperties(t),e.diameter=1,e.width=e.diameter,e.radius=.5,e.centerX=e.x,e.centerY=e.y,e.gx=e.x,e.gy=e.y,e.xAnchorOffset=0,e.yAnchorOffset=0,e._bumpPropertiesAdded=!0,this.hitTestCircle(t,e,i)}},{key:"circleRectangleCollision",value:function(t,e){var i=!(arguments.length<=2||void 0===arguments[2])&&arguments[2],r=!(arguments.length<=3||void 0===arguments[3])&&arguments[3];e._bumpPropertiesAdded||this.addCollisionProperties(e),t._bumpPropertiesAdded||this.addCollisionProperties(t);var o=void 0,n=void 0,h=void 0,s=void 0,a=void 0,d=void 0;if(r?(h=t.gx,s=t.gy,a=e.gx,d=e.gy):(h=t.x,s=t.y,a=e.x,d=e.y),"topMiddle"===(o=s-t.yAnchorOffset<d-Math.abs(e.halfHeight)-e.yAnchorOffset?h-t.xAnchorOffset<a-1-Math.abs(e.halfWidth)-e.xAnchorOffset?"topLeft":h-t.xAnchorOffset>a+1+Math.abs(e.halfWidth)-e.xAnchorOffset?"topRight":"topMiddle":s-t.yAnchorOffset>d+Math.abs(e.halfHeight)-e.yAnchorOffset?h-t.xAnchorOffset<a-1-Math.abs(e.halfWidth)-e.xAnchorOffset?"bottomLeft":h-t.xAnchorOffset>a+1+Math.abs(e.halfWidth)-e.xAnchorOffset?"bottomRight":"bottomMiddle":h-t.xAnchorOffset<a-Math.abs(e.halfWidth)-e.xAnchorOffset?"leftMiddle":"rightMiddle")||"bottomMiddle"===o||"leftMiddle"===o||"rightMiddle"===o)n=this.rectangleCollision(t,e,i,r);else{var f={};switch(o){case"topLeft":f.x=a-e.xAnchorOffset,f.y=d-e.yAnchorOffset;break;case"topRight":f.x=a+e.width-e.xAnchorOffset,f.y=d-e.yAnchorOffset;break;case"bottomLeft":f.x=a-e.xAnchorOffset,f.y=d+e.height-e.yAnchorOffset;break;case"bottomRight":f.x=a+e.width-e.xAnchorOffset,f.y=d+e.height-e.yAnchorOffset}n=this.circlePointCollision(t,f,i,r)}return n?o:n}},{key:"circlePointCollision",value:function(t,e){var i=!(arguments.length<=2||void 0===arguments[2])&&arguments[2],r=!(arguments.length<=3||void 0===arguments[3])&&arguments[3];return t._bumpPropertiesAdded||this.addCollisionProperties(t),e.diameter=1,e.width=e.diameter,e.radius=.5,e.centerX=e.x,e.centerY=e.y,e.gx=e.x,e.gy=e.y,e.xAnchorOffset=0,e.yAnchorOffset=0,e._bumpPropertiesAdded=!0,this.circleCollision(t,e,i,r)}},{key:"bounceOffSurface",value:function(t,e){t._bumpPropertiesAdded||this.addCollisionProperties(t);var i,r,o={},n={},h={},s=t.mass||1;e.lx=e.y,e.ly=-e.x,e.magnitude=Math.sqrt(e.x*e.x+e.y*e.y),e.dx=e.x/e.magnitude,e.dy=e.y/e.magnitude,i=t.vx*e.dx+t.vy*e.dy,o.vx=i*e.dx,o.vy=i*e.dy,r=t.vx*(e.lx/e.magnitude)+t.vy*(e.ly/e.magnitude),n.vx=r*(e.lx/e.magnitude),n.vy=r*(e.ly/e.magnitude),n.vx*=-1,n.vy*=-1,h.x=o.vx+n.vx,h.y=o.vy+n.vy,t.vx=h.x/s,t.vy=h.y/s}},{key:"contain",value:function(t,e){var i=!(arguments.length<=2||void 0===arguments[2])&&arguments[2],r=arguments.length<=3||void 0===arguments[3]?void 0:arguments[3];t._bumpPropertiesAdded||this.addCollisionProperties(t),void 0===e.xAnchorOffset&&(e.xAnchorOffset=0),void 0===e.yAnchorOffset&&(e.yAnchorOffset=0),void 0===t.parent.gx&&(t.parent.gx=0),void 0===t.parent.gy&&(t.parent.gy=0);var o=new Set;return t.x-t.xAnchorOffset<e.x-t.parent.gx-e.xAnchorOffset&&(i&&(t.vx*=-1),t.mass&&(t.vx/=t.mass),t.x=e.x-t.parent.gx-e.xAnchorOffset+t.xAnchorOffset,o.add("left")),t.y-t.yAnchorOffset<e.y-t.parent.gy-e.yAnchorOffset&&(i&&(t.vy*=-1),t.mass&&(t.vy/=t.mass),t.y=e.y-t.parent.gy-e.yAnchorOffset+t.yAnchorOffset,o.add("top")),t.x-t.xAnchorOffset+t.width>e.width-e.xAnchorOffset&&(i&&(t.vx*=-1),t.mass&&(t.vx/=t.mass),t.x=e.width-t.width-e.xAnchorOffset+t.xAnchorOffset,o.add("right")),t.y-t.yAnchorOffset+t.height>e.height-e.yAnchorOffset&&(i&&(t.vy*=-1),t.mass&&(t.vy/=t.mass),t.y=e.height-t.height-e.yAnchorOffset+t.yAnchorOffset,o.add("bottom")),0===o.size&&(o=void 0),o&&r&&r(o),o}},{key:"outsideBounds",value:function(t,e,i){var r=e.x,o=e.y,n=e.width,h=e.height,s=new Set;return t.x<r-t.width&&s.add("left"),t.y<o-t.height&&s.add("top"),t.x>n+t.width&&s.add("right"),t.y>h+t.height&&s.add("bottom"),0===s.size&&(s=void 0),s&&i&&i(s),s}},{key:"_getCenter",value:function(t,e,i){return void 0!==t.anchor?0!==t.anchor[i]?0:e/2:e}},{key:"hit",value:function(t,e){var i=!(arguments.length<=2||void 0===arguments[2])&&arguments[2],r=!(arguments.length<=3||void 0===arguments[3])&&arguments[3],o=arguments[4],n=arguments.length<=5||void 0===arguments[5]?void 0:arguments[5],h=this.hitTestPoint.bind(this),s=this.hitTestRectangle.bind(this),a=this.hitTestCircle.bind(this),d=this.movingCircleCollision.bind(this),f=this.circleCollision.bind(this),c=this.hitTestCircleRectangle.bind(this),l=this.rectangleCollision.bind(this),y=this.circleRectangleCollision.bind(this),x=void 0,v=void 0!==t.parent,u=void 0!==e.parent;return v&&e instanceof Array||u&&t instanceof Array?function(){if(t instanceof Array);for(var i=e.length-1;i>=0;i--){var r=e[i];(x=g(t,r))&&n&&n(x,r)}}():(x=g(t,e))&&n&&n(x),x;function g(t,e){var n=void 0!==t.parent,x=void 0!==e.parent;if(n&&x)return t.diameter&&e.diameter?function(t,e){return i?t.vx+t.vy!==0&&e.vx+e.vy!==0?d(t,e,o):f(t,e,r,o):a(t,e)}(t,e):t.diameter&&!e.diameter?function(t,e){return i?y(t,e,r,o):c(t,e,o)}(t,e):function(t,e){return i?l(t,e,r,o):s(t,e,o)}(t,e);if(x&&void 0!==t.x&&void 0!==t.y)return h(t,e);throw new Error("I'm sorry, "+t+" and "+e+" cannot be use together in a collision test.'")}}}]),t}();