---
layout: eventLayout
title: Events
project: Learners' Space
    
permalink: /events/event/learners-space/
---

<h2 class="display1 m-3 p-3 text-center">{{page.project}}</h2>

{% for project in site.data.settings.events-items %}
{% if project.title == page.project %}
<div>
    <img src="{{ site.baseurl }}/{{ project.image }}"  width = "300" height="300" alt="{{ project.title }}" class="border rounded img-soc">
</div>

<div>
    <p class="display3" style = "font-size:22px;" >
        <br>
       The Institute Technical Council conducted the Technical Summer School under Learners' Space in collaboration with UGAC.
<br><br>
Under this initiative, WnCC started three well-curated courses on the topics - Python, Machine Learning and Web Development.

<br><br>
    These were structured courses with weekly content and assignments for anyone to get started in any of the three fields and get a well rounded experience. 
    </p>
</div>
{% endif %}
{% endfor %}
