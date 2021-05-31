import React from 'react';
import styled from 'styled-components/native';
import YouTube from 'react-native-youtube';
import { getVideos, VideosRequestProps } from '#apis/videos';
import Loading from '#components/UI/atoms/Loading';
import useAxios, { AxiosType } from '#hooks/useAxios';

interface VideoPlayerProps {
  videoId: string;
}

const Container = styled.View``;

const Video = styled(YouTube)`
  height: 250px;
`;

const VideoPlayer = ({ videoId }: VideoPlayerProps): React.ReactElement => {
  const video: AxiosType<VideosRequestProps> = useAxios();
  // const [videoData] = video.data?.items ?? [];
  React.useEffect(() => {
    video.loadData(getVideos({ id: videoId, part: ['player', 'contentDetails'] }));
  }, []);

  return (
    <Container>
      {video.loading && <Loading />}
      <Video videoId={videoId} />
    </Container>
  );
};

export default VideoPlayer;
