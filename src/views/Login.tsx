import { Box, Link, Sheet, Stack, TextField, Typography } from "@mui/joy";
import DarkModeToggle from "components/DarkModeToggle";
import LoadingButton from "components/inputs/LoadingButton";
import { FC, useState } from "react";

const Login: FC = () => {
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
  };

  return (
    <Box sx={{ bgcolor: "background.body", minHeight: "100vh" }}>
      <Stack direction="row" sx={{ p: 2, justifyContent: "flex-end" }}>
        <DarkModeToggle />
      </Stack>
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
          <Typography level="body2" textAlign="center" textColor="neutral.500">
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
  );
};

export default Login;