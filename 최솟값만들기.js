/**
 *
 * [1, 4, 2] [5, 4, 4] ==> 1*5 + 4*4 + 2*4 = 29 // for loop array.length 만큼 도는것.
 * [1,2] [3,4] ==> 1*4 + 2*3  = 10
 * [3,5,2,1] [7,6,10,2]
 * 1,2,3,5 / 10,7,6,2
 *
 * 제일 작은 수와 제일 큰 수를 곱하면 될까??
 *
 */

function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.reduce((total, val, idx) => total + val * B[idx], 0);
}

const A = [1, 4, 2];
const B = [5, 4, 4];
