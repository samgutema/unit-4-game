






















//generate random number at start of game and assign it to magic number #magic-number
//generate hidden crystal numbers 1-12 for each image 
//increment user total score everytime user clicks crystal image
//win game by matching total score #user-total-score
//lose game if total user score is more than magic number

//reset game when user wins or loses 















// document.getElementById("#magic-number")
//generate random number at start of game and assign it to magic number #magic-number 19-120


$(document).ready(function() {
var newGame = true
var magicNumber = ""
var userNumber = ""
var win = 0;
var lose = 0; 
var firstImage = [1, 2,3,4,5,6,7,8,9,10,11,12]
var secondImage = []
var thirdImage = []
var fourthImage = []


 function initializeGame (){
     win = 0;
     lose = 0;
     magicNumber = "";
     userNumber = ""
     firstImage = "";
     secondImage= ""; 
     thirdImage = "";
     fourthImage = "";

     $("#image1, #image2, #image3, #image4, #win, #lose, #magic-number, #user-total-score").empty();
    

 }




 $("#image1, #image2, #image3, #image4").on("click", function() {

    for ( i=0; i < firstImage.length; i++){
        firstImage[i] = Math.floor(Math.random()* 11)+1 ;
    }
 
    
    if (firstImage){

        firstImage + $(this).val(); 

        $("#user-total-score").text(firstImage[i] = Math.floor(Math.random()* 11)+1 + (i++))


    }

    // $("#user-total-score") = 









 });





//  $("#magic-number").on("click", function() {
    magicNumber = (Math.floor(Math.random() * 101) + 19);
    if (magicNumber) {

        magicNumber += $(this).val();
        $("#magic-number").html(magicNumber = (Math.floor(Math.random() * 101) + 19))

    }





//  })
    // magicNumber = (Math.floor(Math.random() * 101) + 19);




    // $("#magic-number").click(function() {

    //         $("#magic-number").replaceWith(magicNumber)

    //    $(magicNumber = (Math.floor(Math.random() * 101) + 19));

         
    })

    //1
    
    //    for ( i=0; i < firstImage.length; i++){
    //    firstImage[i] = Math.floor(Math.random()* 11)+1 ;

       
    

    // $("#image1, #image2, #image3, #image4").click( function(){

    //     $("#user-total-score").replaceWith(firstImage[i] = Math.floor(Math.random()* 11)+1  )

    // })
    //    }

    //2

  
    


//})









    // secondImage = (Math.floor(Math.random() * 11 ) +1 )
    // $("#image2").click(function(){

    //     $("#user-total-score").replaceWith(secondImage)

    // })













//generate hidden crystal numbers 1-12 for each image 




//increment user total score everytime user clicks crystal image
//win game by matching total score #user-total-score
//lose game if total user score is more than magic number

//reset game when user wins or loses 

