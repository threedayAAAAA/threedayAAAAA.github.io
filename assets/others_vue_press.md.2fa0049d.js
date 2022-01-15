import{_ as n,c as s,o as a,a as t}from"./app.a1ad4963.js";const m='{"title":"\u90E8\u7F72\u5230 github page","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u90E8\u7F72\u5230 github page","slug":"\u90E8\u7F72\u5230-github-page"}],"relativePath":"others/vue_press.md","lastUpdated":1642233787080}',e={},p=t(`<h2 id="\u90E8\u7F72\u5230-github-page" tabindex="-1">\u90E8\u7F72\u5230 github page <a class="header-anchor" href="#\u90E8\u7F72\u5230-github-page" aria-hidden="true">#</a></h2><p>\u5728 git \u4E2D\u65B0\u589E\u5982\u4E0B\u94A9\u5B50\u5373\u53EF</p><div class="language-shell"><pre><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># \u786E\u4FDD\u811A\u672C\u629B\u51FA\u9047\u5230\u7684\u9519\u8BEF</span>
<span class="token builtin class-name">set</span> -e

<span class="token comment"># \u751F\u6210\u9759\u6001\u6587\u4EF6</span>
<span class="token assign-left variable">file</span><span class="token operator">=</span><span class="token string">&quot;docs/.vitepress/dist&quot;</span>

<span class="token comment"># \u5C06\u65E0\u7528\u6587\u4EF6\u5148\u5220\u9664</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> -f <span class="token variable">$file</span> <span class="token punctuation">]</span> <span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token function">rm</span> -rf <span class="token variable">$file</span>
<span class="token keyword">fi</span>
<span class="token function">yarn</span> docs:build

<span class="token comment"># \u8FDB\u5165\u751F\u6210\u7684\u6587\u4EF6\u5939</span>
<span class="token builtin class-name">cd</span> <span class="token variable">$file</span>
<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> -A
<span class="token function">git</span> commit -m <span class="token string">&#39;deploy&#39;</span>
<span class="token comment"># \u5982\u679C\u4F60\u60F3\u8981\u90E8\u7F72\u5230 https://&lt;USERNAME&gt;.github.io</span>
<span class="token function">git</span> push -f git@github.com:threedayAAAAA/threedayAAAAA.github.io.git master:main

<span class="token comment"># \u672C\u5730\u90E8\u7F72</span>
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>
<span class="token function">cp</span> -r dist/. d:/nginx/html
<span class="token builtin class-name">cd</span> d:/nginx
start nginx

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre></div>`,3),o=[p];function c(i,l,r,u,d,k){return a(),s("div",null,o)}var h=n(e,[["render",c]]);export{m as __pageData,h as default};
