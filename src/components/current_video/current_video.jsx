import React from 'react';
import CurrentComment from './current_comment';
import styles from './current_video.module.css';

const CurrentVideo = (props) => {
  return (
    <div className={styles.videoOn}>
      <div className={styles.videoPlayerBox}>
        <iframe
          className={styles.videoPlayer}
          title="yt video player"
          id="ytplayer"
          type="text/html"
          width="720"
          height="405"
          src={`https://www.youtube.com/embed/${props.current.video.id}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.metaData}>
        <div className={styles.title}>{props.current.video.snippet.title}</div>
        <div className={styles.description}>
          {props.current.video.snippet.description}
        </div>
        {props.comments ? (
          <div className="comments">
            {props.comments.map((comment) => (
              <CurrentComment comment={comment} />
            ))}
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default CurrentVideo;
