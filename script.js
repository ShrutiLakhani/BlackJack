let cardArr = [card1, card2]
const firstCard = document.querySelector("#card1");
const secCard = document.querySelector("#card2");
const thirdCard = document.querySelector("#card3");
const btnStart = document.getElementById("btns-start");
var   btnNew = document.getElementById("btns-new");
var sum = 0;
outputVal = document.querySelector("#sum-el");
outputVal1 = document.querySelector("#message-el");
btnStart.addEventListener("click", function() 
{
drawCard();  
})

function drawCard()
{
  const sum = +(Number(card1.value) + Number(card2.value)+ Number(card3.value));

sumOfCards(sum);
outputVal.textContent = "Sum:" + sum; 
}


function sumOfCards(sum)
 {
  if (sum == 21)
  {
   outputVal1.textContent = "You have got a BlackJack!!!";
  }
  else if (sum > 21)
  {
   outputVal1.textContent = "You are out of game!!!";
   btnNew.disabled = true;  
  }
  else if (sum < 21) 
    if (btnNew.disabled == true)
  {
    
    outputVal1.textContent = "You are out of game!!!";
    
  }
  else 
  {
   outputVal1.textContent = "Do you want to draw a new card?!!!";
  }
}

btnNew.addEventListener("click", function() 
{
 thirdCard.hidden = false;
 newCard();  
})
function newCard()
{
 cardArr.push(thirdCard);
 btnNew.disabled = true;
 drawcard();
}

