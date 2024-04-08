/**
길이가 1인 연속 부분 수열로부터 [1, 4, 7, 9] 네 가지의 합이 나올 수 있습니다.
길이가 2인 연속 부분 수열로부터 [2, 5, 10, 11, 16] 다섯 가지의 합이 나올 수 있습니다.
길이가 3인 연속 부분 수열로부터 [6, 11, 12, 17, 20] 다섯 가지의 합이 나올 수 있습니다.
길이가 4인 연속 부분 수열로부터 [13, 15, 18, 21] 네 가지의 합이 나올 수 있습니다.
길이가 5인 연속 부분 수열로부터 [22] 한 가지의 합이 나올 수 있습니다.
이들 중 중복되는 값을 제외하면 다음과 같은 18가지의 수들을 얻습니다.
[1, 2, 4, 5, 6, 7, 9, 10, 11, 12, 13, 15, 16, 17, 18, 20, 21, 22]

[7, 9, 1, 1, 4, 7, 9, 1, 1, 4]
pseudo code
1. addSum 재귀함수를 while문에서 돌리기
2. 
 */

const elements = [7, 9, 1, 1, 4]; // 18

function solution(elements) {
  const circular = elements.concat(elements);
  const set = new Set();
  for (let i = 0; i < elements.length; i++) {
    let sum = 0;
    for (let j = 0; j < elements.length; j++) {
      sum += circular[i + j];
      set.add(sum);
    }
  }
  return set.size;
}

solution(elements);
