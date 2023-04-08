---
layout: project
title: Seasons of Code
project: Enhance Low Resolution Image using GANs
mentors:
    - Hitaansh Shah
    - Vidit Khazanchi   
    
mentees:
- 7-8   
    
permalink: /soc/projects/2023/project243
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
        <br>
        The project involves implementation of ESRGAN using PyTorch to enhance low resolution images having a lot of loss in details to images having great spatial resolution. If time permits , we shall build a basic web app to deploy the project . It will be extremely fun to learn about GANs and you shall gain a lot of insight on deep learning in general. One can check out https://youtu.be/WCAF3PNEc_c  . Our project shall be on the same lines. You may also go through the Andrew NG course on CNN https://youtube.com/playlist?list=PLkDaE6sCZn6Gl29AoE31iwdVwSG-KnDzF.  The research paper that we will largely be following https://arxiv.org/abs/1809.00219 . 
        <br>
        </p>
        <p class="display3" style = "font-size:22px;" >
        
<br>
Prerequisites:
Intermediate Python Skills and a lot of Enthusiasm to learn about Deep Learning and Neural Networks.
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
      <td>Week 1</td>
      <td>Brush up Python Programming and OOPs (Will be useful while building models)</td>     
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Learn about Neural Networks and a bit of CNNs as well.</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>More CNN and learning PyTorch.</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Implementing Neural Networks using Pytorch and learning about GANs.
</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Reading the paper on ESRGAN.</td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Start Implementing the model on the lines of the architecture as mentioned in the paper.</td>
    </tr>
    <tr>
      <td>Week 7</td>
      <td>Finish Coding the same and debugging.</td>
    </tr>
    <tr>
      <td>Week 8</td>
      <td>Build a Basic Website to deploy the project .</td>
    </tr>
    </tbody>
    </table>
</div>

</div>
{% endif %}
{% endfor %}
