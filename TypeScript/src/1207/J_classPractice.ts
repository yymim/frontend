{
  //! 직원 관리 시스템

  // Employee 기본 클래스 생성
  class Employee {
    // 속성: name (문자열)과 id(숫자)
    // public name: string;
    // public id: number;

    // 생성자를 사용하여 초기화
    constructor(public name: string, public id: number) {}

    // 메서드: displayInfo() 메서드 - 직원의 정보를 출력
    displayInfo(): void {
      console.log(`Name: ${this.name}, ID: ${this.id}`);
    }
  }

  // Manager 클래스 생성
  class Manager extends Employee {
    // : Employee 클래스를 확장

    // 추가 속성: subordinates (Employee 배열)
    private subordinates: Employee[] = []; // 하위 직원 목록

    constructor(name: string, id: number) {
      super(name, id);
    }

    // 메서드 addSubordinate(employee: Employee) 메서드 - 하위 직원을 목록에 추가
    addSubordinate(employee: Employee): void {
      this.subordinates.push(employee);
    }

    // 메서드: listSubordinates() - 모든 하위 직원의 정보를 출력
    listSubordinates(): void {
      console.log(`Manager: ${this.name}`);
      this.subordinates.forEach((employee) => employee.displayInfo());
    }
  }

  const manager = new Manager("hmh", 1);
  const employee1 = new Employee("kjs", 22);
  const employee2 = new Employee("yym", 23);

  // 매니저의 하위직원으로 추가
  manager.addSubordinate(employee1);
  manager.addSubordinate(employee2);

  manager.listSubordinates();
}
