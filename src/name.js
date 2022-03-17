// 네 개의 변수를 쉼표로 구분해서
// 한 번에 생성하고 할당
//  객체의 인덱싱 기법
// const myObj = new Object(),
//       str = 'myString',
//       rand = Math.random(),
//       obj = new Object();

// myObj.type              = '마침표 구문';
// myObj['date created']   = '공백을 포함한 문자열';
// myObj[str]              = '문자열 값';
// myObj[rand]             = '무작위 수';
// myObj[obj]              = '객체';
// myObj['']               = '빈 문자열까지';

// console.log(myObj);
const all = {
  type: 'it',
  title:'javascript',
  pic:'no01',
  'all-time':300
}
console.log(all.type);
console.log(all['title']);
console.log(all['all-time'])
const num = [1,2,3,4,5];
console.log(num[1])