/**
 * players	callings	result
["mumu", "soe", "poe", "kai", "mine"]	

["kai", "kai", "mine", "mine"]	

["mumu", "kai", "mine", "soe", "poe"]

pseudo code
1. callings를 순회하기
    - 각각의 이름이 몇번 불렸는지 이름과 횟수 매핑하기.
2. 불려진 선수가 최종적으로 위치할 idx가 어딘지 구하기
3. swapElements를 이용해 불려진 이름이 idx에 위치한 선수와 swap되게 하기

 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const swapElements = (array, index1, index2) => {
  const temp = array[index1];

  array[index1] = array[index2];
  array[index2] = temp;
};

swapElements(arr, 2, 6);
console.log(arr);
function solution(players, callings) {}
