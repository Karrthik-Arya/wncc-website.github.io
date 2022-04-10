---
layout: project
title: Seasons of Code
project: fetchSpace
topics:
    - App Development
mentors:
    - Karrthik Arya
    - Laxman Desai
    
mentees:
- 5-6
    
permalink: /soc/projects/2022/project263
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
<div>
    <br>
    <ul>
        {% for topic in page.topics %}
        <li style = "display: inline"><h4 class="text-primary text-center">{{topic}}</h4></li>
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
        How many times have you got delayed for events, unable to find a decent parking space? How many time have you returned frustrated after a fun travel owing to parking ptoblems? Do you know  a recent global study of parking in major cities across the world suggests that an average city driver spends  about 18 to 20 minutes searching for a parking space, resulting in stress, wastage of fuel, increased emissions, congestion on streets, and decrease in productivity.
<br>
</p>
<p class="display3" style = "font-size:22px;" >
This project aims to solve these issues. We aim to develop an app to help locate free parking spaces near you. Let's say a user was using a particular parking place and is now leaving he can upload an image of the space on the app. This space would stay up on the app for certain time ( 4-5 mins). During this duration if someone nearby's looking for a parking space Voila! He's got one.This is the basic premise of the project.
<br>
Overall this can be a great way for people to dive in the world of app development. We would be covering basics that would help you out in both web and app development. Though the main focus would be on react-native which is what we would be using for developing our application.
<br>
The only prereq is the enthusiasm towards the project. Though do mention your motivation for working on this project along with your past experience in development or even coding in general. Also, suggestting some new and creative features that can be added in the app could earn you some brownie points.

</p>
</div>
<div class ="d-flex">
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class = "table table-striped w-100">
  <thead>
    <tr>
      <th>Week Number</th>
      <th>Tasks to be Completed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Week 1</strong></td>
      <td>Learn basic HTML, CSS and JS </td>
    </tr>
    <tr>
      <td><strong>Week 2 </strong></td>
      <td>Move on to basics of front end development with major focus on react-native</td>
    </tr>
    <tr>
      <td><strong>Week 3  </strong></td>
      <td>Learn basics of backend development using expresssJS and MongoDB </td>
    </tr>
    <tr>
      <td><strong>Week 4-5 </strong></td>
      <td> Start working on the Login Page along with the basic structure for the server </td>
    </tr>
    <tr>
      <td><strong>Week 6-7 </strong></td>
      <td> Develop the section for uploading spaces on the app along with integration of the app with Maps </td>
    </tr>
    <tr>
      <td><strong>Week 8-9  </strong></td>
      <td> Develop the section for finding parking space, finish off the app and deploy </td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
