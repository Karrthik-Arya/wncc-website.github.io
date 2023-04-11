---
layout: project
title: Seasons of Code
project: Face detection for attendance using AI
topics:
    - Quantitative Modelling, Data Science
mentors:
    - Akash Prasad
    - Tushaar Jhamtani
    
mentees:
- 3
    
permalink: /soc/projects/2023/project290
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
        <br>
        "The proposed AI project aims to develop a face detection and recognition system for automated attendance tracking in classrooms or offices. The system will utilize computer vision and machine learning algorithms to identify and authenticate individuals based on their facial features.

The project will begin with the collection of a large dataset of facial images, which will be used to train a deep learning neural network. The neural network will be designed to detect faces in real-time, even under challenging lighting and environmental conditions.

Once a face is detected, the system will use the neural network to compare the facial features to those in the existing database. If a match is found, the system will mark the individual as present in the attendance system.

To ensure the accuracy of the system, the neural network will be fine-tuned using feedback from users and manual verification of attendance data. Additionally, the system will be designed with privacy and security in mind, utilizing encryption and secure protocols to protect the personal information of users.

The end result of the project will be a reliable, efficient, and user-friendly attendance tracking system that can save time and resources while improving accuracy and reliability. The system can be applied in a variety of settings, including schools, universities, and workplaces, and can be customized to meet specific needs and requirements.
<br>
https://github.com/ultralytics/yolov5"
</p>
Prerequisites:
N/A
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
      <td  >Week 1-2</td>
      <td>Orientation and literature review, Getting familiar with google collab and neural networks</td>
    </tr>
    <tr>
      <td>Week 3-4</td>
      <td>Getting familiar with Virtual environments and vscode, Training the models using robo flow</td>
    </tr>
    <tr>
      <td>Week 5-6</td>
      <td>Training the models using Simace Network, Deploying the model using flask web framework</td>
    </tr>
    <tr>
      <td>Week 7</td>
      <td>Test runs and adding more faces for detection.</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Continue implementation, while at the same time exploring Methods for ensembling the models</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
 