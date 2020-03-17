window.platform =[
  {
    "index": 1,
    "name": "OAuth",
    "desc": null,
    "add_time": 1573548711,
    "up_time": 1573548711,
    "list": [
      {
        "query_path": {
          "path": "/login.html",
          "params": []
        },
        "edit_uid": 0,
        "status": "undone",
        "type": "static",
        "req_body_is_json_schema": true,
        "res_body_is_json_schema": true,
        "api_opened": true,
        "index": 1,
        "tag": [],
        "_id": 2298,
        "method": "GET",
        "catid": 508,
        "title": "第一步，OAuth授权登录页",
        "path": "/login.html",
        "project_id": 146,
        "req_params": [],
        "res_body_type": "json",
        "uid": 247,
        "add_time": 1574162426,
        "up_time": 1575007309,
        "req_query": [
          {
            "required": "1",
            "_id": "5de0b44de465640ff231da5d",
            "name": "appKey",
            "example": "shangjia",
            "desc": "商家key"
          },
          {
            "required": "1",
            "_id": "5de0b44de465640ff231da5c",
            "name": "redirectUrl",
            "example": "https://www.chaindown.com",
            "desc": "授权登录成功后跳转页面"
          },
          {
            "required": "0",
            "_id": "5de0b44de465640ff231da5b",
            "name": "state",
            "example": "1",
            "desc": "商家传入状态字段"
          }
        ],
        "req_headers": [],
        "req_body_form": [],
        "__v": 0,
        "markdown": "最后登录页拼接完成后为:\n[https://platform.xxx.com/login.html?appKey=xxx&redirectUrl=xxx&state=xxx](https://platform.xxx.com/login.html?appKey=xxx&redirectUrl=xxx&state=xxx)",
        "desc": "<p>最后登录页拼接完成后为:<br>\n<a href=\"https://platform.xxx.com/login.html?appKey=xxx&amp;redirectUrl=xxx&amp;state=xxx\">https://platform.xxx.com/login.html?appKey=xxx&amp;redirectUrl=xxx&amp;state=xxx</a></p>\n",
        "res_body": "{\"type\":\"object\",\"title\":\"empty object\",\"properties\":{}}"
      },
      {
        "query_path": {
          "path": "/chainup/open/auth/token",
          "params": []
        },
        "edit_uid": 0,
        "status": "undone",
        "type": "static",
        "req_body_is_json_schema": true,
        "res_body_is_json_schema": true,
        "api_opened": true,
        "index": 2,
        "tag": [],
        "_id": 2244,
        "method": "POST",
        "catid": 508,
        "title": "第二步，使用code换取token、openId接口",
        "path": "/chainup/open/auth/token",
        "project_id": 146,
        "req_params": [],
        "res_body_type": "json",
        "uid": 247,
        "add_time": 1573698588,
        "up_time": 1577509439,
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "5e06e23fe465640ff231e175",
            "name": "Content-Type",
            "value": "application/json"
          }
        ],
        "req_body_form": [
          {
            "required": "1",
            "_id": "5e06e23fe465640ff231e178",
            "name": "appKey",
            "type": "text",
            "desc": "商家唯一key"
          },
          {
            "required": "1",
            "_id": "5e06e23fe465640ff231e177",
            "name": "code",
            "type": "text",
            "example": "",
            "desc": "用户登录授权时返回的code"
          },
          {
            "required": "1",
            "_id": "5e06e23fe465640ff231e176",
            "name": "sign",
            "type": "text",
            "example": "",
            "desc": "MD5(Sort(Param) + secret)"
          }
        ],
        "__v": 0,
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"number\",\"description\":\"返回code\"},\"msg\":{\"type\":\"string\",\"description\":\"成功或失败提示信息\"},\"data\":{\"type\":\"object\",\"properties\":{\"openId\":{\"type\":\"string\",\"description\":\"该授权用户所属该商户下的唯一openId\"},\"expireIn\":{\"type\":\"string\",\"description\":\"token过期时间，秒\"},\"refreshToken\":{\"type\":\"string\",\"description\":\"刷新token所需的token\"},\"token\":{\"type\":\"string\",\"description\":\"授权的token\"}}}}}",
        "req_body_type": "json",
        "req_body_other": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"appKey\":{\"type\":\"string\",\"description\":\"商家唯一key\"},\"code\":{\"type\":\"string\",\"description\":\"用户登录授权时返回的code\"},\"sign\":{\"type\":\"string\",\"description\":\"MD5(Sort(Param) + secret)\"}},\"required\":[\"appKey\",\"code\",\"sign\"]}"
      }
    ]
  },
  {
    "index": 2,
    "name": "支付",
    "desc": null,
    "add_time": 1573548735,
    "up_time": 1573548735,
    "list": [
      {
        "query_path": {
          "path": "/chainup/open/opay/createThirdOrder",
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
        "_id": 2229,
        "method": "POST",
        "catid": 514,
        "title": "第一步，创建支付订单",
        "path": "/chainup/open/opay/createThirdOrder",
        "project_id": 146,
        "req_params": [],
        "res_body_type": "json",
        "uid": 247,
        "add_time": 1573698363,
        "up_time": 1577432652,
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "5e05b64ce465640ff231e11a",
            "name": "Content-Type",
            "value": "application/json"
          }
        ],
        "req_body_form": [
          {
            "required": "1",
            "_id": "5e05b64ce465640ff231e126",
            "name": "appKey",
            "type": "text",
            "example": "",
            "desc": "商家唯一编号"
          },
          {
            "required": "1",
            "_id": "5e05b64ce465640ff231e125",
            "name": "payCoinSymbol",
            "type": "text",
            "example": "",
            "desc": "支付币种，大写如BTCappKey"
          },
          {
            "required": "1",
            "_id": "5e05b64ce465640ff231e124",
            "name": "openId",
            "type": "text",
            "example": "",
            "desc": "付款用户的唯一id"
          },
          {
            "required": "1",
            "_id": "5e05b64ce465640ff231e123",
            "name": "userId",
            "type": "text",
            "example": "",
            "desc": "付款用户uid(与openid必须存在一个) ||同时存在优先取openid"
          },
          {
            "required": "1",
            "_id": "5e05b64ce465640ff231e122",
            "name": "returnPage",
            "type": "text",
            "example": "",
            "desc": "前台跳转商家的页面"
          },
          {
            "required": "1",
            "_id": "5e05b64ce465640ff231e121",
            "name": "notifyPage",
            "type": "text",
            "example": "",
            "desc": "后台通知商家的地址"
          },
          {
            "required": "1",
            "_id": "5e05b64ce465640ff231e120",
            "name": "appOrderId",
            "type": "text",
            "example": "",
            "desc": "商家端订单id"
          },
          {
            "required": "1",
            "_id": "5e05b64ce465640ff231e11f",
            "name": "orderSceneType",
            "type": "text",
            "example": "",
            "desc": "订单的场景类型，数字枚举；"
          },
          {
            "required": "1",
            "_id": "5e05b64ce465640ff231e11e",
            "name": "orderAmount",
            "type": "text",
            "example": "",
            "desc": "支付金额"
          },
          {
            "required": "1",
            "_id": "5e05b64ce465640ff231e11d",
            "name": "token",
            "type": "text",
            "example": "",
            "desc": "授权的token"
          },
          {
            "required": "1",
            "_id": "5e05b64ce465640ff231e11c",
            "name": "sign",
            "type": "text",
            "example": "",
            "desc": "MD5(Sort(Param) + secret)"
          },
          {
            "required": "0",
            "_id": "5e05b64ce465640ff231e11b",
            "name": "goods",
            "type": "text",
            "example": "",
            "desc": "商品描述信息，可不传，传入必须为合法的json格式，否则订单创建失败 ；json中的子字段为\nname : 商品名称\ndesc:商品描述\n例：[{\"name\":\"商品1\",\"desc\":\"商品信息123balabala\"},{\"name\":\"商品2\",\"desc\":\"商品信息23balabala\"},{\"name\":\"商品3\",\"desc\":\"商品信息33balabala\"}]"
          }
        ],
        "__v": 0,
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"number\"},\"msg\":{\"type\":\"string\"},\"data\":{\"type\":\"object\",\"properties\":{\"sign\":{\"type\":\"string\"},\"orderNum\":{\"type\":\"string\"}}}}}",
        "req_body_type": "json",
        "req_body_other": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"appKey\":{\"type\":\"string\",\"description\":\"商家唯一编号\"},\"appOrderId\":{\"type\":\"string\",\"description\":\"商家端订单id\"},\"openId\":{\"type\":\"string\",\"description\":\"付款用户的唯一id\"},\"userId\":{\"type\":\"string\",\"description\":\"付款用户uid(与openid必须存在一个) ||同时存在优先取openid\"},\"orderAmount\":{\"type\":\"string\",\"description\":\"支付金额\"},\"orderSceneType\":{\"type\":\"string\",\"description\":\"订单的场景类型，数字枚举；\"},\"payCoinSymbol\":{\"type\":\"string\",\"description\":\"支付币种，大写如BTCappKey\"},\"returnPage\":{\"type\":\"string\",\"description\":\"前台跳转商家的页面\"},\"notifyPage\":{\"type\":\"string\",\"description\":\"后台通知商家的地址\"},\"token\":{\"type\":\"string\",\"description\":\"授权的token\"},\"sign\":{\"type\":\"string\",\"description\":\"MD5(Sort(Param) + secret)\"},\"goods\":{\"type\":\"string\",\"description\":\"商品描述信息，可不传，传入必须为合法的json格式，否则订单创建失败 ；json中的子字段为 name : 商品名称 desc:商品描述 例：[{\\\"name\\\":\\\"商品1\\\",\\\"desc\\\":\\\"商品信息123balabala\\\"},{\\\"name\\\":\\\"商品2\\\",\\\"desc\\\":\\\"商品信息23balabala\\\"},{\\\"name\\\":\\\"商品3\\\",\\\"desc\\\":\\\"商品信息33balabala\\\"}]\"}},\"required\":[\"appKey\",\"appOrderId\",\"openId\",\"orderAmount\",\"orderSceneType\",\"payCoinSymbol\",\"token\",\"sign\",\"userId\",\"returnPage\",\"notifyPage\"]}"
      },
      {
        "query_path": {
          "path": "/pay.html",
          "params": []
        },
        "edit_uid": 0,
        "status": "undone",
        "type": "static",
        "req_body_is_json_schema": true,
        "res_body_is_json_schema": true,
        "api_opened": true,
        "index": 1,
        "tag": [],
        "_id": 2301,
        "method": "GET",
        "catid": 514,
        "title": "第二步，支付页面",
        "path": "/pay.html",
        "project_id": 146,
        "req_params": [],
        "res_body_type": "json",
        "uid": 247,
        "add_time": 1574163370,
        "up_time": 1575007369,
        "req_query": [
          {
            "required": "1",
            "_id": "5de0b489e465640ff231da73",
            "name": "appKey",
            "desc": ""
          },
          {
            "required": "1",
            "_id": "5de0b489e465640ff231da72",
            "name": "orderNum",
            "example": "",
            "desc": "平台订单编号"
          },
          {
            "required": "1",
            "_id": "5de0b489e465640ff231da71",
            "name": "openId",
            "example": "",
            "desc": "支付人 openId，必须是订单创建人"
          },
          {
            "required": "1",
            "_id": "5de0b489e465640ff231da70",
            "name": "userId",
            "example": "",
            "desc": "付款用户 uid(与 openid 必须存在一个) ||同时存在优先取 openid"
          },
          {
            "required": "1",
            "_id": "5de0b489e465640ff231da6f",
            "name": "token",
            "example": "",
            "desc": "授权的 token"
          }
        ],
        "req_headers": [],
        "req_body_form": [],
        "__v": 0,
        "markdown": "最后支付页瓶装完成后为:\n[https://platform.xxx.com/pay.html?appKey=xxx&openId=xxx&token=xxx&orderNum=xxx](https://platform.xxx.com/pay.html?appKey=xxx&openId=xxx&token=xxx&orderNum=xxx)",
        "desc": "<p>最后支付页瓶装完成后为:<br>\n<a href=\"https://platform.xxx.com/pay.html?appKey=xxx&amp;openId=xxx&amp;token=xxx&amp;orderNum=xxx\">https://platform.xxx.com/pay.html?appKey=xxx&amp;openId=xxx&amp;token=xxx&amp;orderNum=xxx</a></p>\n",
        "res_body": "{\"type\":\"object\",\"title\":\"empty object\",\"properties\":{}}"
      },
      {
        "query_path": {
          "path": "/notifyPage",
          "params": []
        },
        "edit_uid": 0,
        "status": "undone",
        "type": "static",
        "req_body_is_json_schema": true,
        "res_body_is_json_schema": true,
        "api_opened": true,
        "index": 2,
        "tag": [],
        "_id": 2391,
        "method": "POST",
        "catid": 514,
        "title": "第三步，支付结果回调接口",
        "path": "/notifyPage",
        "project_id": 146,
        "req_params": [],
        "res_body_type": "json",
        "uid": 303,
        "add_time": 1574339853,
        "up_time": 1575007749,
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "5de0b605e465640ff231da91",
            "name": "Content-Type",
            "value": "application/json"
          }
        ],
        "req_body_form": [],
        "__v": 0,
        "req_body_other": "{\"type\":\"object\",\"title\":\"empty object\",\"properties\":{\"appKey\":{\"type\":\"string\",\"description\":\"商家唯一key\"},\"outOrderId\":{\"type\":\"string\",\"description\":\"商家端订单编号\"},\"orderNum\":{\"type\":\"string\",\"description\":\"开放平台订单编号\"},\"orderStatus\":{\"type\":\"string\",\"description\":\"订单状态\"},\"payAmount\":{\"type\":\"string\",\"description\":\"订单金额\"},\"returnUrl\":{\"type\":\"string\",\"description\":\"同步通知页面(下单接口传入)\"},\"sign\":{\"type\":\"string\"}},\"required\":[\"appKey\",\"outOrderId\",\"orderNum\",\"orderStatus\",\"payAmount\",\"returnUrl\",\"sign\"]}",
        "markdown": "该接口URL由对接商户提供，第一步创建订单时传出的参数：notifyPage\n支付完成后，支付结果会通过notifyPage对应的URL进行通知",
        "desc": "<p>该接口URL由对接商户提供，第一步创建订单时传出的参数：notifyPage<br>\n支付完成后，支付结果会通过notifyPage对应的URL进行通知</p>\n",
        "res_body": "{\"type\":\"object\",\"title\":\"empty object\",\"properties\":{\"data\":{\"type\":\"string\",\"description\":\"客户端收到请求后返回success，代表已收到请求\"}},\"required\":[\"data\"]}",
        "req_body_type": "json"
      },
      {
        "query_path": {
          "path": "/chainup/open/opay/orderDetail",
          "params": []
        },
        "edit_uid": 0,
        "status": "undone",
        "type": "static",
        "req_body_is_json_schema": true,
        "res_body_is_json_schema": true,
        "api_opened": true,
        "index": 3,
        "tag": [],
        "_id": 2232,
        "method": "POST",
        "catid": 514,
        "title": "查询支付订单",
        "path": "/chainup/open/opay/orderDetail",
        "project_id": 146,
        "req_params": [],
        "res_body_type": "json",
        "uid": 247,
        "add_time": 1573698426,
        "up_time": 1577433009,
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "5e05b7b1e465640ff231e129",
            "name": "Content-Type",
            "value": "application/json"
          }
        ],
        "req_body_form": [
          {
            "required": "1",
            "_id": "5e05b7b1e465640ff231e12c",
            "name": "appKey",
            "type": "text",
            "desc": "商家唯一编号"
          },
          {
            "required": "1",
            "_id": "5e05b7b1e465640ff231e12b",
            "name": "orderNum",
            "type": "text",
            "example": "",
            "desc": "平台方订单编号"
          },
          {
            "required": "1",
            "_id": "5e05b7b1e465640ff231e12a",
            "name": "token",
            "type": "text",
            "example": "",
            "desc": "授权的token"
          }
        ],
        "__v": 0,
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"integer\"},\"msg\":{\"type\":\"string\"},\"data\":{\"type\":\"object\",\"properties\":{\"totalAccount\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"accountName\":{\"type\":\"string\",\"description\":\"账户名称(下拉菜单中显示)\"},\"accountType\":{\"type\":\"integer\",\"description\":\"账户类型(id)需要回传给后端的相当于id字段\"},\"accountBalance\":{\"type\":\"number\",\"description\":\"支付用户该账户的余额\"}},\"required\":[\"accountName\",\"accountType\",\"accountBalance\"]},\"description\":\"商户支持的所有账户list\"},\"googleStatus\":{\"type\":\"number\",\"description\":\"是否开启google验证；0-未开启,1-开启\"},\"appOrderId\":{\"type\":\"string\",\"description\":\"商家订单id\"},\"sign\":{\"type\":\"string\",\"description\":\"签名\"},\"orderNum\":{\"type\":\"string\",\"description\":\"订单编号\"},\"orderStatus\":{\"type\":\"string\",\"description\":\"订单状态：1=待支付；3=支付成功\"},\"userId\":{\"type\":\"integer\",\"description\":\"用户id\"},\"isOpenMobileCheck\":{\"type\":\"string\",\"description\":\"是否开启手机短信效验；0-未开启,1-开启\"},\"orderAmount\":{\"type\":\"string\",\"description\":\"订单金额\"},\"payCoinSymbol\":{\"type\":\"string\",\"description\":\"支付币种\"},\"ctime\":{\"type\":\"string\"},\"appKey\":{\"type\":\"string\"},\"showPrecision\":{\"type\":\"string\",\"description\":\"显示的精度\"}}}}}",
        "req_body_type": "json",
        "req_body_other": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"appKey\":{\"type\":\"string\",\"description\":\"商家唯一编号\"},\"orderNum\":{\"type\":\"string\",\"description\":\"平台方订单编号\"},\"token\":{\"type\":\"string\",\"description\":\"授权的token\"}},\"required\":[]}"
      },
      {
        "query_path": {
          "path": "/chainup/open/opay/merchantBillingDay",
          "params": []
        },
        "edit_uid": 0,
        "status": "undone",
        "type": "static",
        "req_body_is_json_schema": true,
        "res_body_is_json_schema": true,
        "api_opened": true,
        "index": 4,
        "tag": [],
        "_id": 2250,
        "method": "POST",
        "catid": 514,
        "title": "商家日贴对账单",
        "path": "/chainup/open/opay/merchantBillingDay",
        "project_id": 146,
        "req_params": [],
        "res_body_type": "json",
        "uid": 247,
        "add_time": 1573698652,
        "up_time": 1577434241,
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "5e05bc81e465640ff231e13e",
            "name": "Content-Type",
            "value": "application/json"
          }
        ],
        "req_body_form": [
          {
            "required": "1",
            "_id": "5e05bc81e465640ff231e144",
            "name": "appKey",
            "type": "text",
            "example": ""
          },
          {
            "required": "1",
            "_id": "5e05bc81e465640ff231e143",
            "name": "orderType",
            "type": "text",
            "example": "",
            "desc": "订单类型（1=支付订单；11=划转订单），不传查询所有订单"
          },
          {
            "required": "1",
            "_id": "5e05bc81e465640ff231e142",
            "name": "day",
            "type": "text",
            "example": "",
            "desc": "统计的日期，格式：yyyy-MM-dd，不符合格式参数异常；不传查询当日订单"
          },
          {
            "required": "1",
            "_id": "5e05bc81e465640ff231e141",
            "name": "pageNum",
            "type": "text",
            "example": "",
            "desc": "查询第几页，同分页逻辑；不传查所有"
          },
          {
            "required": "1",
            "_id": "5e05bc81e465640ff231e140",
            "name": "pageSize",
            "type": "text",
            "example": "",
            "desc": "每页大小，同分页逻辑；不传查2000（最大为2000，数据超过2000请分页查询）"
          },
          {
            "required": "1",
            "_id": "5e05bc81e465640ff231e13f",
            "name": "sign",
            "type": "text",
            "example": "",
            "desc": ""
          }
        ],
        "__v": 0,
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"string\"},\"msg\":{\"type\":\"string\"},\"data\":{\"type\":\"object\",\"properties\":{\"count\":{\"type\":\"number\",\"description\":\"当日记录总数；\"},\"list\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"merchantUserId\":{\"type\":\"number\",\"description\":\"商家收款用户id；\"},\"appOrderId\":{\"type\":\"string\",\"description\":\"商家端订单id；\"},\"payCoinSymbol\":{\"type\":\"string\",\"description\":\"支付使用币种；\"},\"orderAmount\":{\"type\":\"number\",\"description\":\"订单操作数量；\"},\"orderType\":{\"type\":\"number\",\"description\":\"订单类型(1、支付订单;11、划转(退款)订单)\"},\"userId\":{\"type\":\"number\",\"description\":\"付款用户id；付款用户id；\"},\"openId\":{\"type\":\"string\",\"description\":\"付款用户openid；\"},\"createTime\":{\"type\":\"string\",\"description\":\"下单时间，到毫秒；\"},\"payTime\":{\"type\":\"string\",\"description\":\"实际支付完成时间，到毫秒；\"}}}}}}}}",
        "req_body_type": "json",
        "req_body_other": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"appKey\":{\"type\":\"string\"},\"orderType\":{\"type\":\"string\",\"description\":\"订单类型（1=支付订单；11=划转订单），不传查询所有订单\"},\"day\":{\"type\":\"string\",\"description\":\"统计的日期，格式：yyyy-MM-dd，不符合格式参数异常；不传查询当日订单\"},\"pageNum\":{\"type\":\"string\",\"description\":\"查询第几页，同分页逻辑；不传查所有\"},\"pageSize\":{\"type\":\"string\",\"description\":\"每页大小，同分页逻辑；不传查2000（最大为2000，数据超过2000请分页查询）\"},\"sign\":{\"type\":\"string\"}},\"required\":[\"appKey\",\"orderType\",\"day\",\"pageNum\",\"pageSize\",\"sign\"]}"
      }
    ]
  },
  {
    "index": 3,
    "name": "赠币",
    "desc": null,
    "add_time": 1573548744,
    "up_time": 1573548744,
    "list": [
      {
        "query_path": {
          "path": "/chainup/open/opay/refundOrder",
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
        "_id": 2256,
        "method": "POST",
        "catid": 520,
        "title": "赠币接口",
        "path": "/chainup/open/opay/refundOrder",
        "project_id": 146,
        "req_params": [],
        "res_body_type": "json",
        "uid": 247,
        "add_time": 1573698822,
        "up_time": 1577434424,
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "5e05bd38e465640ff231e14b",
            "name": "Content-Type",
            "value": "application/json"
          }
        ],
        "req_body_form": [
          {
            "required": "1",
            "_id": "5e05bd38e465640ff231e154",
            "name": "appKey",
            "type": "text",
            "example": ""
          },
          {
            "required": "1",
            "_id": "5e05bd38e465640ff231e153",
            "name": "payCoinSymbol",
            "type": "text",
            "example": "",
            "desc": "支付币种，大写如BTCappKey"
          },
          {
            "required": "1",
            "_id": "5e05bd38e465640ff231e152",
            "name": "openId",
            "type": "text",
            "example": "",
            "desc": "用户的唯一id"
          },
          {
            "required": "1",
            "_id": "5e05bd38e465640ff231e151",
            "name": "userId",
            "type": "text",
            "example": "",
            "desc": "付款用户uid(与openid必须存在一个) ||同时存在优先取openid"
          },
          {
            "required": "1",
            "_id": "5e05bd38e465640ff231e150",
            "name": "assetType",
            "type": "text",
            "example": "",
            "desc": "支付账户类型：AB的AB部分，默认到可用账户"
          },
          {
            "required": "1",
            "_id": "5e05bd38e465640ff231e14f",
            "name": "orderSceneType",
            "type": "text",
            "example": "",
            "desc": "订单的场景类型，数字枚举；"
          },
          {
            "required": "1",
            "_id": "5e05bd38e465640ff231e14e",
            "name": "orderAmount",
            "type": "text",
            "example": "",
            "desc": "金额"
          },
          {
            "required": "1",
            "_id": "5e05bd38e465640ff231e14d",
            "name": "appOrderId",
            "type": "text",
            "example": "",
            "desc": "商家端订单id，全局唯一"
          },
          {
            "required": "1",
            "_id": "5e05bd38e465640ff231e14c",
            "name": "sign",
            "type": "text",
            "example": "",
            "desc": ""
          }
        ],
        "__v": 0,
        "markdown": "| ****assetType**** | **常用资产类型** |\n| --------- | ------ |\n| <span class=\"colour\" style=\"color:rgb(0, 128, 0)\">201</span> | <span class=\"colour\" style=\"color:rgb(0, 128, 0)\">正常余额</span> |\n| <span class=\"colour\" style=\"color:rgb(0, 128, 0)\">202</span> | <span class=\"colour\" style=\"color:rgb(0, 128, 0)\">冻结</span> |\n| <span class=\"colour\" style=\"color:rgb(0, 128, 0)\">203</span> | <span class=\"colour\" style=\"color:rgb(0, 128, 0)\">提现中</span> |\n| <span class=\"colour\" style=\"color:rgb(0, 128, 0)\">206</span> | <span class=\"colour\" style=\"color:rgb(0, 128, 0)\">赠币账户</span> |\n| <span class=\"colour\" style=\"color:rgb(0, 128, 0)\">207</span> | <span class=\"colour\" style=\"color:rgb(0, 128, 0)\">锁仓账户</span> |\n| <span class=\"colour\" style=\"color:rgb(0, 128, 0)\">208</span> | <span class=\"colour\" style=\"color:rgb(0, 128, 0)\">储值锁仓账户</span> |\n| <span class=\"colour\" style=\"color:rgb(0, 128, 0)\">209</span> | <span class=\"colour\" style=\"color:rgb(0, 128, 0)\">储值账户</span> |\n| <span class=\"colour\" style=\"color:rgb(0, 128, 0)\">210</span> | <span class=\"colour\" style=\"color:rgb(0, 128, 0)\">场外商户保证金账户</span> |\n| <span class=\"colour\" style=\"color:rgb(0, 128, 0)\">216</span> | <span class=\"colour\" style=\"color:rgb(0, 128, 0)\">合约保证金账户</span> |\n| <span class=\"colour\" style=\"color:rgb(0, 128, 0)\">217</span> | <span class=\"colour\" style=\"color:rgb(0, 128, 0)\">场外正常余额</span> |\n| <span class=\"colour\" style=\"color:rgb(0, 128, 0)\">218</span> | <span class=\"colour\" style=\"color:rgb(0, 128, 0)\">场外冻结</span> |\n| <span class=\"colour\" style=\"color:rgb(0, 128, 0)\">220</span> | <span class=\"colour\" style=\"color:rgb(0, 128, 0)\">代币锁仓账户</span> |\n| <span class=\"colour\" style=\"color:rgb(0, 128, 0)\">221</span> | <span class=\"colour\" style=\"color:rgb(0, 128, 0)\">申购冻结</span> |\n| <span class=\"colour\" style=\"color:rgb(0, 128, 0)\">222</span> | <span class=\"colour\" style=\"color:rgb(0, 128, 0)\">代币锁仓账户 V2</span> |\n| <span class=\"colour\" style=\"color:rgb(0, 128, 0)\">241</span> | <span class=\"colour\" style=\"color:rgb(0, 128, 0)\">开放平台 - 支付可用账户</span> |\n| <span class=\"colour\" style=\"color:rgb(0, 128, 0)\">242</span> | <span class=\"colour\" style=\"color:rgb(0, 128, 0)\">开放平台 - 收款冻结账户</span> |",
        "desc": "<table>\n<thead>\n<tr>\n<th><strong><strong>assetType</strong></strong></th>\n<th><strong>常用资产类型</strong></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><span class=\"colour\" style=\"color:rgb(0, 128, 0)\">201</span></td>\n<td><span class=\"colour\" style=\"color:rgb(0, 128, 0)\">正常余额</span></td>\n</tr>\n<tr>\n<td><span class=\"colour\" style=\"color:rgb(0, 128, 0)\">202</span></td>\n<td><span class=\"colour\" style=\"color:rgb(0, 128, 0)\">冻结</span></td>\n</tr>\n<tr>\n<td><span class=\"colour\" style=\"color:rgb(0, 128, 0)\">203</span></td>\n<td><span class=\"colour\" style=\"color:rgb(0, 128, 0)\">提现中</span></td>\n</tr>\n<tr>\n<td><span class=\"colour\" style=\"color:rgb(0, 128, 0)\">206</span></td>\n<td><span class=\"colour\" style=\"color:rgb(0, 128, 0)\">赠币账户</span></td>\n</tr>\n<tr>\n<td><span class=\"colour\" style=\"color:rgb(0, 128, 0)\">207</span></td>\n<td><span class=\"colour\" style=\"color:rgb(0, 128, 0)\">锁仓账户</span></td>\n</tr>\n<tr>\n<td><span class=\"colour\" style=\"color:rgb(0, 128, 0)\">208</span></td>\n<td><span class=\"colour\" style=\"color:rgb(0, 128, 0)\">储值锁仓账户</span></td>\n</tr>\n<tr>\n<td><span class=\"colour\" style=\"color:rgb(0, 128, 0)\">209</span></td>\n<td><span class=\"colour\" style=\"color:rgb(0, 128, 0)\">储值账户</span></td>\n</tr>\n<tr>\n<td><span class=\"colour\" style=\"color:rgb(0, 128, 0)\">210</span></td>\n<td><span class=\"colour\" style=\"color:rgb(0, 128, 0)\">场外商户保证金账户</span></td>\n</tr>\n<tr>\n<td><span class=\"colour\" style=\"color:rgb(0, 128, 0)\">216</span></td>\n<td><span class=\"colour\" style=\"color:rgb(0, 128, 0)\">合约保证金账户</span></td>\n</tr>\n<tr>\n<td><span class=\"colour\" style=\"color:rgb(0, 128, 0)\">217</span></td>\n<td><span class=\"colour\" style=\"color:rgb(0, 128, 0)\">场外正常余额</span></td>\n</tr>\n<tr>\n<td><span class=\"colour\" style=\"color:rgb(0, 128, 0)\">218</span></td>\n<td><span class=\"colour\" style=\"color:rgb(0, 128, 0)\">场外冻结</span></td>\n</tr>\n<tr>\n<td><span class=\"colour\" style=\"color:rgb(0, 128, 0)\">220</span></td>\n<td><span class=\"colour\" style=\"color:rgb(0, 128, 0)\">代币锁仓账户</span></td>\n</tr>\n<tr>\n<td><span class=\"colour\" style=\"color:rgb(0, 128, 0)\">221</span></td>\n<td><span class=\"colour\" style=\"color:rgb(0, 128, 0)\">申购冻结</span></td>\n</tr>\n<tr>\n<td><span class=\"colour\" style=\"color:rgb(0, 128, 0)\">222</span></td>\n<td><span class=\"colour\" style=\"color:rgb(0, 128, 0)\">代币锁仓账户 V2</span></td>\n</tr>\n<tr>\n<td><span class=\"colour\" style=\"color:rgb(0, 128, 0)\">241</span></td>\n<td><span class=\"colour\" style=\"color:rgb(0, 128, 0)\">开放平台 - 支付可用账户</span></td>\n</tr>\n<tr>\n<td><span class=\"colour\" style=\"color:rgb(0, 128, 0)\">242</span></td>\n<td><span class=\"colour\" style=\"color:rgb(0, 128, 0)\">开放平台 - 收款冻结账户</span></td>\n</tr>\n</tbody>\n</table>\n",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"string\"},\"msg\":{\"type\":\"string\"},\"data\":{\"type\":\"object\",\"properties\":{\"orderNum\":{\"type\":\"string\"}}}}}",
        "req_body_type": "json",
        "req_body_other": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"appKey\":{\"type\":\"string\"},\"appOrderId\":{\"type\":\"string\",\"description\":\"商家端订单id，全局唯一\"},\"assetType\":{\"type\":\"string\",\"description\":\"支付账户类型：AB的AB部分，默认到可用账户\"},\"openId\":{\"type\":\"string\",\"description\":\"用户的唯一id\"},\"userId\":{\"type\":\"string\",\"description\":\"付款用户uid(与openid必须存在一个) ||同时存在优先取openid\"},\"orderAmount\":{\"type\":\"string\",\"description\":\"金额\"},\"orderSceneType\":{\"type\":\"string\",\"description\":\"订单的场景类型，数字枚举；\"},\"payCoinSymbol\":{\"type\":\"string\",\"description\":\"支付币种，大写如BTC\"},\"sign\":{\"type\":\"string\"}},\"required\":[\"appKey\",\"appOrderId\",\"assetType\",\"openId\",\"userId\",\"orderAmount\",\"orderSceneType\",\"payCoinSymbol\",\"sign\"]}"
      }
    ]
  },
  {
    "index": 4,
    "name": "用户接口",
    "desc": null,
    "add_time": 1573548767,
    "up_time": 1573548767,
    "list": [
      {
        "query_path": {
          "path": "/chainup/open/user/mobile/register",
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
        "_id": 2226,
        "method": "POST",
        "catid": 526,
        "title": "手机号注册",
        "path": "/chainup/open/user/mobile/register",
        "project_id": 146,
        "req_params": [],
        "res_body_type": "json",
        "uid": 247,
        "add_time": 1573698308,
        "up_time": 1584425650,
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "5e706ab2b1bfaf14a321d191",
            "name": "Content-Type",
            "value": "application/json"
          }
        ],
        "req_body_form": [],
        "__v": 0,
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"string\",\"mock\":{\"mock\":\"0\"},\"description\":\"0：成功\"},\"msg\":{\"type\":\"string\"},\"data\":{\"type\":\"object\",\"properties\":{\"uid\":{\"type\":\"string\"}}}}}",
        "req_body_type": "json",
        "req_body_other": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"countryCode\":{\"type\":\"string\"},\"mobileNumber\":{\"type\":\"string\"},\"password\":{\"type\":\"string\"},\"invitedCode\":{\"type\":\"string\"},\"appKey\":{\"type\":\"string\"},\"sign\":{\"type\":\"string\"},\"time\":{\"type\":\"string\"}},\"required\":[\"countryCode\",\"mobileNumber\",\"password\",\"appKey\",\"sign\",\"time\"]}"
      },
      {
        "query_path": {
          "path": "/chainup/open/user/reg_and_login",
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
        "_id": 3234,
        "method": "POST",
        "catid": 526,
        "title": "注册+登录综合接口",
        "path": "/chainup/open/user/reg_and_login",
        "project_id": 146,
        "req_params": [],
        "res_body_type": "json",
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "5e707f56b1bfaf14a321d199",
            "name": "Content-Type",
            "value": "application/json"
          }
        ],
        "req_body_form": [],
        "markdown": "当账号不存在时，会自动注册账号，并返回登录状态\n当账号存在时，如果账号密码正确，返回登录状态",
        "desc": "<p>当账号不存在时，会自动注册账号，并返回登录状态<br>\n当账号存在时，如果账号密码正确，返回登录状态</p>\n",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"string\",\"mock\":{\"mock\":\"0\"},\"description\":\"0：成功\"},\"msg\":{\"type\":\"string\"},\"data\":{\"type\":\"object\",\"properties\":{\"uid\":{\"type\":\"string\",\"description\":\"用户唯一标识\"},\"token\":{\"type\":\"string\",\"description\":\"用户登录状态token，需要存放到当前根域名下的COOKIE中\"}},\"required\":[\"token\",\"uid\"]}}}",
        "req_body_type": "json",
        "req_body_other": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"countryCode\":{\"type\":\"string\",\"description\":\"如果手机号注册为必填项\"},\"mobileNumber\":{\"type\":\"string\",\"description\":\"邮箱和手机号至少需要填一个\"},\"email\":{\"type\":\"string\",\"description\":\"邮箱和手机号至少需要填一个\"},\"password\":{\"type\":\"string\"},\"invitedCode\":{\"type\":\"string\",\"description\":\"邀请码\"},\"ip\":{\"type\":\"string\",\"description\":\"用户真实ip地址\"},\"appKey\":{\"type\":\"string\"},\"sign\":{\"type\":\"string\"},\"time\":{\"type\":\"string\"}},\"required\":[\"password\",\"appKey\",\"sign\",\"time\",\"ip\"]}",
        "uid": 247,
        "add_time": 1584426925,
        "up_time": 1584430934,
        "__v": 0
      }
    ]
  },
  {
    "index": 6,
    "name": "交易接口",
    "desc": null,
    "add_time": 1573548772,
    "up_time": 1573548772,
    "list": [
      {
        "query_path": {
          "path": "/chainup/open/trade/getAll",
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
        "_id": 2589,
        "method": "POST",
        "catid": 532,
        "title": "成交记录查询接口",
        "path": "/chainup/open/trade/getAll",
        "project_id": 146,
        "req_params": [],
        "res_body_type": "json",
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "5df0971fe465640ff231def4",
            "name": "Content-Type",
            "value": "application/x-www-form-urlencoded"
          }
        ],
        "req_body_form": [
          {
            "required": "1",
            "_id": "5df0971fe465640ff231defc",
            "name": "symbol",
            "type": "text",
            "example": "btcusdt",
            "desc": "市场标记"
          },
          {
            "required": "0",
            "_id": "5df0971fe465640ff231defb",
            "name": "startDate",
            "type": "text",
            "example": "2019-12-02 00:00:00",
            "desc": "开始时间，精确到秒“yyyy-MM-dd HH:mm:ss”"
          },
          {
            "required": "0",
            "_id": "5df0971fe465640ff231defa",
            "name": "endDate",
            "type": "text",
            "example": "2019-12-03 00:00:00",
            "desc": "结束时间，精确到秒“yyyy-MM-dd HH:mm:ss”"
          },
          {
            "required": "0",
            "_id": "5df0971fe465640ff231def9",
            "name": "pageSize",
            "type": "text",
            "example": "1000",
            "desc": "默认1000条"
          },
          {
            "required": "0",
            "_id": "5df0971fe465640ff231def8",
            "name": "page",
            "type": "text",
            "example": "1",
            "desc": ""
          },
          {
            "required": "0",
            "_id": "5df0971fe465640ff231def7",
            "name": "sort",
            "type": "text",
            "example": "0",
            "desc": "1表示倒序"
          },
          {
            "required": "1",
            "_id": "5df0971fe465640ff231def6",
            "name": "sign",
            "type": "text",
            "example": "",
            "desc": "签名"
          },
          {
            "required": "1",
            "_id": "5df0971fe465640ff231def5",
            "name": "appKey",
            "type": "text",
            "example": "",
            "desc": ""
          }
        ],
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"string\"},\"msg\":{\"type\":\"string\"},\"data\":{\"type\":\"object\",\"properties\":{\"count\":{\"type\":\"number\"},\"resultList\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"volume\":{\"type\":\"string\"},\"side\":{\"type\":\"string\"},\"feeCoin\":{\"type\":\"string\"},\"price\":{\"type\":\"string\"},\"fee\":{\"type\":\"string\"},\"ctime\":{\"type\":\"number\"},\"deal_price\":{\"type\":\"string\"},\"id\":{\"type\":\"number\"},\"type\":{\"type\":\"string\"},\"bid_id\":{\"type\":\"number\"},\"ask_id\":{\"type\":\"number\"},\"bid_user_id\":{\"type\":\"number\"},\"ask_user_id\":{\"type\":\"number\"}},\"required\":[\"volume\",\"side\",\"feeCoin\",\"price\",\"fee\",\"ctime\",\"deal_price\",\"id\",\"type\",\"bid_id\",\"ask_id\",\"bid_user_id\",\"ask_user_id\"]}}}}}}",
        "req_body_type": "form",
        "uid": 247,
        "add_time": 1575553642,
        "up_time": 1576048415,
        "__v": 0
      }
    ]
  }
]
