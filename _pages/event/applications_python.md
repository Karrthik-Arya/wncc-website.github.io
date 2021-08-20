---
layout: eventLayout
title: Events
project: Python and its Applications
    
permalink: /events/event/python/
---

<h2 class="display1 m-3 p-3 text-center">{{page.project}}</h2>

{% for project in site.data.settings.events-items %}
{% if project.title == page.project %}
<div>
    <img src="{{ site.baseurl }}/{{ project.image }}"  width = "300" height="300" alt="{{ project.title }}" class="border rounded img-soc">
</div>

<div>
    <p class="display3" style = "font-size:20px;" >
        <br>
       For many developers picking up the basics of Python is an easy part. After they’ve mastered the basics of Python, a whole new world opens up! And suddenly it’s all about learning the libraries, frameworks, and best practices that surround Python.
<br><br>
Under Learners' Space, Web and Coding Club, IIT Bombay and Career Cell IITB bring to you a course on Python & its Applications.
Happy Learning!
    </p>
</div>
{% endif %}
{% endfor %}
