/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:{
      colors:{
        'lightsky':'#16836F',
        'darksky':'#257262',
        'lightblue':'#1da9b7',
        'footsky':'#034246',
        'darkble':'#003764',
        'lightgreen':'#157a6a',
        'lightblu':'#0098d0',
        'darkblu':'#1169a2',
        'lightgren':'#ebf7f5',
        'tgreen' : '#82b9af',
        'tblue': '#003764;',
        'twhite':'#fff',
        'conf':'#018ce1',
        'theme':'#0548b0',  
        'grinish':' #6d8737'  
        
        
      },
    },
   },
   
   fontFamily: {
    fon:["Merriweather Sans"]
  }, 
  height: {
    '102': '32rem',
    '108': '36rem',
  },
  width: {
    '128': '35rem',
    '116': '28rem',
    '76':  '19rem',
    '102': '25rem',
    '66':  '18rem',
  },
  plugins: [],
}