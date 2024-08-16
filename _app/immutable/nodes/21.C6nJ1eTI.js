import{a as q,t as P,b as s,s as a,f as z}from"../chunks/disclose-version.vS8Cq8Jh.js";import{h as n}from"../chunks/html.CvCJrg-t.js";import{l as D,s as E}from"../chunks/props.D2REnYk1.js";import{M as G}from"../chunks/mdsvex-blog.Bj9dFOdJ.js";var L=P('<p>Next.js is currently one of the popular JavaScript meta frameworks for building web applications. Since we can use daisyUI in any JavaScript framework, we can also use it in Next.js.</p> <p>Installing Next.js is pretty straightforward. It also includes Tailwind CSS by default. After installing Next.js, we can install daisyUI as a plugin and start using it in our Next.js project.</p> <h3 id="installing-nextjs"><a aria-hidden="true" tabindex="-1" href="#installing-nextjs"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Installing Next.js</h3> <ol><li>Let’s start by creating a new Next.js project.<br> You can use the following command to create a new Next.js project:</li></ol> <pre class="language-undefined"><!></pre> <ol start="2"><li>Answer the questions to complete the project creation process.<br> Make sure to enable <code>Tailwind CSS</code> when asked about it:</li></ol> <p><img src="https://img.daisyui.com/images/blog/install-nextjs.webp" alt="Install Next.js"></p> <p>Go to the project directory. If you named it <code>my-app</code>:</p> <pre class="language-undefined"><!></pre> <h3 id="installing-daisyui"><a aria-hidden="true" tabindex="-1" href="#installing-daisyui"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Installing daisyUI</h3> <ol start="3"><li>Now install the latest version of daisyUI as a dev dependency:</li></ol> <pre class="language-undefined"><!></pre> <ol start="4"><li>Open <code>tailwind.config.ts</code> file<br> Add daisyUI as a plugin:</li></ol> <pre class="language-diff"><!></pre> <h3 id="using-daisyui"><a aria-hidden="true" tabindex="-1" href="#using-daisyui"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Using daisyUI</h3> <ol start="5"><li>Open <code>/app/page.tsx</code> file<br> Replace the content with:</li></ol> <pre class="language-jsx"><!></pre> <h3 id="ready-to-go"><a aria-hidden="true" tabindex="-1" href="#ready-to-go"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Ready to go!</h3> <ol start="6"><li>Run the project using:</li></ol> <pre class="language-undefined"><!></pre> <p>And open <code>http://localhost:3000/</code> to see a button with daisyUI styles.</p> <p>You can now use any <a href="https://daisyui.com/components/" rel="nofollow" target="_blank">daisyUI component</a> or any <a href="https://tailwindcss.com/" rel="nofollow" target="_blank">Tailwind CSS utility class</a> in your Next.js project.</p> <ol start="7"><li>Extra: You can also remove the default Next.js styles from <code>app/globals.css</code>, to have a clean start. Only keep the following line:</li></ol> <pre class="language-css"><!></pre>',1);const B={title:"How to install daisyUI and Tailwind CSS in Next.js 14",desc:"In this article, we will learn how to use daisyUI component library in Next.js.",published:!0,date:"2023-9-22",author:"Pouya Saadeghi",thumbnail:"https://img.daisyui.com/images/blog/daisyui-nextjs-component-library.webp",tags:["Next.js","React","JavaScript frameworks"]};function X(c,d){const u=D(d,["children","$$slots","$$events","$$legacy"]);G(c,E(()=>u,B,{children:(g,F)=>{var e=L(),k=z(e),f=a(a(k,!0)),h=a(a(f,!0)),m=a(a(h,!0)),t=a(a(m,!0)),x=s(t);n(x,()=>'<code class="language-undefined">npx create-next-app@latest</code>');var y=a(a(t,!0)),v=a(a(y,!0)),b=a(a(v,!0)),p=a(a(b,!0)),w=s(p);n(w,()=>'<code class="language-undefined">cd my-app</code>');var _=a(a(p,!0)),j=a(a(_,!0)),l=a(a(j,!0)),I=s(l);n(I,()=>'<code class="language-undefined">npm i -D daisyui@latest</code>');var N=a(a(l,!0)),o=a(a(N,!0)),$=s(o);n($,()=>`<code class="language-diff">import type &#123; Config &#125; from 'tailwindcss'
<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> import daisyui from 'daisyui'
</span></span>const config: Config = &#123;
<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> content: [
</span><span class="token prefix unchanged"> </span><span class="token line">   './pages/**/*.&#123;js,ts,jsx,tsx,mdx&#125;',
</span><span class="token prefix unchanged"> </span><span class="token line">   './components/**/*.&#123;js,ts,jsx,tsx,mdx&#125;',
</span><span class="token prefix unchanged"> </span><span class="token line">   './app/**/*.&#123;js,ts,jsx,tsx,mdx&#125;',
</span><span class="token prefix unchanged"> </span><span class="token line"> ],
</span><span class="token prefix unchanged"> </span><span class="token line"> theme: &#123;
</span><span class="token prefix unchanged"> </span><span class="token line">   extend: &#123;
</span><span class="token prefix unchanged"> </span><span class="token line">     backgroundImage: &#123;
</span><span class="token prefix unchanged"> </span><span class="token line">       'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
</span><span class="token prefix unchanged"> </span><span class="token line">       'gradient-conic':
</span><span class="token prefix unchanged"> </span><span class="token line">         'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
</span><span class="token prefix unchanged"> </span><span class="token line">     &#125;,
</span><span class="token prefix unchanged"> </span><span class="token line">   &#125;,
</span><span class="token prefix unchanged"> </span><span class="token line"> &#125;,
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> plugins: [],
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> plugins: [daisyui],
</span></span>&#125;
export default config
</code>`);var S=a(a(o,!0)),U=a(a(S,!0)),i=a(a(U,!0)),C=s(i);n(C,()=>`<code class="language-jsx"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Hello daisyUI!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`);var A=a(a(i,!0)),R=a(a(A,!0)),r=a(a(R,!0)),T=s(r);n(T,()=>'<code class="language-undefined">npm run dev</code>');var H=a(a(r,!0)),J=a(a(H,!0)),M=a(a(J,!0)),O=a(a(M,!0)),Y=s(O);n(Y,()=>`<code class="language-css"><span class="token atrule"><span class="token rule">@tailwind</span> base<span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@tailwind</span> components<span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@tailwind</span> utilities<span class="token punctuation">;</span></span></code>`),q(g,e)},$$slots:{default:!0},$$legacy:!0}))}export{X as component};
