'use strinct'

const express = require('express');
const knex = require('lib/mysql');
const app = express();
const router = express.Router();

// ミドルウェア
const myLogger = (req, res, next) => {
  console.log('LOGGED');
  next();
};
const sampleFunction = (req, res, next) => {
  console.log('sampleFunction');
  req.sample = 'よしたにです';
  next();
};

// どのURLが呼び出されても実行される
app.use(myLogger);
app.use(sampleFunction);

// ルーティングサンプル
app.get('/', (req, res) => {
  console.log(req.sample);
  res.send('Hello World!');
}).get('/test', (req, res) => {
  console.log(req.sample);
  const array = {
    name: 'yoshitani'
  };
  res.send(array);
});

// getリクエストでパラメータを取得するサンプル
app.get('/name/:name', (req, res) => {
  res.send(req.params.name);
});

// config使ってみるサンプル
app.get('/config', (req, res) => {
  const config = require('config');
  const test = config.get('test');
  console.log(test);
  res.send(test);
});

// mysqlからデータを取得するサンプル
app.get('/data/sample/:name', async (req, res) => {
  const name = req.params.name;
  try {
    let query = knex.select().from('sample');
    if (name) {
      query = query.where('name', '=', name);
    }
    const data = await query.then();
    res.send(data);
  } catch (err) {
    throw err;
  }
});

// エラーサンプル
router.get('/error', (err, req, res, next) => {
  res.status(500).send('Something broke!');
});

app.listen(3000);
