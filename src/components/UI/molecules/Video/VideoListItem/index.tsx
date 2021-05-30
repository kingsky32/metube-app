import React from 'react';
import { ViewProps } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import VideoListItemMeta from '#components/UI/molecules/Video/VideoListItem/Meta';

interface VideoListItemProps {
  id: string;
  title: string;
  channelTitle: string;
  publishedAt: Date;
  thumbnails: string;
  channelId: string;
  viewCount: number;
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

const VideoListItem = ({
  id,
  title,
  channelTitle,
  publishedAt,
  thumbnails,
  channelId,
  viewCount,
  containerStyle,
}: VideoListItemProps): React.ReactElement => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('VideoDetail', { id });
  };

  return (
    <Container style={containerStyle} onPress={handlePress}>
      <ThumbVideoContainer>
        <ThumbImage source={{ uri: thumbnails }} resizeMode='cover' />
      </ThumbVideoContainer>
      <VideoListItemMeta
        title={title}
        viewCount={viewCount}
        channelId={channelId}
        channelTitle={channelTitle}
        publishedAt={publishedAt}
      />
    </Container>
  );
};

VideoListItem.defaultProps = {
  containerStyle: {},
};

export default VideoListItem;
