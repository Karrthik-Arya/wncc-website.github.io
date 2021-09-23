---
layout: eventLayout
title: Events
project: QnA with Kalpesh
    
permalink: /events/event/qna-with-kalpesh/
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
        Kalpesh Krishna is an EE undergraduate (2014-18) from IITB and is now pursuing MS/PhD in Computer Science from University of Massachusetts, Amherst. He has also done some remarkable internships under Google Brain, Google AI language, University of Chicago and has also contributed to Mozilla, under Google Summer Of Code.
<br><br>
He shared with us his journey and how he pursued his career in Computer Science. He discussed about how he paved his way towards a career in Computer Science despite being from a non CS background. He also talked about what all activities one should do in the Institute to build a solid career in Computer Science. He answered various questions including Why he preferred a PhD over a job in corporate sector and also discussed his past internship experiences.
<br><br>
    </p>
</div>
{% endif %}
{% endfor %}
