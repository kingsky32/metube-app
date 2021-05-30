import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconButton from '#components/UI/atoms/Button/IconButton';
import nFormatter from '#utils/nFormatter';
import getTimeAgo from '#utils/getTimeAgo';
import useAxios, { AxiosType } from '#hooks/useAxios';
import { ChannelsRequestItemProps, getChannels } from '#apis/channels';
import Loading from '#components/UI/atoms/Loading';

interface VideoListItemMetaProps {
  title: string;
  viewCount: string | number;
  publishedAt: Date;
  channelId: string | number;
  channelTitle: string;
}

const Container = styled.View`
  flex-flow: row nowrap;
  background-color: #ffffff;
  padding: 10px ${({ theme }) => theme.horizontalDistance}px 16px;
`;

const ProfileContainer = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  overflow: hidden;
`;

const Profile = styled.Image`
  width: 40px;
  height: 40px;
`;

const MetaContainer = styled.View`
  flex: 1;
  margin-left: 12px;
  padding-right: 10px;
`;

const Title = styled.Text`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 3px;
  color: #030303;
`;

const Meta = styled.Text`
  font-size: 12px;
  color: #030303;
  opacity: 0.6;
`;

const VideoListItemMeta = ({
  title,
  viewCount,
  publishedAt,
  channelId,
  channelTitle,
}: VideoListItemMetaProps): React.ReactElement => {
  const navigation = useNavigation();
  const channels: AxiosType<ChannelsRequestItemProps> = useAxios();
  const [channel] = channels.data?.items ?? [];
  const { snippet } = channel ?? {};
  const { thumbnails } = snippet ?? {};
  const handlePress = () => {
    navigation.navigate('Channel', { id: channelId });
  };

  React.useEffect(() => {
    channels.loadData(getChannels({ part: 'snippet', id: channelId }));
  }, []);

  return (
    <Container>
      <ProfileContainer>
        {channels.loading ? (
          <Loading />
        ) : (
          <IconButton
            onPress={handlePress}
            icon={<Profile source={{ uri: thumbnails?.default.url }} resizeMode='cover' />}
            size={40}
          />
        )}
      </ProfileContainer>
      <MetaContainer>
        <Title numberOfLines={1}>{title}</Title>
        <Meta>
          {channelTitle}
          {` \u00B7 `}
          {nFormatter(+viewCount, 1)} views
          {` \u00B7 `}
          {getTimeAgo(publishedAt)}
        </Meta>
      </MetaContainer>
      <IconButton icon={<Icon name='more-vert' size={24} color='#030303' />} />
    </Container>
  );
};

export default VideoListItemMeta;
