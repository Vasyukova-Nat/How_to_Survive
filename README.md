# README.md к Проекту "Как Выжить" (Fullstack)

---

## Обзор

Проект - веб-сайт "Как выжить", помогающий людям понять, как нужно себя вести в сложной ситуации. Над проектом работала команда студентов группы БВТ2303.

Сайт представляет собой многостраничное реакт-приложение, содержащее статьи на различные темы:

- вызов экстренных служб
- важные номера телефонов
- первая помощь
- встреча с дикими животными
- потеря человека в лесу

![screenshot of sample](https://sun9-18.userapi.com/impg/Dk0sQrq7pCLXY4MLkSPZf9Ccv_VIHoA5eNvk3g/KVS01W1naVA.jpg?size=1280x556&quality=95&sign=ab3adaa0535736e0ed74cebf2f9dfb1f&type=album)

---

## Технологический стек

- React: Библиотека для построения пользовательского интерфейса.
- JSX (JavaScript XML): Язык программирования (расширение языка JavaScript), который помогает описывать HTML-подобные элементы с помощью кода на React. С помощью синтаксиса на React создают компоненты страницы и гибко управляют ими. При создании реакт-приложения был выбран JavaScript+SWC, SWC (Speedy Web Compiler) - компилятор JS.
- CSS (Каскадные таблицы стилей): используется для оформления и стилизации веб-страниц.
- Node.js: среда выполнения JavaScript, которая позволяет запускать код на сервере. Мы используем Node.js для создания серверной части нашего сайта и обработки запросов от пользователей.
- Npm (Node Package Manager): менеджер пакетов для JavaScript, позволяет управлять зависимостями проекта. Используем для установки и обновления различных пакетов, необходимых для работы сайта (фреймворки, библиотеки и плагины).
- Nvm (Node Version Manager): менеджер, управляет версиями Node.js на локальном сервере (ПК). Устанавливает и переключает версии node js с целью обеспечить совместимость сайта с различными версиями пакетов и зависимостей.
- ESLint: Линтер кода.
- Prettier: средство для форматирования кода, использующее жёстко заданные правила по оформлению программ. Оно форматирует код автоматически.
- ENV: расширение, отвечающее за форматирование и подсветку синтаксиса для env-файлов (.env) в VS Code
- Bearded Theme: расширение для изменения темы VS Code

---

## Структура файлов

<pre>
How-to-survive-app/  
│  
├── node_modules/ # Модули Node.js (пакеты JavaScript)  
│  
├── public/ # Статические файлы (изображения)  
│  
├── src/ # Исходный код приложения  
│ ├── components/ # React компоненты  
│ │ ├── ArticleAddField/ # Компонент добавления статьи  
│ │ │ ├── ArticleAddField.css # Стили компонента  
│ │ │ └── ArticleAddField.jsx # Код (jsx) комопнента  
│ │ ├── Breadcrumbs/ # Компонент "хлебные крошки"  
│ │ │ ├── Breadcrumbs.css  
│ │ │ └── Breadcrumbs.jsx  
│ │ ├── Header/ # Компонент хэдера  
│ │ │ ├── Header.css  
│ │ │ └── Header.jsx  
│ │ ├── ScrollProgressBar/ # Компонент отслеживания дальности прокрутки страницы  
│ │ │ ├── ScrollProgressBar.css  
│ │ │ └── ScrollProgressBar.jsx  
│ │ ├── Search/ # Компонент поисковика в статьях  
│ │ │ ├── Search.css  
│ │ │ └── Search.jsx  
│ │ ├── Footer/ # Компонент футера  
│ │ │ ├── Footer.css  
│ │ │ └── Footer.jsx  
│ │ └── Test/ # Компонент теста с вариантами ответа  
│ │ ├── Test.css  
│ │ └── Test.jsx  
│ │  
│ │  
│ ├── layouts/ # Слои части сайта со статьями  
│ │ ├── Body/ # Компонент основной страницы статей (справа)  
│ │ │ ├── Body.css  
│ │ │ └── Body.jsx  
│ │ └── LeftPanel/ # Компонент меню статей (слева)  
│ │ ├── LeftPanel.css  
│ │ └── LeftPanel.jsx  
│ │  
│ │  
│ ├── pages/ # Страницы сайта  
│ │ ├── AboutUs/ # Компонент страницы О Нас  
│ │ │ ├── AboutUs.css  
│ │ │ └── AboutUs.jsx  
│ │ │── ArticlesAnimals/ # Компонент страницы статей о животных  
│ │ │ ├── ArticlesAnimals.css  
│ │ │ └── ArticlesAnimals.jsx  
│ │ └── ArticlesFirstAid/ # Компонент страницы статей о первой помощи  
│ │ ├── ArticlesFirstAid.css  
│ │ └── ArticlesFirstAid.jsx  
│ │  
│ │  
│ ├── App.css # Главный компонент приложения, стили  
│ ├── App.jsx # Главный компонент приложения  
│ ├── index.css # Стили  
│ └── main.jsx # Роутинг  
│  
├── .eslintrc.cjs # Конфигурация ESLint  
├── .gitignore # Игнорирование ненужных для проецирования файлов  
├── package-lock.json # Отслеживании точных версий установленных пакетов (Node.js)  
├── package.json # Файл зависимостей и скриптов (центральный репозиторий настроек для  
│ используемых  
│ инструментов. Также сюда npm и yarn записывают сведения об именах и версиях  
│ установленных пакетов.)  
├── README.md # Файл README (часть документации проекта)  
└── vite.config.js # Конфигурация Vite
</pre>

---

## Модули

- App.jsx: Корневой компонент, который производит роутинг всех остальных компонентов и управляет основным состоянием приложения.
- App.css, index.css - стили CSS для всего приложения
- main.jsx: Точка входа React, где приложение монтируется в DOM (import ReactDOM).

---

## Контакты

[Наша группа вк](https://vk.com/club226042324)

Телеграмм разработчиков:

`Болотов Илья Дмитриевич - Android @Paragven`

`Васюкова Наталья Павловна - Fullstack @nata_lotal`

`Морозова Ольга Андреевна - Fullstack @tvar_iz_ada`

`Ситникова Дарья Евгеньевна - UI/UX дизайн @manul0w0`

---

## Установка и запуск

1. Чтобы открыть сайт, необходимо скачать репозиторий с гитхаба либо сделать git clone, для этого нужно воспользоваться терминалом:
   cd "C:\папка"
   git clone https://github.com/Vasyukova-Nat/How_to_Survive.git -b dev_react
2. С гитхаба все файлы реакт-приложения копируются вместе с папкой How_to_Survive - это лишний уровень. На этом этапе нужно перейти в неё, либо переместить всё её содержимое на один уровень выше, удалив после этого пустую лишнюю папку How_to_Survive.
3. Установка зависимостей:
   npm install
   (Возможно потребуется npm i axios и npm i react-router-dom)
4. Запуск приложения при помощи Vite:
   npm run dev

---

## Тестирование и линтинг

- Тестирование: не применялось. Проводились ручные тесты.
- Линтинг: ESLint настроен для проверки стиля кода. Запустите через терминад npm run lint для проверки кода. Также использовались Prettier и ENV (о них выше).

---

## Взаимодействие с backend

Для взаимодействия с backend используется библиотека axios для отправки POST запросов на указанный URL. Для отправки сообщения в Telegram используется метод sendMessage с указанием chat_id и текста сообщения. Данные для запроса берутся из формы, заполненной пользователем.

Основные маршруты и их функциональность для взаимодействия с backend. В данном проекте маршрут один:

1. POST /api/sendMessage
   - Описание: используется для отправки сообщения через Telegram бота.
   - Вход: JSON объект с данными сообщения.
     Пример данных:
     {
     "title": "Название сообщения",
     "nickname": "Имя отправителя",
     "tag": "Тема сообщения",
     "date": "Дата сообщения",
     "text": "Текст сообщения"
     }
   - Выход: Отправляет сообщение с указанными данными через Telegram бота. Токен бота записан константой в начале кода.

---

## Артефакты проекта

Документация: <https://app.gitbook.com/invite/uUld5RszuvsMD4V1774S/e2lVNNgg64ycm3JttDyM>

Глоссарий + Дорожные карты разработчиков: <https://docs.google.com/document/d/1h1pNAFpnxB3FFjj7phTLQ5sAPm8-Q44mwNFnJkhgF6g/edit?usp=sharing>
