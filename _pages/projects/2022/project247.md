---
layout: project
title: Seasons of Code
project: Homomorphic Encryption for k-NN on the Cloud
mentors:
    - Nilabha Saha
    - Maithri Suresh  
    
mentees:
- 5 
    
permalink: /soc/projects/2023/project247
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
<br>
<br>
<br>
<br>
        <p class="display3" style = "font-size:22px;" >
       In this project, we will create a mechanism for performing secure and controlled k-NN queries that can be employed on the cloud. The system would have a data owner who outsources their data to a cloud server. To ensure that the data owner has sole ownership of the data, we will ensure data confidentiality by storing only encrypted data on the cloud server, thus disallowing the cloud server from knowing the contents of the stored data. We enforce query controllability by allowing a query user to request the data owner's permission to issue a query. Only after the data owner permits the query can it be issued to the cloud server to compute the k nearest neighbours to the supplied query point. Our system would ensure query privacy: neither the data owner nor the cloud server would know the contents of the query. Furthermore, the cloud server would compute on the encrypted data itself, gaining no information about the computed results, which could only be decrypted by the query user. This would be ensured by using an asymmetric scalar product that preserves a homomorphic encryption scheme.

For the same, we will be referring to the following paper: https://www.sciencedirect.com/science/article/pii/S0743731515002105
 
Throughout the course of the project, the mentees would learn the following (in reference to the paper): 
- how to implement socket programming for communication between the various entities involved
- how to set up, create, and interact with a Docker container externally to simulate the cloud server
- SageMath and how to implement basic cryptographic schemes
- how to implement an asymmetric scalar product preserving homomorphic encryption scheme
- how to connect everything they've built together
<br>
Prerequisites:<br>
- Python<br>
Expectations: This project entails going through a paper and implementing it. Hence, a respectable amount of serious effort is expected from the mentees, including an investment of 3 - 4 hours per week.
<div class = "d-flex flex-wrap ">
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
      <td> Implementing socket programming to establish connection between three entities</td>     
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Learning SageMath and the Number Theory required for the paper</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td> Implementing RSA, ElGamal, and Paillier cryptosystems using SageMath</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Paper Reading and Cloud Architecture Theory</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td> Learn how to set up, create, and connect to a Docker container externally</td>
    </tr>
    <tr>
      <td>Week 6-7</td>
      <td>Implementation of the paper</td>
    </tr>
    <tr>
      <td>Week 8</td>
      <td>Tying up loose ends; Final documentation</td>
    </tr>
    </tbody>
    </table>
</div>

</div>
{% endif %}
{% endfor %}
