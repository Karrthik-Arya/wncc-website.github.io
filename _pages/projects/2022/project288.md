---
layout: project
title: Seasons of Code
project: Comic GPT
topics:
    - Machine Learning, Fintech, Stock Market
mentors:
    - Lakshay Gupta
    
mentees:
- 4
    
permalink: /soc/projects/2023/project288
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
<div class = "project-desc">
    <p class="display3" style = "font-size:22px;" >
        <br>
        Use Large Image and Language models to create a comic generator app. Fine tune the models on your favorite styles and make a fun app you can share with your friends. 
<br>
We can also explore creating videos out of the comics we generate (basically text to anime😋) if time permits. 
<br>
We'll be making use of cutting edge diffusion models for image and video generation (think stable diffusion, modelscope, etc) and large language models like GPT3.5 and LLAMA to generate the storyline. 
<br>
If you think you'll just be stringing together APIs, you're mistaken. We will go into the depths of transformers and diffusers from whitepapers to their implementations so that you don't feel like you're juggling black boxes. 
<br>
Here's a basic version of the app you're going to make - https://sparkler.club/
Needless to say, we'll be adding many more features. 
<br>
Diffusers - https://github.com/huggingface/diffusers, https://huggingface.co/docs/diffusers/index
<br>
https://ai.facebook.com/blog/large-language-model-llama-meta-ai/
<br>
https://platform.openai.com/docs/guides/completion
        <br>
Prerequisites:
No huge prereqs
<br>
- knowledge of python or any other programming language
<br>
- willingness to dirty your hands by squashing new bugs
<br>
- enthu
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
      <td  >Week 1-2</td>
      <td>Playing around with Image Generation models and building mini projects like finetuning stable diffusion on your face and generating your own custom ai avatars
</td>
    </tr>
    <tr>
      <td>Week 3-4</td>
      <td>Playing around with Language Models, exploring the best prompts for our use case and also toying around with tools like Langchain
</td>
    </tr>
    <tr>
      <td>Week 5-6</td>
      <td>Build a basic version of the app. Armed with the knowledge so far, you can also work on your own ideas instead of a comic generator</td>
    </tr>
    <tr>
      <td>Week 7-8</td>
      <td> Add fun features to your app like an image editor, chatbot, social sharing etc or explore the use of generative audio and video in your app. 
Share your apps on social media and get real users. Launch your app on product hunt.  </td>
    </tr>
    <tr>
      <td>Week 9</td>
      <td>Talk to users and make improvements in the app. </td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
 