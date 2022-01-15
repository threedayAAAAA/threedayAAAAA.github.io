import{_ as n,c as s,o as a,a as t}from"./app.672c393a.js";const f='{"title":"\u5E38\u7528\u4EE3\u7801\u7247\u6BB5","description":"","frontmatter":{},"headers":[{"level":2,"title":"reset.css","slug":"reset-css"},{"level":2,"title":"border.css","slug":"border-css"}],"relativePath":"font_end_engineering/commonCodeSnippets.md","lastUpdated":1613023587203}',p={},o=t(`<h1 id="\u5E38\u7528\u4EE3\u7801\u7247\u6BB5" tabindex="-1">\u5E38\u7528\u4EE3\u7801\u7247\u6BB5 <a class="header-anchor" href="#\u5E38\u7528\u4EE3\u7801\u7247\u6BB5" aria-hidden="true">#</a></h1><h2 id="reset-css" tabindex="-1">reset.css <a class="header-anchor" href="#reset-css" aria-hidden="true">#</a></h2><p>\u521D\u59CB\u5316\u6574\u4F53\u6837\u5F0F\uFF0C\u53BB\u9664\u67D0\u4E9B\u6807\u7B7E\u7684\u9ED8\u8BA4\u6837\u5F0F</p><div class="language-css"><pre><code><span class="token selector">html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video</span><span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">font</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> baseline<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* HTML5 display-role reset for older browsers */</span>
<span class="token selector">article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">ol, ul, li</span><span class="token punctuation">{</span>
  <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">blockquote, q</span><span class="token punctuation">{</span>
  <span class="token property">quotes</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">blockquote:before, blockquote:after,
q:before, q:after</span><span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token property">content</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">table</span><span class="token punctuation">{</span>
  <span class="token property">border-collapse</span><span class="token punctuation">:</span> collapse<span class="token punctuation">;</span>
  <span class="token property">border-spacing</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token comment">/* custom */</span>
<span class="token selector">a</span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #7e8c8d<span class="token punctuation">;</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">-webkit-backface-visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">::-webkit-scrollbar</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">::-webkit-scrollbar-track-piece</span><span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">-webkit-border-radius</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">::-webkit-scrollbar-thumb:vertical</span><span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>125<span class="token punctuation">,</span> 125<span class="token punctuation">,</span> 125<span class="token punctuation">,</span> 0.7<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">-webkit-border-radius</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">::-webkit-scrollbar-thumb:horizontal</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>125<span class="token punctuation">,</span> 125<span class="token punctuation">,</span> 125<span class="token punctuation">,</span> 0.7<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">-webkit-border-radius</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">html, body</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;Arial&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Microsoft YaHei&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u9ED1\u4F53&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u5B8B\u4F53&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u5FAE\u8F6F\u96C5\u9ED1&quot;</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">body</span><span class="token punctuation">{</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">-webkit-text-size-adjust</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">-webkit-tap-highlight-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">html</span><span class="token punctuation">{</span>
  <span class="token property">overflow-y</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token comment">/*\u6E05\u9664\u6D6E\u52A8*/</span>
<span class="token selector">.clearfix:before,
.clearfix:after</span><span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
  <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.clearfix</span><span class="token punctuation">{</span>
  *<span class="token property">zoom</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token comment">/*\u9690\u85CF*/</span>
<span class="token selector">.dn</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="border-css" tabindex="-1">border.css <a class="header-anchor" href="#border-css" aria-hidden="true">#</a></h2><p>\u89E3\u51B3\u79FB\u52A8\u7AEF1px\u8FB9\u6846\u7684\u95EE\u9898</p><div class="language-css"><pre><code><span class="token atrule"><span class="token rule">@charset</span> <span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">;</span></span>
<span class="token selector">.border,
.border-top,
.border-right,
.border-bottom,
.border-left,
.border-topbottom,
.border-rightleft,
.border-topleft,
.border-rightbottom,
.border-topright,
.border-bottomleft</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.border::before,
.border-top::before,
.border-right::before,
.border-bottom::before,
.border-left::before,
.border-topbottom::before,
.border-topbottom::after,
.border-rightleft::before,
.border-rightleft::after,
.border-topleft::before,
.border-topleft::after,
.border-rightbottom::before,
.border-rightbottom::after,
.border-topright::before,
.border-topright::after,
.border-bottomleft::before,
.border-bottomleft::after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;\\0020&quot;</span><span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* border
 * \u56E0\uFF0C\u8FB9\u6846\u662F\u7531\u4F2A\u5143\u7D20\u533A\u57DF\u906E\u76D6\u5728\u7236\u7EA7
 * \u6545\uFF0C\u5B50\u7EA7\u82E5\u6709\u4EA4\u4E92\uFF0C\u9700\u8981\u5BF9\u5B50\u7EA7\u8BBE\u7F6E
 * \u5B9A\u4F4D \u53CA z\u8F74
 */</span>
<span class="token selector">.border::before</span> <span class="token punctuation">{</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #eaeaea<span class="token punctuation">;</span>
  <span class="token property">transform-origin</span><span class="token punctuation">:</span> 0 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.border-top::before,
.border-bottom::before,
.border-topbottom::before,
.border-topbottom::after,
.border-topleft::before,
.border-rightbottom::after,
.border-topright::before,
.border-bottomleft::before</span> <span class="token punctuation">{</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.border-right::before,
.border-left::before,
.border-rightleft::before,
.border-rightleft::after,
.border-topleft::after,
.border-rightbottom::before,
.border-topright::after,
.border-bottomleft::after</span> <span class="token punctuation">{</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.border-top::before,
.border-topbottom::before,
.border-topleft::before,
.border-topright::before</span> <span class="token punctuation">{</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> 1px solid #eaeaea<span class="token punctuation">;</span>
  <span class="token property">transform-origin</span><span class="token punctuation">:</span> 0 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.border-right::before,
.border-rightbottom::before,
.border-rightleft::before,
.border-topright::after</span> <span class="token punctuation">{</span>
  <span class="token property">border-right</span><span class="token punctuation">:</span> 1px solid #eaeaea<span class="token punctuation">;</span>
  <span class="token property">transform-origin</span><span class="token punctuation">:</span> 100% 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.border-bottom::before,
.border-topbottom::after,
.border-rightbottom::after,
.border-bottomleft::before</span> <span class="token punctuation">{</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px solid #eaeaea<span class="token punctuation">;</span>
  <span class="token property">transform-origin</span><span class="token punctuation">:</span> 0 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.border-left::before,
.border-topleft::after,
.border-rightleft::after,
.border-bottomleft::after</span> <span class="token punctuation">{</span>
  <span class="token property">border-left</span><span class="token punctuation">:</span> 1px solid #eaeaea<span class="token punctuation">;</span>
  <span class="token property">transform-origin</span><span class="token punctuation">:</span> 0 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.border-top::before,
.border-topbottom::before,
.border-topleft::before,
.border-topright::before</span> <span class="token punctuation">{</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.border-right::before,
.border-rightleft::after,
.border-rightbottom::before,
.border-topright::after</span> <span class="token punctuation">{</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.border-bottom::before,
.border-topbottom::after,
.border-rightbottom::after,
.border-bottomleft::after</span> <span class="token punctuation">{</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.border-left::before,
.border-rightleft::before,
.border-topleft::after,
.border-bottomleft::before</span> <span class="token punctuation">{</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">max--moz-device-pixel-ratio</span><span class="token punctuation">:</span> 1.49<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token property">-webkit-max-device-pixel-ratio</span><span class="token punctuation">:</span> 1.49<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token property">max-device-pixel-ratio</span><span class="token punctuation">:</span> 1.49<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token property">max-resolution</span><span class="token punctuation">:</span> 143dpi<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token property">max-resolution</span><span class="token punctuation">:</span> 1.49dppx<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token comment">/* \u9ED8\u8BA4\u503C\uFF0C\u65E0\u9700\u91CD\u7F6E */</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min--moz-device-pixel-ratio</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max--moz-device-pixel-ratio</span><span class="token punctuation">:</span> 2.49<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token property">-webkit-min-device-pixel-ratio</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-max-device-pixel-ratio</span><span class="token punctuation">:</span> 2.49<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token property">min-device-pixel-ratio</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-device-pixel-ratio</span><span class="token punctuation">:</span> 2.49<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token property">min-resolution</span><span class="token punctuation">:</span> 144dpi<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-resolution</span><span class="token punctuation">:</span> 239dpi<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token property">min-resolution</span><span class="token punctuation">:</span> 1.5dppx<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-resolution</span><span class="token punctuation">:</span> 2.49dppx<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.border::before</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200%<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.border-top::before,
  .border-bottom::before,
  .border-topbottom::before,
  .border-topbottom::after,
  .border-topleft::before,
  .border-rightbottom::after,
  .border-topright::before,
  .border-bottomleft::before</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.border-right::before,
  .border-left::before,
  .border-rightleft::before,
  .border-rightleft::after,
  .border-topleft::after,
  .border-rightbottom::before,
  .border-topright::after,
  .border-bottomleft::after</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min--moz-device-pixel-ratio</span><span class="token punctuation">:</span> 2.5<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token property">-webkit-min-device-pixel-ratio</span><span class="token punctuation">:</span> 2.5<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token property">min-device-pixel-ratio</span><span class="token punctuation">:</span> 2.5<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token property">min-resolution</span><span class="token punctuation">:</span> 240dpi<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token property">min-resolution</span><span class="token punctuation">:</span> 2.5dppx<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.border::before</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 300%<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>.33333<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.border-top::before,
  .border-bottom::before,
  .border-topbottom::before,
  .border-topbottom::after,
  .border-topleft::before,
  .border-rightbottom::after,
  .border-topright::before,
  .border-bottomleft::before</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>.33333<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.border-right::before,
  .border-left::before,
  .border-rightleft::before,
  .border-rightleft::after,
  .border-topleft::after,
  .border-rightbottom::before,
  .border-topright::after,
  .border-bottomleft::after</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>.33333<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,7),e=[o];function c(r,u,l,i,k,b){return a(),s("div",null,e)}var m=n(p,[["render",c]]);export{f as __pageData,m as default};
