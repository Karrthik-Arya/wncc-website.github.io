---
layout: project
title: Seasons of Code
project: TRayCer
mentors:
    - Arnav Aditya Singh
    - Sankalan Baidya  
    
mentees:
- 6(freshies) + 4(sophies and above) 
    
permalink: /soc/projects/2023/project248
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
       "Implement a moderately useful ray tracing engine, learning the theory of ray tracing along the way. Implement model loading and model rendering for stunning visuals.<br>

Along the way learn critical software development skills, from design decisions to version control and collaboration. Gain important experience in working on a large self-made C++ project.<br>

Most importantly, an incredibly rewarding hands-on programming experience with concrete results.<br>

For a taste, see<br>
raytracing.github.io<br>
<a href="www.learnopengl.com"> learnopengl<a>


<br>
Prerequisites:<br>
Very comfortable with C++
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
      <td>Ray Tracing In A Weekend</td>     
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Ray Tracing, The Next Week</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Monte Carlo Ray Tracing</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Model Loading and Rendering</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Ray Marching</td>
    </tr>
    <tr>
      <td>Week 6-8</td>
      <td>OpenGL (if rest completed), buffer time, report writing</td>
    </tr>
    </tbody>
    </table>
</div>

</div>
{% endif %}
{% endfor %}
