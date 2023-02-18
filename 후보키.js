function solution(relation) {
  let answer = 0;
  // relation[0]의 길이만큼 인덱스번호를 원소로 가지는 초기배열을 만든다.
  let idxArr = Array.from(Array(relation[0].length), (v, i) => i);

  let combinations = []; //가능한 후보키들의 모든 조합을 우선 넣기

  for (let i = 0; i < idxArr.length; i++) {
    combinations.push(...getCombination(idxArr, i + 1));
  }

  console.log(idxArr);

  combinations = checkUniqueness(relation, combinations); //유일성 체크해서 갱신
  combinations = checkMinimality(combinations); // 최소성 체크해서 갱신

  return combinations.length;
}
function checkUniqueness(relation, combinations) {
  let results = []; // 유일성을 만족하는 조합들로만 이루어진 results 배열

  combinations.forEach(combination => {
    let set = new Set();
    relation.forEach(rel => {
      set.add(combination.map(combi => rel[combi]).join(','));
      // ex) 현재 조회중인 combination을 [1,3]이라고 하면, combi는 1,3 각각 그 원소를 뜻함
      // 중첩반복문이 많아서 O(N^3)인데, 입력범위가 매~우 적어서 이정도면 효율성 매우 충분함
    });
    // 이때 만들어지는 Set은 relation 배열을 순회해나가면서 인덱스 1번째와 3번째를 합친
    // { 'ryan,2', 'apeach,2', 'tube,3', 'con,4', 'muzi,3' }의 형태임
    // 해당 set은 relation의 길이인 6보다 작기때문에 중복이 존재했던것임. 유일성 만족 x
    if (set.size == relation.length) {
      results.push(combination);
    }
  });
  return results;
}

function checkMinimality(combinations) {
  let results = []; // 최소성을 만족하는 조합들로만 이루어진 results 배열

  while (combinations.length) {
    results.push(combinations[0]);
    // 유일성을 만족하는 조합중 첫번째 원소를 최소성을 만족하는 원소로 넣는다.
    combinations = combinations.reduce((acc, cur) => {
      let notMinimal = combinations[0].every(combination =>
        cur.includes(combination)
      );
      // 현재 조회중인 cur배열 안에 combinations[0]의 모든 원소가 포함된다면 최소성을 만족하지 않는것임
      if (!notMinimal) acc.push(cur);
      // 최소성을 만족하는 cur 조합을 acc에 추가해줌
      return acc;
    }, []);
    // combinations들은 combinations[0]과 비교해서 최소성을 만족하는애들로 갱신됨
  }

  return results;
}

function getCombination(arr, selectNum) {
  let result = [];
  if (selectNum === 1) {
    return arr.map(a => [a]);
  }

  arr.forEach((fix, i, origin) => {
    const rest = origin.slice(i + 1);

    const combi = getCombination(rest, selectNum - 1);
    const attach = combi.map(c => [fix, ...c]);
    result.push(...attach);
  });
  return result;
}

// 참고
// https://velog.io/@euneun/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%ED%9B%84%EB%B3%B4%ED%82%A4-2019-kakao-blind-recruitment-javascript

const relation = [
  ['100', 'ryan', 'music', '2'],
  ['200', 'apeach', 'math', '2'],
  ['300', 'tube', 'computer', '3'],
  ['400', 'con', 'computer', '4'],
  ['500', 'muzi', 'music', '3'],
  ['600', 'apeach', 'music', '2'],
];

solution(relation);

/*
 1.유일성: 
 combination으로 추출된 index에 대응하는 relation을 추린 결과,
 중복되는게 있으면 그 combination은 유일성을 갖추지 못한게 됨
 예를 들어 combination이 [1,3] 이 나왔다. 그럼 { 'ryan,2', 'apeach,2', 'tube,3', 'con,4', 'muzi,3', 'apeach,2' } 이런식으로 candidate
 튜플이 만들어 질것이다. 그러나 apeach,2가 중복되므로 [1,3]은 유일성을 만족시키지 못해 후보키가 될 수 없다.

 2. 최소성: 유일성을 만족하는 후보키 중에 말그대로 최소한의 후보키만으로 이루어진 후보키가 최소성을 만족한다고 보면 된다.
 예를 들어 유일성을 만족하는 후보키가 
 [ [ 0 ],
  [ 0, 1 ],
  [ 0, 2 ],
  [ 0, 3 ],
  [ 1, 2 ],
  [ 0, 1, 2 ],
  [ 0, 1, 3 ],
  [ 0, 2, 3 ],
  [ 1, 2, 3 ],
  [ 0, 1, 2, 3 ] ]

  라고 해보자. 그럼 [0]이 일단 남는다. 그럼 [0]은 최소한의 후보키로 이루어져 있어서 최소성을 만족한다. [0,1]을 살펴보면 1은 굳이 없어도 된다.
  왜냐면 0으로도 충분히 후보키가 될 수 있기 때문. 그럼 0을 포함한 모든 후보키는 제외된다. 그럼 [1,2] [1,2,3]이 남는다.
  이때 [1,2,3]은 제외된다. [1,2]만으로도 후보키가 가능하기 때문
  그래서 결국 [0],[1,2] 이 두개가 최종적으로 후보키가 될 수 있다.
 */
