

module.exports = {
  content: ["./src/index.html", "./src/**/*.{html,vue,js,ts,jsx,tsx}"],

theme: {
    screens: {
        sm: '580px', /* iphone 6S width */
        md: '820px', /* ipad air width*/
    },

    colors: {
        /* gra = gradient */
        darkBlue: '#202430',
        greyD: '#3A4151',
        grOrange: 'linear-gradient(315deg, #FF99C4 0%, #FFD162 100%)',
        grGreen: 'linear-gradient(315deg, #F5FFA0 0%, #3EF3E8 100%)',
        grBlue: 'linear-gradient(315deg, #3A4AE4 0%, #3B85E6 21.35%, #3EE4E8 73.44%, #3EF3E8 92.71%)',
    },

    spacing: {
        px: '1px',
        0: '0',
        12: '0.75rem',
        15: '0.938rem',
        16: '1rem',
        18: '1.125rem',
        20: '1.25rem',
        21: '1.313rem',
        24: '1.5rem',
        27: '1.688rem',
        36: '2.25rem',
        45: '2.813rem',
        54: '3.375rem',
        250: '15.625',
    }, 

    /*fontFamily: {
        'sans': ['Poppins'],
    },*/

    fontWeight: {
        normal: '400',
        bolder: '700',
    },

    borderRadius: {
        'none': '0',
        'xs': '0.125rem', /* 2px */
        'sm': '1.25rem',
        'me': '1.875rem',
        'lg': '3.125rem',
        'smNav': '1.25rem 1.25rem 0 0',
    },

    boxShadow: {
        'none': '0',
        'normal': '0px 3px 10px rgba(0, 0, 0, 0.35)',
    }

}
}
