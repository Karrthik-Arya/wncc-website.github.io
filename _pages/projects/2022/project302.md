---
layout: project
title: Seasons of Code
project: PaperPal
topics:
    - Machine Learning
mentors:
    - Vishruth N
    - Abhinav Raghuvanshi (200040008)
    
mentees:
- 5-6
    
permalink: /soc/projects/2023/project302
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
      PaperPal will be an an innovative tool that aims to simplify research paper reading by leveraging the power of GPT 3.5's API to provide users with concise summaries and insightful answers to their follow-up questions.
<br>
PreReqs:
<br>
Pre-requisites:
Strong coding skills and ability to write clean code
Knowledge of software development principles and practices
Familiarity with Git and version control
Understanding of natural language processing (NLP) is a plus<br>

Good-to-have skills:
Experience with web development frameworks such as Flask or Django
Knowledge of cloud platforms such as AWS or GCP
Familiarity with front-end development technologies such as React or Angular
</p>
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
      <td>Set up project repository on GitHub, finalize the project plan, and start building the frontend wireframes.
</td>
    </tr>
    <tr>
      <td><strong>Week 2 </strong></td>
      <td>Begin working on the backend infrastructure, including setting up the database and API endpoints.
</td>
    </tr>
    <tr>
      <td><strong>Week 3</strong></td>
      <td>mplement MathPix's OCR for processing PDFs and integrating it with the backend infrastructure </td>
    </tr>
    <tr>
      <td><strong>Week 4 </strong></td>
      <td>Develop the summarization feature using the GPT 3.5 Turbo API and integrate it with the backend.</td>
    </tr>
    <tr>
      <td><strong>Week 5</strong></td>
      <td>Work on the question-answering feature using the GPT 3.5 Turbo API and integrate it with the backend.</td>
    </tr>
    <tr>
      <td><strong>Week 6</strong></td>
      <td>Develop the user interface for the frontend, including integrating the OCR and summarization features.</td>
    </tr>
    <tr>
      <td><strong>Week 7</strong></td>
      <td>Continue working on the frontend user interface and integrate the question-answering feature.</td>
    </tr>
    <tr>
      <td><strong>Week 8</strong></td>
      <td>Begin user testing and gather feedback to improve the user experience.
</td>
    </tr>
        </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
