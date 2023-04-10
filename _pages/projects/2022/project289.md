---
layout: project
title: Seasons of Code
project: InstiNav
topics:
    - Development
mentors:
    - Rishi Tunuguntla	
    - Rishikesh Gunjal
    
mentees:
- 4
    
permalink: /soc/projects/2023/project289
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
    The goal of this project is to develop software for identifying the road/path images for an electric shuttle on a university campus. The project involves building an image segmentation algorithm that can identify the road/path in an image captured by the shuttle's cameras. The image segmentation algorithm will be integrated into the overall system, which will guide the shuttle to its destination.
<br>
The project involves several steps, including data collection, pre-processing, and training the image segmentation model. The image segmentation algorithm will be evaluated and refined based on its accuracy and efficiency. The final product will be tested using a set of new images and deployed on the university campus.
<br>
The project involves learning several key concepts, including image processing, computer vision, and machine learning. The mentees will also learn about software development best practices and version control tools such as Git.
<br>
Here are some articles you can look at, for more insight:
Qusay Sellat, SukantKishoro Bisoy, Rojalina Priyadarshini, Ankit Vidyarthi, Sandeep Kautish, Rabindra K. Barik, "Intelligent Semantic Segmentation for Self-Driving Vehicles Using Deep Learning", Computational Intelligence and Neuroscience, vol. 2022, Article ID 6390260, 10 pages, 2022. https://doi.org/10.1155/2022/6390260
<br>
<br>
Here are some additional resources for mentees:
<br>
GitHub Repo for Image Segmentation in Python: https://github.com/ageitgey/face_recognition
GitHub Repo for Autonomous Driving: https://github.com/udacity/self-driving-car
YouTube Tutorial for Semantic Segmentation with TensorFlow: https://www.youtube.com/watch?v=KtYhJzr8rIU
These resources can help mentees get started with the project and develop a deeper understanding of the concepts involved. 
<br>
Prerequisites:
<br>
MATLAB and Python are the preferred programming languages for this project, and experience with image processing libraries such as OpenCV, PyTorch, or TensorFlow is definitely a plus. However, if you are not confident in these areas, we encourage you to apply still!
        <br>
    </p>
</div>
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
      <td  >Week 1-2</td>
      <td>: Play around with Python/MATLAB with the necessary Image processing libraries</td>
    </tr>
    <tr>
      <td>Week 2-3</td>
      <td>Collect and pre-process the data
</td>
    </tr>
    <tr>
      <td>Week 4-5</td>
      <td>Feature Extraction
</td>
    </tr>
    <tr>
      <td>Week 5-6-7</td>
      <td> Training the model, testing and Feedback</td>
    </tr>
    <tr>
      <td>Week 8</td>
      <td>Buffer</td>
    </tr>
       </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
 