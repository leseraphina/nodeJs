//  구조분해 할당

//    구조를 분해해서 각각의 변수로 넣어서 필요한 부분만 꺼내 사용하는 법
const {a1,a2,a3} = { a1 : 10, a2 : 20, a3 : 30, a4 : 40 };
console.log(a1);


const book = {
  type:'it',
  title:'html',
  price:'20,000',
  'title name':'yes',
  // level:"main"
}

//  기본값을 설정하 수 있다. 그런데 속성에 값이 들어가면 무시가 된다.
const {type,title,price,level=0} = book;
console.log(type);
console.log(level);

// 1: 키 값 변경하여 사용할 수 있다.
const welcome = type;
console.log(welcome);

// 2: 속성을 만들어서 사용 가능하다.
const graphic = {
  some:'paint',
  bookname:'painter',
  etc:'20,000',
}
const {some:sumtitle,bookname} = graphic;
console.log(sumtitle);


