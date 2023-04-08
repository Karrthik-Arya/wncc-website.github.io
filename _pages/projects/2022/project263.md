---
layout: project
title: Seasons of Code
project: SynerG Lab, CSE Department - Webpage
topics:
    - App Development
mentors:
    - Debojeet Das
    
mentees:
- 5
    
permalink: /soc/projects/2023/project263
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
<p class="display3" style = "font-size:22px;" >
"The Systems and Networks Research Group (SynerG) Lab, CSE at IIT Bombay, is embarking on a project to develop its lab website. The project aims to create a user-friendly and visually appealing website that showcases the lab's research areas, ongoing projects, publications, and team members. The website will serve as an online platform for the lab's community, including researchers, students, and collaborators, to access information and resources related to the lab's work. Additionally, the website will feature a news and events section to keep visitors updated on the latest developments in the lab. 
<br>
Overall, the project aims to create a professional and informative website that reflects the SynerG Lab's values and contributions to the research community.
<br>
The MEAN stack will be used to develop the SynerG Lab website, consisting of MongoDB, Express.js, Angular, and Node.js. Here is a breakdown of the work and learning involved in each component of the stack:
1. MongoDB: This NoSQL database stores data in JSON-like documents. The team will need to learn how to create and manage databases, collections, and documents and perform CRUD (Create, Read, Update, Delete) operations using the MongoDB driver or Mongoose library.
2. Express.js: This web application framework for Node.js helps build web applications and APIs. The team will need to learn how to create routes, middleware, and controllers and handle requests and responses using Express.js.
3. Angular: This is a front-end framework for building single-page applications (SPAs). The team will need to learn how to create components, services, and modules and how to use Angular CLI to generate code and manage dependencies.
4. Node.js: A server-side platform for building web applications and APIs using JavaScript. The team will need to learn how to create and manage Node.js modules and use the Node.js runtime to execute JavaScript code on the server.
<br>
The project will allow the team to have a solid understanding of each component of the MEAN stack and how they work together to build a full-stack web application. 
<br>
The team can leverage online resources such as tutorials and documentation to learn and work on the project. https://www.mongodb.com/languages/mean-stack-tutorial - This is a great place to start with.
<br>
We are looking for 5 Mentees, and here's one possible way to divide the tasks among them:
- 2 Front-End Developers
- 2 Back-End Developers
- 1 UX Designer
Of course, this is one possible way to divide the tasks, and the exact distribution of assignments may vary depending on the progress of the project and the specific skills of the mentees involved.
<br>
As a mentor, we can provide our mentees with the knowledge, skills, and support they need to build a website that aligns with their goals and objectives from scratch. Through this process, they will gain valuable experience and knowledge about web development that they can use to further their career or entrepreneurial endeavors.
"
<br>
The only prereq is the enthusiasm towards the project. Though do mention your motivation for working on this project along with your past experience in development or even coding in general. We would be having 2 frontend developers, 2 backend developers and 1 frontend designer for the project, so also mention the role you want to work on. 
<br>
Pre-reqs:"Mandatory pre-requisites:
1. Good understanding of HTML & CSS
2. Knowledge of JavaScript
<br>
In addition to these prerequisites, it is also important to have a good understanding of web development concepts such as responsive design among others. Effective communication, collaboration, and coordination among team members will be crucial for ensuring that the project is completed on time."
</p>
</div>
<div class ="d-flex">
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class = "table table-striped w-100">
  <thead>
    <tr>
      <th>Week Number</th>
      <th></th>
      <th>Tasks to be Completed</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Week 1</strong></td>
      <td>Planning & Requirement Analysis. </td>
    </tr>
    <tr>
      <td><strong>Week 2 </strong></td>
      <td> Website Design (Frontend Developers & UX Designer), Backend Design (Backend Developer)</td>
    </tr>
    <tr>
      <td><strong>Week 3-4 </strong></td>
      <td> Development & Programming, Integration of Frontend and Backend</td>
    </tr>
    <tr>
      <td><strong>Week 5-7 </strong></td>
      <td>Testing & UX Enhancement, Deployment</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
