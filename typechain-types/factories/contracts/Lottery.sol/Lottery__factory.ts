/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  Lottery,
  LotteryInterface,
} from "../../../contracts/Lottery.sol/Lottery";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_usdtTokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_maxAmount",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "_prizes",
        type: "uint256[]",
      },
      {
        internalType: "uint64",
        name: "subscriptionId",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "coordinator",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "keyHash",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "have",
        type: "address",
      },
      {
        internalType: "address",
        name: "want",
        type: "address",
      },
    ],
    name: "OnlyCoordinatorCanFulfill",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "NewPlayer",
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
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferRequested",
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
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "numWords",
        type: "uint32",
      },
    ],
    name: "RequestSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "ResetGame",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "playerAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "prize",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct Lottery.LuckyPlayer[]",
        name: "",
        type: "tuple[]",
      },
    ],
    name: "Winners",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "buyLotteryTickets",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getLotteryDetails",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        components: [
          {
            internalType: "address",
            name: "playerAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "start",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "end",
            type: "uint256",
          },
        ],
        internalType: "struct Lottery.Player[]",
        name: "",
        type: "tuple[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
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
    name: "owner",
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
        name: "requestId",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "randomWords",
        type: "uint256[]",
      },
    ],
    name: "rawFulfillRandomWords",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x6101206040526007805461ff00191661010017905560006008553480156200002657600080fd5b50604051620017de380380620017de8339810160408190526200004991620002aa565b6001600160a01b0382166080528282823380600081620000b05760405162461bcd60e51b815260206004820152601860248201527f43616e6e6f7420736574206f776e657220746f207a65726f000000000000000060448201526064015b60405180910390fd5b600080546001600160a01b0319166001600160a01b0384811691909117909155811615620000e357620000e3816200014d565b5050506001600160a01b0391821660a0526001600160401b039290921660c0526002919091553360e052600480546001600160a01b031916918816919091179055835162000139906005906020870190620001f8565b5050506101009290925250620003c1915050565b336001600160a01b03821603620001a75760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c660000000000000000006044820152606401620000a7565b600180546001600160a01b0319166001600160a01b0383811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a350565b82805482825590600052602060002090810192821562000236579160200282015b828111156200023657825182559160200191906001019062000219565b506200024492915062000248565b5090565b5b8082111562000244576000815560010162000249565b80516001600160a01b03811681146200027757600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b80516001600160401b03811681146200027757600080fd5b60008060008060008060c08789031215620002c457600080fd5b620002cf876200025f565b60208881015160408a01519298509650906001600160401b0380821115620002f657600080fd5b818a0191508a601f8301126200030b57600080fd5b8151818111156200032057620003206200027c565b8060051b604051601f19603f830116810181811085821117156200034857620003486200027c565b60405291825284820192508381018501918d8311156200036757600080fd5b938501935b8285101562000387578451845293850193928501926200036c565b8099505050505050506200039e6060880162000292565b9250620003ae608088016200025f565b915060a087015190509295509295509295565b60805160a05160c05160e051610100516113b562000429600039600081816102cb015281816106540152610ac001526000818161023001528181610d580152610fa70152600061083e015260006108850152600081816101a201526101e401526113b56000f3fe6080604052600436106100595760003560e01c80631fe543e31461007057806327a360d1146100905780634f2f3519146100be57806379ba5097146100de5780638da5cb5b146100f3578063f2fde38b1461011b57610068565b366100685761006661013b565b005b61006661013b565b34801561007c57600080fd5b5061006661008b366004610fe3565b610197565b34801561009c57600080fd5b506100a561021f565b6040516100b594939291906110e8565b60405180910390f35b3480156100ca57600080fd5b506100666100d9366004611189565b6103c6565b3480156100ea57600080fd5b506100666106b0565b3480156100ff57600080fd5b506000546040516001600160a01b0390911681526020016100b5565b34801561012757600080fd5b506100666101363660046111b3565b61075a565b60405162461bcd60e51b815260206004820152602660248201527f4e6f45746865723a20436f6e74726163742063616e6e6f7420726563656976656044820152651022ba3432b960d11b60648201526084015b60405180910390fd5b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146102115760405163073e64fd60e21b81523360048201526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602482015260440161018e565b61021b828261076e565b5050565b600060608082336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146102b55760405162461bcd60e51b815260206004820152602f60248201527f4f6e6c792074686520636f6e7472616374206f776e65722063616e207065726660448201526e37b936903a3434b99030b1ba34b7b760891b606482015260840161018e565b600760019054906101000a900460ff16600960057f000000000000000000000000000000000000000000000000000000000000000082805480602002602001604051908101604052809291908181526020016000905b82821015610360576000848152602090819020604080516060810182526003860290920180546001600160a01b031683526001808201548486015260029091015491830191909152908352909201910161030b565b505050509250818054806020026020016040519081016040528092919081815260200182805480156103b157602002820191906000526020600020905b81548152602001906001019080831161039d575b50505050509150935093509350935090919293565b60075460ff161561040b5760405162461bcd60e51b815260206004820152600f60248201526e2932b2b73a3930b73a1031b0b6361760891b604482015260640161018e565b6007805460ff191660019081179182905561010090910460ff161515146104865760405162461bcd60e51b815260206004820152602960248201527f57696e6e65727320617265206265696e672063616c63756c617465642e20506c60448201526819585cd9481dd85a5d60ba1b606482015260840161018e565b600480546040516323b872dd60e01b81526001600160a01b038581169382019390935230602482015260448101849052600092909116906323b872dd906064016020604051808303816000875af11580156104e5573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061050991906111d5565b9050806105505760405162461bcd60e51b81526020600482015260156024820152742aa9a22a103a3930b739b332b9103330b4b632b21760591b604482015260640161018e565b61057a604051806040016040528060078152602001667375636365737360c81b81525082846107c5565b60096040518060600160405280856001600160a01b031681526020016008548152602001846008546105ac919061120d565b905281546001808201845560009384526020808520845160039094020180546001600160a01b0319166001600160a01b03909416939093178355830151908201556040909101516002909101556008805484929061060b90849061120d565b9091555050604080516001600160a01b0385168152602081018490527f6b8fe0f067804a78a12efa88b8428446c8d8a703d5604dffc63ac27fcbdcfd0d910160405180910390a17f0000000000000000000000000000000000000000000000000000000000000000600854106106965760055461068790610811565b6006556007805461ff00191690555b6106a1600854610903565b50506007805460ff1916905550565b6001546001600160a01b031633146107035760405162461bcd60e51b815260206004820152601660248201527526bab9ba10313290383937b837b9b2b21037bbb732b960511b604482015260640161018e565b60008054336001600160a01b0319808316821784556001805490911690556040516001600160a01b0390921692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a350565b610762610948565b61076b8161099d565b50565b81600654146107b45760405162461bcd60e51b815260206004820152601260248201527172657175657374206e6f7420666f756e642160701b604482015260640161018e565b6107bd81610a46565b61021b610e24565b61080c8383836040516024016107dd93929190611226565b60408051601f198184030181529190526020810180516001600160e01b03166364acac6b60e11b179052610e59565b505050565b600061081b610948565b6002546040516305d3b1d360e41b8152600481019190915267ffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001660248201526003604482015263017d7840606482015263ffffffff831660848201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690635d3b1d309060a4016020604051808303816000875af11580156108d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108fa9190611284565b9150505b919050565b61076b8160405160240161091991815260200190565b60408051601f198184030181529190526020810180516001600160e01b031663f82c50f160e01b179052610e59565b6000546001600160a01b0316331461099b5760405162461bcd60e51b815260206004820152601660248201527527b7363c9031b0b63630b1363290313c9037bbb732b960511b604482015260640161018e565b565b336001600160a01b038216036109f55760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c66000000000000000000604482015260640161018e565b600180546001600160a01b0319166001600160a01b0383811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a350565b6000815167ffffffffffffffff811115610a6257610a62610fcd565b604051908082528060200260200182016040528015610aa757816020015b6040805180820190915260008082526020820152815260200190600190039081610a805790505b50905060005b82518163ffffffff161015610c935760007f0000000000000000000000000000000000000000000000000000000000000000848363ffffffff1681518110610af757610af761129d565b6020026020010151610b0991906112c9565b610b1490600161120d565b90506000610b278263ffffffff16610e7a565b600454600580549293506001600160a01b039091169163a9059cbb91849163ffffffff8816908110610b5b57610b5b61129d565b6000918252602090912001546040516001600160e01b031960e085901b1681526001600160a01b03909216600483015260248201526044016020604051808303816000875af1158015610bb2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bd691906111d5565b610c1a5760405162461bcd60e51b81526020600482015260156024820152742aa9a22a103a3930b739b332b9103330b4b632b21760591b604482015260640161018e565b6040518060400160405280826001600160a01b0316815260200160058563ffffffff1681548110610c4d57610c4d61129d565b9060005260206000200154815250848463ffffffff1681518110610c7357610c7361129d565b602002602001018190525050508080610c8b906112dd565b915050610aad565b507f91bc3922e592c1a361b69a1521df2f97ca2f5b15db407fe1f90a8c95bf7738b681604051610cc39190611300565b60405180910390a1600480546040516370a0823160e01b815230928101929092526000916001600160a01b03909116906370a0823190602401602060405180830381865afa158015610d19573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d3d9190611284565b6004805460405163a9059cbb60e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081169382019390935260248101849052929350169063a9059cbb906044016020604051808303816000875af1158015610db4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dd891906111d5565b61080c5760405162461bcd60e51b815260206004820152601e60248201527f55534454207472616e7366657220746f206f776e6572206661696c65642e0000604482015260640161018e565b6000600881905560068190556040517fc41db7bf93b2ffacecac5d21bb880bf7435f8e756b583a2434d667ebd52516d69190a1565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b60095460009081908190610e9090600190611358565b90505b808211610fa45760006002610ea8838561120d565b610eb390600161120d565b610ebd919061136b565b905060098181548110610ed257610ed261129d565b9060005260206000209060030201600101548510158015610f17575060098181548110610f0157610f0161129d565b9060005260206000209060030201600201548511155b15610f525760098181548110610f2f57610f2f61129d565b60009182526020909120600390910201546001600160a01b031695945050505050565b60098181548110610f6557610f6561129d565b906000526020600020906003020160010154851015610f9057610f89600182611358565b9150610f9e565b610f9b81600161120d565b92505b50610e93565b507f00000000000000000000000000000000000000000000000000000000000000009392505050565b634e487b7160e01b600052604160045260246000fd5b60008060408385031215610ff657600080fd5b8235915060208084013567ffffffffffffffff8082111561101657600080fd5b818601915086601f83011261102a57600080fd5b81358181111561103c5761103c610fcd565b8060051b604051601f19603f8301168101818110858211171561106157611061610fcd565b60405291825284820192508381018501918983111561107f57600080fd5b938501935b8285101561109d57843584529385019392850192611084565b8096505050505050509250929050565b600081518084526020808501945080840160005b838110156110dd578151875295820195908201906001016110c1565b509495945050505050565b6000608082018615158352602060808185015281875180845260a086019150828901935060005b8181101561114a57845180516001600160a01b031684528481015185850152604090810151908401529383019360609092019160010161110f565b5050848103604086015261115e81886110ad565b935050505082606083015295945050505050565b80356001600160a01b03811681146108fe57600080fd5b6000806040838503121561119c57600080fd5b6111a583611172565b946020939093013593505050565b6000602082840312156111c557600080fd5b6111ce82611172565b9392505050565b6000602082840312156111e757600080fd5b815180151581146111ce57600080fd5b634e487b7160e01b600052601160045260246000fd5b80820180821115611220576112206111f7565b92915050565b606081526000845180606084015260005b818110156112545760208188018101516080868401015201611237565b506000608082850101526080601f19601f8301168401019150508315156020830152826040830152949350505050565b60006020828403121561129657600080fd5b5051919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601260045260246000fd5b6000826112d8576112d86112b3565b500690565b600063ffffffff8083168181036112f6576112f66111f7565b6001019392505050565b602080825282518282018190526000919060409081850190868401855b8281101561134b57815180516001600160a01b0316855286015186850152928401929085019060010161131d565b5091979650505050505050565b81810381811115611220576112206111f7565b60008261137a5761137a6112b3565b50049056fea264697066735822122057a06da6af143bc4c0442176e529e80f419c33a37f1b9f47f12b020bde516a9464736f6c63430008130033";

type LotteryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LotteryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Lottery__factory extends ContractFactory {
  constructor(...args: LotteryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _usdtTokenAddress: PromiseOrValue<string>,
    _maxAmount: PromiseOrValue<BigNumberish>,
    _prizes: PromiseOrValue<BigNumberish>[],
    subscriptionId: PromiseOrValue<BigNumberish>,
    coordinator: PromiseOrValue<string>,
    keyHash: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Lottery> {
    return super.deploy(
      _usdtTokenAddress,
      _maxAmount,
      _prizes,
      subscriptionId,
      coordinator,
      keyHash,
      overrides || {}
    ) as Promise<Lottery>;
  }
  override getDeployTransaction(
    _usdtTokenAddress: PromiseOrValue<string>,
    _maxAmount: PromiseOrValue<BigNumberish>,
    _prizes: PromiseOrValue<BigNumberish>[],
    subscriptionId: PromiseOrValue<BigNumberish>,
    coordinator: PromiseOrValue<string>,
    keyHash: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _usdtTokenAddress,
      _maxAmount,
      _prizes,
      subscriptionId,
      coordinator,
      keyHash,
      overrides || {}
    );
  }
  override attach(address: string): Lottery {
    return super.attach(address) as Lottery;
  }
  override connect(signer: Signer): Lottery__factory {
    return super.connect(signer) as Lottery__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LotteryInterface {
    return new utils.Interface(_abi) as LotteryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Lottery {
    return new Contract(address, _abi, signerOrProvider) as Lottery;
  }
}
