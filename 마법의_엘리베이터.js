/*
그냥 종이에 숫자를 더할때 0으로 만들고 그 앞자리에 1을 올리듯이 그렇게 더하기하는 과정을
코딩으로 나타낸 것 뿐이다

예를 들어 16 + 4를 한다고 했을때 6에다가 4를 더하면 1이 10의 자리로 이동한다
그럼 +1 +1 +1 +1을 하고 앞자리에 1을 더하니 2가 된다.
그럼 4번(+1 +1 +1 +1) 움직이고 2번(+10 +10)더 움직이면 된다.
*/
function solution(storey) {
  // 정답 변수
  let result = 0;
  // 자릿수 별 분리
  const splitStorey = String(storey)
    .split('')
    .map(a => Number(a));
  // 자릿수 별 반복

  console.log(splitStorey);
  for (let i = splitStorey.length - 1; i >= 0; i--) {
    const currentNum = splitStorey[i];

    console.log(splitStorey);
    console.log(currentNum);
    console.log(result);
    // 6이상이면 빼는것 보다 0이 될때까지 더한다음 그 앞자리를 하나 올려준다
    if (currentNum > 5) {
      result += 10 - currentNum;
      if (i === 0) {
        result++;
      }
      splitStorey[i - 1]++;
      // 만약 현재 숫자가 5이고 그 앞의 자리 숫자가 5이상이면 +1 +1 +1 +1 +1을 해주고 앞의 자리를 하나 올려준다
    } else if (currentNum === 5 && i > 0 && splitStorey[i - 1] >= 5) {
      result += 5;
      splitStorey[i - 1]++;

      // 4이하이면 그냥 그 수만큼 result에다가 더하면 된다.
    } else {
      result += currentNum;
    }
  }

  console.log(result);

  return result;
}
