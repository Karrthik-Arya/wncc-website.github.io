---
layout: project
title: Seasons of Code
project: Neural Quest
mentors:
    - Isha Arora
    - Karan Godara
    - Khushang Singhla   
    
mentees:
- 10 
    
permalink: /soc/projects/2023/project250
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
<div>
    <p class="display3 project-desc" style = "font-size:22px;" >
        Want to start doing cool ML/ Image processing stuff but don't know how? This project is your gateway to delve into the amazing world of image machine learning and explore domains like NLP,  adversial attacks alongside developing a strong foundation in image processing. <br> 
This project would not only introduce to the concepts of image/Natural language processing but would also give you enough exposure to implement the theories and make your own models that are working in the real world.<br>
After this project you would be well equipped with the knowledge of deploying your own CNN models from scratch to any real-life application that you might wanna tackle.<br>

Some resources that we will follow are:<br>
1.https://youtube.com/playlist?list=PLkt2uSq6rBVctENoVBg1TpCC7OQi31AlC<br>
2. https://www.youtube.com/watch?v=PVShkZgXznc
        </p>
        <p class="display3" style = "font-size:22px;" >
      
<br>
Prerequisites:<br>
Python and Numpy are a plus but no hard pre-reqs, can learn them on the go
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
      <td>Week 0</td>
      <td> Go through the initial videos of CS231n-Stanford, a course on Image Processing and write a brief report on the concepts learned</td>     
    </tr>
    <tr>
      <td>Week 1</td>
      <td>Focus on getting the concepts clear of Python and NumPY</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Getting introduced to data science library PyTorch and/or TensorFlow</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td> Having covered more concepts from the CS231n playlist especially Convolution, this week would comprise of implementing Deep-CNN model from scratch on MNIST dataset without using any data-science libraries </td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Make CNN models, to classify CIFAR and CARVANA data-set. Focus on accuracy and getting hands dirty by working with image processing libraries </td>
    </tr>
    <tr>
      <td>Week 5-8</td>
      <td> U-Net Segmentation paper implementation and introduction to YOLO. Major Focus would go on working on projects which would/may involve adversial attacks, dependency parsing (NLP).</td>
    </tr>
    </tbody>
    </table>
</div>

</div>
{% endif %}
{% endfor %}
