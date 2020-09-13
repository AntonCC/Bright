import React from 'react'
import CtaButton from '../../components/cta-button/cta-button.component'
import Teacher from '../../imgs/teacher-service.jpg'
import Student from '../../imgs/student-service.jpg'
import Career from '../../imgs/career-service.jpg'

export const serviceInfo = [
  {
    title: 'Teacher Services',
    subTitle: 'Seamlessly transition from online to the classroom.',
    body: 'Bright allows you to post assignments, and reach out to all your students. No more need for handouts or large stacks of paper for take home assignments.',
    button: <CtaButton bgColor='#0d4d4d' text="Get Started" textColor="#fff" />,
    img: Teacher,
  },
  {
    title: 'Student Services',
    subTitle: 'Get the homework help you need.',
    body: 'Struggling with your homework assignment? Bright curates relevant resources into one place, so you can access everything you need to finish your assignment.',
    button: <CtaButton bgColor='#0d4d4d' text="Get Started" textColor="#fff" />,
    img: Student,
    reverse: true,
    backgroundColor: true
  },
  {
    title: 'Career Services',
    subTitle: 'Seamlessly transition from online to the classroom.',
    body: 'Get connected with employers and apply for jobs directly in the Bright Portal. Keep track of who you contacted and see any responses all in one place.',
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