---
layout: page
---
<style>
  li a {
    text-decoration: none;
    color: blue;
  }
  li a:hover {
    text-decoration: underline; 
  }
</style>

<ul>
  {% for post in site.categories.posts %}
    <li>
      {{post.date | date: '%m/%y' }} <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
