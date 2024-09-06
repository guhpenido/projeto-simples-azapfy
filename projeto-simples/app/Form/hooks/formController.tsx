import React, { useEffect } from "react";
import { set, useFormContext, useWatch } from "react-hook-form";
import dayjs from "dayjs";
import { revertCurrency } from "./formatters";

export default function FormController() {
    const { watch, setValue } = useFormContext();
    const quantidade = useWatch({ name: "quantidade" });
    const valor_unitario = useWatch({ name: "valorUnitario" });

    useEffect(() => {
        const _quantidade = revertCurrency(quantidade);
        const _valor_unitario = revertCurrency(valor_unitario);
        const _valor = _quantidade * _valor_unitario;
        const valor = 'R$ ' + _valor.toLocaleString('pt-br', {minimumFractionDigits: 2});
        setValue("valor", valor);
    }, [quantidade, valor_unitario]);
}