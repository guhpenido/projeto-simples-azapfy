import React, { useEffect } from "react";
import { useFormContext, useWatch } from "react-hook-form";

export default function FormController() {
  const { setValue, getValues } = useFormContext();
  const quantidade = useWatch({ name: "quantidade" });
  const valorUnitario = useWatch({ name: "valorUnitario" });

  useEffect(() => {
    const values = getValues();
    if (valorUnitario === undefined || quantidade === undefined) {
      setValue("valor", 0);
      return;
    }
    const valor = quantidade * valorUnitario;
    setValue("valor", valor);
  }, [quantidade, valorUnitario, setValue]);

  return null;
}
