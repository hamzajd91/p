import React from "react";
import "../components/CompleteCheckout/CompleteCheckout.css";
import pika from "../Assets/pika.png";
import ButtonStyled from "../reusableComponents/Buttons/ButtonStyled";
import Heading2 from "../reusableComponents/Headings/Heading2";
import Heading1 from "../reusableComponents/Headings/Heading1";
import Styled_text from "../reusableComponents/styled_text/Styled_text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Moralis } from "moralis";

import { Image, Modal } from "react-bootstrap";
const TOKEN_CONTRACT_ADDRESS = "0x93474C14da734b1Fd20FB91233fA0f17aCdB4747";
function CompleteCheckout({
  carddescription,
  ShowCompleteCheckOut,
  setShowCompleteCheckOut,
}) {
  const handleClose = () => setShowCompleteCheckOut(false);
  const handleShow = () => setShowCompleteCheckOut(true);

  // var kraft = [
  //   {
  //     "anonymous": false,
  //     "inputs": [
  //       {
  //         "indexed": true,
  //         "internalType": "address",
  //         "name": "account",
  //         "type": "address"
  //       },
  //       {
  //         "indexed": true,
  //         "internalType": "address",
  //         "name": "operator",
  //         "type": "address"
  //       },
  //       {
  //         "indexed": false,
  //         "internalType": "bool",
  //         "name": "approved",
  //         "type": "bool"
  //       }
  //     ],
  //     "name": "ApprovalForAll",
  //     "type": "event"
  //   },
  //   {
  //     "anonymous": false,
  //     "inputs": [
  //       {
  //         "indexed": true,
  //         "internalType": "address",
  //         "name": "creator",
  //         "type": "address"
  //       },
  //       {
  //         "indexed": true,
  //         "internalType": "uint256",
  //         "name": "tokenId",
  //         "type": "uint256"
  //       },
  //       {
  //         "indexed": false,
  //         "internalType": "uint256",
  //         "name": "maxSupply",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "Created",
  //     "type": "event"
  //   },
  //   {
  //     "anonymous": false,
  //     "inputs": [
  //       {
  //         "indexed": true,
  //         "internalType": "bytes32",
  //         "name": "role",
  //         "type": "bytes32"
  //       },
  //       {
  //         "indexed": true,
  //         "internalType": "bytes32",
  //         "name": "previousAdminRole",
  //         "type": "bytes32"
  //       },
  //       {
  //         "indexed": true,
  //         "internalType": "bytes32",
  //         "name": "newAdminRole",
  //         "type": "bytes32"
  //       }
  //     ],
  //     "name": "RoleAdminChanged",
  //     "type": "event"
  //   },
  //   {
  //     "anonymous": false,
  //     "inputs": [
  //       {
  //         "indexed": true,
  //         "internalType": "bytes32",
  //         "name": "role",
  //         "type": "bytes32"
  //       },
  //       {
  //         "indexed": true,
  //         "internalType": "address",
  //         "name": "account",
  //         "type": "address"
  //       },
  //       {
  //         "indexed": true,
  //         "internalType": "address",
  //         "name": "sender",
  //         "type": "address"
  //       }
  //     ],
  //     "name": "RoleGranted",
  //     "type": "event"
  //   },
  //   {
  //     "anonymous": false,
  //     "inputs": [
  //       {
  //         "indexed": true,
  //         "internalType": "bytes32",
  //         "name": "role",
  //         "type": "bytes32"
  //       },
  //       {
  //         "indexed": true,
  //         "internalType": "address",
  //         "name": "account",
  //         "type": "address"
  //       },
  //       {
  //         "indexed": true,
  //         "internalType": "address",
  //         "name": "sender",
  //         "type": "address"
  //       }
  //     ],
  //     "name": "RoleRevoked",
  //     "type": "event"
  //   },
  //   {
  //     "anonymous": false,
  //     "inputs": [
  //       {
  //         "indexed": true,
  //         "internalType": "address",
  //         "name": "operator",
  //         "type": "address"
  //       },
  //       {
  //         "indexed": true,
  //         "internalType": "address",
  //         "name": "from",
  //         "type": "address"
  //       },
  //       {
  //         "indexed": true,
  //         "internalType": "address",
  //         "name": "to",
  //         "type": "address"
  //       },
  //       {
  //         "indexed": false,
  //         "internalType": "uint256[]",
  //         "name": "ids",
  //         "type": "uint256[]"
  //       },
  //       {
  //         "indexed": false,
  //         "internalType": "uint256[]",
  //         "name": "values",
  //         "type": "uint256[]"
  //       }
  //     ],
  //     "name": "TransferBatch",
  //     "type": "event"
  //   },
  //   {
  //     "anonymous": false,
  //     "inputs": [
  //       {
  //         "indexed": true,
  //         "internalType": "address",
  //         "name": "operator",
  //         "type": "address"
  //       },
  //       {
  //         "indexed": true,
  //         "internalType": "address",
  //         "name": "from",
  //         "type": "address"
  //       },
  //       {
  //         "indexed": true,
  //         "internalType": "address",
  //         "name": "to",
  //         "type": "address"
  //       },
  //       {
  //         "indexed": false,
  //         "internalType": "uint256",
  //         "name": "id",
  //         "type": "uint256"
  //       },
  //       {
  //         "indexed": false,
  //         "internalType": "uint256",
  //         "name": "value",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "TransferSingle",
  //     "type": "event"
  //   },
  //   {
  //     "anonymous": false,
  //     "inputs": [
  //       {
  //         "indexed": false,
  //         "internalType": "string",
  //         "name": "value",
  //         "type": "string"
  //       },
  //       {
  //         "indexed": true,
  //         "internalType": "uint256",
  //         "name": "id",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "URI",
  //     "type": "event"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "DEFAULT_ADMIN_ROLE",
  //     "outputs": [
  //       {
  //         "internalType": "bytes32",
  //         "name": "",
  //         "type": "bytes32"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "address",
  //         "name": "account",
  //         "type": "address"
  //       },
  //       {
  //         "internalType": "uint256",
  //         "name": "id",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "balanceOf",
  //     "outputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "",
  //         "type": "uint256"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "address[]",
  //         "name": "accounts",
  //         "type": "address[]"
  //       },
  //       {
  //         "internalType": "uint256[]",
  //         "name": "ids",
  //         "type": "uint256[]"
  //       }
  //     ],
  //     "name": "balanceOfBatch",
  //     "outputs": [
  //       {
  //         "internalType": "uint256[]",
  //         "name": "",
  //         "type": "uint256[]"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "address",
  //         "name": "",
  //         "type": "address"
  //       }
  //     ],
  //     "name": "balances",
  //     "outputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "",
  //         "type": "uint256"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "_id",
  //         "type": "uint256"
  //       },
  //       {
  //         "internalType": "address",
  //         "name": "_initialOwner",
  //         "type": "address"
  //       },
  //       {
  //         "internalType": "uint256",
  //         "name": "_initialSupply",
  //         "type": "uint256"
  //       },
  //       {
  //         "internalType": "uint256",
  //         "name": "_maxSupply",
  //         "type": "uint256"
  //       },
  //       {
  //         "internalType": "bytes",
  //         "name": "_data",
  //         "type": "bytes"
  //       }
  //     ],
  //     "name": "create",
  //     "outputs": [],
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "creators",
  //     "outputs": [
  //       {
  //         "internalType": "address",
  //         "name": "",
  //         "type": "address"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "id",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "exists",
  //     "outputs": [
  //       {
  //         "internalType": "bool",
  //         "name": "",
  //         "type": "bool"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "bytes32",
  //         "name": "role",
  //         "type": "bytes32"
  //       }
  //     ],
  //     "name": "getRoleAdmin",
  //     "outputs": [
  //       {
  //         "internalType": "bytes32",
  //         "name": "",
  //         "type": "bytes32"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "bytes32",
  //         "name": "role",
  //         "type": "bytes32"
  //       },
  //       {
  //         "internalType": "uint256",
  //         "name": "index",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "getRoleMember",
  //     "outputs": [
  //       {
  //         "internalType": "address",
  //         "name": "",
  //         "type": "address"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "bytes32",
  //         "name": "role",
  //         "type": "bytes32"
  //       }
  //     ],
  //     "name": "getRoleMemberCount",
  //     "outputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "",
  //         "type": "uint256"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "bytes32",
  //         "name": "role",
  //         "type": "bytes32"
  //       },
  //       {
  //         "internalType": "address",
  //         "name": "account",
  //         "type": "address"
  //       }
  //     ],
  //     "name": "grantRole",
  //     "outputs": [],
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "bytes32",
  //         "name": "role",
  //         "type": "bytes32"
  //       },
  //       {
  //         "internalType": "address",
  //         "name": "account",
  //         "type": "address"
  //       }
  //     ],
  //     "name": "hasRole",
  //     "outputs": [
  //       {
  //         "internalType": "bool",
  //         "name": "",
  //         "type": "bool"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "string",
  //         "name": "_uri",
  //         "type": "string"
  //       }
  //     ],
  //     "name": "initialize",
  //     "outputs": [],
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "address",
  //         "name": "account",
  //         "type": "address"
  //       },
  //       {
  //         "internalType": "address",
  //         "name": "operator",
  //         "type": "address"
  //       }
  //     ],
  //     "name": "isApprovedForAll",
  //     "outputs": [
  //       {
  //         "internalType": "bool",
  //         "name": "",
  //         "type": "bool"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "_id",
  //         "type": "uint256"
  //       },
  //       {
  //         "internalType": "uint256",
  //         "name": "_minPrice",
  //         "type": "uint256"
  //       },
  //       {
  //         "internalType": "uint256",
  //         "name": "_amount",
  //         "type": "uint256"
  //       },
  //       {
  //         "internalType": "uint256",
  //         "name": "_maxSupply",
  //         "type": "uint256"
  //       },
  //       {
  //         "internalType": "uint256",
  //         "name": "_deadline",
  //         "type": "uint256"
  //       },
  //       {
  //         "internalType": "bytes",
  //         "name": "_signature",
  //         "type": "bytes"
  //       },
  //       {
  //         "internalType": "bytes",
  //         "name": "_data",
  //         "type": "bytes"
  //       }
  //     ],
  //     "name": "lazyMint",
  //     "outputs": [],
  //     "stateMutability": "payable",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "maxSupplies",
  //     "outputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "",
  //         "type": "uint256"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "address",
  //         "name": "_account",
  //         "type": "address"
  //       },
  //       {
  //         "internalType": "uint256",
  //         "name": "_id",
  //         "type": "uint256"
  //       },
  //       {
  //         "internalType": "uint256",
  //         "name": "_amount",
  //         "type": "uint256"
  //       },
  //       {
  //         "internalType": "bytes",
  //         "name": "_data",
  //         "type": "bytes"
  //       }
  //     ],
  //     "name": "mint",
  //     "outputs": [],
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "address",
  //         "name": "_to",
  //         "type": "address"
  //       },
  //       {
  //         "internalType": "uint256[]",
  //         "name": "_ids",
  //         "type": "uint256[]"
  //       },
  //       {
  //         "internalType": "uint256[]",
  //         "name": "_amounts",
  //         "type": "uint256[]"
  //       },
  //       {
  //         "internalType": "bytes",
  //         "name": "_data",
  //         "type": "bytes"
  //       }
  //     ],
  //     "name": "mintBatch",
  //     "outputs": [],
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "bytes32",
  //         "name": "role",
  //         "type": "bytes32"
  //       },
  //       {
  //         "internalType": "address",
  //         "name": "account",
  //         "type": "address"
  //       }
  //     ],
  //     "name": "renounceRole",
  //     "outputs": [],
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "bytes32",
  //         "name": "role",
  //         "type": "bytes32"
  //       },
  //       {
  //         "internalType": "address",
  //         "name": "account",
  //         "type": "address"
  //       }
  //     ],
  //     "name": "revokeRole",
  //     "outputs": [],
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "address",
  //         "name": "from",
  //         "type": "address"
  //       },
  //       {
  //         "internalType": "address",
  //         "name": "to",
  //         "type": "address"
  //       },
  //       {
  //         "internalType": "uint256[]",
  //         "name": "ids",
  //         "type": "uint256[]"
  //       },
  //       {
  //         "internalType": "uint256[]",
  //         "name": "amounts",
  //         "type": "uint256[]"
  //       },
  //       {
  //         "internalType": "bytes",
  //         "name": "data",
  //         "type": "bytes"
  //       }
  //     ],
  //     "name": "safeBatchTransferFrom",
  //     "outputs": [],
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "address",
  //         "name": "from",
  //         "type": "address"
  //       },
  //       {
  //         "internalType": "address",
  //         "name": "to",
  //         "type": "address"
  //       },
  //       {
  //         "internalType": "uint256",
  //         "name": "id",
  //         "type": "uint256"
  //       },
  //       {
  //         "internalType": "uint256",
  //         "name": "amount",
  //         "type": "uint256"
  //       },
  //       {
  //         "internalType": "bytes",
  //         "name": "data",
  //         "type": "bytes"
  //       }
  //     ],
  //     "name": "safeTransferFrom",
  //     "outputs": [],
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "address",
  //         "name": "operator",
  //         "type": "address"
  //       },
  //       {
  //         "internalType": "bool",
  //         "name": "approved",
  //         "type": "bool"
  //       }
  //     ],
  //     "name": "setApprovalForAll",
  //     "outputs": [],
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "bytes4",
  //         "name": "interfaceId",
  //         "type": "bytes4"
  //       }
  //     ],
  //     "name": "supportsInterface",
  //     "outputs": [
  //       {
  //         "internalType": "bool",
  //         "name": "",
  //         "type": "bool"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "id",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "totalSupply",
  //     "outputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "",
  //         "type": "uint256"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "string",
  //         "name": "_newUri",
  //         "type": "string"
  //       }
  //     ],
  //     "name": "updateURI",
  //     "outputs": [],
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "_id",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "uri",
  //     "outputs": [
  //       {
  //         "internalType": "string",
  //         "name": "",
  //         "type": "string"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [],
  //     "name": "withdraw",
  //     "outputs": [],
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   }
  // ];

  // const Save = () => {

  //   web3.eth.getAccounts().then(async res => {

  //     const tokenContract = new web3.eth.Contract(kraft, TOKEN_CONTRACT_ADDRESS);
  //     //var balancess = await tokenContract.methods.balances("0x9F68E8B74E3D30E1C78ea2858d90B6c72Af8062d").call();
  //     alert(carddescription.amount)
  //     const receipt = tokenContract.methods.lazyMint(carddescription.tokenid, carddescription.price, carddescription.amount, carddescription.maxSupply, carddescription.deadline, carddescription.signature, []).send({ from: res[0].toLowerCase(), value: carddescription.price }).then(res1 => {
  //       const query1 = new Moralis.Query("LazyMintNFT");
  //       query1.equalTo("tokenid", carddescription.tokenid);
  //       query1.find().then(queryResults1 => {
  //         alert(res[0])
  //         queryResults1[0].attributes.addresses.push(carddescription.address)
  //         queryResults1[0].set("address", res[0].toLowerCase())
  //         queryResults1[0].save();

  //         const query2 = new Moralis.Query("TopSellers");
  //         query2.equalTo("address", carddescription.address);
  //         query2.find().then(queryResults1 => {
  //           console.log(queryResults1)
  //           if (queryResults1.length == 0) {
  //             alert("new")
  //             const favorites = Moralis.Object.extend("TopSellers");
  //             // Create a new instance of that class.
  //             const gameScore = new favorites();
  //             gameScore.set("address", carddescription.address)
  //             gameScore.set("coins", web3.utils.fromWei(carddescription.price))
  //             gameScore.save();
  //           }
  //           else {
  //             alert("old")
  //             var c = queryResults1[0].attributes.coins
  //             console.log(c)
  //             c = parseFloat(c) + parseFloat(web3.utils.fromWei(carddescription.price))
  //             console.log(c)
  //             queryResults1[0].set("address", carddescription.address)
  //             queryResults1[0].set("coins", c.toString())

  //             queryResults1[0].save();
  //           }

  //         });

  //       })

  //     })

  //   })

  // }
  return (
    <Modal
      show={ShowCompleteCheckOut}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      className="scale-in-center"
    >
      <Modal.Header closeButton>
        <Heading1
          size="20px"
          SMsize="20"
          weight="700"
          marginBottom="10px"
          SMmarginBottom="10px"
          color="white"
          JFcontent="left"
          className=""
          style={{ paddingLeft: "12px", marginTop: "10px" }}
        >
          Mainnet from PikaCoin
        </Heading1>
      </Modal.Header>
      <Modal.Body>
        <div className="CC-Row1">
          <div className="w-100">
            <div className="d-flex ">
              <Image
                className="Profile-circle"
                src={
                  "https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                }
              />

              <div className="">
                <Heading1
                  size="20px"
                  SMsize="15"
                  weight="700"
                  marginBottom="10px"
                  SMmarginBottom="10px"
                  color="#2A1971"
                  JFcontent="left"
                  className=""
                  style={{ marginLeft: "10px", marginBlock: "22px" }}
                >
                  @Owner1
                </Heading1>
              </div>
            </div>
          </div>

          <div className="w-25">
            <div
              className="Profile-circle"
              style={{ backgroundColor: "#5D34FF", marginLeft: "10px" }}
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                className=""
                style={{ margin: "8px", color: "white" }}
              />
            </div>
          </div>

          <div className="w-100">
            <div className="d-flex ">
              <Image
                className="Profile-circle"
                src={
                  "https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                }
              />

              <div className="">
                <Heading1
                  size="20px"
                  SMsize="15"
                  weight="700"
                  marginBottom="10px"
                  SMmarginBottom="10px"
                  color="#2A1971"
                  JFcontent="left"
                  className=""
                  style={{ marginLeft: "10px", marginBlock: "22px" }}
                >
                  @Owner2
                </Heading1>
              </div>
            </div>
          </div>
        </div>
        <hr className="CC-line" />

        <div
          className="d-flex justify-content-center align-items-center "
          style={{ paddingInline: "95px" }}
        >
          <div>
            {" "}
            <img className="pika-image" src={pika} />{" "}
          </div>
          <div className="class1">
            <div className="w-100">
              <Heading1
                size="65px"
                SMsize="55"
                weight="600"
                marginBottom="0px"
                SMmarginBottom="0px"
                color="#2A1971"
                JFcontent="left"
                className=""
                style={{ marginLeft: "10px", marginTop: "-20px" }}
              >
                122 PKC
              </Heading1>
            </div>
            <div className="w-100 p-0">
              <Heading1
                size="24px"
                SMsize="55"
                weight="600"
                marginBottom="0px"
                SMmarginBottom="0px"
                color="#2A1971"
                JFcontent="left"
                className=""
                style={{ marginLeft: "10px", marginTop: "-10px" }}
              >
                $3.321,00
              </Heading1>
            </div>
          </div>
        </div>

        <div className="">
          <Styled_text
            color=" #999999"
            paddingInline="20px"
            paddingBlock="20px"
            size="18px"
            weight="400"
            marginBottom=""
            SMsize=""
            SMsize=""
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </Styled_text>
        </div>

        <hr className="CC-line" />

        <div className="d-flex flex-column w-100 ">
          <div className="d-flex flex-row w-100 ">
            <Heading1
              size="25px"
              SMsize="16"
              weight="600"
              marginBottom="0px"
              SMmarginBottom="0px"
              color="#2A1971"
              JFcontent="left"
              className="w-100"
              style={{ marginLeft: "20px", marginTop: "" }}
            >
              Total
            </Heading1>

            <Heading1
              size="20px"
              SMsize="18px"
              weight="600"
              marginBottom="0px"
              SMmarginBottom="0px"
              color="#2A1971"
              JFcontent="flex-end"
              className="w-100"
              style={{ paddingRight: "20px" }}
            >
              $ 3.321,00 1.25 PKC
            </Heading1>
          </div>

          <div className="d-flex flex-row w-100">
            <Styled_text
              color=" #999999"
              size="18px"
              SMsize="16"
              weight="600"
              marginBottom="0px"
              SMmarginBottom="0px"
              JFcontent="left"
              className=""
              style={{ marginLeft: "20px", marginTop: "" }}
            >
              Amount + gas fee
            </Styled_text>

            <Styled_text
              color="#999999"
              size="18px"
              SMsize="16"
              weight="600"
              marginBottom="0px"
              SMmarginBottom="0px"
              JFcontent="flex-end"
              className="w-100"
              style={{ paddingRight: "20px" }}
            >
              Max amount: 1.31231 PKC
            </Styled_text>
          </div>
        </div>

        <div className="d-flex flex-row w-100 mt-3">
          <div className="" style={{ width: "40%" }}>
            <Heading1
              size="20px"
              SMsize="18px"
              weight="600"
              paddingBlock="8px"
              marginBottom="0px"
              SMmarginBottom="0px"
              color="#2A1971"
              className="w-100"
              style={{ marginRight: "10px", marginTop: "" }}
              onClick={() => {
                handleClose();
              }}
            >
              Cancel
            </Heading1>
          </div>
          <div
            className="d-flex flex-row justify-content-center"
            style={{ width: "60%" }}
          >
            <ButtonStyled
              color="white"
              border="none"
              size="18px !important"
              weight="700"
              backgroundColor="#5D34FF"
              width=""
              // onClick={Save}
              SMsize=""
              SMpaddingInline=""
              SMpaddingBlock=""
              style={{ paddingInline: "50px" }}
              className=""
            >
              Confirm
            </ButtonStyled>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default CompleteCheckout;
