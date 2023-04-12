---
layout: project
title: Seasons of Code
project: Image Colorization
topics:
    - Machine Learning
mentors:
    - Valay Bundele
    
mentees:
- 5-8
    
permalink: /soc/projects/2023/project301
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
     "Are you fascinated by the world of computer vision and its potential to transform the way we see the world? Do you want to work on cutting-edge technology that can automatically colorize grayscale images with stunning accuracy? If so, this project on implementing Pix2Pix GAN for image colorization is the perfect opportunity for you!

In this project, you will learn how to leverage the power of deep learning and generative adversarial networks (GANs) to produce high-quality, full-color images from grayscale inputs. You will gain hands-on experience with Pix2Pix, one of the most popular and effective GAN architectures for image-to-image translation, and explore the different ways in which it can be used to improve the visual quality and realism of your images.

By working on this project, you will not only learn about the fundamentals of GANs and image colorization but also get the chance to put your skills to the test by developing your own Pix2Pix GAN models. With the potential to revolutionize fields such as graphic design, photo editing, and more, the knowledge and experience gained from this project will be invaluable for your future career.

Don't miss out on this exciting opportunity to explore the limitless possibilities of Pix2Pix GAN and image colorization. 

Link to Pix2Pix GAN paper: https://arxiv.org/pdf/1611.07004.pdf"
<br>
PreReqs:
<br>
Mention your previous coding experience, ML/DL experience (if any) in the proposal.
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
      <td><strong>Week 1-2</strong></td>
      <td>Read about the basic ML techniques like linear/logistic regression and neural networks, learn python

</td>
    </tr>
    <tr>
      <td><strong>Week 3-4 </strong></td>
      <td>Learn about Convolutional Neural Networks(CNNs), various deep learning architectures and PyTorch/TensorFlow
</td>
    </tr>
    <tr>
      <td><strong>Week 5</strong></td>
      <td>Understand the working of GANs and the main paper</td>
    </tr>
    <tr>
      <td><strong>Week 6-7</strong></td>
      <td>Work on the implementation of the paper</td>
    </tr>
    <tr>
      <td><strong>Week 8</strong></td>
      <td> Project documentation + Buffer</td>
    </tr>
        </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
