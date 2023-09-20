
let xpos = 100;


function setup() {
    createCanvas(600, 600)
}

function draw() {

    background(200, 20, 20)

    // rect(xpos, 10, 30, 30)
    // rect(xpos, 50, 30, 30)
    // rect(xpos, 90, 30, 30)

    rect(mouseX, mouseY, 30, 30);
   //print(mouseX, mouseY);

   if(mouseX > width/2){
    fill(10, 200, 20)

    //if和rect的位置前后换一下之后会出现在左半边方框为白色，右半边方框为我们设置的颜色的情况
   } else{
    fill(255);
   }


   if(mouseX > height/2){
    fill(200, 10, 200)
   } else{
    fill(255);
   }


   if(mouseX > width/2){
    if(mouseX > height/2) {
    fill(200, 10, 200)
   } else{
    fill(0, 255, 0);
    }
} else{
    if(mouseX > height/2){
        fill(10,10,200);
    } else{
        fill(255);
    }

}
}