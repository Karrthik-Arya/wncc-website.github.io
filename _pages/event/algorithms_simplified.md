---
layout: eventLayout
title: Events
project: Algorithms Simplified
    
permalink: /events/event/algorithms-simplified/
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
        Hello all,
<br><br>
WnCC proudly presents Algorithms Simplified. This is a series where we do not require you to code. You can just watch a 15 minute video to learn something cool, that’s it! Every Friday, we will be sharing short videos trivially explaining some mind-blowing yet intuitive algorithms, along with optional tasks for those who want to code and implement those algorithms in a Dive Deep section as well.
    </p>
</div>
{% endif %}
{% endfor %}
