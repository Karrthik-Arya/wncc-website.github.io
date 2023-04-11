---
layout: project
title: Seasons of Code
project: Speech to Speech Translation
topics:
    - Natural Language Processing
mentors:
    - Swapnoneel Kayal  
mentees:
    - 3-4 
    
permalink: /soc/projects/2023/project229
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
        <br>
        Speech to Speech Translation involves translating the speech from one language to speech in some other language. The most naive way to go about this would be to use a combination of automatic speech recognition, text-to-text machine translation followed by text-to-speech synthesis models. However, the intention of this project would be to come up with a model that does not rely on intermediate text representation since this offers advantages like improved inference speed, which in turn avoids compounding errors between recognition and translation.

Here is a blog about Translatotron →
https://ai.googleblog.com/2019/05/introducing-translatotron-end-to-end.html

Here is a reading material for you to gain some context →
https://arxiv.org/pdf/2107.05604.pdf](https://arxiv.org/pdf/2107.05604.pdf
<br><br>
Prerequisite:Hard prerequisites for the Mentees : 

- CS101 Fundamentals
- Python Programming Proficiency (Beginner to Intermediate)
- Must know how to work around Terminal (or Command Prompt) and Github
<br>
Soft prerequisites for the Mentees : 

- Having worked with PyTorch, Keras, TensorFlow or any other equivalent ML library
- Patience to go through multiple research papers
    </p>
</div>
<div class = "d-flex flex-wrap">
<div>
    <h4 class="display3 mx-auto" style="margin:40px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class="table table-striped w-75 mx-auto">
    <thead>
        <tr>
        <th>Week</th>
        <th>Work</th>
        </tr>
    </thead>
    <tbody>
    <tr>
      <td  >Week 1</td>
      <td>Brush up on / Python, basic terminal commands as well as go through an interactive gitimmersion tutorial / git crash course video.

</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Perform extensive literature review as well as go through some YT videos for a better understanding of the problem in hand.
 </td>
    </tr>
    <tr>
    <td>Week 3</td>
    <td>Acquisition of data → Play around with the LibriSpeech corpus and think about ways of generating dataset for languages for which a corpus is unavailable.</td>
    </tr>
    <tr>
    <td>Week 4</td>
    <td>Coding → Implementation of the naive Speech to Speech Translation engine.</td>
    </tr>
    <tr>
    <td>Week 5</td>
    <td>Coding → Implementation of a direct Speech to Speech Translation engine.</td>
    </tr>
    <tr>
    <td>Week 6</td>
    <td>Buffer Week</td>
    </tr>
    <tr>
    <td>Week 7</td>
    <td>Comparison and analysis of the 2 models/engines devised. If time permits, we would also be experimenting with the engines in order to better an efficient real-time translation pipeline.</td>
    </tr>
    <tr>
    <td>Week 8</td>
    <td>Wrapping up → This also includes making a good report and (video) presentation since it helps me and other people value your hard work even more</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
