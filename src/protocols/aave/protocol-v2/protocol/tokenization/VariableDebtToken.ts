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
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../../../../common";

export interface VariableDebtTokenInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "DEBT_TOKEN_REVISION"
      | "POOL"
      | "UNDERLYING_ASSET_ADDRESS"
      | "allowance"
      | "approve"
      | "approveDelegation"
      | "balanceOf"
      | "borrowAllowance"
      | "burn"
      | "decimals"
      | "decreaseAllowance"
      | "getIncentivesController"
      | "getScaledUserBalanceAndSupply"
      | "increaseAllowance"
      | "initialize"
      | "mint"
      | "name"
      | "scaledBalanceOf"
      | "scaledTotalSupply"
      | "symbol"
      | "totalSupply"
      | "transfer"
      | "transferFrom"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Approval"
      | "BorrowAllowanceDelegated"
      | "Burn"
      | "Initialized"
      | "Mint"
      | "Transfer"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "DEBT_TOKEN_REVISION",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "POOL", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "UNDERLYING_ASSET_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "approveDelegation",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "borrowAllowance",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "burn",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "decreaseAllowance",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getIncentivesController",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getScaledUserBalanceAndSupply",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseAllowance",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      AddressLike,
      AddressLike,
      AddressLike,
      BigNumberish,
      string,
      string,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "scaledBalanceOf",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "scaledTotalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "DEBT_TOKEN_REVISION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "POOL", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "UNDERLYING_ASSET_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "approveDelegation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "borrowAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decreaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIncentivesController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getScaledUserBalanceAndSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "scaledBalanceOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "scaledTotalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
}

export namespace ApprovalEvent {
  export type InputTuple = [
    owner: AddressLike,
    spender: AddressLike,
    value: BigNumberish
  ];
  export type OutputTuple = [owner: string, spender: string, value: bigint];
  export interface OutputObject {
    owner: string;
    spender: string;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BorrowAllowanceDelegatedEvent {
  export type InputTuple = [
    fromUser: AddressLike,
    toUser: AddressLike,
    asset: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [
    fromUser: string,
    toUser: string,
    asset: string,
    amount: bigint
  ];
  export interface OutputObject {
    fromUser: string;
    toUser: string;
    asset: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BurnEvent {
  export type InputTuple = [
    user: AddressLike,
    amount: BigNumberish,
    index: BigNumberish
  ];
  export type OutputTuple = [user: string, amount: bigint, index: bigint];
  export interface OutputObject {
    user: string;
    amount: bigint;
    index: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InitializedEvent {
  export type InputTuple = [
    underlyingAsset: AddressLike,
    pool: AddressLike,
    incentivesController: AddressLike,
    debtTokenDecimals: BigNumberish,
    debtTokenName: string,
    debtTokenSymbol: string,
    params: BytesLike
  ];
  export type OutputTuple = [
    underlyingAsset: string,
    pool: string,
    incentivesController: string,
    debtTokenDecimals: bigint,
    debtTokenName: string,
    debtTokenSymbol: string,
    params: string
  ];
  export interface OutputObject {
    underlyingAsset: string;
    pool: string;
    incentivesController: string;
    debtTokenDecimals: bigint;
    debtTokenName: string;
    debtTokenSymbol: string;
    params: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MintEvent {
  export type InputTuple = [
    from: AddressLike,
    onBehalfOf: AddressLike,
    value: BigNumberish,
    index: BigNumberish
  ];
  export type OutputTuple = [
    from: string,
    onBehalfOf: string,
    value: bigint,
    index: bigint
  ];
  export interface OutputObject {
    from: string;
    onBehalfOf: string;
    value: bigint;
    index: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferEvent {
  export type InputTuple = [
    from: AddressLike,
    to: AddressLike,
    value: BigNumberish
  ];
  export type OutputTuple = [from: string, to: string, value: bigint];
  export interface OutputObject {
    from: string;
    to: string;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface VariableDebtToken extends BaseContract {
  connect(runner?: ContractRunner | null): VariableDebtToken;
  waitForDeployment(): Promise<this>;

  interface: VariableDebtTokenInterface;

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

  DEBT_TOKEN_REVISION: TypedContractMethod<[], [bigint], "view">;

  POOL: TypedContractMethod<[], [string], "view">;

  UNDERLYING_ASSET_ADDRESS: TypedContractMethod<[], [string], "view">;

  allowance: TypedContractMethod<
    [owner: AddressLike, spender: AddressLike],
    [bigint],
    "view"
  >;

  approve: TypedContractMethod<
    [spender: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  approveDelegation: TypedContractMethod<
    [delegatee: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  balanceOf: TypedContractMethod<[user: AddressLike], [bigint], "view">;

  borrowAllowance: TypedContractMethod<
    [fromUser: AddressLike, toUser: AddressLike],
    [bigint],
    "view"
  >;

  burn: TypedContractMethod<
    [user: AddressLike, amount: BigNumberish, index: BigNumberish],
    [void],
    "nonpayable"
  >;

  decimals: TypedContractMethod<[], [bigint], "view">;

  decreaseAllowance: TypedContractMethod<
    [spender: AddressLike, subtractedValue: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  getIncentivesController: TypedContractMethod<[], [string], "view">;

  getScaledUserBalanceAndSupply: TypedContractMethod<
    [user: AddressLike],
    [[bigint, bigint]],
    "view"
  >;

  increaseAllowance: TypedContractMethod<
    [spender: AddressLike, addedValue: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  initialize: TypedContractMethod<
    [
      pool: AddressLike,
      underlyingAsset: AddressLike,
      incentivesController: AddressLike,
      debtTokenDecimals: BigNumberish,
      debtTokenName: string,
      debtTokenSymbol: string,
      params: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  mint: TypedContractMethod<
    [
      user: AddressLike,
      onBehalfOf: AddressLike,
      amount: BigNumberish,
      index: BigNumberish
    ],
    [boolean],
    "nonpayable"
  >;

  name: TypedContractMethod<[], [string], "view">;

  scaledBalanceOf: TypedContractMethod<[user: AddressLike], [bigint], "view">;

  scaledTotalSupply: TypedContractMethod<[], [bigint], "view">;

  symbol: TypedContractMethod<[], [string], "view">;

  totalSupply: TypedContractMethod<[], [bigint], "view">;

  transfer: TypedContractMethod<
    [recipient: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  transferFrom: TypedContractMethod<
    [sender: AddressLike, recipient: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "DEBT_TOKEN_REVISION"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "POOL"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "UNDERLYING_ASSET_ADDRESS"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "allowance"
  ): TypedContractMethod<
    [owner: AddressLike, spender: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "approve"
  ): TypedContractMethod<
    [spender: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "approveDelegation"
  ): TypedContractMethod<
    [delegatee: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "balanceOf"
  ): TypedContractMethod<[user: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "borrowAllowance"
  ): TypedContractMethod<
    [fromUser: AddressLike, toUser: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "burn"
  ): TypedContractMethod<
    [user: AddressLike, amount: BigNumberish, index: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "decimals"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "decreaseAllowance"
  ): TypedContractMethod<
    [spender: AddressLike, subtractedValue: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getIncentivesController"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getScaledUserBalanceAndSupply"
  ): TypedContractMethod<[user: AddressLike], [[bigint, bigint]], "view">;
  getFunction(
    nameOrSignature: "increaseAllowance"
  ): TypedContractMethod<
    [spender: AddressLike, addedValue: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [
      pool: AddressLike,
      underlyingAsset: AddressLike,
      incentivesController: AddressLike,
      debtTokenDecimals: BigNumberish,
      debtTokenName: string,
      debtTokenSymbol: string,
      params: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "mint"
  ): TypedContractMethod<
    [
      user: AddressLike,
      onBehalfOf: AddressLike,
      amount: BigNumberish,
      index: BigNumberish
    ],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "name"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "scaledBalanceOf"
  ): TypedContractMethod<[user: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "scaledTotalSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "symbol"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "totalSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "transfer"
  ): TypedContractMethod<
    [recipient: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferFrom"
  ): TypedContractMethod<
    [sender: AddressLike, recipient: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  getEvent(
    key: "Approval"
  ): TypedContractEvent<
    ApprovalEvent.InputTuple,
    ApprovalEvent.OutputTuple,
    ApprovalEvent.OutputObject
  >;
  getEvent(
    key: "BorrowAllowanceDelegated"
  ): TypedContractEvent<
    BorrowAllowanceDelegatedEvent.InputTuple,
    BorrowAllowanceDelegatedEvent.OutputTuple,
    BorrowAllowanceDelegatedEvent.OutputObject
  >;
  getEvent(
    key: "Burn"
  ): TypedContractEvent<
    BurnEvent.InputTuple,
    BurnEvent.OutputTuple,
    BurnEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "Mint"
  ): TypedContractEvent<
    MintEvent.InputTuple,
    MintEvent.OutputTuple,
    MintEvent.OutputObject
  >;
  getEvent(
    key: "Transfer"
  ): TypedContractEvent<
    TransferEvent.InputTuple,
    TransferEvent.OutputTuple,
    TransferEvent.OutputObject
  >;

  filters: {
    "Approval(address,address,uint256)": TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;
    Approval: TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;

    "BorrowAllowanceDelegated(address,address,address,uint256)": TypedContractEvent<
      BorrowAllowanceDelegatedEvent.InputTuple,
      BorrowAllowanceDelegatedEvent.OutputTuple,
      BorrowAllowanceDelegatedEvent.OutputObject
    >;
    BorrowAllowanceDelegated: TypedContractEvent<
      BorrowAllowanceDelegatedEvent.InputTuple,
      BorrowAllowanceDelegatedEvent.OutputTuple,
      BorrowAllowanceDelegatedEvent.OutputObject
    >;

    "Burn(address,uint256,uint256)": TypedContractEvent<
      BurnEvent.InputTuple,
      BurnEvent.OutputTuple,
      BurnEvent.OutputObject
    >;
    Burn: TypedContractEvent<
      BurnEvent.InputTuple,
      BurnEvent.OutputTuple,
      BurnEvent.OutputObject
    >;

    "Initialized(address,address,address,uint8,string,string,bytes)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "Mint(address,address,uint256,uint256)": TypedContractEvent<
      MintEvent.InputTuple,
      MintEvent.OutputTuple,
      MintEvent.OutputObject
    >;
    Mint: TypedContractEvent<
      MintEvent.InputTuple,
      MintEvent.OutputTuple,
      MintEvent.OutputObject
    >;

    "Transfer(address,address,uint256)": TypedContractEvent<
      TransferEvent.InputTuple,
      TransferEvent.OutputTuple,
      TransferEvent.OutputObject
    >;
    Transfer: TypedContractEvent<
      TransferEvent.InputTuple,
      TransferEvent.OutputTuple,
      TransferEvent.OutputObject
    >;
  };
}
