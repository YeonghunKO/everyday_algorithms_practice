/*
* DP:Dynamic Programming: 하나의 큰 문제를 여러개의 작은 문제로 쪼개고 각각의 결과를 저장하여 문제를 해결하는 프로그래밍 기법 
* 여기서 DP는 아래와 같다. 알고리즘이 나오는 과정은 아래 링크 참고
* https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.4-3-x-n-%ED%83%80%EC%9D%BC%EB%A7%81-JS
DP[N] = DP[N-2]*DP[2] + DP[N-4]*2 + DP[N-6]*2 + ... DP[2]*2 + 2
참고로 const DP=[0,3,11]으로 시작. 
n=0 , n=2 , n=4 일 경우 타일을 배치할 수 있는 경우의 수는 각각 0,3,11가지 가 나오기 때문.
EX> N=8인경우 아래와 같이 계산된다.
DP[8] = DP[6] * DP[2] + DP[4] * 2 + DP[2] * 2 + 2 

 */
const MOD = 1000000007;

function solution(n) {
  const dp = [0, 3, 11];
  const idx = n >> 1;

  if (n % 2) return 0;
  if (idx < 3) return dp[idx];

  for (let i = 3; i <= idx; i++) {
    dp[i] = dp[i - 1] * 3 + 2;
    console.log(dp);
    console.log(dp[i]);
    for (let j = 1; j < i - 1; j++) {
      dp[i] += dp[j] * 2;
      console.log(dp[i]);
    }

    dp[i] %= MOD;
  }
  console.log(dp);
  return dp[idx];
}

console.log(solution(8));

/*
psuedo code
- 가로 2 세로 1 [2,1] => 세로 3 가로 n인 바닥을 채우는 방법
- 가로채우기: [1,1,2,2,1,1]
- 세로채우기: [2,1]

가로
1,1,1,1
1,1,2
2,1,1
2,2
1,2,1

세로
2,1
1,1,1
1,2

*/
