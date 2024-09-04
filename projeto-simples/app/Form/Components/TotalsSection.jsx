import React, { useEffect, useState } from "react";
import { Box, InputAdornment } from "@mui/material";
import CustomInput from "./CustomInput";
import { unformatCurrency, formatCurrency } from "../hooks/formatters.tsx";

function TotalsSection({ register, products }) {
    const [frete, setFrete] = useState("0,00");
    const [desconto, setDesconto] = useState("0,00");
    const [totalProdutos, setTotalProdutos] = useState("0,00");
    const [totalNota, setTotalNota] = useState("0,00");
    const [pesoTotal, setPesoTotal] = useState("0,00");
    const [volumeTotal, setVolumeTotal] = useState("0,00");

    useEffect(() => {
        const freteValue = parseFloat(unformatCurrency(frete)) || 0;
        const descontoValue = parseFloat(unformatCurrency(desconto)) || 0;

        if (products.length > 0) {
            const totalProdutosValue = products.reduce((sum, product) => sum + product.valor, 0);
            setTotalProdutos(totalProdutosValue);
            setPesoTotal(products.reduce((sum, product) => sum + product.peso, 0));
            setVolumeTotal(products.reduce((sum, product) => sum + product.volume, 0));
            const totalNotaValue = totalProdutosValue + freteValue - descontoValue;
            setTotalNota(totalNotaValue);
        }else{
            setTotalProdutos(0);
            setPesoTotal(0);
            setVolumeTotal(0);
            setTotalNota(0);
        }
    }, [products, frete, desconto]);

    return (
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
            />
            <CustomInput
                id="pesoTotal"
                label="Peso Total"
                type="text"
                name="pesoTotal"
                value={pesoTotal}
                endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                register={register}
            />
            <CustomInput
                id="volumeTotal"
                label="Volume Total"
                type="text"
                name="volumeTotal"
                value={volumeTotal}
                endAdornment={<InputAdornment position="end">uni</InputAdornment>}
                register={register}
            />
        </Box>
    );
}

export default TotalsSection;
