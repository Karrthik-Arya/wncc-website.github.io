---
layout: project
title: Seasons of Code
project: App for Credit rating of Retailers in Clothing Industry  
topics:
    - App Development
mentors:
    - Onkar Borade   
mentees:
- 10-12
    
permalink: /soc/projects/2023/project279
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
<div class = "project-desc">
    <p class="display3" style = "font-size:22px;" >
        <br>
        2 type of users: Retailers and Manufacturers. Develop a different ui for both of them. For manufacturer side he should see retailers info most importantly their credit history. Retailers should see the manufacturers data.
<br>
Prerequisites:<br>
"High Enthu!
[Having done atleast 1 coding language till now is a soft prerequisite.]"
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
      <td>Learn basics of Github and a programming language if not done at all.</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td> Follow and learn basics of App-dev.</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Build a basic application. For eg.- A weather app</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Finalize UI and layout design </td>
    </tr>
    <tr>
      <td>Week 4-7</td>
      <td> Code and Deploy it fully.</td>
    </tr>
    <tr>
      <td>Week 8</td>
      <td>Report making + Final bug resolving</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
 