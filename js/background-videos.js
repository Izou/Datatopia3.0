function addButtons(video, pauseButton) {
  video.addEventListener('ended', function() {
    // only functional if "loop" is removed
    video.pause();
    // to capture IE10
    video.classList.add("stopfade");
  });

  pauseButton.addEventListener("click", function() {
    video.classList.toggle("stopfade");
    if(video.paused) {
      video.play();
      pauseButton.innerHTML = "Pause";
    }
    else {
      video.pause();
      pauseButton.innerHTML = "Lecture";
    }
  });
}

var videos = document.getElementsByClassName("video-pause");
var pauseButtons = document.getElementsByClassName("pause-button");
for(var i = 0; i < videos.length; i++) {
  addButtons(videos[i], pauseButtons[i]);
}
