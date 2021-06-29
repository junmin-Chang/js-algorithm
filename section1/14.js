// 가장 긴 문자열 출력
function solution(s) {
  let answer = "",
    max = Number.MIN_SAFE_INTEGER;

  s.forEach((n) => {
    if (n.length > max) {
      max = n.length;
      answer = n;
    }
  });

  return answer;
}
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
