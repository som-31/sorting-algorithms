function generateRandomNumbers(inputSize, max){
    let inputArray = [];
    for(let i = 1; i <= inputSize; i++){
       inputArray.push(Math.floor(Math.random()*max));
    }
    return inputArray;
  }
  
  
  console.log(generateRandomNumbers(25, 9999999));
  