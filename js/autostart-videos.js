// Auto start videos
window.onSlideChange = function(index) {
  console.log("SLIDING TO", index);
  var videoSlide1 = document.getElementById("video-slide-1");
  if(index == 1) {
    videoSlide1.play();
  }
  else {
    videoSlide1.pause();
  }

  var videoSlide2 = document.getElementById("video-slide-2");
  if(index == 2) {
    videoSlide2.play();
  }
  else {
    videoSlide2.pause();
  }

  var videoSlide3 = document.getElementById("video-slide-3");
  if(index == 3) {
    videoSlide3.play();
  }
  else {
    videoSlide3.pause();
  }
};
