---
layout: project
title: Seasons of Code
project: "Autonomous Driving Vehicle"
topics:
    - Machine Learning
mentors:
    - Kartik Gokhale
    - Sarthak Mittal  
    
mentees:
- 6
    
permalink: /soc/projects/2023/project256
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
<div >
    <p class="display3" style = "font-size:22px;" >
        <br>
"This project is expected to be part of a larger project with multiple sub-goals.<br>

The autonomous driving vehicle will have many sub-components involving the creation of the environment (terrains, roads, traffic etc.), development of the agent (car), training of the agent (this will be split into further modules such as identification of objects using ML and CV, tracking the path using CV and RL, avoiding obstacles, controlling movement such as speed and steering). <br>

You will get to experience hands-on development in various fields like machine learning, image processing, reinforcement learning and various applications involving a mixture of these."
        <br>
Prerequisites:<br>
Enthusiasm to work towards a larger project
<br>
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
      <td>Brush up on Python Skills, Github and others
  </td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Begin with Reinforcement Learning Basics or Computer Vision.</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td> Encode the driving environment and the agent of the car</td>
    </tr>
    <tr>
      <td>Week 4-5</td>
      <td>Continue developing the environment, training the agent and proceed to add features encoding more detail.</td>
    </tr>
    <tr>
      <td>Week 6-7</td>
      <td>Evaluate performance and complete the simulation.</td>
    </tr>
    <tr>
      <td>Week 8</td>
      <td>Explore various options to go ahead including multi-agent RL or 3-dimensional rendering and implementing advanced visual sensors.</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
