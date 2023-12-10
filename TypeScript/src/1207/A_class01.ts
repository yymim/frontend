//! 클래스 정의
class ClassName {
  // 속성(상태): 멤버 변수, 클래스의 상태를 저장
  // 메서드(행동): 함수, 클래스의 동작을 정의
}

/*

class Book {
  title: string
  author: string;
}

클래스를 생성하고 멤버 변수 선언 시 아래의 오류 생성
속성 'title'은(는) 이니셜라이저가 없고 생성자에 할당되어 있지 않습니다.
‘변수명!’ 을 사용하여 컴파일러에게 해당 변수가 값이 무조건 할당되어있음을 명시적으로 전달

->

class Book {
  title!: string
  author!: string;
}

*/

class Book {
  // 멤버 변수는 클래스에 속하는 변수
  title!: string;
  author!: string;

  // 메서드
  // this 키워드 : 해당 메서드가 쓰이는 클래스의 멤버변수에 접근,  현재 인스턴스를 가리킴
  describe(): string {
    return `${this.title} is written by ${this.author}`;
  }
}

let myBook1 = new Book();
let myBook2 = new Book();

console.log(myBook1.title);
console.log(myBook2.describe());
