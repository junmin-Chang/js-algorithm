// 가운데 문자 출력
function solution(s) {
  let answer;
  let mid = Math.floor(s.length / 2);

  if (s.length % 2 != 0) {
    answer = s[mid];
  } else {
    answer = s.substr(mid - 1, 2);
  }
  return answer;
}
console.log(solution("study"));
console.log(solution("good"));
