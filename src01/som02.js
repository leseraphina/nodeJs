import data from './data.json';
import num from './data02.json';
console.log(data);

console.log(data.array);
console.log(data.object.a)
console.log(num);

const color = {
  title: 'red',
  sample:'apple',
  no: 100
}
//   일반 객체를  json 데이터로 벼경한다.
//  JSON은 전역 객체이다.
const str = JSON.stringify(color);
console.log(str);
console.log(typeof str);

const obj = JSON.parse(str);
console.log(obj)
console.log(typeof obj);


