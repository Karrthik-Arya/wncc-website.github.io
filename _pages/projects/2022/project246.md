---
layout: project
title: Seasons of Code
project: InstiExchange - A web marketplace for IITB
topic:
    - Web Development
mentors:
    - Tanmay Hiremath
    - Adit Akarsh   
    
mentees:
- 5 
    
permalink: /soc/projects/2023/project246
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
        Description: We will be creating a website that allows students to buy and sell second-hand items like bicycles, electronics, mattresses etc. at IITB. The users will be able to message each other and discuss the details. There will be various categories of items and people will be able to search for items. If time permits, we can implement some more advanced features such as recommendations, payment options.<br>
        </p>
        <p class="display3" style = "font-size:22px;" >
        
Work: Building the web app involves front-end development, back-end development, and database management. For front-end development, mentees will be learning HTML, CSS, and JavaScript and finally a library based on JavaScript, React.
For back-end development, they will learn the Python-based web framework Django along with MySQL database. 
<br>
Prerequisites:<br>
N/A. Good-to-have skills are HTML, CSS & Enthusiasm 
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
      <td>Basics of HTML, CSS & Javascript</td>     
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Basics of React</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Basics of Django</td>
    </tr>
    <tr>
      <td>Week 4-5</td>
      <td>Building backend APIs in Django with database schema design along with User account & login management</td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Website design(basic) and react implementation for the same</td>
    </tr>
    <tr>
      <td>Week 7</td>
      <td>API integration between react & django</td>
    </tr>
    <tr>
      <td>Week 8</td>
      <td>Buffer for finishing touches and advanced features</td>
    </tr>
    </tbody>
    </table>
</div>

</div>
{% endif %}
{% endfor %}
