/**
 * 
예를 들어, 경화가 수확한 귤 8개의 크기가 [1, 3, 2, 5, 4, 5, 2, 3] 이라고 합시다. 
경화가 귤 6개를 판매하고 싶다면, 크기가 1, 4인 귤을 제외한 여섯 개의 귤을 상자에 담으면, 
귤의 크기의 종류가 2, 3, 5로 총 3가지가 되며 이때가 서로 다른 종류가 최소일 때입니다.

경화가 한 상자에 담으려는 귤의 개수 k와 귤의 크기를 담은 배열 tangerine이 매개변수로 주어집니다. 
s경화가 귤 k개를 고를 때 크기가 서로 다른 종류의 수의 최솟값을 return 하도록 solution 함수를 작성해주세요.


==> [5,4,3,2,1]
pseudo code
1. 모든 크기의 귤이 몇개 있는지 dictionary로 구분
  - 내림차순으로 sort
2. for문으로 순회하면서 k개를 고를때까지 각 크기의 귤을 세기 
  - 셀때마다 answer가 증가
3. k개 만큼 골랐으면 break하고 answer를 리턴
 */

function solution(targetCount, tangerine) {
  let answer = 0;
  const tDict = {};

  tangerine.forEach((tan) => {
    if (tDict[tan]) {
      tDict[tan] = tDict[tan] + 1;
    } else {
      tDict[tan] = 1;
    }
  });

  const sortedDict = Object.values(tDict).sort((a, b) => b - a);

  for (const count of sortedDict) {
    answer++;
    if (targetCount > count) {
      targetCount -= count;
    } else {
      break;
    }
  }
  return answer;
}

solution(6, [1, 3, 2, 5, 4, 5, 2, 3]);
