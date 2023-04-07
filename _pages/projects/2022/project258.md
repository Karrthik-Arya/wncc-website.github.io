---
layout: project
title: Seasons of Code
project: Breakout Genius - Using RL to Build an AI Game Master
topics:
    - Machine Learning
mentors:
    - Omm Agrawal
    - Ayan Minham Khan
    - Sabyasachi Samantaray   
    
mentees:
- 5
    
permalink: /soc/projects/2023/project258
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
Are you interested in using the latest techniques in machine learning and deep learning to build a model that can play Atari's Breakout game? If so, this project is for you!<br>

In this project, we will Learn the basics of ML and DL, implement CNN and RL on simple environment, develop a deep RL model to play Breakout game, experiment with hyperparameters and architectures.<br>

By the end of this project, you will have gained a strong understanding of machine learning and deep learning, as well as the exciting field of RL. You will have developed a deep RL model that can play a classic Atari game, which you can showcase to your peers and potential employers. So, come join us on this exciting journey and learn how to build intelligent machines that can learn to play games on their own!<br>
Prerequisites:<br>
Basic python is mandatory
Knowledge of machine learning is preferable
Interest in Machine learning and Enthusiasm are expected.
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
      <td>Week 1-2</td>
      <td> Installing dependencies and Jupyter notebook, and learning basics of ML, Deep Learning.
  </td>
    </tr>
    <tr>
      <td>Week 3-4</td>
      <td> Learning CNN and implementing it with Pytorch.</td>
    </tr>
    <tr>
      <td>Week 5-6</td>
      <td>Learning concepts of Reinforcement learning</td>
    </tr>
    <tr>
      <td>Week 7-8</td>
      <td>Implementation and training of deep RL model.</td>
    </tr>
    </tbody>
    </table>
</div>

</div>
{% endif %}
{% endfor %}
