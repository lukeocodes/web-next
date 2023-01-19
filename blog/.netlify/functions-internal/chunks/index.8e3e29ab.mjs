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

const metadata = { "headings": [], "source": "\r\nDeepgram is excited to continue executing the vision of having everyone heard and understood through speech recognition.  To that end, we are announcing five new languages and three new use case speech models.  In addition, we have improved our Hindi and Spanish language models and our Conversational AI and Meetings models.  These improvements mean better accuracy for your transcription applications. Through transfer learning backed by our End-to-End Deep Learning architecture and the process of creating conversational audio datasets for training, we have been able to achieve very high accuracy on our new speech models.  Our new models are trained on real conversations, not Libraspeech type datasets of people reading audiobooks because no one talks like they are reading audiobooks.  This allows our speech models to better transcribe jargon, accents, dialects, code-switching (switching from Hindi to English words), terminology (ROI, EBITDA), and alphanumerics.  This means our models provide better real-world transcription accuracy than standard language or general one-size-fits-all speech models. **Improved Production Language Models**\r\n\r\n*   Hindi (improved)\r\n*   Spanish (improved)\r\n\r\n**New Language Models**\r\n\r\n*   French\r\n*   French Canadian\r\n*   German\r\n\r\nOur French and German language models are **FREE** for the next 30 days of use to collect more audio for training and improvement. [Sign up here](https://console.deepgram.com/) to get early access. **New and Improved Use Case Models**\r\n\r\n*   Conversational AI (improved)\r\n*   Earnings Calls\r\n*   Meetings (improved)\r\n*   Voicemail\r\n*   Video\r\n\r\nBecause of our ability to tailor these models for your use case, dialect, noise, accents, and terminology within weeks, consider these speech models as a foundation to even better accuracy for your specific use case.   Our internal testing with [Google](https://deepgram.com/compare-google-stt-alternatives/) and [Amazon's](https://deepgram.com/compare-amazon-transcribe-api-alternatives/) speech-to-text solutions show these new and improved models are better out of the gate. Test us out with our self-service [Console](https://console.deepgram.com) or let us perform a [guided test](https://deepgram.com/contact-us) and train a tailored model for your specific use case.\r\n", "html": '<p>Deepgram is excited to continue executing the vision of having everyone heard and understood through speech recognition.  To that end, we are announcing five new languages and three new use case speech models.  In addition, we have improved our Hindi and Spanish language models and our Conversational AI and Meetings models.  These improvements mean better accuracy for your transcription applications. Through transfer learning backed by our End-to-End Deep Learning architecture and the process of creating conversational audio datasets for training, we have been able to achieve very high accuracy on our new speech models.  Our new models are trained on real conversations, not Libraspeech type datasets of people reading audiobooks because no one talks like they are reading audiobooks.  This allows our speech models to better transcribe jargon, accents, dialects, code-switching (switching from Hindi to English words), terminology (ROI, EBITDA), and alphanumerics.  This means our models provide better real-world transcription accuracy than standard language or general one-size-fits-all speech models. <strong>Improved Production Language Models</strong></p>\n<ul>\n<li>Hindi (improved)</li>\n<li>Spanish (improved)</li>\n</ul>\n<p><strong>New Language Models</strong></p>\n<ul>\n<li>French</li>\n<li>French Canadian</li>\n<li>German</li>\n</ul>\n<p>Our French and German language models are <strong>FREE</strong> for the next 30 days of use to collect more audio for training and improvement. <a href="https://console.deepgram.com/">Sign up here</a> to get early access. <strong>New and Improved Use Case Models</strong></p>\n<ul>\n<li>Conversational AI (improved)</li>\n<li>Earnings Calls</li>\n<li>Meetings (improved)</li>\n<li>Voicemail</li>\n<li>Video</li>\n</ul>\n<p>Because of our ability to tailor these models for your use case, dialect, noise, accents, and terminology within weeks, consider these speech models as a foundation to even better accuracy for your specific use case.   Our internal testing with <a href="https://deepgram.com/compare-google-stt-alternatives/">Google</a> and <a href="https://deepgram.com/compare-amazon-transcribe-api-alternatives/">Amazon\u2019s</a> speech-to-text solutions show these new and improved models are better out of the gate. Test us out with our self-service <a href="https://console.deepgram.com">Console</a> or let us perform a <a href="https://deepgram.com/contact-us">guided test</a> and train a tailored model for your specific use case.</p>' };
const frontmatter = { "title": "New Releases - Five New Languages and Three New Use Case Speech Models", "description": "Deepgram announces five new languages (French, French Canadian, German, Hindi and Spanish) and three new use case (Earnings Calls, Voicemail, and Video) speech models", "date": "2021-11-18T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1661981386/blog/new-releases-five-new-languages-and-three-new-use-case-speech-models/blog-updated-models-use-cases-11-2021-thumb-554x22.png", "authors": ["natalie-rutgers"], "category": "product-news", "tags": ["language", "speech-models"], "seo": { "title": "New Releases - Five New Languages and Three New Use Case Speech Models", "description": "Deepgram announces five new languages (French, French Canadian, German, Hindi and Spanish) and three new use case (Earnings Calls, Voicemail, and Video) speech models" }, "shorturls": { "share": "https://dpgr.am/164df95", "twitter": "https://dpgr.am/7ad57df", "linkedin": "https://dpgr.am/5e47166", "reddit": "https://dpgr.am/fd2dffb", "facebook": "https://dpgr.am/98b4b27" }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661981386/blog/new-releases-five-new-languages-and-three-new-use-case-speech-models/blog-updated-models-use-cases-11-2021-thumb-554x22.png" }, "astro": { "headings": [], "source": "\r\nDeepgram is excited to continue executing the vision of having everyone heard and understood through speech recognition.  To that end, we are announcing five new languages and three new use case speech models.  In addition, we have improved our Hindi and Spanish language models and our Conversational AI and Meetings models.  These improvements mean better accuracy for your transcription applications. Through transfer learning backed by our End-to-End Deep Learning architecture and the process of creating conversational audio datasets for training, we have been able to achieve very high accuracy on our new speech models.  Our new models are trained on real conversations, not Libraspeech type datasets of people reading audiobooks because no one talks like they are reading audiobooks.  This allows our speech models to better transcribe jargon, accents, dialects, code-switching (switching from Hindi to English words), terminology (ROI, EBITDA), and alphanumerics.  This means our models provide better real-world transcription accuracy than standard language or general one-size-fits-all speech models. **Improved Production Language Models**\r\n\r\n*   Hindi (improved)\r\n*   Spanish (improved)\r\n\r\n**New Language Models**\r\n\r\n*   French\r\n*   French Canadian\r\n*   German\r\n\r\nOur French and German language models are **FREE** for the next 30 days of use to collect more audio for training and improvement. [Sign up here](https://console.deepgram.com/) to get early access. **New and Improved Use Case Models**\r\n\r\n*   Conversational AI (improved)\r\n*   Earnings Calls\r\n*   Meetings (improved)\r\n*   Voicemail\r\n*   Video\r\n\r\nBecause of our ability to tailor these models for your use case, dialect, noise, accents, and terminology within weeks, consider these speech models as a foundation to even better accuracy for your specific use case.   Our internal testing with [Google](https://deepgram.com/compare-google-stt-alternatives/) and [Amazon's](https://deepgram.com/compare-amazon-transcribe-api-alternatives/) speech-to-text solutions show these new and improved models are better out of the gate. Test us out with our self-service [Console](https://console.deepgram.com) or let us perform a [guided test](https://deepgram.com/contact-us) and train a tailored model for your specific use case.\r\n", "html": '<p>Deepgram is excited to continue executing the vision of having everyone heard and understood through speech recognition.  To that end, we are announcing five new languages and three new use case speech models.  In addition, we have improved our Hindi and Spanish language models and our Conversational AI and Meetings models.  These improvements mean better accuracy for your transcription applications. Through transfer learning backed by our End-to-End Deep Learning architecture and the process of creating conversational audio datasets for training, we have been able to achieve very high accuracy on our new speech models.  Our new models are trained on real conversations, not Libraspeech type datasets of people reading audiobooks because no one talks like they are reading audiobooks.  This allows our speech models to better transcribe jargon, accents, dialects, code-switching (switching from Hindi to English words), terminology (ROI, EBITDA), and alphanumerics.  This means our models provide better real-world transcription accuracy than standard language or general one-size-fits-all speech models. <strong>Improved Production Language Models</strong></p>\n<ul>\n<li>Hindi (improved)</li>\n<li>Spanish (improved)</li>\n</ul>\n<p><strong>New Language Models</strong></p>\n<ul>\n<li>French</li>\n<li>French Canadian</li>\n<li>German</li>\n</ul>\n<p>Our French and German language models are <strong>FREE</strong> for the next 30 days of use to collect more audio for training and improvement. <a href="https://console.deepgram.com/">Sign up here</a> to get early access. <strong>New and Improved Use Case Models</strong></p>\n<ul>\n<li>Conversational AI (improved)</li>\n<li>Earnings Calls</li>\n<li>Meetings (improved)</li>\n<li>Voicemail</li>\n<li>Video</li>\n</ul>\n<p>Because of our ability to tailor these models for your use case, dialect, noise, accents, and terminology within weeks, consider these speech models as a foundation to even better accuracy for your specific use case.   Our internal testing with <a href="https://deepgram.com/compare-google-stt-alternatives/">Google</a> and <a href="https://deepgram.com/compare-amazon-transcribe-api-alternatives/">Amazon\u2019s</a> speech-to-text solutions show these new and improved models are better out of the gate. Test us out with our self-service <a href="https://console.deepgram.com">Console</a> or let us perform a <a href="https://deepgram.com/contact-us">guided test</a> and train a tailored model for your specific use case.</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/new-releases-five-new-languages-and-three-new-use-case-speech-models/index.md" };
function rawContent() {
  return "\r\nDeepgram is excited to continue executing the vision of having everyone heard and understood through speech recognition.  To that end, we are announcing five new languages and three new use case speech models.  In addition, we have improved our Hindi and Spanish language models and our Conversational AI and Meetings models.  These improvements mean better accuracy for your transcription applications. Through transfer learning backed by our End-to-End Deep Learning architecture and the process of creating conversational audio datasets for training, we have been able to achieve very high accuracy on our new speech models.  Our new models are trained on real conversations, not Libraspeech type datasets of people reading audiobooks because no one talks like they are reading audiobooks.  This allows our speech models to better transcribe jargon, accents, dialects, code-switching (switching from Hindi to English words), terminology (ROI, EBITDA), and alphanumerics.  This means our models provide better real-world transcription accuracy than standard language or general one-size-fits-all speech models. **Improved Production Language Models**\r\n\r\n*   Hindi (improved)\r\n*   Spanish (improved)\r\n\r\n**New Language Models**\r\n\r\n*   French\r\n*   French Canadian\r\n*   German\r\n\r\nOur French and German language models are **FREE** for the next 30 days of use to collect more audio for training and improvement. [Sign up here](https://console.deepgram.com/) to get early access. **New and Improved Use Case Models**\r\n\r\n*   Conversational AI (improved)\r\n*   Earnings Calls\r\n*   Meetings (improved)\r\n*   Voicemail\r\n*   Video\r\n\r\nBecause of our ability to tailor these models for your use case, dialect, noise, accents, and terminology within weeks, consider these speech models as a foundation to even better accuracy for your specific use case.   Our internal testing with [Google](https://deepgram.com/compare-google-stt-alternatives/) and [Amazon's](https://deepgram.com/compare-amazon-transcribe-api-alternatives/) speech-to-text solutions show these new and improved models are better out of the gate. Test us out with our self-service [Console](https://console.deepgram.com) or let us perform a [guided test](https://deepgram.com/contact-us) and train a tailored model for your specific use case.\r\n";
}
function compiledContent() {
  return '<p>Deepgram is excited to continue executing the vision of having everyone heard and understood through speech recognition.  To that end, we are announcing five new languages and three new use case speech models.  In addition, we have improved our Hindi and Spanish language models and our Conversational AI and Meetings models.  These improvements mean better accuracy for your transcription applications. Through transfer learning backed by our End-to-End Deep Learning architecture and the process of creating conversational audio datasets for training, we have been able to achieve very high accuracy on our new speech models.  Our new models are trained on real conversations, not Libraspeech type datasets of people reading audiobooks because no one talks like they are reading audiobooks.  This allows our speech models to better transcribe jargon, accents, dialects, code-switching (switching from Hindi to English words), terminology (ROI, EBITDA), and alphanumerics.  This means our models provide better real-world transcription accuracy than standard language or general one-size-fits-all speech models. <strong>Improved Production Language Models</strong></p>\n<ul>\n<li>Hindi (improved)</li>\n<li>Spanish (improved)</li>\n</ul>\n<p><strong>New Language Models</strong></p>\n<ul>\n<li>French</li>\n<li>French Canadian</li>\n<li>German</li>\n</ul>\n<p>Our French and German language models are <strong>FREE</strong> for the next 30 days of use to collect more audio for training and improvement. <a href="https://console.deepgram.com/">Sign up here</a> to get early access. <strong>New and Improved Use Case Models</strong></p>\n<ul>\n<li>Conversational AI (improved)</li>\n<li>Earnings Calls</li>\n<li>Meetings (improved)</li>\n<li>Voicemail</li>\n<li>Video</li>\n</ul>\n<p>Because of our ability to tailor these models for your use case, dialect, noise, accents, and terminology within weeks, consider these speech models as a foundation to even better accuracy for your specific use case.   Our internal testing with <a href="https://deepgram.com/compare-google-stt-alternatives/">Google</a> and <a href="https://deepgram.com/compare-amazon-transcribe-api-alternatives/">Amazon\u2019s</a> speech-to-text solutions show these new and improved models are better out of the gate. Test us out with our self-service <a href="https://console.deepgram.com">Console</a> or let us perform a <a href="https://deepgram.com/contact-us">guided test</a> and train a tailored model for your specific use case.</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/new-releases-five-new-languages-and-three-new-use-case-speech-models/index.md", "https://blog.deepgram.com/", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>Deepgram is excited to continue executing the vision of having everyone heard and understood through speech recognition.  To that end, we are announcing five new languages and three new use case speech models.  In addition, we have improved our Hindi and Spanish language models and our Conversational AI and Meetings models.  These improvements mean better accuracy for your transcription applications. Through transfer learning backed by our End-to-End Deep Learning architecture and the process of creating conversational audio datasets for training, we have been able to achieve very high accuracy on our new speech models.  Our new models are trained on real conversations, not Libraspeech type datasets of people reading audiobooks because no one talks like they are reading audiobooks.  This allows our speech models to better transcribe jargon, accents, dialects, code-switching (switching from Hindi to English words), terminology (ROI, EBITDA), and alphanumerics.  This means our models provide better real-world transcription accuracy than standard language or general one-size-fits-all speech models. <strong>Improved Production Language Models</strong></p>
<ul>
<li>Hindi (improved)</li>
<li>Spanish (improved)</li>
</ul>
<p><strong>New Language Models</strong></p>
<ul>
<li>French</li>
<li>French Canadian</li>
<li>German</li>
</ul>
<p>Our French and German language models are <strong>FREE</strong> for the next 30 days of use to collect more audio for training and improvement. <a href="https://console.deepgram.com/">Sign up here</a> to get early access. <strong>New and Improved Use Case Models</strong></p>
<ul>
<li>Conversational AI (improved)</li>
<li>Earnings Calls</li>
<li>Meetings (improved)</li>
<li>Voicemail</li>
<li>Video</li>
</ul>
<p>Because of our ability to tailor these models for your use case, dialect, noise, accents, and terminology within weeks, consider these speech models as a foundation to even better accuracy for your specific use case.   Our internal testing with <a href="https://deepgram.com/compare-google-stt-alternatives/">Google</a> and <a href="https://deepgram.com/compare-amazon-transcribe-api-alternatives/">Amazon’s</a> speech-to-text solutions show these new and improved models are better out of the gate. Test us out with our self-service <a href="https://console.deepgram.com">Console</a> or let us perform a <a href="https://deepgram.com/contact-us">guided test</a> and train a tailored model for your specific use case.</p>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/new-releases-five-new-languages-and-three-new-use-case-speech-models/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
