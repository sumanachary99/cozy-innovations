import { Link as RouterLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Box,
  Container,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  Link,
  Center,
  HStack,
  Image,
} from '@chakra-ui/react'
import {
  Sofa,
  Car,
  Building2,
  PaintBucket,
  ArrowRight,
} from 'lucide-react'

const MotionBox = motion(Box)

const Products = () => {
  const categories = [
    {
      id: 'construction',
      name: 'Construction',
      description: 'Professional construction services',
      icon: Building2,
      image: '/images/construction/Elevation.jpeg',
    },
    {
      id: 'interior',
      name: 'Interior Designing',
      description: 'Expert interior design solutions',
      icon: PaintBucket,
      image: '/images/interior/Modern Bedroom Looks You Can Recreate.jpeg',
    },
    {
      id: 'custom-furniture',
      name: 'Architectural Bespoke Turnkey',
      description: 'Architectural bespoke turnkey solutions. Recliners, sofas, and custom furniture tailored to your needs',
      icon: Sofa,
      image: '/images/custom-furniture/leather-furniture/A Welcoming and Inviting Chair.jpeg',
    },
    {
      id: 'automotive',
      name: 'Automotive',
      description: 'Premium car seat covers and upholstery',
      icon: Car,
      image: '/images/automotive/Car seat red.jpeg',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <Box>
      {/* Page Header */}
      <Box
        as="section"
        position="relative"
        py={{ base: 16, md: 24 }}
        overflow="hidden"
      >
        <Box
          position="absolute"
          top={0}
          left="50%"
          transform="translateX(-50%)"
          w="100%"
          h="100%"
          bgGradient="radial(ellipse at center top, rgba(201, 162, 39, 0.15) 0%, transparent 60%)"
          pointerEvents="none"
        />
        <Container maxW="1200px" position="relative">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <VStack spacing={4} textAlign="center">
              <Heading
                as="h1"
                fontSize={{ base: '3xl', md: '5xl' }}
                fontWeight={700}
                bgGradient="linear(to-r, brand.400, white)"
                bgClip="text"
              >
                Our Products & Services
              </Heading>
              <Text color="gray.400" fontSize={{ base: 'md', md: 'lg' }}>
                Explore our wide range of premium products and services
              </Text>
            </VStack>
          </MotionBox>
        </Container>
      </Box>

      {/* Products Grid */}
      <Box as="section" py={{ base: 12, md: 20 }}>
        <Container maxW="1200px">
          <MotionBox
            as={SimpleGrid}
            columns={{ base: 1, sm: 2, lg: 4 }}
            spacing={{ base: 6, md: 8 }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {categories.map((category) => (
              <MotionBox key={category.id} variants={itemVariants}>
                <Link
                  as={RouterLink}
                  to={`/products/${category.id}`}
                  _hover={{ textDecoration: 'none' }}
                  display="block"
                  h="full"
                >
                  <Box
                    bg="linear-gradient(145deg, #1a1a1a 0%, #111111 100%)"
                    border="1px solid"
                    borderColor="dark.50"
                    borderRadius="xl"
                    p={{ base: 6, md: 8 }}
                    h="full"
                    transition="all 0.3s ease"
                    _hover={{
                      borderColor: 'brand.600',
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
                    }}
                  >
                    <VStack spacing={4} align="center" textAlign="center">
                      <Center
                        w="150px"
                        h="150px"
                        rounded="xl"
                        bg="whiteAlpha.100"
                        overflow="hidden"
                        border="2px solid"
                        borderColor="brand.500"
                        boxShadow="md"
                        transition="all 0.3s"
                        _groupHover={{
                          borderColor: 'brand.600',
                          transform: 'scale(1.05)',
                        }}
                      >
                        <Image
                          src={category.image || '/images/logo/logo_2-removebg-preview.png'}
                          alt={category.name}
                          w="100%"
                          h="100%"
                          objectFit="cover"
                          fallbackSrc="/images/logo/logo_2-removebg-preview.png"
                        />
                      </Center>

                      <Heading as="h3" size="md" color="white">
                        {category.name}
                      </Heading>

                      <Text color="gray.400" fontSize="sm" lineHeight="tall">
                        {category.description}
                      </Text>

                      <HStack
                        spacing={2}
                        color="brand.500"
                        fontSize="sm"
                        fontWeight={500}
                        pt={2}
                      >
                        <Text>View Details</Text>
                        <ArrowRight size={16} />
                      </HStack>
                    </VStack>
                  </Box>
                </Link>
              </MotionBox>
            ))}
          </MotionBox>
        </Container>
      </Box>
    </Box>
  )
}

export default Products
