/**
3 ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]	[3,3] => 9/3 => 3*3+0 
5 ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]	[0,0]
2 ["hello", "one", "even", "never", "now", "world", "draw"] [1,3] ==> 5번째에서 틀림 5/2 => 2*2+1

몇번째 사람이 몇번째에 탈락했는지.

1. 이미 나온단어 말하며 탈락
2. 앞의 단어의 끝으로 시작 안되면 탈락

포문으로 일단 루핑해야함
- index+1로 조사.
- 글자 이어지는지 확인
- map으로 이미 있는지 확인
- nth를 n으로 나눴을때 나머지가 있으면 [nth&n,n+1] : [nth/n,nth/n]
 */

function solution(n, words) {
  const wordsContainr = new Map();
  let nth = 0;

  for (let i = 0; i < words.length; i++) {
    if (!words[i + 1]) {
      if (wordsContainr.has(words[i])) {
        nth = i + 1;
        console.log("already");
        console.log("words", words[i]);
        break;
      }
    } else {
      if (words[i][words[i].length - 1] !== words[i + 1][0]) {
        nth = i + 2;
        console.log("wrogn");
        console.log("words[i]", words[i]);
        console.log("words[1+1]", words[i + 1]);
        break;
      }
    }
    wordsContainr.set(words[i], words[i]);
  }

  console.log("nth", nth);

  return nth % n ? [nth & n, n + 1] : [nth / n, nth / n];
}

const n = 2;
const words = ["hello", "one", "even", "never", "now", "world", "draw"];

console.log(solution(n, words));
