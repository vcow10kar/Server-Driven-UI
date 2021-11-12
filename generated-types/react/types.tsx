import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Cache = {
  __typename?: 'Cache';
  key: Scalars['String'];
  value: Scalars['String'];
};

export type CacheInput = {
  key: Scalars['String'];
  value: Scalars['String'];
};

export type Column = {
  align: ColumnAlignment;
};

export enum ColumnAlignment {
  Center = 'CENTER',
  Left = 'LEFT',
  Right = 'RIGHT'
}

export type ColumnLayout = {
  __typename?: 'ColumnLayout';
  columns?: Maybe<Array<Maybe<Column>>>;
};

export type EmitSignal = {
  __typename?: 'EmitSignal';
  signal?: Maybe<Signal>;
  value?: Maybe<SignalValue>;
};

export type EmitSignals = {
  emitSignals?: Maybe<Array<EmitSignal>>;
};

export type Error = {
  __typename?: 'Error';
  message?: Maybe<Scalars['String']>;
};

export type FavouriteAction = EmitSignals & {
  __typename?: 'FavouriteAction';
  cacheIds?: Maybe<Array<Cache>>;
  emitSignals?: Maybe<Array<EmitSignal>>;
  feedId: Scalars['String'];
};

export type FavouriteMutationResponse = {
  __typename?: 'FavouriteMutationResponse';
  error?: Maybe<Error>;
  feedFavourite?: Maybe<FeedFavourite>;
  feedFavouriteCount?: Maybe<FeedFavouriteCount>;
};

export type FeedCaption = {
  __typename?: 'FeedCaption';
  text?: Maybe<Scalars['String']>;
};

export type FeedContainer = {
  __typename?: 'FeedContainer';
  elements?: Maybe<Array<Maybe<FeedViewElement>>>;
};

export type FeedElement = ColumnLayout | FeedCaption | FeedImage;

export type FeedFavourite = Column & {
  __typename?: 'FeedFavourite';
  action: FavouriteAction;
  align: ColumnAlignment;
  icon: Scalars['String'];
  id: Scalars['String'];
  signal?: Maybe<Signal>;
};

export type FeedFavouriteCount = Column & {
  __typename?: 'FeedFavouriteCount';
  align: ColumnAlignment;
  count: Scalars['String'];
  id: Scalars['String'];
  signal?: Maybe<Signal>;
};

export type FeedHeading = {
  __typename?: 'FeedHeading';
  id: Scalars['String'];
  primary?: Maybe<Scalars['String']>;
  signal?: Maybe<Signal>;
};

export type FeedImage = {
  __typename?: 'FeedImage';
  alt?: Maybe<Scalars['String']>;
  src: Scalars['String'];
};

export type FeedItem = {
  __typename?: 'FeedItem';
  items?: Maybe<Array<Maybe<FeedElement>>>;
};

export type FeedViewElement = FeedHeading | FeedItem | TypographyContent;

export type HeadingMutationResponse = {
  __typename?: 'HeadingMutationResponse';
  error?: Maybe<Error>;
  heading?: Maybe<FeedHeading>;
};

export type Mutation = {
  __typename?: 'Mutation';
  save?: Maybe<FavouriteMutationResponse>;
  updateHeading?: Maybe<HeadingMutationResponse>;
};


export type MutationSaveArgs = {
  cacheIds?: Maybe<Array<CacheInput>>;
  feedId: Scalars['String'];
};


export type MutationUpdateHeadingArgs = {
  cacheIds?: Maybe<Array<CacheInput>>;
  heading?: Maybe<Scalars['String']>;
};

export type Paragraph = {
  __typename?: 'Paragraph';
  value?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  feed?: Maybe<FeedContainer>;
};

export type Signal = {
  __typename?: 'Signal';
  fallback?: Maybe<SignalValue>;
  reference?: Maybe<Scalars['String']>;
  type: SignalType;
};

export type SignalInput = {
  reference?: Maybe<Scalars['String']>;
  type: SignalType;
};

export type SignalStringValue = {
  __typename?: 'SignalStringValue';
  text?: Maybe<Scalars['String']>;
};

export enum SignalType {
  Error = 'ERROR',
  Favourite = 'FAVOURITE',
  FavouriteCount = 'FAVOURITE_COUNT',
  Title = 'TITLE'
}

export type SignalValue = SignalStringValue;

export type TypographyContent = {
  __typename?: 'TypographyContent';
  paragraph?: Maybe<Array<Maybe<Paragraph>>>;
};

export type FeedContainerFragment = { __typename?: 'FeedContainer', elements?: Maybe<Array<Maybe<{ __typename?: 'FeedHeading', id: string, primary?: Maybe<string>, signal?: Maybe<{ __typename?: 'Signal', type: SignalType, reference?: Maybe<string>, fallback?: Maybe<{ __typename?: 'SignalStringValue', text?: Maybe<string> }> }> } | { __typename?: 'FeedItem', items?: Maybe<Array<Maybe<{ __typename?: 'ColumnLayout', columns?: Maybe<Array<Maybe<{ __typename?: 'FeedFavourite', align: ColumnAlignment, id: string, icon: string, signal?: Maybe<{ __typename?: 'Signal', type: SignalType, reference?: Maybe<string>, fallback?: Maybe<{ __typename?: 'SignalStringValue', text?: Maybe<string> }> }>, action: { __typename?: 'FavouriteAction', feedId: string, cacheIds?: Maybe<Array<{ __typename?: 'Cache', key: string, value: string }>>, emitSignals?: Maybe<Array<{ __typename?: 'EmitSignal', signal?: Maybe<{ __typename?: 'Signal', type: SignalType, reference?: Maybe<string>, fallback?: Maybe<{ __typename?: 'SignalStringValue', text?: Maybe<string> }> }>, value?: Maybe<{ __typename?: 'SignalStringValue', text?: Maybe<string> }> }>> } } | { __typename?: 'FeedFavouriteCount', align: ColumnAlignment, id: string, count: string, signal?: Maybe<{ __typename?: 'Signal', type: SignalType, reference?: Maybe<string>, fallback?: Maybe<{ __typename?: 'SignalStringValue', text?: Maybe<string> }> }> }>>> } | { __typename?: 'FeedCaption', text?: Maybe<string> } | { __typename?: 'FeedImage', src: string, alt?: Maybe<string> }>>> } | { __typename?: 'TypographyContent', paragraph?: Maybe<Array<Maybe<{ __typename?: 'Paragraph', value?: Maybe<string> }>>> }>>> };

export type FeedHeadingFragment = { __typename?: 'FeedHeading', id: string, primary?: Maybe<string>, signal?: Maybe<{ __typename?: 'Signal', type: SignalType, reference?: Maybe<string>, fallback?: Maybe<{ __typename?: 'SignalStringValue', text?: Maybe<string> }> }> };

export type FeedItemFragment = { __typename?: 'FeedItem', items?: Maybe<Array<Maybe<{ __typename?: 'ColumnLayout', columns?: Maybe<Array<Maybe<{ __typename?: 'FeedFavourite', align: ColumnAlignment, id: string, icon: string, signal?: Maybe<{ __typename?: 'Signal', type: SignalType, reference?: Maybe<string>, fallback?: Maybe<{ __typename?: 'SignalStringValue', text?: Maybe<string> }> }>, action: { __typename?: 'FavouriteAction', feedId: string, cacheIds?: Maybe<Array<{ __typename?: 'Cache', key: string, value: string }>>, emitSignals?: Maybe<Array<{ __typename?: 'EmitSignal', signal?: Maybe<{ __typename?: 'Signal', type: SignalType, reference?: Maybe<string>, fallback?: Maybe<{ __typename?: 'SignalStringValue', text?: Maybe<string> }> }>, value?: Maybe<{ __typename?: 'SignalStringValue', text?: Maybe<string> }> }>> } } | { __typename?: 'FeedFavouriteCount', align: ColumnAlignment, id: string, count: string, signal?: Maybe<{ __typename?: 'Signal', type: SignalType, reference?: Maybe<string>, fallback?: Maybe<{ __typename?: 'SignalStringValue', text?: Maybe<string> }> }> }>>> } | { __typename?: 'FeedCaption', text?: Maybe<string> } | { __typename?: 'FeedImage', src: string, alt?: Maybe<string> }>>> };

export type ColumnLayoutFragment = { __typename?: 'ColumnLayout', columns?: Maybe<Array<Maybe<{ __typename?: 'FeedFavourite', align: ColumnAlignment, id: string, icon: string, signal?: Maybe<{ __typename?: 'Signal', type: SignalType, reference?: Maybe<string>, fallback?: Maybe<{ __typename?: 'SignalStringValue', text?: Maybe<string> }> }>, action: { __typename?: 'FavouriteAction', feedId: string, cacheIds?: Maybe<Array<{ __typename?: 'Cache', key: string, value: string }>>, emitSignals?: Maybe<Array<{ __typename?: 'EmitSignal', signal?: Maybe<{ __typename?: 'Signal', type: SignalType, reference?: Maybe<string>, fallback?: Maybe<{ __typename?: 'SignalStringValue', text?: Maybe<string> }> }>, value?: Maybe<{ __typename?: 'SignalStringValue', text?: Maybe<string> }> }>> } } | { __typename?: 'FeedFavouriteCount', align: ColumnAlignment, id: string, count: string, signal?: Maybe<{ __typename?: 'Signal', type: SignalType, reference?: Maybe<string>, fallback?: Maybe<{ __typename?: 'SignalStringValue', text?: Maybe<string> }> }> }>>> };

export type FeedFavouriteFragment = { __typename?: 'FeedFavourite', id: string, icon: string, signal?: Maybe<{ __typename?: 'Signal', type: SignalType, reference?: Maybe<string>, fallback?: Maybe<{ __typename?: 'SignalStringValue', text?: Maybe<string> }> }>, action: { __typename?: 'FavouriteAction', feedId: string, cacheIds?: Maybe<Array<{ __typename?: 'Cache', key: string, value: string }>>, emitSignals?: Maybe<Array<{ __typename?: 'EmitSignal', signal?: Maybe<{ __typename?: 'Signal', type: SignalType, reference?: Maybe<string>, fallback?: Maybe<{ __typename?: 'SignalStringValue', text?: Maybe<string> }> }>, value?: Maybe<{ __typename?: 'SignalStringValue', text?: Maybe<string> }> }>> } };

export type FeedFavouriteCountFragment = { __typename?: 'FeedFavouriteCount', id: string, count: string, signal?: Maybe<{ __typename?: 'Signal', type: SignalType, reference?: Maybe<string>, fallback?: Maybe<{ __typename?: 'SignalStringValue', text?: Maybe<string> }> }> };

export type FavouriteActionFragment = { __typename?: 'FavouriteAction', feedId: string, cacheIds?: Maybe<Array<{ __typename?: 'Cache', key: string, value: string }>>, emitSignals?: Maybe<Array<{ __typename?: 'EmitSignal', signal?: Maybe<{ __typename?: 'Signal', type: SignalType, reference?: Maybe<string>, fallback?: Maybe<{ __typename?: 'SignalStringValue', text?: Maybe<string> }> }>, value?: Maybe<{ __typename?: 'SignalStringValue', text?: Maybe<string> }> }>> };

export type EmitSignalFragment = { __typename?: 'EmitSignal', signal?: Maybe<{ __typename?: 'Signal', type: SignalType, reference?: Maybe<string>, fallback?: Maybe<{ __typename?: 'SignalStringValue', text?: Maybe<string> }> }>, value?: Maybe<{ __typename?: 'SignalStringValue', text?: Maybe<string> }> };

export type SignalStringValueFragment = { __typename?: 'SignalStringValue', text?: Maybe<string> };

export type FeedCaptionFragment = { __typename?: 'FeedCaption', text?: Maybe<string> };

export type FeedImageFragment = { __typename?: 'FeedImage', src: string, alt?: Maybe<string> };

export type TypographyContentFragment = { __typename?: 'TypographyContent', paragraph?: Maybe<Array<Maybe<{ __typename?: 'Paragraph', value?: Maybe<string> }>>> };

export type ParagraphFragment = { __typename?: 'Paragraph', value?: Maybe<string> };

export type SignalFragment = { __typename?: 'Signal', type: SignalType, reference?: Maybe<string>, fallback?: Maybe<{ __typename?: 'SignalStringValue', text?: Maybe<string> }> };

export type ErrorFragment = { __typename?: 'Error', message?: Maybe<string> };

export type FavouriteMutationResponseFragment = { __typename?: 'FavouriteMutationResponse', error?: Maybe<{ __typename?: 'Error', message?: Maybe<string> }>, feedFavourite?: Maybe<{ __typename?: 'FeedFavourite', id: string, icon: string, signal?: Maybe<{ __typename?: 'Signal', type: SignalType, reference?: Maybe<string>, fallback?: Maybe<{ __typename?: 'SignalStringValue', text?: Maybe<string> }> }>, action: { __typename?: 'FavouriteAction', feedId: string, cacheIds?: Maybe<Array<{ __typename?: 'Cache', key: string, value: string }>>, emitSignals?: Maybe<Array<{ __typename?: 'EmitSignal', signal?: Maybe<{ __typename?: 'Signal', type: SignalType, reference?: Maybe<string>, fallback?: Maybe<{ __typename?: 'SignalStringValue', text?: Maybe<string> }> }>, value?: Maybe<{ __typename?: 'SignalStringValue', text?: Maybe<string> }> }>> } }>, feedFavouriteCount?: Maybe<{ __typename?: 'FeedFavouriteCount', id: string, count: string, signal?: Maybe<{ __typename?: 'Signal', type: SignalType, reference?: Maybe<string>, fallback?: Maybe<{ __typename?: 'SignalStringValue', text?: Maybe<string> }> }> }> };

export type HeadingMutationResponseFragment = { __typename?: 'HeadingMutationResponse', error?: Maybe<{ __typename?: 'Error', message?: Maybe<string> }>, heading?: Maybe<{ __typename?: 'FeedHeading', id: string, primary?: Maybe<string>, signal?: Maybe<{ __typename?: 'Signal', type: SignalType, reference?: Maybe<string>, fallback?: Maybe<{ __typename?: 'SignalStringValue', text?: Maybe<string> }> }> }> };

export type CacheFragment = { __typename?: 'Cache', key: string, value: string };

export type SaveItemMutationVariables = Exact<{
  feedId: Scalars['String'];
  cacheIds?: Maybe<Array<CacheInput> | CacheInput>;
}>;


export type SaveItemMutation = { __typename?: 'Mutation', save?: Maybe<{ __typename?: 'FavouriteMutationResponse', error?: Maybe<{ __typename?: 'Error', message?: Maybe<string> }>, feedFavourite?: Maybe<{ __typename?: 'FeedFavourite', id: string, icon: string, signal?: Maybe<{ __typename?: 'Signal', type: SignalType, reference?: Maybe<string>, fallback?: Maybe<{ __typename?: 'SignalStringValue', text?: Maybe<string> }> }>, action: { __typename?: 'FavouriteAction', feedId: string, cacheIds?: Maybe<Array<{ __typename?: 'Cache', key: string, value: string }>>, emitSignals?: Maybe<Array<{ __typename?: 'EmitSignal', signal?: Maybe<{ __typename?: 'Signal', type: SignalType, reference?: Maybe<string>, fallback?: Maybe<{ __typename?: 'SignalStringValue', text?: Maybe<string> }> }>, value?: Maybe<{ __typename?: 'SignalStringValue', text?: Maybe<string> }> }>> } }>, feedFavouriteCount?: Maybe<{ __typename?: 'FeedFavouriteCount', id: string, count: string, signal?: Maybe<{ __typename?: 'Signal', type: SignalType, reference?: Maybe<string>, fallback?: Maybe<{ __typename?: 'SignalStringValue', text?: Maybe<string> }> }> }> }> };

export type UpdateHeadingMutationVariables = Exact<{
  heading: Scalars['String'];
  cacheIds?: Maybe<Array<CacheInput> | CacheInput>;
}>;


export type UpdateHeadingMutation = { __typename?: 'Mutation', updateHeading?: Maybe<{ __typename?: 'HeadingMutationResponse', error?: Maybe<{ __typename?: 'Error', message?: Maybe<string> }>, heading?: Maybe<{ __typename?: 'FeedHeading', id: string, primary?: Maybe<string>, signal?: Maybe<{ __typename?: 'Signal', type: SignalType, reference?: Maybe<string>, fallback?: Maybe<{ __typename?: 'SignalStringValue', text?: Maybe<string> }> }> }> }> };

export type GetFeedQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFeedQuery = { __typename?: 'Query', feed?: Maybe<{ __typename?: 'FeedContainer', elements?: Maybe<Array<Maybe<{ __typename?: 'FeedHeading', id: string, primary?: Maybe<string>, signal?: Maybe<{ __typename?: 'Signal', type: SignalType, reference?: Maybe<string>, fallback?: Maybe<{ __typename?: 'SignalStringValue', text?: Maybe<string> }> }> } | { __typename?: 'FeedItem', items?: Maybe<Array<Maybe<{ __typename?: 'ColumnLayout', columns?: Maybe<Array<Maybe<{ __typename?: 'FeedFavourite', align: ColumnAlignment, id: string, icon: string, signal?: Maybe<{ __typename?: 'Signal', type: SignalType, reference?: Maybe<string>, fallback?: Maybe<{ __typename?: 'SignalStringValue', text?: Maybe<string> }> }>, action: { __typename?: 'FavouriteAction', feedId: string, cacheIds?: Maybe<Array<{ __typename?: 'Cache', key: string, value: string }>>, emitSignals?: Maybe<Array<{ __typename?: 'EmitSignal', signal?: Maybe<{ __typename?: 'Signal', type: SignalType, reference?: Maybe<string>, fallback?: Maybe<{ __typename?: 'SignalStringValue', text?: Maybe<string> }> }>, value?: Maybe<{ __typename?: 'SignalStringValue', text?: Maybe<string> }> }>> } } | { __typename?: 'FeedFavouriteCount', align: ColumnAlignment, id: string, count: string, signal?: Maybe<{ __typename?: 'Signal', type: SignalType, reference?: Maybe<string>, fallback?: Maybe<{ __typename?: 'SignalStringValue', text?: Maybe<string> }> }> }>>> } | { __typename?: 'FeedCaption', text?: Maybe<string> } | { __typename?: 'FeedImage', src: string, alt?: Maybe<string> }>>> } | { __typename?: 'TypographyContent', paragraph?: Maybe<Array<Maybe<{ __typename?: 'Paragraph', value?: Maybe<string> }>>> }>>> }> };

export const SignalStringValueFragmentDoc = gql`
    fragment signalStringValue on SignalStringValue {
  text
}
    `;
export const SignalFragmentDoc = gql`
    fragment signal on Signal {
  type
  reference
  fallback {
    ...signalStringValue
  }
}
    ${SignalStringValueFragmentDoc}`;
export const FeedHeadingFragmentDoc = gql`
    fragment feedHeading on FeedHeading {
  id
  primary
  signal {
    ...signal
  }
}
    ${SignalFragmentDoc}`;
export const CacheFragmentDoc = gql`
    fragment cache on Cache {
  key
  value
}
    `;
export const EmitSignalFragmentDoc = gql`
    fragment emitSignal on EmitSignal {
  signal {
    ...signal
  }
  value {
    ...signalStringValue
  }
}
    ${SignalFragmentDoc}
${SignalStringValueFragmentDoc}`;
export const FavouriteActionFragmentDoc = gql`
    fragment favouriteAction on FavouriteAction {
  feedId
  cacheIds {
    ...cache
  }
  emitSignals {
    ...emitSignal
  }
}
    ${CacheFragmentDoc}
${EmitSignalFragmentDoc}`;
export const FeedFavouriteFragmentDoc = gql`
    fragment feedFavourite on FeedFavourite {
  id
  icon
  signal {
    ...signal
  }
  action {
    ...favouriteAction
  }
}
    ${SignalFragmentDoc}
${FavouriteActionFragmentDoc}`;
export const FeedFavouriteCountFragmentDoc = gql`
    fragment feedFavouriteCount on FeedFavouriteCount {
  id
  count
  signal {
    ...signal
  }
}
    ${SignalFragmentDoc}`;
export const ColumnLayoutFragmentDoc = gql`
    fragment columnLayout on ColumnLayout {
  columns {
    align
    ...feedFavourite
    ...feedFavouriteCount
  }
}
    ${FeedFavouriteFragmentDoc}
${FeedFavouriteCountFragmentDoc}`;
export const FeedCaptionFragmentDoc = gql`
    fragment feedCaption on FeedCaption {
  text
}
    `;
export const FeedImageFragmentDoc = gql`
    fragment feedImage on FeedImage {
  src
  alt
}
    `;
export const FeedItemFragmentDoc = gql`
    fragment feedItem on FeedItem {
  items {
    ...columnLayout
    ...feedCaption
    ...feedImage
  }
}
    ${ColumnLayoutFragmentDoc}
${FeedCaptionFragmentDoc}
${FeedImageFragmentDoc}`;
export const ParagraphFragmentDoc = gql`
    fragment paragraph on Paragraph {
  value
}
    `;
export const TypographyContentFragmentDoc = gql`
    fragment typographyContent on TypographyContent {
  paragraph {
    ...paragraph
  }
}
    ${ParagraphFragmentDoc}`;
export const FeedContainerFragmentDoc = gql`
    fragment feedContainer on FeedContainer {
  elements {
    ...feedHeading
    ...feedItem
    ...typographyContent
  }
}
    ${FeedHeadingFragmentDoc}
${FeedItemFragmentDoc}
${TypographyContentFragmentDoc}`;
export const ErrorFragmentDoc = gql`
    fragment error on Error {
  message
}
    `;
export const FavouriteMutationResponseFragmentDoc = gql`
    fragment favouriteMutationResponse on FavouriteMutationResponse {
  error {
    ...error
  }
  feedFavourite {
    ...feedFavourite
  }
  feedFavouriteCount {
    ...feedFavouriteCount
  }
}
    ${ErrorFragmentDoc}
${FeedFavouriteFragmentDoc}
${FeedFavouriteCountFragmentDoc}`;
export const HeadingMutationResponseFragmentDoc = gql`
    fragment headingMutationResponse on HeadingMutationResponse {
  error {
    ...error
  }
  heading {
    ...feedHeading
  }
}
    ${ErrorFragmentDoc}
${FeedHeadingFragmentDoc}`;
export const SaveItemDocument = gql`
    mutation saveItem($feedId: String!, $cacheIds: [CacheInput!]) {
  save(feedId: $feedId, cacheIds: $cacheIds) {
    ...favouriteMutationResponse
  }
}
    ${FavouriteMutationResponseFragmentDoc}`;
export type SaveItemMutationFn = Apollo.MutationFunction<SaveItemMutation, SaveItemMutationVariables>;

/**
 * __useSaveItemMutation__
 *
 * To run a mutation, you first call `useSaveItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveItemMutation, { data, loading, error }] = useSaveItemMutation({
 *   variables: {
 *      feedId: // value for 'feedId'
 *      cacheIds: // value for 'cacheIds'
 *   },
 * });
 */
export function useSaveItemMutation(baseOptions?: Apollo.MutationHookOptions<SaveItemMutation, SaveItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveItemMutation, SaveItemMutationVariables>(SaveItemDocument, options);
      }
export type SaveItemMutationHookResult = ReturnType<typeof useSaveItemMutation>;
export type SaveItemMutationResult = Apollo.MutationResult<SaveItemMutation>;
export type SaveItemMutationOptions = Apollo.BaseMutationOptions<SaveItemMutation, SaveItemMutationVariables>;
export const UpdateHeadingDocument = gql`
    mutation updateHeading($heading: String!, $cacheIds: [CacheInput!]) {
  updateHeading(heading: $heading, cacheIds: $cacheIds) {
    ...headingMutationResponse
  }
}
    ${HeadingMutationResponseFragmentDoc}`;
export type UpdateHeadingMutationFn = Apollo.MutationFunction<UpdateHeadingMutation, UpdateHeadingMutationVariables>;

/**
 * __useUpdateHeadingMutation__
 *
 * To run a mutation, you first call `useUpdateHeadingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateHeadingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateHeadingMutation, { data, loading, error }] = useUpdateHeadingMutation({
 *   variables: {
 *      heading: // value for 'heading'
 *      cacheIds: // value for 'cacheIds'
 *   },
 * });
 */
export function useUpdateHeadingMutation(baseOptions?: Apollo.MutationHookOptions<UpdateHeadingMutation, UpdateHeadingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateHeadingMutation, UpdateHeadingMutationVariables>(UpdateHeadingDocument, options);
      }
export type UpdateHeadingMutationHookResult = ReturnType<typeof useUpdateHeadingMutation>;
export type UpdateHeadingMutationResult = Apollo.MutationResult<UpdateHeadingMutation>;
export type UpdateHeadingMutationOptions = Apollo.BaseMutationOptions<UpdateHeadingMutation, UpdateHeadingMutationVariables>;
export const GetFeedDocument = gql`
    query getFeed {
  feed {
    ...feedContainer
  }
}
    ${FeedContainerFragmentDoc}`;

/**
 * __useGetFeedQuery__
 *
 * To run a query within a React component, call `useGetFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFeedQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFeedQuery(baseOptions?: Apollo.QueryHookOptions<GetFeedQuery, GetFeedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFeedQuery, GetFeedQueryVariables>(GetFeedDocument, options);
      }
export function useGetFeedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFeedQuery, GetFeedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFeedQuery, GetFeedQueryVariables>(GetFeedDocument, options);
        }
export type GetFeedQueryHookResult = ReturnType<typeof useGetFeedQuery>;
export type GetFeedLazyQueryHookResult = ReturnType<typeof useGetFeedLazyQuery>;
export type GetFeedQueryResult = Apollo.QueryResult<GetFeedQuery, GetFeedQueryVariables>;