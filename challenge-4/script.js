var findMedianSortedArrays = function (nums1, nums2) {
    // Define variables
    let allNums = [];
    let average;
    let firstMiddleNumber;
    let secondMiddleNumber;

    // Add all of the numbers to a single Array
    for (let i = 0; i < nums1.length; i++) {
        allNums.push(nums1[i]);
    }

    for (let i = 0; i < nums2.length; i++) {
        allNums.push(nums2[i]);
    }

    // Sort the numbers
    allNums = allNums.sort((a, b) => a - b);

    let lengthOfArray = allNums.length;

    // Find the average
    if (!Number.isInteger(allNums.length / 2)) {
        average = allNums[Math.round(lengthOfArray - 1) / 2];
    } else {
        firstMiddleNumber = allNums[(Math.round(lengthOfArray) / 2) - 1];
        secondMiddleNumber = allNums[Math.round(lengthOfArray) / 2];

        average = (firstMiddleNumber + secondMiddleNumber) / 2;
    }

    return average;
};