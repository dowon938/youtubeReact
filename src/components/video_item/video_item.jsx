import React from 'react';
import styles from './video_item.module.css';

const VideoItem = (props) => {
  const onItemClick = (event) => {
    props.onCurrent(props.video);
    props.getComments(props.video.id);
  };
  const currentOn = props.currentOn === 'list' ? styles.list : styles.grid;
  return (
    <li className={`${styles.container} ${currentOn}`}>
      <div className={styles.video} onClick={onItemClick}>
        <div className={styles.thumbnails}>
          <img
            src={props.video.snippet.thumbnails.medium.url}
            alt="video-item_thumbnails"
          />
        </div>
        <div className={styles.description}>
          <p className={styles.title}>{props.video.snippet.title}</p>
          <p className={styles.channelTitle}>{props.video.snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
