var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n,r,i,a,o,s,c,l,u,d=1e3,f=1001,p=1002,m=1003,h=1004,g=1005,_=1006,v=1007,y=1008,b=1009,x=1010,S=1011,C=1012,w=1013,T=1014,E=1015,D=1016,O=1017,k=1018,ee=1020,A=35902,te=35899,j=1021,ne=1022,M=1023,re=1026,ie=1027,ae=1028,oe=1029,se=1030,ce=1031,le=1033,ue=33776,N=33777,de=33778,fe=33779,pe=35840,me=35841,he=35842,ge=35843,_e=36196,ve=37492,ye=37496,be=37488,xe=37489,Se=37490,Ce=37491,we=37808,Te=37809,Ee=37810,De=37811,Oe=37812,ke=37813,Ae=37814,je=37815,Me=37816,Ne=37817,Pe=37818,Fe=37819,P=37820,Ie=37821,Le=36492,Re=36494,F=36495,ze=36283,I=36284,Be=36285,Ve=36286,He=2300,Ue=2301,We=2302,Ge=2303,Ke=2400,qe=2401,Je=2402,Ye=3200,Xe=`srgb`,Ze=`srgb-linear`,Qe=`linear`,$e=`srgb`,et=7680,tt=35044,nt=35048,rt=2e3;function it(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function at(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function ot(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function st(){let e=ot(`canvas`);return e.style.display=`block`,e}var ct={};function lt(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function ut(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function L(...e){e=ut(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function R(...e){e=ut(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function dt(...e){let t=e.join(` `);t in ct||(ct[t]=!0,L(...e))}function ft(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var pt={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},mt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},ht=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),gt=Math.PI/180,_t=180/Math.PI;function vt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ht[e&255]+ht[e>>8&255]+ht[e>>16&255]+ht[e>>24&255]+`-`+ht[t&255]+ht[t>>8&255]+`-`+ht[t>>16&15|64]+ht[t>>24&255]+`-`+ht[n&63|128]+ht[n>>8&255]+`-`+ht[n>>16&255]+ht[n>>24&255]+ht[r&255]+ht[r>>8&255]+ht[r>>16&255]+ht[r>>24&255]).toLowerCase()}function yt(e,t,n){return Math.max(t,Math.min(n,e))}function bt(e,t){return(e%t+t)%t}function xt(e,t,n){return(1-n)*e+n*t}function St(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Ct(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function wt(e,t){if(t.constructor===Float32Array)return e;let n=Ct(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function Tt(e,t){if(t.constructor===Float32Array)return e;let n=Ct(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}c=Symbol.iterator;var z=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(yt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[c](){yield this.x,yield this.y}};n=z,n.prototype.isVector2=!0;var Et=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:L(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};l=Symbol.iterator;var B=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ot.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ot.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(yt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Dt.copy(this).projectOnVector(e),this.sub(Dt)}reflect(e){return this.sub(Dt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[l](){yield this.x,yield this.y,yield this.z}};r=B,r.prototype.isVector3=!0;var Dt=new B,Ot=new Et,V=class{constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return dt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(kt.makeScale(e,t)),this}rotate(e){return dt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(kt.makeRotation(-e)),this}translate(e,t){return dt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(kt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};i=V,i.prototype.isMatrix3=!0;var kt=new V,At=new V().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jt=new V().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mt(){let e={enabled:!0,workingColorSpace:Ze,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Pt(e.r),e.g=Pt(e.g),e.b=Pt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Ft(e.r),e.g=Ft(e.g),e.b=Ft(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Qe:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Ze]:{primaries:t,whitePoint:r,transfer:Qe,toXYZ:At,fromXYZ:jt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:t,whitePoint:r,transfer:$e,toXYZ:At,fromXYZ:jt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}}),e}var Nt=Mt();function Pt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Ft(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var It,Lt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{It===void 0&&(It=ot(`canvas`)),It.width=e.width,It.height=e.height;let t=It.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=It}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=ot(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Pt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Pt(t[e]/255)*255):t[e]=Pt(t[e]);return{data:t,width:e.width,height:e.height}}return L(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Rt=0,zt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Rt++}),this.uuid=vt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Bt(r[t].image)):e.push(Bt(r[t]))}else e=Bt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Bt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Lt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(L(`Texture: Unable to serialize Texture.`),{})}var Vt=0,Ht=new B,Ut=class e extends mt{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=f,i=f,a=_,o=y,s=M,c=b,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vt++}),this.uuid=vt(),this.name=``,this.source=new zt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new z(0,0),this.repeat=new z(1,1),this.center=new z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new V,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ht).x}get height(){return this.source.getSize(Ht).y}get depth(){return this.source.getSize(Ht).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){L(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?L(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case d:e.x-=Math.floor(e.x);break;case f:e.x=e.x<0?0:1;break;case p:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case d:e.y-=Math.floor(e.y);break;case f:e.y=e.y<0?0:1;break;case p:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ut.DEFAULT_IMAGE=null,Ut.DEFAULT_MAPPING=300,Ut.DEFAULT_ANISOTROPY=1,u=Symbol.iterator;var Wt=class{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this.w=yt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this.w=yt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(yt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[u](){yield this.x,yield this.y,yield this.z,yield this.w}};a=Wt,a.prototype.isVector4=!0;var Gt=class extends mt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new Ut({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:_,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new zt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Kt=class extends Gt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},qt=class extends Ut{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=m,this.minFilter=m,this.wrapR=f,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Jt=class extends Ut{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=m,this.minFilter=m,this.wrapR=f,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Yt=class e{constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Xt.setFromMatrixColumn(e,0).length(),i=1/Xt.setFromMatrixColumn(e,1).length(),a=1/Xt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qt,e,$t)}lookAt(e,t,n){let r=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),en.crossVectors(n,nn),en.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),en.crossVectors(n,nn)),en.normalize(),tn.crossVectors(nn,en),r[0]=en.x,r[4]=tn.x,r[8]=nn.x,r[1]=en.y,r[5]=tn.y,r[9]=nn.y,r[2]=en.z,r[6]=tn.z,r[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],ee=r[6],A=r[10],te=r[14],j=r[3],ne=r[7],M=r[11],re=r[15];return i[0]=a*x+o*T+s*k+c*j,i[4]=a*S+o*E+s*ee+c*ne,i[8]=a*C+o*D+s*A+c*M,i[12]=a*w+o*O+s*te+c*re,i[1]=l*x+u*T+d*k+f*j,i[5]=l*S+u*E+d*ee+f*ne,i[9]=l*C+u*D+d*A+f*M,i[13]=l*w+u*O+d*te+f*re,i[2]=p*x+m*T+h*k+g*j,i[6]=p*S+m*E+h*ee+g*ne,i[10]=p*C+m*D+h*A+g*M,i[14]=p*w+m*O+h*te+g*re,i[3]=_*x+v*T+y*k+b*j,i[7]=_*S+v*E+y*ee+b*ne,i[11]=_*C+v*D+y*A+b*M,i[15]=_*w+v*O+y*te+b*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let ee=1/k;return e[0]=(o*O-s*D+c*E)*ee,e[1]=(r*D-n*O-i*E)*ee,e[2]=(m*S-h*x+g*b)*ee,e[3]=(d*x-u*S-f*b)*ee,e[4]=(s*T-a*O-c*w)*ee,e[5]=(t*O-r*T+i*w)*ee,e[6]=(h*y-p*S-g*v)*ee,e[7]=(l*S-d*y+f*v)*ee,e[8]=(a*D-o*T+c*C)*ee,e[9]=(n*T-t*D-i*C)*ee,e[10]=(p*x-m*y+g*_)*ee,e[11]=(u*y-l*x-f*_)*ee,e[12]=(o*w-a*E-s*C)*ee,e[13]=(t*E-n*w+r*C)*ee,e[14]=(m*v-p*b-h*_)*ee,e[15]=(l*b-u*v+d*_)*ee,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Xt.set(r[0],r[1],r[2]).length(),o=Xt.set(r[4],r[5],r[6]).length(),s=Xt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Zt.copy(this);let c=1/a,l=1/o,u=1/s;return Zt.elements[0]*=c,Zt.elements[1]*=c,Zt.elements[2]*=c,Zt.elements[4]*=l,Zt.elements[5]*=l,Zt.elements[6]*=l,Zt.elements[8]*=u,Zt.elements[9]*=u,Zt.elements[10]*=u,t.setFromRotationMatrix(Zt),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=rt,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=rt,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};o=Yt,o.prototype.isMatrix4=!0;var Xt=new B,Zt=new Yt,Qt=new B(0,0,0),$t=new B(1,1,1),en=new B,tn=new B,nn=new B,rn=new Yt,an=new Et,on=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-yt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(yt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:L(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return an.setFromEuler(this),this.setFromQuaternion(an,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};on.DEFAULT_ORDER=`XYZ`;var sn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},cn=0,ln=new B,un=new Et,dn=new Yt,fn=new B,pn=new B,mn=new B,hn=new Et,gn=new B(1,0,0),_n=new B(0,1,0),vn=new B(0,0,1),yn={type:`added`},bn={type:`removed`},xn={type:`childadded`,child:null},Sn={type:`childremoved`,child:null},Cn=class e extends mt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cn++}),this.uuid=vt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new B,n=new on,r=new Et,i=new B(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Yt},normalMatrix:{value:new V}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return un.setFromAxisAngle(e,t),this.quaternion.multiply(un),this}rotateOnWorldAxis(e,t){return un.setFromAxisAngle(e,t),this.quaternion.premultiply(un),this}rotateX(e){return this.rotateOnAxis(gn,e)}rotateY(e){return this.rotateOnAxis(_n,e)}rotateZ(e){return this.rotateOnAxis(vn,e)}translateOnAxis(e,t){return ln.copy(e).applyQuaternion(this.quaternion),this.position.add(ln.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gn,e)}translateY(e){return this.translateOnAxis(_n,e)}translateZ(e){return this.translateOnAxis(vn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fn.copy(e):fn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),pn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(pn,fn,this.up):dn.lookAt(fn,pn,this.up),this.quaternion.setFromRotationMatrix(dn),r&&(dn.extractRotation(r.matrixWorld),un.setFromRotationMatrix(dn),this.quaternion.premultiply(un.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(R(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yn),xn.child=e,this.dispatchEvent(xn),xn.child=null):R(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bn),Sn.child=e,this.dispatchEvent(Sn),Sn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yn),xn.child=e,this.dispatchEvent(xn),xn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pn,e,mn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pn,hn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Cn.DEFAULT_UP=new B(0,1,0),Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wn=class extends Cn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Tn={type:`move`},En=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new wn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Dn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},kn={h:0,s:0,l:0};function An(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var H=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Nt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Nt.workingColorSpace){if(e=bt(e,1),t=yt(t,0,1),n=yt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=An(i,r,e+1/3),this.g=An(i,r,e),this.b=An(i,r,e-1/3)}return Nt.colorSpaceToWorking(this,r),this}setStyle(e,t=Xe){function n(t){t!==void 0&&parseFloat(t)<1&&L(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:L(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);L(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xe){let n=Dn[e.toLowerCase()];return n===void 0?L(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pt(e.r),this.g=Pt(e.g),this.b=Pt(e.b),this}copyLinearToSRGB(e){return this.r=Ft(e.r),this.g=Ft(e.g),this.b=Ft(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xe){return Nt.workingToColorSpace(jn.copy(this),e),Math.round(yt(jn.r*255,0,255))*65536+Math.round(yt(jn.g*255,0,255))*256+Math.round(yt(jn.b*255,0,255))}getHexString(e=Xe){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Nt.workingColorSpace){Nt.workingToColorSpace(jn.copy(this),t);let n=jn.r,r=jn.g,i=jn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Nt.workingColorSpace){return Nt.workingToColorSpace(jn.copy(this),t),e.r=jn.r,e.g=jn.g,e.b=jn.b,e}getStyle(e=Xe){Nt.workingToColorSpace(jn.copy(this),e);let t=jn.r,n=jn.g,r=jn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(On),this.setHSL(On.h+e,On.s+t,On.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(On),e.getHSL(kn);let n=xt(On.h,kn.h,t),r=xt(On.s,kn.s,t),i=xt(On.l,kn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},jn=new H;H.NAMES=Dn;var Mn=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new H(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Nn=class extends Cn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Pn=new B,Fn=new B,In=new B,Ln=new B,Rn=new B,zn=new B,Bn=new B,Vn=new B,Hn=new B,Un=new B,Wn=new Wt,Gn=new Wt,Kn=new Wt,qn=class e{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Pn.subVectors(e,t),r.cross(Pn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Pn.subVectors(r,t),Fn.subVectors(n,t),In.subVectors(e,t);let a=Pn.dot(Pn),o=Pn.dot(Fn),s=Pn.dot(In),c=Fn.dot(Fn),l=Fn.dot(In),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ln)!==null&&Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Ln)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Ln.x),s.addScaledVector(a,Ln.y),s.addScaledVector(o,Ln.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Wn.setScalar(0),Gn.setScalar(0),Kn.setScalar(0),Wn.fromBufferAttribute(e,t),Gn.fromBufferAttribute(e,n),Kn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Wn,i.x),a.addScaledVector(Gn,i.y),a.addScaledVector(Kn,i.z),a}static isFrontFacing(e,t,n,r){return Pn.subVectors(n,t),Fn.subVectors(e,t),Pn.cross(Fn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),Pn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Rn.subVectors(r,n),zn.subVectors(i,n),Vn.subVectors(e,n);let s=Rn.dot(Vn),c=zn.dot(Vn);if(s<=0&&c<=0)return t.copy(n);Hn.subVectors(e,r);let l=Rn.dot(Hn),u=zn.dot(Hn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(Rn,a);Un.subVectors(e,i);let f=Rn.dot(Un),p=zn.dot(Un);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(zn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Bn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Bn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Rn,a).addScaledVector(zn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Jn=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Xn):Xn.fromBufferAttribute(r,t),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Zn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Zn.copy(e.boundingBox)),Zn.applyMatrix4(e.matrixWorld),this.union(Zn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ir),ar.subVectors(this.max,ir),Qn.subVectors(e.a,ir),$n.subVectors(e.b,ir),er.subVectors(e.c,ir),tr.subVectors($n,Qn),nr.subVectors(er,$n),rr.subVectors(Qn,er);let t=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-rr.z,rr.y,tr.z,0,-tr.x,nr.z,0,-nr.x,rr.z,0,-rr.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-rr.y,rr.x,0];return!cr(t,Qn,$n,er,ar)||(t=[1,0,0,0,1,0,0,0,1],!cr(t,Qn,$n,er,ar))?!1:(or.crossVectors(tr,nr),t=[or.x,or.y,or.z],cr(t,Qn,$n,er,ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Yn=[new B,new B,new B,new B,new B,new B,new B,new B],Xn=new B,Zn=new Jn,Qn=new B,$n=new B,er=new B,tr=new B,nr=new B,rr=new B,ir=new B,ar=new B,or=new B,sr=new B;function cr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){sr.fromArray(e,a);let o=i.x*Math.abs(sr.x)+i.y*Math.abs(sr.y)+i.z*Math.abs(sr.z),s=t.dot(sr),c=n.dot(sr),l=r.dot(sr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var lr=new B,ur=new z,dr=0,fr=class extends mt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=tt,this.updateRanges=[],this.gpuType=E,this.version=0,this._normalizationScale=e===void 0?void 0:Ct(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.applyMatrix3(e),this.setXY(t,ur.x,ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyMatrix3(e),this.setXYZ(t,lr.x,lr.y,lr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyMatrix4(e),this.setXYZ(t,lr.x,lr.y,lr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyNormalMatrix(e),this.setXYZ(t,lr.x,lr.y,lr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.transformDirection(e),this.setXYZ(t,lr.x,lr.y,lr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?wt(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?Tt(e,this.array):Math.round(e*t)}},pr=class extends fr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},mr=class extends fr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},hr=class extends fr{constructor(e,t,n){super(new Float32Array(e),t,n)}},gr=new Jn,_r=new B,vr=new B,yr=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?gr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_r.subVectors(e,this.center);let t=_r.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(_r,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_r.copy(e.center).add(vr)),this.expandByPoint(_r.copy(e.center).sub(vr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},br=0,xr=new Yt,Sr=new Cn,Cr=new B,wr=new Jn,Tr=new Jn,Er=new B,Dr=class e extends mt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:br++}),this.uuid=vt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(it(e)?mr:pr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new V().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return xr.makeRotationFromQuaternion(e),this.applyMatrix4(xr),this}rotateX(e){return xr.makeRotationX(e),this.applyMatrix4(xr),this}rotateY(e){return xr.makeRotationY(e),this.applyMatrix4(xr),this}rotateZ(e){return xr.makeRotationZ(e),this.applyMatrix4(xr),this}translate(e,t,n){return xr.makeTranslation(e,t,n),this.applyMatrix4(xr),this}scale(e,t,n){return xr.makeScale(e,t,n),this.applyMatrix4(xr),this}lookAt(e){return Sr.lookAt(e),Sr.updateMatrix(),this.applyMatrix4(Sr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new hr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&L(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)R(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];wr.setFromBufferAttribute(n),this.morphTargetsRelative?(Er.addVectors(this.boundingBox.min,wr.min),this.boundingBox.expandByPoint(Er),Er.addVectors(this.boundingBox.max,wr.max),this.boundingBox.expandByPoint(Er)):(this.boundingBox.expandByPoint(wr.min),this.boundingBox.expandByPoint(wr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&R(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)R(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new B,1/0);else if(e){let n=this.boundingSphere.center;if(wr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Tr.setFromBufferAttribute(n),this.morphTargetsRelative?(Er.addVectors(wr.min,Tr.min),wr.expandByPoint(Er),Er.addVectors(wr.max,Tr.max),wr.expandByPoint(Er)):(wr.expandByPoint(Tr.min),wr.expandByPoint(Tr.max))}wr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Er.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Er));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Er.fromBufferAttribute(a,t),o&&(Cr.fromBufferAttribute(e,t),Er.add(Cr)),r=Math.max(r,n.distanceToSquared(Er))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&R(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){R(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new fr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new B,s[e]=new B;let l=new B,u=new B,d=new B,f=new z,p=new z,m=new z,h=new B,g=new B;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new B,b=new B,x=new B,S=new B;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new fr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new B,i=new B,a=new B,o=new B,s=new B,c=new B,l=new B,u=new B;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Er.fromBufferAttribute(e,t),Er.normalize(),e.setXYZ(t,Er.x,Er.y,Er.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new fr(a,r,i)}if(this.index===null)return L(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Or=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=tt,this.updateRanges=[],this.version=0,this.uuid=vt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=kr(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=kr(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function kr(e){return e.buffer._uuid===void 0&&(e.buffer._uuid=vt()),e.byteOffset===0&&e.byteLength===e.buffer.byteLength?e.buffer._uuid:e.buffer._uuid+`:`+e.byteOffset+`:`+e.byteLength}var Ar=new B,jr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r,this._normalizationScale=e===void 0?void 0:Ct(e.array)}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ar.fromBufferAttribute(this,t),Ar.applyMatrix4(e),this.setXYZ(t,Ar.x,Ar.y,Ar.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ar.fromBufferAttribute(this,t),Ar.applyNormalMatrix(e),this.setXYZ(t,Ar.x,Ar.y,Ar.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ar.fromBufferAttribute(this,t),Ar.transformDirection(e),this.setXYZ(t,Ar.x,Ar.y,Ar.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){lt(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new fr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){lt(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t===void 0?wt(e,this.data.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?Tt(e,this.data.array):Math.round(e*t)}},Mr=new B,Nr=new B,Pr=new V,Fr=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Mr.subVectors(n,t).cross(Nr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Mr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Pr.getNormalMatrix(e),r=this.coplanarPoint(Mr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ir=0,Lr=class extends mt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ir++}),this.uuid=vt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new H(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=et,this.stencilZFail=et,this.stencilZPass=et,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){L(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?L(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new H().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Fr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new z().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new z().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Rr=class extends Lr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new H(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},zr,Br=new B,Vr=new B,Hr=new B,Ur=new z,Wr=new z,Gr=new Yt,Kr=new B,qr=new B,Jr=new B,Yr=new z,Xr=new z,Zr=new z,Qr=class extends Cn{constructor(e=new Rr){if(super(),this.isSprite=!0,this.type=`Sprite`,zr===void 0){zr=new Dr;let e=new Or(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);zr.setIndex([0,1,2,0,2,3]),zr.setAttribute(`position`,new jr(e,3,0,!1)),zr.setAttribute(`uv`,new jr(e,2,3,!1))}this.geometry=zr,this.material=e,this.center=new z(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&R(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Vr.setFromMatrixScale(this.matrixWorld),Gr.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Hr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vr.multiplyScalar(-Hr.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;$r(Kr.set(-.5,-.5,0),Hr,a,Vr,r,i),$r(qr.set(.5,-.5,0),Hr,a,Vr,r,i),$r(Jr.set(.5,.5,0),Hr,a,Vr,r,i),Yr.set(0,0),Xr.set(1,0),Zr.set(1,1);let o=e.ray.intersectTriangle(Kr,qr,Jr,!1,Br);if(o===null&&($r(qr.set(-.5,.5,0),Hr,a,Vr,r,i),Xr.set(0,1),o=e.ray.intersectTriangle(Kr,Jr,qr,!1,Br),o===null))return;let s=e.ray.origin.distanceTo(Br);s<e.near||s>e.far||t.push({distance:s,point:Br.clone(),uv:qn.getInterpolation(Br,Kr,qr,Jr,Yr,Xr,Zr,new z),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function $r(e,t,n,r,i,a){Ur.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Wr.copy(Ur):(Wr.x=a*Ur.x-i*Ur.y,Wr.y=i*Ur.x+a*Ur.y),e.copy(t),e.x+=Wr.x,e.y+=Wr.y,e.applyMatrix4(Gr)}var ei=new B,ti=new B,ni=new B,ri=new B,ii=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,t),ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ti.copy(e).add(t).multiplyScalar(.5),ni.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(ti);let i=e.distanceTo(t)*.5,a=-this.direction.dot(ni),o=ri.dot(this.direction),s=-ri.dot(ni),c=ri.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ti).addScaledVector(ni,d),f}intersectSphere(e,t){if(e.radius<0)return null;ei.subVectors(e.center,this.origin);let n=ei.dot(this.direction),r=ei.dot(ei)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,ee,A,te,j;if(y>=b&&y>=x?(w=s,D=u,ee=p,j=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,A=_,te=v):(S=l,C=c,T=f,E=d,O=h,k=m,A=v,te=_)):b>=x?(w=c,D=d,ee=m,j=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,A=v,te=g):(S=s,C=l,T=u,E=f,O=p,k=h,A=g,te=v)):(w=l,D=f,ee=h,j=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,A=g,te=_):(S=c,C=s,T=d,E=u,O=m,k=p,A=_,te=g)),w===0)return null;let ne=S/w,M=C/w,re=1/w,ie=T-ne*D,ae=E-M*D,oe=O-ne*ee,se=k-M*ee,ce=A-ne*j,le=te-M*j,ue=ce*se-le*oe,N=ie*le-ae*ce,de=oe*ae-se*ie;if(r){if(ue<0||N<0||de<0)return null}else if((ue<0||N<0||de<0)&&(ue>0||N>0||de>0))return null;let fe=ue+N+de;if(fe===0)return null;let pe=re*(ue*D+N*ee+de*j);return(fe>0?pe<0:pe>0)?null:this.at(pe/fe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ai=class extends Lr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new H(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},oi=new Yt,si=new ii,ci=new yr,li=new B,ui=new B,di=new B,fi=new B,pi=new B,mi=new B,hi=new B,gi=new B,U=class extends Cn{constructor(e=new Dr,t=new ai){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){mi.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(pi.fromBufferAttribute(s,e),a?mi.addScaledVector(pi,r):mi.addScaledVector(pi.sub(t),r))}t.add(mi)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ci.copy(n.boundingSphere),ci.applyMatrix4(i),si.copy(e.ray).recast(e.near),ci.containsPoint(si.origin)===!1&&(si.intersectSphere(ci,li)===null||si.origin.distanceToSquared(li)>(e.far-e.near)**2)||(oi.copy(i).invert(),si.copy(e.ray).applyMatrix4(oi),(n.boundingBox===null||si.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,si)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=vi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=vi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=vi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=vi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function _i(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;gi.copy(s),gi.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(gi);return l<n.near||l>n.far?null:{distance:l,point:gi.clone(),object:e}}function vi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,ui),e.getVertexPosition(c,di),e.getVertexPosition(l,fi);let u=_i(e,t,n,r,ui,di,fi,hi);if(u){let e=new B;qn.getBarycoord(hi,ui,di,fi,e),i&&(u.uv=qn.getInterpolatedAttribute(i,s,c,l,e,new z)),a&&(u.uv1=qn.getInterpolatedAttribute(a,s,c,l,e,new z)),o&&(u.normal=qn.getInterpolatedAttribute(o,s,c,l,e,new B),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new B,materialIndex:0};qn.getNormal(ui,di,fi,t.normal),u.face=t,u.barycoord=e}return u}var yi=class extends Ut{constructor(e=null,t=1,n=1,r,i,a,o,s,c=m,l=m,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},bi=class extends fr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},xi=new Yt,Si=new Yt,Ci=[],wi=new Jn,Ti=new Yt,Ei=new U,Di=new yr,Oi=class extends U{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Ti)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xi),wi.copy(e.boundingBox).applyMatrix4(xi),this.boundingBox.union(wi)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xi),Di.copy(e.boundingSphere).applyMatrix4(xi),this.boundingSphere.union(Di)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture===null?null:e.morphTexture.clone(),this.instanceColor=e.instanceColor===null?null:e.instanceColor.clone(),this.count=e.count,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Ei.geometry=this.geometry,Ei.material=this.material,Ei.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Di.copy(this.boundingSphere),Di.applyMatrix4(n),e.ray.intersectsSphere(Di)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,xi),Si.multiplyMatrices(n,xi),Ei.matrixWorld=Si,Ei.raycast(e,Ci);for(let e=0,n=Ci.length;e<n;e++){let n=Ci[e];n.instanceId=i,n.object=this,t.push(n)}Ci.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new bi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new yi(new Float32Array(r*this.count),r,this.count,ae,E));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ki=new yr,Ai=new z(.5,.5),ji=new B,Mi=class{constructor(e=new Fr,t=new Fr,n=new Fr,r=new Fr,i=new Fr,a=new Fr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=rt,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(e){return ki.center.set(0,0,0),ki.radius=.7071067811865476+Ai.distanceTo(e.center),ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(ji.x=r.normal.x>0?e.max.x:e.min.x,ji.y=r.normal.y>0?e.max.y:e.min.y,ji.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ji)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ni=new Yt,Pi=class e{constructor(){this.coordinateSystem=rt,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];Ni.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new Mi),n[e].setFromProjectionMatrix(Ni,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Mi),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},Fi=class extends Lr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new H(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ii=new B,Li=new B,Ri=new Yt,zi=new ii,Bi=new yr,Vi=new B,Hi=new B,Ui=class extends Cn{constructor(e=new Dr,t=new Fi){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Ii.fromBufferAttribute(t,e-1),Li.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Ii.distanceTo(Li);e.setAttribute(`lineDistance`,new hr(n,1))}else L(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bi.copy(n.boundingSphere),Bi.applyMatrix4(r),Bi.radius+=i,e.ray.intersectsSphere(Bi)===!1)return;Ri.copy(r).invert(),zi.copy(e.ray).applyMatrix4(Ri);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Wi(this,e,zi,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Wi(this,e,zi,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Wi(this,e,zi,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Wi(this,e,zi,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Wi(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Ii.fromBufferAttribute(s,i),Li.fromBufferAttribute(s,a),n.distanceSqToSegment(Ii,Li,Vi,Hi)>r)return;Vi.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Vi);if(!(c<t.near||c>t.far))return{distance:c,point:Hi.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Gi=new B,Ki=new B,qi=class extends Ui{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)Gi.fromBufferAttribute(t,e),Ki.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+Gi.distanceTo(Ki);e.setAttribute(`lineDistance`,new hr(n,1))}else L(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Ji=class extends Lr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new H(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Yi=new Yt,Xi=new ii,Zi=new yr,Qi=new B,$i=class extends Cn{constructor(e=new Dr,t=new Ji){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zi.copy(n.boundingSphere),Zi.applyMatrix4(r),Zi.radius+=i,e.ray.intersectsSphere(Zi)===!1)return;Yi.copy(r).invert(),Xi.copy(e.ray).applyMatrix4(Yi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Qi.fromBufferAttribute(l,n),ea(Qi,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Qi.fromBufferAttribute(l,a),ea(Qi,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function ea(e,t,n,r,i,a,o){let s=Xi.distanceSqToPoint(e);if(s<n){let n=new B;Xi.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ta=class extends Ut{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},na=class extends Ut{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ra=class extends Ut{constructor(e,t,n=T,r,i,a,o=m,s=m,c,l=re,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ia=class extends ra{constructor(e,t=T,n=301,r,i,a=m,o=m,s,c=re){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},aa=class extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},oa=class e extends Dr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new hr(c,3)),this.setAttribute(`normal`,new hr(l,3)),this.setAttribute(`uv`,new hr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new B;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},sa=class e extends Dr{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new B,g=new B;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new hr(o,3)),this.setAttribute(`normal`,new hr(s,3)),this.setAttribute(`uv`,new hr(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},ca=class e extends Dr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new B,l=new z;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new hr(a,3)),this.setAttribute(`normal`,new hr(o,3)),this.setAttribute(`uv`,new hr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},la=class e extends Dr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new hr(u,3)),this.setAttribute(`normal`,new hr(d,3)),this.setAttribute(`uv`,new hr(f,2));function _(){let a=new B,_=new B,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new z,m=new B,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ua=class e extends la{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},da=class e extends Dr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new hr(i,3)),this.setAttribute(`normal`,new hr(i.slice(),3)),this.setAttribute(`uv`,new hr(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new B,r=new B,i=new B;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new B;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new B;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new B,t=new B,n=new B,r=new B,o=new z,s=new z,c=new z;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},fa=new B,pa=new B,ma=new B,ha=new qn,ga=class extends Dr{constructor(e=null,t=1){if(super(),this.type=`EdgesGeometry`,this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=1e4,r=Math.cos(gt*t),i=e.getIndex(),a=e.getAttribute(`position`),o=i?i.count:a.count,s=[0,0,0],c=[`a`,`b`,`c`],l=[,,,],u=new Map,d=[];for(let e=0;e<o;e+=3){i?(s[0]=i.getX(e),s[1]=i.getX(e+1),s[2]=i.getX(e+2)):(s[0]=e,s[1]=e+1,s[2]=e+2);let{a:t,b:o,c:f}=ha;if(t.fromBufferAttribute(a,s[0]),o.fromBufferAttribute(a,s[1]),f.fromBufferAttribute(a,s[2]),ha.getNormal(ma),l[0]=`${Math.round(t.x*n)},${Math.round(t.y*n)},${Math.round(t.z*n)}`,l[1]=`${Math.round(o.x*n)},${Math.round(o.y*n)},${Math.round(o.z*n)}`,l[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,l[0]!==l[1]&&l[1]!==l[2]&&l[2]!==l[0])for(let e=0;e<3;e++){let t=(e+1)%3,n=l[e],i=l[t],a=ha[c[e]],o=ha[c[t]],f=`${n}_${i}`,p=`${i}_${n}`,m=u.get(p);m?(ma.dot(m.normal)<=r&&(d.push(a.x,a.y,a.z),d.push(o.x,o.y,o.z)),u.set(p,null)):u.has(f)||u.set(f,{index0:s[e],index1:s[t],normal:ma.clone()})}}for(let e of u.values())if(e){let{index0:t,index1:n}=e;fa.fromBufferAttribute(a,t),pa.fromBufferAttribute(a,n),d.push(fa.x,fa.y,fa.z),d.push(pa.x,pa.y,pa.z)}this.setAttribute(`position`,new hr(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},_a=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){L(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new z:new B);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new B,r=[],i=[],a=[],o=new B,s=new Yt;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new B)}i[0]=new B,a[0]=new B;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(yt(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(yt(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},va=class extends _a{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new z){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ya=class extends va{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function ba(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var xa=new B,Sa=new B,Ca=new ba,wa=new ba,Ta=new ba,Ea=class extends _a{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new B){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Sa.subVectors(r[0],r[1]).add(r[0]),c=Sa);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(xa.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=xa),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Ca.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),wa.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Ta.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Ca.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),wa.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Ta.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Ca.calc(s),wa.calc(s),Ta.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new B().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Da(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Oa(e,t){let n=1-e;return n*n*t}function ka(e,t){return 2*(1-e)*e*t}function Aa(e,t){return e*e*t}function ja(e,t,n,r){return Oa(e,t)+ka(e,n)+Aa(e,r)}function Ma(e,t){let n=1-e;return n*n*n*t}function Na(e,t){let n=1-e;return 3*n*n*e*t}function Pa(e,t){return 3*(1-e)*e*e*t}function Fa(e,t){return e*e*e*t}function Ia(e,t,n,r,i){return Ma(e,t)+Na(e,n)+Pa(e,r)+Fa(e,i)}var La=class extends _a{constructor(e=new z,t=new z,n=new z,r=new z){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new z){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Ia(e,r.x,i.x,a.x,o.x),Ia(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ra=class extends _a{constructor(e=new B,t=new B,n=new B,r=new B){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Ia(e,r.x,i.x,a.x,o.x),Ia(e,r.y,i.y,a.y,o.y),Ia(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},za=class extends _a{constructor(e=new z,t=new z){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new z){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ba=class extends _a{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new B){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Va=class extends _a{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(ja(e,r.x,i.x,a.x),ja(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ha=class extends _a{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(ja(e,r.x,i.x,a.x),ja(e,r.y,i.y,a.y),ja(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ua=class extends _a{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new z){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Da(o,s.x,c.x,l.x,u.x),Da(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new z().fromArray(n))}return this}},Wa=Object.freeze({__proto__:null,ArcCurve:ya,CatmullRomCurve3:Ea,CubicBezierCurve:La,CubicBezierCurve3:Ra,EllipseCurve:va,LineCurve:za,LineCurve3:Ba,QuadraticBezierCurve:Va,QuadraticBezierCurve3:Ha,SplineCurve:Ua}),Ga=class extends _a{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new Wa[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new Wa[n.type]().fromJSON(n))}return this.cacheLengths=null,this}},Ka=class extends Ga{constructor(e){super(),this.type=`Path`,this.currentPoint=new z,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new za(this.currentPoint.clone(),new z(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Va(this.currentPoint.clone(),new z(e,t),new z(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new La(this.currentPoint.clone(),new z(e,t),new z(n,r),new z(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Ua([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new va(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},qa=class extends Ka{constructor(e){super(e),this.uuid=vt(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new Ka().fromJSON(n))}return this}};function Ja(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Ya(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=no(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return Za(a,o,n,s,c,l,0),o}function Ya(e,t,n,r,i){let a;if(i===Do(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=wo(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=wo(i/r|0,e[i],e[i+1],a);return a&&go(a,a.next)&&(To(a),a=a.next),a}function Xa(e,t){if(!e)return e;t||(t=e);let n=e,r;do if(r=!1,!n.steiner&&(go(n,n.next)||ho(n.prev,n,n.next)===0)){if(To(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Za(e,t,n,r,i,a,o){if(!e)return;!o&&a&&so(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?$a(e,r,i,a):Qa(e))t.push(c.i,e.i,l.i),To(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=eo(Xa(e),t),Za(e,t,n,r,i,a,2)):o===2&&to(e,t,n,r,i,a):Za(Xa(e),t,n,r,i,a,1);break}}}function Qa(e){let t=e.prev,n=e,r=e.next;if(ho(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&po(i,s,a,c,o,l,m.x,m.y)&&ho(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function $a(e,t,n,r){let i=e.prev,a=e,o=e.next;if(ho(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=lo(p,m,t,n,r),v=lo(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&po(s,u,c,d,l,f,y.x,y.y)&&ho(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&po(s,u,c,d,l,f,b.x,b.y)&&ho(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&po(s,u,c,d,l,f,y.x,y.y)&&ho(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&po(s,u,c,d,l,f,b.x,b.y)&&ho(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function eo(e,t){let n=e;do{let r=n.prev,i=n.next.next;!go(r,i)&&_o(r,n,n.next,i)&&xo(r,i)&&xo(i,r)&&(t.push(r.i,n.i,i.i),To(n),To(n.next),n=e=i),n=n.next}while(n!==e);return Xa(n)}function to(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&mo(o,e)){let s=Co(o,e);o=Xa(o,o.next),s=Xa(s,s.next),Za(o,t,n,r,i,a,0),Za(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function no(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=Ya(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(uo(o))}i.sort(ro);for(let e=0;e<i.length;e++)n=io(i[e],n);return n}function ro(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function io(e,t){let n=ao(e,t);if(!n)return t;let r=Co(n,e);return Xa(r,r.next),Xa(n,n.next)}function ao(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(go(e,n))return n;do{if(go(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&fo(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);xo(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&oo(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function oo(e,t){return ho(e.prev,e,t.prev)<0&&ho(t.next,e,e.next)<0}function so(e,t,n,r){let i=e;do i.z===0&&(i.z=lo(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,co(i)}function co(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function lo(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function uo(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function fo(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function po(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&fo(e,t,n,r,i,a,o,s)}function mo(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!bo(e,t)&&(xo(e,t)&&xo(t,e)&&So(e,t)&&(ho(e.prev,e,t.prev)||ho(e,t.prev,t))||go(e,t)&&ho(e.prev,e,e.next)>0&&ho(t.prev,t,t.next)>0)}function ho(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function go(e,t){return e.x===t.x&&e.y===t.y}function _o(e,t,n,r){let i=yo(ho(e,t,n)),a=yo(ho(e,t,r)),o=yo(ho(n,r,e)),s=yo(ho(n,r,t));return!!(i!==a&&o!==s||i===0&&vo(e,n,t)||a===0&&vo(e,r,t)||o===0&&vo(n,e,r)||s===0&&vo(n,t,r))}function vo(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function yo(e){return e>0?1:e<0?-1:0}function bo(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&_o(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function xo(e,t){return ho(e.prev,e,e.next)<0?ho(e,t,e.next)>=0&&ho(e,e.prev,t)>=0:ho(e,t,e.prev)<0||ho(e,e.next,t)<0}function So(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Co(e,t){let n=Eo(e.i,e.x,e.y),r=Eo(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function wo(e,t,n,r){let i=Eo(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function To(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Eo(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Do(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Oo=class{static triangulate(e,t,n=2){return Ja(e,t,n)}},ko=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Ao(e),jo(n,e);let a=e.length;t.forEach(Ao);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,jo(n,t[e]);let o=Oo.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Ao(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function jo(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Mo=class e extends Dr{constructor(e=new qa([new z(.5,.5),new z(-.5,.5),new z(-.5,-.5),new z(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new hr(r,3)),this.setAttribute(`uv`,new hr(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?No:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new B,b=new B,x=new B}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!ko.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];ko.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));s<=10000000000000001e-36*c*c?(e.splice(r,1),n--):t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||R(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function ee(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new z(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new z(r/a,i/a)}let A=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),A[e]=ee(D[e],D[n],D[r]);let te=[],j,ne=A.concat();for(let e=0,t=E;e<t;e++){let t=w[e];j=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),j[e]=ee(t[e],t[r],t[i]);te.push(j),ne=ne.concat(j)}let M;if(p===0)M=ko.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],A[t],a);ce(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];j=te[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],j[e],a);ce(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}M=ko.triangulateShape(e,t)}let re=M.length,ie=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],ne[e],ie):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),ce(x.x,x.y,x.z)):ce(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],ne[t],ie):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),ce(x.x,x.y,x.z)):ce(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],A[e],r);ce(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];j=te[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],j[e],r);_?ce(i.x,i.y+g[s-1].y,g[s-1].x+n):ce(i.x,i.y,c+n)}}}ae(),oe();function ae(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<re;e++){let n=M[e];le(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<re;e++){let n=M[e];le(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<re;e++){let t=M[e];le(t[2],t[1],t[0])}for(let e=0;e<re;e++){let t=M[e];le(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function oe(){let e=r.length/3,t=0;se(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];se(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function se(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);ue(t+r+n,t+i+n,t+i+a,t+r+a)}}}function ce(e,t,n){a.push(e),a.push(t),a.push(n)}function le(e,t,i){N(e),N(t),N(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);de(o[0]),de(o[1]),de(o[2])}function ue(e,t,i,a){N(e),N(t),N(a),N(t),N(i),N(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);de(s[0]),de(s[1]),de(s[3]),de(s[1]),de(s[2]),de(s[3])}function N(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function de(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Po(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Wa[i.type]().fromJSON(i)),new e(r,t.options)}},No={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new z(a,o),new z(s,c),new z(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new z(o,1-c),new z(l,1-d),new z(f,1-m),new z(h,1-_)]:[new z(s,1-c),new z(u,1-d),new z(p,1-m),new z(g,1-_)]}};function Po(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var Fo=class e extends da{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Io=class e extends Dr{constructor(e=[new z(0,-.5),new z(.5,0),new z(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=yt(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new B,d=new z,f=new B,p=new B,m=new B,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:m.normalize(),s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new hr(a,3)),this.setAttribute(`uv`,new hr(o,2)),this.setAttribute(`normal`,new hr(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},Lo=class e extends Dr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new hr(p,3)),this.setAttribute(`normal`,new hr(m,3)),this.setAttribute(`uv`,new hr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Ro=class e extends Dr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new B,p=new z;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new hr(s,3)),this.setAttribute(`normal`,new hr(c,3)),this.setAttribute(`uv`,new hr(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},zo=class e extends Dr{constructor(e=new qa([new z(0,.5),new z(-.5,-.5),new z(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new hr(r,3)),this.setAttribute(`normal`,new hr(i,3)),this.setAttribute(`uv`,new hr(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;ko.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];ko.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=ko.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Bo(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function Bo(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var Vo=class e extends Dr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new B,d=new B,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new hr(p,3)),this.setAttribute(`normal`,new hr(m,3)),this.setAttribute(`uv`,new hr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Ho=class e extends Dr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new B,f=new B,p=new B;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new hr(c,3)),this.setAttribute(`normal`,new hr(l,3)),this.setAttribute(`uv`,new hr(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},Uo=class e extends Dr{constructor(e=new Ha(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new B,s=new B,c=new z,l=new B,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new hr(u,3)),this.setAttribute(`normal`,new hr(d,3)),this.setAttribute(`uv`,new hr(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new Wa[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Wo(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Ko(i))i.isRenderTargetTexture?(L(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Ko(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Go(e){let t={};for(let n=0;n<e.length;n++){let r=Wo(e[n]);for(let e in r)t[e]=r[e]}return t}function Ko(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function qo(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Jo(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Nt.workingColorSpace}var Yo={clone:Wo,merge:Go},Xo=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zo=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qo=class extends Lr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xo,this.fragmentShader=Zo,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wo(e.uniforms),this.uniformsGroups=qo(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new H().setHex(r.value);break;case`v2`:this.uniforms[n].value=new z().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new B().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Wt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new V().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Yt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},$o=class extends Qo{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},es=class extends Lr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new H(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new H(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ts=class extends es{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new z(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new H(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new H(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new H(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return dt(`MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".`),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){dt(`MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".`),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},ns=class extends Lr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Ye,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},rs=class extends Lr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function is(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function as(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var os=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},ss=class extends os{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ke,endingEnd:Ke}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case qe:i=e,o=2*t-n;break;case Je:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case qe:a=e,s=2*n-t;break;case Je:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},cs=class extends os{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},ls=class extends os{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},us=class extends os{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=ps(n,t,g,y,r);i[p]=ds(x,o,_,b,m)}return i}};function ds(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function fs(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function ps(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=ds(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=fs(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var ms=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=is(t,this.TimeBufferType),this.values=is(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:is(e.times,Array),values:is(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),as(e.settings)&&(n.settings={inTangents:is(e.settings.inTangents,Array),outTangents:is(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ls(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new cs(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ss(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new us(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case He:t=this.InterpolantFactoryMethodDiscrete;break;case Ue:t=this.InterpolantFactoryMethodLinear;break;case We:t=this.InterpolantFactoryMethodSmooth;break;case Ge:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return L(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return He;case this.InterpolantFactoryMethodLinear:return Ue;case this.InterpolantFactoryMethodSmooth:return We;case this.InterpolantFactoryMethodBezier:return Ge}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;as(this.settings)&&(hs(this.settings.inTangents,e),hs(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;as(this.settings)&&(gs(this.settings.inTangents,e),gs(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(R(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(R(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){R(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){R(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&at(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){R(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===We,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,as(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function hs(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function gs(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}ms.prototype.ValueTypeName=``,ms.prototype.TimeBufferType=Float32Array,ms.prototype.ValueBufferType=Float32Array,ms.prototype.DefaultInterpolation=Ue;var _s=class extends ms{constructor(e,t,n){super(e,t,n)}};_s.prototype.ValueTypeName=`bool`,_s.prototype.ValueBufferType=Array,_s.prototype.DefaultInterpolation=He,_s.prototype.InterpolantFactoryMethodLinear=void 0,_s.prototype.InterpolantFactoryMethodSmooth=void 0;var vs=class extends ms{constructor(e,t,n,r){super(e,t,n,r)}};vs.prototype.ValueTypeName=`color`;var ys=class extends ms{constructor(e,t,n,r){super(e,t,n,r)}};ys.prototype.ValueTypeName=`number`;var bs=class extends os{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Et.slerpFlat(i,0,a,c-o,a,c,s);return i}},xs=class extends ms{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new bs(this.times,this.values,this.getValueSize(),e)}};xs.prototype.ValueTypeName=`quaternion`,xs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ss=class extends ms{constructor(e,t,n){super(e,t,n)}};Ss.prototype.ValueTypeName=`string`,Ss.prototype.ValueBufferType=Array,Ss.prototype.DefaultInterpolation=He,Ss.prototype.InterpolantFactoryMethodLinear=void 0,Ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Cs=class extends ms{constructor(e,t,n,r){super(e,t,n,r)}};Cs.prototype.ValueTypeName=`vector`;var ws=class extends Cn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new H(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ts=class extends ws{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new H(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Es=new Yt,Ds=new B,Os=new B,ks=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new z(512,512),this.mapType=b,this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mi,this._frameExtents=new z(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ds.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ds),Os.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Os),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Es.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Es,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Es)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},As=new B,js=new Et,Ms=new B,Ns=class extends Cn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=rt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(As,js,Ms),Ms.x===1&&Ms.y===1&&Ms.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(As,js,Ms.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(As,js,Ms),Ms.x===1&&Ms.y===1&&Ms.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(As,js,Ms.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ps=new B,Fs=new z,Is=new z,Ls=class extends Ns{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=_t*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(gt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _t*2*Math.atan(Math.tan(gt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ps.x,Ps.y).multiplyScalar(-e/Ps.z),Ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ps.x,Ps.y).multiplyScalar(-e/Ps.z)}getViewSize(e,t){return this.getViewBounds(e,Fs,Is),t.subVectors(Is,Fs)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(gt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Rs=class extends ks{constructor(){super(new Ls(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=_t*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},zs=class extends ws{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.target=new Cn,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new Rs}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Bs=class extends ks{constructor(){super(new Ls(90,1,.5,500)),this.isPointLightShadow=!0}},Vs=class extends ws{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Bs}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Hs=class extends Ns{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Us=class extends ks{constructor(){super(new Hs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ws=class extends ws{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.target=new Cn,this.shadow=new Us}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Gs=-90,Ks=1,qs=class extends Cn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ls(Gs,Ks,e,t);r.layers=this.layers,this.add(r);let i=new Ls(Gs,Ks,e,t);i.layers=this.layers,this.add(i);let a=new Ls(Gs,Ks,e,t);a.layers=this.layers,this.add(a);let o=new Ls(Gs,Ks,e,t);o.layers=this.layers,this.add(o);let s=new Ls(Gs,Ks,e,t);s.layers=this.layers,this.add(s);let c=new Ls(Gs,Ks,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Js=class extends Ls{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Ys=`\\[\\]\\.:\\/`,Xs=RegExp(`[\\[\\]\\.:\\/]`,`g`),Zs=`[^\\[\\]\\.:\\/]`,Qs=`[^`+Ys.replace(`\\.`,``)+`]`,$s=`((?:WC+[\\/:])*)`.replace(`WC`,Zs),ec=`(WCOD+)?`.replace(`WCOD`,Qs),tc=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Zs),nc=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Zs),rc=RegExp(`^`+$s+ec+tc+nc+`$`),ic=[`material`,`materials`,`bones`,`map`],ac=class{constructor(e,t,n){let r=n||oc.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},oc=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Xs,``)}static parseTrackName(e){let t=rc.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);ic.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){L(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){R(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){R(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){R(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){R(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){R(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){R(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){R(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;R(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){R(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){R(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};oc.Composite=ac,oc.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},oc.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},oc.prototype.GetterByBindingType=[oc.prototype._getValue_direct,oc.prototype._getValue_array,oc.prototype._getValue_arrayElement,oc.prototype._getValue_toArray],oc.prototype.SetterByBindingTypeAndVersioning=[[oc.prototype._setValue_direct,oc.prototype._setValue_direct_setNeedsUpdate,oc.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[oc.prototype._setValue_array,oc.prototype._setValue_array_setNeedsUpdate,oc.prototype._setValue_array_setMatrixWorldNeedsUpdate],[oc.prototype._setValue_arrayElement,oc.prototype._setValue_arrayElement_setNeedsUpdate,oc.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[oc.prototype._setValue_fromArray,oc.prototype._setValue_fromArray_setNeedsUpdate,oc.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var sc=new Yt,cc=class{constructor(e,t,n=0,r=1/0){this.ray=new ii(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new sn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):R(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return sc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sc),this}intersectObject(e,t=!0,n=[]){return uc(e,this,n,t),n.sort(lc),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)uc(e[r],this,n,t);return n.sort(lc),n}};function lc(e,t){return e.distance-t.distance}function uc(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)uc(r[e],t,n,!0)}}s=class{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}},s.prototype.isMatrix2=!0;function dc(e,t,n,r){let i=fc(r);switch(n){case j:return e*t;case ae:return e*t/i.components*i.byteLength;case oe:return e*t/i.components*i.byteLength;case se:return e*t*2/i.components*i.byteLength;case ce:return e*t*2/i.components*i.byteLength;case ne:return e*t*3/i.components*i.byteLength;case M:return e*t*4/i.components*i.byteLength;case le:return e*t*4/i.components*i.byteLength;case ue:case N:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case de:case fe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case me:case ge:return Math.max(e,16)*Math.max(t,8)/4;case pe:case he:return Math.max(e,8)*Math.max(t,8)/2;case _e:case ve:case be:case xe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ye:case Se:case Ce:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case we:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Te:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Ee:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case De:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Oe:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ke:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Ae:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case je:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Me:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ne:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Pe:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Fe:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case P:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ie:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Le:case Re:case F:return Math.ceil(e/4)*Math.ceil(t/4)*16;case ze:case I:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Be:case Ve:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function fc(e){switch(e){case b:case x:return{byteLength:1,components:1};case C:case S:case D:return{byteLength:2,components:1};case O:case k:return{byteLength:2,components:4};case T:case w:case E:return{byteLength:4,components:1};case A:case te:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?L(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function pc(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function mc(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var hc={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},W={common:{diffuse:{value:new H(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new V},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new V}},envmap:{envMap:{value:null},envMapRotation:{value:new V},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new V}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new V}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new V},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new V},normalScale:{value:new z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new V},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new V}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new V}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new V}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new H(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new H(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0},uvTransform:{value:new V}},sprite:{diffuse:{value:new H(16777215)},opacity:{value:1},center:{value:new z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new V},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0}}},gc={basic:{uniforms:Go([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.fog]),vertexShader:hc.meshbasic_vert,fragmentShader:hc.meshbasic_frag},lambert:{uniforms:Go([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.fog,W.lights,{emissive:{value:new H(0)},envMapIntensity:{value:1}}]),vertexShader:hc.meshlambert_vert,fragmentShader:hc.meshlambert_frag},phong:{uniforms:Go([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.fog,W.lights,{emissive:{value:new H(0)},specular:{value:new H(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:hc.meshphong_vert,fragmentShader:hc.meshphong_frag},standard:{uniforms:Go([W.common,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.roughnessmap,W.metalnessmap,W.fog,W.lights,{emissive:{value:new H(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:hc.meshphysical_vert,fragmentShader:hc.meshphysical_frag},toon:{uniforms:Go([W.common,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.gradientmap,W.fog,W.lights,{emissive:{value:new H(0)}}]),vertexShader:hc.meshtoon_vert,fragmentShader:hc.meshtoon_frag},matcap:{uniforms:Go([W.common,W.bumpmap,W.normalmap,W.displacementmap,W.fog,{matcap:{value:null}}]),vertexShader:hc.meshmatcap_vert,fragmentShader:hc.meshmatcap_frag},points:{uniforms:Go([W.points,W.fog]),vertexShader:hc.points_vert,fragmentShader:hc.points_frag},dashed:{uniforms:Go([W.common,W.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:hc.linedashed_vert,fragmentShader:hc.linedashed_frag},depth:{uniforms:Go([W.common,W.displacementmap]),vertexShader:hc.depth_vert,fragmentShader:hc.depth_frag},normal:{uniforms:Go([W.common,W.bumpmap,W.normalmap,W.displacementmap,{opacity:{value:1}}]),vertexShader:hc.meshnormal_vert,fragmentShader:hc.meshnormal_frag},sprite:{uniforms:Go([W.sprite,W.fog]),vertexShader:hc.sprite_vert,fragmentShader:hc.sprite_frag},background:{uniforms:{uvTransform:{value:new V},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:hc.background_vert,fragmentShader:hc.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new V}},vertexShader:hc.backgroundCube_vert,fragmentShader:hc.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:hc.cube_vert,fragmentShader:hc.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:hc.equirect_vert,fragmentShader:hc.equirect_frag},distance:{uniforms:Go([W.common,W.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:hc.distance_vert,fragmentShader:hc.distance_frag},shadow:{uniforms:Go([W.lights,W.fog,{color:{value:new H(0)},opacity:{value:1}}]),vertexShader:hc.shadow_vert,fragmentShader:hc.shadow_frag}};gc.physical={uniforms:Go([gc.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new V},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new V},clearcoatNormalScale:{value:new z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new V},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new V},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new V},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new V},sheen:{value:0},sheenColor:{value:new H(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new V},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new V},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new V},transmissionSamplerSize:{value:new z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new V},attenuationDistance:{value:0},attenuationColor:{value:new H(0)},specularColor:{value:new H(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new V},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new V},anisotropyVector:{value:new z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new V}}]),vertexShader:hc.meshphysical_vert,fragmentShader:hc.meshphysical_frag};var _c={r:0,b:0,g:0},vc=new Yt,yc=new V;yc.set(-1,0,0,0,1,0,0,0,1);function bc(e,t,n,r,i,a){let o=new H(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new U(new oa(1,1,1),new Qo({name:`BackgroundCubeMaterial`,uniforms:Wo(gc.backgroundCube.uniforms),vertexShader:gc.backgroundCube.vertexShader,fragmentShader:gc.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(vc.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(yc),l.material.toneMapped=Nt.getTransfer(i.colorSpace)!==$e,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new U(new Lo(2,2),new Qo({name:`BackgroundMaterial`,uniforms:Wo(gc.background.uniforms),vertexShader:gc.background.vertexShader,fragmentShader:gc.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Nt.getTransfer(i.colorSpace)!==$e,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(_c,Jo(e)),n.buffers.color.setClear(_c.r,_c.g,_c.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function xc(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Sc(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Cc(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(L(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&L(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&L(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function wc(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Fr,s=new V,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Tc=class extends Kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ta(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new oa(5,5,5),i=new Qo({name:`CubemapFromEquirect`,uniforms:Wo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new U(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=_),new qs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},Ec=256,Dc=3,Oc=20,kc=256,Ac=16,jc=3,Mc=new B,Nc=new H,Pc=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new qs(1,10,null),this._boxMesh=new U(new oa(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Mc}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(Nc));let h=new qs(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Ec,St(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?Ec:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Fc(e,!1,!1),n=Math.log2(e)-Dc;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Fc(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vc()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Bc()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Lc(),this._integrationMaterial=Rc());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/Ac);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-jc)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(kc*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=zc());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function Fc(e,t,n){return new Tc(e,{minFilter:y,generateMipmaps:t,type:D,colorSpace:Ze,depthBuffer:n})}function Ic(e,t,n){return new Qo({name:e,uniforms:t,vertexShader:hc.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function Lc(){return Ic(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${kc}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Rc(){return Ic(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ac}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function zc(){return Ic(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Oc}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Bc(){return Ic(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Vc(){return Ic(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Hc(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Tc(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Pc(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Pc(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Uc(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&dt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Wc(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?mr:pr)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function Gc(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Kc(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:R(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function qc(e,t,n){let r=new WeakMap,i=new Wt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new qt(h,p,m,u);g.type=E,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new z(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Jc(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Yc={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Xc(e,t,n,r,i,a){let o=new Kt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new Dr;u.setAttribute(`position`,new hr([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new hr([0,2,0,0,2,0],2));let d=new $o({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new U(u,d),p=new Hs(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new Kt(t,n,{type:D,depthBuffer:!1,stencilBuffer:!1}),c=new Kt(t,n,{type:D,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&y.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new ra(t,n),a===!0&&(l.format=ie,l.type=ee)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<y.length;e++){let i=y[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(g||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},Nt.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=Yc[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(f,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var Zc=new Ut,Qc=new ra(1,1),$c=new ia(1),el=new qt,tl=new Jt,nl=new ta,rl=[],il=[],al=new Float32Array(16),ol=new Float32Array(9),sl=new Float32Array(4);function cl(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=rl[i];if(a===void 0&&(a=new Float32Array(i),rl[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function ll(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function ul(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function dl(e,t){let n=il[t];n===void 0&&(n=new Int32Array(t),il[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function fl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function pl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ll(n,t))return;e.uniform2fv(this.addr,t),ul(n,t)}}function ml(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ll(n,t))return;e.uniform3fv(this.addr,t),ul(n,t)}}function hl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ll(n,t))return;e.uniform4fv(this.addr,t),ul(n,t)}}function gl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ll(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),ul(n,t)}else{if(ll(n,r))return;sl.set(r),e.uniformMatrix2fv(this.addr,!1,sl),ul(n,r)}}function _l(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ll(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),ul(n,t)}else{if(ll(n,r))return;ol.set(r),e.uniformMatrix3fv(this.addr,!1,ol),ul(n,r)}}function vl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ll(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),ul(n,t)}else{if(ll(n,r))return;al.set(r),e.uniformMatrix4fv(this.addr,!1,al),ul(n,r)}}function yl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function bl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ll(n,t))return;e.uniform2iv(this.addr,t),ul(n,t)}}function xl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ll(n,t))return;e.uniform3iv(this.addr,t),ul(n,t)}}function Sl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ll(n,t))return;e.uniform4iv(this.addr,t),ul(n,t)}}function Cl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function wl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ll(n,t))return;e.uniform2uiv(this.addr,t),ul(n,t)}}function Tl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ll(n,t))return;e.uniform3uiv(this.addr,t),ul(n,t)}}function El(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ll(n,t))return;e.uniform4uiv(this.addr,t),ul(n,t)}}function Dl(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function Ol(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?Dl(Qc):Zc,n.setTexture2D(t||a,i)}function kl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||tl,i)}function Al(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?Dl($c):nl,n.setTextureCube(t||a,i)}function jl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||el,i)}function Ml(e){switch(e){case 5126:return fl;case 35664:return pl;case 35665:return ml;case 35666:return hl;case 35674:return gl;case 35675:return _l;case 35676:return vl;case 5124:case 35670:return yl;case 35667:case 35671:return bl;case 35668:case 35672:return xl;case 35669:case 35673:return Sl;case 5125:return Cl;case 36294:return wl;case 36295:return Tl;case 36296:return El;case 35678:case 36198:case 36298:case 36306:case 35682:return Ol;case 35679:case 36299:case 36307:return kl;case 35680:case 36300:case 36308:case 36293:return Al;case 36289:case 36303:case 36311:case 36292:return jl}}function Nl(e,t){e.uniform1fv(this.addr,t)}function Pl(e,t){let n=cl(t,this.size,2);e.uniform2fv(this.addr,n)}function Fl(e,t){let n=cl(t,this.size,3);e.uniform3fv(this.addr,n)}function Il(e,t){let n=cl(t,this.size,4);e.uniform4fv(this.addr,n)}function Ll(e,t){let n=cl(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Rl(e,t){let n=cl(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function zl(e,t){let n=cl(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Bl(e,t){e.uniform1iv(this.addr,t)}function Vl(e,t){e.uniform2iv(this.addr,t)}function Hl(e,t){e.uniform3iv(this.addr,t)}function Ul(e,t){e.uniform4iv(this.addr,t)}function Wl(e,t){e.uniform1uiv(this.addr,t)}function Gl(e,t){e.uniform2uiv(this.addr,t)}function Kl(e,t){e.uniform3uiv(this.addr,t)}function ql(e,t){e.uniform4uiv(this.addr,t)}function Jl(e,t,n){let r=this.cache,i=t.length,a=dl(n,i);ll(r,a)||(e.uniform1iv(this.addr,a),ul(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Dl(Qc):Zc;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Yl(e,t,n){let r=this.cache,i=t.length,a=dl(n,i);ll(r,a)||(e.uniform1iv(this.addr,a),ul(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||tl,a[e])}function Xl(e,t,n){let r=this.cache,i=t.length,a=dl(n,i);ll(r,a)||(e.uniform1iv(this.addr,a),ul(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?Dl($c):nl;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function Zl(e,t,n){let r=this.cache,i=t.length,a=dl(n,i);ll(r,a)||(e.uniform1iv(this.addr,a),ul(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||el,a[e])}function Ql(e){switch(e){case 5126:return Nl;case 35664:return Pl;case 35665:return Fl;case 35666:return Il;case 35674:return Ll;case 35675:return Rl;case 35676:return zl;case 5124:case 35670:return Bl;case 35667:case 35671:return Vl;case 35668:case 35672:return Hl;case 35669:case 35673:return Ul;case 5125:return Wl;case 36294:return Gl;case 36295:return Kl;case 36296:return ql;case 35678:case 36198:case 36298:case 36306:case 35682:return Jl;case 35679:case 36299:case 36307:return Yl;case 35680:case 36300:case 36308:case 36293:return Xl;case 36289:case 36303:case 36311:case 36292:return Zl}}var $l=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ml(t.type)}},eu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ql(t.type)}},tu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},nu=/(\w+)(\])?(\[|\.)?/g;function ru(e,t){e.seq.push(t),e.map[t.id]=t}function iu(e,t,n){let r=e.name,i=r.length;for(nu.lastIndex=0;;){let a=nu.exec(r),o=nu.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){ru(n,l===void 0?new $l(s,e,t):new eu(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new tu(s),ru(n,e)),n=e}}}var au=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);iu(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function ou(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var su=37297,cu=0;function lu(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var uu=new V;function du(e){Nt._getMatrix(uu,Nt.workingColorSpace,e);let t=`mat3( ${uu.elements.map(e=>e.toFixed(4))} )`;switch(Nt.getTransfer(e)){case Qe:return[t,`LinearTransferOETF`];case $e:return[t,`sRGBTransferOETF`];default:return L(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function fu(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+lu(e.getShaderSource(t),r)}return i}function pu(e,t){let n=du(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var mu={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function hu(e,t){let n=mu[t];return n===void 0?(L(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var gu=new B;function _u(){return Nt.getLuminanceCoefficients(gu),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${gu.x.toFixed(4)}, ${gu.y.toFixed(4)}, ${gu.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function vu(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(xu).join(`
`)}function yu(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function bu(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function xu(e){return e!==``}function Su(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Cu(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var wu=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tu(e){return e.replace(wu,Eu)}function Eu(e,t){let n=hc[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return Tu(n)}var Du=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ou(e){return e.replace(Du,ku)}function ku(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Au(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var ju={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Mu(e){return ju[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Nu={302:`ENVMAP_MODE_REFRACTION`};function Pu(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Nu[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Fu={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Iu(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Fu[e.combine]||`ENVMAP_BLENDING_NONE`}function Lu(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Mu(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=Pu(n),d=Iu(n),f=vu(n),p=yu(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(xu).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(xu).join(`
`),g.length>0&&(g+=`
`)):(h=[Au(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(xu).join(`
`),g=[Au(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:hc.tonemapping_pars_fragment,n.toneMapping===0?``:hu(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,hc.colorspace_pars_fragment,pu(`linearToOutputTexel`,n.outputColorSpace),_u(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(xu).join(`
`)),o=Tu(o),o=Su(o,n),o=Cu(o,n),s=Tu(s),s=Su(s,n),s=Cu(s,n),o=Ou(o),s=Ou(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=ou(i,i.VERTEX_SHADER,v),x=ou(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=fu(i,b,`vertex`),n=fu(i,x,`fragment`);R(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):L(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new au(i,m),w=bu(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,su)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=cu++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var Ru=0,zu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Bu(e),t.set(e,n)),n}},Bu=class{constructor(e){this.id=Ru++,this.code=e,this.usedTimes=0}};function Vu(e){return e===1030||e===37490||e===36285}function Hu(e,t,n,r,i,a){let o=new sn,s=new zu,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&L(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=gc[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let ee=e.getRenderTarget(),A=e.state.buffers.depth.getReversed(),te=m.isInstancedMesh===!0,j=m.isBatchedMesh===!0,ne=!!i.map,M=!!i.matcap,re=!!b,ie=re&&b.isPMREMTexture===!0,ae=!!i.aoMap,oe=!!i.lightMap,se=!!i.bumpMap&&i.wireframe===!1,ce=!!i.normalMap,le=!!i.displacementMap,ue=!!i.emissiveMap,N=!!i.metalnessMap,de=!!i.roughnessMap,fe=i.anisotropy>0,pe=i.clearcoat>0,me=i.diffuseRoughness>0,he=i.dispersion>0,ge=i.retroreflectivity>0,_e=i.iridescence>0,ve=i.sheen>0,ye=i.transmission>0,be=fe&&!!i.anisotropyMap,xe=pe&&!!i.clearcoatMap,Se=pe&&!!i.clearcoatNormalMap,Ce=pe&&!!i.clearcoatRoughnessMap,we=me&&!!i.diffuseRoughnessMap,Te=_e&&!!i.iridescenceMap,Ee=_e&&!!i.iridescenceThicknessMap,De=ve&&!!i.sheenColorMap,Oe=ve&&!!i.sheenRoughnessMap,ke=!!i.specularMap,Ae=!!i.specularColorMap,je=!!i.specularIntensityMap,Me=ye&&!!i.transmissionMap,Ne=ye&&!!i.thicknessMap,Pe=!!i.gradientMap,Fe=!!i.alphaMap,P=i.alphaTest>0,Ie=!!i.alphaHash,Le=!!i.extensions,Re=0;i.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Re=e.toneMapping);let F=ie?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,ze={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:j,batchingColor:j&&m._colorsTexture!==null,instancing:te,instancingColor:te&&m.instanceColor!==null,instancingMorph:te&&m.morphTexture!==null,outputColorSpace:ee===null?e.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Nt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ne,matcap:M,envMap:re,envMapMode:re&&b.mapping,envMapPMREM:ie,envMapMaxLod:ie?F.length-1:null,envMapSize:ie?F[0].width:null,aoMap:ae,lightMap:oe,bumpMap:se,normalMap:ce,displacementMap:le,emissiveMap:ue,normalMapObjectSpace:ce&&i.normalMapType===1,normalMapTangentSpace:ce&&i.normalMapType===0,packedNormalMap:ce&&i.normalMapType===0&&Vu(i.normalMap.format),metalnessMap:N,roughnessMap:de,anisotropy:fe,anisotropyMap:be,clearcoat:pe,clearcoatMap:xe,clearcoatNormalMap:Se,clearcoatRoughnessMap:Ce,diffuseRoughness:me,diffuseRoughnessMap:we,dispersion:he,retroreflection:ge,iridescence:_e,iridescenceMap:Te,iridescenceThicknessMap:Ee,sheen:ve,sheenColorMap:De,sheenRoughnessMap:Oe,specularMap:ke,specularColorMap:Ae,specularIntensityMap:je,transmission:ye,transmissionMap:Me,thicknessMap:Ne,gradientMap:Pe,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Fe,alphaTest:P,alphaHash:Ie,combine:i.combine,mapUv:ne&&p(i.map.channel),aoMapUv:ae&&p(i.aoMap.channel),lightMapUv:oe&&p(i.lightMap.channel),bumpMapUv:se&&p(i.bumpMap.channel),normalMapUv:ce&&p(i.normalMap.channel),displacementMapUv:le&&p(i.displacementMap.channel),emissiveMapUv:ue&&p(i.emissiveMap.channel),metalnessMapUv:N&&p(i.metalnessMap.channel),roughnessMapUv:de&&p(i.roughnessMap.channel),anisotropyMapUv:be&&p(i.anisotropyMap.channel),clearcoatMapUv:xe&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:Se&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:we&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:Te&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:De&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&p(i.sheenRoughnessMap.channel),specularMapUv:ke&&p(i.specularMap.channel),specularColorMapUv:Ae&&p(i.specularColorMap.channel),specularIntensityMapUv:je&&p(i.specularIntensityMap.channel),transmissionMapUv:Me&&p(i.transmissionMap.channel),thicknessMapUv:Ne&&p(i.thicknessMap.channel),alphaMapUv:Fe&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(ce||fe),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(ne||Fe),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&ce===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:A,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Re,decodeVideoTexture:ne&&i.map.isVideoTexture===!0&&Nt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ue&&i.emissiveMap.isVideoTexture===!0&&Nt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Le&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Le&&i.extensions.multiDraw===!0||j)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=gc[t];n=Yo.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new Lu(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function Uu(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Wu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Gu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Ku(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Wu),r.length>1&&r.sort(t||Gu),i.length>1&&i.sort(t||Gu)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function qu(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Ku,e.set(t,[i])):n>=r.length?(i=new Ku,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Ju(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new B,color:new H};break;case`SpotLight`:n={position:new B,direction:new B,color:new H,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new B,color:new H,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new B,skyColor:new H,groundColor:new H};break;case`RectAreaLight`:n={color:new H,position:new B,halfWidth:new B,halfHeight:new B}}return e[t.id]=n,n}}}function Yu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Xu=0;function Zu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Qu(e){let t=new Ju,n=Yu(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new B);let i=new B,a=new Yt,o=new Yt;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Zu);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=W.LTC_FLOAT_1,r.rectAreaLTC2=W.LTC_FLOAT_2):(r.rectAreaLTC1=W.LTC_HALF_1,r.rectAreaLTC2=W.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Xu++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function $u(e){let t=new Qu(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function ed(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new $u(e),t.set(n,[a])):r>=i.length?(a=new $u(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var td=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nd=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,rd=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],id=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],ad=new Yt,od=new B,sd=new B;function cd(e,t,n){let r=new Mi,i=new z,a=new z,o=new Wt,s=new ns,c=new rs,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Qo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new z},radius:{value:4}},vertexShader:td,fragmentShader:nd}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let h=new Dr;h.setAttribute(`position`,new fr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new U(h,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let y=this.type;this.render=function(t,n,s){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||t.length===0)return;this.type===2&&(L(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=y!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){L(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let h=d.getFrameExtents();i.multiply(h),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/h.x),i.x=a.x*h.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/h.y),i.y=a.y*h.y,d.mapSize.y=a.y));let g=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=g,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){L(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new Kt(i.x,i.y,{format:se,type:D,minFilter:_,magFilter:_,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new ra(i.x,i.y,E),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=re,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=m,d.map.depthTexture.magFilter=m}else l.isPointLight?(d.map=new Tc(i.x),d.map.depthTexture=new ia(i.x,T)):(d.map=new Kt(i.x,i.y),d.map.depthTexture=new ra(i.x,i.y,T)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=re,this.type===1?(d.map.depthTexture.compareFunction=g?518:515,d.map.depthTexture.minFilter=_,d.map.depthTexture.magFilter=_):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=m,d.map.depthTexture.magFilter=m);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let v=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);let y=d.camera.layers.mask&4294967294?d.camera.layers:s.layers;for(let t=0;t<v;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),od.setFromMatrixPosition(l.matrixWorld),e.position.copy(od),sd.copy(e.position),sd.add(rd[t]),e.up.copy(id[t]),e.lookAt(sd),e.updateMatrixWorld(),n.makeTranslation(-od.x,-od.y,-od.z),ad.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(ad,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),S(n,s,i,l,y,this.type)}d.isPointLightShadow!==!0&&this.type===3&&b(d,s),d.needsUpdate=!1}y=this.type,v.needsUpdate=!1,e.setRenderTarget(c,l,d)};function b(n,r){let a=t.update(g);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new Kt(i.x,i.y,{format:se,type:D}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,g,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,g,null)}function x(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,C)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function S(n,i,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),s=n.material;if(Array.isArray(s)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=x(n,d,o,c);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(s.visible){let t=x(n,s,o,c);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)S(l[e],i,a,o,s,c)}function C(e){e.target.removeEventListener(`dispose`,C);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function ld(e,t){function n(){let t=!1,n=new Wt,r=null,i=new Wt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?N(e.DEPTH_TEST):de(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=pt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?N(e.STENCIL_TEST):de(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new H(0,0,0),T=0,E=!1,D=null,O=null,k=null,ee=null,A=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,ne=0,M=e.getParameter(e.VERSION);M.indexOf(`WebGL`)===-1?M.indexOf(`OpenGL ES`)!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(M)[1]),j=ne>=2):(ne=parseFloat(/^WebGL (\d)/.exec(M)[1]),j=ne>=1);let re=null,ie={},ae=e.getParameter(e.SCISSOR_BOX),oe=e.getParameter(e.VIEWPORT),se=new Wt().fromArray(ae),ce=new Wt().fromArray(oe);function le(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ue={};ue[e.TEXTURE_2D]=le(e.TEXTURE_2D,e.TEXTURE_2D,1),ue[e.TEXTURE_CUBE_MAP]=le(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[e.TEXTURE_2D_ARRAY]=le(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ue[e.TEXTURE_3D]=le(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),N(e.DEPTH_TEST),o.setFunc(3),ye(!1),be(1),N(e.CULL_FACE),_e(0);function N(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function de(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function fe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function pe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function me(t){return h!==t&&(e.useProgram(t),h=t,!0)}let he={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};he[103]=e.MIN,he[104]=e.MAX;let ge={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function _e(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(de(e.BLEND),g=!1);else if(g===!1&&(N(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:R(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:R(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:R(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:R(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a=a||n,o=o||r,s=s||i,(n!==v||a!==x)&&(e.blendEquationSeparate(he[n],he[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ge[r],ge[i],ge[o],ge[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ve(t,n){t.side===2?de(e.CULL_FACE):N(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ye(r),t.blending===1&&t.transparent===!1?_e(0):_e(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Se(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?N(e.SAMPLE_ALPHA_TO_COVERAGE):de(e.SAMPLE_ALPHA_TO_COVERAGE)}function ye(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function be(t){t===0?de(e.CULL_FACE):(N(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function xe(t){t!==k&&(j&&e.lineWidth(t),k=t)}function Se(t,n,r){t?(N(e.POLYGON_OFFSET_FILL),(ee!==n||A!==r)&&(ee=n,A=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):de(e.POLYGON_OFFSET_FILL)}function Ce(t){t?N(e.SCISSOR_TEST):de(e.SCISSOR_TEST)}function we(t){t===void 0&&(t=e.TEXTURE0+te-1),re!==t&&(e.activeTexture(t),re=t)}function Te(t,n,r){r===void 0&&(r=re===null?e.TEXTURE0+te-1:re);let i=ie[r];i===void 0&&(i={type:void 0,texture:void 0},ie[r]=i),(i.type!==t||i.texture!==n)&&(re!==r&&(e.activeTexture(r),re=r),e.bindTexture(t,n||ue[t]),i.type=t,i.texture=n)}function Ee(){let t=ie[re];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function De(){try{e.compressedTexImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Oe(){try{e.compressedTexImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function ke(){try{e.texSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ae(){try{e.texSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ne(){try{e.texStorage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Pe(){try{e.texStorage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Fe(){try{e.texImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function P(){try{e.texImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ie(t){return d[t]===void 0?e.getParameter(t):d[t]}function Le(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Re(t){se.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),se.copy(t))}function F(t){ce.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ce.copy(t))}function ze(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function I(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function Be(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},re=null,ie={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new H(0,0,0),T=0,E=!1,D=null,O=null,k=null,ee=null,A=null,se.set(0,0,e.canvas.width,e.canvas.height),ce.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:N,disable:de,bindFramebuffer:fe,drawBuffers:pe,useProgram:me,setBlending:_e,setMaterial:ve,setFlipSided:ye,setCullFace:be,setLineWidth:xe,setPolygonOffset:Se,setScissorTest:Ce,activeTexture:we,bindTexture:Te,unbindTexture:Ee,compressedTexImage2D:De,compressedTexImage3D:Oe,texImage2D:Fe,texImage3D:P,pixelStorei:Le,getParameter:Ie,updateUBOMapping:ze,uniformBlockBinding:I,texStorage2D:Ne,texStorage3D:Pe,texSubImage2D:ke,texSubImage3D:Ae,compressedTexSubImage2D:je,compressedTexSubImage3D:Me,scissor:Re,viewport:F,reset:Be}}function ud(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new z,u=new WeakMap,b=new Set,x,S=new WeakMap,C=new Set,w=new FinalizationRegistry(e=>C.delete(e)),T=!1;try{T=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function E(e,t){return T?new OffscreenCanvas(e,t):ot(`canvas`)}function D(e,t,n){let r=1,i=Be(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=E(n,a));let o=t?E(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),L(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&L(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function O(e){return e.generateMipmaps}function k(t){e.generateMipmap(t)}function ee(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function A(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];L(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||L(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Qe:Nt.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function te(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,L(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function j(e,t){return O(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ne(e){let t=new WeakRef(e);r.get(e).__ref=t,C.add(t),w.register(e,t,t)}function M(e){let t=r.get(e).__ref;t!==void 0&&(C.delete(t),w.unregister(t))}function re(e){oe(e.target)}function ae(e){se(e.target)}function oe(e){e.removeEventListener(`dispose`,re),M(e),le(e),e.isVideoTexture&&u.delete(e),e.isHTMLTexture&&b.delete(e)}function se(e){e.removeEventListener(`dispose`,ae),M(e),N(e)}function ce(){for(let e of C){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?se(t):oe(t))}C.clear(),b.clear()}function le(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=S.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&ue(e),Object.keys(i).length===0&&S.delete(n)}r.remove(e)}function ue(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=S.get(i);delete a[n.__cacheKey],o.memory.textures--}function N(t){let n=r.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let i=t.depthTexture;if(i&&i.renderTarget===t&&oe(i),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let a=t.textures;for(let t=0,n=a.length;t<n;t++){let n=r.get(a[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(a[t])}r.remove(t)}let de=0;function fe(){de=0}function pe(){return de}function me(e){de=e}function he(){let e=de;return e>=i.maxTextures&&L(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),de+=1,e}function ge(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function _e(t,i){let a=r.get(t);if(t.isVideoTexture&&ze(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)L(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)L(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Oe(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function ve(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?Oe(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function ye(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?Oe(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function be(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?ke(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let xe={[d]:e.REPEAT,[f]:e.CLAMP_TO_EDGE,[p]:e.MIRRORED_REPEAT},Se={[m]:e.NEAREST,[h]:e.NEAREST_MIPMAP_NEAREST,[g]:e.NEAREST_MIPMAP_LINEAR,[_]:e.LINEAR,[v]:e.LINEAR_MIPMAP_NEAREST,[y]:e.LINEAR_MIPMAP_LINEAR},Ce={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function we(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&L(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,xe[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,xe[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,xe[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,Se[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,Se[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,Ce[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function Te(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,re),ne(n));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let s=ge(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&ue(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function Ee(e,t,n){return Math.floor(Math.floor(e/n)/t)}function De(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=Ee(n.start,r.width,4),c=Ee(t.start,r.width,4);n.start<=i+1&&a===c&&Ee(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function Oe(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=Te(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Nt.getPrimaries(Nt.workingColorSpace),r=o.colorSpace===``?null:Nt.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=D(o.image,!1,i.maxTextureSize);t=I(o,t);let r=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=A(o.internalFormat,r,f,o.normalized,o.colorSpace,o.isVideoTexture);we(c,o);let m,h=o.mipmaps,g=o.isVideoTexture!==!0,_=d.__version===void 0||l===!0,v=u.dataReady,y=j(o,t);if(o.isDepthTexture)p=te(o.format===ie,o.type),_&&(g?n.texStorage2D(e.TEXTURE_2D,1,p,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,null));else if(o.isDataTexture){if(h.length>0){g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data);o.generateMipmaps=!1}else g?(_&&n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height),v&&De(o,t,r,f)):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){g&&_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,h[0].width,h[0].height,t.depth);for(let i=0,a=h.length;i<a;i++)if(m=h[i],o.format!==1023){if(r!==null){if(g){if(v){if(o.layerUpdates.size>0){let t=dc(m.width,m.height,o.format,o.type);for(let a of o.layerUpdates){let o=m.data.subarray(a*t/m.data.BYTES_PER_ELEMENT,(a+1)*t/m.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,m.width,m.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,m.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,m.data,0,0)}else L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,f,m.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,r,f,m.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],o.format===1023?g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data):r===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,m.data):n.compressedTexImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,m.data)}}else if(o.isDataArrayTexture){if(g){if(_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,t.width,t.height,t.depth),v){if(o.layerUpdates.size>0){let i=dc(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,f,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,p,t.width,t.height,t.depth,0,r,f,t.data)}else if(o.isData3DTexture)g?(_&&n.texStorage3D(e.TEXTURE_3D,y,p,t.width,t.height,t.depth),v&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)):n.texImage3D(e.TEXTURE_3D,0,p,t.width,t.height,t.depth,0,r,f,t.data);else if(o.isFramebufferTexture){if(_){if(g)n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<y;t++)n.texImage2D(e.TEXTURE_2D,t,p,i,a,0,r,f,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),b.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Be(h[0]);n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height)}for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,f,m):n.texImage2D(e.TEXTURE_2D,t,p,r,f,m);o.generateMipmaps=!1}else if(g){if(_){let r=Be(t);n.texStorage2D(e.TEXTURE_2D,y,p,r.width,r.height)}v&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,f,t)}else n.texImage2D(e.TEXTURE_2D,0,p,r,f,t);O(o)&&o.mipmapsAutoUpdate===!0&&k(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ke(t,o,s){if(o.image.length!==6)return;let c=Te(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Nt.getPrimaries(Nt.workingColorSpace),r=o.colorSpace===``?null:Nt.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=D(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=I(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),v=A(o.internalFormat,g,_,o.normalized,o.colorSpace),y=o.isVideoTexture!==!0,b=u.__version===void 0||c===!0,x=l.dataReady,S=j(o,h);we(e.TEXTURE_CUBE_MAP,o);let C;if(o.isDepthTexture){if(v=te(o.format===ie,o.type),b){if(y)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,v,h.width,h.height);else for(let t=0;t<6;t++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,h.width,h.height,0,g,_,null)}}else if(f){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=m[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];o.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=o.mipmaps,y&&b){C.length>0&&S++;let t=Be(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(p){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,m[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}O(o)&&o.mipmapsAutoUpdate===!0&&k(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Ae(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=A(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),F(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Re(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function je(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=te(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;F(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Re(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Re(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=A(o.internalFormat,c,l,o.normalized,o.colorSpace);F(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Re(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Re(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Me(t,i,a){let o=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let c=r.get(i.depthTexture);c.__renderTarget=i;let l=o?i.depthTexture.image[0]:i.depthTexture.image;c.__webglTexture&&l.width===i.width&&l.height===i.height||(l.width=i.width,l.height=i.height,i.depthTexture.needsUpdate=!0),o?be(i.depthTexture,0):_e(i.depthTexture,0);let u=c.__webglTexture,d=Re(i),f=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)F(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)F(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Ne(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)Me(i.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?Me(i.__webglFramebuffer[0],t,0):Me(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),je(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),je(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Pe(t,n,i){let a=r.get(t);n!==void 0&&Ae(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Ne(t)}function Fe(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,ae),ne(t);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&F(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=A(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Re(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),je(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),we(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)Ae(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else Ae(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);O(i)?k(e.TEXTURE_CUBE_MAP):i.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),we(c,a),Ae(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),O(a)&&k(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),we(r,i),i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)Ae(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else Ae(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);O(i)?k(r):i.mipmaps.length>0&&e.texParameteri(r,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}t.depthBuffer&&Ne(t)}function P(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(O(a)&&a.mipmapsAutoUpdate===!0){let t=ee(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),k(t),n.unbindTexture()}}}let Ie=[];function Le(t){if(t.samples>0){if(F(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Ie.length=0,Ie.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&Ie.push(l),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ie))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Re(e){return Math.min(i.maxSamples,e.samples)}function F(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function ze(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function I(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Nt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&L(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):R(`WebGLTextures: Unsupported texture color space:`,n)),t}function Be(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=he,this.resetTextureUnits=fe,this.getTextureUnits=pe,this.setTextureUnits=me,this.setTexture2D=_e,this.setTexture2DArray=ve,this.setTexture3D=ye,this.setTextureCube=be,this.rebindTextures=Pe,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=F,this.dispose=ce}function dd(e,t){function n(n,r=``){let i,a=Nt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var fd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pd=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,md=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new aa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Qo({vertexShader:fd,fragmentShader:pd,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new U(new Lo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hd=class extends mt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new md,g={},_=t.getContextAttributes(),v=null,y=null,x=[],S=[],C=new z,w=null,E=null,D=new Ls;D.viewport=new Wt;let O=new Ls;O.viewport=new Wt;let k=[D,O],A=new Js,te=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return t===void 0&&(t=new En,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return t===void 0&&(t=new En,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return t===void 0&&(t=new En,x[e]=t),t.getHandSpace()};function ne(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=x[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ae(){r.removeEventListener(`select`,ne),r.removeEventListener(`selectstart`,ne),r.removeEventListener(`selectend`,ne),r.removeEventListener(`squeeze`,ne),r.removeEventListener(`squeezestart`,ne),r.removeEventListener(`squeezeend`,ne),r.removeEventListener(`end`,ae),r.removeEventListener(`inputsourceschange`,oe);for(let e=0;e<x.length;e++){let t=S[e];t!==null&&(S[e]=null,x[e].disconnect(t))}te=null,j=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,N.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),E!==null){let e=E.camera;e.fov=E.fov,e.zoom=E.zoom,e.updateProjectionMatrix(),E=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,ne),r.addEventListener(`selectstart`,ne),r.addEventListener(`selectend`,ne),r.addEventListener(`squeeze`,ne),r.addEventListener(`squeezestart`,ne),r.addEventListener(`squeezeend`,ne),r.addEventListener(`end`,ae),r.addEventListener(`inputsourceschange`,oe),_.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?ie:re,a=_.stencil?ee:T);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Kt(d.textureWidth,d.textureHeight,{format:M,type:b,depthTexture:new ra(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Kt(f.framebufferWidth,f.framebufferHeight,{format:M,type:b,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),N.setContext(r),N.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function oe(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,x[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<x.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=x[r];i&&i.connect(n)}}function se(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),A.near=O.near=D.near=t,A.far=O.far=D.far=n,(te!==A.near||j!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),te=A.near,j=A.far),A.layers.mask=e.layers.mask|6,D.layers.mask=A.layers.mask&-5,O.layers.mask=A.layers.mask&-3;let i=e.parent,a=A.cameras;se(A,i);for(let e=0;e<a.length;e++)se(a[e],i);A.projectionMatrix.copy(D.projectionMatrix),A.projectionMatrixInverse.copy(D.projectionMatrixInverse),E===null&&e.isPerspectiveCamera&&(E={camera:e,fov:e.fov,zoom:e.zoom}),ce(e,A,i)};function ce(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=_t*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(A)},this.getCameraTexture=function(e){return g[e]};let le=null;function ue(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==A.cameras.length&&(A.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=k[n];o===void 0&&(o=new Ls,o.layers.enable(n),o.viewport=new Wt,k[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(A.matrix.copy(o.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),i===!0&&A.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new aa,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<x.length;e++){let t=S[e],n=x[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}le&&le(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let N=new pc;N.setAnimationLoop(ue),this.setAnimationLoop=function(e){le=e},this.dispose=function(){}}},gd=new Yt,_d=new V;_d.set(-1,0,0,0,1,0,0,0,1);function vd(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Jo(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(gd.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(_d),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function yd(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?L(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):L(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var bd=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),xd=null;function Sd(){return xd===null&&(xd=new yi(bd,16,16,se,D),xd.name=`DFG_LUT`,xd.minFilter=_,xd.magFilter=_,xd.wrapS=f,xd.wrapT=f,xd.generateMipmaps=!1,xd.needsUpdate=!0),xd}var Cd=class{constructor(e={}){let{canvas:t=st(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=b}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([le,ce,oe]),g=new Set([b,T,C,ee,O,k]),_=new Uint32Array(4),v=new Int32Array(4),x={textures:[],min:[],max:[],resolution:[]},S=null,w=null,E=[],A=[],te=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let j=this,ne=!1,M=null,re=null,ie=null,ae=null;this._outputColorSpace=Xe;let se=0,ue=0,N=null,de=-1,fe=null,pe=new Wt,me=new Wt,he=null,ge=new H(0),_e=0,ve=t.width,ye=t.height,be=1,xe=null,Se=null,Ce=new Wt(0,0,ve,ye),we=new Wt(0,0,ve,ye),Te=!1,Ee=new Mi,De=new Pi,Oe=!1,ke=!1,Ae=new Yt,je=new B,Me=new Wt,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function Fe(){return N===null?be:1}let P=n;function Ie(e,n){return t.getContext(e,n)}let Le,Re,F,ze,I,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Ze,Qe,$e,et,tt,nt,it,at;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,ut,!1),t.addEventListener(`webglcontextrestored`,dt,!1),t.addEventListener(`webglcontextcreationerror`,pt,!1),P===null){let t=`webgl2`;if(P=Ie(t,e),P===null)throw Ie(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}ot()}catch(e){throw t.removeEventListener(`webglcontextlost`,ut,!1),t.removeEventListener(`webglcontextrestored`,dt,!1),t.removeEventListener(`webglcontextcreationerror`,pt,!1),R(`WebGLRenderer: `+e.message),e}function ot(){Le=new Uc(P),Le.init(),nt=new dd(P,Le),Re=new Cc(P,Le,e,nt),F=new ld(P,Le),Re.reversedDepthBuffer&&d&&F.buffers.depth.setReversed(!0),re=P.createFramebuffer(),ie=P.createFramebuffer(),ae=P.createFramebuffer(),ze=new Kc(P),I=new Uu,Be=new ud(P,Le,F,I,Re,nt,ze),Ve=new Hc(j),He=new mc(P),it=new xc(P,He),Ue=new Wc(P,He,ze,it),We=new Jc(P,Ue,He,it,ze),$e=new qc(P,Re,Be),Ye=new wc(I),Ge=new Hu(j,Ve,Le,Re,it,Ye),Ke=new vd(j,I),qe=new qu,Je=new ed(Le),Qe=new bc(j,Ve,F,We,p,s),Ze=new cd(j,We,Re),at=new yd(P,ze,Re,F),et=new Sc(P,Le,ze),tt=new Gc(P,Le,ze),ze.programs=Ge.programs,j.capabilities=Re,j.extensions=Le,j.properties=I,j.renderLists=qe,j.shadowMap=Ze,j.state=F,j.info=ze}m!==1009&&(te=new Xc(m,t.width,t.height,o,r,i));let ct=new hd(j,P);this.xr=ct,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(e){e!==void 0&&(be=e,this.setSize(ve,ye,!1))},this.getSize=function(e){return e.set(ve,ye)},this.setSize=function(e,n,r=!0){ct.isPresenting?L(`WebGLRenderer: Can't change size while VR device is presenting.`):(ve=e,ye=n,t.width=Math.floor(e*be),t.height=Math.floor(n*be),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),te!==null&&te.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ve*be,ye*be).floor()},this.setDrawingBufferSize=function(e,n,r){ve=e,ye=n,be=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)R(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){L(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}te.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(pe)},this.getViewport=function(e){return e.copy(Ce)},this.setViewport=function(e,t,n,r){e.isVector4?Ce.set(e.x,e.y,e.z,e.w):Ce.set(e,t,n,r),F.viewport(pe.copy(Ce).multiplyScalar(Fe()).round())},this.getScissor=function(e){return e.copy(we)},this.setScissor=function(e,t,n,r){e.isVector4?we.set(e.x,e.y,e.z,e.w):we.set(e,t,n,r),F.scissor(me.copy(we).multiplyScalar(Fe()).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(e){F.setScissorTest(Te=e)},this.setOpaqueSort=function(e){xe=e},this.setTransparentSort=function(e){Se=e},this.getClearColor=function(e){return e.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=h.has(t)}if(e){let e=N.texture.type,t=g.has(e),n=Qe.getClearColor(),r=Qe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,P.clearBufferuiv(P.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,P.clearBufferiv(P.COLOR,0,v))}else r|=P.COLOR_BUFFER_BIT}t&&(r|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&P.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),M=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ut,!1),t.removeEventListener(`webglcontextrestored`,dt,!1),t.removeEventListener(`webglcontextcreationerror`,pt,!1),Qe.dispose(),qe.dispose(),Je.dispose(),Be.dispose(),I.dispose(),Ve.dispose(),We.dispose(),Ue.dispose(),it.dispose(),at.dispose(),Ge.dispose(),ct.dispose(),ct.removeEventListener(`sessionstart`,bt),ct.removeEventListener(`sessionend`,xt),St.stop()};function ut(e){e.preventDefault(),lt(`WebGLRenderer: Context Lost.`),ne=!0}function dt(){lt(`WebGLRenderer: Context Restored.`),ne=!1;let e=ze.autoReset,t=Ze.enabled,n=Ze.autoUpdate,r=Ze.needsUpdate,i=Ze.type;ot(),ze.autoReset=e,Ze.enabled=t,Ze.autoUpdate=n,Ze.needsUpdate=r,Ze.type=i}function pt(e){R(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function mt(e){let t=e.target;t.removeEventListener(`dispose`,mt),ht(t)}function ht(e){gt(e),I.remove(e)}function gt(e){let t=I.get(e).programs;t!==void 0&&(t.forEach(function(e){Ge.releaseProgram(e)}),e.isShaderMaterial&&Ge.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ne);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=jt(e,t,n,r,i);F.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ue.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;it.setup(i,r,s,n,c);let h,g=et;if(c!==null&&(h=He.get(c),g=tt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(F.setLineWidth(r.wireframeLinewidth*Fe()),g.setMode(P.LINES)):g.setMode(P.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),F.setLineWidth(e*Fe()),i.isLineSegments?g.setMode(P.LINES):i.isLineLoop?g.setMode(P.LINE_LOOP):g.setMode(P.LINE_STRIP)}else i.isPoints?g.setMode(P.POINTS):i.isSprite&&g.setMode(P.TRIANGLES);if(i.isBatchedMesh){if(Le.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?He.get(c).bytesPerElement:1,o=I.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(P,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function _t(e,t,n,r){M!==null&&e.isNodeMaterial&&M.setObject(r,e),Oe===!0&&Ye.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Ot(e,t,r),e.side=0,e.needsUpdate=!0,Ot(e,t,r),e.side=2):Ot(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),M!==null&&M.renderStart(e,t,n),w=Je.get(n),w.init(t),A.push(w),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(w.pushLight(e),e.castShadow&&w.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(w.pushLight(e),e.castShadow&&w.pushShadow(e))}),w.setupLights(),M!==null&&M.updateLights(w.state.lightsArray),ke=this.localClippingEnabled,Oe=Ye.init(this.clippingPlanes,ke),Oe===!0&&Ye.setGlobalState(this.clippingPlanes,t),M!==null&&Ze.render(w.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];_t(o,n,t,e),r.add(o)}else _t(i,n,t,e),r.add(i)}}),w=A.pop(),M!==null&&M.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=I.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Le.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let vt=null;function yt(e){vt&&vt(e)}function bt(){St.stop()}function xt(){St.start()}let St=new pc;St.setAnimationLoop(yt),typeof self<`u`&&St.setContext(self),this.setAnimationLoop=function(e){vt=e,ct.setAnimationLoop(e),e===null?St.stop():St.start()},ct.addEventListener(`sessionstart`,bt),ct.addEventListener(`sessionend`,xt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){R(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ne===!0)return;M!==null&&M.renderStart(e,t);let n=ct.enabled===!0&&ct.isPresenting===!0,r=te!==null&&(N===null||n)&&te.begin(j,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(te===null||te.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(t),t=ct.getCamera()),e.isScene===!0&&e.onBeforeRender(j,e,t,N),w=Je.get(e,A.length),w.init(t),w.state.textureUnits=Be.getTextureUnits(),A.push(w),Ae.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?De.setFromArrayCamera(t):Ee.setFromProjectionMatrix(Ae,rt,t.reversedDepth),ke=this.localClippingEnabled,Oe=Ye.init(this.clippingPlanes,ke),S=qe.get(e,E.length),S.init(),E.push(S),this.info.render.frame++,ct.enabled===!0&&ct.isPresenting===!0){let e=j.xr.getDepthSensingMesh();e!==null&&Ct(e,t,-1/0,j.sortObjects)}Ct(e,t,0,j.sortObjects),S.finish(),M!==null&&M.updateLights(w.state.lightsArray),j.sortObjects===!0&&S.sort(xe,Se),Pe=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,Pe&&Qe.addToRenderList(S,e),this.info.autoReset===!0&&this.info.reset(),Oe===!0&&Ye.beginShadows();let i=w.state.shadowsArray;if(Ze.render(i,e,t),Oe===!0&&Ye.endShadows(),(r&&te.hasRenderPass())===!1){let n=S.opaque,r=S.transmissive;if(w.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Tt(n,r,e,a)}Pe&&Qe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];wt(S,e,n,n.viewport)}}else r.length>0&&Tt(n,r,e,t),Pe&&Qe.render(e),wt(S,e,t)}N!==null&&ue===0&&(Be.updateMultisampleRenderTarget(N),Be.updateRenderTargetMipmap(N)),r&&te.end(j),e.isScene===!0&&e.onAfterRender(j,e,t),it.resetDefaultState(),de=-1,fe=null,A.pop(),A.length>0?(w=A[A.length-1],Be.setTextureUnits(w.state.textureUnits),Oe===!0&&Ye.setGlobalState(j.clippingPlanes,w.state.camera)):w=null,E.pop(),S=E.length>0?E[E.length-1]:null,M!==null&&M.renderEnd()};function Ct(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)w.pushLight(e),e.castShadow&&w.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?De:Ee;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&Me.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ae);let i=We.update(e),a=e.material;a.visible&&S.push(e,i,a,n,Me.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?De:Ee;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=We.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Me.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Me.copy(e.boundingSphere.center)),Me.applyMatrix4(e.matrixWorld).applyMatrix4(Ae)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&S.push(e,i,c,n,Me.z,s,t)}}else a.visible&&S.push(e,i,a,n,Me.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Ct(i[e],t,n,r)}function wt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;w.setupLightsView(n),Oe===!0&&Ye.setGlobalState(j.clippingPlanes,n),r&&F.viewport(pe.copy(r)),i.length>0&&z(i,t,n),a.length>0&&z(a,t,n),o.length>0&&z(o,t,n),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function Tt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[r.id]===void 0){let e=Le.has(`EXT_color_buffer_half_float`)||Le.has(`EXT_color_buffer_float`);w.state.transmissionRenderTarget[r.id]=new Kt(1,1,{generateMipmaps:!0,type:e?D:b,minFilter:y,samples:Math.max(4,Re.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Nt.workingColorSpace})}let a=w.state.transmissionRenderTarget[r.id],o=r.viewport||pe;a.setSize(o.z*j.transmissionResolutionScale,o.w*j.transmissionResolutionScale);let s=j.getRenderTarget(),c=j.getActiveCubeFace(),l=j.getActiveMipmapLevel();j.setRenderTarget(a),j.getClearColor(ge),_e=j.getClearAlpha(),_e<1&&j.setClearColor(16777215,.5),j.clear(),Pe&&Qe.render(n);let u=j.toneMapping;j.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),w.setupLightsView(r),Oe===!0&&Ye.setGlobalState(j.clippingPlanes,r),z(e,n,r),Be.updateMultisampleRenderTarget(a),Be.updateRenderTargetMipmap(a),Le.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Et(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Be.updateMultisampleRenderTarget(a),Be.updateRenderTargetMipmap(a))}j.setRenderTarget(s,c,l),j.setClearColor(ge,_e),d!==void 0&&(r.viewport=d),j.toneMapping=u}function z(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Et(o,t,n,s,l,c)}}function Et(e,t,n,r,i,a){M!==null&&i.isNodeMaterial&&M.setObject(e,i),e.onBeforeRender(j,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(j,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=2):j.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(j,t,n,r,i,a)}function Dt(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function Ot(e,t,n){t.isScene!==!0&&(t=Ne);let r=I.get(e),i=w.state.lights,a=w.state.shadowsArray,o=i.state.version,s=Ge.getParameters(e,i.state,a,t,n,w.state.lightProbeGridArray),c=Ge.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ve.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,mt),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return At(e,s),d}else s.uniforms=Ge.getUniforms(e),M!==null&&e.isNodeMaterial&&M.build(e,n,s),e.onBeforeCompile(s,j),d=Ge.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ye.uniform),At(e,s),r.needsLights=Pt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=Dt(w.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function V(e,t,n,r,i){let a=I.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=Ot(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function kt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=au.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function At(e,t){let n=I.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function jt(e,t,n,r,i){t.isScene!==!0&&(t=Ne),Be.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?j.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Nt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ve.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=j.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=I.get(r),y=w.state.lights;if(Oe===!0&&(ke===!0||e!==fe)){let t=e===fe&&r.id===de;Ye.setState(r,e,t)}let b=!1,S=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ye.numPlanes||v.numIntersection!==Ye.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===Dt(w.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(S=!0):b=!0:b=!0:(b=!0,v.__version=r.version);let C=v.currentProgram;(b===!0||S===!0)&&(C=S===!0?V(r,t,i,s,h):Ot(r,t,i),M&&r.isNodeMaterial&&M.onUpdateProgram(r,C,v));let T=!1,E=!1,D=!1,O=C.getUniforms(),k=v.uniforms;if(F.useProgram(C.program)&&(T=!0,E=!0,D=!0),r.id!==de&&(de=r.id,E=!0),T||fe!==e){F.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(P,`projectionMatrix`,e.projectionMatrix),O.setValue(P,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(P,je.setFromMatrixPosition(e.matrixWorld)),Re.logarithmicDepthBuffer&&O.setValue(P,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(P,`isOrthographic`,e.isOrthographicCamera===!0),fe!==e&&(fe=e,E=!0,D=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&O.setValue(P,`sunShadowMap`,y.state.sunShadowMap,Be),y.state.directionalShadowMap.length>0&&O.setValue(P,`directionalShadowMap`,y.state.directionalShadowMap,Be),y.state.spotShadowMap.length>0&&O.setValue(P,`spotShadowMap`,y.state.spotShadowMap,Be),y.state.pointShadowMap.length>0&&O.setValue(P,`pointShadowMap`,y.state.pointShadowMap,Be)),i.isSkinnedMesh){O.setOptional(P,i,`bindMatrix`),O.setOptional(P,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(P,`boneTexture`,e.boneTexture,Be))}i.isBatchedMesh&&(O.setOptional(P,i,`batchingTexture`),O.setValue(P,`batchingTexture`,i._matricesTexture,Be),O.setOptional(P,i,`batchingIdTexture`),O.setValue(P,`batchingIdTexture`,i._indirectTexture,Be),O.setOptional(P,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(P,`batchingColorTexture`,i._colorsTexture,Be));let ee=n.morphAttributes;if((ee.position!==void 0||ee.normal!==void 0||ee.color!==void 0)&&$e.update(i,n,C),(E||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(P,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=Sd()),E){if(O.setValue(P,`toneMappingExposure`,j.toneMappingExposure),v.needsLights&&Mt(k,D),a&&r.fog===!0&&Ke.refreshFogUniforms(k,a),Ke.refreshMaterialUniforms(k,r,be,ye,w.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=x,t=0;for(let n of w.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;k.probesSH.value=e.textures,k.probesMin.value=e.min,k.probesMax.value=e.max,k.probesResolution.value=e.resolution}au.upload(P,kt(v),k,Be)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(au.upload(P,kt(v),k,Be),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(P,`center`,i.center),O.setValue(P,`modelViewMatrix`,i.modelViewMatrix),O.setValue(P,`normalMatrix`,i.normalMatrix),O.setValue(P,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];at.update(n,C),at.bind(n,C)}}return C}function Mt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Pt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return se},this.getActiveMipmapLevel=function(){return ue},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=I.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),I.get(e.texture).__webglTexture=t,I.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=I.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,se=t,ue=n;let r=null,i=!1,a=!1;if(e){let o=I.get(e);if(o.__useDefaultFramebuffer!==void 0){F.bindFramebuffer(P.FRAMEBUFFER,o.__webglFramebuffer),pe.copy(e.viewport),me.copy(e.scissor),he=e.scissorTest,F.viewport(pe),F.scissor(me),F.setScissorTest(he),de=-1;return}if(o.__webglFramebuffer===void 0)Be.setupRenderTarget(e);else if(o.__hasExternalTextures)Be.rebindTextures(e,I.get(e.texture).__webglTexture,I.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&I.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Be.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=I.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Be.useMultisampledRTT(e)===!1?I.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,pe.copy(e.viewport),me.copy(e.scissor),he=e.scissorTest}else pe.copy(Ce).multiplyScalar(be).floor(),me.copy(we).multiplyScalar(be).floor(),he=Te;if(n!==0&&(r=re),F.bindFramebuffer(P.FRAMEBUFFER,r)&&F.drawBuffers(e,r),F.viewport(pe),F.scissor(me),F.setScissorTest(he),i){let r=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=I.get(e.textures[t]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,t.__webglTexture,n)}de=-1};function Ft(e){let t=I.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Re.textureFormatReadable(e.format),t.__typeReadable=Re.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){F.bindFramebuffer(P.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let u=Ft(o);if(u.__formatReadable===!1){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&P.readPixels(t,n,r,i,nt.convert(c),nt.convert(l),a)}finally{let e=N===null?null:I.get(N).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){F.bindFramebuffer(P.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let d=Ft(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.bufferData(P.PIXEL_PACK_BUFFER,a.byteLength,P.STREAM_READ),P.readPixels(t,n,r,i,nt.convert(l),nt.convert(u),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let p=N===null?null:I.get(N).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,p);let m=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await ft(P,m,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,a),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(f),P.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Be.setTexture2D(e,0),P.copyTexSubImage2D(P.TEXTURE_2D,n,0,0,o,s,i,a),F.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=nt.convert(t.format),_=nt.convert(t.type),v;t.isData3DTexture?(Be.setTexture3D(t,0),v=P.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Be.setTexture2DArray(t,0),v=P.TEXTURE_2D_ARRAY):(Be.setTexture2D(t,0),v=P.TEXTURE_2D),F.activeTexture(P.TEXTURE0),F.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,t.flipY),F.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),F.pixelStorei(P.UNPACK_ALIGNMENT,t.unpackAlignment);let y=F.getParameter(P.UNPACK_ROW_LENGTH),b=F.getParameter(P.UNPACK_IMAGE_HEIGHT),x=F.getParameter(P.UNPACK_SKIP_PIXELS),S=F.getParameter(P.UNPACK_SKIP_ROWS),C=F.getParameter(P.UNPACK_SKIP_IMAGES);F.pixelStorei(P.UNPACK_ROW_LENGTH,h.width),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,h.height),F.pixelStorei(P.UNPACK_SKIP_PIXELS,l),F.pixelStorei(P.UNPACK_SKIP_ROWS,u),F.pixelStorei(P.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=I.get(e),r=I.get(t),h=I.get(n.__renderTarget),g=I.get(r.__renderTarget);F.bindFramebuffer(P.READ_FRAMEBUFFER,h.__webglFramebuffer),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(e).__webglTexture,i,d+n),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(t).__webglTexture,a,m+n)),P.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,P.DEPTH_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||I.has(e)){let n=I.get(e),r=I.get(t);F.bindFramebuffer(P.READ_FRAMEBUFFER,ie),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,ae);for(let e=0;e<c;e++)w?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,n.__webglTexture,i),T?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,r.__webglTexture,a),i===0?T?P.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):P.copyTexSubImage2D(v,a,f,p,l,u,o,s):P.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,P.COLOR_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?P.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h);F.pixelStorei(P.UNPACK_ROW_LENGTH,y),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,b),F.pixelStorei(P.UNPACK_SKIP_PIXELS,x),F.pixelStorei(P.UNPACK_SKIP_ROWS,S),F.pixelStorei(P.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&P.generateMipmap(v),F.unbindTexture()},this.initRenderTarget=function(e){I.get(e).__webglFramebuffer===void 0&&Be.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Be.setTextureCube(e,0):e.isData3DTexture?Be.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Be.setTexture2DArray(e,0):Be.setTexture2D(e,0),F.unbindTexture()},this.resetState=function(){se=0,ue=0,N=null,F.reset(),it.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return rt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Nt._getUnpackColorSpace()}},wd={A:9.6,start:[{x:0,z:-5.5,yaw:0},{x:0,z:5.5,yaw:Math.PI}],pit:{x:-5.5,z:.7,w:2.7,d:2.7,openAt:60},hammer:{x:6.25,z:6.25,r:1.6,pivot:[8.8,2.1,8.8]},saws:[{x:5.9,z:-.7,len:3.5}],spikes:[{x:-6.4,z:-6.4,r:1.15},{x:-6.4,z:6.4,r:1.15}],screws:[{z:-9.05,x0:-3.8,x1:3.8},{z:9.05,x0:-3.8,x1:3.8}]},Td={renderer:null,quality:`medium`,fps:60},Ed={low:{pr:1,shadow:0,aa:!1},medium:{pr:1.5,shadow:1024,aa:!0},high:{pr:2,shadow:2048,aa:!0}};function Dd(e){let t=new Cd({canvas:e,antialias:!0,powerPreference:`high-performance`,stencil:!1});return t.outputColorSpace=Xe,t.toneMapping=4,t.toneMappingExposure=1.05,t.shadowMap.enabled=!0,t.shadowMap.type=2,Td.renderer=t,Td.pmrem=new Pc(t),Td.env=Od(t),t}function Od(e){let t=new Nn;t.background=new H(460811);let n=new U(new oa(40,18,40),new ai({color:1382172,side:1}));n.position.y=6,t.add(n);let r=(e,n,r,i,a,o,s=0,c=0)=>{let l=new U(new Lo(e,n),new ai({color:o,side:2}));l.position.set(r,i,a),l.rotation.set(c,s,0),t.add(l)};for(let e=-2;e<=2;e++)r(14,.8,0,14.8,e*5,16777215,0,Math.PI/2);for(let e of[-1,1])r(20,1.2,e*19.5,6,0,16742954,Math.PI/2);for(let e of[-1,1])r(20,1.2,0,6,e*19.5,2803967);r(40,6,0,-2.9,0,2763825,0,Math.PI/2);for(let e=0;e<6;e++)r(2.5,2.5,Math.cos(e)*12,11,Math.sin(e)*12,16773848,0,Math.PI/2);return Td.pmrem.fromScene(t,.03).texture}function kd(e){let t=Td.renderer;Td.quality=e;let n=Ed[e]||Ed.medium;return t.setPixelRatio(Math.min(window.devicePixelRatio||1,n.pr)),t.shadowMap.enabled=n.shadow>0,Td.shadowSize=n.shadow,n}var Ad=()=>Ed[Td.quality]||Ed.medium;function jd(e,t=e){let n=document.createElement(`canvas`);return n.width=e,n.height=t,n}function Md(e){let t=e;return()=>(t=t*16807%2147483647)/2147483647}function Nd(e,t=2){let n=e.width,r=e.height,i=e.getContext(`2d`).getImageData(0,0,n,r).data,a=jd(n,r),o=a.getContext(`2d`),s=o.createImageData(n,r),c=s.data,l=(e,t)=>i[((t+r)%r*n+(e+n)%n)*4]/255;for(let e=0;e<r;e++)for(let r=0;r<n;r++){let i=(l(r-1,e)-l(r+1,e))*t,a=(l(r,e-1)-l(r,e+1))*t,o=Math.hypot(i,a,1),s=(e*n+r)*4;c[s]=(i/o*.5+.5)*255,c[s+1]=(a/o*.5+.5)*255,c[s+2]=(1/o*.5+.5)*255,c[s+3]=255}return o.putImageData(s,0,0),a}function Pd(e,t=1,n=!1){let r=new na(e);return r.wrapS=r.wrapT=d,r.repeat.set(t,t),r.anisotropy=4,n&&(r.colorSpace=Xe),r}function Fd(e=256,t=7){let n=Md(t),r=jd(e),i=r.getContext(`2d`);i.fillStyle=`#7a7a7a`,i.fillRect(0,0,e,e);for(let t=0;t<1400;t++){let t=90+n()*90|0;i.fillStyle=`rgba(${t},${t},${t},0.25)`,i.fillRect(n()*e,n()*e,1+n()*2,1+n()*2)}i.lineCap=`round`;for(let t=0;t<90;t++){let t=n()*e,r=n()*e,a=n()*Math.PI,o=4+n()*22,s=n()<.6?40+n()*40|0:170+n()*60|0;i.strokeStyle=`rgba(${s},${s},${s},${.18+n()*.25})`,i.lineWidth=.4+n()*.6,i.beginPath(),i.moveTo(t,r),i.lineTo(t+Math.cos(a)*o,r+Math.sin(a)*o),i.stroke()}let a=jd(e);i=a.getContext(`2d`),i.fillStyle=`#808080`,i.fillRect(0,0,e,e);for(let t=0;t<120;t++){let t=n()*e,r=n()*e,a=n()*Math.PI,o=4+n()*20;i.strokeStyle=`rgba(40,40,40,${.2+n()*.35})`,i.lineWidth=.5+n()*.5,i.beginPath(),i.moveTo(t,r),i.lineTo(t+Math.cos(a)*o,r+Math.sin(a)*o),i.stroke()}for(let t=0;t<40;t++)i.fillStyle=`rgba(30,30,30,${.4+n()*.4})`,i.beginPath(),i.arc(n()*e,n()*e,.8+n()*2.2,0,7),i.fill();return{rough:Pd(r,1),normal:Pd(Nd(a,1.6),1)}}function Id(e=1024){let t=Md(11),n=jd(e),r=n.getContext(`2d`),i=r.createLinearGradient(0,0,e,e);i.addColorStop(0,`#5b5f66`),i.addColorStop(1,`#4c5057`),r.fillStyle=i,r.fillRect(0,0,e,e);let a=e/4;for(let e=0;e<4;e++)for(let n=0;n<4;n++){let i=78+t()*22|0;r.fillStyle=`rgb(${i},${i+2},${i+6})`,r.fillRect(e*a+3,n*a+3,a-6,a-6)}for(let n=0;n<9e3;n++){let n=60+t()*80|0;r.fillStyle=`rgba(${n},${n},${n},0.18)`,r.fillRect(t()*e,t()*e,1+t()*2,1)}for(let n=0;n<700;n++){let n=t()*e,i=t()*e,a=t()*Math.PI,o=8+t()*90,s=t()<.5?40:150;r.strokeStyle=`rgba(${s},${s},${s+8},${.12+t()*.25})`,r.lineWidth=.5+t()*1.5,r.beginPath(),r.moveTo(n,i),r.quadraticCurveTo(n+Math.cos(a)*o*.5+(t()-.5)*20,i+Math.sin(a)*o*.5,n+Math.cos(a)*o,i+Math.sin(a)*o),r.stroke()}for(let n=0;n<18;n++){let n=t()*e,i=t()*e,a=20+t()*70,o=r.createRadialGradient(n,i,0,n,i,a);o.addColorStop(0,`rgba(15,10,8,0.55)`),o.addColorStop(.6,`rgba(40,25,15,0.2)`),o.addColorStop(1,`rgba(0,0,0,0)`),r.fillStyle=o,r.fillRect(n-a,i-a,a*2,a*2)}r.strokeStyle=`rgba(20,22,26,0.95)`,r.lineWidth=6;for(let t=0;t<=4;t++)r.beginPath(),r.moveTo(t*a,0),r.lineTo(t*a,e),r.stroke(),r.beginPath(),r.moveTo(0,t*a),r.lineTo(e,t*a),r.stroke();for(let e=0;e<4;e++)for(let t=0;t<4;t++)for(let[n,i]of[[14,14],[a-14,14],[14,a-14],[a-14,a-14],[a/2,14],[a/2,a-14],[14,a/2],[a-14,a/2]]){let o=e*a+n,s=t*a+i;r.fillStyle=`#2a2d31`,r.beginPath(),r.arc(o,s,6,0,7),r.fill(),r.fillStyle=`#9ca3ab`,r.beginPath(),r.arc(o-1,s-1,4,0,7),r.fill()}let o=jd(512),s=o.getContext(`2d`);s.fillStyle=`#888`,s.fillRect(0,0,512,512),s.strokeStyle=`#111`,s.lineWidth=4;for(let e=0;e<=4;e++)s.beginPath(),s.moveTo(e*128,0),s.lineTo(e*128,512),s.stroke(),s.beginPath(),s.moveTo(0,e*128),s.lineTo(512,e*128),s.stroke();for(let e=0;e<4;e++)for(let t=0;t<4;t++)for(let[n,r]of[[7,7],[121,7],[7,121],[121,121],[64,7],[64,121],[7,64],[121,64]])s.fillStyle=`#eee`,s.beginPath(),s.arc(e*128+n,t*128+r,3,0,7),s.fill();for(let e=0;e<400;e++){let e=t()*512,n=t()*512,r=t()*Math.PI,i=4+t()*40;s.strokeStyle=`rgba(40,40,40,${.3+t()*.4})`,s.lineWidth=.6+t(),s.beginPath(),s.moveTo(e,n),s.lineTo(e+Math.cos(r)*i,n+Math.sin(r)*i),s.stroke()}let c=jd(256),l=c.getContext(`2d`);l.drawImage(n,0,0,256,256);let u=l.getImageData(0,0,256,256);for(let e=0;e<u.data.length;e+=4){let t=255-u.data[e]*1.1;u.data[e]=u.data[e+1]=u.data[e+2]=Math.max(60,Math.min(230,t))}return l.putImageData(u,0,0),{map:Pd(n,1,!0),normal:Pd(Nd(o,4),1),rough:Pd(c,1)}}function Ld(){let e=jd(128,32),t=e.getContext(`2d`);t.fillStyle=`#111`,t.fillRect(0,0,128,32),t.fillStyle=`#ffc21a`;for(let e=-2;e<10;e++)t.beginPath(),t.moveTo(e*16,32),t.lineTo(e*16+8,32),t.lineTo(e*16+24,0),t.lineTo(e*16+16,0),t.fill();return Pd(e,1,!0)}function Rd(e=`SHRAPNEL`,t=`ROBOT COMBAT LEAGUE`,n=1024,r=256,i=`#ff6a1a`){let a=jd(n,r),o=a.getContext(`2d`);o.clearRect(0,0,n,r),o.font=`900 ${r*.56}px Teko, Impact, sans-serif`,o.textAlign=`center`,o.textBaseline=`middle`,o.lineWidth=r*.05,o.strokeStyle=`rgba(0,0,0,0.6)`,o.strokeText(e,n/2,r*.42),o.fillStyle=i,o.fillText(e,n/2,r*.42),o.font=`600 ${r*.15}px "Barlow Condensed", sans-serif`,o.fillStyle=`rgba(255,255,255,0.85)`,o.fillText(t.split(``).join(` `),n/2,r*.84);let s=new na(a);return s.colorSpace=Xe,s.anisotropy=4,s}function zd(e,t=512,n=128,r=`#0b0d12`,i=`#ff8a2a`){let a=jd(t,n),o=a.getContext(`2d`);o.fillStyle=r,o.fillRect(0,0,t,n),o.textAlign=`center`,o.textBaseline=`middle`,o.fillStyle=i,o.font=`700 ${n*.62}px Teko, Impact, sans-serif`,o.fillText(e,t/2,n*.55);let s=new na(a);return s.colorSpace=Xe,s}function Bd(e=64,t=`rgba(255,255,255,1)`,n=`rgba(255,255,255,0)`){let r=jd(e),i=r.getContext(`2d`),a=i.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);return a.addColorStop(0,t),a.addColorStop(1,n),i.fillStyle=a,i.fillRect(0,0,e,e),new na(r)}function Vd(){let e=1024,t=Md(77),n=t=>{let n=jd(e,512),r=n.getContext(`2d`);return r.fillStyle=t,r.fillRect(0,0,e,512),[n,r]},[r,i]=n(`#808080`),[a,o]=n(`#ebebeb`),[s,c]=n(`#808080`),[l,u]=n(`#000000`),d=(e,t,n,r,i,a,o)=>{e.strokeStyle=a,e.lineWidth=o,e.beginPath(),e.moveTo(t,n),e.lineTo(r,i),e.stroke()};{for(let e=0;e<1400;e++){let e=t()*512,n=t()*512;d(i,n,e,n+(20+t()*120),e,`rgba(${t()<.5?60:200},${t()<.5?60:200},${t()<.5?60:200},0.07)`,.6)}for(let e=0;e<40;e++){let e=t()*512,n=t()*512,r=18+t()*60,i=o.createRadialGradient(e,n,0,e,n,r);i.addColorStop(0,`rgba(70,64,58,0.22)`),i.addColorStop(1,`rgba(0,0,0,0)`),o.fillStyle=i,o.fillRect(e-r,n-r,r*2,r*2)}o.strokeStyle=`rgba(30,26,22,0.35)`,o.lineWidth=36,o.strokeRect(0,0,512,512),i.strokeStyle=`#1c1c1c`,i.lineWidth=11,i.strokeRect(33.28,33.28,445.44,445.44),o.strokeStyle=`#4a4a4a`,o.lineWidth=11,o.strokeRect(33.28,33.28,445.44,445.44),i.strokeStyle=`#d8d8d8`,i.lineWidth=3,i.strokeRect(41.28,41.28,429.44,429.44);let e=87.04,n=424.96;i.fillStyle=`#9a9a9a`,i.fillRect(e,e,337.91999999999996,337.91999999999996),d(i,e,e,n,e,`#e8e8e8`,5),d(i,e,e,e,n,`#e8e8e8`,5),d(i,n,e,n,n,`#303030`,5),d(i,e,n,n,n,`#303030`,5),o.strokeStyle=`#6c6c6c`,o.lineWidth=4,o.strokeRect(e,e,337.91999999999996,337.91999999999996);for(let e=0;e<26;e++){let t=.1+e*.0325;i.fillStyle=`#b4b4b4`,i.beginPath(),i.arc(512*t,33.28,3,0,7),i.fill(),i.beginPath(),i.arc(512*t,478.72,3,0,7),i.fill()}let r=[];for(let e of[.24,.76])for(let t of[.24,.76])r.push([e,t]);for(let e of[.5])r.push([e,.115],[e,.885],[.115,e],[.885,e]);for(let[e,t]of r){let n=e*512,r=t*512,a=o.createRadialGradient(n,r,9.6,n,r,38.4);a.addColorStop(0,`rgba(0,0,0,0.55)`),a.addColorStop(1,`rgba(0,0,0,0)`),o.fillStyle=a,o.fillRect(n-48,r-48,96,96);let s=i.createRadialGradient(n-4,r-4,1,n,r,16);s.addColorStop(0,`#ffffff`),s.addColorStop(.7,`#cfcfcf`),s.addColorStop(1,`#2a2a2a`),i.fillStyle=s,i.beginPath(),i.arc(n,r,16,0,7),i.fill(),c.fillStyle=`rgba(40,40,40,0.8)`,c.beginPath(),c.arc(n,r,12.8,0,7),c.fill()}for(let e=0;e<4;e++){let t=512*(.56+e*.07);i.fillStyle=`#202020`,i.fillRect(174.08,t,163.84,11),o.fillStyle=`#3c3c3c`,o.fillRect(174.08,t,163.84,11)}for(let e=0;e<360;e++){let e=t()<.7,n=t()*512,r=t()*512;if(e){let e=t()*.12*512,i=t()*4|0;i===0?r=e:i===1?r=512-e:n=i===2?e:512-e}u.fillStyle=`rgba(255,255,255,${.6+t()*.4})`,u.beginPath();let i=1.5+t()*(e?7:3),a=.5+t();u.ellipse(n,r,i*a,i/a,t()*3,0,7),u.fill()}for(let e=0;e<70;e++){let e=t()*512,n=t()*512,r=t()*Math.PI,a=8+t()*46;d(u,e,n,e+Math.cos(r)*a,n+Math.sin(r)*a,`rgba(255,255,255,${.35+t()*.4})`,.8+t()*1.4),d(i,e,n,e+Math.cos(r)*a,n+Math.sin(r)*a,`rgba(40,40,40,0.5)`,1),d(c,e,n,e+Math.cos(r)*a,n+Math.sin(r)*a,`rgba(30,30,30,0.7)`,1.2)}}i.save(),i.translate(512,0),o.save(),o.translate(512,0),c.save(),c.translate(512,0),u.save(),u.translate(512,0);for(let e=0;e<2600;e++){let e=t()*512,n=t()*512;i.fillStyle=`rgba(${t()<.5?40:220},128,128,0.05)`,i.fillRect(e,n,1+t()*3,1+t()*3)}for(let e=0;e<38;e++){let e=t()*512,n=t()*512,r=20+t()*70,i=o.createRadialGradient(e,n,0,e,n,r);i.addColorStop(0,`rgba(60,56,50,0.3)`),i.addColorStop(1,`rgba(0,0,0,0)`),o.fillStyle=i,o.fillRect(e-r,n-r,r*2,r*2)}for(let e=0;e<220;e++){let e=t()*512,n=t()*512,r=t()<.7?.25+t()*.3:t()*Math.PI,a=8+t()*60,o=t()<.55;d(i,e,n,e+Math.cos(r)*a,n+Math.sin(r)*a,`rgba(${o?30:230},${o?30:230},${o?30:230},${.25+t()*.4})`,.5+t()*.9),d(c,e,n,e+Math.cos(r)*a,n+Math.sin(r)*a,`rgba(${o?20:220},${o?20:220},${o?20:220},0.55)`,.8+t()),t()<.4&&d(u,e,n,e+Math.cos(r)*a,n+Math.sin(r)*a,`rgba(255,255,255,${.3+t()*.5})`,.8+t())}for(let e=0;e<90;e++){let e=t()*512,n=t()*512,r=1+t()*4;u.fillStyle=`rgba(255,255,255,${.5+t()*.4})`,u.beginPath(),u.arc(e,n,r,0,7),u.fill(),i.fillStyle=`rgba(30,30,30,0.5)`,i.beginPath(),i.arc(e,n,r,0,7),i.fill()}i.restore(),o.restore(),c.restore(),u.restore();let f=jd(e,512),p=f.getContext(`2d`),m=p.createImageData(e,512),h=m.data,g=o.getImageData(0,0,e,512).data,_=c.getImageData(0,0,e,512).data,v=u.getImageData(0,0,e,512).data;for(let e=0;e<h.length;e+=4)h[e]=g[e],h[e+1]=_[e],h[e+2]=v[e],h[e+3]=255;p.putImageData(m,0,0);let b=e=>{let t=new na(e);return t.anisotropy=4,t.generateMipmaps=!0,t.minFilter=y,t};return{normal:b(Nd(r,3.2)),c:b(f)}}var Hd=`attribute vec3 col; attribute vec4 mp; attribute vec2 aux; varying vec3 vCol; varying vec4 vMP; varying vec2 vAux; varying vec3 vON; varying vec2 vUvD;`,Ud=`uniform vec3 uPaint; uniform float uDmg; uniform float uHeat; uniform float uBurn; uniform sampler2D uDetN; uniform sampler2D uDetC; uniform float uDetail;
varying vec3 vCol; varying vec4 vMP; varying vec2 vAux; varying vec3 vON; varying vec2 vUvD;
vec3 uberPerturb(vec3 eye_pos, vec3 N, vec3 mapN, vec2 uv, float fd) {
  vec3 q0 = dFdx(eye_pos), q1 = dFdy(eye_pos); vec2 st0 = dFdx(uv), st1 = dFdy(uv);
  vec3 q1perp = cross(q1, N), q0perp = cross(N, q0); vec3 T = q1perp * st0.x + q0perp * st1.x; vec3 B = q1perp * st0.y + q0perp * st1.y;
  float det = max(dot(T, T), dot(B, B)); float sc = det == 0.0 ? 0.0 : fd * inversesqrt(det);
  return normalize(T * (mapN.x * sc) + B * (mapN.y * sc) + N * mapN.z);
}`;function Wd(e,{physical:t=!0,dmg:n=0,heat:r=0,burn:i=0}={}){let a={metalness:1,roughness:1,envMapIntensity:1.6},o=t?new ts({...a,clearcoat:.5,clearcoatRoughness:.22}):new es(a),s={uPaint:{value:new H(e)},uDmg:{value:n},uHeat:{value:r},uBurn:{value:i},uDetN:{value:G.det.normal},uDetC:{value:G.det.c},uDetail:{value:.75}};return o.userData.uber=s,o.userData.hex=e,o.userData.physical=t,o.customProgramCacheKey=()=>`uber`+(t?`P`:`S`),o.onBeforeCompile=e=>{Object.assign(e.uniforms,s),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
`+Hd).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vCol = col; vMP = mp; vAux = aux; vON = normal; vUvD = uv;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
`+Ud).replace(`#include <color_fragment>`,`#include <color_fragment>
  vec2 uvA = mix(fract(vUvD * 2.0) * vec2(0.5, 1.0) + vec2(0.5, 0.0), clamp(vUvD, 0.004, 0.996) * vec2(0.5, 1.0), step(0.5, vAux.y));
  float dsc = mix(2.0, 1.0, step(0.5, vAux.y)); vec2 gx = dFdx(vUvD) * vec2(0.5, 1.0) * dsc, gy = dFdy(vUvD) * vec2(0.5, 1.0) * dsc;
  vec3 dC = textureGrad(uDetC, uvA, gx, gy).rgb;
  float kindPaint = step(0.5, vMP.z) * step(vMP.z, 1.5), kindEmit = step(1.5, vMP.z) * step(vMP.z, 2.5), kindHot = step(2.5, vMP.z);
  vec3 uBase = mix(vCol, uPaint, kindPaint);
  float edgeK = 1.0 - max(max(abs(vON.x), abs(vON.y)), abs(vON.z));
  float wearM = vAux.x * clamp(smoothstep(0.05, 0.26, edgeK) * (0.5 + dC.b * 1.1) + dC.b * dC.b * 0.45 * kindPaint, 0.0, 1.0);
  wearM = clamp(wearM + uDmg * dC.b * 0.6, 0.0, 1.0);
  float aoM = mix(1.0, dC.r, uDetail);
  float uMetal = vMP.x, uRough = clamp(vMP.y + (dC.g - 0.5) * 0.7, 0.04, 1.0);
  uBase *= aoM;
  vec3 bare = vec3(0.56, 0.58, 0.62);
  uBase = mix(uBase, bare * aoM, wearM * kindPaint);
  uBase = mix(uBase, uBase * 1.5 + 0.02, wearM * (1.0 - kindPaint) * 0.6);
  uMetal = mix(uMetal, 1.0, wearM * kindPaint); uRough = mix(uRough, 0.38, wearM);
  uBase = mix(uBase, vec3(0.085, 0.07, 0.06), uDmg * 0.75);
  uRough = min(1.0, uRough + uDmg * 0.35);
  diffuseColor.rgb = uBase * (1.0 - kindEmit) * mix(1.0, 0.12, kindHot);`).replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
  roughnessFactor = uRough;`).replace(`#include <metalnessmap_fragment>`,`#include <metalnessmap_fragment>
  metalnessFactor = uMetal;`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
  { vec3 mN = textureGrad(uDetN, uvA, gx, gy).xyz * 2.0 - 1.0; mN.xy *= 0.85 * mix(0.55, 1.0, step(0.5, vAux.y)); normal = uberPerturb(-vViewPosition, normal, normalize(mN), vUvD, faceDirection); }`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
  totalEmissiveRadiance += vCol * kindEmit * 2.2 + vCol * kindHot * (0.85 + uHeat * 4.2) + vec3(1.0, 0.3, 0.05) * uBurn * (0.5 + 0.5 * dC.g) * (1.0 - kindEmit);`),t&&(e.fragmentShader=e.fragmentShader.replace(`#include <lights_physical_fragment>`,`#include <lights_physical_fragment>
  #ifdef USE_CLEARCOAT
  material.clearcoat *= kindPaint * (1.0 - wearM);
  #endif`))},o}var Gd={};function Kd(e,t){let n=e+(t?`P`:`S`);return Gd[n]||(Gd[n]=Wd(e,{physical:t}))}function qd(e){let t=e.userData.uber;return Wd(e.userData.hex,{physical:e.userData.physical,dmg:t.uDmg.value,heat:t.uHeat.value,burn:t.uBurn.value})}var G={};function Jd(){let e=Fd(256,7),t=Fd(256,31),n=e=>new es(e);return G.det=Vd(),G.scratch=e,G.floorTex=Id(),G.stripes=Ld(),G.logo=Rd(),G.smoke=Bd(64,`rgba(255,255,255,0.9)`,`rgba(255,255,255,0)`),G.steel=n({color:12173512,metalness:1,roughness:.42,roughnessMap:e.rough,normalMap:e.normal,normalScale:new z(.6,.6)}),G.blade=n({color:15133680,metalness:1,roughness:.2,roughnessMap:t.rough,normalMap:t.normal,normalScale:new z(.35,.35)}),G.dark=n({color:3159098,metalness:.85,roughness:.5,roughnessMap:t.rough,normalMap:t.normal,normalScale:new z(.5,.5)}),G.frame=n({color:5791593,metalness:.9,roughness:.34,roughnessMap:e.rough,normalMap:e.normal,normalScale:new z(.4,.4)}),G.titanium=n({color:10135224,metalness:1,roughness:.3,roughnessMap:t.rough,normalMap:t.normal,normalScale:new z(.5,.5)}),G.ar500=n({color:3948872,metalness:.8,roughness:.55,roughnessMap:e.rough,normalMap:e.normal,normalScale:new z(.8,.8)}),G.rubber=n({color:1579291,metalness:0,roughness:.88}),G.hub=n({color:13160150,metalness:1,roughness:.25}),G.brass=n({color:13934922,metalness:1,roughness:.3}),G.copper=n({color:13135930,metalness:1,roughness:.35}),G.pcb2=n({color:789776,metalness:.6,roughness:.7}),G.pcb=n({color:932644,metalness:.2,roughness:.6}),G.ledG=new ai({color:5111706}),G.ledR=new ai({color:16726831}),G.ledC=new ai({color:4251903}),G.label=n({color:16757274,metalness:.2,roughness:.5}),G.hazard=n({map:G.stripes,metalness:.3,roughness:.55}),G.ghost=new ai({color:16728128,transparent:!0,opacity:.22,depthWrite:!1}),G.paint={},G}var Yd=`1.2.1`,K=.5,Xd={x:[-3,3],y:[0,2],z:[-3,3]},Zd=[{id:`micro`,name:`MICROBOTS`,cap:12,grid:Xd,unlocked:!0,note:`Pocket-sized. Rookie circuit.`},{id:`beetle`,name:`BEETLEWEIGHT`,cap:30,unlocked:!1,req:`Win Regionals + $6,000`,note:`Bigger grid, bigger weapons.`},{id:`middle`,name:`MIDDLEWEIGHT`,cap:120,unlocked:!1,req:`Win Nationals`,note:`Pro league.`},{id:`heavy`,name:`HEAVYWEIGHT`,cap:250,unlocked:!1,req:`Win Worlds (micro)`,note:`The big show.`}],q={frame:{name:`Frame Block`,cat:`frame`,wt:.3,hp:45,cost:10,slots:1,desc:`Steel tube frame. Holds everything together.`},frame_al:{name:`Alloy Frame`,cat:`frame`,wt:.2,hp:32,cost:22,slots:1,desc:`Lighter, weaker frame block.`},steel:{name:`Steel Plate`,cat:`armor`,wt:.5,hp:70,cost:18,red:.15,slots:2,desc:`Cheap, heavy, dependable.`},titanium:{name:`Titanium Plate`,cat:`armor`,wt:.36,hp:80,cost:55,red:.25,slots:2,desc:`Light and tough. Pricey.`},ar500:{name:`AR500 Plate`,cat:`armor`,wt:.62,hp:115,cost:70,red:.35,slots:2,desc:`Hardened steel. Shrugs off spinners.`},wedge:{name:`Wedge`,cat:`armor`,wt:.45,hp:70,cost:30,red:.2,slots:2,wedge:!0,desc:`Gets under opponents and lifts them.`},plow:{name:`Plow`,cat:`armor`,wt:.55,hp:85,cost:34,red:.22,slots:2,wedge:!0,desc:`Angled scoop for pushing bots around.`},wheel:{name:`Wheel`,cat:`mobility`,wt:.25,hp:30,cost:12,slots:1,desc:`Rubber wheel. Mount on the sides.`},wheel_hd:{name:`Foam Tire HD`,cat:`mobility`,wt:.35,hp:48,cost:26,slots:1,grip:1.25,desc:`Big grippy tire, takes hits.`},motor:{name:`Drive Motor`,cat:`mobility`,wt:.4,hp:35,cost:25,draw:35,power:1,slots:1,desc:`Brushed drive motor. Powers the wheels.`},motor_bl:{name:`Brushless Drive`,cat:`mobility`,wt:.35,hp:30,cost:60,draw:50,power:1.6,slots:1,desc:`Fast and light. Hungry.`},battery:{name:`LiPo Battery`,cat:`power`,wt:.6,hp:40,cost:30,cap:200,core:!0,slots:1,desc:`Must be protected. Lose it and you lose.`},tank:{name:`Fuel Tank`,cat:`power`,wt:.35,hp:26,cost:35,fuel:18,blast:38,blastR:1.05,hbox:.06,slots:1,desc:`Fuel for Inferno weapons. Explodes if destroyed!`},tank_xl:{name:`Fuel Tank XL`,cat:`power`,wt:.75,hp:40,cost:80,fuel:45,blast:66,blastR:1.55,hbox:.2,slots:2,desc:`Big tank: 2.5x fuel, heavier, bigger hitbox, bigger boom.`},battery_xl:{name:`LiPo XL`,cat:`power`,wt:.95,hp:50,cost:65,cap:340,core:!0,slots:1,desc:`More power for big weapons.`},cpu:{name:`CPU / Receiver`,cat:`control`,wt:.15,hp:30,cost:20,core:!0,slots:1,desc:`The brain. Must be protected.`},vspin:{name:`Vertical Spinner`,cat:`weapon`,wt:1.6,hp:75,cost:120,draw:120,slots:3,wpn:`vspin`,desc:`Disc that launches bots into the air.`},hbar:{name:`Bar Spinner`,cat:`weapon`,wt:2,hp:85,cost:140,draw:150,slots:3,wpn:`hbar`,desc:`Horizontal bar. Devastating, slow to spin up.`},drum:{name:`Drum`,cat:`weapon`,wt:1.5,hp:90,cost:110,draw:110,slots:3,wpn:`drum`,desc:`Toothed drum. Compact and brutal.`},hammer:{name:`Hammer Axe`,cat:`weapon`,wt:1.4,hp:80,cost:95,draw:85,slots:3,wpn:`hammer`,desc:`Overhead axe. Punches through top armor.`},flipper:{name:`Flipper`,cat:`weapon`,wt:1.2,hp:85,cost:90,draw:80,slots:3,wpn:`flipper`,desc:`Launches bots. Helps you self-right.`},crusher:{name:`Crusher`,cat:`weapon`,wt:1.5,hp:90,cost:100,draw:90,slots:3,wpn:`crusher`,desc:`Hydraulic jaw. Hold to crush.`},saw:{name:`Saw`,cat:`weapon`,wt:1,hp:60,cost:70,draw:70,slots:3,wpn:`saw`,desc:`Hold to grind. Sparks everywhere.`}},Qd=[{id:`frame`,name:`FRAME`},{id:`armor`,name:`ARMOR`},{id:`mobility`,name:`DRIVE`},{id:`power`,name:`POWER`},{id:`control`,name:`CPU`},{id:`weapon`,name:`WEAPONS`}],$d={vspin:{mode:`spin`,dmg:40,reach:1.15,spinUp:1.6,lift:6.5,knock:4.5,arc:.75},hbar:{mode:`spin`,dmg:48,reach:1.6,spinUp:2.4,lift:1.2,knock:8,arc:1.4,around:!0},drum:{mode:`spin`,dmg:34,reach:1,spinUp:1.2,lift:4.2,knock:3.5,arc:.8},hammer:{mode:`strike`,dmg:70,reach:2,cd:1.1,swing:.32,lift:0,knock:1.2,arc:.6,top:!0},flipper:{mode:`strike`,dmg:12,reach:1.1,cd:1.2,swing:.16,lift:9.5,knock:2.5,arc:.7,flip:!0},crusher:{mode:`hold`,dmg:46,reach:.95,arc:.6,grab:!0},saw:{mode:`hold`,dmg:36,reach:1.15,arc:.55}},ef={max:5,dmg:.18,spin:.075,cd:.06,wt:.1,lift:.04,cost:[0,.8,2,4,8],inferno:5},tf={t:4,dps:6,tick:.25,spread:.35,fuelRate:1,fuelHit:.4},nf=1.5,rf=(e,t)=>Math.round(q[e].cost*ef.cost[t-1]/5)*5,af=e=>Math.round(q[e].cost*5/10)*10;function of(e,t=1){let n=Math.max(0,Math.min(ef.max,t)-1),r={...e};return r.dmg=e.dmg*(1+ef.dmg*(e.mode===`strike`?1.6:1)*n),e.spinUp&&(r.spinUp=e.spinUp*(1-ef.spin*n)),e.cd&&(r.cd=e.cd*(1-ef.cd*n)),e.lift&&(r.lift=e.lift*(1+ef.lift*n)),r}var sf=[{id:`backyard`,name:`BACKYARD BRAWL`,sub:`Garage league · 8 bots`,fee:100,prize:650,tier:0,crateSlots:6,crateWt:3,rivals:[`rust`,`flip`],color:`#ff8a2a`},{id:`regional`,name:`REGIONALS`,sub:`State fairgrounds · 8 bots`,fee:400,prize:2600,tier:1,crateSlots:8,crateWt:4,rivals:[`rust`,`volt`,`hammer`,`flip`],req:`backyard`,color:`#33c6ff`},{id:`nationals`,name:`NATIONALS`,sub:`Arena tour · 16 bots`,fee:1500,prize:12e3,tier:2,locked:!0,req:`regional`,color:`#c06bff`},{id:`worlds`,name:`WORLD CHAMPIONSHIP`,sub:`Global finals · 16 bots`,fee:5e3,prize:5e4,tier:3,locked:!0,req:`nationals`,color:`#ffd23a`}],cf={payout:60,tier:0},lf={rust:{team:`TEAM RUST BUCKET`,who:`Gus "Grinder" Malloy`,portrait:`gus`,color:`#ff7a1a`,bot:`GRINDSTONE`,style:`hbar`,bio:`Thirty years in the junkyard. Builds ugly, hits like a truck.`,taunts:[`That shiny toy of yours? Scrap by the first minute.`,`Grindstone ate better bots than yours for breakfast.`,`Back again? Grindstone's been sharpened since last time.`]},volt:{team:`VELOCITY LABS`,who:`Dr. Kira Sato`,portrait:`kira`,color:`#29d3ff`,bot:`HALCYON VOLT`,style:`vspin`,bio:`Engineer, perfectionist, simulation addict. Every hit is calculated.`,taunts:[`I ran 10,000 simulations. You lost all of them.`,`Your weight distribution is… a choice.`,`I upgraded Halcyon's disc. Purely for you.`]},hammer:{team:`HAMMERFALL`,who:`Bo "Thunder" Ramirez`,portrait:`bo`,color:`#ff3346`,bot:`JUDGEMENT DAY`,style:`hammer`,bio:`Loud, proud and swinging. Judgement Day lands from above.`,taunts:[`JUDGEMENT DAY IS COMING FOR YOUR LID!`,`Hope that top armor is thick, amigo.`,`Heavier axe. Same attitude. Let's GO!`]},flip:{team:`FLIP SIDE`,who:`Maya "Catapult" Okafor`,portrait:`maya`,color:`#ffd02a`,bot:`SKY HOOK`,style:`flipper`,bio:`College prodigy. Turns every fight into an air show.`,taunts:[`Hope your bot likes flying!`,`Sky Hook's got a new launch pad. Wanna try it?`,`Upside down looks good on you.`]}},uf=(e,t,n,r,i=0,a,o)=>a===void 0?[e,t,n,r,i]:[e,t,n,r,i,1,0,0,a,+!!o];function df(e=1,t=`steel`,n=`wedge`,r=`drum`,i={}){let a=[],o=-e-1;a.push(uf(`cpu`,0,0,0),uf(`battery`,0,0,-1),uf(`frame`,0,0,1));for(let n=-e;n<=1;n++)for(let e of[-1,1])a.push(uf(i.sideArmor&&n!==0?t:`frame`,e,0,n));for(let t=-e;t<-1;t++)a.push(uf(`frame`,0,0,t));a.push(uf(i.wheel||`wheel`,-2,0,0,3),uf(i.wheel||`wheel`,2,0,0,1)),i.fourWheels&&a.push(uf(i.wheel||`wheel`,-2,0,-1,3),uf(i.wheel||`wheel`,2,0,-1,1)),a.push(uf(i.motor||`motor`,-1,1,-1),uf(i.motor||`motor`,1,1,-1));for(let e of[-1,0,1])a.push(uf(t,e,0,o,2));i.top!==!1&&r!==`hbar`&&r!==`hammer`&&a.push(uf(t,0,1,0),uf(t,0,1,-1)),(r===`hbar`||r===`hammer`)&&a.push(uf(t,0,1,-1)),i.topSides&&a.push(uf(t,-1,1,0),uf(t,1,1,0));let s=i.lv,c=!!i.inferno;return c&&a.push(uf(`tank`,0,1,o)),r===`hbar`||r===`hammer`?(a.push(uf(r,0,1,0,0,s,c)),a.push(uf(n,0,0,2),uf(n,-1,0,2),uf(n,1,0,2))):(a.push(uf(r,0,0,2,0,s,c)),a.push(uf(n,-1,0,2),uf(n,1,0,2))),i.extra&&a.push(...i.extra),a.reduce((e,t)=>e+(q[t[0]].draw||0),0)>q.battery.cap&&(a[1][0]=`battery_xl`),a}var ff={rookie:{name:`ROOKIE DRUM`,parts:df(1,`steel`,`wedge`,`drum`,{})},tornado:{name:`TINY TORNADO`,parts:df(1,`titanium`,`wedge`,`vspin`,{sideArmor:!0})},warden:{name:`WEDGE WARDEN`,parts:df(1,`steel`,`plow`,`hammer`,{})},pocket:{name:`POCKET FLIP`,parts:df(1,`steel`,`wedge`,`flipper`,{topSides:!0})}},pf={name:`JUNKBOT`,junk:!0,parts:[uf(`cpu`,0,0,0),uf(`battery`,0,0,-1),uf(`frame`,-1,0,0),uf(`frame`,1,0,0),uf(`frame`,-1,0,-1),uf(`frame`,1,0,-1),uf(`frame`,0,0,1),uf(`frame`,0,0,-2),uf(`wheel`,-2,0,0,3),uf(`wheel`,2,0,0,1),uf(`motor`,0,1,-1),uf(`steel`,0,1,0),uf(`saw`,0,0,2,0,1,!1),uf(`frame`,-1,0,1),uf(`frame`,1,0,1)]};function mf(e,t=0,n={}){return df(1,t>=1?`titanium`:`steel`,e===`flipper`||e===`hammer`?`plow`:`wedge`,e,{motor:t>=1?`motor_bl`:`motor`,wheel:t>=1?`wheel_hd`:`wheel`,sideArmor:t>=1,topSides:t>=2,lv:n.lv??1,inferno:!!n.inferno})}var hf=[[`TOASTER OVEN`,`Garage Gremlins`,`drum`],[`BITSY`,`Team Nibble`,`saw`],[`PINCH`,`Crab Shack Robotics`,`crusher`],[`WHIRLIGIG`,`Dizzy Labs`,`vspin`],[`DOORSTOP`,`Wedge Life`,`flipper`],[`SPLINTER`,`Woodshop Heroes`,`hbar`],[`MALLET`,`Tap Tap Co.`,`hammer`],[`MINI MAULER`,`Basement Builders`,`drum`],[`NUTCRACKER`,`Holiday Hazards`,`crusher`],[`BUZZKILL`,`Hornet Works`,`saw`],[`RIPTIDE`,`Surf & Turf`,`vspin`],[`LOCKJAW`,`Junkyard Dogs`,`crusher`]],gf=`shrapnel-save-v1`,_f=`shrapnel-save-v1-backup-before-v1.2`;function vf(){return{v:2,money:450,created:Date.now(),career:{wins:{backyard:0,regional:0},played:0,duelWins:0,duels:0},rivals:{},spares:{},wpnLv:{},inferno:{},slots:[{name:ff.rookie.name,parts:ff.rookie.parts.map(e=>e.slice())},{name:`EMPTY SLOT`,parts:[]},{name:`EMPTY SLOT`,parts:[]},{name:`EMPTY SLOT`,parts:[]}],active:0,tour:null,lastTour:null,settings:{quality:`auto`,haptics:!0,tips:!0,cam:1},stats:{fights:0,kos:0,partsDestroyed:0}}}function yf(e){let t=vf();if(!e||typeof e!=`object`)return t;for(let n of Object.keys(t))e[n]===void 0&&(e[n]=t[n]);for(let n of Object.keys(t.settings))e.settings[n]===void 0&&(e.settings[n]=t.settings[n]);for(let n of Object.keys(t.career))e.career[n]===void 0&&(e.career[n]=t.career[n]);for(Array.isArray(e.slots)&&e.slots.length||(e.slots=t.slots);e.slots.length<4;)e.slots.push({name:`EMPTY SLOT`,parts:[]});return e.wpnLv&&typeof e.wpnLv==`object`||(e.wpnLv={}),e.inferno&&typeof e.inferno==`object`||(e.inferno={}),e.v=2,e}function bf(e=globalThis.localStorage){let t=null;try{t=e.getItem(gf)}catch{}if(!t)return vf();try{let n=JSON.parse(t);if(n&&typeof n==`object`&&(n.v||1)<2)try{e.getItem(`shrapnel-save-v1-backup-before-v1.2`)||e.setItem(_f,t)}catch{}return yf(n)}catch{try{e.getItem(`shrapnel-save-v1-corrupt-backup`)||e.setItem(gf+`-corrupt-backup`,t)}catch{}return vf()}}function xf(e,t=globalThis.localStorage){try{return t.setItem(gf,JSON.stringify(e)),!0}catch{return!1}}var Sf=new B;function Cf(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;Sf.copy(t),Sf[r]=0,Sf.normalize();let l=.5*o/(o+s),u=1-Sf.angleTo(e)/c;return Math.sign(Sf[n])===1?u*l:s/(o+s)+l+l*(1-u)}var wf=class e extends oa{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new B,c=new B,l=new B(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new B,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=Cf(m,c,`z`,`y`,i,n),f[a+1]=1-Cf(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-Cf(m,c,`z`,`y`,i,n),f[a+1]=1-Cf(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-Cf(m,c,`x`,`z`,i,e),f[a+1]=Cf(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-Cf(m,c,`x`,`z`,i,e),f[a+1]=1-Cf(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-Cf(m,c,`x`,`y`,i,e),f[a+1]=1-Cf(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=Cf(m,c,`x`,`y`,i,e),f[a+1]=1-Cf(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}};function Tf(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Dr;c.morphTargetsRelative=s;let l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0,p=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let t in d.morphAttributes){if(!i.has(t))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;if(d.morphAttributes[t].length!==e[0].morphAttributes[t].length)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have the same number of morph targets for the "`+t+`" morph attribute.`),null;o[t]===void 0&&(o[t]=[]),o[t].push(d.morphAttributes[t]),p++}if(p!==i.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of morph attributes.`),null;if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Ef(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Ef(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Ef(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new fr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var Df=Math.PI,Of=(e,t,n,r=.03,i=2)=>new wf(e,t,n,i,r);function kf(e){let t=e.index?e.toNonIndexed():e;for(let e of Object.keys(t.attributes))[`position`,`normal`,`uv`].includes(e)||t.deleteAttribute(e);return t}var Af=e=>Tf(e.map(kf));function jf(e,t,n){let r=new qa,i=t*3;for(let t=0;t<=i;t++){let a=t/i*Df*2,o=t%3==0?e+n:e,s=Math.cos(a)*o,c=Math.sin(a)*o;t?r.lineTo(s,c):r.moveTo(s,c)}let a=new Ka;return a.absarc(0,0,e*.18,0,Df*2,!0),r.holes.push(a),r}var Mf=class{constructor(){let e=this.group=new wn,t=wd.A,n=t/8,r=new qa;r.moveTo(-t,-t),r.lineTo(t,-t),r.lineTo(t,t),r.lineTo(-t,t),r.closePath();let i=wd.pit,a=new Ka,o=-i.z;a.moveTo(i.x-i.w/2,o-i.d/2),a.lineTo(i.x-i.w/2,o+i.d/2),a.lineTo(i.x+i.w/2,o+i.d/2),a.lineTo(i.x+i.w/2,o-i.d/2),a.closePath(),r.holes.push(a);let s=new zo(r);s.rotateX(-Df/2);let c=s.attributes.uv,l=s.attributes.position;for(let e=0;e<c.count;e++)c.setXY(e,l.getX(e)/8,l.getZ(e)/8);s.computeVertexNormals();for(let e=0;e<s.attributes.normal.count;e++)s.attributes.normal.setXYZ(e,0,1,0);let u=new es({map:G.floorTex.map,normalMap:G.floorTex.normal,roughnessMap:G.floorTex.rough,metalness:.65,roughness:.8,envMapIntensity:.9});this.floor=new U(s,u),this.floor.receiveShadow=!0,e.add(this.floor);let f=new U(new Lo(7.5*n,1.9*n),new ai({map:G.logo,transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));f.rotation.x=-Df/2,f.position.set(.8*n,.003,0),f.rotation.z=Df/2,e.add(f);for(let[t,n]of[[0,16742938],[1,2733823]]){let r=wd.start[t],i=new U(new Ro(1.15,1.32,4,1),new ai({color:n,transparent:!0,opacity:.7,depthWrite:!1}));i.rotation.x=-Df/2,i.rotation.z=Df/4,i.position.set(r.x,.004,r.z),e.add(i)}let p=[],m=[],h=[];for(let e=-4;e<=4;e++)for(let[r,i]of[[e*2*n,-t-.18],[e*2*n,t+.18],[-t-.18,e*2*n],[t+.18,e*2*n]]){let e=Of(.32,3.6,.32,.05,3);e.translate(r,1.8,i),p.push(e)}for(let[e,n,r]of[[0,-t-.12,0],[0,t+.12,0],[-t-.12,0,Df/2],[t+.12,0,Df/2]]){let i=Of(2*t+.6,.42,.22,.04,2);i.rotateY(r),i.translate(e,.21,n),m.push(i);let a=Of(2*t+.6,.16,.26,.05,2);a.rotateY(r),a.translate(e,3.62,n),m.push(a);let o=new Lo(2*t,.3);o.rotateY(r+(n<0||e<0?0:Df)),o.translate(e*.985,.24,n*.985);let s=o.attributes.uv;for(let e=0;e<s.count;e++)s.setX(e,s.getX(e)*2*t);h.push(o)}let g=new U(Af(p),G.dark);g.castShadow=!0,e.add(g),e.add(new U(Af(m),G.frame));let _=G.stripes.clone();_.needsUpdate=!0,_.wrapS=d;let v=new U(Af(h),new es({map:_,roughness:.6,metalness:.2,polygonOffset:!0,polygonOffsetFactor:-1}));e.add(v);let y=new es({color:10471656,metalness:.1,roughness:.04,transparent:!0,opacity:.13,envMapIntensity:2.2,depthWrite:!1,side:2});for(let[n,r,i]of[[0,-t-.2,0],[0,t+.2,0],[-t-.2,0,Df/2],[t+.2,0,Df/2]]){let a=new U(new Lo(2*t+.4,3.2),y);a.position.set(n,1.98,r),a.rotation.y=i,a.renderOrder=5,e.add(a)}let b=new U(new Lo(80,80),new es({color:723983,roughness:.9,metalness:.2}));b.rotation.x=-Df/2,b.position.y=-.01,e.add(b),this.buildPit(),this.buildHammer(),this.buildSaws(),this.buildSpikes(),this.buildScrews(),this.buildLights(),this.buildCrowd(),this.buildDetail(),this.t=0}buildPit(){let e=wd.pit,t=this.group,n=new U(new oa(e.w,2.4,e.d),new es({color:1118741,roughness:.8,metalness:.5,side:1}));n.position.set(e.x,-1.2,e.z),t.add(n);let r=new U(new Lo(e.w*.9,e.d*.9),new ai({color:16726544}));r.rotation.x=-Df/2,r.position.set(e.x,-2.35,e.z),t.add(r),this.pitGlow=r;let i=new U(Af([[0,-1],[0,1],[1,0],[-1,0]].map(([t,n])=>{let r=Of(t?.18:e.w+.36,.05,n?.18:e.d+.36,.02,1);return r.translate(e.x+t*(e.w/2+.09),.02,e.z+n*(e.d/2+.09)),r})),G.hazard);t.add(i),this.pitDoors=[];for(let n of[-1,1]){let r=new wn;r.position.set(e.x+n*e.w/2,0,e.z);let i=new U(Of(e.w/2-.02,.06,e.d-.04,.02,2),G.frame);i.position.set(-n*(e.w/4),-.025,0),i.receiveShadow=!0,r.add(i),t.add(r),this.pitDoors.push({piv:r,s:n})}}buildHammer(){let e=wd.hammer,t=this.group,[n,r,i]=e.pivot,a=new U(Af([(()=>{let e=Of(1.1,r,1.1,.08,3);return e.translate(n,r/2,i),e})(),(()=>{let e=new la(.35,.35,1,24);return e.rotateZ(Df/2),e.rotateY(-Df/4),e.translate(n,r,i),e})()]),G.dark);a.castShadow=!0,t.add(a),this.hamPiv=new wn,this.hamPiv.position.set(n,r,i),this.hamPiv.rotation.y=Math.atan2(e.x-n,e.z-i),t.add(this.hamPiv),this.hamArm=new wn,this.hamPiv.add(this.hamArm);let o=Math.hypot(e.x-n,e.z-i),s=new U(Of(.26,.26,o,.06,3),G.hazard);s.position.z=o/2,s.castShadow=!0,this.hamArm.add(s);let c=new U(Af([Of(.8,.55,.55,.1,4),(()=>{let e=new la(.3,.3,.86,28);return e.rotateZ(Df/2),e})()]),G.steel);c.position.set(0,-.15,o),c.castShadow=!0,this.hamArm.add(c),this.hamLen=o,this.hamRest=-1.15,this.hamDown=Math.asin(Math.min(1,(r-.42)/o));let l=new U(new Ro(e.r-.12,e.r,48),new ai({color:16724e3,transparent:!0,opacity:.5,depthWrite:!1}));l.rotation.x=-Df/2,l.position.set(e.x,.006,e.z),t.add(l),this.hamZone=l}buildSaws(){this.saws=[];for(let e of wd.saws){let t=new U(Of(.5,.04,e.len+.5,.02,1),G.hazard);t.position.set(e.x,.005,e.z),this.group.add(t);let n=new U(new Lo(.16,e.len+.1),new ai({color:328965}));n.rotation.x=-Df/2,n.position.set(e.x,.03,e.z),this.group.add(n);let r=[];for(let t of[-e.len/4,e.len/4]){let n=new Mo(jf(.62,30,.07),{depth:.03,bevelEnabled:!0,bevelThickness:.008,bevelSize:.008,bevelSegments:1,curveSegments:6});n.translate(0,0,-.015),n.rotateY(Df/2);let i=new U(n,G.blade);i.position.set(e.x,-.75,e.z+t),i.castShadow=!0,this.group.add(i),r.push(i)}this.saws.push({s:e,blades:r})}}buildSpikes(){this.spikes=[];for(let e of wd.spikes){let t=new U(new la(e.r+.12,e.r+.14,.04,40),G.hazard);t.position.set(e.x,.01,e.z),this.group.add(t);let n=[];for(let e=-1;e<=1;e++)for(let t=-1;t<=1;t++){let r=new ua(.13,.55,20);r.translate(e*.45,.27,t*.45),n.push(r);let i=new la(.16,.18,.06,20);i.translate(e*.45,.02,t*.45),n.push(i)}let r=new U(Af(n),G.blade);r.position.set(e.x,-.6,e.z),r.castShadow=!0,this.group.add(r),this.spikes.push({s:e,m:r})}}buildScrews(){this.screws=[];for(let e of wd.screws){let t=e.x1-e.x0,n=[],r=t*2.2;for(let e=0;e<=260;e++){let i=e/260,a=i*r*Df*2;n.push(new B(-t/2+i*t,Math.cos(a)*.22,Math.sin(a)*.22))}let i=new U(Af([new Uo(new Ea(n),520,.05,6),(()=>{let e=new la(.2,.2,t,24);return e.rotateZ(Df/2),e})()]),G.steel);i.position.set((e.x0+e.x1)/2,.16,e.z),i.castShadow=!0,this.group.add(i);let a=new U(Of(t+.4,.12,.6,.03,1),G.hazard);a.position.set(i.position.x,.02,e.z),this.group.add(a),this.screws.push(i)}}buildLights(){let e=this.group,t=wd.A;e.add(new Ts(9414344,1709072,.55));let n=this.key=new Ws(16773600,2.2);n.position.set(5,16,-4),n.target.position.set(0,0,0),e.add(n,n.target),n.castShadow=!0;let r=n.shadow.camera;r.left=-t*1.25,r.right=t*1.25,r.top=t*1.25,r.bottom=-t*1.25,r.near=4,r.far=30,n.shadow.bias=-6e-4,n.shadow.normalBias=.02,this.spots=[];let i=new ai({color:16773328,transparent:!0,opacity:.045,blending:2,depthWrite:!1,side:2}),a=[];for(let[n,r,o]of[[-t*1.12,-t*1.12,16777215],[t*1.12,-t*1.12,16769728],[-t*1.12,t*1.12,13165823],[t*1.12,t*1.12,16777215]]){let t=new zs(o,260,34,.42,.55,1.6);t.position.set(n,13,r),t.target.position.set(n*.15,0,r*.15),e.add(t,t.target),this.spots.push(t);let s=new B(n,13,r).distanceTo(t.target.position),c=new U(new ua(Math.tan(.42)*s*.8,s,32,1,!0),i);c.position.copy(t.position).lerp(t.target.position,.5),c.lookAt(t.target.position),c.rotateX(-Df/2),e.add(c);let l=new la(.45,.6,.9,20);l.translate(0,0,0);let u=new Cn;u.position.copy(t.position),u.lookAt(t.target.position),u.rotateX(Df/2),u.updateMatrix(),l.applyMatrix4(u.matrix),a.push(l)}let o=[],s=t*1.12;for(let e of[-s,s]){let t=Of(2*s+2,.4,.4,.05,1);t.translate(0,13.6,e),o.push(t)}for(let e of[-s,s]){let t=Of(.4,.4,2*s+2,.05,1);t.translate(e,13.6,0),o.push(t)}e.add(new U(Af([...o,...a]),G.dark)),this.ledTex=zd(`SHRAPNEL  ·  ROBOT COMBAT LEAGUE  ·  `,1024,64,`#07080b`,`#ff7a2a`),this.ledTex.wrapS=d,this.ledTex.repeat.set(2.4,1);let c=new ai({map:this.ledTex,toneMapped:!1});for(let[n,r,i]of[[0,-t-3,0],[0,t+3,Df],[-t-3,0,Df/2],[t+3,0,-Df/2]]){let a=new U(new Lo(2*t+6,1.1),c);a.position.set(n,4.6,r),a.rotation.y=i,e.add(a)}this.flash=new Vs(16752704,0,7,2),this.flash.position.set(0,1,0),e.add(this.flash),e.fog=!0}buildCrowd(){let e=wd.A,t=e+4.5,n=[];for(let r=0;r<5;r++)for(let[i,a,o]of[[0,-t-r*1.1,0],[0,t+r*1.1,0],[-t-r*1.1,0,Df/2],[t+r*1.1,0,Df/2]]){let t=new oa(2*e+10+r*2,.5,1.1);t.rotateY(o),t.translate(i,.25+r*.55,a),n.push(t)}this.group.add(new U(Af(n),new es({color:1053207,roughness:.9})));let r=new Oi(new sa(.2,.45,2,6),new es({color:1777448,roughness:.85}),400),i=new Cn,a=new H,o=0,s=3,c=()=>(s=s*16807%2147483647)/2147483647;for(;o<400;){let n=o%4,s=Math.floor(c()*5),l=(c()-.5)*(2*e+8+s*2),u=t+s*1.1,d=n<2?l:n===2?-u:u,f=n<2?n===0?-u:u:l;i.position.set(d,.85+s*.55,f),i.scale.setScalar(.85+c()*.3),i.updateMatrix(),r.setMatrixAt(o,i.matrix),a.setHSL(c(),.25,.08+c()*.1),r.setColorAt(o,a),o++}this.group.add(r),this.crowd=r}buildDetail(){let e=this.group,t=wd.A,n=t/8,r=G.stripes.clone();r.needsUpdate=!0,r.wrapS=r.wrapT=d,r.repeat.set(t*2.2,1);let i=new es({map:r,roughness:.55,metalness:.3,polygonOffset:!0,polygonOffsetFactor:-1,transparent:!0,opacity:.9}),a=[];for(let[e,n,r]of[[0,-t+.2,0],[0,t-.2,Df],[-t+.2,0,Df/2],[t-.2,0,-Df/2]]){let i=new Lo(2*t,.34);i.rotateX(-Df/2),i.rotateY(r),i.translate(e,.005,n),a.push(i)}e.add(new U(Af(a),i));let o=new ai({color:14673646,transparent:!0,opacity:.2,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),s=new Ro(3.35*n,3.45*n,72);s.rotateX(-Df/2),s.translate(0,.004,0);let c=new Lo(2*t-1,.07);c.rotateX(-Df/2),c.translate(0,.004,0),e.add(new U(Af([s,c]),o));let l=[],u=[];for(let e=-4;e<=4;e++)for(let[r,i]of[[e*2*n,-t-.18],[e*2*n,t+.18],[-t-.18,e*2*n],[t+.18,e*2*n]]){for(let e of[.75,2.9,3.62]){let t=new oa(.4,.1,.4);t.translate(r,e,i),l.push(t)}let e=new la(.1,.18,.16,8);e.translate(r,3.78,i),l.push(e);for(let[e,t]of[[.205,.12],[.205,-.12],[-.205,.12],[-.205,-.12]]){let n=new la(.03,.03,.03,6);n.rotateZ(Df/2),n.translate(r+e*1,.75,i+t),u.push(n)}}e.add(new U(Af(l),G.frame));let f=new U(Af(u),G.hub);e.add(f);let p=new ai({color:new H(1,.45,.08).multiplyScalar(2.4),toneMapped:!1}),m=new ai({color:new H(.1,.65,1).multiplyScalar(2.2),toneMapped:!1});this.bars=[p,m];for(let[n,r,i,a]of[[0,-t-.3,0,m],[0,t+.3,0,m],[-t-.3,0,Df/2,p],[t+.3,0,Df/2,p]]){let o=new U(new oa(2*t,.06,.05),a);o.position.set(n,3.42,r),o.rotation.y=i,e.add(o)}let h=new ai({color:new H(1,.25,.05).multiplyScalar(3),toneMapped:!1});this.beacon=h;for(let n of[-1,1])for(let r of[-1,1]){let i=new U(new Vo(.16,10,8),h);i.position.set(n*(t+.18),3.98,r*(t+.18)),e.add(i)}let g=new Float32Array(480),_=new Float32Array(480),v=9,y=()=>(v=v*16807%2147483647)/2147483647,b=t+4.5;for(let e=0;e<160;e++){let n=e%4,r=Math.floor(y()*5),i=(y()-.5)*(2*t+8+r*2),a=b+r*1.1;g[e*3]=n<2?i:n===2?-a:a,g[e*3+1]=1.6+r*.55+y()*.3,g[e*3+2]=n<2?n===0?-a:a:i;let o=new H().setHSL(y()<.5?.58:y()<.5?.08:.15,.7,.75);_[e*3]=o.r*2,_[e*3+1]=o.g*2,_[e*3+2]=o.b*2}let x=new Dr;x.setAttribute(`position`,new fr(g,3)),x.setAttribute(`color`,new fr(_,3)),this.phones=new $i(x,new Ji({size:.28,map:G.smoke,vertexColors:!0,transparent:!0,blending:2,depthWrite:!1,toneMapped:!1})),e.add(this.phones)}update(e,t){if(this.t+=e,this.ledTex.offset.x=this.t*.04%1,this.beacon&&this.beacon.color.setRGB(1,.25,.05).multiplyScalar(1.6+1.6*Math.max(0,Math.sin(this.t*5))),this.pitGlow&&this.pitGlow.material.color.setRGB(1,.2+.1*Math.sin(this.t*3),.05).multiplyScalar(1.4+.5*Math.sin(this.t*2.3)),t){wd.pit;for(let e of this.pitDoors)e.piv.rotation.z=e.s*-t.pit*1.45;this.hamArm.rotation.x=-(this.hamRest+(this.hamDown-this.hamRest)*t.hammer),this.hamZone.material.opacity=.35+(t.hammerArm?.5*(.5+.5*Math.sin(this.t*20)):0),this.saws.forEach((n,r)=>{let i=t.saws[r]||0;for(let t of n.blades)t.position.y=-.75+i*.58,t.rotation.x-=e*(8+i*30)}),this.spikes.forEach((e,n)=>{e.m.position.y=-.6+(t.spikes[n]||0)*.62});for(let t of this.screws)t.rotation.x+=e*4;this.flash.intensity=Math.max(0,this.flash.intensity-e*120)}}flashAt(e,t=30){this.flash.position.copy(e).setY(e.y+.6),this.flash.intensity=Math.max(this.flash.intensity,t)}},Nf={lv:{},inf:{}};function Pf(e){Nf.lv=e&&e.wpnLv||{},Nf.inf=e&&e.inferno||{}}var Ff=e=>q[e.t]&&q[e.t].wpn?Math.max(1,Math.min(ef.max,e.lv??Nf.lv[e.t]??1)):1,If=e=>!!(q[e.t]&&q[e.t].wpn&&(e.inf??Nf.inf[e.t])&&Ff(e)>=ef.inferno),Lf=e=>{let t=q[e.t];return t.wt*(t.wpn?1+ef.wt*(Ff(e)-1):1)},Rf=e=>q[e.t].fuel||0,zf=(e,t,n)=>e+`,`+t+`,`+n,Bf=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],Vf=[[1,0,0,`left`],[-1,0,0,`right`],[0,0,1,`front`],[0,0,-1,`back`]],Hf=e=>[[0,1],[1,0],[0,-1],[-1,0]][(e%4+4)%4];function Uf(e){let t=Array.isArray(e)?{t:e[0],x:e[1],y:e[2],z:e[3],r:e[4]||0,hp:e[5]??1,wear:e[6]||0,missing:!!e[7]}:{t:e.t,x:e.x,y:e.y,z:e.z,r:e.r||0,hp:e.hp??1,wear:e.wear||0,missing:!!e.missing},n=Array.isArray(e)?e[8]:e.lv,r=Array.isArray(e)?e[9]:e.inf;return n!==void 0&&(t.lv=n,t.inf=!!r),t}var Wf=e=>{let t=[e.t,e.x,e.y,e.z,e.r];return(e.hp<1||e.wear>0||e.missing||e.lv!==void 0)&&t.push(+e.hp.toFixed(3),+e.wear.toFixed(3),+!!e.missing),e.lv!==void 0&&t.push(e.lv,+!!e.inf),t},Gf=(e,t,n,r=Xd)=>e>=r.x[0]&&e<=r.x[1]&&t>=r.y[0]&&t<=r.y[1]&&n>=r.z[0]&&n<=r.z[1];function Kf(e){return Zd.find(t=>t.id===e)||Zd[0]}function qf(e,t=`micro`){let n=Kf(t),r=e.map(e=>e.t?e:Uf(e)),i=r.filter(e=>!e.missing&&q[e.t]),a=new Map(i.map(e=>[zf(e.x,e.y,e.z),e])),o=0,s=0,c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=[];for(let e of i){let t=q[e.t];o+=Lf(e),l+=t.cost,s+=t.draw||0,c+=t.cap||0,t.power&&(u+=t.power*(1-e.wear*.7)),t.cat===`armor`&&(d+=t.hp*e.hp,f+=t.red,p++),t.cat===`mobility`&&!t.power&&(e.x<0?m++:e.x>0?h++:(m+=.5,h+=.5),g+=t.grip||1),t.wpn&&_.push(e)}let v=[],y=[],b=i.filter(e=>e.t===`cpu`),x=i.filter(e=>q[e.t].cap);b.length||v.push(`Needs a CPU / receiver`),b.length>1&&v.push(`Only one CPU allowed`),x.length||v.push(`Needs a battery`),o>n.cap+1e-6&&v.push(`Overweight: ${o.toFixed(2)} / ${n.cap} lb`),c>0&&s>c+1e-6&&v.push(`Not enough power: ${s}W draw / ${c}W battery`);for(let e of[...b,...x]){let t=Vf.filter(([t,,n])=>!a.has(zf(e.x+t,e.y,e.z+n))).map(e=>e[3]);t.length&&v.push(`${e.t===`cpu`?`CPU`:`Battery`} exposed (${t.join(`, `)})`)}let S=Jf(i,b[0]),C=i.filter(e=>!S.has(e));b[0]&&C.length&&v.push(`${C.length} part${C.length>1?`s`:``} not attached to the frame`);let w=i.filter(e=>q[e.t].power).length,T=m+h;w||v.push(`Needs a drive motor`),T<2?v.push(`Needs at least 2 wheels`):m&&h||y.push(`Wheels only on one side — it will spin in circles`),_.length||y.push(`No weapon — pusher bot`);let E=Math.max(o,1),D=Math.min(1,T/2)*(T?g/T:0),O=w&&T?(2.6+4.2*Math.sqrt(u/E))*(.6+.4*D):0,k=O?2.2+2.5*Math.sqrt(u/E):0,ee=0;for(let e of _){let t=of($d[q[e.t].wpn],Ff(e));ee+=t.dmg*(t.mode===`spin`?1.1:t.mode===`hold`?.9:.8)*(.5+.5*e.hp)}let A=i.reduce((e,t)=>e+q[t.t].hp*t.hp,0)*(1+f/Math.max(1,p)*.8),te=Math.round(ee*1.4+A*.12+O*9);return{cls:n,weight:o,cap:n.cap,draw:s,power:c,cost:l,errors:v,warnings:y,ok:v.length===0,speed:O,turn:k,wheelsL:m,wheelsR:h,fuel:i.reduce((e,t)=>e+Rf(t),0),tanks:i.filter(e=>q[e.t].fuel).length,inferno:_.filter(If).length,motors:w,weapons:_.length,armorHp:d,toughness:A,rating:te,parts:i.length,missing:r.length-i.length}}function Jf(e,t){let n=new Set;if(!t)return n;let r=new Map(e.map(e=>[zf(e.x,e.y,e.z),e])),i=[t];for(n.add(t);i.length;){let e=i.pop();for(let[t,a,o]of Bf){let s=r.get(zf(e.x+t,e.y+a,e.z+o));s&&!n.has(s)&&(n.add(s),i.push(s))}}return n}var Yf=e=>e===1?3:e===3?1:e;function Xf(e){let t=0;for(let n of e){let e=n.t?n:Uf(n),r=q[e.t];r&&(e.missing?t+=r.cost:t+=Math.round(r.cost*((1-e.hp)*.6+e.wear*.5)))}return Math.round(t)}var Zf=K,J=Zf/2,Y=Math.PI,Qf={paint:{c:16777215,m:.7,r:.36,k:1,w:1},steel:{c:12173512,m:1,r:.4,k:0,w:1},blade:{c:15133680,m:1,r:.24,k:0,w:1},dark:{c:4212045,m:.6,r:.48,k:0,w:1},frame:{c:7634056,m:.68,r:.4,k:0,w:1},titanium:{c:10135224,m:1,r:.3,k:0,w:1},ar500:{c:5593956,m:.6,r:.5,k:0,w:1},rubber:{c:1710877,m:0,r:.9,k:0,w:0},hub:{c:13160150,m:1,r:.25,k:0,w:1},brass:{c:13934922,m:1,r:.3,k:0,w:0},copper:{c:13135930,m:1,r:.35,k:0,w:0},pcb2:{c:789776,m:.6,r:.7,k:0,w:0},pcb:{c:940596,m:.2,r:.55,k:0,w:0},ledG:{c:5111706,m:0,r:.5,k:2,w:0},ledR:{c:16726831,m:0,r:.5,k:2,w:0},ledC:{c:4251903,m:0,r:.5,k:2,w:0},label:{c:16757274,m:.2,r:.5,k:0,w:1},hazard:{c:15251482,m:.3,r:.55,k:0,w:1},bl2:{c:13489114,m:1,r:.26,k:0,w:1},bl3:{c:10726584,m:1,r:.28,k:0,w:1},bl4:{c:9082017,m:1,r:.3,k:0,w:1},bl5:{c:7108228,m:.95,r:.32,k:0,w:1},pip:{c:16761370,m:0,r:.5,k:2,w:0},hot:{c:16730640,m:0,r:.5,k:3,w:0},fuel:{c:12855836,m:.45,r:.4,k:0,w:1}},$f=[`blade`,`bl2`,`bl3`,`bl4`,`bl5`],ep=new H;function tp(e,t,n,r,i,a,o){for(let s=0;s<t;s++){let c=X(.026,.012,.026,.004,1);c.translate(n===`x`?r+s*o:r,i,n===`z`?a+s*o:a),e.add(t>=5?`hot`:`pip`,c)}}function np(e){let t=e.index?e.toNonIndexed():e;for(let e of Object.keys(t.attributes))[`position`,`normal`,`uv`].includes(e)||t.deleteAttribute(e);return t.attributes.uv||t.setAttribute(`uv`,new fr(new Float32Array(t.attributes.position.count*2),2)),t}function rp(e,t,n=0){e=np(e);let r=Qf[t]||Qf.dark,i=e.attributes.position.count;ep.setHex(r.c);let a=new Float32Array(i*3),o=new Float32Array(i*4),s=new Float32Array(i*2);for(let e=0;e<i;e++)a[e*3]=ep.r,a[e*3+1]=ep.g,a[e*3+2]=ep.b,o[e*4]=r.m,o[e*4+1]=r.r,o[e*4+2]=r.k,o[e*4+3]=0,s[e*2]=r.w,s[e*2+1]=n;return e.setAttribute(`col`,new fr(a,3)),e.setAttribute(`mp`,new fr(o,4)),e.setAttribute(`aux`,new fr(s,2)),e}var ip=e=>Tf(e),X=(e,t,n,r=.02,i=2)=>i<=1&&Math.min(e,t,n)<.06?new oa(e,t,n):new wf(e,t,n,i,Math.min(r,e/2-.001,t/2-.001,n/2-.001)),ap=(e,t,n,r=20)=>new la(e,t,n,r),Z=(e,t=0,n=0,r=0,i=0,a=0,o=0)=>(i&&e.rotateX(i),a&&e.rotateY(a),o&&e.rotateZ(o),e.translate(t,n,r),e),op=class{constructor(){this.l=[]}add(e,t,n=!1){return this.l.push(rp(t,e,+!!n)),this}done(){return Tf(this.l)}},sp=(e,t,n,r=.022,i=.02)=>{let a=ap(r,r*1.08,i,6);return a.translate(e,t+i/2,n),a};function cp(e,t){return t===`+y`?e:t===`-y`?Z(e,0,0,0,Y):t===`+z`?Z(e,0,0,0,Y/2):t===`-z`?Z(e,0,0,0,-Y/2):t===`+x`?Z(e,0,0,0,0,0,-Y/2):Z(e,0,0,0,0,0,Y/2)}var lp=[`+x`,`-x`,`+y`,`-y`,`+z`,`-z`],up=(e,t)=>e>>t&1;function dp(e,t,n,r,i=0){let a=new qa;for(let r=0;r<=54;r++){let i=r/54*Y*2,o=e,s=i/(Y*2)*t%1;s<.2&&(o=e+n*(1-s/.2));let c=Math.cos(i)*o,l=Math.sin(i)*o;r?a.lineTo(c,l):a.moveTo(c,l)}for(let t=0;t<i;t++){let n=t/i*Y*2+.3,r=new Ka;r.absarc(Math.cos(n)*e*.55,Math.sin(n)*e*.55,e*.14,0,Y*2,!0),a.holes.push(r)}let o=new Mo(a,{depth:r,bevelEnabled:!0,bevelThickness:r*.22,bevelSize:r*.22,bevelSegments:1,curveSegments:12});return o.translate(0,0,-r/2),o}function fp(e,t,n=.012){let r=new Mo(new qa(e.map(([e,t])=>new z(e,t))),{depth:t-n*2,bevelEnabled:!0,bevelThickness:n,bevelSize:n,bevelSegments:1,curveSegments:10});return r.rotateY(-Y/2),r.translate((t-n*2)/2,0,0),r}var pp={frame(e=0){return mp(!1,e)},frame_al(e=0){return mp(!0,e)},_frameUnused(e,t=0){let n=new op,r=e?`steel`:`frame`;return n.add(r,X(Zf-.006,Zf-.006,Zf-.006,.05,3),!0),lp.forEach((e,r)=>{if(up(t,r))return;let i=t=>n.add(`dark`,cp(t,e)),a=(t,r)=>n.add(t,cp(r,e));i(Z(X(.3,.016,.3,.01,1),0,J-.004,0));for(let[e,t]of[[-.11,-.11],[.11,-.11],[-.11,.11],[.11,.11]])a(`hub`,sp(e,J+.002,t,.02,.016));if(e===`+y`||e===`-y`)for(let e=-1;e<=1;e++)a(`pcb2`,Z(X(.2,.012,.022,.004,1),0,J+.006,e*.05));else a(`pcb2`,Z(ap(.05,.05,.02,14),0,J+.006,0))}),{body:n.done()}},armor(e,t=0){let n=new op,r=e===`titanium`?`titanium`:e===`ar500`?`ar500`:`paint`;return n.add(r,X(Zf+.06,Zf+.03,Zf+.06,.11,3),!0),lp.forEach((i,a)=>{if(up(t,a))return;let o=(e,t,r)=>n.add(e,cp(t,i),r);o(r,Z(X(.3,.03,.3,.014,1),0,J+.03,0),!1);for(let[e,t]of[[-.115,-.115],[.115,-.115],[-.115,.115],[.115,.115]])o(`hub`,sp(e,J+.04,t,.021,.016));e===`ar500`?o(`label`,Z(X(.2,.012,.045,.004,1),0,J+.048,0)):e===`titanium`?(o(`dark`,Z(X(.2,.012,.016,.004,1),0,J+.048,-.03)),o(`dark`,Z(X(.2,.012,.016,.004,1),0,J+.048,.03))):o(`dark`,Z(X(.16,.012,.016,.004,1),0,J+.048,0))}),{body:n.done()}},steel(e){return pp.armor(`steel`,e)},titanium(e){return pp.armor(`titanium`,e)},ar500(e){return pp.armor(`ar500`,e)},wedge(){let e=new op;e.add(`paint`,fp([[-J,-J],[J+.06,-J],[J+.07,-J+.035],[-J,J]],Zf-.01),!0),e.add(`blade`,Z(X(Zf-.02,.03,.06,.01,1),0,-J+.016,J+.05));for(let t of[.22,.45,.68]){let n=(J+.07)*(1-t)+-J*t,r=(-J+.035)*(1-t)+J*t;e.add(`dark`,Z(X(Zf-.14,.014,.04,.005,1),0,r+.012,n+.012,Y/4))}for(let t of[-.17,.17]){let n=.33,r=(J+.07)*.6699999999999999-J*n,i=(-J+.035)*.6699999999999999+J*n;e.add(`hub`,Z(sp(0,.006,0,.02,.016),t,i,r,Y/4))}return{body:e.done()}},plow(){let e=new op,t=[[-J,-J],[J+.08,-J],[J+.09,-J+.03]];for(let e=1;e<=6;e++){let n=e/6;t.push([J+.09-n*(Zf+.09)+Math.sin(n*Y)*.06,-J+.03+n*(Zf-.03)])}e.add(`paint`,fp(t,Zf-.01),!0),e.add(`blade`,Z(X(Zf-.02,.03,.07,.01,1),0,-J+.015,J+.06)),e.add(`dark`,Z(X(.05,Zf-.05,.05,.01,1),-J+.04,0,-J+.04)),e.add(`dark`,Z(X(.05,Zf-.05,.05,.01,1),J-.04,0,-J+.04));for(let t of[-.12,0,.12])e.add(`steel`,Z(X(.026,.3,.03,.008,1),t,0,J+.075-.03+.012));return{body:e.done()}},wheelGeo(e=.29,t=.2,n=!1){let r=new op,i=new op,a=[],o=.055,s=e*.62;a.push(new z(s,-t/2));for(let n=0;n<=5;n++){let r=-Y/2+n/5*(Y/2);a.push(new z(e-o+Math.cos(r)*o,-t/2+o+Math.sin(r)*o))}for(let n=0;n<=5;n++){let r=n/5*(Y/2);a.push(new z(e-o+Math.cos(r)*o,t/2-o+Math.sin(r)*o))}a.push(new z(s,t/2)),i.add(`rubber`,Z(new Io(a,32),0,0,0,0,0,Y/2));let c=n?16:20;for(let n=0;n<c;n++){let r=n/c*Y*2;for(let n of[-1,1]){let a=X(t*.4,.038,.062,.014,1);a.rotateY(n*.28),a.rotateX(-r),a.translate(n*t*.22,Math.cos(r)*(e+.006),Math.sin(r)*(e+.006)),i.add(`rubber`,a)}}i.add(`hub`,Z(ap(s,s,t*.7,28),0,0,0,0,0,Y/2)),i.add(`dark`,Z(ap(s*.78,s*.78,t*.76,28),0,0,0,0,0,Y/2));for(let e=0;e<5;e++){let n=e/5*Y*2,r=X(t*.78,.032,s*1.5,.01,1);r.rotateX(n),i.add(`hub`,r);let a=ap(.02,.02,t*.86,6);a.rotateZ(Y/2),a.translate(0,Math.cos(n)*s*.52,Math.sin(n)*s*.52),i.add(`brass`,a)}i.add(`brass`,Z(ap(.042,.042,t*.86,16),0,0,0,0,0,Y/2)),r.add(`dark`,Z(X(.12,.16,.16,.025,1),-J+.06,0,0)),r.add(`steel`,Z(ap(.03,.03,.2,10),-.1,0,0,0,0,Y/2));let l=r.l.map(e=>e),u=i.l,d=e=>e.forEach(e=>e.rotateY(-Y/2));return d(l),d(u),{body:Tf(l),move:{kind:`wheel`,axis:`z`,at:[0,0,.03],geo:Tf(u)}}},wheel(){return pp.wheelGeo(.29,.19)},wheel_hd(){return pp.wheelGeo(.31,.24,!0)},motor(e){let t=new op,n=e?.12:.14,r=.4;t.add(e?`blade`:`dark`,Z(ap(n,n,r*.75,22),0,0,0,Y/2));for(let e=0;e<5;e++)t.add(`frame`,Z(ap(n+.022,n+.022,.02,22),0,0,-.12+e*.06,Y/2));t.add(`brass`,Z(ap(n*.9,n,.05,22),0,0,r*.4,Y/2)),t.add(`steel`,Z(ap(.035,.035,.1,10),0,0,r*.47,Y/2)),t.add(`dark`,Z(ap(n*.95,n*.95,.04,22),0,0,-.4*.4,Y/2));for(let e=0;e<4;e++){let r=e/4*Y*2+Y/4;t.add(`hub`,Z(sp(0,0,0,.016,.014),Math.cos(r)*n*.62,Math.sin(r)*n*.62,-.168,-Y/2))}t.add(`frame`,Z(X(.36,.06,.3,.02,1),0,-J+.04,0),!0);for(let e of[-.14,.14])for(let n of[-.1,.1])t.add(`hub`,sp(e,-J+.066,n,.02,.014));return t.add(`copper`,Z(new Ho(.05,.012,6,12,Y),.05,n*.6,-.168,0,Y/2)),t.add(e?`ledC`:`ledR`,Z(X(.03,.02,.03,.005,1),0,n+.025,.05)),{body:t.done()}},motor_bl(){return pp.motor(!0)},battery(e){let t=new op,n=e?.4:.34;t.add(`dark`,X(.44,n,.46,.045,3),!0),t.add(`label`,Z(X(.452,n*.42,.472,.01,1),0,.02,0));for(let e of[-1,1])t.add(`frame`,Z(X(.46,.03,.05,.01,1),0,n*.24,e*.1));return t.add(`ledG`,Z(X(.04,.03,.02,.006,1),.12,n/2-.05,.236)),t.add(`ledR`,Z(ap(.025,.025,.05,10),-.1,n/2+.02,-.12)),t.add(`hub`,Z(ap(.012,.012,.06,8),-.1,n/2+.05,-.12)),t.add(`dark`,Z(ap(.025,.025,.05,10),.1,n/2+.02,-.12)),t.add(`copper`,Z(ap(.012,.012,.06,8),.1,n/2+.05,-.12)),t.add(`frame`,Z(X(Zf-.02,.04,Zf-.02,.01,1),0,-J+.02,0)),{body:t.done()}},battery_xl(){return pp.battery(!0)},cpu(){let e=new op;e.add(`dark`,Z(X(.44,.2,.44,.04,3),0,-.08,0),!0),e.add(`pcb`,Z(X(.36,.03,.36,.008,1),0,.035,0));for(let t=0;t<4;t++)e.add(t%2?`ledC`:`ledG`,Z(X(.035,.025,.02,.005,1),-.12+t*.08,.06,.12));e.add(`steel`,Z(X(.12,.03,.12,.008,1),.06,.065,-.04));for(let t=0;t<5;t++)e.add(`steel`,Z(X(.12,.05,.014,.003,1),.06,.1,-.09+t*.025));return e.add(`dark`,Z(X(.07,.02,.07,.006,1),-.1,.06,-.08)),e.add(`copper`,Z(X(.2,.012,.02,.004,1),-.04,.056,-.15)),e.add(`dark`,Z(ap(.01,.014,.3,8),-.15,.2,-.15)),e.add(`ledR`,Z(new Vo(.022,8,6),-.15,.36,-.15)),e.add(`frame`,Z(X(Zf-.02,.04,Zf-.02,.01,1),0,-J+.02,0)),{body:e.done()}},mounts(e,t=.36){for(let n of[-t/2,t/2]){e.add(`paint`,Z(X(.06,.38,.5,.02,2),n,-.02,.02),!0);for(let[t,r]of[[-.12,-.1],[.08,-.1],[-.12,.14],[.08,.14]])e.add(`hub`,Z(sp(0,0,0,.02,.016),n+Math.sign(n)*.03,t,r,0,0,-Math.sign(n)*Y/2))}e.add(`dark`,Z(X(t,.08,.3,.02,1),0,-.15,-.08))},vspin(e=1,t=!1){let n=new op,r=new op,i=e-1,a=$f[i];pp.mounts(n,.3);for(let e of[-.17,.17])n.add(`paint`,Z(X(.05,.22,.24,.02,1),e,.03,.27));for(let t of[-.15,.15])tp(n,e,`z`,t,.17,-.14,.07);let o=.07+.012*i,s=.27+.008*i;if(r.add(t?`hot`:a,Z(dp(s,2+i,.06+.012*i,o,3),0,0,0,0,Y/2)),r.add(`brass`,Z(ap(.06,.06,.32,16),0,0,0,0,0,Y/2)),e>=3)for(let e of[-1,1])r.add(`dark`,Z(ap(.1,.1,.014,20),e*(o/2+.012),0,0,0,0,Y/2));for(let e=0;e<6;e++){let t=e/6*Y*2;r.add(`hub`,Z(sp(0,0,0,.02,.016),.04,Math.cos(t)*.11,Math.sin(t)*.11,0,0,-Y/2))}if(t)for(let e of[-1,1])r.add(`hot`,Z(new Ho(s*.86,.02,6,40),e*(o/2+.004),0,0,0,Y/2)),r.add(`hot`,Z(new Ho(s*.58,.012,6,32),e*(o/2+.004),0,0,0,Y/2)),r.add(`hot`,Z(ap(.085,.085,.012,20),e*(o/2+.01),0,0,0,0,Y/2));return{body:n.done(),move:{kind:`spin`,axis:`x`,at:[0,.02,.3],geo:r.done()}}},drum(e=1,t=!1){let n=new op,r=new op,i=e-1,a=$f[i];pp.mounts(n,.42);for(let t of[-.21,.21])tp(n,e,`z`,t,.17,-.14,.07);r.add(a,Z(ap(.15,.15,.36,28),0,0,0,0,0,Y/2));let o=12+2*i,s=.07+.012*i;for(let n=0;n<o;n++){let c=n/o*Y*2,l=X(.32,s,.085-.0035*i,.012,1);if(l.translate(0,.15+s/2,0),l.rotateX(c),r.add(a,l),e>=3)for(let n of e>=4?[-.1,0,.1]:[0]){let e=new ua(.017+.002*i,.045+.01*i,6);e.translate(n,.15+s+.02+.004*i,0),e.rotateX(c),r.add(t?`hot`:a,e)}if(t){let e=X(.3,.01,.05,.004,1);e.translate(0,.15+s+.002,0),e.rotateX(c),r.add(`hot`,e)}}for(let t=0;t<o;t++){let n=t/o*Y*2+Y/o,i=X(.2,.04,.05,.008,1);i.translate(0,.165,0),i.rotateX(n),r.add(e>=3?a:`steel`,i)}for(let t=0;t<3;t++)r.add(`dark`,Z(ap(.153+(e>=4?.025:0),.153+(e>=4?.025:0),.016,28),-.12+t*.12,0,0,0,0,Y/2));if(t)for(let e of[-.17,.17])r.add(`hot`,Z(new Ho(.17,.011,6,30),e,0,0,0,Y/2));return{body:n.done(),move:{kind:`spin`,axis:`x`,at:[0,-.06,.24],geo:r.done()}}},hbar(e=1,t=!1){let n=new op,r=new op,i=e-1,a=$f[i];n.add(`dark`,Z(ap(.1,.13,.2,20),0,-.05,0)),n.add(`brass`,Z(ap(.05,.05,.3,14),0,.06,0)),n.add(`dark`,Z(X(.3,.04,.04,.01,1),0,-.07,.13)),tp(n,e,`x`,-.1,-.048,.13,.05);let o=.13,s=new qa;s.moveTo(-.78,-.0325),s.lineTo(-.68,-.13/2),s.lineTo(.6000000000000001,-.13/2),s.lineTo(.78,-.13*.05),s.lineTo(.8,o*.3),s.lineTo(.68,o/2),s.lineTo(-.78+.18,o/2),s.lineTo(-.78,o*.05),s.lineTo(-.8,-.039),s.closePath();let c=new Mo(s,{depth:.05+.006*i,bevelEnabled:!0,bevelThickness:.012,bevelSize:.012,bevelSegments:1});c.rotateX(-Y/2),r.add(a,c),r.add(`dark`,Z(ap(.11,.11,.08,24),0,.03,0));for(let n of[-1,1]){r.add(e>=3?a:`steel`,Z(X(.12+.012*i,.08+.01*i,.16+.01*i,.015,1),n*.72,.03,0));for(let e of[-.04,.04])r.add(`hub`,sp(n*.72+e*n,.07+.005*i,0,.016,.014));let o=Math.min(4,i);for(let e=0;e<o;e++)for(let o of[-1,1]){let s=new ua(.02+.003*i,.05+.012*i,6);s.rotateX(o*Y/2),s.translate(n*(.68-e*.12),.026,o*(.085+.006*i)),r.add(t?`hot`:a,s)}t&&r.add(`hot`,Z(X(.5,.008,.03,.003,1),n*.48,.066+.006*i,0))}for(let e=0;e<4;e++){let t=e/4*Y*2+Y/4;r.add(`hub`,sp(Math.cos(t)*.075,.07,Math.sin(t)*.075,.015,.014))}return{body:n.done(),move:{kind:`spin`,axis:`y`,at:[0,.2,0],geo:r.done()}}},hammer(e=1,t=!1){let n=new op,r=new op,i=e-1,a=$f[i],o=1+.07*i;n.add(`paint`,Z(X(.36,.16,.36,.03,2),0,-.15,-.04),!0),n.add(`dark`,Z(ap(.06,.06,.3,14),0,.02,-.12,0,0,Y/2));for(let e of[-.12,.12])n.add(`paint`,Z(X(.04,.24,.16,.015,1),e,-.06,-.12));if(tp(n,e,`x`,-.1,-.066,.1,.05),r.add(`dark`,Z(X(.07,.06,.92,.02,1),0,0,.46)),r.add(`steel`,Z(X(.09,.03,.84,.01,1),0,.04,.44)),r.add(a,Z(X(.18*o,.15*o,.16*o,.035,2),0,0,.94)),r.add(t?`hot`:a,Z(new ua(.055*o,.18+.03*i,12),0,-.15*o-.015*i,.94,Y)),e>=3)for(let e of[-.05*o,.05*o])r.add(t?`hot`:a,Z(new ua(.035,.1+.02*i,8),e,.075*o+.05+.01*i,.94));if(e>=5)for(let e of[-1,1])r.add(t?`hot`:a,Z(new ua(.04,.12,8),e*(.09*o+.05),0,.94,0,0,-e*Y/2));for(let t of[-.07,.07])r.add(`hub`,Z(sp(0,0,0,.02,.016),t,.075*o,.94+(e>=3?.06:0)));return t&&r.add(`hot`,Z(X(.2*o,.03,.18*o,.006,1),0,.005,.94)),r.add(`brass`,Z(ap(.035,.035,.18,10),0,0,0,0,0,Y/2)),{body:n.done(),move:{kind:`swing`,axis:`x`,at:[0,.02,-.12],rest:-2.1,hit:.42,geo:r.done()}}},flipper(e=1,t=!1){let n=new op,r=new op,i=e-1,a=$f[i];n.add(`dark`,Z(X(.44,.14,.42,.03,2),0,-.16,-.02),!0),n.add(`copper`,Z(ap(.04,.04,.24,12),0,-.05,-.05,Y/2-.5)),tp(n,e,`x`,-.12,-.086,.12,.06),r.add(`paint`,fp([[0,-.02],[.66,-.06],[.68,-.035],[0,.03]],.46),!0),r.add(a,Z(X(.44,.02+.006*i,.05+.01*i,.008,1),0,-.055,.64));for(let e=0;e<3+Math.min(2,i);e++){let t=.16+e*(.36/(2+Math.min(2,i)));r.add(`dark`,Z(X(.36,.014,.03,.005,1),0,.02-t*.075,t))}if(e>=3)for(let e=0;e<3+i;e++){let n=new ua(.026,.06+.01*i,6);n.rotateX(Y/2),n.translate(-.19+e*(.38/(2+i)),-.056,.7+.01*i),r.add(t?`hot`:a,n)}if(e>=4)for(let e of[-.235,.235])r.add(`dark`,Z(X(.025,.05,.6,.008,1),e,-.03,.32));return t&&r.add(`hot`,Z(X(.42,.012,.03,.004,1),0,-.032,.66)),r.add(`brass`,Z(ap(.03,.03,.48,10),0,0,0,0,0,Y/2)),{body:n.done(),move:{kind:`swing`,axis:`x`,at:[0,-.04,-.2],rest:.08,hit:-1.15,geo:r.done()}}},crusher(e=1,t=!1){let n=new op,r=new op,i=e-1,a=$f[i];n.add(`paint`,fp([[-J,-J],[J+.12,-J],[J+.13,-J+.03],[-J,-.05]],Zf-.04),!0),n.add(`blade`,Z(new ua(.03,.08,8),0,-.17,.3)),n.add(`dark`,Z(X(.2,.32,.12,.02,1),0,.02,-.18)),tp(n,e,`x`,-.08,.185,-.18,.04);let o=[];for(let e=0;e<=8;e++){let t=e/8;o.push(new B(0,Math.sin(t*Y*.8)*.22,t*.55))}if(r.add(`dark`,Z(new Uo(new Ea(o),14,.04+.004*i,8),0,0,0)),r.add(t?`hot`:a,Z(new ua(.045+.007*i,.16+.035*i,12),0,.02-.012*i,.56+.005*i,Y)),e>=3)for(let e of[-1,1])r.add(t?`hot`:a,Z(new ua(.03+.003*i,.12+.02*i,8),e*.07,.07,.55,Y*.9,0,e*.35));return e>=5&&r.add(a,Z(X(.16,.04,.08,.01,1),0,.14,.5)),r.add(`brass`,Z(ap(.035,.035,.2,10),0,0,0,0,0,Y/2)),{body:n.done(),move:{kind:`swing`,axis:`x`,at:[0,.12,-.16],rest:-.55,hit:.35,geo:r.done()}}},saw(e=1,t=!1){let n=new op,r=new op,i=e-1,a=$f[i];if(n.add(`paint`,Z(X(.12,.12,.5,.025,2),.1,0,.12),!0),n.add(`dark`,Z(X(.36,.2,.3,.03,2),0,-.1,-.08),!0),tp(n,e,`x`,-.12,.006,-.12,.06),n.add(`copper`,Z(ap(.05,.05,.16,14),.1,0,-.06,Y/2)),r.add(t?`hot`:a,Z(dp(.24,28+4*i,.055+.008*i,.024+.004*i),0,0,0,0,Y/2)),r.add(`brass`,Z(ap(.04,.04,.08,12),0,0,0,0,0,Y/2)),e>=3)for(let e of[-1,1])r.add(`dark`,Z(ap(.085+.01*i,.085+.01*i,.012,20),e*.022,0,0,0,0,Y/2));if(t)for(let t of[-1,1])r.add(`hot`,Z(new Ho(.2,.017,6,40),t*.018,0,0,0,Y/2)),r.add(`hot`,Z(ap(.07,.07,.012,18),t*(.024+(e>=3?.012:0)),0,0,0,0,Y/2));return{body:n.done(),move:{kind:`spin`,axis:`x`,at:[0,-.02,.36],geo:r.done()}}},tank(e=!1){let t=new op,n=e?.215:.165,r=e?.42:.34,i=-J+.05+n;t.add(`frame`,Z(X(Zf-.04,.05,r+.04,.012,1),0,-J+.025,0),!0),t.add(`fuel`,Z(ap(n,n,r,24),0,i,0,Y/2));for(let e of[-1,1]){let a=new Vo(n,20,12);a.scale(1,1,.42),a.translate(0,i,e*r/2),t.add(`fuel`,a)}for(let e of[-r*.28,r*.28])t.add(`dark`,Z(ap(n+.012,n+.012,.04,24),0,i,e,Y/2));return t.add(`hazard`,Z(ap(n+.004,n+.004,.07,24),0,i,0,Y/2)),t.add(`brass`,Z(ap(.035,.035,.06,10),0,i+n+.02,r*.3)),t.add(`hub`,Z(new Ho(.04,.008,6,14),0,i+n+.06,r*.3,Y/2)),t.add(`dark`,Z(ap(.012,.012,.1,8),0,i+n+.07,r*.3)),t.add(`ledC`,Z(new Vo(.02,8,6),.1,i+n-.012,-.06)),t.add(`steel`,Z(ap(.03,.03,.1,10),0,i+.02,-r/2-.042,Y/2)),{body:t.done()}},tank_xl(){return pp.tank(!0)}},mp=(e,t)=>pp._frameUnused(e,t),hp=new Set([`frame`,`frame_al`,`steel`,`titanium`,`ar500`]),gp={},_p=new Set([`vspin`,`hbar`,`drum`,`hammer`,`flipper`,`crusher`,`saw`]);function vp(e,t=0,n=1,r=!1){let i=_p.has(e),a=hp.has(e)?e+`:`+t:i?e+`:`+n+(r?`i`:``):e;return gp[a]||(gp[a]=i?pp[e](n,r):pp[e](hp.has(e)?t:0))}Object.keys(pp).filter(e=>![`armor`,`mounts`,`wheelGeo`,`_frameUnused`].includes(e));var yp=.04,bp=K/2;function xp(e,t={x:0,z:0}){return new B(e.x*K-t.x,e.y*K+bp+yp,e.z*K-t.z)}var Sp=()=>Td.quality!==`low`,Cp=new Set([`frame`,`frame_al`,`steel`,`titanium`,`ar500`]),wp=new Set([`frame`,`frame_al`,`steel`,`titanium`,`ar500`,`battery`,`battery_xl`,`cpu`]);function Tp(e,t){let n=(t,n,r)=>e.find(e=>e&&!e.missing&&e.x===t&&e.y===n&&e.z===r&&wp.has(e.t));return+!!n(t.x+1,t.y,t.z)|(n(t.x-1,t.y,t.z)?2:0)|(n(t.x,t.y+1,t.z)?4:0)|(n(t.x,t.y-1,t.z)?8:0)|(n(t.x,t.y,t.z+1)?16:0)|(n(t.x,t.y,t.z-1)?32:0)}function Ep(e,t,n=!0,r=0,i=1,a=!1){let o=vp(e,Cp.has(e)?r:0,i,a),s=new wn,c=[],l=Kd(t,Sp()),u=new U(o.body,l);u.castShadow=n,u.receiveShadow=!0,s.add(u),c.push(u);let d=null;if(o.move){d=new wn,d.position.fromArray(o.move.at),d.userData={...o.move,geo:void 0,ang:0};let e=new U(o.move.geo,l);e.castShadow=n,e.receiveShadow=!0,d.add(e),c.push(e),s.add(d),o.move.kind===`swing`&&(d.rotation.x=o.move.rest)}return{root:s,move:d,meshes:c}}var Dp=class{constructor(e,t=`#ff7a1a`,n={x:0,z:0},r={}){this.group=new wn,this.inner=new wn,this.group.add(this.inner),this.color=t,this.objs=[],e.forEach((i,a)=>{if(i.missing&&!r.ghosts){this.objs.push(null);return}let o=Ep(i.t,t,r.shadows!==!1,Cp.has(i.t)?Tp(e,i):0,Ff(i),If(i));q[i.t].wpn&&If(i)&&(o.inf=!0,o.own=!0,o.meshes.forEach(e=>{e.material=qd(e.material)})),o.root.position.copy(xp(i,n)),o.root.rotation.y=Cp.has(i.t)?0:(i.r||0)*Math.PI/2,o.base=o.root.position.clone(),o.part=i,o.i=a,o.dmg=0,i.missing&&(o.meshes.forEach(e=>{e.material=G.ghost,e.castShadow=!1}),o.ghost=!0),o.root.userData.partIndex=a,o.meshes.forEach(e=>e.userData.partIndex=a),this.inner.add(o.root),this.objs.push(o),!i.missing&&i.hp<1&&this.setDamage(a,1-i.hp,!0)}),this.spinAng=0,this.wheelAng=0,this.dress=this.buildDress(e,n,t),this.dress&&this.inner.add(this.dress)}buildDress(e,t,n){let r=e.filter(e=>e&&!e.missing&&q[e.t]);if(!r.length)return null;let i=new wn;i.name=`dress`;let a=e=>e===`wheel`||e===`wheel_hd`,o=e=>e===`motor`||e===`motor_bl`,s=e=>!a(e)&&!q[e].wpn&&!q[e].fuel,c=new Set(r.map(e=>`${e.x},${e.y},${e.z}`)),l=`dark`,u=[],d=new Yt,f=new on,p=new Et,m=new B(1,1,1),h=(e,t,n,r,i,a=0,o=0,s=0)=>{f.set(a,o,s),p.setFromEuler(f),d.compose(new B(n,r,i),p,m),e.applyMatrix4(d),u.push(rp(e,t,0))},g=r.filter(e=>s(e.t));if(g.length){let e=Math.min(...g.map(e=>e.y)),n=g.filter(t=>t.y===e),i=n.map(e=>e.x),o=n.map(e=>e.z),s=Math.min(...i),u=Math.max(...i),d=Math.min(...o),f=Math.max(...o);(s+u)/2*K-t.x,(d+f)/2*K-t.z;let p=e*K+yp+.01;(u-s+1)*K+.02,(f-d+1)*K+.02;for(let e of n){let n=xp(e,t);h(new oa(K+.03,.05,K+.03),l,n.x,p-.075,n.z)}let m=[[1,0],[-1,0],[0,1],[0,-1]];for(let e of n)for(let[n,i]of m){if(c.has(`${e.x+n},${e.y},${e.z+i}`)&&!a((r.find(t=>t.x===e.x+n&&t.y===e.y&&t.z===e.z+i)||{}).t))continue;let o=xp(e,t);h(new wf(i?K+.1:.05,.09,n?K+.1:.05,1,.02),l,o.x+n*(bp+.03),p-.02,o.z+i*(bp+.03))}if(!r.some(e=>q[e.t].wedge)){let e=Math.max(...n.map(e=>e.z)),r=n.filter(t=>t.z===e);if(r.length){let n=(Math.min(...r.map(e=>e.x))+Math.max(...r.map(e=>e.x)))/2*K-t.x,i=e*K-t.z+bp+.06;h(new wf((Math.max(...r.map(e=>e.x))-Math.min(...r.map(e=>e.x))+1)*K+.08,.045,.14,1,.02),`blade`,n,p-.05,i,.45)}}}for(let e of r.filter(e=>s(e.t)))for(let[n,i]of[[1,0],[0,1]]){let a=r.find(t=>t.x===e.x+n&&t.y===e.y&&t.z===e.z+i&&s(t.t));if(!a)continue;let o=xp(e,t),c=xp(a,t),u=o.clone().lerp(c,.5),d=q[e.t].cat===`armor`||q[a.t].cat===`armor`?`paint`:l;h(new wf(n?.22:K*.88,K*.9,i?.22:K*.88,1,.04),d,u.x,u.y,u.z),h(new wf(n?.32:K*.72,.07,i?.32:K*.72,1,.02),d,u.x,u.y+bp+.04,u.z)}let _=r.filter(e=>a(e.t)),v=r.filter(e=>o(e.t));for(let e of _){let n=xp(e,t),r=v[0],i=1e9;for(let t of v){let n=(t.x-e.x)**2+(t.y-e.y)**2+(t.z-e.z)**2;n<i&&(i=n,r=t)}let a=r?xp(r,t):n.clone().setX(n.x-Math.sign(e.x||1)*K),o=n.clone().lerp(a,.5);o.y=Math.min(n.y,a.y);let s=new la(.032,.032,Math.max(.12,n.distanceTo(a)-.12),10),c=new Et().setFromUnitVectors(new B(0,1,0),a.clone().sub(n).normalize());s.applyMatrix4(new Yt().compose(o,c,m)),u.push(rp(s,`steel`,0))}let y=r.find(e=>(e.t||``).startsWith(`battery`));if(y){let e=xp(y,t),n=v.slice(),i=r.find(e=>q[e.t].wpn);i&&n.push(i);for(let r of n){let n=xp(r,t),i=e.clone().lerp(n,.5);i.y-=.1,i.x+=(r.x-y.x)*.04,i.z+=(r.z-y.z)*.04;try{let t=new Ha(e.clone().setY(e.y-.06),i,n.clone().setY(n.y-.04));u.push(rp(new Uo(t,8,.011,5,!1),`copper`,0))}catch{}}}if(!u.length)return null;let b=new U(ip(u),Kd(n,Sp()));return b.castShadow=!1,b.receiveShadow=!0,i.add(b),i}setDamage(e,t,n=!1){let r=this.objs[e];if(r&&!r.ghost){if(t=Math.min(1,Math.max(0,t)),r.own||(r.own=!0,r.meshes.forEach(e=>{e.material=qd(e.material)})),r.meshes.forEach(e=>{e.material.userData.uber&&(e.material.userData.uber.uDmg.value=Math.max(t,(r.sc||0)*.55))}),!n&&t>r.dmg+.08){let e=(t-r.dmg)*.05;r.root.position.set(r.base.x+(Math.random()-.5)*e,r.base.y-Math.random()*e*.5,r.base.z+(Math.random()-.5)*e),r.root.rotation.x+=(Math.random()-.5)*e*2,r.root.rotation.z+=(Math.random()-.5)*e*2}r.dmg=t}}setScorch(e,t){let n=this.objs[e];!n||n.ghost||(n.sc||0)>=t||(n.own||(n.own=!0,n.meshes.forEach(e=>{e.material=qd(e.material)})),n.sc=t,n.meshes.forEach(e=>{e.material.userData.uber.uDmg.value=Math.max(n.dmg,t*.55)}))}setBurn(e,t){let n=this.objs[e];if(n&&!n.ghost&&(t>0&&!n.own&&(n.own=!0,n.meshes.forEach(e=>{e.material=qd(e.material)})),n.own)){let e=Math.round(t*10)/10;n.bq!==e&&(n.bq=e,n.meshes.forEach(t=>{t.material.userData.uber.uBurn.value=e}))}}setHeat(e,t){let n=this.objs[e];if(!n||!n.inf)return;let r=Math.round(t*20)/20;n.hq!==r&&(n.hq=r,n.meshes.forEach(e=>{e.material.userData.uber.uHeat.value=r}))}hidePart(e,t=!0){let n=this.objs[e];n&&(n.root.visible=!t)}animate(e,t){for(let n of this.objs){if(!n||!n.move||!n.root.visible)continue;let r=n.move.userData;if(r.kind===`wheel`)n.move.rotation.z+=e*(t.wheel||0)*(n.part.x<0?1:-1)*(n.part.r===3?-1:1);else if(r.kind===`spin`){let i=t.spin&&t.spin[n.i]||0;r.axis===`y`?n.move.rotation.y+=e*i:n.move.rotation.x+=e*i}else if(r.kind===`swing`){let e=t.swing&&t.swing[n.i]||0;n.move.rotation.x=r.rest+(r.hit-r.rest)*e}}}dispose(){this.group.removeFromParent();for(let e of this.objs)e&&e.own&&e.meshes.forEach(e=>e.material.dispose())}},Op=-16;function kp(){let e=new Fo(.048,0),t=e.attributes.position,n=11,r=()=>(n=n*16807%2147483647)/2147483647,i=new Map;for(let e=0;e<t.count;e++){let n=t.getX(e).toFixed(3)+t.getY(e).toFixed(3)+t.getZ(e).toFixed(3);i.has(n)||i.set(n,[.7+r()*.6,.7+r()*.6,.7+r()*.6]);let a=i.get(n);t.setXYZ(e,t.getX(e)*a[0]*1.8,t.getY(e)*a[1]*.45,t.getZ(e)*a[2]*1.25)}return e.computeVertexNormals(),e}var Ap=null;function jp(){if(Ap)return Ap;let e=e=>{let t=document.createElement(`canvas`);t.width=t.height=128,e(t.getContext(`2d`));let n=new na(t);return n.colorSpace=Xe,n};return Ap={burst:e(e=>{let t=e.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,`rgba(255,255,255,1)`),t.addColorStop(.18,`rgba(255,230,170,0.85)`),t.addColorStop(.5,`rgba(255,140,40,0.25)`),t.addColorStop(1,`rgba(255,100,20,0)`),e.fillStyle=t,e.fillRect(0,0,128,128),e.globalCompositeOperation=`lighter`;for(let t of[0,Math.PI/2,Math.PI/4,-Math.PI/4]){e.save(),e.translate(64,64),e.rotate(t);let n=e.createLinearGradient(-64,0,64,0);n.addColorStop(0,`rgba(255,200,120,0)`),n.addColorStop(.5,t%(Math.PI/2)==0?`rgba(255,240,200,0.9)`:`rgba(255,200,120,0.4)`),n.addColorStop(1,`rgba(255,200,120,0)`),e.fillStyle=n,e.fillRect(-64,-2.2,128,4.4),e.restore()}}),ring:e(e=>{let t=e.createRadialGradient(64,64,34,64,64,62);t.addColorStop(0,`rgba(255,200,120,0)`),t.addColorStop(.55,`rgba(255,230,180,0.9)`),t.addColorStop(1,`rgba(255,160,60,0)`),e.fillStyle=t,e.fillRect(0,0,128,128)})}}var Mp=class{constructor(e){this.scene=e;let t=this.NS=700;this.sp=Array.from({length:t},()=>({life:0,p:new B,v:new B,max:1,hot:1,w:1,fire:0}));let n=new Dr;this.sHead=new Float32Array(t*12),this.sTail=new Float32Array(t*12),this.sCol=new Float32Array(t*16);let r=new Float32Array(t*4),i=new Float32Array(t*4),a=new Uint32Array(t*6);for(let e=0;e<t;e++)r.set([-1,1,-1,1],e*4),i.set([0,0,1,1],e*4),a.set([e*4,e*4+2,e*4+1,e*4+1,e*4+2,e*4+3],e*6);n.setAttribute(`position`,new fr(this.sHead,3).setUsage(nt)),n.setAttribute(`tail`,new fr(this.sTail,3).setUsage(nt)),n.setAttribute(`col`,new fr(this.sCol,4).setUsage(nt)),n.setAttribute(`side`,new fr(r,1)),n.setAttribute(`endp`,new fr(i,1)),n.setIndex(new fr(a,1)),this.sparkMat=new Qo({transparent:!0,depthWrite:!1,blending:2,uniforms:{width:{value:.034}},vertexShader:`attribute vec3 tail; attribute vec4 col; attribute float side; attribute float endp; uniform float width; varying vec4 vC; varying float vE; varying float vS;
        void main(){ vec4 h = modelViewMatrix*vec4(position,1.0); vec4 t = modelViewMatrix*vec4(tail,1.0); vec2 d = t.xy - h.xy; float l = length(d); vec2 dir = l > 1e-5 ? d / l : vec2(1.0,0.0);
          vec4 p = mix(h, t, endp); float w = width * mix(1.0, 0.35, endp) * col.a; p.xy += vec2(-dir.y, dir.x) * side * w; vC = col; vE = endp; vS = side; gl_Position = projectionMatrix * p; }`,fragmentShader:`varying vec4 vC; varying float vE; varying float vS; void main(){ float edge = 1.0 - vS * vS * 0.75; float a = ((1.0 - vE) * 0.9 + 0.1) * edge; vec3 core = mix(vC.rgb, vec3(2.2, 1.9, 1.4), (1.0 - vE) * 0.55 * edge * edge); gl_FragColor = vec4(core * a, a); }`}),this.sparks=new U(n,this.sparkMat),this.sparks.frustumCulled=!1,e.add(this.sparks),this.si=0;let o=this.NM=160;this.sm=Array.from({length:o},()=>({life:0,p:new B,v:new B,max:1,size:1,dark:0}));let s=new Dr;this.mPos=new Float32Array(o*3),this.mSize=new Float32Array(o),this.mA=new Float32Array(o),this.mDark=new Float32Array(o),s.setAttribute(`position`,new fr(this.mPos,3)),s.setAttribute(`size`,new fr(this.mSize,1)),s.setAttribute(`alpha`,new fr(this.mA,1)),s.setAttribute(`dark`,new fr(this.mDark,1)),this.smokeMat=new Qo({uniforms:{map:{value:G.smoke},scale:{value:400}},transparent:!0,depthWrite:!1,vertexShader:`attribute float size; attribute float alpha; attribute float dark; varying float vA; varying float vD; uniform float scale; void main(){ vA=alpha; vD=dark; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=size*scale/max(0.1,-mv.z); gl_Position=projectionMatrix*mv; }`,fragmentShader:`uniform sampler2D map; varying float vA; varying float vD; void main(){ vec4 t=texture2D(map,gl_PointCoord); vec3 c=mix(vec3(0.55,0.56,0.6),vec3(0.08,0.07,0.07),vD); gl_FragColor=vec4(c,t.a*vA); }`}),this.smoke=new $i(s,this.smokeMat),this.smoke.frustumCulled=!1,e.add(this.smoke),this.mi=0;let c=this.NF=260;this.fl=Array.from({length:c},()=>({life:0,p:new B,v:new B,max:1,size:1}));let l=new Dr;this.fPos=new Float32Array(c*3),this.fSize=new Float32Array(c),this.fA=new Float32Array(c),this.fH=new Float32Array(c),l.setAttribute(`position`,new fr(this.fPos,3)),l.setAttribute(`size`,new fr(this.fSize,1)),l.setAttribute(`alpha`,new fr(this.fA,1)),l.setAttribute(`heat`,new fr(this.fH,1)),this.flameMat=new Qo({uniforms:{map:{value:G.smoke},scale:{value:400}},transparent:!0,depthWrite:!1,blending:2,vertexShader:`attribute float size; attribute float alpha; attribute float heat; varying float vA; varying float vH; uniform float scale; void main(){ vA=alpha; vH=heat; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=size*scale/max(0.1,-mv.z); gl_Position=projectionMatrix*mv; }`,fragmentShader:`uniform sampler2D map; varying float vA; varying float vH; void main(){ float t=texture2D(map,gl_PointCoord).a; vec3 c=mix(vec3(0.55,0.04,0.0),mix(vec3(1.5,0.55,0.08),vec3(2.0,1.7,0.9),vH*vH),vH); gl_FragColor=vec4(c*t*vA,t*vA); }`}),this.flames=new $i(l,this.flameMat),this.flames.frustumCulled=!1,e.add(this.flames),this.fi2=0;let u=this.NH=220;this.sh=Array.from({length:u},()=>({heat:0,max:1,life:0,p:new B,v:new B,r:new on,w:new B,s:1}));let d=kp();this.heat=new Float32Array(u),d.setAttribute(`heat`,new bi(this.heat,1).setUsage(nt));let f=new es({color:16777215,metalness:.92,roughness:.34,envMapIntensity:1.3,flatShading:!0});f.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float heat; varying float vHeat;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vHeat = heat;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vHeat;`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
totalEmissiveRadiance += vec3(2.4, 0.8, 0.14) * vHeat * vHeat;`)},this.shards=new Oi(d,f,u),this.shards.setColorAt(0,new H(1,1,1));for(let e=0;e<u;e++)this.shards.setColorAt(e,new H(.7,.72,.76));this.shards.instanceMatrix.setUsage(nt),this.shards.frustumCulled=!1,this.shards.count=u,this.chipHue=[new H(.78,.8,.84),new H(.5,.52,.56),new H(.9,.7,.35),new H(.32,.33,.37)],e.add(this.shards),this.hi=0,this._o=new Cn;for(let e=0;e<u;e++)this._o.scale.setScalar(0),this._o.updateMatrix(),this.shards.setMatrixAt(e,this._o.matrix);let p=jp();this.rings=[];let m=new Rr({map:p.ring,blending:2,transparent:!0,depthWrite:!1,toneMapped:!1});for(let t=0;t<6;t++){let t=new Qr(m.clone());t.visible=!1,e.add(t),this.rings.push({s:t,life:0,max:1,size:1})}this.ri=0,this.flares=[];let h=new Rr({map:p.burst,color:16756832,blending:2,transparent:!0,depthWrite:!1,toneMapped:!1});for(let t=0;t<12;t++){let t=new Qr(h.clone());t.visible=!1,e.add(t),this.flares.push({s:t,life:0})}this.fi=0,this.debris=[],this.scale=1}spark(e,t,n=36,r=9,i=1,a=1,o=0){n=Math.round(n*this.scale);for(let s=0;s<n;s++){let n=this.sp[this.si=(this.si+1)%this.NS];n.p.copy(e);let s=Math.random();n.v.set(t.x+(Math.random()-.5)*1.7,Math.abs(t.y)*.7+Math.random()*1.2,t.z+(Math.random()-.5)*1.7).normalize().multiplyScalar(r*(.3+s*s*1.15)),n.life=n.max=.35+Math.random()*.8+a*.1,n.hot=i,n.fire=o,n.w=a*(.7+Math.random()*.7)}}puff(e,t=3,n=.5,r=.9,i=.8){for(let a=0;a<t;a++){let t=this.sm[this.mi=(this.mi+1)%this.NM];t.p.copy(e).add(new B((Math.random()-.5)*.3,Math.random()*.2,(Math.random()-.5)*.3)),t.v.set((Math.random()-.5)*.6,i*(.5+Math.random()),(Math.random()-.5)*.6),t.life=t.max=1.2+Math.random()*1.2,t.size=r*(.7+Math.random()*.6),t.dark=n}}flame(e,t=1,n=.3,r=1.5,i=.12){t=Math.max(1,Math.round(t*this.scale));for(let a=0;a<t;a++){let t=this.fl[this.fi2=(this.fi2+1)%this.NF];t.p.set(e.x+(Math.random()-.5)*i,e.y+Math.random()*i*.5,e.z+(Math.random()-.5)*i),t.v.set((Math.random()-.5)*.7,r*(.55+Math.random()*.8),(Math.random()-.5)*.7),t.life=t.max=.32+Math.random()*.5,t.size=n*(.7+Math.random()*.6)}}explosion(e,t=1,n=!1){let r=(n?1.5:1)*(.7+.5*t),i=new B(0,1,0),a=Math.min(r,1.35);this.flare(e,3*a,16760944),this.flare(e,2.1*a,16742952),this.ring(e,4.5*r,16752704),setTimeout(()=>this.ring(e,6.5*r,16740384),90),this.spark(e,i,70*r,11*r,1.8,1.7,1),this.spark(e,new B(1,.3,0),30*r,9,1.5,1.4,1),this.spark(e,new B(-1,.3,0),30*r,9,1.5,1.4,1),this.flame(e,46*r,.9*r,3.4,.5),this.shrapnel(e,i,16*r,10,1.4),this.puff(e,8,.95,1.7*r,1.6)}shrapnel(e,t,n=16,r=7,i=1,a=null){n=Math.round(n*this.scale);for(let o=0;o<n;o++){let n=this.hi=(this.hi+1)%this.NH,o=this.sh[n];o.p.copy(e),o.v.set(t.x+(Math.random()-.5)*2,.6+Math.random()*1.5,t.z+(Math.random()-.5)*2).normalize().multiplyScalar(r*(.35+Math.random())),o.life=o.max=2.6+Math.random()*2.4,o.w.set((Math.random()-.5)*38,(Math.random()-.5)*38,(Math.random()-.5)*38),o.s=(.55+Math.random()*1.1)*i,o.heat=.7+Math.random()*.3,o.r.set(Math.random()*6,Math.random()*6,Math.random()*6);let s=a&&Math.random()<.4?a:this.chipHue[Math.random()*4|0];this.shards.setColorAt(n,s),this.shards.instanceColor.needsUpdate=!0}}ring(e,t=1.6,n=16765056){let r=this.rings[this.ri=(this.ri+1)%this.rings.length];r.s.position.copy(e),r.s.material.color.setHex(n),r.life=r.max=.32,r.size=t,r.s.visible=!0}flare(e,t=1.4,n=16769728){let r=this.flares[this.fi=(this.fi+1)%this.flares.length];r.s.position.copy(e),r.s.material.color.setHex(n),r.life=.18,r.size=t,r.s.visible=!0}addDebris(e,t,n,r,i,a){e.position.copy(t),e.quaternion.copy(n),this.scene.add(e);let o={obj:e,v:r.clone(),w:i.clone(),rest:!1,id:a,smoke:1.5};return this.debris.push(o),o}clearDebris(){for(let e of this.debris)e.obj.removeFromParent();this.debris=[]}update(e){let t=this.sHead,n=this.sTail,r=this.sCol;for(let i=0;i<this.NS;i++){let a=this.sp[i],o=i*12,s=i*16;if(a.life<=0){r[s+3]!==0&&(t.fill(0,o,o+12),n.fill(0,o,o+12),r.fill(0,s,s+16));continue}a.life-=e,a.v.y+=Op*.6*e,a.p.addScaledVector(a.v,e),a.p.y<.01&&(a.p.y=.01,a.v.y*=-.42,a.v.x*=.65,a.v.z*=.65);{let e=wd.A-.1;Math.abs(a.p.x)>e&&(a.p.x=Math.sign(a.p.x)*e,a.v.x*=-.4),Math.abs(a.p.z)>e&&(a.p.z=Math.sign(a.p.z)*e,a.v.z*=-.4)}let c=Math.max(0,a.life/a.max),l=(.034+.026*a.hot)*(.8+a.w*.35),u=a.p.x,d=a.p.y,f=a.p.z,p=u-a.v.x*l,m=d-a.v.y*l,h=f-a.v.z*l;for(let e=0;e<4;e++)t[o+e*3]=u,t[o+e*3+1]=d,t[o+e*3+2]=f,n[o+e*3]=p,n[o+e*3+1]=m,n[o+e*3+2]=h,r[s+e*4]=2.4*c+.4,r[s+e*4+1]=(1.5*c*c+.25*c)*(1-.6*a.fire),r[s+e*4+2]=.6*c*c*c*(1-a.fire),r[s+e*4+3]=(.6+.6*c)*a.w}let i=this.sparks.geometry.attributes;i.position.needsUpdate=i.tail.needsUpdate=i.col.needsUpdate=!0;for(let t=0;t<this.NM;t++){let n=this.sm[t];if(n.life<=0){this.mA[t]=0;continue}n.life-=e,n.p.addScaledVector(n.v,e),n.v.multiplyScalar(1-e*.6);let r=n.life/n.max;this.mPos[t*3]=n.p.x,this.mPos[t*3+1]=n.p.y,this.mPos[t*3+2]=n.p.z,this.mSize[t]=n.size*(1.6-r),this.mA[t]=Math.min(1,r*1.5)*.55,this.mDark[t]=n.dark}let a=this.smoke.geometry.attributes;a.position.needsUpdate=a.size.needsUpdate=a.alpha.needsUpdate=a.dark.needsUpdate=!0;for(let t=0;t<this.NF;t++){let n=this.fl[t];if(n.life<=0){this.fA[t]=0;continue}n.life-=e,n.p.addScaledVector(n.v,e),n.v.x*=1-e*1.2,n.v.z*=1-e*1.2;let r=Math.max(0,n.life/n.max);this.fPos[t*3]=n.p.x,this.fPos[t*3+1]=n.p.y,this.fPos[t*3+2]=n.p.z,this.fSize[t]=n.size*(.55+(1-r)*.55)*(r<.35?.5+r:1),this.fA[t]=Math.min(1,r*2.2)*.85,this.fH[t]=r}let o=this.flames.geometry.attributes;o.position.needsUpdate=o.size.needsUpdate=o.alpha.needsUpdate=o.heat.needsUpdate=!0;let s=this._o;for(let t=0;t<this.NH;t++){let n=this.sh[t];if(!(n.life<=0)){n.life-=e,n.v.y+=Op*e,n.p.addScaledVector(n.v,e),n.p.y<.02&&(n.p.y=.02,n.v.y*=-.3,n.v.x*=.5,n.v.z*=.5,n.w.multiplyScalar(.5));{let e=wd.A-.2;Math.abs(n.p.x)>e&&(n.p.x=Math.sign(n.p.x)*e,n.v.x*=-.4),Math.abs(n.p.z)>e&&(n.p.z=Math.sign(n.p.z)*e,n.v.z*=-.4)}n.r.x+=n.w.x*e,n.r.y+=n.w.y*e,n.r.z+=n.w.z*e,n.heat=Math.max(0,n.heat-e*.8),this.heat[t]=n.heat,s.position.copy(n.p),s.rotation.copy(n.r),s.scale.setScalar(n.life<=0?0:n.s*Math.min(1,n.life)),s.updateMatrix(),this.shards.setMatrixAt(t,s.matrix)}}this.shards.instanceMatrix.needsUpdate=!0,this.shards.geometry.attributes.heat.needsUpdate=!0;for(let t of this.rings){if(t.life<=0){t.s.visible=!1;continue}t.life-=e;let n=t.life/t.max;t.s.scale.setScalar(t.size*(1.9-n*1.6)),t.s.material.opacity=n*n}for(let t of this.flares){if(t.life<=0){t.s.visible=!1;continue}t.life-=e;let n=t.life/.18;t.s.scale.setScalar(t.size*(1.4-n*.6)),t.s.material.opacity=n}let c=wd.A-.3,l=new Et,u=new B;for(let t of this.debris){if(t.rest)continue;let n=t.obj;t.v.y+=Op*e,n.position.addScaledVector(t.v,e),t.w.lengthSq()>1e-4&&(u.copy(t.w).normalize(),l.setFromAxisAngle(u,t.w.length()*e),n.quaternion.premultiply(l)),n.position.y<.18&&(n.position.y=.18,t.v.y<0&&(t.v.y*=-.32),t.v.x*=.82,t.v.z*=.82,t.w.multiplyScalar(.8),t.v.lengthSq()<.05&&Math.abs(t.v.y)<.4&&(t.rest=!0));for(let e of[`x`,`z`])Math.abs(n.position[e])>c&&(n.position[e]=Math.sign(n.position[e])*c,t.v[e]*=-.5);t.smoke>0&&(t.smoke-=e,Math.random()<.3&&this.puff(n.position,1,.8,.6,.6))}}reset(){for(let e of this.sp)e.life=0;for(let e of this.sm)e.life=0;for(let e of this.fl)e.life=0;for(let e of this.sh)e.life=0;for(let e of this.rings)e.life=0;this.clearDebris()}},Np=B,Pp=class{constructor(e){this.app=e;let t=this.scene=new Nn;t.background=new H(329224),t.fog=new Mn(329224,22,46),t.environment=Td.env,this.arena=new Mf,t.add(this.arena.group),this.fx=new Mp(t),this.cam=new Ls(58,1,.1,120),this.camYaw=0,this.shake=0,this.punch=0,this.views=[],this.applyQuality()}applyQuality(){let e=Ad(),t=this.arena.key;t.castShadow=e.shadow>0,e.shadow&&(t.shadow.mapSize.set(e.shadow,e.shadow),t.shadow.map&&(t.shadow.map.dispose(),t.shadow.map=null)),this.fx.scale=Td.quality===`low`?.5:Td.quality===`high`?1.2:.85,this.arena.crowd.visible=Td.quality!==`low`}setFight(e){for(let e of this.views)e.dispose();this.fx.reset(),this.fight=e,this.debrisId=0,this.replay=null,this.holdCam=!1,this.views=e.bots.map(e=>{let t=new Dp(e.design,e.color,e.com);return this.scene.add(t.group),t}),e.debrisSnap=()=>this.fx.debris.map(e=>[e.id,...e.obj.position.toArray(),...e.obj.quaternion.toArray()]),this.debrisById=new Map,this.sync(0);let t=e.bots[0];this.camYaw=t.yaw,this.placeCam(1,!0)}sync(e){this.fight.bots.forEach((t,n)=>{let r=this.views[n];r.group.position.copy(t.pos),r.group.quaternion.copy(t.quat),r.inner.position.y=t.righting>0?Math.abs(Math.sin(t.righting*18))*.08:0;let i={},a={};for(let e of t.weapons)i[e.p.i]=e.rate,a[e.p.i]=e.swing;r.animate(e,{wheel:t.wheelRate,spin:i,swing:a})})}handleEvents(){let e=this.fight,t=e.events;e.events=[];for(let e of t)e.type===`hit`?(this.hitFx(e),this.app.onHit&&this.app.onHit(e)):e.type===`grind`?e.fire?(this.fx.spark(e.pos,e.dir,7,6,1.1,1,1),this.fx.flame(e.pos,1,.3,1.6),Math.random()<.35&&this.fx.flare(e.pos,.6,16748608)):(this.fx.spark(e.pos,e.dir,4,5,.7),Math.random()<.3&&this.fx.flare(e.pos,.5)):e.type===`under`?(this.fx.spark(e.pos,e.dir||new Np(0,1,0),8,4.5,.7),Math.random()<.55&&this.fx.flare(e.pos,.4,16769184)):e.type===`spark`?this.fx.spark(e.pos,e.dir,e.n,5):e.type===`damage`?(this.views[e.bot].setDamage(e.part,e.frac),e.frac>.6&&e.kind!==`burn`&&Math.random()<.5&&this.fx.puff(e.pos,1,.85,.5)):e.type===`ignite`?(this.fight.bots[e.bot].parts[e.part],this.views[e.bot].setScorch(e.part,1),this.fx.flame(e.pos,7,.5,2.2,.3),this.fx.spark(e.pos,new Np(0,1,0),10,5,1.2,1,1),this.fx.flare(e.pos,1.4,16747056)):e.type===`explode`?(this.fx.explosion(e.pos,e.power,e.large),this.shake=Math.max(this.shake,e.large?1.1:.8),this.punch=Math.max(this.punch,.3),this.arena.flashAt(e.pos,e.large?160:110)):e.type===`detach`?this.detachVisual(e.bot,e.part,e.vel,e.spin):e.type===`land`?(this.fx.puff(e.pos.clone().setY(.1),3,.3,.9,.4),this.shake=Math.max(this.shake,Math.min(.3,e.imp*.02))):e.type===`hammer`?(this.fx.spark(e.pos,new Np(0,1,0),56,9,1.4,1.4),this.fx.shrapnel(e.pos,new Np(0,1,0),10,6,1.4),this.fx.ring(e.pos,3),this.fx.puff(e.pos,5,.4,1.3),this.shake=.4,this.arena.flashAt(e.pos,40)):e.type===`spikes`&&(this.fx.spark(e.pos,new Np(0,1,0),18,6),this.shake=Math.max(this.shake,.15)),this.app.onEvent&&this.app.onEvent(e)}detachVisual(e,t,n,r){let i=this.fight.bots[e],a=this.views[e],o=i.parts[t];a.hidePart(t,!0);let s=Ep(o.t,i.color,!0,0,o.lv||1,!!o.inf),c=s.root,l=a.objs[t];l&&(c.quaternion.copy(i.quat).multiply(l.root.quaternion),l.meshes.forEach((e,t)=>{s.meshes[t]&&e.material!==s.meshes[t].material&&(s.meshes[t].material=e.material)}));let u=i.world(o),d=++this.debrisId;c.userData.debrisId=d;let f=this.fx.addDebris(c,u,c.quaternion,n,r,d);this.debrisById.set(d,f),this.fx.spark(u,n.clone().normalize(),26,7),this.fx.shrapnel(u,n.clone().normalize(),8,6),this.fx.puff(u,3,.8,.8),this.fx.flare(u,1.6,16765056)}hitFx(e){let t=e.dmg,n=Math.min(1.7,.35+t/28),r=e.dir;this.fx.spark(e.pos,r,12+Math.min(46,t*1.5),5.5+t*.16,.8+n*.5,.75+n*.6,+!!e.fire),e.fire&&(this.fx.flame(e.pos,9+t*.15,.5+n*.2,2.4,.3),this.fx.flare(e.pos,1.4+n,16744496)),this.fx.shrapnel(e.pos,r,Math.min(12,2+t/5),5+t*.1,.8+n*.5),this.fx.flare(e.pos,.7+t*.035),this.arena.flashAt(e.pos,10+t),t>5&&this.fx.puff(e.pos,1+ +(t>14),.3,.45+n*.3,.5),e.big&&(this.fx.puff(e.pos,2,.55,.8,.8),this.fx.ring(e.pos,1.3+n)),this.shake=Math.max(this.shake,Math.min(.35,t*.012)),e.crit&&(this.shake=Math.max(this.shake,.6),this.punch=.32,this.fx.flare(e.pos,3.4,16769152),this.fx.ring(e.pos,3.4,16760928),this.fx.spark(e.pos,r,42,11,1.7,1.6),this.fx.spark(e.pos,new Np(0,1,0),22,7,1.5,1.3),this.fx.shrapnel(e.pos,r,20,9,1.5),this.fx.puff(e.pos,4,.5,1.3,.9))}placeCam(e,t=!1){let n=this.fight.bots[0],r=this.fight.bots[1],i=1-Math.exp(-e*3.2);if(!n.air&&!n.fall){let e=n.yaw-this.camYaw;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;this.camYaw+=t?e:e*i}if(this.holdCam)return;let a=new Np(Math.sin(this.camYaw),0,Math.cos(this.camYaw)),o=n.pos.clone().setY(Math.max(0,n.pos.y)).addScaledVector(a,-5.8);o.y=3+Math.max(0,n.pos.y)*.45;let s=n.pos.distanceTo(r.pos);o.addScaledVector(a,-Math.min(2.2,Math.max(0,s-5.5)*.22)),o.y+=Math.min(1.5,Math.max(0,s-5.5)*.14);let c=wd.A-.45,l=0;for(let e of[`x`,`z`])Math.abs(o[e])>c&&(l+=Math.abs(o[e])-c,o[e]=Math.sign(o[e])*c);o.y+=l*.45,t?this.cam.position.copy(o):this.cam.position.lerp(o,1-Math.exp(-e*5));let u=n.pos.clone().setY(.28+Math.max(0,n.pos.y)*.55).addScaledVector(a,1.9),d=this.cam.aspect<.75?62:52,f=d;if(this.punch>0){let t=Math.min(1,this.punch/.12);f=d-11*t,this.cam.position.lerp(u,.12*t),this.punch=Math.max(0,this.punch-e)}this.cam.fov!==f&&(this.cam.fov=f,this.cam.updateProjectionMatrix()),this.shake>0&&(this.cam.position.add(new Np((Math.random()-.5)*this.shake,(Math.random()-.5)*this.shake,(Math.random()-.5)*this.shake)),this.shake=Math.max(0,this.shake-e*1.6)),this.cam.lookAt(u)}update(e){if(this.replay)return this.updateReplay(e);this.handleEvents(),this.sync(e),this.fx.update(e),this.arena.update(e,this.fight.hz);for(let[e,t]of this.fight.bots.entries())if(t.integrity<.55&&Math.random()<(.6-t.integrity)*.25){let e=t.parts.find(e=>e.on&&Math.random()<.3);e&&this.fx.puff(t.world(e),1,.85,.55)}this.fireFx(e),this.placeCam(e)}fireFx(e){let t=this.fight;if(!t)return;this.fa=this.fa||[{f:0,s:0,w:0},{f:0,s:0,w:0}];let n=this.fx.scale;t.bots.forEach((t,r)=>{let i=this.views[r],a=this.fa[r],o=this._ft||(this._ft=new Np);for(let r of t.weapons)if(r.inf&&(i.setHeat(r.p.i,r.heat),r.fire&&r.p.on))for(a.w+=e*34*n;a.w>=1;)--a.w,t.world(r.p,o),o.x+=(Math.random()-.5)*.45,o.z+=(Math.random()-.5)*.45,o.y+=.05+Math.random()*.25,this.fx.flame(o,1,.34,1.7,.1);let s=[];for(let e of t.parts)e.scorch&&i.setScorch(e.i,1),e.burn&&e.on?(s.push(e),i.setBurn(e.i,Math.min(1,.45+e.burn.t*.4))):i.objs[e.i]&&i.objs[e.i].bq&&i.setBurn(e.i,0);if(s.length){for(a.f+=e*Math.min(90,18*s.length)*n,a.s+=e*7*Math.min(3,s.length);a.f>=1;){--a.f;let e=s[Math.random()*s.length|0];t.world(e,o),o.y+=.12,this.fx.flame(o,1,.5+Math.random()*.22,1.7+Math.random(),.3)}for(;a.s>=1;){--a.s;let e=s[Math.random()*s.length|0];t.world(e,o),o.y+=.35,this.fx.puff(o,1,.95,1,1.5)}}})}startReplay(e,t){let n=this.fight;return this.replay={clips:e,i:-1,t:0,onDone:t,frames:n.rec.frames,det:n.rec.detach,hits:n.hits,firedHits:new Set},this.nextClip(),this.replay}nextClip(){let e=this.replay;if(e.i++,e.i>=e.clips.length)return this.stopReplay(!0);let t=e.clips[e.i];e.t0=Math.max(e.frames[0].t,t.ct-1.5),e.t1=Math.min(e.frames[e.frames.length-1].t,t.ct+(t.ko?1.8:1.4)),e.t=e.t0;let n=new Np().fromArray(t.pos||[0,0,0]),r=wd.A,i=[[-r+.6,4.2,-r+.6],[r-.6,4.2,-r+.6],[-r+.6,4.2,r-.6],[r-.6,4.2,r-.6],[0,1.4,-r-.1],[0,1.4,r+.1],[-r-.1,1.4,0],[r+.1,1.4,0],[0,9.5,.01]],a=0,o=-1e9;i.forEach((t,r)=>{let i=n.distanceTo(new Np(...t)),s=-Math.abs(i-6.5)+(r===(e.lastCam??-1)?-3:0)+(r>=4&&r<8?.8:0);s>o&&(o=s,a=r)}),e.lastCam=a,e.cam=new Np(...i[a]),e.focus=n.clone(),e.clip=t,e.firedHits.clear(),this.app.onReplayClip&&this.app.onReplayClip(t,e.i,e.clips.length)}stopReplay(e){let t=this.replay;if(t){this.replay=null,this.fight.bots.forEach((e,t)=>{e.parts.forEach(e=>this.views[t].hidePart(e.i,!e.on))});for(let e of this.fx.debris)e.obj.visible=!0;this.applyFrame(t.frames[t.frames.length-1],t.frames[t.frames.length-1],0,0),t.onDone&&t.onDone(e)}}frameAt(e){let t=this.replay.frames,n=0,r=t.length-1;for(;r-n>1;){let i=n+r>>1;t[i].t<=e?n=i:r=i}return[t[n],t[r]]}applyFrame(e,t,n,r){let i=new Et,a=new Et,o=e.t+(t.t-e.t)*n;this.fight.bots.forEach((s,c)=>{let l=this.views[c],u=e.b[c],d=t.b[c];l.group.position.fromArray(u.p).lerp(new Np().fromArray(d.p),n),i.fromArray(u.q),a.fromArray(d.q),l.group.quaternion.copy(i).slerp(a,n);let f={},p={};for(let[e,t,n,r]of u.sp)f[e]=t,p[e]=n,r!==void 0&&l.setHeat(e,r);l.animate(r,{wheel:u.w,spin:f,swing:p});{let e=new Set(u.bn||[]);for(let t of l.objs)t&&(e.has(t.i)||t.bq)&&l.setBurn(t.i,e.has(t.i)?.8:0)}if(this.replay)for(let e of s.parts){let t=this.replay.det.find(t=>t.bot===c&&t.part===e.i);l.hidePart(e.i,!!t&&t.ct<=o)}});let s=new Map((e.d||[]).map(e=>[e[0],e])),c=new Map((t.d||[]).map(e=>[e[0],e]));for(let e of this.fx.debris){let t=s.get(e.id);if(e.obj.visible=!!t,t){let r=c.get(e.id)||t;e.obj.position.set(t[1],t[2],t[3]).lerp(new Np(r[1],r[2],r[3]),n),i.set(t[4],t[5],t[6],t[7]),a.set(r[4],r[5],r[6],r[7]),e.obj.quaternion.copy(i).slerp(a,n)}}this.arena.update(r,e.hz)}updateReplay(e){let t=this.replay,n=.36;if(t.t+=e*n,t.t>=t.t1&&(this.nextClip(),!this.replay))return;let[r,i]=this.frameAt(t.t),a=i.t>r.t?(t.t-r.t)/(i.t-r.t):0;this.applyFrame(r,i,Math.min(1,Math.max(0,a)),e*n);for(let e of t.hits)if(e.ct<=t.t&&e.ct>t.t-.4&&!t.firedHits.has(e)){t.firedHits.add(e);let n=new Np().fromArray(e.pos);if(e.explode){this.fx.explosion(n,1,e.dmg>50);continue}e.fire&&this.fx.flame(n,14,.5,2.4,.3),this.fx.spark(n,new Np(0,1,0),30+e.dmg,6,1.2,1.1),this.fx.shrapnel(n,new Np(0,1,0),4+e.dmg/6,5),this.fx.flare(n,1.2+e.dmg*.03),this.arena.flashAt(n,30)}this.rfa=(this.rfa||0)+e*n*40;let o=new Np;for(;this.rfa>=1;)--this.rfa,this.fight.bots.forEach((e,t)=>{let n=r.b[t];if(!n.bn||!n.bn.length)return;let i=this.views[t].objs[n.bn[Math.random()*n.bn.length|0]];i&&(i.root.getWorldPosition(o),o.y+=.1,this.fx.flame(o,1,.32,1.6,.2),Math.random()<.15&&this.fx.puff(o.clone().setY(o.y+.3),1,.95,.65,1.3))});this.fx.update(e*n);let s=this.views[0].group.position.clone().lerp(this.views[1].group.position,.5).setY(.4);t.focus.lerp(s,1-Math.exp(-e*4));let c=(t.t-t.t0)/(t.t1-t.t0),l=t.cam.clone().lerp(t.focus,.12+c*.18);this.cam.position.copy(l),this.cam.lookAt(t.focus),this.cam.fov=this.cam.aspect<.75?56:44,this.cam.updateProjectionMatrix()}endReplayFov(){this.cam.fov=this.cam.aspect<.75?66:54,this.cam.updateProjectionMatrix()}dispose(){for(let e of this.views)e.dispose();this.views=[],this.fx.reset()}},Fp=t({aiInferno:()=>qp,aiLevel:()=>Kp,betCap:()=>zp,betTotal:()=>um,botName:()=>Wp,botParts:()=>Up,buyInferno:()=>ym,canCrateFix:()=>im,canEnter:()=>Gp,careerLevel:()=>Rp,crateAdd:()=>nm,crateAttach:()=>om,crateFix:()=>am,crateLimits:()=>tm,crateRemove:()=>rm,crateUse:()=>em,duelResult:()=>hm,enterTournament:()=>Yp,entrant:()=>Xp,forfeit:()=>mm,fuelState:()=>xm,hasInferno:()=>_m,isUnlocked:()=>Hp,nextOpponent:()=>Qp,odds:()=>lm,pMatch:()=>Bp,pairings:()=>Zp,placeBet:()=>dm,playerRating:()=>sm,recordMatch:()=>fm,refuel:()=>Sm,rng:()=>Ip,roundName:()=>$p,tankCap:()=>bm,toOdds:()=>Vp,tourDef:()=>Lp,tourWinProb:()=>cm,upgradeWeapon:()=>vm,weaponLevel:()=>gm});function Ip(e){let t=e>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Lp=e=>sf.find(t=>t.id===e),Rp=e=>Math.min(10,1+(e.career.wins.backyard||0)+2*(e.career.wins.regional||0)+Math.floor((e.career.duelWins||0)/5)),zp=e=>100+150*(Rp(e)-1),Bp=(e,t)=>1/(1+Math.exp(-(e-t)/55)),Vp=(e,t=.92)=>Math.round(Math.min(25,Math.max(1.15,t/Math.max(e,.01)))*20)/20;function Hp(e,t){let n=Lp(t);return!n||n.locked?!1:!n.req||(e.career.wins[n.req]||0)>0}function Up(e,t){return t===`junk`?pf.parts.map(Uf):e.slots[t].parts.map(Uf)}function Wp(e,t){return t===`junk`?pf.name:e.slots[t].name}function Gp(e,t,n){let r=Lp(t);if(!Hp(e,t))return{ok:!1,reason:r&&r.locked?`Locked in this version`:`Win `+(Lp(r.req)||{}).name+` first`};let i=qf(Up(e,n));if(!i.ok)return{ok:!1,reason:`Bot not ready: `+i.errors[0]};let a=n===`junk`&&t===`backyard`&&e.money<r.fee;return e.money<r.fee&&!a?{ok:!1,reason:`Entry fee $${r.fee} — you have $${e.money}`}:{ok:!0,fee:a?0:r.fee,hardship:a}}var Kp=(e,t)=>Math.min(ef.max,t?[2,4,5][Math.min(2,e)]:1+e),qp=(e,t)=>!!t&&Kp(e,t)>=ef.inferno;function Jp(e,t,n,r,i,a,o=0,s=null){let c=mf(r,i,{lv:Kp(i,s),inferno:qp(i,s)}).map(Uf);if(o){let e=c.filter(e=>q[e.t].cat===`armor`);for(let t=0;t<o&&e.length;t++){let t=Math.floor(a()*e.length);e.splice(t,1)[0].missing=!0}c=c.filter(e=>!e.missing)}let l=qf(c);return{id:e,name:t,team:n,style:r,tier:i,rival:s,parts:c.map(Wf),rating:l.rating+(s?25:0),skill:s?.85+i*.08:.55+i*.12+a()*.1}}function Yp(e,t,n,r=Date.now()&16777215){let i=Gp(e,t,n);if(!i.ok)return{ok:!1,reason:i.reason};let a=Lp(t),o=Ip(r);e.money-=i.fee;let s=Up(e,n).map(Wf),c={id:`player`,name:Wp(e,n),team:`YOUR TEAM`,player:!0,parts:s,rating:qf(s).rating},l=a.rivals.map(t=>{let n=lf[t],r=(e.rivals[t]||0)>0;return Jp(`rival_`+t,n.bot+(a.tier+ +!!r>0?` MK`+[`I`,`II`,`III`,`IV`][Math.min(3,a.tier+ +!!r)]:``),n.team,n.style,Math.min(2,a.tier+ +!!r),o,0,t)}),u=hf.slice(),d=[];for(;d.length<7-l.length;){let e=u.splice(Math.floor(o()*u.length),1)[0];d.push(Jp(`gen_`+d.length,e[0],e[1],e[2],a.tier,o,a.tier===0?1+Math.floor(o()*3):Math.floor(o()*2)))}d.sort((e,t)=>e.rating-t.rating);let f=[c,d[0],l[0],d[1]||l[2],d[2]||l[3],l[1]||d[3],...d.slice(3)].filter(Boolean),p=new Set,m=[];for(let e of[...f,...l,...d])!p.has(e.id)&&m.length<8&&(p.add(e.id),m.push(e));return e.tour={id:t,slot:n,seed:r,tier:a.tier,fee:i.fee,hardship:i.hardship,prize:a.prize,entrants:m,round:0,alive:m.map(e=>e.id),results:[],crate:[],bets:[],status:`crate`,started:Date.now(),partsLost:0,matchLog:[]},{ok:!0,tour:e.tour}}var Xp=(e,t)=>e.entrants.find(e=>e.id===t);function Zp(e){let t=e.alive,n=[];for(let e=0;e<t.length;e+=2)n.push([t[e],t[e+1]]);return n}function Qp(e){let t=Zp(e).find(e=>e.includes(`player`));return t?Xp(e,t[0]===`player`?t[1]:t[0]):null}var $p=e=>[`QUARTERFINAL`,`SEMIFINAL`,`FINAL`][e.round]||`ROUND `+(e.round+1);function em(e){let t=0,n=0;for(let r of e.crate)t+=q[r.t].slots,n+=q[r.t].wt;return{slots:t,wt:n}}function tm(e){let t=Lp(e.id);return{slots:t.crateSlots,wt:t.crateWt}}function nm(e,t){let n=e.tour;if(!n||!q[t])return{ok:!1,reason:`no tournament`};let r=em(n),i=tm(n),a=q[t];return r.slots+a.slots>i.slots?{ok:!1,reason:`Crate is full (slots)`}:r.wt+a.wt>i.wt+1e-6?{ok:!1,reason:`Crate too heavy`}:(e.spares[t]||0)>0?(e.spares[t]--,n.crate.push({t,src:`spare`}),{ok:!0,free:!0}):e.money<a.cost?{ok:!1,reason:`Not enough money`}:(e.money-=a.cost,n.crate.push({t,src:`buy`,paid:a.cost}),{ok:!0})}function rm(e,t){let n=e.tour,r=n&&n.crate[t];return!r||n.round>0||n.status!==`crate`?!1:(n.crate.splice(t,1),r.src===`spare`?e.spares[r.t]=(e.spares[r.t]||0)+1:e.money+=r.paid,!0)}function im(e){let t=q[e.t];return e.missing?!0:t.cat===`frame`||t.power?!1:e.hp<.999}function am(e,t){let n=e.tour,r=Xp(n,`player`),i=Uf(r.parts[t]);if(!im(i))return{ok:!1,reason:q[i.t].cat===`frame`?`Frame dents need the workshop`:q[i.t].power?`Motor wear needs the workshop`:`Not damaged`};let a=n.crate.findIndex(e=>e.t===i.t);return a<0?{ok:!1,reason:`No `+q[i.t].name+` in the crate`}:(n.crate.splice(a,1),i.missing=!1,i.hp=1,i.wear=0,r.parts[t]=Wf(i),n.used=(n.used||0)+1,{ok:!0})}function om(e,t,n,r,i,a=0){let o=e.tour,s=Xp(o,`player`),c=o.crate[t];if(!c)return{ok:!1,reason:`no item`};let l=s.parts.map(Uf);if(l.some(e=>e.x===n&&e.y===r&&e.z===i))return{ok:!1,reason:`occupied`};l.push({t:c.t,x:n,y:r,z:i,r:a,hp:1,wear:0,missing:!1});let u=qf(l);return u.errors.some(e=>/Overweight|power|not attached/.test(e))?{ok:!1,reason:u.errors[0]}:(q[c.t].fuel&&s.fuel!==void 0&&(s.fuel+=q[c.t].fuel),o.crate.splice(t,1),s.parts=l.map(Wf),o.used=(o.used||0)+1,{ok:!0})}function sm(e){return qf(Xp(e,`player`).parts).rating}function cm(e){let t=sm(e),n=1,r=Qp(e);if(!r)return 0;n*=Bp(t,r.rating);let i=e.alive.filter(e=>e!==`player`&&e!==r.id).map(t=>Xp(e,t).rating).sort((e,t)=>t-e),a=Math.log2(e.alive.length)-1;for(let e=0;e<a;e++)n*=Bp(t,i[e]??i[0]??t);return n}function lm(e,t){let n=Qp(e),r=sm(e),i=n?Bp(r,n.rating):.5;return t===`tour`?Vp(cm(e)):t===`ko60`?Vp(i*.38,.9):t===`flawless`?Vp(i*.45,.9):t===`rival`&&n&&n.rival?Vp(i,.95):0}var um=e=>e.bets.reduce((e,t)=>e+t.stake,0);function dm(e,t,n){let r=e.tour;if(n=Math.floor(n),!r||![`tour`,`ko60`,`flawless`,`rival`].includes(t))return{ok:!1,reason:`bad bet`};if(n<=0)return{ok:!1,reason:`Stake must be positive`};if(n>e.money)return{ok:!1,reason:`Not enough money`};if(um(r)+n>zp(e))return{ok:!1,reason:`Bet cap $${zp(e)} for your career level`};let i=lm(r,t);if(!i)return{ok:!1,reason:`Not available for this match`};let a=Qp(r);return e.money-=n,r.bets.push({kind:t,stake:n,odds:i,round:r.round,opp:a&&a.id,rival:a&&a.rival,open:!0}),{ok:!0,odds:i}}function fm(e,t){let n=e.tour,r=Qp(n),i=Xp(n,`player`);t.fuel!==void 0&&(i.fuel=Math.max(0,t.fuel)),i.parts=t.parts.map(e=>{let t=Uf(e);return q[t.t].power&&!t.missing&&(t.wear=Math.min(.9,t.wear+.06+(1-t.hp)*.4)),Wf(t)}),n.partsLost+=t.partsLost||0;let a=[];for(let r of n.bets){if(!r.open||r.kind===`tour`||r.round!==n.round)continue;let i=!1;if(r.kind===`ko60`&&(i=t.win&&t.ko&&t.time<=60),r.kind===`flawless`&&(i=t.win&&!t.partsLost),r.kind===`rival`&&(i=t.win),r.open=!1,r.won=i,i){let t=Math.round(r.stake*r.odds);e.money+=t,a.push({kind:r.kind,pay:t})}}t.win&&r&&r.rival&&(e.rivals[r.rival]=(e.rivals[r.rival]||0)+1),n.matchLog.push({round:n.round,opp:r&&r.id,win:t.win,ko:t.ko,time:t.time,how:t.how});let o=Ip(n.seed+97*(n.round+1)),s=[];for(let[e,r]of Zp(n)){if(e===`player`||r===`player`){s.push(t.win?`player`:e===`player`?r:e);continue}let i=Xp(n,e),a=Xp(n,r);s.push(o()<Bp(i.rating,a.rating)?e:r)}return n.results.push(Zp(n).map((e,t)=>({m:e,w:s[t]}))),n.alive=s,t.win?n.alive.length===1?pm(e,!0,a):(n.round++,n.status=`pit`,{done:!1,payouts:a}):pm(e,!1,a)}function pm(e,t,n){let r=e.tour,i=Lp(r.id),a=0,o=0;for(let e of r.bets)e.open&&(e.open=!1,e.won=t&&e.kind===`tour`,e.won&&(o+=Math.round(e.stake*e.odds)));t&&(a=i.prize,e.money+=a+o,e.career.wins[r.id]=(e.career.wins[r.id]||0)+1),e.career.played=(e.career.played||0)+1;for(let t of r.crate)e.spares[t.t]=(e.spares[t.t]||0)+1;r.slot!==`junk`&&(e.slots[r.slot].parts=Xp(r,`player`).parts.slice());let s={slot:r.slot,won:t,prize:a,betWin:o,sidePay:n.reduce((e,t)=>e+t.pay,0),fee:r.fee,kept:r.crate.length,round:r.round,tourName:i.name};return e.lastTour=s,r.status=t?`won`:`lost`,r.summary=s,e.tour=null,{done:!0,won:t,payouts:n,summary:s}}function mm(e){return e.tour?pm(e,!1,[]):null}function hm(e,t){return t&&(e.money+=cf.payout,e.career.duelWins=(e.career.duelWins||0)+1),t?cf.payout:0}var gm=(e,t)=>Math.max(1,Math.min(ef.max,e.wpnLv&&e.wpnLv[t]||1)),_m=(e,t)=>!!(e.inferno&&e.inferno[t])&&gm(e,t)>=ef.inferno;function vm(e,t,n){if(!q[t]||!q[t].wpn)return{ok:!1,reason:`Not a weapon`};let r=gm(e,t);if(r>=ef.max)return{ok:!1,reason:`Already max level`};let i=rf(t,r+1);if(e.money<i)return{ok:!1,reason:`Needs $${i}`};if(n){let i=e.wpnLv[t];e.wpnLv[t]=r+1,Pf(e);let a=qf(n.map(Uf));if(e.wpnLv[t]=i,i===void 0&&delete e.wpnLv[t],Pf(e),a.errors.some(e=>/Overweight/.test(e)))return{ok:!1,reason:`Too heavy for the weight class — free up `+(a.weight-a.cap).toFixed(2)+` lb first`}}return e.money-=i,e.wpnLv[t]=r+1,Pf(e),{ok:!0,lv:r+1,cost:i}}function ym(e,t){if(!q[t]||!q[t].wpn)return{ok:!1,reason:`Not a weapon`};if(gm(e,t)<ef.inferno)return{ok:!1,reason:`Reach level 5 first`};if(e.inferno[t])return{ok:!1,reason:`Already owned`};let n=af(t);return e.money<n?{ok:!1,reason:`Needs $${n}`}:(e.money-=n,e.inferno[t]=!0,Pf(e),{ok:!0,cost:n})}var bm=e=>e.reduce((e,t)=>{let n=t.t?t:Uf(t);return e+(n.missing?0:q[n.t].fuel||0)},0);function xm(e){let t=Xp(e,`player`),n=bm(t.parts),r=Math.min(n,t.fuel===void 0?n:t.fuel),i=Math.max(0,n-r);return{cap:n,fuel:r,missing:i,cost:Math.ceil(i*nf-1e-6)}}function Sm(e){let t=e.tour;if(!t)return{ok:!1,reason:`no tournament`};let n=xm(t);return n.cap?n.missing<=0?{ok:!1,reason:`Tank is full`}:e.money<n.cost?{ok:!1,reason:`Refuel costs $${n.cost}`}:(e.money-=n.cost,Xp(t,`player`).fuel=n.cap,{ok:!0,cost:n.cost}):{ok:!1,reason:`No fuel tank on your bot`}}var Cm=B,wm=Math.PI,Tm=class{constructor(e){this.app=e;let t=this.scene=new Nn;t.background=new H(658190),t.environment=Td.env,t.fog=new Mn(658190,12,28),this.cam=new Ls(42,1,.05,80),this.orbit={th:.75,ph:1,r:5.6,tgt:new Cm(0,.45,0)},t.add(new Ts(10466512,1709330,.7));let n=new Ws(16773341,2.4);n.position.set(4,8,3),n.castShadow=!0,n.shadow.mapSize.set(1024,1024);let r=n.shadow.camera;r.left=r.bottom=-4,r.right=r.top=4,n.shadow.bias=-8e-4,n.shadow.normalBias=.02,t.add(n),this.key=n;let i=new Ws(4245759,1.4);i.position.set(-5,3,-4),t.add(i);let a=new Ws(16747066,1);a.position.set(5,2,-5),t.add(a);let o=new U(new ca(16,48),new es({map:G.floorTex.map,normalMap:G.floorTex.normal,roughness:.85,metalness:.5,color:9080729}));o.rotation.x=-wm/2,o.position.y=-.09,o.receiveShadow=!0,t.add(o);let s=new U(new la(2.6,2.7,.1,64),G.dark);s.position.y=-.05,s.receiveShadow=!0,t.add(s);let c=new U(new Ho(2.62,.035,8,96),new ai({color:16738842}));c.rotation.x=wm/2,c.position.y=0,t.add(c);let l=Xd.x[1]-Xd.x[0]+1,u=Xd.z[1]-Xd.z[0]+1,d=new U(new Lo(l*K,u*K),new es({color:1712944,roughness:.6,metalness:.4,transparent:!0,opacity:.85}));d.rotation.x=-wm/2,d.position.y=.002,t.add(d),this.plate=d;let f=[];for(let e=0;e<=l;e++){let t=(Xd.x[0]-.5+e)*K;f.push(t,.006,(Xd.z[0]-.5)*K,t,.006,(Xd.z[1]+.5)*K)}for(let e=0;e<=u;e++){let t=(Xd.z[0]-.5+e)*K;f.push((Xd.x[0]-.5)*K,.006,t,(Xd.x[1]+.5)*K,.006,t)}let p=new Dr;p.setAttribute(`position`,new hr(f,3)),t.add(new qi(p,new Fi({color:2803967,transparent:!0,opacity:.35})));let m=new U(new ua(.16,.36,3),new ai({color:16738842}));m.rotation.x=wm/2,m.position.set(0,.02,(Xd.z[1]+1.1)*K),t.add(m),this.cursor=new U(new wf(K*1.04,K*1.04,K*1.04,2,.04),new ai({color:4259728,transparent:!0,opacity:.28,depthWrite:!1})),this.cursor.visible=!1,t.add(this.cursor),this.cursorEdge=new qi(new ga(new oa(K*1.05,K*1.05,K*1.05)),new Fi({color:4259728})),this.cursor.add(this.cursorEdge),this.botRoot=new wn,t.add(this.botRoot),this.sel=`frame`,this.rot=0,this.mirror=!1,this.mode=`build`,this.undoStack=[],this.ray=new cc}open(e){if(this.pit=e===`pit`,this.slot=this.pit?null:e,this.undoStack=[],this.mode=`build`,this.pit){let e=this.app.save.tour.crate[0];this.sel=e?e.t:null}this.rebuild()}get parts(){return this.pit?Xp(this.app.save.tour,`player`).parts.map(Uf):this.slot===`junk`?[]:this.app.save.slots[this.slot].parts.map(Uf)}set parts(e){let t=e.map(Wf);this.pit?Xp(this.app.save.tour,`player`).parts=t:this.app.save.slots[this.slot].parts=t,this.app.persist()}get color(){return this.app.save.settings.color||`#ff6a1a`}rebuild(){this.view&&this.view.dispose(),this.view=new Dp(this.parts,this.color,{x:0,z:0},{ghosts:!0}),this.botRoot.add(this.view.group),this.app.onBuilderChange&&this.app.onBuilderChange()}stats(){return qf(this.parts)}canAfford(e){return this.pit||this.app.save.money>=q[e].cost}place(e,t,n,r=this.sel,i=this.rot){if(!r||!q[r])return{ok:!1,reason:`Pick a part`};if(!Gf(e,t,n))return{ok:!1,reason:`Outside the build area`};let a=this.parts;if(a.some(r=>r.x===e&&r.y===t&&r.z===n))return{ok:!1,reason:`Cell taken`};if(q[r].cat===`mobility`&&!q[r].power&&(i=e<0?3:e>0?1:i),this.pit){let a=this.app.save.tour.crate.findIndex(e=>e.t===r);if(a<0)return{ok:!1,reason:`None left in the crate`};let o=om(this.app.save,a,e,t,n,i);return o.ok&&(this.app.persist(),this.rebuild(),this.app.save.tour.crate.some(e=>e.t===r)||(this.sel=(this.app.save.tour.crate[0]||{}).t||null)),o}let o=qf(a).cls,s=[[e,t,n,i]];this.mirror&&e!==0&&Gf(-e,t,n)&&!a.some(r=>r.x===-e&&r.y===t&&r.z===n)&&s.push([-e,t,n,Yf(i)]);let c=0,l=0,u=a.slice();for(let[e,t,n,i]of s){let a=q[r];if(qf(u).weight+a.wt>o.cap+1e-6){if(!c)return{ok:!1,reason:`Over the ${o.cap} lb weight cap`};break}if(this.app.save.money<a.cost){if(!c)return{ok:!1,reason:`Need $${a.cost}`};break}this.app.save.money-=a.cost,l+=a.cost,u.push({t:r,x:e,y:t,z:n,r:i,hp:1,wear:0,missing:!1}),c++}return this.undoStack.push({parts:a.map(Wf),money:this.app.save.money+l}),this.parts=u,this.rebuild(),{ok:!0,added:c,spent:l}}remove(e,t,n){if(this.pit)return{ok:!1,reason:`Pit crew can only bolt on crate parts`};let r=this.parts,i=r.findIndex(r=>r.x===e&&r.y===t&&r.z===n);if(i<0)return{ok:!1,reason:`Nothing there`};let a=[i];if(this.mirror&&e!==0){let o=r.findIndex(a=>a.x===-e&&a.y===t&&a.z===n&&a.t===r[i].t);o>=0&&a.push(o)}let o=0;for(let e of a){let t=r[e];t.missing||(o+=Math.round(q[t.t].cost*t.hp*(1-t.wear*.5)))}return this.undoStack.push({parts:r.map(Wf),money:this.app.save.money}),this.app.save.money+=o,this.parts=r.filter((e,t)=>!a.includes(t)),this.rebuild(),{ok:!0,refund:o}}undo(){let e=this.undoStack.pop();return!e||this.pit?!1:(this.app.save.money=e.money,this.parts=e.parts.map(Uf),this.rebuild(),!0)}rotate(){return this.rot=(this.rot+1)%4,this.rot}pick(e,t){let n=Td.renderer.domElement.getBoundingClientRect(),r=new z((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1);this.ray.setFromCamera(r,this.cam);let i=this.ray.intersectObjects(this.view.group.children,!0).filter(e=>e.object.userData.partIndex!==void 0&&e.object.visible),a=this.parts;if(i.length){let e=i[0],t=a[e.object.userData.partIndex],n=e.face.normal.clone().transformDirection(e.object.matrixWorld),r=Math.abs(n.x)>Math.abs(n.y)?Math.abs(n.x)>Math.abs(n.z)?`x`:`z`:Math.abs(n.y)>Math.abs(n.z)?`y`:`z`,o={x:0,y:0,z:0};return o[r]=Math.sign(n[r]),{part:t,index:e.object.userData.partIndex,cell:[t.x,t.y,t.z],place:[t.x+o.x,t.y+o.y,t.z+o.z]}}let o=this.ray.intersectObject(this.plate)[0];if(o){let e=Math.round(o.point.x/K),t=Math.round(o.point.z/K);if(Gf(e,0,t))return{place:[e,0,t]}}return null}showCursor(e){if(!e){this.cursor.visible=!1;return}let t=this.mode===`erase`||this.pit&&e.part&&im(e.part),n=t&&e.cell?e.cell:e.place,r=t?!!e.part:Gf(...n);this.cursor.visible=!0,this.cursor.position.copy(xp({x:n[0],y:n[1],z:n[2]}));let i=t?16732224:r?4259728:16724016;this.cursor.material.color.setHex(i),this.cursorEdge.material.color.setHex(i)}tap(e,t){let n=this.pick(e,t);if(!n)return{ok:!1,reason:``};if(this.pit&&n.part&&im(n.part)){let e=am(this.app.save,n.index);return e.ok&&(this.app.persist(),this.rebuild()),e}return this.mode===`erase`?n.part?this.remove(...n.cell):{ok:!1,reason:`Tap a part to remove it`}:this.place(...n.place)}update(e){let t=this.orbit;t.ph=Math.min(1.45,Math.max(.25,t.ph)),t.r=Math.min(9,Math.max(2.4,t.r)),this.cam.position.set(t.tgt.x+t.r*Math.sin(t.ph)*Math.sin(t.th),t.tgt.y+t.r*Math.cos(t.ph),t.tgt.z+t.r*Math.sin(t.ph)*Math.cos(t.th)),this.cam.lookAt(t.tgt),this.view&&this.view.animate(e,{wheel:0,spin:{},swing:{}}),this.cursor.visible&&(this.cursor.material.opacity=.2+.12*Math.sin(performance.now()/150))}},Q=B,Em=-16,Dm=new Q(0,1,0),Om=e=>{for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e},km=(e,t,n)=>Math.max(t,Math.min(n,e)),Am=class{constructor(e,t={}){this.name=t.name||`BOT`,this.side=t.side||0,this.color=t.color||`#ff7a1a`,this.ai=!!t.ai,this.skill=t.skill??.7,this.rival=t.rival||null,this.design=e.map(e=>({...e})),this.parts=this.design.map((e,t)=>{let n=q[e.t];return{...e,lv:n.wpn?Ff(e):void 0,inf:n.wpn?If(e):void 0,wt:Lf(e),i:t,def:n,max:n.hp,hpAbs:e.missing?0:n.hp*(e.hp??1),on:!e.missing,wear:e.wear||0}});let n=0,r=0,i=0,a=0;for(let e of this.parts)e.on&&(n+=e.wt,r+=e.wt*e.x*K,i+=e.wt*e.z*K,a+=e.wt*(e.y*K+K/2+.04));this.com={x:n?r/n:0,z:n?i/n:0,y:n?a/n:.3};for(let e of this.parts)e.lp=xp(e,this.com);this.pos=new Q,this.vel=new Q,this.yaw=0,this.yawVel=0,this.quat=new Et,this.angVel=new Q,this.air=!1,this.inverted=!1,this.lifted=0,this.fall=0,this.out=null,this.koTimer=0,this.righting=0,this.stableT=0,this.inp={throttle:0,turn:0,fire:!1,press:!1,selfRight:!1,flame:!1},this.fuel=null,this.fireOn=!1,this.burning=0,this.dmgDealt=0,this.dmgTaken=0,this.aggr=0,this.ctrl=0,this.lostParts=0,this.lastContact=-9,this.hazCd=0,this.wheelRate=0,this.weapons=this.parts.filter(e=>e.on&&e.def.wpn).map(e=>({p:e,spec:of($d[e.def.wpn],e.lv),inf:!!e.inf,fire:!1,heat:0,hitFx:0,e:0,cd:0,swingT:0,swing:0,on:!1,rate:0,holdHit:0})),this.ai_={t:0,tgt:new Q,yawGoal:0,wait:0},this.recalc(),this.fuel=t.fuel===void 0||t.fuel===null?this.fuelMax:Math.min(t.fuel,this.fuelMax)}recalc(){let e=this.parts.filter(e=>e.on),t=qf(e.map(e=>({...e,hp:Math.max(.05,e.hpAbs/e.max),missing:!1})));this.mass=Math.max(1,t.weight),this.maxSpeed=t.speed,this.turnRate=t.turn;let n=0,r=0,i=9,a=-9,o=9,s=-9,c=0;for(let t of e){let e=t.wt;n+=e,r+=e*t.lp.y,i=Math.min(i,t.x),a=Math.max(a,t.x),o=Math.min(o,t.z),s=Math.max(s,t.z),c=Math.max(c,t.lp.y+.25)}this.comY=(n?r/n:.3)*.72,this.footW=Math.max(.6,(a-i)*K+.45),this.footL=Math.max(.5,(s-o)*K+.35),this.hullH=Math.max(.4,c),this.tipResist=this.footW*this.footL*this.mass/Math.max(.22,this.comY),this.wheelsL=e.filter(e=>e.def.cat===`mobility`&&!e.def.power&&e.x>0).length+e.filter(e=>e.def.cat===`mobility`&&!e.def.power&&e.x===0).length*.5,this.wheelsR=e.filter(e=>e.def.cat===`mobility`&&!e.def.power&&e.x<0).length+e.filter(e=>e.def.cat===`mobility`&&!e.def.power&&e.x===0).length*.5,this.motors=e.filter(e=>e.def.power).length,this.canDrive=this.motors>0&&this.wheelsL+this.wheelsR>0,this.accel=9+10*Math.min(1.6,!!t.motors*6/this.mass);let l=.4;for(let t of e)l=Math.max(l,Math.hypot(t.lp.x,t.lp.z)+.2);this.radius=Math.min(l,1.6);let u=new Set(e.map(e=>zf(e.x,e.y,e.z)));for(let t of e)t.exposed=Bf.some(([e,n,r])=>!u.has(zf(t.x+e,t.y+n,t.z+r)));let d=e.filter(e=>e.def.cap);this.power=d.length?d.reduce((e,t)=>e+t.hpAbs/t.max,0)/d.length:0,this.fuelMax=e.reduce((e,t)=>e+(t.def.fuel||0),0),this.tanks=e.filter(e=>e.def.fuel).length,this.fuel!==null&&this.fuel>this.fuelMax&&(this.fuel=this.fuelMax),this.hasFlipper=this.weapons.some(e=>e.p.on&&(e.p.def.wpn===`flipper`||e.p.def.wpn===`hammer`)),this.integrity=e.reduce((e,t)=>e+t.hpAbs,0)/Math.max(1,this.parts.reduce((e,t)=>e+t.max,0))}get fwd(){return new Q(Math.sin(this.yaw),0,Math.cos(this.yaw))}get right(){return new Q(-Math.cos(this.yaw),0,Math.sin(this.yaw))}world(e,t=new Q){return t.copy(e.lp).applyQuaternion(this.quat).add(this.pos)}syncQuat(){this.quat.setFromAxisAngle(Dm,this.yaw),this.inverted&&this.quat.multiply(new Et().setFromAxisAngle(new Q(0,0,1),Math.PI))}setStart(e,t,n){this.pos.set(e,0,t),this.yaw=n,this.inverted=!1,this.air=!1,this.syncQuat(),this.settleGround()}launch(e,t,n){this.fall||(this.air||(this.air=!0,this.vel.y=0,this.airT=0),this.vel.y=Math.max(this.vel.y,e),this.angVel.copy(t).normalize().multiplyScalar(n))}partExtent(e){let t=e.t,n=.28,r=.28,i=.28;return t===`wheel`||t===`wheel_hd`?(r=t===`wheel_hd`?.32:.29,i=r,n=.12):t===`wedge`||t===`plow`?(i=.34,r=.26):t===`vspin`||t===`hbar`?(r=.42,i=.5,n=.32):t===`drum`?(r=.34,i=.42,n=.32):t===`hammer`?(r=.5,i=.55):t===`flipper`?(i=.45,r=.28):t===`saw`?(i=.48,r=.32):t===`crusher`&&(i=.42,r=.36),{hx:n,hy:r,hz:i}}hullY(){let e=1/0,t=-1/0;for(let n of this.parts){if(!n.on)continue;let{hx:r,hy:i,hz:a}=this.partExtent(n),o=n.lp;for(let n=-1;n<=1;n+=2)for(let s=-1;s<=1;s+=2)for(let c=-1;c<=1;c+=2)jm.set(o.x+n*r,o.y+s*i,o.z+c*a).applyQuaternion(this.quat).add(this.pos),jm.y<e&&(e=jm.y),jm.y>t&&(t=jm.y)}return isFinite(e)||(e=this.pos.y,t=this.pos.y+.5),{ymin:e,ymax:t,mid:(e+t)/2}}lowestY(){return this.hullY().ymin}settleGround(e=.02){if(this.fall)return;let{ymin:t}=this.hullY(),n=!this.air&&!this.inverted&&this.lifted>0?.17*Math.min(1,this.lifted/.25):0;this.pos.y+=e-t+n}},jm=new Q,Mm=new Q,Nm=new Q,Pm=new Q,Fm=new Q,Im=class{constructor(e,t,n={}){this.mode=n.mode||`duel`,this.T=n.time??120,this.time=0,this.state=`intro`,this.intro=n.intro??3,this.bots=[e,t],e.side=0,t.side=1,e.opp=t,t.opp=e,wd.start.forEach((e,t)=>this.bots[t].setStart(e.x,e.z,e.yaw)),this.hz={pit:0,hammer:0,hammerArm:!1,saws:wd.saws.map(()=>0),spikes:wd.spikes.map(()=>0)},this.hzs={ham:{st:`idle`,t:0},saw:wd.saws.map((e,t)=>({t:t*2.5})),spk:wd.spikes.map(()=>({st:`idle`,t:0}))},this.hazards=n.hazards!==!1,this.events=[],this.hits=[],this.result=null,this.rec={frames:[],hits:this.hits,detach:[],dt:1/30,acc:0},this.rand=n.rand||Math.random}get remaining(){return Math.max(0,this.T-this.time)}ev(e,t){this.events.push({type:e,t:this.time,ct:this.clock||0,...t})}step(e){if(this.clock=(this.clock||0)+e,this.state===`intro`)this.intro-=e,this.intro<=0&&(this.state=`fight`,this.ev(`start`,{})),this.record(e);else if(this.state===`end`){this.endT=(this.endT||0)+e;for(let t of this.bots)this.physics(t,e);this.record(e)}else{this.time+=e;for(let t of this.bots)t.ai&&this.ai(t,e),this.weaponsStep(t,e);for(let t of this.bots)this.burnStep(t,e);for(let t of this.bots)this.physics(t,e);this.collide(e),this.hazards&&this.hazardStep(e);for(let t of this.bots)this.judgeTrack(t,e);this.checkKO(e),this.state===`fight`&&this.T>0&&this.time>=this.T&&this.decide(),this.record(e)}}physics(e,t){if(e.fall){e.fall+=t,e.pos.y-=t*(2+e.fall*10),e.vel.multiplyScalar(.9),e.pos.x+=e.vel.x*t,e.pos.z+=e.vel.z*t;return}if(e.air){e.vel.y+=Em*t,e.stableT>0&&(e.stableT-=t);let n=Dm.clone().applyQuaternion(e.quat),r=e.angVel.dot(Dm);Pm.copy(e.angVel).addScaledVector(Dm,-r);let i=e.stableT>0?7.5:.12;Pm.multiplyScalar(Math.exp(-i*t)),e.stableT>0&&n.y>.2&&(Fm.crossVectors(n,Dm),Fm.lengthSq()>1e-6&&(Fm.normalize(),Pm.addScaledVector(Fm,12*t))),e.angVel.copy(Pm),e.angVel.y=r*Math.exp(-.35*t),e.angVel.length()>8&&e.angVel.setLength(8),Nm.set(0,e.comY,0),Mm.copy(Nm).applyQuaternion(e.quat).add(e.pos),e.angVel.lengthSq()>1e-6&&(Fm.copy(e.angVel).normalize(),e.quat.premultiply(new Et().setFromAxisAngle(Fm,e.angVel.length()*t)),e.quat.normalize()),Nm.set(0,e.comY,0).applyQuaternion(e.quat),e.pos.copy(Mm).sub(Nm),e.pos.addScaledVector(e.vel,t),e.airT=(e.airT||0)+t,e.hullY().ymin<.02&&(e.pos.y+=.02-e.hullY().ymin);let a=Dm.clone().applyQuaternion(e.quat),o=e.hullY().ymin<=.025,s=a.y>.55,c=a.y<-.55;if(o&&e.vel.y<0&&!c&&!s&&(e.vel.y*=.6),o&&e.airT>.12&&e.vel.y<=.04&&(c||s)){let t=new Q(0,0,1).applyQuaternion(e.quat);e.inverted=a.y<0,e.yaw=Math.atan2(t.x,t.z),e.air=!1,e.airT=0,e.angVel.set(0,0,0),e.stableT=0,e.syncQuat();let n=Math.max(0,-e.vel.y);if(e.vel.y=0,e.vel.multiplyScalar(.5),e.settleGround(),this.ev(`land`,{bot:e.side,imp:n,inverted:e.inverted,pos:e.pos.clone()}),n>8.5){let t=this.pickPart(e,e.inverted?`top`:`bottom`);t&&this.damagePart(e,t,(n-8)*2.5,e.pos.clone(),Dm.clone(),null,`slam`)}}this.walls(e);return}let n=e.inp,r=km(n.throttle,-1,1),i=km(n.turn,-1,1),a=km(r+i,-1,1),o=km(r-i,-1,1),s=+(e.wheelsL>0),c=+(e.wheelsR>0),l=+!!e.canDrive;e.inverted&&(l*=.35),e.lifted>0&&(l*=.3,e.lifted-=t),e.righting>0&&(l=0);let u=(a*s+o*c)/2*l,d=(a*s-o*c)/2*l,f=e.fwd,p=e.vel.dot(f),m=e.vel.clone().addScaledVector(f,-p),h=u*e.maxSpeed,g=e.accel*(l?1:.4);l?p+=km(h-p,-g*t,g*t):p*=Math.exp(-2.2*t),m.multiplyScalar(Math.exp(-(e.canDrive&&!e.inverted?9:3)*t)),e.vel.copy(f).multiplyScalar(p).add(m);let _=-d*e.turnRate*1.25;e.yawVel+=(_-e.yawVel)*Math.min(1,t*12),e.yaw=Om(e.yaw+e.yawVel*t),e.pos.addScaledVector(e.vel,t),e.syncQuat(),e.settleGround(),e.wheelRate=p/.29,this.walls(e)}walls(e){let t=wd.A-e.radius*.8;for(let n of[`x`,`z`])if(Math.abs(e.pos[n])>t){let r=Math.abs(e.vel[n]);if(e.pos[n]=Math.sign(e.pos[n])*t,e.vel[n]*=-.35,r>4.5&&this.state===`fight`){let t=new Q;t[n]=Math.sign(e.pos[n]);let i=e.pos.clone().addScaledVector(t,e.radius*.8).setY(.3);this.ev(`spark`,{pos:i,dir:t.clone().negate(),n:14,power:.6});let a=this.nearestPart(e,i);a&&this.damagePart(e,a,(r-4)*3,i,t.negate(),null,`wall`)}}}collide(){let[e,t]=this.bots;if(e.fall||t.fall||Math.abs(e.hullY().mid-t.hullY().mid)>.95)return;let n=new Q(t.pos.x-e.pos.x,0,t.pos.z-e.pos.z),r=n.length(),i=(e.radius+t.radius)*.82;if(r>=i||r<1e-5){r>=i&&(this.wedgeLock=null);return}let a=n.divideScalar(r),o=i-r,s=e.mass,c=t.mass,l=e.vel.dot(a),u=-t.vel.dot(a);e.pos.addScaledVector(a,-o*c/(s+c)),t.pos.addScaledVector(a,o*s/(s+c));let d=t.vel.clone().sub(e.vel).dot(a);if(d<0){let n=-1.25*d/(1/s+1/c);e.vel.addScaledVector(a,-n/s),t.vel.addScaledVector(a,n/c);let r=-d;if(this.lastContact=this.time,e.lastContact=t.lastContact=this.time,r>3.6&&this.state===`fight`){let n=e.pos.clone().addScaledVector(a,e.radius*.8).setY(.3);this.ev(`spark`,{pos:n,dir:Dm.clone(),n:10,power:.5});let i=this.nearestPart(e,n),o=this.nearestPart(t,n),s=(r-3.2)*3.2;i&&this.damagePart(e,i,s*(t.vel.dot(a)<e.vel.dot(a)?.6:1),n,a.clone().negate(),t,`ram`),o&&this.damagePart(t,o,s,n,a.clone(),e,`ram`)}}this._inA=l,this._inB=u,this.resolveWedge(e,t,a)}wedgeFacing(e,t){return e.air||e.fall||e.inverted?!1:e.parts.some(n=>{if(!n.on||!n.def.wedge)return!1;let[r,i]=Hf(n.r||0);return new Q(r,0,i).applyAxisAngle(Dm,e.yaw).dot(t)>.62})}hasFrontWedge(e){return this.wedgeFacing(e,e.fwd)}resolveWedge(e,t,n){let r=n,i=jm.copy(n).negate(),a=this.wedgeFacing(e,r),o=this.wedgeFacing(t,i),s=this.hasFrontWedge(e)&&e.fwd.dot(r)>.35,c=this.hasFrontWedge(t)&&t.fwd.dot(i)>.35,l=s&&c||a&&o,u=this.wedgeLock&&this.wedgeLock.until>this.time&&(this.wedgeLock.w===0||this.wedgeLock.w===1);if(!l&&!(a||o)&&!u){this.wedgeLock=null;return}let d;if(l||u&&this.wedgeLock.both){let a=e.mass,o=t.mass;if(Math.abs(a-o)/Math.max(a,o,1e-6)>.03)d=a>o?0:1;else if(u)d=this.wedgeLock.w;else{let a=(this._inA??e.vel.dot(n))+.85*e.fwd.dot(r),o=(this._inB??-t.vel.dot(n))+.85*t.fwd.dot(i);d=Math.abs(a-o)<.25?(this.rand()*1.37+this.rand()*2.11+(this.clock||0)*13.7)%1<.5?0:1:a>o?0:1}}else if(a&&!o)d=0;else if(o&&!a)d=1;else if(u)d=this.wedgeLock.w;else{this.wedgeLock=null;return}this.wedgeLock={w:d,until:this.time+(l?1:.4),both:!!(l||u&&this.wedgeLock.both)},d===0?this.wedgeUnder(e,t,n):this.wedgeUnder(t,e,n.clone().negate())}wedgeUnder(e,t,n){if(t.lifted=Math.max(t.lifted,.4),e.lifted=0,t.air||t.fall)return;t.pos.y=Math.max(t.pos.y,.16);let r=t.vel.dot(n);r<2.2&&t.vel.addScaledVector(n,Math.min(2.2-r,.2));let i=e.vel.dot(n);i<1.5&&e.vel.addScaledVector(n,Math.min(.1,1.5-i));let a=this.clock||this.time;if(!this._underFx||a-this._underFx>.55){this._underFx=a;let r=t.pos.clone().add(e.pos).multiplyScalar(.5).setY(.14);this.ev(`under`,{bot:e.side,victim:t.side,pos:r,dir:n.clone()})}}weaponsStep(e,t){let n=e.inp,r=n.press;n.press=!1,n.selfRight&&(n.selfRight=!1,this.selfRight(e)),e.righting>0&&(e.righting-=t,e.righting<=0&&this.finishRight(e));let i=e.weapons.some(e=>e.p.on&&e.inf),a=e.fireOn;e.fireOn=!!(i&&n.flame&&e.fuelMax>0&&e.fuel>0&&!e.fall&&this.state===`fight`),e.fireOn&&(e.fuel=Math.max(0,e.fuel-tf.fuelRate*t),e.fuel<=0&&(e.fireOn=!1,this.ev(`dry`,{bot:e.side}))),e.fireOn!==a&&this.ev(`fire`,{bot:e.side,on:e.fireOn});for(let i of e.weapons){if(i.fire=!!(e.fireOn&&i.inf&&i.p.on),i.heat+=(+!!i.fire-i.heat)*Math.min(1,t*(i.fire?5:1.6)),i.hitFx=Math.max(0,i.hitFx-t),!i.p.on){i.e=0,i.rate*=.95;continue}let a=i.spec,o=Math.max(.35,e.power)*(e.hasPowerFor??1),s=!e.inverted||a.around;if(i.cd-=t,a.mode===`spin`){if(r&&(i.on=!i.on),i.e=i.on&&s&&!e.fall?Math.min(1,i.e+t/a.spinUp*o):Math.max(0,i.e-t*.35),i.rate=i.e*(a.around?28:46),i.e>.22&&i.cd<=0&&!e.fall){let t=this.findTarget(e,i);t&&this.weaponHit(e,i,t,a.dmg*i.e**1.4)}}else if(a.mode===`strike`){if(r&&i.cd<=0&&s&&(i.swingT=a.swing,i.cd=a.cd,i.fired=!0,this.ev(`swing`,{bot:e.side,wpn:i.p.def.wpn})),i.swingT>0){if(i.swingT-=t,i.swing=1-Math.max(0,i.swingT)/a.swing,i.swingT<=0){i.swing=1;let t=this.findTarget(e,i);t&&this.weaponHit(e,i,t,a.dmg)}}else i.swing>0&&(i.swing=Math.max(0,i.swing-t*2.2))}else{let r=n.fire&&s;if(i.swing+=(+!!r-i.swing)*Math.min(1,t*8),i.rate=r?60:i.rate*.95,i.e=+!!r,r&&i.cd<=0){let t=this.findTarget(e,i);if(t&&(i.cd=.12,this.weaponHit(e,i,t,a.dmg*.12),a.grab)){let t=e.opp;t.vel.lerp(e.vel,.6),t.lifted=.2}}}}}findTarget(e,t){let n=e.opp;if(n.fall)return null;let r=t.spec,i=e.world(t.p),[a,o]=Hf(t.p.r||0),s=new Q(a,0,o).applyAxisAngle(Dm,e.yaw),c=new Q(-s.z,0,s.x),l=r.reach*K+.32,u=null,d=1e9,f=new Q;for(let e of n.parts){if(!e.on||!e.exposed)continue;n.world(e,f);let t=f.clone().sub(i),a=t.dot(s),o=t.dot(c),p=f.y-i.y,m=e.def.hbox||0;if(Math.abs(p)>.55+m)continue;if(r.around){let t=Math.hypot(a,o);t<l+.15+m&&t>.25&&t<d&&(d=t,u=e);continue}if(a<-.05||a>l+m||Math.abs(o)>r.arc*.45+.18+m)continue;let h=r.top?-f.y*4+a:a;h<d&&(d=h,u=e)}return u}weaponHit(e,t,n,r){let i=e.opp,a=t.spec,o=i.world(n),s=new Q(i.pos.x-e.pos.x,0,i.pos.z-e.pos.z).normalize(),c=a.lift*(a.mode===`spin`?t.e:1),l=a.knock*(a.mode===`spin`?t.e:1),u=1;if(n.def.wedge&&a.mode===`spin`){let[t,r]=Hf(n.r||0);new Q(t,0,r).applyAxisAngle(Dm,i.yaw).dot(s)<-.4&&(u=.55,a.lift>2&&e.launch(c*.45,e.right,3),c*=.4)}let d=r*(1-(n.def.red||0))*u*(.85+this.rand()*.3);this.damagePart(i,n,d,o,s,e,t.p.def.wpn);let f=Math.sqrt(e.mass/Math.max(.8,i.mass));if(l){let n=Math.min(l*f,5.5);i.vel.addScaledVector(s,n),e.vel.addScaledVector(s,-n*.3/Math.max(.55,f)),a.around&&(e.yawVel+=(this.rand()-.5)*6*t.e),i.yawVel+=(this.rand()-.5)*1.6}t.fire&&this.ignite(i,n,e,o,a.mode===`hold`?.1:1)&&(t.hitFx=.3);let p=this.hitPlacement(i,o),m=a.mode===`spin`?t.e:1,h=this.applyHitLaunch(e,i,a,s,c,m,p),g=!!(h&&h.crit),_=!!(h&&h.toss);_&&(e.ctrl+=.6),a.mode===`spin`&&(t.e*=.42,t.cd=.24),a.mode===`hold`?(this.ev(`grind`,{a:e.side,pos:o.clone(),dir:s,wpn:t.p.def.wpn,fire:t.fire}),t.fire&&(!t.lastFireHit||this.clock-t.lastFireHit>1.6)&&(t.lastFireHit=this.clock,this.hits.push({t:this.time,ct:this.clock||0,a:e.side,b:i.side,dmg:9+(i.burning||0)*3,wpn:t.p.def.wpn,pos:o.toArray(),lift:!1,crit:!1,fire:!0}))):(this.ev(`hit`,{a:e.side,b:i.side,pos:o.clone(),dir:s,dmg:d,wpn:t.p.def.wpn,big:d>18||g,crit:g,fire:t.fire}),this.hits.push({t:this.time,ct:this.clock||0,a:e.side,b:i.side,dmg:d,wpn:t.p.def.wpn,pos:o.toArray(),lift:_,crit:g,fire:t.fire})),e.aggr+=.25}selfRight(e){return!e.inverted||e.air||e.righting>0||e.fall||this.state!==`fight`?!1:e.hasFlipper?(this.flipUp(e),this.ev(`selfright`,{bot:e.side,ok:!0}),!0):(e.righting=1.3,this.ev(`righting`,{bot:e.side}),!0)}finishRight(e){if(!e.inverted)return;let t=this.rand()<.65;t&&this.flipUp(e),this.ev(`selfright`,{bot:e.side,ok:t})}hitPlacement(e,t){let n=e.right,r=e.fwd,i=t.x-e.pos.x,a=t.z-e.pos.z,o=i*n.x+a*n.z,s=i*r.x+a*r.z,c=Math.hypot(o,s),l=e.hullY(),u=t.y<=Math.min(.48,l.ymin+.42),d=t.y>(l.ymin+l.ymax)*.5+.02,f=Math.abs(o)>=Math.max(.18,e.footW*.18),p=c>=Math.max(.26,(e.radius||1)*.48),m=Math.abs(o)<Math.max(.16,e.footW*.16)||c<Math.max(.18,(e.radius||1)*.32),h=e.lifted>.05;return{lat:o,lon:s,radial:c,low:u,high:d,side:f,rim:p,center:m,wellPlaced:u&&!d&&f&&(p||h||!m)}}applyHitLaunch(e,t,n,r,i,a,o=null){if(t.fall)return null;let s=t.tipResist||10,c=e.mass/Math.max(.8,t.mass),l=a>=.92,u=n.mode===`spin`&&!n.around&&(n.lift||0)>=3.5||!!n.flip,d=o||{wellPlaced:!1},f=!t.air&&l&&u&&!!d.wellPlaced&&(i||0)>2,p=(i||0)*Math.min(1.05,Math.sqrt(c));p*=6/(5+t.mass*.35);let m=0;if(f){p=Math.min(Math.max(p,n.flip?7.4:5.4),n.flip?9.2:6.2);let e=2*p/16;m=Math.PI*1.02/Math.max(.35,e),m*=km(14/Math.max(8,s*.1),.78,1),t.stableT=0}else if(p=Math.min(p,n.flip?3.4:3.15),m=.25+this.rand()*.45,t.stableT=.55,p<1.05)return i>.8&&(t.vel.y=Math.max(t.vel.y,1.1),t.lifted=Math.max(t.lifted,.12)),null;let h=new Q(-r.z,0,r.x);return h.lengthSq()<1e-6&&h.copy(t.right),h.normalize(),t.launch(p,h.multiplyScalar(n.flip||this.rand()<.5?-1:1),m),f||(t.stableT=Math.max(t.stableT||0,.45)),{toss:!0,crit:f}}flipUp(e){e.stableT=0,e.launch(5.4,e.fwd,Math.PI/(10.8/16))}damagePart(e,t,n,r,i,a,o){!t.on||n<=0||this.state===`end`||(t.hpAbs-=n,e.dmgTaken+=n,a?a.dmgDealt+=n:this.time-e.lastContact<1.5&&(e.opp.dmgDealt+=n*.5,e.opp.ctrl+=.4),this.ev(`damage`,{bot:e.side,part:t.i,frac:1-Math.max(0,t.hpAbs)/t.max,pos:r,dir:i,dmg:n,kind:o}),t.hpAbs<=0?this.detach(e,t,i,n,!0):t.def.wpn===void 0&&t.def.power&&e.recalc(),t.def.cap&&e.recalc())}detach(e,t,n,r=20,i=!1){let a=i&&t.def.fuel&&t.on?{ff:e.fuelMax?Math.min(1,e.fuel/e.fuelMax):0}:null;t.burn=null,t.on=!1,t.hpAbs=0,e.lostParts++;let o=n.clone().multiplyScalar(2+r*.08).add(new Q(0,2.5+Math.random()*3,0)).add(e.vel);this.ev(`detach`,{bot:e.side,part:t.i,vel:o,spin:new Q(Math.random()*14-7,Math.random()*14-7,Math.random()*14-7)}),this.rec.detach.push({t:this.time,ct:this.clock||0,bot:e.side,part:t.i}),t.t===`cpu`&&(e.out=e.out||`CPU DESTROYED`),t.def.cap&&!e.parts.some(e=>e.on&&e.def.cap)&&(e.out=e.out||`BATTERY DESTROYED`);let s=e.parts.find(e=>e.on&&e.t===`cpu`);if(s){let t=new Map(e.parts.filter(e=>e.on).map(e=>[zf(e.x,e.y,e.z),e])),i=new Set([s]),a=[s];for(;a.length;){let e=a.pop();for(let[n,r,o]of Bf){let s=t.get(zf(e.x+n,e.y+r,e.z+o));s&&!i.has(s)&&(i.add(s),a.push(s))}}for(let t of e.parts)t.on&&!i.has(t)&&this.detach(e,t,n,r*.5)}e.recalc(),a&&this.explodeTank(e,t,n,a.ff)}ignite(e,t,n,r,i=1){let a=(t,r,i)=>{if(!t.on)return!1;let a=!t.burn;return t.burn={t:Math.max(t.burn?t.burn.t:0,tf.t*r),acc:t.burn?t.burn.acc:0,by:n?n.side:-1},t.scorch=!0,a&&this.ev(`ignite`,{bot:e.side,part:t.i,pos:i.clone()}),a};n&&i>0&&(n.fuel=Math.max(0,n.fuel-tf.fuelHit*i));let o=!t.on;a(t,1,r);let s=new Q;for(let n of e.parts)n===t||!n.on||n.burn&&n.burn.t>tf.t*.6||Math.abs(n.x-t.x)+Math.abs(n.y-t.y)+Math.abs(n.z-t.z)===1&&this.rand()<(o?.85:tf.spread)*Math.min(1,i*1.5)&&a(n,o?.8:.6,e.world(n,s));return!0}burnStep(e,t){let n=0;for(let r of e.parts)if(r.burn){if(!r.on)r.burn=null;else{if(n++,r.burn.t-=t,r.burn.acc+=t,r.burn.acc>=tf.tick){r.burn.acc-=tf.tick;let t=r.burn.by>=0?this.bots[r.burn.by]:null,n=tf.dps*tf.tick*(1-(r.def.red||0)*.5);this.damagePart(e,r,n,e.world(r),Dm,t&&t!==e?t:null,`burn`)}r.burn&&r.burn.t<=0&&(r.burn=null,n--)}}e.burning=n}explodeTank(e,t,n,r){let i=t.def,a=(.45+.55*r)*(e.fireOn?1.25:1),o=i.blastR*(.8+.2*a),s=i.blast*a,c=e.world(t),l=e.opp,u=0,d=new Q,f=new Q,p=this.time-e.lastContact<2.5||e.dmgTaken>0?l:null;for(let r of[e,l]){let i=r===e;for(let a of r.parts.slice()){if(!a.on||a===t)continue;r.world(a,d);let l=d.distanceTo(c);if(l>o)continue;let m=1-l/o,h=s*m*m*(i?1:.85)*(1-(a.def.red||0)*.5)+(m>.5?s*.1:0);f.copy(d).sub(c).setY(0),f.lengthSq()<1e-6&&f.copy(n),f.normalize(),u+=h,this.damagePart(r,a,h,d.clone(),f.clone(),i?p:e,`blast`),a.on&&this.rand()<.3+.7*m&&this.ignite(r,a,i?p:e,d.clone(),0)}let l=r.pos.distanceTo(c);if(l<o+.4&&!r.fall){f.copy(r.pos).sub(c).setY(0),f.lengthSq()<1e-6&&f.copy(n),f.normalize();let e=1-Math.min(1,l/(o+.4));r.vel.addScaledVector(f,(i?1.2:4.5)*a*(.4+e)),e*a>.28&&r.launch(1.5+3.2*e*a,r.right,4+4*e)}}this.ev(`explode`,{bot:e.side,part:t.i,pos:c.clone(),r:o,power:a,large:i.blast>50,total:u}),this.hits.push({t:this.time,ct:this.clock||0,a:l.side,b:e.side,dmg:u,wpn:`tank`,pos:c.toArray(),lift:!1,crit:!1,explode:!0,fire:!0}),e.fuel=Math.min(e.fuel,e.fuelMax)}pickPart(e,t){let n=e.parts.filter(e=>e.on&&e.exposed&&!e.def.core);if(!n.length)return null;let r=n.map(e=>e.y),i=t===`top`?Math.max(...r):Math.min(...r),a=n.filter(e=>e.y===i);return a[Math.floor(this.rand()*a.length)]}nearestPart(e,t){let n=null,r=1e9,i=new Q;for(let a of e.parts){if(!a.on||!a.exposed)continue;let o=e.world(a,i).distanceToSquared(t);o<r&&(r=o,n=a)}return n}hazardStep(e){let t=this.hz,n=this.hzs;if(this.remaining<=wd.pit.openAt&&this.T>0&&(t.pit===0&&this.ev(`pit`,{}),t.pit=Math.min(1,t.pit+e)),t.pit>.8)for(let e of this.bots){let t=wd.pit;!e.fall&&!e.air&&Math.abs(e.pos.x-t.x)<t.w/2-.1&&Math.abs(e.pos.z-t.z)<t.d/2-.1&&(e.fall=.001,this.ev(`fall`,{bot:e.side,pos:e.pos.clone()}),this.time-e.lastContact<2&&(e.opp.ctrl+=3))}let r=wd.hammer,i=n.ham;i.t-=e;let a=this.bots.filter(e=>!e.fall&&Math.hypot(e.pos.x-r.x,e.pos.z-r.z)<r.r);if(i.st===`idle`&&i.t<=0&&a.length)i.st=`arm`,i.t=.55,t.hammerArm=!0,this.ev(`hammerArm`,{});else if(i.st===`arm`&&i.t<=0)i.st=`slam`,i.t=.16,t.hammerArm=!1;else if(i.st===`slam`){if(t.hammer=Math.min(1,1-i.t/.16),i.t<=0){t.hammer=1,i.st=`up`,i.t=1.4;let e=new Q(r.x,.3,r.z);this.ev(`hammer`,{pos:e});for(let e of this.bots)if(!e.fall&&Math.hypot(e.pos.x-r.x,e.pos.z-r.z)<r.r+.35){let t=this.pickPart(e,`top`);t&&this.damagePart(e,t,36,e.world(t),new Q(0,-1,0),null,`hazard`),e.vel.y=0,e.lifted=.5}}}else i.st===`up`&&(t.hammer=Math.max(0,i.t/1.4),i.t<=0&&(i.st=`idle`,i.t=2.5,t.hammer=0));wd.saws.forEach((r,i)=>{let a=n.saw[i];a.t=(a.t+e)%7;let o=a.t<.3?a.t/.3:a.t<2.4?1:a.t<2.7?(2.7-a.t)/.3:0;if(t.saws[i]=o,o>.5){for(let e of this.bots)if(!(e.fall||e.air||e.hazCd>0)&&Math.abs(e.pos.x-r.x)<e.radius*.6+.25&&Math.abs(e.pos.z-r.z)<r.len/2+e.radius*.5){e.hazCd=.22;let t=this.pickPart(e,`bottom`),n=new Q(r.x,.2,e.pos.z);t&&this.damagePart(e,t,6.5,n,Dm.clone(),null,`hazard`),this.ev(`grind`,{pos:n,dir:new Q(Math.sign(e.pos.x-r.x)||1,.6,0),wpn:`floorsaw`}),e.vel.x+=Math.sign(e.pos.x-r.x||1)*1.6,this.rand()<.15&&e.launch(2.6,e.fwd,1.5)}}}),wd.spikes.forEach((r,i)=>{let a=n.spk[i];if(a.t-=e,a.st===`idle`&&a.t<=0&&this.bots.some(e=>!e.fall&&!e.air&&Math.hypot(e.pos.x-r.x,e.pos.z-r.z)<r.r))a.st=`pre`,a.t=.14;else if(a.st===`pre`&&a.t<=0){a.st=`up`,a.t=.7,t.spikes[i]=1,this.ev(`spikes`,{pos:new Q(r.x,.1,r.z)});for(let e of this.bots)if(!e.fall&&!e.air&&Math.hypot(e.pos.x-r.x,e.pos.z-r.z)<r.r+e.radius*.5){let t=this.pickPart(e,`bottom`);t&&this.damagePart(e,t,18,e.pos.clone().setY(.1),Dm.clone(),null,`hazard`);let n=new Q(this.rand()-.5,0,this.rand()-.5).normalize();e.launch(5.2,n,2+this.rand()*3.5)}}else a.st===`up`&&(a.t<=0&&(a.st=`idle`,a.t=2.2),t.spikes[i]=a.t>.2?1:Math.max(0,a.t/.2))});for(let t of wd.screws)for(let n of this.bots)if(!(n.fall||n.air)&&n.pos.x>t.x0-.3&&n.pos.x<t.x1+.3&&Math.abs(n.pos.z-t.z)<n.radius+.3&&(n.vel.x+=3.5*e*6,n.vel.z+=Math.sign(t.z)*2*e,n.hazCd<=0)){n.hazCd=.3;let e=this.nearestPart(n,new Q(n.pos.x,.3,t.z));e&&this.damagePart(n,e,4,new Q(n.pos.x,.25,t.z),new Q(0,.5,-Math.sign(t.z)),null,`hazard`),this.ev(`grind`,{pos:new Q(n.pos.x,.25,t.z-Math.sign(t.z)*.2),dir:new Q(0,.7,-Math.sign(t.z)),wpn:`screw`})}for(let t of this.bots)t.hazCd-=e}judgeTrack(e,t){let n=e.opp;if(e.fall||e.air)return;let r=new Q(n.pos.x-e.pos.x,0,n.pos.z-e.pos.z),i=r.length();!e.inverted&&i<6&&e.vel.dot(r.normalize())>1&&(e.aggr+=t),n.inverted&&(e.ctrl+=t*.5),this.time-e.lastContact<.1&&e.vel.dot(r)>.8&&(e.ctrl+=t)}checkKO(e){if(this.state===`fight`)for(let t of this.bots){if(t.out)return this.end(t.opp,`KO`,t.out);if(t.fall>.7)return this.end(t.opp,`KO`,`PITTED`);if(t.inverted&&!t.air||!t.canDrive){if(t.koTimer===0&&this.ev(`count`,{bot:t.side}),t.koTimer+=e,t.koTimer>=10)return this.end(t.opp,`KO`,t.inverted?`COUNTED OUT (FLIPPED)`:`COUNTED OUT (IMMOBILE)`)}else t.koTimer=0}}judges(){let[e,t]=this.bots,n=[],r=(e,t,n,r)=>{let i=e+t>0?km(e/(e+t)+r,0,1):.5+r,a=Math.round(i*n);return[a,n-a]};for(let i=0;i<3;i++){let i=()=>(this.rand()-.5)*.12,a=r(e.dmgDealt,t.dmgDealt,5,i()),o=r(e.aggr,t.aggr,3,i()),s=r(e.ctrl,t.ctrl,3,i());n.push({dmg:a,aggr:o,ctrl:s,total:[a[0]+o[0]+s[0],a[1]+o[1]+s[1]]})}let i=n.map(n=>n.total[0]===n.total[1]?e.dmgDealt>=t.dmgDealt?0:1:n.total[0]>n.total[1]?0:1),a=i.filter(e=>e===0).length;return{cards:n,votes:i,winner:a>=2?0:1,split:`${Math.max(a,3-a)}-${Math.min(a,3-a)}`,totals:[n.reduce((e,t)=>e+t.total[0],0),n.reduce((e,t)=>e+t.total[1],0)]}}decide(){let e=this.judges();this.end(this.bots[e.winner],`DECISION`,`JUDGES ${e.split}`,e)}end(e,t,n,r=null){if(this.state!==`end`){this.state=`end`;for(let e of this.bots){e.inp.throttle=e.inp.turn=0,e.inp.fire=!1;for(let t of e.weapons)t.on=!1}this.result={winner:e.side,how:t,reason:n,time:this.time,ct:this.clock||0,judges:r,loser:e.opp.side,dmg:this.bots.map(e=>Math.round(e.dmgDealt)),lost:this.bots.map(e=>e.lostParts),fuel:this.bots.map(e=>e.fuel)},this.ev(`end`,{...this.result})}}partsAfter(e){return this.bots[e].parts.map(e=>({t:e.t,x:e.x,y:e.y,z:e.z,r:e.r,hp:e.on?Math.max(.05,e.hpAbs/e.max):0,wear:e.wear,missing:!e.on}))}ai(e,t){let n=e.opp,r=e.ai_,i=e.inp;if(r.t-=t,i.fire=!1,e.fall)return;if(e.inverted&&!e.air){r.wait+=t,i.throttle=0,i.turn=0,r.wait>.9-e.skill*.4&&e.righting<=0&&(i.selfRight=!0);return}r.wait=0;for(let t of e.weapons)t.spec.mode===`spin`&&!t.on&&this.time>.4&&(t.on=!0);let a=new Q(n.pos.x-e.pos.x,0,n.pos.z-e.pos.z).length();if(r.t<=0){r.t=.12+(1-e.skill)*.25;let t=n.pos.clone(),o=[];this.hz.pit>.5&&o.push(new Q(wd.pit.x,0,wd.pit.z)),o.push(new Q(wd.hammer.x,0,wd.hammer.z));for(let e of wd.spikes)o.push(new Q(e.x,0,e.z));let s=null,c=3.2;for(let e of o){let t=e.distanceTo(n.pos);t<c&&(c=t,s=e)}s&&a>1.4&&e.skill>.6&&(t=n.pos.clone().addScaledVector(n.pos.clone().sub(s).normalize(),.9));let l=new Q,u=(t,n)=>{let r=e.pos.clone().sub(t).setY(0),i=r.length();i<n&&l.addScaledVector(r.normalize(),(n-i)*2.2)};(this.hz.pit>0||this.remaining<wd.pit.openAt+3)&&u(new Q(wd.pit.x,0,wd.pit.z),2.6),u(new Q(wd.hammer.x,0,wd.hammer.z),wd.hammer.r+.6);for(let e of wd.spikes)u(new Q(e.x,0,e.z),e.r+.7);wd.saws.forEach((t,n)=>{(this.hz.saws[n]>.1||this.hzs.saw[n].t>6.2)&&u(new Q(t.x,0,km(e.pos.z,t.z-t.len/2,t.z+t.len/2)),1.4)});let d=t.sub(e.pos).setY(0).normalize().add(l.multiplyScalar(e.skill));r.yawGoal=Math.atan2(d.x,d.z)+(this.rand()-.5)*(1-e.skill)*.5;for(let t of e.weapons)t.spec.mode===`strike`&&t.cd<=0&&this.findTarget(e,t)&&this.rand()<.5+e.skill*.5&&(i.press=!0)}for(let t of e.weapons)t.spec.mode===`hold`&&a<2.7&&(i.fire=!0);i.flame=e.fuel>.5&&e.weapons.some(e=>e.inf&&e.p.on)&&a<2.9&&e.skill>.5;let o=Om(r.yawGoal-e.yaw);i.turn=km(-o*2.4,-1,1);let s=Math.abs(o)<1.1?1:.15;a<1.3&&Math.abs(o)>1.6&&(s=-.6);let c=e.weapons.find(e=>e.spec.around);c&&c.e<.6&&a<3&&(s=-.4),i.throttle=s*(.72+.28*e.skill)}record(e){let t=this.rec;t.acc+=e,t.acc<t.dt||(t.acc-=t.dt,t.frames.push({t:this.clock||0,s:this.state,b:this.bots.map(e=>({p:e.pos.toArray(),q:e.quat.toArray(),w:e.wheelRate,sp:e.weapons.map(e=>[e.p.i,e.rate,e.swing,e.heat]),bn:e.parts.filter(e=>e.burn&&e.on).map(e=>e.i),fo:+!!e.fireOn})),hz:{pit:this.hz.pit,hammer:this.hz.hammer,saws:this.hz.saws.slice(),spikes:this.hz.spikes.slice()},d:this.debrisSnap?this.debrisSnap():null}))}highlights(e=3){let t=[],n=this.hits.slice().sort((e,t)=>(t.crit?1e4:0)+t.dmg-((e.crit?1e4:0)+e.dmg)),r=e=>e.explode?`TANK EXPLOSION`:e.crit?`CRITICAL`:e.fire?`INFERNO`:e.lift?`AIR TIME`:`BIG HIT`,i=this.hits.filter(e=>e.explode).sort((e,t)=>t.dmg-e.dmg)[0];i&&t.push({...i,label:r(i)});let a=this.hits.filter(e=>e.fire&&!e.explode).sort((e,t)=>t.dmg-e.dmg);for(let n of a){if(t.length>=Math.min(e,2))break;if(!t.some(e=>Math.abs(e.ct-n.ct)<2.5)){t.push({...n,label:r(n)});break}}for(let i of n){if(t.length>=e||!i.crit&&i.dmg<8)break;t.some(e=>Math.abs(e.ct-i.ct)<2.5)||t.push({...i,label:r(i)})}if(this.result&&this.result.how===`KO`){let e=Math.max(0,this.result.ct-.5);if(!t.some(t=>Math.abs(t.ct-e)<1.5))t.push({ct:e,t:this.result.time,dmg:0,a:this.result.winner,b:this.result.loser,label:`KNOCKOUT`,ko:!0,pos:this.bots[this.result.loser].pos.toArray()});else{let n=t.find(t=>Math.abs(t.ct-e)<1.5);n.explode||(n.label=`KNOCKOUT BLOW`)}}return!t.length&&this.hits.length&&t.push({...this.hits[this.hits.length-1],label:`BIG HIT`}),t.sort((e,t)=>e.ct-t.ct)}},Lm=(e,t=document)=>t.querySelector(e),Rm=e=>`$`+Math.round(e).toLocaleString(`en-US`),zm={vspin:`VERTICAL SPINNER`,hbar:`BAR SPINNER`,drum:`DRUM`,hammer:`HAMMER AXE`,flipper:`FLIPPER`,crusher:`CRUSHER`,saw:`SAW`,floorsaw:`FLOOR SAW`,fire:`INFERNO`,tank:`FUEL TANK`},Bm=(e,t=`por`)=>`<img class="${t}" src="./portraits/${lf[e].portrait}.webp" alt="">`,Vm=e=>[e.y>0?`top`:``,e.z>0?`front`:e.z<0?`rear`:``,e.x>0?`left`:e.x<0?`right`:``].filter(Boolean).join(` `)||`centre`,Hm=e=>`${Math.floor(e/60)}:${String(Math.floor(e%60)).padStart(2,`0`)}`,Um=class{constructor(e){this.app=e,this.root=Lm(`#ui`),this.hud=Lm(`#hud`),this.reelEl=Lm(`#reel`),this.stake={tour:25,ko60:20,flawless:20,rival:25},this.cat=`frame`;let t=e=>{let t=e.target.closest&&e.target.closest(`[data-a]`);t&&!t.disabled&&this.act(t.dataset.a,t.dataset.v,t)};this.root.addEventListener(`click`,t),this.hud.addEventListener(`click`,t),this.hud.addEventListener(`pointerup`,e=>{e.pointerType!==`mouse`&&t(e)}),this.reelEl.addEventListener(`click`,t=>{t.target.closest(`[data-a="skip"]`)&&e.skipReel()}),this.bindWorkshopTouch()}get save(){return this.app.save}toast(e,t=!1){let n=document.createElement(`div`);n.textContent=e,t&&(n.className=`bad`),Lm(`#toast`).appendChild(n),setTimeout(()=>n.remove(),2200)}show(e,t){this.cur=e,this.data=t;let n=e===`fight`;this.hud.hidden=!n,this.app.controls.show(n&&!this.tipsOpen),n||this.reel(!1),![`fight`,`workshop`].includes(e)&&this.app.mode3d!==`show`&&e!==`result`&&e!==`matchResult`&&e!==`testEnd`&&this.app.toShowcase();let r=this[`s_`+e](t);this.root.innerHTML=r,n&&this.buildHud(),e===`workshop`&&this.wsStats()}refresh(){this.show(this.cur,this.data)}top(e,t=``,n=`title`){return`<div class="top">${n?`<button class="ic" data-a="go" data-v="${n}" aria-label="Back">‹</button>`:``}<h2>${e}${t?`<small>${t}</small>`:``}</h2><span class="money">${Rm(this.save.money)}</span></div>`}s_title(){let e=this.save.tour,t=e&&Lp(e.id);return`<div class="scr title"><div class="logo"><h1>SHRAPNEL</h1><p>ROBOT COMBAT LEAGUE</p></div>
      <div class="menu">
        ${e?`<button class="btn cy" data-a="resume">RESUME ${t.name}<small>${$p(e)} · ${e.status===`crate`?`PACK YOUR CRATE`:`NEXT FIGHT`}</small></button>`:``}
        <button class="btn pri" data-a="go" data-v="career">CAREER<small>BACKYARD BRAWL → WORLD CHAMPIONSHIP</small></button>
        <div class="row"><button class="btn" data-a="go" data-v="duel">DUEL<small>1 FIGHT · WIN ${Rm(cf.payout)}</small></button><button class="btn" data-a="workshop">WORKSHOP<small>BUILD · REPAIR · TEST</small></button></div>
        <div class="row"><button class="btn sm" data-a="go" data-v="rivals">RIVALS</button><button class="btn sm" data-a="go" data-v="settings">SETTINGS</button></div>
        <div class="ver"><span class="ye">${Rm(this.save.money)}</span> · MICROBOTS · v${Yd}</div>
      </div></div>`}botPicker(){let e=this.save,t=e.slots.map((t,n)=>{let r=qf(t.parts),i=r.missing||t.parts.some(e=>(e[5]??1)<1);return`<button class="pc ${e.active===n?`on`:``}" data-a="pick" data-v="${n}">${t.parts.length?`<img src="${this.app.thumb(t.parts,this.app.playerColor(),168,124)}">`:`<div style="height:62px;display:grid;place-items:center;color:#555;font-size:30px">+</div>`}<b>${t.name}</b><small class="${r.ok?i?`ye`:`gr`:`rd`}">${t.parts.length?r.ok?i?`DAMAGED`:`READY`:`NOT READY`:`EMPTY`}</small></button>`});return t.push(`<button class="pc ${e.active===`junk`?`on`:``}" data-a="pick" data-v="junk"><img src="${this.app.thumb(pf.parts,`#8a8f99`,168,124)}"><b>JUNKBOT</b><small class="mu">FREE · ALWAYS READY</small></button>`),`<div class="sub mu" style="margin:2px 0 6px;letter-spacing:.14em;font-size:12px">YOUR BOT</div><div class="pal" style="padding:0 0 8px">${t.join(``)}</div>`}s_career(){let e=this.save,t=Rp(e),n=Zd.map(e=>`<span class="chip ${e.unlocked?`or`:``}" style="${e.unlocked?``:`opacity:.55`}">${e.unlocked?``:`🔒 `}${e.name} · ${e.cap} LB</span>`).join(``),r=sf.map(t=>{let n=Hp(e,t.id),r=e.career.wins[t.id]||0;return`<div class="card ${n?``:`lock`}" style="border-left:4px solid ${t.color}"><h3 style="color:${t.color}">${t.name}</h3><div class="sub">${t.sub}</div>
      <div style="margin:6px 0"><span class="chip">ENTRY ${Rm(t.fee)}</span><span class="chip ye">PRIZE ${Rm(t.prize)}</span>${r?`<span class="chip gr">🏆 ×${r}</span>`:``}${t.rivals?`<span class="chip cy">${t.rivals.length} RIVALS</span>`:``}</div>
      ${n?`<button class="btn pri sm" data-a="tourEntry" data-v="${t.id}" ${e.tour?`disabled`:``}>${e.tour?`FINISH YOUR TOURNAMENT FIRST`:`ENTER ▸`}</button>`:`<div class="sub">${t.locked?`Coming in a future update · `:``}Requires: ${t.locked?`win `+(Lp(t.req)||{}).name:`win `+Lp(t.req).name}</div>`}</div>`}).join(``);return`<div class="scr dim">${this.top(`CAREER`,`LEVEL ${t} · BET CAP ${Rm(zp(e))}`)}
      <div class="scroll">${e.tour?`<button class="btn cy" data-a="resume" style="margin-bottom:10px">RESUME ${Lp(e.tour.id).name}<small>${$p(e.tour)}</small></button>`:``}
      <div style="margin-bottom:8px">${n}</div>${this.botPicker()}${r}
      <div class="sub mu" style="text-align:center;margin:4px 0 10px">Prize money is only paid for winning the whole tournament. Broke? The Junkbot can always enter the Backyard Brawl for free.</div></div></div>`}s_tourEntry(e){let t=this.save,n=Lp(e),r=Gp(t,e,t.active),i=Up(t,t.active),a=qf(i),o=n.rivals.map(e=>`<div class="rivalcard" style="margin-bottom:8px">${Bm(e,`por sm`)}<div><b class="tk" style="font-size:22px;color:${lf[e].color}">${lf[e].bot}${t.rivals[e]?` <span class="chip rd">UPGRADED</span>`:``}</b><div class="sub">${lf[e].who} · ${zm[lf[e].style]}</div></div></div>`).join(``);return`<div class="scr dim">${this.top(n.name,n.sub,`career`)}
      <div class="scroll"><div class="card"><div class="vs"><div class="side"><img class="th" src="${this.app.thumb(i,t.active===`junk`?`#8a8f99`:this.app.playerColor())}"><b class="tk" style="font-size:24px">${Wp(t,t.active)}</b><div class="sub">RATING ${a.rating}</div></div></div></div>
      <div class="card"><div class="kv"><span>ENTRY FEE</span><b>${r.hardship?`<span class="gr">WAIVED (JUNKBOT)</span>`:Rm(n.fee)}</b></div><div class="kv"><span>PRIZE (WINNER ONLY)</span><b class="ye">${Rm(n.prize)}</b></div><div class="kv"><span>BRACKET</span><b>8 BOTS · 3 ROUNDS</b></div><div class="kv"><span>SPARE CRATE</span><b>${n.crateSlots} SLOTS · ${n.crateWt} LB</b></div></div>
      <div class="card"><div class="sub" style="margin-bottom:8px;letter-spacing:.14em">RIVALS IN THIS BRACKET</div>${o}</div>
      ${r.ok?``:`<div class="card rd" style="text-align:center">${r.reason}</div>`}</div>
      ${r.ok?`<button class="btn pri foot" data-a="enter" data-v="${e}">${r.hardship?`HARDSHIP ENTRY · FREE`:`PAY `+Rm(n.fee)+` & ENTER`}<small>LOSE AND THE FEE IS GONE</small></button>`:`<button class="btn foot" data-a="go" data-v="career">BACK</button>`}</div>`}s_crate(){let e=this.save,t=e.tour,n=em(t),r=tm(t),i=t.crate.map((e,t)=>`<button class="chip or" data-a="crateRm" data-v="${t}">${q[e.t].name} ✕</button>`).join(``)||`<span class="mu">Empty — tap + below to pack spares</span>`,a=[`steel`,`titanium`,`ar500`,`wedge`,`plow`,`wheel`,`wheel_hd`,`motor`,`motor_bl`,`battery`,`battery_xl`,`tank`,`tank_xl`,`cpu`,`frame`,...Object.keys(q).filter(e=>q[e].wpn)],o=new Set(Xp(t,`player`).parts.map(e=>e[0])),s=a.filter(e=>q[e]).map(t=>{let n=q[t],r=e.spares[t]||0;return`<div class="li"><img src="${this.app.partIcon(t)}" style="width:52px;height:38px;object-fit:contain"><div class="n">${n.name}${o.has(t)?` <span class="chip gr">ON YOUR BOT</span>`:``}<small>${n.slots} SLOT${n.slots>1?`S`:``} · ${n.wt} LB · ${r?`<span class="gr">SPARE ×${r} (FREE)</span>`:Rm(n.cost)}</small></div><button class="btn sm" data-a="crateAdd" data-v="${t}">+</button></div>`}).join(``);return`<div class="scr dim">${this.top(`SPARE CRATE`,Lp(t.id).name,`title`)}
      <div class="card"><div class="kv"><span>SLOTS</span><b>${n.slots} / ${r.slots}</b></div><div class="bar"><i style="width:${n.slots/r.slots*100}%"></i></div>
      <div class="kv"><span>WEIGHT</span><b>${n.wt.toFixed(2)} / ${r.wt} LB</b></div><div class="bar cy"><i style="width:${Math.min(100,n.wt/r.wt*100)}%"></i></div>
      <div style="margin-top:8px">${i}</div></div>
      <div class="sub mu" style="margin:0 2px 8px;flex:none">Between rounds you can swap these in to repair or adapt. Used parts are gone; unused ones come home. Frame dents and motor wear can only be fixed in the workshop.</div>
      <div class="scroll"><div class="card" style="padding:4px 10px">${s}</div></div>
      <button class="btn pri foot" data-a="crateDone">NEXT: BETS ▸</button></div>`}s_bets(){let e=this.save,t=e.tour,n=Qp(t),r=zp(e),i=um(t),a=[[`tour`,`WIN THE TOURNAMENT`,`Pays at the end if you lift the trophy`],[`ko60`,`KO IN UNDER 60s`,`Next match only`],[`flawless`,`NO PARTS LOST`,`Win the next match without losing a part`]];n&&n.rival&&a.push([`rival`,`BEAT ${lf[n.rival].bot}`,`Grudge bet vs ${lf[n.rival].who}`]);let o=a.map(([e,n,r])=>`<div class="li"><div class="n">${n} <span class="chip ye">×${lm(t,e).toFixed(2)}</span><small>${r}</small></div><div class="stake"><button class="ic" data-a="stk" data-v="${e}:-">−</button><b>${Rm(this.stake[e])}</b><button class="ic" data-a="stk" data-v="${e}:+">+</button></div><button class="btn sm pri" data-a="bet" data-v="${e}">BET</button></div>`).join(``),s=t.bets.map(e=>`<div class="kv"><span>${e.kind===`tour`?`TOURNAMENT WIN`:e.kind===`ko60`?`KO < 60s`:e.kind===`flawless`?`NO PARTS LOST`:`BEAT RIVAL`} · R${e.round+1} ×${e.odds}</span><b class="${e.open?`ye`:e.won?`gr`:`rd`}">${Rm(e.stake)} ${e.open?`OPEN`:e.won?`WON`:`LOST`}</b></div>`).join(``);return`<div class="scr dim">${this.top(`BETTING`,`ONLY ON YOUR OWN BOT`,`title`)}
      <div class="card"><div class="kv"><span>YOU vs THE FIELD</span><b>RATING ${sm(t)}</b></div><div class="kv"><span>NEXT: ${n?n.name:`-`}</span><b>RATING ${n?n.rating:`-`}</b></div>
      <div class="kv"><span>BET CAP (CAREER LV ${Rp(e)})</span><b>${Rm(i)} / ${Rm(r)}</b></div><div class="bar"><i style="width:${Math.min(100,i/r*100)}%;background:var(--ye)"></i></div></div>
      <div class="scroll"><div class="card" style="padding:4px 10px">${o}</div>
      ${s?`<div class="card"><div class="sub" style="letter-spacing:.14em">YOUR BETS</div>${s}</div>`:``}</div>
      <button class="btn pri foot" data-a="go" data-v="bracket">${t.bets.some(e=>e.round===t.round)?`TO THE BRACKET ▸`:`NO BET · TO THE BRACKET ▸`}</button></div>`}entrantRow(e,t,n,r){let i=Xp(e,t);if(!i)return`<div class="be mu">—</div>`;let a=!n.includes(t);return`<div class="be ${i.player?`me`:i.rival?`rv`:``} ${a?`out`:``} ${r===t?`win`:``}">${i.rival?Bm(i.rival,``):``}${i.name}</div>`}s_bracket(){let e=this.save,t=e.tour,n=Qp(t),r=Xp(t,`player`),i=[];for(let e=0;e<8;e+=2)i.push([t.entrants[e].id,t.entrants[e+1].id]);let a=t.results,o=t.entrants.map(e=>e.id),s=(e,n,r)=>`<div class="bcol">${e.map((e,i)=>`<div class="bm">${e.map(e=>this.entrantRow(t,e,n,r&&r[i])).join(``)}</div>`).join(``)}</div>`,c=a[0]?a[0].map(e=>e.w):null,l=a[1]?a[1].map(e=>e.w):null,u=s(i,c||o,c),d=c?s([[c[0],c[1]],[c[2],c[3]]],l||c,l):`<div class="bcol"><div class="bm mu be">QF winners</div><div class="bm mu be">QF winners</div></div>`,f=l?s([[l[0],l[1]]],t.alive,null):`<div class="bcol"><div class="bm mu be">FINAL</div></div>`,p=n&&n.rival?lf[n.rival]:null;return`<div class="scr dim">${this.top(Lp(t.id).name,$p(t)+` · PRIZE `+Rm(t.prize),`title`)}
      <div class="scroll"><div class="brk">${u}${d}${f}</div>
      ${n?`<div class="card"><div class="sub" style="letter-spacing:.16em;text-align:center">${$p(t)}</div><div class="vs"><div class="side"><img class="th" src="${this.app.thumb(r.parts,t.slot===`junk`?`#8a8f99`:this.app.playerColor())}"><b class="tk or" style="font-size:22px">${r.name}</b><div class="sub">RATING ${sm(t)}</div></div><div class="mid">VS</div><div class="side"><img class="th" src="${this.app.thumb(n.parts,p?p.color:`#29b6ff`,240,180,-2.4)}"><b class="tk cy" style="font-size:22px">${n.name}</b><div class="sub">${zm[n.style]} · ${n.rating}</div></div></div>
        ${p?`<div class="rivalcard" style="margin-top:8px">${Bm(n.rival)}<div style="flex:1"><b class="tk" style="font-size:20px;color:${p.color}">${p.who}</b><div class="sub">${p.team}</div><div class="taunt">“${p.taunts[Math.min(2,e.rivals[n.rival]?2:t.round)]}”</div></div></div>`:`<div class="sub" style="text-align:center;margin-top:4px">${n.team}</div>`}</div>`:``}
      </div>
      <button class="btn pri foot" data-a="fightTour">FIGHT ▸<small>2:00 · KO OR JUDGES</small></button>
      <div class="row foot" style="margin-top:8px"><button class="btn sm" data-a="go" data-v="pit">PIT CREW<small>${t.crate.length} IN CRATE</small></button><button class="btn sm" data-a="go" data-v="bets">BETS<small>${Rm(um(t))} PLACED</small></button></div>
      <button class="btn sm foot" style="margin-top:8px;opacity:.6" data-a="forfeit">FORFEIT TOURNAMENT</button></div>`}s_pit(){let e=this.save.tour,t=Xp(e,`player`),n=Qp(e),r=t.parts.map(Uf),i=t=>e.crate.some(e=>e.t===t),a=r.map((e,t)=>({p:e,i:t})).filter(({p:e})=>e.missing||e.hp<.999||e.wear>.001).map(({p:e,i:t})=>{let n=e.missing?`<span class="rd">DESTROYED</span>`:`${e.hp<.999?`HP ${Math.round(e.hp*100)}%`:``}${e.wear>.001?` WEAR ${Math.round(e.wear*100)}%`:``}`,r=im(e)?i(e.t)?`<button class="btn sm pri" data-a="fix" data-v="${t}">SWAP</button>`:`<span class="chip">NO SPARE</span>`:`<span class="chip ye">WORKSHOP ONLY</span>`;return`<div class="li"><div class="n">${q[e.t].name}<small>${Vm(e).toUpperCase()} · ${n}</small></div>${r}</div>`}).join(``)||`<div class="li"><div class="n gr">No damage. Your bot is in perfect shape.</div></div>`,o=qf(r),s=xm(e),c=s.cap?`<div class="card fuelc"><div class="kv"><span>🔥 FUEL TANK${o.inferno?``:` · NO INFERNO WEAPON`}</span><b class="${s.fuel<s.cap*.25?`rd`:``}">${Math.round(s.fuel)} / ${s.cap}</b></div><div class="bar or"><i style="width:${s.fuel/s.cap*100}%"></i></div><div class="sub" style="margin:8px 0">Fuel carries over between rounds. Refill from the crate: ${Rm(nf*10)} per 10 fuel.</div><button class="btn sm pri" data-a="refuel" ${s.missing<=0?`disabled`:``} style="width:100%">${s.missing<=0?`FULL`:`REFUEL `+Rm(s.cost)}</button></div>`:``;return`<div class="scr dim">${this.top(`PIT CREW`,`REPAIR & ADAPT · NO TIME LIMIT`,`bracket`)}
      <div class="scroll">${n?`<div class="card"><div class="vs"><div class="side" style="flex:0 0 46%"><img class="th" src="${this.app.thumb(n.parts,n.rival?lf[n.rival].color:`#29b6ff`,240,180,-2.4)}"></div><div style="flex:1"><div class="sub" style="letter-spacing:.14em">NEXT OPPONENT</div><b class="tk cy" style="font-size:26px">${n.name}</b><div class="sub">${zm[n.style]} · RATING ${n.rating}</div><div class="sub" style="margin-top:6px;color:#ffd9bf">${this.adapt(n.style)}</div></div></div></div>`:``}
      <div class="card"><div class="kv"><span>BOT</span><b class="${o.ok?`gr`:`rd`}">${o.ok?`READY`:o.errors[0]}</b></div><div class="kv"><span>WEIGHT</span><b>${o.weight.toFixed(2)} / ${o.cap} LB</b></div>
        <div style="margin-top:6px">${e.crate.map(e=>`<span class="chip or">${q[e.t].name}</span>`).join(``)||`<span class="mu">Crate is empty</span>`}</div></div>
      ${c}<div class="card" style="padding:4px 10px">${a}</div></div>
      <div class="row foot"><button class="btn sm" data-a="autofix">AUTO-FIX</button><button class="btn sm" data-a="pitBuild" ${e.crate.length?``:`disabled`}>BOLT ON PARTS</button></div>
      <button class="btn pri foot" style="margin-top:8px" data-a="go" data-v="bracket">DONE ▸</button></div>`}adapt(e){return{vspin:`Tip: a wedge facing it deflects the disc and can launch it.`,hbar:`Tip: get under it with a wedge; stay out of its reach while it spins up.`,drum:`Tip: low armor up front soaks drum hits.`,hammer:`Tip: top armor protects your CPU from overhead hits.`,flipper:`Tip: you will get flipped. A flipper or hammer self-rights instantly.`,crusher:`Tip: keep moving; it needs to grab you.`,saw:`Tip: armor beats saws. Push it into the hazards.`}[e]||``}s_tourEnd(e){let t=this.save,n=t.slots[t.active===`junk`?0:t.active],r=e.slot===`junk`?0:Xf(n.parts);return`<div class="scr dim">${this.top(e.tourName,``,`title`)}
      <div class="scroll">${e.won?`<div class="trophy">🏆</div><div class="big ye">CHAMPION!</div>`:`<div class="big rd" style="margin-top:20px">ELIMINATED</div><div class="sub" style="text-align:center">${[`in the quarterfinal`,`in the semifinal`,`in the final`][e.round]||``}</div>`}
      <div class="card" style="margin-top:14px">
        ${e.won?`<div class="kv"><span>PRIZE</span><b class="ye">+${Rm(e.prize)}</b></div><div class="kv"><span>TOURNAMENT BET</span><b class="${e.betWin?`gr`:`mu`}">${e.betWin?`+`+Rm(e.betWin):`—`}</b></div>`:`<div class="kv"><span>ENTRY FEE</span><b class="rd">−${Rm(e.fee)} (lost)</b></div><div class="kv"><span>PRIZE</span><b class="mu">$0 — only the winner gets paid</b></div>`}
        <div class="kv"><span>SIDE BETS PAID</span><b>${e.sidePay?`+`+Rm(e.sidePay):`—`}</b></div>
        <div class="kv"><span>UNUSED CRATE PARTS KEPT</span><b>${e.kept}</b></div>
        ${r?`<div class="kv"><span>WORKSHOP REPAIRS NEEDED</span><b class="ye">${Rm(r)}</b></div>`:``}
        <div class="kv"><span>BANK</span><b class="ye">${Rm(t.money)}</b></div></div></div>
      ${r?`<button class="btn pri foot" data-a="workshop">WORKSHOP · REPAIR</button>`:``}
      <button class="btn ${r?``:`pri`} foot" style="margin-top:8px" data-a="go" data-v="career">CAREER</button></div>`}s_duel(){this.duelOpps||this.rollDuel();let e=this.duelOpps.map((e,t)=>`<button class="pc ${this.duelPick===t?`on`:``}" style="width:118px" data-a="duelPick" data-v="${t}"><img src="${this.app.thumb(e.parts,e.color,168,124,-2.4)}">${e.rival?Bm(e.rival,`por sm`):``}<b>${e.name}</b><small>${zm[e.style]}</small></button>`).join(``);return`<div class="scr dim">${this.top(`DUEL`,`ONE FIGHT · ${Rm(cf.payout)} IF YOU WIN · FREE REPAIRS`)}
      <div class="scroll">${this.botPicker()}<div class="sub mu" style="letter-spacing:.14em;font-size:12px;margin-bottom:6px">OPPONENT</div><div class="pal" style="padding:0 0 10px">${e}</div>
      <button class="btn sm" data-a="duelRoll" style="margin-bottom:10px">NEW OPPONENTS</button></div>
      <button class="btn pri foot" data-a="duelGo">FIGHT ▸<small>NO ENTRY FEE · BOT IS REPAIRED AFTER</small></button></div>`}rollDuel(){let e=hf.slice().sort(()=>Math.random()-.5).slice(0,3),t=[`#29b6ff`,`#3dff8a`,`#c06bff`],n=this.save.career.wins,r=Math.min(2,+(n.backyard>0)+ +(n.regional>0));this.duelOpps=e.map((e,n)=>({name:e[0],team:e[1],style:e[2],parts:mf(e[2],0,{lv:Math.min(3,1+r)}),color:t[n],skill:.55}));for(let e of Object.keys(lf))this.duelOpps.push({name:lf[e].bot,team:lf[e].team,style:lf[e].style,parts:mf(lf[e].style,0,{lv:Kp(r,e),inferno:qp(r,e)}),color:lf[e].color,skill:.8,rival:e});this.duelPick=0}s_rivals(){let e=this.save;return`<div class="scr dim">${this.top(`RIVALS`,`THEY COME BACK STRONGER`)}<div class="scroll">${Object.entries(lf).map(([t,n])=>`<div class="card" style="border-left:4px solid ${n.color}"><div class="rivalcard">${Bm(t)}<div style="flex:1"><h3 style="color:${n.color};font-size:26px">${n.who}</h3><div class="sub">${n.team}</div><div class="sub" style="margin-top:4px">${n.bio}</div></div></div>
      <div class="vs" style="margin-top:8px"><div class="side" style="flex:0 0 42%"><img class="th" src="${this.app.thumb(mf(n.style,Math.min(2,+!!e.rivals[t]),{lv:Kp(+!!e.rivals[t],t),inferno:qp(+!!e.rivals[t],t)}),n.color,240,180,-2.4)}"></div><div style="flex:1"><b class="tk" style="font-size:24px">${n.bot}</b><div class="sub">${zm[n.style]}</div><div style="margin-top:4px"><span class="chip ${e.rivals[t]?`gr`:``}">BEATEN ×${e.rivals[t]||0}</span></div></div></div>
      <div class="taunt">“${n.taunts[e.rivals[t]?2:0]}”</div></div>`).join(``)}</div></div>`}s_settings(){let e=this.save.settings,t=[`auto`,`low`,`medium`,`high`].map(t=>`<button class="btn sm ${e.quality===t?`pri`:``}" data-a="q" data-v="${t}">${t.toUpperCase()}</button>`).join(``),n=[`#ff6a1a`,`#ffd23a`,`#3dff8a`,`#29b6ff`,`#c06bff`,`#ff3b5c`,`#e9ecf1`].map(t=>`<button data-a="color" data-v="${t}" style="width:40px;height:40px;border-radius:10px;background:${t};border:3px solid ${e.color===t||!e.color&&t===`#ff6a1a`?`#fff`:`transparent`}"></button>`).join(``);return`<div class="scr dim">${this.top(`SETTINGS`)}
      <div class="scroll"><div class="card"><div class="sub" style="letter-spacing:.14em;margin-bottom:6px">GRAPHICS QUALITY</div><div class="row">${t}</div><div class="sub" style="margin-top:6px">Auto starts on Medium and drops to Low if a fight runs below ~42 fps.</div></div>
      <div class="card"><div class="sub" style="letter-spacing:.14em;margin-bottom:6px">TEAM COLOR</div><div class="row" style="flex-wrap:wrap">${n}</div></div>
      <div class="card"><div class="row"><button class="btn sm ${e.haptics?`pri`:``}" data-a="tog" data-v="haptics">HAPTICS ${e.haptics?`ON`:`OFF`}</button><button class="btn sm ${e.tips?`pri`:``}" data-a="tog" data-v="tips">TIPS CARD ${e.tips?`ON`:`OFF`}</button></div></div>
      <div class="sub mu" style="text-align:center">SHRAPNEL v${Yd} · progress saves automatically</div></div></div>`}s_workshop(){let e=this.app.builder,t=e.pit,n=this.save,r=t?`PIT CREW`:n.slots[e.slot].name,i=t?this.crateTabs():`<div class="tabs">${Qd.map(e=>`<button class="${this.cat===e.id?`on`:``}" data-a="cat" data-v="${e.id}">${e.name}</button>`).join(``)}</div><div class="pal" id="pal">${Object.entries(q).filter(([,e])=>e.cat===this.cat).map(([t,r])=>`<button class="pc ${e.sel===t?`on`:``}" data-a="sel" data-v="${t}"><img src="${this.app.partIcon(t)}"><b>${r.name}${r.wpn?` <span class="lvc ${_m(n,t)?`hot`:``}">LV${gm(n,t)}${_m(n,t)?`🔥`:``}</span>`:``}</b><small>${r.wpn?(r.wt*(1+ef.wt*(gm(n,t)-1))).toFixed(2):r.wt} lb · ${Rm(r.cost)}${r.draw?` · ${r.draw}W`:r.cap?` · +${r.cap}W`:r.fuel?` · ${r.fuel} FUEL`:``}</small></button>`).join(``)}</div>${this.upgRow()}`;return`<div class="scr ws"><div class="wtop"><div class="wbar"><button class="ic" data-a="wsBack" aria-label="Back">‹</button><div class="wname" data-a="${t?``:`rename`}">${r}<small>${t?`TAP A DAMAGED PART TO SWAP · TAP A FACE TO BOLT ON`:`SLOT ${e.slot+1} · TAP TO RENAME`}</small></div><span class="money">${Rm(n.money)}</span></div><div id="wsStats"></div></div>
      <div class="side">${t?``:`<button class="ic ${e.mode===`build`?`on`:``}" data-a="mode" data-v="build">✚<small>BUILD</small></button><button class="ic ${e.mode===`erase`?`on`:``}" data-a="mode" data-v="erase">✖<small>REMOVE</small></button>`}
        <button class="ic" data-a="rot">${[`↑`,`→`,`↓`,`←`][e.rot]}<small>ROTATE</small></button>${t?``:`<button class="ic ${e.mirror?`on`:``}" data-a="mirror">⇋<small>MIRROR</small></button><button class="ic" data-a="undo">↶<small>UNDO</small></button>`}</div>
      <div class="wbot">${i}<div class="wact">${t?`<button class="btn sm pri" data-a="go" data-v="pit">DONE ▸</button>`:`<button class="btn sm" data-a="slots">SLOTS</button><button class="btn sm" data-a="repair" id="repBtn">REPAIR</button><button class="btn sm pri" data-a="test">TEST DRIVE</button>`}</div></div>${this.sheet||``}</div>`}upgRow(){let e=this.app.builder,t=this.save,n=e.sel;if(e.pit||this.cat!==`weapon`||!n||!q[n]||!q[n].wpn)return``;let r=q[n],i=gm(t,n),a=$d[r.wpn],o=of(a,i),s=of(a,Math.min(5,i+1)),c=Array.from({length:ef.max},(e,t)=>`<i class="${t<i?`on`:``}${i===5&&t<i?` hot`:``}"></i>`).join(``),l=a.spinUp?[`SPIN-UP`,`spinUp`,`s`]:a.cd?[`CYCLE`,`cd`,`s`]:null,u=e=>e>=10?Math.round(e):e.toFixed(2).replace(/0$/,``),d,f;if(i<ef.max){let e=rf(n,i+1);d=`<button class="btn sm pri" data-a="upg" ${t.money<e?`data-poor="1"`:``}>LV ${i+1} · ${Rm(e)}</button>`,f=`DMG ${Math.round(o.dmg)}→${Math.round(s.dmg)}${l?` · ${l[0]} ${u(o[l[1]])}→${u(s[l[1]])}${l[2]}`:``} · +${(r.wt*ef.wt).toFixed(2)} LB`}else _m(t,n)?(d=`<span class="chip or">🔥 INFERNO ✓</span>`,f=`MAX LEVEL · DMG ${Math.round(o.dmg)} · hold FIRE in a fight (needs a FUEL TANK)`):(d=`<button class="btn sm inf" data-a="infBuy">🔥 INFERNO · ${Rm(af(n))}</button>`,f=`MAX LEVEL · INFERNO MOD: weapon ignites targets · needs a FUEL TANK (Power tab)`);return`<div class="upg"><div class="ut"><b>${r.name}</b><span class="pips">${c}</span></div><div class="us">${f}</div>${d}</div>`}crateTabs(){let e=this.app.builder,t={};for(let e of this.save.tour.crate)t[e.t]=(t[e.t]||0)+1;return`<div class="tabs"><button class="on">CRATE</button></div><div class="pal">${Object.entries(t).map(([t,n])=>`<button class="pc ${e.sel===t?`on`:``}" data-a="sel" data-v="${t}"><img src="${this.app.partIcon(t)}"><b>${q[t].name}</b><small>×${n} in crate</small></button>`).join(``)||`<div class="mu" style="padding:20px">Crate is empty</div>`}</div>`}wsStats(){let e=Lm(`#wsStats`);if(!e)return;let t=this.app.builder,n=t.stats(),r=t.pit?0:Xf(t.parts);e.innerHTML=`<div class="meters"><div><div class="kv"><span>WEIGHT</span><b>${n.weight.toFixed(2)} / ${n.cap} LB</b></div><div class="bar ${n.weight>n.cap?`bad`:``}"><i style="width:${Math.min(100,n.weight/n.cap*100)}%"></i></div></div>
      <div><div class="kv"><span>POWER</span><b>${n.draw} / ${n.power} W</b></div><div class="bar cy ${n.draw>n.power?`bad`:``}"><i style="width:${n.power?Math.min(100,n.draw/n.power*100):0}%"></i></div></div>
      <div class="kv"><span>SPEED</span><b>${n.speed.toFixed(1)}</b></div><div class="kv"><span>RATING</span><b>${n.rating}</b></div></div>
      <div class="status ${n.ok?``:`bad`}">${n.ok?n.warnings[0]?`✓ READY · `+n.warnings[0]:`✓ READY TO FIGHT`:`⚠ `+n.errors[0]+(n.errors.length>1?` (+${n.errors.length-1})`:``)}</div>`;let i=Lm(`#repBtn`);i&&(i.textContent=r?`REPAIR ${Rm(r)}`:`REPAIR`,i.disabled=!r);let a=Lm(`.ws .money`);a&&(a.textContent=Rm(this.save.money))}slotsSheet(){let e=this.save,t=this.app.builder,n=e.slots.map((e,n)=>{let r=qf(e.parts);return`<div class="li">${e.parts.length?`<img src="${this.app.thumb(e.parts,this.app.playerColor(),168,124)}" style="width:70px">`:`<div style="width:70px;text-align:center;color:#555">EMPTY</div>`}<div class="n">${e.name}<small>${r.parts} PARTS · ${r.weight.toFixed(1)} LB · ${r.ok?`READY`:`NOT READY`}</small></div>${t.slot===n?`<span class="chip or">EDITING</span>`:`<button class="btn sm" data-a="editSlot" data-v="${n}">EDIT</button>`}</div>`}).join(``),r=e.slots[t.slot].parts.map(Uf).reduce((e,t)=>e+(t.missing?0:Math.round(q[t.t].cost*t.hp)),0),i=Object.entries(ff).map(([e,t])=>{let n=qf(t.parts),i=n.cost-r;return`<div class="li"><img src="${this.app.thumb(t.parts,this.app.playerColor(),168,124)}" style="width:70px"><div class="n">${t.name}<small>${n.weight.toFixed(1)} LB · COSTS ${Rm(n.cost)} · NET ${i>=0?Rm(i):`+`+Rm(-i)+` BACK`}</small></div><button class="btn sm" data-a="preset" data-v="${e}">LOAD</button></div>`}).join(``);return`<div class="modal" data-a="closeSheet"></div><div class="sheet"><h3 style="font-size:26px">BUILD SLOTS</h3>${n}<h3 style="font-size:26px;margin-top:12px">PRESET DESIGNS <small class="mu" style="font:500 13px 'Barlow Condensed'">· load into slot ${t.slot+1}, current parts sold back</small></h3>${i}
      <div class="li"><img src="${this.app.thumb(pf.parts,`#8a8f99`,168,124)}" style="width:70px"><div class="n">JUNKBOT<small>FREE FALLBACK · ALWAYS READY · CAN'T BE EDITED</small></div></div>
      <button class="btn sm" style="margin-top:8px" data-a="closeSheet">CLOSE</button></div>`}bindWorkshopTouch(){let e=document.getElementById(`c`),t=new Map,n=null,r=!1,i=0;e.addEventListener(`pointerdown`,a=>{if(this.app.mode3d===`workshop`){if(e.setPointerCapture(a.pointerId),t.set(a.pointerId,{x:a.clientX,y:a.clientY}),t.size===1)n={x:a.clientX,y:a.clientY,t:performance.now()},r=!1,this.app.builder.showCursor(this.app.builder.pick(a.clientX,a.clientY));else{r=!0,this.app.builder.showCursor(null);let[e,n]=[...t.values()];i=Math.hypot(e.x-n.x,e.y-n.y)}}}),e.addEventListener(`pointermove`,e=>{if(!t.has(e.pointerId))return;let a=t.get(e.pointerId),o=e.clientX-a.x,s=e.clientY-a.y,c=this.app.builder.orbit;if(t.size===1)n&&Math.hypot(e.clientX-n.x,e.clientY-n.y)>9&&(r=!0,this.app.builder.showCursor(null)),r&&(c.th-=o*.008,c.ph-=s*.006);else{a.x=e.clientX,a.y=e.clientY;let[n,r]=[...t.values()],o=Math.hypot(n.x-r.x,n.y-r.y);i&&(c.r*=i/o),i=o;return}a.x=e.clientX,a.y=e.clientY});let a=e=>{if(t.has(e.pointerId)&&(t.delete(e.pointerId),t.size===0)){if(this.app.builder.showCursor(null),!r&&n&&performance.now()-n.t<600){let t=this.app.builder.tap(e.clientX,e.clientY);t&&!t.ok&&t.reason?this.toast(t.reason,!0):t&&t.ok&&(this.haptic(12),this.app.builder.pit&&this.refresh())}n=null}};e.addEventListener(`pointerup`,a),e.addEventListener(`pointercancel`,a),e.addEventListener(`wheel`,e=>{this.app.mode3d===`workshop`&&(this.app.builder.orbit.r*=1+Math.sign(e.deltaY)*.08)},{passive:!0}),this.app.onBuilderChange=()=>this.wsStats()}haptic(e){if(this.save.settings.haptics&&navigator.vibrate)try{navigator.vibrate(e)}catch{}}buildHud(){let e=this.app.fight,[t,n]=e.bots,r=this.app.ctx.kind===`test`;this.hud.innerHTML=`<div class="plates"><div class="plate"><b>${t.name}<em class="brn" id="brnA" hidden>🔥</em></b><div class="bar"><i id="hpA"></i></div></div><div class="clock" id="clock">${r?`∞`:Hm(e.T)}<small>${r?`TEST DRIVE`:this.app.ctx.kind===`tour`?$p(this.save.tour):`DUEL`}</small></div><div class="plate b"><b>${n.name}<em class="brn" id="brnB" hidden>🔥</em></b><div class="bar"><i id="hpB"></i></div></div></div>
      <button id="pauseBtn" data-a="pause">❚❚</button><div id="hudMsg"></div><div id="hudCount"></div><div id="hudAlert"></div>`;let i=t.weapons[0],a={spin:`✷`,strike:`⚒`,hold:`⚙`},o=i?{vspin:`SPIN UP`,hbar:`SPIN UP`,drum:`SPIN UP`,hammer:`STRIKE`,flipper:`FLIP`,crusher:`CRUSH`,saw:`GRIND`}[i.p.def.wpn]:`NO WEAPON`;Lm(`#wpnIcon`).textContent=i?a[i.spec.mode]:`—`,Lm(`#wpnLbl`).textContent=o,Lm(`#btnWpn`).classList.toggle(`na`,!i),this.lastSec=-1,this.tipsOpen=!1,this.ig={};let s=Lm(`#btnFire`);if(s&&(s.hidden=!0),this.save.settings.tips&&!r){this.tipsOpen=!0,this.app.paused=!0,this.app.controls.show(!1);let e=document.createElement(`div`);e.className=`tips`,e.innerHTML=`<b>QUICK TIPS</b>Left thumb: drive (push up to go, sideways to turn).<br>WEAPON: spinners tap to spin up · hammers &amp; flippers tap to strike · saws &amp; crushers hold.<br>Flipped? The SELF-RIGHT button appears.<br>Inferno weapon + fuel tank? Hold 🔥 FIRE to ignite your weapon (burns fuel).<br>Win by KO (CPU or battery destroyed, pitted, or 10s immobile) or on the judges' cards.<button class="btn pri sm" style="margin-top:10px" data-a="tipsOk">GOT IT</button>`,this.hud.appendChild(e)}this.hudTick(0)}hudTick(){let e=this.app.fight;if(!e||this.cur!==`fight`)return;let[t,n]=e.bots,r=Lm(`#hpA`),i=Lm(`#hpB`);r&&(r.style.width=t.integrity*100+`%`),i&&(i.style.width=n.integrity*100+`%`);let a=Lm(`#clock`);if(a&&e.T){let t=e.remaining;a.firstChild.nodeValue=Hm(Math.ceil(t)),a.classList.toggle(`low`,t<15)}let o=Lm(`#hudMsg`);if(e.state===`intro`&&o&&!this.tipsOpen){let t=Math.ceil(e.intro);t!==this.lastSec&&t<=3&&t>0&&(this.lastSec=t,o.innerHTML=`<div class="banner">${t}</div>`)}let s=t.weapons.find(e=>e.p.on)||t.weapons[0],c=Lm(`#wpnRing`),l=Lm(`#btnWpn`);if(s&&c){let e=0;e=s.spec.mode===`spin`?s.e:s.spec.mode===`strike`?s.cd>0?1-s.cd/s.spec.cd:1:s.swing,c.style.strokeDashoffset=289*(1-e),l.classList.toggle(`on`,s.spec.mode===`spin`?s.on:e>=1&&s.spec.mode===`strike`),l.classList.toggle(`na`,!s.p.on||t.inverted&&!s.spec.around)}{let r=Lm(`#btnFire`);if(r){let n=t.tanks>0&&t.weapons.some(e=>e.inf&&e.p.on)&&e.state!==`end`;if(r.hidden===n&&(r.hidden=!n),n){let e=t.fuelMax?t.fuel/t.fuelMax:0;Lm(`#fuelRing`).style.strokeDashoffset=289*(1-e),r.classList.toggle(`low`,e<.22&&e>.001),r.classList.toggle(`dry`,t.fuel<=.05);let n=Lm(`#fuelLbl`),i=t.fuel<=.05?`EMPTY`:Math.round(e*100)+`%`;n.textContent!==i&&(n.textContent=i),r.classList.toggle(`on`,!!t.fireOn)}}let i=Lm(`#brnA`),a=Lm(`#brnB`);i&&(i.hidden=!t.burning),a&&(a.hidden=!n.burning)}let u=Lm(`#btnRight`),d=t.inverted&&!t.air&&e.state===`fight`;u.hidden===d&&(u.hidden=!d),d&&(u.querySelector(`small`).textContent=t.righting>0?`TRYING…`:`SELF-RIGHT`);let f=Lm(`#hudCount`);if(f){let r=e.state===`fight`?Math.max(t.koTimer,n.koTimer):0,i=t.koTimer>=n.koTimer?t:n,a=r>.4?Math.max(1,10-Math.floor(r)):0;a!==this.cntV&&(this.cntV=a,f.innerHTML=a?`<div class="count">${a}<small>${i.name} ${i.inverted?`IS FLIPPED`:`IS IMMOBILE`}</small></div>`:``)}}onFightEvent(e){if(this.cur!==`fight`)return;let t=Lm(`#hudMsg`),n=Lm(`#hudAlert`);e.type===`start`&&t&&(t.innerHTML=`<div class="banner" style="color:#ffd06a">FIGHT!</div>`,setTimeout(()=>{t.firstChild&&/FIGHT/.test(t.textContent)&&(t.innerHTML=``)},900)),e.type===`hit`&&e.crit&&t&&(t.innerHTML=`<div class="banner crit">CRITICAL!<small>HOOKED UNDER THE EDGE</small></div>`,setTimeout(()=>{t.firstChild&&/CRITICAL/.test(t.textContent)&&(t.innerHTML=``)},1300)),e.type===`pit`&&n&&(n.innerHTML=`<div class="alert">⚠ THE PIT IS OPEN</div>`,setTimeout(()=>n.innerHTML=``,2600)),e.type===`explode`&&n&&(n.innerHTML=`<div class="alert" style="background:rgba(255,90,10,.95)">💥 ${e.bot===0?`YOUR`:this.app.fight.bots[e.bot].name+`'S`} FUEL TANK EXPLODED!</div>`,setTimeout(()=>n.innerHTML=``,2400),this.haptic(160)),e.type===`ignite`&&t&&(this.ig=this.ig||{},this.ig[e.bot]||(this.ig[e.bot]=1,t.innerHTML=`<div class="banner crit" style="color:#ff9a3a">ABLAZE!<small>${e.bot===0?`YOU ARE BURNING`:this.app.fight.bots[e.bot].name+` IS ON FIRE`}</small></div>`,setTimeout(()=>{t.firstChild&&/ABLAZE/.test(t.textContent)&&(t.innerHTML=``)},1300))),e.type===`dry`&&e.bot===0&&n&&(n.innerHTML=`<div class="alert" style="background:rgba(120,120,130,.9)">OUT OF FUEL</div>`,setTimeout(()=>n.innerHTML=``,1600)),e.type===`under`&&n&&(n.innerHTML=`<div class="alert under">${e.bot===0?`UNDER!`:this.app.fight.bots[e.bot].name+` GETS UNDER`}</div>`,setTimeout(()=>{n&&/UNDER/.test(n.textContent||``)&&(n.innerHTML=``)},900)),e.type===`selfright`&&e.bot===0&&!e.ok&&this.toast(`Self-right failed — try again`,!0),e.type===`detach`&&n&&this.app.fight.bots[e.bot].parts[e.part].def.wpn&&(n.innerHTML=`<div class="alert" style="background:rgba(255,140,20,.9)">${this.app.fight.bots[e.bot].name}'S WEAPON IS OFF!</div>`,setTimeout(()=>n.innerHTML=``,2e3))}fightEnded(e){this.app.controls.show(!1);let t=this.app.fight.bots[e.winner],n=Lm(`#hudMsg`),r=Lm(`#hudCount`);r&&(r.innerHTML=``),n&&(n.innerHTML=e.how===`KO`?`<div class="banner">KNOCKOUT!<small>${e.reason} · ${t.name} WINS</small></div>`:`<div class="banner">TIME!<small>${e.reason} · ${t.name} WINS</small></div>`),Lm(`#pauseBtn`)&&(Lm(`#pauseBtn`).style.display=`none`),this.app.ctx.kind===`test`&&setTimeout(()=>this.app.reelDone(),1600)}reel(e){this.reelEl.hidden=!e,e?(this.hud.hidden=!0,this.reelEl.innerHTML=`<div class="bars t"></div><div class="bars b"></div><div class="tag"><i></i>INSTANT REPLAY</div><div class="slo">SLOW-MO ▸▸</div><div id="l3"></div><div class="dots" id="rdots"></div><button class="skip" data-a="skip">SKIP ▸▸</button>`):this.reelEl.innerHTML=``}reelClip(e,t,n){let r=this.app.fight,i=r.bots[e.a],a=r.bots[e.b],o=Lm(`#l3`);if(!o)return;Lm(`#rdots`).innerHTML=Array.from({length:n},(e,n)=>`<i class="${n===t?`on`:``}"></i>`).join(``);let s=e.ko?`${i.name} KNOCKS OUT ${a.name}`:e.explode?`${a.name}'S FUEL TANK EXPLODES`:e.fire?`${i.name} SETS ${a.name} ABLAZE`:`${i.name} ${e.lift?`LAUNCHES`:`SMASHES`} ${a.name}`,c=e.ko?`${r.result.reason} · ${Hm(e.t)}`:e.explode?`${Math.round(e.dmg)} BLAST DAMAGE · ${Hm(e.t)}`:`${Math.round(e.dmg)} DAMAGE · ${e.fire?`🔥 `:``}${zm[e.wpn]||`HIT`} · ${Hm(e.t)}`;o.innerHTML=`<div class="l3"><div class="k">${e.label}</div><div class="m">${s}<small>${c}</small></div></div>`}afterFight(e){let t=this.app.ctx,n=this.app.fight,r=e.winner===0;if(t.kind===`test`)return this.show(`testEnd`,e);if(this.save.stats.fights++,r&&e.how===`KO`&&this.save.stats.kos++,this.save.stats.partsDestroyed+=n.bots[1].lostParts,t.kind===`duel`){this.save.career.duels++;let t=hm(this.save,r);return this.app.persist(),this.show(`result`,{res:e,pay:t,kind:`duel`})}let i=fm(this.save,{win:r,time:e.time,ko:e.how===`KO`,how:e.reason,partsLost:n.bots[0].lostParts,parts:n.partsAfter(0),fuel:n.bots[0].fuel});this.app.persist(),this.show(`result`,{res:e,kind:`tour`,rec:i})}s_result(e){let t=this.app.fight,n=e.res,r=n.winner===0,[i,a]=t.bots,o=n.judges,s=o?`<div class="judges">${o.cards.map((e,t)=>`<div>${e.total[0]}–${e.total[1]}<small>JUDGE ${t+1} · ${o.votes[t]===0?i.name:a.name}</small></div>`).join(``)}</div><div class="sub" style="text-align:center">Damage 5 · Aggression 3 · Control 3 per judge</div>`:``,c=e.kind===`duel`?`<div class="kv"><span>DUEL PAYOUT</span><b class="${e.pay?`ye`:`mu`}">${e.pay?`+`+Rm(e.pay):`$0`}</b></div><div class="kv"><span>REPAIRS</span><b class="gr">FREE</b></div>`:(e.rec.payouts||[]).map(e=>`<div class="kv"><span>SIDE BET ${e.kind.toUpperCase()}</span><b class="gr">+${Rm(e.pay)}</b></div>`).join(``),l=e.kind===`duel`?`<div class="row"><button class="btn" data-a="duelAgain">REMATCH</button><button class="btn pri" data-a="go" data-v="duel">DONE</button></div>`:`<button class="btn pri" data-a="tourNext">${e.rec.done?`TOURNAMENT RESULT ▸`:`CONTINUE ▸`}</button>`;return`<div class="scr dim"><div class="scroll"><div style="height:30px"></div><div class="big ${r?`ye`:`rd`}">${r?`VICTORY`:`DEFEAT`}</div><div class="sub" style="text-align:center;letter-spacing:.14em;margin-bottom:12px">${n.how===`KO`?`KO · `:``}${n.reason} · ${Hm(n.time)}</div>
      ${s}<div class="card"><div class="kv"><span>DAMAGE DEALT</span><b>${Math.round(i.dmgDealt)} vs ${Math.round(a.dmgDealt)}</b></div><div class="kv"><span>PARTS YOU LOST</span><b>${i.lostParts}</b></div><div class="kv"><span>PARTS YOU RIPPED OFF</span><b>${a.lostParts}</b></div>${c}<div class="kv"><span>BANK</span><b class="ye">${Rm(this.save.money)}</b></div></div></div>
      <button class="btn sm foot" data-a="replayAgain" style="margin-bottom:8px">▶ WATCH HIGHLIGHTS AGAIN</button>${l}</div>`}s_matchResult(e){return this.s_result(e)}s_testEnd(){return`<div class="scr dim"><div style="flex:1"></div><div class="big ye">TARGET DESTROYED</div><div class="row" style="margin-top:20px"><button class="btn" data-a="test">AGAIN</button><button class="btn pri" data-a="workshop">WORKSHOP</button></div><div style="flex:1"></div></div>`}s_fight(){return``}s_pause(){return``}act(e,t,n){let r=this.app,i=this.save,a=i.tour;switch(e){case`go`:return t===`title`&&r.toShowcase(),t===`duel`&&(this.duelOpps=this.duelOpps||null),this.sheet=``,this.show(t===`pit`&&r.mode3d===`workshop`?(r.toShowcase(),`pit`):t);case`resume`:return this.show(a.status===`crate`?`crate`:`bracket`);case`pick`:return i.active=t===`junk`?`junk`:+t,r.persist(),this.refresh();case`tourEntry`:return this.show(`tourEntry`,t);case`enter`:{let e=Yp(i,t,i.active);return e.ok?(r.persist(),this.show(`crate`)):this.toast(e.reason,!0)}case`crateAdd`:{let e=nm(i,t);return e.ok?(r.persist(),this.toast(e.free?`Spare packed (free)`:`Packed ${q[t].name}`)):this.toast(e.reason,!0),this.refresh()}case`crateRm`:return rm(i,+t)||this.toast(`Crate is sealed once the tournament starts`,!0),r.persist(),this.refresh();case`crateDone`:return a.status=`bracket`,r.persist(),this.show(`bets`);case`stk`:{let[e,n]=t.split(`:`),r=[5,10,20,25,50,75,100,150,200,300,500,750,1e3,1500],i=r.indexOf(this.stake[e]);return i<0&&(i=3),i=Math.max(0,Math.min(r.length-1,i+(n===`+`?1:-1))),this.stake[e]=r[i],this.refresh()}case`bet`:{let e=dm(i,t,this.stake[t]);return e.ok?(r.persist(),this.toast(`Bet ${Rm(this.stake[t])} at ×${e.odds}`)):this.toast(e.reason,!0),this.refresh()}case`fightTour`:{let e=Qp(a),t=Xp(a,`player`),n=qf(t.parts);if(n.errors.some(e=>/CPU|battery/i.test(e)&&!/exposed/.test(e)))return this.toast(n.errors[0],!0);let i=e.rival?lf[e.rival].color:[`#29b6ff`,`#3dff8a`,`#c06bff`,`#36e0c8`][a.entrants.indexOf(e)%4];return r.startFight({kind:`tour`,me:{parts:t.parts,name:t.name,fuel:t.fuel},opp:{parts:e.parts,name:e.name,color:i,skill:e.skill,rival:e.rival}})}case`tourNext`:{let e=this.data;return r.quitFight(),e.rec.done?this.show(`tourEnd`,{...e.rec.summary,slot:i.lastTourSlot}):this.show(`pit`)}case`forfeit`:if(!n.dataset.sure){n.dataset.sure=1,n.textContent=`TAP AGAIN TO FORFEIT (FEE + BETS LOST)`;return}{let e=mm(i);return r.persist(),this.show(`tourEnd`,e.summary)}case`fix`:{let e=am(i,+t);return e.ok?(r.persist(),this.toast(`Swapped in a fresh part`)):this.toast(e.reason,!0),this.refresh()}case`autofix`:{let e=Xp(a,`player`),t=0;return e.parts.forEach((e,n)=>{let r=Uf(e);im(r)&&a.crate.some(e=>e.t===r.t)&&am(i,n).ok&&t++}),r.persist(),this.toast(t?`Pit crew swapped ${t} part${t>1?`s`:``}`:`Nothing the crate can fix`,!t),this.refresh()}case`pitBuild`:return r.openPit();case`duelPick`:return this.duelPick=+t,this.refresh();case`duelRoll`:return this.rollDuel(),this.refresh();case`duelGo`:case`duelAgain`:{let e=this.duelOpps[this.duelPick],t=Up(i,i.active).map(Wf),n=qf(t);return n.ok?(r.quitFight(),r.startFight({kind:`duel`,me:{parts:i.active===`junk`?t:t.map(e=>Wf({...Uf(e),hp:1,wear:0})).filter(e=>!e[7]),name:Wp(i,i.active)},opp:e})):this.toast(`Bot not ready: `+n.errors[0],!0)}case`replayAgain`:r.ui.reel(!0),r.replayStarted=!0,r.fv.startReplay(r.fight.highlights(3),()=>{r.ui.reel(!1),r.fv.endReplayFov(),this.refresh()}),this.root.innerHTML=``;return;case`workshop`:return r.quitFight(),this.sheet=``,r.openWorkshop(i.active===`junk`?0:i.active);case`wsBack`:return this.sheet=``,r.toShowcase(),this.show(r.builder.pit?`pit`:`title`);case`cat`:return this.cat=t,t===`weapon`&&!(r.builder.sel&&q[r.builder.sel]&&q[r.builder.sel].wpn)&&(r.builder.sel=Object.keys(q).find(e=>q[e].wpn)),this.refresh();case`upg`:{let e=r.builder.sel,t=vm(i,e,r.builder.pit?null:r.builder.parts);return t.ok?(r.persist(),r.builder.rebuild(),this.haptic(25),this.toast(`${q[e].name} → LEVEL ${t.lv}`),this.refresh()):this.toast(t.reason,!0)}case`infBuy`:{let e=r.builder.sel,t=ym(i,e);return t.ok?(r.persist(),r.builder.rebuild(),this.haptic(40),this.toast(`INFERNO unlocked for the ${q[e].name}! Add a Fuel Tank`),this.refresh()):this.toast(t.reason,!0)}case`refuel`:{let e=Sm(i);return e.ok?(r.persist(),this.toast(`Tank refilled (−${Rm(e.cost)})`),this.refresh()):this.toast(e.reason,!0)}case`sel`:return r.builder.sel=t,r.builder.mode===`erase`&&(r.builder.mode=`build`),this.refresh();case`mode`:return r.builder.mode=t,this.refresh();case`rot`:return r.builder.rotate(),this.refresh();case`mirror`:return r.builder.mirror=!r.builder.mirror,this.refresh();case`undo`:return r.builder.undo()||this.toast(`Nothing to undo`,!0),this.refresh();case`slots`:return this.sheet=this.slotsSheet(),this.refresh();case`closeSheet`:return this.sheet=``,this.refresh();case`editSlot`:return this.sheet=``,i.active=+t,r.persist(),r.openWorkshop(+t);case`preset`:{let e=r.builder,n=i.slots[e.slot].parts.map(Uf).reduce((e,t)=>e+(t.missing?0:Math.round(q[t.t].cost*t.hp)),0),a=qf(ff[t].parts).cost;return i.money+n<a?this.toast(`Need ${Rm(a-n-i.money)} more`,!0):(i.money+=n-a,i.slots[e.slot]={name:ff[t].name,parts:ff[t].parts.map(e=>e.slice())},r.persist(),e.open(e.slot),this.sheet=``,this.toast(`Loaded ${ff[t].name}`),this.refresh())}case`repair`:{let e=r.builder,t=e.parts,n=Xf(t);return n?i.money<n?this.toast(`Repairs cost ${Rm(n)}`,!0):(i.money-=n,e.parts=t.map(e=>({...e,hp:1,wear:0,missing:!1})),e.rebuild(),this.toast(`Fully repaired`),this.refresh()):void 0}case`rename`:{let e=(window.prompt(`Bot name`,i.slots[r.builder.slot].name)||``).trim().toUpperCase().slice(0,16);return e&&(i.slots[r.builder.slot].name=e,r.persist()),this.refresh()}case`test`:{let e=r.builder.slot??(i.active===`junk`?0:i.active),t=i.slots[e].parts,n=qf(t);if(!n.ok)return this.toast(`Not ready: `+n.errors[0],!0);this.lastTestSlot=e,r.quitFight();let a=pf.parts.filter(e=>e[0]!==`saw`).map(e=>e.slice());return r.startFight({kind:`test`,test:!0,me:{parts:t.map(e=>Wf({...Uf(e),hp:1,wear:0})).filter(e=>!e[7]),name:i.slots[e].name},opp:{parts:a,name:`TARGET DUMMY`,color:`#8a8f99`}})}case`pause`:{r.paused=!0,r.controls.show(!1);let e=document.createElement(`div`);e.className=`modal`,e.id=`pauseM`,e.innerHTML=`<div class="sheet" style="pointer-events:auto"><h3 style="font-size:30px;text-align:center">PAUSED</h3><button class="btn pri" data-a="resumeFight" style="margin:10px 0">RESUME</button><button class="btn sm" data-a="quitFight">${r.ctx.kind===`tour`?`FORFEIT MATCH (COUNTS AS A LOSS)`:r.ctx.kind===`test`?`EXIT TEST DRIVE`:`QUIT DUEL`}</button></div>`,this.hud.appendChild(e);return}case`resumeFight`:Lm(`#pauseM`)&&Lm(`#pauseM`).remove(),r.paused=!1,r.controls.show(!0);return;case`tipsOk`:i.settings.tips=!1,r.persist(),this.tipsOpen=!1,Lm(`.tips`)&&Lm(`.tips`).remove(),r.paused=!1,r.controls.show(!0);return;case`quitFight`:{Lm(`#pauseM`)&&Lm(`#pauseM`).remove(),r.paused=!1;let e=r.ctx&&r.ctx.kind,t=r.fight;if(e===`tour`){t&&t.state!==`end`&&t.end(t.bots[1],`KO`,`FORFEIT`),r.endT=99,r.replayStarted=`done`;let e=t&&t.result||{winner:1,how:`KO`,reason:`FORFEIT`,time:t&&t.time||0};try{if(this.save.tour)return this.afterFight(e)}catch{this.save.tour&&mm(this.save)}return r.quitFight(),this.show(`tourEnd`,this.save.lastTour)}return r.quitFight(),e===`test`?r.openWorkshop(this.lastTestSlot??0):this.show(`duel`)}case`q`:return r.setQuality(t),this.refresh();case`tog`:return i.settings[t]=!i.settings[t],r.persist(),this.refresh();case`color`:return i.settings.color=t,r.persist(),this.refresh()}}},Wm=class{constructor(e){this.app=e;let t=e=>document.getElementById(e);this.zone=t(`stickZone`),this.base=t(`stickBase`),this.knob=t(`stickKnob`),this.wpn=t(`btnWpn`),this.right=t(`btnRight`),this.fire=t(`btnFire`),this.sid=null,this.R=56,this.keys=new Set;let n=()=>e.input;this.zone.addEventListener(`pointerdown`,e=>{if(e.preventDefault(),this.sid!==null)return;this.sid=e.pointerId,this.zone.setPointerCapture(e.pointerId);let t=this.zone.getBoundingClientRect();this.ox=e.clientX,this.oy=e.clientY,this.base.style.left=e.clientX-t.left+`px`,this.base.style.top=e.clientY-t.top+`px`,this.base.classList.add(`on`),this.move(e)}),this.zone.addEventListener(`pointermove`,e=>{e.pointerId===this.sid&&this.move(e)});let r=e=>{e.pointerId===this.sid&&(this.sid=null,this.base.classList.remove(`on`),this.knob.style.transform=``,n().x=0,n().y=0)};this.zone.addEventListener(`pointerup`,r),this.zone.addEventListener(`pointercancel`,r),this.wpn.addEventListener(`pointerdown`,e=>{e.preventDefault(),this.wpn.classList.add(`dn`),n().fire=!0,n().press=!0});let i=e=>{this.wpn.classList.remove(`dn`),n().fire=!1};this.wpn.addEventListener(`pointerup`,i),this.wpn.addEventListener(`pointercancel`,i),this.wpn.addEventListener(`pointerleave`,i),this.fire.addEventListener(`pointerdown`,e=>{e.preventDefault(),this.fire.classList.add(`dn`),n().flame=!0});let a=()=>{this.fire.classList.remove(`dn`),n().flame=!1};this.fire.addEventListener(`pointerup`,a),this.fire.addEventListener(`pointercancel`,a),this.fire.addEventListener(`pointerleave`,a),this.right.addEventListener(`pointerdown`,e=>{e.preventDefault(),n().self=!0}),window.addEventListener(`keydown`,e=>{e.repeat||(this.keys.add(e.code),e.code===`Space`&&(n().fire=!0,n().press=!0),e.code===`KeyR`&&(n().self=!0),e.code===`KeyF`&&(n().flame=!0,this.fire.classList.add(`dn`)),this.kb())}),window.addEventListener(`keyup`,e=>{this.keys.delete(e.code),e.code===`Space`&&(n().fire=!1),e.code===`KeyF`&&(n().flame=!1,this.fire.classList.remove(`dn`)),this.kb()})}kb(){let e=this.keys,t=this.app.input;this.sid===null&&(t.y=(e.has(`KeyW`)||e.has(`ArrowUp`)?1:0)-(e.has(`KeyS`)||e.has(`ArrowDown`)?1:0),t.x=(e.has(`KeyD`)||e.has(`ArrowRight`)?1:0)-(e.has(`KeyA`)||e.has(`ArrowLeft`)?1:0))}move(e){let t=e.clientX-this.ox,n=e.clientY-this.oy,r=Math.hypot(t,n);r>this.R&&(t*=this.R/r,n*=this.R/r),this.knob.style.transform=`translate(${t}px,${n}px)`;let i=t/this.R,a=-n/this.R,o=.12,s=Math.hypot(i,a);if(s<o)i=0,a=0;else{let e=(s-o)/.88/s;i*=e,a*=e}let c=this.app.input;c.y=a,c.x=i*(.75+.25*(1-Math.abs(a)))}show(e){document.getElementById(`ctl`).hidden=!e,e||(this.sid=null,this.base.classList.remove(`on`),this.knob.style.transform=``,this.fire.classList.remove(`dn`),Object.assign(this.app.input,{x:0,y:0,fire:!1,press:!1,self:!1,flame:!1}))}},$=window.__app={VERSION:Yd,E:Fp,PARTS:q,state:`boot`,mode3d:`show`,paused:!1,slow:1},Gm=document.getElementById(`c`);function Km(){$.renderer=Dd(Gm),Jd(),$.save=bf(),Pf($.save),$.persist=()=>(Pf($.save),xf($.save));let e=$.save.settings.quality;kd(e===`auto`?`medium`:e),$.fv=new Pp($),$.builder=new Tm($),$.controls=new Wm($),$.ui=new Um($),$.input={x:0,y:0,fire:!1,press:!1,self:!1,flame:!1},qm(),window.addEventListener(`resize`,qm),Jm(),$.ui.show(`title`),$.persist(),document.getElementById(`boot`).classList.add(`hide`),setTimeout(()=>document.getElementById(`boot`).remove(),600),`serviceWorker`in navigator&&location.protocol!==`file:`&&navigator.serviceWorker.register(`./sw.js`).catch(()=>{}),requestAnimationFrame(rh),window.__shBootDone=!0}function qm(){let e=window.innerWidth,t=window.innerHeight;$.renderer.setSize(e,t,!1);for(let n of[$.fv.cam,$.builder.cam])n.aspect=e/t,n.updateProjectionMatrix()}$.setQuality=e=>{$.save.settings.quality=e,$.persist(),kd(e===`auto`?`medium`:e),$.fv.applyQuality(),qm()};function Jm(){let e=new Am(ff.tornado.parts.map(Uf),{name:`A`,color:`#ff6a1a`}),t=new Am(mf(`hbar`,1).map(Uf),{name:`B`,color:`#29b6ff`}),n=new Im(e,t,{mode:`show`,intro:1e9,hazards:!1});e.setStart(-1.3,-.6,.6),t.setStart(1.4,.9,Math.PI+.5),n.bots[1].weapons.forEach(e=>{e.on=!0,e.e=1,e.rate=28}),n.bots[0].weapons.forEach(e=>{e.rate=46}),$.show=n,$.fv.setFight(n),$.mode3d=`show`,$.showT=0}$.toShowcase=()=>{($.fight||$.fv.fight!==$.show)&&($.fight=null,Jm()),$.mode3d=`show`};var Ym=[`#29b6ff`,`#ff3b5c`,`#3dff8a`,`#c06bff`,`#ffd23a`,`#36e0c8`];$.playerColor=()=>$.save.settings.color||`#ff6a1a`,$.startFight=e=>{$.ctx=e,$.input.press=$.input.self=!1,$.input.fire=!1,$.input.flame=!1;let t=new Im(new Am(e.me.parts.map(Uf),{name:e.me.name,color:$.playerColor(),fuel:e.me.fuel}),new Am(e.opp.parts.map(Uf),{name:e.opp.name,color:e.opp.color||Ym[0],ai:!e.test,skill:e.opp.skill??.6,rival:e.opp.rival}),{mode:e.kind,time:e.kind===`test`?0:void 0,hazards:e.kind!==`test`,intro:e.kind===`test`?.2:3});return $.fight=t,$.fv.setFight(t),$.mode3d=`fight`,$.paused=!1,$.slow=1,$.endT=null,$.fpsLog=[],$.replayStarted=!1,$.acc=0,$.ui.show(`fight`),t};function Xm(e){let t=$.fight;if(!t||$.paused)return;t.bots[0].ai||Zm(t),t.state===`end`&&$.endT===null&&($.endT=0,$.slow=.3,$.ui.fightEnded(t.result)),$.endT!==null&&($.endT+=e,$.endT>1.4&&($.slow=Math.min(1,$.slow+e)),$.endT>2.6&&!$.replayStarted&&t.mode!==`test`&&($.replayStarted=!0,$.startReel())),$.acc=($.acc||0)+e*$.slow;let n=1/60,r=0;for(;$.acc>=n&&r<6;)t.step(n),$.acc-=n,r++}$.startReel=()=>{let e=$.fight.highlights(3);if($.reelClips=e,!e.length)return $.reelDone(!1);$.ui.reel(!0),$.fv.startReplay(e,e=>$.reelDone(e))},$.reelDone=()=>{$.ui.reel(!1),$.fv.endReplayFov(),$.replayStarted=`done`,$.ui.afterFight($.fight.result)},$.skipReel=()=>{$.fv.replay&&$.fv.stopReplay(!1)},$.onReplayClip=(e,t,n)=>$.ui.reelClip(e,t,n),$.onHit=e=>{if($.save.settings.haptics&&navigator.vibrate&&(e.a===0||e.b===0))try{navigator.vibrate(Math.min(60,10+e.dmg))}catch{}},$.onEvent=e=>$.ui.onFightEvent(e),$.quitFight=()=>{$.fight=null,$.fv.replay=null,$.replayStarted=!1,$.toShowcase()},$.ff=(e,t=1/60)=>{let n=$.fight;if(!n)return;let r=Math.round(e/t);for(let e=0;e<r;e++)n.bots[0].ai||Zm(n),n.step(t),e%6==0&&($.fv.handleEvents(),$.fv.fx.update(t*6),$.fv.sync(t*6));$.fv.handleEvents(),$.fv.sync(0),$.fv.placeCam(1,!0)};function Zm(e){let t=$.input,n=e.bots[0];e.state===`fight`&&(n.inp.throttle=t.y,n.inp.turn=t.x,n.inp.fire=t.fire,n.inp.flame=t.flame,t.press&&(n.inp.press=!0,t.press=!1),t.self&&(n.inp.selfRight=!0,t.self=!1))}var Qm=new Map,$m,eh,th;$.thumb=(e,t=`#ff6a1a`,n=240,r=180,i=.7)=>{let a=JSON.stringify(e)+t+n+`x`+r+i+JSON.stringify([Nf.lv,Nf.inf]);if(Qm.has(a))return Qm.get(a);if(!$m){$m=new Nn,$m.environment=Td.env,$m.add(new Ts(12571903,3154968,1.2));let e=new Ws(16777215,2.6);e.position.set(3,6,4),$m.add(e);let t=new Ws(16751184,1.2);t.position.set(-4,2,-3),$m.add(t),eh=new Ls(32,n/r,.05,50)}th&&th.width===n&&th.height===r||(th&&th.dispose(),th=new Kt(n,r,{samples:4,colorSpace:Xe}));let o=new Dp(e.map(e=>e.t?e:Uf(e)),t,{x:0,z:0},{shadows:!1});$m.add(o.group);let s=new Jn().setFromObject(o.group),c=s.getCenter(new B),l=s.getSize(new B).length()||1;eh.aspect=n/r,eh.updateProjectionMatrix();let u=l*1.55+.2;eh.position.set(c.x+Math.sin(i)*u,c.y+u*.62,c.z+Math.cos(i)*u),eh.lookAt(c);let d=$.renderer,f=d.getRenderTarget(),p=d.toneMapping;d.setRenderTarget(th),d.setClearColor(0,0),d.clear(),d.render($m,eh);let m=new Uint8Array(n*r*4);d.readRenderTargetPixels(th,0,0,n,r,m),d.setRenderTarget(f),d.setClearColor(0,1),d.toneMapping=p,o.dispose();let h=document.createElement(`canvas`);h.width=n,h.height=r;let g=h.getContext(`2d`),_=g.createImageData(n,r);for(let e=0;e<r;e++)_.data.set(m.subarray((r-1-e)*n*4,(r-e)*n*4),e*n*4);g.putImageData(_,0,0);let v=h.toDataURL(`image/png`);return Qm.set(a,v),v},$.partIcon=e=>{let t=q[e].wpn,n=+(q[e].cat===`mobility`&&!q[e].power),r=t?[e,0,0,0,n,1,0,0,gm($.save,e),+!!_m($.save,e)]:[e,0,0,0,n];return $.thumb([r],$.playerColor(),168,124,.9)},$.openWorkshop=(e=$.save.active)=>{e===`junk`&&(e=0),$.fight=null,$.builder.open(e),$.mode3d=`workshop`,$.ui.show(`workshop`)},$.openPit=()=>{$.builder.open(`pit`),$.mode3d=`workshop`,$.ui.show(`workshop`)};var nh=performance.now();$.frames=0;function rh(e){requestAnimationFrame(rh);let t=Math.min(.05,(e-nh)/1e3);nh=e,$.frames++,$.dt=t,$.fps=$.fps?$.fps*.95+1/Math.max(t,.001)*.05:60;let n=$.renderer;if($.mode3d===`workshop`)$.builder.update(t),n.render($.builder.scene,$.builder.cam);else{if($.mode3d===`fight`)Xm(t),$.ui.hudTick&&$.ui.hudTick(t),ih(t);else if($.mode3d===`show`){$.showT+=t;let e=$.show;e.bots[0].yaw+=t*0}if($.fv.update(t),$.mode3d===`show`){let e=$.showT*.12,t=$.fv.cam;t.position.set(Math.sin(e)*5.2,2.2,Math.cos(e)*5.2),t.lookAt(0,.35,0),t.fov=50,t.updateProjectionMatrix()}n.render($.fv.scene,$.fv.cam)}}function ih(e){$.save.settings.quality===`auto`&&$.fight&&$.fight.state===`fight`&&($.fpsLog.push(e),$.fpsLog.length===240&&$.fpsLog.length/$.fpsLog.reduce((e,t)=>e+t,0)<42&&Td.quality!==`low`&&(kd(Td.quality===`high`?`medium`:`low`),$.fv.applyQuality(),qm()))}window.__sh={ARENA:wd,app:$,E:Fp,WLV:ef,BURN:tf,levelSpec:of,upgradeCost:rf,infernoCost:af,FUEL_PRICE:nf,LV:Nf,fromPart:Wf,PARTS:q,PRESETS:ff,JUNKBOT:pf,RIVALS:lf,analyze:qf,toPart:Uf,BotSim:Am,Fight:Im,aiDesign:mf,GENERIC_TEAMS:hf,DUEL:cf,SAVE_KEY:gf,freshSave:vf,migrate:yf,loadSave:bf,writeSave:xf,get save(){return $.save},persist:()=>$.persist()};try{Km()}catch(e){document.getElementById(`bootSub`).textContent=`ERROR: `+e.message,console.error(e)}