/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
   const mergedArray = nums1.concat(nums2);
   const sortedArray = mergedArray.sort((a,b) => a - b);
   const length = sortedArray.length;
    const middleIndex = Math.floor(length / 2);

    if (length % 2 === 1) {
    return sortedArray[middleIndex];
    } else {
   
    const middleValue1 = sortedArray[middleIndex - 1];
    const middleValue2 = sortedArray[middleIndex];
    return (middleValue1 + middleValue2) / 2;
  }

    
};