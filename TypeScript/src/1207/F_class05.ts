{
  //! 추상 클래스와 추상 메소드

  abstract class Animal {
    abstract makeSound(): void; // 추상 메소드

    // 추상클래스 내에서는 반드시 한 개 이상의 추상 메소드가 정의되어야 함.
    // 그 외에는 다른 일반 메소드와 일반 멤버 변수 정의도 가능
    move() {
      console.log("moving...");
    }
  }

  class Dog extends Animal {
    // 추상 클래스를 상속받은 클래스에서는
    // 반드시 추상 메소드를 구현해야 함.
    makeSound(): void {
      console.log("Woof! Woof!");
    }
  }

  const myDog = new Dog();
  myDog.makeSound();
  myDog.move();

  //! 인터페이스 구현
  interface IAnimal {
    name: string;
    makeSound(): void;
  }

  class Cat implements IAnimal {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    makeSound(): void {
      console.log("Meow!");
    }
  }

  const myCat = new Cat("Cats");
  myCat.makeSound();

  //! 추상클래스 vs 인터페이스
  
}
