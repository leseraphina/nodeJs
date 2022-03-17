
// 주소에 종속되어서 데이터가 저장된다.

const color = {
  title:'red',
  sample:'apple',
  no: [
    'no01','no02'
  ]
}
localStorage.setItem('book','photoshop');

// localStorage.setItem('color',color);
// 문자데이터로 만들어야 된다.
const str = JSON.stringify(color);
localStorage.setItem('color',str);

// 다시 객체로 가져오기
// console.log(localStorage.getItem('color'));
const obj= JSON.parse(localStorage.getItem('color'));
console.log(obj);
console.log(obj.sample);
console.log(obj.no);
console.log(obj.no[1]);

//  지우기
// localStorage.removeItem('book');








