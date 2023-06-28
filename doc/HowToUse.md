## Preparation before deployment

## Get started(Operation)
1. Deploy the ERC721WithCollectionRoyalties contract by providing the name and symbol of your ERC721 token collection.
2. Call the 'mintWithRoyalty' function to mint a new token, specifying the recipient's address, token ID, token URI, royalty recipient, and royalty rate.
3. Use the 'getRoyalty' function to retrieve the royalty information (recipient and rate) for a specific token by providing its token ID.
4. When necessary, override the '_burn' and 'tokenURI' functions to ensure compatibility with the ERC721URIStorage contract.
5. Interact with the contract as you would with a standard ERC721 contract, using the provided functions for managing and transferring tokens.






