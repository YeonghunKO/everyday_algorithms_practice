/**
 babbling	result


["aya", "yee", "u", "maa"]	1
["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]	2


pseudo code
1. babbling을 looping한다.
 - 글자 하나하나를 replace 한다.
 */

const babbling = ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"];
function solution(babbling) {
  const can = ["aya", "ye", "woo", "ma"];
  let count = 0;

  for (let i = 0; i < babbling.length; i++) {
    let babble = babbling[i];

    for (let j = 0; j < can.length; j++) {
      if (babble.includes(can[j].repeat(2))) {
        break;
      }

      babble = babble.split(can[j]).join(" ");
    }

    console.log("babble", babble);

    if (babble.split(" ").join("").length === 0) {
      count += 1;
    }
  }

  return count;
}

console.log(solution(babbling));
