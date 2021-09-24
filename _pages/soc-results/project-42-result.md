---
layout: result
title: Seasons of Code
project: Unscripted


    
permalink: /soc-results/project-42-result
---

<h2 class="display1 m-3 p-3 text-center">{{page.project}}</h2>
{% for project in site.data.settings.soc-items %}
{% if project.title == page.project %}

<div>
    <img src="{{ site.baseurl }}/{{ project.image }}"  width = "75%" height="auto"  alt="{{ project.project}}" class="border rounded" style = "float: left; margin-top: 3%; margin-right: 3%">
</div>


<div class="mentor-mentee-section">
    <br>
        {% for topic in page.topics %}
        <li><h4 class="text-primary text-center">{{topic}}</h4></li>
        {% endfor %}
    <br>
    <h4 class="mentor-title" style="display: block; fontWeight: 800">Mentors</h4>   
    <h4 class="mentors" style="display: inline;">Anirudh Mittal, Siddesh Pawar, Pranav Jeevan</h4>    
    <br>  <br>
    <h4 class="mentor-title" style="display: block;">Mentees</h4> 
    <h4 class="mentors" style="display: inline;">Neilabh Banzal, Hiren Bavaskar, Harshit Modi, Aayush M Gopal, Ashish Gupta</h4>
    </div>

<div class = "button-holder">
    <div class="button-res"><a href="#" role="button">Documentation</a></div>
    <div class="button-res"><a href="#" role="button">GitHub Repo</a></div>
    <div class="button-res"><a href="#" role="button">Demo</a></div>
</div>

{% endif %}
{% endfor %}
