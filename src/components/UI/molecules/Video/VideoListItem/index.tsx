import React from 'react';
import { ViewProps } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import VideoListItemMeta from '#components/UI/molecules/Video/VideoListItem/Meta';
import useAxios, { AxiosType } from '#hooks/useAxios';
import { getVideos, VideosRequestProps } from '#apis/videos';
import Loading from '#components/UI/atoms/Loading';

interface VideoListItemProps {
  id: string;
  containerStyle?: ViewProps | any;
}

const Container = styled.TouchableOpacity`
  height: 275px;
`;

const ThumbVideoContainer = styled.View`
  height: 210px;
`;

const ThumbImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const VideoListItem = ({ id, containerStyle }: VideoListItemProps): React.ReactElement => {
  const navigation = useNavigation();
  const video: AxiosType<VideosRequestProps> = useAxios();
  const [videoData] = video.data?.items ?? [];

  const handlePress = () => {
    navigation.navigate('VideoDetail', { id });
  };

  React.useEffect(() => {
    video.loadData(getVideos({ part: ['statistics', 'snippet'], id }));
  }, []);

  return (
    <Container style={containerStyle} activeOpacity={0.8} onPress={handlePress}>
      {video.loading ? (
        <Loading />
      ) : (
        videoData && (
          <>
            <ThumbVideoContainer>
              <ThumbImage
                source={{ uri: videoData.snippet.thumbnails.high.url }}
                resizeMode='cover'
              />
            </ThumbVideoContainer>
            <VideoListItemMeta
              title={videoData.snippet.title}
              viewCount={videoData.statistics.viewCount}
              channelId={videoData.snippet.channelId}
              channelTitle={videoData.snippet.channelTitle}
              publishedAt={videoData.snippet.publishedAt}
            />
          </>
        )
      )}
    </Container>
  );
};

VideoListItem.defaultProps = {
  containerStyle: {},
};

export default VideoListItem;
