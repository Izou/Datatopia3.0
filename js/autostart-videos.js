// Auto start videos
window.onSlideChange = function(index) {
  console.log("SLIDING TO", index);

  // Pause all videos
  var videos = $('video');
  for(var i = 0; i < videos.length; i++) {
    videos.get(i).pause();
  }

  // Find associated video
  var video = $('video[data-slide-id=' + index + ']');
  if(video.length > 0) {
    video.get(0).play();
  }
};
