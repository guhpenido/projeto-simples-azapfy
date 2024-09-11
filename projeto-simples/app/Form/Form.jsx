"use client";
import React, { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { Box, Typography, Button } from "@mui/material";
import TotalsSection from "./Components/TotalsSection";
import ProductDetailsForm from "./Components/ProductDetailsForm";
import AdditionalInfoSection from "./Components/AdditionalInfoSection";
import FormController from "./hooks/formController.tsx";
import TotalController from "./hooks/TotalController";
import { FormProvider } from "react-hook-form";
import useStore from "./hooks/useStore";
import defaultValues from "./hooks/defaultValues";

function Form() {
  const methods = useForm();
  const products = useStore((state) => state.products);
  const addProduct = useStore((state) => state.addProduct);
  const { register, setValue } = useForm();

  const onSubmit = (data) => {
    if (data.quantidade <= 0 || data.valorUnitario <= 0 || data.peso <= 0 || data.volume <= 0) {
      alert("Valores devem ser diferentes de 0.");
      return;
    }
    const product = {
      quantidade: data.quantidade,
      vlrUnit: data.valorUnitario,
      valor: data.valor,
      peso: data.peso,
      volume: data.volume,
      prazoMin: data.prazoMin ? dayjs(data.prazoMin).format("YYYY-MM-DD") : "",
      prazoMax: data.prazoMax ? dayjs(data.prazoMax).format("YYYY-MM-DD") : "",
      desc: data.desc,
    };
    addProduct(product);
    methods.reset(defaultValues);
  };

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
        <form onSubmit={methods.handleSubmit(onSubmit)}>
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

export default Form;
