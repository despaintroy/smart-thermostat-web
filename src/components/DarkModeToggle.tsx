import { DarkMode, LightMode } from "@mui/icons-material";
import { IconButton, useColorScheme } from "@mui/joy";
import { FC } from "react";

const DarkModeToggle: FC = () => {
  const { mode, setMode } = useColorScheme();

  return (
    <IconButton
      variant="outlined"
      onClick={() => {
        if (mode === "light") {
          setMode("dark");
        } else {
          setMode("light");
        }
      }}
    >
      {mode === "light" ? <LightMode /> : <DarkMode />}
    </IconButton>
  );
};

export default DarkModeToggle;
