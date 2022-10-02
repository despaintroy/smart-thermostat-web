import {extendTheme} from "@mui/joy/styles"

export default extendTheme({
  colorSchemes: {
    light: {
      palette: {
        background: {
          body: "var(--joy-palette-neutral-50)",
          level1: "var(--joy-palette-common-white)"
        }
      }
    },
    dark: {
      palette: {
        background: {}
      }
    }
  },
  fontFamily: {
    // display: "'Roboto Flex', var(--joy-fontFamily-fallback)",
    // body: "'Inter', var(--joy-fontFamily-fallback)",
  }
})
