/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  PriceOracleSentinel,
  PriceOracleSentinelInterface,
} from "../../../../../../protocols/aave/protocol-v3/protocol/configuration/PriceOracleSentinel";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IPoolAddressesProvider",
        name: "provider",
        type: "address",
      },
      {
        internalType: "contract ISequencerOracle",
        name: "oracle",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "gracePeriod",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newGracePeriod",
        type: "uint256",
      },
    ],
    name: "GracePeriodUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newSequencerOracle",
        type: "address",
      },
    ],
    name: "SequencerOracleUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "ADDRESSES_PROVIDER",
    outputs: [
      {
        internalType: "contract IPoolAddressesProvider",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getGracePeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSequencerOracle",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isBorrowAllowed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isLiquidationAllowed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newGracePeriod",
        type: "uint256",
      },
    ],
    name: "setGracePeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newSequencerOracle",
        type: "address",
      },
    ],
    name: "setSequencerOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class PriceOracleSentinel__factory {
  static readonly abi = _abi;
  static createInterface(): PriceOracleSentinelInterface {
    return new Interface(_abi) as PriceOracleSentinelInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): PriceOracleSentinel {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as PriceOracleSentinel;
  }
}
