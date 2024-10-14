import { memo } from 'react'
import { Heading, Text, Stack, Box, Button } from '@chakra-ui/react'
import { Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const rimuruVariant: Variants = {
  shake: {
    rotate: [0, 15, 0, -15, 0],
    transition: {
      delay: 1.2,
      duration: 0.5,
      repeat: 2,
      ease: 'easeInOut',
    },
  },
  jump: {
    y: [0, -35, 0],
    transition: {
      delay: 1.8,
      duration: 0.5,
      repeat: 3,
      ease: 'easeInOut',
    },
  },
}

const GetInTouch = () => {
  const MotionButton = motion(Button)
  const [ref, inView] = useInView()
  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
      as="footer"
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Write me!
  
      </Heading>
      <Text variant="description">
      I am always open to speaking with people and assisting with work on projects. I’m also eager to explore new opportunities and jobs. I love connecting with others and am always ready to chat. So feel free to message me on any of my social media or shoot me an email.{' '}
      </Text>
      <MotionButton
            size="lg"
            variant="outline"
            borderWidth="1px"
            borderRadius="0"
            fontWeight="normal"
            fontSize="sm"
            width="120px"
            as={'a'}
            href="https://www.linkedin.com/in/caslav-lazic/"
            target="_blank"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.9 }}
          >
            Get in touch!
          </MotionButton>

      <Box
        spacing={0.5}
        textAlign="center"
        fontFamily="monospace"
        paddingTop={{ base: 10, lg: 20, xl: 20 }}
        paddingBottom={{ base: 5, lg: 18 }}
      >

      </Box>
    </Stack>
  )
}

export default memo(GetInTouch)
