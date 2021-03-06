//Animation the logo



//Canvas set
let b = 0;
let player;
var img1;
var c;
function preload(){
    player = loadSound ("soundmono2.wav");
}
function setup(){
    // c=createCanvas(640, 360, P2D);//width, height, mode
    c=createCanvas(1280, 720, P2D)
    const ctx = canvas.getContext('2d')
    // rectMode(CENTER);
    
    // player.loop();
    player.setVolume(0.5);
    // image(img1, 0, 0);
    img1= loadImage('sketches/ideal.png');

    //Activate the menu
    var btns = document.querySelectorAll(".btn");
    // console.log(btns);
    btns.forEach(button => {
        button.addEventListener('click', function(){
            btns.forEach(btn => btn.classList.remove('active'));
            this.classList.add("active")
            
        }); 
    });

    // =========================== toggle the list ==================================
    var tog = document.getElementsByClassName("togglelist");
    var i;
    
    for (i = 0; i < tog.length; i++) {
      tog[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        } 
      });
    }



}

function musicSwitch(){
  var but = document.querySelector(".game");

  but.addEventListener("click", function(){

  if(player.isPlaying()){
    but.classList.remove('on');
    but.classList.add("off");
    console.log("from on to "+ but.classList);
    player.pause();
    but.innerHTML="Play the Music";
  }
  else if(!player.isPlaying()){
    but.classList.remove('off');
    but.classList.add("on");
    console.log("from on to "+ but.classList);
    player.play();
    but.innerHTML="Pause the Music";
  }
  });

}

function draw(){
    background(0.0);
    image(img1, 0, 0, width, height);
    cursor(HAND);
    let l1= width/2;
    if (mouseX >=0 && mouseX <= width) {
        l1 = mouseX;
    }
    
    let l2 = width - mouseX;
    if(l1 <= width / 2) {
        b=map(l1, 0, width / 2, -1, 0);
    }
    else {
        b=map(l2, width / 2, 0, 0, 1);
    }
    // if(!player.isPlaying()) {

    //     player.play();
    // }

    let v = map(mouseY, height, 0, 0, 1);
    player.setVolume(v);
    
    var x = mouseX;
    var y = mouseY;
    fill(255,255,255);
    textSize(20);
    text('Horizontally: ' + b, x+20, y-20);
    fill(255, 112, 87);
    textSize(20);
    text("Vertically: "+ v, x, y- 50);
    // console.log(mouseX);
    // console.log(mouseY);

    player.pan(b);


    // mapping RGB
    rgbx = map(mouseX, 0, width, 0, 255);
    rgby = map(mouseY, 0, height, 0, 255);
    bx = map(mouseX, 0, width, 10, 70);
    by = map(mouseX, 0, height,10, 60);

    // balls
    
    var Xs = [0, 0.04*width, 0.255*width, 0.18*width, 0.455*width, 0.6*width, 0.7*width, 0.7998*width, 0.7*width, 0.95*width];
    var Ys = [0, 0.4*height, 0.245 * height, 0.65 * height, 0.3*height, 0.4 * height, 0.05*height, 0.3*height, 0.6*height, 0.495*height];
    var r = [0, 0.07 * height, 0.072 * height, 0.05*height, 0.1 * height, 0.042*height, 0.052*height, 0.0675*height, 0.116*height, 0.0503*width];
    let Colours = [0, color(255, rgbx, 147, abs(by-bx)), color(rgbx, 69, rgby, by), color(255, rgby, 0, 100-bx), color(rgby, 0, 255, by),
        color(150, rgbx, rgby, bx),color(50, rgby, 255, by),color(0, rgbx, 255, bx),color(rgbx, 165, 0, bx),
        color(255, rgby, 122, by),color(0, rgby, 205, by)];
        // let Colours = [0, color(255, 20, 147, random(50,100)), color(255, 69, 0, random(0,100)), color(255, 255, 0, random(0,100)), color(255, 0, 255, random(0,100)),
        //   color(0, 250, 154, random(0,100)),color(50, 255, 255, random(0,100)),color(0, 191, 255, random(0,100)),color(255, 165, 0, random(0,100)),
        //   color(255, 160, 122, random(60,100)),color(0, 0, 205, random(0,100))];
        function lightingOne(n){
            fill(Colours[n+1]);
            circle(Xs[n], Ys[n], r[n]*2);
        }

        function lightingAll(n){
            // if(abs(x - Xs[n]) < r[n] && abs(y - Ys[n]) < r[n]) {
            //     for (let i = 1; i<=9; i++){
            //         lightingOne(i);
            //     }
            // }

            if((width - x) >=0 && (height-y) >=0 ) {
              for (let i = 1; i<=9; i++){
                        lightingOne(i);
                    }
            }

        }

        for (let i=1; i<=9; i++){
            lightingAll(i);
        }


    

    
}



function toggletext(){
    var tog = document.getElementsByClassName("togglelist");
    var i;
    
    for (i = 0; i < tog.length; i++) {
      tog[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        } 
      });
    }
}

