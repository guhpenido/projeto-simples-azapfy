import React from "react";
import { Box } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { InputNumber, InputCurrency } from "./CustomInput"

function TotalsSection() {
    const { control } = useFormContext();
    return (
        <Box className="flex flex-row flex-wrap">
            <InputCurrency control={control} name='frete' label='Frete' />
            <InputCurrency control={control} name='desconto' label='Desconto' />
            <InputCurrency control={control} name='totalProdutos' label='Total dos Produtos/Serviços' />
            <InputCurrency control={control} name='totalNota' label='Total da Nota' />
            <InputNumber control={control} name='pesoTotal' label='Peso Total' />
            <InputNumber control={control} name='volumeTotal' label='Volume Total' />
        </Box>
    );
}

export default React.memo(TotalsSection);
