---
layout: project
title: Seasons of Code
project: Economics meets Machine Learning
topics:
    - Machine Learning
    - Deep Learning
    - Computer Vision
mentors:
    - Tejas Sanjaykumar Pagare
    - Param Rathour (190070049)
    
mentees:
- 4-6
    
permalink: /soc/projects/2023/project262
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
<p class="display3" style = "font-size:22px;" >
"The project will involve implementing various Economics problems as a Markov Decision Process in a compact way as Gym (https://arxiv.org/abs/1606.01540). Later we will implement Bandit and Reinforcement Learning algorithms to solve these problems. Some economic problems that we will deal with include Matching Markets, Auctions, and allocation problems. Matching Markets has applications in ridesharing, online dating, job matching, kidney exchange, and university applications. Auctions are everywhere, from IPL team selection to online advertising, spectrum allocation to art auctions, government procurement, and online marketplaces. 
<br>
This project if successful can result in a research paper.
<br>
Resources
Markov Decision Processes: https://youtu.be/2iF9PRriA7w
<br>
Auctions: https://youtu.be/4kWuxfVbIaU
<br>
Matching Markets: https://youtu.be/ELC7rCBL7I0, https://youtu.be/80QZ0IrQVbQ
<br>
Economics of Matchmaking: https://youtu.be/kj2fpM57Z7A
<br>
Advanced Resources
Michael Jordan Talk: https://youtu.be/fwOZbhQpbNg" 
<br>
Prereqs: Familiarity with Python. Knowledge of Probability, Statistics. Prior knowledge of Machine Learning and Economics will be helpful. <br>
</p>
</div>
<div class ="d-flex">
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class = "table table-striped w-100">
  <thead>
    <tr>
      <th>Week Number</th>
      <th>Tasks to be Completed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Week 1-2</strong></td>
      <td>Learn about different types of MDPs, Bandit Algorithms, and some RL algorithms</td>
    </tr>
    <tr>
      <td><strong>Week 3 </strong></td>
      <td>Basic familiarity with Gym implementation and GitHub setup.</td>
    </tr>
    <tr>
      <td><strong>Week 4  </strong></td>
      <td>Introduction to different Economics Problems and their mathematical models</td>
    </tr>
    <tr>
      <td><strong>Week 5 </strong></td>
      <td> Implementating Econ problem as a Gym Environment</td>
    </tr>
    <tr>
      <td><strong>Week 6-7 </strong></td>
      <td>Integrating Bandit or RL Algorithms</td>
    </tr>
    <tr>
      <td><strong>Week 8 </strong></td>
      <td> Benchmarking against Heuristic Approaches
</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
