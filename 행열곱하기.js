(() => {
  /**
   * [
   *  [2, 3, 2],
   *  [4, 2, 4],
   *  [3, 1, 4]
   * ]
   *
   * [
   *  [5, 4, 3],
   *  [2, 4, 1],
   *  [3, 1, 1]
   * ]
   *
   *  2*5 + 3*2 + 2*3 ,  2*4 + 3*4 + 2*1 , 2*3 + 3*1 + 2*1 ,
   *
   * [
   *  [22, 22, 11],
   *  [36, 28, 18],
   *  [29, 20, 14]
   * ]
   */

  const arr1 = [
    [1, 4],
    [3, 2],
    [4, 1],
  ];

  const arr2 = [
    [3, 3],
    [3, 3],
  ];

  const arr3 = [
    [1 * 3 + 4 * 3, 1 * 3 + 4 * 3],
    [(3 * 3 + 2 * 3, 3 * 3 + 2 * 3)],
    [(4 * 3 + 1 * 3, 4 * 3 + 1 * 3)],
  ];

  function solution(a1, a2) {
    const newArr = [];

    for (let i = 0; i < arr1.length; i++) {
      let result = [];
      for (let j = 0; j < arr2[0].length; j++) {
        let elem = 0;
        for (let k = 0; k < arr2.length; k++) {
          // arr1[0].length도 가능.
          elem += arr1[i][k] * arr2[k][j];
        }
        result.push(elem);
      }
      newArr.push(result);
    }
    return newArr;
  }

  console.log("solution()", solution(arr1, arr2));
})();
