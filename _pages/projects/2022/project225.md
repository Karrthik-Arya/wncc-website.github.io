---
layout: project
title: Seasons of Code
project: FAST-G
topics:
    - Competitive Coding
    - Developing a library for graph optimization algorithms
mentors:
    - Ameya Vikram Singh
    - Prerak Contractor
    -  Anish Yogesh Kulkarni    
mentees:
    - 9
    
permalink: /soc/projects/2023/project225
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
            Fast Algorithms for Searching Through Graphs

Optimization is everywhere! From google maps, machine learning, airplane scheduling, network routing, to search and rescue, and even in war. Almost every problem in the world involves determining an optimal solution among all available options. The project will target a wide variety of such optimization problems, and implement a general purpose library with a huge toolbox of optimization algorithms. There will be a significant theory component, so that the problems can be modelled mathematically in terms of optimizing a cost function over some set, typically some graph (network). The mentees will build a robust, modular high-performance library for optimization using OO programming, in C++. 

We will look at Shortest Paths, Spanning Trees, Perfect Matching, Network Flow and advanced problems like the Travelling Salesman. We will employ heuristics like Greedy approach, Dynamic Programming, Linear Programming, etc. Some standard algorithms including Dijkstra, A* search, Floyd-Warshall (Paths), FFA, Edmonds-Karp and Dinic (Flows), Hungarian method and Blossom-Shrinking (Matching) will be implemented and contrasted. Depending on the timeline, we might also cover Randomized Algorithms and Approximation Algorithms for NP-Hard Problems (TSP). No former knowledge of any of these algorithms is expected, only enthusiasm to learn, understand and implement! Further, no advanced programming knowledge is required.

Reference (theory): Combinatorial Optimization, Korte and Vygen (this is just a secondary reference, resources for studying specific algorithms will be shared along the project, but implementation will be from scratch)
<br>
There is no requirement for prior Deep Learning experience, however it would be helpful if you did. Some familiarity with python and image classification is expected but you can catch up quickly without that too if you are motivated enough.  In your proposal, indicate your readiness to devote time to this project. If you have any previous coding (Python) or machine learning or deep learning skills, be sure to highlight that.

Prequisites: No prereqs, except basic C++ programming, and enthusiasm of course! Knowing C++ OOP (Classes, Friends, Inheritance) will be good-to-have, though can be picked up easily.
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
      <td  >Week 1</td>
      <td>Basics of graphs and algorithms. Programming the Graph Base Class. Understanding Greedy and DP heuristics and solving problems
</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Basic graph traversal algorithms: BFS, DFS and applications - Kosaraju, connectivity etc. Dijkstra algorithm implementation, Bellman ford, DAG-shortest paths

 </td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Minimum cost spanning tree and review of past 2 weeks. Basics of LP (2-3 days).

</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>The Network flow problem, LP formulation, minimum cut, augmenting path algorithms implementation. Using them for various applications.
</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Continuation of network flow to bipartite matching. Understanding the Hopcroft-Karp algorithm and complexity.
</td>
    </tr>
    <tr>
        <td>Week 6</td>
        <td>Minimum-cost flow problem, and weighted perfect matching. Implementing the Hungarian algorithm, and Blossom shrinking if time permits.</td>
    </tr>
    <tr>
        <td>Week 7</td>
        <td>Perfect matchings in general graphs - Blossom shrinking, weighted extension. Chinese Postman problem implementation. Rounding up the entire implementation for presenting.</td>
    </tr>
    <tr>
        <td>Week 8</td>
        <td>Further directions to the project - Randomized algorithms, approximation algorithms, TSP approximation - Implementing any approximation algorithm to TSP or its variants.</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
