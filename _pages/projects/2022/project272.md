---
layout: project
title: Seasons of Code
project: Unreal IITB
topics:
    - Machine Learning
mentors:
    - Harshit Morj
    - Kartik Gokhale
    
mentees:
- 5-6
    
permalink: /soc/projects/2023/project272
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
<div>
    <br>
    <ul>
        {% for topic in page.topics %}
        <li style = "display: inline"><h4 class="text-primary text-center">{{topic}}</h4></li>
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
        The objective of this project is to have fun and play with Unreal Engine 5. The final objective is to Generate a 3D model of our campus using Unreal Engine. We will be mostly following a beginner's tutorial from youtube to get familiar with UE5 and in the later days, try to build  a realistic model of your surroundings in parts. This will be mostly a team project and the final project will be a sum of all your work.
<br>
https://www.unrealengine.com/en-US/unreal-engine-5
https://docs.unrealengine.com/5.0/en-US/
<br>
It's not that hard!! This guy made an open world game in 24 hours.
https://www.youtube.com/watch?v=3DjY1T42b_M
<br>
PreReqs:
<br>
No prereqs per se but an interest in game development, 3D modeling, and a passion for creating interactive experiences.
</div>
<div class ="d-flex">
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class = "table table-striped">
  <thead>
    <tr>
      <th>Week Number</th>
      <th>Tasks to be Completed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Week 1-3</strong></td>
      <td>Learn the basics (Follow a YouTube tutorial), (How to) Modelling and Play with UE5</td>
    </tr>
    <tr>
      <td><strong>Week 4-5 </strong></td>
      <td>Make a model (most prolly a hostel room) and submit as project, Progress Review</td>
    </tr>
    <tr>
      <td><strong>Week 6-8  </strong></td>
      <td>Start and Make a model of campus as much as you can in three weeks </td>
    </tr>
        </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
