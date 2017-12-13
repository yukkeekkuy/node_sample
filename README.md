# Modules

## config

[npm config](https://www.npmjs.com/package/config)

インストール
```
$ npm install config
```

使い方
* js
```
const config = require('config')
const data = config.get('sample');
console.log(data); // sample data!
```

* config/default.json
```
{
  "sample": "sample data!"
}
```

オプション
* NODE_ENV
NODE_ENVを指定してnodeを実行すると、任意の名前のconfigを利用する。
```
$ NODE_ENV=production node app.js
```
この場合、config/production.jsonを利用する。
