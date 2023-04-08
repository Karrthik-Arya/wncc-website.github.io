---
layout: project
title: Seasons of Code
project: Learning the Latent structure in LLMs
topics:
    - Web Development
mentors:
    - Darshan Makwana  
    
mentees:
- 10
    
permalink: /soc/projects/2023/project266
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
        "We will be learning what are large language models and how they can be used as knowledge bases. At the end we will be building and training a BERT and a miniGPT entirely from scratch though our miniGPT won't be as powerful as the GPT models out there, we will learn how we can improve our model and some of the techniques that can be used to align them towards instructions at the very end of the project, if time permits :(. The aim of the project is to make you so well versed in LLMs that you can build and train one from scratch on the go.
<br>
python is a very hard pre requisite for this project as we will be putting our intuitive thoughts about natural language understanding into logical structures of rules that the computer will perform via python language
Details about the project and the assignment can be found here:
https://github.com/darshanmakwana412/LLM-SOC"
<br>
Prerequisites:<br>
Enthusiasm is the most fundamental prerequisite apart from basics of probability theory, statistical machine learning. Python is a very hard prerequisite
        <br>
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
      <td  >Week 1</td>
      <td> Gentle Introduction to NLP with word2vec, word embeddings, Distributional sementics</td>
    </tr>
    <tr>
      <td>Week 2,3</td>
      <td>Introduction to pytorch and neural networks, convolutional layers and pooling, building cnns and training them on dummy datasets, Text classification, building generative and discriminative models</td>
    </tr>
    <tr>
      <td>Week 4,5</td>
      <td>Language Modeling, N gram LMs, Neural LMs, evaluating LMs, Building encoder-decoder models, autoencoder and inferencing </td>
    </tr>
    <tr>
      <td>Week 6,7</td>
      <td>Introducing attention(Transformer: Attention is All You Need) in encoder-decoders, building a transformer from scratch, Seq2Seq, Transfer learning, replacing pre trained word embeddings in GPT and BERT</td>
    </tr>
    <tr>
      <td>Week 8</td>
      <td>Building and training BERT and miniGPT in pytorch from scratch</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
