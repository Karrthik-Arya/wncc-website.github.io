---
layout: project
title: Seasons of Code
project: EdConnect
topics:
    - Web Development
mentors:
    - Gyana Prakash Beria
    - Shlok Nemani (19D070054), Hiren Bavaskar (190050049)
    
mentees:
- 4
    
permalink: /soc/projects/2023/project267
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
"Work:- Creation of a web portal for TAs and students. The TAs will be able to take attendance of students, create quizzes, grade and analyse marks. The students will be able to provide attendance, take quizzes, and view their performance.
<br>
Learning:- Full Stack development. Gain knowledge of creating beautiful interfaces and how the connection between frontend and backend works with secure authentication protocols.
Skills after learning the project: Django, ReactJS, Database Management "<br>
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
      <td>Learning HTML5, CSS3, JS fundamentals</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Learning the JS front-end Library React JS</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Learning Python + Django fundamentals (will be provided with
to-the-point resources)</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Understanding Frontend + Backend integration and implementation with
database (PostgreSQL db will be hosted)</td>
    </tr>
    <tr>
      <td>Week 5,6</td>
      <td>Front-end guys work on the client side (UI design, client interactions [H5,
C3, React]) In parallel, the backend peeps will be handling the database, user
authentication, and basic dashboard functionality [Django+Postgre]. We expect it to be
just functional.</td>
    </tr>
    <tr>
      <td>Week 7-8</td>
      <td>Completing the Web app by adding all the specifications as required.
Expecting fully functional along the lines of specifications.</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
