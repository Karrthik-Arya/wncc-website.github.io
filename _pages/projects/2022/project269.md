---
layout: project
title: Seasons of Code
project: Dive into the World of Quant
topics:
    - Automata Theory 
mentors:
    - Prajwal Raut
    - Sahil Khan (200020112)
    
mentees:
- 10
    
permalink: /soc/projects/2023/project269
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
The project majorly focuses on developing quant models from basics which would automate the trading system. Models would be tested on various parameters and performance. Minimum number of models with required performance would have to be completed for completing the project, participation in different quant competitions to enhance learning.</p><br>
<p>Prerequisites:
A bit of technical analysis(can learn along the project), and ofcourse enthu :)</p>

<br>


        
    
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
      <td  >Week 1</td>
      <td>Brushing up of technical and fundamental analysis
               Setup Project Workspace

</td>
    </tr>
    <tr>
      <td>Week 2-3</td>
      <td> Understanding of models in quant, Developing own models and participating in quant competition 
</td>
    </tr>
    <tr>
      <td>Week 4-5</td>
      <td>Different methods for improving the performance of models, Using complex operators for developing and testing models.
</td>
    </tr>
    <tr>
      <td>Week 6-7</td>
      <td>Buffer, Wrap up with completing a given minimum number of models,and reducing correlations.
</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
