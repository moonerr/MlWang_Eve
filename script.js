//Animation the logo



//Canvas set
let b = 0;
let player;
var img1;
var c;
function preload(){
    player = loadSound ("soundmono.wav");
}
function setup(){
    // c=createCanvas(640, 360, P2D);//width, height, mode
    c=createCanvas(1280, 720, P2D)
    const ctx = canvas.getContext('2d')
    // rectMode(CENTER);
    player.loop();
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
    if(!player.isPlaying()) {
        player.play();
    }
    
    var x = mouseX;
    var y = mouseY;
    fill(255,255,255);
    textSize(20);
    text(b, x+20, y-20);
    // console.log(mouseX);
    // console.log(mouseY);

    player.pan(b);

    // balls
    
    var Xs = [0, 0.04*width, 0.255*width, 0.18*width, 0.455*width, 0.6*width, 0.7*width, 0.8*width, 0.7*width, 0.95*width];
    var Ys = [0, 0.4*height, 0.245 * height, 0.65 * height, 0.3*height, 0.4 * height, 0.05*height, 0.3*height, 0.6*height, 0.5*height];
    var r = [0, 0.07 * height, 0.072 * height, 0.05*height, 0.1 * height, 0.04*height, 0.05*height, 0.065*height, 0.115*height, 0.05*width];
    let Colours = [0, color(255, 20, 147, random(50,100)), color(255, 69, 0, random(0,100)), color(255, 255, 0, random(0,100)), color(255, 0, 255, random(0,100)),
        color(0, 250, 154, random(0,100)),color(50, 255, 255, random(0,100)),color(0, 191, 255, random(0,100)),color(255, 165, 0, random(0,100)),
        color(255, 160, 122, random(60,100)),color(0, 0, 205, random(0,100))];

        function lightingOne(n){
            fill(Colours[n+1]);
            circle(Xs[n], Ys[n], r[n]*2);
        }

        function lightingAll(n){
            if(abs(x - Xs[n]) < r[n] && abs(y - Ys[n]) < r[n]) {
                for (let i = 1; i<=9; i++){
                    lightingOne(i);
                }
            }

        }

        for (let i=1; i<=9; i++){
            lightingAll(i);
        }

    
        // var articles = document.querySelectorAll(".contentcontainer");
        // var btns = document.querySelectorAll(".btn");

        // articles.forEach(article => {
        //     var ap = article.scrollTop;
        //     var rp = window.height/3;
        //     var ah = article.offsetHeight;
        //     console.log('ap: '+ ap);
        //     console.log('rp: '+ rp);
        //     console.log('ah: '+ ah);

        //     if (ap <= rp && ap >= rp - ah ){
        //         var btnid = article.id.replace("content","");
                    
        //         // console.log(btnid);
    
        //         btns.forEach(btn => btn.classList.remove('active'));
        //         // console.log(document.getElementById(btnid));
        //         document.getElementById(btnid).classList.add("active");
        //     }
        // });
    

    
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

