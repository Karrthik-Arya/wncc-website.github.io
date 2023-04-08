---
layout: project
title: Seasons of Code
project: Find me out
topics:
    - Machine Learning
    - Image Processing
mentors:
    - Omkar Nitsure
    - Dhruvi Ganatra
    
mentees:
- 10
    
permalink: /soc/projects/2023/project274
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
        Have you ever wondered how Snapchat and Facebook enhances the beauty of your pictures amazingly well? How do humanoids identify people and behave with the world as humans? How do security systems identify the thief from a crowd so as to prevent thefts? Well, one of the most important tools to your rescue is face recognition. Identifying facial features has got widely varying applications in many autonomous systems in use today. In this project, we aim to give you a glimpse of implementation of the algorithms used for face recognition. We intend to cover the basics of machine learning and give you a flavour of the highly intriguing and exciting mathematics involved behind these algorithms. We then dive into the world of deep learning and CNNs, which have become the buzz of the world today. After having the grasp over the working of the algorithms,  you wouldn’t want to wait any longer to see yourself implementing them on your own, would you? In the later weeks, this is what we have in store. We shall take a sneak peek into the various libraries which could be used to implement face recognition algorithms using standard datasets and introduce you to Tensorflow. We shall conclude the project by completing the final implementation and leave a lot of points for the mentees to explore and come up with any new ideas of their own.
</p>
</div>
<div class ="d-flex">
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class = "table table-striped w-100">
  <thead>
    <tr>
      <th>Week Number</th>
      <th>Tasks to be Completed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Week 1-2</strong></td>
      <td>Introduction to the course and mathematics for ML, Introduction to python for ML </td>
    </tr>
    <tr>
      <td><strong>Week 3-4 </strong></td>
      <td>Supervised Machine Learning, Unsupervised Machine Learning

 </td>
    </tr>
    <tr>
      <td><strong>Week 5-6  </strong></td>
      <td>Deep Learning and Convolutional Neural Networks, Using CNNs for Face recognition</td>
    </tr>
    <tr>
      <td><strong>Week 7-8  </strong></td>
      <td>Introduction to TensorFlow, Implementing the model and final Remarks</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
