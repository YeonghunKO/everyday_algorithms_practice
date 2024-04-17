/**
 *매일 한 가지 제품을 할인하는 행사를 합니다. 할인하는 제품은 하루에 하나씩만 구매할 수 있습니다. 
 알뜰한 정현이는 자신이 원하는 제품과 수량이 할인하는 날짜와 10일 연속으로 일치할 경우에 맞춰서 회원가입을 하려 합니다.

 * want: ["banana", "apple", "rice", "pork", "pot"]
 * number: [3, 2, 2, 2, 1]
 * [3,2,2,2,1]
 * discount: ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]
 * result: 3  셋째 날, 넷째 날, 다섯째 날부터 각각 열흘은 원하는 제품과 수량이 일치하기 때문에 셋 중 하루에 회원가입을 하려 합니다.
 * 
 * 
 * ["apple"]
 * [10]
 * ["banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana"]
 * 0
 * 
 * psudo code
 * 1. want의 값에 number를 매핑
 * 1. discount를 루핑함
    * 슬라이딩 윈도우 기법을 사용해야할 것 같다.
    * i,j두개의 포인트를 가지고 범위를 정하고 범위안에서만 루핑을 한다. ==> 창문 처음과 끝을 정하고 열고 닫는 이미지를 생각하면 됨
    * i = 0 , j = i+10 으로 값을 할당하고 i의 값을 1씩 증가시킴
    * 창문안에 있는 값을 루핑하면서 want에 매핑된 숫자를 하나씩 차감시킴
    * 만약 한사이클을 다 돌았을때 want에 매핑된 값이 0이면 result배열에 i를 push함.
    * 
우와 진짜 신기하네..
 유의점
 1. 일단 구현해놓고 생각해보기
 1. 차감할때 실제 want에 있는 것을 차감하면 안될것 같다. 사이클 돌때마다 want를 복사한다음 복사본을 차감? 
 1. 한 사이클을 돈 다음에 want에 있는 값을 돌면서 모두 0인지 확인해야함. 그럼 이중 루핑이 되는데 이걸 어떻게 개선하나?
    1. want에 number를 매핑하지 말고 number를 모두 합쳐서 차감할 수 는 없나??


 */

const want = ["banana", "apple", "rice", "pork", "pot"];
const number = [3, 2, 2, 2, 1];
[1, 0, 0, 0, 1];

/**
 * chicken = 1
 * apple = 4
 * banana = 4
 * rice = 2
 * port =  2
 * pot = 1
 */
const discount = [
  "chicken",
  "apple",
  "apple",
  "banana",
  "rice",
  "apple",
  "pork",
  "banana",
  "pork",
  "rice", //10
  "pot",
  "banana",
  "apple",
  "banana",
];

/**
 * <heap>
 * a1:[idx,startPos]
 * a2 : [destRow,DestColumn]
 *
 * startPoint => a2
 * prevStartPoint => a1
 *
 */

function solution(want, number, discount) {
  const originalWant = new Map();
  let copiedWant;

  let result = 0;
  let subSum = 0;

  want.forEach((item, idx) => {
    originalWant.set(item, number[idx]);
  });

  for (let i = 0, j = i + 10; j <= discount.length; i++, j = i + 10) {
    copiedWant = new Map(originalWant);
    subSum = 0;

    for (let k = i; k < j; k++) {
      if (copiedWant.has(discount[k]) && copiedWant.get(discount[k]) > 0) {
        copiedWant.set(discount[k], copiedWant.get(discount[k]) - 1);
      }
    }

    for (const [item, value] of copiedWant) {
      subSum += value;
    }

    if (subSum === 0) {
      result++;
    }
  }

  return result;
}

solution(want, number, discount);
