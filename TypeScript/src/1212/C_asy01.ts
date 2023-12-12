{
  // 비동기처리 프로그래밍

  function fetchData(callback: (data: any) => void) {
    // fetch() 함수
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => callback(data)) // data라는 callbak의 매개변수 이용
      .catch((error) => console.error("오류: ", error)); // error 가 발생하면 ~ 출력
  }

  // fetchData함수의 인자로 전돨되는 콜백 함수
  function handleData(data: any) {
    console.log("받은 데이터: ", data);
  }

  fetchData(handleData);

  /* 
    fetch(url) // url : 요청을 보낼 주소
      .then(response => response.json()) // JSON 형태로 응답을 처리
      .then(data => console.log(data)) // 데이터 처리 및 사용
      .catch(error => console.error(error)) // fetch에서 일어나는 오류 처리
  */

  // 콜백 지옥
  function fetchUserData(userId: number, callback: (data: any) => void) {
    // 첫 번째 요청: 사용자 데이터 가져오기
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((user) => {
        console.log("사용자 데이터: ", user);
        // 두 번째 요청: 해당 사용자 게시물 가져오기
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
          .then((response) => response.json())
          .then((posts) => {
            console.log("사용자 게시물: ", posts);
            // 세 번째 요청: 사용자
            fetch(
              `https://jsonplaceholder.typicode.com/users/albums?userId=${userId}`
            )
              .then((response) => response.json())
              .then((albums) => {
                console.log("사용자의 앨범: ", albums);
                // 모든 데이터가 준비되었을 때 콜백 함수를 호출
                callback({ user, posts, albums });
              });
          });
      });
  }

  // 사용자 데이터 처리를 위한 콜백 함수
  function handleUserData(data: any) {
    console.log("가져온 전체 데이터: ", data);
  }

  // 사용자 ID 1에 대한 데이터를 불러오기
  fetchUserData(1, handleUserData);
}
