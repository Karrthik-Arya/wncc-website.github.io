---
layout: project
title: Seasons of Code
project: Deep Carlsen
topics:
    - Machine Learning 
    - Deep Learning
    - Reinforcement Learning
mentors:
    - Navyansh Mahla
    - Atishay Jain
    
mentees:
- 8-10 
    
permalink: /soc/projects/2023/project245
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
        <br>
        The project is about building a chess engine AI but with a different approach. The most commonly used chess engines like StockFish depend heavily on hard-coded chess AI algorithms. Our approach would be very similar to advanced chess engines like AlphaZero, Leela Chess Zero, etc. These chess engines rely on neural networks having different architectures. (deciding the architecture is one of the brainstorming checkpoints of this project ;) ) We will explore various deep learning techniques like convolutional neural networks, reinforcement learning, and more to build an AI that can play chess at an expert level. For more insight, have a look at this video: https://www.youtube.com/watch?v=P0jd8AHwjXw&list=WL&index=11&t=2566s

The below is the assignment that all the applicants must do to be considered for this project: https://docs.google.com/document/d/10M-J3ShndU_H5Ul0CHjPIGRGfMA1V7xcGfKJvWQ3Fjs/edit?usp=sharing 

You also need to submit a project proposal where you state your motivation for the project and past coding experiences in the field of Python, AI/ML and working with large codebases. 

<br>
Prerequisites: The following are the projects:
1. Strong programming skills in language like C/C++/Python. 
2. Beginner-intermediate level of understanding of reinforcement leaning, machine learning and basic neural networks.
3. Enthusiastic to learn new topics quickly.
4. A passion for chess and a desire to improve the game through AI
</p>
<ul style = "list-style-type: disc">
<li class="display3 mb-2" style = "font-size:20px;">We expect huge enthusiasm, a good hold over python</li>
<li class="display3 mb-2" style = "font-size:20px;">Knowledge of Machine learning is definitely a bonus! e</li>
</ul>
<ul style = "list-style-type: disc">
</ul>
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
      <td>Building up mathematical background (learning about mathematical concepts which would be extremely crucial for this project)</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td> Catching up with AI (Learning more on neural networks, deep learning, reinforcement learning)</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Learning python framework PyTorch, concurrency and parallelism.</td>
    </tr>
     <tr>
      <td>Week 4</td>
      <td> Modelling follow-up strategies for the AI and programming them.</td>
    </tr>
     <tr>
      <td>Week 5</td>
      <td>Documentation </td>
    </tr>
     <tr>
      <td>Week 6</td>
      <td>Result analysis and parallelly building the front end</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
