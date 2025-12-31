import { Link as RouterLink } from 'react-router-dom'
import {
  Box,
  Container,
  SimpleGrid,
  VStack,
  HStack,
  Text,
  Heading,
  Link,
  Button,
  Divider,
  Flex,
  Wrap,
  WrapItem,
  Icon,
} from '@chakra-ui/react'
import { Phone, MapPin, Clock, Mail, ArrowUpRight } from 'lucide-react'
import Logo from './Logo'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/galleries', label: 'Our Work' },
    { to: '/contact', label: 'Contact Us' },
  ]

  const services = [
    { to: '/products/construction', label: 'Construction' },
    { to: '/products/interior', label: 'Interior Designing' },
    { to: '/products/custom-furniture', label: 'Custom Furniture' },
    { to: '/products/automotive', label: 'Automotive' },
  ]

  const locations = ['Bangalore', 'Mysuru', 'Hassan']

  const FooterLink = ({ to, children }) => (
    <Link
      as={RouterLink}
      to={to}
      color="gray.400"
      fontSize="sm"
      _hover={{ color: 'brand.500' }}
      transition="color 0.2s"
    >
      {children}
    </Link>
  )

  const ContactItem = ({ icon: IconComponent, children, href }) => (
    <HStack spacing={3} align="flex-start">
      <Box color="brand.500" mt={0.5}>
        <IconComponent size={18} />
      </Box>
      {href ? (
        <Link
          href={href}
          color="gray.400"
          fontSize="sm"
          _hover={{ color: 'brand.500' }}
          transition="color 0.2s"
        >
          {children}
        </Link>
      ) : (
        <Text color="gray.400" fontSize="sm">
          {children}
        </Text>
      )}
    </HStack>
  )

  return (
    <Box
      as="footer"
      bg="dark.300"
      position="relative"
      overflow="hidden"
      pt={{ base: 12, md: 16 }}
      pb={{ base: 6, md: 8 }}
    >
      {/* Glow effect */}
      <Box
        position="absolute"
        top={0}
        left="50%"
        transform="translateX(-50%)"
        w="100%"
        h="200px"
        bgGradient="radial(ellipse at center top, rgba(201, 162, 39, 0.1) 0%, transparent 70%)"
        pointerEvents="none"
      />

      <Container maxW="1200px" position="relative">
        <SimpleGrid
          columns={{ base: 1, sm: 2, lg: 4 }}
          spacing={{ base: 8, md: 10 }}
          mb={{ base: 10, md: 12 }}
        >
          {/* Brand Section */}
          <VStack align={{ base: 'center', sm: 'flex-start' }} spacing={4}>
            <Logo size="default" showText={true} />
            <Text
              color="gray.400"
              fontSize="sm"
              lineHeight="tall"
              textAlign={{ base: 'center', sm: 'left' }}
            >
              Transforming spaces with premium furniture, expert construction, and
              innovative interior solutions since 2012.
            </Text>
            <Button
              as={RouterLink}
              to="/contact"
              variant="outline"
              size="sm"
              rightIcon={<ArrowUpRight size={16} />}
            >
              Get a Quote
            </Button>
          </VStack>

          {/* Quick Links */}
          <VStack align={{ base: 'center', sm: 'flex-start' }} spacing={4}>
            <Heading as="h4" size="sm" color="white">
              Quick Links
            </Heading>
            <VStack align={{ base: 'center', sm: 'flex-start' }} spacing={2}>
              {quickLinks.map((link) => (
                <FooterLink key={link.to} to={link.to}>
                  {link.label}
                </FooterLink>
              ))}
            </VStack>
          </VStack>

          {/* Services */}
          <VStack align={{ base: 'center', sm: 'flex-start' }} spacing={4}>
            <Heading as="h4" size="sm" color="white">
              Services
            </Heading>
            <VStack align={{ base: 'center', sm: 'flex-start' }} spacing={2}>
              {services.map((service) => (
                <FooterLink key={service.to} to={service.to}>
                  {service.label}
                </FooterLink>
              ))}
            </VStack>
          </VStack>

          {/* Contact */}
          <VStack align={{ base: 'center', sm: 'flex-start' }} spacing={4}>
            <Heading as="h4" size="sm" color="white">
              Contact Us
            </Heading>
            <VStack align={{ base: 'center', sm: 'flex-start' }} spacing={3}>
              <ContactItem icon={Phone} href="tel:+919071234091">
                +91 90712 34091
              </ContactItem>
              <ContactItem icon={Mail} href="mailto:info@cozyinnovations.com">
                info@cozyinnovations.com
              </ContactItem>
              <ContactItem icon={Clock}>Mon - Sat: 9:00 AM - 7:00 PM</ContactItem>
              <HStack spacing={3} align="flex-start">
                <Box color="brand.500" mt={0.5}>
                  <MapPin size={18} />
                </Box>
                <Wrap spacing={1}>
                  {locations.map((location, index) => (
                    <WrapItem key={location}>
                      <Text color="gray.400" fontSize="sm">
                        {location}
                        {index < locations.length - 1 && (
                          <Text as="span" color="dark.50" mx={1}>
                            |
                          </Text>
                        )}
                      </Text>
                    </WrapItem>
                  ))}
                </Wrap>
              </HStack>
            </VStack>
          </VStack>
        </SimpleGrid>

        <Divider borderColor="dark.50" />

        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          pt={{ base: 6, md: 8 }}
          gap={2}
        >
          <Text color="gray.500" fontSize="sm">
            &copy; {currentYear} Cozy Innovations. All rights reserved.
          </Text>
          <Text
            color="brand.500"
            fontSize="sm"
            fontWeight={500}
            letterSpacing="wide"
          >
            Building Your Dreams
          </Text>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer
