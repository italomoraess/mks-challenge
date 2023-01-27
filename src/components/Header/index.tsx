import React from 'react';
import Link from 'next/link';
import * as Styles from './style';

export function Header() {
  let qtd = 0;

  const implementQtd = () => {
    return qtd += 1;
  }

  return (
    <Styles.Header>
      <Styles.Container>
        <Link href='/'>
        <Styles.Logo>
          <strong>MKS</strong><p>Sistemas</p>
        </Styles.Logo>
        </Link>
        <Styles.Cart onClick={() => qtd + 1}>
          <Styles.Icon />
          <span>{qtd}</span>
        </Styles.Cart>
      </Styles.Container>
    </Styles.Header>
  );
}