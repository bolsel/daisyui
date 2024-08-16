import{a as K,t as O,b as s,s as a,f as Q}from"../chunks/disclose-version.vS8Cq8Jh.js";import{h as n}from"../chunks/html.CvCJrg-t.js";import{l as X,s as Z}from"../chunks/props.D2REnYk1.js";import{M as aa}from"../chunks/mdsvex-blog.Bj9dFOdJ.js";var sa=O('<h2 id="what-is-mary-ui"><a aria-hidden="true" tabindex="-1" href="#what-is-mary-ui"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>What is Mary UI?</h2> <p><a href="https://mary-ui.com/" rel="nofollow" target="_blank">Mary UI</a> is a collection of Laravel blade components made for Livewire 3.<br> These components are built on top of <a href="https://daisyui.com/" rel="nofollow" target="_blank">daisyUI</a> and <a href="https://tailwindcss.com/" rel="nofollow" target="_blank">Tailwind CSS</a>.<br> If you’re a Laravel developer and you’re using Livewire, you’ll love Mary UI because it makes it faster and easier to build web pages.</p> <p>Mary UI does not ship any custom CSS and relies on daisyUI and Tailwind for out-of-box styling. You can customize most of components styles, by inline overriding daisyUI and Tailwind CSS classes.</p> <h2 id="how-does-it-look-like"><a aria-hidden="true" tabindex="-1" href="#how-does-it-look-like"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>How does it look like?</h2> <p>Mary UI allows you to use daisyUI components in your Laravel blade files using Livewire syntax.</p> <p>To make a form like this: <img src="https://img.daisyui.com/images/blog/mary-ui-form.webp" alt="Mary UI form"> All you need would be these few lines:</p> <pre class="language-html"><!></pre> <h2 id="how-to-install-mary-ui-on-a-new-laravel-project"><a aria-hidden="true" tabindex="-1" href="#how-to-install-mary-ui-on-a-new-laravel-project"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>How to install Mary UI on a new Laravel project?</h2> <p>You can install Mary UI using composer:</p> <pre class="language-bash"><!></pre> <p>If it’s a new Laravel project, you can complete the setup by running the following command:</p> <pre class="language-bash"><!></pre> <p>And start the dev server</p> <pre class="language-bash"><!></pre> <p>Read more about <a href="https://mary-ui.com/docs/installation" rel="nofollow" target="_blank">Mary UI installation</a>.</p> <h2 id="how-to-install-mary-ui-on-existing-laravel-project"><a aria-hidden="true" tabindex="-1" href="#how-to-install-mary-ui-on-existing-laravel-project"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>How to install Mary UI on existing Laravel project?</h2> <p>Install Mary UI using composer:</p> <pre class="language-bash"><!></pre> <p>If it’s an existing Laravel project, Install daisyUI and Tailwind CSS and initialize Tailwind CSS config file:</p> <pre class="language-bash"><!></pre> <p>Change your tailwind.config.js file like this:</p> <pre class="language-js"><!></pre> <p>Add Tailwind directives to <code>resources/css/app.css</code></p> <pre class="language-pcss"><!></pre> <p>Setup Livewire default app template.</p> <pre class="language-bash"><!></pre> <p>Then add <code>@vite</code> on default app template <code>views/components/layouts/app.blade.php</code></p> <pre class="language-html"><!></pre> <p>Finally, start dev server.</p> <pre class="language-bash"><!></pre> <p>That’s it! You can now use Mary UI components in your blade files.</p> <p>Read more about <a href="https://mary-ui.com" rel="nofollow" target="_blank">Mary UI</a>.</p>',1);const na={title:"Mary UI: Laravel blade components made with daisyUI",desc:"Mary UI is a collection of Laravel blade components made for Livewire 3 and styled around daisyUI and Tailwind CSS",published:!0,date:"2023-9-13",author:"Pouya Saadeghi",thumbnail:"https://img.daisyui.com/images/blog/mary-ui.webp",tags:["Laravel"]};function ca(m,g){const v=X(g,["children","$$slots","$$events","$$legacy"]);aa(m,Z(()=>v,na,{children:(h,ta)=>{var t=sa(),y=Q(t),b=a(a(y,!0)),f=a(a(b,!0)),w=a(a(f,!0)),_=a(a(w,!0)),I=a(a(_,!0)),e=a(a(I,!0)),x=s(e);n(x,()=>`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>x-form</span> <span class="token attr-name"><span class="token namespace">wire:</span>submit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>save<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>x-input</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Name<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">wire:</span>model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>x-input</span>
    <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Amount<span class="token punctuation">"</span></span>
    <span class="token attr-name"><span class="token namespace">wire:</span>model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>amount<span class="token punctuation">"</span></span>
    <span class="token attr-name">prefix</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>USD<span class="token punctuation">"</span></span>
    <span class="token attr-name">money</span>
    <span class="token attr-name">hint</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>It submits an unmasked value<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">x-slot:</span>actions</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>x-button</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Cancel<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>x-button</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Click me!<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn-primary<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">spinner</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>save<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">x-slot:</span>actions</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>x-form</span><span class="token punctuation">></span></span></code>`);var U=a(a(e,!0)),M=a(a(U,!0)),p=a(a(M,!0)),L=s(p);n(L,()=>'<code class="language-bash"><span class="token function">composer</span> require robsontenorio/mary</code>');var q=a(a(p,!0)),o=a(a(q,!0)),S=s(o);n(S,()=>'<code class="language-bash">php artisan mary:install</code>');var j=a(a(o,!0)),l=a(a(j,!0)),$=s(l);n($,()=>'<code class="language-bash"><span class="token function">yarn</span> dev</code>');var T=a(a(l,!0)),C=a(a(T,!0)),A=a(a(C,!0)),c=a(a(A,!0)),Y=s(c);n(Y,()=>'<code class="language-bash"><span class="token function">composer</span> require robsontenorio/mary</code>');var z=a(a(c,!0)),r=a(a(z,!0)),H=s(r);n(H,()=>'<code class="language-bash"><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> tailwindcss daisyui@latest postcss autoprefixer <span class="token operator">&amp;&amp;</span> npx tailwindcss init <span class="token parameter variable">-p</span></code>');var D=a(a(r,!0)),i=a(a(D,!0)),P=s(i);n(P,()=>`<code class="language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// You will probably also need those lines</span>
    <span class="token string">"./resources/**/**/*.&#123;js,blade.php&#125;"</span><span class="token punctuation">,</span>
    <span class="token string">"./app/View/Components/**/**/*.php"</span><span class="token punctuation">,</span>
    <span class="token string">"./app/Livewire/**/**/*.php"</span><span class="token punctuation">,</span>

    <span class="token comment">// Add mary</span>
    <span class="token string">"./vendor/robsontenorio/mary/src/View/Components/**/*.php"</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// Add daisyUI</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"daisyui"</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span></code>`);var R=a(a(i,!0)),u=a(a(R,!0)),V=s(u);n(V,()=>`<code class="language-pcss">@tailwind base;
@tailwind components;
@tailwind utilities;</code>`);var F=a(a(u,!0)),k=a(a(F,!0)),N=s(k);n(N,()=>`<code class="language-bash"><span class="token comment"># It creates &#96;views/components/layouts/app.blade.php&#96;</span>
php artisan livewire:layout</code>`);var W=a(a(k,!0)),d=a(a(W,!0)),B=s(d);n(B,()=>`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
  ...
  <span class="token comment">&lt;!-- This --></span>
  @vite(['resources/css/app.css', 'resources/js/app.js'])
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></code>`);var E=a(a(d,!0)),G=a(a(E,!0)),J=s(G);n(J,()=>'<code class="language-bash"><span class="token function">yarn</span> dev</code>'),K(h,t)},$$slots:{default:!0},$$legacy:!0}))}export{ca as component};
