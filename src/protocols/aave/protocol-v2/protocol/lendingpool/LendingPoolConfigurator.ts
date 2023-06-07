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
} from "../../../../../common";

export declare namespace ILendingPoolConfigurator {
  export type InitReserveInputStruct = {
    aTokenImpl: string;
    stableDebtTokenImpl: string;
    variableDebtTokenImpl: string;
    underlyingAssetDecimals: BigNumberish;
    interestRateStrategyAddress: string;
    underlyingAsset: string;
    treasury: string;
    incentivesController: string;
    underlyingAssetName: string;
    aTokenName: string;
    aTokenSymbol: string;
    variableDebtTokenName: string;
    variableDebtTokenSymbol: string;
    stableDebtTokenName: string;
    stableDebtTokenSymbol: string;
    params: BytesLike;
  };

  export type InitReserveInputStructOutput = [
    string,
    string,
    string,
    number,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
  ] & {
    aTokenImpl: string;
    stableDebtTokenImpl: string;
    variableDebtTokenImpl: string;
    underlyingAssetDecimals: number;
    interestRateStrategyAddress: string;
    underlyingAsset: string;
    treasury: string;
    incentivesController: string;
    underlyingAssetName: string;
    aTokenName: string;
    aTokenSymbol: string;
    variableDebtTokenName: string;
    variableDebtTokenSymbol: string;
    stableDebtTokenName: string;
    stableDebtTokenSymbol: string;
    params: string;
  };

  export type UpdateATokenInputStruct = {
    asset: string;
    treasury: string;
    incentivesController: string;
    name: string;
    symbol: string;
    implementation: string;
    params: BytesLike;
  };

  export type UpdateATokenInputStructOutput = [
    string,
    string,
    string,
    string,
    string,
    string,
    string
  ] & {
    asset: string;
    treasury: string;
    incentivesController: string;
    name: string;
    symbol: string;
    implementation: string;
    params: string;
  };

  export type UpdateDebtTokenInputStruct = {
    asset: string;
    incentivesController: string;
    name: string;
    symbol: string;
    implementation: string;
    params: BytesLike;
  };

  export type UpdateDebtTokenInputStructOutput = [
    string,
    string,
    string,
    string,
    string,
    string
  ] & {
    asset: string;
    incentivesController: string;
    name: string;
    symbol: string;
    implementation: string;
    params: string;
  };
}

export interface LendingPoolConfiguratorInterface extends utils.Interface {
  functions: {
    "activateReserve(address)": FunctionFragment;
    "batchInitReserve((address,address,address,uint8,address,address,address,address,string,string,string,string,string,string,string,bytes)[])": FunctionFragment;
    "configureReserveAsCollateral(address,uint256,uint256,uint256)": FunctionFragment;
    "deactivateReserve(address)": FunctionFragment;
    "disableBorrowingOnReserve(address)": FunctionFragment;
    "disableReserveStableRate(address)": FunctionFragment;
    "enableBorrowingOnReserve(address,bool)": FunctionFragment;
    "enableReserveStableRate(address)": FunctionFragment;
    "freezeReserve(address)": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "setPoolPause(bool)": FunctionFragment;
    "setReserveFactor(address,uint256)": FunctionFragment;
    "setReserveInterestRateStrategyAddress(address,address)": FunctionFragment;
    "unfreezeReserve(address)": FunctionFragment;
    "updateAToken((address,address,address,string,string,address,bytes))": FunctionFragment;
    "updateStableDebtToken((address,address,string,string,address,bytes))": FunctionFragment;
    "updateVariableDebtToken((address,address,string,string,address,bytes))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "activateReserve"
      | "batchInitReserve"
      | "configureReserveAsCollateral"
      | "deactivateReserve"
      | "disableBorrowingOnReserve"
      | "disableReserveStableRate"
      | "enableBorrowingOnReserve"
      | "enableReserveStableRate"
      | "freezeReserve"
      | "initialize"
      | "setPoolPause"
      | "setReserveFactor"
      | "setReserveInterestRateStrategyAddress"
      | "unfreezeReserve"
      | "updateAToken"
      | "updateStableDebtToken"
      | "updateVariableDebtToken"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "activateReserve",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "batchInitReserve",
    values: [ILendingPoolConfigurator.InitReserveInputStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "configureReserveAsCollateral",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deactivateReserve",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "disableBorrowingOnReserve",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "disableReserveStableRate",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "enableBorrowingOnReserve",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "enableReserveStableRate",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "freezeReserve",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setPoolPause",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setReserveFactor",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setReserveInterestRateStrategyAddress",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "unfreezeReserve",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateAToken",
    values: [ILendingPoolConfigurator.UpdateATokenInputStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "updateStableDebtToken",
    values: [ILendingPoolConfigurator.UpdateDebtTokenInputStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "updateVariableDebtToken",
    values: [ILendingPoolConfigurator.UpdateDebtTokenInputStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "activateReserve",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "batchInitReserve",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "configureReserveAsCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deactivateReserve",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "disableBorrowingOnReserve",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "disableReserveStableRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "enableBorrowingOnReserve",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "enableReserveStableRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "freezeReserve",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setPoolPause",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setReserveFactor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setReserveInterestRateStrategyAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unfreezeReserve",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateAToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateStableDebtToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateVariableDebtToken",
    data: BytesLike
  ): Result;

  events: {
    "ATokenUpgraded(address,address,address)": EventFragment;
    "BorrowingDisabledOnReserve(address)": EventFragment;
    "BorrowingEnabledOnReserve(address,bool)": EventFragment;
    "CollateralConfigurationChanged(address,uint256,uint256,uint256)": EventFragment;
    "ReserveActivated(address)": EventFragment;
    "ReserveDeactivated(address)": EventFragment;
    "ReserveDecimalsChanged(address,uint256)": EventFragment;
    "ReserveFactorChanged(address,uint256)": EventFragment;
    "ReserveFrozen(address)": EventFragment;
    "ReserveInitialized(address,address,address,address,address)": EventFragment;
    "ReserveInterestRateStrategyChanged(address,address)": EventFragment;
    "ReserveUnfrozen(address)": EventFragment;
    "StableDebtTokenUpgraded(address,address,address)": EventFragment;
    "StableRateDisabledOnReserve(address)": EventFragment;
    "StableRateEnabledOnReserve(address)": EventFragment;
    "VariableDebtTokenUpgraded(address,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ATokenUpgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BorrowingDisabledOnReserve"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BorrowingEnabledOnReserve"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "CollateralConfigurationChanged"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReserveActivated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReserveDeactivated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReserveDecimalsChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReserveFactorChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReserveFrozen"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReserveInitialized"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "ReserveInterestRateStrategyChanged"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReserveUnfrozen"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StableDebtTokenUpgraded"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "StableRateDisabledOnReserve"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StableRateEnabledOnReserve"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VariableDebtTokenUpgraded"): EventFragment;
}

export interface ATokenUpgradedEventObject {
  asset: string;
  proxy: string;
  implementation: string;
}
export type ATokenUpgradedEvent = TypedEvent<
  [string, string, string],
  ATokenUpgradedEventObject
>;

export type ATokenUpgradedEventFilter = TypedEventFilter<ATokenUpgradedEvent>;

export interface BorrowingDisabledOnReserveEventObject {
  asset: string;
}
export type BorrowingDisabledOnReserveEvent = TypedEvent<
  [string],
  BorrowingDisabledOnReserveEventObject
>;

export type BorrowingDisabledOnReserveEventFilter =
  TypedEventFilter<BorrowingDisabledOnReserveEvent>;

export interface BorrowingEnabledOnReserveEventObject {
  asset: string;
  stableRateEnabled: boolean;
}
export type BorrowingEnabledOnReserveEvent = TypedEvent<
  [string, boolean],
  BorrowingEnabledOnReserveEventObject
>;

export type BorrowingEnabledOnReserveEventFilter =
  TypedEventFilter<BorrowingEnabledOnReserveEvent>;

export interface CollateralConfigurationChangedEventObject {
  asset: string;
  ltv: BigNumber;
  liquidationThreshold: BigNumber;
  liquidationBonus: BigNumber;
}
export type CollateralConfigurationChangedEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  CollateralConfigurationChangedEventObject
>;

export type CollateralConfigurationChangedEventFilter =
  TypedEventFilter<CollateralConfigurationChangedEvent>;

export interface ReserveActivatedEventObject {
  asset: string;
}
export type ReserveActivatedEvent = TypedEvent<
  [string],
  ReserveActivatedEventObject
>;

export type ReserveActivatedEventFilter =
  TypedEventFilter<ReserveActivatedEvent>;

export interface ReserveDeactivatedEventObject {
  asset: string;
}
export type ReserveDeactivatedEvent = TypedEvent<
  [string],
  ReserveDeactivatedEventObject
>;

export type ReserveDeactivatedEventFilter =
  TypedEventFilter<ReserveDeactivatedEvent>;

export interface ReserveDecimalsChangedEventObject {
  asset: string;
  decimals: BigNumber;
}
export type ReserveDecimalsChangedEvent = TypedEvent<
  [string, BigNumber],
  ReserveDecimalsChangedEventObject
>;

export type ReserveDecimalsChangedEventFilter =
  TypedEventFilter<ReserveDecimalsChangedEvent>;

export interface ReserveFactorChangedEventObject {
  asset: string;
  factor: BigNumber;
}
export type ReserveFactorChangedEvent = TypedEvent<
  [string, BigNumber],
  ReserveFactorChangedEventObject
>;

export type ReserveFactorChangedEventFilter =
  TypedEventFilter<ReserveFactorChangedEvent>;

export interface ReserveFrozenEventObject {
  asset: string;
}
export type ReserveFrozenEvent = TypedEvent<[string], ReserveFrozenEventObject>;

export type ReserveFrozenEventFilter = TypedEventFilter<ReserveFrozenEvent>;

export interface ReserveInitializedEventObject {
  asset: string;
  aToken: string;
  stableDebtToken: string;
  variableDebtToken: string;
  interestRateStrategyAddress: string;
}
export type ReserveInitializedEvent = TypedEvent<
  [string, string, string, string, string],
  ReserveInitializedEventObject
>;

export type ReserveInitializedEventFilter =
  TypedEventFilter<ReserveInitializedEvent>;

export interface ReserveInterestRateStrategyChangedEventObject {
  asset: string;
  strategy: string;
}
export type ReserveInterestRateStrategyChangedEvent = TypedEvent<
  [string, string],
  ReserveInterestRateStrategyChangedEventObject
>;

export type ReserveInterestRateStrategyChangedEventFilter =
  TypedEventFilter<ReserveInterestRateStrategyChangedEvent>;

export interface ReserveUnfrozenEventObject {
  asset: string;
}
export type ReserveUnfrozenEvent = TypedEvent<
  [string],
  ReserveUnfrozenEventObject
>;

export type ReserveUnfrozenEventFilter = TypedEventFilter<ReserveUnfrozenEvent>;

export interface StableDebtTokenUpgradedEventObject {
  asset: string;
  proxy: string;
  implementation: string;
}
export type StableDebtTokenUpgradedEvent = TypedEvent<
  [string, string, string],
  StableDebtTokenUpgradedEventObject
>;

export type StableDebtTokenUpgradedEventFilter =
  TypedEventFilter<StableDebtTokenUpgradedEvent>;

export interface StableRateDisabledOnReserveEventObject {
  asset: string;
}
export type StableRateDisabledOnReserveEvent = TypedEvent<
  [string],
  StableRateDisabledOnReserveEventObject
>;

export type StableRateDisabledOnReserveEventFilter =
  TypedEventFilter<StableRateDisabledOnReserveEvent>;

export interface StableRateEnabledOnReserveEventObject {
  asset: string;
}
export type StableRateEnabledOnReserveEvent = TypedEvent<
  [string],
  StableRateEnabledOnReserveEventObject
>;

export type StableRateEnabledOnReserveEventFilter =
  TypedEventFilter<StableRateEnabledOnReserveEvent>;

export interface VariableDebtTokenUpgradedEventObject {
  asset: string;
  proxy: string;
  implementation: string;
}
export type VariableDebtTokenUpgradedEvent = TypedEvent<
  [string, string, string],
  VariableDebtTokenUpgradedEventObject
>;

export type VariableDebtTokenUpgradedEventFilter =
  TypedEventFilter<VariableDebtTokenUpgradedEvent>;

export interface LendingPoolConfigurator extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LendingPoolConfiguratorInterface;

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
    activateReserve(
      asset: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    batchInitReserve(
      input: ILendingPoolConfigurator.InitReserveInputStruct[],
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    configureReserveAsCollateral(
      asset: string,
      ltv: BigNumberish,
      liquidationThreshold: BigNumberish,
      liquidationBonus: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    deactivateReserve(
      asset: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    disableBorrowingOnReserve(
      asset: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    disableReserveStableRate(
      asset: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    enableBorrowingOnReserve(
      asset: string,
      stableBorrowRateEnabled: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    enableReserveStableRate(
      asset: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    freezeReserve(
      asset: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    initialize(
      provider: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setPoolPause(
      val: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setReserveFactor(
      asset: string,
      reserveFactor: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setReserveInterestRateStrategyAddress(
      asset: string,
      rateStrategyAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    unfreezeReserve(
      asset: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    updateAToken(
      input: ILendingPoolConfigurator.UpdateATokenInputStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    updateStableDebtToken(
      input: ILendingPoolConfigurator.UpdateDebtTokenInputStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    updateVariableDebtToken(
      input: ILendingPoolConfigurator.UpdateDebtTokenInputStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  activateReserve(
    asset: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  batchInitReserve(
    input: ILendingPoolConfigurator.InitReserveInputStruct[],
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  configureReserveAsCollateral(
    asset: string,
    ltv: BigNumberish,
    liquidationThreshold: BigNumberish,
    liquidationBonus: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  deactivateReserve(
    asset: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  disableBorrowingOnReserve(
    asset: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  disableReserveStableRate(
    asset: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  enableBorrowingOnReserve(
    asset: string,
    stableBorrowRateEnabled: boolean,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  enableReserveStableRate(
    asset: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  freezeReserve(
    asset: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  initialize(
    provider: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setPoolPause(
    val: boolean,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setReserveFactor(
    asset: string,
    reserveFactor: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setReserveInterestRateStrategyAddress(
    asset: string,
    rateStrategyAddress: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  unfreezeReserve(
    asset: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  updateAToken(
    input: ILendingPoolConfigurator.UpdateATokenInputStruct,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  updateStableDebtToken(
    input: ILendingPoolConfigurator.UpdateDebtTokenInputStruct,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  updateVariableDebtToken(
    input: ILendingPoolConfigurator.UpdateDebtTokenInputStruct,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    activateReserve(asset: string, overrides?: CallOverrides): Promise<void>;

    batchInitReserve(
      input: ILendingPoolConfigurator.InitReserveInputStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    configureReserveAsCollateral(
      asset: string,
      ltv: BigNumberish,
      liquidationThreshold: BigNumberish,
      liquidationBonus: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    deactivateReserve(asset: string, overrides?: CallOverrides): Promise<void>;

    disableBorrowingOnReserve(
      asset: string,
      overrides?: CallOverrides
    ): Promise<void>;

    disableReserveStableRate(
      asset: string,
      overrides?: CallOverrides
    ): Promise<void>;

    enableBorrowingOnReserve(
      asset: string,
      stableBorrowRateEnabled: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    enableReserveStableRate(
      asset: string,
      overrides?: CallOverrides
    ): Promise<void>;

    freezeReserve(asset: string, overrides?: CallOverrides): Promise<void>;

    initialize(provider: string, overrides?: CallOverrides): Promise<void>;

    setPoolPause(val: boolean, overrides?: CallOverrides): Promise<void>;

    setReserveFactor(
      asset: string,
      reserveFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setReserveInterestRateStrategyAddress(
      asset: string,
      rateStrategyAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unfreezeReserve(asset: string, overrides?: CallOverrides): Promise<void>;

    updateAToken(
      input: ILendingPoolConfigurator.UpdateATokenInputStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    updateStableDebtToken(
      input: ILendingPoolConfigurator.UpdateDebtTokenInputStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    updateVariableDebtToken(
      input: ILendingPoolConfigurator.UpdateDebtTokenInputStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ATokenUpgraded(address,address,address)"(
      asset?: string | null,
      proxy?: string | null,
      implementation?: string | null
    ): ATokenUpgradedEventFilter;
    ATokenUpgraded(
      asset?: string | null,
      proxy?: string | null,
      implementation?: string | null
    ): ATokenUpgradedEventFilter;

    "BorrowingDisabledOnReserve(address)"(
      asset?: string | null
    ): BorrowingDisabledOnReserveEventFilter;
    BorrowingDisabledOnReserve(
      asset?: string | null
    ): BorrowingDisabledOnReserveEventFilter;

    "BorrowingEnabledOnReserve(address,bool)"(
      asset?: string | null,
      stableRateEnabled?: null
    ): BorrowingEnabledOnReserveEventFilter;
    BorrowingEnabledOnReserve(
      asset?: string | null,
      stableRateEnabled?: null
    ): BorrowingEnabledOnReserveEventFilter;

    "CollateralConfigurationChanged(address,uint256,uint256,uint256)"(
      asset?: string | null,
      ltv?: null,
      liquidationThreshold?: null,
      liquidationBonus?: null
    ): CollateralConfigurationChangedEventFilter;
    CollateralConfigurationChanged(
      asset?: string | null,
      ltv?: null,
      liquidationThreshold?: null,
      liquidationBonus?: null
    ): CollateralConfigurationChangedEventFilter;

    "ReserveActivated(address)"(
      asset?: string | null
    ): ReserveActivatedEventFilter;
    ReserveActivated(asset?: string | null): ReserveActivatedEventFilter;

    "ReserveDeactivated(address)"(
      asset?: string | null
    ): ReserveDeactivatedEventFilter;
    ReserveDeactivated(asset?: string | null): ReserveDeactivatedEventFilter;

    "ReserveDecimalsChanged(address,uint256)"(
      asset?: string | null,
      decimals?: null
    ): ReserveDecimalsChangedEventFilter;
    ReserveDecimalsChanged(
      asset?: string | null,
      decimals?: null
    ): ReserveDecimalsChangedEventFilter;

    "ReserveFactorChanged(address,uint256)"(
      asset?: string | null,
      factor?: null
    ): ReserveFactorChangedEventFilter;
    ReserveFactorChanged(
      asset?: string | null,
      factor?: null
    ): ReserveFactorChangedEventFilter;

    "ReserveFrozen(address)"(asset?: string | null): ReserveFrozenEventFilter;
    ReserveFrozen(asset?: string | null): ReserveFrozenEventFilter;

    "ReserveInitialized(address,address,address,address,address)"(
      asset?: string | null,
      aToken?: string | null,
      stableDebtToken?: null,
      variableDebtToken?: null,
      interestRateStrategyAddress?: null
    ): ReserveInitializedEventFilter;
    ReserveInitialized(
      asset?: string | null,
      aToken?: string | null,
      stableDebtToken?: null,
      variableDebtToken?: null,
      interestRateStrategyAddress?: null
    ): ReserveInitializedEventFilter;

    "ReserveInterestRateStrategyChanged(address,address)"(
      asset?: string | null,
      strategy?: null
    ): ReserveInterestRateStrategyChangedEventFilter;
    ReserveInterestRateStrategyChanged(
      asset?: string | null,
      strategy?: null
    ): ReserveInterestRateStrategyChangedEventFilter;

    "ReserveUnfrozen(address)"(
      asset?: string | null
    ): ReserveUnfrozenEventFilter;
    ReserveUnfrozen(asset?: string | null): ReserveUnfrozenEventFilter;

    "StableDebtTokenUpgraded(address,address,address)"(
      asset?: string | null,
      proxy?: string | null,
      implementation?: string | null
    ): StableDebtTokenUpgradedEventFilter;
    StableDebtTokenUpgraded(
      asset?: string | null,
      proxy?: string | null,
      implementation?: string | null
    ): StableDebtTokenUpgradedEventFilter;

    "StableRateDisabledOnReserve(address)"(
      asset?: string | null
    ): StableRateDisabledOnReserveEventFilter;
    StableRateDisabledOnReserve(
      asset?: string | null
    ): StableRateDisabledOnReserveEventFilter;

    "StableRateEnabledOnReserve(address)"(
      asset?: string | null
    ): StableRateEnabledOnReserveEventFilter;
    StableRateEnabledOnReserve(
      asset?: string | null
    ): StableRateEnabledOnReserveEventFilter;

    "VariableDebtTokenUpgraded(address,address,address)"(
      asset?: string | null,
      proxy?: string | null,
      implementation?: string | null
    ): VariableDebtTokenUpgradedEventFilter;
    VariableDebtTokenUpgraded(
      asset?: string | null,
      proxy?: string | null,
      implementation?: string | null
    ): VariableDebtTokenUpgradedEventFilter;
  };

  estimateGas: {
    activateReserve(
      asset: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    batchInitReserve(
      input: ILendingPoolConfigurator.InitReserveInputStruct[],
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    configureReserveAsCollateral(
      asset: string,
      ltv: BigNumberish,
      liquidationThreshold: BigNumberish,
      liquidationBonus: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    deactivateReserve(
      asset: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    disableBorrowingOnReserve(
      asset: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    disableReserveStableRate(
      asset: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    enableBorrowingOnReserve(
      asset: string,
      stableBorrowRateEnabled: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    enableReserveStableRate(
      asset: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    freezeReserve(
      asset: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    initialize(
      provider: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setPoolPause(
      val: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setReserveFactor(
      asset: string,
      reserveFactor: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setReserveInterestRateStrategyAddress(
      asset: string,
      rateStrategyAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    unfreezeReserve(
      asset: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    updateAToken(
      input: ILendingPoolConfigurator.UpdateATokenInputStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    updateStableDebtToken(
      input: ILendingPoolConfigurator.UpdateDebtTokenInputStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    updateVariableDebtToken(
      input: ILendingPoolConfigurator.UpdateDebtTokenInputStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    activateReserve(
      asset: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    batchInitReserve(
      input: ILendingPoolConfigurator.InitReserveInputStruct[],
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    configureReserveAsCollateral(
      asset: string,
      ltv: BigNumberish,
      liquidationThreshold: BigNumberish,
      liquidationBonus: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    deactivateReserve(
      asset: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    disableBorrowingOnReserve(
      asset: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    disableReserveStableRate(
      asset: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    enableBorrowingOnReserve(
      asset: string,
      stableBorrowRateEnabled: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    enableReserveStableRate(
      asset: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    freezeReserve(
      asset: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    initialize(
      provider: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setPoolPause(
      val: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setReserveFactor(
      asset: string,
      reserveFactor: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setReserveInterestRateStrategyAddress(
      asset: string,
      rateStrategyAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    unfreezeReserve(
      asset: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    updateAToken(
      input: ILendingPoolConfigurator.UpdateATokenInputStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    updateStableDebtToken(
      input: ILendingPoolConfigurator.UpdateDebtTokenInputStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    updateVariableDebtToken(
      input: ILendingPoolConfigurator.UpdateDebtTokenInputStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
