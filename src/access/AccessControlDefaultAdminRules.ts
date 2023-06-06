/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export interface AccessControlDefaultAdminRulesInterface
  extends utils.Interface {
  functions: {
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "acceptDefaultAdminTransfer()": FunctionFragment;
    "beginDefaultAdminTransfer(address)": FunctionFragment;
    "cancelDefaultAdminTransfer()": FunctionFragment;
    "changeDefaultAdminDelay(uint48)": FunctionFragment;
    "defaultAdmin()": FunctionFragment;
    "defaultAdminDelay()": FunctionFragment;
    "defaultAdminDelayIncreaseWait()": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "owner()": FunctionFragment;
    "pendingDefaultAdmin()": FunctionFragment;
    "pendingDefaultAdminDelay()": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "rollbackDefaultAdminDelay()": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "DEFAULT_ADMIN_ROLE"
      | "acceptDefaultAdminTransfer"
      | "beginDefaultAdminTransfer"
      | "cancelDefaultAdminTransfer"
      | "changeDefaultAdminDelay"
      | "defaultAdmin"
      | "defaultAdminDelay"
      | "defaultAdminDelayIncreaseWait"
      | "getRoleAdmin"
      | "grantRole"
      | "hasRole"
      | "owner"
      | "pendingDefaultAdmin"
      | "pendingDefaultAdminDelay"
      | "renounceRole"
      | "revokeRole"
      | "rollbackDefaultAdminDelay"
      | "supportsInterface"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "acceptDefaultAdminTransfer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "beginDefaultAdminTransfer",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelDefaultAdminTransfer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "changeDefaultAdminDelay",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "defaultAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "defaultAdminDelay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "defaultAdminDelayIncreaseWait",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingDefaultAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingDefaultAdminDelay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "rollbackDefaultAdminDelay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "acceptDefaultAdminTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "beginDefaultAdminTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelDefaultAdminTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeDefaultAdminDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "defaultAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "defaultAdminDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "defaultAdminDelayIncreaseWait",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingDefaultAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingDefaultAdminDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rollbackDefaultAdminDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;

  events: {
    "DefaultAdminDelayChangeCanceled()": EventFragment;
    "DefaultAdminDelayChangeScheduled(uint48,uint48)": EventFragment;
    "DefaultAdminTransferCanceled()": EventFragment;
    "DefaultAdminTransferScheduled(address,uint48)": EventFragment;
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
  };

  getEvent(
    nameOrSignatureOrTopic: "DefaultAdminDelayChangeCanceled"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "DefaultAdminDelayChangeScheduled"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "DefaultAdminTransferCanceled"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "DefaultAdminTransferScheduled"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
}

export interface DefaultAdminDelayChangeCanceledEventObject {}
export type DefaultAdminDelayChangeCanceledEvent = TypedEvent<
  [],
  DefaultAdminDelayChangeCanceledEventObject
>;

export type DefaultAdminDelayChangeCanceledEventFilter =
  TypedEventFilter<DefaultAdminDelayChangeCanceledEvent>;

export interface DefaultAdminDelayChangeScheduledEventObject {
  newDelay: number;
  effectSchedule: number;
}
export type DefaultAdminDelayChangeScheduledEvent = TypedEvent<
  [number, number],
  DefaultAdminDelayChangeScheduledEventObject
>;

export type DefaultAdminDelayChangeScheduledEventFilter =
  TypedEventFilter<DefaultAdminDelayChangeScheduledEvent>;

export interface DefaultAdminTransferCanceledEventObject {}
export type DefaultAdminTransferCanceledEvent = TypedEvent<
  [],
  DefaultAdminTransferCanceledEventObject
>;

export type DefaultAdminTransferCanceledEventFilter =
  TypedEventFilter<DefaultAdminTransferCanceledEvent>;

export interface DefaultAdminTransferScheduledEventObject {
  newAdmin: string;
  acceptSchedule: number;
}
export type DefaultAdminTransferScheduledEvent = TypedEvent<
  [string, number],
  DefaultAdminTransferScheduledEventObject
>;

export type DefaultAdminTransferScheduledEventFilter =
  TypedEventFilter<DefaultAdminTransferScheduledEvent>;

export interface RoleAdminChangedEventObject {
  role: string;
  previousAdminRole: string;
  newAdminRole: string;
}
export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string],
  RoleAdminChangedEventObject
>;

export type RoleAdminChangedEventFilter =
  TypedEventFilter<RoleAdminChangedEvent>;

export interface RoleGrantedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleGrantedEvent = TypedEvent<
  [string, string, string],
  RoleGrantedEventObject
>;

export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;

export interface RoleRevokedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleRevokedEvent = TypedEvent<
  [string, string, string],
  RoleRevokedEventObject
>;

export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;

export interface AccessControlDefaultAdminRules extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AccessControlDefaultAdminRulesInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    acceptDefaultAdminTransfer(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    beginDefaultAdminTransfer(
      newAdmin: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    cancelDefaultAdminTransfer(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    changeDefaultAdminDelay(
      newDelay: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    defaultAdmin(overrides?: CallOverrides): Promise<[string]>;

    defaultAdminDelay(overrides?: CallOverrides): Promise<[number]>;

    defaultAdminDelayIncreaseWait(overrides?: CallOverrides): Promise<[number]>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pendingDefaultAdmin(
      overrides?: CallOverrides
    ): Promise<[string, number] & { newAdmin: string; schedule: number }>;

    pendingDefaultAdminDelay(
      overrides?: CallOverrides
    ): Promise<[number, number] & { newDelay: number; schedule: number }>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    rollbackDefaultAdminDelay(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  acceptDefaultAdminTransfer(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  beginDefaultAdminTransfer(
    newAdmin: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  cancelDefaultAdminTransfer(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  changeDefaultAdminDelay(
    newDelay: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  defaultAdmin(overrides?: CallOverrides): Promise<string>;

  defaultAdminDelay(overrides?: CallOverrides): Promise<number>;

  defaultAdminDelayIncreaseWait(overrides?: CallOverrides): Promise<number>;

  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

  grantRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  hasRole(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  pendingDefaultAdmin(
    overrides?: CallOverrides
  ): Promise<[string, number] & { newAdmin: string; schedule: number }>;

  pendingDefaultAdminDelay(
    overrides?: CallOverrides
  ): Promise<[number, number] & { newDelay: number; schedule: number }>;

  renounceRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  revokeRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  rollbackDefaultAdminDelay(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    acceptDefaultAdminTransfer(overrides?: CallOverrides): Promise<void>;

    beginDefaultAdminTransfer(
      newAdmin: string,
      overrides?: CallOverrides
    ): Promise<void>;

    cancelDefaultAdminTransfer(overrides?: CallOverrides): Promise<void>;

    changeDefaultAdminDelay(
      newDelay: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    defaultAdmin(overrides?: CallOverrides): Promise<string>;

    defaultAdminDelay(overrides?: CallOverrides): Promise<number>;

    defaultAdminDelayIncreaseWait(overrides?: CallOverrides): Promise<number>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    pendingDefaultAdmin(
      overrides?: CallOverrides
    ): Promise<[string, number] & { newAdmin: string; schedule: number }>;

    pendingDefaultAdminDelay(
      overrides?: CallOverrides
    ): Promise<[number, number] & { newDelay: number; schedule: number }>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    rollbackDefaultAdminDelay(overrides?: CallOverrides): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "DefaultAdminDelayChangeCanceled()"(): DefaultAdminDelayChangeCanceledEventFilter;
    DefaultAdminDelayChangeCanceled(): DefaultAdminDelayChangeCanceledEventFilter;

    "DefaultAdminDelayChangeScheduled(uint48,uint48)"(
      newDelay?: null,
      effectSchedule?: null
    ): DefaultAdminDelayChangeScheduledEventFilter;
    DefaultAdminDelayChangeScheduled(
      newDelay?: null,
      effectSchedule?: null
    ): DefaultAdminDelayChangeScheduledEventFilter;

    "DefaultAdminTransferCanceled()"(): DefaultAdminTransferCanceledEventFilter;
    DefaultAdminTransferCanceled(): DefaultAdminTransferCanceledEventFilter;

    "DefaultAdminTransferScheduled(address,uint48)"(
      newAdmin?: string | null,
      acceptSchedule?: null
    ): DefaultAdminTransferScheduledEventFilter;
    DefaultAdminTransferScheduled(
      newAdmin?: string | null,
      acceptSchedule?: null
    ): DefaultAdminTransferScheduledEventFilter;

    "RoleAdminChanged(bytes32,bytes32,bytes32)"(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): RoleAdminChangedEventFilter;
    RoleAdminChanged(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): RoleAdminChangedEventFilter;

    "RoleGranted(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleGrantedEventFilter;
    RoleGranted(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleGrantedEventFilter;

    "RoleRevoked(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleRevokedEventFilter;
    RoleRevoked(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleRevokedEventFilter;
  };

  estimateGas: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    acceptDefaultAdminTransfer(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    beginDefaultAdminTransfer(
      newAdmin: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    cancelDefaultAdminTransfer(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    changeDefaultAdminDelay(
      newDelay: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    defaultAdmin(overrides?: CallOverrides): Promise<BigNumber>;

    defaultAdminDelay(overrides?: CallOverrides): Promise<BigNumber>;

    defaultAdminDelayIncreaseWait(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pendingDefaultAdmin(overrides?: CallOverrides): Promise<BigNumber>;

    pendingDefaultAdminDelay(overrides?: CallOverrides): Promise<BigNumber>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    rollbackDefaultAdminDelay(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    acceptDefaultAdminTransfer(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    beginDefaultAdminTransfer(
      newAdmin: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    cancelDefaultAdminTransfer(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    changeDefaultAdminDelay(
      newDelay: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    defaultAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    defaultAdminDelay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    defaultAdminDelayIncreaseWait(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingDefaultAdmin(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pendingDefaultAdminDelay(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    rollbackDefaultAdminDelay(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
