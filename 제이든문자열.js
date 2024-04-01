/**
 * "3people unFollowed me"	"3people Unfollowed Me"
 * "for the last week"	"For The Last Week"
 */

function solution(words) {
  return words
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
    })
    .join(" ");
}
// solution("for the last week");
console.log(solution("for the last   week"));
