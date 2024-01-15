/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBus = /* GraphQL */ `
  subscription OnCreateBus($filter: ModelSubscriptionBusFilterInput) {
    onCreateBus(filter: $filter) {
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
export const onUpdateBus = /* GraphQL */ `
  subscription OnUpdateBus($filter: ModelSubscriptionBusFilterInput) {
    onUpdateBus(filter: $filter) {
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
export const onDeleteBus = /* GraphQL */ `
  subscription OnDeleteBus($filter: ModelSubscriptionBusFilterInput) {
    onDeleteBus(filter: $filter) {
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
export const onCreateSchool = /* GraphQL */ `
  subscription OnCreateSchool($filter: ModelSubscriptionSchoolFilterInput) {
    onCreateSchool(filter: $filter) {
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
export const onUpdateSchool = /* GraphQL */ `
  subscription OnUpdateSchool($filter: ModelSubscriptionSchoolFilterInput) {
    onUpdateSchool(filter: $filter) {
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
export const onDeleteSchool = /* GraphQL */ `
  subscription OnDeleteSchool($filter: ModelSubscriptionSchoolFilterInput) {
    onDeleteSchool(filter: $filter) {
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
