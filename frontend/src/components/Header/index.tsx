import * as React from 'react';
import Container from '../Container';
import Navigation from '../Navigation';

import styles from "./header.module.scss";

const Header = () => {
  return <header className={styles.header}>
    <Container className={styles.container}>
      <div className={styles.title}>
        The Hitchhiker's Guide to the Galaxy
      </div>
      <Navigation className='header' />
    </Container>
  </header>
}

export default Header;
