---
layout: eventLayout
title: Events
project: COVID Talks
    
permalink: /events/event/covid_talks/
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
        WnCC announces a two-day webinar series where we would get to learn about the working of some innovative and impactful solutions proposed by the professors of our college and put to use in this fight against COVID-19. Given below are the details of the webinars.
        <br><br>
        DAY 1
<br>
Speaker: Prof. Manoj Gopalkrishnan,
Associate Professor, Department of Electrical Engineering,
IIT Bombay
Project: Tapestry
Tapestry is a mathematical algorithm for smart pooling of samples for COVID testing. The algorithm describes a novel way to pool samples and test in a single step, thereby conserving resources and increasing testing capacity by increasing throughout.
<br><br>
    DAY 2
<br>
    Speaker: Prof. Bhaskaran Raman,
Professor, Department of CSE, IIT Bombay
Project: SMS-based E-token generator
A unique SMS-based E-token generation, live queue management and remote queue status check for the benefit of any service provider. The system has been used within the IITB campus extensively and has been found to be extremely user friendly and valuable in maintaining social distances among buyers.
<br><br>
    </p>
</div>
{% endif %}
{% endfor %}
