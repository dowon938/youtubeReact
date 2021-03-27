class Youtube {
  constructor(key) {
    this.key = key;
    this.requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  async search(submit) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${submit}&type=video&key=${this.key}`,
      this.requestOptions
    );
    const result_1 = await response.json();
    return result_1.items.map((item) => ({ ...item, id: item.id.videoId }));
  }

  async mostPopular() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=24&key=${this.key}`,
      this.requestOptions
    );
    const result_1 = await response.json();
    return result_1.items;
  }

  async comments(id) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?textFormat=plainText&part=snippet&videoId=${id}&key=${this.key}`,
      this.requestOptions
    );
    const result_1 = await response.json();
    return result_1.items;
    // .map((item) => ({
    //   ...item.snippet.topLevelComment.snippet,
    // }));
  }
}

export default Youtube;
