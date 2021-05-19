import { AxiosResponse } from 'axios';
import { restApi } from '../index';

type PartTypes =
  | 'id'
  | 'snippet'
  | 'brandingSettings'
  | 'contentDetails'
  | 'invideoPromotion'
  | 'statistics'
  | 'topicDetails';

interface VideosProps {
  part: Array<PartTypes> | PartTypes;
  categoryId?: string;
  forUsername?: string;
  id?: string | number;
  managedByMe?: string;
  mine?: string;
  mySubscribers?: string;
  maxResults?: number;
  onBehalfOfContentOwner?: string;
  pageToken?: string;
}

export const getChannels = async ({
  part,
  ...props
}: VideosProps): Promise<AxiosResponse<ChannelsRequestProps>> => {
  const endpoint = '/channels';
  const _part = Array.isArray(part) ? part.join(',') : part;
  const params = {
    part: _part,
    ...props,
  };
  return restApi.get(endpoint, { params });
};
