// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Address.sol";

contract OwnableDelegateProxy {}

contract ProxyRegistry {
  mapping(address => OwnableDelegateProxy) public proxies;
}

contract boneboss is ERC721, ReentrancyGuard, Ownable {
  using Counters for Counters.Counter;

  constructor(string memory customBaseURI_, address proxyRegistryAddress_)
    ERC721("boneboss", "bb2")
  {
    customBaseURI = customBaseURI_;

    proxyRegistryAddress = proxyRegistryAddress_;
  }

  /** MINTING LIMITS **/

  mapping(address => uint256) private mintCountMap;

  mapping(address => uint256) private allowedMintCountMap;

  uint256 public constant MINT_LIMIT_PER_WALLET = 5;

  function allowedMintCount(address minter) public view returns (uint256) {
    return MINT_LIMIT_PER_WALLET - mintCountMap[minter];
  }

  function updateMintCount(address minter, uint256 count) private {
    mintCountMap[minter] += count;
  }

  /** MINTING **/

  uint256 public constant MAX_SUPPLY = 100;

  uint256 public constant MAX_MULTIMINT = 100;

  uint256 public constant PRICE = 20000000000000000;

  Counters.Counter private supplyCounter;



  function mint(uint256 count) public payable nonReentrant {
    require(saleIsActive, "Sale not active");

    if (allowedMintCount(msg.sender) >= count) {
      updateMintCount(msg.sender, count);
    } else {
      revert("Minting limit exceeded");
    }

    require(totalSupply() + count - 1 < MAX_SUPPLY, "Exceeds max supply");

    require(count <= MAX_MULTIMINT, "Mint at most 100 at a time");

    require(
      msg.value >= PRICE * count, "Insufficient payment, 0.02 ETH per item"
    );

    for (uint256 i = 0; i < count; i++) {
      _mint(msg.sender, totalSupply());

      supplyCounter.increment();
    }
    
  }

  function totalSupply() public view returns (uint256) {
    return supplyCounter.current();
  }

  /** ACTIVATION **/

  bool public saleIsActive = true;

  function setSaleIsActive(bool saleIsActive_) external onlyOwner {
    saleIsActive = saleIsActive_;
  }

  /** URI HANDLING **/

  string private customBaseURI;

  mapping(uint256 => string) private tokenURIMap;//set (tokenId=>ipfs://pic)
  mapping(uint256 => uint256) private tokencountMap;//set (tokenId=>10)

  function setTokenURI(string memory tokenURI_)
    external
    onlyOwner
  {
      for (uint256 i=0; i<MAX_SUPPLY;i++){
        tokenURIMap[i] = tokenURI_;
        tokencountMap[i]=10;
      }
  }

  function setBaseURI(string memory customBaseURI_) external onlyOwner {
    customBaseURI = customBaseURI_;
  }

  function _baseURI() internal view virtual override returns (string memory) {
    return customBaseURI;
  }

  function tokenURI(uint256 tokenId) public view override
    returns (string memory)
  {
    string memory tokenURI_ = tokenURIMap[tokenId];

    if (bytes(tokenURI_).length > 0) {
      return tokenURI_;
    }

    return _baseURI();
  }

  /** PAYOUT **/

  function withdraw() public nonReentrant {
    uint256 balance = address(this).balance;

    Address.sendValue(payable(owner()), balance);
  }

  /** PROXY REGISTRY **/

  address private immutable proxyRegistryAddress;

  function isApprovedForAll(address owner, address operator)
    override
    public
    view
    returns (bool)
  {
    ProxyRegistry proxyRegistry = ProxyRegistry(proxyRegistryAddress);

    if (address(proxyRegistry.proxies(owner)) == operator) {
      return true;
    }

    return super.isApprovedForAll(owner, operator);
  }


  /** Verify tokenId **/

  function tokenVerify(uint256 tokenId) public
      {
        if(msg.sender == ownerOf(tokenId)){
          if(tokencountMap[tokenId]<0){
        }else{
          tokencountMap[tokenId]-=1;
        }
        }
        
      }
  
  function nftused(uint256 tokenId) public view returns(uint256){
    return  tokencountMap[tokenId];
  }
}

//The code writed by JakeHong.