---
layout: project
title: Seasons of Code
<<<<<<< HEAD
project: Economics meets Machine Learning
=======
project: The Watchdogs- Solving a murder mystery using Computer Vision and Data Science
>>>>>>> b3b0deb0a670244701c12a5953b725a657d6f08b
topics:
    - Machine Learning
    - Deep Learning
    - Computer Vision
mentors:
<<<<<<< HEAD
    - Tejas Sanjaykumar Pagare
    - Param Rathour (190070049)
    
mentees:
- 4-6
=======
    - Agamjot Singh
    - Aastha Sancheti
    - Suyash Waghmare
    
    
mentees:
- 6-10
>>>>>>> b3b0deb0a670244701c12a5953b725a657d6f08b
    
permalink: /soc/projects/2023/project262
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
<<<<<<< HEAD
<p class="display3" style = "font-size:22px;" >
Such a rapid rate of data generation along with issues such as data privacy coming up, often "The project will involve implementing various Economics problems as a Markov Decision Process in a compact way as Gym (https://arxiv.org/abs/1606.01540). Later we will implement Bandit and Reinforcement Learning algorithms to solve these problems. Some economic problems that we will deal with include Matching Markets, Auctions, and allocation problems. Matching Markets has applications in ridesharing, online dating, job matching, kidney exchange, and university applications. Auctions are everywhere, from IPL team selection to online advertising, spectrum allocation to art auctions, government procurement, and online marketplaces. 
<br>
This project if successful can result in a research paper.
<br>
Resources
Markov Decision Processes: https://youtu.be/2iF9PRriA7w
<br>
Auctions: https://youtu.be/4kWuxfVbIaU
<br>
Matching Markets: https://youtu.be/ELC7rCBL7I0, https://youtu.be/80QZ0IrQVbQ
<br>
Economics of Matchmaking: https://youtu.be/kj2fpM57Z7A
<br>
Advanced Resources
Michael Jordan Talk: https://youtu.be/fwOZbhQpbNg" 
<br>
Prereqs: Familiarity with Python. Knowledge of Probability, Statistics. Prior knowledge of Machine Learning and Economics will be helpful. <br>
=======
    <p class="display3 project-desc" style = "font-size:22px;" >
        <br>
        The scientific world is in shock after the murder of a famous scientist in the streets of Mumbai. Detective Jane has been called to investigate this high profile murder case. Looking at the tampered evidence and remnants of recordings, detective Jane thinks only the students of IIT Bombay can solve this mystery using computer vision techniques. Jane and her team are working hard on collecting evidence which the plan to release every week by collecting surveillance videos or other sources of videos, investigating hotels and nearby shops etc. We, the mentors of the project have been assigned the task to build a team which we’ve decided to call, “The Watchdogs”. We need very enthusiastic and passionate mentees to bring the scientific world to justice.
Prereqs: Python, maybe some prev computer vision knowledge and a lot of enthusiasm 💪<br>
References:<br>

>>>>>>> b3b0deb0a670244701c12a5953b725a657d6f08b
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
<<<<<<< HEAD
      <td><strong>Week 1-2</strong></td>
      <td>Learn about different types of MDPs, Bandit Algorithms, and some RL algorithms</td>
    </tr>
    <tr>
      <td><strong>Week 3 </strong></td>
      <td>Basic familiarity with Gym implementation and GitHub setup.</td>
    </tr>
    <tr>
      <td><strong>Week 4  </strong></td>
      <td>Introduction to different Economics Problems and their mathematical models</td>
    </tr>
    <tr>
      <td><strong>Week 5 </strong></td>
      <td> Implementating Econ problem as a Gym Environment</td>
    </tr>
    <tr>
      <td><strong>Week 6-7 </strong></td>
      <td>Integrating Bandit or RL Algorithms</td>
    </tr>
    <tr>
      <td><strong>Week 8 </strong></td>
      <td> Benchmarking against Heuristic Approaches
</td>
=======
      <td><strong>Week 0</strong></td>
      <td>Appointing Mentees, welcoming the team, bringing everyone to the same page by briefing everyone about the high stakes in place and the need of their dedication. + Team bonding</td>
    </tr>
    <tr>
      <td><strong>Week 1 onwards </strong></td>
      <td>Detective Jane will release new clues and evidences every week and the mentees will be trained for the the first few days of the week about how to analyse the clue and then will have to implement the cv / ds techniques on their own. </td>
    </tr>
    <tr>
      <td><strong>Finally  </strong></td>
      <td>Executing the criminal + team treat(maybe)</td>
>>>>>>> b3b0deb0a670244701c12a5953b725a657d6f08b
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
