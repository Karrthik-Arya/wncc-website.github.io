---
layout: eventLayout
title: Events
project: Blockchain Developers Meet
    
permalink: /events/event/blockchain/
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
WnCC in collaboration with Polygon organised the Blockchain Developers
Meet to help students become a blockchain developer. 
Polygon is a made-in-India cryptocurrency protocol that crossed a market
capitalization of $10 billion recently.
<br> People who attended
the meet were offered the below-given perks:
<br>
   - E-certificates to all the participants
<br>
   - Exclusive access to a private group with senior developers for
<br>
     blockchain tech discussions

</p>
</div>
{% endif %}
{% endfor %}
