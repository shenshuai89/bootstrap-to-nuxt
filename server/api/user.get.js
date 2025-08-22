// 用户列表
// server/api/users.get.ts
import { defineEventHandler } from 'h3';
import { useDb } from '../utils/db';
import { users } from '../schema/user';

export default defineEventHandler(async (event) => {
  const db = await useDb();
  const userList = await db.select().from(users);
  return { success: true, data: userList };
});

/* return {
    success: true,
    data: [
      {
        id: '61f69e4aa08b39f75309c2a8',
        author_id: '4efc278525fa69ac6900000f',
        tab: 'share',
        content:
          '<div class="markdown-text"><p><a href="https://registry.npmmirror.com">https://registry.npmmirror.com</a> npmmirror 镜像站在2013年12月开始就使用基于 koa 的 <a href="https://github.com/cnpm/cnpmjs.org">https://github.com/cnpm/cnpmjs.org</a> 私有 npm 应用搭建，这些年 node 应用框架在快速换代升级，连我们自己造的 egg 都要升级到 TypeScript 了，所以在 2021 年我们启动了 <a href="http://cnpmjs.org">cnpmjs.org</a> 的技术升级重构，基于 egg 的 TypeScript 模式重新实现 <a href="https://github.com/cnpm/cnpmcore">https://github.com/cnpm/cnpmcore</a> 。</p>\n<p>npm registry 的接口是 100% 实现迁移，然后在数据同步上通过数据库实现足够简单的任务系统，已经在 2022年1月30日完全老数据迁移。\n非常感谢阿里云这么多年来的对中国 npm 镜像云服务器的开源赞助，只能靠仅有的广告位和每年的感谢帖子来回报这份天价的云资源账单。这一次重构之后，我们验证下来至少可以节省一半的云服务器资源，也算是让阿里云的开源赞助可以减轻一些成本负担。</p>\n<p>当然 cnpmcore 不仅仅是为了技术升级，我们的核心新能力会跟随 npmfs 黑科技在 2022 年发布出来，到时候 npm install 的安装速度会在 cli 侧和 registry 侧同时发力，让 npm 模块安装速度在可预见的未来达到秒级。</p>\n<p>PS：预估你在此期间遇到包数据同步和丢失问题，请先手动同步一次，如果还是没有，请回帖反馈给我们。</p>\n</div>',
        title: 'npmmirror 镜像站升级公告',
        last_reply_at: '2025-07-23T07:41:29.088Z',
        good: false,
        top: true,
        reply_count: 105,
        visit_count: 217543,
        create_at: '2022-01-30T14:18:50.170Z',
        author: {
          loginname: 'fengmk2',
          avatar_url: 'https://avatars.githubusercontent.com/u/156269?v=4&s=120',
        },
      },
      {
        id: '61dbd8fd994582918ef7d174',
        author_id: '54009f5ccd66f2eb37190485',
        tab: 'share',
        content:
          '<div class="markdown-text"><p>很多人觉得Node.js没有往年那么火了，事实上不是这样的，Node.js社区健康稳步的发展中，主要是从性能好向好用转变，在易用性上有很大提升，从Node.js源码更新的内容看，大抵如此。Node.js Diagnostics Working Group是近二年Node.js社区的重点工作组，Node.js 14版本之后的大部分功能特性都是这个工作组推动的。早在2015年，有2个跟踪工作组tracing WG 和事后分析工作组 postmortem WG，在2017年合并到Diagnostics WG。核心产出是async_hooks, profiling, tracing, dump debug, report等，都是在易用性和好用性上做提升。让每个Node.js开发者更低门槛的提升Node.js应用的开发体验。</p>\n<p>秦粤老师在《浮华过后的Node.js》分享里，也表达了同样观点，他用的是产品化平缓期，也是健康稳步的发展的意思。</p>\n<p><img src="//static.cnodejs.org/FqRK1Uehhaz3lFDF3oHeL97Z7zYm" alt="image.png"></p>\n<p>社区方面，Web框架已经没有多少空间，以特性取胜的框架，应该不会很多，比较期待Egg3。像fastify这种，修改Node.js机制，在性能领域深耕的框架，目前看是比较有作为的。pnpm是有创新的，但代码是有点可读性不太好。我更加喜欢rushstack对menorepo的改进，大规模编程范式还需要探索。除了去年提的midway-hooks，easy-monitor，看起来remix和morden算新，但还没有超出之前的范畴。</p>\n<p>下面结合《<a href="https://nodersurvey.github.io/reporters">Node.js开发者2021报告</a>》内容，我们详细解读一下Node.js 2021年的情况。这份解读是根据冰森&amp;狼叔直播内容整理的，要点如下。\n​</p>\n<h3>1）开发框架变化较大，造轮子变少，TS变多，使用企业级框架变多</h3>\n<p>​</p>\n<p>去年express占比还非常高，今年企业级框架变多，尤其是大而全的框架更受欢迎。</p>\n<p><img src="//static.cnodejs.org/Fl-QFKuag-dvFGbx7Q45WabMH5d8" alt="image.png"></p>\n<p>Egg在国内普及率很高，而Midway和Nest增长较快，其实和TS普及有一定关系。\n​\n<img src="//static.cnodejs.org/FvoNa6PGZJN1ZaqZlmXZuRnNUI5_" alt="image.png">\n​</p>\n<h3>2）版本更新变化较大，从Node 12升级到Node 14，升级比较积极</h3>\n<p>​</p>\n<p>去年Node.js主要是使用Node 12，2021年Node 14占比将近一半，更新还是较快的。</p>\n<p><img src="//static.cnodejs.org/FpQcq4qzd9rl-R-VEXzLZAiVMPaa" alt="image.png">\n​</p>\n<h3>3）吐槽变多，意味着用的人变多，趋于成熟</h3>\n<p>​</p>\n<p>C++之父Bjarne Stroustrup说过：世界上只有两种编程语言,一种是整天被人骂的,还有一种是没人用的。\n​</p>\n<p>大家对Node.js吐槽变多，实际上是在应用场景上使用较多，不再是针对于某些特性而进行吹捧。回归理性，在真实应用场景上，分布广泛，核心围绕API和BFF层，CLI&amp;工具。\n​\n<img src="//static.cnodejs.org/FkEeeI7hvEdSMIyUNaKxnQx9pzcJ" alt="image.png"></p>\n<h3>4）出圈：年龄分布较去年比变大，使用工种也变得比较丰富。</h3>\n<p>除了应用场景上，分布广泛外，非前端意外的开发者相关角色也有很大比例的提升，比如架构师，技术总监，项目经理等都一定程度上使用Node.js。可以说Node.js走出了前端圈，面向更大群体提供服务。另外受访者的年龄分布也变大了，这和出圈是有直接关系的。\n​\n<img src="//static.cnodejs.org/FsnHAf1Map8P8i4bEAn89POQf_8E" alt="image.png"></p>\n<h3>5）使用困惑：性能优化，内存泄漏以及npm依赖</h3>\n<p>​</p>\n<p>以往对Node.js困惑最多的是异步流程控制，随着async/await的普及，这个问题已经慢慢在弱化。随着开发者使用Node.js深度增加，对性能优化，内存泄漏更为关注，这也是比较容易理解的。</p>\n<p><img src="//static.cnodejs.org/FkPiwL5U9kbNq1vUE1J8AQKn54z4" alt="image.png"></p>\n<p>​</p>\n<h3>6）未来：从业经验越高则越关注性能和 Serverless</h3>\n<p>​</p>\n<p>关注性能比较容易理解，关注Serverless最主要是的原因是Serverless可以做到低运维甚至是0运维。运维作为Node.js开发者必备技能，Serverless的出现使得很多非专业Node.js也能轻松搞定Node.js各种服务端场景。</p>\n<p><img src="//static.cnodejs.org/FjZSOZ1uO-Tqh8yTL2E4CtvMUFbN" alt="image.png"></p>\n<p><img src="//static.cnodejs.org/FshPaWkMvnMKMxJckqf0L-M5OYe1" alt="image.png"></p>\n<h3>推荐阅读</h3>\n<ul>\n<li>天猪《EggJS 的前世今生与未来》，比较期待Egg3，easy-monitor作者一君也加入Egg3项目组了 <a href="https://www.yuque.com/atian25/blog/egg-1to2to3">https://www.yuque.com/atian25/blog/egg-1to2to3</a></li>\n<li>秦粤 《浮华过后的Node.js》链接稍后给出来</li>\n</ul>\n<h3>参考</h3>\n<ul>\n<li>原文  <a href="https://cnodejs.org/topic/6108bbc2a5d29d175c2d4208">https://cnodejs.org/topic/6108bbc2a5d29d175c2d4208</a></li>\n<li>报告 <a href="https://nodersurvey.github.io/reporters">https://nodersurvey.github.io/reporters</a></li>\n</ul>\n<p>如果大家想参与讨论，欢迎回复</p>\n</div>',
        title: 'Node.js 2021年开发者报告解读：健康稳步的发展中',
        last_reply_at: '2024-07-15T05:45:11.553Z',
        good: false,
        top: true,
        reply_count: 23,
        visit_count: 251090,
        create_at: '2022-01-10T06:58:05.059Z',
        author: {
          loginname: 'i5ting',
          avatar_url: 'https://avatars.githubusercontent.com/u/3118295?v=4&s=120',
        },
      },
      {
        id: '5fdb44d70f99cb37f45e3410',
        author_id: '56f3686f02c237a73a1a8acf',
        tab: 'share',
        content:
          '<div class="markdown-text"><p>RT.</p>\n<p>请大家遵守法律法规，勿发布不合规内容。</p>\n<ul>\n<li>2021/11/26：针对部分打擦边球的推广行为（如各种云服务商的推广链接），将会对账户做出屏蔽处理。</li>\n<li>2021/11/26：针对机器人频繁发布广告与违规内容，新增发帖限制如下：新用户五天内不允许发帖（不影响回帖）。</li>\n</ul>\n</div>',
        title: '【2021/11/26】请大家遵纪守法，勿发布不合规内容',
        last_reply_at: '2024-07-15T05:26:26.971Z',
        good: false,
        top: true,
        reply_count: 287,
        visit_count: 237084,
        create_at: '2020-12-17T11:45:27.667Z',
        author: {
          loginname: 'thonatos',
          avatar_url: 'https://avatars.githubusercontent.com/u/958063?v=4&s=120',
        },
      },
      {
        id: '6262718079f90d94a6a0d2f5',
        author_id: '4f447c2f0a8abae26e01b27d',
        tab: 'share',
        content:
          '<div class="markdown-text"><h2>概述</h2>\n<p>Node.js 刚刚发布了 18.0.0 版本，内置了 <code>fetch</code>、<code>node:test</code> 等标准模块。</p>\n<p><strong>一句话点评：std lib 在标准化，user lib 在精细化。</strong></p>\n<blockquote>\n<p>原文地址：<a href="https://zhuanlan.zhihu.com/p/502951532">EggJS 知乎专栏</a>，求点赞。</p>\n</blockquote>\n<hr>\n<h2>如何快速体验</h2>\n<p>推荐用 <a href="https://github.com/Schniz/fnm">fnm</a>，<a href="https://github.com/jasongin/nvs">nvs</a>，<a href="https://github.com/nvm-sh/nvm">nvm</a> 等 Node.js 版本管理器。</p>\n<pre class="prettyprint language-bash"><code>$ fnm install 18\nInstalling Node v18.0.0 (arm64)\n\n$ fnm use 18\nUsing Node v18.0.0\n\n$ node -v\nv18.0.0\n</code></pre><p>需要注意的是，该版本不是 LTS 版本，请勿在生产环境使用，需要等到 2022-10-25 才会成为 LTS 版本。</p>\n<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/012135a1091b40ef807c8b6e3919bcce~tplv-k3u1fbpfcp-zoom-1.image" alt="image.png" title="https://github.com/nodejs/Release"></p>\n<h2>Looking to the future</h2>\n<blockquote>\n<p>The project is also continuing its ‘Next 10’ effort.  The goal of this effort is to reflect on what led to success in the first 10 years of Node.js and set the direction for success in the next 10.</p>\n</blockquote>\n<p>Node.js 官方启动了 <a href="https://github.com/nodejs/next-10">next-10</a> 工作，并讨论出了<a href="https://github.com/nodejs/node/blob/master/doc/contributing/technical-priorities.md">未来重要的几件事</a>：</p>\n<ul>\n<li>现代化的 HTTP</li>\n<li>友好的类型支持</li>\n<li>对初学者更友好的渐进式文档</li>\n<li>对 ECMAScript 规范的支持和及时跟进</li>\n<li>可观测性，包括 logging/metrics/tracing，以及 APM 等</li>\n<li>更好的多线程支持</li>\n<li>支持打包为单文件的分发方式</li>\n</ul>\n<p>譬如前面说的 Fetch 就和 Modern HTTP 的会议讨论有关，<a href="https://github.com/nodejs/next-10/blob/main/meetings/summit-jan-2022.md">相关纪要</a>。</p>\n<blockquote>\n<p>6 月份的 OpenJS World 会议中将分享 ESM 和 Observability 进展，可以关注下相关动态。</p>\n</blockquote>\n<hr>\n<h2>Fetch API</h2>\n<p>前端同学应该都很熟悉<code>fetch()</code>这个 API，它提供了标准的网络请求能力，取代了远古的  XMLHttpRequest 。</p>\n<p>反观 Node.js 侧，官方提供的 <a href="https://nodejs.org/dist/latest-v18.x/docs/api/http.html#httprequesturl-options-callback">http.request()</a>，太底层太基础了，用起来往往需要大量的封装。譬如 302 后自动跳转、文件上传、响应结果解析等等。</p>\n<p>因此在 Node.js 社区有非常多的上层请求库封装：</p>\n<ul>\n<li>曾经广受社区欢迎的 request 库去年<a href="https://github.com/request/request/issues/3142">宣布停止维护</a>后，也引起了社区比较大的混乱。。</li>\n<li>我们 Egg 内置的是 <a href="https://www.npmjs.com/package/urllib">urllib</a>，沉淀了阿里多年在网络请求上踩的坑，足够稳定，不过代码也有点久远了。</li>\n<li>更多参见 <a href="https://github.com/request/request/issues/3143">Alternative libraries to request</a> 以及 <a href="https://zhuanlan.zhihu.com/p/415361629">《天猪：那些你应该说再见的 npm 祖传老库》</a>。</li>\n</ul>\n<p><strong>去年 Node.js 官方推出了 <strong><a href="https://undici.nodejs.org/"><strong>undici</strong></a></strong>，一个非常现代化的库，具备优越的性能，良好的扩展性，内置的 mock 等能力，集大成者。</strong></p>\n<blockquote>\n<p>undici 的命名也很有趣：A HTTP/1.1 client → 11 → Eleven → Undici，即意大利语的 11。</p>\n</blockquote>\n<p>从而 <strong>Node.js 终于内置了新的请求库</strong>，它遵循 <a href="https://fetch.spec.whatwg.org/">Fetch 规范</a>，底层就是基于 undici 来实现的。</p>\n<pre class="prettyprint language-javascript"><code>const res = await fetch(&#x27;https:&#x2F;&#x2F;nodejs.org&#x2F;api&#x2F;documentation.json&#x27;);\nif (res.ok) {\n  const data = await res.json();\n  console.log(data);\n}\n</code></pre><p>就这么简单，比 <a href="https://nodejs.org/dist/latest-v18.x/docs/api/http.html#httprequesturl-options-callback">http.request()</a> 那一坨 callback-style 代码简洁多了，平时写个脚本啥的，不用再引入额外的类库了。</p>\n<p>全局增加了 fetch, FormData, Headers, Request, Response 这几个 API，以及 Web Streams API。</p>\n<p>目前还处于默认开启的实验性特性阶段，文档在 <a href="https://nodejs.org/dist/latest-v18.x/docs/api/globals.html#fetch">Globals</a> 章节，近乎没有，有需要直接看 <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">MDN 文档</a> 即可。</p>\n<p>可能是为了遵循规范， undici 的很多能力如 Mock，Proxy，Pool 等都没有提供出来。</p>\n<hr>\n<h2>Test Runner</h2>\n<p>单元测试很重要，很多新兴的编程语言都是会内置对应的能力，但前端这块一直都是由社区来实现，前端同学耳熟能详的 Test Runner 有 <a href="https://mochajs.org/">Mocha</a>、<a href="https://jestjs.io/">Jest</a>。</p>\n<pre class="prettyprint language-javascript"><code>&#x2F;&#x2F; mocha showcase\nimport assert from &#x27;assert&#x2F;strict&#x27;;\n\ndescribe(&#x27;test&#x2F;index.test.js&#x27;, () =&gt; {\n  it(&#x27;test1&#x27;, async () =&gt; {\n    const res = await fetch(&#x27;https:&#x2F;&#x2F;nodejs.org&#x2F;api&#x2F;documentation.json&#x27;);\n    assert(res.ok);\n  });\n  \n  it.skip(&#x27;skip some test&#x27;, () =&gt; {});\n});\n</code></pre><p>终于，Node.js 在 18.x 里官方支持了 <a href="https://nodejs.org/dist/latest-v18.x/docs/api/test.html">Test 能力</a>：</p>\n<pre class="prettyprint language-javascript"><code>import test from &#x27;node:test&#x27;;\nimport assert from &#x27;assert&#x2F;strict&#x27;;\n\n&#x2F;&#x2F; 等价于 describe()\ntest(&#x27;asynchronous passing test&#x27;, async () =&gt; {\n  const res = await fetch(&#x27;https:&#x2F;&#x2F;nodejs.org&#x2F;api&#x2F;documentation.json&#x27;);\n  assert(res.ok);\n});\n\ntest(&#x27;multi level test&#x27;, async (t) =&gt; {\n  &#x2F;&#x2F; 等价于 it()\n  await t.test(&#x27;subtest 1&#x27;, (t) =&gt; {\n    assert.strictEqual(1, 1);\n  });\n\n  await t.test(&#x27;subtest 2&#x27;, (t) =&gt; {\n    assert.strictEqual(2, 2);\n  });\n});\n\n&#x2F;&#x2F; 等价于 describe.skip() &#x2F; it.skip()\ntest(&#x27;skip option&#x27;, { skip: true }, () =&gt; {});\n\n&#x2F;&#x2F; 等价于 describe.only() &#x2F; it.only()\ntest(&#x27;only option&#x27;, { only: true }, () =&gt; {});\n</code></pre><p>可以看到：</p>\n<ul>\n<li>语法其实差不多，会更简洁一点，就一个 <code>test()</code>，options 除了 skip 和 only 外，还支持 concurrency 并发。</li>\n<li>无需启动器，每一个文件都是一个可执行的 Node.js 代码。</li>\n<li>暂未支持 <code>before/after/beforeEach/afterEach</code> 能力，看 issue 描述会后续支持。</li>\n<li>暂未支持 Reporter，但日志输出为标准 <a href="https://testanything.org/">TAP</a> 格式，所以应该很容易能复用现有的社区生态。</li>\n</ul>\n<p>类似覆盖率的演进过程，以前我们需要通过 nyc 对代码转译打桩，现在变为的 Node.js 内置覆盖率输出，nyc 变为 c8 这样的覆盖率报告生成工具。</p>\n<p>后续 mocha 等估计会变为类似的上层封装，提供批量执行 和 Reporter 等能力。</p>\n<hr>\n<h2>Build-time user-land snapshot</h2>\n<p>简单的说，可以把某个 js 直接编译成 v8 snapshot，从而可以极大的提速启动时间。</p>\n<p>目前这个版本，还只能通过 Node.js 源码来编译，且只能编译成 Node.js Runtime 的方式，即 Build-time。</p>\n<pre class="prettyprint language-bash"><code># 把一段 markdown 渲染的逻辑，直接打包到 Node Runtime\n$ cd &#x2F;path&#x2F;to&#x2F;node&#x2F;source\n$ .&#x2F;configure --node-snapshot-main=marked.js\n$ make node\n\n# 执行编译好的 Node Runtime\n$ out&#x2F;Release&#x2F;node\n&gt; const html = globalThis.marked(&#x27;# this is title&#x27;);\n</code></pre><p>秋怡正在继续推进<a href="https://github.com/nodejs/node/issues/35711">该能力</a>，未来可以无需编译 Node.js 源码：</p>\n<pre class="prettyprint language-bash"><code>$ node --build-snapshot --snapshot-blob marked.blob marked.js \n$ node --snapshot-blob marked.blob\n</code></pre><p>PS：这个能力用在命令行 CLI 的独立打包好像也不错。<a href="https://github.com/nodejs/node/issues/42566">https://github.com/nodejs/node/issues/42566</a></p>\n<hr>\n<h2>V8 引擎升级</h2>\n<p>内置的 V8 引擎升级到 10.1 版本，值得注意的特性：</p>\n<ul>\n<li>class fields 和 private class methods 的性能优化。</li>\n<li><a href="https://v8.dev/blog/v8-release-99#intl.locale-extensions">Intl 规范</a> 的支持，在做日期的本地化，字符串处理的时候非常有用。</li>\n<li>数组支持 findLast() 和 findLastIndex() 等。</li>\n</ul>\n<p>秋怡也写了一篇文章 <a href="https://v8.dev/blog/faster-class-features">Faster initialization of instances with new class features</a> 分享了背后的实现。</p>\n<p>PS：<a href="https://mp.weixin.qq.com/s/6PTcjJQTED3WpJH8ToXInw">ECMAScript 双月报告：装饰器提案进入 Stage 3</a> ，阿里的 Node 架构团队今年会推动 Decorator 方案在 V8 的落地实现，不过肯定赶不上了，只能 Node.js 20.x 见了。</p>\n<hr>\n<h2>ESM 的支持</h2>\n<p>虽然在 18.x 中没有新的内容，但在过去的几个月中一直在持续推动 ECMAScript模块实现：</p>\n<ul>\n<li>对 <a href="https://github.com/tc39/proposal-import-assertions">JSON Import Assertions</a> 的支持。</li>\n<li>JSON 模块的正式支持。</li>\n<li>对 HTTPS 和 HTTP 导入的实验性支持。</li>\n<li><a href="https://github.com/nodejs/loaders">Node.js 加载器团队</a>也在继续开发 ECMAScript 模块加载器实现。</li>\n</ul>\n<hr>\n<h2>工具链和编译器的升级</h2>\n<ul>\n<li>Linux 版是在 RHEL8 上构建的，要求 glibc 2.28 以上版本。</li>\n<li>macOS 要求 10.15 以上版本。</li>\n<li>Windows 很多旧版本也不支持了。</li>\n</ul>\n<p>PS：CentOS 7 官方不再维护了，它对应的 glibc 版本太低，所以升不了。。。</p>\n<ul>\n<li><a href="https://developer.aliyun.com/article/780803">centos7和8不维护停止更新之后，服务器选择使用什么系统好？</a></li>\n<li><a href="https://github.com/nodejs/node/pull/42659">doc: update minimum glibc requirements for Linux by richardlau</a></li>\n</ul>\n<hr>\n<h2>相关资料</h2>\n<ul>\n<li><a href="https://nodejs.org/en/blog/announcements/v18-release-announce">https://nodejs.org/en/blog/announcements/v18-release-announce</a></li>\n<li><a href="https://nodejs.org/en/blog/release/v18.0.0/">https://nodejs.org/en/blog/release/v18.0.0/</a></li>\n</ul>\n</div>',
        title: 'Node.js 18 新特性解读',
        last_reply_at: '2024-07-15T02:52:22.631Z',
        good: false,
        top: true,
        reply_count: 37,
        visit_count: 137550,
        create_at: '2022-04-22T09:12:32.716Z',
        author: {
          loginname: 'atian25',
          avatar_url: 'https://avatars.githubusercontent.com/u/227713?v=4&s=120',
        },
      },
      {
        id: '634fa473d3061fe5e4e88d35',
        author_id: '516f989a6d38277306ae8c1b',
        tab: 'share',
        content:
          '<div class="markdown-text"><p>继 2019 年开源 Midway 框架之后，阿里一直在 Node.js 的前沿进行深度研究，除了加入 TC39 参与标准化建设，向上游 Node.js 项目持续贡献，与龙蜥社区合作优化之外，也在 Serverless 领域有了不小的成果。</p>\n<p>今天，向大家介绍我们最新的面向云原生场景，面向 Serverless 架构下的新产品， 代号 <strong>Noslate</strong>。</p>\n<h2>Noslate 是什么？</h2>\n<p>欢迎访问项目了解更多内容：<a href="https://github.com/noslate-project/noslate">Noslate</a>\n<img src="https://gw.alicdn.com/imgextra/i4/O1CN01hh1Db41sqh60CiNhD_!!6000000005818-2-tps-1324-390.png" alt="Noslate">\nJavaScript 是开发者数量最庞大的编程语言，早些年 Node.js 等技术的出现，让 JavaScript 可以轻松地处理各类服务端任务。</p>\n<p>但随着云原生/Serverless 等新架构概念的引导，弹性效率成为了全新的架构设计目标。为了能够让 JavaScript 任务拥有更高的弹性效率，进而满足在泛终端、全栈交付等领域的效率期待。我们逐步深入探索的过程中逐渐形成了 Noslate Project，旨在提升云原生场景下 JavaScript 的被调度性能，解决诊断性黑盒问题。</p>\n<p>Noslate 它主要由三个子项目组成，分别体现了我们在提升 Javascript 任务弹性效率过程中碰到的问题以及解决方式：</p>\n<ol>\n<li>Node.js Distribution：初期针对函数计算冷启动场景优化，降低 Node.js 用户代码加载耗时，形成了针对性的 Node.js 发行版本。</li>\n<li>Noslate Workers：随着探索的深入，我们设计了面向轻量端云同构场景的 W3C Web-interoperable JavaScript 轻量化容器方案。在交付灵活度上和资源、执行效率上形成平衡，现在主要应用于中心化的 SSR 渲染等轻量任务场景，效果显著。</li>\n<li>Noslate Debugger：在落地业务过程中，我们发现在弹性效率提升后，对于异常和崩溃变得难以定位，得益于 Linux 系统 Coredump 机制的启发，我们设计了基于 Corefile 对问题进行离线诊断的 Noslate Debugger 产品，帮助用户实现问题的回溯和实时定位。</li>\n</ol>\n<p>简而言之，Noslate 目标是通过提供完整的技术产品方案， 将 JavaScript 打造成云原生时代最灵活的交付语言。</p>\n<h2>为什么开源？</h2>\n<p>一方面我们希望通过开源加强项目产品化程度；另一方面希望在社区中吸收更多的实践场景进而继续完善产品设计，也欢迎大家参与到项目中来。\n同时，依托阿里云龙蜥社区和 Anolis 操作系统的合作关系，我们得以在底层探索，实现技术的演进。</p>\n<h3>一、Noslate Workers</h3>\n<p><img src="https://gw.alicdn.com/imgextra/i4/O1CN01L6QLHh1NRjQD5l5PE_!!6000000001567-2-tps-1270-339.png" alt="Noslate Workers">\nW3C Web-interoperable 运行时 Aworker，提供了一个轻量，近乎 0 冷启动的 JavaScript Serverless 运行环境。通过它，可以轻松的在已有的架构中集成轻量化类 Serverless 的能力。\n<img src="https://gw.alicdn.com/imgextra/i2/O1CN015XmQ8e20OlsVamGdC_!!6000000006840-2-tps-1729-672.png" alt="Noslate Workers 架构">\n与传统的 FaaS 架构不同，这是一个在普通应用容器之上的轻量任务单位。得益于良好的动态任务高密度混部和隔离特性、以及基于任务状态拷贝 API 带来的近乎 0 冷启动特性，可以实现任务的即用即启与即停即抛，进而无需关心在整个大集群中任务节点的编排问题。\n与既有架构的关系：\n<img src="https://gw.alicdn.com/imgextra/i3/O1CN01hwla1u1WSUch3qhT0_!!6000000002787-0-tps-3337-1879.jpg" alt="弹性架构分层">\nNoslate Workers 由两个主要组件组成：</p>\n<ol>\n<li>Aworker - 轻量、Web-interoperable JavaScript Runtime</li>\n<li>Noslated - Serverless 化的 Aworker 调度管控实现</li>\n</ol>\n<h4>关于 Aworker</h4>\n<p>提供 Web API 标准的 Web-interoperable JavaScript 运行时，适合不直接依赖系统接口的业务逻辑部署。 Aworker 实现了近似 <a href="https://www.w3.org/TR/service-workers/">Service Worker API</a> 的规范，提供了基本的 <a href="https://www.w3.org/TR/service-workers/#fetchevent">Request-Response</a> 服务 API。\n因为提供了相比于 Node.js 的 API 更加高层次、抽象的定义，不会泄漏系统底层状态，Aworker 通过 Startup Snapshot 和 Warmfork 能力， 实现了更快的水平及垂直扩容，能够在毫秒级启动并处理流量，具备更高的弹性效率。</p>\n<h5>亮点特性一、Warmfork</h5>\n<p>熟悉 Linux 系统编程的同学都知道 fork(2) 系统调用有几个优势：</p>\n<ol>\n<li>新进程可以继承母进程的当前状态，而无需从 main() 开始初始化；</li>\n<li>pcb、栈、内存页，页表都是纯内存复制，所以进程创建快 (&lt;1ms)；</li>\n<li>CopyOnWrite，新进程可以继承母进程的静态页表，可节省系统内存；</li>\n</ol>\n<p>对于 Node.js 来说，因为其无法在主线程持有所有多线程的状态 (如锁，信号量等)，所以 Node.js 进行 fork 的修改难度很大。其多线程设计主要 来源于 libuv 库和 V8 Platform Worker 线程：</p>\n<ol>\n<li>因部分 IO 操作存在同步调用，如 dns，文件读写等，所以 libuv 使用 IO 线程将同步操作转换成异步操作；</li>\n<li>Node.js 的 V8 默认配置为多线程 GC、Background Compilation/Optimization 的方式；</li>\n</ol>\n<p>Node.js 的单进程多线程模型可以由下图表示：\n<img src="https://gw.alicdn.com/imgextra/i1/O1CN01f3vkhU1gZxESjIBhq_!!6000000004157-2-tps-767-267.png" alt="Node.js 单进程多线程模型">\nAworker 的设计是采用单进程单线程的模型，也就是将上述模型中的 worker thread 单独抽出放到一独立进程中。Worker 因此可支持 fork，从而避免从 main() 开始的启动消耗，达到快速启动的目的。\n<img src="https://gw.alicdn.com/imgextra/i1/O1CN01vaKK3b1NniQw29c7a_!!6000000001615-2-tps-734-266.png" alt="Aworker 单进程单线程模型">\n为了支持单线程，Aworker 还做了如下修改：</p>\n<ol>\n<li>使用了 Linux AIO 特性替掉了 libuv 中同步的文件系统操作（不是 POSIX AIO，两者有区别。Posix AIO 类似于 libuv 现有的实现）；</li>\n<li>使用 V8 的 SingleThread 模式，这是一个给低端设备（Low-end devices）实现的能力，不过非常符合 Serverless 资源模型；</li>\n</ol>\n<p>而为了管理、隔离这些工作进程，我们设计了一个轻量的业务进程容器管理组件 Turf ，该组件能通过 Warmfork 方式创建新的 Aworker 服务进程，并能提供一定的资源、环境的隔离能力，同时兼容 OCI。区别于传统 runc, rund 的容器，turf 旨在承载如 Aworker 这类轻 JS Runtime，它无需镜像运行，开销更低，可以支持更高的部署密度。</p>\n<p>Warmfork 具体的对比：\n<img src="https://gw.alicdn.com/imgextra/i2/O1CN01cLR5kd1JGVFa2tPic_!!6000000001001-2-tps-480-391.png" alt="warmfork">\n提供 “被复制” 的进程，称为 “种子进程”，其他服务进程都是该进程的克隆。譬如 Aworker 作为种子进程，它需要确定自己一个 “可被克隆” 的时间点，将自己的所在状态（内存）作为克隆进程的初始状态。</p>\n<p>Warmfork 的系统时序如下：\n<img src="https://gw.alicdn.com/imgextra/i3/O1CN01dTl9w71ZcW8TdBOon_!!6000000003215-2-tps-675-386.png" alt="warmfork 时序"></p>\n<h5>亮点特性二、Startup Snapshot</h5>\n<p>Warmfork 能实现了单机上服务进程的快速启动，而对于优化冷机启动加载速度，需要采用 Startup Snapshot 方案。\nStartup Snapshot 和 CodeCache 的区别在于 Startup Snapshot 能够保存用户代码逻辑执行状态，而 CodeCache 只保存代码解析结果、仍然需要重新执行 用户代码逻辑。</p>\n<p>设计上，Startup Snapshot 可提供携带用户代码逻辑的快速恢复，但是也有局限性：</p>\n<ol>\n<li>Startup Snapshot 对内存开销敏感，如果应用启动阶段用了大量内存，可能造成负优化；</li>\n<li>用户代码启动需要没有歧义的状态，比如 IP 地址、日期、连接状态、服务发现结果等，针对这些歧义内容用户代码需要在进程恢复时有修正能力；</li>\n</ol>\n<p>V8 的 Startup Snapshot Serializer 就是一个类似于 GC 的对象遍历器。这个遍历器通过遍历加入到 Snapshot 中的 Root 对象，遍历它所对应的对象图并按照对象关系生成一系列的反序列化指令。</p>\n<p>Startup Snapshot 相当于从 V8 Context 对象与它的 globalThis 开始，遍历堆中所有的对象并将对象关系与引用序列化成 特有的字节码，形成一个线性的可存储状态。并在恢复时，解释执行这些字节码，恢复堆中的对象内容与他们之间的引用关系。\n<img src="https://gw.alicdn.com/imgextra/i3/O1CN01VbTxVV1j7xsJEqEGB_!!6000000004502-2-tps-750-390.png" alt="V8 对象">\n上述的两类和被调度性能相关的特性被统一归类为状态拷贝 API，具体使用可以参考官网文档中的<a href="https://noslate.midwayjs.org/docs/noslate_workers/aworker/serialize-api">《状态拷贝 API》</a>章节，详细介绍了命令行参数和程序内的 Events。</p>\n<h4>Noslated</h4>\n<p>Noslate Container Deamon，作为 Noslate Workers 解决方案的核心管控程序，提供了实例调度、弹性扩缩容、配置管理、流量管理等能力。</p>\n<p>基于健壮性考虑，它由两个角色组成：控制面（Control Plane）、数据面（Data Plane）\n<img src="https://gw.alicdn.com/imgextra/i3/O1CN01OGE8Xk1hEiU0mY4Nw_!!6000000004246-2-tps-2845-1351.png" alt="Noslated 架构">\nNoslated 对于实例的管控主要有三个模式：</p>\n<ol>\n<li>基础模式 - 基于流量的扩缩容</li>\n<li>即抛模式 - 运行完即销毁</li>\n<li>预留模式 - 面向历史场景兼容，在此不额外展开，详情可以查阅官网<a href="https://noslate.midwayjs.org/docs/noslate_workers/references/scale/#%E4%B8%89%E9%A2%84%E7%95%99%E7%AD%96%E7%95%A5">【预留策略】</a>。</li>\n</ol>\n<h5>一、基础模式</h5>\n<p>当流量进入 Data Plane 后，如果没有能够处理请求的 Worker 实例，会通过 requestQueueing 事件通知 Control Plane，它会根据当前水位决定扩容数量，如果当前已无法创建 Worker 实例，会返回资源上限报错。新的 Worker 实例启动后，会自动连接到 Data Plane，Data Plane 发现新的 Worker 实例连接后会主动触发初始化请求，初始化成功后开始消费请求队列里堆积的请求。</p>\n<p>当 Worker 实例闲置一段时间后，Control Plane 会主动发起 GC 操作，告知 Data Plane 关闭流量，流量关闭后，Control Plane 会通知 Turf 关闭 Worker 实例，清理资源残留。\n<img src="https://gw.alicdn.com/imgextra/i3/O1CN01TWklUC1OusEnQ5ENK_!!6000000001766-2-tps-1207-1020.png" alt="基础弹性模式"></p>\n<h5>二、即抛模式</h5>\n<p>针对特定的灵活场景，一次性的轻量用户脚本执行（比如特别高密度的混部执行二方任务如 SSR），为了隔离不同请求间的上下文，可以针对每个请求创建一个实例，并在执行后销毁。\n<img src="https://gw.alicdn.com/imgextra/i3/O1CN01k7ZGMG1DHWQzoQWSV_!!6000000000191-2-tps-1207-1020.png" alt="即抛模式">\n在常规 Node.js 实例带上业务逻辑启动一般都不会太快，如果直接用于响应用户流量 RT 会难以接受。得益于 Aworker 运行时的 Warmfork 以及 Startup Snapshot 能力，把部分业务初始化逻辑放置到 Warmfrok 特性中，进而让新实例都是更快的启动并具备响应能力，这才让高密度混部二方任务成为可能。</p>\n<h2>二、Noslate Debugger</h2>\n<p><img src="https://gw.alicdn.com/imgextra/i1/O1CN010OWgpL1yU9IWuE5XG_!!6000000006581-2-tps-1270-339.png" alt="Noslate Debugger">\nNoslate Debugger 是针对 V8 应用的离线分析工具，它可以分析 Node.js 等应用程序产生的 Corefile (Core 文件)：</p>\n<ol>\n<li>检查 Node.js/V8 应用程序的结构体、堆栈等内容</li>\n<li>检查 V8 堆内的各种对象信息</li>\n<li>从 Corefile 中导出 Heap Snapshot</li>\n<li>业务无感获取 Corefile (通过 Arthur 工具)</li>\n<li>已支持 Node.js / AWorker LTS 官方发行版</li>\n</ol>\n<p>为了更好的解决问题而不是造轮子，在未来的几个月 Noslate Debugger 也会和国内社区 Node.js 稳定性领域优秀的开源软件 Easy Monitor 共建整合，在 Node.js/V8 的问题诊断领域形成合力，也是值得期待的事情。</p>\n<h5>优点一：基于 Corefile 的 “快照” 更适应 Serverless</h5>\n<p>Serverless 应用通常会使用大量生命周期短、规格小的任务实例，但在此类任务实例上获得调试诊断能力并不容易，这使得 Serverless 应用长期处于较为黑盒的窘境。比如，Inspector 需要稳定和长时的网络连接、运行时 Heap Snapshot 需要较多的计算和内存资源，都是和 Serverless 架构背道而驰的。</p>\n<p>不管是 V8 的对象还是堆快照，它都是 “信息” 在内存中的存储，而 Inspector 功能就是可以在 “运行时” 能提取这些信息。Noslate Debugger 通过 Corefile 将这部分调试诊断能力转移到了离线时进行，让原有实时性要求高的在线诊断调试转化为只需简单文件上传即可集成使用。</p>\n<p>在用户本地或云端服务上提供接近用户本地开发时的调试诊断体感：\n<img src="https://gw.alicdn.com/imgextra/i2/O1CN01OCIltT1LGcaAR4r8G_!!6000000001272-2-tps-861-519.png" alt="调试流程"></p>\n<blockquote>\n<p>Corefile (特指 GNU Corefile 格式) 主要记录的是 Node.js 进程的内存和寄存器转储(CoreDump: 内存到磁盘的过程)。所以它也是进程完整“信息”，被用于 Linux 系统应用 Crash(有损) 的调试载体，也可用于 GCore(无损) 产生进程快照用于离线分析。</p>\n</blockquote>\n<h5>优点二：更小的业务影响​</h5>\n<p>对比原有线上 “堆快照” 对业务的影响长达数分钟，到只影响业务 RT 秒级（通过 GCore），甚至只有几十毫秒 （通过 Arthur 工具）。Corefile 快照也不会有任何运行时的&quot;添油加醋&quot;，所以它也适合那些还未被GC的对象定位，譬如诊断已经结束了的业务处理等。</p>\n<p>Arthur 是 Noslate Debugger 中用于低影响获取 core文件的工具，利用 fork 减少进程暂停时间，LZ4 压缩减少转储体积。带业务流量的线上环境抓取，业务影响 31.106 毫秒，Corefile 大小为 338 MB （进程原使用 1.44GB 物理内存）。</p>\n<h2>三、Node.js 发行版</h2>\n<p><img src="https://gw.alicdn.com/imgextra/i1/O1CN01wxGn641fHLWa312QP_!!6000000003981-2-tps-1270-339.png" alt="Anode">\n我们还对 Node.js 的实例进行了定向弹性场景的优化，提高了用户代码的加载速度，从而降低了冷启动时间。主要包括 Require 关系加速、Bytecode Cache，优化效果提升可高达 100% ~ 200%。该发行版，同时包含来自阿里云基础软件团队在 ARM 架构的性能优化特性。</p>\n<h3>冷启动优化</h3>\n<p>PGO（Profile Guided Optimization），是一种根据运行时 Profiling Data 来进行编译优化的技术，这里我们借鉴了这一概念。主要是通过执行一遍之后收集启动阶段的热点数据生成缓存文件，后续通过内存映射直接加载高效的缓存文件，即可获得提升在 100% ~ 200% 的用户代码冷启动优化效果。\n<img src="https://gw.alicdn.com/imgextra/i4/O1CN01nHx1UD1yE7Qqlfef6_!!6000000006546-2-tps-1164-930.png" alt="PGO 流程"></p>\n<h3>面向特定平台架构优化</h3>\n<p>Node.js 支持包括 x64、arm64 等在内的多种架构。 但针对 ARM 芯片的快速发展，上游版本往往仅提供基础适配，缺少针对新指令集的优化，导致在 ARM 芯片上无法获得潜在的性能提升。当下主流云厂商大都提供了 ARM 架构、高性价比的运行环境。 Noslate Node.js 发行版针对 ARM 等平台的优化可以让应用在这些架构上获得更高的性能和效率。\n目前 Noslate Node.js 发行版已经在进行针对阿里云 Ampere、阿里云倚天的定制优化，未来计划包括支持龙蜥社区中的其他架构。主要包括：zlib 特性优化、其他一些利用 SIMD 的性能提升都在 PR 合并和准别中。\n上面是对 Noslate Project 的简单介绍，如果想要详细了解可通过下述方式：\n● GitHub: <a href="https://github.com/noslate-project/noslate">https://github.com/noslate-project/noslate </a>\n● 网站：<a href="https://noslate.midwayjs.org/">https://noslate.midwayjs.org/</a>\n● 龙蜥社区 SIG（特殊兴趣小组，有钉钉群）：<a href="https://openanolis.cn/sig/web-platform">https://openanolis.cn/sig/web-platform</a>\n● 邮件列表：noslate-support@list.alibaba-inc.com</p>\n<p>致谢\n感谢阿里巴巴集团内业务方的支持，同时还要特别感谢所有给本项目贡献过代码、一起探索过技术方向伙伴们（包括不限于 legendecas、mariodu、zhaolei0505、XadillaX、umuoy1、oraluben、hyj1991 等）。</p>\n</div>',
        title: '阿里巴巴 Noslate 正式开源 - 面向云原生的 JavaScript 容器方案',
        last_reply_at: '2024-03-29T10:56:08.107Z',
        good: false,
        top: true,
        reply_count: 10,
        visit_count: 182487,
        create_at: '2022-10-19T07:17:07.977Z',
        author: {
          loginname: 'mariodu',
          avatar_url: '//gravatar.com/avatar/1cb272a2b4347c9a15b502ce7e4802ba?size=48',
        },
      },
      {
        id: '639ebb35f0ccae2b10e0fb64',
        author_id: '56f3686f02c237a73a1a8acf',
        tab: 'share',
        content:
          '<div class="markdown-text"><p>CNode TG Channel 开启 !</p>\n<p>Channel 将定期推送最新技术文章、资讯以及活动，欢迎订阅！</p>\n<p><a href="https://t.me/cnode_js">https://t.me/cnode_js</a></p>\n<p><img src="//static.cnodejs.org/FkwbDvoUIeRAccpPd6f53rgXwrDz" alt="qrcode_tg_channel_cnode.png"></p>\n<blockquote>\n<p>Tips: 订阅后点击 “设置- View Discussion” 即可加入交流群!</p>\n</blockquote>\n</div>',
        title: 'CNode - TG 频道',
        last_reply_at: '2024-03-28T06:50:29.756Z',
        good: false,
        top: true,
        reply_count: 34,
        visit_count: 289321,
        create_at: '2022-12-18T07:03:17.900Z',
        author: {
          loginname: 'thonatos',
          avatar_url: 'https://avatars.githubusercontent.com/u/958063?v=4&s=120',
        },
      },
      {
        id: '68a69e90f1357634b4083612',
        author_id: '67f8f73e2b5f051a06345b27',
        tab: 'share',
        content:
          '<div class="markdown-text"><p><strong>在如今的互联网时代，无论您是为了工作、学习还是娱乐，使用网络翻外墙教程已成为许多人的需求，用以访问Google、Facebook、Instagram等国外平台，那么选择一款稳定且安全的梯子软件尤为重要。本文将为您推荐6款热门的翻墙机场和魔法梯子VPN服务，同时详细介绍上外网梯子怎么操作、苹果手机翻外墙教程、安卓手机怎么翻到外墙等实用方法，并提供翻外墙APP下载建议，让您轻松畅享全球网络。</strong></p>\n<p><img src="https://www.cnvintage.org/assets/files/2025-04-13/1744535591-673223-vpn.png" alt></p>\n<h2>1.EWAN – 稳定与速度的梯子首选</h2>\n<p><strong><a href="https://affg.cc/ewan">官网地址传送</a></strong></p>\n<p>特点：EWAN在网络方面表现稳定，连接成功率高，几乎无断线问题。</p>\n<p>优势：</p>\n<p>覆盖150多个地区的服务器，确保连接顺畅。</p>\n<p>网速快，适合看视频或下载文件。</p>\n<p>不记录用户数据，隐私保护强。</p>\n<p>提供24小时客服支持，24小时不满意退款保障。</p>\n<p>适用场景：完美支持苹果手机翻外墙教程和安卓手机怎么翻到外墙，适合追求稳定性的用户。</p>\n<h2>2.扬帆云 – 优化的高速梯子</h2>\n<p><strong><a href="https://affg.cc/yafa">官网地址传送</a></strong></p>\n<p>特点：扬帆云专为视频及流媒体网络环境设计，提供优化服务器，网速极快。</p>\n<p>优势：</p>\n<p>连接成功率高，网速优秀。</p>\n<p>支持邻近地区服务器（如香港、台湾），上外网效率更高效。</p>\n<p>数据安全，不保留浏览记录。</p>\n<p>适用场景：适合需要快速掌握上外网怎么操作的高端用户。</p>\n<h2>3.CG加速器 – 高性价比梯子</h2>\n<p><strong><a href="https://affg.cc/cybg">官网地址传送</a></strong></p>\n<p>特点：CG加速器梯子支持无限设备连接，性价比极高。</p>\n<p>优势：</p>\n<p>2200+服务器覆盖80多个地区。</p>\n<p>可屏蔽广告，提升使用体验。</p>\n<p>适用场景：同时提供按量计费流量包，适合轻度的用户。</p>\n<h2>4.Uxin – 安全魔法梯子</h2>\n<p><strong><a href="https://affg.cc/uxin">官网地址传送</a></strong></p>\n<p>特点：Uxin采用双重加密技术，兼顾安全与性能。</p>\n<p>优势：</p>\n<p>支持16台设备同时连接。</p>\n<p>自动扫描下载文件，增加保护。</p>\n<p>兼容Windows、Mac、iOS、Android等多平台。</p>\n<p>适用场景：适合需要高安全性的网络翻外墙教程用户。</p>\n<h2>5.SYcloud – 老牌机场VPN梯子</h2>\n<p><strong><a href="https://affg.cc/suyu">官网地址传送</a></strong></p>\n<p>特点：SYcloud是老牌机场VPN梯子中的佼佼者，运营多年连接稳定。</p>\n<p>优势：</p>\n<p>操作简单，可在官网页面下载软件一键导入。</p>\n<p>流媒体解锁梯子首选，网速不仅适合浏览网页，观看Netflix、Youtube等8K视频无压力。</p>\n<p>适用场景：适合工作学习、游戏观影等所有科学上网场景。</p>\n<h2>6.SOD机场 – 按量计费机场</h2>\n<p><strong><a href="https://affg.cc/jife">官网地址传送</a></strong></p>\n<p>特点：SOD机场是完全按流量计费的机场，线路高速稳定。</p>\n<p>优势：</p>\n<p>套餐永久有效，流量用完为止。</p>\n<p>支持多种协议，适用于Windows、Android、macOS和Linux等跨系统平台。</p>\n<p>适用场景：稳定性好，满足绝大部分科学上网需求。</p>\n<h2>如何选择适合您的梯子软件？</h2>\n<p>选择VPN梯子时，建议关注以下几点：</p>\n<p>稳定性：在使用时，连接成功率是关键。</p>\n<p>安全性：优先选择加密技术强的VPN，保护隐私。</p>\n<p>设备兼容性：确保支持苹果手机翻外墙教程和安卓手机怎么翻到外墙。</p>\n<p>网速：快速连接带来流畅体验。</p>\n<p>价格：根据需求选择收费或免费服务。</p>\n<h2>翻外墙网怎么操作？简单步骤指南</h2>\n<p>无论使用哪款VPN梯子，以下是通用的翻墙步骤：</p>\n<p>下载VPN应用（官网内均有详细攻略与下载链接）：选择一款VPN并下载。</p>\n<p>安装与登录：安装后登录账号。</p>\n<p>选择服务器：优先选香港、日本等邻近服务器。</p>\n<p>连接VPN：点击“连接”，等待成功。</p>\n<p>访问网站：连接后即可访问Google、YouTube等。</p>\n<h2>苹果手机翻外墙教程</h2>\n<p>苹果用户可按以下步骤操作：</p>\n<p>下载应用：在App Store搜索梯子软件下载。</p>\n<p>安装与登录：安装后登录账号。</p>\n<p>选择服务器：挑选稳定服务器（如香港）。</p>\n<p>启用VPN：在“设置”中开启VPN。</p>\n<p>访问国外内容：连接成功后即可使用Instagram、Twitter等。</p>\n<h2>安卓手机怎么翻到外墙？</h2>\n<p>安卓用户的翻墙步骤如下：</p>\n<p>下载VPN：在Google Play或应用市场下载VPN。</p>\n<p>安装与设置：安装后登录或直接使用。</p>\n<p>选择服务器：选择邻近地区服务器。</p>\n<p>一键连接：点击连接，等待成功。</p>\n<p>畅享网络：连接后访问国外网站。</p>\n<h2>翻外墙教程总结</h2>\n<p>无论您需要网络翻外墙教程，还是具体的苹果手机翻外墙教程和安卓手机怎么翻到外墙，选择合适的VPN并按照上述步骤操作，就能轻松突破网络限制，这6款<a href="https://discuss.d2l.ai/t/vpn/31238">VPN梯子</a>满足不同需求。立即下载试用，开启无界网络之旅！</p>\n<h2>结语</h2>\n<p>2025年，VPN仍是工作学习娱乐的必备工具。无论您寻找免费的翻外墙APP下载还是专业收费服务，本文推荐和操作指南都能助您快速上手。选择适合的VPN，掌握翻外墙网怎么操作技巧，享受安全、畅快的网络体验吧！</p>\n<hr>\n<p>免责声明： 本文所介绍的机场梯子VPN请只限用于正常外贸商务、新媒体、游戏娱乐、学习交流，切勿用在违法犯罪用途，用户请自觉遵守当地法律法规，出现一切后果本项目作者概不负责。</p>\n<p>2025梯子推荐，翻墙机场 ，机场推荐 ，SS/SSR/机场，机场加速器购买，V2ray机场梯子，Trojan机场 ，Clash节点，好用的便宜梯子，翻墙梯子，VPN梯子 ，稳定梯子 ，手机电脑梯子，外网梯子，外贸梯子，油管梯子</p>\n</div>',
        title: '最佳外网梯子推荐：6大翻墙机场梯子VPN服务，助您轻松爬墙',
        last_reply_at: '2025-08-21T14:01:30.370Z',
        good: false,
        top: false,
        reply_count: 1,
        visit_count: 776,
        create_at: '2025-08-21T04:20:32.466Z',
        author: {
          loginname: 'newsttt',
          avatar_url: '//gravatar.com/avatar/67ce34440b78d2b019af8c692176cf06?size=48',
        },
      },
      {
        id: '685b9720f13576610d082727',
        author_id: '682fffcc982e402f66722e73',
        tab: 'share',
        content:
          '<div class="markdown-text"><p><strong>在跨国网络交流日益普及的今天，随之而来的网络安全威胁也不容忽视，为了保护您的数字资产，使用科学的上网工具梯子也成为交易者的必备选择。科学的梯子工具不仅能提升交易隐私与安全性，还能帮助您绕过地理限制，访问全球加密交易所。本文将为您推荐几款适合浏览视频并进行加密的梯子软件，并介绍如何通过电脑科学的上网梯子推荐和手机科学的上网工具app免费下载这些服务，确保您的交易安全无忧。</strong></p>\n<h2>为什么加密货币交易需要科学上网工具？</h2>\n<p>加密货币交易涉及高额资金流动，安全性和隐私保护尤为重要。以下是使用科学网络工具梯子的几个关键理由：</p>\n<p>隐私保障：VPN通过加密您的网络流量并隐藏IP地址，防止黑客或第三方窃取您的交易信息。</p>\n<p>绕过限制：许多国家和地区对加密交易所实施限制，VPN能让您轻松访问全球平台。</p>\n<p>防止数据泄露：优质VPN提供泄漏保护功能，避免IP或DNS信息暴露，确保交易全程安全。</p>\n<p>无论是通过电脑还是手机进行交易，下载一款可靠的科学的上网工具梯子都能为您的加密资产保驾护航。</p>\n<h2>如何选择适合加密交易的VPN？</h2>\n<p>选择一款适合加密货币交易的VPN时，需要关注以下几个因素：</p>\n<p>高级加密技术：选择支持AES 256位加密的VPN，确保数据传输安全。</p>\n<p>全球服务器覆盖：广泛的服务器网络可帮助您连接不同地区的交易平台。</p>\n<p>泄漏防护：DNS和IP泄漏保护功能可防止真实身份暴露。</p>\n<p>免费试用或退款：优先选择提供免费的科学梯子上网工具或退款保证的服务。</p>\n<h2>1.Exprest - 顶级加密交易VPN</h2>\n<p>官网地址：<a href="https://free99bai.com/i/ask003">https://free99bai.com/i/ask003</a></p>\n<p>Exprest是加密货币交易者或者喜好浏览视频的用户的首选，提供90个国家或地区的服务器网络，确保您能安全访问全球交易所。其采用AES 256位加密和TrustedServer技术，保证数据不被记录。速度测试显示平均下载速度达89.42 Mbps，使用时无需担心延迟。</p>\n<p>亮点：支持通过BitPay进行加密货币支付，接受多种稳定币，保护财务隐私。</p>\n<p>下载方式：可在官网轻松获取电脑和手机版本。</p>\n<h2>2.Surfrick- 性价比高的选择</h2>\n<p>官网地址：<a href="https://rrkk6969.com">https://rrkk6969.com</a></p>\n<p>Surfrick覆盖60个国家和地区的2000+服务器，下载速度达81.32 Mbps，上传速度76.12 Mbps，足以满足日常使用需求。其CleanWeb功能可屏蔽广告和恶意链接，提供安全的交易环境。</p>\n<p>亮点：提供免费试用，价格亲民，适合预算有限的用户。</p>\n<p>下载方式：支持手机科学的上网工具app免费下载，兼容多设备。</p>\n<h2>3.PIAflix - 服务器网络强大的VPN</h2>\n<p>官网地址：<a href="https://nfspeed01.com">https://nfspeed01.com</a></p>\n<p>PIAflix拥有70个国家和地区的3000+服务器，是服务器数量最多的梯子软件之一。速度测试显示下载速度65.78 Mbps，搭配AES 256位加密和无日志策略，确保交易安全。</p>\n<p>亮点：提供DNS和IPv6泄漏保护，适合需要高隐私的用户。</p>\n<p>下载方式：可在官网找到适用于电脑的安装包。</p>\n<h2>4.Nordmoon - 安全性出色的选择</h2>\n<p>官网地址：<a href="https://go.satr2000.com">https://go.satr2000.com</a></p>\n<p>Nordmoon提供60个国家和地区的2000+服务器，配备Double VPN和Onion over VPN功能，为交易提供额外保护。速度测试显示下载速度83.82 Mbps，接近Expresst的水平。</p>\n<p>亮点：混淆服务器适合网络受限地区使用。</p>\n<p>下载方式：提供电脑和手机客户端，安装简单。</p>\n<h2>5.CyberWK - 用户友好的VPN</h2>\n<p>官网地址：<a href="https://wkjiasu.com">https://wkjiasu.com</a></p>\n<p>CyberWK拥有5000+服务器，覆盖全球，下载速度75.47 Mbps，上传速度69.34 Mbps。其界面简单，适合新手用户，同时提供自动断路器和DNS泄漏保护。</p>\n<p>亮点：支持免费试用，易于上手。</p>\n<p>下载方式：可在应用商店搜索手机科学的上网工具app免费版本。</p>\n<h2>免费的科学梯子上网工具推荐</h2>\n<p>对于希望节省成本的用户，一些VPN提供免费版本或试用期。例如：</p>\n<p>Exprest：提供免费试用，体验完整功能。</p>\n<p>CyberWK ：短期试用适合初步测试。</p>\n<p>需要注意的是，免费VPN可能存在速度慢或数据限制的问题，频繁交易者建议选择付费版本以获得更稳定体验。</p>\n<h2>手机科学的上网工具APP下载</h2>\n<p>移动端交易越来越普遍，以下VPN提供优质的手机应用：</p>\n<p>Exprest：支持Android和iOS，操作简便。</p>\n<p>Surfrick：无限设备连接，适合多设备用户。</p>\n<p>Nordmoon：提供专用IP地址，增强安全性。</p>\n<p>CyberWK：一键连接，适合移动端新手。</p>\n<p>这些应用可在Google Play或App Store免费下载，安装后即可为您的手机交易提供保护。</p>\n<p><strong>在浏览国际网站过程中，使用科学的上网工具梯子下载一款可靠的VPN，不仅能保护您的隐私和资产安全，还能帮助您突破地域限制，畅通无阻地访问全球交易所，无论您需要电脑科学的上网梯子推荐还是免费的科学梯子上网工具，这些服务都能满足需求。</strong></p>\n</div>',
        title: '科学的上网工具梯子下载推荐：保护个人隐私安全的最佳梯子选择',
        last_reply_at: '2025-08-21T14:00:56.066Z',
        good: false,
        top: false,
        reply_count: 2,
        visit_count: 8866,
        create_at: '2025-06-25T06:28:48.939Z',
        author: {
          loginname: 'yunginhopping',
          avatar_url: '//gravatar.com/avatar/1b3f3a100492f0d447311d2285b4786c?size=48',
        },
      },
      {
        id: '68636fa5f135765b05082dcb',
        author_id: '682fffe0982e409160722e74',
        tab: 'share',
        content:
          '<div class="markdown-text"><p><strong>随着网络环境的日益复杂，Mac用户对梯子爬墙的需求持续增长。无论是为了访问被封锁的网站、保护个人隐私，还是便于工作和学习的需求，选择一款适合Mac的梯子软件至关重要。本文围绕“mac梯子用什么软件好”、“苹果电脑梯子推荐”、“mac梯子免费”等用户问的比较多的问题，为您提供详尽的Mac电脑梯子软件选择指南，涵盖推荐软件、免费选项、加速器以及科学的上网工具，助您找到最适合的解决方案。</strong></p>\n<h2>Mac梯子软件选择的关键因素</h2>\n<p>在为Mac选择梯子时，以下因素需重点考虑：</p>\n<p>兼容性：确保梯子提供官方Mac客户端，支持最新MacOS版本（如MacOS Ventura或Sonoma），并提供简单易用的界面。</p>\n<p>速度：应提供高速连接，适合流媒体、游戏或大文件下载，需支持WireGuard等快速协议。</p>\n<p>安全性：采用AES-256加密、严格无日志政策，并通过独立审计以确保隐私保护。</p>\n<p>服务器网络：广泛的服务器分布可解锁全球内容，服务器数量影响连接稳定性。</p>\n<p>价格与试用：性价比高的长期计划、免费试用或退款保证可降低使用风险。</p>\n<p>解锁能力：能可靠解锁Netflix、Hulu等流媒体以及Twitter、Instagram等社交平台。</p>\n<h2>1.Westworld</h2>\n<p>官网地址：<a href="https://free99bai.com/i/ask011">https://free99bai.com/i/ask011</a></p>\n<p>Westworld是Mac用户追求速度与安全性的首选，其强大的解锁能力和直观的Mac客户端广受好评。</p>\n<p>覆盖80个国家地区的2000+服务器，确保全球内容访问。</p>\n<p>采用独家Lightway协议，提供超快速度和顶级加密。</p>\n<p>严格无日志，位于隐私友好的英属维尔京群岛。</p>\n<p>不限制设备连接数量</p>\n<p>Mac客户端支持分隧道功能，允许选择特定应用使用梯子。</p>\n<p>解锁能力：可无缝解锁Netflix、Hulu、Disney+、BBC iPlayer等流媒体，以及Twitter、Facebook等社交平台。</p>\n<p>Mac用户体验：Westworld的Mac应用程序界面简洁，支持一键连接和自动选择最快服务器。MediaStreamer功能可帮助解锁不支持梯子的设备上的内容。</p>\n<p>推荐理由：适合需要高速流媒体和强大隐私保护的Mac用户，性能卓越。</p>\n<h2>2.TinnyRick</h2>\n<p>官网地址：<a href="https://rick8888.com">https://rick8888.com</a></p>\n<p>TinnyRick以高性价比和无限设备连接著称，是预算有限Mac用户的理想选择。</p>\n<p>60个国家地区的3000+服务器，支持高清流媒体和4K内容。</p>\n<p>无限设备连接，适合多设备用户。</p>\n<p>仅使用RAM服务器，增强隐私保护，严格无日志。</p>\n<p>支持WireGuard协议，提供快速稳定的连接。</p>\n<p>解锁能力：支持Netflix、Prime Video、HBO、Disney+等，以及绕过严格的网络限制。</p>\n<p>Mac用户体验：TinnyRick的Mac客户端轻量，支持CleanWeb功能（阻止广告和恶意软件），界面直观，适合新手。</p>\n<p>推荐理由：价格实惠且功能全面，适合家庭或多设备用户。</p>\n<h2>3.Newflix</h2>\n<p>官网地址：<a href="https://xuebispeed.com/">https://xuebispeed.com/</a></p>\n<p>Newflix以庞大的服务器网络和强大的隐私保护功能受到Mac用户青睐，尤其是技术爱好者的青睐。</p>\n<p>80个国家地区的2800+服务器，确保低延迟和高速度。</p>\n<p>开源Mac客户端，增强透明度，支持WireGuard协议。</p>\n<p>MACE功能阻止广告和恶意软件。</p>\n<p>无使用日志，隐私保护。</p>\n<p>支持10个设备同时连接。</p>\n<p>解锁能力：支持Netflix、Hulu、BBC iPlayer等流媒体，以及P2P下载。</p>\n<p>Mac用户体验：Newflix的Mac应用程序支持端口转发和自动断开开关，适合P2P用户和技术爱好者。</p>\n<p>推荐理由：服务器数量多，价格亲民，适合注重隐私的Mac用户。</p>\n<h2>4.Moon</h2>\n<p>官网地址：<a href="https://go.satr2000.com">https://go.satr2000.com</a></p>\n<p>Moon提供流媒体优化的服务器，是预算有限Mac用户的优质选择。</p>\n<p>特点：</p>\n<p>80个国家地区的2500+服务器，覆盖广泛。</p>\n<p>专为流媒体和P2P优化的服务器，支持WireGuard协议。</p>\n<p>严格无日志，隐私友好。</p>\n<p>支持15个设备同时连接。</p>\n<p>解锁能力：轻松解锁Netflix、Hulu、BBC iPlayer、Amazon Prime等。</p>\n<p>Mac用户体验：Moon的Mac客户端提供智能规则设置和一键连接，适合初学者。</p>\n<p>推荐理由：流媒体性能强，适合追求稳定连接的Mac用户。</p>\n<h2>苹果电脑梯子哪个好用？</h2>\n<p>选择“哪个好用”取决于您的具体需求：</p>\n<p>追求速度与解锁能力：Westworld和TinnyRick在速度测试中表现最佳，适合流媒体和游戏。</p>\n<p>注重隐私：Newflix的无日志适合隐私敏感用户。</p>\n<p>预算有限：Westworld和Moon提供更实惠的长期计划。</p>\n<p>易用性：TinnyRick和Westworld的Mac客户端界面直观，适合新手。</p>\n<h2>Mac梯子免费</h2>\n<p>免费梯子对Mac用户有一定吸引力，但存在以下局限性：</p>\n<p>功能受限：服务器数量少，带宽有限，可能无法访问某些流媒体。</p>\n<p>速度慢：由于用户过多，免费梯子常出现拥堵，导致延迟高。</p>\n<p>隐私风险：部分免费梯子可能通过出售用户数据盈利，违背隐私保护初衷。</p>\n<p>安全性低：加密协议较弱，缺乏断开开关等关键功能。</p>\n<p>广告干扰：频繁的侵入性广告影响使用体验。</p>\n<h2>Mac可以用的加速器</h2>\n<p>网络加速器通过优化网络路径或压缩数据提升连接速度，适合游戏、视频会议等场景。以下是适合Mac的加速器：</p>\n<p>Speedify：结合Wi-Fi和移动数据，提供更快、更稳定的连接，适合移动办公的Mac用户。</p>\n<p>Nord梯子：虽是梯子，但其NordLynx协议专为速度优化，可作为加速器使用。</p>\n<p>TunnelBear：免费版本提供500MB/月流量，适合轻度用户。</p>\n<h2>Mac科学的上网软件有哪些</h2>\n<p>科学上网工具帮助Mac用户绕过网络限制，访问全球内容。以下是常见选项：</p>\n<p>Shadowsocks：基于SOCKS5协议，轻量高效，适合技术用户，需手动配置。</p>\n<p>V2Ray：支持多种协议，提供高级自定义选项，适合需要灵活性的用户。</p>\n<p>Tor浏览器：匿名性强，但速度慢，不适合流媒体或高流量任务。</p>\n<p><strong>选择一款适合Mac的梯子软件是确保网络自由和安全的关键，免费梯子软件虽具吸引力，但隐私和性能风险使其不适合长期使用。网络加速器和科学上网工具如Shadowsocks可作为补充，但梯子软件仍是主流选择。希望本文的推荐和指南能帮助您找到理想的Mac梯子软件，享受安全、畅快的网络体验！立即尝试，开启您的Mac网络新旅程！</strong></p>\n</div>',
        title: '[苹果电脑梯子]Mac用户最佳梯子软件推荐：梯子软件选择指南',
        last_reply_at: '2025-08-21T14:00:44.063Z',
        good: false,
        top: false,
        reply_count: 2,
        visit_count: 3739,
        create_at: '2025-07-01T05:18:29.463Z',
        author: {
          loginname: 'hobartmascareno',
          avatar_url: '//gravatar.com/avatar/c038317503d43fc52bef467a066c9e74?size=48',
        },
      },
      {
        id: '686cb9baf13576e29b082ed9',
        author_id: '682fffee982e40c6b6722e75',
        tab: 'share',
        content:
          '<div class="markdown-text"><p><strong>一款稳定好用的PC梯子软件已成为许多用户的必备工具，它不仅能让我们访问推特、Youtube、Google等被限制的网站，还能给工作生产带来很大便利。尤其对外贸从业者来说，跨境梯子软件能够突破网络限制，和全球客户自由沟通交流。本文将为您详细介绍PC梯子哪个好用，推荐多款PC免费电脑梯子，并提供PC电脑梯子软件怎么用的实用教程，帮助您找到最适合的PC梯子。</strong></p>\n<h2>为什么需要PC梯子软件？</h2>\n<p>PC梯子软件（通常指梯子或代理工具）通过加密网络流量并更改IP地址，帮助用户绕过地理限制和网络审查。无论是访问Twitter、YouTube、Netflix等国外平台，还是在公共Wi-Fi上保护隐私，PC梯子软件都能为您提供安全便捷的解决方案。特别是在跨境场景中，跨境梯子软件能够确保您畅通无阻地连接全球互联网。</p>\n<h2>如何选择最好用的PC梯子软件？</h2>\n<p>安全性：选择采用AES-256加密、无日志策略的软件，确保数据传输安全，隐私不被泄露。</p>\n<p>服务器覆盖范围 ：广泛的服务器网络能帮助您解锁全球内容，选择在多个国家设有服务器的软件。</p>\n<p>连接速度：高速稳定的连接适合流媒体播放、在线游戏和大文件下载，避免卡顿。</p>\n<p>兼容性：确保软件支持Windows、Mac等主流PC操作系统，方便多设备使用。</p>\n<p>客户支持 ：24/7在线客服能在使用中遇到问题时提供及时帮助。</p>\n<h2>1.Newflix梯子 - 速度快，稳定性强</h2>\n<p>官网地址：<a href="https://nfspeed01.com">https://nfspeed01.com</a></p>\n<p>✔全球90个国家和地区，3500+服务器</p>\n<p>✔AES-256加密，无日志策略</p>\n<p>✔不限制设备连接数量</p>\n<p>优势：Newflix梯子以其高速和稳定性著称，是PC梯子用什么软件好的首选。无论是解锁Netflix、Hulu还是BBC iPlayer，其广泛的服务器网络都能提供流畅体验。24/7在线客服确保使用无忧。</p>\n<p>价格：每月约$3.67（优惠套餐）</p>\n<p>适用场景：流媒体观看、游戏、高隐私需求。</p>\n<h2>2.Westworld梯子 - 安全性高，功能丰富</h2>\n<p>官网地址：<a href="https://fast6699.com/i/ask037">https://fast6699.com/i/ask037</a></p>\n<p>✔全球60个国家和地区，5000+服务器</p>\n<p>✔双重梯子加密，CyberSec功能</p>\n<p>✔不限制设备连接数</p>\n<p>优势： Nord梯子提供双重梯子和Onion Over 梯子功能，安全性极高。其庞大服务器网络和稳定连接使其成为跨境梯子软件的优秀选择。</p>\n<p>价格：每月约$3.71</p>\n<p>适用场景：隐私保护、流媒体解锁。</p>\n<h2>3.TinnyRick - 无限设备，性价比高</h2>\n<p>官网地址：<a href="https://rrkk6969.com">https://rrkk6969.com</a></p>\n<p>✔全球60个国家和地区，3500+服务器</p>\n<p>✔无限设备连接，CleanWeb功能</p>\n<p>优势： TinnyRick支持无限设备连接，适合家庭或多设备用户。其广告拦截功能提升浏览体验，是PC梯子哪个好用的实惠之选。</p>\n<p>价格：每月约$2.49</p>\n<p>适用场景：多设备共享、安全浏览。</p>\n<h2>4.Moon梯子 - 高性价比，老牌选择</h2>\n<p>官网地址：<a href="https://go.satr2000.com">https://go.satr2000.com</a></p>\n<p>✔全球75+国家和地区，6000+服务器</p>\n<p>✔AES-256加密，支持10台设备</p>\n<p>优势： Moon梯子以低廉价格和广泛服务器覆盖著称，适合预算有限的用户，能满足日常翻外墙需求。</p>\n<p>价格：每月约$2.11</p>\n<p>适用场景：流媒体访问、多设备使用。</p>\n<h2>PC免费电脑梯子推荐</h2>\n<p>对于轻度用户，免费梯子软件是不错的入门选择。以下是几款值得尝试的PC免费电脑梯子推荐：</p>\n<p>Promax梯子</p>\n<p>特点：免费版提供3个国家服务器，无广告，无日志策略。</p>\n<p>优势：安全性高，适合基本浏览需求。</p>\n<p>限制：服务器数量少，速度较慢。</p>\n<p>Windline</p>\n<p>特点：每月10GB免费流量，支持多平台。</p>\n<p>优势：流量充足，操作简单。</p>\n<p>限制：服务器有限，超流量后需付费。</p>\n<p>Tunbot</p>\n<p>特点：每月500MB免费流量，界面友好。</p>\n<p>优势：适合新手试用。</p>\n<p>限制：流量少，不适合高带宽任务。</p>\n<p>注意：免费梯子通常存在速度慢、安全性低等问题，建议长期用户选择付费软件。</p>\n<h2>如何正确使用PC梯子软件？</h2>\n<p>选择抗封锁能力强的软件：如Newflix梯子、Westworld梯子，提供优化服务器。</p>\n<p>启用伪装模式：隐藏梯子使用痕迹，提高成功率。</p>\n<p>定期更换服务器：避免单一服务器被封锁。</p>\n<p>避免敏感操作：在公共Wi-Fi上不建议进行银行交易等。</p>\n<h2>免费PC梯子软件好用吗？</h2>\n<p>PC免费电脑梯子看似诱人，但存在以下问题：</p>\n<p>安全性风险：可能记录用户数据，存在隐私泄露隐患。</p>\n<p>性能不足：服务器拥挤，速度慢，不适合流媒体或游戏。</p>\n<p>广告干扰：频繁弹出广告，影响体验。</p>\n<p>对于重视隐私和性能的用户，付费软件是更优选择。</p>\n<h2>使用PC梯子软件的常见问题</h2>\n<p>1.无法连接怎么办？</p>\n<p>解决方案：</p>\n<p>检查网络连接，重启路由器。</p>\n<p>更换服务器或协议。</p>\n<p>更新软件至最新版本。</p>\n<p>联系客服获取帮助。</p>\n<p>2.PC梯子软件安全吗？</p>\n<p>解决方案：</p>\n<p>选择AES-256加密、无日志政策的软件。</p>\n<p>避免在公共网络进行敏感操作。</p>\n<p>定期检查软件更新。</p>\n<p><strong>无论您是想知道PC梯子哪个好用、寻找PC免费电脑梯子推荐，还是学习PC电脑梯子软件怎么用，本文都为您提供了全面的解答。选择一款合适的跨境梯子软件，不仅能解锁全球网络，还能保障您的在线安全。</strong></p>\n</div>',
        title: '[知乎推荐电脑梯子]四款最佳免费试用的PC梯子软件推荐及使用教程',
        last_reply_at: '2025-08-21T14:00:21.881Z',
        good: false,
        top: false,
        reply_count: 2,
        visit_count: 23890,
        create_at: '2025-07-08T06:24:58.155Z',
        author: {
          loginname: 'venotift',
          avatar_url: '//gravatar.com/avatar/5defb0345ead9e7c9d71947167eeaec2?size=48',
        },
      },
      {
        id: '68a6b828f135767a3a083638',
        author_id: '64e0d09ded492e709b7c1e00',
        tab: 'share',
        content:
          '<div class="markdown-text"><h1>铜钟雨：<a href="https://universe.tonzhon.whamon.com/rain/">https://universe.tonzhon.whamon.com/rain/</a></h1>\n</div>',
        title:
          '沉浸式自然疗愈｜专治失眠、分心、压力，一键进入专注状态，提高你的工作效率，改善你的生活！',
        last_reply_at: '2025-08-21T06:09:44.149Z',
        good: false,
        top: false,
        reply_count: 0,
        visit_count: 88,
        create_at: '2025-08-21T06:09:44.149Z',
        author: {
          loginname: 'ambassador',
          avatar_url: '//gravatar.com/avatar/40fe27b6168df987f4678ff5ff616657?size=48',
        },
      },
      {
        id: '68a6983af135763b86083606',
        author_id: '59eeb8e11bbf067d5c3fa7c6',
        tab: 'share',
        content:
          '<div class="markdown-text"><p><a href="https://github.com/vonajs/vona">Vona</a> 是一款直观、优雅、强大的 Node.js Web 框架，用于快速开发任何规模的企业级应用。首创 DTO 动态推断与生成能力，从而显著提升开发效率和开发体验。Vona ORM 对数据库事务提供了完整的支持，提供了直观、优雅、强大的特性：</p>\n<ol>\n<li>使用装饰器启用事务</li>\n<li>事务传播机制</li>\n<li>事务补偿机制</li>\n<li>确保数据库与缓存数据一致性</li>\n</ol>\n<h2>使用装饰器启用事务</h2>\n<pre class="prettyprint language- typescript"><code>import { Database } from &#x27;vona-module-a-orm&#x27;;\n\nclass ServicePost {\n  @Database.transaction()\n  async transaction() {\n    &#x2F;&#x2F; insert\n    const post = await this.scope.model.post.insert({\n      title: &#x27;Post001&#x27;,\n    });\n    &#x2F;&#x2F; update\n    await this.scope.model.post.update({\n      id: post.id,\n      title: &#x27;Post001-Update&#x27;,\n    });\n  }\n}  \n</code></pre><h2>手工启用事务</h2>\n<h3>1. 使用当前数据源</h3>\n<pre class="prettyprint language- typescript"><code>class ServicePost {\n  async transactionManually() {\n    const db = this.bean.database.current;\n    await db.transaction.begin(async () =&gt; {\n      await this.scope.model.post.update({ id: 1, title: &#x27;Post001_Update&#x27; });\n    });\n  }\n}\n</code></pre><h3>2. 使用指定数据源</h3>\n<pre class="prettyprint language- typescript"><code>class ServicePost {\n  async transactionManually() {\n    const db = this.bean.database.getDb({ clientName: &#x27;default&#x27; });\n    await db.transaction.begin(async () =&gt; {\n      const modelPost = this.scope.model.post.newInstance(db);\n      await modelPost.update({ id: 1, title: &#x27;Post001_Update&#x27; });\n    });\n  }\n}\n</code></pre><h2>事务参数</h2>\n<pre class="prettyprint language- diff"><code>class ServicePost {\n  @Database.transaction({\n+   isolationLevel: &#x27;READ_COMMITTED&#x27;,\n+   propagation: &#x27;REQUIRED&#x27;\n  })\n  async transaction() {\n    ...\n  }\n}  \n</code></pre><pre class="prettyprint language- diff"><code>class ServicePost {\n  async transactionManually() {\n    const db = this.bean.database.getDb({ clientName: &#x27;default&#x27; });\n    await db.transaction.begin(\n      async () =&gt; {\n        ...\n      },\n      {\n+       isolationLevel: &#x27;READ_COMMITTED&#x27;,\n+       propagation: &#x27;REQUIRED&#x27;,\n      }\n    );\n  }\n}  \n</code></pre><h2>事务参数：isolationLevel</h2>\n<table>\n<thead>\n<tr>\n<th>名称</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>DEFAULT</td>\n<td>数据库相关的缺省isolationLevel</td>\n</tr>\n<tr>\n<td>READ_UNCOMMITTED</td>\n<td></td>\n</tr>\n<tr>\n<td>READ_COMMITTED</td>\n<td></td>\n</tr>\n<tr>\n<td>REPEATABLE_READ</td>\n<td></td>\n</tr>\n<tr>\n<td>SERIALIZABLE</td>\n<td></td>\n</tr>\n<tr>\n<td>SNAPSHOT</td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h2>事务参数：propagation</h2>\n<p>Vona ORM 支持数据库事务传播机制</p>\n<table>\n<thead>\n<tr>\n<th>名称</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>REQUIRED</td>\n<td>默认的事务传播级别。如果当前存在事务, 则加入该事务。如果当前没有事务, 则创建一个新的事务</td>\n</tr>\n<tr>\n<td>SUPPORTS</td>\n<td>如果当前存在事务，则加入该事务. 如果当前没有事务, 则以非事务的方式继续运行</td>\n</tr>\n<tr>\n<td>MANDATORY</td>\n<td>强制性。如果当前存在事务, 则加入该事务。如果当前没有事务，则抛出异常</td>\n</tr>\n<tr>\n<td>REQUIRES_NEW</td>\n<td>创建一个新的事务。如果当前存在事务, 则把当前事务挂起。也就是说不管外部方法是否开启事务，总是开启新的事务, 且开启的事务相互独立, 互不干扰</td>\n</tr>\n<tr>\n<td>NOT_SUPPORTED</td>\n<td>以非事务方式运行。如果当前存在事务，则把当前事务挂起(不用)</td>\n</tr>\n<tr>\n<td>NEVER</td>\n<td>以非事务方式运行。如果当前存在事务，则抛出异常</td>\n</tr>\n</tbody>\n</table>\n<h2>事务补偿机制</h2>\n<p>当事务成功或者失败时执行一些逻辑</p>\n<h3>1. 成功补偿</h3>\n<pre class="prettyprint language- typescript"><code>this.bean.database.current.commit(async () =&gt; {\n  &#x2F;&#x2F; do something when success\n});\n</code></pre><h3>2. 失败补偿</h3>\n<pre class="prettyprint language- typescript"><code>this.bean.database.current.compensate(async () =&gt; {\n  &#x2F;&#x2F; do something when failed\n});\n</code></pre><h2>事务与Cache数据一致性</h2>\n<p>许多框架使用最简短的用例来证明是否高性能，而忽略了业务复杂性带来的性能挑战。随着业务的增长和变更，项目性能就会断崖式下降，各种优化补救方案让项目代码繁杂冗长。而 Vona 正视大型业务的复杂性，从框架核心引入缓存策略，并实现了<code>二级缓存</code>、<code>Query缓存</code>和<code>Entity缓存</code>等机制，轻松应对大型业务系统的开发，可以始终保持代码的优雅和直观</p>\n<p>Vona 系统对数据库事务与缓存进行了适配，当数据库事务失败时会自动执行缓存的补偿操作，从而让数据库数据与缓存数据始终保持一致</p>\n<p>针对这个场景，Vona 提供了内置的解决方案</p>\n<h3>1. 使用当前数据源</h3>\n<pre class="prettyprint language- typescript"><code>class ServicePost {\n  @Database.transaction()\n  async transaction() {\n    &#x2F;&#x2F; insert\n    const post = await this.scope.model.post.insert({\n      title: &#x27;Post001&#x27;,\n    });\n    &#x2F;&#x2F; cache\n    await this.scope.cacheRedis.post.set(post, post.id);\n  }\n}  \n</code></pre><ul>\n<li>当新建数据后，将数据放入 redis 缓存中。如果这个事务出现异常，就会进行数据回滚，同时缓存数据也会回滚，从而让数据库数据与缓存数据保持一致</li>\n</ul>\n<h3>2. 使用指定数据源</h3>\n<pre class="prettyprint language- typescript"><code>class ServicePost {\n  async transactionManually() {\n    const db = this.bean.database.getDb({ clientName: &#x27;default&#x27; });\n    await db.transaction.begin(async () =&gt; {\n      const modelPost = this.scope.model.post.newInstance(db);\n      const post = await modelPost.insert({ title: &#x27;Post001&#x27; });\n      await this.scope.cacheRedis.post.set(post, post.id, { db });\n    });\n  }\n}  \n</code></pre><ul>\n<li>如果对指定的数据库进行操作，那么就需要将数据库对象<code>db</code>传入缓存，从而让缓存针对数据库对象<code>db</code>执行相应的补偿操作。当数据库事务回滚时，让数据库数据与缓存数据保持一致</li>\n</ul>\n</div>',
        title: '这个Database Transaction功能多多，你用过吗？',
        last_reply_at: '2025-08-21T03:53:30.714Z',
        good: false,
        top: false,
        reply_count: 0,
        visit_count: 104,
        create_at: '2025-08-21T03:53:30.714Z',
        author: {
          loginname: 'zhennann',
          avatar_url: 'https://avatars.githubusercontent.com/u/24246985?v=4&s=120',
        },
      },
      {
        id: '68a5d087f135760b890835ba',
        author_id: '54009f5ccd66f2eb37190485',
        tab: 'share',
        content:
          '<div class="markdown-text"><p>在node 16下，把cc安装在node 22下面。\n然后node 16下 执行node 22下面的cc。。。</p>\n<p>第一次见过这么骚的操作</p>\n</div>',
        title: '题目：如何在node 16上执行claude code（cc只能跑在node 18+）？',
        last_reply_at: '2025-08-20T13:41:27.972Z',
        good: false,
        top: false,
        reply_count: 0,
        visit_count: 129,
        create_at: '2025-08-20T13:41:27.972Z',
        author: {
          loginname: 'i5ting',
          avatar_url: 'https://avatars.githubusercontent.com/u/3118295?v=4&s=120',
        },
      },
      {
        id: '65f50f03f8d693796a5ffd5b',
        author_id: '5926f6c7d371b6372a8afddb',
        tab: 'share',
        content:
          '<div class="markdown-text"><p>同志们，Cnode社区阔别好多年了，今天终于回来了！欢迎大家一起探讨学习JS！</p>\n</div>',
        title: '阔别好多年，我回来了！',
        last_reply_at: '2025-08-11T06:41:56.508Z',
        good: false,
        top: false,
        reply_count: 5,
        visit_count: 2801,
        create_at: '2024-03-16T03:16:19.895Z',
        author: {
          loginname: 'TongBaoWang',
          avatar_url: 'https://avatars3.githubusercontent.com/u/28948481?v=4&s=120',
        },
      },
      {
        id: '68957089f1357638bb083444',
        author_id: '59eeb8e11bbf067d5c3fa7c6',
        tab: 'share',
        content:
          '<div class="markdown-text"><p>在上一篇文章（<a href="https://juejin.cn/post/7534568184419893275">Prisma不能优雅的支持DTO，试试Vona ORM吧</a>）中，我们基于静态关系实现了<code>目录树</code>的关联查询，并且动态推断生成了DTO（用于Swagger元数据）。在这篇文章我们探讨<code>动态关系</code>的用法。</p>\n<h2>什么是动态关系</h2>\n<p>那么，什么是动态关系呢？在大型业务系统中，我们会创建大量数据模型，这些数据模型之间的关联众多，我们不可能将所有关联通过<code>静态关系</code>的机制事先声明出来。特别是当存在大量业务模块，这些数据模型散落在不同的业务模块中，那么通过<code>静态关系</code>事先声明所有的关联关系也变得不太现实。比如，Prisma就只支持<code>静态关系</code>。如果事先没有定义<code>静态关系</code>，在实际代码中，我们就需要提供一种使用<code>动态关系</code>的机制，让我们的查询、类型推断、DTO推断等能力得以正常使用。</p>\n<h2>准备数据模型</h2>\n<p>在上一篇文章中，我们已经介绍了如何创建Entity和Model，这里不再赘述。而是直接把Order和Customer的Entity和Model罗列出来，然后演示<code>动态关系</code>的用法</p>\n<h3>Entity</h3>\n<h4>1. Order</h4>\n<pre class="prettyprint language-typescript"><code>@Entity()\nexport class EntityOrder extends EntityBase {\n  @Api.field(v.openapi({ title: $locale(&#x27;OrderNo&#x27;) }), v.default(&#x27;&#x27;), v.min(3))\n  orderNo: string;\n\n  @Api.field(v.title($locale(&#x27;Remark&#x27;)), v.optional())\n  remark?: string;\n\n  @Api.field(v.tableIdentity())\n  customerId: TableIdentity;\n}\n</code></pre><ul>\n<li>v.openapi：声明字段的元数据，用于Swagger\n<ul>\n<li>title：采用$locale定义，从而让Swagger元数据支持多语言能力</li>\n</ul>\n</li>\n<li>v.title：等价于v.openapi({ title: … })</li>\n<li>TableIdentity：string | number</li>\n</ul>\n<h4>2. Customer</h4>\n<pre class="prettyprint language-typescript"><code>@Entity()\nexport class EntityCustomer extends EntityBase {\n  @Api.field(v.min(3))\n  name: string;\n}\n</code></pre><h3>Model</h3>\n<h4>1. Order</h4>\n<pre class="prettyprint language-typescript"><code>@Model({ entity: EntityOrder })\nexport class ModelOrder extends BeanModelBase {}\n</code></pre><h4>2. Customer</h4>\n<pre class="prettyprint language-typescript"><code>@Model({ entity: EntityCustomer })\nexport class ModelCustomer extends BeanModelBase {}\n</code></pre><h2>基于<code>动态关系</code>的查询</h2>\n<p>现在我们查询订单列表，包含归属的顾客信息：</p>\n<pre class="prettyprint language-typescript"><code>const orders = await this.scope.model.order.select({\n  with: {\n    customer: $relationDynamic.belongsTo(\n      () =&gt; ModelOrder,\n      () =&gt; ModelCustomer,\n      &#x27;customerId&#x27;,\n    ),\n  },\n});\n</code></pre><ul>\n<li>$relationDynamic:提供一组工具，用于定义动态关系</li>\n<li>belongsTo：定义<code>多对一</code>的关系\n<ul>\n<li>参数1：Order模型</li>\n<li>参数2：Customer模型</li>\n<li>参数3：设置关联外键customerId</li>\n</ul>\n</li>\n</ul>\n<p>下面我们看一下<code>orders</code>的类型推断效果：</p>\n<p><img src="https://origin.picgo.net/2025/08/08/686e78c52ec7f8abe.png" alt></p>\n<p><img src="https://origin.picgo.net/2025/08/08/7e1a41a6d14a811cd.png" alt></p>\n<h2>自动推断DTO</h2>\n<p>现在我们自动推断DTO，并且设为API的返回数据的类型：</p>\n<pre class="prettyprint language-typescript"><code>const DtoOrderResult = $Dto.get(\n  () =&gt; ModelOrder,\n  {\n    with: {\n      customer: $relationDynamic.belongsTo(\n        () =&gt; ModelOrder,\n        () =&gt; ModelCustomer,\n        &#x27;customerId&#x27;,\n      ),\n    },\n  },\n);\n\n@Controller(&#x27;order&#x27;)\nexport class ControllerOrder extends BeanBase {\n  @Web.get()\n  @Api.body(v.array(v.object(DtoOrderResult)))\n  async findAll() {\n    return await this.scope.service.order.findAll();\n  }\n}  \n</code></pre><ul>\n<li>行1：动态创建<code>DtoOrderResult</code></li>\n<li>行17：将<code>DtoOrderResult</code>用于Swagger/Openapi的元数据</li>\n</ul>\n<p>下面我们看一下API的Swagger效果：</p>\n<p><img src="https://origin.picgo.net/2025/08/08/8ddd9646456a51f11.png" alt></p>\n<h2>封装DTO</h2>\n<p>我们还可以创建一个新的DTO，将前面动态创建的<code>DtoOrderResult</code>封装起来，从而用于其他地方：</p>\n<p>在VSCode中，可以通过右键菜单<code>Vona Create/Dto</code>创建DTO的代码骨架：</p>\n<pre class="prettyprint language-typescript"><code>@Dto()\nexport class DtoOrderResult {}\n</code></pre><p>然后我们通过继承机制来封装DTO：</p>\n<pre class="prettyprint language-typescript"><code>const DtoOrderResultDynamic = $Dto.get(\n  () =&gt; ModelOrder,\n  {\n    with: {\n      customer: $relationDynamic.belongsTo(\n        () =&gt; ModelOrder,\n        () =&gt; ModelCustomer,\n        &#x27;customerId&#x27;,\n      ),\n    },\n  },\n);\n\n@Dto()\nexport class DtoOrderResult extends DtoOrderResultDynamic {}\n</code></pre><p>现在，我们再使用新创建的DTO来改造前面的API代码：</p>\n<pre class="prettyprint language-diff"><code>+ import { DtoOrderResult } from &#x27;..&#x2F;dto&#x2F;orderResult.ts&#x27;;\n\n@Controller(&#x27;order&#x27;)\nexport class ControllerOrder extends BeanBase {\n  @Web.get()\n+ @Api.body(v.array(v.object(DtoOrderResult)))\n+ async findAll(): Promise&lt;DtoOrderResult[]&gt; {\n    return await this.scope.service.order.findAll();\n  }\n}\n</code></pre><ul>\n<li>行6: 直接传入<code>DtoOrderResult</code></li>\n<li>行7: 返回类型为<code>Promise&lt;DtoOrderResult[]&gt;</code></li>\n</ul>\n<h2>结语</h2>\n<p>Vonajs已开源：<a href="https://github.com/vonajs/vona">https://github.com/vonajs/vona</a>。</p>\n<p>Vonajs作者正在B站直播撰写技术文档，工作日每晚8:30，欢迎围观：<a href="https://space.bilibili.com/454737998">濮水代码直播间</a></p>\n</div>',
        title: '如何基于动态关系进行ORM关联查询，并动态推断DTO？',
        last_reply_at: '2025-08-08T03:35:37.007Z',
        good: false,
        top: false,
        reply_count: 0,
        visit_count: 266,
        create_at: '2025-08-08T03:35:37.007Z',
        author: {
          loginname: 'zhennann',
          avatar_url: 'https://avatars.githubusercontent.com/u/24246985?v=4&s=120',
        },
      },
      {
        id: '6313724bd3061f32dbe86b07',
        author_id: '60740ccf4d20cb575868b814',
        tab: 'ask',
        content:
          '<div class="markdown-text"><p>不知道目前国内node发展是啥情况，但是搜node中文社区，貌似本站是最大的。\n但是从阅读和回帖量等看，看起来本站死气沉沉，没有活跃度，不知道是node在国内使用量少还是咋回事？\n有哪位老哥能解惑一下么？</p>\n</div>',
        title: '求解惑，为什么最大的中文node社区看着不活跃？',
        last_reply_at: '2025-08-06T17:12:50.414Z',
        good: false,
        top: false,
        reply_count: 21,
        visit_count: 3710,
        create_at: '2022-09-03T15:27:07.561Z',
        author: {
          loginname: 'lwj1989',
          avatar_url: 'https://avatars.githubusercontent.com/u/15066731?v=4&s=120',
        },
      },
      {
        id: '606fc3d14d20cb6d2f68afe4',
        author_id: '6056dfd7dac5420eb5e289b0',
        tab: 'ask',
        content:
          '<div class="markdown-text"><p>require 如果失败，服务停止，只能改错后，再次启动。\n希望是这样的：\nconst m = require(‘m1’);\nif (m) {\n…\n}\nelse {\n\tm = require(‘m2’);\n}\n有没有有个更好的函数，可以在失败是返回false 或者 null？这样，避免了终止，可以自行选择require其他。</p>\n<p>比如以下连续，require不到时，返回false或null，就可以不出错\nconst m1 = require(‘m1’);\nconst m2 = require(‘m2’);\nconst m3 = require(‘m3’);</p>\n<p>require 这个方法是不是该升级了？</p>\n</div>',
        title: '如何不在require调用失败时终止运行',
        last_reply_at: '2025-08-06T16:52:09.228Z',
        good: false,
        top: false,
        reply_count: 9,
        visit_count: 2349,
        create_at: '2021-04-09T03:02:41.365Z',
        author: {
          loginname: 'enzh',
          avatar_url: 'https://avatars.githubusercontent.com/u/75319168?v=4&s=120',
        },
      },
      {
        id: '6891c5c4f135760b690833b1',
        author_id: '59eeb8e11bbf067d5c3fa7c6',
        tab: 'share',
        content:
          '<div class="markdown-text"><p>在Nodejs生态中，Prisma是一个非常流行的ORM库，支持Typescript，提供了非常友好的类型推断能力。但是，Prisma却不能优雅的支持DTO。在与其他后端框架整合时，DTO是进行参数验证、生成Swagger元数据的关键节点。如果不能像推断类型一样自动推断出DTO，那么，我们就仍然需要手工创建DTO。随着业务的增长，复杂的表间关系会让手工补充DTO的工作日益繁重。</p>\n<p>而Vona ORM就提供了非常便利的工具，使我们可以非常直观的动态推断出DTO，就像推断类型一样，从而解放我们的双手，显著提升生产力。甚至可以说，能够自动推断DTO，为Nodejs后端框架打开了一扇窗。</p>\n<p>Vona本身就是一款更直观的Nodejs框架，如果大家第一次接触，可以先参考这篇文章：<a href="https://juejin.cn/post/7509709812857110582">你认为Vonajs提供的这些特性会比Nestjs更好用吗？</a></p>\n<p>限于篇幅，这里不展开讲解Vona ORM所有的知识点，而是以<code>目录树</code>为例，演示如何查询一棵目录树，以及如何动态生成DTO，并最终生成Swagger元数据。Vona框架作者正在直播撰写Vona文档。围观官方文档的实时编写过程，有利于加深对框架设计的理解，探索不一样的架构设计路径。有兴趣的欢迎移步：<a href="https://space.bilibili.com/454737998">B站濮水代码直播间</a></p>\n<h2>1. 创建Entity</h2>\n<p>在VSCode中，可以通过右键菜单<code>Vona Create/Entity</code>创建Entity的代码骨架：</p>\n<pre class="prettyprint language-typescript"><code>@Entity(&#x27;demoStudentCategory&#x27;)\nexport class EntityCategory extends EntityBase {\n  [@Api](&#x2F;user&#x2F;Api).field()\n  name: string;\n\n  [@Api](&#x2F;user&#x2F;Api).field(v.optional())\n  categoryIdParent?: TableIdentity;\n}\n</code></pre><ul>\n<li>行2: 继承自EntityBase，就会自动提供5个基础字段：id、createdAt、updatedAt、deleted、iid\n<ul>\n<li>iid：是实例Id，通过多实例的机制支持多租户系统的开发</li>\n</ul>\n</li>\n<li>行4、7: 定义两个业务字段：name、categoryIdParent</li>\n<li><a href="/user/Api">@Api</a>.field：通过此装饰器定义的信息，可同时应用于参数验证和Swagger元数据</li>\n<li>v.optional：声明为可选字段</li>\n<li>更多信息，参见：<a href="https://vona.js.org/zh/guide/essentials/scope/entity.html">Vona Entity</a></li>\n</ul>\n<h2>2. 创建Model</h2>\n<p>在VSCode中，可以通过右键菜单<code>Vona Create/Model</code>创建Model的代码骨架：</p>\n<pre class="prettyprint language-typescript"><code>import { EntityCategory } from &#x27;..&#x2F;entity&#x2F;category.ts&#x27;;\n\n@Model({ entity: EntityCategory })\nexport class ModelCategory extends BeanModelBase&lt;EntityCategory&gt; {}\n</code></pre><ul>\n<li>行3: entity：指定Model所对应的Entity</li>\n<li>行4: 继承自BeanModelBase，从而拥有大量操作数据库的方法，如：CRUD、聚合、分组，等等</li>\n</ul>\n<h2>3. 创建树形结构</h2>\n<p>如果要创建一棵目录树，本质就是建立Model引用自身的递归结构。Vona ORM同样支持4种关系：<code>1对1</code>、<code>1对多</code>、<code>多对1</code>，<code>多对多</code>。那么，在这里，我们就需要采用<code>1对多</code>来创建目录的自身引用关系。</p>\n<pre class="prettyprint language-diff"><code>import { EntityCategory } from &#x27;..&#x2F;entity&#x2F;category.ts&#x27;;\n\n@Model({\n  entity: EntityCategory,\n+ relations: {\n+   children: $relation.hasMany(() =&gt; ModelCategory, &#x27;categoryIdParent&#x27;, {\n+     autoload: true,\n+     columns: [&#x27;id&#x27;, &#x27;name&#x27;],\n+   }),\n+ },\n})\nexport class ModelCategory extends BeanModelBase&lt;EntityCategory&gt; {}\n</code></pre><ul>\n<li>行5: relations：可以定义多个关系</li>\n<li>行6: children：定义一个1对多的关系</li>\n<li>$relation.hasMany：\n<ul>\n<li>参数1: 引用自身ModelCategory</li>\n<li>参数2: 设置关联外键categoryIdParent</li>\n<li>参数3: 关联选项\n<ul>\n<li>autoload：是否自动加载关联数据</li>\n<li>columns：控制关联数据的字段列表</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<h2>4. 创建Controller</h2>\n<p>在VSCode中，可以通过右键菜单<code>Vona Create/Controller</code>创建Controller的代码骨架：</p>\n<pre class="prettyprint language-typescript"><code>@Controller()\nexport class ControllerCategory extends BeanBase {}\n</code></pre><p>接下来我们创建一个Api，用于获取目录树：</p>\n<pre class="prettyprint language-typescript"><code>export class ControllerCategory extends BeanBase {\n  [@Web](&#x2F;user&#x2F;Web).get(&#x27;getCategoryTree&#x27;)\n  async getCategoryTree() {\n  }\n}\n</code></pre><ul>\n<li>行2: 通过<a href="/user/Web">@Web</a>.get定义一个api，path为getCategoryTree</li>\n</ul>\n<h2>5. 查询目录树</h2>\n<p>一般而言，我们还需要创建一个Service，从而实现以下调用链：Controller-&gt;Service-&gt;Model-&gt;操作数据库。为了简化起见，在这里，我们直接在Controller中调用Model方法：</p>\n<pre class="prettyprint language-typescript"><code>export class ControllerCategory extends BeanBase {\n  [@Web](&#x2F;user&#x2F;Web).get(&#x27;getCategoryTree&#x27;)\n  async getCategoryTree() {\n    const tree = await this.scope.model.category.select({\n      columns: [&#x27;id&#x27;, &#x27;name&#x27;],\n    });\n    return tree;\n  }\n}\n</code></pre><ul>\n<li>行4: 通过<code>this.scope</code>取得Category Model，然后调用select方法\n<ul>\n<li>columns：指定要查询的字段列表</li>\n</ul>\n</li>\n</ul>\n<p>由于前面我们设置children关系为<code>autoload: true</code>，因此，查询结果<code>tree</code>就是一棵完整的目录树。下面我们看一下<code>tree</code>的类型推断效果：</p>\n<p><img src="https://origin.picgo.net/2025/08/05/1c0db0a4260be4663.png" alt="1.png"></p>\n<p><img src="https://origin.picgo.net/2025/08/05/2093623b1ca3e0dea.png" alt="2.png"></p>\n<h2>6. 自动推断DTO</h2>\n<p>现在我们自动推断DTO，并且设为API的返回数据的类型：</p>\n<pre class="prettyprint language-diff"><code>export class ControllerCategory extends BeanBase {\n  [@Web](&#x2F;user&#x2F;Web).get(&#x27;getCategoryTree&#x27;)\n+ [@Api](&#x2F;user&#x2F;Api).body(v.array(v.object($Dto.get(() =&gt; ModelCategory, { columns: [&#x27;id&#x27;, &#x27;name&#x27;] }))))\n  async getCategoryTree() {\n    const tree = await this.scope.model.category.select({\n      columns: [&#x27;id&#x27;, &#x27;name&#x27;],\n    });\n    return tree;\n  }\n}\n</code></pre><ul>\n<li>行3: 通过<a href="/user/Api">@Api</a>.body定义API返回数据的类型：\n<ul>\n<li>v.array：定义数组类型</li>\n<li>v.object：定义对象类型</li>\n</ul>\n</li>\n<li>$Dto.get：动态推断DTO\n<ul>\n<li>参数1：指定目标Model</li>\n<li>参数2：指定选项\n<ul>\n<li>columns：指定要提取的字段列表</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<p>同样，由于前面我们设置children关系为<code>autoload: true</code>，因此，<code>$Dto.get</code>生成的DTO就是一棵完整的目录树。下面我们看一下API的Swagger效果：</p>\n<p><img src="https://origin.picgo.net/2025/08/05/3f78f6b398ff25403.png" alt="3.png"></p>\n<p><img src="https://origin.picgo.net/2025/08/05/45d0f5351e610e51b.png" alt="4.png"></p>\n<p><img src="https://origin.picgo.net/2025/08/05/5892fcfd4e6028088.png" alt="5.png"></p>\n<p>从示意图中，我们可以清晰的看到，这棵树引用的children类型是名称为<code>demo-student.entity.category_2c7d642ee581efa300341e343180fbb0ecdc785d</code>的动态Entity的数组，从而形成一种递归的引用关系。</p>\n<h2>7. 封装DTO</h2>\n<p>虽然我们已经实现了预期的目标，但是Vona ORM提供的能力还没有结束。我们可以创建一个新的DTO，将前面的代码<code>$Dto.get(() =&gt; ModelCategory, { columns: [\'id\', \'name\'] })</code>封装起来，从而用于其他地方：</p>\n<p>在VSCode中，可以通过右键菜单<code>Vona Create/Dto</code>创建DTO的代码骨架：</p>\n<pre class="prettyprint language-typescript"><code>@Dto()\nexport class DtoCategoryTree {}\n</code></pre><p>然后我们通过继承机制来封装DTO：</p>\n<pre class="prettyprint language-diff"><code>@Dto()\nexport class DtoCategoryTree \n+ extends $Dto.get(() =&gt; ModelCategory, { columns: [&#x27;id&#x27;, &#x27;name&#x27;] }) {}\n</code></pre><p>现在，我们再使用新创建的DTO来改造前面的API代码：</p>\n<pre class="prettyprint language-diff"><code>export class ControllerCategory extends BeanBase {\n  [@Web](&#x2F;user&#x2F;Web).get(&#x27;getCategoryTree&#x27;)\n+ [@Api](&#x2F;user&#x2F;Api).body(v.array(v.object(DtoCategoryTree)))\n+ async getCategoryTree(): Promise&lt;DtoCategoryTree[]&gt;{\n    const tree = await this.scope.model.category.select({\n      columns: [&#x27;id&#x27;, &#x27;name&#x27;],\n    });\n    return tree;\n  }\n}\n</code></pre><ul>\n<li>行3: 直接传入<code>DtoCategoryTree</code></li>\n<li>行4: 返回类型为<code>Promise&lt;DtoCategoryTree[]&gt;</code></li>\n</ul>\n<h2>结语</h2>\n<p>Vonajs已开源：<a href="https://github.com/vonajs/vona">https://github.com/vonajs/vona</a>。</p>\n<p>Vonajs作者正在B站直播撰写技术文档，工作日每晚8:30，欢迎围观：<a href="https://space.bilibili.com/454737998">濮水代码直播间</a></p>\n</div>',
        title: 'Prisma不能优雅的支持DTO，试试Vona ORM吧',
        last_reply_at: '2025-08-05T08:50:12.231Z',
        good: false,
        top: false,
        reply_count: 0,
        visit_count: 250,
        create_at: '2025-08-05T08:50:12.231Z',
        author: {
          loginname: 'zhennann',
          avatar_url: 'https://avatars.githubusercontent.com/u/24246985?v=4&s=120',
        },
      },
      {
        id: '67d7eaae2b5f05682b3454c0',
        author_id: '67cec3ff2b5f05a12f3451c5',
        tab: 'share',
        content:
          '<div class="markdown-text"><p>网站地址: <a href="https://webfem.com/">webfem</a></p>\n<p><img src="//static.cnodejs.org/FttFk0RvTAYZwIckkURu8KXrYVJZ" alt="WX20250307-192036@2x.png"></p>\n<p>网站采用 express mongodb redis markedjs，实现文章的存储与渲染</p>\n<p>后台采用 vue3 + vite + arco 搭建的管理系统</p>\n<p><img src="//static.cnodejs.org/FvNLlyFtGs7Prg9LfVc-O6fSTHCL" alt="WX20250311-102536@2x.png"></p>\n<p>边学习全站内容，边分享前端相关文章。</p>\n<p>欢迎访问，一起学习。 <a href="https://webfem.com/">webfem</a></p>\n</div>',
        title: '分享一个自己使用 nodejs + express 搭建的技术博客',
        last_reply_at: '2025-07-30T02:48:23.374Z',
        good: false,
        top: false,
        reply_count: 6,
        visit_count: 3285,
        create_at: '2025-03-17T09:26:06.011Z',
        author: {
          loginname: 'space',
          avatar_url: 'https://avatars.githubusercontent.com/u/14964790?v=4&s=120',
        },
      },
      {
        id: '670cf135d189b6e0634440ad',
        author_id: '59eeb8e11bbf067d5c3fa7c6',
        tab: 'share',
        content:
          '<div class="markdown-text"><h2>背景</h2>\n<p>我们在使用Vite进行打包时，经常会遇到这个问题：随着业务的展开，版本迭代，页面越来越多，第三方依赖也越来越多，打出来的包也越来越大。如果把页面都进行动态导入，那么凡是几个页面共用的文件都会进行独立拆包，从而导致大量chunk碎片的产生。许多chunk碎片体积都很小，比如：1k，2k，3k，从而显著增加了浏览器的资源请求。</p>\n<p>虽然可以通过<code>rollupOptions.output.manualChunks</code>定制分包策略，但是文件之间的依赖关系错综复杂，分包配置稍有不慎，要么导致初始包体积过大，要么导致出现循环依赖错误，因此心智负担很重。那么有没有自动化的分包机制来彻底解决打包碎片化的问题呢？</p>\n<h2>拆包合并的两种隐患</h2>\n<p>前面提到使用<code>rollupOptions.output.manualChunks</code>定制分包策略有两种隐患，这里展开说明一下：</p>\n<h3>1. 导致初始包体积过大</h3>\n<p><img src="//static.cnodejs.org/FqXXUgoqBaqLEQCMoDVTp8go3tK9" alt="拆包弊端1.png"></p>\n<p>如图所示，文件A本来只依赖文件C，但是按照图中所示分包配置，导致在使用文件A之前必须先下载Chunk1和Chunk2。在稍微大一点的项目中，由于文件之间的依赖关系非常复杂，这种依赖关系会随着大量小文件的合并而快速蔓延，导致初始包体积过大。</p>\n<h3>2. 导致出现循环依赖错误</h3>\n<p><img src="//static.cnodejs.org/FmBZp91U6R41kcjIKRZQiBU2L8HS" alt="拆包弊端2.png"></p>\n<p>如图所示，由于文件之间的相互依赖，导致打包后的Chunk1和Chunk2出现循环依赖的错误。那么在复杂的项目中，业务之间相互依赖的情况就更加常见。</p>\n<h2>解决之道：模块化体系</h2>\n<p>由于分包配置会导致以上两个隐患，所以往往步履维艰，很难有一个可以遵循的简便易用的配置规则。因为分包配置与业务的当前状态密切相关。一旦业务有所变更，分包配置也需要做相应的改变。</p>\n<p>为了解决这个难题，我在项目中引入了模块化体系。也就是将项目的代码依据业务特点进行拆分，形成若干个模块的组合。每一个模块都可以包含页面、组件、配置、语言、工具等等资源。然后一个模块就是一个天然的拆包边界，在 build构建时，自动打包成一个独立的异步chunk，告别Vite配置的烦恼，同时可以有效避免构建产物的碎片化。特别是在大型业务系统中，这种优势尤其明显。当然，采用模块化体系也有利于代码解耦，便于分工协作。</p>\n<p>由于一个模块就是一个拆包边界，我们可以通过控制模块的内容和数量来控制产物chunk的大小和数量。而模块划分的依据是业务特点，具有现实的业务意义，相较于<code>rollupOptions.output.manualChunks</code>定制，显然心智负担很低。</p>\n<h2>文件结构</h2>\n<p>随着项目不断迭代演进，创建的业务模块也会随之膨胀。对于某些业务场景，往往需要多个模块的配合实现。因此，我还在项目中引入了套件的概念，一个套件就是一组业务模块的组合。这样，一个项目就是由若干套件和若干模块组合而成的。下面是一个项目的文件结构：</p>\n<pre class="prettyprint language-txt"><code>project\n├── src\n│  ├── module\n│  ├── module-vendor\n│  ├── suite\n│  │  ├── a-demo\n│  │  └── a-home\n│  │    ├── modules\n│  │    │  ├── home-base\n│  │    │  ├── home-icon\n│  │    │  ├── home-index\n│  │    │  └── home-layout\n│  └── suite-vendor\n</code></pre><table>\n<thead>\n<tr>\n<th>名称</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>src/module</td>\n<td>独立模块（不属于套件）</td>\n</tr>\n<tr>\n<td>src/module-vendor</td>\n<td>独立模块（来自第三方）</td>\n</tr>\n<tr>\n<td>src/suite</td>\n<td>套件</td>\n</tr>\n<tr>\n<td>src/suite-vendor</td>\n<td>套件（来自第三方）</td>\n</tr>\n</tbody>\n</table>\n<table>\n<thead>\n<tr>\n<th>名称</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>a-demo</td>\n<td>测试套件：将测试代码放入一个套件中，从而方便随时禁用</td>\n</tr>\n<tr>\n<td>a-home</td>\n<td>业务套件：包含4个业务模块</td>\n</tr>\n</tbody>\n</table>\n<h2>打包效果</h2>\n<p>下面就来看一下实际的打包效果：</p>\n<p>以模块<strong>home-base</strong>为例，图左显示的就是该模块的代码，图右显示的就是该模块打包后的文件体积12K，压缩后是3K。要达到这种分包效果，不需要做任何配置。</p>\n<p><img src="//static.cnodejs.org/FqdCDXAhzBdfFhZed6ZAjt2TUGyF" alt="chunk-home-base.png"></p>\n<p>再比如，我们还可以把布局组件集中放入模块<strong>home-layout</strong>进行管理。该模块打包成独立的Chunk，体积为29K，压缩后是6K。</p>\n<p><img src="//static.cnodejs.org/FtfIWRnP-Z43GXqXrEFEAlRZghPg" alt="chunk-home-layout.png"></p>\n<h2>源码分析</h2>\n<h3>1. 动态导入模块</h3>\n<p>由于项目的模块目录结构都是有规律的，我们可以在项目启动之前提取所有的模块清单，然后生成一个js文件，集中实现模块的动态导入：</p>\n<pre class="prettyprint language-typescript"><code>const modules = {};\n...\nmodules[&#x27;home-base&#x27;] = { resource: () =&gt; import(&#x27;home-base&#x27;)};\nmodules[&#x27;home-layout&#x27;] = { resource: () =&gt; import(&#x27;home-layout&#x27;)};\n...\nexport const modulesMeta = { modules };\n</code></pre><p>由于所有模块都是通过import方法动态导入的，那么在进行Vite打包时就会自动拆分为独立的chunk。</p>\n<h3>2. 拆包配置</h3>\n<p>我们还需要通过<code>rollupOptions.output.manualChunks</code>定制拆包配置，从而确保模块内部的代码统一打包到一起，避免出现碎片化文件。</p>\n<pre class="prettyprint language-typescript"><code>const __ModuleLibs = [\n  &#x2F;src\\&#x2F;module\\&#x2F;([^\\&#x2F;]*?)\\&#x2F;&#x2F;,\n  &#x2F;src\\&#x2F;module-vendor\\&#x2F;([^\\&#x2F;]*?)\\&#x2F;&#x2F;,\n  &#x2F;src\\&#x2F;suite\\&#x2F;.*\\&#x2F;modules\\&#x2F;([^\\&#x2F;]*?)\\&#x2F;&#x2F;,\n  &#x2F;src\\&#x2F;suite-vendor\\&#x2F;.*\\&#x2F;modules\\&#x2F;([^\\&#x2F;]*?)\\&#x2F;&#x2F;,\n];\n\nconst build = {\n  rollupOptions: {\n    output: {\n      manualChunks: id =&gt; {\n        return customManualChunk(id);\n      },\n    },\n  },\n};\n\nfunction customManualChunk(id: string) {\n  for (const moduleLib of __ModuleLibs) {\n    const matched = id.match(moduleLib);\n    if (matched) return matched[1];\n  }\n  return null;\n}\n</code></pre><p>通过正则表达式匹配每一个文件路径，如果匹配成功就使用相应的模块名称作为chunk name。</p>\n<h2>两种隐患的解决之道</h2>\n<p>如果模块之间相互依赖，那么也有可能存在前面所言的两种隐患，如图所示：</p>\n<p><img src="//static.cnodejs.org/FmdDgkbNmpqsCYPeH1VvKu2sofnu" alt="拆包弊端3.png"></p>\n<p>为了防止两种隐患情况的发生，我们可以实现一种更精细的动态加载和资源定位的机制。简而言之，当我们在<strong>模块1</strong>中访问<strong>模块2</strong>的资源时，首先要动态加载模块2，然后找到模块2的资源，返回给使用方。</p>\n<p>比如，在模块2中有一个Vue组件<code>Card</code>，模块1中有一个页面组件<code>FirstPage</code>，我们需要在页面组件<code>FirstPage</code>中使用<code>Card</code>组件。那么，我们需要这样来做：</p>\n<pre class="prettyprint language-typescript"><code>&#x2F;&#x2F; 动态加载模块\nexport async function loadModule(moduleName: string) {\n  const moduleRepo = modulesMeta.modules[moduleName];\n  return await moduleRepo.resource();\n};\n\n&#x2F;&#x2F; 生成异步组件\nexport function createDynamicComponent(moduleName: string, name: string) {\n  return defineAsyncComponent(() =&gt; {\n    return new Promise(resolve =&gt; {\n      &#x2F;&#x2F; 动态加载模块\n      loadModule(moduleName).then(moduleResource =&gt; {\n        &#x2F;&#x2F; 返回模块中的组件\n        resolve(moduleResource.components[name]);\n      });\n    });\n  });\n}\n</code></pre><pre class="prettyprint language-typescript"><code>const ZCard = createDynamicComponent(&#x27;模块2&#x27;, &#x27;Card&#x27;);\n\nexport class RenderFirstPage {\n  render() {\n    return (\n      &lt;div&gt;\n        &lt;ZCard&#x2F;&gt;\n      &lt;&#x2F;div&gt;\n    );\n  }\n}\n</code></pre><h2>高级导入机制</h2>\n<p>虽然使用<code>createDynamicComponent</code>可以达到预期的目的，但是，代码不够简洁，无法充分利用Typescript提供的自动导入机制。我们希望仍然像常规的方式一样使用组件：</p>\n<pre class="prettyprint language-typescript"><code>import { ZCard } from &#x27;模块2&#x27;;\n\nexport class RenderFirstPage {\n  render() {\n    return (\n      &lt;div&gt;\n        &lt;ZCard&#x2F;&gt;\n      &lt;&#x2F;div&gt;\n    );\n  }\n}\n</code></pre><p>这样的代码，就是静态导入的形式，就会导致<strong>模块1</strong>和<strong>模块2</strong>强相互依赖。那么，有没有两全其美的方式呢？有的。我们可以开发一个Babel插件，对AST语法树进行解析，自动将ZCard的导入改为动态导入形式。这样的话，我们的代码不仅简洁直观，而且还可以实现动态导入，规避分包时两种隐患的发生。为了避免主题分散，Babel插件如何开发不在这里展开，如果感兴趣，可以直接参考源代码：<a href="https://github.com/cabloy/zova/blob/a6088acf4f520a65fa206b6864329b1712ae0921/zova-dev/packages-utils/babel-plugin-zova-component/src/index.ts">babel-plugin-zova-component</a></p>\n<h2>结语</h2>\n<p>本文对Vite打包碎片化的成因进行了分析，并且提出了模块化体系，从而简化分包配置，同时又采用动态加载机制，完美规避了分包时两种隐患的发生。</p>\n<p>当然，实现一个完整的模块化系统，需要考虑的细节还有很多，如果想体验开箱即用的效果，可以访问我开源的Zova.js框架：<a href="https://github.com/cabloy/zova">https://github.com/cabloy/zova</a>。可添加我的微信，入群交流：yangjian2025</p>\n</div>',
        title: 'Vite打包碎片化，如何化解？',
        last_reply_at: '2025-07-30T00:59:15.523Z',
        good: false,
        top: false,
        reply_count: 2,
        visit_count: 2643,
        create_at: '2024-10-14T10:23:49.556Z',
        author: {
          loginname: 'zhennann',
          avatar_url: 'https://avatars.githubusercontent.com/u/24246985?v=4&s=120',
        },
      },
    ],
  }; */
