import React from 'react';

import Jumbotron from '../components/Jumbotron/Jumbotron';
import Icons from '../components/Icons/Icons';

import styles from './Layout.scss';

export default class Layout extends React.Component {

  render() {
    return (
      <section className={styles.layout}>
        <Jumbotron />
        <Icons />
      </section>
    );
  }

}
