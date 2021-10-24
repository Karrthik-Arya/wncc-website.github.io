---
layout: page
title: Code::Blogs
permalink: /blogs/
---

<style>
  .yellow{
    background-color: #FFFF00;
  }
  .card{
    margin: 2em;
    border-radius: 20px;
    background-color: #FFFF00;

  }
  .congrats{
    font-size: 20px;
    line-height: 1.5em;
    color: white;
    padding-top: 1em;
    padding-bottom: 1em;
  }
</style>

<section class = "section">
 <div class="container">
    <div class="card">
      <div class="col-lg-10 container my-auto mx-auto text-center">
        <p class="congrats" style="font-size: 30px; line-height: 1.5em; color: white; margin-bottom: 1em;" >Welcome to the WnCC's Blog Section. Here you can read some interesting tech related experiences of our seniors and learn from them. </p>
      </div>
    </div>
  </div>
  <div class="container mx-auto">
    <div class="card border-success mb-1 mx-auto" style="max-width: 20rem;">
        {% for item in site.data.settings.blog-items %}
        <div class="card-body text-success" data-groups="[{% for soc in item.blog-type %}{% if forloop.first == true %}{% else %},{% endif %}&quot;{{ soc.type }}&quot;{% endfor %}]">
          <div class="shadow-sm rounded hover-wrapper pr-3 pl-3 pt-3 pb-3 bg-white border-top border-right" href="{{site.baseurl}}{{ item.url }}.html" style = "height:350px">
            <a href = "{{ site.baseurl }}{{item.url}}.html">
            <span class="rounded"> <p class="lead text-center font-weight-bold" >{{ item.title }}</p> <img src="{{ site.baseurl }}/{{ item.image }}" alt="{{ item.title }}" class="img-fluid  w-100 d-block mt-5 h-75 rounded"></span>
            <div class="hover-overlay rounded">
            </div>
            </a>
          </div>
          <div class="card-footer bg-transparent border-success"> <p class="lead text-center font-weight-bold card-author" >- Bhaskar Gupta </p> </div>
        </div>
        {% endfor %}
    </div>
  </div>

 </section> 