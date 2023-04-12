---
layout: project
title: Seasons of Code
project: Blockchain Development- It's not that difficult!
topics:
    - Blockchain
mentors:
    - Pragyesh Gupta	
    - Dhruvkumar Patil (200100056)
    - Harsh Choudhary (200070023)
    
mentees:
- 5 
    
permalink: /soc/projects/2023/project296
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
    <p class="display3 project-desc" style = "font-size:22px;" >
        "The project involves making a blockchain application. We will start write from scratch all the way to making a Blockchain-based application, a blockchain marketplace where items could be sold and bought in cryptocurrencies, to making an Amazon clone using Blockchain technology. This might sound daunting but trust me, it's not! Also, there are no pre-requisites for the project, just bursting enthusiasm to learn this continuously evolving new technology. Thus, there are 2 basic modules for the project: first one to create a blockchain Marketplace and second to create an e-commerce Amazon-like Platform for the same. The second Module is like a bonus module, and we'll go there if time permits.<br>

Also, for getting started, you could go through this small video https://www.youtube.com/watch?v=yubzJw0uiE4&ab_channel=Simplilearn and if time permits you could also look up this interesting article (~15 mins) https://www.investopedia.com/terms/b/blockchain.asp
<p class="display3" style = "font-size:22px;" >
Prerequisites : Enthusiasm 
<br>
<br>
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
      <td >Week 1</td>
      <td> Introduction to Blockchain</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Making Product Classes using Solidity</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Learning and designing a website via JavaScript and making product buying and selling available using the Front-end</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Deployment of the Blockchain Marketplace website ending Module 1</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Modifying Product Classes for the Module 2 with listing and purchasing products</td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Deployment of the Amazon Clone Website with building the Navbar</td>
    </tr>
    <tr>
      <td>Week 7</td>
      <td>Final touch with modifying Product details and finally buying products to end the Module 2</td>
    </tr>
    <tr>
      <td>Week 8</td>
      <td>Documenting the whole process with any additions required.</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
