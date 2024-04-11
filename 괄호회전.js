/** 
*
s	      result
"[](){}"	3
"}]()[{"	2
"[)(]"	    0
"}}}"	    0


psuedo code
* 앞뒤를 구분할 방법을 찾자.
* 아니면 하나하나 실제로 왼쪽으로 이동시킨다음 하나하나 루핑하면서 올바른 괄호인지 확인해보던지.
1-1 2-2 3-3

1 22 33 1
*/

function solution(params) {
  const stack = [];
  let isRight = false;
  let result = 0;
  if (params.length % 2 === 1) {
    return 0;
  }

  for (let i = 0; i < params.length; i++) {
    isRight = true;
    const candidate = params.slice(i) + params.slice(0, i);
    // console.log("candidate", candidate);
    for (word of candidate) {
      if (word === "(" || word === "{" || word === "[") {
        stack.push(word);
      } else {
        const leftWord = stack.pop();
        if (leftWord === "(" && word === ")") continue;
        if (leftWord === "{" && word === "}") continue;
        if (leftWord === "[" && word === "]") continue;
        isRight = false;
        break;
      }
    }
    if (isRight) {
      result++;
    }
  }
  return result;
}

solution("[](){}");
