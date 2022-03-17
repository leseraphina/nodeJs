// 전개연산자
const fruit = ['apple','orange','banan'];
console.log(fruit);
// ... 전개연산자: 배열 데이터가 전개 되어서 나타난다.
console.log(...fruit);

function toOb(a,b,c){
  return {
    a:a,
    b:b,
    c:c
  }
}
// 함수에 배열을 넣을 때
console.log(toOb(fruit[0],fruit[1],fruit[2]));
//  전개로 하면 편리하다.
console.log(toOb(...fruit));