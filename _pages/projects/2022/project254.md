---
layout: project
title: Seasons of Code
project: Social media website with MERN
topics:
    - Web Development
mentors:
    - Shivam kumar
    - Prakhar Agarwal
    
mentees:
- 10
    
permalink: /soc/projects/2023/project254
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
        The goal of this project is to make you well-versed with CNNs, enough that you can write an entire network in PyTorch from scratch. It will kickstart your journey into Deep Learning.				
        <br>
Prerequisite:<br>
Only Enthusiasm required <a href='https://github.com/Ccivam/Social-Media-Website' target="_blank">Refer Here for GitHub of Projects</a>
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
      <td>HTML,CSS
  </td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>	Javascript</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Rest Api in nodejs</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>MongoDB</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Building Home page of the social media website</td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Building the database and connecting it to the website</td>
    </tr>
    <tr>
      <td>Week 7</td>
      <td>Building profile page of the social media website
</td>
    </tr>
    </tbody>
    </table>
</div>

</div>
{% endif %}
{% endfor %}
