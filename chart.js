function sort(){
    var mylist = document.getElementById("algorithm");
    var inputSize = document.getElementById("inputSize").value;
    selectedAlgorithm =  mylist.options[mylist.selectedIndex].text;
    console.log('This is Sorting' + selectedAlgorithm + inputSize);
    array = generateRandomNumbers(inputSize, 9999);
    executionTimeMap = {}
    console.log("unsorted array" + array);
    document.getElementById('unsortedArray').innerHTML = array;
    var start = performance.now();
    let sortedArray = quickSort(array);
    document.getElementById('sortedArray').innerHTML = sortedArray;
    var end = performance.now();
    executionTimeMap["quick"] = end - start
    var start = performance.now();
    mergeSort(array)
    var end = performance.now();
    executionTimeMap["merge"] = end - start
    var start = performance.now();
    bubbleSort(array)
    var end = performance.now();
    executionTimeMap["bubble"] = end - start
    var start = performance.now();
    insertionSort(array)
    var end = performance.now();
    executionTimeMap["insertion"] = end - start
    var start = performance.now();
    heapSort(array)
    var end = performance.now();
    executionTimeMap["heap"] = end - start
    console.log(executionTimeMap);
    var start = performance.now();
    quickSortUsingMedian(array)
    var end = performance.now();
    executionTimeMap["quickSortUsingMedian"] = end - start
    console.log(executionTimeMap);
    var start = performance.now();
    selectionSort(array)
    var end = performance.now();
    executionTimeMap["selectionSort"] = end - start
    console.log(executionTimeMap);
    drawGraph(executionTimeMap)
}
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
function generateRandomNumbers(inputSize, max){
    let inputArray = [];
    for(let i = 1; i <= inputSize; i++){
    inputArray.push(Math.floor(Math.random()*max));
    }
    return inputArray;
}
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
function quickSortUsingMedian(array){
    if(array.length <= 1){
        return array;
    }
    const pivot = medianOfThree(array[0], array[array.length/2],array[array.length-1]);
    const leftArr = [];
    const rightArr = [];
    for (const el of array.slice(0, array.length - 1)) {
        el < pivot ? leftArr.push(el) : rightArr.push(el);        
    }
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}
function medianOfThree(first, mid, last){
    if(first < mid && first < last){
        return first
    } else if(mid < first && mid < last){
        return mid
    } else {
        return last
    }
}
function drawGraph(executionTimeMap){
    var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light1", // "light1", "light2", "dark1", "dark2"
    title:{
        text: "Sorting Algorithm Comparison"
    },
    axisY: {
    includeZero: true
    },
    data: [{
        indexLabelFontColor: "#5A5757",
        indexLabelFontSize: 18,
        indexLabelPlacement: "outside",
        type: "column", 
        dataPoints: [
            { label : "insertion" , y: executionTimeMap["insertion"] },
            { label : "bubble", y: executionTimeMap["bubble"]},
            { label : "heap", y: executionTimeMap["heap"]},
            { label : "selectionSort", y: executionTimeMap["selectionSort"]},
            { label: "quick", y: executionTimeMap["quick"] },
            { label : "merge", y: executionTimeMap["merge"] },
            {label : "quickSortUsingMedian", y: executionTimeMap["quickSortUsingMedian"]},
        ]
    }]
});
chart.render();
}