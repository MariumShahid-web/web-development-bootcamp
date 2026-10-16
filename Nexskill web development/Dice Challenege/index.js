let randomNumber1 = Math.floor(Math.random()*6 )+ 1;           // floor used for roundoff number     1---6 number generate   

let randomDiceImage ="dice" + randomNumber1 + ".png";   //dice1.png-dice6.png fetch

let randomImageSource = "images/" + randomDiceImage; //images/dice1.png---dice6.png

let image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

let randomNumber2 = Math.floor(Math.random()*6 )+ 1;           // floor used for roundoff number     1---6 number generate   

let randomDiceImage2 ="dice" + randomNumber2 + ".png";   //dice1.png-dice6.png fetch

let randomImageSource2 = "images/" + randomDiceImage2; //images/dice1.png---dice6.png

let image2= document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);


if(randomNumber1> randomNumber2){
document.querySelector("h1").innerHTML = "Player1 Wins";
}else if(randomNumber2> randomNumber1){
    document.querySelector("h1").innerHTML = "Player2 Wins";
}
else{
     document.querySelector("h1").innerHTML = "Draw";
}