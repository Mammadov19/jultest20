(function() {
  var audio = new Audio(
    "mp3/digi.mp3" 
  );
  audio.loop = true;
  audio.play();
  var controlBtn = document.querySelector("control");
  document.addEventListener(
    "click",
    e => (audio.paused ? audio.play() : audio.pause())
  );
})();

(function fadeInDiv() {
  var divs = $(".svg");
  var divsize = (Math.random() * 100 + 50).toFixed();
  var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
  var posy = (Math.random() * ($(document).height() - divsize)).toFixed();
  var maxSize = 30;
  var minSize = 8;
  var size = Math.random() * maxSize + minSize;

  var elem = divs.eq(Math.floor(Math.random() * divs.length));

  if (!elem.is(":visible")) {
    elem.fadeIn(Math.floor(Math.random() * 1000), fadeInDiv);
    elem.css({
      position: "absolute",
      left: posx + "px",
      top: posy + "px",
      display: "block"
    });
  } else {
    elem.fadeOut(Math.floor(Math.random() * 1000), fadeInDiv);
  }
})();

// Init
var $ = jQuery;
var animationTime = 20,
    days = 7;
 
$(document).ready(function(){

    // timer arguments: 
    //   #1 - time of animation in mileseconds, 
    //   #2 - days to deadline

    $('#progress-time-fill, #death-group').css({'animation-duration': animationTime+'s'});

    var deadlineAnimation = function () {
        setTimeout(function(){
            $('#designer-arm-grop').css({'animation-duration': '1.5s'});
        },0);

        setTimeout(function(){
            $('#designer-arm-grop').css({'animation-duration': '1s'});
        },4000);

        setTimeout(function(){
            $('#designer-arm-grop').css({'animation-duration': '0.7s'});
        },8000);

        setTimeout(function(){
            $('#designer-arm-grop').css({'animation-duration': '0.3s'});
        },12000);

        setTimeout(function(){
            $('#designer-arm-grop').css({'animation-duration': '0.2s'});
        },15000);
    };

    function timer(totalTime, deadline) {
        var time = totalTime * 1000;
        var dayDuration = time / deadline;
        var actualDay = deadline;

        var timer = setInterval(countTime, dayDuration);

        function countTime() {
            --actualDay;
            $('.deadline-days .day').text(actualDay);

            if (actualDay == 0) {
                clearInterval(timer);
                $('.deadline-days .day').text(deadline);
            }
        }
    }

    var deadlineText = function () {
        var $el = $('.deadline-days');
        var html = '<div class="mask-red"><div class="inner">' + $el.html() + '</div></div><div class="mask-white"><div class="inner">' + $el.html() + '</div></div>';
        $el.html(html);
    }

    deadlineText();

    deadlineAnimation();
    timer(animationTime, days);

    setInterval(function(){
        timer(animationTime, days);
        deadlineAnimation();

        console.log('begin interval', animationTime * 1000);

    }, animationTime * 1000);

});
