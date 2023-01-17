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

const metadata = { "headings": [], "source": "\r\nI decided I wanted to be a developer after attending my first hackathon (a creative programming competition). I definitely didn't know how to code, but a friend of mine insisted it would be worthwhile, and that was an understatement if I'd ever heard one. While I couldn't meaningfully contribute, my team had the most welcoming and patient folks on it, and I vowed to spend the rest of the summer teaching myself to build websites.\r\n\r\nThat was just over ten years ago, and my journey from that point on included attending lots more hackathons, volunteering to help, and eventually working for the company that put my first event on. I was supported graciously and given the chance to learn new skills, eventually putting my experience of community, events, and development together with my first Developer Advocacy role in 2014.\r\n\r\nThe common thread throughout my career has been the desire to support other early-career developers in learning both technical skills and more foundational core skills which we all need for a happy, healthy work life and yet are never taught. When I'm not supporting developers in discovering, understanding, and building with Deepgram's Speech Recognition APIs, I run [my event series focused on these core skills](https://yougotthis.io).\r\n\r\nWhat else? [I like boardgames](https://boardgamegeek.com/collection/user/phazonoverload). I ended up going to university to do a degree in [Creative Computing](https://www.gold.ac.uk/ug/bsc-creative-computing/). I live in Lincolnshire, UK, though I grew up and lived in London for most of my life. The image accompanying this post is from [Belvoir Castle](http://www.belvoircastle.com), which is just a couple of miles away from where we live. I have a lovely [daughter called Sage](https://twitter.com/_phzn/status/1420797759989370887) and another on the way.\r\n\r\nWhether it's to do with Deepgram, events, being an early-career dev, or anything else - please feel free to reach out wherever I am online - Twitter is generally best (I'm [@\\_phzn](https://twitter.com/_phzn)).\r\n\r\n        ", "html": '<p>I decided I wanted to be a developer after attending my first hackathon (a creative programming competition). I definitely didn\u2019t know how to code, but a friend of mine insisted it would be worthwhile, and that was an understatement if I\u2019d ever heard one. While I couldn\u2019t meaningfully contribute, my team had the most welcoming and patient folks on it, and I vowed to spend the rest of the summer teaching myself to build websites.</p>\n<p>That was just over ten years ago, and my journey from that point on included attending lots more hackathons, volunteering to help, and eventually working for the company that put my first event on. I was supported graciously and given the chance to learn new skills, eventually putting my experience of community, events, and development together with my first Developer Advocacy role in 2014.</p>\n<p>The common thread throughout my career has been the desire to support other early-career developers in learning both technical skills and more foundational core skills which we all need for a happy, healthy work life and yet are never taught. When I\u2019m not supporting developers in discovering, understanding, and building with Deepgram\u2019s Speech Recognition APIs, I run <a href="https://yougotthis.io">my event series focused on these core skills</a>.</p>\n<p>What else? <a href="https://boardgamegeek.com/collection/user/phazonoverload">I like boardgames</a>. I ended up going to university to do a degree in <a href="https://www.gold.ac.uk/ug/bsc-creative-computing/">Creative Computing</a>. I live in Lincolnshire, UK, though I grew up and lived in London for most of my life. The image accompanying this post is from <a href="http://www.belvoircastle.com">Belvoir Castle</a>, which is just a couple of miles away from where we live. I have a lovely <a href="https://twitter.com/_phzn/status/1420797759989370887">daughter called Sage</a> and another on the way.</p>\n<p>Whether it\u2019s to do with Deepgram, events, being an early-career dev, or anything else - please feel free to reach out wherever I am online - Twitter is generally best (I\u2019m <a href="https://twitter.com/_phzn">@_phzn</a>).</p>' };
const frontmatter = { "title": "Kevin Lewis Joins the Developer Relations Team", "description": "Meet Deepgram's new Developer Advocate and learn his story of getting into tech.", "date": "2021-11-16T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1636992625/blog/2021/11/meet-kevin-lewis/belvoir-castle.jpg", "authors": ["kevin-lewis"], "category": "devlife", "tags": ["team"], "seo": { "title": "Kevin Lewis Joins the Developer Relations Team", "description": "Meet Deepgram's new Developer Advocate and learn his story of getting into tech." }, "shorturls": { "share": "https://dpgr.am/f4d8f65", "twitter": "https://dpgr.am/5660461", "linkedin": "https://dpgr.am/3661792", "reddit": "https://dpgr.am/32d7dca", "facebook": "https://dpgr.am/867a210" }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661453814/blog/meet-kevin-lewis/ograph.png" }, "astro": { "headings": [], "source": "\r\nI decided I wanted to be a developer after attending my first hackathon (a creative programming competition). I definitely didn't know how to code, but a friend of mine insisted it would be worthwhile, and that was an understatement if I'd ever heard one. While I couldn't meaningfully contribute, my team had the most welcoming and patient folks on it, and I vowed to spend the rest of the summer teaching myself to build websites.\r\n\r\nThat was just over ten years ago, and my journey from that point on included attending lots more hackathons, volunteering to help, and eventually working for the company that put my first event on. I was supported graciously and given the chance to learn new skills, eventually putting my experience of community, events, and development together with my first Developer Advocacy role in 2014.\r\n\r\nThe common thread throughout my career has been the desire to support other early-career developers in learning both technical skills and more foundational core skills which we all need for a happy, healthy work life and yet are never taught. When I'm not supporting developers in discovering, understanding, and building with Deepgram's Speech Recognition APIs, I run [my event series focused on these core skills](https://yougotthis.io).\r\n\r\nWhat else? [I like boardgames](https://boardgamegeek.com/collection/user/phazonoverload). I ended up going to university to do a degree in [Creative Computing](https://www.gold.ac.uk/ug/bsc-creative-computing/). I live in Lincolnshire, UK, though I grew up and lived in London for most of my life. The image accompanying this post is from [Belvoir Castle](http://www.belvoircastle.com), which is just a couple of miles away from where we live. I have a lovely [daughter called Sage](https://twitter.com/_phzn/status/1420797759989370887) and another on the way.\r\n\r\nWhether it's to do with Deepgram, events, being an early-career dev, or anything else - please feel free to reach out wherever I am online - Twitter is generally best (I'm [@\\_phzn](https://twitter.com/_phzn)).\r\n\r\n        ", "html": '<p>I decided I wanted to be a developer after attending my first hackathon (a creative programming competition). I definitely didn\u2019t know how to code, but a friend of mine insisted it would be worthwhile, and that was an understatement if I\u2019d ever heard one. While I couldn\u2019t meaningfully contribute, my team had the most welcoming and patient folks on it, and I vowed to spend the rest of the summer teaching myself to build websites.</p>\n<p>That was just over ten years ago, and my journey from that point on included attending lots more hackathons, volunteering to help, and eventually working for the company that put my first event on. I was supported graciously and given the chance to learn new skills, eventually putting my experience of community, events, and development together with my first Developer Advocacy role in 2014.</p>\n<p>The common thread throughout my career has been the desire to support other early-career developers in learning both technical skills and more foundational core skills which we all need for a happy, healthy work life and yet are never taught. When I\u2019m not supporting developers in discovering, understanding, and building with Deepgram\u2019s Speech Recognition APIs, I run <a href="https://yougotthis.io">my event series focused on these core skills</a>.</p>\n<p>What else? <a href="https://boardgamegeek.com/collection/user/phazonoverload">I like boardgames</a>. I ended up going to university to do a degree in <a href="https://www.gold.ac.uk/ug/bsc-creative-computing/">Creative Computing</a>. I live in Lincolnshire, UK, though I grew up and lived in London for most of my life. The image accompanying this post is from <a href="http://www.belvoircastle.com">Belvoir Castle</a>, which is just a couple of miles away from where we live. I have a lovely <a href="https://twitter.com/_phzn/status/1420797759989370887">daughter called Sage</a> and another on the way.</p>\n<p>Whether it\u2019s to do with Deepgram, events, being an early-career dev, or anything else - please feel free to reach out wherever I am online - Twitter is generally best (I\u2019m <a href="https://twitter.com/_phzn">@_phzn</a>).</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/meet-kevin-lewis/index.md" };
function rawContent() {
  return "\r\nI decided I wanted to be a developer after attending my first hackathon (a creative programming competition). I definitely didn't know how to code, but a friend of mine insisted it would be worthwhile, and that was an understatement if I'd ever heard one. While I couldn't meaningfully contribute, my team had the most welcoming and patient folks on it, and I vowed to spend the rest of the summer teaching myself to build websites.\r\n\r\nThat was just over ten years ago, and my journey from that point on included attending lots more hackathons, volunteering to help, and eventually working for the company that put my first event on. I was supported graciously and given the chance to learn new skills, eventually putting my experience of community, events, and development together with my first Developer Advocacy role in 2014.\r\n\r\nThe common thread throughout my career has been the desire to support other early-career developers in learning both technical skills and more foundational core skills which we all need for a happy, healthy work life and yet are never taught. When I'm not supporting developers in discovering, understanding, and building with Deepgram's Speech Recognition APIs, I run [my event series focused on these core skills](https://yougotthis.io).\r\n\r\nWhat else? [I like boardgames](https://boardgamegeek.com/collection/user/phazonoverload). I ended up going to university to do a degree in [Creative Computing](https://www.gold.ac.uk/ug/bsc-creative-computing/). I live in Lincolnshire, UK, though I grew up and lived in London for most of my life. The image accompanying this post is from [Belvoir Castle](http://www.belvoircastle.com), which is just a couple of miles away from where we live. I have a lovely [daughter called Sage](https://twitter.com/_phzn/status/1420797759989370887) and another on the way.\r\n\r\nWhether it's to do with Deepgram, events, being an early-career dev, or anything else - please feel free to reach out wherever I am online - Twitter is generally best (I'm [@\\_phzn](https://twitter.com/_phzn)).\r\n\r\n        ";
}
function compiledContent() {
  return '<p>I decided I wanted to be a developer after attending my first hackathon (a creative programming competition). I definitely didn\u2019t know how to code, but a friend of mine insisted it would be worthwhile, and that was an understatement if I\u2019d ever heard one. While I couldn\u2019t meaningfully contribute, my team had the most welcoming and patient folks on it, and I vowed to spend the rest of the summer teaching myself to build websites.</p>\n<p>That was just over ten years ago, and my journey from that point on included attending lots more hackathons, volunteering to help, and eventually working for the company that put my first event on. I was supported graciously and given the chance to learn new skills, eventually putting my experience of community, events, and development together with my first Developer Advocacy role in 2014.</p>\n<p>The common thread throughout my career has been the desire to support other early-career developers in learning both technical skills and more foundational core skills which we all need for a happy, healthy work life and yet are never taught. When I\u2019m not supporting developers in discovering, understanding, and building with Deepgram\u2019s Speech Recognition APIs, I run <a href="https://yougotthis.io">my event series focused on these core skills</a>.</p>\n<p>What else? <a href="https://boardgamegeek.com/collection/user/phazonoverload">I like boardgames</a>. I ended up going to university to do a degree in <a href="https://www.gold.ac.uk/ug/bsc-creative-computing/">Creative Computing</a>. I live in Lincolnshire, UK, though I grew up and lived in London for most of my life. The image accompanying this post is from <a href="http://www.belvoircastle.com">Belvoir Castle</a>, which is just a couple of miles away from where we live. I have a lovely <a href="https://twitter.com/_phzn/status/1420797759989370887">daughter called Sage</a> and another on the way.</p>\n<p>Whether it\u2019s to do with Deepgram, events, being an early-career dev, or anything else - please feel free to reach out wherever I am online - Twitter is generally best (I\u2019m <a href="https://twitter.com/_phzn">@_phzn</a>).</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/meet-kevin-lewis/index.md", "", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>I decided I wanted to be a developer after attending my first hackathon (a creative programming competition). I definitely didn’t know how to code, but a friend of mine insisted it would be worthwhile, and that was an understatement if I’d ever heard one. While I couldn’t meaningfully contribute, my team had the most welcoming and patient folks on it, and I vowed to spend the rest of the summer teaching myself to build websites.</p>
<p>That was just over ten years ago, and my journey from that point on included attending lots more hackathons, volunteering to help, and eventually working for the company that put my first event on. I was supported graciously and given the chance to learn new skills, eventually putting my experience of community, events, and development together with my first Developer Advocacy role in 2014.</p>
<p>The common thread throughout my career has been the desire to support other early-career developers in learning both technical skills and more foundational core skills which we all need for a happy, healthy work life and yet are never taught. When I’m not supporting developers in discovering, understanding, and building with Deepgram’s Speech Recognition APIs, I run <a href="https://yougotthis.io">my event series focused on these core skills</a>.</p>
<p>What else? <a href="https://boardgamegeek.com/collection/user/phazonoverload">I like boardgames</a>. I ended up going to university to do a degree in <a href="https://www.gold.ac.uk/ug/bsc-creative-computing/">Creative Computing</a>. I live in Lincolnshire, UK, though I grew up and lived in London for most of my life. The image accompanying this post is from <a href="http://www.belvoircastle.com">Belvoir Castle</a>, which is just a couple of miles away from where we live. I have a lovely <a href="https://twitter.com/_phzn/status/1420797759989370887">daughter called Sage</a> and another on the way.</p>
<p>Whether it’s to do with Deepgram, events, being an early-career dev, or anything else - please feel free to reach out wherever I am online - Twitter is generally best (I’m <a href="https://twitter.com/_phzn">@_phzn</a>).</p>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/meet-kevin-lewis/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
