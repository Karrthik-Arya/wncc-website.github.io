---
layout: project
title: Seasons of Code
project: Computer vision for driverless vehicles
topics:
    - Competitive Coding
mentors:
    - Yash Rampuria
    - Aryan Bhosale  
    
mentees:
- 5
    
permalink: /soc/projects/2023/project264
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
        Building a object detection python code for lane and other road user detection and classification for implementation in driverless vehicles using opencv and YOLOv5
<br>
Prerequisites:
Mentees will be given exposure to coding in python and hence prior coding experience is a bonus but definitely not a must as they will be taught the same
        <br>
    </p>
</div>
<div class = "d-flex flex-wrap">
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class="table table-striped w-75">
    <thead>
        <tr>
        <th>Week</th>
        <th>Work</th>
        </tr>
    </thead>
    <tbody>
    <tr>
      <td  >Week 1</td>
      <td>Python basics</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Machine learning basics</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Deep learning basics</td>
    </tr>
    <tr>
      <td>Week 4-5</td>
      <td>Lane detection code</td>
    </tr>
    <tr>
      <td>Week 6-7</td>
      <td> Object detection using Yolov5</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
