/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  MorphoAaveV3BulkerGateway,
  MorphoAaveV3BulkerGatewayInterface,
} from "../../../../protocols/morpho/aave-v3/MorphoAaveV3BulkerGateway";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "morpho",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AddressIsZero",
    type: "error",
  },
  {
    inputs: [],
    name: "AmountIsZero",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "nbActions",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "nbData",
        type: "uint256",
      },
    ],
    name: "InconsistentParameters",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyWETH",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToSelf",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "UnsafeApproval",
    type: "error",
  },
  {
    inputs: [],
    name: "UnsafeCast",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "enum IBulkerGateway.ActionType",
        name: "action",
        type: "uint8",
      },
    ],
    name: "UnsupportedAction",
    type: "error",
  },
  {
    inputs: [],
    name: "MORPHO",
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
    name: "WETH",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum IBulkerGateway.ActionType[]",
        name: "actions",
        type: "uint8[]",
      },
      {
        internalType: "bytes[]",
        name: "data",
        type: "bytes[]",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "stETH",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "wstETH",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

export class MorphoAaveV3BulkerGateway__factory {
  static readonly abi = _abi;
  static createInterface(): MorphoAaveV3BulkerGatewayInterface {
    return new utils.Interface(_abi) as MorphoAaveV3BulkerGatewayInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MorphoAaveV3BulkerGateway {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MorphoAaveV3BulkerGateway;
  }
}
