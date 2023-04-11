---
layout: project
title: Seasons of Code
project: COLLIDE
topics:
    - Regular Expression Engine
mentors:
    - Parth Pujari, Anish Kulkarni
    
mentees:
- 8
    
permalink: /soc/projects/2023/project270
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
        The Project involves the development of a game engine linked with a graphics interface. We develop a sophisticated graphics system for the game using OpenGL and encase in it a physics framework including a broadphase collision detection and resolution system. Following that is a randomization algorithm that generates random levels and worlds consistent with certain laws.
        <br> 
OpenGL: https://learnopengl.com/
<br>
Pre-requisites:
<br>
C++ at the level of CS101
<br>    </p>
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
      <td>Understanding the base code provided by us. </td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td> Implementing basic collision detection and resolution.</td>
    </tr>
    <tr>
      <td>Week 3-4</td>
      <td>Learning OpenGL and creating a mini game</td>
    </tr>
    <tr>
      <td>Week 5-6</td>
      <td> Choosing a game to make and building it upon the framework created until now</td>
    </tr>
    <tr>
      <td>Week 7-8</td>
      <td>Introducing randomised generation in their game</td>
    </tr>
    
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
 