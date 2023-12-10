{
  class Person {
    // 멤버 변수
    name: string;
    age: number;

    // 생성자 함수
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    // 메소드
    describe(): string {
      return `${this.name} is ${this.age} years old.`;
    }
  }

  // 생성자
  let person1 = new Person("hmh", 28);
  console.log(person1.name);
  console.log(person1.describe());

  let person2 = new Person("yym", 28);
  console.log(person2.name);
  console.log(person2.describe());

  // 빈 생성자
  /*
  class Dog {
    constructor() {
      console.log("bow!!");
    }
  }

  let choco = new Dog();
  */

  class Dog {
    constructor(barkingSound: string) {
      console.log(`${barkingSound}`);
    }
  }

  let choco = new Dog("bow!!");

  // 속성 기본값
  class Triangle {
    vertices: number = 3;
    // 값을 바로 초기화
    /*
      값을 바로 초기화하지 않는 기본 예시
      class Triangle {
        vertices: number;

        constructor() {
          this.vertices = 3;
        }
      }
    */
    readonly height: number;
    // 읽기전용속성(readonly) 사용 가능
    // : 속성 선언 또는 생성자 외의 장소에서는 읽기 전용 속성에 값 할당 불가

    // constructor() {
    //   this.height = 4;
    // }
    constructor(height: number) {
      this.height = height;
    }
  }
  let triangle = new Triangle(4);
  console.log(triangle.vertices);
  console.log(triangle.height);
  triangle.vertices = 5;
  console.log(triangle.vertices);
  // triangle.height = 5; // -> Error. readonly. 외부에서 값 할당시 오류 생성

  // this 키워드
  class Human {
    age: number;

    constructor() {
      this.age = 0;

      setInterval(() => {
        this.age++;
        // this는 Human의 인스턴스를 가리킴
        // 화살표 함수의 this값은 함수가 호출되는 방식과 무관하게, 함수가 작성된 위치에 따라 결정
        // : 객체 내에 화살표 함수를 정의하면 해당 함수의 this는 외부 스코프(즉, 객체를 둘러싼 스코프)의 this를 가리킴.
      }, 3000);
    }
  }
  let a = new Human();

  let number = 3;

  const myObject = {
    number: 42,
    // this가 myObject를 가리킴.
    regularFunction: function () {
      return this.number;
    },
    // this를 외부 스코프(해당 코드에서는 전역 스코프)에서 캡쳐
    arrowFuction: () => {
      return number;
      // return this.number; // 엄격한 타입 체킹으로 인한 오류
    },
  };
  console.log(myObject.regularFunction()); // 42
  console.log(myObject.arrowFuction()); // 3
}
