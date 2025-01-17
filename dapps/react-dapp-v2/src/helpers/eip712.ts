// From spec: https://eips.ethereum.org/EIPS/eip-712
const example = {
  types: {
    EIP712Domain: [
      { name: "name", type: "string" },
      { name: "version", type: "string" },
      { name: "chainId", type: "uint256" },
      { name: "verifyingContract", type: "address" },
    ],
    Person: [
      { name: "name", type: "string" },
      { name: "wallet", type: "address" },
    ],
    Mail: [
      { name: "from", type: "Person" },
      { name: "to", type: "Person" },
      { name: "contents", type: "string" },
    ],
  },
  primaryType: "Mail",
  domain: {
    name: "Ether Mail",
    version: "1",
    chainId: 1,
    verifyingContract: "0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC",
  },
  message: {
    from: { name: "Cow", wallet: "0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826" },
    to: { name: "Bob", wallet: "0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB" },
    contents: "Hello, Bob!",
  },
};

const exampleV4 = {
  "domain": {
    "chainId": 1,
    "name": "Ether Mail",
    "verifyingContract": "0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC",
    "version": "1"
  },
  "message": {
    "contents": "Hello, Bob!",
    "from": {
      "name": "Cow",
      "wallets": [
        "0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826",
        "0xDeaDbeefdEAdbeefdEadbEEFdeadbeEFdEaDbeeF"
      ],
      "balances": [
        195,
        -25
      ],
      "ids": [
        1,
        2
      ]
    },
    "to": [
      {
        "name": "Bob",
        "wallets": [
          "0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB",
          "0xB0BdaBea57B0BDABeA57b0bdABEA57b0BDabEa57",
          "0xB0B0b0b0b0b0B000000000000000000000000000"
        ],
        "balances": [
          200,
          150000,
          -300
        ],
        "ids": [
          0,
          3,
          7
        ]
      }
    ]
  },
  "primaryType": "Mail",
  "types": {
    "EIP712Domain": [
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "version",
        "type": "string"
      },
      {
        "name": "chainId",
        "type": "uint256"
      },
      {
        "name": "verifyingContract",
        "type": "address"
      }
    ],
    "Mail": [
      {
        "name": "from",
        "type": "Person"
      },
      {
        "name": "to",
        "type": "Person[]"
      },
      {
        "name": "contents",
        "type": "string"
      }
    ],
    "Person": [
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "wallets",
        "type": "address[]"
      },
      {
        "name": "balances",
        "type": "int256[]"
      },
      {
        "name": "ids",
        "type": "uint16[]"
      }
    ]
  }
};

const exampleGnosis = {
  "types": {
    "EIP712Domain": [
      {
        "type": "address",
        "name": "verifyingContract"
      }
    ],
    "SafeTx": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "value"
      },
      {
        "type": "bytes",
        "name": "data"
      },
      {
        "type": "uint8",
        "name": "operation"
      },
      {
        "type": "uint256",
        "name": "safeTxGas"
      },
      {
        "type": "uint256",
        "name": "baseGas"
      },
      {
        "type": "uint256",
        "name": "gasPrice"
      },
      {
        "type": "address",
        "name": "gasToken"
      },
      {
        "type": "address",
        "name": "refundReceiver"
      },
      {
        "type": "uint256",
        "name": "nonce"
      }
    ]
  },
  "domain": {
    "verifyingContract": "0x0000000000000000000000000000000000000123"
  },
  "primaryType": "SafeTx",
  "message": {
    "to": "0x0000000000000000000000000000000000000123",
    "value": "0",
    "data": "0x0000000000000000000000000000000000000000",
    "operation": 0,
    "safeTxGas": 222496,
    "baseGas": 0,
    "gasPrice": "0",
    "gasToken": "0x0000000000000000000000000000000000000000",
    "refundReceiver": "0x0000000000000000000000000000000000000000",
    "nonce": 28
  }
};

export const eip712 = {
  example, exampleV4, exampleGnosis
};
