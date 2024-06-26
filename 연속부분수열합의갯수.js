/**
길이가 1인 연속 부분 수열로부터 [1, 4, 7, 9] 네 가지의 합이 나올 수 있습니다.
길이가 2인 연속 부분 수열로부터 [2, 5, 10, 11, 16] 다섯 가지의 합이 나올 수 있습니다.
길이가 3인 연속 부분 수열로부터 [6, 11, 12, 17, 20] 다섯 가지의 합이 나올 수 있습니다.
길이가 4인 연속 부분 수열로부터 [13, 15, 18, 21] 네 가지의 합이 나올 수 있습니다.
길이가 5인 연속 부분 수열로부터 [22] 한 가지의 합이 나올 수 있습니다.
이들 중 중복되는 값을 제외하면 다음과 같은 18가지의 수들을 얻습니다.
[1, 2, 4, 5, 6, 7, 9, 10, 11, 12, 13, 15, 16, 17, 18, 20, 21, 22]

[7, 9, 1, 1, 4, 7, 9, 1, 1, 4]

7 , 7+9 , 7+9+1 , ... , 7+9+1+1+4
9 , 9+1 , 9+1+1 , ... , 9+1+1+4+7
1 , 1+1 , 1+1+4 , ... , 1+1+4+7+9
. 
. 
4 , 4+1 , 4+7+9 , ... , 4+7+9+1+1

요런식으로 진행이 됨.
즉, circular에서 , 1인 연속 부분 , 2인 연속 부분

pseudo code
1. addSum 재귀함수를 while문에서 돌리기
2. 
 */

const elements = [7, 9, 1, 1, 4]; // 18

function solution(elements) {
  const set = new Set();

  const circular = elements.concat(elements);

  for (let i = 0; i < elements.length; i++) {
    let subSum = 0;
    for (let j = 0; j < elements.length; j++) {
      subSum += circular[i + j];
      set.add(subSum);
    }
  }
  return set.size;
}

solution(elements);
