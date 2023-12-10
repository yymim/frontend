type Employee = {
  name: string;
  startDate: Date;
};

type Manager = Employee & { group: string};
// type Manager = {
//   name: string;
//   startDate: Date;
//   group: string;
// };

let managerA: Manager = {
  name: 'test',
  startDate: new Date(),
  group: 'Developer'
}




type 관리자 = {
  isAdmin: boolean;
}
type 사용자 = {
  name: string;
  email: string;
}
type 관리사용자 = 관리자 & 사용자;

function createAdminUser(user: 사용자): 관리사용자 {
  return { ...user, isAdmin:true };
}

  const newUser: 사용자 = {
  name: '황민현',
  email: 'mh0809@nuest.com'
}
console.log(createAdminUser(newUser));
