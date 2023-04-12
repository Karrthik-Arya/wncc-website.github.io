---
layout: project
title: Seasons of Code
project: Light field imaging and Dual Attention Networks
topics:
    - Machine Learning
mentors:
    - Abeer Mishra
    - Shreyas Patil (200260052)
    
mentees:
- 5 
    
permalink: /soc/projects/2023/project297
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
        "Elaborate upon the work and learning involved in the project. Suggest some reading material and resources for mentees to gain context and spark their interest. You may also link GitHub repos/Demonstrations, if the project is an already existing one.
Light field technology, also called integral imaging, is an emerging concept in the field of imaging technologies. In this, we use multiple cameras through a camera array, in order to construct an image with both angular and spatial information of the light rays to form the image. Light field (LF) images can be used to interactively refocuss images and increase resolution.

Image super-resolution is one of the most extensively researched problems in the field of image processing and deep learning. Various classical image processing techniques have been developed to denoise and increase image resolution. Further after the publication of the SRCNN paper by Dong et al (https://arxiv.org/pdf/1501.00092.pdf), there has been alot of research focussed on developing deep learning based methods for image super-resolution with each method outperforming the previouos one.
  
In this project, we'll aim to make an implementation of a Dual attention network for super-resolution of light field images inspired from a paper by researchers at NUDT (National University of Defence Technologies), China .

Check it  out on https://arxiv.org/pdf/2110.12114.pdf
<p class="display3" style = "font-size:22px;" >
Prerequisites : Basic level coding in python is an essential pre-requisite. Can be relaxed in case mentee demonstrates eagerness to learn Python from scratch. Prior experience using image processing libraries like PIL and OpenCV or Python ML frameworks like TensorFlow, PyTorch, Keras or Sklearn is aencouraged but not required.  
<br>
<br>
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
      <td >Week 1-2</td>
      <td> Basics of Machine learning </td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Study convolutional neural networks and basics of image processing </td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>First checkpoint: simple machine learning task based on convolution neural networks</td>
    </tr>
    <tr>
      <td>Week 5-6</td>
      <td>First major checkpoint task begins - implement the SRCNN network, towards the end of week 6</td>
    </tr>
    <tr>
      <td>Week 7</td>
      <td>Study Dual Attention Networks. Begin implementation of the paper: https://arxiv.org/pdf/2110.12114.pdf</td>
    </tr>
    <tr>
      <td>Week 8+</td>
      <td>Work on the implementation of the paper. It is likely that the full implementation wouldn't be done by the time the project is finished, in that case we'll call off the project possibly in it's training stages itself rather than waiting for full optimization of the model.</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
