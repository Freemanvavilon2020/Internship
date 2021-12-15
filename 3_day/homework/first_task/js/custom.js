
var foo = 0;
switch (foo) {
    case -1:
        console.log('negative 1');
        break;
    case 0: // foo равно 0, случай соответствует выражению и эти инструкции будут выполнены
        console.log(0)
        // ПРИМЕЧАНИЕ: здесь могла находиться забытая инструкция break
    case 1: // В случае 'case 0:' не было break, инструкции данного случая также будут выполнены
        console.log(1);
        break; // В конце расположен break, поэтому выполнение не перейдёт к случаю 'case 2:'
    case 2:
        console.log(2);
        break;
    default:
        console.log('default');
}
