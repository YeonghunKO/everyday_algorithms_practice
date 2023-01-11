// 풀이 출처 : https://github.com/yuneg11/Programmers-Solutions/tree/master/solutions/72412%20-%20%EC%88%9C%EC%9C%84%20%EA%B2%80%EC%83%89

const info = [
  'java backend junior pizza 150',
  'python frontend senior chicken 210',
  'python frontend senior chicken 150',
  'cpp backend senior pizza 260',
  'java backend junior chicken 80',
  'python backend senior chicken 50',
];

const query = [
  'java and backend and junior and pizza 100',
  'python and frontend and senior and chicken 200',
  'cpp and - and senior and pizza 250',
  '- and backend and senior and - 150',
  '- and - and - and chicken 100',
  '- and - and - and - 150',
];

// [(1, 1, 1, 1, 2, 4)];
const table = {
  cpp: 4,
  java: 2,
  python: 1,
  backend: 2,
  frontend: 1,
  senior: 2,
  junior: 1,
  chicken: 2,
  pizza: 1,
  '-': 7,
};

function preprocess(rows, is_query = false) {
  const processed_rows = [];

  for (const row of rows) {
    const values = row.split(' ').filter(value => value != 'and');

    console.log(values);
    const score = Number(values[values.length - 1]);
    let code = 0;
    console.log(score);
    for (const value of values.slice(0, -1)) {
      if (is_query) {
        code = (code << 3) + (7 - table[value]);
        console.log(code); // Bit flip
      } else {
        code = (code << 3) + table[value];
      }
    }

    processed_rows.push([code, score]);
  }

  return processed_rows;
}

function bisect_gt(a, x) {
  let lo = 0,
    hi = a.length;
  while (lo < hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (a[mid] < x) lo = mid + 1;
    else hi = mid;
  }
  console.log(a);
  console.log(x);
  return a.length - lo;
}

function solution(info, query) {
  info = preprocess(info);
  query = preprocess(query, true);

  console.log(info);
  console.log(query);
  const info_index = new Map();

  for (const [code, score] of info) {
    // Behave likes python defaultdict
    if (!info_index.has(code)) {
      info_index.set(code, []);
    }

    info_index.get(code).push(score);
  }

  console.log(info_index);
  const sorted_info_index = [];

  for (const [code, scores] of info_index.entries()) {
    sorted_info_index.push([code, scores.sort((a, b) => a - b)]);
  }
  console.log(sorted_info_index);

  const results = [];

  for (const [qcode, qscore] of query) {
    let count = 0;

    for (const [icode, iscores] of sorted_info_index) {
      console.log(qcode);
      console.log(icode);
      if (!(qcode & icode)) {
        count += bisect_gt(iscores, qscore);
      }
    }

    results.push(count);
  }

  return results;
}

solution(info, query);

/*
info를 객체로 만든다
{
    java:new Map(
        java => true
        backend => true
        ...
        score => 150
    )
}

이런식?
그리고 Map의 api를 써서 검색한다.
*/
