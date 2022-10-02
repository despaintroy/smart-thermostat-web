import { Button, ButtonProps, CircularProgress } from "@mui/joy";
import { FC } from "react";

export interface LoadingButtonProps extends ButtonProps {
  loading?: boolean;
}

const LoadingButton: FC<LoadingButtonProps> = ({ loading, ...props }) => {
  return (
    <Button
      {...props}
      disabled={loading || props.disabled}
      children={
        loading ? (
          <CircularProgress
            variant="plain"
            thickness={3}
            sx={{ opacity: 0.5 }}
          />
        ) : (
          props.children
        )
      }
    />
  );
};

export default LoadingButton;
