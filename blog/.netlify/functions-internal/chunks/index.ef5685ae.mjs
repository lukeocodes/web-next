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

const metadata = { "headings": [], "source": "Speech is a powerful tool for the enterprise with the ability to unlock a whole new treasure trove of data. This space is growing and almost every company is investing in some form of Automatic Speech Recognition (ASR) - but the question remains, are they using speech to its full potential?\n\nTo answer this question, we partnered with [Opus Research](https://opusresearch.net/wordpress/) to examine the state of ASR in the enterprise. We surveyed 400 North American decision-makers, from managers to the C-suite, and in industries from retail and hospitality to financial services and government, to understand how they are currently using ASR and what future investment looks like. Through our research, we discovered specific opportunities where companies could expand ASR use to better support company growth. We also found that while companies are interested in capitalizing on the insights that ASR can unearth, they have yet to take full advantage of the technology. This may be a result of company decision-makers not understanding what their ASR provider can offer, or due to the sophistication of the technology itself. Here are some of the key takeaways we discovered through our research:\n\n* **Siloed ASR use is hindering innovation**: Currently, ASR is mainly used for operational efficiency, compliance and regulatory mandates. Respondents are primarily leveraging ASR for cost savings (e.g., [Contact Center](https://deepgram.com/solutions/contact-centers/) operational efficiencies and improved training) or cost avoidance (compliance), but most aren't utilizing it to fuel overall enterprise growth or to improve products and services with the exception of the retail and telecom industries. However, our findings revealed that there is a growing appetite for innovation-focused use cases where speech data is leveraged for real-time [speech analytics](https://deepgram.com/solutions/speech-analytics/), virtual assistants or [voicebots](https://deepgram.com/solutions/voicebots/), market research, etc.\n* **Speech data is largely underutilized:** 88% of respondents are using ASR to transcribe or analyze spoken conversational content. However, two-thirds of respondents say they are significantly under-utilizing their audio. This indicates that many companies understand the importance of speech data, but are struggling to make the best use of it.\n* **Companies recognize the importance of ASR - and plan to keep investing**: While it was not a requirement for respondents to currently be using ASR, 99% of respondents indicated that they currently implement ASR in some capacity as part of their business strategy, and a large majority plan to significantly increase their investment in 2021. In addition, 85% indicate ASR as important or very important to their future enterprise strategy.\n* **COVID-19 accelerated Automatic Speech Recognition adoption:** The pandemic has transformed technology and business principles across industries forever. 80% of respondents list COVID-19 as a top reason they accelerated the adoption of ASR.\n\nOur findings are proof that ASR is a critical element of any enterprise strategy and has the power to unlock powerful insights into the overall customer experience, how a product or service is working and much more. At Deepgram, we believe that voice data presents enterprises with a significant opportunity to gain more insight into their business, customers and markets, and we are committed to helping enterprises unlock the potential hidden within their voice data. For more information about Deepgram and to download a copy of the full data report, click [here](https://deepgram.com/state-of-asr-report/).", "html": '<p>Speech is a powerful tool for the enterprise with the ability to unlock a whole new treasure trove of data. This space is growing and almost every company is investing in some form of Automatic Speech Recognition (ASR) - but the question remains, are they using speech to its full potential?</p>\n<p>To answer this question, we partnered with <a href="https://opusresearch.net/wordpress/">Opus Research</a> to examine the state of ASR in the enterprise. We surveyed 400 North American decision-makers, from managers to the C-suite, and in industries from retail and hospitality to financial services and government, to understand how they are currently using ASR and what future investment looks like. Through our research, we discovered specific opportunities where companies could expand ASR use to better support company growth. We also found that while companies are interested in capitalizing on the insights that ASR can unearth, they have yet to take full advantage of the technology. This may be a result of company decision-makers not understanding what their ASR provider can offer, or due to the sophistication of the technology itself. Here are some of the key takeaways we discovered through our research:</p>\n<ul>\n<li><strong>Siloed ASR use is hindering innovation</strong>: Currently, ASR is mainly used for operational efficiency, compliance and regulatory mandates. Respondents are primarily leveraging ASR for cost savings (e.g., <a href="https://deepgram.com/solutions/contact-centers/">Contact Center</a> operational efficiencies and improved training) or cost avoidance (compliance), but most aren\u2019t utilizing it to fuel overall enterprise growth or to improve products and services with the exception of the retail and telecom industries. However, our findings revealed that there is a growing appetite for innovation-focused use cases where speech data is leveraged for real-time <a href="https://deepgram.com/solutions/speech-analytics/">speech analytics</a>, virtual assistants or <a href="https://deepgram.com/solutions/voicebots/">voicebots</a>, market research, etc.</li>\n<li><strong>Speech data is largely underutilized:</strong> 88% of respondents are using ASR to transcribe or analyze spoken conversational content. However, two-thirds of respondents say they are significantly under-utilizing their audio. This indicates that many companies understand the importance of speech data, but are struggling to make the best use of it.</li>\n<li><strong>Companies recognize the importance of ASR - and plan to keep investing</strong>: While it was not a requirement for respondents to currently be using ASR, 99% of respondents indicated that they currently implement ASR in some capacity as part of their business strategy, and a large majority plan to significantly increase their investment in 2021. In addition, 85% indicate ASR as important or very important to their future enterprise strategy.</li>\n<li><strong>COVID-19 accelerated Automatic Speech Recognition adoption:</strong> The pandemic has transformed technology and business principles across industries forever. 80% of respondents list COVID-19 as a top reason they accelerated the adoption of ASR.</li>\n</ul>\n<p>Our findings are proof that ASR is a critical element of any enterprise strategy and has the power to unlock powerful insights into the overall customer experience, how a product or service is working and much more. At Deepgram, we believe that voice data presents enterprises with a significant opportunity to gain more insight into their business, customers and markets, and we are committed to helping enterprises unlock the potential hidden within their voice data. For more information about Deepgram and to download a copy of the full data report, click <a href="https://deepgram.com/state-of-asr-report/">here</a>.</p>' };
const frontmatter = { "title": "State of Speech: Our New Data Report Reveals ASR\u2019s Untapped Potential", "description": "Speech is a powerful tool for the enterprise with the ability to unlock a whole new treasure trove of data. This space is growing and almost every company is investing in some form of Automatic Speech Recognition (ASR) - but the question remains, are they using speech to its full potential?", "date": "2021-03-03T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1661981362/blog/state-of-speech-our-new-data-report-reveals-asrs-untapped-potential/2021-state-of-asr-infogfx%402x.jpg", "authors": ["scott-stephenson"], "category": "speech-trends", "tags": ["state-of-voice-tech"], "seo": { "title": "State of Speech: Our New Data Report Reveals ASR\u2019s Untapped Potential", "description": "" }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661981362/blog/state-of-speech-our-new-data-report-reveals-asrs-untapped-potential/2021-state-of-asr-infogfx%402x.jpg" }, "shorturls": { "share": "https://dpgr.am/b04ca40", "twitter": "https://dpgr.am/6b0c910", "linkedin": "https://dpgr.am/ed77ce6", "reddit": "https://dpgr.am/f3bd46e", "facebook": "https://dpgr.am/793714c" }, "astro": { "headings": [], "source": "Speech is a powerful tool for the enterprise with the ability to unlock a whole new treasure trove of data. This space is growing and almost every company is investing in some form of Automatic Speech Recognition (ASR) - but the question remains, are they using speech to its full potential?\n\nTo answer this question, we partnered with [Opus Research](https://opusresearch.net/wordpress/) to examine the state of ASR in the enterprise. We surveyed 400 North American decision-makers, from managers to the C-suite, and in industries from retail and hospitality to financial services and government, to understand how they are currently using ASR and what future investment looks like. Through our research, we discovered specific opportunities where companies could expand ASR use to better support company growth. We also found that while companies are interested in capitalizing on the insights that ASR can unearth, they have yet to take full advantage of the technology. This may be a result of company decision-makers not understanding what their ASR provider can offer, or due to the sophistication of the technology itself. Here are some of the key takeaways we discovered through our research:\n\n* **Siloed ASR use is hindering innovation**: Currently, ASR is mainly used for operational efficiency, compliance and regulatory mandates. Respondents are primarily leveraging ASR for cost savings (e.g., [Contact Center](https://deepgram.com/solutions/contact-centers/) operational efficiencies and improved training) or cost avoidance (compliance), but most aren't utilizing it to fuel overall enterprise growth or to improve products and services with the exception of the retail and telecom industries. However, our findings revealed that there is a growing appetite for innovation-focused use cases where speech data is leveraged for real-time [speech analytics](https://deepgram.com/solutions/speech-analytics/), virtual assistants or [voicebots](https://deepgram.com/solutions/voicebots/), market research, etc.\n* **Speech data is largely underutilized:** 88% of respondents are using ASR to transcribe or analyze spoken conversational content. However, two-thirds of respondents say they are significantly under-utilizing their audio. This indicates that many companies understand the importance of speech data, but are struggling to make the best use of it.\n* **Companies recognize the importance of ASR - and plan to keep investing**: While it was not a requirement for respondents to currently be using ASR, 99% of respondents indicated that they currently implement ASR in some capacity as part of their business strategy, and a large majority plan to significantly increase their investment in 2021. In addition, 85% indicate ASR as important or very important to their future enterprise strategy.\n* **COVID-19 accelerated Automatic Speech Recognition adoption:** The pandemic has transformed technology and business principles across industries forever. 80% of respondents list COVID-19 as a top reason they accelerated the adoption of ASR.\n\nOur findings are proof that ASR is a critical element of any enterprise strategy and has the power to unlock powerful insights into the overall customer experience, how a product or service is working and much more. At Deepgram, we believe that voice data presents enterprises with a significant opportunity to gain more insight into their business, customers and markets, and we are committed to helping enterprises unlock the potential hidden within their voice data. For more information about Deepgram and to download a copy of the full data report, click [here](https://deepgram.com/state-of-asr-report/).", "html": '<p>Speech is a powerful tool for the enterprise with the ability to unlock a whole new treasure trove of data. This space is growing and almost every company is investing in some form of Automatic Speech Recognition (ASR) - but the question remains, are they using speech to its full potential?</p>\n<p>To answer this question, we partnered with <a href="https://opusresearch.net/wordpress/">Opus Research</a> to examine the state of ASR in the enterprise. We surveyed 400 North American decision-makers, from managers to the C-suite, and in industries from retail and hospitality to financial services and government, to understand how they are currently using ASR and what future investment looks like. Through our research, we discovered specific opportunities where companies could expand ASR use to better support company growth. We also found that while companies are interested in capitalizing on the insights that ASR can unearth, they have yet to take full advantage of the technology. This may be a result of company decision-makers not understanding what their ASR provider can offer, or due to the sophistication of the technology itself. Here are some of the key takeaways we discovered through our research:</p>\n<ul>\n<li><strong>Siloed ASR use is hindering innovation</strong>: Currently, ASR is mainly used for operational efficiency, compliance and regulatory mandates. Respondents are primarily leveraging ASR for cost savings (e.g., <a href="https://deepgram.com/solutions/contact-centers/">Contact Center</a> operational efficiencies and improved training) or cost avoidance (compliance), but most aren\u2019t utilizing it to fuel overall enterprise growth or to improve products and services with the exception of the retail and telecom industries. However, our findings revealed that there is a growing appetite for innovation-focused use cases where speech data is leveraged for real-time <a href="https://deepgram.com/solutions/speech-analytics/">speech analytics</a>, virtual assistants or <a href="https://deepgram.com/solutions/voicebots/">voicebots</a>, market research, etc.</li>\n<li><strong>Speech data is largely underutilized:</strong> 88% of respondents are using ASR to transcribe or analyze spoken conversational content. However, two-thirds of respondents say they are significantly under-utilizing their audio. This indicates that many companies understand the importance of speech data, but are struggling to make the best use of it.</li>\n<li><strong>Companies recognize the importance of ASR - and plan to keep investing</strong>: While it was not a requirement for respondents to currently be using ASR, 99% of respondents indicated that they currently implement ASR in some capacity as part of their business strategy, and a large majority plan to significantly increase their investment in 2021. In addition, 85% indicate ASR as important or very important to their future enterprise strategy.</li>\n<li><strong>COVID-19 accelerated Automatic Speech Recognition adoption:</strong> The pandemic has transformed technology and business principles across industries forever. 80% of respondents list COVID-19 as a top reason they accelerated the adoption of ASR.</li>\n</ul>\n<p>Our findings are proof that ASR is a critical element of any enterprise strategy and has the power to unlock powerful insights into the overall customer experience, how a product or service is working and much more. At Deepgram, we believe that voice data presents enterprises with a significant opportunity to gain more insight into their business, customers and markets, and we are committed to helping enterprises unlock the potential hidden within their voice data. For more information about Deepgram and to download a copy of the full data report, click <a href="https://deepgram.com/state-of-asr-report/">here</a>.</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/state-of-speech-our-new-data-report-reveals-asrs-untapped-potential/index.md" };
function rawContent() {
  return "Speech is a powerful tool for the enterprise with the ability to unlock a whole new treasure trove of data. This space is growing and almost every company is investing in some form of Automatic Speech Recognition (ASR) - but the question remains, are they using speech to its full potential?\n\nTo answer this question, we partnered with [Opus Research](https://opusresearch.net/wordpress/) to examine the state of ASR in the enterprise. We surveyed 400 North American decision-makers, from managers to the C-suite, and in industries from retail and hospitality to financial services and government, to understand how they are currently using ASR and what future investment looks like. Through our research, we discovered specific opportunities where companies could expand ASR use to better support company growth. We also found that while companies are interested in capitalizing on the insights that ASR can unearth, they have yet to take full advantage of the technology. This may be a result of company decision-makers not understanding what their ASR provider can offer, or due to the sophistication of the technology itself. Here are some of the key takeaways we discovered through our research:\n\n* **Siloed ASR use is hindering innovation**: Currently, ASR is mainly used for operational efficiency, compliance and regulatory mandates. Respondents are primarily leveraging ASR for cost savings (e.g., [Contact Center](https://deepgram.com/solutions/contact-centers/) operational efficiencies and improved training) or cost avoidance (compliance), but most aren't utilizing it to fuel overall enterprise growth or to improve products and services with the exception of the retail and telecom industries. However, our findings revealed that there is a growing appetite for innovation-focused use cases where speech data is leveraged for real-time [speech analytics](https://deepgram.com/solutions/speech-analytics/), virtual assistants or [voicebots](https://deepgram.com/solutions/voicebots/), market research, etc.\n* **Speech data is largely underutilized:** 88% of respondents are using ASR to transcribe or analyze spoken conversational content. However, two-thirds of respondents say they are significantly under-utilizing their audio. This indicates that many companies understand the importance of speech data, but are struggling to make the best use of it.\n* **Companies recognize the importance of ASR - and plan to keep investing**: While it was not a requirement for respondents to currently be using ASR, 99% of respondents indicated that they currently implement ASR in some capacity as part of their business strategy, and a large majority plan to significantly increase their investment in 2021. In addition, 85% indicate ASR as important or very important to their future enterprise strategy.\n* **COVID-19 accelerated Automatic Speech Recognition adoption:** The pandemic has transformed technology and business principles across industries forever. 80% of respondents list COVID-19 as a top reason they accelerated the adoption of ASR.\n\nOur findings are proof that ASR is a critical element of any enterprise strategy and has the power to unlock powerful insights into the overall customer experience, how a product or service is working and much more. At Deepgram, we believe that voice data presents enterprises with a significant opportunity to gain more insight into their business, customers and markets, and we are committed to helping enterprises unlock the potential hidden within their voice data. For more information about Deepgram and to download a copy of the full data report, click [here](https://deepgram.com/state-of-asr-report/).";
}
function compiledContent() {
  return '<p>Speech is a powerful tool for the enterprise with the ability to unlock a whole new treasure trove of data. This space is growing and almost every company is investing in some form of Automatic Speech Recognition (ASR) - but the question remains, are they using speech to its full potential?</p>\n<p>To answer this question, we partnered with <a href="https://opusresearch.net/wordpress/">Opus Research</a> to examine the state of ASR in the enterprise. We surveyed 400 North American decision-makers, from managers to the C-suite, and in industries from retail and hospitality to financial services and government, to understand how they are currently using ASR and what future investment looks like. Through our research, we discovered specific opportunities where companies could expand ASR use to better support company growth. We also found that while companies are interested in capitalizing on the insights that ASR can unearth, they have yet to take full advantage of the technology. This may be a result of company decision-makers not understanding what their ASR provider can offer, or due to the sophistication of the technology itself. Here are some of the key takeaways we discovered through our research:</p>\n<ul>\n<li><strong>Siloed ASR use is hindering innovation</strong>: Currently, ASR is mainly used for operational efficiency, compliance and regulatory mandates. Respondents are primarily leveraging ASR for cost savings (e.g., <a href="https://deepgram.com/solutions/contact-centers/">Contact Center</a> operational efficiencies and improved training) or cost avoidance (compliance), but most aren\u2019t utilizing it to fuel overall enterprise growth or to improve products and services with the exception of the retail and telecom industries. However, our findings revealed that there is a growing appetite for innovation-focused use cases where speech data is leveraged for real-time <a href="https://deepgram.com/solutions/speech-analytics/">speech analytics</a>, virtual assistants or <a href="https://deepgram.com/solutions/voicebots/">voicebots</a>, market research, etc.</li>\n<li><strong>Speech data is largely underutilized:</strong> 88% of respondents are using ASR to transcribe or analyze spoken conversational content. However, two-thirds of respondents say they are significantly under-utilizing their audio. This indicates that many companies understand the importance of speech data, but are struggling to make the best use of it.</li>\n<li><strong>Companies recognize the importance of ASR - and plan to keep investing</strong>: While it was not a requirement for respondents to currently be using ASR, 99% of respondents indicated that they currently implement ASR in some capacity as part of their business strategy, and a large majority plan to significantly increase their investment in 2021. In addition, 85% indicate ASR as important or very important to their future enterprise strategy.</li>\n<li><strong>COVID-19 accelerated Automatic Speech Recognition adoption:</strong> The pandemic has transformed technology and business principles across industries forever. 80% of respondents list COVID-19 as a top reason they accelerated the adoption of ASR.</li>\n</ul>\n<p>Our findings are proof that ASR is a critical element of any enterprise strategy and has the power to unlock powerful insights into the overall customer experience, how a product or service is working and much more. At Deepgram, we believe that voice data presents enterprises with a significant opportunity to gain more insight into their business, customers and markets, and we are committed to helping enterprises unlock the potential hidden within their voice data. For more information about Deepgram and to download a copy of the full data report, click <a href="https://deepgram.com/state-of-asr-report/">here</a>.</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/state-of-speech-our-new-data-report-reveals-asrs-untapped-potential/index.md", "https://blog.deepgram.com/", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>Speech is a powerful tool for the enterprise with the ability to unlock a whole new treasure trove of data. This space is growing and almost every company is investing in some form of Automatic Speech Recognition (ASR) - but the question remains, are they using speech to its full potential?</p>
<p>To answer this question, we partnered with <a href="https://opusresearch.net/wordpress/">Opus Research</a> to examine the state of ASR in the enterprise. We surveyed 400 North American decision-makers, from managers to the C-suite, and in industries from retail and hospitality to financial services and government, to understand how they are currently using ASR and what future investment looks like. Through our research, we discovered specific opportunities where companies could expand ASR use to better support company growth. We also found that while companies are interested in capitalizing on the insights that ASR can unearth, they have yet to take full advantage of the technology. This may be a result of company decision-makers not understanding what their ASR provider can offer, or due to the sophistication of the technology itself. Here are some of the key takeaways we discovered through our research:</p>
<ul>
<li><strong>Siloed ASR use is hindering innovation</strong>: Currently, ASR is mainly used for operational efficiency, compliance and regulatory mandates. Respondents are primarily leveraging ASR for cost savings (e.g., <a href="https://deepgram.com/solutions/contact-centers/">Contact Center</a> operational efficiencies and improved training) or cost avoidance (compliance), but most aren’t utilizing it to fuel overall enterprise growth or to improve products and services with the exception of the retail and telecom industries. However, our findings revealed that there is a growing appetite for innovation-focused use cases where speech data is leveraged for real-time <a href="https://deepgram.com/solutions/speech-analytics/">speech analytics</a>, virtual assistants or <a href="https://deepgram.com/solutions/voicebots/">voicebots</a>, market research, etc.</li>
<li><strong>Speech data is largely underutilized:</strong> 88% of respondents are using ASR to transcribe or analyze spoken conversational content. However, two-thirds of respondents say they are significantly under-utilizing their audio. This indicates that many companies understand the importance of speech data, but are struggling to make the best use of it.</li>
<li><strong>Companies recognize the importance of ASR - and plan to keep investing</strong>: While it was not a requirement for respondents to currently be using ASR, 99% of respondents indicated that they currently implement ASR in some capacity as part of their business strategy, and a large majority plan to significantly increase their investment in 2021. In addition, 85% indicate ASR as important or very important to their future enterprise strategy.</li>
<li><strong>COVID-19 accelerated Automatic Speech Recognition adoption:</strong> The pandemic has transformed technology and business principles across industries forever. 80% of respondents list COVID-19 as a top reason they accelerated the adoption of ASR.</li>
</ul>
<p>Our findings are proof that ASR is a critical element of any enterprise strategy and has the power to unlock powerful insights into the overall customer experience, how a product or service is working and much more. At Deepgram, we believe that voice data presents enterprises with a significant opportunity to gain more insight into their business, customers and markets, and we are committed to helping enterprises unlock the potential hidden within their voice data. For more information about Deepgram and to download a copy of the full data report, click <a href="https://deepgram.com/state-of-asr-report/">here</a>.</p>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/state-of-speech-our-new-data-report-reveals-asrs-untapped-potential/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
