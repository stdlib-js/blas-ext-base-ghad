"use strict";var A=function(c,o){return function(){try{return o||c((o={exports:{}}).exports,o),o.exports}catch(v){throw (o=0, v)}};};var F=A(function($,E){
function K(c,o,v,t,y,u,f,P,e,r,q,M){var s,n,a,m,j,k,g,i,R,O,w;for(s=v.data,n=u.data,a=r.data,m=v.accessors[0],j=u.accessors[0],k=r.accessors[0],g=r.accessors[1],i=y,R=P,O=M,w=0;w<c;w++)g(a,O,o*m(s,i)*j(n,R)+e*k(a,O)),i+=t,R+=f,O+=q;return r}E.exports=K
});var C=A(function(d,G){
var B=require('@stdlib/array-base-arraylike2object/dist'),L=require('@stdlib/blas-base-gscal/dist').ndarray,Q=F(),x=5;function S(c,o,v,t,y,u,f,P,e,r,q,M){var s,n,a,m,j,k,g,i;if(c<=0)return r;if(o===0)return L(c,e,r,q,M);if(m=B(v),j=B(u),k=B(r),m.accessorProtocol||j.accessorProtocol||k.accessorProtocol)return Q(c,o,m,t,y,j,f,P,e,k,q,M),r;if(s=y,n=P,a=M,t===1&&f===1&&q===1){if(g=c%x,g>0)for(i=0;i<g;i++)r[a]=o*v[s]*u[n]+e*r[a],s+=t,n+=f,a+=q;if(c<x)return r;for(i=g;i<c;i+=x)r[a]=o*v[s]*u[n]+e*r[a],r[a+1]=o*v[s+1]*u[n+1]+e*r[a+1],r[a+2]=o*v[s+2]*u[n+2]+e*r[a+2],r[a+3]=o*v[s+3]*u[n+3]+e*r[a+3],r[a+4]=o*v[s+4]*u[n+4]+e*r[a+4],s+=x,n+=x,a+=x;return r}for(i=0;i<c;i++)r[a]=o*v[s]*u[n]+e*r[a],s+=t,n+=f,a+=q;return r}G.exports=S
});var I=A(function(l,H){
var D=require('@stdlib/strided-base-stride2offset/dist'),T=C();function U(c,o,v,t,y,u,f,P,e){return T(c,o,v,t,D(c,t),y,u,D(c,u),f,P,e,D(c,e))}H.exports=U
});var V=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),J=I(),W=C();V(J,"ndarray",W);module.exports=J;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
