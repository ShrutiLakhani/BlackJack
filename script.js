const firstCard = document.querySelector("#card1");
const secCard = document.querySelector("#card2");
const btnStart = document.getElementById("btns");
var   btnNew = document.getElementById("btns");
outputVal = document.querySelector("#sum-el");
outputVal1 = document.querySelector("#message-el");
btnStart.addEventListener("click", function() 
{
drawCard();
  
})

function drawCard()
{

const sum = Number(card1.value) + Number(card2.value) ;
sumOfCards(sum);
outputVal.textContent = "Sum:" + sum; 
}

function sumOfCards(sum)
{
  
  if (sum == 21)
  {
    
    
    outputVal1.textContent = "You have hit a Jackpot!!!";
  }
  else if (sum > 21)
  {
    
     outputVal1.textContent = "You are out of game!!!";
  }
  else
  {
    
     outputVal1.textContent = "Do you want to draw a new card?!!!";
  }
}

function Newcard()
{
 
}




//const sum = Number(firstCard.value) + Number(secCard.value);
//console.log(sum.value);

