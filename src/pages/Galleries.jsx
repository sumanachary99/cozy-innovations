import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Box,
  Container,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  Center,
  Flex,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  IconButton,
  Badge,
} from '@chakra-ui/react'
import {
  Building2,
  PaintBucket,
  Sofa,
  Car,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import getCategoryImages from '../utils/imageLoader'

const MotionBox = motion(Box)

const Galleries = () => {
  const [selectedGallery, setSelectedGallery] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const galleries = [
    {
      id: 1,
      title: 'Construction Projects',
      category: 'construction',
      icon: Building2,
      description: 'Professional construction projects across Karnataka',
    },
    {
      id: 2,
      title: 'Interior Designs',
      category: 'interior',
      icon: PaintBucket,
      description: 'Beautiful interior transformations for homes and offices',
    },
    {
      id: 3,
      title: 'Architectural Bespoke Turnkey',
      category: 'custom-furniture',
      icon: Sofa,
      description: 'Custom sofas, recliners, and furniture pieces',
    },
    {
      id: 4,
      title: 'Automotive',
      category: 'automotive',
      icon: Car,
      description: 'Premium car seat covers and upholstery work',
    },
  ]

  const galleryImages = useMemo(() => {
    if (selectedGallery) {
      return getCategoryImages(selectedGallery.category)
    }
    return []
  }, [selectedGallery])

  const openLightbox = (index) => {
    setCurrentImageIndex(index)
    setSelectedImage(galleryImages[index])
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = (e) => {
    e.stopPropagation()
    const newIndex = (currentImageIndex + 1) % galleryImages.length
    setCurrentImageIndex(newIndex)
    setSelectedImage(galleryImages[newIndex])
  }

  const prevImage = (e) => {
    e.stopPropagation()
    const newIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length
    setCurrentImageIndex(newIndex)
    setSelectedImage(galleryImages[newIndex])
  }

  const closeGallery = () => {
    setSelectedGallery(null)
    setSelectedImage(null)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
                See Our Work
              </Heading>
              <Text color="gray.400" fontSize={{ base: 'md', md: 'lg' }}>
                Explore our portfolio of completed projects
              </Text>
            </VStack>
          </MotionBox>
        </Container>
      </Box>

      {/* Galleries Grid */}
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
            {galleries.map((gallery) => (
              <MotionBox key={gallery.id} variants={itemVariants}>
                <Box
                  as="button"
                  onClick={() => setSelectedGallery(gallery)}
                  bg="linear-gradient(145deg, #1a1a1a 0%, #111111 100%)"
                  border="1px solid"
                  borderColor="dark.50"
                  borderRadius="xl"
                  overflow="hidden"
                  w="full"
                  textAlign="left"
                  transition="all 0.3s ease"
                  _hover={{
                    borderColor: 'brand.600',
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  {/* Icon Placeholder */}
                  <Center
                    h="180px"
                    bg="dark.100"
                    position="relative"
                    overflow="hidden"
                  >
                    <Center
                      w="80px"
                      h="80px"
                      rounded="2xl"
                      bg="whiteAlpha.100"
                      color="brand.500"
                    >
                      <gallery.icon size={40} />
                    </Center>
                    {/* Hover Overlay */}
                    <Center
                      position="absolute"
                      inset={0}
                      bg="blackAlpha.700"
                      opacity={0}
                      transition="opacity 0.3s"
                      _groupHover={{ opacity: 1 }}
                      sx={{
                        'button:hover &': { opacity: 1 },
                      }}
                    >
                      <Text color="brand.500" fontWeight={600}>
                        View Gallery
                      </Text>
                    </Center>
                  </Center>

                  {/* Info */}
                  <Box p={5}>
                    <Heading as="h3" size="md" color="white" mb={2}>
                      {gallery.title}
                    </Heading>
                    <Text color="gray.400" fontSize="sm" lineHeight="tall">
                      {gallery.description}
                    </Text>
                  </Box>
                </Box>
              </MotionBox>
            ))}
          </MotionBox>
        </Container>
      </Box>

      {/* Gallery Modal */}
      <Modal
        isOpen={!!selectedGallery}
        onClose={closeGallery}
        size="6xl"
        scrollBehavior="inside"
      >
        <ModalOverlay bg="blackAlpha.800" backdropFilter="blur(4px)" />
        <ModalContent bg="dark.300" maxW="90vw" maxH="90vh" my={8}>
          <ModalCloseButton color="brand.500" size="lg" />
          <ModalHeader pb={0}>
            {selectedGallery && (
              <Flex align="center" gap={4}>
                <Center
                  w="50px"
                  h="50px"
                  rounded="xl"
                  bg="whiteAlpha.100"
                  color="brand.500"
                >
                  <selectedGallery.icon size={28} />
                </Center>
                <Box>
                  <Heading size="lg" color="white">
                    {selectedGallery.title}
                  </Heading>
                  <Text color="gray.400" fontSize="sm" fontWeight="normal">
                    {selectedGallery.description}
                  </Text>
                </Box>
              </Flex>
            )}
          </ModalHeader>

          <ModalBody pt={6} pb={8}>
            {galleryImages.length > 0 ? (
              <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={4}>
                {galleryImages.map((image, index) => (
                  <Box
                    key={index}
                    position="relative"
                    borderRadius="lg"
                    overflow="hidden"
                    cursor="pointer"
                    onClick={() => openLightbox(index)}
                    transition="all 0.3s"
                    _hover={{
                      transform: 'scale(1.02)',
                      boxShadow: 'lg',
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.name}
                      w="full"
                      h="150px"
                      objectFit="cover"
                      loading="lazy"
                      onError={(e) => {
                        e.target.parentElement.style.display = 'none'
                      }}
                    />
                    {image.subcategory && (
                      <Badge
                        position="absolute"
                        bottom={2}
                        left={2}
                        colorScheme="yellow"
                        fontSize="xs"
                      >
                        {image.subcategory}
                      </Badge>
                    )}
                  </Box>
                ))}
              </SimpleGrid>
            ) : (
              <Center h="200px" color="gray.500">
                <Text>No images available</Text>
              </Center>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Lightbox Modal */}
      <Modal isOpen={!!selectedImage} onClose={closeLightbox} size="6xl" isCentered>
        <ModalOverlay bg="blackAlpha.900" backdropFilter="blur(8px)" />
        <ModalContent bg="transparent" boxShadow="none" maxW="90vw">
          <IconButton
            icon={<X size={28} />}
            position="absolute"
            top={-12}
            right={0}
            onClick={closeLightbox}
            variant="ghost"
            color="white"
            size="lg"
            aria-label="Close"
            _hover={{ bg: 'whiteAlpha.200' }}
          />

          <Flex align="center" justify="center" position="relative">
            <IconButton
              icon={<ChevronLeft size={36} />}
              position="absolute"
              left={{ base: 0, md: -16 }}
              onClick={prevImage}
              variant="ghost"
              color="white"
              size="lg"
              rounded="full"
              bg="whiteAlpha.200"
              _hover={{ bg: 'brand.500', color: 'dark.400' }}
              aria-label="Previous"
            />

            <Box maxH="80vh" maxW="80vw">
              <AnimatePresence mode="wait">
                {selectedImage && (
                  <MotionBox
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src={selectedImage.src}
                      alt={selectedImage.name}
                      maxH="75vh"
                      maxW="80vw"
                      objectFit="contain"
                      borderRadius="lg"
                    />
                    <Text color="white" textAlign="center" mt={4} fontSize="lg">
                      {selectedImage.name}
                    </Text>
                  </MotionBox>
                )}
              </AnimatePresence>
            </Box>

            <IconButton
              icon={<ChevronRight size={36} />}
              position="absolute"
              right={{ base: 0, md: -16 }}
              onClick={nextImage}
              variant="ghost"
              color="white"
              size="lg"
              rounded="full"
              bg="whiteAlpha.200"
              _hover={{ bg: 'brand.500', color: 'dark.400' }}
              aria-label="Next"
            />
          </Flex>

          <Text color="gray.400" textAlign="center" mt={4}>
            {currentImageIndex + 1} / {galleryImages.length}
          </Text>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default Galleries
