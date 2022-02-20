/*
Given an array of size N-1 such that it only contains distinct integers in the range of 1 to N. 
Find the missing element.

Example 1:
Input:
N = 5
A[] = {1,2,3,5}
Output: 4
Example 2
N = 10
A[] = {6,1,2,8,3,4,7,10,5}
Output: 9
  */
class Solution {
	MissingNumber(array, n) {
		//code here
		let b = [];
		for (let i = 1; i <= n; i++) {
			b.push(i);
		}
		var result = b.filter((item) => array.indexOf(item) === -1);
		return result[0];
	}
}
