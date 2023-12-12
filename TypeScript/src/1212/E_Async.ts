{
  // Async와 Await

  // 함수가 비동기적으로 동작함을 나타냄.
  async function fetchUserData() {
    try {
      // -> 정상적으로 실행되는 코드 블럭
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/3"
      ); // -> 비동기적인 작업의 결과를 기다림.
      const data = await response.json();
      console.log("사용자 데이터: ", data);
    } catch (error) {
      // -> 오류 시 실행되는 코드 블럭
      console.error("데이터 요청 중 오류: ", error);
    }
  }
  fetchUserData();

  // 비동기 코드의 타입 안정성
  // interface 추가
  interface UserData {
    id: number;
    name: string;
    [key: string]: any;
  }

  async function fetchData(): Promise<UserData> {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    if (!response.ok) {
      throw new Error("데이터 요청 실패");
    }
    return (await response.json()) as UserData;
  }

  fetchData()
    .then((data) => console.log("사용자 데이터:", data))
    .catch((error) => console.error("오류:", error));

  // 실제 비즈니스 요구에 대한 비동기 처리 코드
  async function fetchPostsByPage(
    page: number,
    limit: number = 10
  ): Promise<any[]> {
    try {
      // 요청 전달
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
      );
      // 응답 상태가 'ok'가 아닐 경우 - 에러
      if (!response.ok) {
        throw new Error("데이터 요청 실패");
      }

      // 응답 데이터를 JSON 형태로 변환하여 반환
      return await response.json();
    } catch (error) {
      console.error("오류: ", error);
      return [];
    }
  }

  // 함수 호출
  // then을 사용하여 비동기 작업이 완료된 후에 게시물을 콘솔에 출력
  fetchPostsByPage(1, 5).then((posts) =>
    console.log("페이지 1의 게시물: ", posts)
  );
}
