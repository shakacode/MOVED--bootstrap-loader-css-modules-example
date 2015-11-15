import React from 'react';

import styles from './Icons.scss';

export default class Icons extends React.Component {

  render() {
    return (
      <div className={`row ${styles.colItems}`}>
        <div className={`col-md-4 ${styles.colItem}`}>
          <span className="glyphicon glyphicon-headphones" />
          <span className={styles.text}>It.</span>
        </div>
        <div className={`col-md-4 ${styles.colItem}`}>
          <span className="glyphicon glyphicon-glass" />
          <span className={styles.text}>Just.</span>
        </div>
        <div className={`col-md-4 ${styles.colItem}`}>
          <span className="glyphicon glyphicon-thumbs-up" />
          <span className={styles.text}>Works.</span>
        </div>
      </div>
    );
  }

}
