/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../../../common";

export declare namespace IUiPoolDataProviderV2 {
  export type AggregatedReserveDataStruct = {
    underlyingAsset: AddressLike;
    name: string;
    symbol: string;
    decimals: BigNumberish;
    baseLTVasCollateral: BigNumberish;
    reserveLiquidationThreshold: BigNumberish;
    reserveLiquidationBonus: BigNumberish;
    reserveFactor: BigNumberish;
    usageAsCollateralEnabled: boolean;
    borrowingEnabled: boolean;
    stableBorrowRateEnabled: boolean;
    isActive: boolean;
    isFrozen: boolean;
    liquidityIndex: BigNumberish;
    variableBorrowIndex: BigNumberish;
    liquidityRate: BigNumberish;
    variableBorrowRate: BigNumberish;
    stableBorrowRate: BigNumberish;
    lastUpdateTimestamp: BigNumberish;
    aTokenAddress: AddressLike;
    stableDebtTokenAddress: AddressLike;
    variableDebtTokenAddress: AddressLike;
    interestRateStrategyAddress: AddressLike;
    availableLiquidity: BigNumberish;
    totalPrincipalStableDebt: BigNumberish;
    averageStableRate: BigNumberish;
    stableDebtLastUpdateTimestamp: BigNumberish;
    totalScaledVariableDebt: BigNumberish;
    priceInMarketReferenceCurrency: BigNumberish;
    variableRateSlope1: BigNumberish;
    variableRateSlope2: BigNumberish;
    stableRateSlope1: BigNumberish;
    stableRateSlope2: BigNumberish;
  };

  export type AggregatedReserveDataStructOutput = [
    underlyingAsset: string,
    name: string,
    symbol: string,
    decimals: bigint,
    baseLTVasCollateral: bigint,
    reserveLiquidationThreshold: bigint,
    reserveLiquidationBonus: bigint,
    reserveFactor: bigint,
    usageAsCollateralEnabled: boolean,
    borrowingEnabled: boolean,
    stableBorrowRateEnabled: boolean,
    isActive: boolean,
    isFrozen: boolean,
    liquidityIndex: bigint,
    variableBorrowIndex: bigint,
    liquidityRate: bigint,
    variableBorrowRate: bigint,
    stableBorrowRate: bigint,
    lastUpdateTimestamp: bigint,
    aTokenAddress: string,
    stableDebtTokenAddress: string,
    variableDebtTokenAddress: string,
    interestRateStrategyAddress: string,
    availableLiquidity: bigint,
    totalPrincipalStableDebt: bigint,
    averageStableRate: bigint,
    stableDebtLastUpdateTimestamp: bigint,
    totalScaledVariableDebt: bigint,
    priceInMarketReferenceCurrency: bigint,
    variableRateSlope1: bigint,
    variableRateSlope2: bigint,
    stableRateSlope1: bigint,
    stableRateSlope2: bigint
  ] & {
    underlyingAsset: string;
    name: string;
    symbol: string;
    decimals: bigint;
    baseLTVasCollateral: bigint;
    reserveLiquidationThreshold: bigint;
    reserveLiquidationBonus: bigint;
    reserveFactor: bigint;
    usageAsCollateralEnabled: boolean;
    borrowingEnabled: boolean;
    stableBorrowRateEnabled: boolean;
    isActive: boolean;
    isFrozen: boolean;
    liquidityIndex: bigint;
    variableBorrowIndex: bigint;
    liquidityRate: bigint;
    variableBorrowRate: bigint;
    stableBorrowRate: bigint;
    lastUpdateTimestamp: bigint;
    aTokenAddress: string;
    stableDebtTokenAddress: string;
    variableDebtTokenAddress: string;
    interestRateStrategyAddress: string;
    availableLiquidity: bigint;
    totalPrincipalStableDebt: bigint;
    averageStableRate: bigint;
    stableDebtLastUpdateTimestamp: bigint;
    totalScaledVariableDebt: bigint;
    priceInMarketReferenceCurrency: bigint;
    variableRateSlope1: bigint;
    variableRateSlope2: bigint;
    stableRateSlope1: bigint;
    stableRateSlope2: bigint;
  };

  export type BaseCurrencyInfoStruct = {
    marketReferenceCurrencyUnit: BigNumberish;
    marketReferenceCurrencyPriceInUsd: BigNumberish;
    networkBaseTokenPriceInUsd: BigNumberish;
    networkBaseTokenPriceDecimals: BigNumberish;
  };

  export type BaseCurrencyInfoStructOutput = [
    marketReferenceCurrencyUnit: bigint,
    marketReferenceCurrencyPriceInUsd: bigint,
    networkBaseTokenPriceInUsd: bigint,
    networkBaseTokenPriceDecimals: bigint
  ] & {
    marketReferenceCurrencyUnit: bigint;
    marketReferenceCurrencyPriceInUsd: bigint;
    networkBaseTokenPriceInUsd: bigint;
    networkBaseTokenPriceDecimals: bigint;
  };

  export type UserReserveDataStruct = {
    underlyingAsset: AddressLike;
    scaledATokenBalance: BigNumberish;
    usageAsCollateralEnabledOnUser: boolean;
    stableBorrowRate: BigNumberish;
    scaledVariableDebt: BigNumberish;
    principalStableDebt: BigNumberish;
    stableBorrowLastUpdateTimestamp: BigNumberish;
  };

  export type UserReserveDataStructOutput = [
    underlyingAsset: string,
    scaledATokenBalance: bigint,
    usageAsCollateralEnabledOnUser: boolean,
    stableBorrowRate: bigint,
    scaledVariableDebt: bigint,
    principalStableDebt: bigint,
    stableBorrowLastUpdateTimestamp: bigint
  ] & {
    underlyingAsset: string;
    scaledATokenBalance: bigint;
    usageAsCollateralEnabledOnUser: boolean;
    stableBorrowRate: bigint;
    scaledVariableDebt: bigint;
    principalStableDebt: bigint;
    stableBorrowLastUpdateTimestamp: bigint;
  };
}

export interface UiPoolDataProviderV2Interface extends Interface {
  getFunction(
    nameOrSignature:
      | "ETH_CURRENCY_UNIT"
      | "MKRAddress"
      | "bytes32ToString"
      | "getReservesData"
      | "getReservesList"
      | "getUserReservesData"
      | "marketReferenceCurrencyPriceInUsdProxyAggregator"
      | "networkBaseTokenPriceInUsdProxyAggregator"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "ETH_CURRENCY_UNIT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MKRAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "bytes32ToString",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getReservesData",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getReservesList",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserReservesData",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "marketReferenceCurrencyPriceInUsdProxyAggregator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "networkBaseTokenPriceInUsdProxyAggregator",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "ETH_CURRENCY_UNIT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "MKRAddress", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "bytes32ToString",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReservesData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReservesList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserReservesData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "marketReferenceCurrencyPriceInUsdProxyAggregator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "networkBaseTokenPriceInUsdProxyAggregator",
    data: BytesLike
  ): Result;
}

export interface UiPoolDataProviderV2 extends BaseContract {
  connect(runner?: ContractRunner | null): UiPoolDataProviderV2;
  waitForDeployment(): Promise<this>;

  interface: UiPoolDataProviderV2Interface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  ETH_CURRENCY_UNIT: TypedContractMethod<[], [bigint], "view">;

  MKRAddress: TypedContractMethod<[], [string], "view">;

  bytes32ToString: TypedContractMethod<[_bytes32: BytesLike], [string], "view">;

  getReservesData: TypedContractMethod<
    [provider: AddressLike],
    [
      [
        IUiPoolDataProviderV2.AggregatedReserveDataStructOutput[],
        IUiPoolDataProviderV2.BaseCurrencyInfoStructOutput
      ]
    ],
    "view"
  >;

  getReservesList: TypedContractMethod<
    [provider: AddressLike],
    [string[]],
    "view"
  >;

  getUserReservesData: TypedContractMethod<
    [provider: AddressLike, user: AddressLike],
    [IUiPoolDataProviderV2.UserReserveDataStructOutput[]],
    "view"
  >;

  marketReferenceCurrencyPriceInUsdProxyAggregator: TypedContractMethod<
    [],
    [string],
    "view"
  >;

  networkBaseTokenPriceInUsdProxyAggregator: TypedContractMethod<
    [],
    [string],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "ETH_CURRENCY_UNIT"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "MKRAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "bytes32ToString"
  ): TypedContractMethod<[_bytes32: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "getReservesData"
  ): TypedContractMethod<
    [provider: AddressLike],
    [
      [
        IUiPoolDataProviderV2.AggregatedReserveDataStructOutput[],
        IUiPoolDataProviderV2.BaseCurrencyInfoStructOutput
      ]
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getReservesList"
  ): TypedContractMethod<[provider: AddressLike], [string[]], "view">;
  getFunction(
    nameOrSignature: "getUserReservesData"
  ): TypedContractMethod<
    [provider: AddressLike, user: AddressLike],
    [IUiPoolDataProviderV2.UserReserveDataStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "marketReferenceCurrencyPriceInUsdProxyAggregator"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "networkBaseTokenPriceInUsdProxyAggregator"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}
