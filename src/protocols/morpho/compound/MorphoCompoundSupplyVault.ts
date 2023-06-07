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
} from "../../../common";

export interface MorphoCompoundSupplyVaultInterface extends utils.Interface {
  functions: {
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "asset()": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "claimRewards(address)": FunctionFragment;
    "comp()": FunctionFragment;
    "convertToAssets(uint256)": FunctionFragment;
    "convertToShares(uint256)": FunctionFragment;
    "decimals()": FunctionFragment;
    "decreaseAllowance(address,uint256)": FunctionFragment;
    "deposit(uint256,address)": FunctionFragment;
    "increaseAllowance(address,uint256)": FunctionFragment;
    "initialize(address,string,string,uint256)": FunctionFragment;
    "lens()": FunctionFragment;
    "maxDeposit(address)": FunctionFragment;
    "maxMint(address)": FunctionFragment;
    "maxRedeem(address)": FunctionFragment;
    "maxWithdraw(address)": FunctionFragment;
    "mint(uint256,address)": FunctionFragment;
    "morpho()": FunctionFragment;
    "morphoToken()": FunctionFragment;
    "name()": FunctionFragment;
    "owner()": FunctionFragment;
    "poolToken()": FunctionFragment;
    "previewDeposit(uint256)": FunctionFragment;
    "previewMint(uint256)": FunctionFragment;
    "previewRedeem(uint256)": FunctionFragment;
    "previewWithdraw(uint256)": FunctionFragment;
    "recipient()": FunctionFragment;
    "redeem(uint256,address,address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "rewardsIndex()": FunctionFragment;
    "symbol()": FunctionFragment;
    "totalAssets()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "transferRewards()": FunctionFragment;
    "userRewards(address)": FunctionFragment;
    "wEth()": FunctionFragment;
    "withdraw(uint256,address,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "allowance"
      | "approve"
      | "asset"
      | "balanceOf"
      | "claimRewards"
      | "comp"
      | "convertToAssets"
      | "convertToShares"
      | "decimals"
      | "decreaseAllowance"
      | "deposit"
      | "increaseAllowance"
      | "initialize"
      | "lens"
      | "maxDeposit"
      | "maxMint"
      | "maxRedeem"
      | "maxWithdraw"
      | "mint"
      | "morpho"
      | "morphoToken"
      | "name"
      | "owner"
      | "poolToken"
      | "previewDeposit"
      | "previewMint"
      | "previewRedeem"
      | "previewWithdraw"
      | "recipient"
      | "redeem"
      | "renounceOwnership"
      | "rewardsIndex"
      | "symbol"
      | "totalAssets"
      | "totalSupply"
      | "transfer"
      | "transferFrom"
      | "transferOwnership"
      | "transferRewards"
      | "userRewards"
      | "wEth"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "asset", values?: undefined): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "claimRewards",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "comp", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "convertToAssets",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "convertToShares",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "decreaseAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "lens", values?: undefined): string;
  encodeFunctionData(functionFragment: "maxDeposit", values: [string]): string;
  encodeFunctionData(functionFragment: "maxMint", values: [string]): string;
  encodeFunctionData(functionFragment: "maxRedeem", values: [string]): string;
  encodeFunctionData(functionFragment: "maxWithdraw", values: [string]): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "morpho", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "morphoToken",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "poolToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "previewDeposit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "previewMint",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "previewRedeem",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "previewWithdraw",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "recipient", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "redeem",
    values: [BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardsIndex",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalAssets",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferRewards",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "userRewards", values: [string]): string;
  encodeFunctionData(functionFragment: "wEth", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish, string, string]
  ): string;

  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "asset", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "comp", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "convertToAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "convertToShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decreaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "increaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lens", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "maxDeposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "maxMint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "maxRedeem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maxWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "morpho", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "morphoToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "poolToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "previewDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "previewMint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "previewRedeem",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "previewWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "recipient", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardsIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "wEth", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "Accrued(address,uint256,uint256)": EventFragment;
    "Approval(address,address,uint256)": EventFragment;
    "Claimed(address,uint256)": EventFragment;
    "Deposit(address,address,uint256,uint256)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "RewardsTransferred(address,uint256)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
    "Withdraw(address,address,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Accrued"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Claimed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardsTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export interface AccruedEventObject {
  user: string;
  index: BigNumber;
  unclaimed: BigNumber;
}
export type AccruedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  AccruedEventObject
>;

export type AccruedEventFilter = TypedEventFilter<AccruedEvent>;

export interface ApprovalEventObject {
  owner: string;
  spender: string;
  value: BigNumber;
}
export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  ApprovalEventObject
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface ClaimedEventObject {
  user: string;
  claimed: BigNumber;
}
export type ClaimedEvent = TypedEvent<[string, BigNumber], ClaimedEventObject>;

export type ClaimedEventFilter = TypedEventFilter<ClaimedEvent>;

export interface DepositEventObject {
  caller: string;
  owner: string;
  assets: BigNumber;
  shares: BigNumber;
}
export type DepositEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  DepositEventObject
>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface RewardsTransferredEventObject {
  recipient: string;
  amount: BigNumber;
}
export type RewardsTransferredEvent = TypedEvent<
  [string, BigNumber],
  RewardsTransferredEventObject
>;

export type RewardsTransferredEventFilter =
  TypedEventFilter<RewardsTransferredEvent>;

export interface TransferEventObject {
  from: string;
  to: string;
  value: BigNumber;
}
export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  TransferEventObject
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface WithdrawEventObject {
  caller: string;
  receiver: string;
  owner: string;
  assets: BigNumber;
  shares: BigNumber;
}
export type WithdrawEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber],
  WithdrawEventObject
>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface MorphoCompoundSupplyVault extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MorphoCompoundSupplyVaultInterface;

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
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    asset(overrides?: CallOverrides): Promise<[string]>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    claimRewards(
      _user: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    comp(overrides?: CallOverrides): Promise<[string]>;

    convertToAssets(
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { assets: BigNumber }>;

    convertToShares(
      assets: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { shares: BigNumber }>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    deposit(
      assets: BigNumberish,
      receiver: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    initialize(
      _poolToken: string,
      _name: string,
      _symbol: string,
      _initialDeposit: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    lens(overrides?: CallOverrides): Promise<[string]>;

    maxDeposit(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    maxMint(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    maxRedeem(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    maxWithdraw(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    mint(
      shares: BigNumberish,
      receiver: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    morpho(overrides?: CallOverrides): Promise<[string]>;

    morphoToken(overrides?: CallOverrides): Promise<[string]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    poolToken(overrides?: CallOverrides): Promise<[string]>;

    previewDeposit(
      assets: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    previewMint(
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    previewRedeem(
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    previewWithdraw(
      assets: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    recipient(overrides?: CallOverrides): Promise<[string]>;

    redeem(
      shares: BigNumberish,
      receiver: string,
      owner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    rewardsIndex(overrides?: CallOverrides): Promise<[BigNumber]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    totalAssets(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    transferRewards(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    userRewards(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { index: BigNumber; unclaimed: BigNumber }
    >;

    wEth(overrides?: CallOverrides): Promise<[string]>;

    withdraw(
      assets: BigNumberish,
      receiver: string,
      owner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  allowance(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  asset(overrides?: CallOverrides): Promise<string>;

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  claimRewards(
    _user: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  comp(overrides?: CallOverrides): Promise<string>;

  convertToAssets(
    shares: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  convertToShares(
    assets: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  decimals(overrides?: CallOverrides): Promise<number>;

  decreaseAllowance(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  deposit(
    assets: BigNumberish,
    receiver: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  increaseAllowance(
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  initialize(
    _poolToken: string,
    _name: string,
    _symbol: string,
    _initialDeposit: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  lens(overrides?: CallOverrides): Promise<string>;

  maxDeposit(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  maxMint(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  maxRedeem(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  maxWithdraw(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  mint(
    shares: BigNumberish,
    receiver: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  morpho(overrides?: CallOverrides): Promise<string>;

  morphoToken(overrides?: CallOverrides): Promise<string>;

  name(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  poolToken(overrides?: CallOverrides): Promise<string>;

  previewDeposit(
    assets: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  previewMint(
    shares: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  previewRedeem(
    shares: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  previewWithdraw(
    assets: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  recipient(overrides?: CallOverrides): Promise<string>;

  redeem(
    shares: BigNumberish,
    receiver: string,
    owner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  rewardsIndex(overrides?: CallOverrides): Promise<BigNumber>;

  symbol(overrides?: CallOverrides): Promise<string>;

  totalAssets(overrides?: CallOverrides): Promise<BigNumber>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  transferFrom(
    from: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  transferRewards(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  userRewards(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { index: BigNumber; unclaimed: BigNumber }
  >;

  wEth(overrides?: CallOverrides): Promise<string>;

  withdraw(
    assets: BigNumberish,
    receiver: string,
    owner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    asset(overrides?: CallOverrides): Promise<string>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    claimRewards(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    comp(overrides?: CallOverrides): Promise<string>;

    convertToAssets(
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    convertToShares(
      assets: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<number>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    deposit(
      assets: BigNumberish,
      receiver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    initialize(
      _poolToken: string,
      _name: string,
      _symbol: string,
      _initialDeposit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    lens(overrides?: CallOverrides): Promise<string>;

    maxDeposit(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    maxMint(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    maxRedeem(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    maxWithdraw(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      shares: BigNumberish,
      receiver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    morpho(overrides?: CallOverrides): Promise<string>;

    morphoToken(overrides?: CallOverrides): Promise<string>;

    name(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    poolToken(overrides?: CallOverrides): Promise<string>;

    previewDeposit(
      assets: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    previewMint(
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    previewRedeem(
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    previewWithdraw(
      assets: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    recipient(overrides?: CallOverrides): Promise<string>;

    redeem(
      shares: BigNumberish,
      receiver: string,
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    rewardsIndex(overrides?: CallOverrides): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<string>;

    totalAssets(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferRewards(overrides?: CallOverrides): Promise<void>;

    userRewards(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { index: BigNumber; unclaimed: BigNumber }
    >;

    wEth(overrides?: CallOverrides): Promise<string>;

    withdraw(
      assets: BigNumberish,
      receiver: string,
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "Accrued(address,uint256,uint256)"(
      user?: string | null,
      index?: null,
      unclaimed?: null
    ): AccruedEventFilter;
    Accrued(
      user?: string | null,
      index?: null,
      unclaimed?: null
    ): AccruedEventFilter;

    "Approval(address,address,uint256)"(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): ApprovalEventFilter;
    Approval(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): ApprovalEventFilter;

    "Claimed(address,uint256)"(
      user?: string | null,
      claimed?: null
    ): ClaimedEventFilter;
    Claimed(user?: string | null, claimed?: null): ClaimedEventFilter;

    "Deposit(address,address,uint256,uint256)"(
      caller?: string | null,
      owner?: string | null,
      assets?: null,
      shares?: null
    ): DepositEventFilter;
    Deposit(
      caller?: string | null,
      owner?: string | null,
      assets?: null,
      shares?: null
    ): DepositEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "RewardsTransferred(address,uint256)"(
      recipient?: null,
      amount?: null
    ): RewardsTransferredEventFilter;
    RewardsTransferred(
      recipient?: null,
      amount?: null
    ): RewardsTransferredEventFilter;

    "Transfer(address,address,uint256)"(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TransferEventFilter;
    Transfer(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TransferEventFilter;

    "Withdraw(address,address,address,uint256,uint256)"(
      caller?: string | null,
      receiver?: string | null,
      owner?: string | null,
      assets?: null,
      shares?: null
    ): WithdrawEventFilter;
    Withdraw(
      caller?: string | null,
      receiver?: string | null,
      owner?: string | null,
      assets?: null,
      shares?: null
    ): WithdrawEventFilter;
  };

  estimateGas: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    asset(overrides?: CallOverrides): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    claimRewards(
      _user: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    comp(overrides?: CallOverrides): Promise<BigNumber>;

    convertToAssets(
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    convertToShares(
      assets: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    deposit(
      assets: BigNumberish,
      receiver: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    initialize(
      _poolToken: string,
      _name: string,
      _symbol: string,
      _initialDeposit: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    lens(overrides?: CallOverrides): Promise<BigNumber>;

    maxDeposit(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    maxMint(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    maxRedeem(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    maxWithdraw(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      shares: BigNumberish,
      receiver: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    morpho(overrides?: CallOverrides): Promise<BigNumber>;

    morphoToken(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    poolToken(overrides?: CallOverrides): Promise<BigNumber>;

    previewDeposit(
      assets: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    previewMint(
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    previewRedeem(
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    previewWithdraw(
      assets: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    recipient(overrides?: CallOverrides): Promise<BigNumber>;

    redeem(
      shares: BigNumberish,
      receiver: string,
      owner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    rewardsIndex(overrides?: CallOverrides): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    totalAssets(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    transferRewards(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    userRewards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    wEth(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      assets: BigNumberish,
      receiver: string,
      owner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    asset(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    balanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimRewards(
      _user: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    comp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    convertToAssets(
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    convertToShares(
      assets: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    deposit(
      assets: BigNumberish,
      receiver: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    initialize(
      _poolToken: string,
      _name: string,
      _symbol: string,
      _initialDeposit: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    lens(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxDeposit(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxMint(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxRedeem(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxWithdraw(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mint(
      shares: BigNumberish,
      receiver: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    morpho(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    morphoToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    previewDeposit(
      assets: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    previewMint(
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    previewRedeem(
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    previewWithdraw(
      assets: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    recipient(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    redeem(
      shares: BigNumberish,
      receiver: string,
      owner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    rewardsIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    transferRewards(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    userRewards(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    wEth(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      assets: BigNumberish,
      receiver: string,
      owner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
