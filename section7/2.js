// 입력된 문자열에서 소괄호 () 사이에 존재하는 모든 문자를 제거, 남은 문자만 출력하는 프로그램을 작성하시오

function solution(s) {
  let answer;
  stack = [];
  for (let x of s) {
    if (x === ')') {
      while (stack.pop() !== '(');
    } else stack.push(x);
  }

  answer = stack.join('');
  return answer;
}
let str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
console.log(solution(str));
