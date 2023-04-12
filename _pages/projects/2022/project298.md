---
layout: project
title: Seasons of Code
project: Stable Diffusion
topics:
    - Machine Learning
mentors:
    - Shubham Hazra
    - Om Godage (21d100006)
    - Kartik Gokhale (200100083)
    
mentees:
- 5-6
    
permalink: /soc/projects/2023/project298
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
        Elaborate upon the work and learning involved in the project. Suggest some reading material and resources for mentees to gain context and spark their interest. You may also link GitHub repos/Demonstrations, if the project is an already existing one.
Stable Diffusion is a powerful text-to-image AI system, can create photos in the style of cartoonists, 19th century daguerreotypists, stop-motion animators and more. Text to image diffusion models are an exciting area of research in machine learning that aims to generate high-quality images from textual descriptions. This technology has a wide range of applications, such as generating images for artistic or commercial purposes, enhancing accessibility for visually impaired individuals, and aiding in virtual reality and game development.

They use a generative approach that involves learning the statistical relationships between text descriptions and corresponding images. This involves training a machine learning model on a large dataset of paired text and image data, which it uses to generate new images based on textual descriptions that it has not seen before.

Students can checkout DALL.E-2 by openAI: https://openai.com/product/dall-e-2
<br>
https://www.unrealengine.com/en-US/unreal-engine-5
https://docs.unrealengine.com/5.0/en-US/
<br>
It's not that hard!! This guy made an open world game in 24 hours.
https://www.youtube.com/watch?v=3DjY1T42b_M
<br>
PreReqs:
<br>
Basic Python and willingness to learn
</p>
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
      <td><strong>Week 1</strong></td>
      <td>Basics of Regression & Classical ML
</td>
    </tr>
    <tr>
      <td><strong>Week 2 </strong></td>
      <td>Intro to Deep learning & frameworks (Tensorflow, PyTorch)
</td>
    </tr>
    <tr>
      <td><strong>Week 3 </strong></td>
      <td>Image Processing using OpenCV & classical methods </td>
    </tr>
    <tr>
      <td><strong>Week 4 </strong></td>
      <td>Dive into CNNs & transfer learning </td>
    </tr>
    <tr>
      <td><strong>Week 5</strong></td>
      <td>Intro to NLP , text encoders and decoders </td>
    </tr>
    <tr>
      <td><strong>Week 6</strong></td>
      <td>Learning about GANs, Autoencoders and Attention models</td>
    </tr>
    <tr>
      <td><strong>Week 7</strong></td>
      <td>Starting with Stable Diffusion </td>
    </tr>
    <tr>
      <td><strong>Week 8</strong></td>
      <td>Finishing up with the training and implementing the pipeline </td>
    </tr>
    <tr>
      <td><strong>Week 9 </strong></td>
      <td>Finishing up with documentation and submission</td>
    </tr>

        </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
