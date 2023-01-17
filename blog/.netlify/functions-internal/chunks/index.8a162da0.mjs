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
/* empty css                          *//* empty css                              */import 'clone-deep';
import 'slugify';
import 'shiki';
/* empty css                           */import 'camelcase';
/* empty css                              */import '@astrojs/rss';
/* empty css                           */import 'mime';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'path-browserify';
import 'path-to-regexp';

const metadata = { "headings": [], "source": 'At the Talkdesk Opentalk 2018 Conference, Deepgram had the opportunity to talk to leaders about customer care.\n\n<iframe src="https://www.youtube.com/embed/LX4PlTxK5P8" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>\n\nThe 2018 Talkdesk Opentalk conference made patent one fact: <mark>A.I. will revolutionize customer service.</mark> We at Deepgram were curious to get the pulse on what people thought of voice, CX and A.I. We interviewed fellow attendees and speakers at the 2018 Opentalk conference and discovered a few things.\n\n1. A.I. is series of technologies that will help surface cohesive insights in a multichannel world.\n2. [Customer-centric](https://blog.deepgram.com/how-to-become-a-customer-centric-organization/) companies know how to strategically use their voice data to understand their customers better.\n3. Voice is most powerful and information channel.\n4. A.I. technologies will transform voice, allowing teams to get more from [the voice data they already have](https://blog.deepgram.com/five-ways-to-use-speech-recognition-apis-to-empower-your-business/).\n\nTo hear more about cutting-edge industry trends, check out some [more footage from the conference](https://blog.deepgram.com/how-can-companies-extract-more-value-out-of-voice/).', "html": '<p>At the Talkdesk Opentalk 2018 Conference, Deepgram had the opportunity to talk to leaders about customer care.</p>\n<iframe src="https://www.youtube.com/embed/LX4PlTxK5P8" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen" />\n<p>The 2018 Talkdesk Opentalk conference made patent one fact: <mark>A.I. will revolutionize customer service.</mark> We at Deepgram were curious to get the pulse on what people thought of voice, CX and A.I. We interviewed fellow attendees and speakers at the 2018 Opentalk conference and discovered a few things.</p>\n<ol>\n<li>A.I. is series of technologies that will help surface cohesive insights in a multichannel world.</li>\n<li><a href="https://blog.deepgram.com/how-to-become-a-customer-centric-organization/">Customer-centric</a> companies know how to strategically use their voice data to understand their customers better.</li>\n<li>Voice is most powerful and information channel.</li>\n<li>A.I. technologies will transform voice, allowing teams to get more from <a href="https://blog.deepgram.com/five-ways-to-use-speech-recognition-apis-to-empower-your-business/">the voice data they already have</a>.</li>\n</ol>\n<p>To hear more about cutting-edge industry trends, check out some <a href="https://blog.deepgram.com/how-can-companies-extract-more-value-out-of-voice/">more footage from the conference</a>.</p>' };
const frontmatter = { "title": "What is the Most Important Channel to Engage Your Customers On?", "description": "The 2018 Talkdesk Opentalk conference made patent one fact: A.I. will revolutionize customer service. Learn how here.", "date": "2018-12-11T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1662069472/blog/what-is-the-most-important-channel-to-engage-your-customers-on/placeholder-post-image%402x.jpg", "authors": ["morris-gevirtz"], "category": "speech-trends", "tags": ["voice-strategy"], "seo": { "title": "What is the Most Important Channel to Engage Your Customers On?", "description": "" }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1662069472/blog/what-is-the-most-important-channel-to-engage-your-customers-on/placeholder-post-image%402x.jpg" }, "shorturls": { "share": "https://dpgr.am/b7484fd", "twitter": "https://dpgr.am/7efb009", "linkedin": "https://dpgr.am/a2dbb8d", "reddit": "https://dpgr.am/9ab6a68", "facebook": "https://dpgr.am/dcc327c" }, "astro": { "headings": [], "source": 'At the Talkdesk Opentalk 2018 Conference, Deepgram had the opportunity to talk to leaders about customer care.\n\n<iframe src="https://www.youtube.com/embed/LX4PlTxK5P8" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>\n\nThe 2018 Talkdesk Opentalk conference made patent one fact: <mark>A.I. will revolutionize customer service.</mark> We at Deepgram were curious to get the pulse on what people thought of voice, CX and A.I. We interviewed fellow attendees and speakers at the 2018 Opentalk conference and discovered a few things.\n\n1. A.I. is series of technologies that will help surface cohesive insights in a multichannel world.\n2. [Customer-centric](https://blog.deepgram.com/how-to-become-a-customer-centric-organization/) companies know how to strategically use their voice data to understand their customers better.\n3. Voice is most powerful and information channel.\n4. A.I. technologies will transform voice, allowing teams to get more from [the voice data they already have](https://blog.deepgram.com/five-ways-to-use-speech-recognition-apis-to-empower-your-business/).\n\nTo hear more about cutting-edge industry trends, check out some [more footage from the conference](https://blog.deepgram.com/how-can-companies-extract-more-value-out-of-voice/).', "html": '<p>At the Talkdesk Opentalk 2018 Conference, Deepgram had the opportunity to talk to leaders about customer care.</p>\n<iframe src="https://www.youtube.com/embed/LX4PlTxK5P8" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen" />\n<p>The 2018 Talkdesk Opentalk conference made patent one fact: <mark>A.I. will revolutionize customer service.</mark> We at Deepgram were curious to get the pulse on what people thought of voice, CX and A.I. We interviewed fellow attendees and speakers at the 2018 Opentalk conference and discovered a few things.</p>\n<ol>\n<li>A.I. is series of technologies that will help surface cohesive insights in a multichannel world.</li>\n<li><a href="https://blog.deepgram.com/how-to-become-a-customer-centric-organization/">Customer-centric</a> companies know how to strategically use their voice data to understand their customers better.</li>\n<li>Voice is most powerful and information channel.</li>\n<li>A.I. technologies will transform voice, allowing teams to get more from <a href="https://blog.deepgram.com/five-ways-to-use-speech-recognition-apis-to-empower-your-business/">the voice data they already have</a>.</li>\n</ol>\n<p>To hear more about cutting-edge industry trends, check out some <a href="https://blog.deepgram.com/how-can-companies-extract-more-value-out-of-voice/">more footage from the conference</a>.</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/what-is-the-most-important-channel-to-engage-your-customers-on/index.md" };
function rawContent() {
  return 'At the Talkdesk Opentalk 2018 Conference, Deepgram had the opportunity to talk to leaders about customer care.\n\n<iframe src="https://www.youtube.com/embed/LX4PlTxK5P8" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>\n\nThe 2018 Talkdesk Opentalk conference made patent one fact: <mark>A.I. will revolutionize customer service.</mark> We at Deepgram were curious to get the pulse on what people thought of voice, CX and A.I. We interviewed fellow attendees and speakers at the 2018 Opentalk conference and discovered a few things.\n\n1. A.I. is series of technologies that will help surface cohesive insights in a multichannel world.\n2. [Customer-centric](https://blog.deepgram.com/how-to-become-a-customer-centric-organization/) companies know how to strategically use their voice data to understand their customers better.\n3. Voice is most powerful and information channel.\n4. A.I. technologies will transform voice, allowing teams to get more from [the voice data they already have](https://blog.deepgram.com/five-ways-to-use-speech-recognition-apis-to-empower-your-business/).\n\nTo hear more about cutting-edge industry trends, check out some [more footage from the conference](https://blog.deepgram.com/how-can-companies-extract-more-value-out-of-voice/).';
}
function compiledContent() {
  return '<p>At the Talkdesk Opentalk 2018 Conference, Deepgram had the opportunity to talk to leaders about customer care.</p>\n<iframe src="https://www.youtube.com/embed/LX4PlTxK5P8" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen" />\n<p>The 2018 Talkdesk Opentalk conference made patent one fact: <mark>A.I. will revolutionize customer service.</mark> We at Deepgram were curious to get the pulse on what people thought of voice, CX and A.I. We interviewed fellow attendees and speakers at the 2018 Opentalk conference and discovered a few things.</p>\n<ol>\n<li>A.I. is series of technologies that will help surface cohesive insights in a multichannel world.</li>\n<li><a href="https://blog.deepgram.com/how-to-become-a-customer-centric-organization/">Customer-centric</a> companies know how to strategically use their voice data to understand their customers better.</li>\n<li>Voice is most powerful and information channel.</li>\n<li>A.I. technologies will transform voice, allowing teams to get more from <a href="https://blog.deepgram.com/five-ways-to-use-speech-recognition-apis-to-empower-your-business/">the voice data they already have</a>.</li>\n</ol>\n<p>To hear more about cutting-edge industry trends, check out some <a href="https://blog.deepgram.com/how-can-companies-extract-more-value-out-of-voice/">more footage from the conference</a>.</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/what-is-the-most-important-channel-to-engage-your-customers-on/index.md", "", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>At the Talkdesk Opentalk 2018 Conference, Deepgram had the opportunity to talk to leaders about customer care.</p>
<iframe src="https://www.youtube.com/embed/LX4PlTxK5P8" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
<p>The 2018 Talkdesk Opentalk conference made patent one fact: <mark>A.I. will revolutionize customer service.</mark> We at Deepgram were curious to get the pulse on what people thought of voice, CX and A.I. We interviewed fellow attendees and speakers at the 2018 Opentalk conference and discovered a few things.</p>
<ol>
<li>A.I. is series of technologies that will help surface cohesive insights in a multichannel world.</li>
<li><a href="https://blog.deepgram.com/how-to-become-a-customer-centric-organization/">Customer-centric</a> companies know how to strategically use their voice data to understand their customers better.</li>
<li>Voice is most powerful and information channel.</li>
<li>A.I. technologies will transform voice, allowing teams to get more from <a href="https://blog.deepgram.com/five-ways-to-use-speech-recognition-apis-to-empower-your-business/">the voice data they already have</a>.</li>
</ol>
<p>To hear more about cutting-edge industry trends, check out some <a href="https://blog.deepgram.com/how-can-companies-extract-more-value-out-of-voice/">more footage from the conference</a>.</p>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/what-is-the-most-important-channel-to-engage-your-customers-on/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
