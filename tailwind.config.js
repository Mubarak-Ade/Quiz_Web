/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  
  theme: {
    extend: {
      backgroundColor: {
        pallet: {
          'on-fire': {
            100: '#fffb97',
            200: '#fe7f42',
            300: '#7a4b47',
            400: '#7a4b47',
            500: '#2a1617'
          },
          1: {
            100: '#f0f3fa',
            200: '#d5deef',
            300: '#b1c9ef',
            400: '#8aaee0',
            500: '#638ecb',
            600: '#395886'
          },
          2: {
            100: '#201e43',
            200: '#134b70',
            300: '#508c9b',
            400: '#eeeeee',
          },
          3: {
            100: '#032030',
            200: '#022b42',
            300: '#003554',
            400: '#004d74',
            500: '#006494',
            600: '#006da4'
          },
          4: {
            100: '#b5c18e',
            200: '#eadbc8',
            300: '#c7b7a3',
            400: '#f1f1f1'
          },
          5: {
            100: '#36ba98',
            200: '#e9c46a',
            300: '#f4a261',
            400: '#e76f51'
          },
          6: {
            100: '#021526',
            200: '#03346e',
            300: '#6eacda',
            400: '#e2e2b6',
          }
        },
      },
      colors: {
        pallet: {
          'on-fire': {
            100: '#fffb97',
            200: '#fe7f42',
            300: '#7a4b47',
            400: '#7a4b47',
            500: '#2a1617'
          },
          1: {
            100: '#f0f3fa',
            200: '#d5deef',
            300: '#b1c9ef',
            400: '#8aaee0',
            500: '#638ecb',
            600: '#395886'
          },
          2: {
            100: '#201e43',
            200: '#134b70',
            300: '#508c9b',
            400: '#eeeeee',
          },
          3: {
            100: '#032030',
            200: '#022b42',
            300: '#003554',
            400: '#004d74',
            500: '#006494',
            600: '#006da4'
          },
          4: {
            100: '#b5c18e',
            200: '#eadbc8',
            300: '#c7b7a3',
            400: '#f1f1f1'
          },
          5: {
            100: '#36ba98',
            200: '#e9c46a',
            300: '#f4a261',
            400: '#e76f51'
          },
          6: {
            100: '#021526',
            200: '#03346e',
            300: '#6eacda',
            400: '#e2e2b6',
          }
        },
      },
      backgroundImage: {
        'img-1' : "url('/src/assets/ionela-mat--a8A-n-zqmk-unsplash.jpg')",
        'img-2' : "url('/src/assets/david-drucsko-eZ_hyar3qqc-unsplash.jpg')",
        'img-3' : "url('/src/assets/lautaro-andreani-UYsBCu9RP3Y-unsplash.jpg')"
      },
      animation: {
        "type": 'type 5s linear infinite'
      },
      keyframes: { 
        type: {
          '0%, 10%, 100%': {width: 0},
          '10%,20%,30%,40%,50%,60%,70%,80%,90%,100%': {borderRightColor: 'transparent'},
          '11%,21%,31%,41%,51%,61%,71%,81%,91%': {borderRightColor: '#956afa'},
          '60%, 80%': {width: '100%'}
        }
      }
    },
  },
  plugins: [],
}

