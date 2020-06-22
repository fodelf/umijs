import React from 'react';
import styles from './index.less';

// export default () => {
//   return (
//     <div>
//       <h1 className={styles.title}>Page index</h1>
//     </div>
//   );
// }
export default (props:any) => {
  return <div style={{ padding: 20 }}>{ props.children }</div>;
}