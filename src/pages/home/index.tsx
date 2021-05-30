import React from 'react';
import VideoList from '#components/UI/organisms/Video/VideoList';
import { getVideos } from '#apis/videos';

const Home = (): React.ReactElement => {
  return (
    <VideoList
      api={axios => {
        return getVideos({
          pageToken: axios.data?.nextPageToken,
          part: ['id', 'snippet', 'statistics', 'status'],
          chart: 'mostPopular',
        });
      }}
    />
  );
};

export default Home;
