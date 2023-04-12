---
layout: project
title: Seasons of Code
project: Dive into Digital Image Processing 
mentors:
    - Vipul Patil
    - Hariprakash Reddy   
    
mentees:
- 8-10
    
permalink: /soc/projects/2023/project249
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
        Introduction to image processing: 
        <br>
- https://pyimagesearch.com/2021/04/17/image-classification-basics/<br>
- https://www.javatpoint.com/concept-of-pixel<br>
Image Classification algorithms(Object Oriented
Segmentation)<br>
Linear Discriminant Functions ,Principal component analysis and K-means clustering
- https://towardsdatascience.com/k-means-clustering-algorithm-applications-evaluation-methods-and-drawbacks-aa03e644b48a<Br>
- https://www.javatpoint.com/linear-discriminant-analysis-in-machine-learning<br>
Edge detection:<br>
- https://www.javatpoint.com/opencv-canny-edge-detection
<br>
Prerequisites:
No prerequisites. 
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
      <td>Week 1</td>
      <td>Python installation and basics of image processing</td>     
    </tr>
    <tr>
      <td>Week 2</td>
      <td> Introduction to Image classification and Playing with pixels (assignment)</td>
    </tr>
    <tr>
      <td>Week 3-5</td>
      <td>few Image classification algorithms(Linear Discriminant Functions ,Principal component analysis and K-means clustering)</td>
    </tr>
    <tr>
      <td>Week 6-7</td>
      <td>Implementation of one of the classification algorithm (assignment)</td>
    </tr>
    <tr>
      <td>Week 8</td>
      <td>Edge detection (If gets more time can implement canny edge detector(assignment))</td>
    </tr>
    </tbody>
    </table>
</div>

</div>
{% endif %}
{% endfor %}
