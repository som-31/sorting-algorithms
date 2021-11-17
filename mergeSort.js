console.log('This is merge sort');

/**
 * This function will merge 
 * left array and right array
 * @param {*} Left 
 * @param {*} right 
 */
function merge(leftArr, rightArr){
    const sortedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < leftArr.length && rightIndex < rightArr.length){
        const leftEl = leftArr[leftIndex];
        const rightEl = rightArr[rightIndex];

        if(leftEl < rightEl){
            sortedArray.push(leftEl);
            leftIndex++;
        } else {
            sortedArray.push(rightEl);
            rightIndex++;
        }
    }

    return [...sortedArray, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];

}

/**
 * This function will be used to 
 * recursively divide the array
 * @param {*} array 
 */
function mergeSort(array){
    // Edge case for array of length <== 1
    if(array.length <= 1){
        return array;
    }

    const middleIndex = Math.floor(array.length / 2);
    const leftArr = array.slice(0, middleIndex);
    const rightArr = array.slice(middleIndex);

    return merge(
        mergeSort(leftArr),
        mergeSort(rightArr)
    );

}


const unSortedArray = [2,4,5,121,442,1,2,56,6,565,7];
console.log(mergeSort(unSortedArray));