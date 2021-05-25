import React from 'react';
import { ViewProps } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import ThumbVideoMata from '#components/UI/molecules/Video/ThumbVideoMata';
import { VideoType } from '#apis/videos';

interface ThumbVideoProps extends VideoType {
  containerStyle?: ViewProps | any;
}

const Container = styled.TouchableOpacity``;

const ThumbVideoContainer = styled.View`
  height: 210px;
`;

const ThumbImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const ThumbVideo = ({
  id,
  snippet,
  statistics,
  containerStyle,
}: ThumbVideoProps): React.ReactElement => {
  const navigation = useNavigation();
  const { title, channelTitle, publishedAt, thumbnails, channelId } = snippet;
  const { viewCount } = statistics;

  const handlePress = () => {
    navigation.navigate('VideoDetail', { id });
  };

  return (
    <Container style={containerStyle} onPress={handlePress}>
      <ThumbVideoContainer>
        <ThumbImage source={{ uri: thumbnails.high.url }} resizeMode='cover' />
      </ThumbVideoContainer>
      <ThumbVideoMata
        title={title}
        viewCount={viewCount}
        channelId={channelId}
        channelTitle={channelTitle}
        publishedAt={publishedAt}
      />
    </Container>
  );
};

ThumbVideo.defaultProps = {
  containerStyle: {},
};

export default ThumbVideo;
