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
        We hope you’re safe and sound at your places. The month of October has started, when people generally start preparing for Google Summer of Code (https://summerofcode.withgoogle.com) and also when Hacktoberfest (https://hacktoberfest.digitalocean.com) is celebrated worldwide.
<br><br>
So this being the best time to get started, we are here to your rescue.

<br><br>
    WnCC announces a festival Hello-FOSS to encourage and instill the culture of Open Source in our institute. We have launched various projects and will be adding more, from various diverse fields such as ML, Web and App Development and, DSA. To get everyone covered we have projects ranging with all complexities, to get started all you need to do is create a simple pull request on our repo. Contributing to these repos not only gets you started but also brings you participation in Hacktoberfest since all of these repos are under the hacktoberfest tag. All the projects have mentors allotted to help you out if you feel stuck or clueless at any point. Wishing you all the best for starting your journey towards Open Source.
    </p>
</div>
{% endif %}
{% endfor %}
