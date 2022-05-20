import React, { FC, PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

import Container from '../../components/Container';
import Header from '../../components/Header';

import styles from './layout.module.scss';

const PageLayout: FC<PropsWithChildren<object>> = (props): JSX.Element => {
  return (
    <>
      <Header />

      <Container className={styles.page}>
        <Outlet />
      </Container>
    </>
  );
};

export default PageLayout;
