// 동기 처리

function performCalculation(): number {
  // 시간 지연을 위한 계산식
  let sum = 0;
  for (let i = 0; i < 1000000; i++) {
    sum += i;
  }
  return sum; // 계산 결과 반환
}

function performAnothdrCalculation() {
  let product = 1;
  for (let i = 1; i <= 500; i++) {
    product *= i;
  }
  return product;
}

function syncFunction() {
  console.log("첫 번째 작업 시작");
  // 시간이 많이 소요되는 작업을 가지는 함수
  let result = performCalculation();
  console.log("첫 번째 작업 완료, 결과: ", result);

  console.log("두 번째 작업 시작");
  let anotherResult = performAnothdrCalculation();
  console.log("두 번째 작업 완료, 결과: ", anotherResult);
}

syncFunction();
