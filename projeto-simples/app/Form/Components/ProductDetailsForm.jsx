import React, { useState, useEffect } from "react";
import { Box, InputAdornment, FormControl, InputLabel, Input } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CustomInput from "./CustomInput";
import { Controller } from "react-hook-form";
import { formatCurrency, formatNumber } from "../hooks/formatters.tsx";
import dayjs from "dayjs";

function ProductDetailsForm({ register, control, setValue, calculatedValue, setCalculatedValue }) {
    const [quantity, setQuantity] = useState("");
    const [unitPrice, setUnitPrice] = useState("");

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
        <>
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
                                    format="DD/MM/YYYY"
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
                                    format="DD/MM/YYYY"
                                />
                            )}
                        />
                    </LocalizationProvider>
                </FormControl>
            </Box>
        </>
    );
}

export default ProductDetailsForm;