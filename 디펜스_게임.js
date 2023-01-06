function solution(n, k, enemy) {
  const totalRounds = enemy.length;

  if (totalRounds <= k) {
    return totalRounds;
  }

  const topEnemyFromK = [...enemy].slice(0, k).sort((a, b) => b - a);

  let answer = 0;
  console.log(topEnemyFromK);
  for (let enemyNumber = 0; enemyNumber <= totalRounds - 1; enemyNumber++) {
    console.log(n);
    console.log(k);
    const currentEnemyNumber = enemy[enemyNumber];
    console.log(currentEnemyNumber);
    if (n < currentEnemyNumber) {
      break;
    }

    if (topEnemyFromK.includes(currentEnemyNumber) && k) {
      k--;
      answer++;
      continue;
    } else {
      n -= currentEnemyNumber;

      answer++;
    }
    console.log(n);
    console.log(currentEnemyNumber);
  }

  console.log(answer);
  return answer;
}

const enemy = [1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 5, 6, 7];

// solution(7,3,enemy)
class MaxHeap {
  list = [];
  get length() {
    return this.list.length;
  }
  parentIndexOf(a) {
    return (a - 1) >> 1;
  }
  maxChildIndexOf(a) {
    const [left, right] = [a * 2 + 1, a * 2 + 2];
    if (right >= this.length) return left;
    return this.list[left] > this.list[right] ? left : right;
  }
  swap(i, j) {
    const tmp = this.list[i];
    this.list[i] = this.list[j];
    this.list[j] = tmp;
  }
  push(a) {
    this.list.push(a);
    let childIndex = this.list.length - 1;
    let parentIndex = this.parentIndexOf(childIndex);
    while (parentIndex >= 0 && this.list[parentIndex] < this.list[childIndex]) {
      this.swap(childIndex, parentIndex);
      childIndex = parentIndex;
      parentIndex = this.parentIndexOf(childIndex);
    }
  }
  pop() {
    this.swap(0, this.length - 1);
    const value = this.list.pop();
    let parentIndex = 0;
    let childIndex = this.maxChildIndexOf(parentIndex);
    while (
      childIndex < this.length &&
      this.list[parentIndex] < this.list[childIndex]
    ) {
      this.swap(childIndex, parentIndex);
      parentIndex = childIndex;
      childIndex = this.maxChildIndexOf(parentIndex);
    }
    return value;
  }
}

/*
일단 remainSoldier를 다 사용하고 난 다음 soldiers안에 저장해두었던 병사를 remainSoldier에 더한다.
왜냐면 이전에 soldiers를 쓸 수 있었는데 remainSoldier가 남아있어서 remainSoldier에서 - 했으니깐.
그래서 remainSoldier에 MaxHeap에 저장된 ,가장 수가 많았던 enemy를 pop해서 더한다.(가장 수가 많은 enemy일때 k를 써야 가장 효과가 크므로, 그래서 maxHeeap을 사용하는것)

*/
function solutionWithMaxHeap(n, k, enemy) {
  let remainSoldier = n,
    answer = 0,
    count = k,
    soldiers = new MaxHeap();
  for (let i = 0; i < enemy.length; i++) {
    console.log(soldiers);
    console.log(remainSoldier);
    soldiers.push(enemy[i]);
    remainSoldier -= enemy[i];
    console.log(i);
    if (remainSoldier < 0) {
      if (count == 0) return i;
      console.log(remainSoldier);
      remainSoldier += soldiers.pop();
      console.log(remainSoldier);
      count -= 1;
    }
  }
  return enemy.length;
}

/*
이게 더 이해하기 쉽다.
enemy를 내림차순으로 정렬한다음 어디까지 자를지(mid)만 결정하면 됨
자르고 난 다음에 k번째 이후부터 시작해서 다 더한다음 n보다 합이 크면 mid가 정답보다 크다는 것임
  - 정답보다 크므로 mid를 이번엔 작게 해야함. 그럼 rt를 줄이면 됨
작으면 정답보다 작다는 것임
 - 그면 mid를 크게 잡아야하므로 lt를 늘리면 됨

*/
function solutionWithBinarySearch(n, k, enemy) {
  console.log(enemy);
  let lt = 0,
    rt = enemy.length;

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    console.log(lt);
    console.log(rt);
    console.log(mid);
    if (isMidGreaterThanAnswer(n, k, mid, enemy)) rt = mid - 1;
    else lt = mid + 1;
  }

  return lt - 1;
}

const isMidGreaterThanAnswer = (n, k, mid, enemy) => {
  if (mid <= k) return true;

  let t = enemy.slice(0, mid).sort((a, b) => b - a);
  console.log(t);
  let sum = 0;

  for (let i = k; i < t.length; i++) {
    sum += t[i];
    if (sum > n) return true;
  }

  return false;
};

solutionWithBinarySearch(7, 3, enemy);
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

사실은 binaryHeap을 사용해야 함
*/
