/**
 * [2,6,8,14]	168
 */

function nlcm(num) {
  return num.reduce((a, b) => (a * b) / gcd(a, b));
}

function gcd(a, b) {
  return a % b ? gcd(b, a % b) : b;
}

/**
 * 6,2
 */

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(nlcm([2, 6, 8, 14]));
// console.log(gcd(6, 8));
// console.log(nlcm([12, 78, 35, 20, 502, 14, 52, 62]))
// console.log(nlcm([1, 28, 3, 33, 50, 14, 52, 62]))
// console.log(nlcm([33,11,24,17,82,193]))
// console.log(nlcm([33,11,24,17,82,193,7,9,92]))
// console.log(nlcm([1,2,3,5,7,9,11,13])) //90090
// console.log(nlcm([1,2,3,5,7,11,13])) //30030
// console.log(nlcm([2,3,5,7,11,13,26,39])) //30030
// console.log(nlcm([39,26,13,11,7,5,3,2,1])) //30030
