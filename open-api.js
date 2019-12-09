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
        "api_opened": false,
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
            "_id": "5ddddbd4e465640ff231d969",
            "name": "Content-Type",
            "value": "application/x-www-form-urlencoded",
            "desc": ""
          }
        ],
        "req_body_type": "form",
        "req_body_form": [
          {
            "required": "0",
            "_id": "5ddddbd4e465640ff231d970",
            "name": "mass_place",
            "type": "text",
            "desc": ""
          },
          {
            "required": "1",
            "_id": "5ddddbd4e465640ff231d96f",
            "name": "symbol",
            "type": "text",
            "desc": ""
          },
          {
            "required": "1",
            "_id": "5ddddbd4e465640ff231d96e",
            "name": "time",
            "type": "text",
            "desc": ""
          },
          {
            "required": "1",
            "_id": "5ddddbd4e465640ff231d96d",
            "name": "sign",
            "type": "text",
            "desc": ""
          },
          {
            "required": "1",
            "_id": "5ddddbd4e465640ff231d96c",
            "name": "api_key",
            "type": "text",
            "desc": ""
          },
          {
            "required": "0",
            "_id": "5ddddbd4e465640ff231d96b",
            "name": "mass_cancel",
            "type": "text",
            "desc": ""
          },
          {
            "required": "0",
            "_id": "5ddddbd4e465640ff231d96a",
            "name": "secretKey",
            "type": "text",
            "example": "",
            "desc": ""
          }
        ],
        "project_id": 73,
        "catid": 228,
        "req_params": [],
        "res_body_type": "json",
        "uid": 204,
        "add_time": 1567158008,
        "up_time": 1574820820,
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
        "api_opened": false,
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
        "up_time": 1574820797,
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "5ddddbbde465640ff231d950",
            "name": "Content-Type",
            "value": "application/x-www-form-urlencoded"
          }
        ],
        "req_body_form": [
          {
            "required": "1",
            "_id": "5ddddbbde465640ff231d959",
            "name": "side",
            "type": "text",
            "example": "SELL"
          },
          {
            "required": "1",
            "_id": "5ddddbbde465640ff231d958",
            "name": "type",
            "type": "text",
            "example": "1",
            "desc": ""
          },
          {
            "required": "1",
            "_id": "5ddddbbde465640ff231d957",
            "name": "volume",
            "type": "text",
            "example": "0.001",
            "desc": ""
          },
          {
            "required": "1",
            "_id": "5ddddbbde465640ff231d956",
            "name": "symbol",
            "type": "text",
            "example": "bchusdt",
            "desc": ""
          },
          {
            "required": "1",
            "_id": "5ddddbbde465640ff231d955",
            "name": "time",
            "type": "text",
            "example": "1567415490190",
            "desc": ""
          },
          {
            "required": "1",
            "_id": "5ddddbbde465640ff231d954",
            "name": "api_key",
            "type": "text",
            "example": "1174082eaf4002419a0628d77439090c",
            "desc": ""
          },
          {
            "required": "1",
            "_id": "5ddddbbde465640ff231d953",
            "name": "sign",
            "type": "text",
            "example": "74da381312ba855f5b03b867ef6d44b4",
            "desc": ""
          },
          {
            "required": "1",
            "_id": "5ddddbbde465640ff231d952",
            "name": "price",
            "type": "text",
            "example": "1",
            "desc": ""
          },
          {
            "required": "0",
            "_id": "5ddddbbde465640ff231d951",
            "name": "secretKey",
            "type": "text",
            "example": "",
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
        "api_opened": false,
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
            "_id": "5ddddbc6e465640ff231d95a",
            "name": "Content-Type",
            "value": "application/x-www-form-urlencoded"
          }
        ],
        "req_body_type": "form",
        "req_body_form": [
          {
            "required": "1",
            "_id": "5ddddbc6e465640ff231d960",
            "name": "order_id",
            "type": "text",
            "example": "$582.body.data.order_id"
          },
          {
            "required": "1",
            "_id": "5ddddbc6e465640ff231d95f",
            "name": "symbol",
            "type": "text",
            "example": "bchusdt"
          },
          {
            "required": "1",
            "_id": "5ddddbc6e465640ff231d95e",
            "name": "api_key",
            "type": "text",
            "example": "1174082eaf4002419a0628d77439090c"
          },
          {
            "required": "1",
            "_id": "5ddddbc6e465640ff231d95d",
            "name": "time",
            "type": "text",
            "example": "@time"
          },
          {
            "required": "1",
            "_id": "5ddddbc6e465640ff231d95c",
            "name": "sign",
            "type": "text"
          },
          {
            "required": "0",
            "_id": "5ddddbc6e465640ff231d95b",
            "name": "secretKey",
            "type": "text",
            "example": "",
            "desc": ""
          }
        ],
        "project_id": 73,
        "catid": 228,
        "req_params": [],
        "res_body_type": "json",
        "uid": 204,
        "add_time": 1567158008,
        "up_time": 1574820806,
        "__v": 0,
        "markdown": "",
        "res_body": "{\"type\":\"object\",\"title\":\"empty object\",\"properties\":{}}"
      },
      {
        "query_path": {
          "path": "/open/api/mass_replace",
          "params": []
        },
        "edit_uid": 0,
        "status": "undone",
        "type": "static",
        "req_body_is_json_schema": false,
        "res_body_is_json_schema": false,
        "api_opened": false,
        "index": 0,
        "tag": [],
        "_id": 1003,
        "title": "现货批量下单取消接口(下单)",
        "path": "/open/api/mass_replace",
        "method": "POST",
        "desc": "<p>客户调用方法</p>\n",
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "5ddddbcde465640ff231d961",
            "name": "Content-Type",
            "value": "application/x-www-form-urlencoded",
            "desc": ""
          }
        ],
        "req_body_type": "form",
        "req_body_form": [
          {
            "required": "0",
            "_id": "5ddddbcde465640ff231d968",
            "name": "mass_place",
            "type": "text",
            "example": "[{\"side\":\"SELL\",\"type\":\"1\",\"volume\":\"1\",\"price\":\"10\",\"fee_is_user_exchange_coin\":\"0\"}]"
          },
          {
            "required": "1",
            "_id": "5ddddbcde465640ff231d967",
            "name": "symbol",
            "type": "text",
            "example": "{{symbol}}",
            "desc": ""
          },
          {
            "required": "1",
            "_id": "5ddddbcde465640ff231d966",
            "name": "time",
            "type": "text",
            "example": "{{time}}",
            "desc": ""
          },
          {
            "required": "1",
            "_id": "5ddddbcde465640ff231d965",
            "name": "sign",
            "type": "text",
            "example": "{{sign}}",
            "desc": ""
          },
          {
            "required": "1",
            "_id": "5ddddbcde465640ff231d964",
            "name": "api_key",
            "type": "text",
            "example": "{{api_key}}",
            "desc": ""
          },
          {
            "required": "0",
            "_id": "5ddddbcde465640ff231d963",
            "name": "mass_cancel",
            "type": "text",
            "example": "[78321,78322,78323]",
            "desc": ""
          },
          {
            "required": "0",
            "_id": "5ddddbcde465640ff231d962",
            "name": "secretKey",
            "type": "text",
            "example": "",
            "desc": ""
          }
        ],
        "project_id": 73,
        "catid": 228,
        "req_params": [],
        "res_body_type": "json",
        "uid": 204,
        "add_time": 1567158008,
        "up_time": 1574820813,
        "__v": 0,
        "markdown": "客户调用方法",
        "res_body": "",
        "req_body_other": ""
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
        "api_opened": false,
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
            "_id": "5ddddbdbe465640ff231d971",
            "name": "Content-Type",
            "value": "application/x-www-form-urlencoded",
            "desc": ""
          }
        ],
        "req_body_type": "form",
        "req_body_form": [
          {
            "required": "0",
            "_id": "5ddddbdbe465640ff231d978",
            "name": "mass_place",
            "type": "text",
            "desc": ""
          },
          {
            "required": "1",
            "_id": "5ddddbdbe465640ff231d977",
            "name": "symbol",
            "type": "text",
            "desc": ""
          },
          {
            "required": "1",
            "_id": "5ddddbdbe465640ff231d976",
            "name": "time",
            "type": "text",
            "desc": ""
          },
          {
            "required": "1",
            "_id": "5ddddbdbe465640ff231d975",
            "name": "sign",
            "type": "text",
            "desc": ""
          },
          {
            "required": "1",
            "_id": "5ddddbdbe465640ff231d974",
            "name": "api_key",
            "type": "text",
            "desc": ""
          },
          {
            "required": "0",
            "_id": "5ddddbdbe465640ff231d973",
            "name": "mass_cancel",
            "type": "text",
            "desc": ""
          },
          {
            "required": "0",
            "_id": "5ddddbdbe465640ff231d972",
            "name": "secretKey",
            "type": "text",
            "example": "",
            "desc": ""
          }
        ],
        "project_id": 73,
        "catid": 228,
        "req_params": [],
        "res_body_type": "json",
        "uid": 204,
        "add_time": 1567158009,
        "up_time": 1574820827,
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
          "path": "/pub/trades",
          "params": []
        },
        "edit_uid": 0,
        "status": "undone",
        "type": "static",
        "req_body_is_json_schema": false,
        "res_body_is_json_schema": true,
        "api_opened": false,
        "index": 0,
        "tag": [],
        "_id": 2427,
        "method": "GET",
        "catid": 628,
        "title": "交易列表接口(Trade)",
        "path": "/pub/trades",
        "project_id": 73,
        "req_params": [],
        "res_body_type": "json",
        "uid": 247,
        "add_time": 1574754710,
        "up_time": 1574767160,
        "req_query": [
          {
            "required": "1",
            "_id": "5ddd0a38e465640ff231d930",
            "name": "base",
            "example": "BTC",
            "desc": ""
          },
          {
            "required": "1",
            "_id": "5ddd0a38e465640ff231d92f",
            "name": "quote",
            "example": "USDT",
            "desc": ""
          },
          {
            "required": "0",
            "_id": "5ddd0a38e465640ff231d92e",
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
          "path": "/pub/ticker",
          "params": []
        },
        "edit_uid": 0,
        "status": "undone",
        "type": "static",
        "req_body_is_json_schema": false,
        "res_body_is_json_schema": true,
        "api_opened": false,
        "index": 0,
        "tag": [],
        "_id": 2421,
        "method": "GET",
        "catid": 628,
        "title": "币对行情接口(Ticker)",
        "path": "/pub/ticker",
        "project_id": 73,
        "req_params": [],
        "res_body_type": "json",
        "uid": 247,
        "add_time": 1574754678,
        "up_time": 1574842602,
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
          "path": "/pub/asset",
          "params": []
        },
        "edit_uid": 0,
        "status": "undone",
        "type": "static",
        "req_body_is_json_schema": false,
        "res_body_is_json_schema": true,
        "api_opened": false,
        "index": 0,
        "tag": [],
        "_id": 2418,
        "method": "GET",
        "catid": 628,
        "title": "币种列表接口(Asset)",
        "path": "/pub/asset",
        "project_id": 73,
        "req_params": [],
        "res_body_type": "json",
        "uid": 247,
        "add_time": 1574754647,
        "up_time": 1574842485,
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
          "path": "/pub/orderbook",
          "params": []
        },
        "edit_uid": 0,
        "status": "undone",
        "type": "static",
        "req_body_is_json_schema": false,
        "res_body_is_json_schema": true,
        "api_opened": false,
        "index": 0,
        "tag": [],
        "_id": 2424,
        "method": "GET",
        "catid": 628,
        "title": "盘口数据接口(OrderBook)",
        "path": "/pub/orderbook",
        "project_id": 73,
        "req_params": [],
        "res_body_type": "json",
        "uid": 247,
        "add_time": 1574754695,
        "up_time": 1574758566,
        "req_query": [
          {
            "required": "1",
            "_id": "5ddce8a6e465640ff231d918",
            "name": "base",
            "desc": "BTC"
          },
          {
            "required": "1",
            "_id": "5ddce8a6e465640ff231d917",
            "name": "quote",
            "example": "",
            "desc": "USDT"
          },
          {
            "required": "0",
            "_id": "5ddce8a6e465640ff231d916",
            "name": "depth",
            "example": "0,1,2",
            "desc": "不填默认为0"
          },
          {
            "required": "0",
            "_id": "5ddce8a6e465640ff231d915",
            "name": "bids",
            "example": "150",
            "desc": ""
          },
          {
            "required": "0",
            "_id": "5ddce8a6e465640ff231d914",
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
