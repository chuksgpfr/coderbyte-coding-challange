//

function SumMultiplier(arr) { 

  // code goes here
  let sum = 0;
  for(i = 0; i < arr.length; i++){
    sum += arr[i];
  }

  sum = sum * 2; 

  let final = false;

  let max = arr.sort((a,b)=>{return b-a})[0]
  let max2 = arr.sort((a,b)=>{return b-a})[1]

  let answer = max2 * max;
  if(answer > sum){
    final = true;
  }

  return final; 


}
   
// keep this function call here 
console.log(SumMultiplier(readline()));
