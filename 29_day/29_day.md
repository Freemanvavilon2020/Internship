## Что нового узнал 
 




## PHP 







### Homework


#### JS 
Node.js



#### PHP 
SQL запрос для выбора с двумя пересадками

SELECT *  FROM (SELECT *  FROM air WHERE SP = 'STR') t1
INNER JOIN air t3 ON t1.EP = t3.SP AND TIMESTAMPDIFF(MINUTE, t1.EDT, t3.SDT) > 15
INNER JOIN (SELECT * FROM air WHERE EP = 'EDI') t2 ON t3.EP = t2.SP AND TIMESTAMPDIFF(MINUTE, t3.EDT, t2.SDT) > 15



[Основные команды SQL, которые должен знать каждый программист](https://tproger.ru/translations/sql-recap/)

[Курс Node.js - для тех, кто хочет начать бекенд разработку](https://www.youtube.com/watch?v=XZe6_tzJY6g&list=PLM7wFzahDYnHYn81-oqavYIp6vaEd5gdH&ab_channel=WebDev%D1%81%D0%BD%D1%83%D0%BB%D1%8F.%D0%9A%D0%B0%D0%BD%D0%B0%D0%BB%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%9B%D1%83%D1%89%D0%B5%D0%BD%D0%BA%D0%BE)

[Что такое Node JS. Начало работы](https://metanit.com/web/nodejs/1.1.php)

![Что такое Node JS. Начало работы](https://www.mindinventory.com/blog/wp-content/uploads/2018/06/nodejs-pros-cons-1024x512.jpg)


