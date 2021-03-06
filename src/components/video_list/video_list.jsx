import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = (props) => (
  <ul className={styles.videoList}>
    {props.videos.map((video) => (
      <VideoItem
        key={video.id}
        video={video}
        onCurrent={props.onCurrent}
        getComments={props.getComments}
        currentOn={props.currentOn}
      />
    ))}
  </ul>
);

export default VideoList;
