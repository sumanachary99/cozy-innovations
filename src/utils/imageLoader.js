// Image loader utility for loading images from src/assets/images folder
// Uses Vite's glob import to automatically discover all images
// Returns array of image objects with src and display name

// Import all images from src/assets/images
const imageModules = import.meta.glob('../assets/images/**/*.{jpeg,jpg,png,webp,gif}', {
  eager: true,
  import: 'default'
})

// Clean up file names for display
const cleanDisplayName = (filename, category, index) => {
  // Remove path and file extension
  let name = filename.split('/').pop().replace(/\.(jpeg|jpg|png|webp|gif)$/i, '')

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
  const images = []
  
  // Map categories to folder paths
  const categoryPaths = {
    construction: 'construction',
    interior: 'interior',
    automotive: 'automotive',
    'leather-furniture': 'custom-furniture/leather-furniture',
    'modern-sofa': 'custom-furniture/modern-sofa'
  }

  // Special case: custom-furniture combines leather and modern sofa
  if (category === 'custom-furniture') {
    const leatherImages = getCategoryImages('leather-furniture').map(img => ({
      ...img,
      subcategory: 'Leather Furniture'
    }))
    const sofaImages = getCategoryImages('modern-sofa').map(img => ({
      ...img,
      subcategory: 'Modern Sofa'
    }))
    return [...leatherImages, ...sofaImages]
  }

  const folderPath = categoryPaths[category]
  if (!folderPath) return []

  // Filter imageModules for the specific folder
  // Path in imageModules will be like '../assets/images/construction/file.jpeg'
  Object.keys(imageModules).forEach((path, index) => {
    if (path.includes(`/images/${folderPath}/`)) {
      images.push({
        src: imageModules[path],
        name: cleanDisplayName(path, category, index),
        subcategory: null
      })
    }
  })

  return images
}

export default getCategoryImages
