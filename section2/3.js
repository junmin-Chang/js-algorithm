// A, B 두 사람이 가위바위보 게임을 합니다. 총 N번의 게임을 하여 A가 이기면 A를 출력하고, B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다.
// 가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.

// 딱 봐도 2차원 배열?

function solution(t1, t2) {
  let answer = "";

  for (let i = 0; i < t1.length; i++) {
    if (t1[i] == t2[i]) answer += "D";
    else if (t1[i] == 1 && t2[i] == 3) answer += "A";
    else if (t1[i] == 2 && t2[i] == 1) answer += "A";
    else if (t1[i] == 3 && t2[i] == 2) answer += "A";
    else answer += "B";
  }
  return answer;
}

let set1 = [2, 3, 3, 1, 3];
let set2 = [1, 1, 2, 2, 3];

console.log(solution(set1, set2));
