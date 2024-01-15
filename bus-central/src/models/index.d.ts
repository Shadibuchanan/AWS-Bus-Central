import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerBus = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Bus, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly bus?: string | null;
  readonly isHere?: boolean | null;
  readonly schoolID: string;
  readonly spot?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBus = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Bus, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly bus?: string | null;
  readonly isHere?: boolean | null;
  readonly schoolID: string;
  readonly spot?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Bus = LazyLoading extends LazyLoadingDisabled ? EagerBus : LazyBus

export declare const Bus: (new (init: ModelInit<Bus>) => Bus) & {
  copyOf(source: Bus, mutator: (draft: MutableModel<Bus>) => MutableModel<Bus> | void): Bus;
}

type EagerSchool = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<School, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly primaryColor?: string | null;
  readonly secondaryColor?: string | null;
  readonly Buses?: (Bus | null)[] | null;
  readonly password?: string | null;
  readonly busImage?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySchool = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<School, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly primaryColor?: string | null;
  readonly secondaryColor?: string | null;
  readonly Buses: AsyncCollection<Bus>;
  readonly password?: string | null;
  readonly busImage?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type School = LazyLoading extends LazyLoadingDisabled ? EagerSchool : LazySchool

export declare const School: (new (init: ModelInit<School>) => School) & {
  copyOf(source: School, mutator: (draft: MutableModel<School>) => MutableModel<School> | void): School;
}