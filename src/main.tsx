import { createTheme } from "@mui/material"

const theme = createTheme({
  components: {
    MuiTab:{
        styleOverrides:{
            root:{
                // fontFamily:"Calibri",
                fontFamily:"Century Gothic",
                fontSize:'1.85rem',
                // fontSize:'1.9rem',
                "&.Mui-selected":{
                  backgroundColor: "#eef6fb",
                  color:"#63b1e6",
                  fontWeight:"bold",
                }
            },
        },
    },
    MuiTabs:{
      styleOverrides:{
        root:{
          backgroundColor:"none",
        },
        indicator:{
            height:"0",
        },
      }
    },
  },
})
export default theme;