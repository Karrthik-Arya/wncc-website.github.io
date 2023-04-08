---
layout: project
title: Seasons of Code
project: TEXT SUMMARIZATION WEB APP 
topics:
    - Development
mentors:
    - kundeshwar vijay pundalik
    - ADRESH ALAGADE     
    
mentees:
- 20+   
    
permalink: /soc/projects/2023/project221
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
        <br>
        We will build Text summarization web app by using Bert model(Hugging Face Transformers). We will deploy this model in two different way one will be by using HTML and other will be Streamlet. Read following content for more information :- 
        <br>
        Every day, we are inundated with information. There are numerous articles that we read on a daily basis. As a result, there is a lot of data moving about, largely in the form of text. If we need to learn something about an article, we must read the entire piece to understand it, and many times those articles become excessively long, such as a 5000-word article, which takes a long time. So, in order to receive the useful information contained in 1000 words, we must read the entire 5000-word article, which is a complete waste of time, and if we need to read several articles like that for work purposes, it will take a long time, resulting in a loss of work hour. The goal of text summarizing is to see if we can come up with a method that employs natural language processing to do so. This method will not only save time in comprehending a text, but it will also allow someone to read multiple texts in a short period of time, saving time in the long term.<br>
        Objective of Text Summarization:
        
</p>
<ul style = "list-style-type: disc">
<li class="display3 mb-2" style = "font-size:20px;"> Extraction of useful information out of a huge amount of text.</li>
<li class="display3 mb-2" style = "font-size:20px;"> Reduction of reading time.</li>
<li class="display3 mb-2" style = "font-size:20px;"> Enable to read more articles as the time for reading each article will be reduced thus gather more information from different articles without losing much time.</li>
<li class="display3 mb-2" style = "font-size:20px;"> Selecting articles allows one to process more information when reading because only the most significant aspects of the content are captured.</li>
</ul>
<p class="display3 project-desc">Some useful links :-</p>
<ul style = "list-style-type: disc">
<li class="display3 mb-2" style = "font-size:20px;"> https://github.com/tkmanabat/Text-Summarization.</li>
<li class="display3 mb-2" style = "font-size:20px;"> https://github.com/dmmiller612/bert-extractive-summarizer.</li>
<li class="display3 mb-2" style = "font-size:20px;"> https://aws.amazon.com/blogs/machine-learning/part-2-set-up-a-text-summarization-project-with-hugging-face-transformers/</li>
<li class="display3 mb-2" style = "font-size:20px;"> https://keras.io/examples/nlp/t5_hf_summarization/</li>
<p class="display3" style = "font-size:22px;" >
We would use Flutter for frontend, Django or NodeJS for backend (a/c to preference of mentees).
We would need 2 mentees working on Flutter and 2 mentees working on backend. 
</p>
<br>
<p>
Prerequisites:
BASIC PYTHON , (HTML OR STREAMLIT) , BASIC KNOWLEDGE OF NEURAL NETWORK, RNN</p>
<br>
<p class="display3" style = "font-size:22px;" >
Note for Mentees:
</p>
<ul style = "list-style-type: disc">
<li class="display3 mb-2" style = "font-size:20px;"> Mention whether you want to work on frontend or backend. If you are not clear or want to work on both, mention that.</li>
<li class="display3 mb-2" style = "font-size:20px;">  If you are good at UI design, write it in proposal </li>
</ul>
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
      <td>EDA and Some other operation (Removal Noise, Lowercase conversion, Tokenization, Stopword Removal, Stemming, lemmatization Removal OOV and Removing Rare  word etc.)</td>
    </tr>
    <tr>
      <td>Week 4-5</td>
      <td>Abstractive Summarization approach(selection of model like which hugging face model is best for text summarization )</td>
    </tr>
    <tr>
      <td>Week 6-7</td>
      <td>Create model by using model "DistilBART-CNN-12-6" and Write deployment code for streamlet as well as HTML.</td>
    </tr>
    <tr>
      <td>Week 8</td>
      <td>Final Deployment and Result Analysis.</td>
    </tr>
    </tbody>
    </table>
</div>
{% endif %}
{% endfor %}
