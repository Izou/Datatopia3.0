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

// Pause
  var audios = $('audio');
  for (var i = 0; i < audios.length; i++){
    audios.get(i).pause();
  }

  // Find associated audio
  var audio = $('audio[data-slide-id=' + index + ']');
  if(audio.length > 0) {
    audio.get(0).play();
  }
};