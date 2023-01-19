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

const metadata = { "headings": [{ "depth": 2, "slug": "current-solutions-and-their-problems", "text": "Current Solutions and Their Problems" }, { "depth": 3, "slug": "posted-slides-and-lecture-notes", "text": "Posted Slides and Lecture Notes" }, { "depth": 3, "slug": "class-recordings", "text": "Class Recordings" }, { "depth": 3, "slug": "in-class-notetaker", "text": "In-class Notetaker" }, { "depth": 2, "slug": "an-alternative-live-class-transcripts", "text": "An Alternative: Live Class Transcripts" }, { "depth": 2, "slug": "conclusion", "text": "Conclusion" }], "source": `If you've ever been in a large classroom for a lecture or talk, you've probably experienced struggling to hear the speaker. Even with modern A/V equipment (which isn't present in every classroom), it can still sometimes be hard to hear what a speaker is saying. Now imagine you're not a native speaker of English. Or you have issues with your hearing. Or you have a learning disability that makes it hard to keep up with spoken speech. Paired with poor classroom acoustics, any one of these issues can make it difficult for students to succeed. As a university lecturer, I've encountered all of these problems in the classroom. And it's hard to figure out how best to help students who are struggling with these issues. In this blogpost, I want to review some of the ways that these issues are currently dealt with, and then look at a new solution, powered by [automatic speech recognition](https://blog.deepgram.com/what-is-asr/), that's the best option for creating a classroom that's accessible to everyone.

## Current Solutions and Their Problems

I'm not the first person to realize that classroom lectures can present challenges to people from different backgrounds. In this section, I want to review some of the more traditional approaches to classroom accessibility and why they fall short.

### Posted Slides and Lecture Notes

One option that's become especially common in recent years is for professors to post their PowerPoint slides for students to review either before or after class. Although this can help, it doesn't address the fact that classes don't always follow the slides directly, and instructors often say other things in class (like answering questions, or reminding students about upcoming assignments).

### Class Recordings

Another option is to record lectures, and post them online for students to watch after class. This option has been especially popular during the pandemic, as students may be quarantining and not able to attend in person. But most students don't have time to effectively attend the same class twice. And that's especially true with students who might be having trouble understanding the content or keeping up with coursework, regardless of the reason; asking them to attend every class session twice, while also keeping up on their assignments, simply doesn't work.

### In-class Notetaker

One option for students with a documented disability is to have someone else in the class take notes for them-this is usually organized officially through the institution's disability services office, and pays another student in the class, who would be taking notes anyway, to share them with the student in question. This is better than some of the other options discussed. Since the content is coming directly from the lectures, students can use the notes afterwards to help clarify and understand course content. But this isn't available to all students (for example, non-native speakers), and it relies on the student taking notes to get it right. If they misunderstand something or get it wrong, that gets passed on to other students.

## An Alternative: Live Class Transcripts

What students need is the ability to revisit the material in a way that makes what happens in the classroom accessible to as many people as possible, and is something that can be used on the fly so that students have help understanding what is happening when it's happening. 

Our Senior Developer Advocate Kevin Lewis recently [built a tool to transcribe classroom lectures](https://blog.deepgram.com/classroom-captioner/), providing a live, automatically generated transcript to make classroom content more accessible. This method can also help people who have difficulty hearing the speaker, for whatever reason, or keeping track of what's been said and how the lecture is organized. Live transcripts are also useful for non-native speakers, who might hear a word they don't know, but not know how to spell it to look it up (a common problem with English)-and it works either during class from the live transcript, or by reviewing it later.

<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works"></WhitepaperPromo>

## Conclusion

Although there are lots of options for supporting students in the classroom, providing live transcriptions has definite advantages to support all students, regardless of their specific needs. If you'd like to see how in-class transcription can help you, [check out Kevin's blogpost with all the details](https://blog.deepgram.com/classroom-captioner/)\u2014and a one-click deploy. If you've got other ideas for using speech recognition in the classroom, you can contact us or fill out our [Speech-to-text Self Assessment](https://deepgram.typeform.com/to/d3zTk2eI) to see if Deepgram might be able to help.`, "html": '<p>If you\u2019ve ever been in a large classroom for a lecture or talk, you\u2019ve probably experienced struggling to hear the speaker. Even with modern A/V equipment (which isn\u2019t present in every classroom), it can still sometimes be hard to hear what a speaker is saying. Now imagine you\u2019re not a native speaker of English. Or you have issues with your hearing. Or you have a learning disability that makes it hard to keep up with spoken speech. Paired with poor classroom acoustics, any one of these issues can make it difficult for students to succeed. As a university lecturer, I\u2019ve encountered all of these problems in the classroom. And it\u2019s hard to figure out how best to help students who are struggling with these issues. In this blogpost, I want to review some of the ways that these issues are currently dealt with, and then look at a new solution, powered by <a href="https://blog.deepgram.com/what-is-asr/">automatic speech recognition</a>, that\u2019s the best option for creating a classroom that\u2019s accessible to everyone.</p>\n<h2 id="current-solutions-and-their-problems">Current Solutions and Their Problems</h2>\n<p>I\u2019m not the first person to realize that classroom lectures can present challenges to people from different backgrounds. In this section, I want to review some of the more traditional approaches to classroom accessibility and why they fall short.</p>\n<h3 id="posted-slides-and-lecture-notes">Posted Slides and Lecture Notes</h3>\n<p>One option that\u2019s become especially common in recent years is for professors to post their PowerPoint slides for students to review either before or after class. Although this can help, it doesn\u2019t address the fact that classes don\u2019t always follow the slides directly, and instructors often say other things in class (like answering questions, or reminding students about upcoming assignments).</p>\n<h3 id="class-recordings">Class Recordings</h3>\n<p>Another option is to record lectures, and post them online for students to watch after class. This option has been especially popular during the pandemic, as students may be quarantining and not able to attend in person. But most students don\u2019t have time to effectively attend the same class twice. And that\u2019s especially true with students who might be having trouble understanding the content or keeping up with coursework, regardless of the reason; asking them to attend every class session twice, while also keeping up on their assignments, simply doesn\u2019t work.</p>\n<h3 id="in-class-notetaker">In-class Notetaker</h3>\n<p>One option for students with a documented disability is to have someone else in the class take notes for them-this is usually organized officially through the institution\u2019s disability services office, and pays another student in the class, who would be taking notes anyway, to share them with the student in question. This is better than some of the other options discussed. Since the content is coming directly from the lectures, students can use the notes afterwards to help clarify and understand course content. But this isn\u2019t available to all students (for example, non-native speakers), and it relies on the student taking notes to get it right. If they misunderstand something or get it wrong, that gets passed on to other students.</p>\n<h2 id="an-alternative-live-class-transcripts">An Alternative: Live Class Transcripts</h2>\n<p>What students need is the ability to revisit the material in a way that makes what happens in the classroom accessible to as many people as possible, and is something that can be used on the fly so that students have help understanding what is happening when it\u2019s happening.</p>\n<p>Our Senior Developer Advocate Kevin Lewis recently <a href="https://blog.deepgram.com/classroom-captioner/">built a tool to transcribe classroom lectures</a>, providing a live, automatically generated transcript to make classroom content more accessible. This method can also help people who have difficulty hearing the speaker, for whatever reason, or keeping track of what\u2019s been said and how the lecture is organized. Live transcripts are also useful for non-native speakers, who might hear a word they don\u2019t know, but not know how to spell it to look it up (a common problem with English)-and it works either during class from the live transcript, or by reviewing it later.</p>\n<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works" />\n<h2 id="conclusion">Conclusion</h2>\n<p>Although there are lots of options for supporting students in the classroom, providing live transcriptions has definite advantages to support all students, regardless of their specific needs. If you\u2019d like to see how in-class transcription can help you, <a href="https://blog.deepgram.com/classroom-captioner/">check out Kevin\u2019s blogpost with all the details</a>\u2014and a one-click deploy. If you\u2019ve got other ideas for using speech recognition in the classroom, you can contact us or fill out our <a href="https://deepgram.typeform.com/to/d3zTk2eI">Speech-to-text Self Assessment</a> to see if Deepgram might be able to help.</p>' };
const frontmatter = { "title": "How Automatic Speech Recognition Can Help Educators", "description": "ASR in the classroom can support students with a wide range of learning needs. Learn how current tools are lacking and how ASR can help.", "date": "2022-03-11T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1661981410/blog/automatic-speech-recognition-education/How-ASR-can-help-educators-thumb-554x220%402x.png", "authors": ["chris-doty"], "category": "speech-trends", "tags": ["education"], "seo": { "title": "How Automatic Speech Recognition Can Help Educators", "description": "ASR in the classroom can support students with a wide range of learning needs. Learn how current tools are lacking and how ASR can help." }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661981410/blog/automatic-speech-recognition-education/How-ASR-can-help-educators-thumb-554x220%402x.png" }, "shorturls": { "share": "https://dpgr.am/14164ee", "twitter": "https://dpgr.am/b5fa773", "linkedin": "https://dpgr.am/f826d8b", "reddit": "https://dpgr.am/95e5d3b", "facebook": "https://dpgr.am/f9161d2" }, "astro": { "headings": [{ "depth": 2, "slug": "current-solutions-and-their-problems", "text": "Current Solutions and Their Problems" }, { "depth": 3, "slug": "posted-slides-and-lecture-notes", "text": "Posted Slides and Lecture Notes" }, { "depth": 3, "slug": "class-recordings", "text": "Class Recordings" }, { "depth": 3, "slug": "in-class-notetaker", "text": "In-class Notetaker" }, { "depth": 2, "slug": "an-alternative-live-class-transcripts", "text": "An Alternative: Live Class Transcripts" }, { "depth": 2, "slug": "conclusion", "text": "Conclusion" }], "source": `If you've ever been in a large classroom for a lecture or talk, you've probably experienced struggling to hear the speaker. Even with modern A/V equipment (which isn't present in every classroom), it can still sometimes be hard to hear what a speaker is saying. Now imagine you're not a native speaker of English. Or you have issues with your hearing. Or you have a learning disability that makes it hard to keep up with spoken speech. Paired with poor classroom acoustics, any one of these issues can make it difficult for students to succeed. As a university lecturer, I've encountered all of these problems in the classroom. And it's hard to figure out how best to help students who are struggling with these issues. In this blogpost, I want to review some of the ways that these issues are currently dealt with, and then look at a new solution, powered by [automatic speech recognition](https://blog.deepgram.com/what-is-asr/), that's the best option for creating a classroom that's accessible to everyone.

## Current Solutions and Their Problems

I'm not the first person to realize that classroom lectures can present challenges to people from different backgrounds. In this section, I want to review some of the more traditional approaches to classroom accessibility and why they fall short.

### Posted Slides and Lecture Notes

One option that's become especially common in recent years is for professors to post their PowerPoint slides for students to review either before or after class. Although this can help, it doesn't address the fact that classes don't always follow the slides directly, and instructors often say other things in class (like answering questions, or reminding students about upcoming assignments).

### Class Recordings

Another option is to record lectures, and post them online for students to watch after class. This option has been especially popular during the pandemic, as students may be quarantining and not able to attend in person. But most students don't have time to effectively attend the same class twice. And that's especially true with students who might be having trouble understanding the content or keeping up with coursework, regardless of the reason; asking them to attend every class session twice, while also keeping up on their assignments, simply doesn't work.

### In-class Notetaker

One option for students with a documented disability is to have someone else in the class take notes for them-this is usually organized officially through the institution's disability services office, and pays another student in the class, who would be taking notes anyway, to share them with the student in question. This is better than some of the other options discussed. Since the content is coming directly from the lectures, students can use the notes afterwards to help clarify and understand course content. But this isn't available to all students (for example, non-native speakers), and it relies on the student taking notes to get it right. If they misunderstand something or get it wrong, that gets passed on to other students.

## An Alternative: Live Class Transcripts

What students need is the ability to revisit the material in a way that makes what happens in the classroom accessible to as many people as possible, and is something that can be used on the fly so that students have help understanding what is happening when it's happening. 

Our Senior Developer Advocate Kevin Lewis recently [built a tool to transcribe classroom lectures](https://blog.deepgram.com/classroom-captioner/), providing a live, automatically generated transcript to make classroom content more accessible. This method can also help people who have difficulty hearing the speaker, for whatever reason, or keeping track of what's been said and how the lecture is organized. Live transcripts are also useful for non-native speakers, who might hear a word they don't know, but not know how to spell it to look it up (a common problem with English)-and it works either during class from the live transcript, or by reviewing it later.

<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works"></WhitepaperPromo>

## Conclusion

Although there are lots of options for supporting students in the classroom, providing live transcriptions has definite advantages to support all students, regardless of their specific needs. If you'd like to see how in-class transcription can help you, [check out Kevin's blogpost with all the details](https://blog.deepgram.com/classroom-captioner/)\u2014and a one-click deploy. If you've got other ideas for using speech recognition in the classroom, you can contact us or fill out our [Speech-to-text Self Assessment](https://deepgram.typeform.com/to/d3zTk2eI) to see if Deepgram might be able to help.`, "html": '<p>If you\u2019ve ever been in a large classroom for a lecture or talk, you\u2019ve probably experienced struggling to hear the speaker. Even with modern A/V equipment (which isn\u2019t present in every classroom), it can still sometimes be hard to hear what a speaker is saying. Now imagine you\u2019re not a native speaker of English. Or you have issues with your hearing. Or you have a learning disability that makes it hard to keep up with spoken speech. Paired with poor classroom acoustics, any one of these issues can make it difficult for students to succeed. As a university lecturer, I\u2019ve encountered all of these problems in the classroom. And it\u2019s hard to figure out how best to help students who are struggling with these issues. In this blogpost, I want to review some of the ways that these issues are currently dealt with, and then look at a new solution, powered by <a href="https://blog.deepgram.com/what-is-asr/">automatic speech recognition</a>, that\u2019s the best option for creating a classroom that\u2019s accessible to everyone.</p>\n<h2 id="current-solutions-and-their-problems">Current Solutions and Their Problems</h2>\n<p>I\u2019m not the first person to realize that classroom lectures can present challenges to people from different backgrounds. In this section, I want to review some of the more traditional approaches to classroom accessibility and why they fall short.</p>\n<h3 id="posted-slides-and-lecture-notes">Posted Slides and Lecture Notes</h3>\n<p>One option that\u2019s become especially common in recent years is for professors to post their PowerPoint slides for students to review either before or after class. Although this can help, it doesn\u2019t address the fact that classes don\u2019t always follow the slides directly, and instructors often say other things in class (like answering questions, or reminding students about upcoming assignments).</p>\n<h3 id="class-recordings">Class Recordings</h3>\n<p>Another option is to record lectures, and post them online for students to watch after class. This option has been especially popular during the pandemic, as students may be quarantining and not able to attend in person. But most students don\u2019t have time to effectively attend the same class twice. And that\u2019s especially true with students who might be having trouble understanding the content or keeping up with coursework, regardless of the reason; asking them to attend every class session twice, while also keeping up on their assignments, simply doesn\u2019t work.</p>\n<h3 id="in-class-notetaker">In-class Notetaker</h3>\n<p>One option for students with a documented disability is to have someone else in the class take notes for them-this is usually organized officially through the institution\u2019s disability services office, and pays another student in the class, who would be taking notes anyway, to share them with the student in question. This is better than some of the other options discussed. Since the content is coming directly from the lectures, students can use the notes afterwards to help clarify and understand course content. But this isn\u2019t available to all students (for example, non-native speakers), and it relies on the student taking notes to get it right. If they misunderstand something or get it wrong, that gets passed on to other students.</p>\n<h2 id="an-alternative-live-class-transcripts">An Alternative: Live Class Transcripts</h2>\n<p>What students need is the ability to revisit the material in a way that makes what happens in the classroom accessible to as many people as possible, and is something that can be used on the fly so that students have help understanding what is happening when it\u2019s happening.</p>\n<p>Our Senior Developer Advocate Kevin Lewis recently <a href="https://blog.deepgram.com/classroom-captioner/">built a tool to transcribe classroom lectures</a>, providing a live, automatically generated transcript to make classroom content more accessible. This method can also help people who have difficulty hearing the speaker, for whatever reason, or keeping track of what\u2019s been said and how the lecture is organized. Live transcripts are also useful for non-native speakers, who might hear a word they don\u2019t know, but not know how to spell it to look it up (a common problem with English)-and it works either during class from the live transcript, or by reviewing it later.</p>\n<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works" />\n<h2 id="conclusion">Conclusion</h2>\n<p>Although there are lots of options for supporting students in the classroom, providing live transcriptions has definite advantages to support all students, regardless of their specific needs. If you\u2019d like to see how in-class transcription can help you, <a href="https://blog.deepgram.com/classroom-captioner/">check out Kevin\u2019s blogpost with all the details</a>\u2014and a one-click deploy. If you\u2019ve got other ideas for using speech recognition in the classroom, you can contact us or fill out our <a href="https://deepgram.typeform.com/to/d3zTk2eI">Speech-to-text Self Assessment</a> to see if Deepgram might be able to help.</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/automatic-speech-recognition-education/index.md" };
function rawContent() {
  return `If you've ever been in a large classroom for a lecture or talk, you've probably experienced struggling to hear the speaker. Even with modern A/V equipment (which isn't present in every classroom), it can still sometimes be hard to hear what a speaker is saying. Now imagine you're not a native speaker of English. Or you have issues with your hearing. Or you have a learning disability that makes it hard to keep up with spoken speech. Paired with poor classroom acoustics, any one of these issues can make it difficult for students to succeed. As a university lecturer, I've encountered all of these problems in the classroom. And it's hard to figure out how best to help students who are struggling with these issues. In this blogpost, I want to review some of the ways that these issues are currently dealt with, and then look at a new solution, powered by [automatic speech recognition](https://blog.deepgram.com/what-is-asr/), that's the best option for creating a classroom that's accessible to everyone.

## Current Solutions and Their Problems

I'm not the first person to realize that classroom lectures can present challenges to people from different backgrounds. In this section, I want to review some of the more traditional approaches to classroom accessibility and why they fall short.

### Posted Slides and Lecture Notes

One option that's become especially common in recent years is for professors to post their PowerPoint slides for students to review either before or after class. Although this can help, it doesn't address the fact that classes don't always follow the slides directly, and instructors often say other things in class (like answering questions, or reminding students about upcoming assignments).

### Class Recordings

Another option is to record lectures, and post them online for students to watch after class. This option has been especially popular during the pandemic, as students may be quarantining and not able to attend in person. But most students don't have time to effectively attend the same class twice. And that's especially true with students who might be having trouble understanding the content or keeping up with coursework, regardless of the reason; asking them to attend every class session twice, while also keeping up on their assignments, simply doesn't work.

### In-class Notetaker

One option for students with a documented disability is to have someone else in the class take notes for them-this is usually organized officially through the institution's disability services office, and pays another student in the class, who would be taking notes anyway, to share them with the student in question. This is better than some of the other options discussed. Since the content is coming directly from the lectures, students can use the notes afterwards to help clarify and understand course content. But this isn't available to all students (for example, non-native speakers), and it relies on the student taking notes to get it right. If they misunderstand something or get it wrong, that gets passed on to other students.

## An Alternative: Live Class Transcripts

What students need is the ability to revisit the material in a way that makes what happens in the classroom accessible to as many people as possible, and is something that can be used on the fly so that students have help understanding what is happening when it's happening. 

Our Senior Developer Advocate Kevin Lewis recently [built a tool to transcribe classroom lectures](https://blog.deepgram.com/classroom-captioner/), providing a live, automatically generated transcript to make classroom content more accessible. This method can also help people who have difficulty hearing the speaker, for whatever reason, or keeping track of what's been said and how the lecture is organized. Live transcripts are also useful for non-native speakers, who might hear a word they don't know, but not know how to spell it to look it up (a common problem with English)-and it works either during class from the live transcript, or by reviewing it later.

<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works"></WhitepaperPromo>

## Conclusion

Although there are lots of options for supporting students in the classroom, providing live transcriptions has definite advantages to support all students, regardless of their specific needs. If you'd like to see how in-class transcription can help you, [check out Kevin's blogpost with all the details](https://blog.deepgram.com/classroom-captioner/)\u2014and a one-click deploy. If you've got other ideas for using speech recognition in the classroom, you can contact us or fill out our [Speech-to-text Self Assessment](https://deepgram.typeform.com/to/d3zTk2eI) to see if Deepgram might be able to help.`;
}
function compiledContent() {
  return '<p>If you\u2019ve ever been in a large classroom for a lecture or talk, you\u2019ve probably experienced struggling to hear the speaker. Even with modern A/V equipment (which isn\u2019t present in every classroom), it can still sometimes be hard to hear what a speaker is saying. Now imagine you\u2019re not a native speaker of English. Or you have issues with your hearing. Or you have a learning disability that makes it hard to keep up with spoken speech. Paired with poor classroom acoustics, any one of these issues can make it difficult for students to succeed. As a university lecturer, I\u2019ve encountered all of these problems in the classroom. And it\u2019s hard to figure out how best to help students who are struggling with these issues. In this blogpost, I want to review some of the ways that these issues are currently dealt with, and then look at a new solution, powered by <a href="https://blog.deepgram.com/what-is-asr/">automatic speech recognition</a>, that\u2019s the best option for creating a classroom that\u2019s accessible to everyone.</p>\n<h2 id="current-solutions-and-their-problems">Current Solutions and Their Problems</h2>\n<p>I\u2019m not the first person to realize that classroom lectures can present challenges to people from different backgrounds. In this section, I want to review some of the more traditional approaches to classroom accessibility and why they fall short.</p>\n<h3 id="posted-slides-and-lecture-notes">Posted Slides and Lecture Notes</h3>\n<p>One option that\u2019s become especially common in recent years is for professors to post their PowerPoint slides for students to review either before or after class. Although this can help, it doesn\u2019t address the fact that classes don\u2019t always follow the slides directly, and instructors often say other things in class (like answering questions, or reminding students about upcoming assignments).</p>\n<h3 id="class-recordings">Class Recordings</h3>\n<p>Another option is to record lectures, and post them online for students to watch after class. This option has been especially popular during the pandemic, as students may be quarantining and not able to attend in person. But most students don\u2019t have time to effectively attend the same class twice. And that\u2019s especially true with students who might be having trouble understanding the content or keeping up with coursework, regardless of the reason; asking them to attend every class session twice, while also keeping up on their assignments, simply doesn\u2019t work.</p>\n<h3 id="in-class-notetaker">In-class Notetaker</h3>\n<p>One option for students with a documented disability is to have someone else in the class take notes for them-this is usually organized officially through the institution\u2019s disability services office, and pays another student in the class, who would be taking notes anyway, to share them with the student in question. This is better than some of the other options discussed. Since the content is coming directly from the lectures, students can use the notes afterwards to help clarify and understand course content. But this isn\u2019t available to all students (for example, non-native speakers), and it relies on the student taking notes to get it right. If they misunderstand something or get it wrong, that gets passed on to other students.</p>\n<h2 id="an-alternative-live-class-transcripts">An Alternative: Live Class Transcripts</h2>\n<p>What students need is the ability to revisit the material in a way that makes what happens in the classroom accessible to as many people as possible, and is something that can be used on the fly so that students have help understanding what is happening when it\u2019s happening.</p>\n<p>Our Senior Developer Advocate Kevin Lewis recently <a href="https://blog.deepgram.com/classroom-captioner/">built a tool to transcribe classroom lectures</a>, providing a live, automatically generated transcript to make classroom content more accessible. This method can also help people who have difficulty hearing the speaker, for whatever reason, or keeping track of what\u2019s been said and how the lecture is organized. Live transcripts are also useful for non-native speakers, who might hear a word they don\u2019t know, but not know how to spell it to look it up (a common problem with English)-and it works either during class from the live transcript, or by reviewing it later.</p>\n<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works" />\n<h2 id="conclusion">Conclusion</h2>\n<p>Although there are lots of options for supporting students in the classroom, providing live transcriptions has definite advantages to support all students, regardless of their specific needs. If you\u2019d like to see how in-class transcription can help you, <a href="https://blog.deepgram.com/classroom-captioner/">check out Kevin\u2019s blogpost with all the details</a>\u2014and a one-click deploy. If you\u2019ve got other ideas for using speech recognition in the classroom, you can contact us or fill out our <a href="https://deepgram.typeform.com/to/d3zTk2eI">Speech-to-text Self Assessment</a> to see if Deepgram might be able to help.</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/automatic-speech-recognition-education/index.md", "https://blog.deepgram.com/", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>If you’ve ever been in a large classroom for a lecture or talk, you’ve probably experienced struggling to hear the speaker. Even with modern A/V equipment (which isn’t present in every classroom), it can still sometimes be hard to hear what a speaker is saying. Now imagine you’re not a native speaker of English. Or you have issues with your hearing. Or you have a learning disability that makes it hard to keep up with spoken speech. Paired with poor classroom acoustics, any one of these issues can make it difficult for students to succeed. As a university lecturer, I’ve encountered all of these problems in the classroom. And it’s hard to figure out how best to help students who are struggling with these issues. In this blogpost, I want to review some of the ways that these issues are currently dealt with, and then look at a new solution, powered by <a href="https://blog.deepgram.com/what-is-asr/">automatic speech recognition</a>, that’s the best option for creating a classroom that’s accessible to everyone.</p>
<h2 id="current-solutions-and-their-problems">Current Solutions and Their Problems</h2>
<p>I’m not the first person to realize that classroom lectures can present challenges to people from different backgrounds. In this section, I want to review some of the more traditional approaches to classroom accessibility and why they fall short.</p>
<h3 id="posted-slides-and-lecture-notes">Posted Slides and Lecture Notes</h3>
<p>One option that’s become especially common in recent years is for professors to post their PowerPoint slides for students to review either before or after class. Although this can help, it doesn’t address the fact that classes don’t always follow the slides directly, and instructors often say other things in class (like answering questions, or reminding students about upcoming assignments).</p>
<h3 id="class-recordings">Class Recordings</h3>
<p>Another option is to record lectures, and post them online for students to watch after class. This option has been especially popular during the pandemic, as students may be quarantining and not able to attend in person. But most students don’t have time to effectively attend the same class twice. And that’s especially true with students who might be having trouble understanding the content or keeping up with coursework, regardless of the reason; asking them to attend every class session twice, while also keeping up on their assignments, simply doesn’t work.</p>
<h3 id="in-class-notetaker">In-class Notetaker</h3>
<p>One option for students with a documented disability is to have someone else in the class take notes for them-this is usually organized officially through the institution’s disability services office, and pays another student in the class, who would be taking notes anyway, to share them with the student in question. This is better than some of the other options discussed. Since the content is coming directly from the lectures, students can use the notes afterwards to help clarify and understand course content. But this isn’t available to all students (for example, non-native speakers), and it relies on the student taking notes to get it right. If they misunderstand something or get it wrong, that gets passed on to other students.</p>
<h2 id="an-alternative-live-class-transcripts">An Alternative: Live Class Transcripts</h2>
<p>What students need is the ability to revisit the material in a way that makes what happens in the classroom accessible to as many people as possible, and is something that can be used on the fly so that students have help understanding what is happening when it’s happening.</p>
<p>Our Senior Developer Advocate Kevin Lewis recently <a href="https://blog.deepgram.com/classroom-captioner/">built a tool to transcribe classroom lectures</a>, providing a live, automatically generated transcript to make classroom content more accessible. This method can also help people who have difficulty hearing the speaker, for whatever reason, or keeping track of what’s been said and how the lecture is organized. Live transcripts are also useful for non-native speakers, who might hear a word they don’t know, but not know how to spell it to look it up (a common problem with English)-and it works either during class from the live transcript, or by reviewing it later.</p>
${renderComponent($$result, "WhitepaperPromo", WhitepaperPromo, { "whitepaper": "deepgram-whitepaper-how-deepgram-works" })}
<h2 id="conclusion">Conclusion</h2>
<p>Although there are lots of options for supporting students in the classroom, providing live transcriptions has definite advantages to support all students, regardless of their specific needs. If you’d like to see how in-class transcription can help you, <a href="https://blog.deepgram.com/classroom-captioner/">check out Kevin’s blogpost with all the details</a>—and a one-click deploy. If you’ve got other ideas for using speech recognition in the classroom, you can contact us or fill out our <a href="https://deepgram.typeform.com/to/d3zTk2eI">Speech-to-text Self Assessment</a> to see if Deepgram might be able to help.</p>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/automatic-speech-recognition-education/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
