"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Box, Typography, Button } from "@mui/material";
import dayjs from "dayjs";
import useStore from "./hooks/useStore.tsx";
import { unformatCurrency, unformatNumber } from "./hooks/formatters.tsx";
import TotalsSection from "./Components/TotalsSection";
import ProductDetailsForm from "./Components/ProductDetailsForm";
import AdditionalInfoSection from "./Components/AdditionalInfoSection";

function Form() {
  const { register, handleSubmit, control, setValue, reset } = useForm();
  const [calculatedValue, setCalculatedValue] = useState("0,00");

  const products = useStore((state) => state.products);
  const addProduct = useStore((state) => state.addProduct);

  const onSubmit = (data) => {
    const product = {
      quantidade: data.quantidade,
      vlrUnit: data.valorUnitario,
      valor: data.quantidade * parseFloat(data.valorUnitario.replace(/\./g, "")),
      peso: unformatNumber(data.peso),
      volume: unformatNumber(data.volume),
      prazoMin: data.prazoMin ? dayjs(data.prazoMin).format("YYYY-MM-DD") : "",
      prazoMax: data.prazoMax ? dayjs(data.prazoMax).format("YYYY-MM-DD") : "",
      desc: data.desc,
    };
    addProduct(product);

    reset({
      quantidade: "",
      valorUnitario: "",
      valor: "",
      peso: "",
      volume: "",
      prazoMin: "",
      prazoMax: "",
      desc: "",
    });

    setCalculatedValue("0,00");
  };

  return (
    <Box p={4}>
      <Typography variant="h5" color="textSecondary" mb={3}>
        Mais informações
      </Typography>

      <TotalsSection register={register} products={products} />

      <AdditionalInfoSection register={register} />

      <Typography variant="h6" color="textSecondary" mt={3}>
        Descrição do Produto/Serviço
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ProductDetailsForm
          register={register}
          control={control}
          setValue={setValue}
          calculatedValue={calculatedValue}
          setCalculatedValue={setCalculatedValue}
        />
        <Button type="submit" variant="contained" color="primary">
          +
        </Button>
      </form>
    </Box>
  );
}

export default Form;
