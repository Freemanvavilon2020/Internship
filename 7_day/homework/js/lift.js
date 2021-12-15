//Создаем класс здание
class Building {

  constructor() {
    this.floors = [];
    this.people = [];
  }
//Создаем 9 этажей и добовляем их сохроняем в массив floors
  createFloors(){
    for (let i = 0; i < 9; i++){
      this.floors.push(new Floor())
    }
    return this
  }

//Создали людей 100 и а схранили в массив people
  createPeople() {
    for (let i = 0; i < 100; i++) {
      this.people.push(new Person())
    }
    return this.people
  }

//Распределяем людей на этажах
  distributePeople(){
      this.people.forEach((el)=> {
        this.floors.forEach((item, i) => {
          if(el.curentFloor === (i + 1)) {
            item.queue.push(el)
          }
        })
      } )

  }
  

//Метод старт создает этажи и создает людей
  start() {
    this.createFloors();
    this.createPeople();
    this.distributePeople();
  }

}

//Создаем класс лифт
class Elevator {
  constructor() {
    this.startflor = 1;

  }
}

//Создаем класс этаж
class Floor {
  constructor() {
    this.queue = []
  }
  getQueue(){
    return this.queue
  }
}

//Создаем класс люди
class People {
}

//Создаем класс персона 
class Person {


  constructor() {
    this.curentFloor = this.randValue();
    this.recommendedFloor = this.randValue();
  }
//Метод для создания рандомного значения
  randValue() {
    let rand = 1 + Math.random() * 9;
    let trim = Math.floor(rand);
    return trim
  }
}

//Создаем обьект класса Building и вызываем метод start()
let item = new Building();
item.start();


console.log(item.floors)
//console.log(item.people)






 
  
  
  