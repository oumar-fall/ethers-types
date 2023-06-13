/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  UiIncentiveDataProviderV2V3,
  UiIncentiveDataProviderV2V3Interface,
} from "../../../../../protocols/aave/protocol-v2/misc/UiIncentiveDataProviderV2V3";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "MKRAddress",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "_bytes32",
        type: "bytes32",
      },
    ],
    name: "bytes32ToString",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ILendingPoolAddressesProvider",
        name: "provider",
        type: "address",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getFullReservesIncentiveData",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "underlyingAsset",
            type: "address",
          },
          {
            components: [
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "incentiveControllerAddress",
                type: "address",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "rewardTokenSymbol",
                    type: "string",
                  },
                  {
                    internalType: "address",
                    name: "rewardTokenAddress",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "rewardOracleAddress",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "emissionPerSecond",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "incentivesLastUpdateTimestamp",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "tokenIncentivesIndex",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "emissionEndTimestamp",
                    type: "uint256",
                  },
                  {
                    internalType: "int256",
                    name: "rewardPriceFeed",
                    type: "int256",
                  },
                  {
                    internalType: "uint8",
                    name: "rewardTokenDecimals",
                    type: "uint8",
                  },
                  {
                    internalType: "uint8",
                    name: "precision",
                    type: "uint8",
                  },
                  {
                    internalType: "uint8",
                    name: "priceFeedDecimals",
                    type: "uint8",
                  },
                ],
                internalType: "struct IUiIncentiveDataProviderV3.RewardInfo[]",
                name: "rewardsTokenInformation",
                type: "tuple[]",
              },
            ],
            internalType: "struct IUiIncentiveDataProviderV3.IncentiveData",
            name: "aIncentiveData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "incentiveControllerAddress",
                type: "address",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "rewardTokenSymbol",
                    type: "string",
                  },
                  {
                    internalType: "address",
                    name: "rewardTokenAddress",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "rewardOracleAddress",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "emissionPerSecond",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "incentivesLastUpdateTimestamp",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "tokenIncentivesIndex",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "emissionEndTimestamp",
                    type: "uint256",
                  },
                  {
                    internalType: "int256",
                    name: "rewardPriceFeed",
                    type: "int256",
                  },
                  {
                    internalType: "uint8",
                    name: "rewardTokenDecimals",
                    type: "uint8",
                  },
                  {
                    internalType: "uint8",
                    name: "precision",
                    type: "uint8",
                  },
                  {
                    internalType: "uint8",
                    name: "priceFeedDecimals",
                    type: "uint8",
                  },
                ],
                internalType: "struct IUiIncentiveDataProviderV3.RewardInfo[]",
                name: "rewardsTokenInformation",
                type: "tuple[]",
              },
            ],
            internalType: "struct IUiIncentiveDataProviderV3.IncentiveData",
            name: "vIncentiveData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "incentiveControllerAddress",
                type: "address",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "rewardTokenSymbol",
                    type: "string",
                  },
                  {
                    internalType: "address",
                    name: "rewardTokenAddress",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "rewardOracleAddress",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "emissionPerSecond",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "incentivesLastUpdateTimestamp",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "tokenIncentivesIndex",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "emissionEndTimestamp",
                    type: "uint256",
                  },
                  {
                    internalType: "int256",
                    name: "rewardPriceFeed",
                    type: "int256",
                  },
                  {
                    internalType: "uint8",
                    name: "rewardTokenDecimals",
                    type: "uint8",
                  },
                  {
                    internalType: "uint8",
                    name: "precision",
                    type: "uint8",
                  },
                  {
                    internalType: "uint8",
                    name: "priceFeedDecimals",
                    type: "uint8",
                  },
                ],
                internalType: "struct IUiIncentiveDataProviderV3.RewardInfo[]",
                name: "rewardsTokenInformation",
                type: "tuple[]",
              },
            ],
            internalType: "struct IUiIncentiveDataProviderV3.IncentiveData",
            name: "sIncentiveData",
            type: "tuple",
          },
        ],
        internalType:
          "struct IUiIncentiveDataProviderV3.AggregatedReserveIncentiveData[]",
        name: "",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "address",
            name: "underlyingAsset",
            type: "address",
          },
          {
            components: [
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "incentiveControllerAddress",
                type: "address",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "rewardTokenSymbol",
                    type: "string",
                  },
                  {
                    internalType: "address",
                    name: "rewardOracleAddress",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "rewardTokenAddress",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "userUnclaimedRewards",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "tokenIncentivesUserIndex",
                    type: "uint256",
                  },
                  {
                    internalType: "int256",
                    name: "rewardPriceFeed",
                    type: "int256",
                  },
                  {
                    internalType: "uint8",
                    name: "priceFeedDecimals",
                    type: "uint8",
                  },
                  {
                    internalType: "uint8",
                    name: "rewardTokenDecimals",
                    type: "uint8",
                  },
                ],
                internalType:
                  "struct IUiIncentiveDataProviderV3.UserRewardInfo[]",
                name: "userRewardsInformation",
                type: "tuple[]",
              },
            ],
            internalType: "struct IUiIncentiveDataProviderV3.UserIncentiveData",
            name: "aTokenIncentivesUserData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "incentiveControllerAddress",
                type: "address",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "rewardTokenSymbol",
                    type: "string",
                  },
                  {
                    internalType: "address",
                    name: "rewardOracleAddress",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "rewardTokenAddress",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "userUnclaimedRewards",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "tokenIncentivesUserIndex",
                    type: "uint256",
                  },
                  {
                    internalType: "int256",
                    name: "rewardPriceFeed",
                    type: "int256",
                  },
                  {
                    internalType: "uint8",
                    name: "priceFeedDecimals",
                    type: "uint8",
                  },
                  {
                    internalType: "uint8",
                    name: "rewardTokenDecimals",
                    type: "uint8",
                  },
                ],
                internalType:
                  "struct IUiIncentiveDataProviderV3.UserRewardInfo[]",
                name: "userRewardsInformation",
                type: "tuple[]",
              },
            ],
            internalType: "struct IUiIncentiveDataProviderV3.UserIncentiveData",
            name: "vTokenIncentivesUserData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "incentiveControllerAddress",
                type: "address",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "rewardTokenSymbol",
                    type: "string",
                  },
                  {
                    internalType: "address",
                    name: "rewardOracleAddress",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "rewardTokenAddress",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "userUnclaimedRewards",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "tokenIncentivesUserIndex",
                    type: "uint256",
                  },
                  {
                    internalType: "int256",
                    name: "rewardPriceFeed",
                    type: "int256",
                  },
                  {
                    internalType: "uint8",
                    name: "priceFeedDecimals",
                    type: "uint8",
                  },
                  {
                    internalType: "uint8",
                    name: "rewardTokenDecimals",
                    type: "uint8",
                  },
                ],
                internalType:
                  "struct IUiIncentiveDataProviderV3.UserRewardInfo[]",
                name: "userRewardsInformation",
                type: "tuple[]",
              },
            ],
            internalType: "struct IUiIncentiveDataProviderV3.UserIncentiveData",
            name: "sTokenIncentivesUserData",
            type: "tuple",
          },
        ],
        internalType:
          "struct IUiIncentiveDataProviderV3.UserReserveIncentiveData[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ILendingPoolAddressesProvider",
        name: "provider",
        type: "address",
      },
    ],
    name: "getReservesIncentivesData",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "underlyingAsset",
            type: "address",
          },
          {
            components: [
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "incentiveControllerAddress",
                type: "address",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "rewardTokenSymbol",
                    type: "string",
                  },
                  {
                    internalType: "address",
                    name: "rewardTokenAddress",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "rewardOracleAddress",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "emissionPerSecond",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "incentivesLastUpdateTimestamp",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "tokenIncentivesIndex",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "emissionEndTimestamp",
                    type: "uint256",
                  },
                  {
                    internalType: "int256",
                    name: "rewardPriceFeed",
                    type: "int256",
                  },
                  {
                    internalType: "uint8",
                    name: "rewardTokenDecimals",
                    type: "uint8",
                  },
                  {
                    internalType: "uint8",
                    name: "precision",
                    type: "uint8",
                  },
                  {
                    internalType: "uint8",
                    name: "priceFeedDecimals",
                    type: "uint8",
                  },
                ],
                internalType: "struct IUiIncentiveDataProviderV3.RewardInfo[]",
                name: "rewardsTokenInformation",
                type: "tuple[]",
              },
            ],
            internalType: "struct IUiIncentiveDataProviderV3.IncentiveData",
            name: "aIncentiveData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "incentiveControllerAddress",
                type: "address",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "rewardTokenSymbol",
                    type: "string",
                  },
                  {
                    internalType: "address",
                    name: "rewardTokenAddress",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "rewardOracleAddress",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "emissionPerSecond",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "incentivesLastUpdateTimestamp",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "tokenIncentivesIndex",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "emissionEndTimestamp",
                    type: "uint256",
                  },
                  {
                    internalType: "int256",
                    name: "rewardPriceFeed",
                    type: "int256",
                  },
                  {
                    internalType: "uint8",
                    name: "rewardTokenDecimals",
                    type: "uint8",
                  },
                  {
                    internalType: "uint8",
                    name: "precision",
                    type: "uint8",
                  },
                  {
                    internalType: "uint8",
                    name: "priceFeedDecimals",
                    type: "uint8",
                  },
                ],
                internalType: "struct IUiIncentiveDataProviderV3.RewardInfo[]",
                name: "rewardsTokenInformation",
                type: "tuple[]",
              },
            ],
            internalType: "struct IUiIncentiveDataProviderV3.IncentiveData",
            name: "vIncentiveData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "incentiveControllerAddress",
                type: "address",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "rewardTokenSymbol",
                    type: "string",
                  },
                  {
                    internalType: "address",
                    name: "rewardTokenAddress",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "rewardOracleAddress",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "emissionPerSecond",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "incentivesLastUpdateTimestamp",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "tokenIncentivesIndex",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "emissionEndTimestamp",
                    type: "uint256",
                  },
                  {
                    internalType: "int256",
                    name: "rewardPriceFeed",
                    type: "int256",
                  },
                  {
                    internalType: "uint8",
                    name: "rewardTokenDecimals",
                    type: "uint8",
                  },
                  {
                    internalType: "uint8",
                    name: "precision",
                    type: "uint8",
                  },
                  {
                    internalType: "uint8",
                    name: "priceFeedDecimals",
                    type: "uint8",
                  },
                ],
                internalType: "struct IUiIncentiveDataProviderV3.RewardInfo[]",
                name: "rewardsTokenInformation",
                type: "tuple[]",
              },
            ],
            internalType: "struct IUiIncentiveDataProviderV3.IncentiveData",
            name: "sIncentiveData",
            type: "tuple",
          },
        ],
        internalType:
          "struct IUiIncentiveDataProviderV3.AggregatedReserveIncentiveData[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "rewardToken",
        type: "address",
      },
    ],
    name: "getSymbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ILendingPoolAddressesProvider",
        name: "provider",
        type: "address",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getUserReservesIncentivesData",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "underlyingAsset",
            type: "address",
          },
          {
            components: [
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "incentiveControllerAddress",
                type: "address",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "rewardTokenSymbol",
                    type: "string",
                  },
                  {
                    internalType: "address",
                    name: "rewardOracleAddress",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "rewardTokenAddress",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "userUnclaimedRewards",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "tokenIncentivesUserIndex",
                    type: "uint256",
                  },
                  {
                    internalType: "int256",
                    name: "rewardPriceFeed",
                    type: "int256",
                  },
                  {
                    internalType: "uint8",
                    name: "priceFeedDecimals",
                    type: "uint8",
                  },
                  {
                    internalType: "uint8",
                    name: "rewardTokenDecimals",
                    type: "uint8",
                  },
                ],
                internalType:
                  "struct IUiIncentiveDataProviderV3.UserRewardInfo[]",
                name: "userRewardsInformation",
                type: "tuple[]",
              },
            ],
            internalType: "struct IUiIncentiveDataProviderV3.UserIncentiveData",
            name: "aTokenIncentivesUserData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "incentiveControllerAddress",
                type: "address",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "rewardTokenSymbol",
                    type: "string",
                  },
                  {
                    internalType: "address",
                    name: "rewardOracleAddress",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "rewardTokenAddress",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "userUnclaimedRewards",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "tokenIncentivesUserIndex",
                    type: "uint256",
                  },
                  {
                    internalType: "int256",
                    name: "rewardPriceFeed",
                    type: "int256",
                  },
                  {
                    internalType: "uint8",
                    name: "priceFeedDecimals",
                    type: "uint8",
                  },
                  {
                    internalType: "uint8",
                    name: "rewardTokenDecimals",
                    type: "uint8",
                  },
                ],
                internalType:
                  "struct IUiIncentiveDataProviderV3.UserRewardInfo[]",
                name: "userRewardsInformation",
                type: "tuple[]",
              },
            ],
            internalType: "struct IUiIncentiveDataProviderV3.UserIncentiveData",
            name: "vTokenIncentivesUserData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "tokenAddress",
                type: "address",
              },
              {
                internalType: "address",
                name: "incentiveControllerAddress",
                type: "address",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "rewardTokenSymbol",
                    type: "string",
                  },
                  {
                    internalType: "address",
                    name: "rewardOracleAddress",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "rewardTokenAddress",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "userUnclaimedRewards",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "tokenIncentivesUserIndex",
                    type: "uint256",
                  },
                  {
                    internalType: "int256",
                    name: "rewardPriceFeed",
                    type: "int256",
                  },
                  {
                    internalType: "uint8",
                    name: "priceFeedDecimals",
                    type: "uint8",
                  },
                  {
                    internalType: "uint8",
                    name: "rewardTokenDecimals",
                    type: "uint8",
                  },
                ],
                internalType:
                  "struct IUiIncentiveDataProviderV3.UserRewardInfo[]",
                name: "userRewardsInformation",
                type: "tuple[]",
              },
            ],
            internalType: "struct IUiIncentiveDataProviderV3.UserIncentiveData",
            name: "sTokenIncentivesUserData",
            type: "tuple",
          },
        ],
        internalType:
          "struct IUiIncentiveDataProviderV3.UserReserveIncentiveData[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class UiIncentiveDataProviderV2V3__factory {
  static readonly abi = _abi;
  static createInterface(): UiIncentiveDataProviderV2V3Interface {
    return new utils.Interface(_abi) as UiIncentiveDataProviderV2V3Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UiIncentiveDataProviderV2V3 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as UiIncentiveDataProviderV2V3;
  }
}
