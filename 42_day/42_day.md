## Что нового узнал 


### Homework
#### JS 



#### PHP 
Throwable, Error, Exception

Throwable является родительским интерфейсом для всех объектов, выбрасывающихся с помощью выражения throw, включая классы Error и Exception.


Error - базовый класс для всех внутренних ошибок PHP.

Exception — это базовый класс для всех пользовательских исключений.

### Наследование исключений
Модель исключений (exceptions) в PHP похожа с используемыми в других языках программирования. Исключение можно сгенерировать (выбросить) при помощи оператора throw, и можно перехватить (поймать) оператором catch. Код генерирующий исключение, должен быть окружён блоком try, для того, чтобы можно было перехватить исключение. Каждый блок try должен иметь как минимум один соответствующий ему блок catch или finally.

В случае, если выброшено исключение, для которого нет блока catch в текущей функции, это исключение будет "всплывать" по стеку вызова, пока не будет найден подходящий блок catch. При этом, все встреченные блоки finally будут исполнены. Если стек вызовов раскрутится до глобальной области видимости, не встретив подходящего блока catch, программа завершит работу с фатальной ошибкой, если только у вас не настроен глобальный обработчик исключений.

Генерируемый объект должен принадлежать классу Exception или наследоваться от Exception. Попытка сгенерировать исключение другого класса приведёт к фатальной ошибке PHP.

Начиная с PHP 8.0.0, ключевое слово throw является выражением и может использоваться в контексте других выражений. В более ранних версиях оно являлось оператором и требовало размещения в отдельной строке.

## catch 
Блок catch определяет то, как следует реагировать на выброшенное исключение. В блоке catch указывается один или более типов исключений или ошибок(Error), которые он будет обрабатывать. Также указывается и переменная, которой будет присвоено пойманное исключение (начиная с PHP 8.0.0 задавать эту переменную не обязательно). Выброшенное исключение или ошибка будут обработаны первым подходящим блоком catch.

Можно использовать несколько блоков catch, перехватывающих различные классы исключений. Нормальное выполнение (когда не генерируются исключения в блоках try) будет продолжено за последним блоком catch. Исключения могут быть сгенерированы (или вызваны ещё раз) оператором throw внутри блока catch. Если нет, то исполнение будет продолжено после отработки блока catch.

При генерации исключения код, следующий после описываемого выражения, не будет выполнен, а PHP попытается найти первый блок catch, перехватывающий исключение данного класса. Если исключение не будет перехвачено, PHP выдаст фатальную ошибку: "Uncaught Exception ..." (Неперехваченное исключение), если не был определён обработчик ошибок при помощи функции set_exception_handler().

Начиная с PHP 7.1.0, блок catch может принимать несколько типов исключений с помощью символа (|). Это полезно, когда разные исключения из разных иерархий классов обрабатываются одинаково.

Начиная с PHP 8.0.0, задание переменной для пойманного исключения опционально. Если она не задана, блок catch будет исполняться, но не будет иметь доступа к объекту исключения.

## finally 
Блок finally также можно использовать после или вместо блока catch. Код в блоке finally всегда будет выполняться после кода в блоках try и catch, независимо от того, было ли выброшено исключение, перед тем как продолжится нормальное выполнение кода.

Одно важное взаимодействие происходит между блоком finally и оператором return. Если оператор return встречается внутри блоков try или catch, блок finally всё равно будет выполнен. Кроме того, оператор return выполняется, когда встречается, но результат будет возвращён после выполнения блока finally. Если блок finally также содержит оператор return, возвращается значение, указанное в блоке finally.

### Глобальный обработчик исключений 
Если исключение дошло по стеку вызовов до глобальной области видимости, оно может быть обработано глобальным обработчиком исключений, если он задан. С помощью функции set_exception_handler() можно задать функцию, которая будет выполнена вместо блока catch, если не нашлось подходящего. Эффект аналогичен тому, как будто мы всю нашу программу обернули в блок try-catch, где за реализацию блока catch отвечает установленная функция.


>Замечание: Внутренние функции PHP в основном используют сообщения об ошибках, и только новые объектно-ориентированные модули используют исключения. Однако, ошибки можно легко преобразовать в исключения с помощью класса ErrorException. Однако это не сработает для фатальных ошибок.

#### Полезыне материалы

[Предопределённые исключения](https://www.php.net/manual/ru/reserved.exceptions.php)



