import { createTheme } from '@mui/material/styles';
const DarkTheme = createTheme({
    typography: {
        fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
    },
    components : {
        MuiAccordionSummary : {
            styleOverrides : {
                root : {
                    backgroundColor: '#0d6226',
                    '&.Mui-expanded' : {
                        borderBottom: '1px solid yellow'
                    }
                }
            }
        },
        MuiAccordion : {
            styleOverrides : {
                root : {
                    marginTop: 10,
                }
            }
        }
    }
    ,
    palette: {
        mode: 'dark',
    },
});

export default DarkTheme;