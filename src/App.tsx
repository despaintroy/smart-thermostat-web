import { CssVarsProvider } from "@mui/joy/styles";
import theme from "theme";
import Login from "views/Login";

function App() {
  return (
    <CssVarsProvider
      // disableTransitionOnChange
      theme={theme}
    >
      <Login />
    </CssVarsProvider>
  );
}

export default App;
