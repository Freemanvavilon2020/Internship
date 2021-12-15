## Что нового узнал: 

[Как настроить SSH с помощью ssh_config](https://freehost.com.ua/faq/articles/kak-nastroit-ssh-s-pomoschju--ssh-config/)

[Как правильно настроить ключи ssh для нескольких удаленных учетных записей с участием github и bitbucket?](https://coderoad.ru/35823162/%D0%9A%D0%B0%D0%BA-%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D1%8C%D0%BD%D0%BE-%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B8%D1%82%D1%8C-%D0%BA%D0%BB%D1%8E%D1%87%D0%B8-ssh-%D0%B4%D0%BB%D1%8F-%D0%BD%D0%B5%D1%81%D0%BA%D0%BE%D0%BB%D1%8C%D0%BA%D0%B8%D1%85-%D1%83%D0%B4%D0%B0%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D1%85-%D1%83%D1%87%D0%B5%D1%82%D0%BD%D1%8B%D1%85-%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B5%D0%B9-%D1%81)

[Примеры файлов конфигурации в OpenSSH](https://andreyex.ru/operacionnaya-sistema-linux/primery-fajlov-konfiguracii-v-openssh/)

[ВОЙДИТЕ НА СВОЙ СЕРВЕР С ПОМОЩЬЮ КЛЮЧЕЙ SSH](https://baks.dev/article/ubuntu/kak-nastroit-klyuchi-ssh-v-ubuntu-18-04)

### Homework 
1. Разобраться что такое GitFlow
2. Разобраться как работают SSH
3. Разобраться как работает команда gitRemote
4. Разобраться и создать файл config. Сделать настройки файла config. что бы переключать ключи ssh
5. Обновить документацию
6. Разобраться что такое Docker 

>Gitflow – это одна из многих моделей ветвления Git, которую можете использовать вы и ваша команда. Ключевые идеи, которые нужно запомнить о Gitflow: Данная модель отлично подходит для организации рабочего процесса на основе релизов. Gitflow предлагает создание отдельной ветки для исправлений ошибок в продуктовой среде.


В работе с git используется подход Git Flow.

 * Если в двух словах, то Git Flow упрощает и упорядочивает работу с ветками. Для каждого вида работы отводится определенная ветка. В общем случае выделяют следующие ветки: master, hotfix, develop, release и feature.

 * Master содержит последнюю актуальную работающую версию (версия, которая выложена на рабочем сервере).

 * Hotfix отпачковывается от master, служит для исправления в ней ошибок и вливается обратно в master и develop.

 * Новый функционал разрабатывается через ветку feature. После окончания работы над фичей, ветка вливается в develop.

 * Develop содержит все новые фичи из этой ветки отпачковыется версия release.

 * В release копятся изменения, исправляются ошибки перед очередным обновлением master.

 * Git Flow помогает работу по этой схеме упростить

SSH — защищенный протокол для удаленного доступа к компьютерам. Через SSH можно выполнять операции в командной строке компьютера, который физически находится в другом месте.



### Полезные статьи для Homework 
1. [Руководство по Docker Compose для начинающих](https://habr.com/en/company/ruvds/blog/450312/)
2. [Изучаем Docker, часть 1: основы](https://habr.com/en/company/ruvds/blog/438796/)
3. [Рабочий процесс Gitflow Workflow](https://www.atlassian.com/ru/git/tutorials/comparing-workflows/gitflow-workflow)
4. [Команды Git - Совместная работа и обновление проектов](https://git-scm.com/book/ru/v2/%D0%9F%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-C%3A-%D0%9A%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D1%8B-Git-%D0%A1%D0%BE%D0%B2%D0%BC%D0%B5%D1%81%D1%82%D0%BD%D0%B0%D1%8F-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0-%D0%B8-%D0%BE%D0%B1%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%BE%D0%B2)
5. [Работа с удалёнными репозиториями](https://git-scm.com/book/ru/v2/%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D1%8B-Git-%D0%A0%D0%B0%D0%B1%D0%BE%D1%82%D0%B0-%D1%81-%D1%83%D0%B4%D0%B0%D0%BB%D1%91%D0%BD%D0%BD%D1%8B%D0%BC%D0%B8-%D1%80%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D1%8F%D0%BC%D0%B8#r_remote_repos)


