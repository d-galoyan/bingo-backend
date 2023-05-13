/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "ConfirmedOwner",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ConfirmedOwner__factory>;
    getContractFactory(
      name: "ConfirmedOwnerWithProposal",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ConfirmedOwnerWithProposal__factory>;
    getContractFactory(
      name: "LinkTokenInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LinkTokenInterface__factory>;
    getContractFactory(
      name: "OwnableInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnableInterface__factory>;
    getContractFactory(
      name: "VRFCoordinatorV2Interface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VRFCoordinatorV2Interface__factory>;
    getContractFactory(
      name: "VRFConsumerBaseV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VRFConsumerBaseV2__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "Constants",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Constants__factory>;
    getContractFactory(
      name: "IERC20WithDecimal",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20WithDecimal__factory>;
    getContractFactory(
      name: "Lottery",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Lottery__factory>;
    getContractFactory(
      name: "NoEther",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NoEther__factory>;
    getContractFactory(
      name: "USDT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.USDT__factory>;
    getContractFactory(
      name: "VRFCoordinatorV2Mock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VRFCoordinatorV2Mock__factory>;
    getContractFactory(
      name: "VRFv2SubscriptionConsumer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VRFv2SubscriptionConsumer__factory>;

    getContractAt(
      name: "ConfirmedOwner",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ConfirmedOwner>;
    getContractAt(
      name: "ConfirmedOwnerWithProposal",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ConfirmedOwnerWithProposal>;
    getContractAt(
      name: "LinkTokenInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LinkTokenInterface>;
    getContractAt(
      name: "OwnableInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnableInterface>;
    getContractAt(
      name: "VRFCoordinatorV2Interface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VRFCoordinatorV2Interface>;
    getContractAt(
      name: "VRFConsumerBaseV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VRFConsumerBaseV2>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "Constants",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Constants>;
    getContractAt(
      name: "IERC20WithDecimal",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20WithDecimal>;
    getContractAt(
      name: "Lottery",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Lottery>;
    getContractAt(
      name: "NoEther",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NoEther>;
    getContractAt(
      name: "USDT",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.USDT>;
    getContractAt(
      name: "VRFCoordinatorV2Mock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VRFCoordinatorV2Mock>;
    getContractAt(
      name: "VRFv2SubscriptionConsumer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VRFv2SubscriptionConsumer>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}