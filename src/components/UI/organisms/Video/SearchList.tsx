import React from 'react';
import { Alert, FlatList, StyleSheet } from 'react-native';
import useAxios, { AxiosType, LoadDataType } from '#hooks/useAxios';
import Loading from '#components/UI/atoms/Loading';
import VideoListItem from '#components/UI/molecules/Video/VideoListItem';
import { ApiType } from '#apis/apis';
import { SearchItemProps, SearchRequestItemProps } from '#apis/search';

export interface VideoListProps<T = any> {
  api: (axios: AxiosType<T>) => ApiType<T>;
}

const styles = StyleSheet.create({
  videoDistance: { marginBottom: 5 },
  listFooterComponentStyle: { marginVertical: 5 },
});

const SearchList = ({ api }: VideoListProps): React.ReactElement => {
  const list: AxiosType<SearchRequestItemProps> = useAxios();
  const [refreshing, setRefreshing] = React.useState<boolean>(false);
  const [data, setData] = React.useState<Array<SearchItemProps>>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  const loadData = (): LoadDataType<SearchRequestItemProps> => {
    return list.loadData(api(list));
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
    if (list.loading) return;
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
      keyExtractor={(item, index) => `${item.id.videoId}-${index}`}
      renderItem={({ item, index }) => {
        const length = list.data?.items?.length ?? 0;
        const isNotLast = index < length - 1;
        return (
          <VideoListItem id={item.id.videoId} containerStyle={isNotLast && styles.videoDistance} />
        );
      }}
    />
  );
};

export default SearchList;
