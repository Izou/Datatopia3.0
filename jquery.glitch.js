/* 
 jquery.glitch.js ~ v0.1.1 ~ Copyright (c) 2011, AkihikoTaniguchi(http://okikata.org/)
 */

(function($){
    $.fn.glitch = function(spot){
        var defaults = {};
        this.each(function(){
            var img_path = $(this).attr("src");
            var _target = this;
             //$(window).bind('load', function(){//ã“ã®ã„bindã„ã‚‰ã‚“ã‹ã‚‚ã€‚ã©ã†ã‹ãªãƒ¼
            draw(_target, img_path, spot);
             // });
        });
        
        return this;
    };
})(jQuery);

function draw(_target, img_path, spot){
    $("body").append("<canvas id ='c1'></canvas>")
    $("canvas").css({
        "display": "none"
    });
    var canvas = document.getElementById('c1');
    
    canvas.width = $(_target).width();
    canvas.height = $(_target).height();
    
    if (!canvas || !canvas.getContext) {
        return false;
    }
    var ctx = canvas.getContext('2d');
    var img = new Image();
    img.src = img_path;
    //img.onload = function(){//ã„ã‚‰ã‚“ã‹ãªãƒ¼ã©ã†ã‹ãªãƒ¼
    ctx.drawImage(img, 0, 0);
    imgdata = document.getElementById("c1").toDataURL("image/jpeg");
    glitch(_target, imgdata, spot);
    //}
}

function glitch(_target, imgdata, spot){
    var last = "";
    var slice = imgdata.replace("data:image/jpeg;base64,", "");
    
    var _spot = spot;
    
    for (var i in slice) {
        if (i == _spot) {
            var r = Math.floor(Math.random() * 9);
            last += r;
        }
        else {
            last += slice[i];
        }
    }
    
    var output = "data:image/jpeg;base64," + last;
    setimg(_target, output);
}

function setimg(_target, output){
    $(_target).attr("src", output);
}
