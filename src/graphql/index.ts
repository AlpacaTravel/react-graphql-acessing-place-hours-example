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
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

/** Angle unit */
export enum AngleUnit {
  Degrees = 'Degrees',
  Radians = 'Radians'
}

export type ApproveProfileFollowPayload = {
  __typename?: 'ApproveProfileFollowPayload';
  /** The follower profile */
  fromProfile: Profile;
  /** The profile being followed */
  toProfile: Profile;
  /** The status of the follow request */
  status?: Maybe<ProfileFollowStatus>;
};

/** Additional data defined on a resource */
export type Attribute = {
  __typename?: 'Attribute';
  /** [DEBUG ONLY] The internal data as raw JSON */
  _raw_: Scalars['JSON'];
  /**
   * The attribute identifier
   *
   * Has the form "{{resource_type}}/{{attribute_name}}"
   * eg: The "title" attribute on an item will have the id: "item/title"
   *
   * Custom attributes have the form "custom/{{attribute_name}}"
   */
  id: Scalars['ID'];
  /** The attribute value, can be any JSON-serialisable type */
  value?: Maybe<Scalars['JSON']>;
  /** Optional attribute metadata, can be any JSON-serialisable type */
  meta?: Maybe<Scalars['JSON']>;
  /** Optional string representing the locale of the attribute value */
  locale?: Maybe<Scalars['String']>;
};

export type AttributeConnection = {
  __typename?: 'AttributeConnection';
  /** All the edges in this page of the connection */
  edges: Array<AttributeEdge>;
  /** Shortcut for edges[].node */
  nodes: Array<Attribute>;
  /** Details regarding the current page of the connnection */
  pageInfo: PageInfo;
  /** The total number of items in the connection (in all pages) */
  totalCount: Scalars['Int'];
};

export type AttributeEdge = {
  __typename?: 'AttributeEdge';
  /** The cursor string pointing to this item */
  cursor: Scalars['String'];
  /** The item */
  node: Attribute;
};

/** A selector for an attribute */
export type AttributeIdentifierInput = {
  /** The attribute identifier */
  id: Scalars['ID'];
  /** The locale of the attribute */
  locale?: Maybe<Scalars['String']>;
};

/** Defines an attribute */
export type AttributeInput = {
  /** The attribute identifier */
  id: Scalars['ID'];
  /** The attribute value, can be any JSON-serialisable type */
  value: Scalars['JSON'];
  /** Optional attribute metadata, can be any JSON-serialisable type */
  meta?: Maybe<Scalars['JSON']>;
  /** Optional string representing the locale of the attribute value */
  locale?: Maybe<Scalars['String']>;
};

/** A bounding box on a map defined by two positions (opposite corners of the box) */
export type Bounds = {
  __typename?: 'Bounds';
  /** The west-most longitude of the bounding box */
  w: Scalars['Float'];
  /** The south-most latitude of the bounding box */
  s: Scalars['Float'];
  /** The east-most longitude of the bounding box */
  e: Scalars['Float'];
  /** The north-most latitude of the bounding box */
  n: Scalars['Float'];
  /** The south-west point of the bounding box in the form: [west, south] */
  ws: Array<Scalars['Float']>;
  /** The north-east point of the bounding box in the form: [east, north] */
  en: Array<Scalars['Float']>;
  /** The south-west and north-east points of the bounding box in the form: [west, south, east, north] */
  wsen: Array<Scalars['Float']>;
  /** The minimum and maximum points of the bounding box in the form: [minimum, maximum] */
  minMax: Array<Array<Scalars['Float']>>;
};

/** A bounding circle on a map defined by a center positions and a radius */
export type BoundsCircleInput = {
  /** The center position of the circle */
  position: PositionInput;
  /** The radius of the bounding circle */
  radius: Scalars['Float'];
};

/** A bounding box on a map defined by two positions (opposite corners of the box) */
export type BoundsInput = {
  /** The north-most latitude of the bounding box */
  n: Scalars['Float'];
  /** The east-most longitude of the bounding box */
  e: Scalars['Float'];
  /** The south-most latitude of the bounding box */
  s: Scalars['Float'];
  /** The west-most longitude of the bounding box */
  w: Scalars['Float'];
};

/** Response of claiming a handle */
export type ClaimProfileHandlePayload = {
  __typename?: 'ClaimProfileHandlePayload';
  /** The profile that will claim the handle */
  profile?: Maybe<Profile>;
};

export type Collection = Node & {
  __typename?: 'Collection';
  /** [DEBUG ONLY] The internal data as raw JSON */
  _raw_: Scalars['JSON'];
  /** The Globally Unique ID of the object. */
  id: Scalars['ID'];
  /** Profile that owns this collection */
  profile: Profile;
  /** The date when the collection was created */
  created?: Maybe<Scalars['String']>;
  /** The date when the collection was last modified */
  modified?: Maybe<Scalars['String']>;
  /** A supplied title for this collection */
  title?: Maybe<Scalars['String']>;
  /** A short text summary */
  synopsis?: Maybe<Scalars['String']>;
  /** A longer text description */
  description?: Maybe<Scalars['String']>;
  /** A series of strings applied to label this item */
  tags: Array<Scalars['String']>;
  /** A collection of Media objects representing images or other media */
  media: Array<Media>;
  /** A single Media object representing the preferred media to use */
  preferredMedia?: Maybe<Media>;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
  /** Arbitrary JSON value stored on this resource, keyed by an id */
  attr?: Maybe<Attribute>;
  /** Shortcut for the attr.value, returns null if the attribute doesn't exist */
  attrValue?: Maybe<Scalars['JSON']>;
  /** Query multiple attributes by id and optionally locale */
  attrs: Array<Maybe<Attribute>>;
  /** Return all attributes on the resource */
  allAttrs: AttributeConnection;
  /** Query multiple attributes with the same id and optionally locale */
  attrsById: AttributeConnection;
  /** A label used to differentiate types of collections */
  discriminator: Scalars['String'];
  /** Returns an item belonging to this collection by id */
  item?: Maybe<CollectionItem>;
  /** Retrieve multiple collection-items belonging to this collection */
  items: CollectionItemConnection;
};


export type CollectionCreatedArgs = {
  format?: Maybe<Scalars['String']>;
  relativeTo?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type CollectionModifiedArgs = {
  format?: Maybe<Scalars['String']>;
  relativeTo?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type CollectionMediaArgs = {
  limit?: Scalars['Int'];
};


export type CollectionAttrArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


export type CollectionAttrValueArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


export type CollectionAttrsArgs = {
  attrs: Array<AttributeIdentifierInput>;
};


export type CollectionAllAttrsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
};


export type CollectionAttrsByIdArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


export type CollectionItemArgs = {
  id: Scalars['ID'];
};


export type CollectionItemsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  keyword?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  sectionIds?: Maybe<Array<Scalars['ID']>>;
  resourceIds?: Maybe<Array<Scalars['ID']>>;
  boundsCircle?: Maybe<BoundsCircleInput>;
  bounds?: Maybe<BoundsInput>;
  externalIds?: Maybe<Array<Scalars['ID']>>;
  externalSources?: Maybe<Array<Scalars['ID']>>;
  sort?: Maybe<Array<CollectionItemsSort>>;
};

export type CollectionConnection = {
  __typename?: 'CollectionConnection';
  /** All the edges in this page of the connection */
  edges: Array<CollectionEdge>;
  /** Shortcut for edges[].node */
  nodes: Array<Collection>;
  /** Details regarding the current page of the connnection */
  pageInfo: PageInfo;
  /** The total number of items in the connection (in all pages) */
  totalCount: Scalars['Int'];
};

export type CollectionEdge = {
  __typename?: 'CollectionEdge';
  /** The cursor string pointing to this item */
  cursor: Scalars['String'];
  /** The item */
  node: Collection;
};

/** A collection item contains data about a single entity and is assigned within a collection */
export type CollectionItem = {
  /** [DEBUG ONLY] The internal data as raw JSON */
  _raw_: Scalars['JSON'];
  /** The unique identifier, taking the shape of item/XYZ */
  id: Scalars['ID'];
  /** The associated profile owner */
  profile: Profile;
  /** The date when the collection-item was created */
  created?: Maybe<Scalars['String']>;
  /** The date when the collection-item was last modified */
  modified?: Maybe<Scalars['String']>;
  /** The supplied title */
  title?: Maybe<Scalars['String']>;
  /** A short text summary */
  synopsis?: Maybe<Scalars['String']>;
  /** A longer text description */
  description?: Maybe<Scalars['String']>;
  /** A series of strings applied to label this item */
  tags: Array<Scalars['String']>;
  /** A collection of Media objects representing images or other media */
  media: Array<Media>;
  /** A single Media object representing the preferred media to use */
  preferredMedia?: Maybe<Media>;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
  /** One or more sections this item belongs to */
  sectionIds: Array<Scalars['ID']>;
  /** Identifier from an external source this item is associated with */
  externalId?: Maybe<Scalars['ID']>;
  /** The source of the item's externalId */
  externalSource?: Maybe<Scalars['ID']>;
  /** Arbitrary JSON value stored on this resource, keyed by an id */
  attr?: Maybe<Attribute>;
  /** Shortcut for the attr.value, returns null if the attribute doesn't exist */
  attrValue?: Maybe<Scalars['JSON']>;
  /** Query multiple attributes by id and optionally locale */
  attrs: Array<Maybe<Attribute>>;
  /** Return all attributes on the resource */
  allAttrs: AttributeConnection;
  /** Query multiple attributes with the same id and optionally locale */
  attrsById: AttributeConnection;
};


/** A collection item contains data about a single entity and is assigned within a collection */
export type CollectionItemCreatedArgs = {
  format?: Maybe<Scalars['String']>;
  relativeTo?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** A collection item contains data about a single entity and is assigned within a collection */
export type CollectionItemModifiedArgs = {
  format?: Maybe<Scalars['String']>;
  relativeTo?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** A collection item contains data about a single entity and is assigned within a collection */
export type CollectionItemMediaArgs = {
  limit?: Scalars['Int'];
};


/** A collection item contains data about a single entity and is assigned within a collection */
export type CollectionItemAttrArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** A collection item contains data about a single entity and is assigned within a collection */
export type CollectionItemAttrValueArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** A collection item contains data about a single entity and is assigned within a collection */
export type CollectionItemAttrsArgs = {
  attrs: Array<AttributeIdentifierInput>;
};


/** A collection item contains data about a single entity and is assigned within a collection */
export type CollectionItemAllAttrsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
};


/** A collection item contains data about a single entity and is assigned within a collection */
export type CollectionItemAttrsByIdArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};

export type CollectionItemConnection = {
  __typename?: 'CollectionItemConnection';
  /** All the edges in this page of the connection */
  edges: Array<CollectionItemEdge>;
  /** Shortcut for edges[].node */
  nodes: Array<CollectionItem>;
  /** Details regarding the current page of the connnection */
  pageInfo: PageInfo;
  /** The total number of items in the connection (in all pages) */
  totalCount: Scalars['Int'];
};

export type CollectionItemEdge = {
  __typename?: 'CollectionItemEdge';
  /** The cursor string pointing to this item */
  cursor: Scalars['String'];
  /** The item */
  node: CollectionItem;
};

export type CollectionItemsSort = {
  /** Sort by the created date */
  created?: Maybe<SortDirection>;
  /** Sort by the modified date */
  modified?: Maybe<SortDirection>;
  /** Sort by the collection-item title */
  title?: Maybe<SortDirection>;
};

/** A CollectionItem used to represents a single location association to a place. */
export type CollectionLocation = Node & CollectionItem & {
  __typename?: 'CollectionLocation';
  /** [DEBUG ONLY] The internal data as raw JSON */
  _raw_: Scalars['JSON'];
  /** The unique identifier, taking the shape of item/XYZ */
  id: Scalars['ID'];
  /** The associated profile owner */
  profile: Profile;
  /** The date when the collection-item was created */
  created?: Maybe<Scalars['String']>;
  /** The date when the collection-item was last modified */
  modified?: Maybe<Scalars['String']>;
  /** The supplied title */
  title?: Maybe<Scalars['String']>;
  /** A short text summary */
  synopsis?: Maybe<Scalars['String']>;
  /** A longer text description */
  description?: Maybe<Scalars['String']>;
  /** A series of strings applied to label this item */
  tags: Array<Scalars['String']>;
  /** A collection of Media objects representing images or other media */
  media: Array<Media>;
  /** A single Media object representing the preferred media to use */
  preferredMedia?: Maybe<Media>;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
  /** One or more sections this item belongs to */
  sectionIds: Array<Scalars['ID']>;
  /** Identifier from an external source this item is associated with */
  externalId?: Maybe<Scalars['ID']>;
  /** The source of the item's externalId */
  externalSource?: Maybe<Scalars['ID']>;
  /** Arbitrary JSON value stored on this resource, keyed by an id */
  attr?: Maybe<Attribute>;
  /** Shortcut for the attr.value, returns null if the attribute doesn't exist */
  attrValue?: Maybe<Scalars['JSON']>;
  /** Query multiple attributes by id and optionally locale */
  attrs: Array<Maybe<Attribute>>;
  /** Return all attributes on the resource */
  allAttrs: AttributeConnection;
  /** Query multiple attributes with the same id and optionally locale */
  attrsById: AttributeConnection;
  /** The associated place information for this location */
  place: Place;
  /** The position of the collection-location (derived from place if not overridden) */
  position: Position;
  /** The bounding box around the collection-location (derived from place if not overridden) */
  bounds?: Maybe<Bounds>;
};


/** A CollectionItem used to represents a single location association to a place. */
export type CollectionLocationCreatedArgs = {
  format?: Maybe<Scalars['String']>;
  relativeTo?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** A CollectionItem used to represents a single location association to a place. */
export type CollectionLocationModifiedArgs = {
  format?: Maybe<Scalars['String']>;
  relativeTo?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** A CollectionItem used to represents a single location association to a place. */
export type CollectionLocationMediaArgs = {
  limit?: Scalars['Int'];
};


/** A CollectionItem used to represents a single location association to a place. */
export type CollectionLocationAttrArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** A CollectionItem used to represents a single location association to a place. */
export type CollectionLocationAttrValueArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** A CollectionItem used to represents a single location association to a place. */
export type CollectionLocationAttrsArgs = {
  attrs: Array<AttributeIdentifierInput>;
};


/** A CollectionItem used to represents a single location association to a place. */
export type CollectionLocationAllAttrsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
};


/** A CollectionItem used to represents a single location association to a place. */
export type CollectionLocationAttrsByIdArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};

export type CollectionsSort = {
  /** Sort by the created date */
  created?: Maybe<SortDirection>;
  /** Sort by the modified date */
  modified?: Maybe<SortDirection>;
  /** Sort by the collection title */
  title?: Maybe<SortDirection>;
};

/** Points on the compass rose */
export enum CompassPoint {
  N = 'N',
  Ne = 'NE',
  E = 'E',
  Se = 'SE',
  S = 'S',
  Sw = 'SW',
  W = 'W',
  Nw = 'NW'
}

/** Connected apps stored in the profile */
export type ConnectedApp = Node & {
  __typename?: 'ConnectedApp';
  /** [DEBUG ONLY] The internal data as raw JSON */
  _raw_: Scalars['JSON'];
  /** The Globally Unique ID of the object. */
  id: Scalars['ID'];
  /** The profile associated with this connected app */
  profile?: Maybe<Profile>;
  /** A key to describe the type of connection to the application */
  type?: Maybe<ConnectedAppTypes>;
  /** This is the key relating to the service, such as "atdw" or "crowdriff-api" - it identifies the "App" we are connecting to */
  serviceKey: ConnectedAppServiceKeys;
  /** Depending on the authentication method, this can highlight the authenticated application method (e.g. OAuth) */
  authType?: Maybe<ConnectedAppAuthTypes>;
  /** Any specific scope that has been granted to the 3rd party application */
  scope?: Maybe<Scalars['String']>;
  /** Encrypted JSON */
  configuration?: Maybe<Scalars['JSON']>;
  /** A 3rd party ID or Account ID, this does not affect any of the Alpaca ID naming - for instance, if we are connecting to an Identity in OAUTH, this is the OAUTH Identity ID - This is just a place to store data */
  thirdPartyId?: Maybe<Scalars['ID']>;
};

export enum ConnectedAppAuthTypes {
  Tokens = 'Tokens',
  Oauth = 'Oauth',
  Credentials = 'Credentials'
}

export type ConnectedAppConnection = {
  __typename?: 'ConnectedAppConnection';
  /** All the edges in this page of the connection */
  edges: Array<ConnectedAppEdge>;
  /** Shortcut for edges[].node */
  nodes: Array<ConnectedApp>;
  /** Details regarding the current page of the connnection */
  pageInfo: PageInfo;
  /** The total number of items in the connection (in all pages) */
  totalCount: Scalars['Int'];
};

export type ConnectedAppEdge = {
  __typename?: 'ConnectedAppEdge';
  /** The cursor string pointing to this item */
  cursor: Scalars['String'];
  /** The item */
  node: ConnectedApp;
};

export enum ConnectedAppServiceKeys {
  Atdw = 'Atdw',
  CrowdriffApi = 'CrowdriffApi',
  ShopifyApi = 'ShopifyApi'
}

export enum ConnectedAppTypes {
  Configuration = 'Configuration',
  Credentials = 'Credentials',
  Api = 'Api'
}

/** Creates a collection */
export type CreateCollectionInput = {
  /** A label used to differentiate types of collections */
  discriminator?: Scalars['String'];
  /** Title of the collection */
  title?: Maybe<Scalars['String']>;
  /** A short text summary */
  synopsis?: Maybe<Scalars['String']>;
  /** A longer text description */
  description?: Maybe<Scalars['String']>;
  /** A series of strings applied to label the collection */
  tags?: Maybe<Array<Scalars['String']>>;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
  /** Additional data defined on the collection */
  attrs?: Maybe<Array<AttributeInput>>;
};

/** The input to create a collection location */
export type CreateCollectionLocationInput = {
  /** Title for the new item */
  title?: Maybe<Scalars['String']>;
  /** A short summary text content for the new item */
  synopsis?: Maybe<Scalars['String']>;
  /** A longer description content for the new item */
  description?: Maybe<Scalars['String']>;
  /** A collection of strings used to label the new item */
  tags?: Maybe<Array<Scalars['String']>>;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
  /** One or more sections for this new item */
  sectionIds?: Maybe<Array<Scalars['ID']>>;
  /** Identifier from an external source this new item is associated with */
  externalId?: Maybe<Scalars['ID']>;
  /** The source of this item's externalId */
  externalSource?: Maybe<Scalars['ID']>;
  /** Additional data defined on the new collection */
  attrs?: Maybe<Array<AttributeInput>>;
  /** The associated place record for this location */
  place: PlaceInput;
};

/** The fields available to return after creating a new collection location */
export type CreateCollectionLocationPayload = {
  __typename?: 'CreateCollectionLocationPayload';
  /** The created collection location */
  location?: Maybe<CollectionLocation>;
};

/** The return fields avaialble after creating a collection */
export type CreateCollectionPayload = {
  __typename?: 'CreateCollectionPayload';
  /** The newly created collection */
  collection?: Maybe<Collection>;
};

export type CreateConnectedAppInput = {
  /** The type of the connected-app */
  type?: Maybe<ConnectedAppTypes>;
  /** Identifies the service being connected to */
  serviceKey: ConnectedAppServiceKeys;
  /** Any specific scope that has been granted to the 3rd party application */
  scope?: Maybe<Scalars['String']>;
  /** The authenticated application method */
  authType?: Maybe<ConnectedAppAuthTypes>;
  /** Encrypted JSON */
  configuration?: Maybe<Scalars['JSON']>;
  /** 3rd party ID or account ID */
  thirdPartyId?: Maybe<Scalars['ID']>;
};

/** The return fields available after creating a connected app */
export type CreateConnectedAppPayload = {
  __typename?: 'CreateConnectedAppPayload';
  /** The newly created connected-app */
  connectedApp?: Maybe<ConnectedApp>;
};

/** Creates an itinerary item collection type */
export type CreateItineraryCollectionInput = {
  /** The title for the new itinerary-collection */
  title?: Maybe<Scalars['String']>;
  /** The synopsis for the new itinerary-collection */
  synopsis?: Maybe<Scalars['String']>;
  /** The description for the new itinerary-collection */
  description?: Maybe<Scalars['String']>;
  /** The tags for the new itinerary-collection */
  tags?: Maybe<Array<Scalars['String']>>;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
  /** Additional data defined on the collection */
  attrs?: Maybe<Array<AttributeInput>>;
  /** Creates the item positioned before all its siblings */
  positionAtStart?: Maybe<ItineraryItemPositionAtStart>;
  /** Creates the item positioned after all its siblings */
  positionAtEnd?: Maybe<ItineraryItemPositionAtEnd>;
  /** Create the item positioned after the given sibling */
  positionAfterSibling?: Maybe<ItineraryItemPositionAfterSibling>;
  /** Create the item positioned before the given sibling */
  positionBeforeSibling?: Maybe<ItineraryItemPositionBeforeSibling>;
  /** Create the item at last position of the last itinerary-collection item */
  positionOnLastCollection?: Maybe<ItineraryItemPositionOnLastCollection>;
};

/** The fields available after creating an itinerary collection */
export type CreateItineraryCollectionPayload = {
  __typename?: 'CreateItineraryCollectionPayload';
  /** The created itinerary collection */
  collection?: Maybe<ItineraryCollection>;
  /** The modified itinerary */
  itinerary: Itinerary;
  /** Other changes to the itinerary caused by the creation of the itinerary-collection */
  cascaded: ItineraryItemCascadedChanges;
};

/** The input fields to creating new itinerary directions items */
export type CreateItineraryDirectionsInput = {
  /** The title for the new itinerary-directions */
  title?: Maybe<Scalars['String']>;
  /** The synopsis for the new itinerary-directions */
  synopsis?: Maybe<Scalars['String']>;
  /** The description for the new itinerary-directions */
  description?: Maybe<Scalars['String']>;
  /** The tags for the new itinerary-directions */
  tags?: Maybe<Array<Scalars['String']>>;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
  /** Additional data on the new itinerary */
  attrs?: Maybe<Array<AttributeInput>>;
  /** The origin itinerary location item, in the form of item/XYZ */
  originId?: Maybe<Scalars['ID']>;
  /** The route of this item, must include at least one route segment */
  route: RouteInput;
  /** The duration details of the new itinerary-directions */
  durations?: Maybe<Array<ItineraryDirectionsDurationsInput>>;
  /** The distance of the new itinerary-directions */
  distance?: Maybe<Scalars['Float']>;
  /** The elevation details of the new itinerary-directions */
  elevation?: Maybe<ElevationInput>;
  /** Creates the itinerary-directions to be before all its siblings */
  positionAtStart?: Maybe<ItineraryItemPositionAtStart>;
  /** Creates the itinerary-directions to be after all its siblings */
  positionAtEnd?: Maybe<ItineraryItemPositionAtEnd>;
  /** Creates the itinerary-directions after the given sibling */
  positionAfterSibling?: Maybe<ItineraryItemPositionAfterSibling>;
  /** Creates the itinerary-directions before the given sibling */
  positionBeforeSibling?: Maybe<ItineraryItemPositionBeforeSibling>;
  /** Creates the itinerary-directions at the last position of the last itinerary-collection item */
  positionOnLastCollection?: Maybe<ItineraryItemPositionOnLastCollection>;
};

/** The itinerary directions return fields available after creating the itinerary directions */
export type CreateItineraryDirectionsPayload = {
  __typename?: 'CreateItineraryDirectionsPayload';
  /** The created itinerary directions item */
  directions?: Maybe<ItineraryDirections>;
  /** The modified itinerary */
  itinerary: Itinerary;
  /** Other changes to the itinerary caused by the creation of the itinerary-directions */
  cascaded: ItineraryItemCascadedChanges;
};

/** Creates a itinerary */
export type CreateItineraryInput = {
  /** The title for the new itinerary */
  title?: Maybe<Scalars['String']>;
  /** The synopsis for the new itinerary */
  synopsis?: Maybe<Scalars['String']>;
  /** The description for the new itinerary */
  description?: Maybe<Scalars['String']>;
  /** The tags for the new itinerary */
  tags?: Maybe<Array<Scalars['String']>>;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
  /** Additional data on the new itinerary */
  attrs?: Maybe<Array<AttributeInput>>;
  /** Enable auto routing, or set to null to disable */
  autoRoute?: Maybe<ItineraryAutoRouteInput>;
  /** Elevation data of the new itinerary */
  elevation?: Maybe<ElevationInput>;
};

/** The fields to create an itinerary location */
export type CreateItineraryLocationInput = {
  /** The title for the new itinerary-location */
  title?: Maybe<Scalars['String']>;
  /** The synopsis for the new itinerary-location */
  synopsis?: Maybe<Scalars['String']>;
  /** The description for the new itinerary-location */
  description?: Maybe<Scalars['String']>;
  /** The tags for the new itinerary-location */
  tags?: Maybe<Array<Scalars['String']>>;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
  /** Additional data defined on the collection */
  attrs?: Maybe<Array<AttributeInput>>;
  /** The position of the itinerary-location */
  position?: Maybe<PositionInput>;
  /** The place for this new itinerary-location */
  place: PlaceInput;
  /** Whether this is an optional location on the itinerary */
  optional?: Maybe<Scalars['Boolean']>;
  /** Creates the item positioned before all its siblings */
  positionAtStart?: Maybe<ItineraryItemPositionAtStart>;
  /** Creates the item positioned after all its siblings */
  positionAtEnd?: Maybe<ItineraryItemPositionAtEnd>;
  /** Create the item positioned after the given sibling */
  positionAfterSibling?: Maybe<ItineraryItemPositionAfterSibling>;
  /** Create the item positioned before the given sibling */
  positionBeforeSibling?: Maybe<ItineraryItemPositionBeforeSibling>;
  /** Create the item at last position of the last itinerary-collection item */
  positionOnLastCollection?: Maybe<ItineraryItemPositionOnLastCollection>;
};

/** The fields available after creating an itinerary location */
export type CreateItineraryLocationPayload = {
  __typename?: 'CreateItineraryLocationPayload';
  /** The itinerary location that was created */
  location?: Maybe<ItineraryLocation>;
  /** The modified itinerary */
  itinerary: Itinerary;
  /** Other changes to the itinerary caused by the creation of the itinerary-location */
  cascaded: ItineraryItemCascadedChanges;
};

/** The fields available after creating an itinerary */
export type CreateItineraryPayload = {
  __typename?: 'CreateItineraryPayload';
  /** The newly created itinerary */
  itinerary?: Maybe<Itinerary>;
};

/** Uploads a media resource */
export type CreateMediaResourceInput = {
  /** List of labels to apply to the new media-resource */
  tags?: Maybe<Array<Scalars['String']>>;
  /** Text attribution for the source of the new media-resource */
  attribution?: Maybe<Scalars['String']>;
  /** Text caption for the new media-resource */
  caption?: Maybe<Scalars['String']>;
  /** Copyright details of the new media-resource */
  copyright?: Maybe<Scalars['String']>;
  /** Additional data to define on the new media-resource */
  attrs?: Maybe<Array<AttributeInput>>;
};

/** An offset in date and/or time represented as integer differences for each datetime field */
export type DatetimeOffset = {
  /** Positive or negative difference for years */
  years?: Maybe<Scalars['Int']>;
  /** Positive or negative difference for months */
  months?: Maybe<Scalars['Int']>;
  /** Positive or negative difference for weeks */
  weeks?: Maybe<Scalars['Int']>;
  /** Positive or negative difference for days */
  days?: Maybe<Scalars['Int']>;
  /** Positive or negative difference for hours */
  hours?: Maybe<Scalars['Int']>;
  /** Positive or negative difference for minutes */
  minutes?: Maybe<Scalars['Int']>;
  /** Positive or negative difference for seconds */
  seconds?: Maybe<Scalars['Int']>;
};

/** The fields available after deleting a collection */
export type DeleteCollectionItemPayload = {
  __typename?: 'DeleteCollectionItemPayload';
  /** The ID of the collection, in the form of collection/XYZ */
  id?: Maybe<Scalars['ID']>;
};

/** The available payload after performing a delete collection */
export type DeleteCollectionPayload = {
  __typename?: 'DeleteCollectionPayload';
  /** The ID of the deleted collection */
  id?: Maybe<Scalars['ID']>;
};

/** The available payload after performing a delete connected app */
export type DeleteConnectedAppPayload = {
  __typename?: 'DeleteConnectedAppPayload';
  /** The ID of the deleted connected app */
  id?: Maybe<Scalars['ID']>;
};

/** Deletes a itinerary item */
export type DeleteItineraryItemPayload = {
  __typename?: 'DeleteItineraryItemPayload';
  /** The itinerary item identifier, in the form of item/XYZ */
  id?: Maybe<Scalars['ID']>;
  /** The modified itinerary */
  itinerary: Itinerary;
  /** Other changes to the itinerary that caused by deleting the itinerary-item */
  cascaded: ItineraryItemCascadedChanges;
};

export type DeleteItineraryPayload = {
  __typename?: 'DeleteItineraryPayload';
  /** The ID of the deleted itinerary */
  id?: Maybe<Scalars['ID']>;
};

export type DenyProfileFollowPayload = {
  __typename?: 'DenyProfileFollowPayload';
  /** The follower profile */
  fromProfile: Profile;
  /** The profile being followed */
  toProfile: Profile;
  /** The status of the follow request */
  status?: Maybe<ProfileFollowStatus>;
};

/** Distance unit */
export enum DistanceUnit {
  Kilometers = 'Kilometers',
  Feet = 'Feet',
  Miles = 'Miles',
  Meters = 'Meters'
}

/** Duration unit */
export enum DurationUnit {
  Seconds = 'Seconds',
  Minutes = 'Minutes',
  Hours = 'Hours'
}

export type Elevation = {
  __typename?: 'Elevation';
  /** The cumulative elevation gain */
  gain?: Maybe<Scalars['Float']>;
  /** The cumulative elevation loss */
  loss?: Maybe<Scalars['Float']>;
  /** The minimum elevation */
  min?: Maybe<Scalars['Float']>;
  /** The maximum elevation */
  max?: Maybe<Scalars['Float']>;
};

export type ElevationInput = {
  /** The cumulative elevation gain */
  gain?: Maybe<Scalars['Float']>;
  /** The cumulative elevation loss */
  loss?: Maybe<Scalars['Float']>;
  /** The minimum elevation */
  min?: Maybe<Scalars['Float']>;
  /** The maximum elevation */
  max?: Maybe<Scalars['Float']>;
};

export type FinalizeMediaUploadPayload = {
  __typename?: 'FinalizeMediaUploadPayload';
  /** The status of this media upload */
  status: MediaUploadStatus;
  /** The newly created media-resource */
  mediaResource?: Maybe<MediaResource>;
};

export type FollowProfilePayload = {
  __typename?: 'FollowProfilePayload';
  /** The follower profile */
  fromProfile: Profile;
  /** The profile being followed */
  toProfile: Profile;
  /** The status of the follow request */
  status?: Maybe<ProfileFollowStatus>;
};

/** Different GeoJSON simplification algorithms */
export type GeoJsonSimplification = {
  /** The Ramer-Douglas-Peucker algorithm */
  ramerDouglasPeucker: GeoJsonSimplificationRamerDouglasPeucker;
};

/** The Ramer-Douglas-Peucker algorithm */
export type GeoJsonSimplificationRamerDouglasPeucker = {
  /** The amount of application applied, higher values result in more simplification */
  tolerance?: Maybe<Scalars['Float']>;
  /** Modify the algorithm to be slower by produce higher quality results */
  highQuality?: Maybe<Scalars['Boolean']>;
};

/** Isochrone for the given position with duration and vehicle */
export type Isochrone = {
  __typename?: 'Isochrone';
  /** [DEBUG ONLY] The internal data as raw JSON */
  _raw_: Scalars['JSON'];
  /** The duration of the isochrone */
  duration?: Maybe<Scalars['Float']>;
  /** Copyright details of the isochrone */
  copyrights: Array<Scalars['String']>;
  /** The mode of transport of the isochrone */
  mode: IsochroneMode;
  /** A bounding box around the isochrone */
  bounds: Bounds;
  /** The isochrone as a geojson polygon */
  polygon: Scalars['JSON'];
};


/** Isochrone for the given position with duration and vehicle */
export type IsochroneDurationArgs = {
  unit?: DurationUnit;
};


/** Isochrone for the given position with duration and vehicle */
export type IsochronePolygonArgs = {
  simplify?: Maybe<GeoJsonSimplification>;
};

/** Mode of transport for an isochrone */
export enum IsochroneMode {
  Car = 'Car',
  Bike = 'Bike',
  Foot = 'Foot'
}

export type ItinerariesSort = {
  /** Sort by the created date */
  created?: Maybe<SortDirection>;
  /** Sort by the modified date */
  modified?: Maybe<SortDirection>;
  /** Sort by the itinerary title */
  title?: Maybe<SortDirection>;
};

/** An itinerary type is used to structure a series of items representing a travel itinerary */
export type Itinerary = Node & {
  __typename?: 'Itinerary';
  /** [DEBUG ONLY] The internal data as raw JSON */
  _raw_: Scalars['JSON'];
  /** The Globally Unique ID of the object. */
  id: Scalars['ID'];
  /** Profile that owns this itinerary */
  profile?: Maybe<Profile>;
  /** The date when the itinerary was created */
  created?: Maybe<Scalars['String']>;
  /** The date when the itinerary was last modified */
  modified?: Maybe<Scalars['String']>;
  /** Returns a single item from this itinerary by id */
  item?: Maybe<ItineraryItem>;
  /** If true, itinerary-directions will be created to automatically route between itinerary-locations */
  autoRoute?: Maybe<ItineraryAutoRoute>;
  /** The supplied title */
  title?: Maybe<Scalars['String']>;
  /** A short text summary */
  synopsis?: Maybe<Scalars['String']>;
  /** A longer text description */
  description?: Maybe<Scalars['String']>;
  /** A series of strings applied to label this item */
  tags: Array<Scalars['String']>;
  /** A collection of Media objects representing images or other media */
  media: Array<Media>;
  /** A single Media object representing the preferred media to use */
  preferredMedia?: Maybe<Media>;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
  /** The descending items within this itinerary item */
  descendants: ItineraryItemConnection;
  /** The immediate associated children itinerary items */
  children: ItineraryItemConnection;
  /** Arbitrary JSON value stored on this resource, keyed by an id */
  attr?: Maybe<Attribute>;
  /** Shortcut for the attr.value, returns null if the attribute doesn't exist */
  attrValue?: Maybe<Scalars['JSON']>;
  /** Query multiple attributes by id and optionally locale */
  attrs: Array<Maybe<Attribute>>;
  /** Query multiple attributes with the same id and optionally locale */
  attrsById: AttributeConnection;
  /** Return all attributes on the resource */
  allAttrs: AttributeConnection;
  /** Bounds for the itinerary item */
  bounds?: Maybe<Bounds>;
  /** Elevation data of the itinerary */
  elevation: Elevation;
};


/** An itinerary type is used to structure a series of items representing a travel itinerary */
export type ItineraryCreatedArgs = {
  format?: Maybe<Scalars['String']>;
  relativeTo?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** An itinerary type is used to structure a series of items representing a travel itinerary */
export type ItineraryModifiedArgs = {
  format?: Maybe<Scalars['String']>;
  relativeTo?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** An itinerary type is used to structure a series of items representing a travel itinerary */
export type ItineraryItemArgs = {
  id: Scalars['ID'];
};


/** An itinerary type is used to structure a series of items representing a travel itinerary */
export type ItineraryMediaArgs = {
  limit?: Scalars['Int'];
};


/** An itinerary type is used to structure a series of items representing a travel itinerary */
export type ItineraryDescendantsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
  depthMax?: Maybe<Scalars['Int']>;
  depthMin?: Maybe<Scalars['Int']>;
};


/** An itinerary type is used to structure a series of items representing a travel itinerary */
export type ItineraryChildrenArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  type?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
};


/** An itinerary type is used to structure a series of items representing a travel itinerary */
export type ItineraryAttrArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** An itinerary type is used to structure a series of items representing a travel itinerary */
export type ItineraryAttrValueArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** An itinerary type is used to structure a series of items representing a travel itinerary */
export type ItineraryAttrsArgs = {
  attrs: Array<AttributeIdentifierInput>;
};


/** An itinerary type is used to structure a series of items representing a travel itinerary */
export type ItineraryAttrsByIdArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** An itinerary type is used to structure a series of items representing a travel itinerary */
export type ItineraryAllAttrsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
};

/** Automatically generate ItineraryDirections that connect sibling ItineraryLocations */
export type ItineraryAutoRoute = {
  __typename?: 'ItineraryAutoRoute';
  /** The default mode of transport to use for the generated ItineraryDirections */
  defaultMode: RouteMode;
};

/** Automatically generate ItineraryDirections that connect sibling ItineraryLocations */
export type ItineraryAutoRouteInput = {
  /** The default mode of transport to use for the generated ItineraryDirections, if excluded defaults to Car */
  defaultMode?: Maybe<RouteMode>;
};

/** An itinerary item representing a collection of other itinerary items */
export type ItineraryCollection = Node & ItineraryItem & {
  __typename?: 'ItineraryCollection';
  /** [DEBUG ONLY] The internal data as raw JSON */
  _raw_: Scalars['JSON'];
  /** Unique identifier for the itinerary-item */
  id: Scalars['ID'];
  /** The supplied title */
  title?: Maybe<Scalars['String']>;
  /** A short text summary */
  synopsis?: Maybe<Scalars['String']>;
  /** A longer text description */
  description?: Maybe<Scalars['String']>;
  /** A series of strings applied to label this item */
  tags: Array<Scalars['String']>;
  /** A collection of Media objects representing images or other media */
  media: Array<Media>;
  /** A single Media object representing the preferred media to use */
  preferredMedia?: Maybe<Media>;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
  /** The itinerary this item belongs to */
  itinerary: Itinerary;
  /** The sibling item that comes before this item */
  before?: Maybe<ItineraryItem>;
  /** The sibling item that comes after this item */
  after?: Maybe<ItineraryItem>;
  /** The parent item of this item */
  parent?: Maybe<ItineraryItem>;
  /** All ancestors of the itinerary-item */
  ancestors: ItineraryItemConnection;
  /** All the descendants of the itinerary-item in depth-first-search order */
  descendants: ItineraryItemConnection;
  /** All the direct children of the itinerary-item */
  children: ItineraryItemConnection;
  /** Arbitrary JSON value stored on this resource, keyed by an id */
  attr?: Maybe<Attribute>;
  /** Shortcut for the attr.value, returns null if the attribute doesn't exist */
  attrValue?: Maybe<Scalars['JSON']>;
  /** Query multiple attributes by id and optionally locale */
  attrs: Array<Maybe<Attribute>>;
  /** Query multiple attributes with the same id and optionally locale */
  attrsById: AttributeConnection;
  /** Return all attributes on the resource */
  allAttrs: AttributeConnection;
  /** Bounds for the itinerary item */
  bounds?: Maybe<Bounds>;
};


/** An itinerary item representing a collection of other itinerary items */
export type ItineraryCollectionMediaArgs = {
  limit?: Scalars['Int'];
};


/** An itinerary item representing a collection of other itinerary items */
export type ItineraryCollectionBeforeArgs = {
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
};


/** An itinerary item representing a collection of other itinerary items */
export type ItineraryCollectionAfterArgs = {
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
};


/** An itinerary item representing a collection of other itinerary items */
export type ItineraryCollectionParentArgs = {
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
};


/** An itinerary item representing a collection of other itinerary items */
export type ItineraryCollectionAncestorsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
};


/** An itinerary item representing a collection of other itinerary items */
export type ItineraryCollectionDescendantsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
  depthMax?: Maybe<Scalars['Int']>;
  depthMin?: Maybe<Scalars['Int']>;
};


/** An itinerary item representing a collection of other itinerary items */
export type ItineraryCollectionChildrenArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
};


/** An itinerary item representing a collection of other itinerary items */
export type ItineraryCollectionAttrArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** An itinerary item representing a collection of other itinerary items */
export type ItineraryCollectionAttrValueArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** An itinerary item representing a collection of other itinerary items */
export type ItineraryCollectionAttrsArgs = {
  attrs: Array<AttributeIdentifierInput>;
};


/** An itinerary item representing a collection of other itinerary items */
export type ItineraryCollectionAttrsByIdArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** An itinerary item representing a collection of other itinerary items */
export type ItineraryCollectionAllAttrsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
};

export type ItineraryConnection = {
  __typename?: 'ItineraryConnection';
  /** All the edges in this page of the connection */
  edges: Array<ItineraryEdge>;
  /** Shortcut for edges[].node */
  nodes: Array<Itinerary>;
  /** Details regarding the current page of the connnection */
  pageInfo: PageInfo;
  /** The total number of items in the connection (in all pages) */
  totalCount: Scalars['Int'];
};

/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirections = Node & ItineraryItem & {
  __typename?: 'ItineraryDirections';
  /** [DEBUG ONLY] The internal data as raw JSON */
  _raw_: Scalars['JSON'];
  /** Unique identifier for the itinerary-item */
  id: Scalars['ID'];
  /** The supplied title */
  title?: Maybe<Scalars['String']>;
  /** A short text summary */
  synopsis?: Maybe<Scalars['String']>;
  /** A longer text description */
  description?: Maybe<Scalars['String']>;
  /** A series of strings applied to label this item */
  tags: Array<Scalars['String']>;
  /** A collection of Media objects representing images or other media */
  media: Array<Media>;
  /** A single Media object representing the preferred media to use */
  preferredMedia?: Maybe<Media>;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
  /** The itinerary this item belongs to */
  itinerary: Itinerary;
  /** The sibling item that comes before this item */
  before?: Maybe<ItineraryItem>;
  /** The sibling item that comes after this item */
  after?: Maybe<ItineraryItem>;
  /** The parent item of this item */
  parent?: Maybe<ItineraryItem>;
  /** All ancestors of the itinerary-item */
  ancestors: ItineraryItemConnection;
  /** All the descendants of the itinerary-item in depth-first-search order */
  descendants: ItineraryItemConnection;
  /** All the direct children of the itinerary-item */
  children: ItineraryItemConnection;
  /** Arbitrary JSON value stored on this resource, keyed by an id */
  attr?: Maybe<Attribute>;
  /** Shortcut for the attr.value, returns null if the attribute doesn't exist */
  attrValue?: Maybe<Scalars['JSON']>;
  /** Query multiple attributes by id and optionally locale */
  attrs: Array<Maybe<Attribute>>;
  /** Query multiple attributes with the same id and optionally locale */
  attrsById: AttributeConnection;
  /** Return all attributes on the resource */
  allAttrs: AttributeConnection;
  /** Bounds for the itinerary-directions and it's descendants */
  bounds?: Maybe<Bounds>;
  /** The itinerary-location that is the starting point of the directions */
  origin?: Maybe<ItineraryLocation>;
  /** The itinerary-location that is the ending point of the directions */
  destination?: Maybe<ItineraryLocation>;
  /** The route details of this directions item */
  route: Route;
  /** The duration of this itinerary-directions */
  durations: Array<ItineraryDirectionsDurations>;
  /** The minimum duration of this itinerary-directions */
  durationMin?: Maybe<Scalars['Float']>;
  /** The maximum duration of this itinerary-directions */
  durationMax?: Maybe<Scalars['Float']>;
  /** The distance of this itinerary-directions */
  distance?: Maybe<Scalars['Float']>;
  /** The elevation details of this itinerary-directions */
  elevation: Elevation;
};


/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirectionsMediaArgs = {
  limit?: Scalars['Int'];
};


/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirectionsBeforeArgs = {
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
};


/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirectionsAfterArgs = {
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
};


/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirectionsParentArgs = {
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
};


/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirectionsAncestorsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
};


/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirectionsDescendantsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
  depthMax?: Maybe<Scalars['Int']>;
  depthMin?: Maybe<Scalars['Int']>;
};


/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirectionsChildrenArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
};


/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirectionsAttrArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirectionsAttrValueArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirectionsAttrsArgs = {
  attrs: Array<AttributeIdentifierInput>;
};


/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirectionsAttrsByIdArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirectionsAllAttrsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
};


/** An itinerary item representing directions from an origin location to the parent location. This item encapsulates modes of transport and routes. */
export type ItineraryDirectionsBoundsArgs = {
  excludeDescendants?: Maybe<Scalars['Boolean']>;
};

export enum ItineraryDirectionsAccuracy {
  /** Consider itinerary-directions related if the itinerary-location matches */
  Location = 'Location',
  /** Consider itinerary-directions related if the place inside the itinerary-location matches */
  Place = 'Place'
}

export type ItineraryDirectionsConnection = {
  __typename?: 'ItineraryDirectionsConnection';
  /** All the edges in this page of the connection */
  edges: Array<ItineraryDirectionsEdge>;
  /** Shortcut for edges[].node */
  nodes: Array<ItineraryDirections>;
  /** Details regarding the current page of the connnection */
  pageInfo: PageInfo;
  /** The total number of items in the connection (in all pages) */
  totalCount: Scalars['Int'];
};

export enum ItineraryDirectionsDirection {
  Inbound = 'Inbound',
  Outbound = 'Outbound'
}

/** An itinerary-directions duration value */
export type ItineraryDirectionsDurations = {
  __typename?: 'ItineraryDirectionsDurations';
  /** Unique identifier for this duration */
  id: Scalars['ID'];
  /** The duration value */
  duration: Scalars['Float'];
  /** Label for the duration */
  label?: Maybe<Scalars['String']>;
};

export type ItineraryDirectionsDurationsInput = {
  /** The duration value */
  duration: Scalars['Float'];
  /** Label for the duration */
  label?: Maybe<Scalars['String']>;
};

export type ItineraryDirectionsEdge = {
  __typename?: 'ItineraryDirectionsEdge';
  /** The cursor string pointing to this item */
  cursor: Scalars['String'];
  /** The item */
  node: ItineraryDirections;
  /** Whether this itinerary-directions is inbound or outbound from the itinerary-location */
  direction: ItineraryDirectionsDirection;
};

/** A Connection like object that contains itinerary-directions. This object does not confirm to the Connection specification and does not use cursors but merely provides a similar interface */
export type ItineraryDirectionsPseudoConnection = {
  __typename?: 'ItineraryDirectionsPseudoConnection';
  /** All the edges in this page of the connection */
  edges: Array<ItineraryDirectionsPseudoEdge>;
  /** Shortcut for edges[].node */
  nodes: Array<ItineraryDirections>;
  /** The total number of items in the connection (in all pages) */
  totalCount: Scalars['Int'];
};

export type ItineraryDirectionsPseudoEdge = {
  __typename?: 'ItineraryDirectionsPseudoEdge';
  /** The item */
  node: ItineraryDirections;
  /** Whether this itinerary-directions is inbound or outbound from the itinerary-item */
  direction: ItineraryDirectionsDirection;
};

export enum ItineraryDirectionsRestrict {
  /** Restrict results to include directions that are descendants of the parent item */
  ParentDescendants = 'ParentDescendants'
}

export type ItineraryEdge = {
  __typename?: 'ItineraryEdge';
  /** The cursor string pointing to this item */
  cursor: Scalars['String'];
  /** The item */
  node: Itinerary;
};

/** An item in an itinerary as part of the tree */
export type ItineraryItem = {
  /** [DEBUG ONLY] The internal data as raw JSON */
  _raw_: Scalars['JSON'];
  /** Unique identifier for the itinerary-item */
  id: Scalars['ID'];
  /** The supplied title */
  title?: Maybe<Scalars['String']>;
  /** A short text summary */
  synopsis?: Maybe<Scalars['String']>;
  /** A longer text description */
  description?: Maybe<Scalars['String']>;
  /** A series of strings applied to label this item */
  tags: Array<Scalars['String']>;
  /** A collection of Media objects representing images or other media */
  media: Array<Media>;
  /** A single Media object representing the preferred media to use */
  preferredMedia?: Maybe<Media>;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
  /** The itinerary this item belongs to */
  itinerary: Itinerary;
  /** The sibling item that comes before this item */
  before?: Maybe<ItineraryItem>;
  /** The sibling item that comes after this item */
  after?: Maybe<ItineraryItem>;
  /** The parent item of this item */
  parent?: Maybe<ItineraryItem>;
  /** All ancestors of the itinerary-item */
  ancestors: ItineraryItemConnection;
  /** All the descendants of the itinerary-item in depth-first-search order */
  descendants: ItineraryItemConnection;
  /** All the direct children of the itinerary-item */
  children: ItineraryItemConnection;
  /** Arbitrary JSON value stored on this resource, keyed by an id */
  attr?: Maybe<Attribute>;
  /** Shortcut for the attr.value, returns null if the attribute doesn't exist */
  attrValue?: Maybe<Scalars['JSON']>;
  /** Query multiple attributes by id and optionally locale */
  attrs: Array<Maybe<Attribute>>;
  /** Query multiple attributes with the same id and optionally locale */
  attrsById: AttributeConnection;
  /** Return all attributes on the resource */
  allAttrs: AttributeConnection;
  /** Bounds for the itinerary item */
  bounds?: Maybe<Bounds>;
};


/** An item in an itinerary as part of the tree */
export type ItineraryItemMediaArgs = {
  limit?: Scalars['Int'];
};


/** An item in an itinerary as part of the tree */
export type ItineraryItemBeforeArgs = {
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
};


/** An item in an itinerary as part of the tree */
export type ItineraryItemAfterArgs = {
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
};


/** An item in an itinerary as part of the tree */
export type ItineraryItemParentArgs = {
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
};


/** An item in an itinerary as part of the tree */
export type ItineraryItemAncestorsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
};


/** An item in an itinerary as part of the tree */
export type ItineraryItemDescendantsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
  depthMax?: Maybe<Scalars['Int']>;
  depthMin?: Maybe<Scalars['Int']>;
};


/** An item in an itinerary as part of the tree */
export type ItineraryItemChildrenArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
};


/** An item in an itinerary as part of the tree */
export type ItineraryItemAttrArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** An item in an itinerary as part of the tree */
export type ItineraryItemAttrValueArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** An item in an itinerary as part of the tree */
export type ItineraryItemAttrsArgs = {
  attrs: Array<AttributeIdentifierInput>;
};


/** An item in an itinerary as part of the tree */
export type ItineraryItemAttrsByIdArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** An item in an itinerary as part of the tree */
export type ItineraryItemAllAttrsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
};

export type ItineraryItemCascadedChanges = {
  __typename?: 'ItineraryItemCascadedChanges';
  /** Itinerary-items that were deleted due to the mutation */
  deletedIds: Array<Scalars['ID']>;
  /** Itinerary-items that were created due to the mutation */
  created: Array<ItineraryItem>;
  /** Itinerary-items that were updated due to the mutation */
  updated: Array<ItineraryItem>;
};

export type ItineraryItemConnection = {
  __typename?: 'ItineraryItemConnection';
  /** All the edges in this page of the connection */
  edges: Array<ItineraryItemEdge>;
  /** Shortcut for edges[].node */
  nodes: Array<ItineraryItem>;
  /** Details regarding the current page of the connnection */
  pageInfo: PageInfo;
  /** The total number of items in the connection (in all pages) */
  totalCount: Scalars['Int'];
};

export type ItineraryItemEdge = {
  __typename?: 'ItineraryItemEdge';
  /** The cursor string pointing to this item */
  cursor: Scalars['String'];
  /** The item */
  node: ItineraryItem;
  /** List itinerary-directions connecting this node to other nodes in the connection */
  directions: ItineraryDirectionsPseudoConnection;
};


export type ItineraryItemEdgeDirectionsArgs = {
  first: Scalars['Int'];
  direction?: Maybe<ItineraryDirectionsDirection>;
  limitImmediate?: Scalars['Boolean'];
  skipOptional?: Scalars['Boolean'];
};

/** Positions the item after a sibling */
export type ItineraryItemPositionAfterSibling = {
  /** The sibling itinerary item identifier, in the form of item/XYZ */
  siblingId?: Maybe<Scalars['ID']>;
};

/** Positions the item at the end position of its siblings */
export type ItineraryItemPositionAtEnd = {
  /** The parent itinerary item identifier, in the form of item/XYZ */
  parentId?: Maybe<Scalars['ID']>;
};

/** Positions the item at the start position of its siblings */
export type ItineraryItemPositionAtStart = {
  /** The parent itinerary item identifier, in the form of item/XYZ */
  parentId?: Maybe<Scalars['ID']>;
};

/** Positions the item before a sibling */
export type ItineraryItemPositionBeforeSibling = {
  /** The sibling itinerary item identifier, in the form of item/XYZ */
  siblingId?: Maybe<Scalars['ID']>;
};

/** Positions the itinerary item to the last position of the last itinerary collection item */
export type ItineraryItemPositionOnLastCollection = {
  /** The itinerary item identifier to limit descendent searching withing */
  searchUnder?: Maybe<Scalars['ID']>;
};

export enum ItineraryItemType {
  ItineraryCollection = 'ItineraryCollection',
  ItineraryLocation = 'ItineraryLocation',
  ItineraryDirections = 'ItineraryDirections'
}

/** An itinerary item representing a location with an associated place in the itinerary */
export type ItineraryLocation = Node & ItineraryItem & {
  __typename?: 'ItineraryLocation';
  /** [DEBUG ONLY] The internal data as raw JSON */
  _raw_: Scalars['JSON'];
  /** Unique identifier for the itinerary-item */
  id: Scalars['ID'];
  /** The supplied title */
  title?: Maybe<Scalars['String']>;
  /** A short text summary */
  synopsis?: Maybe<Scalars['String']>;
  /** A longer text description */
  description?: Maybe<Scalars['String']>;
  /** A series of strings applied to label this item */
  tags: Array<Scalars['String']>;
  /** A collection of Media objects representing images or other media */
  media: Array<Media>;
  /** A single Media object representing the preferred media to use */
  preferredMedia?: Maybe<Media>;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
  /** The itinerary this item belongs to */
  itinerary: Itinerary;
  /** The sibling item that comes before this item */
  before?: Maybe<ItineraryItem>;
  /** The sibling item that comes after this item */
  after?: Maybe<ItineraryItem>;
  /** The parent item of this item */
  parent?: Maybe<ItineraryItem>;
  /** All ancestors of the itinerary-item */
  ancestors: ItineraryItemConnection;
  /** All the descendants of the itinerary-item in depth-first-search order */
  descendants: ItineraryItemConnection;
  /** All the direct children of the itinerary-item */
  children: ItineraryItemConnection;
  /** Arbitrary JSON value stored on this resource, keyed by an id */
  attr?: Maybe<Attribute>;
  /** Shortcut for the attr.value, returns null if the attribute doesn't exist */
  attrValue?: Maybe<Scalars['JSON']>;
  /** Query multiple attributes by id and optionally locale */
  attrs: Array<Maybe<Attribute>>;
  /** Query multiple attributes with the same id and optionally locale */
  attrsById: AttributeConnection;
  /** Return all attributes on the resource */
  allAttrs: AttributeConnection;
  /** Bounds for the itinerary-location and it's descendants */
  bounds: Bounds;
  /** The place details of this location */
  place: Place;
  /** The position of the collection-location (derived from place if not overridden) */
  position: Position;
  /** The representation of a location, as a GeoJSON FeatureCollection */
  geoJson: Scalars['JSON'];
  /** Whether the location is an optional stop */
  optional: Scalars['Boolean'];
  /** Retrieves itinerary-directions associated with this itinerary-location */
  directions: ItineraryDirectionsConnection;
};


/** An itinerary item representing a location with an associated place in the itinerary */
export type ItineraryLocationMediaArgs = {
  limit?: Scalars['Int'];
};


/** An itinerary item representing a location with an associated place in the itinerary */
export type ItineraryLocationBeforeArgs = {
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
};


/** An itinerary item representing a location with an associated place in the itinerary */
export type ItineraryLocationAfterArgs = {
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
};


/** An itinerary item representing a location with an associated place in the itinerary */
export type ItineraryLocationParentArgs = {
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
};


/** An itinerary item representing a location with an associated place in the itinerary */
export type ItineraryLocationAncestorsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
};


/** An itinerary item representing a location with an associated place in the itinerary */
export type ItineraryLocationDescendantsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
  depthMax?: Maybe<Scalars['Int']>;
  depthMin?: Maybe<Scalars['Int']>;
};


/** An itinerary item representing a location with an associated place in the itinerary */
export type ItineraryLocationChildrenArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  type?: Maybe<ItineraryItemType>;
  parentType?: Maybe<ItineraryItemType>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
};


/** An itinerary item representing a location with an associated place in the itinerary */
export type ItineraryLocationAttrArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** An itinerary item representing a location with an associated place in the itinerary */
export type ItineraryLocationAttrValueArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** An itinerary item representing a location with an associated place in the itinerary */
export type ItineraryLocationAttrsArgs = {
  attrs: Array<AttributeIdentifierInput>;
};


/** An itinerary item representing a location with an associated place in the itinerary */
export type ItineraryLocationAttrsByIdArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** An itinerary item representing a location with an associated place in the itinerary */
export type ItineraryLocationAllAttrsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
};


/** An itinerary item representing a location with an associated place in the itinerary */
export type ItineraryLocationBoundsArgs = {
  excludeDescendants?: Maybe<Scalars['Boolean']>;
};


/** An itinerary item representing a location with an associated place in the itinerary */
export type ItineraryLocationDirectionsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  direction?: Maybe<ItineraryDirectionsDirection>;
  accuracy?: Maybe<ItineraryDirectionsAccuracy>;
  restrict?: Maybe<ItineraryDirectionsRestrict>;
};


/** A container for a media-resource */
export type Media = {
  __typename?: 'Media';
  /** [DEBUG ONLY] The internal data as raw JSON */
  _raw_: Scalars['JSON'];
  /** The media-resource */
  resource: MediaResource;
};

/** And image type media-resource */
export type MediaImage = MediaResource & {
  __typename?: 'MediaImage';
  /** [DEBUG ONLY] The internal data as raw JSON */
  _raw_: Scalars['JSON'];
  /** Unique identifier for the media */
  id?: Maybe<Scalars['ID']>;
  /** The associated profile owner */
  profile?: Maybe<Profile>;
  /** The provider for the media */
  provider: Scalars['String'];
  /** Text caption for the media-resource */
  caption?: Maybe<Scalars['String']>;
  /** Text attribution for the source of the media-resource */
  attribution?: Maybe<Scalars['String']>;
  /** Copyright details of the media-resource */
  copyright?: Maybe<Scalars['String']>;
  /** Alternative text for the media-resource */
  altText?: Maybe<Scalars['String']>;
  /** A series of strings representing applied labels to the media */
  tags: Array<Scalars['String']>;
  /** Arbitrary JSON value stored on this resource, keyed by an id */
  attr?: Maybe<Attribute>;
  /** Shortcut for the attr.value, returns null if the attribute doesn't exist */
  attrValue?: Maybe<Scalars['JSON']>;
  /** Query multiple attributes by id and optionally locale */
  attrs: Array<Maybe<Attribute>>;
  /** Return all attributes on the resource */
  allAttrs: AttributeConnection;
  /** Query multiple attributes with the same id and optionally locale */
  attrsById: AttributeConnection;
  /** The original width and height of the image */
  originalSize?: Maybe<Array<Scalars['Int']>>;
  /** Provides the URL of the media */
  url?: Maybe<Scalars['String']>;
  /** Provides a specific source for the media, based often on different encoding or different sizing */
  source?: Maybe<MediaImageSource>;
  /** A collection of sources for the media */
  sources: Array<MediaImageSource>;
  /** Ids of all exif data in this media-image */
  exifIds: Array<Scalars['ID']>;
  /** Look up one exif value in this media-image by id */
  exif?: Maybe<MediaImageExif>;
};


/** And image type media-resource */
export type MediaImageAttrArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** And image type media-resource */
export type MediaImageAttrValueArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** And image type media-resource */
export type MediaImageAttrsArgs = {
  attrs: Array<AttributeIdentifierInput>;
};


/** And image type media-resource */
export type MediaImageAllAttrsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
};


/** And image type media-resource */
export type MediaImageAttrsByIdArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** And image type media-resource */
export type MediaImageUrlArgs = {
  key?: Maybe<Scalars['String']>;
  bestFit?: Maybe<Array<Scalars['Int']>>;
};


/** And image type media-resource */
export type MediaImageSourceArgs = {
  key?: Maybe<Scalars['String']>;
  bestFit?: Maybe<Array<Scalars['Int']>>;
};


/** And image type media-resource */
export type MediaImageExifArgs = {
  id: Scalars['ID'];
};

/** One exif datum on a media-image */
export type MediaImageExif = {
  __typename?: 'MediaImageExif';
  /** [DEBUG ONLY] The internal data as raw JSON */
  _raw_: Scalars['JSON'];
  /** Unique identifier of this exif datum */
  id: Scalars['ID'];
  /** The exif value */
  value: Scalars['JSON'];
};

/** An source for a media image */
export type MediaImageSource = {
  __typename?: 'MediaImageSource';
  /** [DEBUG ONLY] The internal data as raw JSON */
  _raw_: Scalars['JSON'];
  /** The content-type of the media source */
  type: Scalars['String'];
  /** A optional key available to consistently identify an available source */
  key?: Maybe<Scalars['String']>;
  /** The URL to the media source */
  url: Scalars['String'];
  /** The width of the media */
  width?: Maybe<Scalars['Int']>;
  /** The height of the media */
  height?: Maybe<Scalars['Int']>;
};

/** Representing media such as images/photos as well as other types such as video or audio */
export type MediaResource = {
  /** [DEBUG ONLY] The internal data as raw JSON */
  _raw_: Scalars['JSON'];
  /** Unique identifier for the media */
  id?: Maybe<Scalars['ID']>;
  /** The associated profile owner */
  profile?: Maybe<Profile>;
  /** The provider for the media */
  provider: Scalars['String'];
  /** Text caption for the media-resource */
  caption?: Maybe<Scalars['String']>;
  /** Text attribution for the source of the media-resource */
  attribution?: Maybe<Scalars['String']>;
  /** Copyright details of the media-resource */
  copyright?: Maybe<Scalars['String']>;
  /** Alternative text for the media-resource */
  altText?: Maybe<Scalars['String']>;
  /** A series of strings representing applied labels to the media */
  tags: Array<Scalars['String']>;
  /** Arbitrary JSON value stored on this resource, keyed by an id */
  attr?: Maybe<Attribute>;
  /** Shortcut for the attr.value, returns null if the attribute doesn't exist */
  attrValue?: Maybe<Scalars['JSON']>;
  /** Query multiple attributes by id and optionally locale */
  attrs: Array<Maybe<Attribute>>;
  /** Return all attributes on the resource */
  allAttrs: AttributeConnection;
  /** Query multiple attributes with the same id and optionally locale */
  attrsById: AttributeConnection;
};


/** Representing media such as images/photos as well as other types such as video or audio */
export type MediaResourceAttrArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** Representing media such as images/photos as well as other types such as video or audio */
export type MediaResourceAttrValueArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** Representing media such as images/photos as well as other types such as video or audio */
export type MediaResourceAttrsArgs = {
  attrs: Array<AttributeIdentifierInput>;
};


/** Representing media such as images/photos as well as other types such as video or audio */
export type MediaResourceAllAttrsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
};


/** Representing media such as images/photos as well as other types such as video or audio */
export type MediaResourceAttrsByIdArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};

export enum MediaUploadStatus {
  AwaitingUpload = 'AwaitingUpload',
  Processing = 'Processing',
  Complete = 'Complete',
  ProcessingFailed = 'ProcessingFailed'
}

/** Moves the itinerary item */
export type MoveItineraryItemPayload = {
  __typename?: 'MoveItineraryItemPayload';
  /** The fields for the item */
  item?: Maybe<ItineraryItem>;
  /** The modified itinerary */
  itinerary: Itinerary;
  /** Other changes to the itinerary that caused by moving the itinerary-item */
  cascaded: ItineraryItemCascadedChanges;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create a follow request between two profiles */
  followProfile: FollowProfilePayload;
  /** Remove the follow between two profiles */
  unfollowProfile: UnfollowProfilePayload;
  /** Approve a follow request between two profiles */
  approveProfileFollow: ApproveProfileFollowPayload;
  /** Deny a follow request between two profiles */
  denyProfileFollow: DenyProfileFollowPayload;
  /** Claim an unclaimed handle for the given profile */
  claimProfileHandle: ClaimProfileHandlePayload;
  /** Updates the specified profile with the given fields */
  updateProfile: UpdateProfilePayload;
  /** Start a media upload */
  startMediaUpload: StartMediaUploadPayload;
  /** Finalize the media upload by creating a media-resource */
  finalizeMediaUpload: FinalizeMediaUploadPayload;
  /** Update a media resource with updated properties */
  updateMediaResource: UpdateMediaResourcePayload;
  /** The return fields available after creating a collection */
  createCollection: CreateCollectionPayload;
  /** Updates a collection */
  updateCollection: UpdateCollectionPayload;
  /** Delete an collection */
  deleteCollection: DeleteCollectionPayload;
  /** The fields available after the collection is deleted */
  deleteCollectionItem: DeleteCollectionItemPayload;
  /** Create a new collection-location under the given collection */
  createCollectionLocation: CreateCollectionLocationPayload;
  /** The fields avaialble after updating the collection location */
  updateCollectionLocation: UpdateCollectionLocationPayload;
  /** Create a new itinerary */
  createItinerary: CreateItineraryPayload;
  /** Updates a itinerary */
  updateItinerary: UpdateItineraryPayload;
  /** Delete an itinerary */
  deleteItinerary: DeleteItineraryPayload;
  /** Publish an itinerary making it publically accessible */
  publishItinerary: PublishItineraryPayload;
  /** Move an ItineraryItem */
  moveItineraryItem: MoveItineraryItemPayload;
  /** Delete an ItineraryItem */
  deleteItineraryItem: DeleteItineraryItemPayload;
  /** Create a new ItineraryCollection item inside the given itinerary */
  createItineraryCollection: CreateItineraryCollectionPayload;
  /** Update an ItineraryCollection */
  updateItineraryCollection: UpdateItineraryCollectionPayload;
  /** Create a new ItineraryLocation item inside the given itinerary */
  createItineraryLocation: CreateItineraryLocationPayload;
  /** Update an ItineraryLocation */
  updateItineraryLocation: UpdateItineraryLocationPayload;
  /** Create a new ItineraryDirections item inside the given itinerary */
  createItineraryDirections: CreateItineraryDirectionsPayload;
  /** Update an ItineraryDirections */
  updateItineraryDirections: UpdateItineraryDirectionsPayload;
  /** The return fields available after creating a connected app */
  createConnectedApp: CreateConnectedAppPayload;
  /** Update a connected app */
  updateConnectedApp: UpdateConnectedAppPayload;
  /** Deleted a connected app */
  deleteConnectedApp: DeleteConnectedAppPayload;
};


export type MutationFollowProfileArgs = {
  fromProfile: Scalars['ID'];
  toProfile: Scalars['ID'];
};


export type MutationUnfollowProfileArgs = {
  fromProfile: Scalars['ID'];
  toProfile: Scalars['ID'];
};


export type MutationApproveProfileFollowArgs = {
  fromProfile: Scalars['ID'];
  toProfile: Scalars['ID'];
};


export type MutationDenyProfileFollowArgs = {
  fromProfile: Scalars['ID'];
  toProfile: Scalars['ID'];
};


export type MutationClaimProfileHandleArgs = {
  id: Scalars['ID'];
  handle: Scalars['String'];
};


export type MutationUpdateProfileArgs = {
  id: Scalars['ID'];
  profile: UpdateProfileInput;
};


export type MutationStartMediaUploadArgs = {
  filename: Scalars['String'];
  contentType?: Maybe<Scalars['String']>;
};


export type MutationFinalizeMediaUploadArgs = {
  token: Scalars['String'];
  profileId?: Maybe<Scalars['ID']>;
  mediaResource?: Maybe<CreateMediaResourceInput>;
};


export type MutationUpdateMediaResourceArgs = {
  id: Scalars['ID'];
  mediaResource: UpdateMediaResourceInput;
};


export type MutationCreateCollectionArgs = {
  profileId: Scalars['ID'];
  collection: CreateCollectionInput;
};


export type MutationUpdateCollectionArgs = {
  id: Scalars['ID'];
  collection: UpdateCollectionInput;
};


export type MutationDeleteCollectionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCollectionItemArgs = {
  id: Scalars['ID'];
};


export type MutationCreateCollectionLocationArgs = {
  collectionId: Scalars['ID'];
  location: CreateCollectionLocationInput;
};


export type MutationUpdateCollectionLocationArgs = {
  id: Scalars['ID'];
  location: UpdateCollectionLocationInput;
};


export type MutationCreateItineraryArgs = {
  itinerary: CreateItineraryInput;
  profileId?: Maybe<Scalars['ID']>;
};


export type MutationUpdateItineraryArgs = {
  id: Scalars['ID'];
  itinerary: UpdateItineraryInput;
};


export type MutationDeleteItineraryArgs = {
  id: Scalars['ID'];
};


export type MutationPublishItineraryArgs = {
  id: Scalars['ID'];
};


export type MutationMoveItineraryItemArgs = {
  id: Scalars['ID'];
  positionAtStart?: Maybe<ItineraryItemPositionAtStart>;
  positionAtEnd?: Maybe<ItineraryItemPositionAtEnd>;
  positionAfterSibling?: Maybe<ItineraryItemPositionAfterSibling>;
  positionBeforeSibling?: Maybe<ItineraryItemPositionBeforeSibling>;
  positionOnLastCollection?: Maybe<ItineraryItemPositionOnLastCollection>;
};


export type MutationDeleteItineraryItemArgs = {
  id: Scalars['ID'];
};


export type MutationCreateItineraryCollectionArgs = {
  itineraryId: Scalars['ID'];
  collection: CreateItineraryCollectionInput;
};


export type MutationUpdateItineraryCollectionArgs = {
  id: Scalars['ID'];
  collection: UpdateItineraryCollectionInput;
};


export type MutationCreateItineraryLocationArgs = {
  itineraryId: Scalars['ID'];
  location: CreateItineraryLocationInput;
  autoRoute?: Maybe<RouteSegmentInput>;
};


export type MutationUpdateItineraryLocationArgs = {
  id: Scalars['ID'];
  location: UpdateItineraryLocationInput;
};


export type MutationCreateItineraryDirectionsArgs = {
  itineraryId: Scalars['ID'];
  directions: CreateItineraryDirectionsInput;
};


export type MutationUpdateItineraryDirectionsArgs = {
  id: Scalars['ID'];
  directions: UpdateItineraryDirectionsInput;
};


export type MutationCreateConnectedAppArgs = {
  profileId: Scalars['ID'];
  connectedApp: CreateConnectedAppInput;
};


export type MutationUpdateConnectedAppArgs = {
  id: Scalars['ID'];
  connectedApp: UpdateConnectedAppInput;
};


export type MutationDeleteConnectedAppArgs = {
  id: Scalars['ID'];
};

/** An object with a Globally Unique ID */
export type Node = {
  /** [DEBUG ONLY] The internal data as raw JSON */
  _raw_: Scalars['JSON'];
  /** The Globally Unique ID of the object. */
  id: Scalars['ID'];
};

/** Details regarding a page in a connnection */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** True if there is a page before this one */
  hasPreviousPage: Scalars['Boolean'];
  /** True if there is a page after this one */
  hasNextPage: Scalars['Boolean'];
  /** The cursor of the first edge in this page */
  startCursor?: Maybe<Scalars['String']>;
  /** The cursor of the last edge in this page */
  endCursor?: Maybe<Scalars['String']>;
};

/** A defined location in the world */
export type Place = Node & {
  __typename?: 'Place';
  /** [DEBUG ONLY] The internal data as raw JSON */
  _raw_: Scalars['JSON'];
  /** The Globally Unique ID of the object. */
  id: Scalars['ID'];
  /** Alias for `Place.name` */
  title?: Maybe<Scalars['String']>;
  /** The name of the place */
  name?: Maybe<Scalars['String']>;
  /** A short summary */
  synopsis?: Maybe<Scalars['String']>;
  /** A longer description */
  description?: Maybe<Scalars['String']>;
  /** A collection of strings used to label this place */
  tags: Array<Scalars['String']>;
  /** The address of the place */
  address: PlaceAddress;
  /** The position of the place */
  position: Position;
  /** The bounding box around the place */
  bounds?: Maybe<Bounds>;
  /** The operating hours for this place, as encoded in OpenStreetMap hours specification */
  hours?: Maybe<PlaceHours>;
  /** The maki icon for this place */
  maki?: Maybe<Scalars['String']>;
  /** Source of the place data */
  contributor?: Maybe<Scalars['String']>;
  /** Arbitrary JSON value stored on this resource, keyed by an id */
  attr?: Maybe<Attribute>;
  /** Shortcut for the attr.value, returns null if the attribute doesn't exist */
  attrValue?: Maybe<Scalars['JSON']>;
  /** Query multiple attributes by id and optionally locale */
  attrs: Array<Maybe<Attribute>>;
  /** Return all attributes on the resource */
  allAttrs: AttributeConnection;
  /** Query multiple attributes with the same id and optionally locale */
  attrsById: AttributeConnection;
  /** The required attribution required when using this place information */
  attribution: Array<PlaceAttribution>;
  /** Contact information supplied for this place */
  contact: PlaceContact;
  /** Layers associated to this place */
  layers: Array<PlaceLayer>;
  /** Media supplied with the place information, such as images of the places */
  media: Array<Media>;
  /** A single Media object representing the preferred media to use */
  preferredMedia?: Maybe<Media>;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
  /** A url displaying how to navigate to this place */
  navigationUrl: Scalars['String'];
  /** Calculate distance and bearing information from the specified positions to this place */
  towards: Array<PlaceTowards>;
};


/** A defined location in the world */
export type PlaceAttrArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** A defined location in the world */
export type PlaceAttrValueArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** A defined location in the world */
export type PlaceAttrsArgs = {
  attrs: Array<AttributeIdentifierInput>;
};


/** A defined location in the world */
export type PlaceAllAttrsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
};


/** A defined location in the world */
export type PlaceAttrsByIdArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  locale?: Maybe<Scalars['String']>;
};


/** A defined location in the world */
export type PlaceMediaArgs = {
  limit?: Scalars['Int'];
};


/** A defined location in the world */
export type PlaceNavigationUrlArgs = {
  provider: PlaceNavigationUrlProvider;
};


/** A defined location in the world */
export type PlaceTowardsArgs = {
  positions: Array<PositionInput>;
};

/** The address data of a place */
export type PlaceAddress = {
  __typename?: 'PlaceAddress';
  /** [DEBUG ONLY] The internal data as raw JSON */
  _raw_: Scalars['JSON'];
  addressLineOne?: Maybe<Scalars['String']>;
  addressLineThree?: Maybe<Scalars['String']>;
  addressLineTwo?: Maybe<Scalars['String']>;
  administrativeGroup?: Maybe<Scalars['String']>;
  area?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  crossStreet?: Maybe<Scalars['String']>;
  locality?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  regionCode?: Maybe<Scalars['String']>;
};

/** Describes the attribution requirements associated with the place. */
export type PlaceAttribution = {
  __typename?: 'PlaceAttribution';
  /** [DEBUG ONLY] The internal data as raw JSON */
  _raw_: Scalars['JSON'];
  /** Text Attribution required for this place */
  text?: Maybe<Scalars['String']>;
  /** A link required for this place */
  link?: Maybe<Scalars['String']>;
  /** Specific licensing information for this place if known */
  license?: Maybe<Scalars['String']>;
  /** The required tracking pixel */
  pixel?: Maybe<Scalars['String']>;
  /** Any media to be used in attribution, such as watermarks */
  media?: Maybe<Media>;
};

export type PlaceContact = {
  __typename?: 'PlaceContact';
  /** [DEBUG ONLY] The internal data as raw JSON */
  _raw_: Scalars['JSON'];
  /** Contact website for this place */
  websiteUrl?: Maybe<Scalars['String']>;
  /** Phone number for this place */
  phoneNumber?: Maybe<Scalars['String']>;
  /** Email address for this place */
  emailAddress?: Maybe<Scalars['String']>;
  /** Bookings url for this place */
  bookingsUrl?: Maybe<Scalars['String']>;
  /** Facebook page for this place */
  facebookUrl?: Maybe<Scalars['String']>;
  /** Twitter for this place */
  twitterUrl?: Maybe<Scalars['String']>;
  /** Instagram for this place */
  instagramUrl?: Maybe<Scalars['String']>;
};

/** The opening hours for a place */
export type PlaceHours = {
  __typename?: 'PlaceHours';
  /**
   * The opening hours formatted in the OpenStreetMap opening_hours tag format.
   *
   * See: <https://wiki.openstreetmap.org/wiki/Key:opening_hours/specification>
   */
  osmTag: Scalars['String'];
  /** Whether or not the hours are the same each week. */
  weekStable: Scalars['Boolean'];
  /** Look up the open/closed status of the place for the current time or a given datetime. */
  status: PlaceHoursStatus;
  /** Look up the place hours comment (if any) for the current time or a given datetime. */
  comment?: Maybe<Scalars['String']>;
  /** Look up intervals where the opening hours status/comment for the place changes */
  intervals: PlaceHoursIntervalConnection;
  /**
   * Look up the opening hours for a specific day. Days are calculated according to the local time of the place.
   *
   * Will return a maximum of 90 days.
   */
  forDays: Array<PlaceHoursForDay>;
};


/** The opening hours for a place */
export type PlaceHoursStatusArgs = {
  datetime?: Maybe<Scalars['String']>;
};


/** The opening hours for a place */
export type PlaceHoursCommentArgs = {
  datetime?: Maybe<Scalars['String']>;
};


/** The opening hours for a place */
export type PlaceHoursIntervalsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  offset?: Maybe<DatetimeOffset>;
  status?: Maybe<PlaceHoursStatus>;
};


/** The opening hours for a place */
export type PlaceHoursForDaysArgs = {
  days?: Maybe<Array<Scalars['String']>>;
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  offset?: Maybe<DatetimeOffset>;
};

/** The opening hour for a place on a specific day */
export type PlaceHoursForDay = {
  __typename?: 'PlaceHoursForDay';
  /**
   * The date of the day.
   * A full ISO 8061 formatted datetime corresponding to 12:00 am local time.
   */
  date: Scalars['String'];
  /** The opening hour intervals for this day. */
  intervals: Array<PlaceHoursInterval>;
  /** The name of any public holidays on this day. */
  publicHolidays: Array<Scalars['String']>;
};


/** The opening hour for a place on a specific day */
export type PlaceHoursForDayDateArgs = {
  format?: Maybe<Scalars['String']>;
  relativeTo?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** The opening hour for a place on a specific day */
export type PlaceHoursForDayIntervalsArgs = {
  status?: Maybe<PlaceHoursStatus>;
};

/** The opening hours for a place during the interval between two datetimes */
export type PlaceHoursInterval = {
  __typename?: 'PlaceHoursInterval';
  /** The starting datetime of this interval */
  from: Scalars['String'];
  /** The ending datetime of this interval, will be null if there is no following interval and the status/comment will no longer change */
  to?: Maybe<Scalars['String']>;
  /** The open/closed status of the place during this interval */
  status: PlaceHoursStatus;
  /** The place hours comment (if any) during this interval */
  comment?: Maybe<Scalars['String']>;
  /**
   * The holidays that occur during this interval
   *
   * Note: Will return holidays up to a maximum of one year from the "from" date
   */
  publicHolidays: Array<PlaceHoursIntervalHoliday>;
};


/** The opening hours for a place during the interval between two datetimes */
export type PlaceHoursIntervalFromArgs = {
  format?: Maybe<Scalars['String']>;
  relativeTo?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


/** The opening hours for a place during the interval between two datetimes */
export type PlaceHoursIntervalToArgs = {
  format?: Maybe<Scalars['String']>;
  relativeTo?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PlaceHoursIntervalConnection = {
  __typename?: 'PlaceHoursIntervalConnection';
  /** All the edges in this page of the connection */
  edges: Array<PlaceHoursIntervalEdge>;
  /** Shortcut for edges[].node */
  nodes: Array<PlaceHoursInterval>;
  /** Details regarding the current page of the connnection */
  pageInfo: PageInfo;
};

export type PlaceHoursIntervalEdge = {
  __typename?: 'PlaceHoursIntervalEdge';
  /** The cursor string pointing to this item */
  cursor: Scalars['String'];
  /** The item */
  node: PlaceHoursInterval;
};

/** A holiday that occurs during an interval */
export type PlaceHoursIntervalHoliday = {
  __typename?: 'PlaceHoursIntervalHoliday';
  /**
   * The date of the holiday.
   * A full ISO 8061 formatted datetime corresponding to 12:00 am local time.
   */
  date: Scalars['String'];
  /** The name of the holiday. */
  name: Scalars['String'];
};


/** A holiday that occurs during an interval */
export type PlaceHoursIntervalHolidayDateArgs = {
  format?: Maybe<Scalars['String']>;
  relativeTo?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export enum PlaceHoursStatus {
  Open = 'Open',
  Closed = 'Closed',
  Unknown = 'Unknown'
}

export type PlaceInput = {
  /** Unique place identifier */
  id?: Maybe<Scalars['ID']>;
  /** The position of the place */
  position: PositionInput;
};

export type PlaceLayer = {
  __typename?: 'PlaceLayer';
  /** [DEBUG ONLY] The internal data as raw JSON */
  _raw_: Scalars['JSON'];
  /** Unique identifier for this place layer */
  id: Scalars['ID'];
  /** Name for this place layer */
  name?: Maybe<Scalars['String']>;
};

/** Navigation service provider */
export enum PlaceNavigationUrlProvider {
  Google = 'Google',
  Apple = 'Apple'
}

export type PlaceSearchConnection = {
  __typename?: 'PlaceSearchConnection';
  /** All the edges in this page of the connection */
  edges: Array<PlaceSearchEdge>;
  /** Shortcut for edges[].node */
  nodes: Array<Place>;
  /** Details regarding the current page of the connnection */
  pageInfo: PageInfo;
};

export type PlaceSearchEdge = {
  __typename?: 'PlaceSearchEdge';
  /** The cursor string pointing to this item */
  cursor: Scalars['String'];
  /** The item */
  node: Place;
  /** The one line text search result */
  single: SearchResult;
  /** The main line of the two line search result */
  main: SearchResult;
  /** The secondary line of the two line search result */
  secondary: SearchResult;
};

export enum PlaceSearchSource {
  OpenStreetMap = 'OpenStreetMap',
  Facebook = 'Facebook',
  OpenAddresses = 'OpenAddresses',
  Geonames = 'Geonames',
  Yelp = 'Yelp',
  AustralianTourismDataWarehouse = 'AustralianTourismDataWarehouse',
  Zomato = 'Zomato',
  TripAdvisor = 'TripAdvisor',
  WhosOnFirst = 'WhosOnFirst'
}

/** Place bearing and distance information towards point */
export type PlaceTowards = {
  __typename?: 'PlaceTowards';
  /** The point */
  position: Position;
  /** The bearing angle from the place to the point */
  bearing?: Maybe<Scalars['Float']>;
  /** The distance from the place to the point */
  distance?: Maybe<Scalars['Float']>;
  /** Compass point towards given point */
  compass: CompassPoint;
};


/** Place bearing and distance information towards point */
export type PlaceTowardsBearingArgs = {
  unit?: AngleUnit;
};


/** Place bearing and distance information towards point */
export type PlaceTowardsDistanceArgs = {
  unit?: DistanceUnit;
};

/** A position on a map with a longitude and latitude */
export type Position = {
  __typename?: 'Position';
  /** The position in the form: [longitude, latitude] */
  lonLat: Array<Scalars['Float']>;
  /** The position in the form: [latitude, longitude] */
  latLon: Array<Scalars['Float']>;
  /** The position's latitude */
  lat: Scalars['Float'];
  /** The position's longitude */
  lon: Scalars['Float'];
};

/** A position on a map with a longitude and latitude */
export type PositionInput = {
  /** The longitude */
  lon: Scalars['Float'];
  /** The latitude */
  lat: Scalars['Float'];
};

/** Profile */
export type Profile = Node & {
  __typename?: 'Profile';
  /** [DEBUG ONLY] The internal data as raw JSON */
  _raw_: Scalars['JSON'];
  /** The Globally Unique ID of the object. */
  id: Scalars['ID'];
  /** The name of the profile */
  name: Scalars['String'];
  /** The type of the profile */
  type: ProfileType;
  /** Indicates if follows on this profile are automatically approved */
  autoApproveFollows: Scalars['Boolean'];
  /** The (optional) unique handle of the profile */
  handle?: Maybe<Scalars['String']>;
  /** A short biography */
  bio?: Maybe<Scalars['String']>;
  /** The Website URL */
  websiteUrl?: Maybe<Scalars['String']>;
  /** Profiles that follow this profile */
  followers: ProfileFollowConnection;
  /** Profiles that this profile follows */
  following: ProfileFollowConnection;
};


/** Profile */
export type ProfileFollowersArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  status?: Maybe<ProfileFollowStatus>;
  handle?: Maybe<Scalars['String']>;
};


/** Profile */
export type ProfileFollowingArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  status?: Maybe<ProfileFollowStatus>;
  handle?: Maybe<Scalars['String']>;
};

export type ProfileConnection = {
  __typename?: 'ProfileConnection';
  /** All the edges in this page of the connection */
  edges: Array<ProfileEdge>;
  /** Shortcut for edges[].node */
  nodes: Array<Profile>;
  /** Details regarding the current page of the connnection */
  pageInfo: PageInfo;
  /** The total number of items in the connection (in all pages) */
  totalCount: Scalars['Int'];
};

export type ProfileEdge = {
  __typename?: 'ProfileEdge';
  /** The cursor string pointing to this item */
  cursor: Scalars['String'];
  /** The item */
  node: Profile;
};

export type ProfileFollowConnection = {
  __typename?: 'ProfileFollowConnection';
  /** All the edges in this page of the connection */
  edges: Array<ProfileFollowEdge>;
  /** Shortcut for edges[].node */
  nodes: Array<Profile>;
  /** Details regarding the current page of the connnection */
  pageInfo: PageInfo;
  /** The total number of items in the connection (in all pages) */
  totalCount: Scalars['Int'];
};

export type ProfileFollowEdge = {
  __typename?: 'ProfileFollowEdge';
  /** The cursor string pointing to this item */
  cursor: Scalars['String'];
  /** The item */
  node: Profile;
  /** The status of the follow request */
  status: ProfileFollowStatus;
};

/** Profile follow status */
export enum ProfileFollowStatus {
  Pending = 'Pending',
  Approved = 'Approved',
  Denied = 'Denied'
}

/** Profile type */
export enum ProfileType {
  Individual = 'Individual',
  Organization = 'Organization'
}

/** Response to Mutation.publishItinerary */
export type PublishItineraryPayload = {
  __typename?: 'PublishItineraryPayload';
  /** The published itinerary */
  itinerary?: Maybe<Itinerary>;
};

export type Query = {
  __typename?: 'Query';
  /** Get a resource that implements Node by id */
  node?: Maybe<Node>;
  /** Obtains a profile by a provided id */
  profile?: Maybe<Profile>;
  /** Look up all authorised profiles */
  authorizedProfiles: ProfileConnection;
  /** Search profiles */
  profiles: ProfileConnection;
  /** Retrieve a MediaResource by id */
  mediaResource?: Maybe<MediaResource>;
  /** Look up routes for traveling along the given positions */
  routes: RouteConnection;
  /** Get a place by id */
  place?: Maybe<Place>;
  /** Search for places */
  placeSearch: PlaceSearchConnection;
  /** Autocomplete for place search */
  placeAutocompleteSearch: PlaceSearchConnection;
  /** Search for places based on address details */
  placeAddressSearch: PlaceSearchConnection;
  /** Search for places by location */
  placeReverseSearch: PlaceSearchConnection;
  /** Retrieve a collection by id */
  collection?: Maybe<Collection>;
  /** Retrieve multiple collections */
  collections: CollectionConnection;
  /** Retrieve a collection item by id */
  collectionItem?: Maybe<CollectionItem>;
  /** Retrieve multiple collection items filtered by different criteria */
  collectionItems: CollectionItemConnection;
  /** Get an itinerary by id */
  itinerary?: Maybe<Itinerary>;
  /** Query itineraries that belong to a profile */
  itineraries: ItineraryConnection;
  /** Query for fetching isochrone */
  isochrone: Array<Isochrone>;
  /** Obtains a connected app by a provided id */
  connectedApp?: Maybe<ConnectedApp>;
  /** Search connected apps */
  connectedApps: ConnectedAppConnection;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


export type QueryProfileArgs = {
  id: Scalars['ID'];
};


export type QueryAuthorizedProfilesArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
};


export type QueryProfilesArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  handle: Scalars['String'];
};


export type QueryMediaResourceArgs = {
  id: Scalars['ID'];
};


export type QueryRoutesArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  positions: Array<PositionInput>;
  mode?: RouteSearchableMode;
};


export type QueryPlaceArgs = {
  id: Scalars['ID'];
};


export type QueryPlaceSearchArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  focus?: Maybe<PositionInput>;
  bounds?: Maybe<BoundsInput>;
  sources?: Maybe<Array<PlaceSearchSource>>;
  layers?: Maybe<Array<Scalars['String']>>;
  thirdPartyQuery?: Maybe<Scalars['JSON']>;
  maxLabelLength?: Maybe<Scalars['Int']>;
};


export type QueryPlaceAutocompleteSearchArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  focus?: Maybe<PositionInput>;
  bounds?: Maybe<BoundsInput>;
  sources?: Maybe<Array<PlaceSearchSource>>;
  layers?: Maybe<Array<Scalars['String']>>;
  thirdPartyQuery?: Maybe<Scalars['JSON']>;
  maxLabelLength?: Maybe<Scalars['Int']>;
};


export type QueryPlaceAddressSearchArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  borough?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  county?: Maybe<Scalars['String']>;
  locality?: Maybe<Scalars['String']>;
  neighbourhood?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  sources?: Maybe<Array<PlaceSearchSource>>;
  layers?: Maybe<Array<Scalars['String']>>;
  thirdPartyQuery?: Maybe<Scalars['JSON']>;
  maxLabelLength?: Maybe<Scalars['Int']>;
};


export type QueryPlaceReverseSearchArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  focus: PositionInput;
  sources?: Maybe<Array<PlaceSearchSource>>;
  layers?: Maybe<Array<Scalars['String']>>;
  thirdPartyQuery?: Maybe<Scalars['JSON']>;
  maxLabelLength?: Maybe<Scalars['Int']>;
};


export type QueryCollectionArgs = {
  id: Scalars['ID'];
};


export type QueryCollectionsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  profileId: Scalars['ID'];
  discriminator?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<CollectionsSort>>;
};


export type QueryCollectionItemArgs = {
  id: Scalars['ID'];
};


export type QueryCollectionItemsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  profileId?: Maybe<Scalars['ID']>;
  collectionIds?: Maybe<Array<Scalars['ID']>>;
  keyword?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  sectionIds?: Maybe<Array<Scalars['ID']>>;
  resourceIds?: Maybe<Array<Scalars['ID']>>;
  boundsCircle?: Maybe<BoundsCircleInput>;
  bounds?: Maybe<BoundsInput>;
  externalIds?: Maybe<Array<Scalars['ID']>>;
  externalSources?: Maybe<Array<Scalars['ID']>>;
  sort?: Maybe<Array<CollectionItemsSort>>;
};


export type QueryItineraryArgs = {
  id: Scalars['ID'];
};


export type QueryItinerariesArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  profileId: Scalars['ID'];
  keyword?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<ItinerariesSort>>;
};


export type QueryIsochroneArgs = {
  center: PositionInput;
  duration: Scalars['Int'];
  mode: IsochroneMode;
};


export type QueryConnectedAppArgs = {
  id: Scalars['ID'];
};


export type QueryConnectedAppsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  profileId?: Maybe<Scalars['ID']>;
  deleted?: Maybe<Scalars['Boolean']>;
  expired?: Maybe<Scalars['Boolean']>;
  type?: Maybe<ConnectedAppTypes>;
  authType?: Maybe<ConnectedAppAuthTypes>;
  serviceKey?: Maybe<ConnectedAppServiceKeys>;
};

/** The representation of a route path taken */
export type Route = {
  __typename?: 'Route';
  /** The segments of this route */
  segments: Array<RouteSegment>;
};

export type RouteConnection = {
  __typename?: 'RouteConnection';
  /** All the edges in this page of the connection */
  edges: Array<RouteEdge>;
  /** Shortcut for edges[].node */
  nodes: Array<Route>;
  /** Details regarding the current page of the connnection */
  pageInfo: PageInfo;
};

export type RouteEdge = {
  __typename?: 'RouteEdge';
  /** The cursor string pointing to this item */
  cursor: Scalars['String'];
  /** The item */
  node: Route;
};

/** The elevation information of a route path taken */
export type RouteElevation = {
  __typename?: 'RouteElevation';
  /** The estimated total elevation gain of this path */
  gain?: Maybe<Scalars['Float']>;
  /** The estimated total elevation loss of this path */
  loss?: Maybe<Scalars['Float']>;
  /** The estimated minimum elevation of this path */
  min?: Maybe<Scalars['Float']>;
  /** The estimated maximum elevation of this path */
  max?: Maybe<Scalars['Float']>;
};


/** The elevation information of a route path taken */
export type RouteElevationGainArgs = {
  unit?: DistanceUnit;
};


/** The elevation information of a route path taken */
export type RouteElevationLossArgs = {
  unit?: DistanceUnit;
};


/** The elevation information of a route path taken */
export type RouteElevationMinArgs = {
  unit?: DistanceUnit;
};


/** The elevation information of a route path taken */
export type RouteElevationMaxArgs = {
  unit?: DistanceUnit;
};

export type RouteInput = {
  /** The segments of this route */
  segments: Array<RouteSegmentInput>;
};

/** Modes of transport */
export enum RouteMode {
  Bike = 'Bike',
  Boat = 'Boat',
  Bus = 'Bus',
  Car = 'Car',
  Cruise = 'Cruise',
  DogSled = 'DogSled',
  Foot = 'Foot',
  Hike = 'Hike',
  Kayak = 'Kayak',
  Motorcycle = 'Motorcycle',
  MountainBike = 'MountainBike',
  Plane = 'Plane',
  Train = 'Train',
  Transit = 'Transit'
}

/** Subset of RouteModes supporting route search */
export enum RouteSearchableMode {
  Bike = 'Bike',
  Bus = 'Bus',
  Car = 'Car',
  Foot = 'Foot',
  Hike = 'Hike',
  Motorcycle = 'Motorcycle',
  MountainBike = 'MountainBike',
  Transit = 'Transit'
}

export type RouteSegment = {
  __typename?: 'RouteSegment';
  /** [DEBUG ONLY] The internal data as raw JSON */
  _raw_: Scalars['JSON'];
  /** WARNING: this ID is unstable, modifying the route might change the ID */
  id: Scalars['ID'];
  /** The mode of transport to be taken. eg: car, walk, kayak, etc */
  mode: RouteMode;
  /** The way positions along this route */
  positions?: Maybe<Array<Position>>;
  /** Whether this route was searched for */
  useRouteSearching: Scalars['Boolean'];
  /** The representation of this path as encoded as geojson FeatureCollection type */
  geoJson?: Maybe<Scalars['JSON']>;
  /** The estimated duration for this path */
  duration?: Maybe<Scalars['Float']>;
  /** The estimated distance for this path */
  distance?: Maybe<Scalars['Float']>;
  /** The elevation details of this route */
  elevation?: Maybe<RouteElevation>;
  /** The path representation as encoded as a polyline format */
  polyline?: Maybe<Scalars['String']>;
};


export type RouteSegmentGeoJsonArgs = {
  simplify?: Maybe<GeoJsonSimplification>;
};


export type RouteSegmentDurationArgs = {
  unit?: DurationUnit;
};


export type RouteSegmentDistanceArgs = {
  unit?: DistanceUnit;
};


export type RouteSegmentPolylineArgs = {
  simplify?: Maybe<GeoJsonSimplification>;
};

export type RouteSegmentInput = {
  /** The mode of transport to be taken on this segment, defaults to Car */
  mode?: Maybe<RouteMode>;
  /** The way positions along this route */
  positions?: Maybe<Array<PositionInput>>;
  /** Whether to plan out a route using the positions. Defaults to true if the mode is searchable and otherwise will be set to false */
  useRouteSearching?: Maybe<Scalars['Boolean']>;
  /** The distance for this route segment */
  distance?: Maybe<Scalars['Float']>;
  /** The duration for this route segment */
  duration?: Maybe<Scalars['Float']>;
};

/** A text search result with a label and matches to highlight */
export type SearchResult = {
  __typename?: 'SearchResult';
  /** Search result label */
  label: Scalars['String'];
  /** Text substring matches in the label text */
  matches: Array<SearchResultMatch>;
};

export type SearchResultMatch = {
  __typename?: 'SearchResultMatch';
  /** Start of the match */
  offset: Scalars['Int'];
  /** Length of the match */
  length: Scalars['Int'];
};

export enum SortDirection {
  /** Sort in ascending order */
  Asc = 'Asc',
  /** Sort in descending order */
  Desc = 'Desc'
}

export type StartMediaUploadPayload = {
  __typename?: 'StartMediaUploadPayload';
  /** The upload token, required when finalising the upload */
  token: Scalars['String'];
  /** The url to upload media to (via HTTP POST) */
  url: Scalars['String'];
  /** Data to pass with the upload */
  fields: Scalars['JSON'];
};

export type UnfollowProfilePayload = {
  __typename?: 'UnfollowProfilePayload';
  /** The follower profile */
  fromProfile: Profile;
  /** The profile being followed */
  toProfile: Profile;
  /** The status of the follow request */
  status?: Maybe<ProfileFollowStatus>;
};

/** Updates a collection */
export type UpdateCollectionInput = {
  /** The title for the collection */
  title?: Maybe<Scalars['String']>;
  /** The synopsis for the collection */
  synopsis?: Maybe<Scalars['String']>;
  /** The description for the collection */
  description?: Maybe<Scalars['String']>;
  /** The tags for the collection */
  tags?: Maybe<Array<Scalars['String']>>;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
  /** Insert or update attributes to the collection */
  upsertAttrs?: Maybe<Array<AttributeInput>>;
  /** Delete attributes to the collection */
  deleteAttrs?: Maybe<Array<AttributeIdentifierInput>>;
};

/** The fields for the collection location to update */
export type UpdateCollectionLocationInput = {
  /** Title for this item */
  title?: Maybe<Scalars['String']>;
  /** A longer description content for this item */
  synopsis?: Maybe<Scalars['String']>;
  /** A longer description content for this item */
  description?: Maybe<Scalars['String']>;
  /** A collection of strings used to label this item */
  tags?: Maybe<Array<Scalars['String']>>;
  /** Shortcut for setting the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** Shortcut for setting the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
  /** One or more sections for this item */
  sectionIds?: Maybe<Array<Scalars['ID']>>;
  /** Identifier from an external source this item is associated with */
  externalId?: Maybe<Scalars['ID']>;
  /** The source of this item's externalId */
  externalSource?: Maybe<Scalars['ID']>;
  /** The associated place information for this item */
  place?: Maybe<PlaceInput>;
  /** Insert or update attributes to the collection */
  upsertAttrs?: Maybe<Array<AttributeInput>>;
  /** Delete attributes to the collection */
  deleteAttrs?: Maybe<Array<AttributeIdentifierInput>>;
};

/** The fields available after the collection location has been updated */
export type UpdateCollectionLocationPayload = {
  __typename?: 'UpdateCollectionLocationPayload';
  /** The collection location that was updated */
  location?: Maybe<CollectionLocation>;
};

/** The available fields after updating a collection */
export type UpdateCollectionPayload = {
  __typename?: 'UpdateCollectionPayload';
  /** The updated collection */
  collection?: Maybe<Collection>;
};

/** Updates a connected app */
export type UpdateConnectedAppInput = {
  /** The type of the connected-app */
  authType?: Maybe<ConnectedAppAuthTypes>;
  /** Any specific scope that has been granted to the 3rd party application */
  scope?: Maybe<Scalars['String']>;
  /** 3rd party ID or account ID */
  thirdPartyId?: Maybe<Scalars['ID']>;
  /** Encrypted JSON */
  configuration?: Maybe<Scalars['String']>;
};

/** The available fields after updating a connected app */
export type UpdateConnectedAppPayload = {
  __typename?: 'UpdateConnectedAppPayload';
  /** The updated connected app */
  connectedApp?: Maybe<ConnectedApp>;
};

/** The intinerary collection fields to update */
export type UpdateItineraryCollectionInput = {
  /** The title for the itinerary-collection */
  title?: Maybe<Scalars['String']>;
  /** The synopsis for the itinerary-collection */
  synopsis?: Maybe<Scalars['String']>;
  /** The description for the itinerary-collection */
  description?: Maybe<Scalars['String']>;
  /** The tags for the itinerary-collection */
  tags?: Maybe<Array<Scalars['String']>>;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
  /** Insert or update attributes to the itinerary-collection */
  upsertAttrs?: Maybe<Array<AttributeInput>>;
  /** Delete attributes to the itinerary-collection */
  deleteAttrs?: Maybe<Array<AttributeIdentifierInput>>;
};

/** The fields available after updating the itinerary collection */
export type UpdateItineraryCollectionPayload = {
  __typename?: 'UpdateItineraryCollectionPayload';
  /** The itinerary collection that was created */
  collection?: Maybe<ItineraryCollection>;
  /** The modified itinerary */
  itinerary: Itinerary;
  /** Other changes to the itinerary that caused by deleting the itinerary-item */
  cascaded: ItineraryItemCascadedChanges;
};

/** The input fields to update the itinerary directions */
export type UpdateItineraryDirectionsInput = {
  /** The title for the itinerary directions */
  title?: Maybe<Scalars['String']>;
  /** The synopsis for the itinerary-directions */
  synopsis?: Maybe<Scalars['String']>;
  /** The description for the itinerary-directions */
  description?: Maybe<Scalars['String']>;
  /** The tags for the itinerary-directions */
  tags?: Maybe<Array<Scalars['String']>>;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
  /** Insert or update attributes to the collection */
  upsertAttrs?: Maybe<Array<AttributeInput>>;
  /** Delete attributes to the collection */
  deleteAttrs?: Maybe<Array<AttributeIdentifierInput>>;
  /** The origin/starting itinerary location item, in the form of item/XYZ */
  originId?: Maybe<Scalars['ID']>;
  /** The route of this item, must include at least one route segment */
  route?: Maybe<RouteInput>;
  /** The distance of the itinerary-directions */
  distance?: Maybe<Scalars['Float']>;
  /** The duration details of the new itinerary-directions */
  durations?: Maybe<Array<ItineraryDirectionsDurationsInput>>;
  /** The elevation details of the new itinerary-directions */
  elevation?: Maybe<ElevationInput>;
};

/** The fields available after updating the itinerary directions item */
export type UpdateItineraryDirectionsPayload = {
  __typename?: 'UpdateItineraryDirectionsPayload';
  /** The updated itinerary directions item */
  directions?: Maybe<ItineraryDirections>;
  /** The modified itinerary */
  itinerary: Itinerary;
  /** Other changes to the itinerary that caused by deleting the itinerary-item */
  cascaded: ItineraryItemCascadedChanges;
};

/** Updates a itinerary */
export type UpdateItineraryInput = {
  /** The title for the itinerary */
  title?: Maybe<Scalars['String']>;
  /** The synopsis for the itinerary */
  synopsis?: Maybe<Scalars['String']>;
  /** The description for the itinerary */
  description?: Maybe<Scalars['String']>;
  /** The tags for the itinerary */
  tags?: Maybe<Array<Scalars['String']>>;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
  /** Insert or update attributes to the collection */
  upsertAttrs?: Maybe<Array<AttributeInput>>;
  /** Delete attributes to the collection */
  deleteAttrs?: Maybe<Array<AttributeIdentifierInput>>;
  /** Enable auto routing, or set to null to disable */
  autoRoute?: Maybe<ItineraryAutoRouteInput>;
  /** Elevation data of the new itinerary */
  elevation?: Maybe<ElevationInput>;
};

/** The fields to update on an itinerary location */
export type UpdateItineraryLocationInput = {
  /** The title for the itinerary-location */
  title?: Maybe<Scalars['String']>;
  /** The synopsis for the itinerary-location */
  synopsis?: Maybe<Scalars['String']>;
  /** The description for the itinerary-location */
  description?: Maybe<Scalars['String']>;
  /** The tags for the itinerary-location */
  tags?: Maybe<Array<Scalars['String']>>;
  /** Alias for the read-more attribute */
  readMoreUrl?: Maybe<Scalars['String']>;
  /** Alias for the website-url attribute */
  websiteUrl?: Maybe<Scalars['String']>;
  /** Insert or update attributes to the itinerary-collection */
  upsertAttrs?: Maybe<Array<AttributeInput>>;
  /** Delete attributes to the itinerary-collection */
  deleteAttrs?: Maybe<Array<AttributeIdentifierInput>>;
  /** The place for this itinerary-location */
  position?: Maybe<PositionInput>;
  /** The place for this itinerary-location */
  place?: Maybe<PlaceInput>;
  /** Whether the location specified is optional on the itinerary */
  optional?: Maybe<Scalars['Boolean']>;
};

/** The fields available after updating a location */
export type UpdateItineraryLocationPayload = {
  __typename?: 'UpdateItineraryLocationPayload';
  /** The updated itinerary location */
  location?: Maybe<ItineraryLocation>;
  /** The modified itinerary */
  itinerary: Itinerary;
  /** Other changes to the itinerary that caused by deleting the itinerary-item */
  cascaded: ItineraryItemCascadedChanges;
};

/** The available fields after updating a itinerary */
export type UpdateItineraryPayload = {
  __typename?: 'UpdateItineraryPayload';
  /** The updated itinerary */
  itinerary?: Maybe<Itinerary>;
  /** Other changes to the itinerary that caused by updating the itinerary */
  cascaded: ItineraryItemCascadedChanges;
};

/** Updates a media resource */
export type UpdateMediaResourceInput = {
  /** List of labels to apply to the media-resource */
  tags?: Maybe<Array<Scalars['String']>>;
  /** Text attribution for the source of the media-resource */
  attribution?: Maybe<Scalars['String']>;
  /** Text caption for the media-resource */
  caption?: Maybe<Scalars['String']>;
  /** Copyright details of the media-resource */
  copyright?: Maybe<Scalars['String']>;
  /** Insert or update attributes to the media-resource */
  upsertAttrs?: Maybe<Array<AttributeInput>>;
  /** Delete attributes to the media-resource */
  deleteAttrs?: Maybe<Array<AttributeIdentifierInput>>;
};

/** Response payload to Mutation.updateMediaResource */
export type UpdateMediaResourcePayload = {
  __typename?: 'UpdateMediaResourcePayload';
  /** The updated media-resource */
  mediaResource: MediaResource;
};

/** Input object to Mutation.updateProfile */
export type UpdateProfileInput = {
  /** The name of the profile */
  name?: Maybe<Scalars['String']>;
  /** A short biography */
  bio?: Maybe<Scalars['String']>;
  /** The website url */
  websiteUrl?: Maybe<Scalars['String']>;
  /** If follow requests should be automatically approved for this profile */
  autoApproveFollows?: Maybe<Scalars['Boolean']>;
};

/** Response payload to Mutation.updateProfile */
export type UpdateProfilePayload = {
  __typename?: 'UpdateProfilePayload';
  /** The updated profile */
  profile?: Maybe<Profile>;
};

export type PlaceOpeningHoursQueryVariables = Exact<{
  id: Scalars['ID'];
  from?: Maybe<Scalars['String']>;
}>;


export type PlaceOpeningHoursQuery = (
  { __typename?: 'Query' }
  & { place?: Maybe<(
    { __typename: 'Place' }
    & Pick<Place, 'id'>
    & { hours?: Maybe<(
      { __typename?: 'PlaceHours' }
      & { forDays: Array<(
        { __typename?: 'PlaceHoursForDay' }
        & Pick<PlaceHoursForDay, 'date' | 'publicHolidays'>
        & { intervals: Array<(
          { __typename?: 'PlaceHoursInterval' }
          & Pick<PlaceHoursInterval, 'from' | 'to' | 'status' | 'comment'>
        )> }
      )>, intervals: (
        { __typename?: 'PlaceHoursIntervalConnection' }
        & { nodes: Array<(
          { __typename?: 'PlaceHoursInterval' }
          & Pick<PlaceHoursInterval, 'from' | 'to' | 'status' | 'comment'>
          & { fromToday: PlaceHoursInterval['from'], fromNextDay: PlaceHoursInterval['from'], toTime: PlaceHoursInterval['to'], relative: PlaceHoursInterval['from'] }
          & { publicHolidays: Array<(
            { __typename?: 'PlaceHoursIntervalHoliday' }
            & Pick<PlaceHoursIntervalHoliday, 'name'>
          )> }
        )> }
      ) }
    )> }
  )> }
);


      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "CollectionItem": [
      "CollectionLocation"
    ],
    "ItineraryItem": [
      "ItineraryCollection",
      "ItineraryDirections",
      "ItineraryLocation"
    ],
    "MediaResource": [
      "MediaImage"
    ],
    "Node": [
      "Collection",
      "CollectionLocation",
      "ConnectedApp",
      "Itinerary",
      "ItineraryCollection",
      "ItineraryDirections",
      "ItineraryLocation",
      "Place",
      "Profile"
    ]
  }
};
      export default result;
    

export const PlaceOpeningHoursDocument = gql`
    query PlaceOpeningHours($id: ID!, $from: String) {
  place(id: $id) {
    id
    __typename
    hours {
      forDays(from: $from) {
        date(format: "EEE, MMM d")
        intervals(status: Open) {
          from(format: "h:mm a")
          to(format: "h:mm a")
          status
          comment
        }
        publicHolidays
      }
      intervals(first: 2, from: $from) {
        nodes {
          from
          to
          fromToday: from(format: "h:mm a")
          fromNextDay: from(format: "EEE, MMM d, h:mm a")
          toTime: to(format: "h:mm a")
          relative: from(relativeTo: $from)
          status
          comment
          publicHolidays {
            name
          }
        }
      }
    }
  }
}
    `;

/**
 * __usePlaceOpeningHoursQuery__
 *
 * To run a query within a React component, call `usePlaceOpeningHoursQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlaceOpeningHoursQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlaceOpeningHoursQuery({
 *   variables: {
 *      id: // value for 'id'
 *      from: // value for 'from'
 *   },
 * });
 */
export function usePlaceOpeningHoursQuery(baseOptions: Apollo.QueryHookOptions<PlaceOpeningHoursQuery, PlaceOpeningHoursQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PlaceOpeningHoursQuery, PlaceOpeningHoursQueryVariables>(PlaceOpeningHoursDocument, options);
      }
export function usePlaceOpeningHoursLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlaceOpeningHoursQuery, PlaceOpeningHoursQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PlaceOpeningHoursQuery, PlaceOpeningHoursQueryVariables>(PlaceOpeningHoursDocument, options);
        }
export type PlaceOpeningHoursQueryHookResult = ReturnType<typeof usePlaceOpeningHoursQuery>;
export type PlaceOpeningHoursLazyQueryHookResult = ReturnType<typeof usePlaceOpeningHoursLazyQuery>;
export type PlaceOpeningHoursQueryResult = Apollo.QueryResult<PlaceOpeningHoursQuery, PlaceOpeningHoursQueryVariables>;