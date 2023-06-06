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
  PromiseOrValue,
} from "../common";

export interface VestingWalletInterface extends utils.Interface {
  functions: {
    "beneficiary()": FunctionFragment;
    "duration()": FunctionFragment;
    "end()": FunctionFragment;
    "releasable(address)": FunctionFragment;
    "releasable()": FunctionFragment;
    "release(address)": FunctionFragment;
    "release()": FunctionFragment;
    "released()": FunctionFragment;
    "released(address)": FunctionFragment;
    "start()": FunctionFragment;
    "vestedAmount(uint64)": FunctionFragment;
    "vestedAmount(address,uint64)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "beneficiary"
      | "duration"
      | "end"
      | "releasable(address)"
      | "releasable()"
      | "release(address)"
      | "release()"
      | "released()"
      | "released(address)"
      | "start"
      | "vestedAmount(uint64)"
      | "vestedAmount(address,uint64)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "beneficiary",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "duration", values?: undefined): string;
  encodeFunctionData(functionFragment: "end", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "releasable(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "releasable()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "release(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "release()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "released()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "released(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "start", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "vestedAmount(uint64)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "vestedAmount(address,uint64)",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "beneficiary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "duration", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "end", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "releasable(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "releasable()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "release(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "release()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "released()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "released(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "start", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "vestedAmount(uint64)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "vestedAmount(address,uint64)",
    data: BytesLike
  ): Result;

  events: {
    "ERC20Released(address,uint256)": EventFragment;
    "EtherReleased(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ERC20Released"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EtherReleased"): EventFragment;
}

export interface ERC20ReleasedEventObject {
  token: string;
  amount: BigNumber;
}
export type ERC20ReleasedEvent = TypedEvent<
  [string, BigNumber],
  ERC20ReleasedEventObject
>;

export type ERC20ReleasedEventFilter = TypedEventFilter<ERC20ReleasedEvent>;

export interface EtherReleasedEventObject {
  amount: BigNumber;
}
export type EtherReleasedEvent = TypedEvent<
  [BigNumber],
  EtherReleasedEventObject
>;

export type EtherReleasedEventFilter = TypedEventFilter<EtherReleasedEvent>;

export interface VestingWallet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VestingWalletInterface;

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
    beneficiary(overrides?: CallOverrides): Promise<[string]>;

    duration(overrides?: CallOverrides): Promise<[BigNumber]>;

    end(overrides?: CallOverrides): Promise<[BigNumber]>;

    "releasable(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "releasable()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    "release(address)"(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "release()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "released()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    "released(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    start(overrides?: CallOverrides): Promise<[BigNumber]>;

    "vestedAmount(uint64)"(
      timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "vestedAmount(address,uint64)"(
      token: PromiseOrValue<string>,
      timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  beneficiary(overrides?: CallOverrides): Promise<string>;

  duration(overrides?: CallOverrides): Promise<BigNumber>;

  end(overrides?: CallOverrides): Promise<BigNumber>;

  "releasable(address)"(
    token: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "releasable()"(overrides?: CallOverrides): Promise<BigNumber>;

  "release(address)"(
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "release()"(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "released()"(overrides?: CallOverrides): Promise<BigNumber>;

  "released(address)"(
    token: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  start(overrides?: CallOverrides): Promise<BigNumber>;

  "vestedAmount(uint64)"(
    timestamp: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "vestedAmount(address,uint64)"(
    token: PromiseOrValue<string>,
    timestamp: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    beneficiary(overrides?: CallOverrides): Promise<string>;

    duration(overrides?: CallOverrides): Promise<BigNumber>;

    end(overrides?: CallOverrides): Promise<BigNumber>;

    "releasable(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "releasable()"(overrides?: CallOverrides): Promise<BigNumber>;

    "release(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "release()"(overrides?: CallOverrides): Promise<void>;

    "released()"(overrides?: CallOverrides): Promise<BigNumber>;

    "released(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    start(overrides?: CallOverrides): Promise<BigNumber>;

    "vestedAmount(uint64)"(
      timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "vestedAmount(address,uint64)"(
      token: PromiseOrValue<string>,
      timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "ERC20Released(address,uint256)"(
      token?: PromiseOrValue<string> | null,
      amount?: null
    ): ERC20ReleasedEventFilter;
    ERC20Released(
      token?: PromiseOrValue<string> | null,
      amount?: null
    ): ERC20ReleasedEventFilter;

    "EtherReleased(uint256)"(amount?: null): EtherReleasedEventFilter;
    EtherReleased(amount?: null): EtherReleasedEventFilter;
  };

  estimateGas: {
    beneficiary(overrides?: CallOverrides): Promise<BigNumber>;

    duration(overrides?: CallOverrides): Promise<BigNumber>;

    end(overrides?: CallOverrides): Promise<BigNumber>;

    "releasable(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "releasable()"(overrides?: CallOverrides): Promise<BigNumber>;

    "release(address)"(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "release()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "released()"(overrides?: CallOverrides): Promise<BigNumber>;

    "released(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    start(overrides?: CallOverrides): Promise<BigNumber>;

    "vestedAmount(uint64)"(
      timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "vestedAmount(address,uint64)"(
      token: PromiseOrValue<string>,
      timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    beneficiary(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    duration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    end(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "releasable(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "releasable()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "release(address)"(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "release()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "released()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "released(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    start(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "vestedAmount(uint64)"(
      timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "vestedAmount(address,uint64)"(
      token: PromiseOrValue<string>,
      timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
