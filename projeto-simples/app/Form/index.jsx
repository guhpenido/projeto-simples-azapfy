"use client";
import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  InputAdornment,
  Typography,
  Button,
  InputLabel,
  FormControl,
  Input,
  TextField,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CustomInput from "./input.jsx";
import useStore from "./hooks/useStore.tsx";
import dayjs from "dayjs";
import {

  formatCurrency,
  formatNumber,
  unformatCurrency,
  unformatNumber,
} from "./hooks/formatters.tsx";

function Form() {
  const { register, handleSubmit, control, setValue, reset } = useForm();
  const [quantity, setQuantity] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [calculatedValue, setCalculatedValue] = useState("");
  const [frete, setFrete] = useState("0,00");
  const [desconto, setDesconto] = useState("0,00");
  const [totalProdutos, setTotalProdutos] = useState("0,00");
  const [totalNota, setTotalNota] = useState("0,00");
  const [pesoTotal, setPesoTotal] = useState("0,00");
  const [volumeTotal, setVolumeTotal] = useState("0,00");

  // Access store state and actions
  const products = useStore((state) => state.products);
  const addProduct = useStore((state) => state.addProduct);

  // Calculate totals and update form values
  useEffect(() => {
    const freteValue = parseFloat(unformatCurrency(frete)) || 0;
    const descontoValue = parseFloat(unformatCurrency(desconto)) || 0;

    if (products.length > 0) {
      setTotalProdutos(
        products.reduce((sum, product) => sum + product.valor, 0)
      );
      setPesoTotal(products.reduce((sum, product) => sum + product.peso, 0));
      setVolumeTotal(
        products.reduce((sum, product) => sum + product.volume, 0)
      );
      const totalNota = totalProdutos + freteValue - descontoValue;
      setTotalNota(totalNota);
    }
  }, [
    products,
    frete,
    desconto,
    totalProdutos,
    pesoTotal,
    volumeTotal,
    totalNota,
  ]);

  const onSubmit = (data) => {
    console.log(data);
    const product = {
      quantidade: data.quantidade,
      vlrUnit: data.valorUnitario,
      valor:
        data.quantidade * parseFloat(data.valorUnitario.replace(/\./g, "")),
      peso: unformatNumber(data.peso),
      volume: unformatNumber(data.volume),
      prazoMin: data.prazoMin ? dayjs(data.prazoMin).format("YYYY-MM-DD") : "",
      prazoMax: data.prazoMax ? dayjs(data.prazoMax).format("YYYY-MM-DD") : "",
      desc: data.desc,
    };
    console.log(product);
    addProduct(product);

    // Reset the form fields
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

    setQuantity("");
    setUnitPrice("0,00");
    setCalculatedValue("0,00");
  };

  const calculateValue = (quantity, unitPrice) => {
    const parsedQuantity = parseFloat(quantity.replace(/\D/g, ""));
    const parsedUnitPrice = parseFloat(
      unitPrice.replace(/\./g, "").replace(",", ".")
    );

    const calculatedValue = parsedQuantity * parsedUnitPrice;

    const formattedValue = calculatedValue
      .toFixed(2)
      .replace(".", ",")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return isNaN(calculatedValue) ? "" : `${formattedValue}`;
  };

  const handleQuantityChange = (e) => {
    const newQuantity = e.target.value;
    setQuantity(newQuantity);
    const newCalculatedValue = calculateValue(newQuantity, unitPrice);
    setCalculatedValue(newCalculatedValue);
  };

  const handleUnitPriceChange = (e) => {
    const newUnitPrice = e.target.value;
    setUnitPrice(newUnitPrice);
    const newCalculatedValue = calculateValue(quantity, newUnitPrice);
    setCalculatedValue(newCalculatedValue);
  };

  return (
    <Box p={4}>
      <Typography variant="h5" color="textSecondary" mb={3}>
        Mais informações
      </Typography>
      <Box className="flex flex-row flex-wrap">
        <CustomInput
          id="frete"
          label="Valor do Frete"
          type="text"
          name="frete"
          value={frete}
          startAdornment={<InputAdornment position="start">R$</InputAdornment>}
          register={register}
          onChange={(e) => {
            e.target.value = formatCurrency(e.target.value);
            setFrete(e.target.value);
          }}
        />
        <CustomInput
          id="desconto"
          label="Desconto"
          type="text"
          name="desconto"
          value={desconto}
          startAdornment={<InputAdornment position="start">R$</InputAdornment>}
          register={register}
          onChange={(e) => {
            e.target.value = formatCurrency(e.target.value);
            setDesconto(e.target.value);
          }}
        />
        <CustomInput
          id="totalProdutos"
          label="Total dos Produtos/Serviços"
          type="text"
          name="totalProdutos"
          value={parseFloat(totalProdutos)
            .toFixed(2)
            .replace(".", ",")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          startAdornment={<InputAdornment position="start">R$</InputAdornment>}
          register={register}
          readOnly
        />
        <CustomInput
          id="totalNota"
          label="Total da Nota"
          type="text"
          name="totalNota"
          value={parseFloat(totalNota)
            .toFixed(2)
            .replace(".", ",")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          startAdornment={<InputAdornment position="start">R$</InputAdornment>}
          register={register}
          readOnly
        />
        <CustomInput
          id="pesoTotal"
          label="Peso Total"
          type="text"
          name="pesoTotal"
          value={pesoTotal}
          endAdornment={<InputAdornment position="end">kg</InputAdornment>}
          register={register}
          readOnly
        />
        <CustomInput
          id="volumeTotal"
          label="Volume Total"
          type="text"
          name="volumeTotal"
          value={volumeTotal}
          endAdornment={<InputAdornment position="end">uni</InputAdornment>}
          register={register}
          readOnly
        />
      </Box>

      <Box className="flex flex-row flex-wrap">
        <FormControl className="m-4 w-80">
          <InputLabel htmlFor="pontoReferencia">Ponto de referência</InputLabel>
          <Input
            id="pontoReferencia"
            type="text"
            {...register("pontoReferencia")}
          />
        </FormControl>
        <FormControl className="m-4 w-96">
          <InputLabel htmlFor="obs">Obs.</InputLabel>
          <Input id="obs" type="text" {...register("obs")} />
        </FormControl>
      </Box>
      <Typography variant="h6" color="textSecondary" mt={3}>
        Descrição do Produto/Serviço
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className="flex flex-row flex-wrap">
          <CustomInput
            id="quantidade"
            label="Quantidade"
            type="text"
            name="quantidade"
            endAdornment={<InputAdornment position="end">uni</InputAdornment>}
            register={register}
            onChange={(e) => {
              e.target.value = formatNumber(e.target.value);
              handleQuantityChange(e);
            }}
          />
          <CustomInput
            id="valorUnitario"
            label="Valor unitário"
            type="text"
            name="valorUnitario"
            startAdornment={
              <InputAdornment position="start">R$</InputAdornment>
            }
            register={register}
            onChange={(e) => {
              e.target.value = formatCurrency(e.target.value);
              handleUnitPriceChange(e);
            }}
          />
          <CustomInput
            id="peso"
            label="Peso"
            type="text"
            name="peso"
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            register={register}
            onChange={(e) => {
              e.target.value = formatCurrency(e.target.value);
            }}
          />
          <CustomInput
            id="volume"
            label="Volume"
            type="text"
            name="volume"
            endAdornment={<InputAdornment position="end">uni</InputAdornment>}
            register={register}
            onChange={(e) => {
              e.target.value = formatNumber(e.target.value);
            }}
          />
          <CustomInput
            id="valor"
            label="Valor"
            type="text"
            name="valor"
            value={calculatedValue}
            startAdornment={
              <InputAdornment position="start">R$</InputAdornment>
            }
            register={register}
            onChange={(e) => {
              e.target.value = formatCurrency(e.target.value);
            }}
          />
        </Box>
        <Box className="flex flex-row flex-wrap">
          <FormControl className="m-4 w-60">
            <InputLabel htmlFor="descricao">Descrição</InputLabel>
            <Input
              id="descricao"
              type="text"
              name="desc"
              {...register("desc")}
            />
          </FormControl>
          <FormControl className="m-4 w-60">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Controller
                name="prazoMin"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    label="Prazo Mínimo"
                    value={field.value ? dayjs(field.value) : null}
                    onChange={(newValue) =>
                      setValue("prazoMin", newValue?.toDate() || "")
                    }
                  />
                )}
              />
            </LocalizationProvider>
          </FormControl>
          <FormControl className="m-4 w-60">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Controller
                name="prazoMax"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    label="Prazo Máximo"
                    value={field.value ? dayjs(field.value) : null}
                    onChange={(newValue) =>
                      setValue("prazoMax", newValue?.toDate() || "")
                    }
                  />
                )}
              />
            </LocalizationProvider>
          </FormControl>
        </Box>
        <Button type="submit" variant="contained" color="primary">
          +
        </Button>
      </form>
    </Box>
  );
}

export default Form;
