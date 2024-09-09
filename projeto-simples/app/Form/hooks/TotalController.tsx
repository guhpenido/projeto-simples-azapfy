import React, { useEffect } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import useStore from "./useStore";

export default function TotalController() {
  const products = useStore((state) => state.products);
  const { control, setValue, getValues } = useFormContext();
  const frete = useWatch({ control, name: "frete" });
  const desconto = useWatch({ control, name: "desconto" });
  const totalProdutos = useWatch({ control, name: "totalProdutos" });

  useEffect(() => {
    console.log("frete", frete);
    console.log("desconto", desconto);
    console.log("totalProdutos", totalProdutos);

    if (frete === undefined || desconto === undefined) {
      setValue("frete", 0);
      setValue("desconto", 0);
    } else {
      setValue("totalNota", totalProdutos + frete - desconto);
    }
  }, [frete, desconto, totalProdutos, setValue]);

  useEffect(() => {
    setValue("pesoTotal", products.reduce((sum, product) => sum + product.peso, 0));
    setValue("volumeTotal", products.reduce((sum, product) => sum + product.volume, 0));
    setValue("totalProdutos", products.reduce((sum, product) => sum + product.valor, 0));
  }, [products, setValue]);

  return null;
}