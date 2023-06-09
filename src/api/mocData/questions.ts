import type { IQuestion } from '@/interface/IQuestion'
import question1 from '@/assets/question1.webp'
import question2 from '@/assets/question2.webp'
import question3 from '@/assets/question3.webp'

export const questions: IQuestion[] = [
  {
    question: 'Ваш Пол:',
    answers: ['Мужчина', 'Женщина']
  },
  {
    question: 'Укажите ваш возраст: ',
    answers: ['До 18', 'От 18 до 28', 'от 29 до 35', 'От 36']
  },
  {
    question: 'Выберите лишнее:',
    answers: ['Дом', 'Шалаш', 'Бунгало', 'Скамейка', 'Хижина']
  },
  {
    question: 'Продолжите числовой ряд: 18  20  24  32',
    answers: [62, 48, 74, 57, 60, 77]
  },
  {
    question: 'Выберите цвет, который сейчас наиболее Вам приятен:',
    answers: [
      '#A8A8A8',
      '#0000A9',
      '#00A701',
      '#F60100',
      '#FDFF19',
      '#A95403',
      '#000000',
      '#850068',
      '#46B3AC'
    ]
  },
  {
    question: 'Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:',
    answers: [
      '#A8A8A8',
      '#0000A9',
      '#00A701',
      '#F60100',
      '#FDFF19',
      '#A95403',
      '#000000',
      '#850068',
      '#46B3AC'
    ]
  },
  {
    question: 'Какой из городов лишний?',
    answers: ['Вашингтон', 'Лондон', 'Париж', 'Нью-Йорк', 'Москва', 'Оттава']
  },
  {
    question: 'Выберите правильную фигуру из четырёх пронумерованных.',
    img: question1,
    answers: [1, 2, 3, 4]
  },
  {
    question: 'Вам привычнее и важнее:',
    answers: [
      'Наслаждаться каждой минутой проведенного времени',
      'Быть устремленными мыслями в будущее',
      'Учитывать в ежедневной практике прошлый опыт'
    ]
  },
  {
    question: 'Какое определение, по-Вашему, больше подходит к этому геометрическому изображению: ',
    img: question2,
    answers: ['оно остроконечное', 'оно устойчиво', 'оно-находится в состоянии равновесия']
  },
  {
    question: 'Вставьте подходящее число',
    img: question3,
    answers: [34, 36, 53, 44, 66, 42]
  }
]
