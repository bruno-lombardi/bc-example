export const formatToCurrency = (number) =>
  Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    number
  );
