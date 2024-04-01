// "3 2 1 4"	"1 4"
// "-1 -2 -3 -4"	"-4 -1"
// "-1 -1"	"-1 -1"

/**
 * 일단은 3 2 1 4 을 for loop으로 돌림
 * * target = 1
 * min = 999999999
 * max = -99999999
 * ==비교==
 * min = min vs 3 ==> 3
 * max = max vs 3 ==> 3
 * --------------------------------
 * * target = 2
 * min = 3
 * max = 3
 * ==비교==
 * min = min vs 2 ==> 2
 * max = max vs 2 ==> 3
 * --------------------------------
 * * target = 1
 * min = 3
 * max = 3
 * ==비교==
 * min = min vs 1 ==> 1
 * max = max vs 1 ==> 3
 *
 */
function solution(numbers) {
  numbers = numbers.split(" ");
  console.log(numbers);
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < numbers.length; i++) {
    const target = numbers[i];
    min = Math.min(min, target);
    max = Math.max(max, target);
  }

  return `${min} ${max}`;
}

function solution2(s) {
  const arr = s.split(" ");

  return Math.min(...arr) + " " + Math.max(...arr);
}

solution("-1 -2 -3 -4");
