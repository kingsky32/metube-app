import { AxiosResponse } from 'axios';
import { restApi } from '../index';

type PartTypes =
  | 'id'
  | 'snippet'
  | 'contentDetails'
  | 'fileDetails'
  | 'liveStreamingDetails'
  | 'player'
  | 'processingDetails'
  | 'recordingDetails'
  | 'statistics'
  | 'status'
  | 'suggestions'
  | 'topicDetails';

type ChartTypes = 'mosePopular';

type MyRatingTypes = 'dislike' | 'like';

interface VideosProps {
  part: PartTypes | string;
  chart?: ChartTypes | string;
  id?: string;
  myRating?: MyRatingTypes | string;
  maxResults?: number;
  regionCode?: string;
  videoCategoryId?: string;
}

export const getVideos = async (
  params: VideosProps
): Promise<AxiosResponse<VideosRequestProps>> => {
  const endpoint = '/videos';
  return restApi.get(endpoint, { params });
};
