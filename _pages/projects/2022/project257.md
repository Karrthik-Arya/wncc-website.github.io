---
layout: project
title: Seasons of Code
project: CNN Based Stock Market Prediction
topics:
    - Web Development
mentors:
    - Shivprasad Kathane 
    
mentees:
- 5-10 (would yield variety of prediction results!)
    
permalink: /soc/projects/2022/project257
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
<div class = "project-desc" style = "margin-bottom: 140px">
    <p class="display3" style = "font-size:22px;" >
        <br>
        The goal of this project is to implement 3D Convolutional Neural Network models for predicting the directional movement of stock markets using data from various sources.
Main Paper: https://www.sciencedirect.com/science/article/pii/S0957417419301915
Other Articles: https://www.analyticsvidhya.com/blog/2021/08/hands-on-stock-price-time-series-forecasting-using-deep-convolutional-networks/, https://machinelearningmastery.com/using-cnn-for-financial-time-series-prediction/, will be sharing resources for learning the foundations, mentees can also find more articles on the internet, and look up papers & data on the Indian market as well and try working on them.			
        <br>
Prerequisite:
Should be familiar with python and exposure to data analysis is preferable
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
      <td>Week 1</td>
      <td>"April:
Week 1: Intro to Time Series Data & Problems
Week 2: Basic modeling & forecasting Methods
May:
Week 3: Basic Machine Learning & Deep Learning
Week 4: Building Neural Networks in Google Colab
Week 5: Understanding and Implementing CNNs
Week 6: Reading and Understanding the Paper
Possibly reviewing similar papers/articles
June:
Week 7: Understanding & Working with the Data 
Week 8: Working on Model Building & Evaluation
Week 9: Possible Iterations & Optimisations
Week 10: Document & Suggest Improvements
Possibly implementing similar papers/articles
July:
Week 11: Buffer or Review/Analysis
Week 12: Preparing a Presentation"
  </td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>	Learning javascript and Bootstrap</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Introduction to react js framework</td>
    </tr>
    <tr>
      <td>Week 4-5</td>
      <td>Introduction to PHP, MySQL.</td>
    </tr>
    <td>Week 6</td>
      <td>Introduction to Git/Github And APIs</td>
    </tr>
    <tr>
      <td>Final Week</td>
      <td>Full stack Development of stock market tracking website.</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
