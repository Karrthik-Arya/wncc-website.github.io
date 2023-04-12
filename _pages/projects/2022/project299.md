---
layout: project
title: Seasons of Code
project: FlappeRL
topics:
    - Machine Learning
mentors:
    - Kartik Gokhale
    - Hastyn Doshi
    
mentees:
- 5-6
    
permalink: /soc/projects/2023/project299
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
       Like playing games? Want to make your own AI to master a game? If so, this will allow you to implement Reinforcement Learning Algorithms for the game Flappy Bird. Not familiar with the game. Do watch this: https://www.youtube.com/watch?v=lQz6xhlOt18. Additionally, we will be creating our own version of the game. If you're adequately excited for it, we can use a proper game engine for the same. Check this cool video, too: https://www.youtube.com/watch?v=_fiQsWFwvD0
<br>
PreReqs:
<br>
Basic Python and willingness to learn
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
      <td><strong>Week 1</strong></td>
      <td>Catching up on Python and Git
</td>
    </tr>
    <tr>
      <td><strong>Week 2 </strong></td>
      <td>Basics of Reinforcement Learning
</td>
    </tr>
    <tr>
      <td><strong>Week 3-4</strong></td>
      <td>Working on the Game environment </td>
    </tr>
    <tr>
      <td><strong>Week 5-6 </strong></td>
      <td>Implement Reinforcement Learning to the game agent</td>
    </tr>
    <tr>
      <td><strong>Week 7-8</strong></td>
      <td>Training and documentation</td>
    </tr>
        </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
