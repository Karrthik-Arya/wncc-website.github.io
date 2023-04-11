---
layout: project
title: Seasons of Code
project: Author Identification through Stylometric Analysis
topics:
    - Machine Learning
mentors:
    - Mani Praneeth Chilukuri 
    
mentees:
- 5
    
permalink: /soc/projects/2023/project257
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
<div >
    <p class="display3 project-desc" style = "font-size:22px;" >
        <br>
   Every author (and for that matter, any person who writes) has his own unique writing style, and this unique style can majorly be observed in the way they use small function words, such as articles, prepositions and conjunctions (I guess my writing style majorly has long sentences containing comma-separated smaller sentences :P ). In a survey of historical and current stylometric methods, it has been pointed out that function words are “used in a largely unconscious manner by the authors, and they are topic-independent.” In simple words, the writing style is to some extent irrelevant with the topics and can be recognised by human readers. We intend to make a program recognise it too. The proposed solution is to look at few works of different authors, analyse them for some metric, and then test our program on other works to determine their author.<br>

A little more information (which you can very well ignore if I grabbed your attention from the above paragraph alone):
We will start the project using three well-known approaches viz., Mendenhall's Characteristic Curves of Composition, Kilgariff's Chi-Squared Method and John Burrow's Delta Method. Then, we shall move on to build a machine learning model, experimenting and evaluating accuracies of different models, to come to the best model that does our job.<br>
Pre-requsites: <br>
Any experience in python will be appreciated but not necessary.
Enthusiasm to explore machine learning (doesn't matter if it is your first time).
</p>
</div>
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
      <td>Week 1</td>
      <td>Get used to python, and nltk module. </td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Collecting data: Collecting written texts to analyze.
Pre-processing this data
Study about different tests of stylometric analysis</td>
    </tr>
    <tr>
      <td>Week 3-4</td>
      <td>Implementing these stylometric tests for the data we collected and pre-processed.</td>
    </tr>
    <tr>
      <td>Week 5-6</td>
      <td>Learn "Logistic Regression", "Feature Extraction", "Bag-of-Words", "RNN"s, and "Transformers".
Building a model to classify the authorship of the texts.</td>
    </tr>
    <tr>
    <td>Week 7</td>
      <td>Evaluating our model using metrics such as F-scores.
Analyse the results of our model, interpret them and draw conclusions similar to what we did in week 4.</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
