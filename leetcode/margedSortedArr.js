function merge(nums1, m, nums2, n) {
  let i = m - 1; // Pointer for nums1
  let j = n - 1; // Pointer for nums2
  let k = m + n - 1; // Pointer for the merged array

  // Iterate until both arrays are fully traversed
  while (i >= 0 && j >= 0) {
    console.log("i=", i);
    console.log("j=", j);
    console.log(nums1, nums2);
    // Compare elements from the end of both arrays
    if (nums1[i] > nums2[j]) {
      // If element in nums1 is greater, place it at the end of the merged array
      nums1[k] = nums1[i];
      i--;
    } else {
      // If element in nums2 is greater or equal, place it at the end of the merged array
      nums1[k] = nums2[j];
      j--;
    }
    k--;
    console.log(nums1, nums2);
  }

  // If there are remaining elements in nums2, add them to nums1
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
}

const nums1 = [1, 2, 3, 0, 0, 0];
// console.log(nums1.splice(0, 4), nums1);
const nums2 = [2, 5, 6];

console.log(merge(nums1, 3, nums2, 3));
