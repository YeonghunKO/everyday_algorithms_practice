/**
 * 연속하는 자연수!
 * 1 + 2 + 3 + 4 + 5 = 15
   4 + 5 + 6 = 15
   7 + 8 = 15
   15 = 15

   ==> 정답 = 4

    n/k 가 자연수이려면 : k는 n의 약수여야 한다.
    (1-k)/2 가 정수가 되려면 : 1-k 가 짝수여야 하므로 k는 홀수여야 한다.
    k < n
 */

function findDivisor(numb) {
  const result = [];
  for (let i = 1; i <= numb; i++) {
    if (numb % i === 0) {
      result.push(i);
    }
  }

  return result;
}

function solution(number) {
  let 정답 = [];

  for (const element of findDivisor(number)) {
    if ((element - 1) % 2 === 0) {
      정답.push(element);
    }
  }

  return 정답.length;
}

console.log(solution(15));

// 참고 : https://velog.io/@younge/Python-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%88%AB%EC%9E%90%EC%9D%98-%ED%91%9C%ED%98%84-%EC%97%B0%EC%8A%B5%EB%AC%B8%EC%A0%9CLevel-2
