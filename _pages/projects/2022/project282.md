---
layout: project
title: Seasons of Code
project: Physically Based Rendering
topics:
    - Game Development
mentors:
    - Ishan Chaudhari
    
mentees:
- 3
    
permalink: /soc/projects/2023/project282
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
 <p class="display3" style = "font-size:22px;" >
"A rendering project is a creative endeavor that involves the production of realistic, high-quality visual representations of 3D objects or environments using computer software.  We will create specialized software to create a digital model of the object or environment, which is then enhanced with lighting, textures, and other visual elements to produce a nearly photorealistic scene rendered in real time.
Starting of OpenGL and Simple Lighting Algorithms, we will build a 3D Renderer with Physically Based Rendering system as dive deep into the project. We might even end up adding some Physics and then Build Some Simple and Fun Interactive 3D Games to Showcase the Power of the Renderer and finally take a glimpse at Advanced APIs such as DirectX11 and Vulkan as a step towards industry standard Rendering techniques."

<br>
Prerequisites:
Desire to see the project to completion and be involved in implementing "Medium C++ and Object Oriented Programming Skills Required.
3D Modeling skills are Optional."

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
      <td> Setting Up Dev Environment and Learn Basics</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Rendering Meshes and Abstracting API into Classes</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Working with Shaders</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Implementing Materials and Texturing</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td> Making a Physically Based Shader and Optimizing It</td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Implementing Scene Rendering</td>
    </tr>
    <tr>
      <td>Week 7</td>
      <td>Adding Some Physics Components
</td>
    </tr>
    <tr>
      <td>Week 8</td>
      <td>Make a simple game with the Rendering
</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
 