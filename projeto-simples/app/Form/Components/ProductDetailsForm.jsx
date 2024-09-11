import React from "react";
import { Box } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { InputNumber, InputCurrency, InputText, InputDate } from "./CustomInput"

function ProductDetailsForm() {
    const { control } = useFormContext();

    return (
        <>
            <Box className="flex flex-row flex-wrap">
                <InputNumber control={control} name='quantidade' label='Quantidade' />
                <InputCurrency control={control} name='valorUnitario' label='Valor Unitário' />
                <InputNumber control={control} name='peso' label='Peso' />
                <InputNumber control={control} name='volume' label='Volume' />
                <InputCurrency control={control} name='valor' label='Valor' />
            </Box>
            <Box className="flex flex-row flex-wrap">
                <InputText control={control} name='desc' label='Descrição' />
                <InputDate control={control} name='prazoMin' label='Prazo Mínimo' />
                <InputDate control={control} name='prazoMax' label='Prazo Máximo' />
            </Box>
        </>
    );
}

export default ProductDetailsForm;
