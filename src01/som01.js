import $ from 'jquery';
// //  node-modules 에 있는  js모듈
import num from './export01';

// import { ram,color } from './export02';
// 이름변경하기
// import { ram,color:red } from './export02';
// import { ram, color as red } from './export02';
import * as main from './export02';

$(function(){
  $('body').text('welcome');
})

num('string');
console.log(main.ram(50));
console.log(main);
console.log(main.color.name);

console.log(main.default);
