---
layout: page
---

<ul>
  {% for post in site.categories.posts %}
    <li>
      {{post.date | date: '%m/%y' }} <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
