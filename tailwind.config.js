/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            primary: "#0E0F20", //body
            secondary: "#343657", //card
            tertiary: "#333787", //footer
            pink: "#DB3647",
            mezenda: "#00B9C5",
            gry: "#e3e5f1",
         },
      },
   },
   plugins: [require("daisyui")],
};
