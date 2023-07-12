## Approval
Emitted when owner enables approved to manage the tokenId token.

|Name|Type|Description|
|--- |---|---|
|owner|address|The address of the token owner|
|approved|address|The address of the approved account|
|tokenId|uint256|The id of the token which has been approved|

## ApprovalForAll
Emitted when owner enables or disables (approved) operator to manage all of its assets.

|Name|Type|Description|
|--- |---|---|
|owner|address|The address of the token owner|
|operator|address|The account that will be the balance operator|
|approved|bool|Approval status|

## Transfer
Emitted when tokenId token is transferred from from to to.

|Name|Type|Description|
|--- |---|---|
|from|address|The address of the sender account|
|to|address|The address of the receiver account|
|tokenId|uint256|The id of the token which has been transferred|
