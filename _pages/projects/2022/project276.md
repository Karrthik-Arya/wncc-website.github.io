---
layout: project
title: Seasons of Code
project: E-Commerce Website for VibSpecLab, IIT Bombay
topics:
    - App Development, Web Development, Game Development
mentors:
    - Ojas Jain     
    
mentees:
- 4-6   
    
permalink: /soc/projects/2023/project276
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
        The project requires us to build an e-commerce website listing for various scientific instrumentation being built inside the vibrational spectroscopy lab at IIT Bombay. The website will have the options to place orders for the products, videos to set them up and interface to use them by deployment of software packages dependent upon the type of product. It is like buying a printer from the HP website, you order the device and then download the appropriate drivers and software to use it.
        <br>
Prerequisites:
HTML, CSS, JS, Angular (Not very important)
<br>
Data Analysis of consumer influx, automated analysis of customer preferences and impact of design (Not very important)
<br>
Python/ MATLAB/ C++ (Not very important)
<br>
Github (Not very important)
<br>
Docker (Not very important)
<br>
Enthusiasm
<br>
Should follow deadlines and respect time commitment
<br>
Basic design skills (Canva/ Photoshop)
<br>
Eagerness to learn
<br>
No technical skills are required but they would be preferred.
<br>
Selected mentees will be creating a Github Pages personal website for their own resume as an incentive!
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
      <td  >Week 1</td>
      <td> Understanding Github, work distribution, constant meetings, bonding time  </td>
    </tr>
    <tr>
      <td>Week 2-3</td>
      <td>Basics of Website Deployment - introduction to HTML, CSS, JS. Will introduce the mentee to how e commerce websites are built, integration of payment and download interfaces</td>
    </tr>
    <tr>
      <td>Week 4-5</td>
      <td>Basics of Python and Software Package Deployment. Will introduce the mentee to deployment of drivers and software interfaces accompanying the listed products on the website</td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Basics of Industrial Deployment using Docker. Will introduce the mentee to the current industry standard of building, testing and deploying applications - Docker.</td>
    </tr>
    <tr>
    <td>Week 7-8</td>
    <td>Design aspects. This is the more relaxing bit, the website will be given facelifts and then be prepared for actual deployment on the web with a robust backend interface,  Final deployment and a treat from the mentor upon successful completion</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
