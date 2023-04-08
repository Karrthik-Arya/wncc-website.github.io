---
layout: project
title: Seasons of Code
project: MyBox
mentors:
    - Samarth Bansal
    
mentees:
- 4
    
permalink: /soc/projects/2023/project244
---

<h2 class="display1 m-3 p-3 text-center project-title">{{page.project}}</h2>

{% for project in site.data.settings.soc-items %}
{% if project.title == page.project %}

<div class ="img-soc d-block"> 
    <img src="{{ site.baseurl }}/{{ project.image }}" alt="{{ project.project}}" class="image-1">
    <img src="{{ site.baseurl }}/{{ project.image }}" alt="{{ project.project}}" class="image-2">
    <img src="{{ site.baseurl }}/{{ project.image }}" alt="{{ project.project}}" class="image-3">
    <img src="{{ site.baseurl }}/{{ project.image }}" alt="{{ project.project}}" class="image-4">
</div>
<div class = "mobile-img-soc">
  <img src="{{ site.baseurl }}/{{ project.image }}"  width = "300" height="300" alt="{{ project.project}}" class="border rounded">
  </div>
<div >
    <br>
    <ul>
        {% for topic in page.topics %}
        <li><h4 class="text-primary text-center topics">{{topic}}</h4></li>
        {% endfor %}
    </ul>
    <br>
    <h4 class="display3  ">Mentors :</h4> 
    <ul>
        {% for mentor in page.mentors %}
        <li><p class="lead">{{mentor}}</p></li>
        {% endfor %}
    </ul>
    <h4 class="display3  ">Mentees :</h4> 
    <ul>
        {% for mentee in page.mentees %}
        <li><p class="lead">{{mentee}}</p></li>
        {% endfor %}
    </ul>
</div>
<div>
    <p class="display3 project-desc" style = "font-size:22px;" >
        <br>
        We will try to understand and replicate how audio streaming works in mobile apps. This project is about to form small group on our app, and when we play music in jamming or late night, it's only one person who control what to play or others have to tell them. So in this project whenever we detect audio device is connected to any of the user's Device,the media it will play can be controlled by anyone in the small group that we formed.
        
<br>
Prerequisites:
Basic knowledge about Flutter
Any database basics
UI/UX basics
    </p>
</div>
<div class = "d-flex flex-wrap">
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class="table table-striped w-100">
    <thead>
        <tr>
        <th>Week</th>
        <th>Work</th>
        </tr>
    </thead>
    <tbody>
    <tr>
      <td>Week 1</td>
      <td>Finalizing database, platform and roles for the project including features and wireframe </td>     
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Getting started with flutter app and basic database and APIs</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Complete setup of rooms and how to join them, start to understand audio streaming in Android. </td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Audio device detection and notification and final UI, how to play media on desired device.
    </td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>how others can change media that is playing</td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Final checking of features and debugging 
    </tr>
    <tr>
      <td>Week 7</td>
      <td>add login and submission </td> 
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
