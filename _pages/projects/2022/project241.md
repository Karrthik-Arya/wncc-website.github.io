---
layout: project
title: Seasons of Code
project: Path-Planning of Swarm Robotics in 2/3D space
mentors:
    - Archit Gupta
    - Sameer Mannava
    - Aaryan Dangi
    
mentees:
- 10-15   
    
permalink: /soc/projects/2023/project241
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
        

A general idea of Swarm robotics can be learned from-https://en.wikipedia.org/wiki/Swarm_robotics  
The purpose of this is to learn path planning required in the swarm robotics that is an emerging field. The algorithms to be developed for such is the only thing that is a bottleneck in this as of now. There is ample research in this domain and in this we will be doing a rudimentary algorithm to kickstart this journey        
<br>
<br>
Prerequisites:
<br>
Enthusiasm
Well versed in any programming language to pick up faster.
Time commitment of approx 12-15 hours a week,might be more 
<br>
</p>
</div>
<div class = "d-flex flex-wrap">
<div>
    <h4 class="display3" style="margin:0px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class="table table-striped w-100">
    <thead>
        <tr>
        <th>Week</th>
        <th></th>
         <th>Work</th>
          <th></th> 
          <th></th>
        </tr>
    </thead>
    <tbody>
    <tr>
      <td>Week 1</td>
      <td>linux+python</td>
    </tr>
    <tr>
      <td>Week 2-3</td>
      <td>ROS+Gazebo basics</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Automated Control of single bot</td>
    </tr>
    <tr>
      <td>Week 6-7</td>
      <td>Proper inter communication between bots and testing with parallel running</td>
    </tr>
    <tr>
      <td>Week 8</td>
      <td>Achieving automation of config from one config to another config</td>
    </tr>
    </tbody>
    </table>
</div>

</div>
{% endif %}
{% endfor %}
