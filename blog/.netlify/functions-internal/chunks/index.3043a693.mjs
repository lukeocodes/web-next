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

const metadata = { "headings": [{ "depth": 3, "slug": "about-mad-libs", "text": "About Mad Libs" }], "source": '<iframe src="https://www.youtube.com/embed/Hh9Og9reNBs" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>\n\nWhen the speech recognition API you use fails to recognize the words that matter to you, it produces absurd sounding and often useless transcripts. Such annoying (though sometimes funny) errors can be avoided by using a custom speech recognition model designed to understand your particular call data. [Accurate, custom speech recognition APIs](https://developers.deepgram.com/documentation/) can be the key to leveraging the full potential of your voice data.\n\n### About Mad Libs\n\n[Mad Libs](https://en.wikipedia.org/wiki/Mad_Libs) is a game created by Leonard Stern and Roger Price in 1952 and released in 1958. The premise is that players are asked to supply nouns, verbs, adjectives at random which are then filled into blanks. Upon reading, while the words make sense from a grammatical point-of-view, the stories are nonsense.', "html": '<iframe src="https://www.youtube.com/embed/Hh9Og9reNBs" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen" />\n<p>When the speech recognition API you use fails to recognize the words that matter to you, it produces absurd sounding and often useless transcripts. Such annoying (though sometimes funny) errors can be avoided by using a custom speech recognition model designed to understand your particular call data. <a href="https://developers.deepgram.com/documentation/">Accurate, custom speech recognition APIs</a> can be the key to leveraging the full potential of your voice data.</p>\n<h3 id="about-mad-libs">About Mad Libs</h3>\n<p><a href="https://en.wikipedia.org/wiki/Mad_Libs">Mad Libs</a> is a game created by Leonard Stern and Roger Price in 1952 and released in 1958. The premise is that players are asked to supply nouns, verbs, adjectives at random which are then filled into blanks. Upon reading, while the words make sense from a grammatical point-of-view, the stories are nonsense.</p>' };
const frontmatter = { "title": "Do Your Call Transcripts Read Like Mad Libs?", "description": "Find out how you can get transcripts that are readable by humans.", "date": "2018-12-13T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1662069472/blog/do-your-call-transcripts-read-like-mad-libs/placeholder-post-image%402x.jpg", "authors": ["morris-gevirtz"], "category": "ai-and-engineering", "tags": ["machine-learning", "voice-tech"], "seo": { "title": "Do Your Call Transcripts Read Like Mad Libs?", "description": "" }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1662069472/blog/do-your-call-transcripts-read-like-mad-libs/placeholder-post-image%402x.jpg" }, "shorturls": { "share": "https://dpgr.am/930f41a", "twitter": "https://dpgr.am/9c6307a", "linkedin": "https://dpgr.am/db80e3a", "reddit": "https://dpgr.am/b091cde", "facebook": "https://dpgr.am/3fba72a" }, "astro": { "headings": [{ "depth": 3, "slug": "about-mad-libs", "text": "About Mad Libs" }], "source": '<iframe src="https://www.youtube.com/embed/Hh9Og9reNBs" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>\n\nWhen the speech recognition API you use fails to recognize the words that matter to you, it produces absurd sounding and often useless transcripts. Such annoying (though sometimes funny) errors can be avoided by using a custom speech recognition model designed to understand your particular call data. [Accurate, custom speech recognition APIs](https://developers.deepgram.com/documentation/) can be the key to leveraging the full potential of your voice data.\n\n### About Mad Libs\n\n[Mad Libs](https://en.wikipedia.org/wiki/Mad_Libs) is a game created by Leonard Stern and Roger Price in 1952 and released in 1958. The premise is that players are asked to supply nouns, verbs, adjectives at random which are then filled into blanks. Upon reading, while the words make sense from a grammatical point-of-view, the stories are nonsense.', "html": '<iframe src="https://www.youtube.com/embed/Hh9Og9reNBs" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen" />\n<p>When the speech recognition API you use fails to recognize the words that matter to you, it produces absurd sounding and often useless transcripts. Such annoying (though sometimes funny) errors can be avoided by using a custom speech recognition model designed to understand your particular call data. <a href="https://developers.deepgram.com/documentation/">Accurate, custom speech recognition APIs</a> can be the key to leveraging the full potential of your voice data.</p>\n<h3 id="about-mad-libs">About Mad Libs</h3>\n<p><a href="https://en.wikipedia.org/wiki/Mad_Libs">Mad Libs</a> is a game created by Leonard Stern and Roger Price in 1952 and released in 1958. The premise is that players are asked to supply nouns, verbs, adjectives at random which are then filled into blanks. Upon reading, while the words make sense from a grammatical point-of-view, the stories are nonsense.</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/do-your-call-transcripts-read-like-mad-libs/index.md" };
function rawContent() {
  return '<iframe src="https://www.youtube.com/embed/Hh9Og9reNBs" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>\n\nWhen the speech recognition API you use fails to recognize the words that matter to you, it produces absurd sounding and often useless transcripts. Such annoying (though sometimes funny) errors can be avoided by using a custom speech recognition model designed to understand your particular call data. [Accurate, custom speech recognition APIs](https://developers.deepgram.com/documentation/) can be the key to leveraging the full potential of your voice data.\n\n### About Mad Libs\n\n[Mad Libs](https://en.wikipedia.org/wiki/Mad_Libs) is a game created by Leonard Stern and Roger Price in 1952 and released in 1958. The premise is that players are asked to supply nouns, verbs, adjectives at random which are then filled into blanks. Upon reading, while the words make sense from a grammatical point-of-view, the stories are nonsense.';
}
function compiledContent() {
  return '<iframe src="https://www.youtube.com/embed/Hh9Og9reNBs" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen" />\n<p>When the speech recognition API you use fails to recognize the words that matter to you, it produces absurd sounding and often useless transcripts. Such annoying (though sometimes funny) errors can be avoided by using a custom speech recognition model designed to understand your particular call data. <a href="https://developers.deepgram.com/documentation/">Accurate, custom speech recognition APIs</a> can be the key to leveraging the full potential of your voice data.</p>\n<h3 id="about-mad-libs">About Mad Libs</h3>\n<p><a href="https://en.wikipedia.org/wiki/Mad_Libs">Mad Libs</a> is a game created by Leonard Stern and Roger Price in 1952 and released in 1958. The premise is that players are asked to supply nouns, verbs, adjectives at random which are then filled into blanks. Upon reading, while the words make sense from a grammatical point-of-view, the stories are nonsense.</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/do-your-call-transcripts-read-like-mad-libs/index.md", "https://blog.deepgram.com/", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><iframe src="https://www.youtube.com/embed/Hh9Og9reNBs" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
<p>When the speech recognition API you use fails to recognize the words that matter to you, it produces absurd sounding and often useless transcripts. Such annoying (though sometimes funny) errors can be avoided by using a custom speech recognition model designed to understand your particular call data. <a href="https://developers.deepgram.com/documentation/">Accurate, custom speech recognition APIs</a> can be the key to leveraging the full potential of your voice data.</p>
<h3 id="about-mad-libs">About Mad Libs</h3>
<p><a href="https://en.wikipedia.org/wiki/Mad_Libs">Mad Libs</a> is a game created by Leonard Stern and Roger Price in 1952 and released in 1958. The premise is that players are asked to supply nouns, verbs, adjectives at random which are then filled into blanks. Upon reading, while the words make sense from a grammatical point-of-view, the stories are nonsense.</p>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/do-your-call-transcripts-read-like-mad-libs/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
