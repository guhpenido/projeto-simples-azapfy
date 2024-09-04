export const formatCurrency = (value: string): string => {
    let cleanedValue = value.replace(/[^\d,]/g, "");

    if (cleanedValue.includes(",")) {
        const [integerPart, decimalPart] = cleanedValue.split(",");
        cleanedValue = `${integerPart},${decimalPart.substring(0, 2)}`;
    }

    return cleanedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const formatNumber = (value: string): string => {
    return value.replace(/\D/g, "").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
};

export const unformatCurrency = (value: string): number => {
    // Remove os separadores de milhar (pontos)
    const withoutThousandSeparators = value.replace(/\./g, '');
  
    // Substitui a vírgula decimal por um ponto
    const withDotDecimal = withoutThousandSeparators.replace(',', '.');
  
    // Converte a string para um número
    const numberValue = parseFloat(withDotDecimal);
  
    // Verifica se o número é válido
    return isNaN(numberValue) ? 0 : numberValue;
  };
  

export const unformatNumber = (value: string): number => {
    const unformattedValue = value.replace(/\D/g, "").replace(".", "");
    return parseFloat(unformattedValue);
};