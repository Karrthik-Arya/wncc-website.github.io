---
layout: project
title: Seasons of Code
project: Intro Full stack web development:Restaurant website 
topics:
    - Web Development
mentors:
    - Durgesh Sahane 
    - Aryan Adinath Popalghat
    
mentees:
- 5-8 
    
permalink: /soc/projects/2023/project278
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
        The final aim of the project involves a the development of a deployable Restaurant website. In this project mentees will learn HTML,CSS, Javascript and Git from scratch and further they will get familiarized to the frontend (either Angular or React) and backend (either Django or Nodejs) frameworks. This project aims to cover the web development fundamentals as well as some advanced concepts like payment option, elastic search, etc.
<br>
Prerequisites:<br>
N/A

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
      <td>Getting familiarized to HTML, CSS and Github </td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Learning Javascript and intro to Bootstrap/Tailwind CSS and jquery</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Introduction to Reactjs/Angular (based on what mentees want to learn/use) </td>
    </tr>
    <tr>
      <td>Week 4-5</td>
      <td>Working on frontend of the website</td>
    </tr>
    <tr>
      <td>Week 5-6</td>
      <td>Introduction to backend framework(preferably Django) and learning Python for the same</td>
    </tr>
     <tr>
      <td>Week 7-8</td>
      <td> Working on Backend of the website, implementing extra features, Debugging and finally deploying the website(if possible)</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
