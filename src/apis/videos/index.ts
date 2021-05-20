import { AxiosResponse } from 'axios';
import { restApi } from '../index';

export type RegionRestrictionType = {
  allowed: Array<string>;
  blocked: Array<string>;
};

export type ContentRatingType = {
  mpaaRating: string;
  tvpgRating: string;
  bbfcRating: string;
  chvrsRating: string;
  eirinRating: string;
  cbfcRating: string;
  fmocRating: string;
  icaaRating: string;
  acbRating: string;
  oflcRating: string;
  fskRating: string;
  kmrbRating: string;
  djctqRating: string;
  russiaRating: string;
  rtcRating: string;
  ytRating: string;
};

export type PlayerType = {
  embedHtml: string;
};

export type LocationType = {
  latitude: number;
  longitude: number;
  altitude: number;
};

export type RecordingDetailsType = {
  locationDescription: string;
  location: LocationType;
  recordingDate: Date;
};

export type VideoStreamsType = {
  widthPixels: number;
  heightPixels: number;
  frameRateFps: number;
  aspectRatio: number;
  codec: string;
  bitrateBps: number;
  rotation: string;
  vendor: string;
};

export type AudioStreamType = {
  channelCount: number;
  codec: string;
  bitrateBps: number;
  vendor: string;
};

export type RecordingLocationType = {
  latitude: number;
  longitude: number;
  altitude: number;
};

export type FileDetailsType = {
  fileName: string;
  fileSize: number;
  fileType: string;
  container: string;
  videoStreams: VideoStreamsType;
  audioStreams: Array<AudioStreamType>;
  durationMs: number;
  bitrateBps: number;
  recordingLocation: RecordingLocationType;
  creationTime: string;
};

export type ProcessingProgressType = {
  partsTotal: number;
  partsProcessed: number;
  timeLeftMs: number;
};

export type ProcessingDetailsType = {
  processingStatus: string;
  processingProgress: ProcessingProgressType;
  processingFailureReason: string;
  fileDetailsAvailability: string;
  processingIssuesAvailability: string;
  tagSuggestionsAvailability: string;
  editorSuggestionsAvailability: string;
  thumbnailsAvailability: string;
};

export type TagSuggestionType = {
  tag: string;
  categoryRestricts: Array<string>;
};

export type SuggestionsType = {
  processingErrors: Array<string>;
  processingWarnings: Array<string>;
  processingHints: Array<string>;
  tagSuggestions: Array<TagSuggestionType>;
  editorSuggestions: Array<string>;
};

export type VideoType = {
  kind: string;
  etag: string;
  id: string;
  snippet: SnippetType;
  contentDetails: {
    duration: string;
    dimension: string;
    definition: string;
    caption: string;
    licensedContent: boolean;
    regionRestriction: RegionRestrictionType;
    contentRating: ContentRatingType;
  };
  status: {
    uploadStatus: string;
    failureReason: string;
    rejectionReason: string;
    privacyStatus: string;
    license: string;
    embeddable: boolean;
    publicStatsViewable: boolean;
  };
  statistics: {
    viewCount: number;
    likeCount: number;
    dislikeCount: number;
    favoriteCount: number;
    commentCount: number;
  };
  player: PlayerType;
  topicDetails: {
    topicIds: Array<string>;
    relevantTopicIds: Array<string>;
  };
  recordingDetails: RecordingDetailsType;
  fileDetails: FileDetailsType;
  processingDetails: ProcessingDetailsType;
  suggestions: SuggestionsType;
};

export interface VideosRequestProps extends ListRequestProps<VideoType> {}

export type PartTypes =
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

export type ChartTypes = 'mosePopular';

export type MyRatingTypes = 'dislike' | 'like';

export interface VideosProps {
  part: Array<PartTypes> | PartTypes;
  chart?: ChartTypes | string;
  id?: string;
  myRating?: MyRatingTypes | string;
  pageToken?: string;
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
