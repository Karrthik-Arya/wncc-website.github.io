---
layout: project
title: Seasons of Code
project: Image Captioning
topics:
    - Web Development
mentors:
    - Sabyasachi Samantaray
    - Nikhil Biradar
    
mentees:
- 7-9
    
permalink: /soc/projects/2023/project259
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
        "Want to immerse yourself in the exciting world of comprehensive ML, Image Processing and NLP? Join us for an unforgettable summer, where we will explore the fascinating topic of image captioning!
<br>
Starting from the basics of regression and classification algorithms, and progress to neural networks. Discover the powerful capabilities of CNN's and RNN's, and apply this knowledge to build and train your own models for the final project of Image Captioning. We will start with a simple architecture, and gradually improve upon it using cutting-edge techniques.
<br>
So, are you ready to take your skills to the next level and join us for an unforgettable summer? Let's embark on this exciting journey together!"		
        <br>
Prerequisite:
"Basic knowledge of python and libraries
<br>
Lots of enthusiasm
<br>
Basic ML knowledge would be helpful"
<br>
    </p>
</div>
<div class = "d-flex flex-wrap">
<div>
    <h4 class="display3" style="margin:110px 0px 40px 0px;">Tentative Timeline :</h4>
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
      <td> Anaconda installation, setting up Jupyter Notebook and supporting dependencies
  </td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Basics of ML, regression and classification algorithms using sklearn</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>CNN Image Classification using Pytorch/Keras</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>RNN and basics of NLP using Keras and Scapy</td>
    </tr>
    <tr>
      <td>Week 5-6</td>
      <td>Using all that learnt so far to implement primitive architecture of Image Captioning</td>
    </tr>
    <tr>
    <td>Week 7-8</td>
    <td>Improving the model, Paper implementation depending on progress</td>
    </tr>
    </tbody>
    </table>
</div>

</div>
{% endif %}
{% endfor %}
