---
layout: project
title: Seasons of Code
project: Ray Tracing
topics:
    - App Development
    - Web Development
    - 
mentors:
    - Anand Bhaskar 
    
mentees:
- 4
    
permalink: /soc/projects/2023/project280
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
        "Path tracing is a type of ray tracing, which means we are going to shoot a ray into the world out of every pixel. For each individual ray, we are going to see what it hits and use that information to give a color to our pixel. Doing that for every pixel independently gives us our final image.
You will be required to first build a simple raytracing engine which will be able to:

Generate a PNG image of a raytraced sphere.
Apply anti-aliasing.
Accurately simulate different types of materials like metals and dielectrics.
Mimic a real life camera and its features.

I would be following these links:
https://blog.demofox.org/2020/05/25/casual-shadertoy-path-tracing-1-basic-camera-diffuse-emissive/
https://www.youtube.com/watch?v=Qz0KTGYJtUk&t=2s
https://itc.gymkhana.iitb.ac.in/wncc/soc/projects/2022/project269.html"
<br>
Prerequisites:<br>
No prerequisites as such. A lot of enthusiasm and curiosity.
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
      <td> Learn about how raytracing works and the functionalities you would be implementing.</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td> 3D vector class.</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>   Implementing stb_image for generating PNGs and a basic ray class.</td>
    </tr>
    <tr>
      <td>Week 4 </td>
      <td>  Implementing a simple camera class and obtaining a primitive image. </td>
    </tr>
    <tr>
      <td>Week 5 </td>
      <td> Sphere class and surface normals. </td>
    </tr>
    <tr>
      <td>Week 6-7 </td>
      <td>  Implement an interface for hittable objects and add support for multiple objects in a scene.</td>
    </tr>
    <tr>
      <td>Week 8</td>
      <td>  Antialiasing and materials and implement an advanced camera class. </td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
 