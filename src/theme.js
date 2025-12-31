import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      50: '#fdf8e6',
      100: '#f5ecc4',
      200: '#eddf9f',
      300: '#e5d279',
      400: '#d4af37',
      500: '#c9a227',
      600: '#a68a1f',
      700: '#836d19',
      800: '#615013',
      900: '#3e330c',
    },
    dark: {
      50: '#2a2a2a',
      100: '#1a1a1a',
      200: '#151515',
      300: '#111111',
      400: '#0a0a0a',
      500: '#080808',
      600: '#050505',
      700: '#030303',
      800: '#020202',
      900: '#000000',
    },
  },
  fonts: {
    heading: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
    body: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
  },
  styles: {
    global: {
      'html, body': {
        bg: '#0a0a0a',
        color: 'white',
        lineHeight: 1.6,
        scrollBehavior: 'smooth',
      },
      '::selection': {
        bg: '#c9a227',
        color: '#0a0a0a',
      },
      '::-webkit-scrollbar': {
        width: '8px',
      },
      '::-webkit-scrollbar-track': {
        bg: '#111111',
      },
      '::-webkit-scrollbar-thumb': {
        bg: '#a68a1f',
        borderRadius: '4px',
      },
      '::-webkit-scrollbar-thumb:hover': {
        bg: '#c9a227',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '1px',
      },
      variants: {
        primary: {
          bg: 'linear-gradient(135deg, #c9a227 0%, #a68a1f 100%)',
          color: '#0a0a0a',
          _hover: {
            transform: 'translateY(-3px)',
            boxShadow: '0 0 30px rgba(201, 162, 39, 0.3)',
            _disabled: {
              bg: 'linear-gradient(135deg, #c9a227 0%, #a68a1f 100%)',
            },
          },
        },
        outline: {
          borderColor: '#c9a227',
          color: '#c9a227',
          _hover: {
            bg: '#c9a227',
            color: '#0a0a0a',
          },
        },
        secondary: {
          bg: '#1a1a1a',
          border: '1px solid',
          borderColor: '#2a2a2a',
          color: 'white',
          _hover: {
            bg: '#151515',
            borderColor: '#c9a227',
            color: '#c9a227',
          },
        },
        ghost: {
          color: 'gray.400',
          _hover: {
            bg: 'whiteAlpha.100',
            color: 'white',
          },
        },
      },
      defaultProps: {
        variant: 'primary',
      },
    },
    Link: {
      baseStyle: {
        color: 'inherit',
        _hover: {
          textDecoration: 'none',
          color: '#c9a227',
        },
      },
    },
    Input: {
      variants: {
        filled: {
          field: {
            bg: '#1a1a1a',
            border: '1px solid',
            borderColor: '#2a2a2a',
            _hover: {
              bg: '#151515',
              borderColor: '#a68a1f',
            },
            _focus: {
              bg: '#151515',
              borderColor: '#c9a227',
            },
          },
        },
      },
      defaultProps: {
        variant: 'filled',
      },
    },
    Textarea: {
      variants: {
        filled: {
          bg: '#1a1a1a',
          border: '1px solid',
          borderColor: '#2a2a2a',
          _hover: {
            bg: '#151515',
            borderColor: '#a68a1f',
          },
          _focus: {
            bg: '#151515',
            borderColor: '#c9a227',
          },
        },
      },
      defaultProps: {
        variant: 'filled',
      },
    },
    Select: {
      variants: {
        filled: {
          field: {
            bg: '#1a1a1a',
            border: '1px solid',
            borderColor: '#2a2a2a',
            _hover: {
              bg: '#151515',
              borderColor: '#a68a1f',
            },
            _focus: {
              bg: '#151515',
              borderColor: '#c9a227',
            },
          },
        },
      },
      defaultProps: {
        variant: 'filled',
      },
    },
    Modal: {
      baseStyle: {
        dialog: {
          bg: '#111111',
          border: '1px solid',
          borderColor: '#2a2a2a',
        },
        overlay: {
          bg: 'blackAlpha.800',
          backdropFilter: 'blur(4px)',
        },
      },
    },
  },
})

export default theme
