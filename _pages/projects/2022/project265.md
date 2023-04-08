---
layout: project
title: Seasons of Code
project: AudioHive A Social Audio App
topics:
    - Web Development
mentors:
    - Abhijit Amrendra Kumar
    - Atishay Jain, Harshit Morj
    
mentees:
- 10-12
    
permalink: /soc/projects/2023/project265
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
        "The project is to create a social networking app similar to Clubhouse, named AudioHive. The app will allow users to participate in live audio conversations with other users on various topics. The app will have a user-friendly interface with features such as user profiles, chat rooms, and the ability to create/join rooms based on various topics of interest, and listen to or participate in conversations in real-time.  
<br>
Throughout this program, you will learn and continuosly apply basics concepts of HTML, CSS, Javascript. Next, you will learn and use the beginner-friendly ReactJS framework to structure the frontend of your app into components and get used to this coding paradigm. Next up, we will introduce you to the brains, i.e. the backend. You will learn how to create APIs to supply data from a database like MongoDB to your frontend using the backend, and learn to ideate models to structure your data. Then, we will dive into the popular frontend framework Flutter, which will help you to create apps for any screen using a single codebase with ease. We will cover popular flutter packages like Provider to systematically access data from our backend. 
<br>
On a weekly basis, the mentees will be given coding challenges for each topic to apply their learnings till Week 7. Starting from Week 8, the mentees will be required to group into pairs and research on required libraries/frameworks to create a web app in react, a mobile app in flutter, with backend in NodeJS for AudioHive."
<br>
Prerequisites:
It is open to all individuals who have a keen interest in web and app development. Basic skills like HTML and CSS are preferred but are not hard pre-requisites. Other than that, enthusiasm and a willingness to learn and participate is much appreciated.
        <br>
    </p>
</div>
<div class = "d-flex flex-wrap">
<div>
    <h4 class="display3" style="margin:80px 0px 40px 0px;">Tentative Timeline :</h4>
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
      <td>Basic HTML, CSS and Git/GitHub essentials</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Learn Javascript</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td> Learn ReactJS framework</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Practice ReactJS + understanding backend fundamentals </td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Learning NodeJS and ExpressJS frameworks, and using them with the Mongoose library for MongoDB</td>
    </tr>
    <tr>
    <td>Week - 6</td>
    <td> Learn Flutter Basics </td>
    </tr>
    <tr>
    <td> Week 7-10</td>
    <td>Learning to use standard flutter packages for correct coding practices, Apply all concepts and research on required libraries/frameworks to create AudioHive </td>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
 