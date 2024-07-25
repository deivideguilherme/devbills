//npm i @nivo/bar
import { ResponsiveBar } from '@nivo/bar';
//npm i dayjs
import dayjs from 'dayjs';
import ptBRLocale from 'dayjs/locale/pt-br';
import { useMemo } from 'react';

import { theme } from '../../styles/theme';
import { formatCurrency } from '../../utils/format-currency';

dayjs.locale(ptBRLocale);

const apiData = [
  {
    _id: {
      year: 2024,
      month: 1,
    },
    balance: 68900,
    incomes: 20000,
    expenses: 50000,
  },

  {
    _id: {
      year: 2024,
      month: 2,
    },
    balance: 68900,
    incomes: 20000,
    expenses: 50000,
  },

  {
    _id: {
      year: 2024,
      month: 3,
    },
    balance: 68900,
    incomes: 20000,
    expenses: 50000,
  },

  {
    _id: {
      year: 2024,
      month: 4,
    },
    balance: 68900,
    incomes: 20000,
    expenses: 50000,
  },
];

type ChartData = {
  month: string;
  Saldo: number;
  Receitas: number;
  Gastos: number;
};

export function FinancialEvolutionBarChart() {
  const data = useMemo<ChartData[]>(() => {
    const chartData: ChartData[] = apiData.map((item) => ({
      //npm i dayjs
      month: dayjs(`${item._id.year}-${item._id.month}-01`).format('MMM'),
      Saldo: item.balance,
      Receitas: item.incomes,
      Gastos: item.expenses,
    }));

    return chartData;
  }, []);

  return (
    <ResponsiveBar
      data={data}
      keys={['Saldo', 'Receitas', 'Gastos']}
      colors={[theme.colors.info, theme.colors.primary, theme.colors.error]}
      indexBy={'month'}
      groupMode="grouped"
      enableLabel={false}
      enableGridY={false}
      padding={0.2}
      axisLeft={{
        tickSize: 0,
        format: formatCurrency,
      }}
      margin={{ left: 80, bottom: 28 }}
      theme={{
        text: {
          fontFamily: 'Lexend',
          fontSize: 10,
        },
        //Color do texto nas informações de valores
        axis: {
          ticks: {
            text: {
              fill: theme.colors.white,
            },
          },
        },
        tooltip: {
          container: {
            backgroundColor: theme.colors.black,
            padding: 16,
            color: theme.colors.white,
            fontFamily: 'Lexend',
            fontSize: 12,
            borderRadius: 4,
          },
        },
      }}
      valueFormat={formatCurrency}
    />
  );
}
