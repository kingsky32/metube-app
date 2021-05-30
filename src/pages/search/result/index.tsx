import React from 'react';
import { getSearch } from '#apis/search';
import { SearchNavigatorProps } from '#navigations/search';
import SearchList from '#components/UI/organisms/Video/SearchList';

const SearchResult = ({ route }: SearchNavigatorProps): React.ReactElement => {
  const { params } = route;
  return (
    <SearchList
      api={axios => {
        return getSearch({
          pageToken: axios.data?.nextPageToken,
          part: ['snippet'],
          q: params.query,
        });
      }}
    />
  );
};

export default SearchResult;
