// const record = [0, 0];
// const visited = new Set([]);

// const recordScore = score => {
//   if (score > record[0] || score > record[1]) {
//     const idx = record.indexOf(Math.min(...record));
//     record[idx] = score;
//   }
// };

// const dfs = (cards, start, depth = 0) => {
//   console.log(visited);
//   if (visited.has(start)) {
//     console.log(depth);
//     console.log(start);
//     if (depth) recordScore(depth);
//     return;
//   }
//   visited.add(start);
//   dfs(cards, cards[start - 1], depth + 1);
// };

// const solution = cards => {
//   for (let i = 1; i <= cards.length; i++) {
//     dfs(cards, i);
//     console.log(visited);
//   }

//   return record[0] * record[1];
// };

const cards = [8, 6, 3, 7, 2, 5, 1, 4];
// solution(cards);

// 임의의 상자를 하나 선택하여 선택한 상자 안의 숫자 카드를 확인합니다.
// [8,6,3,7,2,5,1,4]	12
// 1, 4, 7, 8이 속하는 상자의 그룹과 2, 5, 6이 속하는 상자의 그룹과 3이 속하는 상자의 그룹이 존재합니다.
// 따라서 3번 상자를 고르지 않았을 때, 두 번의 시행에서 3과 4를 기록하며 최고 점수 12를 얻을 수 있습니다.

/*
음...
이진 탐색으로 찾아야 하나?
아님, 이중 포인터?

3번을 만약에 처음 골랐다면 3번으로 그냥 끝이 나버린다.


depth는 말그대로 얼마나 dfs가 스택에 쌓여있는가네
그리고 visited.has(start)일때 depth를 측정
즉, 뽑았는데 이미 빈상자일때 depth를 측정하는거네
그러나 이미 앞에서 다 뽑았으면 dfs가 다시 들어가기 전에 visited.has(start)가 true이므로 바로 리턴되어버림

- dfs를 실행시킨다는것은 상자를 열어보고 안에 있는 숫자를 기록한다는 뜻.
psuedo code
- cards안에 있는 모든 원소들을 일단 다 열어야 함으로 dfs를 실행
    - dfs에는 cards,start,depth가 들어감
    - start는 상자안에 있는 숫자이고 depth는 상자를 열은 횟수
    - dfs의 로직을 적어보자
        - visited에 start가 있거나 depth가 0이 아니면 recordScore를 실행
            - record는 record에서 depth보다 작은게 있다 하면 가장 record에서 가장 작은 숫자를 depth로 교체
        - 그게 아니면 visited에 start를 저장하고 dfs에 다음 start랑 depth를 pass함
        

*/

const record = [0, 0];
const visited = new Set();

function recordScore(depth) {
  if (depth > record[0] || depth > record[1]) {
    const idx = record.indexOf(Math.min(...record));
    record[idx] = depth;
  }
}

function dfs(cards, start, depth = 0) {
  // console.log(start);
  if (visited.has(start)) {
    if (depth > 0) {
      recordScore(depth);
    }
    return;
  }

  visited.add(start);

  dfs(cards, cards[start - 1], depth + 1);
}

function solution2(cards) {
  for (let i = 1; i <= cards.length; i++) {
    dfs(cards, cards[i - 1]);
  }

  console.log(record);
}

solution2(cards);
