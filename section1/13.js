// 대소문자 변환 대문자는 소문자로 소문자는 대문자로
function solution(s) {
  let answer = "";

  for (let x of s) {
    if (x == x.toUpperCase()) answer += x.toLowerCase();
    else answer += x.toUpperCase();
  }

  return answer;
}

console.log(solution("StuDY"));
