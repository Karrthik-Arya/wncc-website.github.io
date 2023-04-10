---
layout: project
title: Seasons of Code
project: Hands on Reinforcement
topics:
    - App Development
mentors:
    - Ashwin Abraham 
    - Jujhaar (200110052)
    - Prerak Contractor (210050124)
    - Sankalp Bhamare (200110096)"
    
mentees:
- 10-12
    
permalink: /soc/projects/2023/project291
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
        This is a continuation of the WiDS projects "Hands-on Reinforcement Learning" and "Training AI to play games using Reinforcement Learning". 
<br>
The repos for these projects are: https://github.com/AshwinAbraham2021/WiDS-Training-AI-to-play-games-using-Reinforcement-Learning and https://github.com/jujhaar2409/WiDS-Hands-on-RL
<br>
We will be following Sutton & Barto as a reference for the theory, and read chapters from it while implementing the strategies described in it in Python. For the Deep RL part, we will follow the book Grokking Deep Reinforcement Learning by Miguel Morales.
<br>
Some resources we may use are the slides on RL by David Silver (https://www.deepmind.com/learning-resources/introduction-to-reinforcement-learning-with-david-silver) and the slides from the course CS 747: Foundations of Intelligent and Learning Agents (https://www.cse.iitb.ac.in/~shivaram/teaching/old/cs747-a2022/index.html)
<br>
We will eventually train an RL model that can play (and win) simple games such as Tic-Tac-Toe Snake, and Atari Games. Eventually, we will train models on more complex games, including board games such as Chess.
<br>
Prerequisites:
<br>
Since this is a continuation of the WiDS projects, ideally, the applicants would have been mentees in one of these WiDS projects.

However, those with some preexisting Reinforcement Learning knowledge are also encouraged to apply (ideally you should've done the first 3 chapters of Sutton & Barto, although we may waive this requirement on an individual basis).

As always, enthusiasm is a prerequisite.
        <br>
    </p>
</div>
<div class = "d-flex flex-wrap">
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class="table table-striped">
    <thead>
        <tr>
        <th>Week</th>
        <th>Work</th>
        </tr>
    </thead>
    <tbody>
    <tr>
      <td  >Week 1</td>
      <td>S&B Chapter 4: Dynamic Programming
Grokking Chapter 1: Introduction to Deep RL</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>S&B Chapter 5: Monte Carlo Methods
Programming RL models to solve Tic-Tac-Toe and Snake
</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>S&B Chapter 6: TD Learning and Q-Learning
Grokking Chapter 8: Introduction to Value-based Deep RL
</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>S&B Chapter 7: Eligibility Traces
</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>S&B Chapter 8: Learning with Tabular Methods
Grokking Chapters 9, 10: Deep Q-Learning Networks
Coding up DQN models to play the Atari games in the Open AI gym (https://gymnasium.farama.org)
</td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>S&B Chapters 9, 11: Approximate Solution Methods
Start coding up an RL based Chess Engine
</td>
    </tr>
    <tr>
      <td>Week 7</td>
      <td>S&B Chapter 14: Applications and Case Studies
Grokking Chapters 11, 12: Advanced Methods
</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
 