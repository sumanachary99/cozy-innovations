import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Box,
  Container,
  VStack,
  HStack,
  Heading,
  Text,
  Input,
  Select,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  Link,
  Flex,
  Center,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  Send,
  User,
  MessageSquare,
} from 'lucide-react'

const MotionBox = motion(Box)
const MotionFlex = motion(Flex)

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: '',
    comments: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const mailtoLink = `mailto:cozyinnovations2012@gmail.com?subject=Quote Request from ${formData.name}&body=Name: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AProduct: ${formData.product}%0AComments: ${formData.comments}`
    window.location.href = mailtoLink

    setTimeout(() => {
      alert('Thank you for your inquiry! We will contact you soon.')
      setIsSubmitting(false)
    }, 500)
  }

  const products = [
    'Recliner',
    'Customized Sofa',
    'Car Seats',
    'Home Theater',
    'Construction',
    'Renovation',
    'Interior Design',
    'ACP/Fundermax',
    'Glazing',
    'Other',
  ]

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 90712 34091',
      link: 'tel:+919071234091',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'cozyinnovations2012@gmail.com',
      link: 'mailto:cozyinnovations2012@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Locations',
      content: 'Bangalore | Mysuru | Hassan',
      link: null,
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon - Sat: 9:00 AM - 7:00 PM',
      link: null,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
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
                Contact Us
              </Heading>
              <Text color="gray.400" fontSize={{ base: 'md', md: 'lg' }}>
                Get in touch for a free consultation and quote
              </Text>
            </VStack>
          </MotionBox>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box as="section" py={{ base: 12, md: 20 }}>
        <Container maxW="1200px">
          <Grid
            templateColumns={{ base: '1fr', lg: '1fr 1.2fr' }}
            gap={{ base: 12, lg: 16 }}
          >
            {/* Contact Info */}
            <GridItem>
              <MotionBox
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <VStack align="flex-start" spacing={6}>
                  <Heading as="h2" fontSize="1.8rem" fontWeight={600} color="white">
                    Get In Touch
                  </Heading>
                  <Text color="gray.400" lineHeight="1.7">
                    Ready to transform your space? Contact us today for expert
                    consultation and competitive quotes on all our products and
                    services.
                  </Text>

                  <MotionBox
                    as={VStack}
                    align="stretch"
                    spacing={6}
                    w="full"
                    pt={4}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {contactInfo.map((item) => (
                      <MotionFlex
                        key={item.title}
                        variants={itemVariants}
                        gap={4}
                        align="flex-start"
                      >
                        {/* Circular Icon Wrapper - matching old design */}
                        <Center
                          w="50px"
                          h="50px"
                          bg="rgba(201, 162, 39, 0.1)"
                          borderRadius="full"
                          color="#c9a227"
                          flexShrink={0}
                        >
                          <item.icon size={24} />
                        </Center>
                        <VStack align="flex-start" spacing={1}>
                          <Text
                            fontSize="1rem"
                            fontWeight={600}
                            color="white"
                          >
                            {item.title}
                          </Text>
                          {item.link ? (
                            <Link
                              href={item.link}
                              color="#c9a227"
                              fontSize="1rem"
                              fontWeight={500}
                              _hover={{ color: '#d4af37' }}
                            >
                              {item.content}
                            </Link>
                          ) : (
                            <Text color="gray.400" fontSize="0.95rem" lineHeight="1.5">
                              {item.content}
                            </Text>
                          )}
                        </VStack>
                      </MotionFlex>
                    ))}
                  </MotionBox>
                </VStack>
              </MotionBox>
            </GridItem>

            {/* Contact Form */}
            <GridItem>
              <MotionBox
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Heading as="h2" fontSize="1.8rem" fontWeight={600} color="white" mb={6}>
                  Request a Quote
                </Heading>

                <Box
                  bg="linear-gradient(135deg, rgba(26, 26, 26, 0.9) 0%, rgba(17, 17, 17, 0.9) 100%)"
                  borderRadius="lg"
                  border="1px solid"
                  borderColor="#2a2a2a"
                  p={{ base: 6, md: 8 }}
                >
                  <form onSubmit={handleSubmit}>
                    <VStack spacing={5}>
                      <Grid
                        templateColumns={{ base: '1fr', md: '1fr 1fr' }}
                        gap={5}
                        w="full"
                      >
                        <FormControl isRequired>
                          <FormLabel color="gray.400" fontSize="0.9rem" fontWeight={500} requiredIndicator={null}>
                            <HStack spacing={2}>
                              <Box color="#c9a227"><User size={16} /></Box>
                              <Text>Your Name</Text>
                            </HStack>
                          </FormLabel>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            size="lg"
                            bg="#151515"
                            border="1px solid"
                            borderColor="#2a2a2a"
                            _hover={{ borderColor: '#a68a1f', bg: '#1a1a1a' }}
                            _focus={{ borderColor: '#c9a227', bg: '#1a1a1a' }}
                            _placeholder={{ color: 'gray.600' }}
                          />
                        </FormControl>

                        <FormControl isRequired>
                          <FormLabel color="gray.400" fontSize="0.9rem" fontWeight={500} requiredIndicator={null}>
                            <HStack spacing={2}>
                              <Box color="#c9a227"><Phone size={16} /></Box>
                              <Text>Phone</Text>
                            </HStack>
                          </FormLabel>
                          <Input
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                            size="lg"
                            bg="#151515"
                            border="1px solid"
                            borderColor="#2a2a2a"
                            _hover={{ borderColor: '#a68a1f', bg: '#1a1a1a' }}
                            _focus={{ borderColor: '#c9a227', bg: '#1a1a1a' }}
                            _placeholder={{ color: 'gray.600' }}
                          />
                        </FormControl>
                      </Grid>

                      <Grid
                        templateColumns={{ base: '1fr', md: '1fr 1fr' }}
                        gap={5}
                        w="full"
                      >
                        <FormControl>
                          <FormLabel color="gray.400" fontSize="0.9rem" fontWeight={500}>
                            <HStack spacing={2}>
                              <Box color="#c9a227"><Mail size={16} /></Box>
                              <Text>Email</Text>
                            </HStack>
                          </FormLabel>
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email (optional)"
                            size="lg"
                            bg="#151515"
                            border="1px solid"
                            borderColor="#2a2a2a"
                            _hover={{ borderColor: '#a68a1f', bg: '#1a1a1a' }}
                            _focus={{ borderColor: '#c9a227', bg: '#1a1a1a' }}
                            _placeholder={{ color: 'gray.600' }}
                          />
                        </FormControl>

                        <FormControl isRequired>
                          <FormLabel color="gray.400" fontSize="0.9rem" fontWeight={500} requiredIndicator={null}>
                            Product/Service
                          </FormLabel>
                          <Select
                            name="product"
                            value={formData.product}
                            onChange={handleChange}
                            placeholder="Select a product or service"
                            size="lg"
                            bg="#151515"
                            border="1px solid"
                            borderColor="#2a2a2a"
                            _hover={{ borderColor: '#a68a1f', bg: '#1a1a1a' }}
                            _focus={{ borderColor: '#c9a227', bg: '#1a1a1a' }}
                            sx={{
                              '> option': {
                                bg: '#151515',
                                color: 'white',
                              }
                            }}
                          >
                            {products.map((product) => (
                              <option key={product} value={product}>
                                {product}
                              </option>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>

                      <FormControl>
                        <FormLabel color="gray.400" fontSize="0.9rem" fontWeight={500}>
                          <HStack spacing={2}>
                            <Box color="#c9a227"><MessageSquare size={16} /></Box>
                            <Text>Additional Details</Text>
                          </HStack>
                        </FormLabel>
                        <Textarea
                          name="comments"
                          value={formData.comments}
                          onChange={handleChange}
                          placeholder="Tell us more about your requirements..."
                          rows={5}
                          maxLength={500}
                          resize="vertical"
                          bg="#151515"
                          border="1px solid"
                          borderColor="#2a2a2a"
                          _hover={{ borderColor: '#a68a1f', bg: '#1a1a1a' }}
                          _focus={{ borderColor: '#c9a227', bg: '#1a1a1a' }}
                          _placeholder={{ color: 'gray.600' }}
                        />
                        <Text
                          fontSize="0.8rem"
                          color="gray.500"
                          textAlign="right"
                          mt={2}
                        >
                          {formData.comments.length} / 500
                        </Text>
                      </FormControl>

                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        w="full"
                        mt={2}
                        py={6}
                        isLoading={isSubmitting}
                        loadingText="Sending..."
                        rightIcon={<Send size={18} />}
                      >
                        Submit Request
                      </Button>
                    </VStack>
                  </form>
                </Box>
              </MotionBox>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default Contact
