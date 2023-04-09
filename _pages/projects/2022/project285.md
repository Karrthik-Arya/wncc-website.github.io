---
layout: project
title: Seasons of Code
project: “The Watchdogs” - Solving a murder mystery using Computer Vision and Data Science
topics:
    - Computer Vision
mentors:
    - Agamjot Singh
    - Aastha Sancheti
    
mentees:
- 6-10
    
permalink: /soc/projects/2023/project285
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
        <br>
     The scientific world is in shock after the murder of a famous scientist in the streets of Mumbai. Detective Jane has been called to investigate this high profile murder case. Looking at the tampered evidence and remnants of recordings, detective Jane thinks only the students of IIT Bombay can solve this mystery using computer vision techniques. Jane and her team are working hard on collecting evidence which the plan to release every week by collecting surveillance videos or other sources of videos, investigating hotels and nearby shops etc. We, the mentors of the project have been assigned the task to build a team which we’ve decided to call, “The Watchdogs”. We need very enthusiastic and passionate mentees to bring the scientific world to justice.
<br>
Prerequisites:
Python, maybe some prev computer vision knowledge and a lot of enthusiasm 💪
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
      <td  >Week 0</td>
      <td> Appointing Mentees, welcoming the team, bringing everyone to the same page by briefing everyone about the high stakes in place and the need of their dedication. + Team bonding</td>
    </tr>
    <tr>
      <td>Week 1-8</td>
      <td> Detective Jane will release new clues and evidences every week and the mentees will be trained for the the first few days of the week about how to analyse the clue and then will have to implement the cv / ds techniques on their own.</td>
    </tr>
    <tr>
      <td>Week 8</td>
      <td>Finally: Executing the criminal + team treat(maybe)</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
 