import { useState, useEffect } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import {
  Box,
  Flex,
  HStack,
  VStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Collapse,
  Link,
  Container,
} from '@chakra-ui/react'
import { Menu as MenuIcon, X, ChevronDown } from 'lucide-react'
import Logo from './Logo'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close drawer and scroll to top on route change
  useEffect(() => {
    onClose()
    setServicesOpen(false)
    window.scrollTo(0, 0)
  }, [location, onClose])

  const categories = [
    { path: '/products/construction', label: 'Construction' },
    { path: '/products/interior', label: 'Interior Designing' },
    { path: '/products/custom-furniture', label: 'Architectural Bespoke Turnkey' },
    { path: '/products/automotive', label: 'Automotive' },
  ]

  const isActive = (path) => location.pathname === path

  const NavLink = ({ to, children, isCta = false }) => (
    <Link
      as={RouterLink}
      to={to}
      px={4}
      py={2}
      rounded="md"
      fontWeight={500}
      fontSize="14px"
      letterSpacing="0.5px"
      color={isActive(to) ? 'white' : 'gray.400'}
      bg={isActive(to) ? 'whiteAlpha.100' : 'transparent'}
      _hover={{
        color: 'white',
        bg: 'whiteAlpha.100',
      }}
      {...(isCta && {
        bg: 'linear-gradient(135deg, #c9a227 0%, #a68a1f 100%)',
        color: '#0a0a0a',
        fontWeight: 600,
        px: 5,
        _hover: {
          transform: 'translateY(-2px)',
          boxShadow: '0 0 30px rgba(201, 162, 39, 0.2)',
        },
      })}
      transition="all 0.2s"
    >
      {children}
    </Link>
  )

  return (
    <Box
      as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      bg={isScrolled ? 'rgba(10, 10, 10, 0.98)' : 'rgba(10, 10, 10, 0.95)'}
      backdropFilter="blur(10px)"
      borderBottom="1px solid"
      borderColor={isScrolled ? '#2a2a2a' : 'transparent'}
      boxShadow={isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.3)' : 'none'}
      transition="all 0.3s ease"
    >
      <Container maxW="1200px">
        <Flex
          h={{ base: '64px', md: '72px' }}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Logo */}
          <Link as={RouterLink} to="/" _hover={{ color: '#c9a227' }}>
            <Logo size="small" showText={true} />
          </Link>

          {/* Desktop Navigation */}
          <HStack spacing={2} display={{ base: 'none', lg: 'flex' }}>
            <NavLink to="/">Home</NavLink>

            {/* Services Dropdown */}
            <Menu>
              <MenuButton
                as={Button}
                variant="ghost"
                rightIcon={<ChevronDown size={16} />}
                px={4}
                py={2}
                h="auto"
                fontWeight={500}
                fontSize="14px"
                letterSpacing="0.5px"
                color={location.pathname.startsWith('/products') ? 'white' : 'gray.400'}
                bg={location.pathname.startsWith('/products') ? 'whiteAlpha.100' : 'transparent'}
                _hover={{
                  color: 'white',
                  bg: 'whiteAlpha.100',
                }}
                _active={{
                  bg: 'whiteAlpha.100',
                }}
              >
                Services
              </MenuButton>
              <MenuList bg="#1a1a1a" borderColor="#2a2a2a" minW="220px">
                {categories.map((item) => (
                  <MenuItem
                    key={item.path}
                    as={RouterLink}
                    to={item.path}
                    fontSize="14px"
                    bg="transparent"
                    color="gray.400"
                    _hover={{
                      bg: 'rgba(201, 162, 39, 0.1)',
                      color: '#c9a227',
                    }}
                    _focus={{
                      bg: 'rgba(201, 162, 39, 0.1)',
                      color: '#c9a227',
                    }}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>

            <NavLink to="/galleries">Our Work</NavLink>
            <NavLink to="/contact" isCta>
              Contact Us
            </NavLink>
          </HStack>

          {/* Mobile Menu Button */}
          <IconButton
            display={{ base: 'flex', lg: 'none' }}
            onClick={onOpen}
            variant="ghost"
            aria-label="Open menu"
            icon={<MenuIcon size={24} />}
            color="white"
            _hover={{ color: '#c9a227' }}
          />
        </Flex>
      </Container>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent bg="#111111">
          <DrawerCloseButton color="#c9a227" size="lg" mt={2} />
          <DrawerHeader borderBottomWidth="1px" borderColor="#2a2a2a">
            <Logo size="small" showText={true} />
          </DrawerHeader>

          <DrawerBody pt={6}>
            <VStack spacing={1} align="stretch">
              {/* Home */}
              <Link
                as={RouterLink}
                to="/"
                py={3}
                px={3}
                rounded="md"
                fontWeight={500}
                color={isActive('/') ? 'white' : 'gray.400'}
                bg={isActive('/') ? 'whiteAlpha.100' : 'transparent'}
                _hover={{ color: 'white', bg: 'whiteAlpha.100' }}
                borderBottom="1px solid #2a2a2a"
              >
                Home
              </Link>

              {/* Services Accordion */}
              <Box borderBottom="1px solid #2a2a2a">
                <Button
                  variant="ghost"
                  w="full"
                  justifyContent="space-between"
                  py={3}
                  px={3}
                  h="auto"
                  fontWeight={500}
                  color={location.pathname.startsWith('/products') ? 'white' : 'gray.400'}
                  _hover={{ color: 'white', bg: 'whiteAlpha.100' }}
                  onClick={() => setServicesOpen(!servicesOpen)}
                  rightIcon={
                    <ChevronDown
                      size={16}
                      style={{
                        transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0)',
                        transition: 'transform 0.2s',
                      }}
                    />
                  }
                >
                  Services
                </Button>
                <Collapse in={servicesOpen}>
                  <VStack align="stretch" pl={4} pb={3} spacing={0}>
                    {categories.map((item) => (
                      <Link
                        key={item.path}
                        as={RouterLink}
                        to={item.path}
                        py={2}
                        px={3}
                        fontSize="14px"
                        color="gray.400"
                        borderLeft="2px solid"
                        borderColor={isActive(item.path) ? '#c9a227' : '#2a2a2a'}
                        _hover={{
                          color: '#c9a227',
                          borderColor: '#c9a227',
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </VStack>
                </Collapse>
              </Box>

              {/* Our Work */}
              <Link
                as={RouterLink}
                to="/galleries"
                py={3}
                px={3}
                rounded="md"
                fontWeight={500}
                color={isActive('/galleries') ? 'white' : 'gray.400'}
                bg={isActive('/galleries') ? 'whiteAlpha.100' : 'transparent'}
                _hover={{ color: 'white', bg: 'whiteAlpha.100' }}
                borderBottom="1px solid #2a2a2a"
              >
                Our Work
              </Link>

              {/* Contact CTA */}
              <Box pt={4}>
                <Link
                  as={RouterLink}
                  to="/contact"
                  display="block"
                  py={3}
                  px={4}
                  rounded="md"
                  fontWeight={600}
                  textAlign="center"
                  bg="linear-gradient(135deg, #c9a227 0%, #a68a1f 100%)"
                  color="#0a0a0a"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: '0 0 30px rgba(201, 162, 39, 0.2)',
                  }}
                  transition="all 0.2s"
                >
                  Contact Us
                </Link>
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default Navbar
