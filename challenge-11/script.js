var maxArea = function (height) {
    let leftPointer = 0;
    let rightPointer = height.length - 1;
    let max = 0;

    while (leftPointer < rightPointer) {
        if (height[leftPointer] > height[rightPointer]) {
            max = Math.max(max, height[rightPointer] * (rightPointer - leftPointer));
            rightPointer--;
        } else {
            max = Math.max(max, height[leftPointer] * (rightPointer - leftPointer));
            leftPointer++;
        }
    }

    return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));