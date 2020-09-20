import { createMuiTheme } from '@material-ui/core/styles';

const bluegreen = "#116466"
const smokyLinen = "#d9b08c"
const steelBlue = "#d1e8e2"
const char = "#0D0208"
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
            fontFamily: 'Roboto',
            fontWeight:  400,
            fontSize: '1rem',
            textTransform: 'none',
        },
        h1:{
            fontWeight: 500,
            fontFamily: 'Overpass Mono',
            fontSize: "3rem",
            padding: "10px",
        },
        h2: {
            fontWeight: 400,
            fontFamily: 'Overpass Mono',
            fontSize: "2.5rem",
            lineHeight: 1.5,
            color: `${bluegreen}`,
            padding: "10px",
        },
        h3: {
            fontWeight: 400,
            fontFamily: 'Overpass Mono',
            fontSize: "2.5rem",
            color: `${bluegreen}`,
            lineHeight: 1.5,
            padding: "10px",
        },
        h4: {
            fontWeight: 200,
            fontFamily: 'Overpass Mono',
            fontSize: "1.5rem",
            color: `${char}`,
            lineHeight: 1.5,
            padding: "10px",
 
        },
        h5: {
            fontWeight: 300,
            fontFamily: 'Overpass Mono',
            fontSize: "1.5rem",
            color: `${char}`,
            lineHeight: 1.5,
            padding: "10px",
        }
    }
})