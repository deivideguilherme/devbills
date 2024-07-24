export function formatCurrency(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value / 100); //Usando a divisão por 100 pra assim transformar os centavos em real
}
