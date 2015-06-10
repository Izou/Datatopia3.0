$(function() {
  ong1 = document.getElementById('a1');
  ong2 = document.getElementById('a2');
  ong3 = document.getElementById('a3');
  var video = document.getElementById('video-tab');
  var src = video.getAttribute('src');


  /*
  contenu = document.getElementById('content');

  contenu.innerHTML = "article 1";*/

  function nonactive(){
    ong1.className = "";
    ong2.className = "";
    ong3.className = "";
  }

  function active(moi){
    nonactive(); // nettoyage
    moi.className = "active"; // je deviens active
    video.play();
  }

  ong1.addEventListener("click", function() {
    video.setAttribute('src', '../video/01.wikipedia.mp4');
    active(this);
  });

  ong2.addEventListener("click", function() {
    video.setAttribute('src', '../video/explications.mp4');
    active(this);
  });

  ong3.addEventListener("click", function() {
    video.setAttribute('src', '../video/explications.mp4');
    active(this);
  });
});
