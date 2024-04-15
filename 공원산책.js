/**
 * park              routes              results
["SOO","OOO","OOO"]	["E 2","S 2","W 1"]	[2,1]
["SOO","OXX","OOO"]	["E 2","S 2","W 1"]	[0,1]
["OSO","OOO","OXO","OOO"]  ["E 2","S 3","W 1"]	[0,0]


--------------------------------

[
    "OSO",
    "OOO",
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
  park.forEach((row, idx) => {
    const startPosColumn = row.indexOf("S");
    if (startPosColumn >= 0) {
      startPoint = [idx, startPosColumn];
    }
  });

  console.log(startPoint);
}

const park = ["SOO", "OOO", "OOO"];
const routes = ["E 2", "S 2", "W 1"];

const park2 = ["OSO", "OOO", "OXO", "OOO"];
const routes2 = ["E 2", "S 3", "W 1"];

solution(park2, routes2);
