---
layout: project
title: Seasons of Code
project: RegExamaton
topics:
    - Competitive Programming
mentors:
    - Hrishikesh Jedhe Deshmukh
    - Ayush Agarwal (210050029)
  
    
mentees:
- 5-6  
    
permalink: /soc/projects/2023/project293
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
        Our project is all about converting Regular Expressions to Deterministic Finite Automatas. Regular Expressions let you define complex patterns that can find, replace, or match any text you need. With just a few characters, you can unlock a world of possibilities. Automatas are powerful tools in computer science and mathematics, used to model and analyze processes that follow a strict sequence of steps. Ever heard of Turing Machine?! Most general and powerful automata is the Turing Machine. We will be looking at a specific class of automatas called Deterministic Finite Automatas(DFAs). Some popular uses of DFAs are in compiler design and formal verification. 

<p class="display3" style = "font-size:22px;" >
To know more about RegEx and Automata: https://www.javatpoint.com/automata-regular-expression<br>
Prerequisites : Familarity in C++ 
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
      <td>Getting up to pace with C++, Graph Structures, String Parsing</td>
    </tr>
    <tr>
      <td>Week 2-3</td>
      <td>Basics of Automata Theory and Regular Expressions</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Implementing simple Deterministic Finite Automatas</td>
    </tr>
    <tr>
      <td>Week 5-6</td>
      <td>Moving on to complex regular expressions, Combining simple automatas</td>
    </tr>
    <tr>
      <td>Week 7</td>
      <td>Union, Intersection and Complementation of Languages</td>
    </tr>
    <tr>
      <td>Week 8</td>
      <td>Documenting the project </td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
