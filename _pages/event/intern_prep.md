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
    <p class="display3" style = "font-size:20px;" >
        <br>
        The gruesome internship season is right around the corner but don’t worry we’ve got you covered! To help you out with the preparation process, WnCC along with Career Cell IITB presents to you the INTERNSHIP PREPARATION PROGRAM.
        <br><br>
        
WnCC team will be regularly releasing the DSA preparation booklets (comprising both theory and questions) from 13th to 27th June. For assistance with the doubts related to the booklets, Aakash Kapoor, an IITB electrical 2020 graduate, currently, a Machine Learning researcher at Samsung will also be holding the DSA tech sessions. These sessions will be held a day after the release of the booklet and will be specifically focused on the material covered in that booklet.
<br><br>
 
<br><br>
    </p>
</div>
{% endif %}
{% endfor %}
