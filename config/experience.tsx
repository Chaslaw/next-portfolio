import { Link } from '@chakra-ui/react'

export type Company = 'QEVM' | 'Hellohood' | 'danilovesovic'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  QEVM: {
    name: 'QuantumEVM',
    longName: 'Quantum Ethereum Virtual Machine',
    subDetail: 'Quantum Migration in 2025 to Save Web3',
    url: 'https://quantumevm.com/',
    position: 'Web Developer',
    duration: 'June 2024 - Present',
    logo: {
      light: '/worked_at_logos/qevm/q-fin-fib.png',
      dark: '/worked_at_logos/qevm/q-fin-fib.png',
    },
    roles: [
      <>
     As a web developer, I have leveraged Django to build robust and scalable web applications, seamlessly integrating Bootstrap to ensure responsive and visually appealing designs. 
      </>,
      <>
        I have developed three applications using Django: an Event app, a Blog app, and a Form app. Each project showcases my ability to create robust and functional web applications tailored to specific needs.
       
      </>,
    ],
  },
  Hellohood: {
    name: 'Hellohood.rs',
    longName: 'Hellohood School',
    subDetail: 'Programing courses',
    url: 'https://www.hellohood.rs/',
    position: 'Founder and CEO',
    duration: 'December 2023 - Present',
    logo: {
      light: '/worked_at_logos/qevm/apple-icon.png',
      dark: '/worked_at_logos/qevm/apple-icon.png',
    },
    roles: [
      <>
 Hellohood is a revolutionary programming school that offers students an academic approach to learning with a focus on the relationship between instructors and students.
      </>,
      <>
Recognizing the flaws and inconsistencies of numerous programming courses that mostly offer worthless diplomas, the idea behind Hellohood school is to strengthen the bond between instructors and students, provide unlimited time for additional lessons, and ensure that every student fully understands the entire curriculum.
      </>

    ],
  },
  danilovesovic: {
    name: 'danilovesovic.com',
    longName: 'danilovesovic',
    subDetail: 'learning platform',
    url: 'https://www.danilovesovic.com/kursevi/septembar-web',
    position: 'HTML, CSS and JavaScript Instructor',
    duration: 'May 2022 - October 2023',
    logo: {
      light: '/worked_at_logos/qevm/dv.PNG',
      dark: '/worked_at_logos/qevm/dv.PNG',
    },
    roles: [
      <>
        Fully responsible for teaching and practice in HTML, CSS, and JavaScript.
      </>,
      <>
      At the programming school, I conduct live sessions on Zoom, engaging with tens of students simultaneously.
      </>,
        <>
        I focus on delivering interactive lessons, ensuring each student understands the material thoroughly.
        </>,
          <>
          My role emphasizes real-time problem-solving and fostering a collaborative learning environment.
          </>
    ],
  },
}

export const ExperiencesList = [
  Experiences.QEVM,
  Experiences.Hellohood,
  Experiences.danilovesovic,
]
