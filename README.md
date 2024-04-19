# 環境構築手順
## 事前準備
nodeのインストール https://nodejs.org/en/ (v21で構築してます。)

- express
```
npm install -g express-generator
```

- create-react-app
```
npm install -g create-react-app
```

## 環境構築
### プロジェクト直下で実行。expressのインストール。
```
express ./
```

### package.jsonの内容を更新。(./package.json)
```
{
  "name": "react-express",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www",
    "server": "nodemon ./bin/www",
    "client": "set PORT=3002 && npm start --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\" "
  },
  "dependencies": {
    "axios": "^1.6.8",
    "concurrently": "^8.2.2",
    "cookie-parser": "~1.4.4",
    "debug": "~2.6.9",
    "express": "~4.16.1",
    "http-errors": "~1.6.3",
    "jade": "~1.11.0",
    "morgan": "~1.9.1",
    "nodemon": "^3.1.0"
  }
}
```

### app.jsの内容を更新。(./app.js)
```
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app;
```

### routesのusers.jsの更新(./routes/users.js)
```
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{
    id: 1,
    name: "yujiro1"
  }, {
    id: 2,
    name: "yuziro2"
  }]);
});

module.exports = router;
```

### プロジェクト直下npm installを実行。
```
npm install
```

### clientフォルダへ移動してnpm installを実行。
```
cd client
npm install
```

### プロジェクト直下に戻ってnpm run devを実行(reactとexpressが立ち上がる、reactがポート3002、expressがポート3001)
```
cd ../
npm run dev
```

## 参考
https://qiita.com/fe_js_engineer/items/b052918f64b2df554d0f