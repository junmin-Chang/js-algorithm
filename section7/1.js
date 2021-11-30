// 주어진 입력에 대해 괄호가 올바르면 YES, 아니라면 NO를 반환하는 함수를 만들어라
function solution(s) {
  let answer = 'YES';
  stack = [];
  for (let x of s) {
    if (x === '(') stack.push(x);
    else {
      if (stack.length === 0) return 'NO';
      stack.pop();
    }
  }

  if (stack.length > 0) return 'NO';
  return answer;
}
let a = '(()(()))()'; // input
console.log(solution(a));
