const color = {
  title:'red',
  sample:'apple',
  no: [
    'no01','no02'
  ]
}

const str = localStorage.getItem('color');
const obj = JSON.parse(str)
console.log(obj);
obj.title = 'yellow';
console.log(obj)
const data = JSON.stringify(obj);
localStorage.setItem('color',data);