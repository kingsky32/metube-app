import Config from 'react-native-config';
import axios from 'axios';

export const getAPIHost = (): string => {
  return 'https://www.googleapis.com/youtube/v3';
};

export const restApi = axios.create({
  baseURL: getAPIHost(),
  params: {
    key: Config.API_KEY ?? 'AIzaSyDSAauEjW797cQyUfT6aiKsVoe0fZ9TmAw',
  },
});
