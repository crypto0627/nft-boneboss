# Polygon NFT Tickets Project
<div align="center" id="top"></div>
入場Bone NightNlub驗證網站
----
### [NFT 網站連結](https://crypto0627.github.io/nft-boneboss/)

### 功能介紹:
你可以在專案網頁連結錢包、Mint NFT、查詢NFT可驗證的次數、驗證NFT、捐款。

1. 連結錢包:進入網頁後點擊畫面右上角的Connect按鈕連結您的Metamask錢包。
2. Mint NFT:連結錢包後點擊畫面Let's Mint NFT!即可花費0.02 mumbai測試幣Mint NFT。
3. 查詢NFT可驗證的次數:Mint NFT後點擊Check the remaining usage即可查詢您的NFT剩餘多少次驗證機會。
4. 驗證NFT:點擊Verify NFT Ticket驗證您購買的NFT來入場NightClub。<br>

![image](https://github.com/crypto0627/nft-boneboss/blob/main/result_pic/Banner.png)

#### NFT Mint顯示的交易訊息:
![image](https://github.com/crypto0627/nft-boneboss/blob/main/result_pic/mint.png)

#### NFT Check:
![image](https://github.com/crypto0627/nft-boneboss/blob/main/result_pic/check.png)

#### NFT Verify:
![image](https://github.com/crypto0627/nft-boneboss/blob/main/result_pic/verify.png)

#### NFT TokenURI_watch.png:
![image](https://github.com/crypto0627/nft-boneboss/blob/main/result_pic/TokenURI_watch.png)

#### NFT Collections:
![image](https://github.com/crypto0627/nft-boneboss/blob/main/result_pic/NFT_Collection.png)

#### Donate 我們:
![image](https://github.com/crypto0627/nft-boneboss/blob/main/result_pic/donate.png)

#### 查看公開的智能合約內容:
[NFT 合約連結](https://mumbai.polygonscan.com/address/0xB8ea8d146b880EEcd440477ecD83a1DD93F66b78#writeContract)

#### 比對TokenId:
![image](https://github.com/crypto0627/nft-boneboss/blob/main/result_pic/TokenId.png)

# 專案安裝步驟
----
## 前置作業
### 安裝及創建帳號
1. 安裝VS code、 Git、 Nodejs、 MetaMask。
2. 創建帳號 : PINATA、 ALCHEMY、 POLYSCAN、 GITHUB

### 下載專案
1. 在Terminal執行
    ```
    git clone https://github.com/crypto0627/nft-boneboss.git
    ```
2. 開啟VS Code 在Terminal執行
    ```
    npm install
    npm start
    ```
即可看到本地端網頁
### 智能合約
1. 到PINATA上傳圖片，並創建Metadata.json檔貼上這串Opensea的格式<br>
    ```{
      "description": "Friendly OpenSea Creature that enjoys long swims in the ocean.", 
      "external_url": "https://openseacreatures.io/3", 
      "image": "你的IPFS圖片網址", 
      "name": "Dave Starbelly",
      "attributes": [ ... ]
    }
    ```
2. 將Metadata.json檔上傳至PINATA
3. 在Terminal執行
    ```
    npm install -g @remix-project/remixd
    remixd -s <你的專案資料夾絕對路徑> --remix-ide https://remix.ethereum.org
    ```
4. 在Remix IDE點擊
<br>

![image](https://github.com/crypto0627/nft-boneboss/blob/main/result_pic/Remix_localhost.png)
<br>

5. 編譯Boneboss.sol並選擇MetaMask部署環境(MetaMask錢包記得改成Mumbai測試網)，記得deploy變數要打"boneboss" "你的錢包地址"
<br>

![image](https://github.com/crypto0627/nft-boneboss/blob/main/result_pic/remix_deploy.png)
<br>

6. 在Remix安裝插件FLATTENER，使用FLATTENER驗證合約，並依照POLYSCAN上指示操作驗證。
<br>

![image](https://github.com/crypto0627/nft-boneboss/blob/main/result_pic/polygon_verify.png)
<br>

![image](https://github.com/crypto0627/nft-boneboss/blob/main/result_pic/save_flatten.png)
<br>

複製所有代碼
<br>

![image](https://github.com/crypto0627/nft-boneboss/blob/main/result_pic/copy_verify.png)
<br>

貼上代碼並在第一行加上
```
// SPDX-License-Identifier: MIT
```
之後點擊驗證，即可完成驗證合約。

7. 驗證完後複製abi.json檔到專案資料夾 /src/utils/abi.json
<br>

![image](https://github.com/crypto0627/nft-boneboss/blob/main/result_pic/abi_copy.png)
<br>

8. 到ALCHEMY創建Mumbai測試網的WEB3 API，並複製API KEY到/src/utils/interact.js，複製合約地址到 /src/utils/interact.js 更改下圖的對應變數:
<br>

![image](https://github.com/crypto0627/nft-boneboss/blob/main/result_pic/alchemy_key.png)
<br>

點擊view key並複製HTTPS的API網址。
<br>

更改變數
<br>

![image](https://github.com/crypto0627/nft-boneboss/blob/main/result_pic/contract_change.png)
<br>

改Donate位址
<br>

![image](https://github.com/crypto0627/nft-boneboss/blob/main/result_pic/changedonate.png)
<br>

9. 在PLOYSCAN你的合約寫入Token URI(記得點擊紅色的連結Owner錢包按鈕)，如下圖所示:
![image](https://github.com/crypto0627/nft-boneboss/blob/main/result_pic/setTokenURI.png)
<br>

10. 在Github建立專案，並在此專案資料夾下執行
    ```
    git init
    git commit -m "first commit"
    git branch -M main
    git remote add origin 你Gihub專案的.git網址
    git push -u origin main
    ```
11. 更改package.json的homepage改成你的Github專案網址
<br>

![image](https://github.com/crypto0627/nft-boneboss/blob/main/result_pic/githomepage.png)
<br>

新增
```
    "scripts": {
        "start": "cross-env GENERATE_SOURCEMAP=false react-app-rewired start",
        "build": "react-app-rewired build",
        "test": "react-app-rewired test",
        "eject": "react-scripts eject",
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
    },
```
執行
```
npm run deploy
```
12. 到此處更改分支
<br>

![image](https://github.com/crypto0627/nft-boneboss/blob/main/result_pic/githubpage.png)
<br>

13. 完成專案部署
<br>

![image](https://github.com/crypto0627/nft-boneboss/blob/main/result_pic/complete.png)

<a href="#top">Back to top</a>