import { restApi } from '#apis/index';
import { ApiType, ListRequestProps, SnippetType } from '#apis/apis';

type PartTypes = 'id' | 'snippet';

interface SearchIdProps {
  kind: string;
  videoId: string;
  channelId: string;
  playlistId: string;
}

type ChannelTypeType = 'any' | 'show';

type EventTypeType = 'completed' | 'live' | 'upcoming';

type OrtderType = 'data' | 'rating' | 'relevance' | 'title' | 'videoCount' | 'viewCount';

type SafeSearchType = 'moderate' | 'none' | 'strict';

type SearchType = 'channel' | 'playlist' | 'video';

type VideoCaptiontype = 'any' | 'closedCaption' | 'none';

type VideoDefinitionType = 'any' | 'high' | 'standard';

type VideoDimensionType = '2d' | '3d' | 'any';

type VideoDurationType = 'any' | 'long' | 'medium' | 'short';

type VideoEmbeddableType = 'any' | 'true';

type VideoLicenseType = 'any' | 'creativeCommon';

type VideoSyndicatedType = 'any' | 'true';

type VideoTypeType = 'any' | 'episode' | 'movie';

export interface SearchProps {
  part: Array<PartTypes> | PartTypes;
  forContentOwner?: boolean;
  forMine?: boolean;
  relatedToVideoId?: string;
  channelId?: string;
  channelType?: ChannelTypeType;
  eventType?: EventTypeType;
  maxResults?: number;
  onBehalfOfContentOwner?: string;
  order?: OrtderType;
  pageToken?: string;
  publishedAfter?: Date;
  publishedBefore?: Date;
  q?: string;
  regionCode?: string;
  safeSearch?: SafeSearchType;
  topicId?: string;
  type?: SearchType;
  videoCaption?: VideoCaptiontype;
  videoCategoryId?: string;
  videoDefinition?: VideoDefinitionType;
  videoDimension?: VideoDimensionType;
  videoDuration?: VideoDurationType;
  videoEmbeddable?: VideoEmbeddableType;
  videoLicense?: VideoLicenseType;
  videoSyndicated?: VideoSyndicatedType;
  videoType?: VideoTypeType;
}

export interface SearchItemProps {
  kind: string;
  etag: string;
  id: SearchIdProps;
  snippet: SnippetType;
}

export interface SearchRequestItemProps extends ListRequestProps<SearchItemProps> {}

export const getSearch = async ({
  part,
  ...props
}: SearchProps): ApiType<SearchRequestItemProps> => {
  const endpoint = '/search';
  const _part = Array.isArray(part) ? part.join(',') : part;
  const params = {
    part: _part,
    ...props,
  };
  return restApi.get(endpoint, { params });
};
