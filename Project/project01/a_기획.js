/*
전체 프로젝트
기획 > 디자인 > 웹 퍼블리싱 > 프론트엔드 > 백엔드

1. 기획
1-1. 기획문서 작성

- 주제 (아이템 선정)
  : 어떠한 사이트를 제작할 것인가?
    //^ 금융(크라우드 펀딩 + 자산관리)
  : 해당 사이트를 제작할 때 이미 구현되어 있는 사이트인가?
    //^ 크라우드넷, 토스 참조
  : 참고할 사이트(1 ~ 2개)
    //^ 크라우드넷, 토스, 와디즈 등
  : 게시판 기능(CRUD), 로그인 & 회원가입 기능, 검색 & 필터 기능 필수 포함
    //^

- 기획의도(선정 이유)
  : 제품 기획의 목적
    //^ 사용자의 자산 수준에 맞는 금융콘텐츠를 추천하고 구매할 수 있도록하여 콘텐츠 홍보 및 자금조달의 기회 제공
  : 사이트 컨셉(사용 연령층, 분위기, 사용 목적)
    //^ 콘텐츠 제공자에게 홍보 및 자금조달의 기회
    //^ 소비자에게 금융 콘텐츠(상품)를 쉽게 접근하고 구매할 수 있게 관리서비스 제공(거래중개, 금융권 자금대출 지원 서비스)
    //^ 데이터를 기반으로 자산관리 서비스 제공

- 요구사항 분석
  : 서술형식
  1. 홈화면 작성
    //^ 크라우드넷 + 토스
  2. 홈화면 요구사항에서 키워드 체크(동그라미)
  3. 위의 키워드에 대한 페이지 요구사항 작성
  4. 각 페이지 요구사항에서 데이터가 될 항목 체크(세모)

- 데이터 모델링 (비고;)

- 스토리 보드(와이어 프레임)
  1. 메뉴 구조도(IA: Information Architecture)
    : 서비스(제품)의 전체 구조를 시각화하여 나타낸 표
    : 메뉴를 도식화
    : 중복 X

  2. 화면 ID 목록
    : 각 페이지 수를 화면 ID 기준으로 작업
    : 전체 사이트 구성을 완료
    - 홈화면: HOME01(로그인 전), HOME02(로그인 후, 마이페이지 클릭 버튼 생성)
    - 상품 목록: PROD_LIST01, PROD_LIST02 ... 

  3. flowchart(전체 사이트 흐름도)
    : 화면 전환을 나타내는 흐름도
    : 문서를 읽는 사람이 서비스(제품)의 전체 흐름과 프로세스를 이해하도록 작성

- 페이지 디자인
  //^ 현재 선택되는 양식에 맞춰서 진행될 예정
  : UX/UI 디자인 툴 - Figma (UI 페이지 기획 및 디자인)
  : PPT

// - 개발 환경 (개발 리소스 & 버전)
*/