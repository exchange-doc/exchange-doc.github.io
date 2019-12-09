window.openapi = [
  {
    "index": 0,
    "name": "订单服务",
    "desc": "订单服务",
    "add_time": 1566983015,
    "up_time": 1571804561,
    "list": [
      {
        "query_path": {
          "path": "/open/api/margin/mass_replace",
          "params": []
        },
        "edit_uid": 0,
        "status": "undone",
        "type": "static",
        "req_body_is_json_schema": false,
        "res_body_is_json_schema": false,
        "api_opened": true,
        "index": 0,
        "tag": [],
        "_id": 1009,
        "title": "杠杆批量下单取消",
        "path": "/open/api/margin/mass_replace",
        "method": "POST",
        "desc": "",
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "5dedc1eae465640ff231ddf6",
            "name": "Content-Type",
            "value": "application/x-www-form-urlencoded",
            "desc": ""
          }
        ],
        "req_body_type": "form",
        "req_body_form": [
          {
            "required": "0",
            "_id": "5dedc1eae465640ff231ddfc",
            "name": "mass_place",
            "type": "text",
            "desc": ""
          },
          {
            "required": "1",
            "_id": "5dedc1eae465640ff231ddfb",
            "name": "symbol",
            "type": "text",
            "desc": ""
          },
          {
            "required": "1",
            "_id": "5dedc1eae465640ff231ddfa",
            "name": "time",
            "type": "text",
            "desc": ""
          },
          {
            "required": "1",
            "_id": "5dedc1eae465640ff231ddf9",
            "name": "sign",
            "type": "text",
            "desc": ""
          },
          {
            "required": "1",
            "_id": "5dedc1eae465640ff231ddf8",
            "name": "api_key",
            "type": "text",
            "desc": ""
          },
          {
            "required": "0",
            "_id": "5dedc1eae465640ff231ddf7",
            "name": "mass_cancel",
            "type": "text",
            "desc": ""
          }
        ],
        "project_id": 73,
        "catid": 228,
        "req_params": [],
        "res_body_type": "json",
        "uid": 204,
        "add_time": 1567158008,
        "up_time": 1575862762,
        "__v": 0,
        "markdown": "",
        "res_body": ""
      },
      {
        "query_path": {
          "path": "/open/api/create_order",
          "params": []
        },
        "edit_uid": 0,
        "status": "undone",
        "type": "static",
        "req_body_is_json_schema": true,
        "res_body_is_json_schema": true,
        "api_opened": true,
        "index": 0,
        "tag": [],
        "_id": 991,
        "method": "POST",
        "catid": 228,
        "title": "现货下单接口",
        "path": "/open/api/create_order",
        "project_id": 73,
        "req_params": [],
        "res_body_type": "json",
        "uid": 204,
        "add_time": 1567154938,
        "up_time": 1575862751,
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "5dedc1dfe465640ff231dde7",
            "name": "Content-Type",
            "value": "application/x-www-form-urlencoded"
          }
        ],
        "req_body_form": [
          {
            "required": "1",
            "_id": "5dedc1dfe465640ff231ddef",
            "name": "side",
            "type": "text",
            "example": "SELL"
          },
          {
            "required": "1",
            "_id": "5dedc1dfe465640ff231ddee",
            "name": "type",
            "type": "text",
            "example": "1",
            "desc": ""
          },
          {
            "required": "1",
            "_id": "5dedc1dfe465640ff231dded",
            "name": "volume",
            "type": "text",
            "example": "0.001",
            "desc": ""
          },
          {
            "required": "1",
            "_id": "5dedc1dfe465640ff231ddec",
            "name": "symbol",
            "type": "text",
            "example": "bchusdt",
            "desc": ""
          },
          {
            "required": "1",
            "_id": "5dedc1dfe465640ff231ddeb",
            "name": "time",
            "type": "text",
            "example": "1567415490190",
            "desc": ""
          },
          {
            "required": "1",
            "_id": "5dedc1dfe465640ff231ddea",
            "name": "api_key",
            "type": "text",
            "example": "1174082eaf4002419a0628d77439090c",
            "desc": ""
          },
          {
            "required": "1",
            "_id": "5dedc1dfe465640ff231dde9",
            "name": "sign",
            "type": "text",
            "example": "74da381312ba855f5b03b867ef6d44b4",
            "desc": ""
          },
          {
            "required": "1",
            "_id": "5dedc1dfe465640ff231dde8",
            "name": "price",
            "type": "text",
            "example": "1",
            "desc": ""
          }
        ],
        "__v": 0,
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{}}",
        "req_body_type": "form",
        "req_body_other": "{\"type\":\"object\",\"title\":\"empty object\",\"properties\":{}}"
      },
      {
        "query_path": {
          "path": "/open/api/cancel_order",
          "params": []
        },
        "edit_uid": 0,
        "status": "undone",
        "type": "static",
        "req_body_is_json_schema": true,
        "res_body_is_json_schema": true,
        "api_opened": true,
        "index": 0,
        "tag": [],
        "_id": 997,
        "title": "现货取消接口",
        "path": "/open/api/cancel_order",
        "method": "POST",
        "desc": "",
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "5dedc1e4e465640ff231ddf0",
            "name": "Content-Type",
            "value": "application/x-www-form-urlencoded"
          }
        ],
        "req_body_type": "form",
        "req_body_form": [
          {
            "required": "1",
            "_id": "5dedc1e4e465640ff231ddf5",
            "name": "order_id",
            "type": "text",
            "example": "$582.body.data.order_id"
          },
          {
            "required": "1",
            "_id": "5dedc1e4e465640ff231ddf4",
            "name": "symbol",
            "type": "text",
            "example": "bchusdt"
          },
          {
            "required": "1",
            "_id": "5dedc1e4e465640ff231ddf3",
            "name": "api_key",
            "type": "text",
            "example": "1174082eaf4002419a0628d77439090c"
          },
          {
            "required": "1",
            "_id": "5dedc1e4e465640ff231ddf2",
            "name": "time",
            "type": "text",
            "example": "@time"
          },
          {
            "required": "1",
            "_id": "5dedc1e4e465640ff231ddf1",
            "name": "sign",
            "type": "text"
          }
        ],
        "project_id": 73,
        "catid": 228,
        "req_params": [],
        "res_body_type": "json",
        "uid": 204,
        "add_time": 1567158008,
        "up_time": 1575862756,
        "__v": 0,
        "markdown": "",
        "res_body": "{\"type\":\"object\",\"title\":\"empty object\",\"properties\":{}}"
      },
      {
        "query_path": {
          "path": "/open/api/mass_replaceV2",
          "params": []
        },
        "edit_uid": 0,
        "status": "undone",
        "type": "static",
        "req_body_is_json_schema": false,
        "res_body_is_json_schema": false,
        "api_opened": true,
        "index": 0,
        "tag": [],
        "_id": 1015,
        "title": "现货批量下单接口V2",
        "path": "/open/api/mass_replaceV2",
        "method": "POST",
        "desc": "",
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "5dedc1f0e465640ff231ddfd",
            "name": "Content-Type",
            "value": "application/x-www-form-urlencoded",
            "desc": ""
          }
        ],
        "req_body_type": "form",
        "req_body_form": [
          {
            "required": "0",
            "_id": "5dedc1f0e465640ff231de03",
            "name": "mass_place",
            "type": "text",
            "desc": ""
          },
          {
            "required": "1",
            "_id": "5dedc1f0e465640ff231de02",
            "name": "symbol",
            "type": "text",
            "desc": ""
          },
          {
            "required": "1",
            "_id": "5dedc1f0e465640ff231de01",
            "name": "time",
            "type": "text",
            "desc": ""
          },
          {
            "required": "1",
            "_id": "5dedc1f0e465640ff231de00",
            "name": "sign",
            "type": "text",
            "desc": ""
          },
          {
            "required": "1",
            "_id": "5dedc1f0e465640ff231ddff",
            "name": "api_key",
            "type": "text",
            "desc": ""
          },
          {
            "required": "0",
            "_id": "5dedc1f0e465640ff231ddfe",
            "name": "mass_cancel",
            "type": "text",
            "desc": ""
          }
        ],
        "project_id": 73,
        "catid": 228,
        "req_params": [],
        "res_body_type": "json",
        "uid": 204,
        "add_time": 1567158009,
        "up_time": 1575862768,
        "__v": 0,
        "markdown": "",
        "res_body": ""
      }
    ]
  },
  {
    "index": 0,
    "name": "CMC对接",
    "desc": null,
    "add_time": 1574754608,
    "up_time": 1574754608,
    "list": [
      {
        "query_path": {
          "path": "/open/pub/trades",
          "params": []
        },
        "edit_uid": 0,
        "status": "undone",
        "type": "static",
        "req_body_is_json_schema": false,
        "res_body_is_json_schema": true,
        "api_opened": true,
        "index": 0,
        "tag": [],
        "_id": 2427,
        "method": "GET",
        "catid": 628,
        "title": "交易列表接口(Trade)",
        "path": "/open/pub/trades",
        "project_id": 73,
        "req_params": [],
        "res_body_type": "json",
        "uid": 247,
        "add_time": 1574754710,
        "up_time": 1575862796,
        "req_query": [
          {
            "required": "1",
            "_id": "5dedc20ce465640ff231de0b",
            "name": "base",
            "example": "btc",
            "desc": ""
          },
          {
            "required": "1",
            "_id": "5dedc20ce465640ff231de0a",
            "name": "quote",
            "example": "usdt",
            "desc": ""
          },
          {
            "required": "0",
            "_id": "5dedc20ce465640ff231de09",
            "name": "trades",
            "example": "100",
            "desc": "默认返回100条记录"
          }
        ],
        "req_headers": [],
        "req_body_form": [],
        "__v": 0,
        "markdown": "```\n{\n\t\"code\": \"0\",\n\t\"msg\": \"suc\",\n\t\"message\": null,\n\t\"data\": {\n\t\t\"date\": 1574735405297,\n\t\t\"trades\": [\n                        {\n\t\t\t\t\"tradeID\": 3523643,\n\t\t\t\t\"price\": \"0.01\",\n\t\t\t\t\"base_volume\": \"569000\",\n\t\t\t\t\"quote_volume\": \"0.01000000\",\n\t\t\t\t\"trade_timestamp\": \"1566360780\",\n\t\t\t\t\"type\": \"sell\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"tradeID\": 3523642,\n\t\t\t\t\"price\": \"0.01\",\n\t\t\t\t\"base_volume\": \"569000\",\n\t\t\t\t\"quote_volume\": \"0.01000000\",\n\t\t\t\t\"trade_timestamp\": \"1566360780\",\n\t\t\t\t\"type\": \"sell\"\n\t\t\t}\n\t\t]\n\t}\n}\n```",
        "desc": "<pre><code>{\n\t\"code\": \"0\",\n\t\"msg\": \"suc\",\n\t\"message\": null,\n\t\"data\": {\n\t\t\"date\": 1574735405297,\n\t\t\"trades\": [\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{\n\t\t\t\t\"tradeID\": 3523643,\n\t\t\t\t\"price\": \"0.01\",\n\t\t\t\t\"base_volume\": \"569000\",\n\t\t\t\t\"quote_volume\": \"0.01000000\",\n\t\t\t\t\"trade_timestamp\": \"1566360780\",\n\t\t\t\t\"type\": \"sell\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"tradeID\": 3523642,\n\t\t\t\t\"price\": \"0.01\",\n\t\t\t\t\"base_volume\": \"569000\",\n\t\t\t\t\"quote_volume\": \"0.01000000\",\n\t\t\t\t\"trade_timestamp\": \"1566360780\",\n\t\t\t\t\"type\": \"sell\"\n\t\t\t}\n\t\t]\n\t}\n}\n</code></pre>\n",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"string\"},\"msg\":{\"type\":\"string\"},\"message\":{\"type\":\"null\"},\"data\":{\"type\":\"object\",\"properties\":{\"date\":{\"type\":\"number\"},\"trades\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"tradeID\":{\"type\":\"number\",\"description\":\"交易记录ID\"},\"price\":{\"type\":\"string\",\"description\":\"价格\"},\"base_volume\":{\"type\":\"string\",\"description\":\"基础货币交易量\"},\"quote_volume\":{\"type\":\"string\",\"description\":\"计价货币交易量\"},\"trade_timestamp\":{\"type\":\"string\",\"description\":\"交易时间 时间戳\"},\"type\":{\"type\":\"string\",\"description\":\"交易方向（sell/buy）\"}},\"required\":[\"tradeID\",\"price\",\"base_volume\",\"quote_volume\",\"trade_timestamp\",\"type\"]}}}}}}"
      },
      {
        "query_path": {
          "path": "/open/pub/ticker",
          "params": []
        },
        "edit_uid": 0,
        "status": "undone",
        "type": "static",
        "req_body_is_json_schema": false,
        "res_body_is_json_schema": true,
        "api_opened": true,
        "index": 0,
        "tag": [],
        "_id": 2421,
        "method": "GET",
        "catid": 628,
        "title": "币对行情接口(Ticker)",
        "path": "/open/pub/ticker",
        "project_id": 73,
        "req_params": [],
        "res_body_type": "json",
        "uid": 247,
        "add_time": 1574754678,
        "up_time": 1575862784,
        "req_query": [],
        "req_headers": [],
        "req_body_form": [],
        "__v": 0,
        "markdown": "```\n{\n\t\"code\": \"0\",\n\t\"msg\": \"suc\",\n\t\"message\": null,\n\t\"data\": {\n\t\t\"date\": 1574735405297,\n\t\t\"ticker\": {\n\t\t\t\"BTC_USDT\": {\n\t\t\t\t\"base_id\": \"1\",\n\t\t\t\t\"quote_id\": \"825\",\n\t\t\t\t\"last_price\": \"10000\",\n\t\t\t\t\"quote_volume\": \"20000\",\n\t\t\t\t\"base_volume\": \"2\"\n\t\t\t},\n\t\t\t\"LTC_BTC\": {\n\t\t\t\t\"base_id\": \"2\",\n\t\t\t\t\"quote_id\": \"1\",\n\t\t\t\t\"last_price\": \"0.00699900\",\n\t\t\t\t\"base_volume\": \"20028,526\",\n\t\t\t\t\"quote_volume\": \"279594\"\n\t\t\t}\n\t\t}\n\t}\n}\n```",
        "desc": "<pre><code>{\n\t\"code\": \"0\",\n\t\"msg\": \"suc\",\n\t\"message\": null,\n\t\"data\": {\n\t\t\"date\": 1574735405297,\n\t\t\"ticker\": {\n\t\t\t\"BTC_USDT\": {\n\t\t\t\t\"base_id\": \"1\",\n\t\t\t\t\"quote_id\": \"825\",\n\t\t\t\t\"last_price\": \"10000\",\n\t\t\t\t\"quote_volume\": \"20000\",\n\t\t\t\t\"base_volume\": \"2\"\n\t\t\t},\n\t\t\t\"LTC_BTC\": {\n\t\t\t\t\"base_id\": \"2\",\n\t\t\t\t\"quote_id\": \"1\",\n\t\t\t\t\"last_price\": \"0.00699900\",\n\t\t\t\t\"base_volume\": \"20028,526\",\n\t\t\t\t\"quote_volume\": \"279594\"\n\t\t\t}\n\t\t}\n\t}\n}\n</code></pre>\n",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"string\"},\"msg\":{\"type\":\"string\"},\"message\":{\"type\":\"null\"},\"data\":{\"type\":\"object\",\"properties\":{\"date\":{\"type\":\"number\"},\"ticker\":{\"type\":\"object\",\"properties\":{\"BTC_USDT\":{\"type\":\"object\",\"properties\":{\"base_id\":{\"type\":\"string\",\"description\":\"base货币ID\"},\"quote_id\":{\"type\":\"string\",\"description\":\"计价货币ID\"},\"last_price\":{\"type\":\"string\",\"description\":\"最新交易价格\"},\"quote_volume\":{\"type\":\"string\",\"description\":\"计价货币交易量\"},\"base_volume\":{\"type\":\"string\",\"description\":\"基础货币交易量\"}}},\"LTC_BTC\":{\"type\":\"object\",\"properties\":{\"base_id\":{\"type\":\"string\",\"description\":\"base货币ID\"},\"quote_id\":{\"type\":\"string\",\"description\":\"计价货币ID\"},\"last_price\":{\"type\":\"string\"},\"base_volume\":{\"type\":\"string\"},\"quote_volume\":{\"type\":\"string\"}}}}}}}}}"
      },
      {
        "query_path": {
          "path": "/open/pub/asset",
          "params": []
        },
        "edit_uid": 0,
        "status": "undone",
        "type": "static",
        "req_body_is_json_schema": false,
        "res_body_is_json_schema": true,
        "api_opened": true,
        "index": 0,
        "tag": [],
        "_id": 2418,
        "method": "GET",
        "catid": 628,
        "title": "币种列表接口(Asset)",
        "path": "/open/pub/asset",
        "project_id": 73,
        "req_params": [],
        "res_body_type": "json",
        "uid": 247,
        "add_time": 1574754647,
        "up_time": 1575862779,
        "req_query": [],
        "req_headers": [],
        "req_body_form": [],
        "__v": 0,
        "markdown": "```\n{\n\t\"code\": \"0\",\n\t\"msg\": \"suc\",\n\t\"message\": null,\n\t\"data\": {\n\t\t\"date\": 1574735405297,\n\t\t\"asset\": {\n\t\t\t\"BTC\": {\n\t\t\t\t\"name\": \"bitcoin\",\n\t\t\t\t\"unified_cryptoasset_id\": \"1\",\n\t\t\t\t\"can_withdraw\": \"true\",\n\t\t\t\t\"can_deposit\": \"true\",\n\t\t\t\t\"min_withdraw\": \"0.01\",\n\t\t\t\t\"max_withdraw \": \"100\"\n\t\t\t},\n\t\t\t\"ETH\": {\n\t\t\t\t\"name\": \"bitcoin\",\n\t\t\t\t\"unified_cryptoasset_id\": \"1027\",\n\t\t\t\t\"can_withdraw\": \"true\",\n\t\t\t\t\"can_deposit\": \"true\",\n\t\t\t\t\"min_withdraw\": \"0.01\",\n\t\t\t\t\"max_withdraw \": \"100\"\n\t\t\t}\n\t\t}\n\t}\n}\n```",
        "desc": "<pre><code>{\n\t\"code\": \"0\",\n\t\"msg\": \"suc\",\n\t\"message\": null,\n\t\"data\": {\n\t\t\"date\": 1574735405297,\n\t\t\"asset\": {\n\t\t\t\"BTC\": {\n\t\t\t\t\"name\": \"bitcoin\",\n\t\t\t\t\"unified_cryptoasset_id\": \"1\",\n\t\t\t\t\"can_withdraw\": \"true\",\n\t\t\t\t\"can_deposit\": \"true\",\n\t\t\t\t\"min_withdraw\": \"0.01\",\n\t\t\t\t\"max_withdraw \": \"100\"\n\t\t\t},\n\t\t\t\"ETH\": {\n\t\t\t\t\"name\": \"bitcoin\",\n\t\t\t\t\"unified_cryptoasset_id\": \"1027\",\n\t\t\t\t\"can_withdraw\": \"true\",\n\t\t\t\t\"can_deposit\": \"true\",\n\t\t\t\t\"min_withdraw\": \"0.01\",\n\t\t\t\t\"max_withdraw \": \"100\"\n\t\t\t}\n\t\t}\n\t}\n}\n</code></pre>\n",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"string\"},\"msg\":{\"type\":\"string\"},\"message\":{\"type\":\"null\"},\"data\":{\"type\":\"object\",\"properties\":{\"date\":{\"type\":\"number\"},\"asset\":{\"type\":\"object\",\"properties\":{\"BTC\":{\"type\":\"object\",\"properties\":{\"name\":{\"type\":\"string\",\"description\":\"币种全称\"},\"unified_cryptoasset_id\":{\"type\":\"string\",\"description\":\"币种ID\"},\"can_withdraw\":{\"type\":\"string\",\"description\":\"是否开启提现\"},\"can_deposit\":{\"type\":\"string\",\"description\":\"是否开启充值\"},\"min_withdraw\":{\"type\":\"string\",\"description\":\"最小提现数额\"},\"max_withdraw \":{\"type\":\"string\",\"description\":\"最大提现数额\"}}},\"ETH\":{\"type\":\"object\",\"properties\":{\"name\":{\"type\":\"string\"},\"unified_cryptoasset_id\":{\"type\":\"string\",\"description\":\"币种ID\"},\"can_withdraw\":{\"type\":\"string\"},\"can_deposit\":{\"type\":\"string\"},\"min_withdraw\":{\"type\":\"string\"},\"max_withdraw \":{\"type\":\"string\"}}}}}}}}}"
      },
      {
        "query_path": {
          "path": "/open/pub/orderbook",
          "params": []
        },
        "edit_uid": 0,
        "status": "undone",
        "type": "static",
        "req_body_is_json_schema": false,
        "res_body_is_json_schema": true,
        "api_opened": true,
        "index": 0,
        "tag": [],
        "_id": 2424,
        "method": "GET",
        "catid": 628,
        "title": "盘口数据接口(OrderBook)",
        "path": "/open/pub/orderbook",
        "project_id": 73,
        "req_params": [],
        "res_body_type": "json",
        "uid": 247,
        "add_time": 1574754695,
        "up_time": 1575862789,
        "req_query": [
          {
            "required": "1",
            "_id": "5dedc205e465640ff231de08",
            "name": "base",
            "example": "btc",
            "desc": "btc"
          },
          {
            "required": "1",
            "_id": "5dedc205e465640ff231de07",
            "name": "quote",
            "example": "usdt",
            "desc": "usdt"
          },
          {
            "required": "0",
            "_id": "5dedc205e465640ff231de06",
            "name": "depth",
            "example": "0,1,2",
            "desc": "不填默认为0"
          },
          {
            "required": "0",
            "_id": "5dedc205e465640ff231de05",
            "name": "bids",
            "example": "150",
            "desc": ""
          },
          {
            "required": "0",
            "_id": "5dedc205e465640ff231de04",
            "name": "asks",
            "example": "150",
            "desc": ""
          }
        ],
        "req_headers": [],
        "req_body_form": [],
        "__v": 0,
        "markdown": "```\n{\n\t\"code\": \"0\",\n\t\"msg\": \"suc\",\n\t\"message\": null,\n\t\"data\": {\n\t\t\"date\": 1574735405297,\n\t\t\"orderbook\": {\n\t\t\t\"bids\": [\n\t\t\t\t[\"12462000\", \"0.04548320\"],\n\t\t\t\t[\"12457000\", \"3.00000000\"]\n\t\t\t],\n\t\t\t\"asks\": [\n\t\t\t\t[\"12506000\", \"2.73042000\"],\n\t\t\t\t[\"12508000\", \"0.33660000\"]\n\t\t\t]\n\t\t}\n\t}\n}\n```",
        "desc": "<pre><code>{\n\t\"code\": \"0\",\n\t\"msg\": \"suc\",\n\t\"message\": null,\n\t\"data\": {\n\t\t\"date\": 1574735405297,\n\t\t\"orderbook\": {\n\t\t\t\"bids\": [\n\t\t\t\t[\"12462000\", \"0.04548320\"],\n\t\t\t\t[\"12457000\", \"3.00000000\"]\n\t\t\t],\n\t\t\t\"asks\": [\n\t\t\t\t[\"12506000\", \"2.73042000\"],\n\t\t\t\t[\"12508000\", \"0.33660000\"]\n\t\t\t]\n\t\t}\n\t}\n}\n</code></pre>\n",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"string\"},\"msg\":{\"type\":\"string\"},\"message\":{\"type\":\"null\"},\"data\":{\"type\":\"object\",\"properties\":{\"date\":{\"type\":\"number\"},\"orderbook\":{\"type\":\"object\",\"properties\":{\"bids\":{\"type\":\"array\",\"items\":{\"type\":\"array\",\"items\":{\"type\":\"string\"}}},\"asks\":{\"type\":\"array\",\"items\":{\"type\":\"array\",\"items\":{\"type\":\"string\"}}}}}}}}}"
      }
    ]
  }
]
