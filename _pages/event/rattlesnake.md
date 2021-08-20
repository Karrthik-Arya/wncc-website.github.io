---
layout: eventLayout
title: Events
project: RattleSnake
    
permalink: /events/event/rattlesnake/
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
        Are you bored of doing the repetitive tasks like digitising your old lab
notes, moving and manipulating your data around for better graphs or
visualisations? Or do you just wish your computer could swipe right on all
those profiles at once? In this first edition of the PG Tech Weekend, ITC
and WnCC bring to you an intermediate level workshop on Python aimed at
helping the IITB junta to master the capabilities of those
computers/laptops lying in front of you.

<br><br>
    Inspired by the book, Automate the
boring stuff with Python, this workshop will introduce you to important
libraries such as Selenium, SciPy, OpenCV and more. What's more, once you
register at the link below, you'll get a chance to implement this new
knowledge through activities arranged in the second half of the workshop.
    </p>
</div>
{% endif %}
{% endfor %}
