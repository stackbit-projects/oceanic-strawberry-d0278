module.exports = {
  purge: {
    content: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
      options: {
        whitelist: [],
      }
  },
  theme: {
    fontFamily: {
        body: ['Montserrat', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
    },
    extend: {
        colors: {
            primary: '#171844',
            secondary: 'rgb(81,142,248)',
            tertiary: '#D3D3D3',
            error: '#FF6363',
            white: '#FFFFFF',
            lightGray: '#F9F9F9',
            gray: '#F3F3F3',
            transparent: 'transparent'
        }
    },
  },
  variants: {},
  plugins: [],
}
