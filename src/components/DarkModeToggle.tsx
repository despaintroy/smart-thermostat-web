import { Button, useColorScheme } from "@mui/joy";
import { FC } from "react";

const DarkModeToggle: FC = () => {
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

export default DarkModeToggle;
