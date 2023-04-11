---
layout: project
title: Seasons of Code
project: Image Caption Generator
topics:
    - Web Development
mentors:
    - Satwik Murarka     
    
mentees:
- 4  
    
permalink: /soc/projects/2023/project277
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
<div class = "project-desc" style = "margin-bottom: 100px">
    <p class="display3" style = "font-size:22px;" >
        <br>
        Image caption generator combines both computer vision and natural language processing (NLP) techniques to automatically generate a textual description of an image, making it useful for tasks such as image indexing, retrieval, and accessibility for visually impaired individuals. The task of generating accurate and descriptive captions requires an understanding of both the visual content of the image and the language used to describe it. This typically involves building a convolutional neural network (CNN) for image feature extraction and a recurrent neural network (RNN) for language generation.The aim of the project is to introduce the mentees with deep learning and subsequently build upon the knowledge to build the caption generator.
<br>
Prerequisites:Basic proficiency in Python
Basics of ML<br>
        <br>
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
      <td  >Week 1</td>
      <td>Study about Deep Neural Networks and learn PyTorch</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Understand and implement CNNs for a classification task</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Study various sequence models like RNNs</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Buffer week</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Learn about NLP fundamentals and Word Embeddings</td>
    </tr>
     <tr>
      <td>Week 6-9</td>
      <td>Study different Image Captioning architectures, Implement the Image Captioning Model</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
