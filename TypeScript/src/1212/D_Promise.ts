{
  // 닫히는 중괄호

  // 프로미스 사용방법

  // 1. Promise 생성자
  const fetchData = (): Promise<any> => {
    return new Promise((resolve, reject) => {
      fetch("https://jsonplaceholder.typicode.com/users/2")
        .then((response) => response.json())
        .then((data) => resolve(data)) // 성공상태의 인자를 전달
        .catch((error) => reject(error)); // 실패상태의 인자를 전달
    });
  };

  fetchData()
    .then((data) => console.log("데이터: ", data)) // 성공
    .catch((error) => console.error("오류: ", error)); // 에러

  fetchData()
    .then((data) => {
      console.log("첫 번째 데이터: ", data);
      return fetchData(); // 다른 데이터 요청
    })
    .then((anotherData) => console.log("두 번째 데이터: ", anotherData))
    .catch((error) => console.error("오류: ", error));

    
} // 닫히는 중괄호
