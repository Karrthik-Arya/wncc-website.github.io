---
layout: project
title: Seasons of Code
project: Sign Language Recogniser
topics:
    - Web Development
mentors:
    - Shruti Bahulekar	
    - Ananya Agrawal(21b030005)   
    
mentees:
- 5-6   
    
permalink: /soc/projects/2023/project275
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
        This project aims to develop a web application for Sign Language Recognition and Translation using machine learning and deep learning techniques. If you are a math enthusiast who is interested in learning about machine learning, deep learning, and the basics of python, then this project is perfect for you.
<br>
Through this project, you will gain a solid understanding of data cleaning and various libraries such as Numpy, Pandas, and Matplotlib, which are widely used in data science. You will also have the opportunity to dive deep into the world of machine learning and deep learning, which are two of the most sought-after skills in the industry.
<br>
The application you will develop will be able to recognize various signs of sign language, interpret them and provide a translation of the message in real-time. The project will involve collecting and labeling a dataset of sign language gestures, training a machine learning model, and building a user-friendly web interface.
<br>
Overall, this project is an excellent opportunity for anyone interested in exploring the fascinating world of machine learning, deep learning, and data science while also making a significant contribution to the lives of those who use sign language as their primary mode of communication.
        <br>
    </p>
</div>
<div class = "d-flex flex-wrap">
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class="table table-striped w-75">
    <thead>
        <tr>
        <th>Week</th>
        <th>Work</th>
        </tr>
    </thead>
    <tbody>
    <tr>
      <td  >Week 1-3</td>
      <td>Motivation of Machine Learning & Basics of Python, Introduction to NumPy, Introduction to Pandas, Matplotlib & Introduction to machine Learning</td>
    </tr>
    <tr>
      <td>Week 4-6</td>
      <td>Machine Learning & Basics of Deep Learning, Working on Project </td>
    </tr>
    <tr>
      <td>Week 7-8</td>
      <td>Working on Project, Final touches on Project
</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
