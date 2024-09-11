import React from "react";
import { Box, InputAdornment } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";
import { NumericFormat } from 'react-number-format';
import { TextField } from '@mui/material';

function TotalsSection({ register }) {
    const { control, setValue } = useFormContext();
    return (
        <Box className="flex flex-row flex-wrap">
            <Controller
                name="frete"
                control={control}
                render={({ field: { onChange, value, ...field } }) => (
                    <NumericFormat
                        {...field}
                        value={value ?? ''}
                        onValueChange={({ floatValue }) => {
                            onChange(floatValue ?? 0);
                        }}
                        thousandSeparator='.'
                        decimalSeparator=','
                        decimalScale={2}
                        fixedDecimalScale={true}
                        customInput={TextField}
                        label="Valor do Frete"
                        className="m-4 w-80"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                        }}
                        {...register('frete')}
                    />
                )}
            />
            <Controller
                name="desconto"
                control={control}
                render={({ field: { onChange, value, ...field } }) => (
                    <NumericFormat
                        {...field}
                        value={value ?? ''}
                        onValueChange={({ floatValue }) => {
                            onChange(floatValue ?? 0);
                        }}
                        thousandSeparator='.'
                        decimalSeparator=','
                        decimalScale={2}
                        fixedDecimalScale={true}
                        customInput={TextField}
                        label="Desconto"
                        className="m-4 w-80"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                        }}
                        {...register('desconto')}
                    />
                )}
            />
            <Controller
                name="totalProdutos"
                control={control}
                render={({ field: { onChange, value, ...field } }) => (
                    <NumericFormat
                        {...field}
                        value={value ?? ''}
                        onValueChange={({ floatValue }) => {
                            onChange(floatValue ?? 0);
                            setValue('totalProdutos', floatValue ?? 0);
                        }}
                        thousandSeparator='.'
                        decimalSeparator=','
                        decimalScale={2}
                        fixedDecimalScale={true}
                        customInput={TextField}
                        label="Total dos Produtos/Serviços"
                        className="m-4 w-80"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                        }}
                        {...register('totalProdutos')}
                    />
                )}
            />
            <Controller
                name="totalNota"
                control={control}
                render={({ field: { onChange, value, ...field } }) => (
                    <NumericFormat
                        {...field}
                        value={value ?? ''}
                        onValueChange={({ floatValue }) => {
                            onChange(floatValue ?? 0);
                            setValue('totalNota', floatValue ?? 0);
                        }}
                        thousandSeparator='.'
                        decimalSeparator=','
                        decimalScale={2}
                        fixedDecimalScale={true}
                        customInput={TextField}
                        label="Total da Nota"
                        className="m-4 w-80"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                        }}
                        {...register('totalNota')}
                    />
                )}
            />
            <Controller
                name="pesoTotal"
                control={control}
                render={({ field: { onChange, value, ...field } }) => (
                    <NumericFormat
                        {...field}
                        value={value ?? ''}
                        onValueChange={({ floatValue }) => {
                            onChange(floatValue ?? 0);
                            setValue('pesoTotal', floatValue ?? 0);
                        }}
                        thousandSeparator="."
                        decimalSeparator=","
                        customInput={TextField}
                        label="Peso Total"
                        className="m-4 w-80"
                        InputProps={{
                            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                        }}
                        {...register('pesoTotal')}
                    />
                )}
            />
            <Controller
                name="volumeTotal"
                control={control}
                render={({ field: { onChange, value, ...field } }) => (
                    <NumericFormat
                        {...field}
                        value={value ?? ''}
                        onValueChange={({ floatValue }) => {
                            onChange(floatValue ?? 0);
                            setValue('volumeTotal', floatValue ?? 0);
                        }}
                        thousandSeparator="."
                        decimalSeparator=","
                        customInput={TextField}
                        label="Volume Total"
                        className="m-4 w-80"
                        InputProps={{
                            endAdornment: <InputAdornment position="end">uni</InputAdornment>,
                        }}
                        {...register('volumeTotal')}
                    />
                )}
            />
        </Box>
    );
}

export default React.memo(TotalsSection);
