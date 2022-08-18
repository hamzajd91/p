import { React, useState } from "react";
import "../components/Checkout/Checkout.css";
import CheckoutDetails from "../components/Checkout/CheckoutDetails";
import Block from "../reusableComponents/Block/Block";
import ButtonStyled from "../reusableComponents/Buttons/ButtonStyled";
import Heading2 from "../reusableComponents/Headings/Heading2";
import Heading1 from "../reusableComponents/Headings/Heading1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "react-bootstrap";
import CompleteCheckout from "./CompleteCheckout";
import { Moralis } from "moralis";

import BarWave from "react-cssfx-loading/lib/Hypnosis";
Moralis.initialize("y3QbvGnSgB5rdM1CjzQxQ8Kp0NHcymlW2OoyxPgc");
Moralis.serverURL = "https://zlb9dsuvmip0.usemoralis.com:2053/server";
const TOKEN_CONTRACT_ADDRESS = "0x1736F0251f4c4F36354BA791265cA50204FF2b9f"; //"0x1736F0251f4c4F36354BA791265cA50204FF2b9f";
const MARKETPLACE_CONTRACT_ADDRESS =
  "0xE4290eB4769954F0420B3F6294d75fa80c0E9a1d"; //"0xE4290eB4769954F0420B3F6294d75fa80c0E9a1d";
const TEST_CONTRACT_ADDRESS = "0x1c399da547980bf128cc88ed17dcf2f024251219";

function Checkout({
  Show,
  carddescription,
  setShow,
  handleShowCompleteCheckOut,
}) {
  const [isCheckingOut, setisCheckingOut] = useState(false);

  const handleClose = () => setShow(false);

  const [ShowCompleteCheckOut, setShowCompleteCheckOut] = useState(false);
  var kraft_Token = [
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "approved",
          type: "bool",
        },
      ],
      name: "ApprovalForAll",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "creator",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "assetId",
          type: "uint256",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "totalSupply",
          type: "uint256",
        },
      ],
      name: "Created",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "marketplace",
          type: "address",
        },
      ],
      name: "MarketplaceSet",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "previousAdminRole",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "newAdminRole",
          type: "bytes32",
        },
      ],
      name: "RoleAdminChanged",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address",
        },
      ],
      name: "RoleGranted",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address",
        },
      ],
      name: "RoleRevoked",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256[]",
          name: "ids",
          type: "uint256[]",
        },
        {
          indexed: false,
          internalType: "uint256[]",
          name: "values",
          type: "uint256[]",
        },
      ],
      name: "TransferBatch",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "TransferSingle",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "string",
          name: "value",
          type: "string",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
      ],
      name: "URI",
      type: "event",
    },
    {
      inputs: [],
      name: "DEFAULT_ADMIN_ROLE",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
      ],
      name: "balanceOf",
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
          internalType: "address[]",
          name: "accounts",
          type: "address[]",
        },
        {
          internalType: "uint256[]",
          name: "ids",
          type: "uint256[]",
        },
      ],
      name: "balanceOfBatch",
      outputs: [
        {
          internalType: "uint256[]",
          name: "",
          type: "uint256[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_assetId",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_totalSupply",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "_beneficiary",
          type: "address",
        },
        {
          internalType: "uint16",
          name: "_royalty",
          type: "uint16",
        },
        {
          internalType: "bytes",
          name: "_data",
          type: "bytes",
        },
      ],
      name: "create",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
      ],
      name: "exists",
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
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
      ],
      name: "getRoleAdmin",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "uint256",
          name: "index",
          type: "uint256",
        },
      ],
      name: "getRoleMember",
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
          name: "role",
          type: "bytes32",
        },
      ],
      name: "getRoleMemberCount",
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
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "grantRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "hasRole",
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
          internalType: "string",
          name: "_uri",
          type: "string",
        },
      ],
      name: "initialize",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          internalType: "address",
          name: "operator",
          type: "address",
        },
      ],
      name: "isApprovedForAll",
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
      inputs: [],
      name: "marketplace",
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
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "nftData",
      outputs: [
        {
          internalType: "uint256",
          name: "assetId",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "creator",
          type: "address",
        },
        {
          internalType: "address",
          name: "beneficiary",
          type: "address",
        },
        {
          internalType: "uint16",
          name: "royalty",
          type: "uint16",
        },
        {
          internalType: "string",
          name: "uri",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "renounceRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "revokeRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_tokenId",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_salePrice",
          type: "uint256",
        },
      ],
      name: "royaltyInfo",
      outputs: [
        {
          internalType: "address",
          name: "receiver",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "royaltyAmount",
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
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256[]",
          name: "ids",
          type: "uint256[]",
        },
        {
          internalType: "uint256[]",
          name: "amounts",
          type: "uint256[]",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
      ],
      name: "safeBatchTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          internalType: "bool",
          name: "approved",
          type: "bool",
        },
      ],
      name: "setApprovalForAll",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_uri",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "_id",
          type: "uint256",
        },
      ],
      name: "setCustomUri",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_marketplace",
          type: "address",
        },
      ],
      name: "setMarketplace",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes4",
          name: "interfaceId",
          type: "bytes4",
        },
      ],
      name: "supportsInterface",
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
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
      ],
      name: "totalSupply",
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
          internalType: "string",
          name: "_newUri",
          type: "string",
        },
      ],
      name: "updateBaseURI",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_id",
          type: "uint256",
        },
      ],
      name: "uri",
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
  ];
  var Kraft_MarketPlace = [
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "allowed",
          type: "bool",
        },
      ],
      name: "AllowedTokenSet",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "beneficiary",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "platformFee",
          type: "uint256",
        },
      ],
      name: "FeeUpdated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "feeless",
          type: "bool",
        },
      ],
      name: "FeelessTokenSet",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
      ],
      name: "OfferCanceled",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "seller",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "buyer",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "nftContract",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "OfferRedeemed",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
      ],
      name: "OfferSoldOut",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "previousAdminRole",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "newAdminRole",
          type: "bytes32",
        },
      ],
      name: "RoleAdminChanged",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address",
        },
      ],
      name: "RoleGranted",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address",
        },
      ],
      name: "RoleRevoked",
      type: "event",
    },
    {
      inputs: [],
      name: "DEFAULT_ADMIN_ROLE",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
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
      name: "allowedTokens",
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
      inputs: [],
      name: "beneficiary",
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
          internalType: "uint256",
          name: "_id",
          type: "uint256",
        },
      ],
      name: "cancelOffer",
      outputs: [],
      stateMutability: "nonpayable",
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
      name: "feelessTokens",
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
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
      ],
      name: "getRoleAdmin",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "uint256",
          name: "index",
          type: "uint256",
        },
      ],
      name: "getRoleMember",
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
          name: "role",
          type: "bytes32",
        },
      ],
      name: "getRoleMemberCount",
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
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "grantRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "hasRole",
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
          name: "_nftContract",
          type: "address",
        },
        {
          internalType: "address[]",
          name: "_allowedTokens",
          type: "address[]",
        },
        {
          internalType: "address[]",
          name: "_feelessTokens",
          type: "address[]",
        },
        {
          internalType: "address",
          name: "_beneficiary",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "_fee",
          type: "uint256",
        },
      ],
      name: "initialize",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "maxOfferAmounts",
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
      name: "platformFee",
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
          components: [
            {
              internalType: "uint256",
              name: "offerId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "assetId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "nftContract",
              type: "address",
            },
            {
              internalType: "address",
              name: "buyer",
              type: "address",
            },
            {
              internalType: "address",
              name: "seller",
              type: "address",
            },
            {
              internalType: "address",
              name: "beneficiary",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "maxAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "startPrice",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "endPrice",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "startTimestamp",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "endTimestamp",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "receivingToken",
              type: "address",
            },
            {
              internalType: "uint16",
              name: "royalty",
              type: "uint16",
            },
            {
              internalType: "address",
              name: "royaltyReceiver",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "totalSupply",
              type: "uint256",
            },
          ],
          internalType: "struct Offer",
          name: "_offer",
          type: "tuple",
        },
        {
          internalType: "uint256",
          name: "_amount",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "_signature",
          type: "bytes",
        },
      ],
      name: "redeemOffer",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "renounceRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "revokeRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          internalType: "bool",
          name: "allowed",
          type: "bool",
        },
      ],
      name: "setAllowedToken",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          internalType: "bool",
          name: "feeless",
          type: "bool",
        },
      ],
      name: "setFeelessToken",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes4",
          name: "interfaceId",
          type: "bytes4",
        },
      ],
      name: "supportsInterface",
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
      inputs: [],
      name: "theKraftNFT",
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
          internalType: "address",
          name: "_beneficiary",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "_platformFee",
          type: "uint256",
        },
      ],
      name: "updateFee",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];

  var Kraft_Test = [
    {
      inputs: [],
      name: "maker",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            { internalType: "uint256", name: "offerId", type: "uint256" },
            { internalType: "uint256", name: "assetId", type: "uint256" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
            { internalType: "address", name: "nftContract", type: "address" },
            { internalType: "address", name: "buyer", type: "address" },
            { internalType: "address", name: "seller", type: "address" },
            { internalType: "address", name: "beneficiary", type: "address" },
            { internalType: "uint256", name: "maxAmount", type: "uint256" },
            { internalType: "uint256", name: "startPrice", type: "uint256" },
            { internalType: "uint256", name: "endPrice", type: "uint256" },
            {
              internalType: "uint256",
              name: "startTimestamp",
              type: "uint256",
            },
            { internalType: "uint256", name: "endTimestamp", type: "uint256" },
            {
              internalType: "address",
              name: "receivingToken",
              type: "address",
            },
            { internalType: "uint16", name: "royalty", type: "uint16" },
            {
              internalType: "address",
              name: "royaltyReceiver",
              type: "address",
            },
            { internalType: "uint256", name: "totalSupply", type: "uint256" },
          ],
          internalType: "struct Offer",
          name: "_offer",
          type: "tuple",
        },
        { internalType: "bytes", name: "_signature", type: "bytes" },
      ],
      name: "redeemOffer",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];
  const Save = async () => {
    const web3 = await Moralis.Web3.enableWeb3();
    setisCheckingOut(true);
    var res = Moralis.User.current().attributes.ethAddress;
    if (res) {
      console.log(carddescription);

      const Offer1 = {
        offerId: carddescription.hash.offerId,
        assetId: carddescription.hash.assetId,
        tokenId: carddescription.hash.tokenId,
        nftContract: carddescription.hash.nftContract,
        buyer: carddescription.hash.buyer,
        seller: carddescription.hash.seller,
        beneficiary: carddescription.hash.beneficiary,
        maxAmount: carddescription.hash.maxAmount,
        startPrice: carddescription.hash.startPrice,
        endPrice: carddescription.hash.endPrice,
        startTimestamp: "1634831861987",
        endTimestamp: "1684831861987",
        receivingToken: carddescription.hash.receivingToken,
        royalty: carddescription.hash.royalty,
        royaltyReceiver: carddescription.hash.royaltyReceiver,
        totalSupply: carddescription.hash.totalSupply,
      };

      var a = JSON.stringify(Offer1);

      class Offer {
        constructor(
          offerId,
          assetId,
          tokenId,
          nftContract,
          buyer,
          seller,
          beneficiary,
          maxAmount,
          startPrice,
          endPrice,
          startTimestamp,
          endTimestamp,
          receivingToken,
          royalty,
          totalSupply,
          royaltyReceiver
        ) {
          this.offerId = offerId;
          this.assetId = assetId;
          this.tokenId = tokenId;
          this.nftContract = nftContract;
          this.buyer = buyer;
          this.seller = seller;
          this.beneficiary = beneficiary;
          this.maxAmount = maxAmount;
          this.startPrice = startPrice;
          this.endPrice = endPrice;
          this.startTimestamp = startTimestamp;
          this.endTimestamp = endTimestamp;
          this.receivingToken = receivingToken;
          this.royalty = royalty;
          this.totalSupply = totalSupply;
          this.royaltyReceiver = royaltyReceiver;
        }
      }

      let myoffer = new Offer(
        carddescription.hash.offerId,
        carddescription.hash.assetId,
        carddescription.hash.tokenId,
        carddescription.hash.nftContract,
        res.toLowerCase(),
        carddescription.hash.seller,
        carddescription.hash.beneficiary,
        carddescription.hash.maxAmount,
        carddescription.hash.startPrice,
        carddescription.hash.endPrice,
        carddescription.hash.startTimestamp,
        carddescription.hash.endTimestamp,
        carddescription.hash.receivingToken,
        carddescription.hash.royalty,
        "1",
        carddescription.hash.royaltyReceiver
      );
      console.log(myoffer);
      const tokenContract = new web3.eth.Contract(
        kraft_Token,
        TOKEN_CONTRACT_ADDRESS
      );
      const marketplaceContract = new web3.eth.Contract(
        Kraft_MarketPlace,
        MARKETPLACE_CONTRACT_ADDRESS
      );
      const testContract = new web3.eth.Contract(
        Kraft_Test,
        TEST_CONTRACT_ADDRESS
      );
      //var balancess = await tokenContract.methods.balances("0x9F68E8B74E3D30E1C78ea2858d90B6c72Af8062d").call();

      // marketplaceContract.methods.redeemOffer(myoffer, carddescription.amount, carddescription.signature).send({ from: res[0].toLowerCase(), value: carddescription.price }).then(res1 => {
      //   const query1 = new Moralis.Query("LazyMintNFT");
      //   query1.equalTo("tokenid", carddescription.tokenid);
      //   query1.find().then(queryResults1 => {
      //     alert(res[0])
      //     queryResults1[0].attributes.addresses.push(carddescription.address)
      //     queryResults1[0].set("address", res[0].toLowerCase())
      //     queryResults1[0].save();

      //     const query2 = new Moralis.Query("TopSellers");
      //     query2.equalTo("address", carddescription.address);
      //     query2.find().then(queryResults1 => {
      //       console.log(queryResults1)
      //       if (queryResults1.length == 0) {
      //         alert("new")
      //         const favorites = Moralis.Object.extend("TopSellers");
      //         // Create a new instance of that class.
      //         const gameScore = new favorites();
      //         gameScore.set("address", carddescription.address)
      //         gameScore.set("coins", web3.utils.fromWei(carddescription.price))
      //         gameScore.save();
      //       }
      //       else {
      //         alert("old")
      //         var c = queryResults1[0].attributes.coins
      //         console.log(c)
      //         c = parseFloat(c) + parseFloat(web3.utils.fromWei(carddescription.price))
      //         console.log(c)
      //         queryResults1[0].set("address", carddescription.address)
      //         queryResults1[0].set("coins", c.toString())

      //         queryResults1[0].save();
      //       }

      //     });

      //   })

      // })

      if (
        carddescription.currency !== undefined &&
        carddescription.currency === "ETH"
      ) {
        marketplaceContract.methods
          .redeemOffer(
            carddescription.hash,
            carddescription.amount,
            carddescription.signature
          )
          .send({ from: res.toLowerCase(), value: carddescription.price })
          .then((res1) => {
            var objectId = "";
            var tokenid1 = "";
            const query1 = new Moralis.Query("LazyMintNFT");
            query1.equalTo("tokenid", carddescription.tokenid);
            query1.find().then((queryResults1) => {
              objectId = queryResults1[0].attributes.collection;
              tokenid1 = queryResults1[0].attributes.tokenid;
              queryResults1[0].attributes.addresses.push(
                carddescription.address
              );
              queryResults1[0].set("address", res.toLowerCase());
              queryResults1[0].set("collection", "none");
              if (queryResults1[0].attributes.sellable !== undefined) {
                queryResults1[0].set("sellable", false);
              }
              queryResults1[0].save();

              if (objectId !== "none") {
                const query11 = new Moralis.Query("Collections");
                query11.equalTo("objectId", objectId);
                query11.find().then((queryResults1) => {
                  var nftsArray = [];
                  nftsArray = queryResults1[0].attributes.NFTs;

                  nftsArray.splice(nftsArray.indexOf(tokenid1), 1);
                  queryResults1[0].set("NFTs", nftsArray);
                  queryResults1[0].save();
                });
              }

              const query2 = new Moralis.Query("TopSellers");
              query2.equalTo("address", carddescription.address);
              query2.find().then((queryResults1) => {
                console.log(queryResults1);
                if (queryResults1.length == 0) {
                  const favorites = Moralis.Object.extend("TopSellers");
                  const gameScore = new favorites();
                  gameScore.set("address", carddescription.address);
                  gameScore.set(
                    "coins",
                    web3.utils.fromWei(carddescription.price)
                  );
                  gameScore.save();
                } else {
                  var c = queryResults1[0].attributes.coins;
                  console.log(c);
                  c =
                    parseFloat(c) +
                    parseFloat(web3.utils.fromWei(carddescription.price));
                  console.log(c);
                  queryResults1[0].set("address", carddescription.address);
                  queryResults1[0].set("coins", c.toString());

                  queryResults1[0].save();
                }
                setisCheckingOut(false);
                handleClose();
              });
            });
            const query2 = new Moralis.Query("BiddingNFT");
            query2.equalTo("owner", carddescription.address);
            query2.equalTo("tokenid", carddescription.tokenid);
            query2.first({ useMasterKey: true }).then((queryResults2) => {
              if (queryResults2 !== undefined) {
                queryResults2.destroy(null, { useMasterKey: true }).then(() => {
                  console.log("object destroyed");
                });
              }
            });
          })
          .catch((err) => {
            setisCheckingOut(false);
            handleClose();
          });
      } else {
        debugger;
        marketplaceContract.methods
          .redeemOffer(
            carddescription.hash,
            carddescription.amount,
            carddescription.signature
          )
          .send({ from: res.toLowerCase() })
          .then((res1) => {
            var objectId = "";
            var tokenid1 = "";
            const query1 = new Moralis.Query("LazyMintNFT");
            query1.equalTo("tokenid", carddescription.tokenid);
            query1.find().then((queryResults1) => {
              objectId = queryResults1[0].attributes.collection;
              tokenid1 = queryResults1[0].attributes.tokenid;
              queryResults1[0].attributes.addresses.push(
                carddescription.address
              );
              queryResults1[0].set("address", res.toLowerCase());
              queryResults1[0].set("collection", "none");
              if (queryResults1[0].attributes.sellable !== undefined) {
                queryResults1[0].set("sellable", false);
              }
              queryResults1[0].save();

              if (objectId !== "none") {
                const query11 = new Moralis.Query("Collections");
                query11.equalTo("objectId", objectId);
                query11.find().then((queryResults1) => {
                  var nftsArray = [];
                  nftsArray = queryResults1[0].attributes.NFTs;

                  nftsArray.splice(nftsArray.indexOf(tokenid1), 1);
                  queryResults1[0].set("NFTs", nftsArray);
                  queryResults1[0].save();
                });
              }

              const query2 = new Moralis.Query("TopSellers");
              query2.equalTo("address", carddescription.address);
              query2.find().then((queryResults1) => {
                console.log(queryResults1);
                if (queryResults1.length == 0) {
                  const favorites = Moralis.Object.extend("TopSellers");
                  const gameScore = new favorites();
                  gameScore.set("address", carddescription.address);
                  gameScore.set(
                    "coins",
                    web3.utils.fromWei(carddescription.price)
                  );
                  gameScore.save();
                } else {
                  var c = queryResults1[0].attributes.coins;
                  console.log(c);
                  c =
                    parseFloat(c) +
                    parseFloat(web3.utils.fromWei(carddescription.price));
                  console.log(c);
                  queryResults1[0].set("address", carddescription.address);
                  queryResults1[0].set("coins", c.toString());

                  queryResults1[0].save();
                }
                setisCheckingOut(false);
                handleClose();
              });
            });
            const query2 = new Moralis.Query("BiddingNFT");
            query2.equalTo("owner", carddescription.address);
            query2.equalTo("tokenid", carddescription.tokenid);
            query2.first({ useMasterKey: true }).then((queryResults2) => {
              if (queryResults2 !== undefined) {
                queryResults2.destroy(null, { useMasterKey: true }).then(() => {
                  console.log("object destroyed");
                });
              }
            });
          })
          .catch((err) => {
            setisCheckingOut(false);
            handleClose();
          });
      }
    }
  };
  return (
    <Modal
      show={Show}
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
          Complete checkout
        </Heading1>
      </Modal.Header>
      <Modal.Body>
        {isCheckingOut ? (
          <>
            {" "}
            <div
              className="d-flex  my-4"
              width="100%"
              style={{
                flexDirection: "column",
                alignItems: "center",
                height: "300px",
                justifyContent: "center",
              }}
            >
              <div className="mb-2"> Submiting transaction. . .</div>
              <BarWave />
            </div>
          </>
        ) : (
          <>
            {" "}
            <div className="item-subtotal-div">
              <div className="item-subtotal-left">
                <Heading2
                  size="20px"
                  SMsize="15"
                  weight="700"
                  marginBottom="10px"
                  SMmarginBottom="10px"
                  color="black"
                  className="w-auto"
                  style={{ paddingLeft: "12px", marginTop: "25px" }}
                >
                  Items
                </Heading2>
              </div>
              <div className="item-subtotal-right">
                <Heading2
                  size="20px"
                  SMsize="15"
                  weight="700"
                  marginBottom="10px"
                  SMmarginBottom="10px"
                  color="black"
                  className="w-auto"
                  style={{ paddingRight: "12px", marginTop: "25px" }}
                >
                  Details
                </Heading2>
              </div>
            </div>
      <hr className="checkout-line" style={{ marginTop: "2px" }} />
            
            <CheckoutDetails carddescription={carddescription} />
            <div className="lastrow w-100 mt-2 ">
              <div className="d-flex w-100 align-items-center">
                <input type="checkbox" style={{ marginLeft: "12px" }} />
                <div className="">
                  <Heading1
                    size="15px"
                    SMsize="15"
                    weight="460"
                    marginBottom="0px"
                    SMmarginBottom="0px"
                    color="6f6f6f"
                    JFcontent="start"
                    className="w-auto"
                    style={{
                      marginTop: "0px",
                      paddingLeft: "10px",
                      display: "block",
                    }}
                  >
                    By checking this box, I agree to The Kraft{" "}
                    <a style={{ color: "blue", fontWeight:"460" }}>Terms of Service</a>
                  </Heading1>
                </div>
              </div>
              <div className=" w-100 Checkout-button-div">
                <ButtonStyled
                  color="white"
                  border="none"
                  size="18px !important"
                  weight="700"
                  backgroundColor="#5D34FF"
                  SMsize="18"
                  SMpaddingInline="20px"
                  SMpaddingBlock="10px"
                  style={{
                    paddingInline: "50px",
                    marginRight: "10px",
                    maxHeight: "50px",
                  }}
                  className=""
                  onClick={Save}
                >
                  Checkout
                </ButtonStyled>
              </div>
            </div>
          </>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default Checkout;
