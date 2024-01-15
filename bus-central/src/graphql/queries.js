/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBus = /* GraphQL */ `
  query GetBus($id: ID!) {
    getBus(id: $id) {
      id
      bus
      isHere
      schoolID
      spot
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listBuses = /* GraphQL */ `
  query ListBuses(
    $filter: ModelBusFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBuses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        bus
        isHere
        schoolID
        spot
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBuses = /* GraphQL */ `
  query SyncBuses(
    $filter: ModelBusFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBuses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        bus
        isHere
        schoolID
        spot
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const busesBySchoolID = /* GraphQL */ `
  query BusesBySchoolID(
    $schoolID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBusFilterInput
    $limit: Int
    $nextToken: String
  ) {
    busesBySchoolID(
      schoolID: $schoolID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        bus
        isHere
        schoolID
        spot
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getSchool = /* GraphQL */ `
  query GetSchool($id: ID!) {
    getSchool(id: $id) {
      id
      name
      image
      primaryColor
      secondaryColor
      Buses {
        nextToken
        startedAt
      }
      password
      busImage
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listSchools = /* GraphQL */ `
  query ListSchools(
    $filter: ModelSchoolFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSchools(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        primaryColor
        secondaryColor
        password
        busImage
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSchools = /* GraphQL */ `
  query SyncSchools(
    $filter: ModelSchoolFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSchools(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        image
        primaryColor
        secondaryColor
        password
        busImage
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
