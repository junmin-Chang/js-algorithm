// N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작 성하세요.(첫 번째 수는 무조건 출력한다)
function solution(t) {
  let answer = [];

  answer.push(t[0]);
  for (let i = 1; i < t.length; i++) {
    if (t[i] > t[i - 1]) {
      answer.push(t[i]);
    }
  }
  return answer;
}

let nums = [7, 3, 9, 5, 6, 12];
console.log(solution(nums));
