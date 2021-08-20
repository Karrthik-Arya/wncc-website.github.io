---
layout: eventLayout
title: Events
project: Code in Quarantine
    
permalink: /events/event/code-in-quarantine/
---

<h2 class="display1 m-3 p-3 text-center">{{page.project}}</h2>

{% for project in site.data.settings.events-items %}
{% if project.title == page.project %}
<div>
    <img src="{{ site.baseurl }}/{{ project.image }}"  width = "300" height="300" alt="{{ project.title }}" class="border rounded img-soc">
</div>

<div>
    <p class="display3" style = "font-size:20px;" >
        <br>
        WnCC proudly presents Code in Quarantine - your first step towards getting started with programming. Starting this Monday, over a span of 8 weeks, we’ll provide resources for you to get started with 8 diverse topics.
<br><br>
Here’s the list of topics being covered 
<br>
Week 1 - Python
<br>
Week 2 - Competitive Programming
<br>
Week 3 - Machine Learning
<br>
Week 4 - Git/GitHub
<br>
Week 5 - FrontEnd Dev
<br>
Week 6 - BackEnd Dev
<br>
Week 7 - Advanced FrontEnd Dev
<br>
Week 8 - Blockchain

<br><br>
    Every Monday, a tutorial containing links to some beginner-friendly resources will be shared, along with a task to assess your learning. You can freely discuss your doubts while understanding the tutorial or solving the task on our Telegram group.
    </p>
</div>
{% endif %}
{% endfor %}
