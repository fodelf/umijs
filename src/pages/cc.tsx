import React from 'react';
import styles from './index.less';
import { Link } from 'umi';
export default () => {
  return (
    <div>
      <Link to="/test">Users Page</Link>
      <h1 className={styles.title}>Page ccc</h1>
    </div>
  );
}