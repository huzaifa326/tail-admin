/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      boxShadow: {
        'default': '0px 8px 13px -3px rgba(0, 0, 0, 0.07);',
      },

      dropShadow: {
        '1': '0px 1px 0px #e2e8f0',
      },
      
      colors: {
        'general-gray': '#64748b',
        'dark-general-gray': '#AEB7C0',
        'stroke': "rgba(226,232,240,1)",
        'strokedark': "rgba(46,58,71,1)",
        'boxdark': "#1C2434",
        'graydark':"#333A48",
        'success':"#219653",
        'red': "#FB5454",
        'black': "#1C2434",
        'meta-3': "#10b981",
        'meta-5': "#259AE6",
        'meta-4': "rgba(49,61,74,1)",
        'meta-8': "rgba(240,149,12,1)",
        'meta-9': "rgba(229,231,235,1)",
        'primary': "rgba(60,80,224,1)",
        'gray': "rgba(239,244,251,1)",
        'bodydark2': 'rgba(138,153,175,1)',
      },

    },
  },
  plugins: [],
}

