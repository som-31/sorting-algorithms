console.log('This is Heap Sort');
/**
 *  reshaping a binary tree into a Heap data structure
 * @param {*} array 
 * @param {*} length 
 * @param {*} i 
 * @returns 
 */
function heapify(array, length, i){
    let largest = i;
    let left = i*2 + 1;
    let right = left + 1;

    if(left < length && array[left] > array[largest]){
        largest = left;
    }

    if(right < length && array[right] > array[largest]){
        largest = right;
    }

    if(largest != i){
        [array[i], array[largest]] = [array[largest], array[i]];
        heapify(array, length, largest);
    }
    return array;
}

/**
 * Main function to do the comparisons
 * and call the heapify 
 * @param {*} array 
 * @returns 
 */
function heapSort(array){
    let length = array.length;
    let i = Math.floor(length/2 - 1);
    let k = length - 1;

    while(i >= 0) {
        heapify(array, length, i);
        i--;
    }

    while(k >= 0){
        [array[0], array[k]] = [array[k], array[0]];
        heapify(array, k , 0);
        k--;
    }
    return array;
}

const unSortedArray = [2,4,5,121,442,1,2,56,6,565,7];
console.log(heapSort(unSortedArray));

