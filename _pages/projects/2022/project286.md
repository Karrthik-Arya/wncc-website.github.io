---
layout: project
title: Seasons of Code
project: ArgueAI
topics:
    - Competitive Coding
mentors:
    - Abhinav Raghuvanshi
    - Pranav Malpure
    - Rohan Kalbag
mentees:
- 4
    
permalink: /soc/projects/2023/project286
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
       Are you ready to dive into the cutting-edge world of Reinforcement Learning (RL)? We have an exciting project that's sure to captivate anyone interested in this fascinating field!
Our goal is to create an RL agent that can argue with humans based on a given set of laws, finding loopholes and twists that give the best arguments to win any debate. With this project, you'll be on the forefront of developing groundbreaking technology that has the potential to revolutionize the way we approach legal arguments.
<br>
Imagine being able to build an RL agent to analyze complex legal frameworks, identify loopholes that might go unnoticed by a human lawyer, and craft compelling arguments that are sure to win over any judge or jury. This project will give you the opportunity to do just that, all while honing your skills in programming and machine learning.
<br>
Whether you're an aspiring computer scientist, excited by how do lawyers use loopholes to their advantage, or just someone who loves to explore new technologies, our project would be the  perfect opportunity to expand your horizons and be a part of something truly groundbreaking. Don't miss out on this exciting chance to explore the world of RL and revolutionize the way we approach legal arguments!

<br>
Prerequisites:
We expect huge enthusiasm, a good hold over python, and not to be afraid to take on mathematical challenges. Knowledge of Machine learning is definitely a bonus! Please note that these are not hard prerequisites, we will consider your application based on your overall skills. 
        <br>
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
      <td  >Week 1-2</td>
      <td>: Problem description and getting everyone on the same page, Looking for resources and collecting data for the corpus</td>
    </tr>
    <tr>
      <td>Week 3-4-5</td>
      <td> Pre-processing data and building the agent, Building training pipeline for RLHF, Training and experimenting </td>
    </tr>
    <tr>
      <td>Week 6-7-8</td>
      <td>Result analysis and parallelly building the front end, Buffer Week, Buffer Week</td>
    </tr>
    
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
 