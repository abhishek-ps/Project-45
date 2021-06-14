var boardImg;
var snake1,snake2;
var dice;
var number=1;
var player,playerImg;

function preload(){
    boardImg = loadImage("images/Snakes-Ladders.jpg");
    playerImg = loadImage("images/boy.png")
}

function setup(){
    var canvas = createCanvas(boardImg.width,boardImg.height);
    snake1 = createSprite(650,350,100,100);
    snake2 = createSprite(200,60,100,100);
    player = createSprite(130,900);
    player.addImage(playerImg);
}

function draw(){
    background(0);
    imageMode(CENTER);
    image(boardImg,500,500);

    if(keyWentDown("space")){
        dice = Math.round(random(1,6));
        number = number+dice;
        console.log(dice,number);
        //for positions 1-5
        number = 12;
        //if(player.x<1000 && player.y>850){
         if(number>1 && number<6){
            player.x = player.x+((number-1)*190);
        }

       /* if(number>5 && number<11){
            player.y = 710;
           // player.x = 900;
            player.x = player.x-((number-1)*190);

        }*/

        if(number===6){
            player.x=900;
            player.y=710;
        }

        if(number===7){
            player.x=710;
            player.y=710;
        }

        if(number===8){
            player.x=520;
            player.y=710;
        }

        if(number===9){
            player.x=330;
            player.y=710;
        }

        if(number===10){
            player.x=330;
            player.y=317;
        }

        if(number===11){
            player.x=140;
            player.y=520;
        }

        if(number===12){
            player.x=330;
            player.y=520;
        }

        if(number===13){
            player.x=900;
            player.y=710;
        }
        
       
    }
    drawSprites();
    
   
}

/*function rollDice(){
    return Math.round(random(1,6));
}*/