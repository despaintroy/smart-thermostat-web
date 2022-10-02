import {
  Box,
  Button,
  Link,
  Sheet,
  Stack,
  TextField,
  Typography,
  useColorScheme,
} from "@mui/joy";
import { CssVarsProvider } from "@mui/joy/styles";
import LoadingButton from "components/inputs/LoadingButton";
import { FC, useState } from "react";
import theme from "theme";

const ColorModeToggle: FC = () => {
  const { mode, setMode } = useColorScheme();

  return (
    <Button
      variant="outlined"
      onClick={() => {
        if (mode === "light") {
          setMode("dark");
        } else {
          setMode("light");
        }
      }}
    >
      {mode === "light" ? "Turn dark" : "Turn light"}
    </Button>
  );
};

function App() {
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
  };

  return (
    <CssVarsProvider
      // disableTransitionOnChange
      theme={theme}
    >
      <Box sx={{ bgcolor: "background.body", minHeight: "100vh" }}>
        <ColorModeToggle />
        <Sheet
          sx={{
            maxWidth: 400,
            mx: "auto",
            my: 4,
            py: 2,
            px: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            borderRadius: "sm",
            boxShadow: "md",
            bgcolor: "background.level1",
          }}
        >
          <div>
            <Typography
              level="h3"
              component="h1"
              fontWeight="bold"
              textAlign="center"
            >
              Smart Thermostat
            </Typography>
            <Typography
              level="body2"
              textAlign="center"
              textColor="neutral.500"
            >
              Sign in to continue
            </Typography>
            <Stack spacing={2} sx={{ mt: 2 }}>
              <TextField
                name="email"
                type="email"
                // placeholder="johndoe@email.com"
                label="Email"
              />
              <TextField
                name="password"
                type="password"
                // placeholder="password"
                label="Password"
              />
            </Stack>
            <LoadingButton
              fullWidth
              sx={{
                mt: 3,
                mb: 2,
              }}
              onClick={handleLogin}
              loading={loading}
            >
              Log in
            </LoadingButton>
            <Typography
              endDecorator={<Link href="/sign-up">Sign up</Link>}
              fontSize="sm"
              sx={{ alignSelf: "center" }}
            >
              Don't have an account?
            </Typography>
          </div>
        </Sheet>
      </Box>
    </CssVarsProvider>
  );
}

export default App;
