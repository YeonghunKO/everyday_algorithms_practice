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

      return alphabets[targetIndex];
    })
    .join('');

  console.log(answer);
}

// solution('aukks', 'wbqd', 5);
// "aukks"	"wbqd"	5 ==> "happy"
