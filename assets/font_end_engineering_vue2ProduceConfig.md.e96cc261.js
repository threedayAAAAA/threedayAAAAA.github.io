import{_ as s,c as n,o as a,a as t}from"./app.672c393a.js";const m='{"title":"vue2\u9879\u76EE\u9AD8\u9891\u7B2C\u4E09\u65B9\u5E93\u7684\u5F15\u5165","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5F15\u5165axios","slug":"\u5F15\u5165axios"},{"level":2,"title":"\u5F15\u5165mock","slug":"\u5F15\u5165mock"},{"level":2,"title":"\u5F15\u5165iconfont","slug":"\u5F15\u5165iconfont"},{"level":2,"title":"\u5F15\u5165normalize.css","slug":"\u5F15\u5165normalize-css"},{"level":2,"title":"\u5F15\u5165reset.css","slug":"\u5F15\u5165reset-css"},{"level":2,"title":"\u5F15\u5165border.css","slug":"\u5F15\u5165border-css"},{"level":2,"title":"\u5F15\u5165\u56FE\u7247\u61D2\u52A0\u8F7D\u63D2\u4EF6(vue-lazy)","slug":"\u5F15\u5165\u56FE\u7247\u61D2\u52A0\u8F7D\u63D2\u4EF6-vue-lazy"},{"level":2,"title":"\u5F15\u5165\u8F6E\u64AD\u56FE\u7EC4\u4EF6","slug":"\u5F15\u5165\u8F6E\u64AD\u56FE\u7EC4\u4EF6"}],"relativePath":"font_end_engineering/vue2ProduceConfig.md","lastUpdated":1613455415202}',p={},o=t(`<h1 id="vue2\u9879\u76EE\u9AD8\u9891\u7B2C\u4E09\u65B9\u5E93\u7684\u5F15\u5165" tabindex="-1">vue2\u9879\u76EE\u9AD8\u9891\u7B2C\u4E09\u65B9\u5E93\u7684\u5F15\u5165 <a class="header-anchor" href="#vue2\u9879\u76EE\u9AD8\u9891\u7B2C\u4E09\u65B9\u5E93\u7684\u5F15\u5165" aria-hidden="true">#</a></h1><h2 id="\u5F15\u5165axios" tabindex="-1">\u5F15\u5165axios <a class="header-anchor" href="#\u5F15\u5165axios" aria-hidden="true">#</a></h2><p>\u6700\u597D\u540C\u65F6\u4F7F\u7528vueAxios\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u76F4\u63A5\u5728\u5168\u5C40\u7684\u4EFB\u610F\u4E00\u4E2A\u5730\u65B9\u76F4\u63A5\u4F7F\u7528\u4E0B\u9762\u7684\u7528\u6CD5\uFF0C \u800C\u4E0D\u7528\u5728\u6BCF\u4E2A\u4F7F\u7528\u7684\u5730\u65B9import axios\u6216\u8005\u5C06axios\u6302\u8F7D\u5230vue\u7684\u539F\u578B\u94FE\u4E0A</p><div class="language-javascript"><pre><code><span class="token keyword">this</span><span class="token punctuation">.</span>axios<span class="token punctuation">.</span><span class="token constant">XXX</span>
</code></pre></div><ol><li>\u5B89\u88C5</li></ol><div class="language-"><pre><code>npm i axios vue-axios --save
</code></pre></div><ol start="2"><li>\u5F15\u5165 \u5728main.js\u4E2D</li></ol><div class="language-javascript"><pre><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>
<span class="token keyword">import</span> vueAxios <span class="token keyword">from</span> <span class="token string">&#39;vue-axios&#39;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>vueAxios<span class="token punctuation">,</span> axios<span class="token punctuation">)</span>
</code></pre></div><ol start="3"><li>\u5E38\u89C1\u7528\u6CD5</li></ol><div class="language-javascript"><pre><code><span class="token comment">// \u6839\u636E\u73AF\u5883\u53D8\u91CF\u8BBE\u7F6E\u4E0D\u540C\u7684\u8BF7\u6C42\u5730\u5740</span>
axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> <span class="token constant">BASE_URL</span>
<span class="token comment">// \u8BBE\u7F6E\u8BF7\u6C42\u8D85\u65F6\u65F6\u95F4</span>
axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>timeout <span class="token operator">=</span> <span class="token constant">TIMEOUT</span>

\u8BF7\u6C42\u62E6\u622A
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5728\u53D1\u9001\u8BF7\u6C42\u4E4B\u524D\u505A\u4E9B\u4EC0\u4E48</span>
  <span class="token keyword">return</span> config
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5BF9\u8BF7\u6C42\u9519\u8BEF\u505A\u4E9B\u4EC0\u4E48</span>
  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u54CD\u5E94\u62E6\u622A</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5BF9\u54CD\u5E94\u505A\u70B9\u4EC0\u4E48</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5BF9\u54CD\u5E94\u9519\u8BEF\u505A\u70B9\u4EC0\u4E48</span>
  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u5F15\u5165mock" tabindex="-1">\u5F15\u5165mock <a class="header-anchor" href="#\u5F15\u5165mock" aria-hidden="true">#</a></h2><ol><li>\u5B89\u88C5</li></ol><div class="language-"><pre><code>npm i mockjs --save-dev
</code></pre></div><ol start="2"><li>\u5F15\u5165 \u5728main.js\u4E2D</li></ol><div class="language-javascript"><pre><code><span class="token comment">// mock\u5F00\u5173</span>
<span class="token keyword">const</span> <span class="token constant">USE_MOCK</span> <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">USE_MOCK</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../public/mock/api&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>mock\u6570\u636E\u6837\u4F8B \uFF0C\u5177\u4F53<a href="http://mockjs.com/examples.html" target="_blank" rel="noopener noreferrer">mock\u6570\u636E\u7684\u8BED\u6CD5\u53C2\u8003</a></p><div class="language-javascript"><pre><code><span class="token comment">//\u6570\u636E\u5360\u4F4D\u7B26\u4F7F\u7528</span>
<span class="token punctuation">{</span>
  <span class="token string-property property">&quot;integer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@integer(10, 30)&quot;</span><span class="token punctuation">,</span>  <span class="token comment">//\u968F\u673A\u751F\u6210\u4E00\u4E2A10\uFF5E30\u4E4B\u95F4\u7684\u6B63\u6574\u6570</span>
  <span class="token string-property property">&quot;float&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@float(60, 100, 2, 2)&quot;</span><span class="token punctuation">,</span>  <span class="token comment">//\u968F\u673A\u751F\u6210\u6D6E\u70B9\u6570\uFF0C\u53C2\u6570\u5206\u522B\u4E3A\u6574\u6570\u90E8\u5206\u6700\u5C0F\u503C\u548C\u6700\u5927\u503C\u3001\u5C0F\u6570\u90E8\u5206\u4FDD\u7559\u6700\u5C0F\u4F4D\u6570\u548C\u6700\u5927\u4F4D\u6570</span>
  <span class="token string-property property">&quot;boolean&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@boolean&quot;</span><span class="token punctuation">,</span>       <span class="token comment">//\u968F\u673A\u751F\u6210boolean</span>
  <span class="token string-property property">&quot;string|1-2&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@string&quot;</span><span class="token punctuation">,</span>     <span class="token comment">//\u968F\u673A\u751F\u6210\u5B57\u7B26\u4E32</span>
  <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;@cname&quot;</span><span class="token punctuation">,</span>             <span class="token comment">//\u968F\u673A\u751F\u6210\u540D\u5B57</span>
 
  <span class="token string-property property">&quot;date&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@date(yyyy-MM-dd)&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u6309\u7167\u683C\u5F0F\u968F\u673A\u751F\u6210\u65F6\u95F4</span>
  <span class="token string-property property">&quot;datetime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@datetime&quot;</span><span class="token punctuation">,</span>     <span class="token comment">//\u968F\u673A\u751F\u6210\u65F6\u95F4</span>
  <span class="token string-property property">&quot;now&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@now&quot;</span><span class="token punctuation">,</span>               <span class="token comment">//\u5F53\u524D\u65F6\u95F4</span>
 
  <span class="token string-property property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@id&quot;</span><span class="token punctuation">,</span>                 <span class="token comment">//\u968F\u673A\u751F\u6210\u4E00\u4E2A 18 \u4F4D\u8EAB\u4EFD\u8BC1</span>
  <span class="token string-property property">&quot;guid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@guid&quot;</span><span class="token punctuation">,</span>             <span class="token comment">//\u968F\u673A\u751F\u6210\u4E00\u4E2A GUID</span>
  <span class="token string-property property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@url&quot;</span><span class="token punctuation">,</span>               <span class="token comment">//\u968F\u673A\u751F\u6210url\u5B57\u7B26\u4E32</span>
  <span class="token string-property property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@email&quot;</span><span class="token punctuation">,</span>           <span class="token comment">//\u968F\u673A\u751F\u6210\u90AE\u7BB1</span>
  <span class="token string-property property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@image(200x200)&quot;</span><span class="token punctuation">,</span>  <span class="token comment">//\u968F\u673A\u751F\u6210\u4E00\u4E2A\u5927\u5C0F\u4E3A200x200\u7684\u56FE\u7247\u94FE\u63A5</span>
  <span class="token string-property property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@title&quot;</span><span class="token punctuation">,</span>           <span class="token comment">//\u968F\u673A\u751F\u6210\u4E00\u53E5\u6807\u9898\uFF0C\u5176\u4E2D\u6BCF\u4E2A\u5355\u8BCD\u7684\u9996\u5B57\u6BCD\u5927\u5199</span>
  <span class="token string-property property">&quot;upper&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@upper(@title)&quot;</span><span class="token punctuation">,</span>   <span class="token comment">//\u628A\u751F\u968F\u673A\u6210\u7684\u6807\u9898\u5168\u90E8\u8F6C\u4E3A\u5927\u5199</span>
  <span class="token string-property property">&quot;cparagraph&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@cparagraph&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u968F\u673A\u751F\u6210\u4E00\u6BB5\u4E2D\u6587\u6587\u672C</span>
  <span class="token string-property property">&quot;csentence&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@csentence&quot;</span><span class="token punctuation">,</span>   <span class="token comment">//\u968F\u673A\u751F\u6210\u4E00\u6BB5\u4E2D\u6587\u6587\u672C</span>
  <span class="token string-property property">&quot;range&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@range(2, 10)&quot;</span> <span class="token punctuation">,</span>   <span class="token comment">//\u8FD4\u56DE\u4E00\u4E2A\u5185\u5BB9\u4ECE2\u5F00\u59CB\u52309\u7684\u6574\u578B\u6570\u7EC4</span>
 
  <span class="token string-property property">&quot;region&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@region&quot;</span><span class="token punctuation">,</span>         <span class="token comment">//\u968F\u673A\u751F\u6210\u5730\u533A \u534E\u4E2D</span>
  <span class="token string-property property">&quot;province&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@province&quot;</span><span class="token punctuation">,</span>     <span class="token comment">//\u968F\u673A\u751F\u6210\u7701\u4F1A \u7701</span>
  <span class="token string-property property">&quot;city&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@city&quot;</span><span class="token punctuation">,</span>             <span class="token comment">//\u968F\u673A\u751F\u6210\u57CE\u5E02 \u5E02</span>
  <span class="token string-property property">&quot;county&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@county&quot;</span><span class="token punctuation">,</span>         <span class="token comment">//\u968F\u673A\u751F\u6210\u4E00\u4E2A\uFF08\u4E2D\u56FD\uFF09\u53BF</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-javascript"><pre><code><span class="token keyword">import</span> <span class="token constant">MOCK</span> <span class="token keyword">from</span> <span class="token string">&#39;mockjs&#39;</span>

<span class="token constant">MOCK</span><span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token string">&#39;/api/user/login&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;status&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;data&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;id|1-100&#39;</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;username&#39;</span><span class="token operator">:</span> <span class="token string">&#39;@cname&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;email&#39;</span><span class="token operator">:</span> <span class="token string">&#39;admin@123.com&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;phone&#39;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;role&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;createTime&#39;</span><span class="token operator">:</span> <span class="token number">1613015825256</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;updateTime&#39;</span><span class="token operator">:</span> <span class="token number">1613015828256</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u5F15\u5165iconfont" tabindex="-1">\u5F15\u5165iconfont <a class="header-anchor" href="#\u5F15\u5165iconfont" aria-hidden="true">#</a></h2><ol><li>\u5B89\u88C5</li></ol><p><a href="https://www.iconfont.cn/home/index?spm=a313x.7781069.1998910419.2" target="_blank" rel="noopener noreferrer">iconfont\u5B98\u7F51</a><img src="https://img-blog.csdnimg.cn/20191112134322653.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4MDUyOTk1,size_16,color_FFFFFF,t_70" alt="image"><img src="https://img-blog.csdnimg.cn/20191112134358385.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4MDUyOTk1,size_16,color_FFFFFF,t_70" alt="image"><img src="https://img-blog.csdnimg.cn/20191112134648349.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4MDUyOTk1,size_16,color_FFFFFF,t_70" alt="image"></p><ol start="2"><li>\u5F15\u5165</li></ol><p>main.js\u4E2D</p><div class="language-"><pre><code>import &#39;@/assets/icon/iconfont.css&#39; //\u4F60\u653E\u5BF9\u5E94\u6587\u4EF6\u7684\u8DEF\u5F84
</code></pre></div><p>\u9009\u62E9\u60F3\u8981\u7684\u77E2\u91CF\u56FE\u7684\u4EE3\u7801 <img src="https://img-blog.csdnimg.cn/20191112135034767.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4MDUyOTk1,size_16,color_FFFFFF,t_70" alt="image"></p><p>\u5728\u9700\u8981\u4F7F\u7528\u7684\u9875\u9762\u4E2D\u5982\u4E0B\u4F7F\u7528\uFF0Cclass\u4E2D\u7C98\u8D34\u77E2\u91CF\u56FE\u4EE3\u7801,\u4E00\u5B9A\u8981\u52A0iconfont!!!</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">&quot;</span>iconfont icontianmaoxingxiang2<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><h2 id="\u5F15\u5165normalize-css" tabindex="-1">\u5F15\u5165normalize.css <a class="header-anchor" href="#\u5F15\u5165normalize-css" aria-hidden="true">#</a></h2><ol><li>\u5B89\u88C5</li></ol><div class="language-"><pre><code>npm i normalize.css --save
</code></pre></div><ol start="2"><li>\u5F15\u5165</li></ol><p>main.js\u4E2D</p><div class="language-"><pre><code>import &#39;normalize.css&#39; 
</code></pre></div><ol start="3"><li>\u5E38\u89C1\u95EE\u9898</li></ol><p>\u6CA1\u6709\u5B89\u88C5\uFF1Acss-loader \xA0 \u548Cstyle-loader</p><div class="language-"><pre><code>npm install css-loader style-loader
</code></pre></div><h2 id="\u5F15\u5165reset-css" tabindex="-1">\u5F15\u5165reset.css <a class="header-anchor" href="#\u5F15\u5165reset-css" aria-hidden="true">#</a></h2><ol><li><p>\u5F15\u5165 <a href="./commonCodeSnippets.html#reset-css">\u6587\u4EF6\u5730\u5740</a></p></li><li><p>\u5E38\u89C1\u7528\u6CD5 app.vue\u91CC</p></li></ol><div class="language-css"><pre><code>&lt;style lang=<span class="token string">&quot;\u8FD9\u91CC\u770B\u4F60\u4F7F\u7528\u7684\u662Fless\u8FD8\u662Fsass&quot;</span>&gt;
    <span class="token atrule"><span class="token rule">@import</span> <span class="token string">&#39;reset.css\u7684\u8DEF\u5F84&#39;</span><span class="token punctuation">;</span></span>
&lt;/style&gt;
</code></pre></div><h2 id="\u5F15\u5165border-css" tabindex="-1">\u5F15\u5165border.css <a class="header-anchor" href="#\u5F15\u5165border-css" aria-hidden="true">#</a></h2><ol><li><p>\u5F15\u5165 <a href="./commonCodeSnippets.html#border-css">\u6587\u4EF6\u5730\u5740</a></p></li><li><p>\u5E38\u89C1\u7528\u6CD5 app.vue\u91CC</p></li></ol><div class="language-css"><pre><code>&lt;style lang=<span class="token string">&quot;\u8FD9\u91CC\u770B\u4F60\u4F7F\u7528\u7684\u662Fless\u8FD8\u662Fsass&quot;</span>&gt;
    <span class="token atrule"><span class="token rule">@import</span> <span class="token string">&#39;border.css\u7684\u8DEF\u5F84&#39;</span><span class="token punctuation">;</span></span>
&lt;/style&gt;
</code></pre></div><h2 id="\u5F15\u5165\u56FE\u7247\u61D2\u52A0\u8F7D\u63D2\u4EF6-vue-lazy" tabindex="-1">\u5F15\u5165\u56FE\u7247\u61D2\u52A0\u8F7D\u63D2\u4EF6(vue-lazy) <a class="header-anchor" href="#\u5F15\u5165\u56FE\u7247\u61D2\u52A0\u8F7D\u63D2\u4EF6-vue-lazy" aria-hidden="true">#</a></h2><ol><li>\u5F15\u5165</li></ol><div class="language-"><pre><code>npm i vue-lazyload --save-dev
</code></pre></div><ol start="2"><li>\u5E38\u89C1\u7528\u6CD5 main.js\u91CC</li></ol><div class="language-javascript"><pre><code><span class="token keyword">import</span> VueLazyLoad <span class="token keyword">from</span> <span class="token string">&#39;vue-lazyload&#39;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueLazyLoad<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token comment">//loading\u56FE\u7684\u8DEF\u5F84</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u4E1A\u52A1\u7EC4\u4EF6\u91CC</p><div class="language-html"><pre><code>// \u628A\u9700\u8981\u7528\u5230\u61D2\u52A0\u8F7D\u7684\u56FE\u7247\uFF0Csrc\u5C5E\u6027\u6362\u4E3Av-lazy

// \u66FF\u6362\u524D
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.imgSrc<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/static/demo.jpg<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>

// \u66FF\u6362\u540E
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">v-lazy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.imgSrc<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">v-lazy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>/static/demo.jpg<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="\u5F15\u5165\u8F6E\u64AD\u56FE\u7EC4\u4EF6" tabindex="-1">\u5F15\u5165\u8F6E\u64AD\u56FE\u7EC4\u4EF6 <a class="header-anchor" href="#\u5F15\u5165\u8F6E\u64AD\u56FE\u7EC4\u4EF6" aria-hidden="true">#</a></h2><ol><li>\u5B89\u88C5</li></ol><p><a href="https://www.swiper.com.cn/api/navigation/355.html" target="_blank" rel="noopener noreferrer">swipper\u5B98\u7F51</a></p><div class="language-"><pre><code>npm install vue-awesome-swiper --save
</code></pre></div><ol start="2"><li>\u5F15\u5165</li></ol><div class="language-"><pre><code>import { swiper, swiperSlide } from &quot;vue-awesome-swiper&quot;;
</code></pre></div><p>\u5F15\u5165swiper\u6837\u5F0F(\u4E00\u5B9A\u8981\u5F15)</p><div class="language-javascript"><pre><code><span class="token keyword">import</span> <span class="token string">&#39;swiper/dist/css/swiper.css&#39;</span>
</code></pre></div><p>\u6837\u4F8B\u4EE3\u7801</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slide<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">&quot;</span>iconfont  icontianmaoxingxiang2<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>swiper</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>swiperOption<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>swiper-container<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mySwiper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>swiper-slide</span>  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>swiper-item<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item,index) in imgArr<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.image|detailImg<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>swiper-slide</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>swiper-pagination<span class="token punctuation">&quot;</span></span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pagination<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>swiper</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> swiper<span class="token punctuation">,</span> swiperSlide <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-awesome-swiper&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;swiper/dist/css/swiper.css&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;index&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    swiper<span class="token punctuation">,</span>
    swiperSlide
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">imgArr</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">swiperOption</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">pagination</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;.swiper-pagination&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u8FD9\u6837\u5199\u5C0F\u5706\u70B9\u5C31\u6709\u4E86</span>
        <span class="token literal-property property">autoplay</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">loop</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ol start="3"><li>\u5E38\u89C1\u95EE\u9898</li></ol><p>\u8C03\u6574\u8F6E\u64AD\u56FE\u6837\u5F0F</p><div class="language-javascript"><pre><code>stylus\u7684\u6837\u5F0F\u7A7F\u900F \u4F7F\u7528<span class="token operator">&gt;&gt;&gt;</span>
\u5916\u5C42 <span class="token operator">&gt;&gt;&gt;</span> \u7B2C\u4E09\u65B9\u7EC4\u4EF6
\u6837\u5F0F
<span class="token punctuation">.</span>wrapper <span class="token operator">&gt;&gt;&gt;</span> <span class="token punctuation">.</span>swiper<span class="token operator">-</span>pagination<span class="token operator">-</span>bullet<span class="token operator">-</span>active
<span class="token literal-property property">background</span><span class="token operator">:</span> #fff




sass\u548Cless\u7684\u6837\u5F0F\u7A7F\u900F \u4F7F\u7528<span class="token operator">/</span>deep<span class="token operator">/</span>
\u5916\u5C42 <span class="token operator">/</span>deep<span class="token operator">/</span> \u7B2C\u4E09\u65B9\u7EC4\u4EF6 <span class="token punctuation">{</span>
\u6837\u5F0F
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>wrapper <span class="token operator">/</span>deep<span class="token operator">/</span> <span class="token punctuation">.</span>swiper<span class="token operator">-</span>pagination<span class="token operator">-</span>bullet<span class="token operator">-</span>active<span class="token punctuation">{</span>
<span class="token literal-property property">background</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6570\u636E\u662F\u52A8\u6001\u52A0\u8F7D\u7684\u65F6\u5019,\u6ED1\u5757\u5C31\u4E0D\u80FD\u5FAA\u73AF\u6ED1\u52A8,\u6ED1\u52A8\u5230\u6700\u540E\u4E00\u9875\u65F6\u5C06\u4E0D\u80FD\u7EE7\u7EED\u5411\u4E0B\u6ED1\u52A8</p><div class="language-javascript"><pre><code><span class="token comment">//\u6211\u4EEC\u9700\u8981\u5728swiper\u7EC4\u4EF6\u4E0A\u8BBE\u7F6E\u4E00\u4E2A </span>
v<span class="token operator">-</span><span class="token keyword">if</span> <span class="token operator">=</span> <span class="token string">&quot;swiperImg.length &gt; 0&quot;</span> 

<span class="token comment">// \u5B8C\u6574\u4EE3\u7801</span>
<span class="token operator">&lt;</span>swiper v<span class="token operator">-</span><span class="token keyword">if</span> <span class="token operator">=</span> <span class="token string">&quot;swiperImg.length &gt; 0&quot;</span> <span class="token operator">:</span>options<span class="token operator">=</span><span class="token string">&quot;swiperOption&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;swiper-container&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>swiper<span class="token operator">-</span>slide v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;(item,index) in swiperImg&quot;</span> <span class="token operator">:</span>key <span class="token operator">=</span> <span class="token string">&quot;index&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;swiper-item&quot;</span> <span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>img <span class="token operator">:</span>src<span class="token operator">=</span><span class="token string">&quot;item.imgUrl&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>swiper<span class="token operator">-</span>slide<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;swiper-pagination&quot;</span> slot<span class="token operator">=</span><span class="token string">&quot;pagination&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>swiper<span class="token operator">&gt;</span>
</code></pre></div>`,64),e=[o];function c(l,r,u,i,k,g){return a(),n("div",null,e)}var q=s(p,[["render",c]]);export{m as __pageData,q as default};
