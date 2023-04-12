---
layout: project
title: Seasons of Code
project: Hands-on Computational Physics
topics:
    - Machine Learning
mentors:
    - Kaustav Prasada
    - Varad Mahashabde (200260057)
    
mentees:
- 5-8
    
permalink: /soc/projects/2023/project300
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
<div>
    <br>
    <ul>
        {% for topic in page.topics %}
        <li style = "display: inline"><h4 class="text-primary text-center">{{topic}}</h4></li>
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
      "Hands-on Computational Physics is a project that introduces mentees to the fascinating world of computational physics. Over the course of the project, mentees will learn numerical methods commonly used in computational physics, including Newton-Raphson, Monte-Carlo, and Runge-Kutta methods to solve ODEs. They will then apply these methods in two small learning projects, which involve numerically solving Laplace's equation and simulating the 1D wavefunction.

In the latter part of the project, mentees will have the freedom to choose a computational physics project from any branch of physics. With the guidance of mentors, mentees will be able to delve into exciting areas such as quantum mechanics, astrophysics, or fluid dynamics, and explore the power of computational tools in these areas.

This project provides an opportunity for mentees to develop important skills such as problem-solving, data analysis, and programming, while also gaining exposure to cutting-edge research areas in physics. The project is ideal for students who are passionate about physics and want to gain practical experience in computational methods.

So, come join us on this exciting journey of discovery and innovation in computational physics! To whet your appetite, here's a video of a 1D wavefunction simulation - one of the learning projects we will undertake:
https://www.youtube.com/watch?v=v0UIGl4cTD0&list=PLUjBU8XbxIJM6dXqnwv4T8Gl2cNFTFh-p&index=6&ab_channel=YourPhysicsSimulator-YTChannel"
<br>
PreReqs:
<br>
"Familiarity with any programming language (e.g. python, C++) or any computing/graphing tool (MATLAB, GeoGebra, Desmos)
Basic knowledge of electromagnetism and quantum mechanics (introductory physics courses taken in the first year will be quite sufficient)

However, these prerequisites are not set in stone, and mentees with different backgrounds and experience levels are welcome to participate. Regardless of background, the project will require mentees to learn new tools and concepts, so an eagerness to learn and a willingness to put in time and effort will be essential for success. "
</p>
<div class ="d-flex">
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class = "table table-striped">
  <thead>
    <tr>
      <th>Week Number</th>
      <th>Tasks to be Completed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Week 1-2</strong></td>
      <td>- Introduction to numerical methods in computational physics
- Explanation of Newton-Raphson, Monte-Carlo, Runge-Kutta and other numerical methods
Assign readings and exercises to familiarize mentees with numerical methods

</td>
    </tr>
    <tr>
      <td><strong>Week 3-4 </strong></td>
      <td>Numerically solving Laplace's equation using Monte-Carlo and Grid-based Methods
Simulating the 1D Wavefunction
Completion of the first two small learning projects
</td>
    </tr>
    <tr>
      <td><strong>Week 5-6</strong></td>
      <td>Mentees choose a computational physics project from any branch of physics
Mentors provide guidance and resources to mentees for their chosen projects
Assignments and milestones to help guide mentees</td>
    </tr>
    <tr>
      <td><strong>Week 7-8</strong></td>
      <td>Mentees work on their projects with regular check-ins with mentors
Final presentations and demonstrations of completed projects by mentees</td>
    </tr>
        </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
