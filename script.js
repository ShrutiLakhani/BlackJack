
//const firstCard = document.querySelector("#card1");
//const secCard = document.querySelector("#card2");
//const thirdCard = document.querySelector("#card3");
let firstCard = getRandomNumber();
let secCard = getRandomNumber();
let cardArr = [firstCard, secCard];
let sum = firstCard + secCard;

console.log(firstCard);
console.log(secCard);
//console.log(thirdCard);
const btnStart = document.getElementById("btns-start");
var   btnNew = document.getElementById("btns-new");
var cardsEl = document.getElementById("cards-el");
//var sum = 0;
outputVal = document.querySelector("#sum-el");

outputVal1 = document.querySelector("#message-el");

function renderCards()
{
  console.log("comes1");
  for (let i=0;i<cardArr.length;i++)
  {
    cardsEl.textContent += cardArr[i] + " ";
  }
  console.log("comes2");
  drawCard();  
  console.log("comes3");
}
btnStart.addEventListener("click", function() 
{
  console.log("comes4");
  renderCards();
  
})

function getRandomNumber()


{
  console.log("comes5");  
  return Math.floor(Math.random() * 13) + 1;
  
}

function drawCard()
{
  console.log("comes6");
 // const sum += cardArr[i] ;
  sumOfCards(sum);
  console.log("comes7");
outputVal.textContent = "Sum:" + sum; 
}


function sumOfCards(sum)
 {
  console.log("comes8");
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
   btnNew.hidden = false;
  }
  console.log("comes9");
}

btnNew.addEventListener("click", function() 
{
  console.log("comes10");
  console.log("unable to reach here");
  //thirdCard.hidden = false;
  newCard();  
  
})
function newCard()
{
  console.log("comes11");
  let thirdCard = getRandomNumber();
  console.log(thirdCard); 
 // console.log(sum);
  sum += thirdCard;
  cardArr.push(thirdCard);
  
  console.log("comes12");
 // console.log(sum);
  renderCards();
 
// btnNew.disabled = true;
 console.log("comes13");
 drawcard();
console.log("comes14");
}