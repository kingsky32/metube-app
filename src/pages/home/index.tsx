import React from 'react';
import { FlatList } from 'react-native';
import useAxios, { AxiosType } from '#hooks/useAxios';
import Loading from '#components/UI/atoms/Loading';
import { getVideos } from '#api/videos';

const Home = (): React.ReactElement => {
  const list: AxiosType<VideosRequestProps> = useAxios();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    list.loadData(getVideos({ part: 'id', chart: 'mostPopular' })).finally(() => {
      setLoading(false);
    });
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <FlatList
      data={list.data?.items ?? []}
      renderItem={({ item, index }) => {
        console.log(item, index);
        return null;
      }}
    />
  );
};

export default Home;
