import { Link as RouterLink } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import getImagePath from '../utils/getImagePath'
import {
  Box,
  Container,
  VStack,
  HStack,
  Heading,
  Text,
  Button,
  IconButton,
  Flex,
  Link,
  Center,
  Image,
} from '@chakra-ui/react'
import {
  Building2,
  Sofa,
  Car,
  PaintBucket,
  ArrowRight,
  Phone,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
// Motion components
const MotionBox = motion(Box)
const MotionVStack = motion(VStack)

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const services = [
    {
      icon: PaintBucket,
      image: getImagePath('/images/interior/Modern Bedroom Looks You Can Recreate.jpeg'),
      title: 'Interior Designing',
      description:
        'Transform your spaces with our expert interior design solutions. From concept to completion.',
      link: '/products/interior',
      highlight: '3D Visualization • Space Planning • Complete Execution',
    },
    {
      icon: Sofa,
      image: getImagePath('/images/custom-furniture/leather-furniture/A Welcoming and Inviting Chair.jpeg'),
      title: 'Architectural Bespoke Turnkey',
      description:
        'Architectural bespoke turnkey solutions. Recliners, sofas, and custom furniture crafted to perfection. Designed to fit your space.',
      link: '/products/custom-furniture',
      highlight: 'Premium Materials • Custom Sizing • Leather Options',
    },
    {
      icon: Building2,
      image: getImagePath('/images/construction/Elevation.jpeg'),
      title: 'Construction',
      description:
        'Professional construction services for residential and commercial projects. Quality workmanship guaranteed.',
      link: '/products/construction',
      highlight: 'Expert Team • Quality Materials • Timely Delivery',
    },
    {
      icon: Car,
      image: getImagePath('/images/automotive/Car seat red.jpeg'),
      title: 'Automotive',
      description:
        'Premium car seat covers and upholstery services. Protect and enhance your vehicle interior.',
      link: '/products/automotive',
      highlight: 'Perfect Fit • Multiple Colors • Expert Installation',
    },
  ]

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, services.length])

  const nextSlide = useCallback(() => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev + 1) % services.length)
  }, [services.length])

  const prevSlide = useCallback(() => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
  }, [services.length])

  const goToSlide = (index) => {
    setIsAutoPlaying(false)
    setCurrentSlide(index)
  }

  const currentService = services[currentSlide]
  const CurrentIcon = currentService.icon

  return (
    <Box>
      {/* Hero Services Carousel */}
      <Box
        as="section"
        position="relative"
        py={{ base: 12, md: 20 }}
        minH={{ base: 'auto', md: '500px' }}
      >
        {/* Background Gradient */}
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
          <Flex align="center" justify="center" gap={{ base: 2, md: 8 }}>
            {/* Previous Button */}
            <IconButton
              icon={<ChevronLeft size={32} />}
              onClick={prevSlide}
              variant="ghost"
              rounded="full"
              size="lg"
              color="white"
              bg="whiteAlpha.100"
              _hover={{ bg: 'brand.500', color: 'dark.400' }}
              display={{ base: 'none', md: 'flex' }}
              aria-label="Previous slide"
            />

            {/* Carousel Content */}
            <Box flex={1} maxW="700px" minH={{ base: '350px', md: '300px' }}>
              <AnimatePresence mode="wait">
                <MotionVStack
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  spacing={{ base: 4, md: 6 }}
                  textAlign="center"
                  py={4}
                >
                  <Center
                    w={{ base: '180px', md: '220px' }}
                    h={{ base: '180px', md: '220px' }}
                    rounded="2xl"
                    bg="whiteAlpha.100"
                    overflow="hidden"
                    border="2px solid"
                    borderColor="brand.500"
                    boxShadow="lg"
                    position="relative"
                  >
                    <Image
                      src={currentService.image}
                      alt={currentService.title}
                      w="100%"
                      h="100%"
                      objectFit="cover"
                      fallbackSrc={getImagePath('/images/logo/logo_2-removebg-preview.png')}
                      loading="eager"
                      onError={(e) => {
                        console.error('Image failed to load:', currentService.image)
                        e.target.src = getImagePath('/images/logo/logo_2-removebg-preview.png')
                      }}
                    />
                  </Center>

                  <Heading
                    as="h1"
                    fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
                    fontWeight={700}
                    bgGradient="linear(to-r, brand.400, brand.300)"
                    bgClip="text"
                  >
                    {currentService.title}
                  </Heading>

                  <Text
                    color="gray.400"
                    fontSize={{ base: 'md', md: 'lg' }}
                    maxW="600px"
                    lineHeight="tall"
                  >
                    {currentService.description}
                  </Text>

                  <Text
                    color="brand.500"
                    fontSize={{ base: 'xs', md: 'sm' }}
                    letterSpacing="wide"
                    fontWeight={500}
                  >
                    {currentService.highlight}
                  </Text>

                  <Button
                    as={RouterLink}
                    to={currentService.link}
                    variant="primary"
                    size={{ base: 'md', md: 'lg' }}
                    rightIcon={<ArrowRight size={18} />}
                  >
                    Explore {currentService.title}
                  </Button>
                </MotionVStack>
              </AnimatePresence>
            </Box>

            {/* Next Button */}
            <IconButton
              icon={<ChevronRight size={32} />}
              onClick={nextSlide}
              variant="ghost"
              rounded="full"
              size="lg"
              color="white"
              bg="whiteAlpha.100"
              _hover={{ bg: 'brand.500', color: 'dark.400' }}
              display={{ base: 'none', md: 'flex' }}
              aria-label="Next slide"
            />
          </Flex>

          {/* Mobile Navigation */}
          <HStack justify="center" spacing={4} mt={6} display={{ base: 'flex', md: 'none' }}>
            <IconButton
              icon={<ChevronLeft size={24} />}
              onClick={prevSlide}
              variant="ghost"
              rounded="full"
              color="white"
              bg="whiteAlpha.100"
              _hover={{ bg: 'brand.500', color: 'dark.400' }}
              aria-label="Previous slide"
            />
            <IconButton
              icon={<ChevronRight size={24} />}
              onClick={nextSlide}
              variant="ghost"
              rounded="full"
              color="white"
              bg="whiteAlpha.100"
              _hover={{ bg: 'brand.500', color: 'dark.400' }}
              aria-label="Next slide"
            />
          </HStack>

          {/* Slide Indicators */}
          <HStack justify="center" spacing={{ base: 2, md: 4 }} mt={{ base: 6, md: 10 }}>
            {services.map((service, index) => (
              <Button
                key={index}
                onClick={() => goToSlide(index)}
                variant="ghost"
                size="sm"
                px={{ base: 2, md: 4 }}
                py={2}
                h="auto"
                color={index === currentSlide ? 'brand.500' : 'gray.500'}
                bg={index === currentSlide ? 'whiteAlpha.100' : 'transparent'}
                borderBottom="2px solid"
                borderColor={index === currentSlide ? 'brand.500' : 'transparent'}
                rounded="none"
                _hover={{ color: 'brand.500' }}
                aria-label={`Go to ${service.title}`}
              >
                <HStack spacing={2}>
                  <service.icon size={18} />
                  <Text
                    display={{ base: 'none', md: 'block' }}
                    fontSize="sm"
                    fontWeight={index === currentSlide ? 600 : 400}
                  >
                    {service.title}
                  </Text>
                </HStack>
              </Button>
            ))}
          </HStack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        as="section"
        position="relative"
        py={{ base: 12, md: 16 }}
        overflow="hidden"
      >
        {/* Glow Effect */}
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          w="100%"
          h="100%"
          bgGradient="radial(ellipse at center, rgba(201, 162, 39, 0.1) 0%, transparent 60%)"
          pointerEvents="none"
        />

        <Container maxW="800px" position="relative">
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <VStack spacing={{ base: 4, md: 6 }} textAlign="center">
              <Heading
                as="h2"
                fontSize={{ base: '2xl', md: '4xl' }}
                fontWeight={700}
              >
                Ready to Start Your Project?
              </Heading>

              <Text color="gray.400" fontSize={{ base: 'md', md: 'lg' }}>
                Get a free consultation and quote from our experts
              </Text>

              <Flex
                direction={{ base: 'column', sm: 'row' }}
                gap={4}
                pt={4}
                w={{ base: 'full', sm: 'auto' }}
              >
                <Button
                  as={RouterLink}
                  to="/contact"
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight size={18} />}
                  w={{ base: 'full', sm: 'auto' }}
                >
                  Get In Touch
                </Button>
                <Button
                  as={Link}
                  href="tel:+919071234091"
                  variant="secondary"
                  size="lg"
                  leftIcon={<Phone size={18} />}
                  w={{ base: 'full', sm: 'auto' }}
                >
                  +91 90712 34091
                </Button>
              </Flex>
            </VStack>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  )
}

export default Home
