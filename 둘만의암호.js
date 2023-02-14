/*
 드디어 이 문제를 풀었다!
*/

function solution(s, skip, plusThisIndex) {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const answer = s
    .split('')
    .map(alphabet => {
      let targetIndex = alphabets.indexOf(alphabet);
      for (let count = 1; count <= plusThisIndex; ) {
        targetIndex >= alphabets.length - 1 ? (targetIndex = 0) : targetIndex++;

        if (skip.indexOf(alphabets[targetIndex]) >= 0) {
          continue;
        } else {
          count++;
        }
      }
      //이집트 지진 사망자 3만 3천명 초과!!
      return alphabets[targetIndex];
    })
    .join('');

  // console.log(answer);
}

function solution2(s, skip, index) {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ].filter(c => !skip.includes(c));
  return s
    .split('')
    .map(c => alphabet[(alphabet.indexOf(c) + index) % alphabet.length])
    .join('');
}

// solution('aukks', 'wbqd', 5);
// "aukks"	"wbqd"	5 ==> "happy"
