---
layout: page
---

<ul>
  {% for post in site.posts %}
    <li>
      {{post.date | date: '%m/%y' }} <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
