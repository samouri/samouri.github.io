---
title: resume
layout: page
---

<style>
  .company {
    margin-top: 16px;
    font-size: 1.25rem;
  }

  .company-date {
    float: right;
    color: rgb(0, 0, 0, 0.6);
    font-size: 1rem;
    font-weight: normal;
    font-style: italic;
  }

  #experience {
    margin-top: 16px;
    margin-bottom: 0;
  }

  .content {
    font-size: 16px;
    margin: 0 auto;
    line-height: 1.5;
  }

  footer {
    border-top: black solid 1px;
    height: 50px;
    margin-top: 20px;
    padding-top: 5px;
  }

  .content a {
    color: black;
    text-decoration: none;
  }

  a:hover {
    transition: 0.3s;
    text-decoration: underline;
  } 
  .content p a,
  .content ul a {
    text-decoration: underline; 
  }

  h2 {
    font-size: 1.75rem;
  }
  h3 {
    margin-top: 24px;
    margin-bottom: 0;
  }

  ul, p {
    margin-top: 8px;
  }

  @media only screen and (max-width: 600px) {
    /* hacky standin for company lines*/
    h3 {
      display: flex;
      flex-direction: column;
    }
    br {display: none;}
  }
</style>

## Experience

### [<span class="company">Google</span>](https://google.com) <span class="company-date">October 2018 - Present</span> <br/>

- Individual Contributor for [AMP](https://amp.dev).
- Built an API Generator for teams to quickly spin up new APIs.

### [<span class="company">Funemployment</span>](/log) <span class="company-date">June 2017 - October 2018 </span><br/>

I spent exactly 140 days of being intentionally unemployed. I managed to stay pretty busy. I traveled to Iceland, Copenhagen, and Berlin. I learned OCaml and started working in the intersection between OCaml and web development -- through that I became a core contributor to [FastPack](https://github.com/fastpack/fastpack). I watched khan academy videos to learn the basics of how modern day financial systems work as well as learned how to save for retirement. For the seriously boring but in-depth details of my time funemployed, you can check out my [log](/log).

### [<span class="company">Automattic</span>](https://automattic.com/) <span class="company-date">August 2016 - June 2017</span><br/>

I spent 625 working at Automattic, mainly on their flagship open source product codenamed [Calypso](https://github.com/Automattic/wp-calypso). I started with barely knowing a lick of JavaScript but by the end was an integral part of its core framework team. My proudest accomplishments were:

- Proposed, designed, and implemented [dserve](https://wp.me/p2gHKz-oiS) ([source](https://github.com/Automattic/dserve)) for the on-the-fly creation of cloud hosted branches. it enabled painless pre-merge e2e testing, massively improved the ux of testing peers branches, and ultimately became a quality of life improvement for all developers.
- Convinced the open source community of Calypso over a six month period, to abandon their personal tastes and adopt automated code formatting tools by creating a fork of the popular tool, Prettier, that more closely follows WordPress conventions. The fork's name was [wp-pretter](https://github.com/Automattic/wp-prettier) and I made the hard-fought argument for its adoption publicly [on github](https://github.com/Automattic/wp-calypso/issues/12260). The implementation required improvements to both _prettier_ and _jest_ that were then eventually upstreamed. Since adoption, it has been seen as an overwhelmingly positive process improvement.
- Proposed and led an internal initiative comprised of ten developers for using AST transforms to upgrade over 5,000 React Components to support the large breaking changes between React 15 and 16. The internal memos are private, but our [GitHub project is public](https://github.com/Automattic/wp-calypso/projects/49).
- Major build process improvements. The [most notable one](https://github.com/Automattic/wp-calypso/pull/11352) led to a drop in production build time of the project by 3.5x, from 11 minutes to 3 minutes. All we needed to do...was less.
- Created a generic and highly efficient memoization technique for Redux applications that was an order of magnitude more efficient than prior work. It took advantage of WeakMaps for perfect garbage collection efficiency while maintaining constant time key lookup for computed results. I called it [tree-select](https://github.com/Automattic/wp-calypso/pull/20547)

### [<span class="company">Amazon</span>](http://amazon.com) <span class="company-date">July 2015 - August 2016</span> <br/>

I used computers in Seattle to make t-shirts in Texas.
