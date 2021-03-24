import { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';
import CurrentVideo from './components/current_video/current_video';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [current, setCurrent] = useState([]);

  const onCurrent = (id) => {
    setCurrent({ id });
  };

  const search = (submit) => {
    youtube
      .search(submit) //
      .then((videos) => setVideos(videos));
  };

  const goHome = () => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  };

  useEffect(
    () =>
      youtube
        .mostPopular() //
        .then((videos) => setVideos(videos)),
    []
  );

  return (
    <div className={styles.app}>
      <SearchHeader search={search} onCurrent={onCurrent} goHome={goHome} />
      <div className={styles.contents}>
        <CurrentVideo current={current} onCurrent={onCurrent} />
        <VideoList videos={videos} current={current} onCurrent={onCurrent} />
      </div>
    </div>
  );
}

export default App;
