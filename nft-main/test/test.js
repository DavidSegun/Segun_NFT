const {expect} = require('chai');
const {ethers, run} = require('hardhat');

describe('NEw HB test Tests', function () {
  let nft;
  beforeEach(async function () {
    // This is executed before each test
    // Deploying the smart contract
    const NFT = await ethers.getContractFactory('HeadsByBujuNft');
    nft = await NFT.deploy('HBNT', 'HBT', 'ipfs://QmYEW5hGUn4PwUEAHjEXQQAaiNdL6qFB6vbTVdy42MyM4x/');
    await nft.deployed();
    await nft.pause(false);
  });

  it('Should mint NFT', async () => {
    expect(await nft.mintNFT(1)).to.emit(nft, 'Transfer');
    // await mint.wait();
  });

  // it('Verify Contract', async function () {
  //   const NFT = await ethers.getContractFactory('HeadsByBujuNft');
  //   let nft = await NFT.deploy('HeadsByBuju', 'HB', 'ipfs://QmYEW5hGUn4PwUEAHjEXQQAaiNdL6qFB6vbTVdy42MyM4x/');
  //   await nft.deployed();
  //   await nft.pause(false);
  //   await nft.wait();
  //   await run('verify:verify', {
  //     address: nft.address,
  //     constructorArguments: ['HeadsByBuju', 'HB', 'ipfs://QmYEW5hGUn4PwUEAHjEXQQAaiNdL6qFB6vbTVdy42MyM4x/'],
  //   });

  //   // expect(await greeter.greet()).to.equal('Hola, mundo!');
  // });
});
