function getRandomSentence() {
    var index = Math.floor(Math.random() * sentences.length);
    return sentences[index];
  }

  var sentences = [
    "Lets Study",
    "Focus on the journey, not the destination.",
    "It’s only after you’ve stepped outside your comfort zone that you begin to change, grow, and transform.",
    "One day, all your hard work will pay off.",
    "The earlier you start working on something, the earlier you will see results",
    "Do what is right, not what is easy.",
    "We generate fears while we do nothing",
    "If we wait until we’re ready, we’ll be waiting for the rest of our lives.",
    "It’s never too late to be what you might have been.",
    "You don’t have to be great to start. But you have to start to be great.",
    "Every time you have two choices: continue to sleep with your dreams, or wake up and chase them",
    "An investment in knowledge pays the best interest.",
    "Don't be the same, be BETTER!",
    "Don’t wish it were easier. Wish you were better.",
    "I don’t love studying. I hate studying. I like learning. Learning is beautiful.",
    "To change your life, you must first change your day",
    "Success is not final, failure is not fatal; it is the courage to continue that counts.",
    "There’s no traffic after the extra mile.",
    "Don’t stop until you’re proud.",
  ];
  document.getElementById("quote").innerHTML = getRandomSentence();
  console.log(getRandomSentence());
  function openFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      var buttonFullscreen = document.getElementById("fullscreenImg");
      //buttonFullscreen.style.opacity = 0.3;
      buttonFullscreen.innerHTML = "Exit fullscreen";
    } else {
      if (document.exitFullscreen) {
        var buttonFullscreen = document.getElementById("fullscreenImg"); 
        buttonFullscreen.style.opacity = 1;
        buttonFullscreen.innerHTML = "Fullscreen";
        document.exitFullscreen();
      }
    }
  }

  function getDateTime() {
    var now = new Date();

    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var day = weekday[now.getDay()];
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    if (day.toString().length == 1) {
      day = "0" + day;
    }
    if (hour.toString().length == 1) {
      hour = "0" + hour;
    }
    if (minute.toString().length == 1) {
      minute = "0" + minute;
    }
    if (second.toString().length == 1) {
      second = "0" + second;
    }
    var dateTime = hour + ":" + minute + " " + day;
    return dateTime;
  }
  setInterval(function () {
    currentTime = getDateTime();
    document.getElementById("time").innerHTML = currentTime;
  }, 1000);

/*
function Dropdown(){
  var music = document.getElementById("music2");
  
  if (music.style.display != "block"){
      music.style.display = "block";
  }
  else if(music.style.display = "block"){
      music.style.display = "none";
  }

}
*/