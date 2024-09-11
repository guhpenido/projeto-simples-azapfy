"use client";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Box, Typography, Button } from "@mui/material";
import TotalsSection from "./Components/TotalsSection";
import ProductDetailsForm from "./Components/ProductDetailsForm";
import AdditionalInfoSection from "./Components/AdditionalInfoSection";
import FormController from "./hooks/formController.tsx";
import TotalController from "./hooks/TotalController";
import useStore from "./hooks/useStore";
import defaultValues from "./hooks/defaultValues";
import dayjs from "dayjs";

function Form() {
  const methods = useForm();
  const addProduct = useStore((state) => state.addProduct);

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
      prazoMin: data.prazoMin ? dayjs(data.prazoMin).format("DD/MM/YYYY") : "",
      prazoMax: data.prazoMax ? dayjs(data.prazoMax).format("DD/MM/YYYY") : "",
      desc: data.desc,
    };
    addProduct(product);
    methods.reset(defaultValues);
  };

  return (
    <Box p={4}>
      <FormProvider {...methods}>
        <Typography variant="h5" color="textSecondary" mb={3}>
          Mais informações
        </Typography>
        <form>
          <TotalsSection />
          <TotalController />
        </form>
        <AdditionalInfoSection />
        <Typography variant="h6" color="textSecondary" mt={3}>
          Descrição do Produto/Serviço
        </Typography>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <ProductDetailsForm
          />
          <Button type="submit" variant="contained" color="primary">
            +
          </Button>
          <FormController />
        </form>
      </FormProvider>
    </Box >
  );
}

export default Form;
