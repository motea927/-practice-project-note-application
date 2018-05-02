## 以Node.js實作note app

> 藉由實作筆記本學習node.js的相關project.

## 功能說明:

* add指令增加筆記本事項(需傳入參數title及body)
* list指令顯示所有筆記事項
* read指令讀取事項(需傳入參數title)
* remove指令刪除筆記事項(需傳入參數title)
* --help指令查看說明

## 藉由此專案學習到:

* 基本執行與偵錯指令:node、node inspect、repl
* 使用debugger增加斷點
* 理解package.json原理及使用npm install相關指令
* 理解node.js之module相關概念並使用require與exports
* 使用[fs](https://nodejs.org/dist/latest-v8.x/docs/api/fs.html)模組
* 使用[Lodash](https://lodash.com/docs/4.17.10)簡化相關流程
* 了解process.argv並學習使用[yargs](https://www.npmjs.com/package/yargs)簡化
* 操作json檔案
* 學習es6 箭頭函式
* 使用[nodemon](https://github.com/remy/nodemon)偵錯

## 試著增加一項筆記吧!

```javascript
  node app.js add --title="some title" --body="some body"
```