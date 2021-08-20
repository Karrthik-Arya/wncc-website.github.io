---
layout: eventLayout
title: Events
project: Code Games
    
permalink: /events/event/code-games/
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
After a very successful event on Introduction to Competitive Programming, WnCC brings to all beginners an opportunity to compete in a programming contest created specifically for you. Enjoy the thrill of battling each other in this game of wits called CodeGames. All you need is logic, C++, problem solving skills and the power of Google. This is a beginner friendly contest created to help everyone get into the fun world of competitive programming.

<br><br>
    Not sure where to start? Check out the resources from Competitive Programming for beginners here: https://github.com/.../Competitive.../blob/main/README.md. If you missed the season that we hosted last week you can watch it on YouTube here:https://youtu.be/HwpUQLKPAhg
    </p>
</div>
{% endif %}
{% endfor %}
