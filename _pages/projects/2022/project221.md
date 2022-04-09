---
layout: project
title: Seasons of Code
project: BuzzWord
topics:
    - Web Development
mentors:
    - Prajwal Kamble     
    
mentees:
- 4-5   
    
permalink: /soc/projects/2022/project221
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
        Buzzword is an app to learn new words. These words can be either for your GRE/Toefl preparation, technical jargon that one might to learn etc. Structure of the app would be tinder like where you 
1) swipe right to the new word that learned
2) swipe left to the word you already knew
3) save the word you want to refer later

We would use Flutter for frontend, Django or NodeJS for backend (a/c to preference of mentees).
We would need 2 mentees working on Flutter and 2 mentees working on backend. 
<br>
Prerequisites:
1) Familiarity of some programming language and OOPs concepts
2) Enthusiasm and eagerness to explore

Note for Mentees
1) Mention whether you want to work on frontend or backend. If you are not clear or want to work on both, mention that.
2) If you are good at UI design, write it in proposal
        <br>
    </p>
</div>
<div class = "d-flex flex-wrap">
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class="table table-striped">
    <thead>
        <tr>
        <th>Week</th>
        <th>Work</th>
        </tr>
    </thead>
    <tbody>
    <tr>
      <td  >Week 1-2</td>
      <td>Learning simple concepts of HTML & CSS</td>
    </tr>
    <tr>
      <td>Week 2-3</td>
      <td>Learning how to use JavaScript & jQuery</td>
    </tr>
    <tr>
      <td>Week 3-4</td>
      <td>Intro to php</td>
    </tr>
    <tr>
      <td>Week 4-5</td>
      <td>Learning Angular and use it design webpages</td>
    </tr>
    <tr>
      <td>Final Week</td>
      <td>Developing a final website with all the concepts learned</td>
    </tr>
    </tbody>
    </table>
</div>
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Checkpoints :</h4>
    <table class="table table-striped">
    <thead>
        <tr>
        <th>Checkpoint Number</th>
        <th>Progress</th>
        </tr>
    </thead>
    <tbody>
    <tr>
      <td>1</td>
      <td>Learning simple concepts of HTML & CSS</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Learning how to use JavaScript & jQuery</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Intro to php</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Learning Angular and use it design webpages</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Developing a final website with all the concepts learned</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
