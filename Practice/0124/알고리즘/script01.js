//! 버블 정렬 구현
// : 주어진 정수 배열을 버블 정렬 알고리즘을 사용하여 오름차순 정렬하는 함수를 구현

//? 문제
// 주어진 정수 배열 arr을 버블 정렬 알고리즘을 사용하여 오름차순 정렬하는 함수 bubbleSort를 작성
// >> 배열의 각 요소를 순차적으로 비교해서 필요에 따라 위치를 바꾸는 방식으로 작동

// 각 단계에서 인접한 두 개의 원소를 비교, 필요시 위치 변경
// 한 번의 단계가 수행되면 가장 큰 원소가 맨 뒤로 이동
// 그 다음 단계에서 맨 뒤로 이동한 데이터는 정렬에서 제외

// 배열의 길이가 5인 경우
// - 첫 번째 반복문: 4번 반복
// - 두 번째 반복문: 4 ~ 1번 반복
function bubbleSort(arr) {
  let n = arr.length; // 배열의 길이를 n에 저장
  for(let i = 0; i < n-1; i++) { // 배열을 n-1번 반복
    // 각 반복마다 배열의 끝에서 이미 정렬된 부분을 제외하고 비교
    for(let j = 0; j < n-i-1; j++) {
      // 현재 요소가 다음 요소보다 크면
      if (arr[j] < arr[j + 1]) {
        // 요소의 위치를 변경
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr; // 이거 잊지마!!!!!
}

let arr = [4, 3, 5, 2, 1];
let sortArr = bubbleSort(arr);
console.log(sortArr);



//! 선형 탐색 구현
// : 주어진 정수 배열에서 특정 값을 찾는 선형 탐색 알고리즘을 구현
// : 찾고자 하는 값이 배열에 존재하면 해당 인덱스를 반환, 존재하지 않으면 -1을 반환

//? 문제
// 정수 배열 arr와 정수 target이 주어질 때, 배열 내에서 target을 찾는 선형 탐색 함수 linearSearch 작성

// - 조건
// : 배열의 각 요소는 정수
// : 배열은 정렬되지 않은 상태일 수 있음

function linearSearch(arr, target) {
  // 배열의 첫 요소부터 마지막 요소까지 순회
  let n = arr.length;
  for (let i = 0; i < n; i++){
    // 현재 요소가 target과 일치하면
    if (arr[i] === target) {
      // 현재 요소의 인덱스를 반환
      return i;
    }
  }
  return -1;
}

let arrLinear = [5, 3, 10, 2, 9];
let target = 10;
let linearArr = linearSearch(arrLinear, target);
console.log(linearArr);




//! 선택 정렬 구현
// : 배열을 순회하며 가장 큰(또는 가장 작은) 요소를 찾아 해당 요소를 배열의 올바른 위치로 이동시키는 방식으로 동작

//? 주어진 정수 배열 arr를 선택 정렬 알고리즘으로 내림차순 하는 함수 selectionSort
// - 조건
// : 배열의 각 요소는 정수
// : 배열의 길이는 최소 1 이상

function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    // 현재 최대 값의 인덱스를 저장
    let maxIndex = i;
    // 나머지 요소를 탐색하여 최대값보다 큰 값을 검색
    for ( let j = i+1; j < n; j++) {
      // 현재 요소가 현재 최대 값보다 크면
      if (arr[j] > arr[maxIndex]) {
        // 최대 값의 인덱스를 업데이트
        maxIndex = j;
      }
    }
    // 최대 값과 현재 위치의 요소를 교환
    [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
  }
  return arr;
}

let arrSelection = [22, 11, 99, 88, 9, 7, 42];
let selectionArr = selectionSort(arrSelection);
console.log(selectionArr);
