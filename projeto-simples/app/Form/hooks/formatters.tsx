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
    const withoutThousandSeparators = value.replace(/\./g, '');
    const withDotDecimal = withoutThousandSeparators.replace(',', '.');
    const numberValue = parseFloat(withDotDecimal);
    return isNaN(numberValue) ? 0 : numberValue;
  };
  

export const unformatNumber = (value: string): number => {
    const unformattedValue = value.replace(/\D/g, "").replace(".", "");
    return parseFloat(unformattedValue);
};

export function revertCurrency(currencyString: string) {
    if(!currencyString) return 0;
    const numericString = currencyString
      .replace(/[R$.\s]/g, '')
      .replace(',', '.'); 
    return parseFloat(numericString);
  }