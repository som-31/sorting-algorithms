function bubbleSort(array){
   const arr = array.slice();
   for (let i = 0; i < arr.length - 1; i++) {
       for (let j = 0; j < arr.length -1 -i; j++) {
           if(arr[j] > arr[j+1]){
               [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
           }
       }
   }
   return arr;
}

const arr = [2,4,5,121,442,1,2,56,6,565,7];
console.log(bubbleSort(arr));
