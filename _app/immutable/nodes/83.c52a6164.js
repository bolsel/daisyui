import{s as P,x as w,y as k,e as h,a as v,c as p,g as y,d as b,j as c,n as T,h as d}from"../chunks/scheduler.20d7cd23.js";import{S as M,i as A,c as H,a as I,m as L,t as U,b as q,d as W}from"../chunks/index.33a562d6.js";import{g as Y,a as $}from"../chunks/spread.8a54911c.js";import{M as z}from"../chunks/mdsvex-blog.192ba06f.js";function B(f){let e,i="Tailwind CSS as a general purpose utility-first CSS framework, provides all the color shades you may need for your website. Basically every shade of every color. However it’s not a good idea to have all those colors in your website. You should choose a few colors and use them consistently across your website.",n,s,o=`A good design practice is to have a color system with semantic color names.<br/>
A standard approach is to have brand color names like <code>primary</code>, <code>secondary</code>, <code>accent</code>, and state colors like <code>success</code>, <code>warning</code>, <code>error</code>, <code>info</code>. In addition to some neutral color shades for the background, text, and border colors.
<img src="/images/blog/daisyui-semantic-colors.jpg" alt="Semantic colors"/>
daisyUI offers a limited set of semantic color names where can have any value (thanks to CSS variables).`,a,l,x="Using this color system your website can have a different look and feel by simply changing the color values once. You don’t need to change the color of each element individually.",_,m,C="Semantic color names make more sense because when we design interfaces, we don’t just use any random color. We define a specific color palette with names like primary, secondary, etc. and we only use those specific colors in our interfaces. Also, using semantic color names makes theming easier. You wouldn’t have to define dark-mode colors for every single element and you wouldn’t be limited to only light/dark themes. you can have multiple themes available and each theme is just a few lines of CSS variables.",g,u,S='Read more about <a href="https://daisyui.com/docs/colors" rel="nofollow" target="_blank">daisyUI color system</a>.';return{c(){e=h("p"),e.textContent=i,n=v(),s=h("p"),s.innerHTML=o,a=v(),l=h("p"),l.textContent=x,_=v(),m=h("p"),m.textContent=C,g=v(),u=h("p"),u.innerHTML=S},l(t){e=p(t,"P",{"data-svelte-h":!0}),y(e)!=="svelte-1p58gy0"&&(e.textContent=i),n=b(t),s=p(t,"P",{"data-svelte-h":!0}),y(s)!=="svelte-15whju6"&&(s.innerHTML=o),a=b(t),l=p(t,"P",{"data-svelte-h":!0}),y(l)!=="svelte-7dzwlb"&&(l.textContent=x),_=b(t),m=p(t,"P",{"data-svelte-h":!0}),y(m)!=="svelte-kcr9qq"&&(m.textContent=C),g=b(t),u=p(t,"P",{"data-svelte-h":!0}),y(u)!=="svelte-1sxk9cl"&&(u.innerHTML=S)},m(t,r){c(t,e,r),c(t,n,r),c(t,s,r),c(t,a,r),c(t,l,r),c(t,_,r),c(t,m,r),c(t,g,r),c(t,u,r)},p:T,d(t){t&&(d(e),d(n),d(s),d(a),d(l),d(_),d(m),d(g),d(u))}}}function R(f){let e,i;const n=[f[0],j];let s={$$slots:{default:[B]},$$scope:{ctx:f}};for(let o=0;o<n.length;o+=1)s=w(s,n[o]);return e=new z({props:s}),{c(){H(e.$$.fragment)},l(o){I(e.$$.fragment,o)},m(o,a){L(e,o,a),i=!0},p(o,[a]){const l=a&1?Y(n,[a&1&&$(o[0]),a&0&&$(j)]):{};a&2&&(l.$$scope={dirty:a,ctx:o}),e.$set(l)},i(o){i||(U(e.$$.fragment,o),i=!0)},o(o){q(e.$$.fragment,o),i=!1},d(o){W(e,o)}}}const j={title:"All about daisyUI color system and comparing it to Tailwind CSS color names",desc:"Why use semantic color names instead of Tailwind CSS color shades? Accessing to all color shades or using a color system... Which one is better?",published:!0,date:"2023-9-11",author:"Pouya Saadeghi",thumbnail:"/images/blog/semantic-colors.jpg",tags:["Colors"]};function D(f,e,i){return f.$$set=n=>{i(0,e=w(w({},e),k(n)))},e=k(e),[e]}class K extends M{constructor(e){super(),A(this,e,D,R,P,{})}}export{K as component};
