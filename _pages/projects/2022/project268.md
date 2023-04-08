---
layout: project
title: Seasons of Code
project: NFTs Where Art and Tech Converge
topics:
    - Network and Cyber Security
mentors:
    - Amit Kumar
    - Divyam Gupta 
    
mentees:
- 8
    
permalink: /soc/projects/2023/project268
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
1 NFTs have gained a lot of popularity in recent years. We will develop an NFT
a marketplace that allows users to buy, sell, and trade unique digital assets like art, music,
and collectibles. 
<br>
2 By learning about blockchain development, you will have the opportunity to create smart contracts for our website and app, and as a result, gain exposure to web and app development as a complementary skill set.
<br>
3 The resources for the learning are as follows:- 
    (i) https://anders.com/blockchain/
    (ii) https://www.udemy.com/course/solidity-smart-contract-development/
    (iii) https://www.codewithharry.com/videos/react-tutorials-in-hindi-1/
    (iv) Full Stack Ethereum Dapp Tutorial: https://www.dappuniversity.com/articles/full-stack-ethereum-dapp-tutorial-part-1
    (v) Blockchain Developer Roadmap: https://github.com/web3coach/Blockchain-Developer-Roadmap
<br>
Prerequisites:
As a mentor, here are some pre-requisites that I would expect from the mentees:

1 Basic Programming Skills: It is helpful if my mentees have a basic understanding of programming concepts, such as variables, data types, control structures, and functions.

2 Familiarity with JavaScript: JavaScript is a popular programming language that is commonly used in blockchain development, so having some experience with JavaScript would be beneficial.

3 Understanding of Web Development: Since blockchain applications often require a front-end interface, my mentees should have a basic understanding of HTML, CSS, and web development concepts.

4  Knowledge of Blockchain Basics: My mentees should have a basic understanding of blockchain technology and how it works, including the concepts of distributed ledgers, consensus algorithms, and smart contracts. Just the roadmap OfCourse

5 Familiarity with Solidity: Solidity is the primary programming language used for writing smart contracts on the Ethereum blockchain.

6 Understanding of Cryptography: Cryptography is an essential aspect of blockchain technology, so your mentees should have a basic understanding of cryptographic concepts, such as public and private keys, hashing, and digital signatures.


Don't worry if you don't know some of these, I and my co-mentor will make you learn all of these and help you at all the points        <br>
    </p>
</div>
<div class = "d-flex flex-wrap">
<div>
    <h4 class="display3" style="margin:80px 0px 40px 0px;">Tentative Timeline :</h4>
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
      <td>Research and ideation: Research existing NFT projects and brainstorm ideas for a unique NFT project. Develop a project plan: Define project goals, objectives, and deliverables. Create a detailed project plan with timelines and milestones. Determine technical requirements: Identify the tools, software, and platforms required to develop and deploy the NFT project. Design NFTs: Create designs for the NFTs, including the artwork and any other visual elements.
</td>
    </tr>
    <tr>
      <td>Week 3-4</td>
      <td>Develop smart contracts: Write and deploy smart contracts using a suitable blockchain platform like Ethereum. You can use Solidity to write smart contracts Implement smart contract tests: Test the smart contracts using different testing frameworks like Truffle or Remix. Integrate NFTs with the website or app: Integrate the NFTs with the website or app where they will be sold or used. Develop a wallet: Create a wallet for users to store and manage their NFTs.</td>
    </tr>
    <tr>
      <td>Week 5-6</td>
      <td>Implement a payment gateway: Set up a payment gateway to facilitate the purchase of NFTs.Test the website or app: Test the website or app to ensure that it is functional and user-friendly. Launch the NFT project: Publish the NFT project and promote it to potential buyers. Monitor and maintain the project: Monitor the performance of the NFT project and make any necessary updates or improvements.</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
