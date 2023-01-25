function solution(id_list, report, k) {
  // 중복신고 제거
  let reports = [...new Set(report)].map(a => {
    return a.split(' ');
  });

  console.log(reports);

  let counts = new Map();

  for (const bad of reports) {
    counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
  }

  console.log(counts);

  let good = new Map();

  for (const report of reports) {
    console.log(report);
    if (counts.get(report[1]) >= k) {
      good.set(report[0], good.get(report[0]) + 1 || 1);
    }
  }

  console.log(good);

  let answer = id_list.map(a => good.get(a) || 0);
  return answer;
}

const id_list = ['muzi', 'frodo', 'apeach', 'neo'];
const report = [
  'muzi frodo', // muzi가 frodo를 신고했다.
  'apeach frodo',
  'frodo neo',
  'muzi neo',
  'apeach muzi',
];

solution(id_list, report, 2);

// result = [2,1,1,0]

/*
psuedo code

1. 2번이상 신고당한 사람을 일단 먼저 찾음 
{
    frodo:2,
    neo:2
}

2. Map을 사용하여 각각 신고한 사람을 정리 
{
    muzi => [frodo,neo]
    apeach => [frodo,muzi]
    ...
}
*/
