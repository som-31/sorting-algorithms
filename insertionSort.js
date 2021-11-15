console.log('this is insertion sort');

function insertionSort(array){
    //duplicate an array
    const arr = array.slice();
    // outer Loop for selecting the element
    for (let i = 0; i < arr.length; i++) {

        //inner loop to compare and swap
        for (let j = i; j > 0; j--) {
            if(arr[j] < arr[j-1]){
                [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
            }else{
                break;
            }
        }
    }
    return arr;
}

const arr = [2,4,5,121,442,1,2,56,6,565,7];
console.log(insertionSort(arr));