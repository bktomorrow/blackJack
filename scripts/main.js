/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to 
   write your logic.
*/


function handValue (hand) {
	let valueHand = 0;
	for(let i=0;i<hand.length;i++){
		
		if(!((hand[i] === "K") || (hand[i] === "Q") || (hand[i] === "J") || (hand[i] === "A"))){
			
			valueHand += +hand[i];
		}
		
		else if((hand[i] === "K") || (hand[i] === "Q") || (hand[i] === "J")){
			
			valueHand += 10;
		}
		
		else{
			
			if(i === (hand.length-1)){
				
				if((valueHand + 11) > 21){
					valueHand += 1;
				}
				
				else{
					valueHand += 11;
				}
			}
			
			else{
				
				let j= i+1;
				let currentValue = valueHand;
				
				while(j<hand.length){
					if((hand[j] === "K") || (hand[j] === "Q") || (hand[j] === "J")){
						currentValue += 10;
					}
					
					else if(hand[j] === "A"){
						currentValue += 1;
					}
					
					else{
						currentValue += +hand[j];
					}
					j++;
				}
				
				if((currentValue + 11) > 21){
					valueHand += 1;
				}
				
				else{
					valueHand += 11;
				}
			}
		}
	}
  return valueHand;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/