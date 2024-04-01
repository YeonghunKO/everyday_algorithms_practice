/**
 * "3people unFollowed me"	"3people Unfollowed Me"
 * "for the last week"	"For The Last Week"
 */

function solution(words) {
  words = words.split(" ");

  for (let i = 0; i < words.length; i++) {
    if (i === 0 && Number.isInteger(words[i][0])) {
      continue;
    }

    words[i] = words[i].replace(words[i][0], words[i][0].toUpperCase());
  }

  return words.join(" ");
}

console.log(solution("for the last week"));
