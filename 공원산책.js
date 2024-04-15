/**
 * park              routes              results
["SOO","OOO","OOO"]	["E 2","S 2","W 1"]	[2,1] //[row,col]
["SOO","OXX","OOO"]	["E 2","S 2","W 1"]	[0,1]
["OSO","OOO","OXO","OOO"]  ["E 2","S 3","W 1"]	[0,0]


--------------------------------

c r
1,3 w 1 0,3
[
    "SOO",
    "XOO",
    "OXO",
    "OOO"
    
    오른쪽 하단 좌표 (3,2)
]


psuedo code
0. 현재 좌표 구하기
1. routes를 좌표로 만들기.
    - ex> 1,0 1,1 ... (routes[0],routes[1])
2. routes를 순회하면서 현재 좌표에서 위치 하나씩 계산하기.
3. return하기
 */

function solution(park, routes) {
  let startPoint;

  // [r c]
  const moveStartPosByDirectionAndDis = {
    N: (distance) => [startPoint[0] - distance, startPoint[1]],
    S: (distance) => [startPoint[0] + distance, startPoint[1]],
    E: (distance) => [startPoint[0], startPoint[1] + distance],
    W: (distance) => [startPoint[0], startPoint[1] - distance],
  };

  const canIMoveInPark = ([row, col]) => {
    if (!park[row]) {
      return false;
    }

    const destCol = park[row].split("")[col];

    if (!destCol || destCol === "X") {
      return false;
    }

    return true;
  };

  park.forEach((row, idx) => {
    const startPosColumn = row.indexOf("S");
    if (startPosColumn >= 0) {
      startPoint = [idx, startPosColumn];
    }
  });

  for (let routeRow = 0; routeRow < routes.length; routeRow++) {
    let prevStartPoint = startPoint;
    let isValidPos = false;

    const [direction, distance] = routes[routeRow].split(" ");
    let step = 1;

    while (step <= +distance) {
      const [destRow, destColumn] = moveStartPosByDirectionAndDis[direction](1);
      if (!canIMoveInPark([destRow, destColumn])) {
        isValidPos = false;
        break;
      }

      startPoint = [destRow, destColumn];
      isValidPos = true;
      step++;
    }

    if (!isValidPos) {
      startPoint = prevStartPoint;
    }
  }

  return startPoint;
}

[0, 0];

const park = ["SOO", "OOO", "OOO"];
const routes = ["E 2", "S 2", "W 1"];

const park2 = ["OSO", "OOO", "OXO", "OOO"];
const routes2 = ["E 2", "S 3", "W 1"];

solution(park, routes);
