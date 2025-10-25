    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./src/**/*.{html,js}",
        "./public/**/*.html",
        "./src/App.jsx","./src/components/Quote.jsx",
        "./src/components/InputField.jsx",
         "./src/components/Form.jsx",
        // Add other paths as needed
      ],
      theme: {
        extend: {
          fontFamily:{
           
          }
        },
      },
      plugins: [],
    }
