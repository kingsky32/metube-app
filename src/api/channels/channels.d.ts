type RelatedPlaylistsType = {
  likes: string;
  favorites: string;
  uploads: string;
  watchHistory: string;
  watchLater: string;
};

type BrandingSettingsChannelType = {
  title: string;
  description: string;
  keywords: string;
  defaultTab: string;
  trackingAnalyticsAccountId: string;
  moderateComments: boolean;
  showRelatedChannels: boolean;
  showBrowseView: boolean;
  featuredChannelsTitle: string;
  featuredChannelsUrls: Array<string>;
  unsubscribedTrailer: string;
  profileColor: string;
};

type WatchType = {
  textColor: string;
  backgroundColor: string;
  featuredPlaylistId: string;
};

type HintType = {
  property: string;
  value: string;
};

type LocalizedType = {
  value: string;
  language: string;
};

type BrandingSettingsType = {
  channel: BrandingSettingsChannelType;
  watch: WatchType;
  image: {
    bannerImageUrl: string;
    bannerMobileImageUrl: string;
    backgroundImageUrl: {
      default: string;
      localized: Array<LocalizedType>;
    };
    largeBrandedBannerImageImapScript: {
      default: string;
      localized: Array<LocalizedType>;
    };
    largeBrandedBannerImageUrl: {
      default: string;
      localized: Array<LocalizedType>;
    };
    smallBrandedBannerImageImapScript: {
      default: string;
      localized: Array<LocalizedType>;
    };
    smallBrandedBannerImageUrl: {
      default: string;
      localized: Array<LocalizedType>;
    };
    watchIconImageUrl: string;
    trackingImageUrl: string;
    bannerTabletLowImageUrl: string;
    bannerTabletImageUrl: string;
    bannerTabletHdImageUrl: string;
    bannerTabletExtraHdImageUrl: string;
    bannerMobileLowImageUrl: string;
    bannerMobileMediumHdImageUrl: string;
    bannerMobileHdImageUrl: string;
    bannerMobileExtraHdImageUrl: string;
    bannerTvImageUrl: string;
    bannerExternalUrl: string;
  };
  hints: Array<HintType>;
};

type InvideoPromotionItemType = {
  id: {
    type: string;
    videoId: string;
    websiteUrl: string;
  };
  timing: {
    type: string;
    offsetMs: number;
    durationMs: number;
  };
  customMessage: string;
};

type InvideoPromotionType = {
  defaultTiming: {
    type: string;
    offsetMs: number;
    durationMs: number;
  };
  position: {
    type: string;
    cornerPosition: string;
  };
  items: Array<InvideoPromotionItemType>;
};

type ChannelType = {
  kind: string;
  etag: string;
  id: string;
  snippet: SnippetType;
  contentDetails: {
    relatedPlaylists: RelatedPlaylistsType;
    googlePlusUserId: string;
  };
  statistics: {
    viewCount: number;
    commentCount: number;
    subscriberCount: number;
    hiddenSubscriberCount: boolean;
    videoCount: number;
  };
  topicDetails: {
    topicIds: Array<string>;
  };
  status: {
    privacyStatus: string;
    isLinked: boolean;
  };
  brandingSettings: BrandingSettingsType;
  invideoPromotion: InvideoPromotionType;
};

interface ChannelsRequestProps extends ListRequestProps<ChannelType> {}
