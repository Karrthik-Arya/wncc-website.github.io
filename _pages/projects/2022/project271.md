---
layout: project
title: Seasons of Code
project: Image Processing and Object Detection
topics:
    - Web Development, Fin-Tech
mentors:
    - Suyash Waghmare & Prajyot Pandit Chakre (21b080022) 
    
mentees:
- 5
    
permalink: /soc/projects/2023/project271
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
<div class = "project-desc" >
    <p class="display3" style = "font-size:22px;" >
        <br>
       Description :
In this project we develop a Image processing model to predict the features of any image/object provided. This project will begin from basics of Python, learn libraries like numpy, OpenCV and matplotlib. We will work on two model to explore the field. We will also deploy the model on a platform: 
<br>
1 Detection of number of objects in an image
2 Determining the porosity of a metal 
<br>
Resources:
<br>
https://docs.google.com/document/d/1u7mV3QSv3KSqTp5quA21YPPvuZne9pn9wGn1KSxymTI/edit?usp=sharing</a>
<br>
Prerequisites: N/A
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
      <td  >Week 1-2</td>
      <td>Basics of Python, Understanding various  modules/libraries</td>
    </tr>
    <tr>
      <td>Week 3-4</td>
      <td>Understanding  edge detection algorithms, Implementation of model and final projects 
</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Final implementation, debugging and deployment on web</td>
    </tr>
       </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
 