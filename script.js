//  code for player 1
 var randomNumber = Math.floor(Math.random() * 6) + 1 ;
 var imageSource = "images/dice" + randomNumber + ".png";
 var imageOne = document.querySelectorAll("img")[0].setAttribute("src", imageSource);
//  code for player 2
 var randomNumberTwo = Math.floor(Math.random() * 6) + 1 ;
 var imageSourceTwo = "images/dice" + randomNumberTwo + ".png";
 var imageTwo = document.querySelectorAll("img")[1].setAttribute("src", imageSourceTwo);

 if(imageSource > imageSourceTwo){
     document.querySelector("h1").innerHTML = "Player 1 Wins🚩"
 }
 else if(imageSource < imageSourceTwo){
    document.querySelector("h1").innerHTML = "🚩Player 2 Wins"
}
else{
    document.querySelector("h1").innerHTML = "Draw !"
}







 