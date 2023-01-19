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

const metadata = { "headings": [{ "depth": 2, "slug": "how-it-works", "text": "How It Works" }, { "depth": 2, "slug": "hackathon-experience", "text": "Hackathon Experience" }, { "depth": 2, "slug": "future-development", "text": "Future Development" }], "source": `\r
Back in January, we supported Hack Cambridge -- a 24-hour student hackathon. The team behind Triolingo wanted to help language learners gain confidence in conversation by practicing with a bot. I sat down with [Alba Navarro Rosales](https://github.com/Alba-NR), [Anoushka Kamazumdar](https://github.com/anoushkamazumdar), [Max Johnson](https://github.com/MaxTheComputerer), and [Megan Elisabeth Finch](https://github.com/meganelisabethfinch) to ask them about their project.\r
\r
"We were inspired by Deepgram's sponsor challenge to create something cool using speech recognition and were excited to see that it supported [several foreign languages](https://developers.deepgram.com/documentation/features/language/)," the team told me. "Over the past three years, the coronavirus pandemic has had a significant impact on schools, and travel restrictions have limited opportunities for foreign language learning abroad. During this time, the use of online language learning platforms such as Duolingo has soared, but these platforms cannot provide practice for speaking and listening skills. We created Triolingo to cater to this niche, allowing language learners to gain confidence in conversation through practice."\r
\r
## How It Works\r
\r
Users select a conversation topic and target language, and the Triolingo bot then begins a conversation with several topic-appropriate prompts. Users then record a verbal response sent for processing by the [Deepgram Python SDK](https://developers.deepgram.com/sdks-tools/).\r
\r
No two chats are the same as the multilingual chatbot is powered by GPT-3 [provided by OpenAI](https://openai.com/api/), which dynamically responds to prompts. Finally, responses are spoken back to users using a text-to-speech API.\r
\r
Care was taken to include extended topics beyond everyday and tourism-focused conversation -- prompts included culture, climate change, and politics.\r
\r
![The webpage shows two starter topics - food and lifestyle, and three advanced topics - environment, sustainability, and culture. Selecting a topic begins a conversation.](https://res.cloudinary.com/deepgram/image/upload/v1646156558/blog/2022/03/foreign-language-practice-triolingo/screenshot.png)\r
\r
## Hackathon Experience\r
\r
The Triolingo team had only participated in online hackathons before, so this was a new experience. As a large group of twelve people, they self-organized a random name picker and created three teams within the event's team size limit. "I've never used a GPT-3 API before, and it was both super cool and very impressive" said Alba.\r
\r
I asked the team about their experience using Deepgram, and Max said that "the performance was really good and accurate, even with background noise." As their project progressed, they were visited by other teams who had fun trying it out.\r
\r
## Future Development\r
\r
Given more time, the team would use additional Deepgram functionality such as [confidence](https://developers.deepgram.com/documentation/guides/transcription/#analyze-response) values in a Deepgram response to assess the user's pronunciation. Our [keywords](https://developers.deepgram.com/documentation/features/keywords/) feature would boost recognition of words related to the conversation topic and further improve the reliability of the speech recognition function.\r
\r
In terms of user interaction, the team would like to set contextual "challenges" or tasks to complete instead of just conversing without direction. For example, the user is presented with the scenario, "You are planning to watch a movie with a friend. Decide what movie you're going to watch and when and where you're going to meet." The system would keep track of whether the user and bot had agreed on these three things, and then congratulate the user when they had completed the challenge.\r
\r
There are different grammatical constructs in some languages depending on who you are talking to, such as different pronouns or verb endings. As a final idea, the bot could adopt the appropriate type of language according to the situation.\r
\r
You can try out a [hosted version of Triolingo](https://triolingo.blockfour.co.uk/), and check out the [code on GitHub](https://github.com/meganelisabethfinch/HackCambridgeAtlas).\r
\r
        `, "html": '<p>Back in January, we supported Hack Cambridge \u2014 a 24-hour student hackathon. The team behind Triolingo wanted to help language learners gain confidence in conversation by practicing with a bot. I sat down with <a href="https://github.com/Alba-NR">Alba Navarro Rosales</a>, <a href="https://github.com/anoushkamazumdar">Anoushka Kamazumdar</a>, <a href="https://github.com/MaxTheComputerer">Max Johnson</a>, and <a href="https://github.com/meganelisabethfinch">Megan Elisabeth Finch</a> to ask them about their project.</p>\n<p>\u201CWe were inspired by Deepgram\u2019s sponsor challenge to create something cool using speech recognition and were excited to see that it supported <a href="https://developers.deepgram.com/documentation/features/language/">several foreign languages</a>,\u201D the team told me. \u201COver the past three years, the coronavirus pandemic has had a significant impact on schools, and travel restrictions have limited opportunities for foreign language learning abroad. During this time, the use of online language learning platforms such as Duolingo has soared, but these platforms cannot provide practice for speaking and listening skills. We created Triolingo to cater to this niche, allowing language learners to gain confidence in conversation through practice.\u201D</p>\n<h2 id="how-it-works">How It Works</h2>\n<p>Users select a conversation topic and target language, and the Triolingo bot then begins a conversation with several topic-appropriate prompts. Users then record a verbal response sent for processing by the <a href="https://developers.deepgram.com/sdks-tools/">Deepgram Python SDK</a>.</p>\n<p>No two chats are the same as the multilingual chatbot is powered by GPT-3 <a href="https://openai.com/api/">provided by OpenAI</a>, which dynamically responds to prompts. Finally, responses are spoken back to users using a text-to-speech API.</p>\n<p>Care was taken to include extended topics beyond everyday and tourism-focused conversation \u2014 prompts included culture, climate change, and politics.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1646156558/blog/2022/03/foreign-language-practice-triolingo/screenshot.png" alt="The webpage shows two starter topics - food and lifestyle, and three advanced topics - environment, sustainability, and culture. Selecting a topic begins a conversation."></p>\n<h2 id="hackathon-experience">Hackathon Experience</h2>\n<p>The Triolingo team had only participated in online hackathons before, so this was a new experience. As a large group of twelve people, they self-organized a random name picker and created three teams within the event\u2019s team size limit. \u201CI\u2019ve never used a GPT-3 API before, and it was both super cool and very impressive\u201D said Alba.</p>\n<p>I asked the team about their experience using Deepgram, and Max said that \u201Cthe performance was really good and accurate, even with background noise.\u201D As their project progressed, they were visited by other teams who had fun trying it out.</p>\n<h2 id="future-development">Future Development</h2>\n<p>Given more time, the team would use additional Deepgram functionality such as <a href="https://developers.deepgram.com/documentation/guides/transcription/#analyze-response">confidence</a> values in a Deepgram response to assess the user\u2019s pronunciation. Our <a href="https://developers.deepgram.com/documentation/features/keywords/">keywords</a> feature would boost recognition of words related to the conversation topic and further improve the reliability of the speech recognition function.</p>\n<p>In terms of user interaction, the team would like to set contextual \u201Cchallenges\u201D or tasks to complete instead of just conversing without direction. For example, the user is presented with the scenario, \u201CYou are planning to watch a movie with a friend. Decide what movie you\u2019re going to watch and when and where you\u2019re going to meet.\u201D The system would keep track of whether the user and bot had agreed on these three things, and then congratulate the user when they had completed the challenge.</p>\n<p>There are different grammatical constructs in some languages depending on who you are talking to, such as different pronouns or verb endings. As a final idea, the bot could adopt the appropriate type of language according to the situation.</p>\n<p>You can try out a <a href="https://triolingo.blockfour.co.uk/">hosted version of Triolingo</a>, and check out the <a href="https://github.com/meganelisabethfinch/HackCambridgeAtlas">code on GitHub</a>.</p>' };
const frontmatter = { "title": "Sharpen Your Foreign Language Skills with Triolingo's Chatbot", "description": "With Deepgram and GPT-3, the team behind Triolingo created a realistic multilingual chatbot to help language learners gain confidence in conversation. Read about it here.", "date": "2022-03-17T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1646156543/blog/2022/03/foreign-language-practice-triolingo/cover.jpg", "authors": ["kevin-lewis"], "category": "project-showcase", "tags": ["machine-learning", "gpt-3"], "seo": { "title": "Sharpen Your Foreign Language Skills with Triolingo's Chatbot", "description": "With Deepgram and GPT-3, the team behind Triolingo created a realistic multilingual chatbot to help language learners gain confidence in conversation. Read about it here." }, "shorturls": { "share": "https://dpgr.am/8d8733c", "twitter": "https://dpgr.am/f1eccfe", "linkedin": "https://dpgr.am/96c7dfd", "reddit": "https://dpgr.am/b41771a", "facebook": "https://dpgr.am/82c0534" }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661454026/blog/foreign-language-practice-triolingo/ograph.png" }, "astro": { "headings": [{ "depth": 2, "slug": "how-it-works", "text": "How It Works" }, { "depth": 2, "slug": "hackathon-experience", "text": "Hackathon Experience" }, { "depth": 2, "slug": "future-development", "text": "Future Development" }], "source": `\r
Back in January, we supported Hack Cambridge -- a 24-hour student hackathon. The team behind Triolingo wanted to help language learners gain confidence in conversation by practicing with a bot. I sat down with [Alba Navarro Rosales](https://github.com/Alba-NR), [Anoushka Kamazumdar](https://github.com/anoushkamazumdar), [Max Johnson](https://github.com/MaxTheComputerer), and [Megan Elisabeth Finch](https://github.com/meganelisabethfinch) to ask them about their project.\r
\r
"We were inspired by Deepgram's sponsor challenge to create something cool using speech recognition and were excited to see that it supported [several foreign languages](https://developers.deepgram.com/documentation/features/language/)," the team told me. "Over the past three years, the coronavirus pandemic has had a significant impact on schools, and travel restrictions have limited opportunities for foreign language learning abroad. During this time, the use of online language learning platforms such as Duolingo has soared, but these platforms cannot provide practice for speaking and listening skills. We created Triolingo to cater to this niche, allowing language learners to gain confidence in conversation through practice."\r
\r
## How It Works\r
\r
Users select a conversation topic and target language, and the Triolingo bot then begins a conversation with several topic-appropriate prompts. Users then record a verbal response sent for processing by the [Deepgram Python SDK](https://developers.deepgram.com/sdks-tools/).\r
\r
No two chats are the same as the multilingual chatbot is powered by GPT-3 [provided by OpenAI](https://openai.com/api/), which dynamically responds to prompts. Finally, responses are spoken back to users using a text-to-speech API.\r
\r
Care was taken to include extended topics beyond everyday and tourism-focused conversation -- prompts included culture, climate change, and politics.\r
\r
![The webpage shows two starter topics - food and lifestyle, and three advanced topics - environment, sustainability, and culture. Selecting a topic begins a conversation.](https://res.cloudinary.com/deepgram/image/upload/v1646156558/blog/2022/03/foreign-language-practice-triolingo/screenshot.png)\r
\r
## Hackathon Experience\r
\r
The Triolingo team had only participated in online hackathons before, so this was a new experience. As a large group of twelve people, they self-organized a random name picker and created three teams within the event's team size limit. "I've never used a GPT-3 API before, and it was both super cool and very impressive" said Alba.\r
\r
I asked the team about their experience using Deepgram, and Max said that "the performance was really good and accurate, even with background noise." As their project progressed, they were visited by other teams who had fun trying it out.\r
\r
## Future Development\r
\r
Given more time, the team would use additional Deepgram functionality such as [confidence](https://developers.deepgram.com/documentation/guides/transcription/#analyze-response) values in a Deepgram response to assess the user's pronunciation. Our [keywords](https://developers.deepgram.com/documentation/features/keywords/) feature would boost recognition of words related to the conversation topic and further improve the reliability of the speech recognition function.\r
\r
In terms of user interaction, the team would like to set contextual "challenges" or tasks to complete instead of just conversing without direction. For example, the user is presented with the scenario, "You are planning to watch a movie with a friend. Decide what movie you're going to watch and when and where you're going to meet." The system would keep track of whether the user and bot had agreed on these three things, and then congratulate the user when they had completed the challenge.\r
\r
There are different grammatical constructs in some languages depending on who you are talking to, such as different pronouns or verb endings. As a final idea, the bot could adopt the appropriate type of language according to the situation.\r
\r
You can try out a [hosted version of Triolingo](https://triolingo.blockfour.co.uk/), and check out the [code on GitHub](https://github.com/meganelisabethfinch/HackCambridgeAtlas).\r
\r
        `, "html": '<p>Back in January, we supported Hack Cambridge \u2014 a 24-hour student hackathon. The team behind Triolingo wanted to help language learners gain confidence in conversation by practicing with a bot. I sat down with <a href="https://github.com/Alba-NR">Alba Navarro Rosales</a>, <a href="https://github.com/anoushkamazumdar">Anoushka Kamazumdar</a>, <a href="https://github.com/MaxTheComputerer">Max Johnson</a>, and <a href="https://github.com/meganelisabethfinch">Megan Elisabeth Finch</a> to ask them about their project.</p>\n<p>\u201CWe were inspired by Deepgram\u2019s sponsor challenge to create something cool using speech recognition and were excited to see that it supported <a href="https://developers.deepgram.com/documentation/features/language/">several foreign languages</a>,\u201D the team told me. \u201COver the past three years, the coronavirus pandemic has had a significant impact on schools, and travel restrictions have limited opportunities for foreign language learning abroad. During this time, the use of online language learning platforms such as Duolingo has soared, but these platforms cannot provide practice for speaking and listening skills. We created Triolingo to cater to this niche, allowing language learners to gain confidence in conversation through practice.\u201D</p>\n<h2 id="how-it-works">How It Works</h2>\n<p>Users select a conversation topic and target language, and the Triolingo bot then begins a conversation with several topic-appropriate prompts. Users then record a verbal response sent for processing by the <a href="https://developers.deepgram.com/sdks-tools/">Deepgram Python SDK</a>.</p>\n<p>No two chats are the same as the multilingual chatbot is powered by GPT-3 <a href="https://openai.com/api/">provided by OpenAI</a>, which dynamically responds to prompts. Finally, responses are spoken back to users using a text-to-speech API.</p>\n<p>Care was taken to include extended topics beyond everyday and tourism-focused conversation \u2014 prompts included culture, climate change, and politics.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1646156558/blog/2022/03/foreign-language-practice-triolingo/screenshot.png" alt="The webpage shows two starter topics - food and lifestyle, and three advanced topics - environment, sustainability, and culture. Selecting a topic begins a conversation."></p>\n<h2 id="hackathon-experience">Hackathon Experience</h2>\n<p>The Triolingo team had only participated in online hackathons before, so this was a new experience. As a large group of twelve people, they self-organized a random name picker and created three teams within the event\u2019s team size limit. \u201CI\u2019ve never used a GPT-3 API before, and it was both super cool and very impressive\u201D said Alba.</p>\n<p>I asked the team about their experience using Deepgram, and Max said that \u201Cthe performance was really good and accurate, even with background noise.\u201D As their project progressed, they were visited by other teams who had fun trying it out.</p>\n<h2 id="future-development">Future Development</h2>\n<p>Given more time, the team would use additional Deepgram functionality such as <a href="https://developers.deepgram.com/documentation/guides/transcription/#analyze-response">confidence</a> values in a Deepgram response to assess the user\u2019s pronunciation. Our <a href="https://developers.deepgram.com/documentation/features/keywords/">keywords</a> feature would boost recognition of words related to the conversation topic and further improve the reliability of the speech recognition function.</p>\n<p>In terms of user interaction, the team would like to set contextual \u201Cchallenges\u201D or tasks to complete instead of just conversing without direction. For example, the user is presented with the scenario, \u201CYou are planning to watch a movie with a friend. Decide what movie you\u2019re going to watch and when and where you\u2019re going to meet.\u201D The system would keep track of whether the user and bot had agreed on these three things, and then congratulate the user when they had completed the challenge.</p>\n<p>There are different grammatical constructs in some languages depending on who you are talking to, such as different pronouns or verb endings. As a final idea, the bot could adopt the appropriate type of language according to the situation.</p>\n<p>You can try out a <a href="https://triolingo.blockfour.co.uk/">hosted version of Triolingo</a>, and check out the <a href="https://github.com/meganelisabethfinch/HackCambridgeAtlas">code on GitHub</a>.</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/foreign-language-practice-triolingo/index.md" };
function rawContent() {
  return `\r
Back in January, we supported Hack Cambridge -- a 24-hour student hackathon. The team behind Triolingo wanted to help language learners gain confidence in conversation by practicing with a bot. I sat down with [Alba Navarro Rosales](https://github.com/Alba-NR), [Anoushka Kamazumdar](https://github.com/anoushkamazumdar), [Max Johnson](https://github.com/MaxTheComputerer), and [Megan Elisabeth Finch](https://github.com/meganelisabethfinch) to ask them about their project.\r
\r
"We were inspired by Deepgram's sponsor challenge to create something cool using speech recognition and were excited to see that it supported [several foreign languages](https://developers.deepgram.com/documentation/features/language/)," the team told me. "Over the past three years, the coronavirus pandemic has had a significant impact on schools, and travel restrictions have limited opportunities for foreign language learning abroad. During this time, the use of online language learning platforms such as Duolingo has soared, but these platforms cannot provide practice for speaking and listening skills. We created Triolingo to cater to this niche, allowing language learners to gain confidence in conversation through practice."\r
\r
## How It Works\r
\r
Users select a conversation topic and target language, and the Triolingo bot then begins a conversation with several topic-appropriate prompts. Users then record a verbal response sent for processing by the [Deepgram Python SDK](https://developers.deepgram.com/sdks-tools/).\r
\r
No two chats are the same as the multilingual chatbot is powered by GPT-3 [provided by OpenAI](https://openai.com/api/), which dynamically responds to prompts. Finally, responses are spoken back to users using a text-to-speech API.\r
\r
Care was taken to include extended topics beyond everyday and tourism-focused conversation -- prompts included culture, climate change, and politics.\r
\r
![The webpage shows two starter topics - food and lifestyle, and three advanced topics - environment, sustainability, and culture. Selecting a topic begins a conversation.](https://res.cloudinary.com/deepgram/image/upload/v1646156558/blog/2022/03/foreign-language-practice-triolingo/screenshot.png)\r
\r
## Hackathon Experience\r
\r
The Triolingo team had only participated in online hackathons before, so this was a new experience. As a large group of twelve people, they self-organized a random name picker and created three teams within the event's team size limit. "I've never used a GPT-3 API before, and it was both super cool and very impressive" said Alba.\r
\r
I asked the team about their experience using Deepgram, and Max said that "the performance was really good and accurate, even with background noise." As their project progressed, they were visited by other teams who had fun trying it out.\r
\r
## Future Development\r
\r
Given more time, the team would use additional Deepgram functionality such as [confidence](https://developers.deepgram.com/documentation/guides/transcription/#analyze-response) values in a Deepgram response to assess the user's pronunciation. Our [keywords](https://developers.deepgram.com/documentation/features/keywords/) feature would boost recognition of words related to the conversation topic and further improve the reliability of the speech recognition function.\r
\r
In terms of user interaction, the team would like to set contextual "challenges" or tasks to complete instead of just conversing without direction. For example, the user is presented with the scenario, "You are planning to watch a movie with a friend. Decide what movie you're going to watch and when and where you're going to meet." The system would keep track of whether the user and bot had agreed on these three things, and then congratulate the user when they had completed the challenge.\r
\r
There are different grammatical constructs in some languages depending on who you are talking to, such as different pronouns or verb endings. As a final idea, the bot could adopt the appropriate type of language according to the situation.\r
\r
You can try out a [hosted version of Triolingo](https://triolingo.blockfour.co.uk/), and check out the [code on GitHub](https://github.com/meganelisabethfinch/HackCambridgeAtlas).\r
\r
        `;
}
function compiledContent() {
  return '<p>Back in January, we supported Hack Cambridge \u2014 a 24-hour student hackathon. The team behind Triolingo wanted to help language learners gain confidence in conversation by practicing with a bot. I sat down with <a href="https://github.com/Alba-NR">Alba Navarro Rosales</a>, <a href="https://github.com/anoushkamazumdar">Anoushka Kamazumdar</a>, <a href="https://github.com/MaxTheComputerer">Max Johnson</a>, and <a href="https://github.com/meganelisabethfinch">Megan Elisabeth Finch</a> to ask them about their project.</p>\n<p>\u201CWe were inspired by Deepgram\u2019s sponsor challenge to create something cool using speech recognition and were excited to see that it supported <a href="https://developers.deepgram.com/documentation/features/language/">several foreign languages</a>,\u201D the team told me. \u201COver the past three years, the coronavirus pandemic has had a significant impact on schools, and travel restrictions have limited opportunities for foreign language learning abroad. During this time, the use of online language learning platforms such as Duolingo has soared, but these platforms cannot provide practice for speaking and listening skills. We created Triolingo to cater to this niche, allowing language learners to gain confidence in conversation through practice.\u201D</p>\n<h2 id="how-it-works">How It Works</h2>\n<p>Users select a conversation topic and target language, and the Triolingo bot then begins a conversation with several topic-appropriate prompts. Users then record a verbal response sent for processing by the <a href="https://developers.deepgram.com/sdks-tools/">Deepgram Python SDK</a>.</p>\n<p>No two chats are the same as the multilingual chatbot is powered by GPT-3 <a href="https://openai.com/api/">provided by OpenAI</a>, which dynamically responds to prompts. Finally, responses are spoken back to users using a text-to-speech API.</p>\n<p>Care was taken to include extended topics beyond everyday and tourism-focused conversation \u2014 prompts included culture, climate change, and politics.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1646156558/blog/2022/03/foreign-language-practice-triolingo/screenshot.png" alt="The webpage shows two starter topics - food and lifestyle, and three advanced topics - environment, sustainability, and culture. Selecting a topic begins a conversation."></p>\n<h2 id="hackathon-experience">Hackathon Experience</h2>\n<p>The Triolingo team had only participated in online hackathons before, so this was a new experience. As a large group of twelve people, they self-organized a random name picker and created three teams within the event\u2019s team size limit. \u201CI\u2019ve never used a GPT-3 API before, and it was both super cool and very impressive\u201D said Alba.</p>\n<p>I asked the team about their experience using Deepgram, and Max said that \u201Cthe performance was really good and accurate, even with background noise.\u201D As their project progressed, they were visited by other teams who had fun trying it out.</p>\n<h2 id="future-development">Future Development</h2>\n<p>Given more time, the team would use additional Deepgram functionality such as <a href="https://developers.deepgram.com/documentation/guides/transcription/#analyze-response">confidence</a> values in a Deepgram response to assess the user\u2019s pronunciation. Our <a href="https://developers.deepgram.com/documentation/features/keywords/">keywords</a> feature would boost recognition of words related to the conversation topic and further improve the reliability of the speech recognition function.</p>\n<p>In terms of user interaction, the team would like to set contextual \u201Cchallenges\u201D or tasks to complete instead of just conversing without direction. For example, the user is presented with the scenario, \u201CYou are planning to watch a movie with a friend. Decide what movie you\u2019re going to watch and when and where you\u2019re going to meet.\u201D The system would keep track of whether the user and bot had agreed on these three things, and then congratulate the user when they had completed the challenge.</p>\n<p>There are different grammatical constructs in some languages depending on who you are talking to, such as different pronouns or verb endings. As a final idea, the bot could adopt the appropriate type of language according to the situation.</p>\n<p>You can try out a <a href="https://triolingo.blockfour.co.uk/">hosted version of Triolingo</a>, and check out the <a href="https://github.com/meganelisabethfinch/HackCambridgeAtlas">code on GitHub</a>.</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/foreign-language-practice-triolingo/index.md", "https://blog.deepgram.com/", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>Back in January, we supported Hack Cambridge — a 24-hour student hackathon. The team behind Triolingo wanted to help language learners gain confidence in conversation by practicing with a bot. I sat down with <a href="https://github.com/Alba-NR">Alba Navarro Rosales</a>, <a href="https://github.com/anoushkamazumdar">Anoushka Kamazumdar</a>, <a href="https://github.com/MaxTheComputerer">Max Johnson</a>, and <a href="https://github.com/meganelisabethfinch">Megan Elisabeth Finch</a> to ask them about their project.</p>
<p>“We were inspired by Deepgram’s sponsor challenge to create something cool using speech recognition and were excited to see that it supported <a href="https://developers.deepgram.com/documentation/features/language/">several foreign languages</a>,” the team told me. “Over the past three years, the coronavirus pandemic has had a significant impact on schools, and travel restrictions have limited opportunities for foreign language learning abroad. During this time, the use of online language learning platforms such as Duolingo has soared, but these platforms cannot provide practice for speaking and listening skills. We created Triolingo to cater to this niche, allowing language learners to gain confidence in conversation through practice.”</p>
<h2 id="how-it-works">How It Works</h2>
<p>Users select a conversation topic and target language, and the Triolingo bot then begins a conversation with several topic-appropriate prompts. Users then record a verbal response sent for processing by the <a href="https://developers.deepgram.com/sdks-tools/">Deepgram Python SDK</a>.</p>
<p>No two chats are the same as the multilingual chatbot is powered by GPT-3 <a href="https://openai.com/api/">provided by OpenAI</a>, which dynamically responds to prompts. Finally, responses are spoken back to users using a text-to-speech API.</p>
<p>Care was taken to include extended topics beyond everyday and tourism-focused conversation — prompts included culture, climate change, and politics.</p>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1646156558/blog/2022/03/foreign-language-practice-triolingo/screenshot.png" alt="The webpage shows two starter topics - food and lifestyle, and three advanced topics - environment, sustainability, and culture. Selecting a topic begins a conversation."></p>
<h2 id="hackathon-experience">Hackathon Experience</h2>
<p>The Triolingo team had only participated in online hackathons before, so this was a new experience. As a large group of twelve people, they self-organized a random name picker and created three teams within the event’s team size limit. “I’ve never used a GPT-3 API before, and it was both super cool and very impressive” said Alba.</p>
<p>I asked the team about their experience using Deepgram, and Max said that “the performance was really good and accurate, even with background noise.” As their project progressed, they were visited by other teams who had fun trying it out.</p>
<h2 id="future-development">Future Development</h2>
<p>Given more time, the team would use additional Deepgram functionality such as <a href="https://developers.deepgram.com/documentation/guides/transcription/#analyze-response">confidence</a> values in a Deepgram response to assess the user’s pronunciation. Our <a href="https://developers.deepgram.com/documentation/features/keywords/">keywords</a> feature would boost recognition of words related to the conversation topic and further improve the reliability of the speech recognition function.</p>
<p>In terms of user interaction, the team would like to set contextual “challenges” or tasks to complete instead of just conversing without direction. For example, the user is presented with the scenario, “You are planning to watch a movie with a friend. Decide what movie you’re going to watch and when and where you’re going to meet.” The system would keep track of whether the user and bot had agreed on these three things, and then congratulate the user when they had completed the challenge.</p>
<p>There are different grammatical constructs in some languages depending on who you are talking to, such as different pronouns or verb endings. As a final idea, the bot could adopt the appropriate type of language according to the situation.</p>
<p>You can try out a <a href="https://triolingo.blockfour.co.uk/">hosted version of Triolingo</a>, and check out the <a href="https://github.com/meganelisabethfinch/HackCambridgeAtlas">code on GitHub</a>.</p>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/foreign-language-practice-triolingo/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
