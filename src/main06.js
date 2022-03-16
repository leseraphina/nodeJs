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
console.log(toOb(fruit[0],fruit[1],fruit[2]));
console.log(toOb(...fruit));