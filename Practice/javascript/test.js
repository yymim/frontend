{
  // 스크립트 시작

  let a =[];
  a.sample = 10;

  console.log(a.sample);
  console.log(typeof a);

  function b() {
  };
  b.sample = 10;

  console.log(b.sample);
  console.log(typeof b);

  console.log(Array.isArray(a));

  
  const f = new Number(273);
  const g = Number(273);
  
  console.log(typeof f);
  console.log(typeof g);

  f.sample = 10;
  console.log(f.sample);
  console.log(f);

  // 스크립트 종료
};