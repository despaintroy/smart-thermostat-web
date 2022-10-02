import { CssVarsProvider } from "@mui/joy/styles";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import theme from "theme";
import Login from "views/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <Navigate to="/" replace />,
  },
]);

function App() {
  return (
    <CssVarsProvider
      // disableTransitionOnChange
      theme={theme}
    >
      <RouterProvider router={router} />
    </CssVarsProvider>
  );
}

export default App;
