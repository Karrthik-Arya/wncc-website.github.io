---
layout: project
title: Seasons of Code
project: Human Pose Estimation
topics:
    - Machine Learning
    - Image Processing
mentors:
    - Om Godage 
    - Shubham Hazra
    
mentees:
- 7
    
permalink: /soc/projects/2023/project273
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
<div>
    <br>
    <ul>
        {% for topic in page.topics %}
        <li style = "display: inline"><h4 class="text-primary text-center">{{topic}}</h4></li>
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
        <br>
        Pose estimation is a fascinating field that deals with the accurate and reliable detection of human body movements and positions. It is widely used in various applications such as robotics, gaming, and virtual reality. The problem involves analyzing a given video or image to determine the position and orientation of the human body in real-time.
<br>
To implement this, one can use computer vision techniques such as deep learning and convolutional neural networks. By training these networks on large datasets of human poses, they can accurately identify the positions and movements of the human body in various scenarios. The result is a highly accurate and efficient system that can be integrated into a wide range of applications, from sports coaching to medical rehabilitation.
<br>
With the increasing demand for accurate and real-time human pose estimation, this project offers a unique opportunity to explore the latest techniques and tools in computer vision and machine learning. The implementation of a robust and efficient pose estimation system can have a significant impact on various industries, from gaming to healthcare, and can pave the way for exciting future developments in the field.
<br>
Here is a link for some general information: https://www.v7labs.com/blog/human-pose-estimation-guide
<br>
We are going to select mentees based on the assignment given below. Give it your best shot!: https://github.com/0-JackFrost-0/Human-Pose-Estimation-SoC-2023
Pre-requistes:
</p>
<ul style = "list-style-type: disc">
<li class="display3 mb-2" style = "font-size:20px;">Python </li>
<li class="display3 mb-2" style = "font-size:20px;">Basic Mathematics</li>
</ul>
</div>
<div class ="d-flex">
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class = "table table-striped">
  <thead>
    <tr>
      <th>Week Number</th>
      <th>Tasks to be Completed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Week 1-3</strong></td>
      <td>Basics of Regression & Classical ML, Intro to Deep learning & frameworks (Tensorflow, PyTorch), Image Processing using OpenCV & classical methods</td>
    </tr>
    <tr>
      <td><strong>Week 4-6 </strong></td>
      <td>Dive into CNNs & transfer learning, Intro to transformer and attention models & pose estimation, Getting Started with Pose Estimation</td>
    </tr>
    <tr>
      <td><strong>Week 7-9 </strong></td>
      <td> Implementing Pose Estimation using State-Of-The-Art Models, Finishing up with the motion detection pipeline and applying on new data, Finishing up with documentation and submission</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
