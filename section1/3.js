// 연필 한 다스는 12개 학생 수가 주어졌을 때 몇 다스가 필요한지
function solution(n){
    let answer;
    answer = Math.ceil (n/12);
    return answer;
}

console.log(solution(178));