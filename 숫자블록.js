/**
 * @param {number} begin
 * @param {number} end
 * @returns {number[]} 일단 풀어라
 *
 */

/*
pseudo code
begin과 end를 루프로 돌자
    우선 0으로 채워진 배열을 end만큼 만들자
그리고 1부터 시작!
단 end를 넘어서면 break!
탐욕법으로도 할 수 있을 것 같은 느낌이?
최대로 갈 수 있는 숫자를 일단 구하자.
그리고 n*2 n*3 n*4 n*5 위치에 알맞은 숫자를 각각대입하자
[0,1,2,3,4,5,6,7,8,9,10,...,end]

오!! Math.max를 쓰면 이중포문 안해도 될 것 같은데??

init * 2이 currentIndex 보다 크고 currentIdx를 init으로 나누었을때 나머지가 0이면 init을 할당
아니면 begin을 할당?
 */

/**
 * ! 핵심은 전개되는 과정을 그림이나 표로 나타내기!
 * ! 그리고 시각화된 과정을 보고 반복되는 패턴을 찾기
 * ! 그 패턴을 공식화 하는 방법을 알아내기!
 */

function solution(begin, end) {
  const answer = Array.from({ length: end }, () => 0);
  let maxBlock;
  for (let blockNumber = begin; blockNumber <= end; blockNumber++) {
    if (blockNumber * 2 >= end) {
      maxBlock = blockNumber;
      break;
    }
  }

  const numbersUntilMaxBlock = currentIndex => {
    const numbers = Array.from({ length: maxBlock }, (_, idx) => {
      const init = idx + 1;
      if (init * 2 <= currentIndex && currentIndex % init === 0) {
        return init;
      } else {
        return begin;
      }
    });
    console.log(numbers);
    return numbers;
  };
  for (let blockNumber = begin; blockNumber < end; blockNumber++) {
    answer[blockNumber] = Math.max(...numbersUntilMaxBlock(blockNumber + 1));
  }
  return answer;
}
console.log(2 % 1);
solution(1, 10);

console.log(2);
/*
출처: https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.4-%EC%88%AB%EC%9E%90-%EB%B8%94%EB%A1%9D-JS
최대약수를 이용하는 문제
*/

const getMaxDivisor = n => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0 && n / i <= 1e7) {
      return n / i;
    }
  }
  return 1;
};

function solution2(begin, end) {
  const arr = new Array(end - begin + 1).fill(0);

  for (let i = begin; i <= end; i++) {
    arr[i - begin] = getMaxDivisor(i);
  }

  if (begin === 1) arr[0] = 0;

  return arr;
}
