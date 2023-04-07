---
layout: project
title: Seasons of Code
project: Real time Driver Drowsiness detection System
topics:
    - Machine Learning
    - Deep Learning
mentors:
    - Vedang Bale
     
mentees:
    - 8-10
    
permalink: /soc/projects/2023/project227
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
<div class = "project-desc">
    <p class="display3" style = "font-size:22px;" >
        <br>
            This is a real time drowsiness detection system, which detects if the person is sleepy or awake by taking input from the webcam. We use image processing and Deep Learning(computer vision) in this project, which will be the major learnings of this project.
Github repo link: https://github.com/vedangbale/Driver-drowsiness-detection
        <br>
        <br>
        Prequisites: Preferrable to know basic Python programming
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
      <td  >Week 1</td>
      <td>Python Programming revision
</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Basics of image processing and OpenCV
 </td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Deep Learning Basics & Computer vision Basic concepts

</td>
    </tr>
    <tr>
      <td>Week 4-5</td>
      <td>Starting with the project- Understanding the data and processing the data
</td>
    </tr>
    <tr>
      <td>Week 6-7</td>
      <td>Building and Training the model.</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
