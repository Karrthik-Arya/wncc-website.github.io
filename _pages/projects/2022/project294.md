---
layout: project
title: Seasons of Code
project: Institute OnChain Voting System with ZKPs
topics:
    - Blockchain
mentors:
    - Nikhil Tiwari	
    - Ananya Khandelwal
    - Ishit Garg
  
    
mentees:
- 5 
    
permalink: /soc/projects/2023/project294
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
        The plan is to build a transparent onchain election portal where students can vote in a specified time and their votes are encrypted on chain but verifiable using ZKPs. The number of votes won by a contestant will only be revealed once the election is over with the privacy of voter being maintained. ZKP ensures that each voter only votes once anonymously. Circom can be used to write ZK circuits. We plan to use SnarkJS to generate proofs for verification. Smart contract wallet (Account abstraction) can be used for storing votes and other information which can be made recoverable. 
<p class="display3" style = "font-size:22px;" >
Prerequisites : Enthusiasm and development knowledge 
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
      <td  >Week 1</td>
      <td>Gain basic knowledge of blockchain and cryptography (ZKPs)</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Start building a basic smart contract capable to handle simple voting</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Build smart contract wallet and look for its recovery</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Use circom to write ZKP circuits</td>
    </tr>
    <tr>
      <td>Week 5-6</td>
      <td>Use ZKP for verification ie.,for  post voting results, Do audit of smart contracts</td>
    </tr>
    <tr>
      <td>Week 7</td>
      <td>Build an UI and deploy</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
