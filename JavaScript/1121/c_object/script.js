
// 원시 타입의 경우 직접적인 값만을 사용
let num1 = 3;
num2 = num1;
console.log(num2); // '3' 출력

num1 = 5;
console.log(num2); // '3' 출력

// 참조 타입
let computer1 = {
  name: 'SamSung Book3'
};

let computer2 = computer1;
console.log(computer2);

computer2.name = 'SamSung Book3 Ultra';
console.log(computer1.name);


// 참조에 의한 함수 호출
function changeName(computer) {
  computer.name = 'Samsung Book3 Ultra';
}

let computer3 = {
  name: 'SamSung Book3'
};

changeName(computer3);
console.log(computer3.name);

// 얕은 복사
let animal1 = {
  name: 'Ren'
};

let animal2 = animal1;

// 깊은 복사
let animal3 = JSON.parse(JSON.stringify(animal1));

animal3.name = 'coco';
console.log(animal1.name);
console.log(animal3.name);


// 자바스크립트 속성 존재 확인
let book = {
  title: 'Little Prince',
  author: 'Saint Exupery',
  publishYear: 1943
}

console.log('title' in book); // true (boolean값으로 나옴)
console.log('price' in book); // false (boolean값으로 나옴)


delete book.author;
console.log('author' in book); // false



// 메소드  축약 표기
let teacher = {
  name: 'test',
  greet() {
    console.log('Hello' + this.name);
  }
}