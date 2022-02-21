/*
For an integer N find the number of trailing zeroes in N!.
Your Task:  
You don't need to read input or print anything. Your task is to complete the function 
trailingZeroes() which take an integer N as an input parameter and returns the count 
of trailing zeroes in the N!.

Expected Time Complexity: O(logN)
Expected Auxiliary Space: O(1)
Constraints:
1 <= N <= 109

   Input:
N = 5
Output:
1
Explanation:
5! = 120 so the number of trailing zero is 1.
Example 2:

Input:
N = 4
Output:
0
Explanation:
4! = 24 so the number of trailing zero is 0.
*/

class Solution {
	trailingZeroes(N) {
		//code here
		let fact = 1;
		for (let i = 1; i <= N; i++) {
			fact = fact * i;
		}
		const arrOfDigits = Array.from(String(fact), Number);
		let countZero = arrOfDigits.filter((item) => item === 0).length;
		if (countZero === 0) {
			return 0;
		}
		return countZero;
	}
}

const newSolution = new Solution();
console.log(newSolution.trailingZeroes(5));
console.log(newSolution.trailingZeroes(4));
console.log(newSolution.trailingZeroes(10));
