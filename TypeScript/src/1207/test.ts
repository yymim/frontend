{
  class Employee {
    private _fullName: string = "";

    // 프라이빗한 멤버 변수에 접근하여 출력하는 getter
    get fullName(): string {
      return this._fullName;
    }

    // 프라이빗한 멤버 변수에 접근하여 설정하는 setter
    set fullName(newName: string) {
      if (newName.length > 0) {
        this._fullName = newName;
      } else {
        console.log('Error: name cannot be empty.');
      }
    }
  }

  let employee = new Employee();
  employee.fullName = 'Hwang MinHyeon';
  let name = employee.fullName;
  console.log(name); // Hwang MinHyeon

  employee.fullName = ''; // Error: name cannot be empty.
}