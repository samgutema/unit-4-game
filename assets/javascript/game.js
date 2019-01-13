






















//generate random number at start of game and assign it to magic number #magic-number
//generate hidden crystal numbers 1-12 for each image 
//increment user total score everytime user clicks crystal image
//win game by matching total score #user-total-score
//lose game if total user score is more than magic number

//reset game when user wins or loses 















// document.getElementById("#magic-number")
//generate random number at start of game and assign it to magic number #magic-number 19-120


$(document).ready(function () {
    // var newGame = true
    // var magicNumber = ""
    // var userNumber = ""
    var win = 0;
    var lose = 0;
    var firstImage = [8, 10, 11, 12]
    var counter = 0
    var userValue1;
    var userValue2;
    var userValue3;
    var userValue4;


    // function initializeGame() {
    //     win = 0;
    //     lose = 0;
    //     magicNumber = "";
    //     userNumber = ""
    //     firstImage = "";
    //     secondImage = "";
    //     thirdImage = "";
    //     fourthImage = "";

    //     $("#win, #lose, #magic-number, #user-total-score").empty();


    // }
var magicNumber = 0

    // $("#magic-number").html(magicNumber = (Math.floor(Math.random() * 101) + 19))

    $(function () {
       magicNumber = (Math.floor(Math.random() * 101) + 19);
        
            $("#magic-number").text(magicNumber);



        magicNumber = parseInt(magicNumber)
            

    })
    for (var i = 0; i < firstImage.length; i++) {
        firstImage[i] 

    }





$(function () {



    $("#image1").mouseenter (function () {
        $(this).fadeTo(500, .6)
    })
    $("#image1").mouseleave(function () {
        $(this).fadeTo(500, 1)
    })

    $("#image2").mouseenter (function () {
        $(this).fadeTo(500, .6)
    })
    $("#image2").mouseleave(function () {
        $(this).fadeTo(500, 1)
    })

    $("#image3").mouseenter (function () {
        $(this).fadeTo(500, .6)
    })
    $("#image3").mouseleave(function () {
        $(this).fadeTo(500, 1)
    })

    $("#image4").mouseenter (function () {
        $(this).fadeTo(500, .6)
    })
    $("#image4").mouseleave(function () {
        $(this).fadeTo(500, 1)
    })




   

});



    $("#image1, #image2, #image3, #image4").on("click", function () {

        for (i = 0; i < firstImage.length; i++) {
            firstImage[i] = Math.floor(Math.random() * 11) + 1;

            
        }


        if (firstImage) {


            $("#user-total-score").text(firstImage[i] = Math.floor(Math.random() * 11) + 1 + i++)

             var userNumber;
             userNumber =  $(this)
             userNumber = parseInt(userNumber)
            counter += userNumber

        }

        if (counter === magicNumber) {

            $("#win").text(win++)
        }
    
        else if (counter >= magicNumber)  {
            $("#lose").text(lose++)
        }
    
   
    });



  




      // win lose check 
     







   





})



