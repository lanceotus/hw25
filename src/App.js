import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/MainDiv';
import Footer from './components/Footer';

let logotext = 'Онлайн-обучение';

let menu = {
  'left': [
    {
      'menu_item_link': '',
      'menu_item_text': 'Главная'
    },
    {
      'menu_item_link': 'courses',
      'menu_item_text': 'Курсы'
    },
    {
      'menu_item_link': 'schedule',
      'menu_item_text': 'Расписание'
    }
  ],
  'right': [
    {
      'menu_item_link': 'profile',
      'menu_item_text': 'Профиль'
    },
    {
      'menu_item_link': 'register',
      'menu_item_text': 'Регистрация'
    },
    {
      'menu_item_link': 'login',
      'menu_item_text': 'Войти'
    }
  ]
};

let courses = [
  {
    'course_link': 'course1',
    'course_name': 'Backend разработчик на PHP',
    'start_date': '27.05.2019'
  },
  {
    'course_link': 'course2',
    'course_name': 'Web-разработчик на Python',
    'start_date': '29.07.2019'
  },
  {
    'course_link': 'course3',
    'course_name': 'Разработчик JavaScript',
    'start_date': '27.06.2019'
  },
  {
    'course_link': 'course4',
    'course_name': 'Разработчик Python',
    'start_date': '08.07.2019'
  },
  {
    'course_link': 'course5',
    'course_name': 'Разработчик C++',
    'start_date': '27.06.2019'
  },
  {
    'course_link': 'course6',
    'course_name': 'Android-разработчик. Продвинутый курс',
    'start_date': '27.06.2019'
  },
  {
    'course_link': 'course7',
    'course_name': 'Android-разработчик. Базовый курс',
    'start_date': '26.08.2019'
  },
];

let lessons = [
    {
      course_name: 'Backend разработчик на PHP',
      lesson_name: 'Подготовка к курсу',
      lesson_time: '27.05.2019 в 20:00'
    },
    {
      course_name: 'Backend разработчик на PHP',
      lesson_name: 'Виртуализация, контейнеры и облачные вычисления',
      lesson_time: '30.05.2019 в 20:00'
    },
    {
      course_name: 'Backend разработчик на PHP',
      lesson_name: 'Linux',
      lesson_time: '03.06.2019 в 20:00'
    },
    {
      course_name: 'Web-разработчик на Python',
      lesson_name: 'Тема 1',
      lesson_time: '29.07.2019 в 20:00'
    },
    {
      course_name: 'Web-разработчик на Python',
      lesson_name: 'Тема 2',
      lesson_time: '01.08.2019 в 20:00'
    },
    {
      course_name: 'Разработчик JavaScript',
      lesson_name: 'Тема 1: Введение в курс Modern JavaScript Frameworks',
      lesson_time: '27.06.2019 в 20:00'
    }
]

let copyright = '© 2019 Роман Храповицкий';

//  courses={courses}/>

export default class App extends React.Component{
  render() {
    return (
        <div className='App'>
          <Header logotext={logotext} menu={menu}/>
          <Main courses={courses} lessons={lessons}/>
          <Footer copyright={copyright}/>
        </div>
    );
  }
}

