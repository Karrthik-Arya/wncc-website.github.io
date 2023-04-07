---
layout: project
title: Seasons of Code
project: Developing Trading Strategy with Pine Script
topics:
    - Algorithmic Trading
mentors:
    - Vivek Kumar
    - Rajik Kumar   
mentees:
- 6-8
    
permalink: /soc/projects/2023/project226
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
            The project provide hands-on experience in developing custom trading strategies using Pine Script language on TradingView. Pine Script is a programming language that allows traders to create custom indicators and strategies on the TradingView platform.<br>
Prerequisites: enthusiastic for trading
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
      <td  >Week 1-3</td>
      <td>Introduction to TradingView and Pine Script. Learn the basics of the language and syntax. How to use it to create custom indicators and strategies.
</td>
    </tr>
    <tr>
      <td>Week 4-6</td>
      <td>Strategy Design. Study different types of trading ideas & strategies. Implementation strategy into code. Backtest strategies and improvements.
 </td>
    </tr>
    <tr>
      <td>Week 7-8</td>
      <td>Finalising the Trading Strategy. Finalise the strategy. Code and Backtesting on different parameters.

</td>
    </tr>
    <tr>
      <td>Week 9</td>
      <td> Strategy Evaluation and Presentation. 
</td>
    </tr>    
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
