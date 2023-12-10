
//! 생성자 함수를 사용한 객체 생성
function Person(firstPara, last, age, gender, interests) {
  this.name = {
    'first': firstPara,
    'last': last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.bio = function() {
    let striong = this.name.first + this.name.last;
    console.log(string);
  };
  this.greeting = function() {
    console.log('Hi' + this.name.first);
  }
}

// 객체명.객체속성 = 객체값

// 생성자 함수를 사용한 객체 생성
let person1 = new Person('MinHyeon', 'Hwang', 28, 'male', 'music');

console.log(typeof(person1));

console.log(Object.prototype);


// Object.create()를 사용한 객체 생성 방법

let personProto = {
  greet: function() {
    console.log('Hello, my name is ' + this.name);
  }
}

let personA = Object.create(personProto);
personA.name = 'Lee Do Kyung'; // 객체의 프로퍼티 생성
personA.age = 29;
personA.job = 'employee';

personA.greet();



// class 키워드로 객체 정의
// 클래스명은 시작문자를 대문자로 사용하는 것을 권장
class Person2 {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  greet() {
    console.log('Hello, my name is ' + this.name);
  }
}

let personB = new Person2('yymim', 26, 'developer');
personB.greet();


