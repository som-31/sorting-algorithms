console.log('this is insertion sort');

function insertionSort(array){
    //duplicate an array
    const sortedArray = array.slice();
    // outer Loop for selecting the element
    for (let i = 0; i < sortedArray.length; i++) {

        //inner loop to compare and swap
        for (let j = i; j > 0; j--) {
            if(sortedArray[j] < sortedArray[j-1]){
                [sortedArray[j], sortedArray[j-1]] = [sortedArray[j-1], sortedArray[j]];
            }else{
                break;
            }
        }
    }
    return sortedArray;
}

const unSortedArray = [2,4,5,121,442,1,2,56,6,565,7];
console.log(insertionSort(unSortedArray));