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
    <p class="display3" style = "font-size:22px;" >
        <br>
        Hello all,
<br><br>
WnCC organised Algorithms Simplified which was a series where actual coding was not required. Several short videos were released every friday, where something cool was trivially explained in just 15 minutes! Some optional tasks were also released in the Dive Deep section where people could actually implement what they learned. 
    </p>
</div>
{% endif %}
{% endfor %}
