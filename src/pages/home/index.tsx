import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import useAxios, { AxiosType } from '#hooks/useAxios';
import Loading from '#components/UI/atoms/Loading';
import { getVideos } from '#api/videos';
import ThumbVideo from '#components/UI/organisms/Video/ThumbVideo';

const styles = StyleSheet.create({
  thumbVideoDistance: { marginBottom: 5 },
});

const Home = (): React.ReactElement => {
  const list: AxiosType<VideosRequestProps> = useAxios();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    list
      .loadData(
        getVideos({ part: ['id', 'snippet', 'statistics', 'status'], chart: 'mostPopular' })
      )
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return list.data?.items ? (
    <FlatList
      data={list.data?.items ?? []}
      renderItem={({ item, index }) => {
        const length = list.data?.items?.length ?? 0;
        const isNotLast = index < length - 1;
        return <ThumbVideo containerStyle={isNotLast && styles.thumbVideoDistance} {...item} />;
      }}
    />
  ) : (
    <Loading />
  );
};

export default Home;
