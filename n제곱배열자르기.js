/**
정수 n, left, right가 주어집니다. 다음 과정을 거쳐서 1차원 배열을 만들고자 합니다.

n행 n열 크기의 비어있는 2차원 배열을 만듭니다.
i = 1, 2, 3, ..., n에 대해서, 다음 과정을 반복합니다.
1행 1열부터 i행 i열까지의 영역 내의 모든 빈 칸을 숫자 i로 채웁니다.
1행, 2행, ..., n행을 잘라내어 모두 이어붙인 새로운 1차원 배열을 만듭니다.
새로운 1차원 배열을 arr이라 할 때, arr[left], arr[left+1], ..., arr[right]만 남기고 나머지는 지웁니다.
정수 n, left, right가 매개변수로 주어집니다. 주어진 과정대로 만들어진 1차원 배열을 return 하도록 solution 함수를 완성해주세요.
n   left  right result
3	2	   5	[3,2,2,3]
4	7	   14	[4,3,3,3,4,4,4,4]

     col
  row
[     0 1 2 3
   0 [1,2,3,4]
   1 [2,2,3,4]
   2 [3,3,3,4]
   3 [4,4,4,4]
]

[
    [0,0 0,1 0,2]
    [1,0 1,1 1,2]
    [2,0 2,1 2,2]
]



도대체 어떻게 만드는 거야!!!?
col과 row를 어떻게 섞어야 하는 거야??


 */

function solution(n, left, right) {
  const arr = Array.from({ length: n }, (v1, row) => {
    return Array.from({ length: n }, (v2, col) => {
      return col + 1;
    });
  });

  console.log(arr.flat());
}

solution(3, 2, 5);
