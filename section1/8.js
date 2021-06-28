// ***일곱 난쟁이
// 키의 합이 100되는 무리들 아무나 추출

function solution(arr){
    let answer=arr;
    let sum = arr.reduce((acc,curr) => acc+curr, 0);
    
    for (let i = 0; i<8; i++) {
        for (let j = i+1; j<9; j++) {
            if ((sum - (arr[i] + arr[j])) == 100) {
                answer.splice(i,2);

            }
        }
    } 
   
    return answer;
}

let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));