$(function() {
  var degVar = .96;
  var nums = 0;

  //'http://www.gutenberg.org/cache/epub/449/pg449.txt';
  var sFiles = ["son/explications.mp3"];
  //var audio;
  audi();
  function audi() {
    audio = $('audio');
    audio[0].volume = .15;
    audio[0].addEventListener('ended', function (e) {
      audio[0].play();
    });
    audio[0].src = sFiles[0];
    audio[0].load();
    audio[0].play();
  }
  function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  var glitcher = {
    init: function () {
      setTimeout((function () {
        this.canvas = document.getElementById('coucou');
        this.context = this.canvas.getContext('2d');
        this.initOptions();
        this.resize();
        this.tick();
      }).bind(this), 100);
    },
    initOptions: function () {
      this.width = document.documentElement.offsetWidth;
      this.height = window.innerHeight*1;
      this.font = '10vw Avara';
      this.context.font = this.font;
      this.newstr();
          //this.text = "Init";
          this.textnum = 0;
          this.textWidth =(this.context.measureText(this.text)).width;
          this.isNum = 0;
          this.fps = 60;
          this.mNum = 0;
          this.channel = 0; // 0 = red, 1 = green, 2 = blue
          this.compOp = 'lighter'; // CompositeOperation = lighter || darker || xor
          this.phase = 0.0;
          this.phaseStep = 0.05; //determines how often we will change channel and amplitude
          this.amplitude = 0.0;
          this.amplitudeBase = 2.0;
          this.amplitudeRange = 2.0;
          this.alphaMin = 0.8;
          this.glitchAmplitude = 20.0;
          this.glitchThreshold = 0.9;
          this.scanlineBase = 40;
          this.scanlineRange = 40;
          this.scanlineShift = 15;
        },

        tick: function () {
          setTimeout((function () {
            this.phase += this.phaseStep;
            if (this.phase > 1) {
              this.phase = 0.0;
              this.channel = (this.channel === 2) ? 0 : this.channel + 1;
              this.amplitude = this.amplitudeBase + (this.amplitudeRange * Math.random());
            }
            this.render();
            this.tick();
          }).bind(this), 1000 / this.fps);
        },
        newstr: function () {
          this.compOp='darken';
          /*document.body.style.background = 'white';*/
          this.isNum=0;
          wordNum =(wordNum+1)%(textBook.length-20);
          this.text = textBook[wordNum];
          if (this.text.length <= 10) {
            wordNum+=1;
            this.text= this.text+" "+textBook[wordNum];
            if (this.text.length <= 8) {
              wordNum+=1;
              this.text= this.text+" "+textBook[wordNum];
            }
          }
          this.text2=this.text;
          degVar = 1.56;
          modVar=0;
          this.textWidth = (this.context.measureText(this.text)).width;
        },

        strdeg: function (){
          nums = 0;
          for (var i=0;i<this.text.length;i++)
          {
            if (isNumber(this.text.substring(i,i+1))==0){
              if (Math.random() >=degVar-modVar){
               this.text= this.text.substring(0,i)+Math.floor(Math.random()*10)%10+this.text.substring(i+1,this.text.length);
               this.compOp='lighter';
               this.textWidth = (this.context.measureText(this.text)).width;
            /*document.body.style.background = 'black';*///this.text=this.text.replace(this.text.substring(i,i+1),Math.floor(Math.random()*10));
            modVar-=.10;
            degVar -=.06;
          }
        }
        else {
          nums+=1;
        }
        modVar +=.004;
      }
      if (Math.random()>=.94){
       flashdeg=-1;
       this.flashstr();
     }
     if (nums > .9*this.text.length+(Math.random()*.15)){
      this.isNum=1;
    }
  },

  flashstr: function() {
    if (flashdeg==-1) {
      this.text3 = this.text;
      this.text=this.text2;
      this.textWidth = (this.context.measureText(this.text)).width;
      this.compOp='darken';
      /*document.body.style.background = 'white';*/
      this.isNum=2;
      flashdeg=1;
    }
    if (flashdeg>=.1){
      flashdeg-=Math.random()*.15;
      if (flashdeg<.1){
        this.text = this.text3;
        this.textWidth = (this.context.measureText(this.text)).width;
        this.compOp='lighter';
        /*document.body.style.background = 'black';*/
        this.isNum=0;
      }
    }
  },


  render: function () {
    var x0 = this.amplitude * Math.sin((Math.PI * (-1)*(this.isNum-3)) * this.phase) >> 0, x1, x2, x3;
    if (Math.random() >= this.glitchThreshold) {
      x0 *= this.glitchAmplitude;
    }
    if (Math.random() >= .80) {
      this.fps = (Math.random() * 58) + 6;
          //this.fps = 60;
        }
        if (this.isNum == 0) {
          //if (Math.random() >= decay[this.mNum]) {
          //  this.text = Math.floor((Math.random() * 4600) + 20);
          x0 = Math.random() * 1;
          //  this.isNum = 1;
          //}
          this.strdeg();
        }
        if (this.isNum == 2) {
          this.flashstr();
        }
        if (this.isNum == 1) {
          if (Math.random() > .75) {
            if (Math.random() < .40) {
              //this.text = Math.floor(Math.random() * 99999);
              x0 = Math.random() * 500;
              //this.isNum = 1;
            } else if (Math.random() >= (.5*this.text.length/nums)) {
              this.newstr();

              //this.isNum = 0;
            }
          }
        }
        x1 = this.width - this.textWidth >> 1;
        if (this.isNum == 1) {
          //x1 = Math.random() * this.width;
        }
        x2 = x1 + x0;
        x3 = x1 - x0;
        this.context.clearRect(0, 0, this.width, this.height);
        this.context.globalAlpha = this.alphaMin + ((1 - this.alphaMin) * Math.random());
        switch (this.channel) {
          case 0:
          this.renderChannels(x1, x2, x3);
          break;
          case 1:
          this.renderChannels(x2, x3, x1);
          break;
          case 2:
          this.renderChannels(x3, x1, x2);
          break;
        }
        this.renderScanline();
      },
      renderChannels: function (x1, x2, x3) {
        this.context.font = this.font;
        this.context.fillStyle = "rgb(255,0,0)";
        this.context.fillText(this.text, x1, this.height / 2);
        this.context.globalCompositeOperation = this.compOp;
        this.context.fillStyle = "rgb(0,255,0)";
        this.context.fillText(this.text, x2, this.height / 2);
        this.context.fillStyle = "rgb(0,0,255)";
        this.context.fillText(this.text, x3, this.height / 2);
      },
      renderScanline: function () {
        var y = this.height * Math.random() >> 0,
        o = this.context.getImageData(0, y, this.width, 1),
        d = o.data,
        i = d.length,
        s = this.scanlineBase + this.scanlineRange * Math.random() >> 0,
        x = -this.scanlineShift + this.scanlineShift * 2 * Math.random() >> 0;
        while (i-- > 0) {
          d[i] += s;
        }
        this.context.putImageData(o, x, y);
      },
      resize: function () {
        if (this.canvas) {
          this.canvas.width = document.documentElement.offsetWidth;
          this.canvas.height = window.innerHeight;
        }
      }
    };

    glitcher.init();
    var textBook = "Datatopia 3.0 est un projet de recherche alternatif traitant du détournement des capacités créatives de l’erreur et de l’aléa, deux processus de création souvent mal considérés car maintes fois associés aux limites et à ses fatalités. Aussi, d’après l’Histoire et selon toutes conditions, nous restons toujours et invariablement liés aux limitations, qu’elles soient matérielles ou  humaines ; il est supposable que nous ne pouvons les éviter. Mais à défaut de les surpasser, et afin de revendiquer de nouvelles formes tangibles visuelles, formelles, architecturales ou même sociétales... nous devons réfléchir à comment détourner, réutiliser et combiner les contraintes de l’existant et à les montrer comme des forces créatrices plutôt que des restrictions. Par conséquent, apporter une dose de risque, d’accident et de gravité en essayant volontairement de garder cette disposition à l’inattendu à la surprise recherchant et réutilisant l’imprévu pour mener à bien des œuvres novatrices car inespérées. Datatopia 3.0 est ainsi le fruit d’un hasard actif il incarne la rencontre réfléchie de plusieurs séries causales indépendantes ayant le dessein de fabriquer de nouvelles relations logiques de données pour appréhender sans réserves les ressources créatives de l’existant.".split(" ");
    var wordNum = Math.floor(Math.random()*(textBook.length-20));
    window.onresize = glitcher.resize;
});
