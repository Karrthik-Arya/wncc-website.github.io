---
layout: project
title: Seasons of Code
project: File Compression System
topics:
    - Algorithms
mentors:
    - Amritaansh Narain
    
mentees:
- 4  
    
permalink: /soc/projects/2023/project224
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
            Ever thought about how does gZip and all these online file compression services reduce your file size from 50 MB to 10 MB or even lower while keeping everything intact. Intuitively you might ask that how even is this possible, wouldn't this lead to data loss. Well, what these softwares use are known as lossless compression algorithms i.e. they compress data in a manner such that all original data can be retrieved in it's complete format. This project would serve as an intro to the same, by the end of the project, you would have implemented algorithms which would allow you to compress & decompress files on the level of gZip. gZip uses DEFLATE scheme which is a combination of LZ77 & Huffman encoding, both of which we will be implementing in this project.

We would be doing our coding in C++ & you would be using pointers, adresses, data structures extensively and would be a level up your CS101 course, so I expect coding skills you get from your CS101 course. You would get to develop an actual application which you can use for your own purpose. This would serve as a great avenue for improving your coding skills and learning something on the way.  

We will work only on lossless compression algorithms. However, as you might see, we can design algorithms which let's say preserve 95% of the data while giving massive compression ratios. This 5% data loss wouldn't be visible at in visual, audio data however the file size decrease would make it immensely easier to transmit across networks. These algorithms would fall into research domain and this project would serve as a basic groundwork for compression systems.

Intro to compression - https://www.youtube.com/watch?v=Lto-ajuqW3w 
Why LZ77 is cool - https://youtu.be/goOa3DGezUA?list=PLch3To-m3L-PQoaFTYMdVZkHFD9W6URi4 

<p>Prerequisites: Assume you have basic understanding of C++ and are pretty comfortable at it. Make sure you are taking up the project under a complete consciousness cause the project might get heavy to handle. Consider me as a mentor to guide you along the way but not spoonfeed you for the same so you will be on your own for the most part. Feel free to contact me to clear up anything you want to know about the project before applying for it.</p>
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
      <td  >Week 1&2</td>
      <td>Basic overview of c++ with maps, pointers, strings, study about various compression algorithms and get a thorough understanding of the same </td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Implement general RLE, Huffman Encoding for compression & decompression </td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Implement general LZ77 Algorithm for compression & decompression
 </td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Implement general LZ78 Algorithm for compression & decompressio</td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Implement general LZW Algorithm for compression & decompression
</td>
    </tr>
    <tr>
      <td>Week 7</td>
      <td>Catch Up on incomplete work</td>
    </tr>
    <tr>
      <td>Week 8</td>
      <td>Report of results with different compression algorithms when used alone or when compounded among each other. </td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
