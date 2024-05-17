/**
완전탐색을 시작,
여기서 count가 dungeons의 길이와 같다면 길이를 리턴 아니면 계속 루핑하면서 찾아감.
​
1 2 3
1 3 2
2 1 3
2 3 1
3 1 2
3 2 1
*/

const k = 80;
const dungeons = [
  [80, 20],
  [50, 40],
  [30, 10],
];

function permutation(arr, r = arr.length) {
  let answer = [];
  let ch = Array.from({ length: arr.length }, () => 0);
  let temp = Array.from({ length: arr.length - 1 }, () => 0);
  function dfs(level) {
    if (level === r) {
      answer.push(temp.slice());
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          temp[level] = arr[i];
          dfs(level + 1);
          ch[i] = 0;
        }
      }
    }
  }

  dfs(0);
  return answer;
}

function solution(k, dungeons) {
  let answer = 0;
  let tempAnswer = 0;
  let tempK = k;
  const possibleCases = permutation(
    Array.from({ length: dungeons.length }, (_, index) => index)
  );

  for (let i = 0; i < possibleCases.length; i++) {
    for (let j = 0; j < possibleCases[i].length; j++) {
      const singleCase = possibleCases[i][j];
      const [minHP, consumeHP] = dungeons[singleCase];

      // console.log(minHP, consumeHP);
      if (tempK < minHP) {
        break;
      }
      tempK -= consumeHP;
      tempAnswer++;
    }
    tempK = k;

    // console.log("tempAnswer", tempAnswer);
    answer = Math.max(answer, tempAnswer);
    tempAnswer = 0;
    // console.log(`${i + 1} cycle clear`);
    if (answer === dungeons.length) {
      break;
    }
  }
  return answer;
}

function solution2(k, d) {
  const N = d.length;
  const visited = new Array(N).fill(0);
  let ans = 0;

  function dfs(k, cnt) {
    ans = Math.max(cnt, ans);

    for (let j = 0; j < N; j++) {
      if (ans === d.length) {
        break;
      }
      if (k >= d[j][0] && !visited[j]) {
        visited[j] = 1;
        dfs(k - d[j][1], cnt + 1);
        visited[j] = 0;
      }
    }
  }

  dfs(k, 0);
  return ans;
}
console.log(solution2(k, dungeons));
