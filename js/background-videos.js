var vid = document.getElementsByClassName("video-pause");
var pauseButton = document.getElementsByClassName("pause-button");
function vidFade() {
  vid[0].classList.add("stopfade");
}
vid[0].addEventListener('ended', function() {
  // only functional if "loop" is removed
  vid[0].pause();
  // to capture IE10
  vidFade();
});
pauseButton[0].addEventListener("click", function() {
  vid[0].classList.toggle("stopfade");
  if (vid.paused) {
    vid[0].play();
    pauseButton[0].innerHTML = "Pause";
  } else {
    vid[0].pause();
    pauseButton[0].innerHTML = "Lecture";
  }
})

function vidFade() {
  vid[1].classList.add("stopfade");
}
vid[1].addEventListener('ended', function() {
  // only functional if "loop" is removed
  vid[1].pause();
  // to capture IE10
  vidFade();
});
pauseButton[1].addEventListener("click", function() {
  vid[1].classList.toggle("stopfade");
  if (vid.paused) {
    vid[1].play();
    pauseButton[1].innerHTML = "Pause";
  } else {
    vid[1].pause();
    pauseButton[1].innerHTML = "Lecture";
  }
})

function vidFade() {
  vid[2].classList.add("stopfade");
}
vid[2].addEventListener('ended', function() {
  // only functional if "loop" is removed
  vid[2].pause();
  // to capture IE10
  vidFade();
});
pauseButton[2].addEventListener("click", function() {
  vid[2].classList.toggle("stopfade");
  if (vid.paused) {
    vid[2].play();
    pauseButton[2].innerHTML = "Pause";
  } else {
    vid[2].pause();
    pauseButton[2].innerHTML = "Lecture";
  }
})
