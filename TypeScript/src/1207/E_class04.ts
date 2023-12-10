{
  // 상속

  class Animal {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    move(distance: number = 0) {
      console.log(`${this.name} moved ${distance}m.`);
    }
  }

  class Dog extends Animal {
    constructor(name: string) {
      super(name); // 부모 클래스의 생성자 호출
    }

    bark() {
      console.log("Woof! Woof!");
    }
  }

  const dog1 = new Dog("choco");
  dog1.move(10);
  dog1.bark();


  // 메소드 오버라이딩
  class Bird extends Animal {
    constructor(name: string) {
      super(name);
    }

    move(distance: number = 5) {
      console.log('Flying...');
      super.move(distance);
    }
  }

  const bird = new Bird('Parrot');
  bird.move();

  
}
