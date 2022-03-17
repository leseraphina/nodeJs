const color = ['red','blue','green','orange'];
//  나머지 매개변수 :  rest parameter
// function myColor(a,b,...c){
//   return{
//     a:a,
//     b:b,
//     c:c
//   }
// }
//  속성의 이름과 매개변수의 이름이 같으면 축약형이 가능하다.
// function myColor(a,b,...c){
//   return{a,b,c}
// }

// const myColor =(a,b,...c)=>{return{a,b,c}}

// const myColor =(a,b,...c)=>{a,b,c}

const myColor =(a,b,...c)=>({a,b,c});

console.log(myColor(...color));
