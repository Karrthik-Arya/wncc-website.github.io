---
layout: project
title: Seasons of Code
project: Using Deep RL and NLP to allocate stocks in portfolio
topics:
    - Competitive Programming
mentors:
    - Nikhil Tiwari	
    - Ishan Jain (200100073)
    
mentees:
- 5 
    
permalink: /soc/projects/2023/project295
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
        "The plan is to use deep reinforcement learning to automate portfolio allocation by training intelligent agent on historical stock prices. Above this we would also by analyzing data from social media like twitter using NLP to do market sentiment analysis.
        <br> 
More details can be found in the paper given https://www.sciencedirect.com/science/article/pii/S2215098621000070 " 
<p class="display3" style = "font-size:22px;" >
Prerequisites : Enthusiasm 
<br>
<br>
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
      <td >Week 1</td>
      <td>Read basics of deep learning and NLP</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Understand specific RL concepts that are useful for project</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Start basic implementation of research paper ie., use deep learning initially</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Use deep RL to make a well performing model than previous one</td>
    </tr>
    <tr>
      <td>Week 5-6</td>
      <td>Use NLP to do market sentiment analysis, Make a proper pipeline</td>
    </tr>
    <tr>
      <td>Week 7</td>
      <td>Build an UI</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
