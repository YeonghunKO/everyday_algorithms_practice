/**
예를 들어, 문자열 S = baabaa 라면

b aa baa → bb aa → aa →

의 순서로 문자열을 모두 제거할 수 있으므로 1을 반환합니다.

const str = "hellooo world";
const match = str.match(/(.)\1/);

if (match) {
    console.log(`Found consecutive same characters: ${match[0]}`);  // 출력: Found consecutive same characters: oo
} else {
    console.log("No consecutive same characters found.");
}

1. while문안에서 regex를 통해 연속된 알파벳이 있는지 찾고 
    - 있으면 그 알파벳을 "" 로 replace한다.
        - isSameChar = true
    - 없으면 isSameChar = false로 하고 빠져나온다.


 */

function solution(string) {
  let isLoop = true;
  let original = "helloo";
  let sameChars = false;
  const regexForSameChar = /(.)\1/g;

  while (isLoop) {
    sameChars = string.match(regexForSameChar);
    if (sameChars) {
      sameChars.forEach((char) => {
        string = string.replaceAll(char, "");
      });
      isLoop = true;
    } else {
      isLoop = false;
    }
  }
  return string.length ? 0 : 1;
}
console.log(solution("lloo"));
