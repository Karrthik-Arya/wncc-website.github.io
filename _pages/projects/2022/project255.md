---
layout: project
title: Seasons of Code
project: Navigating the Waters of AI
topics:
    - Machine Learning
mentors:
    - Atharv Kshirsagar 
    - Kushal Gajbe
    - Omkar Nitsure 
    
mentees:
- 7-8 
    
permalink: /soc/projects/2023/project255
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
<div class = "project-desc" >
    <p class="display3" style = "font-size:22px;" >
        "The learning involved would include understanding the fundamentals of machine learning, such as supervised learning, unsupervised learning, and reinforcement learning. Mentees would also need to learn about specific machine learning algorithms, such as neural networks, decision trees, and support vector machines, and their applications.<br>

Suggested reading materials and resources for mentees to gain context and spark their interest could include:<br>

    1.""Hands-On Machine Learning with Scikit-Learn and TensorFlow"" by Aurélien Géron <br>

    2.""Deep Learning"" by Ian Goodfellow, Yoshua Bengio, and Aaron Courville <br>

    3.""Python Machine Learning"" by Sebastian Raschka and Vahid Mirjalili <br>

    4.TensorFlow and Keras documentation and tutorials <br>

    5.PyTorch documentation and tutorials"<br>
<br>
Pre-resuisites:
<br>
    "CS101
Statement of Purpose:<br>
In your proposal, mention the following:<br>
1. Previous experience in programming, apart from CS 101 (in any language, preferably).<br>
2. Motivation for studying  AI.<br>
3. Previous experience in working on python based project (if any, not mandatory).<br>
4. Anything else you feel is worth mentioning."
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
      <td>Week 1-2</td>
      <td>Fundamentals of Python programming
  </td>
    </tr>
    <tr>
      <td>Week 2-4</td>
      <td> Finding best route using graph search</td>
    </tr>
    <tr>
      <td>Week 4-6</td>
      <td>Training ML models + Linear Regressions</td>
    </tr>
    <tr>
      <td>Week 7-8</td>
      <td>Onward:Projects/Final Assignment.</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
