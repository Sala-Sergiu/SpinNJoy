import { Checkbox, FormControlLabel } from "@mui/material";
import { UseControllerProps, useController } from "react-hook-form";

interface Props extends UseControllerProps {
  label: string;
  disabled?: boolean;
}

export default function AppCheckbox({ label, ...props }: Props) {
  const { field } = useController(props);

  return (
    <FormControlLabel
      control={
        <Checkbox {...field} color="secondary" disabled={props.disabled} />
      }
      label={label}
    />
  );
}
