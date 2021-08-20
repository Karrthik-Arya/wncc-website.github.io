---
layout: eventLayout
title: Events
project: Git/GitHub Workshop
    
permalink: /events/event/git-github-workshop/
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
        <b>“I can do things you cannot. You can do things I cannot. Together we can do great things.”</b>
<br><br>
This line sums up the essence of teamwork and collaboration. In the world of programming itself, the rise of open-source software has enabled people from all over the world to work together.

<br><br>
    So how does one go about collaborating with people on projects? How do so many people work simultaneously on the same code base?
<br><br>
    To answer these questions, WnCC presents to you a session on git + GitHub, a version control system used by many open-source software providers and one of its web interface.
<br><br>
Learning the basics of version control helps to maintain your own code for a project and also enables you to work in coordination with your teammates.
<br><br>
The session is also important for everyone who wishes to explore the open-source arena irrespective of their year of study. As always, absolutely no prerequisites.
<br><br>
    </p>
</div>
{% endif %}
{% endfor %}
