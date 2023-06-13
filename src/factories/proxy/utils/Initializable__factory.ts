/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  Initializable,
  InitializableInterface,
} from "../../../proxy/utils/Initializable";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
] as const;

export class Initializable__factory {
  static readonly abi = _abi;
  static createInterface(): InitializableInterface {
    return new utils.Interface(_abi) as InitializableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Initializable {
    return new Contract(address, _abi, signerOrProvider) as Initializable;
  }
}
