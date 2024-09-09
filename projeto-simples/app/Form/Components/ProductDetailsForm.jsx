import React from "react";
import { Box, InputAdornment, FormControl, InputLabel, Input } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TextField } from '@mui/material';
import { Controller } from "react-hook-form";
import dayjs from "dayjs";
import { useFormContext } from "react-hook-form";
import { NumericFormat } from 'react-number-format';


function ProductDetailsForm({ register, setValue, }) {
    const { control } = useFormContext();
    return (
        <>
            <Box className="flex flex-row flex-wrap">
                <Controller
                    name='quantidade'
                    control={control}
                    render={({ field: { onChange, value, ...field } }) => (
                        <NumericFormat
                            {...field}
                            value={value ?? ''}
                            onValueChange={({ floatValue }) => {
                                onChange(floatValue ?? 0);
                                setValue('quantidade', floatValue ?? 0);
                            }}
                            thousandSeparator='.'
                            decimalSeparator=','
                            customInput={TextField}
                            label={"Quantidade"}
                            className="m-4 w-80"
                            InputProps={{
                                endAdornment: <InputAdornment position="end">uni</InputAdornment>,
                            }}
                            {...register('quantidade')}
                        />
                    )}
                />
                <Controller
                    name='valorUnitario'
                    control={control}
                    render={({ field: { onChange, value, ...field } }) => (
                        <NumericFormat
                            {...field}
                            value={value ?? ''}
                            onValueChange={({ floatValue }) => {
                                onChange(floatValue ?? 0);
                                setValue('valorUnitario', floatValue ?? 0);
                            }}
                            thousandSeparator='.'
                            decimalSeparator=','
                            customInput={TextField}
                            label={"Valor Unitário"}
                            className="m-4 w-80"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">R$</InputAdornment>
                            }}
                            {...register('valorUnitario')}
                        />
                    )}
                />

                <Controller
                    name='peso'
                    control={control}
                    render={({ field: { onChange, value, ...field } }) => (
                        <NumericFormat
                            {...field}
                            value={value ?? ''}
                            onValueChange={({ floatValue }) => {
                                onChange(floatValue ?? 0);
                                setValue('peso', floatValue ?? 0);
                            }}
                            thousandSeparator='.'
                            decimalSeparator=','
                            customInput={TextField}
                            label={"Peso"}
                            className="m-4 w-80"
                            InputProps={{
                                endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                            }}
                            {...register('peso')}
                        />
                    )}
                />
                <Controller
                    name='volume'
                    control={control}
                    render={({ field: { onChange, value, ...field } }) => (
                        <NumericFormat
                            {...field}
                            value={value ?? ''}
                            onValueChange={({ floatValue }) => {
                                onChange(floatValue ?? 0);
                                setValue('volume', floatValue ?? 0);
                            }}
                            thousandSeparator='.'
                            decimalSeparator=','
                            customInput={TextField}
                            label={"Volume"}
                            className="m-4 w-80"
                            InputProps={{
                                endAdornment: <InputAdornment position="end">uni</InputAdornment>,
                            }}
                            {...register('valorUnitario')}
                        />
                    )}
                />
                <Controller
                    name='valor'
                    control={control}
                    render={({ field: { onChange, value, ...field } }) => (
                        <NumericFormat
                            {...field}
                            value={value ?? ''}
                            onValueChange={({ floatValue }) => {
                                onChange(floatValue ?? 0);
                                setValue('valor', floatValue ?? 0);
                            }}
                            thousandSeparator='.'
                            decimalSeparator=','
                            customInput={TextField}
                            label={"Valor"}
                            className="m-4 w-80"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">R$</InputAdornment>
                            }}
                            {...register('valor')}
                        />
                    )}
                />
            </Box >

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
                            render={({ value }) => (
                                <DatePicker
                                    label="Prazo Mínimo"
                                    selected={value}
                                    onChange={(date) => {
                                        setValue('prazoMin', date);
                                    }}
                                    format="DD/MM/YYYY"
                                />
                            )}
                            {...register("prazoMi")}
                        />
                    </LocalizationProvider>
                </FormControl>
                <FormControl className="m-4 w-60">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Controller
                            name="prazoMax"
                            control={control}
                            render={({ value }) => (
                                <DatePicker
                                    label="Prazo Máximo"
                                    selected={value}
                                    onChange={(date) => {
                                        setValue('prazoMax', date);
                                    }}
                                    format="DD/MM/YYYY"
                                />
                            )}
                            {...register("prazoMax")}
                        />
                    </LocalizationProvider>
                </FormControl>
            </Box>
        </>
    );
}

export default ProductDetailsForm;