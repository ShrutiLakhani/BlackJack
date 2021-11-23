let cardArr = [card1, card2]
const firstCard = document.querySelector("#card1");
const secCard = document.querySelector("#card2");
const thirdCard = document.querySelector("#card3");
const btnStart = document.getElementById("btns-start");
//var thirdCard = document.getElementById("card3").value;


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
    //console.log("comes here");
    //console.log(firstCard.value);
    //console.log(secCard.value);
    //console.log(thirdCard.value);
    //thirdCard.value = NaN
    //thirdCard = thirdCard || 0; 
   //console.log(secCard.value);
    //console.log(thirdCard.value);
  //console.log(cardArr[0].value);
  //console.log(cardArr[1].value);
  //console.log(cardArr[2].value);
  //console.log(thirdCard.value);
const sum = +(Number(card1.value) + Number(card2.value)+ Number(card3.value));

sumOfCards(sum);
console.log(sum);
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
  }
  else
  {
   outputVal1.textContent = "Do you want to draw a new card?!!!";
  }
}
btnNew.addEventListener("click", function() 
{
console.log("comes here");
thirdCard.disabled = false;
console.log("comes here-1");
newCard();  
})
function newCard()
{
 //let thirdCard = 0; 
 cardArr.push(thirdCard);
 drawcard();
}

