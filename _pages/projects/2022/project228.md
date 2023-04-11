---
layout: project
title: Seasons of Code
project: The Image Cartoonifier
topics:
    - Web Development
    - Machine Learning
mentors:
    - Jaideep Chandra
    - Sridhar
    - Bhavani Sankar   
mentees:
    - 10-15
    
permalink: /soc/projects/2023/project228
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
        Have you ever wished to transform your ordinary photos into stunning cartoons with just a few clicks? Look no further than our image cartoonifier project! With the power of Python and machine learning, we have developed an innovative tool that can turn any photo into a cartoonized masterpiece. From family portraits to pet snapshots, our software can transform them all into whimsical works of art.

The project will employ advanced image processing techniques, including feature extraction and post-processing, to create stunning cartoon-style renderings of your favorite photos. In addition, we will integrate our model into a web application where you can easily upload your photos and receive the cartoonized version as output. Our user-friendly interface and seamless integration of machine learning algorithms will make our web application perfect for hobbyists and professionals alike.
<br>
Prerequisites: Enthusiasm!
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
      <td  >Week 1</td>
      <td>Introduction to Python and Setting up a Python development environment
</td>
    </tr>
    <tr>
      <td>Week 2-3</td>
      <td>Introduction to machine learning concepts, such as supervised and unsupervised learning, and training vs. testing data
 </td>
    </tr>
    <tr>
      <td>Week 4-5</td>
      <td>Introduction to deep learning concepts, such as neural networks and deep learning frameworks, such as TensorFlow and Keras

</td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Implementing machine learning algorithms for image processing with Python libraries, such as OpenCV and GIMP
</td>
    </tr>
    <tr>
      <td>Week 7-8</td>
      <td>Final Project Completion and Documentation</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
