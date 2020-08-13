import React from 'react'
import { ReactComponent as Book } from '../../imgs/icons/book-solid.svg'
import { ReactComponent as Tie } from '../../imgs/icons/user-tie-solid.svg'
import { ReactComponent as Teacher } from '../../imgs/icons/chalkboard-teacher-solid.svg'

export const goalsInfo = [
  {
    title: 'Advance Education',
    body: 'In our ever advancing digital world, more learning than ever is done on the computer. We aim to make digital learning free of frustration and tech issues, so students and teachers can focus on the material.',
    icon: <Book />
  },
  {
    title: 'Career Prep',
    body: 'Choosing a career is an important life decision. We offer career assessment and placement services, to simplify the process for students.',
    icon: <Tie />
  },
  {
    title: 'Support Teachers',
    body: 'We help streamline many of the daily tasks teachers have to do, so they can focus more on their students. With the recent transition to distance learning, we are offering free tech support to get online classrooms up and running.',
    icon: <Teacher />
  },
]