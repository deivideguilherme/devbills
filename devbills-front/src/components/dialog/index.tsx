import { ReactNode } from 'react';

import { Overlay, Root, Portal, Content, Trigger } from './styles';

type DialogProps = {
  children: ReactNode; //Para tipar qualquer coisa que vai dentro do React
  trigger: JSX.Element; //Para torna-lo um componente nesse formato: <Content></Content>
  open?: boolean; //true or false
  onOpenChange?: (open: boolean) => void; //Qual o tipo de funcão que vou chamar quando abrir ou fechar o diálogo
};

export function Dialog({ children, trigger, open, onOpenChange }: DialogProps) {
  return (
    <Root open={open} onOpenChange={onOpenChange}>
      <Trigger>{trigger}</Trigger>
      <Portal>
        <Overlay />
        <Content>{children}</Content>
      </Portal>
    </Root>
  );
}
