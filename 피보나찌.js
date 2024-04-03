//0, 1, 1, 2, 3, 5,
function solution(n) {
  const memo = [0, 1, 1];
  if (n === 2) {
    return 1;
  }

  if (n === 3) {
    return 1;
  }
  for (let i = 2; i < n; i++) {
    memo.push(memo[i] + memo[i - 1]);
  }

  return memo[memo.length - 1];
}

console.log(solution(4));
