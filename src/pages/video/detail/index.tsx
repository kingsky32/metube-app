import React from 'react';
import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import { RootNavigatorProps } from '#navigations/index';
import VideoPlayer from '#components/UI/molecules/Video/Player';

const Container = styled.View``;

const VideoDetail = ({ route }: RootNavigatorProps<'VideoDetail'>): React.ReactElement => {
  const { params } = route;
  const { videoId } = params;

  return (
    <Container>
      <StatusBar barStyle='light-content' />
      <VideoPlayer videoId={videoId} />
    </Container>
  );
};

export default VideoDetail;
