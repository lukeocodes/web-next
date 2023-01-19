import { c as createAstro, a as createComponent, r as renderTemplate, b as renderHead } from '../entry.mjs';
import Slugger from 'github-slugger';
import '@astrojs/netlify/netlify-functions.js';
import 'preact';
import 'preact-render-to-string';
import 'vue';
import 'vue/server-renderer';
import 'html-escaper';
import 'node-html-parser';
import 'axios';
/* empty css                           *//* empty css                           *//* empty css                           */import '@storyblok/js';
/* empty css                           *//* empty css                          */import 'clone-deep';
import 'slugify';
import 'shiki';
/* empty css                           */import 'camelcase';
import '@astrojs/rss';
/* empty css                           */import 'mime';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'path-browserify';
import 'path-to-regexp';

const metadata = { "headings": [{ "depth": 2, "slug": "deepgram-on-premises-improved-diarization-new-ways-to-invoke-models-and-streaming-callback-troubleshooting", "text": "Deepgram On-premises Improved Diarization, New Ways to Invoke Models, and Streaming Callback Troubleshooting" }], "source": '\n## Deepgram On-premises Improved Diarization, New Ways to Invoke Models, and Streaming Callback Troubleshooting\n\nI\u2019m pleased to announce the August release of Deepgram\u2019s on-prem ASR solution. The major feature included in the August release is support for the [improved Diarization](https://deepgram.com/changelog/introducing-improved-diarization/ "https://deepgram.com/changelog/introducing-improved-diarization/") with significantly improved accuracy which is language agnostic and supports our [generally available language models](https://developers.deepgram.com/documentation/features/language/ "https://developers.deepgram.com/documentation/features/language/").\n\nIn addition to improved Diarization, there are several user experience enhancements included in the August release. One such improvement is the ability to invoke a specific model via its `UUID`. A model\u2019s `UUID` value is visible in a given ASR response within the `model_info` JSON object, but the easiest way to view a model\u2019s `UUID` is by sending an HTTP GET request to the `/v2/models` endpoint in your on-prem deployment.\n\nFor example:\n\n```sh\n    curl -X GET \'http://localhost:8080/v2/models\'\n\n    {\n      "name": "general-enhanced",\n      "uuid": "125125fb-e391-458e-a227-a60d6426f5d6",\n      "version": "2022-05-18.0",\n      "tags": \\[],\n      "languages": \\[\n        "en",\n        "en-US"\n      ]\n    }\n    {\n      "name": "general-dQw4w9WgXcQ",\n      "uuid": "41757536-6114-494d-83fd-c2694524d80b",\n      "version": "2021-08-18",\n      "tags": \\[],\n      "languages": \\[]\n    }\n```\n\nAnother improvement is the ability to troubleshoot streaming callback responses which can be done by including the `inspect_response=true` parameter in the ASR request. This will send the contents of a transcription response to the original request connection in addition to the response callback to aid troubleshooting or debugging a streaming callback.\n\n```sh\n    curl \\\n      --request POST \\\n      --header \'Authorization: Token YOUR_DEEPGRAM_API_KEY\' \\\n      --header \'Content-Type: audio/wav\' \\\n      --data-binary @youraudio.wav \\\n      --url \'https://api.deepgram.com/v1/listen?callback=URL&inspect_response=true\'\n```\n\nFor a full list of changes included in the August release, head over to the [changelog](https://deepgram.com/changelog/deepgram-on-premise-release-220831/ "https://deepgram.com/changelog/deepgram-on-premise-release-220831/").\n\n', "html": '<h2 id="deepgram-on-premises-improved-diarization-new-ways-to-invoke-models-and-streaming-callback-troubleshooting">Deepgram On-premises Improved Diarization, New Ways to Invoke Models, and Streaming Callback Troubleshooting</h2>\n<p>I\u2019m pleased to announce the August release of Deepgram\u2019s on-prem ASR solution. The major feature included in the August release is support for the <a href="https://deepgram.com/changelog/introducing-improved-diarization/" title="https://deepgram.com/changelog/introducing-improved-diarization/">improved Diarization</a> with significantly improved accuracy which is language agnostic and supports our <a href="https://developers.deepgram.com/documentation/features/language/" title="https://developers.deepgram.com/documentation/features/language/">generally available language models</a>.</p>\n<p>In addition to improved Diarization, there are several user experience enhancements included in the August release. One such improvement is the ability to invoke a specific model via its <code is:raw>UUID</code>. A model\u2019s <code is:raw>UUID</code> value is visible in a given ASR response within the <code is:raw>model_info</code> JSON object, but the easiest way to view a model\u2019s <code is:raw>UUID</code> is by sending an HTTP GET request to the <code is:raw>/v2/models</code> endpoint in your on-prem deployment.</p>\n<p>For example:</p>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #C9D1D9">    curl -X GET </span><span style="color: #A5D6FF">&#39;http://localhost:8080/v2/models&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">    {</span></span>\n<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #A5D6FF">&quot;name&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;general-enhanced&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #A5D6FF">&quot;uuid&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;125125fb-e391-458e-a227-a60d6426f5d6&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #A5D6FF">&quot;version&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;2022-05-18.0&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #A5D6FF">&quot;tags&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #79C0FF">\\[</span><span style="color: #C9D1D9">],</span></span>\n<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #A5D6FF">&quot;languages&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #79C0FF">\\[</span></span>\n<span class="line"><span style="color: #C9D1D9">        </span><span style="color: #A5D6FF">&quot;en&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">        </span><span style="color: #A5D6FF">&quot;en-US&quot;</span></span>\n<span class="line"><span style="color: #C9D1D9">      ]</span></span>\n<span class="line"><span style="color: #C9D1D9">    }</span></span>\n<span class="line"><span style="color: #C9D1D9">    {</span></span>\n<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #A5D6FF">&quot;name&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;general-dQw4w9WgXcQ&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #A5D6FF">&quot;uuid&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;41757536-6114-494d-83fd-c2694524d80b&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #A5D6FF">&quot;version&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;2021-08-18&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #A5D6FF">&quot;tags&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #79C0FF">\\[</span><span style="color: #C9D1D9">],</span></span>\n<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #A5D6FF">&quot;languages&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #79C0FF">\\[</span><span style="color: #C9D1D9">]</span></span>\n<span class="line"><span style="color: #C9D1D9">    }</span></span></code></pre>\n<p>Another improvement is the ability to troubleshoot streaming callback responses which can be done by including the <code is:raw>inspect_response=true</code> parameter in the ASR request. This will send the contents of a transcription response to the original request connection in addition to the response callback to aid troubleshooting or debugging a streaming callback.</p>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #C9D1D9">    curl \\</span></span>\n<span class="line"><span style="color: #C9D1D9">      --request POST \\</span></span>\n<span class="line"><span style="color: #C9D1D9">      --header </span><span style="color: #A5D6FF">&#39;Authorization: Token YOUR_DEEPGRAM_API_KEY&#39;</span><span style="color: #C9D1D9"> \\</span></span>\n<span class="line"><span style="color: #C9D1D9">      --header </span><span style="color: #A5D6FF">&#39;Content-Type: audio/wav&#39;</span><span style="color: #C9D1D9"> \\</span></span>\n<span class="line"><span style="color: #C9D1D9">      --data-binary @youraudio.wav \\</span></span>\n<span class="line"><span style="color: #C9D1D9">      --url </span><span style="color: #A5D6FF">&#39;https://api.deepgram.com/v1/listen?callback=URL&amp;inspect_response=true&#39;</span></span></code></pre>\n<p>For a full list of changes included in the August release, head over to the <a href="https://deepgram.com/changelog/deepgram-on-premise-release-220831/" title="https://deepgram.com/changelog/deepgram-on-premise-release-220831/">changelog</a>.</p>' };
const frontmatter = { "title": "Just Released: New Version of On-Premises", "description": "Deepgram On-premises Improved Diarization, New Ways to Invoke Models, and Streaming Callback Troubleshooting", "date": "2022-09-14T22:57:29.350Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1663197013/devrel-on-premise-release-blog_1_ejgm2u.png", "authors": ["evan-henry"], "category": "announcement", "tags": ["on-prem"], "seo": { "title": "Deepgram On-premises Improved Diarization, New Ways to Invoke Models, and Streaming Callback Troubleshooting", "description": "Deepgram's August feature release includes support for improved diarization with significantly improved accuracy. Read more here!" }, "shorturls": { "share": "https://dpgr.am/ddbec84", "twitter": "https://dpgr.am/2b8667e", "linkedin": "https://dpgr.am/c760066", "reddit": "https://dpgr.am/8639e8d", "facebook": "https://dpgr.am/7d25d07" }, "astro": { "headings": [{ "depth": 2, "slug": "deepgram-on-premises-improved-diarization-new-ways-to-invoke-models-and-streaming-callback-troubleshooting", "text": "Deepgram On-premises Improved Diarization, New Ways to Invoke Models, and Streaming Callback Troubleshooting" }], "source": '\n## Deepgram On-premises Improved Diarization, New Ways to Invoke Models, and Streaming Callback Troubleshooting\n\nI\u2019m pleased to announce the August release of Deepgram\u2019s on-prem ASR solution. The major feature included in the August release is support for the [improved Diarization](https://deepgram.com/changelog/introducing-improved-diarization/ "https://deepgram.com/changelog/introducing-improved-diarization/") with significantly improved accuracy which is language agnostic and supports our [generally available language models](https://developers.deepgram.com/documentation/features/language/ "https://developers.deepgram.com/documentation/features/language/").\n\nIn addition to improved Diarization, there are several user experience enhancements included in the August release. One such improvement is the ability to invoke a specific model via its `UUID`. A model\u2019s `UUID` value is visible in a given ASR response within the `model_info` JSON object, but the easiest way to view a model\u2019s `UUID` is by sending an HTTP GET request to the `/v2/models` endpoint in your on-prem deployment.\n\nFor example:\n\n```sh\n    curl -X GET \'http://localhost:8080/v2/models\'\n\n    {\n      "name": "general-enhanced",\n      "uuid": "125125fb-e391-458e-a227-a60d6426f5d6",\n      "version": "2022-05-18.0",\n      "tags": \\[],\n      "languages": \\[\n        "en",\n        "en-US"\n      ]\n    }\n    {\n      "name": "general-dQw4w9WgXcQ",\n      "uuid": "41757536-6114-494d-83fd-c2694524d80b",\n      "version": "2021-08-18",\n      "tags": \\[],\n      "languages": \\[]\n    }\n```\n\nAnother improvement is the ability to troubleshoot streaming callback responses which can be done by including the `inspect_response=true` parameter in the ASR request. This will send the contents of a transcription response to the original request connection in addition to the response callback to aid troubleshooting or debugging a streaming callback.\n\n```sh\n    curl \\\n      --request POST \\\n      --header \'Authorization: Token YOUR_DEEPGRAM_API_KEY\' \\\n      --header \'Content-Type: audio/wav\' \\\n      --data-binary @youraudio.wav \\\n      --url \'https://api.deepgram.com/v1/listen?callback=URL&inspect_response=true\'\n```\n\nFor a full list of changes included in the August release, head over to the [changelog](https://deepgram.com/changelog/deepgram-on-premise-release-220831/ "https://deepgram.com/changelog/deepgram-on-premise-release-220831/").\n\n', "html": '<h2 id="deepgram-on-premises-improved-diarization-new-ways-to-invoke-models-and-streaming-callback-troubleshooting">Deepgram On-premises Improved Diarization, New Ways to Invoke Models, and Streaming Callback Troubleshooting</h2>\n<p>I\u2019m pleased to announce the August release of Deepgram\u2019s on-prem ASR solution. The major feature included in the August release is support for the <a href="https://deepgram.com/changelog/introducing-improved-diarization/" title="https://deepgram.com/changelog/introducing-improved-diarization/">improved Diarization</a> with significantly improved accuracy which is language agnostic and supports our <a href="https://developers.deepgram.com/documentation/features/language/" title="https://developers.deepgram.com/documentation/features/language/">generally available language models</a>.</p>\n<p>In addition to improved Diarization, there are several user experience enhancements included in the August release. One such improvement is the ability to invoke a specific model via its <code is:raw>UUID</code>. A model\u2019s <code is:raw>UUID</code> value is visible in a given ASR response within the <code is:raw>model_info</code> JSON object, but the easiest way to view a model\u2019s <code is:raw>UUID</code> is by sending an HTTP GET request to the <code is:raw>/v2/models</code> endpoint in your on-prem deployment.</p>\n<p>For example:</p>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #C9D1D9">    curl -X GET </span><span style="color: #A5D6FF">&#39;http://localhost:8080/v2/models&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">    {</span></span>\n<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #A5D6FF">&quot;name&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;general-enhanced&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #A5D6FF">&quot;uuid&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;125125fb-e391-458e-a227-a60d6426f5d6&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #A5D6FF">&quot;version&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;2022-05-18.0&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #A5D6FF">&quot;tags&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #79C0FF">\\[</span><span style="color: #C9D1D9">],</span></span>\n<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #A5D6FF">&quot;languages&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #79C0FF">\\[</span></span>\n<span class="line"><span style="color: #C9D1D9">        </span><span style="color: #A5D6FF">&quot;en&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">        </span><span style="color: #A5D6FF">&quot;en-US&quot;</span></span>\n<span class="line"><span style="color: #C9D1D9">      ]</span></span>\n<span class="line"><span style="color: #C9D1D9">    }</span></span>\n<span class="line"><span style="color: #C9D1D9">    {</span></span>\n<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #A5D6FF">&quot;name&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;general-dQw4w9WgXcQ&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #A5D6FF">&quot;uuid&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;41757536-6114-494d-83fd-c2694524d80b&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #A5D6FF">&quot;version&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;2021-08-18&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #A5D6FF">&quot;tags&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #79C0FF">\\[</span><span style="color: #C9D1D9">],</span></span>\n<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #A5D6FF">&quot;languages&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #79C0FF">\\[</span><span style="color: #C9D1D9">]</span></span>\n<span class="line"><span style="color: #C9D1D9">    }</span></span></code></pre>\n<p>Another improvement is the ability to troubleshoot streaming callback responses which can be done by including the <code is:raw>inspect_response=true</code> parameter in the ASR request. This will send the contents of a transcription response to the original request connection in addition to the response callback to aid troubleshooting or debugging a streaming callback.</p>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #C9D1D9">    curl \\</span></span>\n<span class="line"><span style="color: #C9D1D9">      --request POST \\</span></span>\n<span class="line"><span style="color: #C9D1D9">      --header </span><span style="color: #A5D6FF">&#39;Authorization: Token YOUR_DEEPGRAM_API_KEY&#39;</span><span style="color: #C9D1D9"> \\</span></span>\n<span class="line"><span style="color: #C9D1D9">      --header </span><span style="color: #A5D6FF">&#39;Content-Type: audio/wav&#39;</span><span style="color: #C9D1D9"> \\</span></span>\n<span class="line"><span style="color: #C9D1D9">      --data-binary @youraudio.wav \\</span></span>\n<span class="line"><span style="color: #C9D1D9">      --url </span><span style="color: #A5D6FF">&#39;https://api.deepgram.com/v1/listen?callback=URL&amp;inspect_response=true&#39;</span></span></code></pre>\n<p>For a full list of changes included in the August release, head over to the <a href="https://deepgram.com/changelog/deepgram-on-premise-release-220831/" title="https://deepgram.com/changelog/deepgram-on-premise-release-220831/">changelog</a>.</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/just-released-new-version-of-on-premises/index.md" };
function rawContent() {
  return '\n## Deepgram On-premises Improved Diarization, New Ways to Invoke Models, and Streaming Callback Troubleshooting\n\nI\u2019m pleased to announce the August release of Deepgram\u2019s on-prem ASR solution. The major feature included in the August release is support for the [improved Diarization](https://deepgram.com/changelog/introducing-improved-diarization/ "https://deepgram.com/changelog/introducing-improved-diarization/") with significantly improved accuracy which is language agnostic and supports our [generally available language models](https://developers.deepgram.com/documentation/features/language/ "https://developers.deepgram.com/documentation/features/language/").\n\nIn addition to improved Diarization, there are several user experience enhancements included in the August release. One such improvement is the ability to invoke a specific model via its `UUID`. A model\u2019s `UUID` value is visible in a given ASR response within the `model_info` JSON object, but the easiest way to view a model\u2019s `UUID` is by sending an HTTP GET request to the `/v2/models` endpoint in your on-prem deployment.\n\nFor example:\n\n```sh\n    curl -X GET \'http://localhost:8080/v2/models\'\n\n    {\n      "name": "general-enhanced",\n      "uuid": "125125fb-e391-458e-a227-a60d6426f5d6",\n      "version": "2022-05-18.0",\n      "tags": \\[],\n      "languages": \\[\n        "en",\n        "en-US"\n      ]\n    }\n    {\n      "name": "general-dQw4w9WgXcQ",\n      "uuid": "41757536-6114-494d-83fd-c2694524d80b",\n      "version": "2021-08-18",\n      "tags": \\[],\n      "languages": \\[]\n    }\n```\n\nAnother improvement is the ability to troubleshoot streaming callback responses which can be done by including the `inspect_response=true` parameter in the ASR request. This will send the contents of a transcription response to the original request connection in addition to the response callback to aid troubleshooting or debugging a streaming callback.\n\n```sh\n    curl \\\n      --request POST \\\n      --header \'Authorization: Token YOUR_DEEPGRAM_API_KEY\' \\\n      --header \'Content-Type: audio/wav\' \\\n      --data-binary @youraudio.wav \\\n      --url \'https://api.deepgram.com/v1/listen?callback=URL&inspect_response=true\'\n```\n\nFor a full list of changes included in the August release, head over to the [changelog](https://deepgram.com/changelog/deepgram-on-premise-release-220831/ "https://deepgram.com/changelog/deepgram-on-premise-release-220831/").\n\n';
}
function compiledContent() {
  return '<h2 id="deepgram-on-premises-improved-diarization-new-ways-to-invoke-models-and-streaming-callback-troubleshooting">Deepgram On-premises Improved Diarization, New Ways to Invoke Models, and Streaming Callback Troubleshooting</h2>\n<p>I\u2019m pleased to announce the August release of Deepgram\u2019s on-prem ASR solution. The major feature included in the August release is support for the <a href="https://deepgram.com/changelog/introducing-improved-diarization/" title="https://deepgram.com/changelog/introducing-improved-diarization/">improved Diarization</a> with significantly improved accuracy which is language agnostic and supports our <a href="https://developers.deepgram.com/documentation/features/language/" title="https://developers.deepgram.com/documentation/features/language/">generally available language models</a>.</p>\n<p>In addition to improved Diarization, there are several user experience enhancements included in the August release. One such improvement is the ability to invoke a specific model via its <code is:raw>UUID</code>. A model\u2019s <code is:raw>UUID</code> value is visible in a given ASR response within the <code is:raw>model_info</code> JSON object, but the easiest way to view a model\u2019s <code is:raw>UUID</code> is by sending an HTTP GET request to the <code is:raw>/v2/models</code> endpoint in your on-prem deployment.</p>\n<p>For example:</p>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #C9D1D9">    curl -X GET </span><span style="color: #A5D6FF">&#39;http://localhost:8080/v2/models&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C9D1D9">    {</span></span>\n<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #A5D6FF">&quot;name&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;general-enhanced&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #A5D6FF">&quot;uuid&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;125125fb-e391-458e-a227-a60d6426f5d6&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #A5D6FF">&quot;version&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;2022-05-18.0&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #A5D6FF">&quot;tags&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #79C0FF">\\[</span><span style="color: #C9D1D9">],</span></span>\n<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #A5D6FF">&quot;languages&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #79C0FF">\\[</span></span>\n<span class="line"><span style="color: #C9D1D9">        </span><span style="color: #A5D6FF">&quot;en&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">        </span><span style="color: #A5D6FF">&quot;en-US&quot;</span></span>\n<span class="line"><span style="color: #C9D1D9">      ]</span></span>\n<span class="line"><span style="color: #C9D1D9">    }</span></span>\n<span class="line"><span style="color: #C9D1D9">    {</span></span>\n<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #A5D6FF">&quot;name&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;general-dQw4w9WgXcQ&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #A5D6FF">&quot;uuid&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;41757536-6114-494d-83fd-c2694524d80b&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #A5D6FF">&quot;version&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;2021-08-18&quot;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #A5D6FF">&quot;tags&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #79C0FF">\\[</span><span style="color: #C9D1D9">],</span></span>\n<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #A5D6FF">&quot;languages&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #79C0FF">\\[</span><span style="color: #C9D1D9">]</span></span>\n<span class="line"><span style="color: #C9D1D9">    }</span></span></code></pre>\n<p>Another improvement is the ability to troubleshoot streaming callback responses which can be done by including the <code is:raw>inspect_response=true</code> parameter in the ASR request. This will send the contents of a transcription response to the original request connection in addition to the response callback to aid troubleshooting or debugging a streaming callback.</p>\n<pre is:raw class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #C9D1D9">    curl \\</span></span>\n<span class="line"><span style="color: #C9D1D9">      --request POST \\</span></span>\n<span class="line"><span style="color: #C9D1D9">      --header </span><span style="color: #A5D6FF">&#39;Authorization: Token YOUR_DEEPGRAM_API_KEY&#39;</span><span style="color: #C9D1D9"> \\</span></span>\n<span class="line"><span style="color: #C9D1D9">      --header </span><span style="color: #A5D6FF">&#39;Content-Type: audio/wav&#39;</span><span style="color: #C9D1D9"> \\</span></span>\n<span class="line"><span style="color: #C9D1D9">      --data-binary @youraudio.wav \\</span></span>\n<span class="line"><span style="color: #C9D1D9">      --url </span><span style="color: #A5D6FF">&#39;https://api.deepgram.com/v1/listen?callback=URL&amp;inspect_response=true&#39;</span></span></code></pre>\n<p>For a full list of changes included in the August release, head over to the <a href="https://deepgram.com/changelog/deepgram-on-premise-release-220831/" title="https://deepgram.com/changelog/deepgram-on-premise-release-220831/">changelog</a>.</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/just-released-new-version-of-on-premises/index.md", "https://blog.deepgram.com/", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><h2 id="deepgram-on-premises-improved-diarization-new-ways-to-invoke-models-and-streaming-callback-troubleshooting">Deepgram On-premises Improved Diarization, New Ways to Invoke Models, and Streaming Callback Troubleshooting</h2>
<p>I’m pleased to announce the August release of Deepgram’s on-prem ASR solution. The major feature included in the August release is support for the <a href="https://deepgram.com/changelog/introducing-improved-diarization/" title="https://deepgram.com/changelog/introducing-improved-diarization/">improved Diarization</a> with significantly improved accuracy which is language agnostic and supports our <a href="https://developers.deepgram.com/documentation/features/language/" title="https://developers.deepgram.com/documentation/features/language/">generally available language models</a>.</p>
<p>In addition to improved Diarization, there are several user experience enhancements included in the August release. One such improvement is the ability to invoke a specific model via its <code>UUID</code>. A model’s <code>UUID</code> value is visible in a given ASR response within the <code>model_info</code> JSON object, but the easiest way to view a model’s <code>UUID</code> is by sending an HTTP GET request to the <code>/v2/models</code> endpoint in your on-prem deployment.</p>
<p>For example:</p>
<pre class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #C9D1D9">    curl -X GET </span><span style="color: #A5D6FF">&#39;http://localhost:8080/v2/models&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C9D1D9">    {</span></span>
<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #A5D6FF">&quot;name&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;general-enhanced&quot;</span><span style="color: #C9D1D9">,</span></span>
<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #A5D6FF">&quot;uuid&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;125125fb-e391-458e-a227-a60d6426f5d6&quot;</span><span style="color: #C9D1D9">,</span></span>
<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #A5D6FF">&quot;version&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;2022-05-18.0&quot;</span><span style="color: #C9D1D9">,</span></span>
<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #A5D6FF">&quot;tags&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #79C0FF">\\[</span><span style="color: #C9D1D9">],</span></span>
<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #A5D6FF">&quot;languages&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #79C0FF">\\[</span></span>
<span class="line"><span style="color: #C9D1D9">        </span><span style="color: #A5D6FF">&quot;en&quot;</span><span style="color: #C9D1D9">,</span></span>
<span class="line"><span style="color: #C9D1D9">        </span><span style="color: #A5D6FF">&quot;en-US&quot;</span></span>
<span class="line"><span style="color: #C9D1D9">      ]</span></span>
<span class="line"><span style="color: #C9D1D9">    }</span></span>
<span class="line"><span style="color: #C9D1D9">    {</span></span>
<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #A5D6FF">&quot;name&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;general-dQw4w9WgXcQ&quot;</span><span style="color: #C9D1D9">,</span></span>
<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #A5D6FF">&quot;uuid&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;41757536-6114-494d-83fd-c2694524d80b&quot;</span><span style="color: #C9D1D9">,</span></span>
<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #A5D6FF">&quot;version&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #A5D6FF">&quot;2021-08-18&quot;</span><span style="color: #C9D1D9">,</span></span>
<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #A5D6FF">&quot;tags&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #79C0FF">\\[</span><span style="color: #C9D1D9">],</span></span>
<span class="line"><span style="color: #C9D1D9">      </span><span style="color: #A5D6FF">&quot;languages&quot;</span><span style="color: #C9D1D9">: </span><span style="color: #79C0FF">\\[</span><span style="color: #C9D1D9">]</span></span>
<span class="line"><span style="color: #C9D1D9">    }</span></span></code></pre>
<p>Another improvement is the ability to troubleshoot streaming callback responses which can be done by including the <code>inspect_response=true</code> parameter in the ASR request. This will send the contents of a transcription response to the original request connection in addition to the response callback to aid troubleshooting or debugging a streaming callback.</p>
<pre class="astro-code" style="background-color: #0d1117; overflow-x: auto;"><code><span class="line"><span style="color: #C9D1D9">    curl \\</span></span>
<span class="line"><span style="color: #C9D1D9">      --request POST \\</span></span>
<span class="line"><span style="color: #C9D1D9">      --header </span><span style="color: #A5D6FF">&#39;Authorization: Token YOUR_DEEPGRAM_API_KEY&#39;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">      --header </span><span style="color: #A5D6FF">&#39;Content-Type: audio/wav&#39;</span><span style="color: #C9D1D9"> \\</span></span>
<span class="line"><span style="color: #C9D1D9">      --data-binary @youraudio.wav \\</span></span>
<span class="line"><span style="color: #C9D1D9">      --url </span><span style="color: #A5D6FF">&#39;https://api.deepgram.com/v1/listen?callback=URL&amp;inspect_response=true&#39;</span></span></code></pre>
<p>For a full list of changes included in the August release, head over to the <a href="https://deepgram.com/changelog/deepgram-on-premise-release-220831/" title="https://deepgram.com/changelog/deepgram-on-premise-release-220831/">changelog</a>.</p>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/just-released-new-version-of-on-premises/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
