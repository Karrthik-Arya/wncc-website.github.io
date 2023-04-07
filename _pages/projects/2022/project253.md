---
layout: project
title: Seasons of Code
project: Combinatorial Computing
topics:
    - CP
mentors:
    - Soham Joshi
    - Ameya Vikrama Singh 
    - Adarsh Reddy   
    
mentees:
- 4-6 
    
permalink: /soc/projects/2023/project253
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
</p>
<p class="display3" style = "font-size:22px;" >
The project will introduce some interesting mathematical, computational structures and structure generation tricks, often used in competitive coding. Moreover, this will be interlaced with combinatorial ideas, and clever ways to solve combinatorial problems including boolean algebra, SAT solvers, graph algorithms, number theoretic results and much more. We will also cover recent advances in combinatorics brought about by computers. The project will impart a sound theoretic understanding of these problems and will also involve hands-on implementation for solutions to some of these problems.
<br>
Prerequisites:<br>
Basics of C++ Programming, Enthusiasm towards puzzles :)
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
      <td>Computer Representation of Mathematical Objects
  </td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Backtrack Programming, enumeration by exhaustive search</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Satisfiability and SAT Solvers</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Generation of Elementary Configurations, permutations, partitions and sets</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Miscellaneous algorithmic techniques, Graph algorithms </td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td> Elementary Number Theoretic Algorithms </td>
    </tr>
    <tr>
      <td>Week 7</td>
      <td>Latin squares, four color problem, and other advanced combinatorial problems</td>
    </tr>
    <tr>
      <td>Week 8</td>
      <td>Parker Square Generation, Final Presentation </td>
    </tr>
    </tbody>
    </table>
</div>

</div>
{% endif %}
{% endfor %}
