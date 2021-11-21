/**
 * Finding the minimum element in the array
 * and swap it with element in the beginning
 * @param {*} array 
 * @returns 
 */
function selectionSort(array){
    //duplucate the array
    const sortedArray = array.slice();
    //out for loop 
    for (let i = 0; i < array.length -1; i++) {
        let minimumIndex = i;
        /**
         * inner loop through to compare and swap
         */
        for (let j = i+1; j < array.length; j++) {
                if(sortedArray[j] < sortedArray[minimumIndex]){
                    minimumIndex = j;
                }
        }
        [sortedArray[i], sortedArray[minimumIndex]] = [sortedArray[minimumIndex], sortedArray[i]];
    }
    return sortedArray;
}

const unSortedArray = [2,4,5,121,442,1,2,56,6,565,7];
console.log(selectionSort(unSortedArray));