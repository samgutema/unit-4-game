


//generate random number at start of game and assign it to magic number #magic-number
//generate hidden crystal numbers 1-12 for each image 
//increment user total score everytime user clicks crystal image
//win game by matching total score #user-total-score
//lose game if total user score is more than magic number

//reset game when user wins or loses 





//var random_result; 
var magicMum;
var lost = 0;
var win = 0;

// var previous=0 
var userNum=0


var startGame = function () {

    $(".crystals").empty()

    var images = [
        "assets/images/crystal1.jpg",
        "assets/images/crystal2.jpg",
        "assets/images/crystal3.jpg",
        "assets/images/crystal4.jpg"
    ]






    magicMum = Math.floor(Math.random() * 109) + 19;
$("#magic-number").html(magicMum)
    
for (var i = 0; i < 4; i++ ){
    var random = Math.floor(Math.random() *11) +1;

    var crystal = $("<div>"); 
    crystal.attr({
        "class" : "crystal", 
        "data-random" : random
    })

    
   crystal.css({

    "background-image":"url( '" + images[i] + "')", 
    "background-size" : "cover"
   })
  
    $(".crystals").append(crystal)

}
    
}

startGame()

$(document).on("click", ".crystal", function () {
    var num = ($(this).attr("data-random"))

    $("#user-total-score").html(userNum)
    num = parseInt(num)
    userNum += num;

    if (userNum > magicMum){
        lost-- ;
        $("#lose").html(lost)
        startGame()
        userNum = 0
    }

    else if (userNum === magicMum){
        win++;
        $("#win").html(win)
        startGame()
        userNum = 0
    }
})


    









