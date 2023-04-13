---
layout: project
title: Seasons of Code
project: A Secure Erasure Code-Based Cloud Storage System with Secure Data Forwarding
mentors:
    - Khushang Singla
    - Nilabha Saha
    
mentees:
- 4-5
    
permalink: /soc/projects/2023/project283
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

In this project, we will create a secure and robust distributed storage system that can be employed on the cloud. We shall ensure robustness in the sense that even if a few servers fail, there is sufficient redundancy in the data stored to successfully retrieve the data, while also ensuring that said redundancy does not occupy excessive space. We shall ensure so using a decentralised encoding scheme. Furthermore, we shall ensure that the data is kept confidential by suitable cryptographic mechanisms. We offload the hassle of key management from the users to the cloud keyservers in such a way to ensure that even the full compromise or failure of a few keyservers does not leak the encryption keys to a malicious adversary. Moreover, we also implement a proxy re-encryption scheme which allows the cloud servers, upon and only after taking permission from a user, to re-encrypt their data into an encryption of a different user's data in such a way that the cloud servers learn no information about the underlying data throughout the process.
Our system would be developed in a way so as to put little computational load on the users and little communication overhead between the users and the cloud.

We will be implementing the following paper: https://ieeexplore.ieee.org/document/6035700

We would use Docker to simulate the cloud environment and use socket programming in Python to enable communication between the systems. We would also use SageMath for implementing the cryptographic mechanisms required.

*Note:* This would be a full-fledged project which could be expected to be deployed on real systems with minor modifications. We expect around 6 hours of work per week on average for successful completion of the project.
<br>
 Prerequisites (Desired but not necessary):<br>
Python is a must. You should have interest in cybersecurity. 

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
      <td  >Week 1-3</td>
      <td>Socket programming with multiple simultaneous clients, Docker for simulating cloud environment, Sphinx Documentation</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Complete Paper-Reading </td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Implement pairings over elliptic curves and the System Setup</td>
    </tr>
    <tr>
      <td>Week 6-7.5</td>
      <td> Set up database, Implement Data Storage, Data Forwarding, and Data Retrieval</td>
    </tr>
    <tr>
      <td>Week 7.5 - 8</td>
      <td>Final touches</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
 

 