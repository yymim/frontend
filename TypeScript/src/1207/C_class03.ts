{
  // 접근 제어자, 제한자(Acess Modifiers)

  // Employee 클래스 정의
  class Employee {
    // 멤버 변수 정의(접근 제어자)
    public name: string;
    private salary: number;
    protected department: string;

    constructor(name: string, salary: number, department: string) {
      this.name = name;
      this.salary = salary;
      this.department = department;
    }

    displayInfo() {
      console.log(`Name: ${this.name}, Department: ${this.department}`);
      console.log(`Salary: ${this.salary}`);
    }

    private calculateBonus() {
      return this.salary * 0.1;
    }
  }

  // Employee 클래스 사용 예제(인스턴스화)
  let employee1 = new Employee("hmh", 50000, "IT");
  console.log(employee1.name);
  // console.log(employee1.salary);
  // console.log(employee1.department);

  employee1.displayInfo(); // public (외부접근가능)
  // employee1.calculateBonus(); -> private 메소드는 해당 클래스 내부에서만 접근 가능


  // 생성자의 경우 멤버 선언 외에도 생성자의 매개변수 앞에 명시 가능
  class User {
    constructor(public id: string, private password: string) {
    }
  }

  let hmh = new User('hmh', '0809');
  console.log(`${hmh.id}`);
  // console.log(`${hmh.password}`); -> password는 private 속성!
}
