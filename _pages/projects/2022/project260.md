---
layout: project
title: Seasons of Code
project: Cricbuzz
topics:
    - Web Development
mentors:
    - Jaswanth Naidu
    - Kajal(200050056)
    
mentees:
- 6
    
permalink: /soc/projects/2023/project260
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
<div class = "project-desc" style = "margin-bottom: 140px">
    <p class="display3" style = "font-size:22px;" >
        <br>
        Through this project, you will learn about Full Stack Web Development, right from the basics (HTML, CSS, Bootstrap, JavaScript) to the PERN stack (PostgreSQL, ExpressJS, ReactJS, NodeJS and React ChartJS frameworks). Initially you will be working on some mini projects and then start our major project. In our project we will create a website for cricket, where we can see all the information about the cricket matches, match summary, player information statistics, venue statistics etc. If time permits you can add features such as adding new venues, start a  new match, add score ball by ball etc.Mentees can attempt hosting the final app (possibly via Heroku) depending on their progress and interest.
<br>
Resources:-
<br>
NodeJS  :-
https://www.tutorialspoint.com/nodejs/nodejs_introduction.htm
https://youtube.com/playlist?list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY 
<br>
Express Framework  :-
https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm
<br>
PostgreSQL  :- 
https://youtube.com/playlist?list=PLk1kxccoEnNEtwGZW-3KAcAlhI_Guwh8x
https://node-postgres.com/
<br>
ReactJS :-
https://reactjs.org/
https://youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3
<br>
React ChartJS  :-
https://coreui.io/react/docs/components/chart/"		
        <br>
Prerequisite:
Basic programming techniques (CS101 will be sufficient) Experience in JavaScript or in general Web Development would be an advantage(Soft Prerequisite). 
    </p>
</div>
<div class = "d-flex flex-wrap">
<div>
    <h4 class="display3" style="margin:110px 0px 40px 0px;">Tentative Timeline :</h4>
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
      <td> Learn HTML, CSS, Bootstrap, Javascript
  </td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Working on Mini Projects like To-Do list</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Start learning NodeJS, ExpressJS, ReactJS, Redux</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Starting our major project Cricbuzz app and connecting it to the PostgreSQL database</td>
    </tr>
    <tr>
      <td>Week 5-6</td>
      <td>Adding features like Match info, score comparisions, Match Summary, Player info statictics etc, Implement react and redux in the frontend and design all the pages interactively using react-bootstrap and chartjs</td>
    </tr>
    <tr>
    <td>Week 7-8</td>
    <td>Adding additional features and Debugging</td>
    </tr>
    </tbody>
    </table>
</div>

</div>
{% endif %}
{% endfor %}
