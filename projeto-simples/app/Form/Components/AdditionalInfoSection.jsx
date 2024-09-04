import React from "react";
import { Box, FormControl, InputLabel, Input } from "@mui/material";

function AdditionalInfoSection({ register }) {
  return (
    <Box className="flex flex-row flex-wrap">
      <FormControl className="m-4 w-80">
        <InputLabel htmlFor="pontoReferencia">Ponto de referência</InputLabel>
        <Input id="pontoReferencia" type="text" {...register("pontoReferencia")} />
      </FormControl>
      <FormControl className="m-4 w-96">
        <InputLabel htmlFor="obs">Obs.</InputLabel>
        <Input id="obs" type="text" {...register("obs")} />
      </FormControl>
    </Box>
  );
}

export default AdditionalInfoSection;
