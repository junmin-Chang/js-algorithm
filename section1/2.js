// 삼각형인지 아닌지 판별
function solution(a, b, c){
    let answer="YES", max;
    let tot=a+b+c;
    if (a>b) max = a;
    else max = b;
    if (c > max) max = c;
    
    if (max >= tot - max) answer = "NO"
    return answer;
}
console.log(solution(13, 33, 17));

