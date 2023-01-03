(() => {
  // 더 자세한 설명은?
  // https://velog.io/@seungdeng17/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%B9%9B%EC%9D%98-%EA%B2%BD%EB%A1%9C-%EC%82%AC%EC%9D%B4%ED%81%B4-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8

  function solution(grid) {
    const answer = [];

    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    const ch = Array.from({ length: grid.length }, () => []).map(c => {
      for (let i = 0; i < grid[0].length; i++) c.push([0, 0, 0, 0]);
      return c;
    });

    console.log(ch);

    for (let x = 0; x < grid.length; x++) {
      for (let y = 0; y < grid[0].length; y++) {
        for (let d = 0; d < dx.length; d++) {
          if (ch[x][y][d]) continue;
          const cnt = checker(x, y, d);
          if (cnt) answer.push(cnt);
        }
      }
    }

    function checker(x, y, d) {
      let cnt = 0;
      while (true) {
        if (ch[x][y][d]) break;
        console.log(ch);
        ch[x][y][d] = 1;
        cnt++;

        x = x + dx[d];
        y = y + dy[d];
        if (x < 0) x = grid.length - 1;
        if (x >= grid.length) x = 0;
        if (y < 0) y = grid[0].length - 1;
        if (y >= grid[0].length) y = 0;
        d = getNextDir(grid[x][y], d);
      }
      return cnt;
    }

    console.log(answer);
    return answer.sort((a, b) => a - b);
  }

  function getNextDir(block, dir) {
    if (block === 'S') return dir;
    if (block === 'L') return [2, 3, 1, 0][dir];
    if (block === 'R') return [3, 2, 0, 1][dir];
  }

  const grid = ['SL', 'LR']; //[16]
  const grid2 = ['R', 'R'];

  console.log([2, 3, 5, 2, 3].sort((a, b) => a - b).slice(0, 2));
  solution(grid);
  /*
  pseudo code
    * while을 써야 할것 같다. 사이클이 끝날때까지 반복해야하므로(BFS? DFS? 큐?)
    * 1번방향으로 가는 순간이 2번나오는 순간 싸이클이 끝난것이므로 이때 while을 종료
    * 일단은 1행1열에서 2행 1열로 빛을 쏴볼까? 그렇게 하면 총 4군데에서 빛을 쏴야한다.
    * grid안에 있는 원소를 일단 나눠야한다. 각각의 grid에 분배되어있는 것 처럼
    ! 개발자 도구안에 breakpoint를 설정하고 돌려보자
  
  */
})();
