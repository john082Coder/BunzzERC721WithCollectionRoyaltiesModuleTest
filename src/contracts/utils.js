import { ethers } from 'ethers';

import BigNumber from 'bignumber.js';
import { useWeb3React } from "@web3-react/core";
import {
  // SUBTRACT_GAS_LIMIT,
  contractAddresses,
} from './lib/constants.js';
import { bnToDec } from './utils';
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
});



export const getERC721WithCollectionRoyaltiesContract = (bunzz) => {
  return bunzz && bunzz.contracts && bunzz.contracts.ERC721WithCollectionRoyalties;
}

export const setErc20ContractAddress = (bunzz, address) => {
  bunzz.contracts.erc20.options.address = address;
}


export const mintWithRoyalty = async (ERC721WithCollectionRoyaltiesContract, to, tokenId, tokenURI, royaltyRecipient, royaltyRate, account) => {
  return ERC721WithCollectionRoyaltiesContract.methods.mintWithRoyalty(to, tokenId, tokenURI, royaltyRecipient, royaltyRate).send({ from: account})
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}

export const tokenURI = async (ERC721WithCollectionRoyaltiesContract, tokenId ) => {
  
  try {
    const uri = await ERC721WithCollectionRoyaltiesContract.methods.tokenURI(tokenId).call();
    return uri;
  } catch {
    console.log("error");
    return "";
  }

}

export const getRoyalty = async (ERC721WithCollectionRoyaltiesContract, tokenId ) => {
  
  try {
    const royalty = await ERC721WithCollectionRoyaltiesContract.methods.getRoyalty(tokenId).call();
    console.log("royalty = ", royalty);
    return royalty;
  } catch {
    console.log("error");
    return "";
  }

}

