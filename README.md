# 目的
Node.js(Express)サンプル

# 起動
```
$ npm start
// package.jsonで以下コマンドを定義している
// $ node app.js
```
* この場合、config/default.jsonを使う

```
$ NODE_ENV=production node app.js
```
* この場合、config/production.jsonを使う

# 設定
## MySQL
環境にそってconfig/default.jsonなどのmysqlの値を変更する必要がある

# データベース
## migrations
```
$ knex migrate:latest
$ knex migrate:rollback
```
※ knexコマンドが使えることが前提

## seeds
```
$ knex seed:run
```
