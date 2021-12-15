//В некоторых странах Дальнего Востока (Китае, Японии и др.) использовался (и неофициально используется в настоящее время) календарь, отличающийся от применяемого нами. Этот календарь представляет собой 60-летнюю циклическую систему. Каждый 60-летний цикл состоит из пяти 12-летних подциклов. В каждом подцикле года носят названия животных: Крыса, Корова, Тигр, Заяц, Дракон, Змея, Лошадь, Овца, Обезьяна, Петух, Собака и Свинья. Кроме того, в названии года фигурируют цвета животных, которые связаны с пятью элементами природы — Деревом (зеленый), Огнем (красный), Землей (желтый), Металлом (белый) и Водой (черный). В результате каждое животное (и его год) имеет символический цвет, причем цвет этот часто совершенно не совпадает с его "естественной" окраской — Тигр может быть черным, Свинья — красной, а Лошадь — зеленой. Например, 1984 год — год начала очередного цикла — назывался годом Зеленой Крысы. Каждый цвет в цикле (начиная с зеленого) "действует" два года, поэтому через каждые 60 лет имя года (животное и его цвет) повторяется. Составить программу, которая по заданному номеру года нашей эры n печатает его название по описанному календарю в виде: "Крыса, Зеленый". Рассмотреть два случая:
//значение n >= 1984;
//значение n может быть любым натуральным числом
let year = prompt('Пиши число');

switch (((year + 6) % 10 + 2) / 2) {
    case 1:
        color = "Green";
        break;
    case 2:
        color = "Red";
        break;
    case 3:
        color = "Yellow";
        break;
    case 4:
        color = "White";
        break;
    case 5:
        color = "Black";
        break;
}
switch ((year - 3) % 12) {
    case 1:
     console.log(`${color} Mouse year`);
        break;
    case 2:
     console.log(`${color} Cow year`);
        break;
    case 3:
     console.log(`${color} Tiger year`);
        break;
    case 4:
     console.log(`${color} Rabbit year`);
        break;
    case 5:
     console.log(`${color} Dragon year`);
        break;
    case 6:
     console.log(`${color} Snake year`);
        break;
    case 7:
     console.log(`${color} Horse year`);
        break;
    case 8:
     console.log(`${color} Sheep year`);
        break;
    case 9:
     console.log(`${color} Monkey year`);
        break;
    case 10:
     console.log(`${color} Cock year`);
        break;
    case 11:
     console.log(`${color} Dog year`);
        break;
    case 12:
     console.log(`${color} Pig year`);
        break;
        
}

//Мастям игральных карт условно присвоены следующие порядковые номера: масти "пики" — 1, масти "трефы" — 2, масти "бубны" — 3, масти "червы" — 4, а достоинству карт: "валету" — 11, "даме" — 12, "королю" — 13, "тузу" — 14 (порядковые номера карт остальных достоинств соответствуют их названиям: "шестерка", "девятка" и т. п.). По заданным номеру масти m (1 m 4) и номеру достоинства карты k (6 k 14) определить полное название (масть и достоинство) соответствующей карты в виде "Дама пик", "Шестерка бубен" и т. п.


let mast = +prompt('Пиши число');
let cart = +prompt('Пиши число');



switch (mast) {
    case 1:
        mast = "Пик";
        break;
    case 2:
        mast = "Треф";
        break;
    case 3:
        mast = "Бубны";
        break;
    case 4:
        mast = "Червы";
        break;
    default: 
     console.log(`Нет такой масти`);
        break; 
   
        
}

    switch (cart){
        case 6:
            console.log( `Шесть ${mast}`);
            break;
        case 7:
            console.log( `Семь ${mast}`);
            break;
        case 8:
            console.log(`Восемь ${mast}`);
            break;
        case 9:
           console.log(`Девять ${mast}`);
            break;
        case 10:
            console.log(`Десять ${mast}`);
            break;
        case 11:
            console.log(`Валет ${mast}`);
            break;
        case 12:
            console.log(`Дама ${mast}`);
            break;
        case 13:
            console.log(`Король ${mast}`);
            break;
        case 14:
            console.log(`Туз ${mast}`);
            break;
        default: 
            console.log(`Нет такого достоинства`);
            break;
        
    }
    

    







