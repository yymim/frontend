{
  //! 직원 관리 시스템
  // Employee 기본 클래스 생성
  class Employee {
    // 속성: name (문자열)과 id(숫자)
    name: string;
    id: number;

    // 생성자를 사용하여 초기화
      constructor() {
        this.name = 'hmh';
        this.id = 809;
      }
    // 메서드: displayInfo() 메서드 - 직원의 정보를 출력
    displayInfo() {
      console.log(`Name: ${this.name}, ID: ${this.id}`);
    }

  }

  // Manager 클래스 생성
  class Manager {
    // : Employee 클래스를 확장

    // 추가 속성: subordinates (Employee 배열)
    subordinates: Employee[];
    // 메서드 addSubordinate(employee: Employee) 메서드 - 하위 직원을 목록에 추가
    addSubordinate(employee: Employee): void {
      Employee[] += subordinates;
    }
    // 메서드: listSubordinates() - 모든 하위 직원의 정보를 출력
    listSubordinates():void {
      console.log(`Name: ${this.name}, ID: ${this.id}`)
    }
  }


}