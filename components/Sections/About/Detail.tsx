import { memo } from 'react'
import Link from 'next/link'
import {
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Icon,
  SimpleGrid,
  Box,
  Tooltip,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  SiJavascript,
  SiTypescript,
  SiGraphql,
  SiReact,
  SiNextDotJs,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiSass,
  SiPython,
  SiDjango,
} from 'react-icons/si'
import { GiCoffeePot } from 'react-icons/gi'
import { IoMdOpen } from 'react-icons/io'

type ISkillSetModal = {
  onOpen(): void
}

const Detail = ({ onOpen }: ISkillSetModal) => {
  const emphasis = useColorModeValue('teal.500', 'cyan.200')
  const currentYear = new Date().getFullYear()
  const professionalYears = currentYear - 2016

  return (
    <Stack
      width={{ base: '100%', lg: '70%' }}
      spacing={{ base: 6, xl: 8 }}
      as="section"
    >
      <Heading
        as="h4"
        size="2xl"
        letterSpacing={1.8}
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Who am I?
      </Heading>
      <Text variant="description">
        I`ve been coding professionally for 6 years now and
        currently working as a <b>Founder and CEO</b> at <Link href='https://www.hellohood.rs/'><a target='_blank'><b>Hellohood.rs</b></a></Link>  coding school for beginers, as well as a Freelance Web developer
       </Text>
       <Text variant="description">
       These are technologies I am working with:
       </Text>
       <SimpleGrid columns={2} spacing={4}>
        <List spacing={4}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiHtml5} color={emphasis} fontSize="2em" />
            <ListIcon as={SiCss3} color={emphasis} fontSize="2em" />
            HTML/CSS
          </ListItem>
     
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiBootstrap} color={emphasis} fontSize="2em" />
            Bootstrap
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiSass} color={emphasis} fontSize="2em" />
            Sass
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiJavascript} color={emphasis} fontSize="2em" />
            Javascript (ES6+)
          </ListItem>
        </List>
        <List spacing={4}>
   
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiTypescript} color={emphasis} fontSize="2em" />
            Typescript
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiReact} color={emphasis} fontSize="2em" />
            React
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiNextDotJs} color={emphasis} fontSize="2em" />
            NextJS
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiDjango} color={emphasis} fontSize="2em" />
            Django
          </ListItem>
        </List>
        <Box>
          {/* <Text
            as="button"
            variant="emphasis"
            fontSize="smaller"
            textAlign="left"
            onClick={onOpen}
          >
            See my full arsenal <Icon as={IoMdOpen}/>
          </Text> */}
        </Box>
      </SimpleGrid>
    </Stack>
  )
}

export default memo(Detail)
