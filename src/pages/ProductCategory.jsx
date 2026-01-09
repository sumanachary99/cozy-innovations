import { useParams, Link as RouterLink } from 'react-router-dom'
import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import getImagePath from '../utils/getImagePath'
import {
  Box,
  Container,
  SimpleGrid,
  VStack,
  HStack,
  Heading,
  Text,
  Button,
  Link,
  Center,
  Flex,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  IconButton,
  Badge,
} from '@chakra-ui/react'
import {
  ArrowLeft,
  Check,
  Phone,
  ArrowRight,
  Sofa,
  Car,
  Building2,
  PaintBucket,
  Armchair,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import getCategoryImages from '../utils/imageLoader'

// Import static images
import constructionHeroImg from '../assets/images/construction/Elevation.jpeg'
import interiorHeroImg from '../assets/images/interior/Modern Bedroom Looks You Can Recreate.jpeg'
import furnitureHeroImg from '../assets/images/custom-furniture/leather-furniture/A Welcoming and Inviting Chair.jpeg'
import automotiveHeroImg from '../assets/images/automotive/Car seat red.jpeg'
import leatherSubcatImg from '../assets/images/custom-furniture/leather-furniture/Chapman Dual-Power Reclining Sectional.jpeg'
import sofaSubcatImg from '../assets/images/custom-furniture/modern-sofa/Modern Italian Leather Sofa.jpeg'
import logoPlaceholder from '../assets/images/logo/logo_2-removebg-preview.png'

const MotionBox = motion(Box)

const ProductCategory = () => {
  const { category } = useParams()
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeSubcategory, setActiveSubcategory] = useState('all')

  const categoryData = {
    construction: {
      name: "Construction",
      icon: Building2,
      image: constructionHeroImg,
      description:
        "Professional construction services for residential and commercial projects. Quality workmanship guaranteed.",
      features: [
        "Expert Team",
        "Quality Materials",
        "Timely Completion",
        "Project Management",
        "Permits Handling",
        "Safety Compliance",
      ],
    },
    interior: {
      name: "Interior Designing",
      icon: PaintBucket,
      image: interiorHeroImg,
      description:
        "Expert interior design solutions to transform your spaces. From concept to completion, we bring your vision to life.",
      features: [
        "3D Visualization",
        "Space Planning",
        "Color Consultation",
        "Complete Execution",
        "Furniture Selection",
        "Lighting Design",
      ],
    },
    "custom-furniture": {
      name: "Architectural Bespoke Turnkey",
      icon: Sofa,
      image: furnitureHeroImg,
      description:
        "Transform your living space with our architectural bespoke turnkey solutions. Recliners, sofas, and more designed to fit your space perfectly.",
      features: [
        "Custom Sizing",
        "Fabric Selection",
        "Leather Options",
        "Modular Options",
        "Expert Design",
        "Premium Upholstery",
      ],
      subcategories: [
        {
          id: "leather-furniture",
          name: "Leather Furniture",
          icon: Armchair,
          image: leatherSubcatImg,
          description:
            "Premium leather recliners, armchairs, and accent pieces",
        },
        {
          id: "modern-sofa",
          name: "Modern Sofas",
          icon: Sofa,
          image: sofaSubcatImg,
          description: "Contemporary sofas and sectionals for modern living",
        },
      ],
    },
    automotive: {
      name: "Automotive",
      icon: Car,
      image: automotiveHeroImg,
      description:
        "Premium car seat covers and upholstery services. Protect and enhance your vehicle's interior with our quality solutions.",
      features: [
        "Premium Materials",
        "Perfect Fit",
        "Easy Installation",
        "Multiple Colors",
        "Leather Options",
        "Custom Designs",
      ],
    },
  };

  const data = categoryData[category] || {
    name: "Product",
    icon: Building2,
    description: "Explore our quality products and services.",
    features: [],
  };

  const Icon = data.icon;

  const allImages = useMemo(() => {
    if (category) {
      return getCategoryImages(category);
    }
    return [];
  }, [category]);

  const images = useMemo(() => {
    if (activeSubcategory === "all") {
      return allImages;
    }
    const subcatName =
      activeSubcategory === "leather-furniture"
        ? "Leather Furniture"
        : "Modern Sofa";
    return allImages.filter((img) => img.subcategory === subcatName);
  }, [allImages, activeSubcategory]);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <Box>
      {/* Category Header */}
      <Box
        as="section"
        position="relative"
        py={{ base: 12, md: 20 }}
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
            {/* Back Link - Left aligned */}
            <Link
              as={RouterLink}
              to="/"
              color="#c9a227"
              fontSize="sm"
              display="inline-flex"
              alignItems="center"
              gap={2}
              mb={8}
              _hover={{ color: "#d4af37" }}
            >
              <ArrowLeft size={18} /> Back to Home
            </Link>

            {/* Header Content - Centered */}
            <VStack spacing={6} textAlign="center">
              <Center
                w={{ base: "180px", md: "220px" }}
                h={{ base: "180px", md: "220px" }}
                rounded="2xl"
                bg="whiteAlpha.100"
                overflow="hidden"
                border="2px solid"
                borderColor="#c9a227"
                boxShadow="lg"
              >
                <Image
                  src={data.image || logoPlaceholder}
                  alt={data.name}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  fallbackSrc={logoPlaceholder}
                />
              </Center>

              <Heading
                as="h1"
                fontSize={{ base: "3xl", md: "5xl" }}
                fontWeight={700}
                bgGradient="linear(to-r, #d4af37, white)"
                bgClip="text"
              >
                {data.name}
              </Heading>

              <Text
                color="gray.400"
                fontSize={{ base: "md", md: "lg" }}
                maxW="700px"
              >
                {data.description}
              </Text>
            </VStack>
          </MotionBox>
        </Container>
      </Box>
      {/* Subcategory Cards for Custom Furniture */}
      {data.subcategories && (
        <Box as="section" py={{ base: 8, md: 12 }}>
          <Container maxW="1200px">
            <VStack spacing={8}>
              <Heading as="h2" size="lg" color="white" textAlign="center">
                Choose a Category
              </Heading>

              <SimpleGrid
                columns={{ base: 1, md: 2 }}
                spacing={6}
                w="full"
                maxW="800px"
                mx="auto"
              >
                {data.subcategories.map((subcat) => {
                  const SubIcon = subcat.icon;
                  const isActive = activeSubcategory === subcat.id;
                  return (
                    <Box
                      key={subcat.id}
                      as="button"
                      onClick={() =>
                        setActiveSubcategory(isActive ? "all" : subcat.id)
                      }
                      bg={isActive ? "rgba(201, 162, 39, 0.1)" : "#1a1a1a"}
                      border="2px solid"
                      borderColor={isActive ? "#c9a227" : "#2a2a2a"}
                      borderRadius="xl"
                      p={6}
                      textAlign="center"
                      transition="all 0.3s"
                      _hover={{
                        borderColor: "#c9a227",
                        transform: "translateY(-4px)",
                      }}
                    >
                      <VStack spacing={3}>
                        <Center
                          w="120px"
                          h="120px"
                          rounded="xl"
                          bg={isActive ? "#c9a227" : "whiteAlpha.100"}
                          overflow="hidden"
                          border="2px solid"
                          borderColor={isActive ? "#c9a227" : "#2a2a2a"}
                        >
                          <Image
                            src={subcat.image || logoPlaceholder}
                            alt={subcat.name}
                            w="100%"
                            h="100%"
                            objectFit="cover"
                            fallbackSrc={logoPlaceholder}
                          />
                        </Center>
                        <Heading as="h3" size="md" color="white">
                          {subcat.name}
                        </Heading>
                        <Text color="gray.400" fontSize="sm">
                          {subcat.description}
                        </Text>
                        <Badge colorScheme="yellow" variant="subtle">
                          {
                            allImages.filter(
                              (img) =>
                                img.subcategory ===
                                (subcat.id === "leather-furniture"
                                  ? "Leather Furniture"
                                  : "Modern Sofa")
                            ).length
                          }{" "}
                          images
                        </Badge>
                      </VStack>
                    </Box>
                  );
                })}
              </SimpleGrid>

              {activeSubcategory !== "all" && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveSubcategory("all")}
                >
                  Show All Furniture
                </Button>
              )}
            </VStack>
          </Container>
        </Box>
      )}
      {/* Category Content */}
      <Box as="section" py={{ base: 6, md: 10 }}>
        <Container maxW="1200px">
          {/* Features - Horizontal compact layout */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            mb={{ base: 8, md: 12 }}
          >
            <Heading as="h2" size="md" color="white" mb={4}>
              Features
            </Heading>
            <Flex flexWrap="wrap" gap={3}>
              {data.features.map((feature, index) => (
                <HStack
                  key={index}
                  py={2}
                  px={4}
                  bg="whiteAlpha.50"
                  borderRadius="full"
                  spacing={2}
                >
                  <Box color="#c9a227" flexShrink={0}>
                    <Check size={16} />
                  </Box>
                  <Text color="gray.300" fontSize="sm">
                    {feature}
                  </Text>
                </HStack>
              ))}
            </Flex>
          </MotionBox>

          {/* Gallery - Larger images */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Heading as="h2" size="md" color="white" mb={4}>
              Gallery
            </Heading>

            {images.length > 0 ? (
              <SimpleGrid
                columns={{ base: 2, md: 3, lg: 4 }}
                spacing={4}
                w="full"
              >
                {images.map((image, index) => (
                  <Box
                    key={index}
                    position="relative"
                    borderRadius="xl"
                    overflow="hidden"
                    cursor="pointer"
                    onClick={() => openLightbox(index)}
                    transition="all 0.3s"
                    aspectRatio="1"
                    _hover={{
                      transform: "scale(1.03)",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.name}
                      w="full"
                      h="full"
                      objectFit="cover"
                      loading="lazy"
                      onError={(e) => {
                        e.target.parentElement.style.display = "none";
                      }}
                    />
                    {image.subcategory && (
                      <Badge
                        position="absolute"
                        bottom={2}
                        left={2}
                        bg="rgba(0,0,0,0.7)"
                        color="#c9a227"
                        fontSize="xs"
                        px={2}
                        py={1}
                        borderRadius="md"
                      >
                        {image.subcategory}
                      </Badge>
                    )}
                  </Box>
                ))}
              </SimpleGrid>
            ) : (
              <Center
                w="full"
                h="300px"
                bg="#1a1a1a"
                borderRadius="xl"
                border="1px dashed"
                borderColor="#2a2a2a"
              >
                <VStack spacing={3} color="gray.500">
                  <Icon size={48} />
                  <Text>Images coming soon</Text>
                </VStack>
              </Center>
            )}
          </MotionBox>

          {/* CTA */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            mt={{ base: 16, md: 24 }}
          >
            <Box
              bg="#1a1a1a"
              borderRadius="2xl"
              border="1px solid"
              borderColor="#2a2a2a"
              p={{ base: 8, md: 12 }}
              textAlign="center"
            >
              <VStack spacing={4}>
                <Heading as="h2" size="lg" color="white">
                  Interested in {data.name}?
                </Heading>
                <Text color="gray.400">
                  Contact us for a free consultation and quote
                </Text>
                <Flex
                  direction={{ base: "column", sm: "row" }}
                  gap={4}
                  pt={4}
                  w={{ base: "full", sm: "auto" }}
                >
                  <Button
                    as={RouterLink}
                    to="/contact"
                    variant="primary"
                    size="lg"
                    rightIcon={<ArrowRight size={18} />}
                    w={{ base: "full", sm: "auto" }}
                  >
                    Get Quote
                  </Button>
                  <Button
                    as={Link}
                    href="tel:+918105715901"
                    variant="secondary"
                    size="lg"
                    leftIcon={<Phone size={18} />}
                    w={{ base: "full", sm: "auto" }}
                  >
                    +91 81057 15901
                  </Button>
                </Flex>
              </VStack>
            </Box>
          </MotionBox>
        </Container>
      </Box>
      ;{/* Lightbox Modal */}
      <Modal
        isOpen={!!selectedImage}
        onClose={closeLightbox}
        size="6xl"
        isCentered
      >
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
            _hover={{ bg: "whiteAlpha.200" }}
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
              _hover={{ bg: "#c9a227", color: "#0a0a0a" }}
              aria-label="Previous"
            />

            <Box maxH="80vh" maxW="80vw">
              <AnimatePresence mode="wait">
                {selectedImage && (
                  <MotionBox
                    key={currentIndex}
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
              _hover={{ bg: "#c9a227", color: "#0a0a0a" }}
              aria-label="Next"
            />
          </Flex>

          <Text color="gray.400" textAlign="center" mt={4}>
            {currentIndex + 1} / {images.length}
          </Text>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default ProductCategory
