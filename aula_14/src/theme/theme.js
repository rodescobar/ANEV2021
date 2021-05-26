import { createMuiTheme } from '@material-ui/core/styles'

const temaClaro = createMuiTheme(({
    palette: {
        type: 'light',
        primary: {
          main: '#b33aad',
        },
        secondary: {
          main: '#223bb5',
        },
        background: {
          default: '#62ce69',
          paper: '#e9ef7b',
        },
      },    
}))

const temaEscuro = createMuiTheme(({
    palette: {
        type: 'dark',
        primary: {
          main: '#5893df',
        },
        secondary: {
          main: '#2ec5d3',
        },
        background: {
          default: '#192231',
          paper: '#24344d',
        },
      },
}))

export { temaClaro, temaEscuro }