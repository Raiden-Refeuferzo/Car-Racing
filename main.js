canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car1_width=120;
car1_height=70;
car1_image="car1.png";
car1_x=10;
car1_y=10;
background_image="racing.jpeg";
car2_width=120;
car2_height=70;
car2_image="car2.png";
car2_x=10;
car2_y=100;

function add()
{
background_imgTag=new Image();
background_imgTag.onload=uploadBackground;
background_imgTag.src=background_image;
car1_imgTag=new Image();
car1_imgTag.onload=uploadCar1;
car1_imgTag.src=car1_image;
car2_imgTag=new Image();
car2_imgTag.onload=uploadCar2;
car2_imgTag.src=car2_image;
}

function uploadBackground()
{
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadCar1()
{
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);
}

function uploadCar2()
{
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38')
    {
        console.log("up");
        up();
    }
    if(keyPressed=='40')
    {
        console.log("down");
        down();
    }
    if(keyPressed=='37')
    {
        console.log("left");
        left();
    }
    if(keyPressed=='39')
    {
        console.log("right");
        right();
    }
}