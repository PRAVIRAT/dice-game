var randomNumber1 = Math.floor(Math.random()*6)+1;

$(".img1").on("click" , function(){
    $(".img1").attr("src" , "images/dice" +randomNumber1 +".png");
});

var randomNumber2 = Math.floor(Math.random()*6)+1;

$(".img2").on("click" , function(){
    $(".img2").attr("src" , "images/dice" +randomNumber2 +".png");
})

$(".img2").on("click" , function(){
    if(randomNumber1===randomNumber2){
        $("h1").text("Match Drawn !");
    }
    
    else if(randomNumber1>randomNumber2){
        $("h1").html("Player 1 Wins $");
    }
    
    else if(randomNumber1<randomNumber2){
        $("h1").text("Player 2 Wins $");
    }
});

