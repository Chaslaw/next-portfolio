import { memo } from 'react'
import { Heading, Text, Stack, Link } from '@chakra-ui/react'
import ExperienceTab from './ExperienceTab'
const DetailSection = () => (
  <Stack
    width={{ base: '99%', lg: '60%', xl: '75%' }}
    height="100%"
    spacing={{ base: 6, xl: 8 }}
  >
    <Heading
      size="2xl"
      style={{
        fontVariantCaps: 'small-caps',
      }}
    >
      Companies I’ve Worked For
    </Heading>
    <Text variant="description">
    Since 2019, I have worked as a web developer for several companies, honing my skills in React, Next.js, and Django. My experience spans both front-end and back-end development, allowing me to build dynamic and responsive web applications. I am passionate about creating high-quality digital solutions that meet user needs and business goals. Currently I am working with{' '}
      <Link href="https://quantumevm.com/" target="_blank">
        QuantumEVM
      </Link>
      .
    </Text>

    <ExperienceTab />
  </Stack>
)

export default memo(DetailSection)
