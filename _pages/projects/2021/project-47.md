---
layout: project
title: Seasons of Code
project: Meta Learning - Learning to Learn
topics:
    - Machine Learning
mentors:
    - Akshat Gupta
    - Tanay Sharma
    - Liza Dahiya     
    
mentees:
- 6 students   
    
permalink: /soc/projects/2021/project-47
---

<h2 class="display1 m-3 p-3 text-center">{{page.project}}</h2>

{% for project in site.data.settings.soc-items %}
{% if project.title == page.project %}
<div>
    <img src="{{ site.baseurl }}/{{ project.image }}"  width = "300" height="300" alt="{{ project.project}}" class="border rounded img-soc">
</div>
<div>
    <br>
    <ul>
        {% for topic in page.topics %}
        <li><h4 class="text-primary text-center">{{topic}}</h4></li>
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
    <p class="display3" style = "font-size:20px;" >
        <br>
        Meta Learning is a recent advancement in the field of machine learning where we increase a level of abstraction and start 𝗟𝗲𝗮𝗿𝗻𝗶𝗻𝗴 𝘁𝗼 𝗟𝗲𝗮𝗿𝗻. This helps us train neural networks with almost no data. In this project you shall first learn about the principles and applications of machine learning. Thereafter you shall understand the fundamentals of meta learning, i.e learning to learn. You will finally build a Few Shot image recognition network
        <br>
</div>
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class="table table-striped">
  <thead>
    <tr>
      <th>Week Number</th>
      <th>Tasks to be Completed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Week 1</strong></td>
      <td>Python and  Basics of Machine Learning</td>
    </tr>
    <tr>
      <td><strong>Week 2</strong></td>
      <td>Learn deep learning frameworks</td>
    </tr>
    <tr>
      <td><strong>Week 3</strong></td>
      <td>Meta Learning and Implement Few Shot Image Classification and Image Recognition Network</td>
    </tr>
    <tr>
      <td><strong>Week 4</strong></td>
      <td>Read up the paper Model Agnostic Meta Learning and Implement it</td>
    </tr>
    <tr>
      <td><strong>Week 5</strong></td>
      <td>Complete and Document Everything</td>
    </tr>
  </tbody>
</table>
</div>

{% endif %}
{% endfor %}
