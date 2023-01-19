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

const metadata = { "headings": [{ "depth": 3, "slug": "best-of-breed-for-your-use-case", "text": "Best of Breed for Your Use Case" }, { "depth": 3, "slug": "real-time-speed-and-domain-specific-accuracy", "text": "Real-time Speed and Domain-Specific Accuracy" }], "source": "\r\nDeepgram is proud to be a founding member of [CallMiner's Open Voice Transcription Standard (OVTS)](https://callminer.com/news/press-releases/callminer-introduces-open-voice-transcription-standard-ovts). This standard programming framework enables CallMiner's customers to choose the best speech recognition provider for their use cases. The OVTS API allows an easier integration to any automatic speech recognition (ASR) solution to the CallMiner [Eureka](https://callminer.com/products/eureka) platform. The flexibility of this new standard provides organizations more options for ASR providers depending on use cases. Businesses are not locked into an ASR provider that is good for simple transcription summaries of phone calls but is poor at real-time transcriptions for call analytics and alerts. Now, they can use one ASR provider for phone call summaries and use a faster ASR provider for real-time call analytics and alerts.\r\n\r\n### **Best of Breed for Your Use Case**\r\n\r\nThis new standard follows the overall business trend away from the all-in-one platform solution to a flexible best-of-breed solution that can be tailored specifically to your business and use cases. These API-based best-of-breed solutions allow your organization to control your innovation roadmap.  You are no longer beholden to another company's innovation timeline, budget, or resources. You can now choose to upgrade or replace specific solutions on your timeline for new use case needs or to enter new markets.\r\n\r\n### **Real-time Speed and Domain-Specific Accuracy**\r\n\r\nFor CallMiner's customers, they can now easily implement Deepgram's End to End [AI Speech Platform](https://offers.deepgram.com/how-deepgram-works-whitepaper) with Eureka to get &lt;300-millisecond transcriptions for true real-time conversational analytics.  They can take advantage of Deepgram's [custom speech models](https://offers.deepgram.com/hubfs/Collateral/Deepgram-Speech%20Models-Product%20Sheet.pdf) to train a vertical, domain, and/or use the case-specific model that can reach 90%+ accuracy.  Deepgram's custom models are especially useful for keywords, terminology, jargon, and product or company names that are most important for conversational insights.  Finally, they can lower their overall Total Cost of Ownership (TCO) with our lower ASR cost and computing resource efficiency. With Deepgram, you don't need to compromise speed, accuracy, costs, or scalability. [Consider Deepgram](https://deepgram.com/contact-us) for your real-time ASR.\r\n", "html": '<p>Deepgram is proud to be a founding member of <a href="https://callminer.com/news/press-releases/callminer-introduces-open-voice-transcription-standard-ovts">CallMiner\u2019s Open Voice Transcription Standard (OVTS)</a>. This standard programming framework enables CallMiner\u2019s customers to choose the best speech recognition provider for their use cases. The OVTS API allows an easier integration to any automatic speech recognition (ASR) solution to the CallMiner <a href="https://callminer.com/products/eureka">Eureka</a> platform. The flexibility of this new standard provides organizations more options for ASR providers depending on use cases. Businesses are not locked into an ASR provider that is good for simple transcription summaries of phone calls but is poor at real-time transcriptions for call analytics and alerts. Now, they can use one ASR provider for phone call summaries and use a faster ASR provider for real-time call analytics and alerts.</p>\n<h3 id="best-of-breed-for-your-use-case"><strong>Best of Breed for Your Use Case</strong></h3>\n<p>This new standard follows the overall business trend away from the all-in-one platform solution to a flexible best-of-breed solution that can be tailored specifically to your business and use cases. These API-based best-of-breed solutions allow your organization to control your innovation roadmap.  You are no longer beholden to another company\u2019s innovation timeline, budget, or resources. You can now choose to upgrade or replace specific solutions on your timeline for new use case needs or to enter new markets.</p>\n<h3 id="real-time-speed-and-domain-specific-accuracy"><strong>Real-time Speed and Domain-Specific Accuracy</strong></h3>\n<p>For CallMiner\u2019s customers, they can now easily implement Deepgram\u2019s End to End <a href="https://offers.deepgram.com/how-deepgram-works-whitepaper">AI Speech Platform</a> with Eureka to get <300-millisecond transcriptions for true real-time conversational analytics.  They can take advantage of Deepgram\u2019s <a href="https://offers.deepgram.com/hubfs/Collateral/Deepgram-Speech%20Models-Product%20Sheet.pdf">custom speech models</a> to train a vertical, domain, and/or use the case-specific model that can reach 90%+ accuracy.  Deepgram\u2019s custom models are especially useful for keywords, terminology, jargon, and product or company names that are most important for conversational insights.  Finally, they can lower their overall Total Cost of Ownership (TCO) with our lower ASR cost and computing resource efficiency. With Deepgram, you don\u2019t need to compromise speed, accuracy, costs, or scalability. <a href="https://deepgram.com/contact-us">Consider Deepgram</a> for your real-time ASR.</p>' };
const frontmatter = { "title": "Deepgram is a Founding Member of CallMiner\u2019s Open Voice Transcription Standard (OVTS)", "description": "CallMiner has created a standard to provide flexibility in choosing the right speech recognition solution for your voice use case.", "date": "2021-05-27T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1661981372/blog/deepgram-is-a-founding-member-of-callminers-open-voice-transcription-standard-ovts/dg-founding-member-callminer-OVTS%402x.jpg", "authors": ["keith-lam"], "category": "dg-insider", "tags": ["call-miner"], "seo": { "title": "Deepgram is a Founding Member of CallMiner\u2019s Open Voice Transcription Standard (OVTS)", "description": "CallMiner has created a standard to provide flexibility in choosing the right speech recognition solution for your voice use case." }, "shorturls": { "share": "https://dpgr.am/705f9e2", "twitter": "https://dpgr.am/075fc6b", "linkedin": "https://dpgr.am/b7c4cd8", "reddit": "https://dpgr.am/8ee00c7", "facebook": "https://dpgr.am/17c6fe5" }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661981372/blog/deepgram-is-a-founding-member-of-callminers-open-voice-transcription-standard-ovts/dg-founding-member-callminer-OVTS%402x.jpg" }, "astro": { "headings": [{ "depth": 3, "slug": "best-of-breed-for-your-use-case", "text": "Best of Breed for Your Use Case" }, { "depth": 3, "slug": "real-time-speed-and-domain-specific-accuracy", "text": "Real-time Speed and Domain-Specific Accuracy" }], "source": "\r\nDeepgram is proud to be a founding member of [CallMiner's Open Voice Transcription Standard (OVTS)](https://callminer.com/news/press-releases/callminer-introduces-open-voice-transcription-standard-ovts). This standard programming framework enables CallMiner's customers to choose the best speech recognition provider for their use cases. The OVTS API allows an easier integration to any automatic speech recognition (ASR) solution to the CallMiner [Eureka](https://callminer.com/products/eureka) platform. The flexibility of this new standard provides organizations more options for ASR providers depending on use cases. Businesses are not locked into an ASR provider that is good for simple transcription summaries of phone calls but is poor at real-time transcriptions for call analytics and alerts. Now, they can use one ASR provider for phone call summaries and use a faster ASR provider for real-time call analytics and alerts.\r\n\r\n### **Best of Breed for Your Use Case**\r\n\r\nThis new standard follows the overall business trend away from the all-in-one platform solution to a flexible best-of-breed solution that can be tailored specifically to your business and use cases. These API-based best-of-breed solutions allow your organization to control your innovation roadmap.  You are no longer beholden to another company's innovation timeline, budget, or resources. You can now choose to upgrade or replace specific solutions on your timeline for new use case needs or to enter new markets.\r\n\r\n### **Real-time Speed and Domain-Specific Accuracy**\r\n\r\nFor CallMiner's customers, they can now easily implement Deepgram's End to End [AI Speech Platform](https://offers.deepgram.com/how-deepgram-works-whitepaper) with Eureka to get &lt;300-millisecond transcriptions for true real-time conversational analytics.  They can take advantage of Deepgram's [custom speech models](https://offers.deepgram.com/hubfs/Collateral/Deepgram-Speech%20Models-Product%20Sheet.pdf) to train a vertical, domain, and/or use the case-specific model that can reach 90%+ accuracy.  Deepgram's custom models are especially useful for keywords, terminology, jargon, and product or company names that are most important for conversational insights.  Finally, they can lower their overall Total Cost of Ownership (TCO) with our lower ASR cost and computing resource efficiency. With Deepgram, you don't need to compromise speed, accuracy, costs, or scalability. [Consider Deepgram](https://deepgram.com/contact-us) for your real-time ASR.\r\n", "html": '<p>Deepgram is proud to be a founding member of <a href="https://callminer.com/news/press-releases/callminer-introduces-open-voice-transcription-standard-ovts">CallMiner\u2019s Open Voice Transcription Standard (OVTS)</a>. This standard programming framework enables CallMiner\u2019s customers to choose the best speech recognition provider for their use cases. The OVTS API allows an easier integration to any automatic speech recognition (ASR) solution to the CallMiner <a href="https://callminer.com/products/eureka">Eureka</a> platform. The flexibility of this new standard provides organizations more options for ASR providers depending on use cases. Businesses are not locked into an ASR provider that is good for simple transcription summaries of phone calls but is poor at real-time transcriptions for call analytics and alerts. Now, they can use one ASR provider for phone call summaries and use a faster ASR provider for real-time call analytics and alerts.</p>\n<h3 id="best-of-breed-for-your-use-case"><strong>Best of Breed for Your Use Case</strong></h3>\n<p>This new standard follows the overall business trend away from the all-in-one platform solution to a flexible best-of-breed solution that can be tailored specifically to your business and use cases. These API-based best-of-breed solutions allow your organization to control your innovation roadmap.  You are no longer beholden to another company\u2019s innovation timeline, budget, or resources. You can now choose to upgrade or replace specific solutions on your timeline for new use case needs or to enter new markets.</p>\n<h3 id="real-time-speed-and-domain-specific-accuracy"><strong>Real-time Speed and Domain-Specific Accuracy</strong></h3>\n<p>For CallMiner\u2019s customers, they can now easily implement Deepgram\u2019s End to End <a href="https://offers.deepgram.com/how-deepgram-works-whitepaper">AI Speech Platform</a> with Eureka to get <300-millisecond transcriptions for true real-time conversational analytics.  They can take advantage of Deepgram\u2019s <a href="https://offers.deepgram.com/hubfs/Collateral/Deepgram-Speech%20Models-Product%20Sheet.pdf">custom speech models</a> to train a vertical, domain, and/or use the case-specific model that can reach 90%+ accuracy.  Deepgram\u2019s custom models are especially useful for keywords, terminology, jargon, and product or company names that are most important for conversational insights.  Finally, they can lower their overall Total Cost of Ownership (TCO) with our lower ASR cost and computing resource efficiency. With Deepgram, you don\u2019t need to compromise speed, accuracy, costs, or scalability. <a href="https://deepgram.com/contact-us">Consider Deepgram</a> for your real-time ASR.</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/deepgram-is-a-founding-member-of-callminers-open-voice-transcription-standard-ovts/index.md" };
function rawContent() {
  return "\r\nDeepgram is proud to be a founding member of [CallMiner's Open Voice Transcription Standard (OVTS)](https://callminer.com/news/press-releases/callminer-introduces-open-voice-transcription-standard-ovts). This standard programming framework enables CallMiner's customers to choose the best speech recognition provider for their use cases. The OVTS API allows an easier integration to any automatic speech recognition (ASR) solution to the CallMiner [Eureka](https://callminer.com/products/eureka) platform. The flexibility of this new standard provides organizations more options for ASR providers depending on use cases. Businesses are not locked into an ASR provider that is good for simple transcription summaries of phone calls but is poor at real-time transcriptions for call analytics and alerts. Now, they can use one ASR provider for phone call summaries and use a faster ASR provider for real-time call analytics and alerts.\r\n\r\n### **Best of Breed for Your Use Case**\r\n\r\nThis new standard follows the overall business trend away from the all-in-one platform solution to a flexible best-of-breed solution that can be tailored specifically to your business and use cases. These API-based best-of-breed solutions allow your organization to control your innovation roadmap.  You are no longer beholden to another company's innovation timeline, budget, or resources. You can now choose to upgrade or replace specific solutions on your timeline for new use case needs or to enter new markets.\r\n\r\n### **Real-time Speed and Domain-Specific Accuracy**\r\n\r\nFor CallMiner's customers, they can now easily implement Deepgram's End to End [AI Speech Platform](https://offers.deepgram.com/how-deepgram-works-whitepaper) with Eureka to get &lt;300-millisecond transcriptions for true real-time conversational analytics.  They can take advantage of Deepgram's [custom speech models](https://offers.deepgram.com/hubfs/Collateral/Deepgram-Speech%20Models-Product%20Sheet.pdf) to train a vertical, domain, and/or use the case-specific model that can reach 90%+ accuracy.  Deepgram's custom models are especially useful for keywords, terminology, jargon, and product or company names that are most important for conversational insights.  Finally, they can lower their overall Total Cost of Ownership (TCO) with our lower ASR cost and computing resource efficiency. With Deepgram, you don't need to compromise speed, accuracy, costs, or scalability. [Consider Deepgram](https://deepgram.com/contact-us) for your real-time ASR.\r\n";
}
function compiledContent() {
  return '<p>Deepgram is proud to be a founding member of <a href="https://callminer.com/news/press-releases/callminer-introduces-open-voice-transcription-standard-ovts">CallMiner\u2019s Open Voice Transcription Standard (OVTS)</a>. This standard programming framework enables CallMiner\u2019s customers to choose the best speech recognition provider for their use cases. The OVTS API allows an easier integration to any automatic speech recognition (ASR) solution to the CallMiner <a href="https://callminer.com/products/eureka">Eureka</a> platform. The flexibility of this new standard provides organizations more options for ASR providers depending on use cases. Businesses are not locked into an ASR provider that is good for simple transcription summaries of phone calls but is poor at real-time transcriptions for call analytics and alerts. Now, they can use one ASR provider for phone call summaries and use a faster ASR provider for real-time call analytics and alerts.</p>\n<h3 id="best-of-breed-for-your-use-case"><strong>Best of Breed for Your Use Case</strong></h3>\n<p>This new standard follows the overall business trend away from the all-in-one platform solution to a flexible best-of-breed solution that can be tailored specifically to your business and use cases. These API-based best-of-breed solutions allow your organization to control your innovation roadmap.  You are no longer beholden to another company\u2019s innovation timeline, budget, or resources. You can now choose to upgrade or replace specific solutions on your timeline for new use case needs or to enter new markets.</p>\n<h3 id="real-time-speed-and-domain-specific-accuracy"><strong>Real-time Speed and Domain-Specific Accuracy</strong></h3>\n<p>For CallMiner\u2019s customers, they can now easily implement Deepgram\u2019s End to End <a href="https://offers.deepgram.com/how-deepgram-works-whitepaper">AI Speech Platform</a> with Eureka to get <300-millisecond transcriptions for true real-time conversational analytics.  They can take advantage of Deepgram\u2019s <a href="https://offers.deepgram.com/hubfs/Collateral/Deepgram-Speech%20Models-Product%20Sheet.pdf">custom speech models</a> to train a vertical, domain, and/or use the case-specific model that can reach 90%+ accuracy.  Deepgram\u2019s custom models are especially useful for keywords, terminology, jargon, and product or company names that are most important for conversational insights.  Finally, they can lower their overall Total Cost of Ownership (TCO) with our lower ASR cost and computing resource efficiency. With Deepgram, you don\u2019t need to compromise speed, accuracy, costs, or scalability. <a href="https://deepgram.com/contact-us">Consider Deepgram</a> for your real-time ASR.</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/deepgram-is-a-founding-member-of-callminers-open-voice-transcription-standard-ovts/index.md", "https://blog.deepgram.com/", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>Deepgram is proud to be a founding member of <a href="https://callminer.com/news/press-releases/callminer-introduces-open-voice-transcription-standard-ovts">CallMiner’s Open Voice Transcription Standard (OVTS)</a>. This standard programming framework enables CallMiner’s customers to choose the best speech recognition provider for their use cases. The OVTS API allows an easier integration to any automatic speech recognition (ASR) solution to the CallMiner <a href="https://callminer.com/products/eureka">Eureka</a> platform. The flexibility of this new standard provides organizations more options for ASR providers depending on use cases. Businesses are not locked into an ASR provider that is good for simple transcription summaries of phone calls but is poor at real-time transcriptions for call analytics and alerts. Now, they can use one ASR provider for phone call summaries and use a faster ASR provider for real-time call analytics and alerts.</p>
<h3 id="best-of-breed-for-your-use-case"><strong>Best of Breed for Your Use Case</strong></h3>
<p>This new standard follows the overall business trend away from the all-in-one platform solution to a flexible best-of-breed solution that can be tailored specifically to your business and use cases. These API-based best-of-breed solutions allow your organization to control your innovation roadmap.  You are no longer beholden to another company’s innovation timeline, budget, or resources. You can now choose to upgrade or replace specific solutions on your timeline for new use case needs or to enter new markets.</p>
<h3 id="real-time-speed-and-domain-specific-accuracy"><strong>Real-time Speed and Domain-Specific Accuracy</strong></h3>
<p>For CallMiner’s customers, they can now easily implement Deepgram’s End to End <a href="https://offers.deepgram.com/how-deepgram-works-whitepaper">AI Speech Platform</a> with Eureka to get <300-millisecond transcriptions for true real-time conversational analytics.  They can take advantage of Deepgram’s <a href="https://offers.deepgram.com/hubfs/Collateral/Deepgram-Speech%20Models-Product%20Sheet.pdf">custom speech models</a> to train a vertical, domain, and/or use the case-specific model that can reach 90%+ accuracy.  Deepgram’s custom models are especially useful for keywords, terminology, jargon, and product or company names that are most important for conversational insights.  Finally, they can lower their overall Total Cost of Ownership (TCO) with our lower ASR cost and computing resource efficiency. With Deepgram, you don’t need to compromise speed, accuracy, costs, or scalability. <a href="https://deepgram.com/contact-us">Consider Deepgram</a> for your real-time ASR.</p>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/deepgram-is-a-founding-member-of-callminers-open-voice-transcription-standard-ovts/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
