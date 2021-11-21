/**
 * Compare and swap the elements
 * till all the elements are sorted
 * @param {*} array 
 * @returns 
 */
function bubbleSort(array){
   const sortedArray = array.slice();
   for (let i = 0; i < sortedArray.length - 1; i++) {
       for (let j = 0; j < sortedArray.length -1 -i; j++) {
           if(sortedArray[j] > sortedArray[j+1]){
               [sortedArray[j], sortedArray[j+1]] = [sortedArray[j+1], sortedArray[j]];
           }
       }
   }
   return sortedArray;
}

const unSortedArray = [2,4,5,121,442,1,2,56,6,565,7];
console.log(bubbleSort(unSortedArray));
