import React from 'react';
import styles from './current_video.module.css';

const CurrentVideo = (props) => {
  return (
    <div className={props.current.id ? styles.videoOn : styles.videoOff}>
      <div className={styles.videoPlayerBox}>
        {props.current.id ? (
          <iframe
            className={styles.videoPlayer}
            id="ytplayer"
            type="text/html"
            width="720"
            height="405"
            src={`https://www.youtube.com/embed/${props.current.id}`}
            frameborder="0"
            allowfullscreen
          ></iframe>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default CurrentVideo;
