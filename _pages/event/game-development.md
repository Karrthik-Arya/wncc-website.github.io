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
    <p class="display3" style = "font-size:22px;" >
        <br>
        Hello coders,
<br><br>
Many of you must have played classic hit games such as NFS, GTA, Angry Birds etc. Ever wondered how these games were created in the first place? Welcome to the fascinating world of Game Dev, a highly creative, competitive, and fun industry! WnCC conducted a session to give the students an exposure to this field.

<br><br>
    The session was conducted by Mr Prabhat Singh, and covered topics ranging from Game Design, C# programming and Networking, using Unity, a leading Game Engine widely used by both novice and professional Game Developers. The workshop intended to familiarize newbie enthusiasts with the basics of Game Development; and the best thing, there were No Prerequisites (other than CS101). We also organised a hackathon where participants built their own Android Game. The best entries were published on Play Store for the world to see!
    </p>
</div>
{% endif %}
{% endfor %}
