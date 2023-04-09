---
layout: project
title: Seasons of Code
project: Graph Machine Learning
topics:
    - Machine Learning
    - Deep Learning
mentors:
    - Shlesh Gholap
    
mentees:
- 5-6
    
permalink: /soc/projects/2023/project284
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
        "Graph machine learning is a subfield of machine learning that involves using graph structures to represent data and learn from it. It is a type of deep learning that focuses on modeling complex relationships and dependencies between entities in a graph.
The project starts with covering theoretical aspects of algorithms like Graph Kernals, DeepWalk, and node2vec and moves on to more sophisticated techniques like Graph Neural Networks and Graph Convolutional Networks. The later part of the project focuses on implementing research papers using Python libraries like NetworkX and PyG. 
To look at applications of GNNs to impactful real-world use cases, visit https://medium.com/stanford-cs224w

"
<br>
Prerequisites:<br>
A fundamental grasp of deep learning and linear algebra is essential. If you have experience with PyTorch, that's even better. Prior knowledge of graph theory isn't required. 

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
      <td  >Week 1-2</td>
      <td>Brush up fundamentals of Deep learning and get well-equipped with PyTorch. </td>
    </tr>
    <tr>
      <td>Week 3-5</td>
      <td>Discuss the necessary theory for the project, including GNNs, while also studying the NetworkX and PyG libraries.  </td>
    </tr>
    <tr>
      <td>Week 6-8</td>
      <td>Complete the project by implementing a research paper.</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
 