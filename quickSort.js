console.log('This is quick Sort');

/**
 * Pick the last element as Pivot
 * and arrange the elements arount it
 * in a recursive manner
 * @param {*} array 
 * @returns 
 */
function quickSort(array){
    if(array.length <= 1){
        return array;
    }

    const pivot = array[array.length - 1];
    const leftArr = [];
    const rightArr = [];

    for (const el of array.slice(0, array.length - 1)) {
        el < pivot ? leftArr.push(el) : rightArr.push(el);        
    }
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

const unSortedArray = [2,4,5,121,442,1,2,56,6,565,7];
console.log(quickSort(unSortedArray));


