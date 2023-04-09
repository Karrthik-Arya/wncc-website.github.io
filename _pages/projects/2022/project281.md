---
layout: project
title: Seasons of Code
project: YOLO-Cam-Object Detection based Analytics
topics:
    - Machine Learning
mentors:
    - Aryan Goyal
    - VIDHAN JAIN
    
mentees:
- 5-6
    
permalink: /soc/projects/2023/project281
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
       The goal of this project is to implement object detection using the YOLO (You Only Look Once) model and use CCTV footage as our video input to detect objects, people, and count them. Object detection is a computer vision task that involves identifying and localizing objects in an image or video. YOLO is deep learning based object detection algorithm that is widely used due to its speed and accuracy. <br>

The CCTV footage will be used as our video input for this project. We may use open-source libraries like OpenCV and TensorFlow/Pytorch. 

The first step of this project will be to collect and preprocess the CCTV footage. We will need to ensure that the footage is of high quality and that it contains the objects we want to detect. We will then need to extract frames from the footage at regular intervals and preprocess them for use in the YOLO model.<br>

Next, we will use the YOLO model to detect objects and people in the frames. YOLO will output a set of bounding boxes and class probabilities for each detected object. We will use these outputs to identify the type of object detected and count the number of people in the frame.

Finally, we will visualize the results of the object detection in the CCTV footage. We will draw bounding boxes around the detected objects and people and display the count on the screen. This will allow us to monitor the CCTV footage in real-time and detect any anomalies or potential security threats.<br>

In conclusion, this project aims to implement object detection using the YOLO model and use CCTV footage as our video input to detect objects, people, and their count. This can be useful for monitoring security cameras, analyzing customer behavior in retail stores, or traffic surveillance.<br>
<br>

        
<br>
Prerequisites:
None or any background in python and ML is appreciated
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
      <td  >Week 1</td>
      <td>Learn Python basics: Python is a popular language used in machine learning and computer vision. Start by learning the basics of Python programming language. You can take an online course or tutorial to learn the basics. </td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td> Learn basics of object detection: Learn the basics of object detection and its importance in computer vision. There are plenty of resources available online, including videos and articles, that can help you understand the fundamentals of object detection.</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Learn about the YOLO model: YOLO (You Only Look Once) is a popular object detection algorithm. You can learn about the YOLO model by reading research papers or online tutorials.</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td> Collect and preprocess data: Collect CCTV footage and use free video editing tools like Shotcut to extract frames from the video. You can then use free image processing tools like GIMP to crop and resize the images for better results.</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Label the data: Use a free labeling tool like LabelImg to draw bounding boxes around the objects you want to detect in the images. You can also use this tool to label the images with the appropriate class.g</td>
    </tr>
     <tr>
      <td>Week 6</td>
      <td>Train the model: You can use pre-trained weights for the YOLO model or train it from scratch using a tool like Darknet. You can find step-by-step tutorials on how to train the YOLO model online</td>
    </tr>
     <tr>
      <td>Week 7</td>
      <td>Evaluate the model: Evaluate the performance of the trained model using metrics like precision, recall, and F1-score. You can find online tutorials on how to do this.</td>
    </tr>
     <tr>
      <td>Week 8</td>
      <td>Detect objects in CCTV footage: Use the trained model to detect objects in the CCTV footage. Use a tool like OpenCV to extract frames from the video and pass them through the model.</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
 