---
layout: project
title: Seasons of Code
project: Street Fighter II - Reinforcement Learning
topics:
    - Machine Learning
    - Deep Learning
mentors:
    - Vijay Balsubramaniam    
    
mentees:
- 5-10
    
permalink: /soc/projects/2023/project252
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
<div >
    <p class="display3 project-desc" style = "font-size:22px;" >
        <br>
       Machine Learning is the buzzword! New to the world of ML? Here's a perfect place to begin!

Reinforcement learning (RL) is a powerful machine learning technique that has gained significant attention in recent years due to its ability to solve complex decision-making problems. In RL, the goal is to build Intelligent Autonomous Agents (with no prior knowledge of their environment except the possible set of actions they could take) which interact with their environment to figure out the best way to gain rewards from the environment, much like humans!<br>

The theoretical concepts we will cover will more or less follow: 
https://www.deepmind.com/learning-resources/introduction-to-reinforcement-learning-with-david-silver
I'd recommend watching the first lecture to get an idea; and yes, the endeavor is to focus on theory + programming.
<br>
In theory we will explore:
Markov Decision Processes, The (holy) Bellman Equation, Simple Q-Learning and its improvisations, Monte Carlo Methods and Temporal Difference Learning.
<br>
Here's a python tutorial reference (must read before applying!):
https://www.w3schools.com/python/default.asp
<br>

In coding we will explore:
Python libraries which facilitate Reinforcement Learning: Open AI Gym, retro-gym, numpy, tensorflow and pytorch and of course, Street Fighter.
<br>
A similar project:
https://pytorch.org/tutorials/intermediate/mario_rl_tutorial.html
<br>
The central goal of this SoC project is to teach an autonomous agent to play Street Fighter! 
 <br>
</p>

<p class="display3 project-desc" style = "font-size:22px;" >
 Who should TAKE this project?<br>
-- Someone who has a background in python. You just need to be familiar with classes, functions and conditionals. Refer to the link in the general description of the project. If you are new to python, get yourself comfortable with python before we start the actual project.
-- Someone who isn't afraid of math, matrices and all that magic!
-- Someone who is willing to devote time to appreciate the beauty of Machine Learning algorithms and the power of python.
-- Someone who is determined to finish what they start (Yes, at times you might feel fed up, but the sheer of joy of an agent that trained for 10 straight hours acing the game is the epitome of satisfaction!)
<br>
Who should NOT TAKE this project?
-- Someone who is not familiar with python and has never coded before at all.
-- Someone who has no enthu for ML and no energy for hours of debugging the merciless errors thrown by their programs.
-- Someone who has no interest in going through texts and reading published papers.
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
      <td  >Week 0</td>
      <td>Introduction to RL and review of Python background
  </td>
    </tr>
    <tr>
      <td>Week 1</td>
      <td>	Review of MDPs and introducing Q-Learning Theory, playing with OpenAIGym</td>
    </tr>
    <tr>
      <td>Week 2-3</td>
      <td> Review of RL MC and TD Methods. More OpenAIGym</td>
    </tr>
    <tr>
      <td>Week 4-5</td>
      <td> Implementing a published paper from scratch. You can choose the paper from a set of papers I will share.(This will give you a glimpse of research spaces in RL)</td>
    </tr>
    <tr>
      <td>Week 6-7</td>
      <td> Street Fighter II (This will give you a glimpse of the applied spaces in RL)</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
