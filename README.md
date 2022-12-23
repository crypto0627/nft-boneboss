# NFT trickets project

In this project,you need to install Node.js,and have a AWS account,Metamask.
Your Metamask wallet must have mumbaifaucet.\
Download the project from my github and Establish the amplify part:

```shell
npm install
npm install -g @aws-aplify/cli
amplify configure
amplify init
amplify add api
amplify add auth
amplify push
amplify add hosting
amplify pulish
```
Deploy the smart contract online and copy your contract abi and address to Front-end.\
Test the project:
```
npm start
```
If the project can working normally,pulish the project on amplify.
```
amplify pulish
```
Finally,you can see web3.0 on the screen!
![image](https://github.com/crypto0627/nft-boneboss/blob/main/result_pic/1.png)
