import { createMuiTheme } from '@material-ui/core/styles';

const bluegreen = "#116466"
const smokyLinen = "#d9b08c"
const steelBlue = "#d1e8e2"
const char = "#2c3531"
const cleanLinen = "#ffcb9a"

export default createMuiTheme({
    palette:{
        common:{
            mainGreen: `${bluegreen}`,
            mainLinen: `${smokyLinen}`,
            mainBlue: `${steelBlue}`,
            mainBlack: `${char}`,
            lightLinen: `${cleanLinen}`,
        },
        primary: {
            main: `${bluegreen}`
        },
        secondary: {
            main: `${smokyLinen}`
        },
        info: {
            main: `${steelBlue}`
        },
        neutral: {
            main: `${cleanLinen}`
        }

    },
    typography:{
        tab: {
            fontFamily: 'Overpass Mono',
            textTransform: 'none',
            fontWeight: 600,
            fontSize: '1.3rem',
        },
        estimate: {
            fontFamily: 'Overpass Mono',
            fontWeight:  600,
            fontSize: '1rem',
            textTransform: 'none',
        },
        h1:{
            fontWeight: 500
        },
        h2: {
            fontWeight: 400
        },
        h3: {
            fontWeight: 300
        },
        h4: {
            fontWeight: 200
        }
    }
})