---
layout: project
title: Seasons of Code
project: Write yourself a Git!
topics:
    - Dev Tooling
mentors:
    - Abhijeet Prasad Bodas
    
mentees:
- 2-5  
    
permalink: /soc/projects/2023/item223
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
<div style = "margin-bottom: 140px">
    <p class="display3 project-desc" style = "font-size:22px;" >
        <br>
            This project broadly consists of two parts; in the first few weeks, mentees will spend time getting acquainted with the GNU/Linux system (#1) and various command line tools and programs (see timeline below) which are ubiquitous in the software development world. This will provide the essential background for starting with the "main" work, which is building Git yourself!
            </p>
             <p class="display3" style = "font-size:22px;" >
            # What is Git?
It is a command-line program.

# What does it do?
It is used for managing large codebases and helps in collaborative software development.

# OK, what does this SoC project involve then?
We will build a Git-like program ourselves, in Python!

# Why bother doing that?
The Git software project project has been in active development for more than a decade at this point (https://github.com/git/git). The codebase is huge, and written in a not-so-beginner-friendly language (read: C) and in general pretty difficult to understand.

However, the Git program is an undeniably useful tool for software developers all around the world. Having sound knowledge of how to use this tool is absolutely essential for anyone building non-trivial software while collaborating with others. Using Git as a black-box (and not worrying about how it works) is fine for most people. But what's the fun in that?

While you build a Git-like program yourself, you will learn about how Git works in great detail. You will also learn about various computer science concepts which Git uses, like hashing (cryptography) and data structures (trees, specifically). Not to mention, you will be writing a bunch of Python code, and thus will also become extremely familiar with the language if you aren't already!

# What else is in it for me?
Apart from the above mentioned stuff, I also plan to stress on various so-called "good practices" in software development (clean code, commit discipline, separation of concerns, typing etc). I will mainly do this in code reviews, and sharing reading material from time to time. So, you will also learn about these "soft" skills in software development :)

# What's the endgame?
This is more of an educational project. After completing this, I expect the mentees to have a solid understanding of the system and tools like Git. More than anything, during the process, I expect the mentees to "learn how to learn".

With this background, mentees would be ready to take on larger software projects in the future, and participate in programs like Google Summer of Code or other internships which involve writing production code.

# Any reading materials?
The main source of inspiration for this offering is the original "Write yourself a Git!" (available at https://wyag.thb.lt/). I don't expect you to have read it before applying, but you can if you wish and have the time.
The above project/tutorial explains how to build a bare-bones Git-like program in a few hundred lines of Python code. This Seasons of Code project will involve implementing other, more complex Git features, and possibly getting them merged into WYAG!

# What's the time commitment?
When the semester is on, mostly a few hours on weekends. When vacations are on, around 3-4 hours a day would be a nice time to target. Which means, picking up part-time projects (ITSP/SoS) parallel to this can be possible for mentees.

# What should I write in the proposal?
1. What motivates you to participate in SoC (in general) and take up this project (in particular)?
2. Your background/experience in programming.
3. How much time can you commit to this project?
4. What do you expect to gain from doing this project? (Don't copy-past from the above, please!)
5. How enthu are you, on a scale of -∞ to +∞?

---
Foot notes:
#1 : A good understanding of the GNU/Linux system, and being fluent at using command line tools are essential skills for a software developer/engineer. Sadly, these are "meta" skills, and people usually do not explicitly spend time honing these. Those who learn these do so on-the-fly while working on some other development project. But frustration is common for those who aren't used to on-the-fly learning. I've been there, hence the emphasis on these skills in this project!
            <br><br>
            Prerequisites: The project is specifically for beginners (read: freshie applications welcome!), and no background other than CS101 and a general interest in computers is expected.
    </p>
</div>
<div class = "d-flex flex-wrap">
<div>
    <h4 class="display3" style="margin:0px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class="table table-striped w-100">
    <thead>
        <tr>
        <th>Week</th>
        <th>Work</th>
        </tr>
    </thead>
    <tbody>
    <tr>
      <td >Week 1</td>
      <td>Install a GNU/Linux distribution or WSL.
Learn basic CLI tools (cd, ls, cat, nano etc)</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Learn regexes (and grep, sed).
Other common CLI tools.
Learn about Git and how to use Git. Get your hands dirty on a dummy repository.</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Learn Vim. Spend some time golfing!
Install Python, and learn the basics of the Python language.</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Go through https://wyag.thb.lt/ and implement some of the basic commands, after which, we will start implementing feature not yet present in WYAG.</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Implement git-stash
</td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Implement a (non-interactive) rebase (handling merge conflicts correctly)</td>
    </tr>
    <tr>
      <td>Week 7</td>
      <td>Implement interactive rebase!</td>
    </tr>
    <tr>
      <td>Week 8</td>
      <td>Implement push/pull from/to a remote repository</td>
    </tr>
    </tbody>
    </table>
    <p>
Specifics of Week 5, 6, 7, 8 are subject to change. These weeks will coincide with vacations, and thus we will plan to take up working on the more complex features towards the end.</p>
</div>
</div>
{% endif %}
{% endfor %}
