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
} from "../../../common";

export declare namespace CometConfiguration {
  export type AssetConfigStruct = {
    asset: AddressLike;
    priceFeed: AddressLike;
    decimals: BigNumberish;
    borrowCollateralFactor: BigNumberish;
    liquidateCollateralFactor: BigNumberish;
    liquidationFactor: BigNumberish;
    supplyCap: BigNumberish;
  };

  export type AssetConfigStructOutput = [
    asset: string,
    priceFeed: string,
    decimals: bigint,
    borrowCollateralFactor: bigint,
    liquidateCollateralFactor: bigint,
    liquidationFactor: bigint,
    supplyCap: bigint
  ] & {
    asset: string;
    priceFeed: string;
    decimals: bigint;
    borrowCollateralFactor: bigint;
    liquidateCollateralFactor: bigint;
    liquidationFactor: bigint;
    supplyCap: bigint;
  };

  export type ConfigurationStruct = {
    governor: AddressLike;
    pauseGuardian: AddressLike;
    baseToken: AddressLike;
    baseTokenPriceFeed: AddressLike;
    extensionDelegate: AddressLike;
    supplyKink: BigNumberish;
    supplyPerYearInterestRateSlopeLow: BigNumberish;
    supplyPerYearInterestRateSlopeHigh: BigNumberish;
    supplyPerYearInterestRateBase: BigNumberish;
    borrowKink: BigNumberish;
    borrowPerYearInterestRateSlopeLow: BigNumberish;
    borrowPerYearInterestRateSlopeHigh: BigNumberish;
    borrowPerYearInterestRateBase: BigNumberish;
    storeFrontPriceFactor: BigNumberish;
    trackingIndexScale: BigNumberish;
    baseTrackingSupplySpeed: BigNumberish;
    baseTrackingBorrowSpeed: BigNumberish;
    baseMinForRewards: BigNumberish;
    baseBorrowMin: BigNumberish;
    targetReserves: BigNumberish;
    assetConfigs: CometConfiguration.AssetConfigStruct[];
  };

  export type ConfigurationStructOutput = [
    governor: string,
    pauseGuardian: string,
    baseToken: string,
    baseTokenPriceFeed: string,
    extensionDelegate: string,
    supplyKink: bigint,
    supplyPerYearInterestRateSlopeLow: bigint,
    supplyPerYearInterestRateSlopeHigh: bigint,
    supplyPerYearInterestRateBase: bigint,
    borrowKink: bigint,
    borrowPerYearInterestRateSlopeLow: bigint,
    borrowPerYearInterestRateSlopeHigh: bigint,
    borrowPerYearInterestRateBase: bigint,
    storeFrontPriceFactor: bigint,
    trackingIndexScale: bigint,
    baseTrackingSupplySpeed: bigint,
    baseTrackingBorrowSpeed: bigint,
    baseMinForRewards: bigint,
    baseBorrowMin: bigint,
    targetReserves: bigint,
    assetConfigs: CometConfiguration.AssetConfigStructOutput[]
  ] & {
    governor: string;
    pauseGuardian: string;
    baseToken: string;
    baseTokenPriceFeed: string;
    extensionDelegate: string;
    supplyKink: bigint;
    supplyPerYearInterestRateSlopeLow: bigint;
    supplyPerYearInterestRateSlopeHigh: bigint;
    supplyPerYearInterestRateBase: bigint;
    borrowKink: bigint;
    borrowPerYearInterestRateSlopeLow: bigint;
    borrowPerYearInterestRateSlopeHigh: bigint;
    borrowPerYearInterestRateBase: bigint;
    storeFrontPriceFactor: bigint;
    trackingIndexScale: bigint;
    baseTrackingSupplySpeed: bigint;
    baseTrackingBorrowSpeed: bigint;
    baseMinForRewards: bigint;
    baseBorrowMin: bigint;
    targetReserves: bigint;
    assetConfigs: CometConfiguration.AssetConfigStructOutput[];
  };
}

export interface CometFactoryInterface extends Interface {
  getFunction(nameOrSignature: "clone"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "clone",
    values: [CometConfiguration.ConfigurationStruct]
  ): string;

  decodeFunctionResult(functionFragment: "clone", data: BytesLike): Result;
}

export interface CometFactory extends BaseContract {
  connect(runner?: ContractRunner | null): CometFactory;
  waitForDeployment(): Promise<this>;

  interface: CometFactoryInterface;

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

  clone: TypedContractMethod<
    [config: CometConfiguration.ConfigurationStruct],
    [string],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "clone"
  ): TypedContractMethod<
    [config: CometConfiguration.ConfigurationStruct],
    [string],
    "nonpayable"
  >;

  filters: {};
}
