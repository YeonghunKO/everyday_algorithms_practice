/**
 * "110010101001"	[3,8]
 * "01110"	[3,3]
 * "1111111"	[4,1]
 *  count   prevString       afterZerosDeleted  deletedZeros  lengthOfNumber    binaryString  
 	1       "110010101001" ==>  111111	               6	          6	           "110" 
    2       "110"	        1	2	"10"
	3       "10"	        1	1	"1"

    3번의 이진 변환을 하는 동안 8개의 0을 제거했으므로, [3,8]을 return 해야 합니다.
 */

function solution(s) {
  let count = 0;
  let prevString = s;
  let afterZerosDeleted = 0;
  let deletedZeros = 0;
  let lengthOfNumber = 0;
  let binaryString = 0;

  do {
    count++;
    afterZerosDeleted = prevString.replaceAll("0", "");
    // console.log("prevString", prevString);

    deletedZeros =
      deletedZeros + (prevString.length - afterZerosDeleted.length);

    lengthOfNumber = afterZerosDeleted.length;
    binaryString = lengthOfNumber.toString(2);
    prevString = binaryString;

    // console.log("count", count);
    // console.log("afterZerosDeleted", afterZerosDeleted);
    // console.log("deletedZeros", deletedZeros);
    // console.log("lengthOfNumber", lengthOfNumber);
    // console.log("binaryString", binaryString);
    // console.log("-----------------");
  } while (binaryString > 1);

  return [count, deletedZeros];
}

console.log(solution("110010101001"));
