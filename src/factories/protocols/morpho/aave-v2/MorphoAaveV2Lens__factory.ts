/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  MorphoAaveV2Lens,
  MorphoAaveV2LensInterface,
} from "../../../../protocols/morpho/aave-v2/MorphoAaveV2Lens";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_morpho",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "DEFAULT_LIQUIDATION_CLOSE_FACTOR",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "HEALTH_FACTOR_LIQUIDATION_THRESHOLD",
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
    name: "ST_ETH",
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
    name: "ST_ETH_BASE_REBASE_INDEX",
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
    name: "addressesProvider",
    outputs: [
      {
        internalType: "contract ILendingPoolAddressesProvider",
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
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "address",
        name: "_poolTokenBorrowed",
        type: "address",
      },
      {
        internalType: "address",
        name: "_poolTokenCollateral",
        type: "address",
      },
    ],
    name: "computeLiquidationRepayAmount",
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
    inputs: [
      {
        internalType: "address",
        name: "_poolToken",
        type: "address",
      },
    ],
    name: "getAdvancedMarketData",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "p2pSupplyIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "p2pBorrowIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "poolSupplyIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "poolBorrowIndex",
            type: "uint256",
          },
        ],
        internalType: "struct Types.Indexes",
        name: "indexes",
        type: "tuple",
      },
      {
        internalType: "uint32",
        name: "lastUpdateTimestamp",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "p2pSupplyDelta",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "p2pBorrowDelta",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllMarkets",
    outputs: [
      {
        internalType: "address[]",
        name: "marketsCreated",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_poolToken",
        type: "address",
      },
    ],
    name: "getAverageBorrowRatePerYear",
    outputs: [
      {
        internalType: "uint256",
        name: "avgBorrowRatePerYear",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "p2pBorrowAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "poolBorrowAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_poolToken",
        type: "address",
      },
    ],
    name: "getAverageSupplyRatePerYear",
    outputs: [
      {
        internalType: "uint256",
        name: "avgSupplyRatePerYear",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "p2pSupplyAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "poolSupplyAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_poolToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getCurrentBorrowBalanceInOf",
    outputs: [
      {
        internalType: "uint256",
        name: "balanceInP2P",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "balanceOnPool",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalBalance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_poolToken",
        type: "address",
      },
    ],
    name: "getCurrentP2PBorrowIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "p2pBorrowIndex",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_poolToken",
        type: "address",
      },
    ],
    name: "getCurrentP2PSupplyIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "p2pSupplyIndex",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_poolToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getCurrentSupplyBalanceInOf",
    outputs: [
      {
        internalType: "uint256",
        name: "balanceInP2P",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "balanceOnPool",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalBalance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_poolToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getCurrentUserBorrowRatePerYear",
    outputs: [
      {
        internalType: "uint256",
        name: "borrowRatePerYear",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_poolToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getCurrentUserSupplyRatePerYear",
    outputs: [
      {
        internalType: "uint256",
        name: "supplyRatePerYear",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getEnteredMarkets",
    outputs: [
      {
        internalType: "address[]",
        name: "enteredMarkets",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_poolToken",
        type: "address",
      },
    ],
    name: "getIndexes",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "p2pSupplyIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "p2pBorrowIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "poolSupplyIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "poolBorrowIndex",
            type: "uint256",
          },
        ],
        internalType: "struct Types.Indexes",
        name: "indexes",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_poolToken",
        type: "address",
      },
    ],
    name: "getMainMarketData",
    outputs: [
      {
        internalType: "uint256",
        name: "avgSupplyRatePerYear",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "avgBorrowRatePerYear",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "p2pSupplyAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "p2pBorrowAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "poolSupplyAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "poolBorrowAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_poolToken",
        type: "address",
      },
    ],
    name: "getMarketConfiguration",
    outputs: [
      {
        internalType: "address",
        name: "underlying",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isCreated",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "isP2PDisabled",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "isPaused",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "isPartiallyPaused",
        type: "bool",
      },
      {
        internalType: "uint16",
        name: "reserveFactor",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "p2pIndexCursor",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "loanToValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidationThreshold",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidationBonus",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "decimals",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_poolToken",
        type: "address",
      },
    ],
    name: "getMarketPauseStatus",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "isSupplyPaused",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isBorrowPaused",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isWithdrawPaused",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isRepayPaused",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isLiquidateCollateralPaused",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isLiquidateBorrowPaused",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isDeprecated",
            type: "bool",
          },
        ],
        internalType: "struct Types.MarketPauseStatus",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_poolToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "getNextUserBorrowRatePerYear",
    outputs: [
      {
        internalType: "uint256",
        name: "nextBorrowRatePerYear",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "balanceInP2P",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "balanceOnPool",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalBalance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_poolToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "getNextUserSupplyRatePerYear",
    outputs: [
      {
        internalType: "uint256",
        name: "nextSupplyRatePerYear",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "balanceInP2P",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "balanceOnPool",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalBalance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_poolToken",
        type: "address",
      },
    ],
    name: "getRatesPerYear",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
    name: "getTotalBorrow",
    outputs: [
      {
        internalType: "uint256",
        name: "p2pBorrowAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "poolBorrowAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalBorrowAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_poolToken",
        type: "address",
      },
    ],
    name: "getTotalMarketBorrow",
    outputs: [
      {
        internalType: "uint256",
        name: "p2pBorrowAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "poolBorrowAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_poolToken",
        type: "address",
      },
    ],
    name: "getTotalMarketSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "p2pSupplyAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "poolSupplyAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "p2pSupplyAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "poolSupplyAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalSupplyAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getUserBalanceStates",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "collateralEth",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "borrowableEth",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxDebtEth",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "debtEth",
            type: "uint256",
          },
        ],
        internalType: "struct Types.LiquidityData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getUserHealthFactor",
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
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "address",
        name: "_poolToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_withdrawnAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_borrowedAmount",
        type: "uint256",
      },
    ],
    name: "getUserHypotheticalBalanceStates",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "collateralEth",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "borrowableEth",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxDebtEth",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "debtEth",
            type: "uint256",
          },
        ],
        internalType: "struct Types.LiquidityData",
        name: "liquidityData",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "address",
        name: "_poolToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_withdrawnAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_borrowedAmount",
        type: "uint256",
      },
    ],
    name: "getUserHypotheticalHealthFactor",
    outputs: [
      {
        internalType: "uint256",
        name: "healthFactor",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "address",
        name: "_poolToken",
        type: "address",
      },
      {
        internalType: "contract IPriceOracleGetter",
        name: "_oracle",
        type: "address",
      },
    ],
    name: "getUserLiquidityDataForAsset",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "decimals",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tokenUnit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liquidationThreshold",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "ltv",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "underlyingPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "collateralEth",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "debtEth",
            type: "uint256",
          },
        ],
        internalType: "struct Types.AssetLiquidityData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "address",
        name: "_poolToken",
        type: "address",
      },
    ],
    name: "getUserMaxCapacitiesForAsset",
    outputs: [
      {
        internalType: "uint256",
        name: "withdrawable",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "borrowable",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "isLiquidatable",
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
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "address",
        name: "_poolToken",
        type: "address",
      },
    ],
    name: "isLiquidatable",
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
        internalType: "address",
        name: "_poolToken",
        type: "address",
      },
    ],
    name: "isMarketCreated",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isMarketCreatedAndNotPaused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isMarketCreatedAndNotPausedNorPartiallyPaused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "morpho",
    outputs: [
      {
        internalType: "contract IMorpho",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pool",
    outputs: [
      {
        internalType: "contract ILendingPool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class MorphoAaveV2Lens__factory {
  static readonly abi = _abi;
  static createInterface(): MorphoAaveV2LensInterface {
    return new Interface(_abi) as MorphoAaveV2LensInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MorphoAaveV2Lens {
    return new Contract(address, _abi, runner) as unknown as MorphoAaveV2Lens;
  }
}
