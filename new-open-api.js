window.platform =[
  {
    "index": 0,
    "name": "币币交易",
    "desc": "币币交易",
    "add_time": 1593311480,
    "up_time": 1607411141,
    "list": [
      {
        "query_path": {
          "path": "/sapi/v1/time",
          "params": []
        },
        "edit_uid": 0,
        "status": "done",
        "type": "static",
        "req_body_is_json_schema": true,
        "res_body_is_json_schema": true,
        "api_opened": false,
        "index": 0,
        "tag": [],
        "_id": 9873,
        "method": "GET",
        "catid": 1165,
        "title": " 服务器时间",
        "path": "/sapi/v1/time",
        "project_id": 442,
        "req_params": [],
        "res_body_type": "json",
        "uid": 455,
        "add_time": 1606814217,
        "up_time": 1607497229,
        "req_query": [],
        "req_headers": [],
        "req_body_form": [],
        "__v": 0,
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"timezone\":{\"type\":\"string\"},\"serverTime\":{\"type\":\"number\"}}}"
      },
      {
        "query_path": {
          "path": "/sapi/v1/ticker",
          "params": []
        },
        "edit_uid": 0,
        "status": "done",
        "type": "static",
        "req_body_is_json_schema": true,
        "res_body_is_json_schema": true,
        "api_opened": false,
        "index": 0,
        "tag": [],
        "_id": 9897,
        "method": "GET",
        "catid": 1165,
        "title": " 行情ticker",
        "path": "/sapi/v1/ticker",
        "project_id": 442,
        "req_params": [],
        "res_body_type": "json",
        "uid": 455,
        "add_time": 1606815818,
        "up_time": 1607497250,
        "req_query": [
          {
            "required": "1",
            "_id": "5fd076221205767e428f1b38",
            "name": "symbol",
            "desc": "币对名称 E.g. "
          }
        ],
        "req_headers": [],
        "req_body_form": [],
        "__v": 0,
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"high\":{\"type\":\"string\",\"description\":\"最高价\"},\"vol\":{\"type\":\"string\",\"description\":\"交易量\"},\"last\":{\"type\":\"string\",\"description\":\"最新价\"},\"low\":{\"type\":\"string\",\"description\":\"最低价\"},\"rose\":{\"type\":\"string\"},\"time\":{\"type\":\"number\",\"description\":\"时间戳\"}}}"
      },
      {
        "query_path": {
          "path": "/sapi/v1/klines",
          "params": []
        },
        "edit_uid": 0,
        "status": "done",
        "type": "static",
        "req_body_is_json_schema": true,
        "res_body_is_json_schema": true,
        "api_opened": false,
        "index": 0,
        "tag": [],
        "_id": 10095,
        "method": "GET",
        "catid": 1165,
        "title": "K线/蜡烛图数据",
        "path": "/sapi/v1/klines",
        "project_id": 442,
        "req_params": [],
        "res_body_type": "json",
        "uid": 455,
        "add_time": 1607395949,
        "up_time": 1607497262,
        "req_query": [
          {
            "required": "1",
            "_id": "5fd0762e1205767e428f1b3d",
            "name": "symbol",
            "example": "BTCUSDT",
            "desc": "币对名称 "
          },
          {
            "required": "1",
            "_id": "5fd0762e1205767e428f1b3c",
            "name": "interval",
            "example": "",
            "desc": " k线图区间, 可识别发送的值为： 1min,5min,15min,30min,1h,1day,1week,1month（min=分钟，h=小时,day=天，week=星期，month=月）"
          },
          {
            "required": "0",
            "_id": "5fd0762e1205767e428f1b3b",
            "name": "limit",
            "example": "",
            "desc": "默认100; 最大300"
          }
        ],
        "req_headers": [],
        "req_body_form": [],
        "__v": 0,
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"high\":{\"type\":\"string\",\"description\":\"最高价\"},\"vol\":{\"type\":\"string\",\"description\":\"成交量\"},\"low\":{\"type\":\"string\",\"description\":\"最低价\"},\"idx\":{\"type\":\"number\",\"description\":\"开始时间戳，毫秒（ms）\"},\"close\":{\"type\":\"string\",\"description\":\"收盘价\"},\"open\":{\"type\":\"string\",\"description\":\"开盘价\"}},\"required\":[\"high\",\"vol\",\"low\",\"idx\",\"close\",\"open\"]}}"
      },
      {
        "query_path": {
          "path": "/sapi/v1/myTrades",
          "params": []
        },
        "edit_uid": 0,
        "status": "done",
        "type": "static",
        "req_body_is_json_schema": true,
        "res_body_is_json_schema": true,
        "api_opened": false,
        "index": 0,
        "tag": [],
        "_id": 10143,
        "method": "GET",
        "catid": 1165,
        "title": "交易记录",
        "path": "/sapi/v1/myTrades",
        "project_id": 442,
        "req_params": [],
        "res_body_type": "json",
        "uid": 455,
        "add_time": 1607411071,
        "up_time": 1607413098,
        "req_query": [
          {
            "required": "1",
            "_id": "5fcf2d6a1205767e428f1b0d",
            "name": "symbol",
            "desc": "币对名称 E.g. BTCUSDT"
          },
          {
            "required": "0",
            "_id": "5fcf2d6a1205767e428f1b0c",
            "name": "limit",
            "example": "",
            "desc": "默认100; 最大1000"
          },
          {
            "required": "0",
            "_id": "5fcf2d6a1205767e428f1b0b",
            "name": "fromId",
            "example": "",
            "desc": "从这个tradeId开始检索"
          }
        ],
        "req_headers": [
          {
            "required": "1",
            "_id": "5fcf2d6a1205767e428f1b10",
            "name": "X-CH-SIGN",
            "value": "",
            "desc": "签名"
          },
          {
            "required": "1",
            "_id": "5fcf2d6a1205767e428f1b0f",
            "name": "X-CH-APIKEY",
            "example": "",
            "desc": "您的API-key"
          },
          {
            "required": "1",
            "_id": "5fcf2d6a1205767e428f1b0e",
            "name": "X-CH-TS",
            "example": "",
            "desc": "时间戳"
          }
        ],
        "req_body_form": [],
        "__v": 0,
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"symbol\":{\"type\":\"string\",\"description\":\"币种名称(交易对)\"},\"id\":{\"type\":\"number\",\"description\":\"交易ID\"},\"bidId\":{\"type\":\"number\",\"description\":\"买方订单ID\"},\"askId\":{\"type\":\"number\",\"description\":\"卖方订单ID\"},\"price\":{\"type\":\"string\",\"description\":\"交易时间戳\"},\"qty\":{\"type\":\"string\",\"description\":\"交易数量\"},\"time\":{\"type\":\"number\",\"description\":\"交易时间戳\"},\"isBuyer\":{\"type\":\"boolean\",\"description\":\"true= Buyer false= Seller\"},\"isMaker\":{\"type\":\"boolean\",\"description\":\"true=Maker false=Taker\"},\"feeCoin\":{\"type\":\"string\",\"description\":\"交易手续费币种\"},\"fee\":{\"type\":\"string\",\"description\":\"交易手续费\"}}}"
      },
      {
        "query_path": {
          "path": "/sapi/v1/order",
          "params": []
        },
        "edit_uid": 0,
        "status": "done",
        "type": "static",
        "req_body_is_json_schema": true,
        "res_body_is_json_schema": true,
        "api_opened": false,
        "index": 0,
        "tag": [],
        "_id": 10101,
        "method": "POST",
        "catid": 1165,
        "title": "创建新订单",
        "path": "/sapi/v1/order",
        "project_id": 442,
        "req_params": [],
        "res_body_type": "json",
        "uid": 455,
        "add_time": 1607396497,
        "up_time": 1607411210,
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "5fcf260a1205767e428f1abf",
            "name": "Content-Type",
            "value": "application/json"
          },
          {
            "required": "1",
            "_id": "5fcf260a1205767e428f1abe",
            "name": "X-CH-SIGN",
            "value": "string",
            "desc": "签名"
          },
          {
            "required": "1",
            "_id": "5fcf260a1205767e428f1abd",
            "name": "X-CH-APIKEY",
            "value": "string",
            "example": "",
            "desc": "您的API-key"
          },
          {
            "required": "1",
            "_id": "5fcf260a1205767e428f1abc",
            "name": "X-CH-TS",
            "value": "string",
            "example": "",
            "desc": "时间戳"
          }
        ],
        "req_body_form": [],
        "__v": 0,
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"symbol\":{\"type\":\"string\",\"description\":\"   币对名称\"},\"orderId\":{\"type\":\"string\",\"description\":\"订单ID（系统生成）\"},\"clientOrderId\":{\"type\":\"string\",\"description\":\"订单ID（自己发送的）\"},\"transactTime\":{\"type\":\"string\",\"description\":\"订单创建时间\"},\"price\":{\"type\":\"string\",\"description\":\"订单价格\"},\"origQty\":{\"type\":\"string\",\"description\":\"订单数量\"},\"executedQty\":{\"type\":\"string\",\"description\":\"已经成交订单数量\"},\"status\":{\"type\":\"string\",\"description\":\"订单状态。可能出现的值为：NEW(新订单，无成交)、PARTIALLY_FILLED（部分成交）、FILLED（全部成交）、CANCELED（已取消）和REJECTED（订单被拒绝）.\"},\"type\":{\"type\":\"string\",\"description\":\"订单类型LIMIT(限价)MARKET（市价）\"},\"side\":{\"type\":\"string\",\"description\":\"   订单方向。可能出现的值只能为：BUY（买入做多） 和 SELL（卖出做空）\"}}}",
        "req_body_type": "json",
        "req_body_other": "{\"type\":\"object\",\"title\":\"empty object\",\"properties\":{\"symbol\":{\"type\":\"string\",\"description\":\"币对名称 E.g. BTCUSDT\"},\"volume\":{\"type\":\"number\",\"description\":\"订单数量\"},\"side\":{\"type\":\"string\",\"description\":\"订单方向, BUY/SELL\"},\"type\":{\"type\":\"string\",\"description\":\"订单类型, LIMIT/MARKET\"},\"price\":{\"type\":\"number\",\"description\":\"订单价格, 对于LIMIT订单必须发送\"},\"newClientOrderId\":{\"type\":\"string\",\"description\":\"客户端订单标识\"},\"recvWindow\":{\"type\":\"integer\",\"description\":\"时间窗口\"}},\"required\":[\"symbol\",\"volume\",\"side\",\"type\"]}"
      },
      {
        "query_path": {
          "path": "/sapi/v1/order/test",
          "params": []
        },
        "edit_uid": 0,
        "status": "done",
        "type": "static",
        "req_body_is_json_schema": true,
        "res_body_is_json_schema": true,
        "api_opened": false,
        "index": 0,
        "tag": [],
        "_id": 10107,
        "method": "POST",
        "catid": 1165,
        "title": "创建测试订单",
        "path": "/sapi/v1/order/test",
        "project_id": 442,
        "req_params": [],
        "res_body_type": "json",
        "uid": 455,
        "add_time": 1607396979,
        "up_time": 1607411217,
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "5fcf26111205767e428f1ac3",
            "name": "Content-Type",
            "value": "application/json"
          },
          {
            "required": "1",
            "_id": "5fcf26111205767e428f1ac2",
            "name": "X-CH-SIGN",
            "value": "",
            "desc": "签名"
          },
          {
            "required": "1",
            "_id": "5fcf26111205767e428f1ac1",
            "name": "X-CH-APIKEY",
            "example": "",
            "desc": "您的API-key"
          },
          {
            "required": "1",
            "_id": "5fcf26111205767e428f1ac0",
            "name": "X-CH-TS",
            "example": "",
            "desc": "时间戳"
          }
        ],
        "req_body_form": [
          {
            "required": "0",
            "_id": "5fcf26111205767e428f1ac5",
            "name": "recvWindow",
            "type": "text",
            "desc": " 时间窗口"
          },
          {
            "required": "1",
            "_id": "5fcf26111205767e428f1ac4",
            "name": "symbol",
            "type": "text",
            "example": "",
            "desc": "币对名称 E.g. BTCUSDT"
          }
        ],
        "__v": 0,
        "markdown": "",
        "desc": "",
        "res_body": "{\"type\":\"object\",\"title\":\"empty object\",\"properties\":{}}",
        "req_body_other": "{\"type\":\"object\",\"title\":\"empty object\",\"properties\":{\"recvWindow\":{\"type\":\"integer\",\"description\":\"时间窗口\"},\"symbol\":{\"type\":\"string\",\"description\":\"币对名称 E.g. \"},\"volume\":{\"type\":\"number\",\"description\":\"订单数量\"},\"side\":{\"type\":\"string\",\"description\":\"订单方向, BUY/SELL\"},\"type\":{\"type\":\"string\",\"description\":\"订单类型, LIMIT/MARKET\"},\"price\":{\"type\":\"number\",\"description\":\"订单价格, 对于LIMIT订单必须发送\"},\"newClientOrderId\":{\"type\":\"string\",\"description\":\"客户端订单标识\"}},\"required\":[\"recvWindow\",\"symbol\",\"volume\",\"type\",\"side\"]}",
        "req_body_type": "json"
      },
      {
        "query_path": {
          "path": "/sapi/v1/symbols",
          "params": []
        },
        "edit_uid": 0,
        "status": "done",
        "type": "static",
        "req_body_is_json_schema": true,
        "res_body_is_json_schema": true,
        "api_opened": false,
        "index": 0,
        "tag": [],
        "_id": 9879,
        "method": "GET",
        "catid": 1165,
        "title": "币对列表 ",
        "path": "/sapi/v1/symbols",
        "project_id": 442,
        "req_params": [],
        "res_body_type": "json",
        "uid": 455,
        "add_time": 1606814237,
        "up_time": 1607497237,
        "req_query": [],
        "req_headers": [],
        "req_body_form": [],
        "__v": 0,
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"symbols\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"quantityPrecision\":{\"type\":\"number\",\"description\":\" 数量精度\"},\"symbol\":{\"type\":\"string\",\"description\":\"币对名称\"},\"pricePrecision\":{\"type\":\"number\",\"description\":\"价格精度\"},\"baseAsset\":{\"type\":\"string\",\"description\":\"base货币\"},\"quoteAsset\":{\"type\":\"string\",\"description\":\" 计价货币\"}},\"required\":[\"quantityPrecision\",\"symbol\",\"pricePrecision\",\"baseAsset\",\"quoteAsset\"]}}}}"
      },
      {
        "query_path": {
          "path": "/sapi/v1/openOrders",
          "params": []
        },
        "edit_uid": 0,
        "status": "done",
        "type": "static",
        "req_body_is_json_schema": true,
        "res_body_is_json_schema": true,
        "api_opened": false,
        "index": 0,
        "tag": [],
        "_id": 10137,
        "method": "GET",
        "catid": 1165,
        "title": "当前订单",
        "path": "/sapi/v1/openOrders",
        "project_id": 442,
        "req_params": [],
        "res_body_type": "json",
        "uid": 455,
        "add_time": 1607410702,
        "up_time": 1607413092,
        "req_query": [
          {
            "required": "1",
            "_id": "5fcf2d641205767e428f1b07",
            "name": "symbol",
            "desc": " 币对名称 E.g. BTCUSDT"
          },
          {
            "required": "0",
            "_id": "5fcf2d641205767e428f1b06",
            "name": "limit",
            "example": "",
            "desc": "limit"
          }
        ],
        "req_headers": [
          {
            "required": "1",
            "_id": "5fcf2d641205767e428f1b0a",
            "name": "X-CH-SIGN",
            "value": "",
            "desc": "签名"
          },
          {
            "required": "1",
            "_id": "5fcf2d641205767e428f1b09",
            "name": "X-CH-APIKEY",
            "example": "",
            "desc": "您的API-key"
          },
          {
            "required": "1",
            "_id": "5fcf2d641205767e428f1b08",
            "name": "X-CH-TS",
            "example": "",
            "desc": "时间戳"
          }
        ],
        "req_body_form": [],
        "__v": 0,
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"orderId\":{\"type\":\"integer\",\"description\":\"订单ID（系统生成）\"},\"symbol\":{\"type\":\"string\",\"description\":\"币对名称\"},\"price\":{\"type\":\"string\",\"description\":\"订单价格\"},\"origQty\":{\"type\":\"string\",\"description\":\"订单数量\"},\"executedQty\":{\"type\":\"string\",\"description\":\"已经成交订单数量\"},\"avgPrice\":{\"type\":\"string\",\"description\":\"订单已经成交的平均价格\"},\"status\":{\"type\":\"string\",\"description\":\"订单状态。可能出现的值为：NEW(新订单，无成交)、PARTIALLY_FILLED（部分成交）、FILLED（全部成交）、CANCELED（已取消）和REJECTED（订单被拒绝）\"},\"type\":{\"type\":\"string\",\"description\":\"订单类型。可能出现的值只能为:LIMIT(限价)和MARKET（市价）\"},\"side\":{\"type\":\"string\",\"description\":\"订单方向。可能出现的值只能为：BUY（买入做多） 和 SELL（卖出做空）\"},\"time\":{\"type\":\"string\",\"description\":\"交易时间戳\"}}}}"
      },
      {
        "query_path": {
          "path": "/sapi/v1/batchOrders",
          "params": []
        },
        "edit_uid": 0,
        "status": "done",
        "type": "static",
        "req_body_is_json_schema": true,
        "res_body_is_json_schema": true,
        "api_opened": false,
        "index": 0,
        "tag": [],
        "_id": 10113,
        "method": "POST",
        "catid": 1165,
        "title": "批量下单",
        "path": "/sapi/v1/batchOrders",
        "project_id": 442,
        "req_params": [],
        "res_body_type": "json",
        "uid": 455,
        "add_time": 1607397981,
        "up_time": 1607411827,
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "5fcf28731205767e428f1ae9",
            "name": "Content-Type",
            "value": "application/json"
          },
          {
            "required": "1",
            "_id": "5fcf28731205767e428f1ae8",
            "name": "X-CH-SIGN",
            "value": "",
            "desc": "签名"
          },
          {
            "required": "1",
            "_id": "5fcf28731205767e428f1ae7",
            "name": "X-CH-APIKEY",
            "example": "",
            "desc": "您的API-key"
          },
          {
            "required": "1",
            "_id": "5fcf28731205767e428f1ae6",
            "name": "X-CH-TS",
            "example": "",
            "desc": "时间戳"
          }
        ],
        "req_body_form": [],
        "__v": 0,
        "req_body_other": "{\"type\":\"object\",\"title\":\"empty object\",\"properties\":{\"orders\":{\"type\":\"string\",\"description\":\"批量订单信息  最多10条\"},\"symbol\":{\"type\":\"string\",\"description\":\"币对名称 E.g. BTCUSDT\"}},\"required\":[\"orders\",\"symbol\"]}",
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"ids\":{\"type\":\"array\",\"items\":{\"type\":\"number\"},\"description\":\"订单号\"}}}",
        "req_body_type": "json"
      },
      {
        "query_path": {
          "path": "/sapi/v1/batchCancel",
          "params": []
        },
        "edit_uid": 0,
        "status": "done",
        "type": "static",
        "req_body_is_json_schema": true,
        "res_body_is_json_schema": true,
        "api_opened": false,
        "index": 0,
        "tag": [],
        "_id": 10131,
        "method": "POST",
        "catid": 1165,
        "title": "批量撤销订单",
        "path": "/sapi/v1/batchCancel",
        "project_id": 442,
        "req_params": [],
        "res_body_type": "json",
        "uid": 455,
        "add_time": 1607399380,
        "up_time": 1607411257,
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "5fcf26391205767e428f1ad7",
            "name": "Content-Type",
            "value": "application/json"
          },
          {
            "required": "1",
            "_id": "5fcf26391205767e428f1ad6",
            "name": "X-CH-SIGN",
            "value": "",
            "desc": "签名"
          },
          {
            "required": "1",
            "_id": "5fcf26391205767e428f1ad5",
            "name": "X-CH-APIKEY",
            "example": "",
            "desc": "您的API-key"
          },
          {
            "required": "1",
            "_id": "5fcf26391205767e428f1ad4",
            "name": "X-CH-TS",
            "example": "",
            "desc": "时间戳"
          }
        ],
        "req_body_form": [],
        "__v": 0,
        "req_body_other": "{\"type\":\"object\",\"title\":\"empty object\",\"properties\":{\"orderId\":{\"type\":\"string\",\"description\":\"订单id\"},\"newClientOrderId\":{\"type\":\"string\",\"description\":\"客户端订单标识\"},\"symbol\":{\"type\":\"string\",\"description\":\"币对名称 E.g. BTCUSDT \"}},\"required\":[\"orderId\",\"symbol\"]}",
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"success\":{\"type\":\"array\",\"items\":{\"type\":\"number\"}},\"failed\":{\"type\":\"array\",\"items\":{\"type\":\"number\"},\"description\":\"//取消失败一般是因为订单不存在或订单状态已经到终态\"}}}",
        "req_body_type": "json"
      },
      {
        "query_path": {
          "path": "/sapi/v1/cancel",
          "params": []
        },
        "edit_uid": 0,
        "status": "done",
        "type": "static",
        "req_body_is_json_schema": true,
        "res_body_is_json_schema": true,
        "api_opened": false,
        "index": 0,
        "tag": [],
        "_id": 10125,
        "method": "POST",
        "catid": 1165,
        "title": "撤销订单",
        "path": "/sapi/v1/cancel",
        "project_id": 442,
        "req_params": [],
        "res_body_type": "json",
        "uid": 455,
        "add_time": 1607398934,
        "up_time": 1607411247,
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "5fcf262f1205767e428f1ad3",
            "name": "Content-Type",
            "value": "application/json"
          },
          {
            "required": "1",
            "_id": "5fcf262f1205767e428f1ad2",
            "name": "X-CH-SIGN",
            "value": "",
            "desc": "签名"
          },
          {
            "required": "1",
            "_id": "5fcf262f1205767e428f1ad1",
            "name": "X-CH-APIKEY",
            "example": "",
            "desc": "您的API-key"
          },
          {
            "required": "1",
            "_id": "5fcf262f1205767e428f1ad0",
            "name": "X-CH-TS",
            "example": "",
            "desc": "时间戳"
          }
        ],
        "req_body_form": [],
        "__v": 0,
        "req_body_other": "{\"type\":\"object\",\"title\":\"empty object\",\"properties\":{\"orderId\":{\"type\":\"string\",\"description\":\"订单id\"},\"newClientOrderId\":{\"type\":\"string\",\"description\":\"客户端订单标识\"},\"symbol\":{\"type\":\"string\",\"description\":\"币对名称 E.g. BTCUSDT \"}},\"required\":[\"orderId\",\"newClientOrderId\",\"symbol\"]}",
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"symbol\":{\"type\":\"string\",\"description\":\"币对名称\"},\"clientOrderId\":{\"type\":\"string\",\"description\":\"订单ID（自己发送的）\"},\"orderId\":{\"type\":\"string\",\"description\":\"订单ID（系统生成\"},\"status\":{\"type\":\"string\",\"description\":\"订单状态。可能出现的值为：NEW(新订单，无成交)、PARTIALLY_FILLED（部分成交）、FILLED（全部成交）、CANCELED（已取消）和REJECTED（订单被拒绝）\"}}}",
        "req_body_type": "json"
      },
      {
        "query_path": {
          "path": "/api/v1/trades",
          "params": []
        },
        "edit_uid": 0,
        "status": "done",
        "type": "static",
        "req_body_is_json_schema": true,
        "res_body_is_json_schema": true,
        "api_opened": false,
        "index": 0,
        "tag": [],
        "_id": 10083,
        "method": "GET",
        "catid": 1165,
        "title": "最近成交",
        "path": "/api/v1/trades",
        "project_id": 442,
        "req_params": [],
        "res_body_type": "json",
        "uid": 455,
        "add_time": 1607395137,
        "up_time": 1607497256,
        "req_query": [
          {
            "required": "1",
            "_id": "5fd076281205767e428f1b3a",
            "name": "symbol",
            "example": "BTCUSDT",
            "desc": "币对名称"
          },
          {
            "required": "0",
            "_id": "5fd076281205767e428f1b39",
            "name": "limit",
            "example": "1537797044116",
            "desc": "当前Unix时间戳，毫秒(ms)"
          }
        ],
        "req_headers": [],
        "req_body_form": [],
        "__v": 0,
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"price\":{\"type\":\"string\",\"description\":\"交易价格\"},\"qty\":{\"type\":\"string\",\"description\":\"数量（张数）\"},\"time\":{\"type\":\"number\",\"description\":\"当前Unix时间戳，毫秒(ms)\"},\"side\":{\"type\":\"string\",\"description\":\"主动单方向\"}}}"
      },
      {
        "query_path": {
          "path": "/sapi/v1/ping",
          "params": []
        },
        "edit_uid": 0,
        "status": "done",
        "type": "static",
        "req_body_is_json_schema": true,
        "res_body_is_json_schema": true,
        "api_opened": false,
        "index": 0,
        "tag": [],
        "_id": 9867,
        "method": "GET",
        "catid": 1165,
        "title": "测试连接",
        "path": "/sapi/v1/ping",
        "project_id": 442,
        "req_params": [],
        "res_body_type": "json",
        "uid": 455,
        "add_time": 1606814164,
        "up_time": 1607497222,
        "req_query": [],
        "req_headers": [],
        "req_body_form": [],
        "__v": 0,
        "markdown": "",
        "desc": "",
        "res_body": "{\"type\":\"object\",\"title\":\"empty object\",\"properties\":{}}"
      },
      {
        "query_path": {
          "path": "/sapi/v1/order",
          "params": []
        },
        "edit_uid": 0,
        "status": "done",
        "type": "static",
        "req_body_is_json_schema": true,
        "res_body_is_json_schema": true,
        "api_opened": false,
        "index": 0,
        "tag": [],
        "_id": 10119,
        "method": "GET",
        "catid": 1165,
        "title": "订单查询",
        "path": "/sapi/v1/order",
        "project_id": 442,
        "req_params": [],
        "res_body_type": "json",
        "uid": 455,
        "add_time": 1607398483,
        "up_time": 1607411237,
        "req_query": [
          {
            "required": "1",
            "_id": "5fcf26251205767e428f1acc",
            "name": "orderId",
            "desc": "订单id"
          },
          {
            "required": "1",
            "_id": "5fcf26251205767e428f1acb",
            "name": "newClientOrderId",
            "example": "",
            "desc": "客户端订单标识"
          },
          {
            "required": "1",
            "_id": "5fcf26251205767e428f1aca",
            "name": "symbol",
            "example": "",
            "desc": "币对名称 E.g. BTCUSDT"
          }
        ],
        "req_headers": [
          {
            "required": "1",
            "_id": "5fcf26251205767e428f1acf",
            "name": "X-CH-SIGN",
            "value": "",
            "desc": "签名"
          },
          {
            "required": "1",
            "_id": "5fcf26251205767e428f1ace",
            "name": "X-CH-APIKEY",
            "example": "",
            "desc": "您的API-key"
          },
          {
            "required": "1",
            "_id": "5fcf26251205767e428f1acd",
            "name": "X-CH-TS",
            "example": "",
            "desc": "时间戳"
          }
        ],
        "req_body_form": [],
        "__v": 0,
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"orderId\":{\"type\":\"integer\",\"description\":\"订单ID（系统生成）\"},\"clientOrderId\":{\"type\":\"string\",\"description\":\"订单ID（自己发送的）\"},\"symbol\":{\"type\":\"string\",\"description\":\"币对名称\"},\"price\":{\"type\":\"integer\",\"description\":\"订单价格\"},\"origQty\":{\"type\":\"integer\",\"description\":\"订单数量\"},\"executedQty\":{\"type\":\"integer\",\"description\":\"已经成交订单数量\"},\"avgPrice\":{\"type\":\"integer\",\"description\":\"订单已经成交的平均价格\"},\"status\":{\"type\":\"string\",\"description\":\"订单状态。可能出现的值为：NEW(新订单，无成交)、PARTIALLY_FILLED（部分成交）、FILLED（全部成交）、CANCELED（已取消）和REJECTED（订单被拒绝）\"},\"type\":{\"type\":\"string\",\"description\":\"订单类型。可能出现的值只能为:LIMIT(限价)和MARKET（市价）\"},\"side\":{\"type\":\"string\",\"description\":\"订单方向。可能出现的值只能为：BUY（买入做多） 和 SELL（卖出做空）\"},\"transactTime\":{\"type\":\"string\",\"description\":\"订单创建时间\"}}}"
      },
      {
        "query_path": {
          "path": "/sapi/v1/depth",
          "params": []
        },
        "edit_uid": 0,
        "status": "done",
        "type": "static",
        "req_body_is_json_schema": true,
        "res_body_is_json_schema": true,
        "api_opened": false,
        "index": 0,
        "tag": [],
        "_id": 9885,
        "method": "GET",
        "catid": 1165,
        "title": "订单薄",
        "path": "/sapi/v1/depth",
        "project_id": 442,
        "req_params": [],
        "res_body_type": "json",
        "uid": 455,
        "add_time": 1606815413,
        "up_time": 1607497244,
        "req_query": [
          {
            "required": "0",
            "_id": "5fd0761c1205767e428f1b37",
            "name": "limit",
            "example": "",
            "desc": "默认100; 最大100"
          },
          {
            "required": "1",
            "_id": "5fd0761c1205767e428f1b36",
            "name": "symbol",
            "example": "",
            "desc": "币对名称 E.g. BTCUSDT"
          }
        ],
        "req_headers": [],
        "req_body_form": [],
        "__v": 0,
        "markdown": "bids和asks所对应的信息代表了订单薄的所有价格以及价格对应的数量的信息, 由最优价格从上倒下排列\n\n|  |  |  |  |\n| --- | --- | --- | --- |\n| 名称 | 类型 | 例子 | 描述 |\n| ' ' | float | `131.1` | 价格 |\n| ' ' | float | `2.3` | 当前价格对应的数量 |",
        "desc": "<p>bids和asks所对应的信息代表了订单薄的所有价格以及价格对应的数量的信息, 由最优价格从上倒下排列</p>\n<table>\n<thead>\n<tr>\n<th></th>\n<th></th>\n<th></th>\n<th></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>名称</td>\n<td>类型</td>\n<td>例子</td>\n<td>描述</td>\n</tr>\n<tr>\n<td>' '</td>\n<td>float</td>\n<td><code data-backticks=\"1\">131.1</code></td>\n<td>价格</td>\n</tr>\n<tr>\n<td>' '</td>\n<td>float</td>\n<td><code data-backticks=\"1\">2.3</code></td>\n<td>当前价格对应的数量</td>\n</tr>\n</tbody>\n</table>\n",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"bids\":{\"type\":\"array\",\"items\":{\"type\":\"array\",\"items\":{\"type\":\"string\",\"description\":\" 数量\"},\"description\":\"价格\"},\"description\":\"订单薄买盘信息\"},\"asks\":{\"type\":\"array\",\"items\":{\"type\":\"array\",\"items\":{\"type\":\"string\",\"description\":\"数量\"},\"description\":\"价格\"},\"description\":\"订单薄卖盘信息\"}}}"
      },
      {
        "query_path": {
          "path": "/sapi/v1/account",
          "params": []
        },
        "edit_uid": 0,
        "status": "done",
        "type": "static",
        "req_body_is_json_schema": true,
        "res_body_is_json_schema": true,
        "api_opened": false,
        "index": 0,
        "tag": [],
        "_id": 10155,
        "method": "GET",
        "catid": 1165,
        "title": "账户信息",
        "path": "/sapi/v1/account",
        "project_id": 442,
        "req_params": [],
        "res_body_type": "json",
        "uid": 455,
        "add_time": 1607411592,
        "up_time": 1607411736,
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "5fcf28181205767e428f1ae5",
            "name": "X-CH-SIGN",
            "value": "",
            "desc": "签名"
          },
          {
            "required": "1",
            "_id": "5fcf28181205767e428f1ae4",
            "name": "X-CH-APIKEY",
            "example": "",
            "desc": "您的API-key"
          },
          {
            "required": "1",
            "_id": "5fcf28181205767e428f1ae3",
            "name": "X-CH-TS",
            "example": "",
            "desc": "时间戳"
          }
        ],
        "req_body_form": [],
        "__v": 0,
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"balances\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"asset\":{\"type\":\"string\",\"description\":\"币种名称\"},\"free\":{\"type\":\"string\",\"description\":\"可用\"},\"locked\":{\"type\":\"string\",\"description\":\"冻结\"}},\"required\":[\"asset\",\"free\",\"locked\"]},\"description\":\"余额集合\"}}}"
      }
    ]
  },
  {
    "index": 1,
    "name": "杠杆交易",
    "desc": "杠杆交易",
    "add_time": 1607396465,
    "up_time": 1607411950,
    "list": [
      {
        "query_path": {
          "path": "/sapi/v1/margin/openOrders",
          "params": []
        },
        "edit_uid": 0,
        "status": "done",
        "type": "static",
        "req_body_is_json_schema": true,
        "res_body_is_json_schema": true,
        "api_opened": false,
        "index": 0,
        "tag": [],
        "_id": 10179,
        "method": "GET",
        "catid": 2026,
        "title": " 杠杆当前委托",
        "path": "/sapi/v1/margin/openOrders",
        "project_id": 442,
        "req_params": [],
        "res_body_type": "json",
        "uid": 455,
        "add_time": 1607413478,
        "up_time": 1607415093,
        "req_query": [
          {
            "required": "1",
            "_id": "5fcf35351205767e428f1b25",
            "name": "symbol",
            "desc": " 币对名称 E.g. BTCUSDT"
          },
          {
            "required": "1",
            "_id": "5fcf35351205767e428f1b24",
            "name": "limit",
            "example": "",
            "desc": "默认100; 最大1000"
          }
        ],
        "req_headers": [
          {
            "required": "1",
            "_id": "5fcf35351205767e428f1b28",
            "name": "X-CH-SIGN",
            "value": "",
            "desc": "签名"
          },
          {
            "required": "1",
            "_id": "5fcf35351205767e428f1b27",
            "name": "X-CH-APIKEY",
            "example": "",
            "desc": "您的API-key"
          },
          {
            "required": "1",
            "_id": "5fcf35351205767e428f1b26",
            "name": "X-CH-TS",
            "example": "",
            "desc": "时间戳"
          }
        ],
        "req_body_form": [],
        "__v": 0,
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"orderId\":{\"type\":\"string\",\"description\":\"订单ID（系统生成）\"},\"symbol\":{\"type\":\"string\",\"description\":\"币对名称\"},\"price\":{\"type\":\"string\",\"description\":\"订单价格\"},\"origQty\":{\"type\":\"string\",\"description\":\"订单数量\"},\"executedQty\":{\"type\":\"string\",\"description\":\"已经成交订单数量\"},\"avgPrice\":{\"type\":\"string\",\"description\":\"订单已经成交的平均价格\"},\"status\":{\"type\":\"string\",\"description\":\"订单状态。可能出现的值为：NEW(新订单，无成交)、PARTIALLY_FILLED（部分成交）、FILLED（全部成交）、CANCELED（已取消）和REJECTED（订单被拒绝）.\"},\"type\":{\"type\":\"string\",\"description\":\"订单类型。可能出现的值只能为:LIMIT(限价)和MARKET（市价）\"},\"side\":{\"type\":\"string\",\"description\":\"订单方向。可能出现的值只能为：BUY（买入做多） 和 SELL（卖出做空）\"},\"time\":{\"type\":\"string\",\"description\":\"当前时间(Unix Timestamp, 毫秒ms)\"}}}}"
      },
      {
        "query_path": {
          "path": "/sapi/v1/margin/order",
          "params": []
        },
        "edit_uid": 0,
        "status": "done",
        "type": "static",
        "req_body_is_json_schema": true,
        "res_body_is_json_schema": true,
        "api_opened": false,
        "index": 0,
        "tag": [],
        "_id": 10161,
        "method": "POST",
        "catid": 2026,
        "title": "创建杠杆订单",
        "path": "/sapi/v1/margin/order",
        "project_id": 442,
        "req_params": [],
        "res_body_type": "json",
        "uid": 455,
        "add_time": 1607411967,
        "up_time": 1607413077,
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "5fcf2d551205767e428f1b05",
            "name": "Content-Type",
            "value": "application/json"
          },
          {
            "required": "1",
            "_id": "5fcf2d551205767e428f1b04",
            "name": "X-CH-SIGN",
            "value": "",
            "desc": "签名"
          },
          {
            "required": "1",
            "_id": "5fcf2d551205767e428f1b03",
            "name": "X-CH-APIKEY",
            "example": "",
            "desc": "您的API-key"
          },
          {
            "required": "1",
            "_id": "5fcf2d551205767e428f1b02",
            "name": "X-CH-TS",
            "example": "",
            "desc": "时间戳"
          }
        ],
        "req_body_form": [],
        "__v": 0,
        "req_body_other": "{\"type\":\"object\",\"title\":\"empty object\",\"properties\":{\"symbol\":{\"type\":\"string\",\"description\":\"币对名称 E.g. BTCUSDT\"},\"volume\":{\"type\":\"string\",\"description\":\"订单数量\"},\"side\":{\"type\":\"string\",\"description\":\"订单方向, BUY/SELL\"},\"type\":{\"type\":\"string\",\"description\":\"订单类型, LIMIT/MARKET\"},\"price\":{\"type\":\"string\",\"description\":\"订单价格, 对于LIMIT订单必须发送\"},\"newClientOrderId\":{\"type\":\"string\",\"description\":\"客户端订单标识\"},\"recvWindow\":{\"type\":\"string\",\"description\":\"时间窗口\"}},\"required\":[\"symbol\",\"volume\",\"side\",\"type\"]}",
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"symbol\":{\"type\":\"string\",\"description\":\"币对名称 E.g. BTCUSDT\"},\"orderId\":{\"type\":\"string\",\"description\":\"订单ID（系统生成）\"},\"clientOrderId\":{\"type\":\"string\",\"description\":\"订单ID（自己发送的）\"},\"transactTime\":{\"type\":\"string\",\"description\":\"订单创建时间\"},\"price\":{\"type\":\"string\",\"description\":\"订单价格\"},\"origQty\":{\"type\":\"string\",\"description\":\"订单数量\"},\"executedQty\":{\"type\":\"string\",\"description\":\"已经成交订单数量\"},\"status\":{\"type\":\"string\",\"description\":\"订单状态。可能出现的值为：NEW(新订单，无成交)、PARTIALLY_FILLED（部分成交）、FILLED（全部成交）、CANCELED（已取消）和REJECTED（订单被拒绝）.\"},\"type\":{\"type\":\"string\",\"description\":\"订单类型LIMIT(限价)MARKET（市价）\"},\"side\":{\"type\":\"string\",\"description\":\"订单方向。可能出现的值只能为：BUY（买入做多） 和 SELL（卖出做空）\"}}}",
        "req_body_type": "json"
      },
      {
        "query_path": {
          "path": "/sapi/v1/margin/cancel",
          "params": []
        },
        "edit_uid": 0,
        "status": "done",
        "type": "static",
        "req_body_is_json_schema": true,
        "res_body_is_json_schema": true,
        "api_opened": false,
        "index": 0,
        "tag": [],
        "_id": 10173,
        "method": "POST",
        "catid": 2026,
        "title": "撤销杠杆订单",
        "path": "/sapi/v1/margin/cancel",
        "project_id": 442,
        "req_params": [],
        "res_body_type": "json",
        "uid": 455,
        "add_time": 1607413136,
        "up_time": 1607415088,
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "5fcf35301205767e428f1b23",
            "name": "Content-Type",
            "value": "application/json"
          },
          {
            "required": "1",
            "_id": "5fcf35301205767e428f1b22",
            "name": "X-CH-SIGN",
            "value": "",
            "desc": "签名"
          },
          {
            "required": "1",
            "_id": "5fcf35301205767e428f1b21",
            "name": "X-CH-APIKEY",
            "example": "",
            "desc": "您的API-key"
          },
          {
            "required": "1",
            "_id": "5fcf35301205767e428f1b20",
            "name": "X-CH-TS",
            "example": "",
            "desc": "时间戳"
          }
        ],
        "req_body_form": [],
        "__v": 0,
        "req_body_other": "{\"type\":\"object\",\"title\":\"empty object\",\"properties\":{\"orderId\":{\"type\":\"string\",\"description\":\"订单id\"},\"newClientOrderId\":{\"type\":\"string\",\"description\":\"客户端订单标识\"},\"symbol\":{\"type\":\"string\",\"description\":\"币对名称E.g. BTCUSDT\"}},\"required\":[\"orderId\",\"symbol\"]}",
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"symbol\":{\"type\":\"string\",\"description\":\"币对名称\"},\"clientOrderId\":{\"type\":\"string\",\"description\":\"订单ID（自己发送的）\"},\"orderId\":{\"type\":\"string\",\"description\":\"订单ID（系统生成\"},\"status\":{\"type\":\"string\",\"description\":\"订单状态。可能出现的值为：NEW(新订单，无成交)、PARTIALLY_FILLED（部分成交）、FILLED（全部成交）、CANCELED（已取消）和REJECTED（订单被拒绝）\"}}}",
        "req_body_type": "json"
      },
      {
        "query_path": {
          "path": "/sapi/v1/margin/myTrades",
          "params": []
        },
        "edit_uid": 0,
        "status": "done",
        "type": "static",
        "req_body_is_json_schema": true,
        "res_body_is_json_schema": true,
        "api_opened": false,
        "index": 0,
        "tag": [],
        "_id": 10185,
        "method": "GET",
        "catid": 2026,
        "title": "杠杆交易记录",
        "path": "/sapi/v1/margin/myTrades",
        "project_id": 442,
        "req_params": [],
        "res_body_type": "json",
        "uid": 455,
        "add_time": 1607413942,
        "up_time": 1607415098,
        "req_query": [
          {
            "required": "1",
            "_id": "5fcf353a1205767e428f1b2b",
            "name": "symbol",
            "desc": "币对名称 E.g. BTCUSDT"
          },
          {
            "required": "1",
            "_id": "5fcf353a1205767e428f1b2a",
            "name": "limit",
            "example": "",
            "desc": "默认100; 最大1000"
          },
          {
            "required": "1",
            "_id": "5fcf353a1205767e428f1b29",
            "name": "fromId",
            "example": "",
            "desc": "从这个tradeId开始检索"
          }
        ],
        "req_headers": [
          {
            "required": "1",
            "_id": "5fcf353a1205767e428f1b2e",
            "name": "X-CH-SIGN",
            "value": "",
            "desc": "签名"
          },
          {
            "required": "1",
            "_id": "5fcf353a1205767e428f1b2d",
            "name": "X-CH-APIKEY",
            "example": "",
            "desc": "您的API-key"
          },
          {
            "required": "1",
            "_id": "5fcf353a1205767e428f1b2c",
            "name": "X-CH-TS",
            "example": "",
            "desc": "时间戳"
          }
        ],
        "req_body_form": [],
        "__v": 0,
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"symbol\":{\"type\":\"string\",\"description\":\"币种名称(交易对)\"},\"id\":{\"type\":\"number\",\"description\":\"交易ID\"},\"bidId\":{\"type\":\"number\",\"description\":\"买方订单ID\"},\"askId\":{\"type\":\"number\",\"description\":\"卖方订单ID\"},\"price\":{\"type\":\"string\",\"description\":\"交易时间戳\"},\"qty\":{\"type\":\"string\",\"description\":\"交易数量\"},\"time\":{\"type\":\"number\",\"description\":\"交易时间戳\"},\"isBuyer\":{\"type\":\"boolean\",\"description\":\"true= Buyer false= Seller\"},\"isMaker\":{\"type\":\"boolean\",\"description\":\"true=Maker false=Taker\"},\"feeCoin\":{\"type\":\"string\",\"description\":\"交易手续费币种\"},\"fee\":{\"type\":\"string\",\"description\":\"交易手续费\"}}}}"
      },
      {
        "query_path": {
          "path": "/sapi/v1/margin/order",
          "params": []
        },
        "edit_uid": 0,
        "status": "done",
        "type": "static",
        "req_body_is_json_schema": true,
        "res_body_is_json_schema": true,
        "api_opened": false,
        "index": 0,
        "tag": [],
        "_id": 10167,
        "method": "GET",
        "catid": 2026,
        "title": "杠杆订单查询",
        "path": "/sapi/v1/margin/order",
        "project_id": 442,
        "req_params": [],
        "res_body_type": "json",
        "uid": 455,
        "add_time": 1607412491,
        "up_time": 1607413062,
        "req_query": [
          {
            "required": "1",
            "_id": "5fcf2d461205767e428f1afe",
            "name": "orderId",
            "desc": "订单ID"
          },
          {
            "required": "0",
            "_id": "5fcf2d461205767e428f1afd",
            "name": "newClientOrderId",
            "example": "",
            "desc": "客户端订单标识"
          },
          {
            "required": "1",
            "_id": "5fcf2d461205767e428f1afc",
            "name": "symbol",
            "example": "",
            "desc": "币对名称E.g. BTCUSDT"
          }
        ],
        "req_headers": [
          {
            "required": "1",
            "_id": "5fcf2d461205767e428f1b01",
            "name": "X-CH-SIGN",
            "value": "",
            "desc": "签名"
          },
          {
            "required": "1",
            "_id": "5fcf2d461205767e428f1b00",
            "name": "X-CH-APIKEY",
            "example": "",
            "desc": "您的API-key"
          },
          {
            "required": "1",
            "_id": "5fcf2d461205767e428f1aff",
            "name": "X-CH-TS",
            "example": "",
            "desc": "时间戳"
          }
        ],
        "req_body_form": [],
        "__v": 0,
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"orderId\":{\"type\":\"string\",\"description\":\"订单ID（系统生成）\"},\"clientOrderId\":{\"type\":\"string\",\"description\":\"订单ID（自己发送的）\"},\"symbol\":{\"type\":\"string\",\"description\":\"币对名称\"},\"price\":{\"type\":\"string\",\"description\":\"订单价格\"},\"origQty\":{\"type\":\"string\",\"description\":\"订单数量\"},\"executedQty\":{\"type\":\"string\",\"description\":\"已经成交订单数量\"},\"avgPrice\":{\"type\":\"string\",\"description\":\"订单已经成交的平均价格\"},\"status\":{\"type\":\"string\",\"description\":\"订单状态。可能出现的值为：NEW(新订单，无成交)、PARTIALLY_FILLED（部分成交）、FILLED（全部成交）、CANCELED（已取消）和REJECTED（订单被拒绝）\"},\"type\":{\"type\":\"string\",\"description\":\"订单类型。可能出现的值只能为:LIMIT(限价)和MARKET（市价）\"},\"side\":{\"type\":\"string\",\"description\":\"订单方向。可能出现的值只能为：BUY（买入做多） 和 SELL（卖出做空）\"},\"transactTime\":{\"type\":\"string\",\"description\":\"订单创建时间\"}}}"
      }
    ]
  }
]