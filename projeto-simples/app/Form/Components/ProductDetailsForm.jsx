import React, { useState, useEffect } from "react";
import { Box, InputAdornment, FormControl, InputLabel, Input } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CustomInput from "./CustomInput";
import { TextField } from '@mui/material';
import { Controller } from "react-hook-form";
import { formatCurrency, formatNumber } from "../hooks/formatters.tsx";
import dayjs from "dayjs";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { FormController } from "../hooks/formController.tsx";


function ProductDetailsForm({ register, setValue, }) {
    const { control } = useFormContext();
    return (
        <>
            <Box className="flex flex-row flex-wrap">
                <CustomInput
                    id="quantidade"
                    label="Quantidade"
                    name="quantidade"
                    endAdornment={<InputAdornment position="end">uni</InputAdornment>}
                />
                <CustomInput
                    id="valorUnitario"
                    label="Valor unitário"
                    name="valorUnitario"
                    startAdornment={
                        <InputAdornment position="start">R$</InputAdornment>
                    }
                />
                <CustomInput
                    id="peso"
                    label="Peso"
                    name="peso"
                    endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                />
                <CustomInput
                    id="volume"
                    label="Volume"
                    name="volume"
                    endAdornment={<InputAdornment position="end">uni</InputAdornment>}
                />
                <CustomInput
                    id="valor"
                    label="Valor"
                    name="valor"
                    startAdornment={
                        <InputAdornment position="start">R$</InputAdornment>
                    }
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
                            //control={control}
                            render={({ field }) => (
                                <DatePicker
                                    label="Prazo Mínimo"
                                    value={field.value ? dayjs(field.value) : null}
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
                            //control={control}
                            render={({ field }) => (
                                <DatePicker
                                    label="Prazo Máximo"
                                    value={field.value ? dayjs(field.value) : null}
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