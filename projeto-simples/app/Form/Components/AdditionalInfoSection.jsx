import React from "react";
import { InputText } from "./CustomInput";
import { Box } from "@mui/material";
import { useFormContext } from "react-hook-form";

function AdditionalInfoSection() {
  const { control } = useFormContext();
  return (
    <Box className="flex flex-row flex-wrap">
      <InputText label="Ponto de referência" name="pontoReferencia" control={control}/>
      <InputText label="Obs." name="obs" control={control} />
    </Box>
  );
}

export default AdditionalInfoSection;
