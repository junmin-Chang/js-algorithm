// 대문자로 싹 다
function solution(s) {
  let answer = "";

  // for (let x of s) {
  //   // ASCII Method
  //   let num = x.charCodeAt();
  //   if (num >= 97 && num <= 122) {
  //     answer += String.fromCharCode(num - 32);
  //   } else answer += x;
  // }

  // General Method
  for (let x of s) {
    if (x == x.toLowerCase()) {
      answer += x.toUpperCase();
    } else {
      answer += x;
    }
  }
  return answer;
}

let str = "ItisTimeToStudy";
console.log(solution(str));
