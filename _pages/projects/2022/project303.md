---
layout: project
title: Seasons of Code
project: JobFinderX
topics:
    - Development
mentors:
    - Baggam Rakshan Tej (210070019)
    - Pamba Ravindra Mohith (210050112)
    
mentees:
- 5-6
    
permalink: /soc/projects/2023/project303
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
        <br>
      "The intention of the Jobbie project is to provide a comprehensive job portal for job seekers and employers. It allows users to search for jobs based on various parameters such as salary, domain, type of job, and qualifications. Users can also upload their resumes to apply for jobs and update them over time.

Employers can create job listings that can be viewed by all users. They can also view the number of candidates who have applied for the job and their details, and update or delete the job as necessary. The employer is referred to as the admin of the particular job.

The back-end of the project is built using Node.js and Express, with MongoDB as the database. Two applications are created, one for managing jobs and another for managing users. The project includes models such as Job, Application, and User to store and manage data. Function-based views with permissions for specific routes and FilterSet for filtering are used. JWT is used for authentication and AWS S3 bucket is integrated for storing resume pdf files.

The front-end of the project is built using React.js, with React router dom for switching between pages and ContextAPI for connecting with the back-end and global state management of jobs and user authentication. The project includes pagination for viewing all jobs in a systematic manner, filters on the sidebar for filtering according to user preferences, and Leaflet for viewing all maps. The project aims to provide a user-friendly and efficient platform for job seekers and employers to connect and fulfill their respective needs."
<br>
PreReqs:
<br>
Come with lots of Enthusiasm. No pre requisites as such. 
</div>
<div class ="d-flex">
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class = "table table-striped">
  <thead>
    <tr>
      <th>Week Number</th>
      <th>Tasks to be Completed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Week 1</strong></td>
      <td>HTML, CSS</td>
    </tr>
    <tr>
      <td><strong>Week 2</strong></td>
      <td> CSS, Bootstrap</td>
    </tr>
    <tr>
      <td><strong>Week 3  </strong></td>
      <td>JavaScript </td>
    </tr>
    <tr>
      <td><strong>Week 4  </strong></td>
      <td>NodeJS and ExpressJS</td>
    </tr>
    <tr>
      <td><strong>Week 5  </strong></td>
      <td>Basics of ReactJS </td>
    </tr>
    <tr>
      <td><strong>Week 6  </strong></td>
      <td>React authentication using API and integration with backend</td>
    </tr>
    <tr>
      <td><strong>Week 7-8</strong></td>
      <td>Project Completion </td>
    </tr>
        </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
