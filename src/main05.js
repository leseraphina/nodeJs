// 구조분해 할당을 배열로 사용하기
// 순서대로 활용한다.
const color = ['red','green','yellow'];
const [a,b, c, d] = color;

console.log(a,b,c,d);
console.log(c);

//  제외하고 축출하기:  ,로 공간은 만들어 놓고 사용하기
const word = ['moon','flower','cat','dog'];
const [ ,no01, ,no02] = word;
console.log(no01);