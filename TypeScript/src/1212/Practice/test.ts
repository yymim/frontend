{
  /* 

    ! 외부 API를 활용한 비동기 작업 프로젝트
      - jsonplaceholder의 photos 데이터를 사용
      - https://jsonplaceholder.typicode.com/photos

      - 각 페이지에 photos 데이터의 사진을 4개씩 첨부
      - 사진의 이름(title)은 사진 아래 작성
      - 페이지 간에 이동은 버튼(Previous, Next)으로 이동

      - async/await를 사용하여 작성

  */
  //! Photo 타입 정의
  type Photo = {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  };

  //! 비동기 함수로 사진을 불러오는 함수
    
    // API로 가져오 ㄴ모든 사진을 불러오기
    // 현재 페이지에 해당하는 사진들만 잘라내서 반환
}