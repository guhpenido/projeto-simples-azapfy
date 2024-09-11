import React, { useEffect } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import dayjs from "dayjs";

export default function FormController() {
  const { setValue, getValues } = useFormContext();
  const quantidade = useWatch({ name: "quantidade" });
  const valorUnitario = useWatch({ name: "valorUnitario" });

  useEffect(() => {
    console.log("quantidade", quantidade);
    console.log("valorUnitario", valorUnitario);
    const values = getValues();
    console.log("Valores do formulário:", values);
    if (valorUnitario === undefined || quantidade === undefined) {
      setValue("valor", 0);
      return;
    }
    const valor = quantidade * valorUnitario;
    setValue("valor", valor);
  }, [quantidade, valorUnitario, setValue]);

  return null;
}

export function submitForm(data: any, reset: any, addProduct: any) {
  console.log("Dados recebidos no submit:", data);
  const product = {
    quantidade: data.quantidade,
    vlrUnit: data.valorUnitario,
    valor: data.valor,
    peso: data.peso,
    volume: data.volume,
    prazoMin: data.prazoMin ? dayjs(data.prazoMin).format("YYYY-MM-DD") : "",
    prazoMax: data.prazoMax ? dayjs(data.prazoMax).format("YYYY-MM-DD") : "",
    desc: data.desc,
  };
  addProduct(product);

  reset({
    quantidade: 0,
    valorUnitario: 0,
    valor: 0,
    peso: 0,
    volume: 0,
    prazoMin: '',
    prazoMax: '',
    desc: '',
  });
}
