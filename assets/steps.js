$(function() {
  
  ong1 = document.getElementById('a1');
  ong2 = document.getElementById('a2');
  ong3 = document.getElementById('a3');
  ong4 = document.getElementById('a4');
  ong5 = document.getElementById('a5');
  ong6 = document.getElementById('a6');
  ong7 = document.getElementById('a7');
  ong8 = document.getElementById('a8');
  ong9 = document.getElementById('a9');
  ong10 = document.getElementById('a10');
  ong11 = document.getElementById('a11');
  var video = document.getElementById('video-tab');
  var src = video.getAttribute('src');

  function nonactive(){
    ong1.className = "";
    ong2.className = "";
    ong3.className = "";
    ong4.className = "";
    ong5.className = "";
    ong6.className = "";
    ong7.className = "";
    ong8.className = "";
    ong9.className = "";
    ong10.className = "";
    ong11.className = "";
  }

  function active(moi){
    nonactive(); // nettoyage
    moi.className = "active"; // je deviens active
    video.play();
  }

  ong1.addEventListener("click", function() {
    video.setAttribute('src', './video/01.wikipedia.mp4');
    active(this);
  });

  ong2.addEventListener("click", function() {
    video.setAttribute('src', './video/02.thomasheine.mp4');
    active(this);
  });

  ong3.addEventListener("click", function() {
    video.setAttribute('src', './video/03.gimages.mp4');
    active(this);
  });

    ong4.addEventListener("click", function() {
    video.setAttribute('src', './video/04.simplicissimus.mp4');
    active(this);
  });

    ong5.addEventListener("click", function() {
    video.setAttribute('src', './video/05.codetexte.mp4');
    active(this);
  });

    ong6.addEventListener("click", function() {
    video.setAttribute('src', './video/06.des.mp4');
    active(this);
  });

    ong7.addEventListener("click", function() {
    video.setAttribute('src', './video/07.glitch.mp4');
    active(this);
  });

    ong8.addEventListener("click", function() {
    video.setAttribute('src', './video/08.3D.mp4');
    active(this);
  });

    ong9.addEventListener("click", function() {
    video.setAttribute('src', './video/09.impression.mp4');
    active(this);
  });

    ong10.addEventListener("click", function() {
    video.setAttribute('src', './video/10.mpeg.mp4');
    active(this);
  });

    ong11.addEventListener("click", function() {
    video.setAttribute('src', './video/11.final.mp4');
    active(this);
  });
});
