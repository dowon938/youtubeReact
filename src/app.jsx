import { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';
import CurrentVideo from './components/current_video/current_video';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [current, setCurrent] = useState(null);
  const [comments, setComments] = useState(null);
  const currentOn = current ? 'list' : 'grid';

  const onCurrent = (video) => {
    video == null ? setCurrent(null) : setCurrent({ video });
  };

  const search = (submit) => {
    youtube
      .search(submit) //
      .then((videos) => setVideos(videos), setCurrent(null));
  };

  const goHome = () => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  };

  const getComments = (id) => {
    youtube
      .comments(id) //
      .then((items) =>
        items
          ? items.map((item) => ({
              ...item.snippet.topLevelComment.snippet,
            }))
          : items
      )
      .then((comment) => setComments(comment));
  };

  useEffect(
    () =>
      youtube
        .mostPopular() //
        .then((videos) => setVideos(videos)),
    [youtube]
  );

  return (
    <div className={styles.app}>
      <SearchHeader
        search={search}
        onCurrent={onCurrent}
        goHome={goHome}
        getComments={getComments}
      />
      <div className={styles.contents}>
        {current && (
          <div className={styles.video}>
            <CurrentVideo
              current={current}
              onCurrent={onCurrent}
              comments={comments}
            />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            current={current}
            onCurrent={onCurrent}
            getComments={getComments}
            currentOn={currentOn}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
