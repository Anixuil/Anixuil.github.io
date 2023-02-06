import{_ as s,c as n,o as a,b as e}from"./app.5a7954b9.js";const F=JSON.parse('{"title":"Fast start","description":"","frontmatter":{"layout":"doc"},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Complete introduction","slug":"complete-introduction","link":"#complete-introduction","children":[]}]},{"level":2,"title":"Import on demand","slug":"import-on-demand","link":"#import-on-demand","children":[]},{"level":2,"title":"Come into use","slug":"come-into-use","link":"#come-into-use","children":[]}],"relativePath":"en/guide/start.md","lastUpdated":1674142256000}'),o={name:"en/guide/start.md"},t=e(`<h1 id="fast-start" tabindex="-1">Fast start <a class="header-anchor" href="#fast-start" aria-hidden="true">#</a></h1><p>This section describes how to use <strong>Kunlun Design</strong> in a project.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><h3 id="complete-introduction" tabindex="-1">Complete introduction <a class="header-anchor" href="#complete-introduction" aria-hidden="true">#</a></h3><p>If you don&#39;t care about the size of the packaged file, it&#39;s easier to use a full import.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//main.ts</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createApp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> KunlunDesign </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">kunlun-design</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">kunlun-design/lib/style.css</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> App </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./App.vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createApp</span><span style="color:#A6ACCD;">(App)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(KunlunDesign)</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mount</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="import-on-demand" tabindex="-1">Import on demand <a class="header-anchor" href="#import-on-demand" aria-hidden="true">#</a></h2><h2 id="come-into-use" tabindex="-1">Come into use <a class="header-anchor" href="#come-into-use" aria-hidden="true">#</a></h2><p>You can start your project now. For usage of each component, refer to the documentation for the individual component.</p>`,9),l=[t];function p(r,c,i,d,D,y){return a(),n("div",null,l)}const A=s(o,[["render",p]]);export{F as __pageData,A as default};
