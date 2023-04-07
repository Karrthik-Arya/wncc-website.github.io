---
layout: project
title: Seasons of Code
project: Image Super Resolution using Deep Neural Networks
mentors:
    - Tanay Tayal
    - Shantanu Welling
    - Param Shah    
    
mentees:
- 8-10   
    
permalink: /soc/projects/2023/project242
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
<div style = "margin-bottom: 140px">
    <p class="display3 project-desc" style = "font-size:22px;" >
        <br>
        We propose a deep learning method for single image super-resolution. They will start by learning the basics of python and then proceed onto deep learning. Following which they learn about deep neural network architecture for image super resolution and implement a model that takes a low-resolution image as the input and outputs the high-resolution one. Further readings: https://medium.com/analytics-vidhya/super-resolution-and-its-recent-advances-in-deep-learning-part-1-c6d927914d32 
<br>
Prerequisites: None. Interest in image processing is appreciated. Basic knowledge about python and deep learning is a bonus but not necessary.
<br>        <br>
    </p>
</div>
<div class = "d-flex flex-wrap">
<div>
    <h4 class="display3" style="margin:0px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class="table table-striped w-100">
    <thead>
        <tr>
        <th>Week</th>
        <th>Work</th>
        </tr>
    </thead>
    <tbody>
    <tr>
      <td>Week 1</td>
      <td>Brushing up Python Basics</td>     
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Introduction to Deep Learning</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Convolutional Neural Networks using numpy</td>
    </tr>
    <tr>
      <td>Week 4-5</td>
      <td>Building basic Deep Neural Networks</td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Understanding Image Super Resolution and proposing suitable architectures</td>
    </tr>
    <tr>
      <td>Week 7-8</td>
      <td>Implementation of the model</td>
    </tr>
    </tbody>
    </table>
</div>

</div>
{% endif %}
{% endfor %}
