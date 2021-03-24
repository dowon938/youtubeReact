import React from 'react';
import styles from './video_item.module.css';

const VideoItem = (props) => {
  const onItemClick = (event) => {
    console.log(props.video);
    const id = props.video.id.videoId ? props.video.id.videoId : props.video.id;
    props.onCurrent(id);
  };
  return (
    <li className={props.current.id ? styles.sideContainer : styles.container}>
      <div className={styles.video} onClick={onItemClick}>
        <div className={styles.thumbnails}>
          <img
            src={props.video.snippet.thumbnails.medium.url}
            alt="video-item_thumbnails"
          />
        </div>
        <div className={styles.description}>
          <p className={styles.title}>{props.video.snippet.title}</p>
          <p className={styles.channelTitle}>
            {props.video.snippet.channelTitle}
          </p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
