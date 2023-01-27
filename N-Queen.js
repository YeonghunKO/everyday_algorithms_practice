/**
 * 출처:https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.3-%EC%B5%9C%EA%B3%A0%EC%9D%98-%EC%A7%91%ED%95%A9-JS-2xs6gra3
 * 우선 개발자 도구 디버깅으로 하나씩 실행되는 모습을 봐라
 *
 * n이 4라고 하자(4 * 4의 보드를 의미)
 * solution안에 있는 for문은 첫번째 row에서 퀸의 column 위치를 하나씩 오른쪽으로 옮겨가면서 dfs를 도는 위치이다.
 * 즉, i = 1이라고 하면 첫번째 행의 첫번째 열에 퀸이 위치했을때 일어날 수 있는 모든 경우의 수를 구하는 것이고,
 * i = 2라고 하면 첫번째 행의 두번째 열에 퀸이 위치했을때 일어날 수 있는 모든 경우의 수를 dfs로 찾아들어가는 것이다
 *
 * dfs안에서의 for문은 두번째 row부터 시작이 된다.
 *  row는 인자에 의해 정해져있고 i는 역시 column의 값이다. 즉 row가(depth이기도 하다) 2이고 i가 1일때
 * 두번째 행의 첫번째 열에 퀸을 두는것과 같다. 이때 board는(만약 solution의 for문의 i가 1이라고 했을때) [0,1,1,0,0] 가 된다
 * 그럼 isValid에서 두번째 if문에 걸리게 된다.(서로 대각선에 위치해있으므로.)
 * 그럼 다시 i가 2로 바뀌면서 [0,1,2,0,0]이 된다
 * 이때는 isValid에서 true가 되면서 dfs가 실행되고 그럼 row가 3이 되면서 3번째 행으로 넘어가게 되는 것이다.
 * 그럼 다시 for문이 시작되고 i = 1일때 board는 [0,1,2,1,0] 이 되는 것이다.
 *
 * 이런식으로 첫번째 열, 첫번째 행에 퀸이 위치해있을때 조건을 만족하는 경우의 수가 있는지 찾는것이다.
 */

function solution(n) {
  let answer = 0;

  const dfs = (board, row) => {
    if (row === n) answer++;
    else {
      for (let i = 1; i <= n; i++) {
        board[row + 1] = i;
        if (isValid(board, row + 1)) dfs(board, row + 1);
      }
    }
  };

  const isValid = (board, row) => {
    for (let i = 1; i < row; i++) {
      if (board[i] === board[row]) return false;
      if (Math.abs(board[i] - board[row]) === Math.abs(i - row)) return false;
    }
    return true;
  };

  for (let i = 1; i <= n; i++) {
    const board = new Array(n + 1).fill(0);
    board[1] = i;
    console.log(board);
    dfs(board, 1);
  }

  return answer;
}

solution(4);
