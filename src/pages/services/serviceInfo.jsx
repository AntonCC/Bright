import React from 'react'
import CtaButton from '../../components/cta-button/cta-button.component'
import Teacher from '../../imgs/teacher-service.jpg'
import Student from '../../imgs/student-service.jpg'
import Career from '../../imgs/career-service.jpg'

export const serviceInfo = [
  {
    title: 'Teacher Services',
    subTitle: 'Seamlessly transition from online to the classroom.',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi adipisci distinctio quaerat, accusamus expedita placeat illum, animi, incidunt voluptatibus eum iure eos? Ex accusamus, assumenda aliquid aliquam voluptatum aut placeat.',
    button: <CtaButton bgColor='#0d4d4d' text="Get Started" textColor="#fff" />,
    img: Teacher,
  },
  {
    title: 'Student Services',
    subTitle: 'Seamlessly transition from online to the classroom.',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi adipisci distinctio quaerat, accusamus expedita placeat illum, animi, incidunt voluptatibus eum iure eos? Ex accusamus, assumenda aliquid aliquam voluptatum aut placeat.',
    button: <CtaButton bgColor='#0d4d4d' text="Get Started" textColor="#fff" />,
    img: Student,
    reverse: true,
    backgroundColor: true
  },
  {
    title: 'Career Services',
    subTitle: 'Seamlessly transition from online to the classroom.',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi adipisci distinctio quaerat, accusamus expedita placeat illum, animi, incidunt voluptatibus eum iure eos? Ex accusamus, assumenda aliquid aliquam voluptatum aut placeat.',
    button: <CtaButton bgColor='#0d4d4d' text="Get Started" textColor="#fff" />,
    img: Career,
  },
]

export const bottomInfo = {
  title: 'Your Students Deserve The Best',
  subTitle: 'Get in contact with a counselor to help you set up Bright.',
  link: '/contact',
  btnText: 'Contact Counselor'
}