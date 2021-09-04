
(function ($) {
    'use strict';

    consoleText(["Web and Coding Club <font color = '#ffa500'>IIT Bombay</font>"], 'text',['tomato']);
    let active = false;
    teamText(['<font color = "green">WnCC@itc:</font><font color = "blue">~</font>$ ./WnCC-team.sh <br> \
     Reading package lists.        .         .           .           Done <br> \
     Setting up dependency tree <font color = "tomato">tty14</font> <br> \
     Fetched 260 kb in 1s(286 kb/s) <br> \
     Preparing to unpack . .  .  <font color = "green">/managers.gz</font> <br> \
     Adding "Conevenrs to <font color = "blue">/usr/bin/tty14/members</font>" <br>\
     Build Successful!<br>\
     <font color = "green">Click on the images to know about the members</font>'],
     ["teamtext"], ["black"]);
    $("#Karrthik").click(function() {
        teamText(['const tty14 {<br> &emsp; name: Karrthik Arya;<br> &emsp; type:Convener;<br> &emsp; contacts:<br> &emsp; &emsp; <a href="https://www.linkedin.com/in/karrthik-arya-30997320b/">linkedin</a> <br>  };'], 'teamtext',['tomato']);
        active =true;
    });
    $("#DK").click(function() {
        teamText(['const tty14 {<br> &emsp; name: Divyanshi Kamra;<br> &emsp; type:Manager;<br> };'], 'teamtext',['tomato']);
        active = true;
    });
    $("#Jash").click(function() {
        teamText(['const tty14 {<br> &emsp; name: Jash Kabra;<br> &emsp; type:Convener;<br> };'], 'teamtext',['tomato']);
        active = true;
    });
function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('teamconsole');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}
function teamText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var letterCount = 1;
  var x = 1;
  var target = document.getElementById(id);
  target.setAttribute('style', 'color:' + colors[0]);
  if(active === true){
      clearInterval(timer);
      target.innerHTML = '';
      active =false;
  }
  let timer = setInterval(function() {
      if (words[0][letterCount] === '&'){
        letterCount += 6;
      }else if (words[0].substring(letterCount, letterCount+2) === '<b'){
        target.innerHTML = words[0].substring(0, letterCount)
        letterCount += 5;
      }
      else if (words[0].substring(letterCount, letterCount+2) === '<a'){
        target.innerHTML = words[0].substring(0, letterCount)
        letterCount += 50;
      }else if (words[0].substring(letterCount, letterCount+2) === '</'){
        target.innerHTML = words[0].substring(0, letterCount)
        letterCount += 3;
      }else{
      target.innerHTML = words[0].substring(0, letterCount)
        letterCount += x;
        if (letterCount === words[0].length + 1) {
        clearInterval(timer);
        active =false;
        }
    }

  }, 30)
  
}
    // Sticky Menu
    $(window).scroll(function () {
        if ($('.navigation').offset().top > 100) {
            $('.navigation').addClass('nav-bg');
        } else {
            $('.navigation').removeClass('nav-bg');
        }
    });

    // Background-images
    $('[data-background]').each(function () {
        $(this).css({
            'background-image': 'url(' + $(this).data('background') + ')'
        });
    });

    // background color
    $('[data-color]').each(function () {
        $(this).css({
            'background-color': $(this).data('color')
        });
    });

    // progress bar
    $('[data-progress]').each(function () {
        $(this).css({
            'bottom': $(this).data('progress')
        });
    });


    /* ########################################### hero parallax ############################################## */
    window.onload = function () {

        var parallaxBox = document.getElementById('parallax');
        var
            /* c1left = document.getElementById('l1').offsetLeft,
                       c1top = document.getElementById('l1').offsetTop, */
            c2left = document.getElementById('l2').offsetLeft,
            c2top = document.getElementById('l2').offsetTop,
            c3left = document.getElementById('l3').offsetLeft,
            c3top = document.getElementById('l3').offsetTop,
            c4left = document.getElementById('l4').offsetLeft,
            c4top = document.getElementById('l4').offsetTop,
            c5left = document.getElementById('l5').offsetLeft,
            c5top = document.getElementById('l5').offsetTop,
            c6left = document.getElementById('l6').offsetLeft,
            c6top = document.getElementById('l6').offsetTop,
            c7left = document.getElementById('l7').offsetLeft,
            c7top = document.getElementById('l7').offsetTop,
            c8left = document.getElementById('l8').offsetLeft,
            c8top = document.getElementById('l8').offsetTop,
            c9left = document.getElementById('l9').offsetLeft,
            c9top = document.getElementById('l9').offsetTop;

        parallaxBox.onmousemove = function (event) {
            event = event || window.event;
            var x = event.clientX - parallaxBox.offsetLeft,
                y = event.clientY - parallaxBox.offsetTop;

            /*  mouseParallax('l1', c1left, c1top, x, y, 5); */
            mouseParallax('l2', c2left, c2top, x, y, 25);
            mouseParallax('l3', c3left, c3top, x, y, 20);
            mouseParallax('l4', c4left, c4top, x, y, 35);
            mouseParallax('l5', c5left, c5top, x, y, 30);
            mouseParallax('l6', c6left, c6top, x, y, 45);
            mouseParallax('l7', c7left, c7top, x, y, 30);
            mouseParallax('l8', c8left, c8top, x, y, 25);
            mouseParallax('l9', c9left, c9top, x, y, 40);
        };

    };

    function mouseParallax(id, left, top, mouseX, mouseY, speed) {
        var obj = document.getElementById(id);
        var parentObj = obj.parentNode,
            containerWidth = parseInt(parentObj.offsetWidth),
            containerHeight = parseInt(parentObj.offsetHeight);
        obj.style.left = left - (((mouseX - (parseInt(obj.offsetWidth) / 2 + left)) / containerWidth) * speed) + 'px';
        obj.style.top = top - (((mouseY - (parseInt(obj.offsetHeight) / 2 + top)) / containerHeight) * speed) + 'px';
    }
    /* ########################################### /hero parallax ############################################## */

    // testimonial-slider
    $('.testimonial-slider').slick({
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        arrows: true,
        prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"></button>',
        adaptiveHeight: false,
        autoplay: true,
        autoplaySpeed: 5000,
    });


    // clients logo slider
    $('.client-logo-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Shuffle js filter and masonry
    var jQuery = window.jQuery;
    var Shuffle = window.Shuffle;

    var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
        itemSelector: '.shuffle-item',
        buffer: 1,
        filterMode: Shuffle.FilterMode.ALL
    });

    jQuery('input[name="shuffle-filter"]').on('change', function (evt1) {
        var input1 = evt1.currentTarget;
        let x =0;
        jQuery('input[name="shuffle-filter1"]').on('change', function (evt2){
            x =1;
            var input2 = evt2.currentTarget;
            if(input1.value == "all"){
                myShuffle.filter(input2.value);
            }else if (input2.value == "all"){
                myShuffle.filter(input1.value);
            }
            else{
                myShuffle.filter([input1.value, input2.value]);
            }
        
        });
        if(x == 0){
            myShuffle.filter(input1.value);
        }
    });

    jQuery('input[name="shuffle-filter1"]').on('change', function (evt2) {
        var input2 = evt2.currentTarget;
        let x = 0;
        jQuery('input[name="shuffle-filter"]').on('change', function (evt1){
            x =1;
            var input1 = evt1.currentTarget;
            if(input1.value == "all"){
                myShuffle.filter(input2.value);
            }else if (input2.value == "all"){
                myShuffle.filter(input1.value);
            }
            else{
                myShuffle.filter([input1.value, input2.value]);
            }
        });
        if(x == 0){
            myShuffle.filter(input2.value);
        }
    });
    


    
})(jQuery);

