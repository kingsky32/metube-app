import React from 'react';
import { Alert, FlatList, StyleSheet } from 'react-native';
import useAxios, { AxiosType, LoadDataType } from '#hooks/useAxios';
import Loading from '#components/UI/atoms/Loading';
import { getVideos, VideosRequestProps, VideoType } from '#apis/videos';
import ThumbVideo from '#components/UI/organisms/Video/ThumbVideo';

const styles = StyleSheet.create({
  thumbVideoDistance: { marginBottom: 5 },
  listFooterComponentStyle: { marginVertical: 5 },
});

const Home = (): React.ReactElement => {
  const list: AxiosType<VideosRequestProps> = useAxios();
  const [refreshing, setRefreshing] = React.useState<boolean>(false);
  const [data, setData] = React.useState<Array<VideoType>>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  const loadData = (): LoadDataType<VideosRequestProps> => {
    return list.loadData(
      getVideos({
        part: ['id', 'snippet', 'statistics', 'status'],
        chart: 'mostPopular',
        pageToken: list.data?.nextPageToken,
        maxResults: 3,
      })
    );
  };

  const onEndReached = async () => {
    if (list.loading) return;
    try {
      const responseData = await loadData();
      const items = responseData?.data?.items ?? [];
      setData(prevState => [...prevState, ...items]);
    } catch (error) {
      Alert.alert(error?.response?.data?.message);
      throw error;
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    setData([]);
    list.clear();
    try {
      await onEndReached();
    } catch (error) {
      Alert.alert(error?.response?.data?.message);
    } finally {
      setRefreshing(false);
    }
  };

  React.useEffect(() => {
    loadData()
      .then(responseData => {
        const items = responseData?.data?.items ?? [];
        setData(items);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <FlatList
      data={data}
      refreshing={refreshing}
      onRefresh={onRefresh}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.1}
      ListFooterComponentStyle={styles.listFooterComponentStyle}
      ListFooterComponent={() => {
        return list.loading && !refreshing ? <Loading /> : null;
      }}
      renderItem={({ item, index }) => {
        const length = list.data?.items?.length ?? 0;
        const isNotLast = index < length - 1;
        return <ThumbVideo containerStyle={isNotLast && styles.thumbVideoDistance} {...item} />;
      }}
    />
  );
};

export default Home;
