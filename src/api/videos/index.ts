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
  part: Array<PartTypes> | PartTypes;
  chart?: ChartTypes | string;
  id?: string;
  myRating?: MyRatingTypes | string;
  maxResults?: number;
  regionCode?: string;
  videoCategoryId?: string;
}

export const getVideos = async ({
  part,
  ...props
}: VideosProps): Promise<AxiosResponse<VideosRequestProps>> => {
  const endpoint = '/videos';
  const _part = Array.isArray(part) ? part.join(',') : part;
  const params = {
    part: _part,
    ...props,
  };
  return restApi.get(endpoint, { params });
};
