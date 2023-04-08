---
layout: project
title: Seasons of Code
project: Competitive Programming (CP)
topics:
    - Web Development
mentors:
    - Gowtham S
    - Siddharth Bhuva(210050149), Rishit Shrivastava (210050136)
    
mentees:
- 10
    
permalink: /soc/projects/2023/project261
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
<div class = "project-desc" style = "margin-bottom: 140px">
    <p class="display3" style = "font-size:22px;" >
        <br>
        "In this project, the mentees will be learning about essential data structures that make implementing the algorithms for CP easier and faster and Essential algorithms for Competitive Programming. We will be following standard books for algorithms and the handbook of competitive programming. 
Mentees will be solving questions from websites like CSES Problem Set and Codeforces and some standard questions. They will be given Weekly or Biweekly assignments which contain 3-4 questions based on that week's part, to check their progress through the entire project. They would have to complete all the assignments to complete the project. Apart from the assignments, they are encouraged to solve problems from CSES Problem set and codeforces (any other websites too) side by side .
Prerequisite:
Basics of programming in C++ 
    </p>
</div>
<div class = "d-flex flex-wrap">
<div>
    <h4 class="display3" style="margin:110px 0px 40px 0px;">Tentative Timeline :</h4>
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
      <td> Standard data structures and tools essential for CP
  </td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Divide and Conquer Idea</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Graphs - Introduction and Traversals</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Greedy Algorithms</td>
    </tr>
    <tr>
      <td>Week 5-6</td>
      <td>Dynamic Programming, Graph Algorithms</td>
    </tr>
    <tr>
    <td>Week 7-8</td>
    <td>Participating in various Contests</td>
    </tr>
    </tbody>
    </table>
</div>

</div>
{% endif %}
{% endfor %}
