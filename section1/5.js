// 최솟값 찾기
function solution(arr){         
    let answer, min=Number.MAX_SAFE_INTEGER;
    
    min = arr[0]
    arr.forEach(n => {
        if (n < min) {
            min = n;
        }
    })
    answer =  min;
    return answer;

}

let arr=[5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));