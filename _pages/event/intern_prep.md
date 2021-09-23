---
layout: eventLayout
title: Events
project: Internship Preparation Session
    
permalink: /events/event/intern_prep/
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
        To help prepare for the gruesome intership season, WnCC along with Career Cell IITB organized this INTERNSHIP PREPARATION PROGRAM.
        <br><br>
        
 WnCC regularly released DSA preparation booklets (comprising both theory and questions) from 13th to 27th June 2021. Moreover, for assistance with the doubts related to the bookletsc we had with us, Aakash Kapoor, an IITB electrical 2020 graduate, currently, a Machine Learning researcher at Samsung. He also held detailed DSA tech sessions to help people learn. These sessions were held a day after the release of the booklet and were specifically focused on the material covered in that booklet.
<br><br>
 
<br><br>
    </p>
</div>
{% endif %}
{% endfor %}
