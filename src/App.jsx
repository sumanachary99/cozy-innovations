import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductCategory from './pages/ProductCategory'
import Galleries from './pages/Galleries'
import Contact from './pages/Contact'

function App() {
  return (
    <Router basename="/cozy-innovations">
      <Box minH="100vh" bg="dark.400">
        <Navbar />
        <Box as="main" pt={{ base: '64px', md: '72px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:category" element={<ProductCategory />} />
            <Route path="/galleries" element={<Galleries />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  )
}

export default App
