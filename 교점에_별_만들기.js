function getIntersectionFromLines([A, B, E], [C, D, F]) {
  const x = (B * F - E * D) / (A * D - B * C);
  const y = (E * C - A * F) / (A * D - B * C);
  return x % 1 == 0 && y % 1 == 0 ? [x, y] : null;
}

function solution(line) {
  const answer = [];

  const intersectionPoints = {};

  let upLimit = Number.MIN_SAFE_INTEGER;
  let downLimit = Number.MAX_SAFE_INTEGER;
  let leftLimit = Number.MAX_SAFE_INTEGER;
  let rightLimit = Number.MIN_SAFE_INTEGER;

  for (
    let standardLineIdx = 0;
    standardLineIdx < line.length;
    standardLineIdx++
  ) {
    const standardLine = line[standardLineIdx];
    for (
      let compareLineIdx = standardLineIdx + 1;
      compareLineIdx < line.length;
      compareLineIdx++
    ) {
      const comparedLine = line[compareLineIdx];

      const intersectionPoint = getIntersectionFromLines(
        standardLine,
        comparedLine
      );
      if (intersectionPoint) {
        const [intersectionPointX, intersectionPointY] = intersectionPoint;
        upLimit = Math.max(upLimit, intersectionPointY);
        downLimit = Math.min(downLimit, intersectionPointY);
        leftLimit = Math.min(leftLimit, intersectionPointX);
        rightLimit = Math.max(rightLimit, intersectionPointX);

        if (!intersectionPoints[intersectionPointY]) {
          intersectionPoints[intersectionPointY] = [];
        }
        intersectionPoints[intersectionPointY].push(intersectionPointX);
      }
    }
  }

  let emptyCoord = Array.from(
    { length: rightLimit - leftLimit + 1 },
    (_, idx) => '.'
  ).join('');

  for (let startY = upLimit; startY > downLimit - 1; startY--) {
    if (!intersectionPoints[startY]) {
      answer.push(emptyCoord);
      continue;
    }

    let emptyStr = '';

    for (let startX = leftLimit; startX < rightLimit + 1; startX++) {
      if (intersectionPoints[startY].includes(startX)) {
        emptyStr += '*';
        continue;
      }
      emptyStr += '.';
    }

    answer.push(emptyStr);
  }

  console.log(answer);
  return answer;
}
const line = [
  [2, -1, 4],
  [-2, -1, 4],
  [0, -1, 1],
  [5, -8, -12],
  [5, 8, 12],
];
solution(line);
/*
- pesudo code
0. 교점 arr를 만듬
1. 두 직선사이의 교점을 구하는 함수 만들기(정수만 arr에 포함)
2. 교점이 담긴 arr를 y좌표를 기준삼아 큰것에서 작은것순으로 정렬
3. max Y와 max X를 구함 => for문의 범위를 구하기 위해서
4. y좌표가 같으면 하나로 묶기!
5. max y좌표를 시작으로 -1씩 줄여나가면서 그림을 그려가기.

- 한가운데 중점(0,0)을 기준으로 위아래, 좌우의 최대 범위를 구해야한다.
- 위아래가 첫번째 포문, 좌우가 두번째 포문이 될듯
  - max up(첫번째 포문 시작), max down(첫번째 포문 종점), 
  - max left(두번째 포문 시작), max right(두번째 포문 종점)를 구하기

- 할일
  - 별그리기. 
    - Y좌표를 KEY로 하고 Y좌표상에 존재하는 X좌표의 위치를 VALUE로 해야겠다
*/
