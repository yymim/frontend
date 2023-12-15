{
  //! 배열의 다양한 반복 방법

  let arr = [1, 2, 3, 4, 5];
  
  //? 1. for문(루프)
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }

  //? 2. forEach메소드

  arr.forEach(item => {
    console.log(item);
  })

  //? 3. map 메소드
  let doubled = arr.map(item => item * 2);
  console.log(doubled);

  //? 4. for...of 루프
  for(let num of arr) {
    console.log(num);
  }

  //? 5. for...in 루프
  /* 예시 1 */
  for (let num in arr) {
    console.log(num);
  }
  /* 예시 2 */
  let arr2 = [54, 65, 74, 64, 85];
  for (let num2 in arr2) {
    console.log(num2);
  }
  /* 예시 3 */
  type Student = {
    name: string,
    height: number,
    job: string,
    [key: string]: string | number;
  }
  let student: Student = {
    name: 'hmh',
    height: 183,
    job: 'artist'
  };

  for (let key in student) {
    // hasOwnProperty(): 객체가 해당 속성을 직접 소유하고 있는지 확인
    if (student.hasOwnProperty(key)) {
      console.log(`${key}: ${student[key]}`);
    }
  }
}