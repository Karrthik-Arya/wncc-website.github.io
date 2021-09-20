
(function ($) {
    'use strict';

    
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

        consoleText(["Web and Coding Club "], 'text',['white'], 'console');
    window.setTimeout(function(){
        $("#console2").css({
            'visibility': 'visible'
        });
        consoleText(["IIT Bombay", "Coders Together Strong", "Turning Caffeine to Code"], 'text2', ['#ffa500'],'console2');
    }, 3500);
    let active = false;
    teamText(['<font color = "lightgreen">WnCC@itc:</font><font color = "blue">~</font>$ ./WnCC-team.sh <br> \
     Reading package lists.         .            .            .            Done <br> \
     Setting up dependency tree <font color = "tomato">tty14</font> <br> \
     Fetched 260 kb in 1s(286 kb/s) <br> \
     Preparing to unpack     .          .           .  <font color = "lightgreen">/managers.gz</font> <br> \
     Adding "Convenrs to <font color = "blue">/usr/bin/tty14/members</font>" <br>\
     Build Successful!<br>\
     <font color = "green">Click on the images to know about the members</font>'],
     ["teamtext"], ["aliceblue"]);
     active = true;
    $("#Karrthik").click(function() {
        teamText(['<font color = "blue">const</font> WnCC {<br>\
             &emsp; <font color = "green">name</font>: Karrthik Arya;<br>\
             &emsp; <font color = "green">type</font>:Convener;<br>\
             &emsp; contact at:\
             <a href="https://www.linkedin.com/in/karrthik-arya-30997320b/"><i class = "ti-linkedin"></i> </a> \
              <a href="https://www.facebook.com/karrthik.arya/"> <i class = "ti-facebook"></i></a> \
              <a href="https://github.com/Karrthik-Arya"> <i class = "ti-github"></i> </a> ; <br>\
             };'], 'teamtext',['white'],);
        active =true;
    });
    $("#DK").click(function() {
        teamText(['<font color = "blue">const</font> WnCC {<br>\
            &emsp; <font color = "green">name</font>: Divyanshi Kamra;<br>\
            &emsp; <font color = "green">type</font>:Manager;<br>\
            &emsp; contact at: \
            <a href="https://www.linkedin.com/in/divyanshi-kamra-36268b1b3/"><i class = "ti-linkedin"></i></a>\
             <a href="https://www.facebook.com/divyanshi.kamra.7/"><i class = "ti-facebook"></i></a>\
             <a href="https://github.com/divyanshikamra"><i class = "ti-github"></i></a>; <br> \
            };'], 'teamtext',['white']);
        active = true;
    });
    $("#Jash").click(function() {
        teamText(['<font color = "blue">const</font> WnCC {<br>\
            &emsp; <font color = "green">name</font>: Jash Kabra;<br>\
            &emsp; <font color = "green">type</font>: Convener;<br>\
            &emsp; contact at: \
             <a href="https://www.linkedin.com/in/jash-kabra-148a32207/"><i class = "ti-linkedin"></i></a> \
             <a href="https://www.facebook.com/JashKabra/"><i class = "ti-facebook"></i></a> \
             <a href="https://github.com/JashKabra"><i class = "ti-github"></i></a> ; <br> \
            };'], 'teamtext',['white']);
        active = true;
    });
    $("#Shruti").click(function() {
        teamText(['<font color = "blue">const</font> WnCC {<br>\
            &emsp; <font color = "green">name</font>: Shruti Singh;<br>\
            &emsp; <font color = "green">type</font>: Manager;<br>\
            &emsp; contact at: \
              <a href="https://www.linkedin.com/in/shruti-singh-a02714195/"><i class = "ti-linkedin"></i></a> \
              <a href="https://www.facebook.com/shruti.s.50364592/"><i class = "ti-facebook"></i></a> \
              <a href="https://github.com/shruhh"><i class = "ti-github"></i></a> ; <br> \
            };'], 'teamtext',['white']);
        active = true;
    });

    $("#Himanshu").click(function() {
        teamText(['<font color = "blue">const</font> WnCC {<br>\
            &emsp; <font color = "green">name</font>: Himanshu Choudhary;<br>\
            &emsp; <font color = "green">type</font>: Convener;<br>\
            &emsp; contact at: \
              <a href="https://www.linkedin.com/in/himanshu-choudhary-26514813a/"><i class = "ti-linkedin"></i></a> \
              <a href="https://www.facebook.com/profile.php?id=100011777830160"><i class = "ti-facebook"></i></a>\
              <a href="https://github.com/HimanshuC22"><i class = "ti-github"></i></a> ; <br> \
            };'], 'teamtext',['white']);
        active = true;
    });

    $("#Subarno").click(function() {
        teamText(['<font color = "blue">const</font> WnCC {<br>\
            &emsp; <font color = "green">name</font>: Subarno Nath Roy;<br>\
            &emsp; <font color = "green">type</font>: Convener;<br>\
            &emsp; contact at: \
              <a href="https://www.linkedin.com/in/subarno-nath-roy-46b73ba/"><i class = "ti-linkedin"></i> </a> \
              <a href="https://www.facebook.com/subarno.nathroy/"><i class = "ti-facebook"></i> </a> \
              <a href="https://github.com/SubarnoNR"><i class = "ti-github"></i> </a> ; <br> \
            };'], 'teamtext',['white']);
        active = true;
    });

    $("#Ishit").click(function() {
        teamText(['<font color = "blue">const</font> WnCC {<br>\
            &emsp; <font color = "green">name</font>: Ishit Garg;<br>\
            &emsp; <font color = "green">type</font>: Convener;<br>\
            &emsp; contact at: \
              <a href="https://www.linkedin.com/in/ishit-garg-a4120b201/"><i class = "ti-linkedin"></i> </a> \
              <a href="https://www.facebook.com/ishit.garg.18"><i class = "ti-facebook"></i> </a> \
              <a href="https://github.com/ishit16"><i class = "ti-github"></i> </a> ; <br> \
            };'], 'teamtext',['white']);
        active = true;
    });

    $("#Sarthak").click(function() {
        teamText(['<font color = "blue">const</font> WnCC {<br>\
            &emsp; <font color = "green">name</font>: Sarthak Mehrotra;<br>\
            &emsp; <font color = "green">type</font>: Convener;<br>\
            &emsp; contact at: \
              <a href="https://www.linkedin.com/in/sarthak-mehrotra-a4a01120b/"><i class = "ti-linkedin"></i> </a> \
              <a href="https://www.facebook.com/sarthak.mehrotra.39750/"><i class = "ti-facebook"></i> </a> \
              <a href="https://github.com/SarthakM320"><i class = "ti-github"></i> </a> ; <br> \
            };'], 'teamtext',['white']);
        active = true;
    });

    $("#Vrinda").click(function() {
        teamText(['<font color = "blue">const</font> WnCC {<br>\
            &emsp; <font color = "green">name</font>: Vrinda Goel;<br>\
            &emsp; <font color = "green">type</font>: Convener;<br>\
            &emsp; contact at: \
              <a href="https://www.linkedin.com/in/vrinda-goel-2956ab209/"><i class = "ti-linkedin"></i> </a> \
              <a href="https://www.facebook.com/vrinda.goel.7967/"><i class = "ti-facebook"></i> </a> \
              <a href="https://github.com/vrinda01go?tab=repositories"><i class = "ti-github"></i> </a>; <br> \
            };'], 'teamtext',['white']);
        active = true;
    });

    $("#Shubh").click(function() {
        teamText(['<font color = "blue">const</font> WnCC {<br>\
            &emsp; <font color = "green">name</font>: Shubh Kumar;<br>\
            &emsp; <font color = "green">type</font>: Convener;<br>\
            &emsp; contact at: \
              <a href="https://www.linkedin.com/in/shubh-kumar-526052b5/"><i class = "ti-linkedin"></i></a> \
              <a href="https://www.facebook.com/profile.php?id=100057361624828"><i class = "ti-facebook"></i></a> \
              <a href="https://github.com/thevaliantthird"><i class = "ti-github"></i></a>; <br> \
            };'], 'teamtext',['white']);
        active = true;
    });

    $("#Shreedhar").click(function() {
        teamText(['<font color = "blue">const</font> WnCC {<br>\
            &emsp; <font color = "green">name</font>: Shreedhar Malpani;<br>\
            &emsp; <font color = "green">type</font>: Convener;<br>\
            &emsp; contact at: \
              <a href="https://www.linkedin.com/in/shreedhar-malpani-23a139209/"><i class = "ti-linkedin"></i> </a> \
              <a href="https://www.facebook.com/ShreedharMalpani28"><i class = "ti-facebook"></i> </a> \
              <a href="https://github.com/shreedharmalpani"><i class = "ti-github"></i> </a>; <br> \
            };'], 'teamtext',['white']);
        active = true;
    });

    $("#Ved").click(function() {
        teamText(['<font color = "blue">const</font> WnCC {<br>\
            &emsp; <font color = "green">name</font>: Ved Khandekar;<br>\
            &emsp; <font color = "green">type</font>: Convener;<br>\
            &emsp; contact at: \
              <a href="https://www.linkedin.com/in/ved-khandekar-29824612b/"><i class = "ti-linkedin"></i></a> \
              <a href="https://www.facebook.com/ved.khandekar.1/"><i class = "ti-facebook"></i></a> \
              <a href="https://github.com/vedk"><i class = "ti-github"></i></a> ; <br> \
            };'], 'teamtext',['white']);
        active = true;
    });

function consoleText(words, id, colors, console_id) {
  if (colors === undefined) colors = ['#fff'];
  var con = document.getElementById(console_id);
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
        if(console_id === "console"){
        $("#"+console_id).empty();
        }
        else{
        waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    }
      
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
}
function teamText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var letterCount = 1;
  var x = 1;
  var target = document.getElementById(id);
  target.setAttribute('style', 'color:' + colors[0]);
  if(active){
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
        letterCount += 6;
      }else if (words[0].substring(letterCount, letterCount+2) === '<f'){
        target.innerHTML = words[0].substring(0, letterCount)
        letterCount += 30;
      }else if (words[0].substring(letterCount, letterCount+2) === '<i'){
        target.innerHTML = words[0].substring(0, letterCount)
        letterCount += 30;
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

