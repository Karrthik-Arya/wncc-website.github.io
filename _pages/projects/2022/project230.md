---
layout: project
title: Seasons of Code
project: Competitive Programming - Newbie to Master
topics:
    - Competitive Programming
mentors:
    - Parth Dwivedi
    - Kunal Kundwani   
mentees:
    - 4-6
    
permalink: /soc/projects/2023/project230
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
        Codeforces | Codechef | Atcoder | Hackerrank | HackerEarth | Leetcode

Too many sites, too many tutorials! If you are confused as to where to start and how to improve at Competitive Programming, we are here to help!

From offering a complete guide to Competitive Programming concepts, Data Structures and Algorithms, to sharing our experiences, heuristics and shorthands that we have learned to fast track you on your way to high ratings! 

The final goal of any aspiring Competitive Programmer is to bag a medal at the ACM-ICPC World Finals, and that journey begins here. We hope to connect you with like minded people interested in Competitive Programming so you can represent your own college and country at the world level!

Competitive Programming can be quite similar to solving tricky JEE questions, and the time limit adds a factor of urgency to the whole thing. So, if you liked the tricky thinking problems with novel approaches during your JEE prep, this might be the project for you!

This SoC will be requiring significant efforts from your side as well, our goal is not as easy as it may seem, and will require us to consistently improve ourselves. CP is something that can be excelled at only through practice. Quick solving and implementation of problems can only be done after a lot of attempts, so don't be disheartened if you take some time to find your groove. Most of us stagnate a lot in ratings, the key however, is to stick with it!

We intend to cover a lot of topics with a variety of questions on each of them, so it might be a little hectic. Please have a look at the course plan and only apply if you are confident you will be able to cope with it.

Best of luck!
<br>
Prerequisite: You would need a good grasp of CS101 concepts, and some hands on coding experience. Basic Fluency in at least one of the following :- C++ (preferred), Java or Python.
An interest in puzzles/problem - solving would also be preferred.

Experience with the Terminal, an IDE/text editor of your choice (VSCode works) and a debugger (eg. GDB for C++) is preferred but not a strict pre-requisite.
Of course, any previous Competitive Programming experience is more than welcome.

Finally, and most importantly, we need a lot of enthusiasm from you guys! Results can be slow to show at times, but we need you all to stick with it!

In addition to this, mentees will be expected to take part in Competitive Programming contests on various websites (2 in a week) according to their own schedule, and upsolve the problems.
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
      <td>Start out with basic programming exercises, not requiring any complex data-structures (except vectors/arrays) or algorithms to sharpen logical and thinking skills. Allow mentees to get comfortable with their own CP template and predefined functions. Preferably progress to some basic ideas such as stacks, queues, sliding window, two pointer method, meet in the middle, basic bit operations, etc by the end of the week.


</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Build upon some of the algorithms discussed earlier. Try out some of the challenging problems on the structures and algorithms mentioned above. Touch upon the data structures and algorithms available in the C++ STL like set, map, unordered_set, unordered_map, pair, binary_search, sort, etc. with some basic problems on them (corresponding data structures in other languages will be explored).

 </td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Solve challenging problems requiring the data-structures mentioned in the previous week. Now, we have all the tools needed to implement pretty much any algorithm we need.
Introduce the concept of Greedy and DP algorithms and basic heuristics on how to identify where to use which (along with elementary Number Theory such as the sieve of eratosthenes and Fermat's Little Theorem). Start out with some basic problems on these.


 </td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Move on to more challenging DP and Greedy problems. The type of algorithm to be applied in each question will have to be figured out by the mentees. Also touch upon basic graph concepts (dfs, bfs, graph representation) to allow for some easy problems in this time interval. </td>
    </tr>
    <tr>
    <td>Week 5</td>
    <td>Depending upon how the mentees are coping up, we can either take this week to brush up on the concepts already or move on to harder problems on the topics covered already.</td>
    </tr>
    <tr>
    <td>Week 6</td>
    <td>Move on to tougher problems in Graphs, implementation of Djikstra's Algorithm, DP and Greedy Algorithms in trees. Introduce the idea of Segment Trees, Fenwick Trees and give mentees time to read up, understand and code up their own implementations.</td>
    </tr>
    <tr>
    <td>Week 7</td>
    <td>Moderately Challenging Problems on Segment trees, Fenwick Trees with focus on comfortable implementation. For the mentees finding this not too intellectually stimulating, we shall introduce flows and some of the problems on it. Since this topic itself is quite tough, even basic implementation problems can be challenging here.</td>
    </tr>
    <tr>
    <td>Week 8</td>
    <td>Work on the weaknesses of the mentees, where they find things to be challenging and encourage them to read up on editorials and look at other people's code to improve their own.

At the end of 8 weeks, we shall expect to solve around 100 problems from various platforms, with a good sitribution of easy, medium and hard problems.
    </td>
    </tr>

    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
