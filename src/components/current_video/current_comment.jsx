import React from 'react';
import styles from './current_comment.module.css';

const CurrentComment = (props) => {
  return (
    <div className={styles.comment}>
      <img
        className={styles.thumbnail}
        src={props.comment.authorProfileImageUrl}
        alt="profile"
      />
      <div className={styles.metaData}>
        <div className={styles.author}>{props.comment.authorDisplayName}</div>
        <div className={styles.text}>{props.comment.textOriginal}</div>
      </div>
    </div>
  );
};

export default CurrentComment;
