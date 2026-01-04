/**
 * Get the correct image path for both development and production
 * @param {string} path - The image path relative to public folder (e.g., '/images/construction/Elevation.jpeg')
 * @returns {string} - The correct path based on environment
 */
export const getImagePath = (path) => {
  // In production, prepend the base path
  if (import.meta.env.PROD) {
    return `/cozy-innovations${path}`
  }
  // In development, use the path as is
  return path
}

export default getImagePath

