---
layout: project
title: Seasons of Code
project: To the Quantum Future
mentors:
    - Anand Narasimhan
    - Krishna N Agaram
    - Ameya Deshmukh   
    
mentees:
- 9
    
permalink: /soc/projects/2023/project251
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
     This project will begin with a foray into the topics of Quantum Computing, with the primary reference for this part being Quantum Computing and Quantum Information by Nielsen and Chuang. Along the way, we will see algorithms such as Quantum Teleportation, Simon's Algorithm, Period-Finding and Shor's Algorithm, and Grover Search. They will also be implementing these in IBM Qiskit.<br>

Subsequently, the mentees can choose one of three topics, based on their interest : Quantum Information Theory and Error Correction, Quantum Machine Learning and Quantum Cryptography. These topics will start with an introduction to their classical counterparts and the depth covered will be dependent on the mentee's progress. <br>
<br>
Prerequisites: <br>
Enjoyed MA106 :)
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
      <td>Chapter 2 of QCQI (Till Section 2.5)</td>     
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Chapter 4 (Till Section 4.5.2)</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Chapter 5 (Till Section 5.3) and Section 6.1</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Basics of Classical ECC | Classical ML : Weeks 4,5 of CS50 AI</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Chapter 8 (Till Section 8.3.3) | Read the master paper on QML</td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Chapters 9 and 10 (Till Section 10.4) | Implement a QML paper of your choice in PennyLane.
</td>
    </tr>
    <tr>
      <td>Week 7</td>
      <td>Symmetric Key Encryption (Katz-Lindell)</td>
    </tr>
    <tr>
      <td>Week 8</td>
      <td>Quantum Key Distribution (The BB84 protocol)</td>
    </tr>
    <tr>
      <td>Week 9</td>
      <td>An introduction to Post-Quantum Cryptography</td>
    </tr>
    </tbody>
    </table>
</div>

</div>
{% endif %}
{% endfor %}
