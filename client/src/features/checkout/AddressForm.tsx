import { Typography, Grid } from "@mui/material";
import AppTextInput from "../../app/components/AppTextInput";
import { useFormContext } from "react-hook-form";
import AppCheckbox from "../../app/components/AppCheckbox";

export default function AddressForm() {
  const { control } = useFormContext();
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <AppTextInput control={control} name="fullName" label="Full name" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <AppTextInput control={control} name="address1" label="Address" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <AppTextInput control={control} name="city" label="city" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <AppTextInput control={control} name="state" label="State" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <AppTextInput control={control} name="zip" label="Zip" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <AppTextInput control={control} name="country" label="Country" />
        </Grid>
        <Grid item xs={12}>
          <AppCheckbox
            // disabled={!formState.isDirty}
            name="saveAddress"
            label="Save as default address"
            control={control}
          />
        </Grid>
      </Grid>
    </>
  );
}
