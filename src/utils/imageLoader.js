// Image loader utility for loading images from public/images folder
// Returns array of image objects with src and display name

const getBasePath = () => {
  return import.meta.env.BASE_URL || '/cozy-innovations/'
}

// Clean up file names for display
const cleanDisplayName = (filename, category, index) => {
  // Remove file extension
  let name = filename.replace(/\.(jpeg|jpg|png|webp|gif)$/i, '')

  // If it's a generic "download" file, give it a nice category-based name
  if (/^download(\s*\(\d+\))?$/i.test(name)) {
    const categoryNames = {
      construction: ['Building Project', 'Construction Site', 'Residential Build', 'Commercial Project', 'Foundation Work', 'Structural Design'],
      interior: ['Living Space', 'Modern Interior', 'Home Design', 'Room Decor', 'Interior Style', 'Space Design', 'Elegant Interior', 'Contemporary Design', 'Cozy Space', 'Stylish Room', 'Design Concept'],
      automotive: ['Premium Seats', 'Car Interior', 'Seat Cover', 'Vehicle Upholstery'],
      'leather-furniture': ['Leather Piece', 'Premium Leather', 'Classic Design', 'Leather Collection'],
      'modern-sofa': ['Modern Design', 'Contemporary Sofa', 'Stylish Seating', 'Designer Piece']
    }
    const names = categoryNames[category] || ['Design']
    return names[index % names.length]
  }

  // Clean up existing names - remove underscores, extra characters
  name = name
    .replace(/_/g, ' ')
    .replace(/\s*\|\s*/g, ' - ')
    .replace(/\s+/g, ' ')
    .trim()

  // Truncate very long names
  if (name.length > 40) {
    name = name.substring(0, 40).trim() + '...'
  }

  return name
}

// Get images for a specific category
const getCategoryImages = (category) => {
  const basePath = getBasePath()

  const imageData = {
    construction: {
      path: 'images/construction',
      files: [
        'download.jpeg',
        'Elevation.jpeg',
        'download (2).jpeg',
        'download (3).jpeg',
        'download (4).jpeg',
        'download (5).jpeg'
      ]
    },
    interior: {
      path: 'images/interior',
      files: [
        'download.jpeg',
        'download (1).jpeg',
        'download (2).jpeg',
        'download (3).jpeg',
        'download (4).jpeg',
        'download (5).jpeg',
        'download (6).jpeg',
        'download (7).jpeg',
        'download (8).jpeg',
        'download (9).jpeg',
        'download (10).jpeg',
        'Modern Modular Kitchen Design _ JSR Interior & Architect.jpeg',
        'Modern Bedroom Looks You Can Recreate.jpeg',
        'Modern Room Ideas.jpeg',
        '25 Grey Bathroom Decor Ideas for a Modern Touch - Plumbing Reads.jpeg',
        '16 Futuristic Furniture Ideas for Game Rooms.jpeg'
      ]
    },
    automotive: {
      path: 'images/automotive',
      files: [
        'download.jpeg',
        'download (1).jpeg',
        'download (2).jpeg',
        'download (4).jpeg',
        'Car seat red.jpeg',
        'Diamond Stitch Leather Seats – Ultimate Luxury Touch _ Exotic Car Interiors.jpeg',
        'Custom Fit Full Set Car Seat Covers for Select Toyota RAV4 Limited XLE SE Platinum Adventure.jpeg',
        'Car decorations for stunning interiors 16 ideas.jpeg'
      ]
    },
    'leather-furniture': {
      path: 'images/custom-furniture/leather-furniture',
      files: [
        'download.jpeg',
        'download (1).jpeg',
        'download (2).jpeg',
        'download (11).jpeg',
        'Chapman Dual-Power Reclining Sectional.jpeg',
        'Jaron Leather Chaise Sectional.jpeg',
        'Accent Chairs You_ll Love _ Wayfair.jpeg',
        'A Welcoming and Inviting Chair.jpeg',
        'Calvin Chester Tufted Black Leather Armchair Elegant Classic Living Room.jpeg',
        'Sophisticated Leather Accent.jpeg'
      ]
    },
    'modern-sofa': {
      path: 'images/custom-furniture/modern-sofa',
      files: [
        'download.jpeg',
        'download (1).jpeg',
        'download (2).jpeg',
        'download (3).jpeg',
        'Vanna 90 1_2_.jpeg',
        'All Sofas.jpeg',
        'Modern Italian Leather Sofa.jpeg'
      ]
    }
  }

  // Handle custom-furniture - combine leather and modern sofa
  if (category === 'custom-furniture') {
    const leatherData = imageData['leather-furniture']
    const sofaData = imageData['modern-sofa']

    const leatherImages = leatherData.files.map((file, index) => ({
      src: `${basePath}${leatherData.path}/${file}`,
      name: cleanDisplayName(file, 'leather-furniture', index),
      subcategory: 'Leather Furniture'
    }))

    const sofaImages = sofaData.files.map((file, index) => ({
      src: `${basePath}${sofaData.path}/${file}`,
      name: cleanDisplayName(file, 'modern-sofa', index),
      subcategory: 'Modern Sofa'
    }))

    return [...leatherImages, ...sofaImages]
  }

  // Handle single category
  const data = imageData[category]
  if (!data) return []

  return data.files.map((file, index) => ({
    src: `${basePath}${data.path}/${file}`,
    name: cleanDisplayName(file, category, index),
    subcategory: null
  }))
}

export default getCategoryImages
