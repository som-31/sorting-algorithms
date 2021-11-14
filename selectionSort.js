function selectionSort(array){
    //duplucate the array
    const arr = array.slice();
    //out for loop 
    for (let i = 0; i < array.length -1; i++) {
        let minimumIndex = i;
        /**
         * inner loop through to compare and swap
         */
        for (let j = i+1; j < array.length; j++) {
                if(arr[j] < arr[minimumIndex]){
                    minimumIndex = j;
                }
        }
        [arr[i], arr[minimumIndex]] = [arr[minimumIndex], arr[i]];
    }
    return arr;
}

const arr = [2,4,5,121,442,1,2,56,6,565,7];
console.log(selectionSort(arr));