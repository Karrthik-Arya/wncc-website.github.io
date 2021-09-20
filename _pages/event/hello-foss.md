---
layout: eventLayout
title: Events
project: Hello Foss
    
permalink: /events/event/hello-foss/
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
        The month of October is the time when people generally start preparing for Google Summer of Code (https://summerofcode.withgoogle.com) and also when Hacktoberfest (https://hacktoberfest.digitalocean.com) is celebrated worldwide.
<br><br>
WnCC conducted a festival “Hello-FOSS” to encourage and instil the culture of Open Source in our institute. We launched various projects, from various diverse fields such as ML, Web and App Development and DSA. To get everyone covered, we had projects ranging across all complexities. To get started, participants were required to create a simple pull requests on our repo. Contributing to these brought about participation in Hacktoberfest since all of these repos were under the hacktoberfest tag. All the projects had mentors allotted to help out in case of difficulties.
    </p>
</div>
{% endif %}
{% endfor %}
