/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBus = /* GraphQL */ `
  mutation CreateBus(
    $input: CreateBusInput!
    $condition: ModelBusConditionInput
  ) {
    createBus(input: $input, condition: $condition) {
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
export const updateBus = /* GraphQL */ `
  mutation UpdateBus(
    $input: UpdateBusInput!
    $condition: ModelBusConditionInput
  ) {
    updateBus(input: $input, condition: $condition) {
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
export const deleteBus = /* GraphQL */ `
  mutation DeleteBus(
    $input: DeleteBusInput!
    $condition: ModelBusConditionInput
  ) {
    deleteBus(input: $input, condition: $condition) {
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
export const createSchool = /* GraphQL */ `
  mutation CreateSchool(
    $input: CreateSchoolInput!
    $condition: ModelSchoolConditionInput
  ) {
    createSchool(input: $input, condition: $condition) {
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
export const updateSchool = /* GraphQL */ `
  mutation UpdateSchool(
    $input: UpdateSchoolInput!
    $condition: ModelSchoolConditionInput
  ) {
    updateSchool(input: $input, condition: $condition) {
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
export const deleteSchool = /* GraphQL */ `
  mutation DeleteSchool(
    $input: DeleteSchoolInput!
    $condition: ModelSchoolConditionInput
  ) {
    deleteSchool(input: $input, condition: $condition) {
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
