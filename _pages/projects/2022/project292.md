---
layout: project
title: Seasons of Code
project: Competitive Programming
topics:
    - Competitive Programming
mentors:
    - Virendra Kabra
  
    
mentees:
- 6  
    
permalink: /soc/projects/2023/project292
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
        The main goal is to get comfortable with commonly used algorithms and data structures for CP.

Specifics of Week 5, 6, 7, 8 are subject to change. These weeks will coincide with vacations, and thus we will plan to take up working on the more complex features towards the end.
<p class="display3" style = "font-size:22px;" >
Resources:
Online resources include cp-algorithms,
<br> CSES and GFG, among others.
<br>
Prerequisites : CS101
<br>
<br>
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
      <td>C++ STL Basics</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Sorting and Searching </td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Graph Algorithms</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Divide-Conquer and Greedy Paradigms</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Dynamic Programming</td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Range Queries</td>
    </tr>
    <tr>
      <td>Week 7</td>
      <td>Flows</td>
    </tr>
    <tr>
      <td>Week 8</td>
      <td>Problems</td>
      </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
