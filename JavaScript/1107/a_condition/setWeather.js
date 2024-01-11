//^ 날씨 예보 예제 작성하기
  
const select = document.querySelector('select');
const para = document.querySelector('p');

select.onchange = setWeather;

function setWeather() {
  const choice = select.value;

  // else if문 작성

  // if (choice === 'sunny') {
  //   para.textContent = "It's sunny day";
  // } else if (choice === 'rainy') {
  //   para.textContent = "It's rainy day";
  // } else if (choice === 'snowing') {
  //   para.textContent = "It's snowing day";
  // } else if (choice === 'overcast') {
  //   para.textContent = "It's overcast day";
  // } else {
  //   para.textContent = 'Please select weather';
  // }

  // switch문으로 작성
  switch (choice) {
    case 'sunny':
      para.textContent = "It's sunny day";
      break;
    case 'rainy':
      para.textContent = "It's rainy day";
      break;
    case 'snowing':
      para.textContent = "It's snowing day";
      break;
    case 'overcast':
      para.textContent = "It's overcast day";
      break;
    default:
      para.textContent = 'Please select weather';
  }
}