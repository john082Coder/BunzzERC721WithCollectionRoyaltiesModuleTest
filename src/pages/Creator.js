import { Button, Col, Container, Row, Form, Spinner } from "react-bootstrap";
import React, { useState,  } from "react";

import useBunzz from '../hooks/useBunzz';

import { getERC721WithCollectionRoyaltiesContract, mintWithRoyalty, tokenURI, getRoyalty  } from '../contracts/utils'
import { useWeb3React } from "@web3-react/core";

import { bnToDec, isAddress } from "../utils";
const Creator = () => {
    const bunzz = useBunzz();
    const { account} = useWeb3React();
    const ERC721WithCollectionRoyaltiesContract = getERC721WithCollectionRoyaltiesContract(bunzz);

    const [mintAddress, setMintAddress] = useState("");
    const [mintId, setMintId] = useState(0);
    const [tokenId, setTokenId] = useState(0);
    const [tokenURIString, setTokenURIString] = useState("");
    const [royaltyRecipient, setRoyaltyRecipeint] = useState("");
    const [royaltyRate, setRoyaltyRate] = useState(0);
  

    const [pendingMint, setPendingMint] = useState(false);
    const [pendingTokenURI, setPendingTokenURI] = useState(false);
    const [pendingGetRoyalty, setPendingGetRoyalty] = useState(false);

    const [uriString, setUriString] = useState("");
    const [royaltyString, setRoyaltyString] = useState([]);
  
  
   
    return (
        <Container>
            <Row className="justify-content-center mt-5">
                <Col lg="4" md="4" xs="12">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Input Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter Address" value={mintAddress} onChange={(val) => setMintAddress(val.target.value)} />
                            <Form.Label>Input Id</Form.Label>
                            <Form.Control type="email" placeholder="Enter Id" value={mintId} onChange={(val) => setMintId(val.target.value)} />
                            <Form.Label>Input TokenURI</Form.Label>
                            <Form.Control type="email" placeholder="Enter URI" value={tokenURIString} onChange={(val) => setTokenURIString(val.target.value)} />
                            <Form.Label>Input RoyaltyRecipient</Form.Label>
                            <Form.Control type="email" placeholder="Enter address" value={royaltyRecipient} onChange={(val) => setRoyaltyRecipeint(val.target.value)} />
                            <Form.Label>Input RoyaltyRate</Form.Label>
                            <Form.Control type="email" placeholder="Enter rate" value={royaltyRate} onChange={(val) => setRoyaltyRate(val.target.value)} />
                        </Form.Group>
                            {!pendingMint ?
                                <Button className="mx-3 mt-2" variant="dark" onClick={async () => {
                                    setPendingMint(true);
                                try {
                                    let txHash;
                                    
                                    txHash = await mintWithRoyalty(
                                        ERC721WithCollectionRoyaltiesContract,
                                        mintAddress,
                                        mintId,
                                        tokenURIString,
                                        royaltyRecipient,
                                        royaltyRate,
                                        account,
                                    );
                                
                                    console.log(txHash);
                                    setPendingMint(false);
                                    
                                } catch (e) {
                                    console.log(e);
                                    setPendingMint(false);
                                    
                                }
                            }}>
                                Mint
                            </Button>
                            :
                            <Button className="mx-3 mt-2" variant="dark">
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />{` `} Mint
                            </Button>
                        }
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Input tokenId</Form.Label>
                            <Form.Control type="email" placeholder="Enter token id" value={tokenId} onChange={(val) => setTokenId(val.target.value)} />
                        </Form.Group>

                        {!pendingTokenURI ?
                                <Button className="mx-3 mt-2" variant="dark" onClick={async () => {
                                    setPendingTokenURI(true);
                                try {
                                    let uri;
                                    
                                    uri = await tokenURI(
                                        ERC721WithCollectionRoyaltiesContract,
                                        tokenId
                                    );
                                        setUriString(uri);
                                    console.log("uri = ", uri);
                                    setPendingTokenURI(false);
                                    
                                } catch (e) {
                                    console.log(e);
                                    setPendingTokenURI(false);
                                    
                                }
                            }}>
                                TokenURI
                            </Button>
                            :
                            <Button className="mx-3 mt-2" variant="dark">
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />{` `} TokenURI
                            </Button>
                        }
                        {!pendingGetRoyalty ?
                                <Button className="mx-3 mt-2" variant="dark" onClick={async () => {
                                    setPendingGetRoyalty(true);
                                try {
                                    let royalty;
                                    
                                    royalty = await getRoyalty(
                                        ERC721WithCollectionRoyaltiesContract,
                                        tokenId
                                    );
                                        setRoyaltyString(royalty);
                                    console.log("uri = ", royalty[0]);
                                    setPendingGetRoyalty(false);
                                    
                                } catch (e) {
                                    console.log(e);
                                    setPendingGetRoyalty(false);
                                    
                                }
                            }}>
                                GetRoyalty
                            </Button>
                            :
                            <Button className="mx-3 mt-2" variant="dark">
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />{` `} GetRoyalty
                            </Button>
                        }
                    </Form>
                    <div>{uriString}</div>
                    <div>RoyaltyRecipientAddress:{royaltyString[0]}</div>
                    <div>RoyaltyRate:{royaltyString[1]}</div>
                   


                </Col>
            </Row>
        </Container>
    )
}

export default Creator;