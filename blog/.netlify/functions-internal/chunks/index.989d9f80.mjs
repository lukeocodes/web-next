import { c as createAstro, a as createComponent, r as renderTemplate, b as renderHead, d as renderComponent } from '../entry.mjs';
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

const metadata = { "headings": [], "source": `The promise of AI has consistently been to solve problems and deliver experiences in ways that are faster, cheaper and better. At Deepgram, AI is in our DNA - we're an automatic speech recognition company focused on solving the inherent challenges of speech technology and powering the next generation of voice-enabled applications.  We've been working hard since we [raised](https://blog.deepgram.com/we-raised-25-million/) $25 million in our Series B earlier this year to continue creating AI-driven products that make our customers' (and their customers') lives easier.

Today, we're excited to announce the availability of three new product features: conversational AI, sales and support enablement, and real-time streaming. These product additions and features (real-time streaming, trained and tailored models, multi-language, on-premise or cloud deployment) were built to help enable the next generation of human-like virtual agents and can be tailored for specific high-volume voice tasks like billing, support, add-on sales, compliance or ID verifications. In addition, real-time streaming allows software platforms to immediately push sales tips and knowledge base solutions to salespeople and support agents. Deepgram customers will now get to leverage: 

**Conversational AI**: Most existing conservational AI solutions' lag time is more than two seconds, but our new conversational AI feature reduces the response lag to only &lt;300 milliseconds. Customers now have a base model tuned to Conversational AI use cases that can be even further tailored to specific domains. These capabilities allow organizations to improve word error rate by up to 50 percent and reduce noise and filter crosstalk to help focus on the key terms and phrases for intent and understanding. For example, [Elerian AI](http://www.elerian.ai) has used Deepgram to build a bot that is so human-like, customers naturally say "thank you" to it. Our speed and accuracy on trained models allowed Elerian AI to meet the needs of a South African bank that needed to understand a host of accents and names that varied by region.

**Sales and Support Enablement:** Customer-facing teams from every industry can boost sales with accurate and fast ASR optimized for real-time enablement. Our new product features help reduce customer churn with faster ASR for real-time offers and alerts, and improve employee success with accurate call analytics and transcripts for coaching. To help paint the picture, a sales enablement customer embedded Deepgram into its revenue intelligence platform to automatically transcribe all of their customer sales calls and find insights on the status of deals, as well as the performance and coaching needs of the sales team.

<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works"></WhitepaperPromo>

**Real-Time Streaming:** At Deepgram, we don't believe in compromising speed for accuracy. With this new processing capability, our real-time streaming ASR is the fastest in the market. With less than 300 millisecond lag time and more than 90 percent transcription accuracy, our conversational AI and sales and support enablement solutions can now process audio data and provide correct responses, insight and results with tailored speech models. [Nytro.ai](http://www.nytro.ai), a new pitch intelligence startup, chose Deepgram based on our real-time speed and consistency-in addition to our high accuracy.  As Nytro.ai's team grows, they will create domain-specific speech models that could boost their accuracy even further.

With ongoing innovations in AI bringing about faster, cheaper and better processes and products, it's critical to stay ahead of the game when it comes to speech technology. We want to be the foundational ASR embedded in the newest voice technology, and these [new exciting product features](https://venturebeat.com/2021/06/03/deepgram-beefs-up-conversational-ai-engagement-with-new-apis/) are another critical step to getting us there. If you're interested in trying Deepgram's latest solutions or learning more about working together, [contact us](https://deepgram.com/contact-us/) today.`, "html": '<p>The promise of AI has consistently been to solve problems and deliver experiences in ways that are faster, cheaper and better. At Deepgram, AI is in our DNA - we\u2019re an automatic speech recognition company focused on solving the inherent challenges of speech technology and powering the next generation of voice-enabled applications.  We\u2019ve been working hard since we <a href="https://blog.deepgram.com/we-raised-25-million/">raised</a> $25 million in our Series B earlier this year to continue creating AI-driven products that make our customers\u2019 (and their customers\u2019) lives easier.</p>\n<p>Today, we\u2019re excited to announce the availability of three new product features: conversational AI, sales and support enablement, and real-time streaming. These product additions and features (real-time streaming, trained and tailored models, multi-language, on-premise or cloud deployment) were built to help enable the next generation of human-like virtual agents and can be tailored for specific high-volume voice tasks like billing, support, add-on sales, compliance or ID verifications. In addition, real-time streaming allows software platforms to immediately push sales tips and knowledge base solutions to salespeople and support agents. Deepgram customers will now get to leverage:</p>\n<p><strong>Conversational AI</strong>: Most existing conservational AI solutions\u2019 lag time is more than two seconds, but our new conversational AI feature reduces the response lag to only <300 milliseconds. Customers now have a base model tuned to Conversational AI use cases that can be even further tailored to specific domains. These capabilities allow organizations to improve word error rate by up to 50 percent and reduce noise and filter crosstalk to help focus on the key terms and phrases for intent and understanding. For example, <a href="http://www.elerian.ai">Elerian AI</a> has used Deepgram to build a bot that is so human-like, customers naturally say \u201Cthank you\u201D to it. Our speed and accuracy on trained models allowed Elerian AI to meet the needs of a South African bank that needed to understand a host of accents and names that varied by region.</p>\n<p><strong>Sales and Support Enablement:</strong> Customer-facing teams from every industry can boost sales with accurate and fast ASR optimized for real-time enablement. Our new product features help reduce customer churn with faster ASR for real-time offers and alerts, and improve employee success with accurate call analytics and transcripts for coaching. To help paint the picture, a sales enablement customer embedded Deepgram into its revenue intelligence platform to automatically transcribe all of their customer sales calls and find insights on the status of deals, as well as the performance and coaching needs of the sales team.</p>\n<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works" />\n<p><strong>Real-Time Streaming:</strong> At Deepgram, we don\u2019t believe in compromising speed for accuracy. With this new processing capability, our real-time streaming ASR is the fastest in the market. With less than 300 millisecond lag time and more than 90 percent transcription accuracy, our conversational AI and sales and support enablement solutions can now process audio data and provide correct responses, insight and results with tailored speech models. <a href="http://www.nytro.ai">Nytro.ai</a>, a new pitch intelligence startup, chose Deepgram based on our real-time speed and consistency-in addition to our high accuracy.  As Nytro.ai\u2019s team grows, they will create domain-specific speech models that could boost their accuracy even further.</p>\n<p>With ongoing innovations in AI bringing about faster, cheaper and better processes and products, it\u2019s critical to stay ahead of the game when it comes to speech technology. We want to be the foundational ASR embedded in the newest voice technology, and these <a href="https://venturebeat.com/2021/06/03/deepgram-beefs-up-conversational-ai-engagement-with-new-apis/">new exciting product features</a> are another critical step to getting us there. If you\u2019re interested in trying Deepgram\u2019s latest solutions or learning more about working together, <a href="https://deepgram.com/contact-us/">contact us</a> today.</p>' };
const frontmatter = { "title": "Introducing Real-Time Streaming and Solutions for Conversational AI, Sales and Support Enablement", "description": "Do you need true real-time speech to text? How about less than 300 millisecond lag time and over 90%+ trained accuracy. We are built for Conversational AI and Sales and Support Enablement. Create with us today.", "date": "2021-06-03T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1661981375/blog/introducing-real-time-streaming-and-solutions-for-conversational-ai-sales-and-support-enablement/introducing-real-time-streaming%402x.jpg", "authors": ["scott-stephenson"], "category": "product-news", "tags": ["conversational-ai", "sales-enablement", "support-enablement"], "seo": { "title": "Introducing Real-Time Streaming and Solutions for Conversational AI, Sales and Support Enablement", "description": "Do you need true real-time speech to text? How about less than 300 millisecond lag time and over 90%+ trained accuracy. We are built for Conversational AI and Sales and Support Enablement. Create with us today." }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661981375/blog/introducing-real-time-streaming-and-solutions-for-conversational-ai-sales-and-support-enablement/introducing-real-time-streaming%402x.jpg" }, "shorturls": { "share": "https://dpgr.am/1f89526", "twitter": "https://dpgr.am/87d802f", "linkedin": "https://dpgr.am/73be05d", "reddit": "https://dpgr.am/5ecc0d5", "facebook": "https://dpgr.am/e0f2bd9" }, "astro": { "headings": [], "source": `The promise of AI has consistently been to solve problems and deliver experiences in ways that are faster, cheaper and better. At Deepgram, AI is in our DNA - we're an automatic speech recognition company focused on solving the inherent challenges of speech technology and powering the next generation of voice-enabled applications.  We've been working hard since we [raised](https://blog.deepgram.com/we-raised-25-million/) $25 million in our Series B earlier this year to continue creating AI-driven products that make our customers' (and their customers') lives easier.

Today, we're excited to announce the availability of three new product features: conversational AI, sales and support enablement, and real-time streaming. These product additions and features (real-time streaming, trained and tailored models, multi-language, on-premise or cloud deployment) were built to help enable the next generation of human-like virtual agents and can be tailored for specific high-volume voice tasks like billing, support, add-on sales, compliance or ID verifications. In addition, real-time streaming allows software platforms to immediately push sales tips and knowledge base solutions to salespeople and support agents. Deepgram customers will now get to leverage: 

**Conversational AI**: Most existing conservational AI solutions' lag time is more than two seconds, but our new conversational AI feature reduces the response lag to only &lt;300 milliseconds. Customers now have a base model tuned to Conversational AI use cases that can be even further tailored to specific domains. These capabilities allow organizations to improve word error rate by up to 50 percent and reduce noise and filter crosstalk to help focus on the key terms and phrases for intent and understanding. For example, [Elerian AI](http://www.elerian.ai) has used Deepgram to build a bot that is so human-like, customers naturally say "thank you" to it. Our speed and accuracy on trained models allowed Elerian AI to meet the needs of a South African bank that needed to understand a host of accents and names that varied by region.

**Sales and Support Enablement:** Customer-facing teams from every industry can boost sales with accurate and fast ASR optimized for real-time enablement. Our new product features help reduce customer churn with faster ASR for real-time offers and alerts, and improve employee success with accurate call analytics and transcripts for coaching. To help paint the picture, a sales enablement customer embedded Deepgram into its revenue intelligence platform to automatically transcribe all of their customer sales calls and find insights on the status of deals, as well as the performance and coaching needs of the sales team.

<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works"></WhitepaperPromo>

**Real-Time Streaming:** At Deepgram, we don't believe in compromising speed for accuracy. With this new processing capability, our real-time streaming ASR is the fastest in the market. With less than 300 millisecond lag time and more than 90 percent transcription accuracy, our conversational AI and sales and support enablement solutions can now process audio data and provide correct responses, insight and results with tailored speech models. [Nytro.ai](http://www.nytro.ai), a new pitch intelligence startup, chose Deepgram based on our real-time speed and consistency-in addition to our high accuracy.  As Nytro.ai's team grows, they will create domain-specific speech models that could boost their accuracy even further.

With ongoing innovations in AI bringing about faster, cheaper and better processes and products, it's critical to stay ahead of the game when it comes to speech technology. We want to be the foundational ASR embedded in the newest voice technology, and these [new exciting product features](https://venturebeat.com/2021/06/03/deepgram-beefs-up-conversational-ai-engagement-with-new-apis/) are another critical step to getting us there. If you're interested in trying Deepgram's latest solutions or learning more about working together, [contact us](https://deepgram.com/contact-us/) today.`, "html": '<p>The promise of AI has consistently been to solve problems and deliver experiences in ways that are faster, cheaper and better. At Deepgram, AI is in our DNA - we\u2019re an automatic speech recognition company focused on solving the inherent challenges of speech technology and powering the next generation of voice-enabled applications.  We\u2019ve been working hard since we <a href="https://blog.deepgram.com/we-raised-25-million/">raised</a> $25 million in our Series B earlier this year to continue creating AI-driven products that make our customers\u2019 (and their customers\u2019) lives easier.</p>\n<p>Today, we\u2019re excited to announce the availability of three new product features: conversational AI, sales and support enablement, and real-time streaming. These product additions and features (real-time streaming, trained and tailored models, multi-language, on-premise or cloud deployment) were built to help enable the next generation of human-like virtual agents and can be tailored for specific high-volume voice tasks like billing, support, add-on sales, compliance or ID verifications. In addition, real-time streaming allows software platforms to immediately push sales tips and knowledge base solutions to salespeople and support agents. Deepgram customers will now get to leverage:</p>\n<p><strong>Conversational AI</strong>: Most existing conservational AI solutions\u2019 lag time is more than two seconds, but our new conversational AI feature reduces the response lag to only <300 milliseconds. Customers now have a base model tuned to Conversational AI use cases that can be even further tailored to specific domains. These capabilities allow organizations to improve word error rate by up to 50 percent and reduce noise and filter crosstalk to help focus on the key terms and phrases for intent and understanding. For example, <a href="http://www.elerian.ai">Elerian AI</a> has used Deepgram to build a bot that is so human-like, customers naturally say \u201Cthank you\u201D to it. Our speed and accuracy on trained models allowed Elerian AI to meet the needs of a South African bank that needed to understand a host of accents and names that varied by region.</p>\n<p><strong>Sales and Support Enablement:</strong> Customer-facing teams from every industry can boost sales with accurate and fast ASR optimized for real-time enablement. Our new product features help reduce customer churn with faster ASR for real-time offers and alerts, and improve employee success with accurate call analytics and transcripts for coaching. To help paint the picture, a sales enablement customer embedded Deepgram into its revenue intelligence platform to automatically transcribe all of their customer sales calls and find insights on the status of deals, as well as the performance and coaching needs of the sales team.</p>\n<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works" />\n<p><strong>Real-Time Streaming:</strong> At Deepgram, we don\u2019t believe in compromising speed for accuracy. With this new processing capability, our real-time streaming ASR is the fastest in the market. With less than 300 millisecond lag time and more than 90 percent transcription accuracy, our conversational AI and sales and support enablement solutions can now process audio data and provide correct responses, insight and results with tailored speech models. <a href="http://www.nytro.ai">Nytro.ai</a>, a new pitch intelligence startup, chose Deepgram based on our real-time speed and consistency-in addition to our high accuracy.  As Nytro.ai\u2019s team grows, they will create domain-specific speech models that could boost their accuracy even further.</p>\n<p>With ongoing innovations in AI bringing about faster, cheaper and better processes and products, it\u2019s critical to stay ahead of the game when it comes to speech technology. We want to be the foundational ASR embedded in the newest voice technology, and these <a href="https://venturebeat.com/2021/06/03/deepgram-beefs-up-conversational-ai-engagement-with-new-apis/">new exciting product features</a> are another critical step to getting us there. If you\u2019re interested in trying Deepgram\u2019s latest solutions or learning more about working together, <a href="https://deepgram.com/contact-us/">contact us</a> today.</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/introducing-real-time-streaming-and-solutions-for-conversational-ai-sales-and-support-enablement/index.md" };
function rawContent() {
  return `The promise of AI has consistently been to solve problems and deliver experiences in ways that are faster, cheaper and better. At Deepgram, AI is in our DNA - we're an automatic speech recognition company focused on solving the inherent challenges of speech technology and powering the next generation of voice-enabled applications.  We've been working hard since we [raised](https://blog.deepgram.com/we-raised-25-million/) $25 million in our Series B earlier this year to continue creating AI-driven products that make our customers' (and their customers') lives easier.

Today, we're excited to announce the availability of three new product features: conversational AI, sales and support enablement, and real-time streaming. These product additions and features (real-time streaming, trained and tailored models, multi-language, on-premise or cloud deployment) were built to help enable the next generation of human-like virtual agents and can be tailored for specific high-volume voice tasks like billing, support, add-on sales, compliance or ID verifications. In addition, real-time streaming allows software platforms to immediately push sales tips and knowledge base solutions to salespeople and support agents. Deepgram customers will now get to leverage: 

**Conversational AI**: Most existing conservational AI solutions' lag time is more than two seconds, but our new conversational AI feature reduces the response lag to only &lt;300 milliseconds. Customers now have a base model tuned to Conversational AI use cases that can be even further tailored to specific domains. These capabilities allow organizations to improve word error rate by up to 50 percent and reduce noise and filter crosstalk to help focus on the key terms and phrases for intent and understanding. For example, [Elerian AI](http://www.elerian.ai) has used Deepgram to build a bot that is so human-like, customers naturally say "thank you" to it. Our speed and accuracy on trained models allowed Elerian AI to meet the needs of a South African bank that needed to understand a host of accents and names that varied by region.

**Sales and Support Enablement:** Customer-facing teams from every industry can boost sales with accurate and fast ASR optimized for real-time enablement. Our new product features help reduce customer churn with faster ASR for real-time offers and alerts, and improve employee success with accurate call analytics and transcripts for coaching. To help paint the picture, a sales enablement customer embedded Deepgram into its revenue intelligence platform to automatically transcribe all of their customer sales calls and find insights on the status of deals, as well as the performance and coaching needs of the sales team.

<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works"></WhitepaperPromo>

**Real-Time Streaming:** At Deepgram, we don't believe in compromising speed for accuracy. With this new processing capability, our real-time streaming ASR is the fastest in the market. With less than 300 millisecond lag time and more than 90 percent transcription accuracy, our conversational AI and sales and support enablement solutions can now process audio data and provide correct responses, insight and results with tailored speech models. [Nytro.ai](http://www.nytro.ai), a new pitch intelligence startup, chose Deepgram based on our real-time speed and consistency-in addition to our high accuracy.  As Nytro.ai's team grows, they will create domain-specific speech models that could boost their accuracy even further.

With ongoing innovations in AI bringing about faster, cheaper and better processes and products, it's critical to stay ahead of the game when it comes to speech technology. We want to be the foundational ASR embedded in the newest voice technology, and these [new exciting product features](https://venturebeat.com/2021/06/03/deepgram-beefs-up-conversational-ai-engagement-with-new-apis/) are another critical step to getting us there. If you're interested in trying Deepgram's latest solutions or learning more about working together, [contact us](https://deepgram.com/contact-us/) today.`;
}
function compiledContent() {
  return '<p>The promise of AI has consistently been to solve problems and deliver experiences in ways that are faster, cheaper and better. At Deepgram, AI is in our DNA - we\u2019re an automatic speech recognition company focused on solving the inherent challenges of speech technology and powering the next generation of voice-enabled applications.  We\u2019ve been working hard since we <a href="https://blog.deepgram.com/we-raised-25-million/">raised</a> $25 million in our Series B earlier this year to continue creating AI-driven products that make our customers\u2019 (and their customers\u2019) lives easier.</p>\n<p>Today, we\u2019re excited to announce the availability of three new product features: conversational AI, sales and support enablement, and real-time streaming. These product additions and features (real-time streaming, trained and tailored models, multi-language, on-premise or cloud deployment) were built to help enable the next generation of human-like virtual agents and can be tailored for specific high-volume voice tasks like billing, support, add-on sales, compliance or ID verifications. In addition, real-time streaming allows software platforms to immediately push sales tips and knowledge base solutions to salespeople and support agents. Deepgram customers will now get to leverage:</p>\n<p><strong>Conversational AI</strong>: Most existing conservational AI solutions\u2019 lag time is more than two seconds, but our new conversational AI feature reduces the response lag to only <300 milliseconds. Customers now have a base model tuned to Conversational AI use cases that can be even further tailored to specific domains. These capabilities allow organizations to improve word error rate by up to 50 percent and reduce noise and filter crosstalk to help focus on the key terms and phrases for intent and understanding. For example, <a href="http://www.elerian.ai">Elerian AI</a> has used Deepgram to build a bot that is so human-like, customers naturally say \u201Cthank you\u201D to it. Our speed and accuracy on trained models allowed Elerian AI to meet the needs of a South African bank that needed to understand a host of accents and names that varied by region.</p>\n<p><strong>Sales and Support Enablement:</strong> Customer-facing teams from every industry can boost sales with accurate and fast ASR optimized for real-time enablement. Our new product features help reduce customer churn with faster ASR for real-time offers and alerts, and improve employee success with accurate call analytics and transcripts for coaching. To help paint the picture, a sales enablement customer embedded Deepgram into its revenue intelligence platform to automatically transcribe all of their customer sales calls and find insights on the status of deals, as well as the performance and coaching needs of the sales team.</p>\n<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works" />\n<p><strong>Real-Time Streaming:</strong> At Deepgram, we don\u2019t believe in compromising speed for accuracy. With this new processing capability, our real-time streaming ASR is the fastest in the market. With less than 300 millisecond lag time and more than 90 percent transcription accuracy, our conversational AI and sales and support enablement solutions can now process audio data and provide correct responses, insight and results with tailored speech models. <a href="http://www.nytro.ai">Nytro.ai</a>, a new pitch intelligence startup, chose Deepgram based on our real-time speed and consistency-in addition to our high accuracy.  As Nytro.ai\u2019s team grows, they will create domain-specific speech models that could boost their accuracy even further.</p>\n<p>With ongoing innovations in AI bringing about faster, cheaper and better processes and products, it\u2019s critical to stay ahead of the game when it comes to speech technology. We want to be the foundational ASR embedded in the newest voice technology, and these <a href="https://venturebeat.com/2021/06/03/deepgram-beefs-up-conversational-ai-engagement-with-new-apis/">new exciting product features</a> are another critical step to getting us there. If you\u2019re interested in trying Deepgram\u2019s latest solutions or learning more about working together, <a href="https://deepgram.com/contact-us/">contact us</a> today.</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/introducing-real-time-streaming-and-solutions-for-conversational-ai-sales-and-support-enablement/index.md", "https://blog.deepgram.com/", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>The promise of AI has consistently been to solve problems and deliver experiences in ways that are faster, cheaper and better. At Deepgram, AI is in our DNA - we’re an automatic speech recognition company focused on solving the inherent challenges of speech technology and powering the next generation of voice-enabled applications.  We’ve been working hard since we <a href="https://blog.deepgram.com/we-raised-25-million/">raised</a> $25 million in our Series B earlier this year to continue creating AI-driven products that make our customers’ (and their customers’) lives easier.</p>
<p>Today, we’re excited to announce the availability of three new product features: conversational AI, sales and support enablement, and real-time streaming. These product additions and features (real-time streaming, trained and tailored models, multi-language, on-premise or cloud deployment) were built to help enable the next generation of human-like virtual agents and can be tailored for specific high-volume voice tasks like billing, support, add-on sales, compliance or ID verifications. In addition, real-time streaming allows software platforms to immediately push sales tips and knowledge base solutions to salespeople and support agents. Deepgram customers will now get to leverage:</p>
<p><strong>Conversational AI</strong>: Most existing conservational AI solutions’ lag time is more than two seconds, but our new conversational AI feature reduces the response lag to only <300 milliseconds. Customers now have a base model tuned to Conversational AI use cases that can be even further tailored to specific domains. These capabilities allow organizations to improve word error rate by up to 50 percent and reduce noise and filter crosstalk to help focus on the key terms and phrases for intent and understanding. For example, <a href="http://www.elerian.ai">Elerian AI</a> has used Deepgram to build a bot that is so human-like, customers naturally say “thank you” to it. Our speed and accuracy on trained models allowed Elerian AI to meet the needs of a South African bank that needed to understand a host of accents and names that varied by region.</p>
<p><strong>Sales and Support Enablement:</strong> Customer-facing teams from every industry can boost sales with accurate and fast ASR optimized for real-time enablement. Our new product features help reduce customer churn with faster ASR for real-time offers and alerts, and improve employee success with accurate call analytics and transcripts for coaching. To help paint the picture, a sales enablement customer embedded Deepgram into its revenue intelligence platform to automatically transcribe all of their customer sales calls and find insights on the status of deals, as well as the performance and coaching needs of the sales team.</p>
${renderComponent($$result, "WhitepaperPromo", WhitepaperPromo, { "whitepaper": "deepgram-whitepaper-how-deepgram-works" })}
<p><strong>Real-Time Streaming:</strong> At Deepgram, we don’t believe in compromising speed for accuracy. With this new processing capability, our real-time streaming ASR is the fastest in the market. With less than 300 millisecond lag time and more than 90 percent transcription accuracy, our conversational AI and sales and support enablement solutions can now process audio data and provide correct responses, insight and results with tailored speech models. <a href="http://www.nytro.ai">Nytro.ai</a>, a new pitch intelligence startup, chose Deepgram based on our real-time speed and consistency-in addition to our high accuracy.  As Nytro.ai’s team grows, they will create domain-specific speech models that could boost their accuracy even further.</p>
<p>With ongoing innovations in AI bringing about faster, cheaper and better processes and products, it’s critical to stay ahead of the game when it comes to speech technology. We want to be the foundational ASR embedded in the newest voice technology, and these <a href="https://venturebeat.com/2021/06/03/deepgram-beefs-up-conversational-ai-engagement-with-new-apis/">new exciting product features</a> are another critical step to getting us there. If you’re interested in trying Deepgram’s latest solutions or learning more about working together, <a href="https://deepgram.com/contact-us/">contact us</a> today.</p>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/introducing-real-time-streaming-and-solutions-for-conversational-ai-sales-and-support-enablement/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
