// 10부제
// 서울시는 6월 1일부터 교통 혼잡을 막기 위해서 자동차 10부제를 시행한다. 자동차 10부제는 자동차 번호의
// 일의 자리 숫자와 날짜의 일의 자리 숫자가 일치하면 해당 자동차의 운행을 금지하는 것이다.
// 예를 들어, 자동차 번호의 일의 자리 숫자가 7이면 7일 , 17일 27일에 운행하지 못한다.

// 첫 줄엔 날짜의 일의 자리 숫자가 주어지고 두 번째 줄에는 7대의 자동차 번호의 끝 두자리 숫자가 주어짐
// 10부제를 위반하는 자동차의 수를 구하라.
function solution(day, arr){
    let answer=0;

    arr.forEach(n => {
        if (n % 10 == day) answer++; 
    })

    return answer;
}

arr=[25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));