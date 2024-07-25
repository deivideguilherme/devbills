import { InputMask } from '@react-input/mask';

import { ButtonIcon } from '../../components/button-icon';
import { Card } from '../../components/card';
import { CreateCategoryDialog } from '../../components/create-category-dialog';
import { CreateCTransactionDialog } from '../../components/create-transaction-dialog';
import { Input } from '../../components/input';
import { Logo } from '../../components/logo';
import { Title } from '../../components/title';
import { Transaction } from '../../components/transaction';
import {
  Aside,
  Balance,
  ChartAction,
  ChartContainer,
  ChartContent,
  Filters,
  Header,
  InputGroup,
  Main,
  SearchTransaction,
  Section,
  TransectionGroup,
} from './styles';

export function Home() {
  return (
    <>
      <Header>
        <Logo />
        <div>
          <CreateCTransactionDialog />
          <CreateCategoryDialog />
        </div>
      </Header>
      <Main>
        <Section>
          <Filters>
            <Title title="Saldo" subtitle="Receitas e Despesas no Período" />
            <InputGroup>
              <InputMask
                component={Input}
                mask="dd/mm/aaaa"
                replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
                variant="dark"
                label="Início"
                placeholder="dd/mm/aaaa"
              />
              <InputMask
                component={Input}
                mask="dd/mm/aaaa"
                replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
                variant="dark"
                label="Fim"
                placeholder="dd/mm/aaaa"
              />
              <ButtonIcon />
            </InputGroup>
          </Filters>
          <Balance>
            <Card title="Saldo" amount={1000000} />
            {/*Quando trabalha-se com moedas, o valor tem que ser em centavos, por exemplo: 3 Reais é o mesmo que 300 centavos */}
            <Card title="Saldo" amount={1000000} variant="incomes" />
            <Card title="Saldo" amount={1000000} variant="expenses" />
          </Balance>
          <ChartContainer>
            <header>
              <Title
                title="Gastos"
                subtitle="Despesas por Categoria no Período"
              />
            </header>
            <ChartContent></ChartContent>
          </ChartContainer>
          <ChartContainer>
            <header>
              <Title
                title="Evolução Financeira"
                subtitle="Saldo, Receitas e Gastos no Ano"
              />

              <ChartAction>
                <InputMask
                  component={Input}
                  mask="aaaa"
                  replacement={{ a: /\d/ }}
                  variant="black"
                  label="Ano"
                  placeholder="aaaa"
                />
                <ButtonIcon />
              </ChartAction>
            </header>
            <ChartContent></ChartContent>
          </ChartContainer>
        </Section>
        <Aside>
          <header>
            <Title title="Transações" subtitle="Receitas e Gastos no Período" />
            <SearchTransaction>
              <Input variant="black" placeholder="Procurar Transação" />
              <ButtonIcon />
            </SearchTransaction>
          </header>
          <TransectionGroup>
            <Transaction
              id={1}
              amount={20000}
              date="24/04/2024"
              category={{ title: 'Alimentação', color: '#ff33bb' }}
              title="Mercado"
            />
          </TransectionGroup>
        </Aside>
      </Main>
    </>
  );
}
