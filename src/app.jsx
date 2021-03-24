import { useEffect, useState } from 'react';
import './app.css';
import Header from './components/header';
import VideoList from './components/video_list/video_list';
import CurrentVideo from './components/current_video/current_video';

function App() {
  const [videos, setVideos] = useState([]);
  const [current, setCurrent] = useState([]);

  const onCurrent = (id) => {
    setCurrent({ id });
  };

  const onSubmit = (submit) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${submit}&key=AIzaSyAoCeHp23AoSg1iePAbzoc7-vpCq0E9xjQ`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log('error', error));
  };

  const mostPopular = () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=24&key=AIzaSyAoCeHp23AoSg1iePAbzoc7-vpCq0E9xjQ',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log('error', error));
  };

  useEffect(() => mostPopular(), []);

  return (
    <div>
      <Header
        onSubmit={onSubmit}
        onCurrent={onCurrent}
        mostPopular={mostPopular}
      />
      <div className="contents">
        <CurrentVideo current={current} onCurrent={onCurrent} />
        <VideoList videos={videos} current={current} onCurrent={onCurrent} />
      </div>
    </div>
  );
}

export default App;
