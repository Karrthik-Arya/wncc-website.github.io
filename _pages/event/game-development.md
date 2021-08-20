---
layout: eventLayout
title: Events
project: Game Development
    
permalink: /events/event/game-development/
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
        Hello coders,
<br><br>
Have you imagined what it would feel like to mould your reality as you see fit? Or perhaps create a whole new one that defies the laws of physics? Now, certainly it isn't possible in the real world; but you, as programmers, equipped with the right tools, can actually do so in the virtual world. To get you started with how you'd go about doing it, WnCC brings to you a workshop on Game Development!

<br><br>
    The sessions will be conducted by Mr Prabhat Singh, and will cover topics from Game Design, C# programming and Networking, using Unity, a leading Game Engine widely used by both novice and professional Game Developers. The workshop is intended to familiarize newbie enthusiasts with the basics of Game Development; and the best thing, there are <b>No Prerequisites</b> (other than CS101). We will also be organising a hackathon wherein you'll be building your own Android Game. The best entries will be published on Play Store for the world to see your creativity!
    </p>
</div>
{% endif %}
{% endfor %}
