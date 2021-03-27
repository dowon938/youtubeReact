import axios from 'axios';

class Youtube {
  constructor(key) {
    this.youtube = axios.create({
      baseURL: 'https://youtube.googleapis.com/youtube/v3',
      params: { key: key },
    });
  }

  async search(submit) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 20,
        q: submit,
        type: 'video',
      },
    });
    return response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
  }

  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 20,
      },
    });
    return response.data.items;
  }

  async comments(id) {
    const response = await this.youtube.get('commentThreads', {
      params: {
        textFormat: 'plainText',
        part: 'snippet',
        videoId: id,
      },
    });
    return response.data.items;
  }
}

export default Youtube;
