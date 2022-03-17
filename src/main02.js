// 클래스 확산 : extends, super 설명

class Book{
  constructor(type,title){
    this.type = type;
    this.title = title;
  }
  list(){
    console.log(`${this.type}`);
  }
}

class Grphic extends Book{
  constructor(type,title,level){
    super(type,title);
    this.level;
  }
  list(){
    super.list()
    document.write(
      `<p>${this.type} : ${this.title} : ${this.level}</p>`
    )
  }
}
console.log(Grphic)
const myGraphic = [
  new Grphic('photo','photoshop','1'),
  new Grphic('vetor','illustrator','2'),
  new Grphic('paintin','painer','3')
]

for(i of myGraphic){
  i.list();
}