import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ArrivalMessageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class ArrivalMessage {
  readonly id: string;
  readonly type: string;
  readonly key: string;
  readonly timestamp: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ArrivalMessage, ArrivalMessageMetaData>);
  static copyOf(source: ArrivalMessage, mutator: (draft: MutableModel<ArrivalMessage, ArrivalMessageMetaData>) => MutableModel<ArrivalMessage, ArrivalMessageMetaData> | void): ArrivalMessage;
}