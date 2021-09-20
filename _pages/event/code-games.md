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
After a very successful event on Introduction to Competitive Programming, WnCC brought to all beginners an opportunity to compete in a programming contest in an unconventional way. People enjoyed the thrill of battling each other in this game of wits called CodeGames. The only pre-requisites for this contest were logic, C++, problem solving skills and enthusiasm. It was a beginner friendly contest created to help everyone get into the fun world of competitive programming.

<br><br>
You can watch the introductory session for this contest on YouTube
     <a href="https://youtu.be/HwpUQLKPAhg">here.</a>
     </p>
</div>
{% endif %}
{% endfor %}
