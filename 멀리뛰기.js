/**
 * 1 - 1
 * 2 - 2
 * 3 - 3
 * 4 - 5
 * 
 * 
 * 
 * 
4칸 ==> 5가지
(1칸, 1칸, 1칸, 1칸)
(1칸, 2칸, 1칸)
(1칸, 1칸, 2칸)
(2칸, 1칸, 1칸)
(2칸, 2칸)

3칸 ==> 3가지
(2칸, 1칸)
(1칸, 2칸)
(1칸, 1칸, 1칸)
*/

function solution(n) {
  const dp = [0, 1, 2];

  if (n === 1) {
    return dp[1];
  }

  if (n === 2) {
    return dp[2];
  }

  for (let i = 2; i < n; i++) {
    dp[i + 1] = dp[i] + dp[i - 1];
  }

  console.log(dp);
}

solution(10);
