"use client";
import React, { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { Box, Typography, Button } from "@mui/material";
import TotalsSection from "./Components/TotalsSection";
import ProductDetailsForm from "./Components/ProductDetailsForm";
import AdditionalInfoSection from "./Components/AdditionalInfoSection";
import FormController from "./hooks/formController.tsx";
import TotalController from "./hooks/TotalController";
import { FormProvider, useFormContext } from "react-hook-form";
import { submitForm } from "./hooks/formController.tsx";
import useStore from "./hooks/useStore";

function Form() {
  const methods = useForm();
  const products = useStore((state) => state.products);
  const addProduct = useStore((state) => state.addProduct);
  const { register, handleSubmit, control, setValue, reset, getValues } = useForm();

  return (
    <Box p={4}>
      <Typography variant="h5" color="textSecondary" mb={3}>
        Mais informações
      </Typography>
      <FormProvider {...methods}>
        <form>
        <TotalsSection register={register} products={products} setValue={setValue} />
        <TotalController />
        </form>
      </FormProvider>
      <AdditionalInfoSection register={register} />

      <Typography variant="h6" color="textSecondary" mt={3}>
        Descrição do Produto/Serviço
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit((data) => submitForm(data, reset, addProduct))}>
          <ProductDetailsForm
            register={register}
            setValue={setValue}
          />
          <Button type="submit" variant="contained" color="primary">
            +
          </Button>
          <FormController />
        </form>
      </FormProvider>
    </Box>
  );
}

export default React.memo(Form);
