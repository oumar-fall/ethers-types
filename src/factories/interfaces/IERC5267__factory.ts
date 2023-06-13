/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { IERC5267, IERC5267Interface } from "../../interfaces/IERC5267";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    anonymous: false,
    inputs: [],
    name: "EIP712DomainChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      {
        internalType: "bytes1",
        name: "fields",
        type: "bytes1",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "version",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IERC5267__factory {
  static readonly abi = _abi;
  static createInterface(): IERC5267Interface {
    return new utils.Interface(_abi) as IERC5267Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC5267 {
    return new Contract(address, _abi, signerOrProvider) as IERC5267;
  }
}
