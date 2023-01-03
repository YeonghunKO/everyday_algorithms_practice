function solution(n, k, enemy) {
  const totalRounds = enemy.length;

  if (totalRounds <= k) {
    return totalRounds;
  }

  const topEnemyFromK = [...enemy].sort((a, b) => b - a).slice(0, k);

  let answer = 0;

  for (let enemyNumber = 0; enemyNumber <= totalRounds - 1; enemyNumber++) {
    const currentEnemyNumber = enemy[enemyNumber];
    if (topEnemyFromK.includes(currentEnemyNumber) && k) {
      k--;
      answer++;
      continue;
    } else {
      n -= currentEnemyNumber;

      answer++;
    }

    if (n < currentEnemyNumber) {
      break;
    }
  }

  console.log(answer);
  return answer;
}

/*
pseudo code
* 탐욕법같은데?
* 무적권을 중간에 섞어서 써야하나?
- 처음부터 top k 안에 드는 숫자를 뽑자
- 그 숫자가 나오면 k를 하나씩 제거
음....
위의 solution은 안됨
n=7,k=3,enemy=[1,2,1,2,1,1,1,1,1,5,6,7]로 하면 답이 10이 나와야하는데 위의 solution으로 하면 6이 나옴.
topEnemyFromK를 다시 구현할것
*/
