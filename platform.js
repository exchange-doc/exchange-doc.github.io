window.platform =[
  {
    "index": 0,
    "name": "新手指引",
    "desc": null,
    "add_time": 1574169549,
    "up_time": 1574169549,
    "list": [
    ]
  },
  { 
    "index": 2,
    "name": "APP OAuth授权",
    "desc": null,
    "add_time": 1592225969,
    "up_time": 1593585911,
    "list": [
      {
        "query_path": {
          "path": "/platform/authorized.html",
          "params": [
            {
              "_id": "5f6d6d881205767e428f1044",
              "name": "appKey",
              "value": "xxx"
            },
            {
              "_id": "5f6d6d881205767e428f1043",
              "name": "redirectUrl",
              "value": "xxx"
            },
            {
              "_id": "5f6d6d881205767e428f1042",
              "name": "state",
              "value": "xxx"
            },
            {
              "_id": "5f6d6d881205767e428f1041",
              "name": "lan",
              "value": "en_US"
            }
          ]
        },
        "edit_uid": 0,
        "status": "undone",
        "type": "static",
        "req_body_is_json_schema": true,
        "res_body_is_json_schema": true,
        "api_opened": true,
        "index": 0,
        "tag": [],
        "_id": 5652,
        "method": "GET",
        "catid": 1125,
        "title": "App授权登录页",
        "path": "/platform/authorized.html",
        "project_id": 146,
        "req_params": [],
        "res_body_type": "json",
        "uid": 303,
        "add_time": 1592273256,
        "up_time": 1601006984,
        "req_query": [
          {
            "required": "1",
            "_id": "5f6d6d881205767e428f1040",
            "name": "appKey",
            "example": "test",
            "desc": "商家key"
          },
          {
            "required": "1",
            "_id": "5f6d6d881205767e428f103f",
            "name": "redirectUrl",
            "example": "https://www.baidu.com",
            "desc": "授权成功后跳转页面"
          },
          {
            "required": "0",
            "_id": "5f6d6d881205767e428f103e",
            "name": "state",
            "example": "1",
            "desc": "商家传入状态字段"
          },
          {
            "required": "1",
            "_id": "5f6d6d881205767e428f103d",
            "name": "lan",
            "example": "zh_CN",
            "desc": "后台配置app入口url时语言环境字段（支持zh_CN en_US）"
          }
        ],
        "req_headers": [],
        "req_body_form": [],
        "__v": 0,
        "markdown": "需要用户APP已登录；登录授权登录成功后携带code、appKey重定向到redirectUrl",
        "desc": "<p>需要用户APP已登录；登录授权登录成功后携带code、appKey重定向到redirectUrl</p>\n",
        "res_body": "{\"type\":\"object\",\"title\":\"empty object\",\"properties\":{}}"
      },
      {
        "query_path": {
          "path": "/platform/authorized_nokyc.html",
          "params": [
            {
              "_id": "5f6dd3da1205767e428f1097",
              "name": "appKey",
              "value": "xxx"
            },
            {
              "_id": "5f6dd3da1205767e428f1096",
              "name": "redirectUrl",
              "value": "xxx"
            },
            {
              "_id": "5f6dd3da1205767e428f1095",
              "name": "state",
              "value": "xxx"
            },
            {
              "_id": "5f6dd3da1205767e428f1094",
              "name": "lan",
              "value": "en_US"
            }
          ]
        },
        "edit_uid": 0,
        "status": "undone",
        "type": "static",
        "req_body_is_json_schema": true,
        "res_body_is_json_schema": true,
        "api_opened": true,
        "index": 0,
        "tag": [],
        "_id": 8151,
        "method": "GET",
        "catid": 1125,
        "title": "OAuth授权登录页(不需要实名)",
        "path": "/platform/authorized_nokyc.html",
        "project_id": 146,
        "req_params": [],
        "res_body_type": "json",
        "uid": 455,
        "add_time": 1601032013,
        "up_time": 1601033178,
        "req_query": [
          {
            "required": "1",
            "_id": "5f6dd3da1205767e428f1093",
            "name": "appKey",
            "example": "test",
            "desc": "商家key"
          },
          {
            "required": "1",
            "_id": "5f6dd3da1205767e428f1092",
            "name": "redirectUrl",
            "example": "\thttps://www.baidu.com",
            "desc": "授权成功后跳转页面"
          },
          {
            "required": "0",
            "_id": "5f6dd3da1205767e428f1091",
            "name": "state",
            "example": "1",
            "desc": "商家传入状态字段"
          },
          {
            "required": "1",
            "_id": "5f6dd3da1205767e428f1090",
            "name": "lan",
            "example": "zh_CN",
            "desc": "后台配置app入口url时语言环境字段（支持zh_CN en_US）"
          }
        ],
        "req_headers": [],
        "req_body_form": [],
        "__v": 0,
        "markdown": "",
        "desc": "",
        "res_body": "{\"type\":\"object\",\"title\":\"empty object\",\"properties\":{}}"
      }
    ]
  },
  {
    "index": 3,
    "name": "OAuth",
    "desc": null,
    "add_time": 1573548711,
    "up_time": 1573548711,
    "list": [
      {
        "query_path": {
          "path": "/platform/login.html",
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
        "path": "/platform/login.html",
        "project_id": 146,
        "req_params": [],
        "res_body_type": "json",
        "uid": 247,
        "add_time": 1574162426,
        "up_time": 1599105640,
        "req_query": [
          {
            "required": "1",
            "_id": "5f506a681205767e428f0b4b",
            "name": "appKey",
            "example": "shangjia",
            "desc": "商家key"
          },
          {
            "required": "1",
            "_id": "5f506a681205767e428f0b4a",
            "name": "redirectUrl",
            "example": "https://www.chaindown.com",
            "desc": "授权登录成功后跳转页面"
          },
          {
            "required": "0",
            "_id": "5f506a681205767e428f0b49",
            "name": "state",
            "example": "1",
            "desc": "商家传入状态字段"
          }
        ],
        "req_headers": [],
        "req_body_form": [],
        "__v": 0,
        "markdown": "最后登录页拼接完成后为:\n[https://service.xxx.com/login.html?appKey=xxx&redirectUrl=xxx&state=xxx](https://platform.xxx.com/login.html?appKey=xxx&redirectUrl=xxx&state=xxx)\n授权登录成功后携带code重定向到redirectUrl",
        "desc": "<p>最后登录页拼接完成后为:<br>\n<a href=\"https://platform.xxx.com/login.html?appKey=xxx&amp;redirectUrl=xxx&amp;state=xxx\">https://service.xxx.com/login.html?appKey=xxx&amp;redirectUrl=xxx&amp;state=xxx</a><br>\n授权登录成功后携带code重定向到redirectUrl</p>\n",
        "res_body": "{\"type\":\"object\",\"title\":\"empty object\",\"properties\":{}}"
      },
      {
        "query_path": {
          "path": "/platformapi/chainup/open/auth/token",
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
        "path": "/platformapi/chainup/open/auth/token",
        "project_id": 146,
        "req_params": [],
        "res_body_type": "json",
        "uid": 247,
        "add_time": 1573698588,
        "up_time": 1593586367,
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "5efc32bfb921e635efc95bcc",
            "name": "Content-Type",
            "value": "application/json"
          }
        ],
        "req_body_form": [
          {
            "required": "1",
            "_id": "5efc32bfb921e635efc95bcf",
            "name": "appKey",
            "type": "text",
            "desc": "商家唯一key"
          },
          {
            "required": "1",
            "_id": "5efc32bfb921e635efc95bce",
            "name": "code",
            "type": "text",
            "example": "",
            "desc": "用户登录授权时返回的code"
          },
          {
            "required": "1",
            "_id": "5efc32bfb921e635efc95bcd",
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
      },
      {
        "query_path": {
          "path": "/platformapi/chainup/open/auth/refreshToken",
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
        "_id": 2247,
        "method": "POST",
        "catid": 508,
        "title": "刷新token",
        "path": "/platformapi/chainup/open/auth/refreshToken",
        "project_id": 146,
        "req_params": [],
        "res_body_type": "json",
        "uid": 247,
        "add_time": 1573698614,
        "up_time": 1593586380,
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "5efc32ccb921e635efc95bd0",
            "name": "Content-Type",
            "value": "application/json"
          }
        ],
        "req_body_form": [
          {
            "required": "1",
            "_id": "5efc32ccb921e635efc95bd4",
            "name": "appKey",
            "type": "text"
          },
          {
            "required": "1",
            "_id": "5efc32ccb921e635efc95bd3",
            "name": "refreshToken",
            "type": "text",
            "example": "",
            "desc": "获取token时收到的 refresh_token"
          },
          {
            "required": "1",
            "_id": "5efc32ccb921e635efc95bd2",
            "name": "token",
            "type": "text",
            "example": "",
            "desc": "token之前授权的token"
          },
          {
            "required": "1",
            "_id": "5efc32ccb921e635efc95bd1",
            "name": "sign",
            "type": "text",
            "example": "",
            "desc": ""
          }
        ],
        "__v": 0,
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"number\"},\"msg\":{\"type\":\"string\"},\"data\":{\"type\":\"object\",\"properties\":{\"openId\":{\"type\":\"string\"},\"expireIn\":{\"type\":\"string\"},\"refersh_token\":{\"type\":\"string\"},\"token\":{\"type\":\"string\"}}}}}",
        "req_body_type": "json",
        "req_body_other": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"appKey\":{\"type\":\"string\"},\"refreshToken\":{\"type\":\"string\",\"description\":\"获取token时收到的 refresh_token\"},\"token\":{\"type\":\"string\",\"description\":\"token之前授权的token\"},\"openId\":{\"type\":\"string\"}},\"required\":[\"appKey\",\"refreshToken\",\"token\",\"openId\"]}"
      }
    ]
  },
  {
    "index": 4,
    "name": "支付",
    "desc": null,
    "add_time": 1573548735,
    "up_time": 1573548735,
    "list": [
      {
        "query_path": {
          "path": "/platformapi/chainup/open/opay/createThirdOrder",
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
        "path": "/platformapi/chainup/open/opay/createThirdOrder",
        "project_id": 146,
        "req_params": [],
        "res_body_type": "json",
        "uid": 247,
        "add_time": 1573698363,
        "up_time": 1593586650,
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "5efc33dab921e635efc95bef",
            "name": "Content-Type",
            "value": "application/json"
          }
        ],
        "req_body_form": [
          {
            "required": "1",
            "_id": "5efc33dab921e635efc95bfb",
            "name": "appKey",
            "type": "text",
            "example": "",
            "desc": "商家唯一编号"
          },
          {
            "required": "1",
            "_id": "5efc33dab921e635efc95bfa",
            "name": "payCoinSymbol",
            "type": "text",
            "example": "",
            "desc": "支付币种，大写如BTCappKey"
          },
          {
            "required": "1",
            "_id": "5efc33dab921e635efc95bf9",
            "name": "openId",
            "type": "text",
            "example": "",
            "desc": "付款用户的唯一id"
          },
          {
            "required": "1",
            "_id": "5efc33dab921e635efc95bf8",
            "name": "userId",
            "type": "text",
            "example": "",
            "desc": "付款用户uid(与openid必须存在一个) ||同时存在优先取openid"
          },
          {
            "required": "1",
            "_id": "5efc33dab921e635efc95bf7",
            "name": "returnPage",
            "type": "text",
            "example": "",
            "desc": "前台跳转商家的页面"
          },
          {
            "required": "1",
            "_id": "5efc33dab921e635efc95bf6",
            "name": "notifyPage",
            "type": "text",
            "example": "",
            "desc": "后台通知商家的地址"
          },
          {
            "required": "1",
            "_id": "5efc33dab921e635efc95bf5",
            "name": "appOrderId",
            "type": "text",
            "example": "",
            "desc": "商家端订单id"
          },
          {
            "required": "1",
            "_id": "5efc33dab921e635efc95bf4",
            "name": "orderSceneType",
            "type": "text",
            "example": "",
            "desc": "订单的场景类型，数字枚举；"
          },
          {
            "required": "1",
            "_id": "5efc33dab921e635efc95bf3",
            "name": "orderAmount",
            "type": "text",
            "example": "",
            "desc": "支付金额"
          },
          {
            "required": "1",
            "_id": "5efc33dab921e635efc95bf2",
            "name": "token",
            "type": "text",
            "example": "",
            "desc": "授权的token"
          },
          {
            "required": "1",
            "_id": "5efc33dab921e635efc95bf1",
            "name": "sign",
            "type": "text",
            "example": "",
            "desc": "MD5(Sort(Param) + secret)"
          },
          {
            "required": "0",
            "_id": "5efc33dab921e635efc95bf0",
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
          "path": "/platform/pay.html",
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
        "path": "/platform/pay.html",
        "project_id": 146,
        "req_params": [],
        "res_body_type": "json",
        "uid": 247,
        "add_time": 1574163370,
        "up_time": 1593586675,
        "req_query": [
          {
            "required": "1",
            "_id": "5efc33f3b921e635efc95c00",
            "name": "appKey",
            "desc": ""
          },
          {
            "required": "1",
            "_id": "5efc33f3b921e635efc95bff",
            "name": "orderNum",
            "example": "",
            "desc": "平台订单编号"
          },
          {
            "required": "1",
            "_id": "5efc33f3b921e635efc95bfe",
            "name": "openId",
            "example": "",
            "desc": "支付人 openId，必须是订单创建人"
          },
          {
            "required": "1",
            "_id": "5efc33f3b921e635efc95bfd",
            "name": "userId",
            "example": "",
            "desc": "付款用户 uid(与 openid 必须存在一个) ||同时存在优先取 openid"
          },
          {
            "required": "1",
            "_id": "5efc33f3b921e635efc95bfc",
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
        "up_time": 1594964177,
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "5f1138d1b921e635efc95eca",
            "name": "Content-Type",
            "value": "application/json"
          }
        ],
        "req_body_form": [],
        "__v": 0,
        "req_body_other": "{\"type\":\"object\",\"title\":\"empty object\",\"properties\":{\"appKey\":{\"type\":\"string\",\"description\":\"商家唯一key\"},\"outOrderId\":{\"type\":\"string\",\"description\":\"商家端订单编号\"},\"orderNum\":{\"type\":\"string\",\"description\":\"开放平台订单编号\"},\"orderStatus\":{\"type\":\"string\",\"description\":\"订单状态(1 待支付； 2 支付失败；3 支付成功； 0 已关闭)\"},\"payAmount\":{\"type\":\"string\",\"description\":\"订单金额\"},\"returnUrl\":{\"type\":\"string\",\"description\":\"同步通知页面(下单接口传入)\"},\"sign\":{\"type\":\"string\"}},\"required\":[\"appKey\",\"outOrderId\",\"orderNum\",\"orderStatus\",\"payAmount\",\"returnUrl\",\"sign\"]}",
        "markdown": "该接口URL由对接商户提供，第一步创建订单时传出的参数：notifyPage\n支付完成后，支付结果会通过notifyPage对应的URL进行通知",
        "desc": "<p>该接口URL由对接商户提供，第一步创建订单时传出的参数：notifyPage<br>\n支付完成后，支付结果会通过notifyPage对应的URL进行通知</p>\n",
        "res_body": "{\"type\":\"object\",\"title\":\"empty object\",\"properties\":{\"data\":{\"type\":\"string\",\"description\":\"客户端收到请求后返回success，代表已收到请求\"}},\"required\":[\"data\"]}",
        "req_body_type": "json"
      },
      {
        "query_path": {
          "path": "/platformapi/chainup/open/opay/orderDetail",
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
        "path": "/platformapi/chainup/open/opay/orderDetail",
        "project_id": 146,
        "req_params": [],
        "res_body_type": "json",
        "uid": 247,
        "add_time": 1573698426,
        "up_time": 1594964249,
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "5f113919b921e635efc95ecb",
            "name": "Content-Type",
            "value": "application/json"
          }
        ],
        "req_body_form": [
          {
            "required": "1",
            "_id": "5f113919b921e635efc95ece",
            "name": "appKey",
            "type": "text",
            "desc": "商家唯一编号"
          },
          {
            "required": "1",
            "_id": "5f113919b921e635efc95ecd",
            "name": "orderNum",
            "type": "text",
            "example": "",
            "desc": "平台方订单编号"
          },
          {
            "required": "1",
            "_id": "5f113919b921e635efc95ecc",
            "name": "token",
            "type": "text",
            "example": "",
            "desc": "授权的token"
          }
        ],
        "__v": 0,
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"integer\"},\"msg\":{\"type\":\"string\"},\"data\":{\"type\":\"object\",\"properties\":{\"totalAccount\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"accountName\":{\"type\":\"string\",\"description\":\"账户名称(下拉菜单中显示)\"},\"accountType\":{\"type\":\"integer\",\"description\":\"账户类型(id)需要回传给后端的相当于id字段\"},\"accountBalance\":{\"type\":\"number\",\"description\":\"支付用户该账户的余额\"}},\"required\":[\"accountName\",\"accountType\",\"accountBalance\"]},\"description\":\"商户支持的所有账户list\"},\"googleStatus\":{\"type\":\"number\",\"description\":\"是否开启google验证；0-未开启,1-开启\"},\"appOrderId\":{\"type\":\"string\",\"description\":\"商家订单id\"},\"sign\":{\"type\":\"string\",\"description\":\"签名\"},\"orderNum\":{\"type\":\"string\",\"description\":\"订单编号\"},\"orderStatus\":{\"type\":\"string\",\"description\":\"订单状态(1 待支付； 2 支付失败；3 支付成功； 0 已关闭)\"},\"userId\":{\"type\":\"integer\",\"description\":\"用户id\"},\"isOpenMobileCheck\":{\"type\":\"string\",\"description\":\"是否开启手机短信效验；0-未开启,1-开启\"},\"orderAmount\":{\"type\":\"string\",\"description\":\"订单金额\"},\"payCoinSymbol\":{\"type\":\"string\",\"description\":\"支付币种\"},\"ctime\":{\"type\":\"string\"},\"appKey\":{\"type\":\"string\"},\"showPrecision\":{\"type\":\"string\",\"description\":\"显示的精度\"}}}}}",
        "req_body_type": "json",
        "req_body_other": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"appKey\":{\"type\":\"string\",\"description\":\"商家唯一编号\"},\"orderNum\":{\"type\":\"string\",\"description\":\"平台方订单编号\"},\"token\":{\"type\":\"string\",\"description\":\"授权的token\"}},\"required\":[]}"
      },
      {
        "query_path": {
          "path": "/platformapi/chainup/open/opay/merchantBillingDay",
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
        "path": "/platformapi/chainup/open/opay/merchantBillingDay",
        "project_id": 146,
        "req_params": [],
        "res_body_type": "json",
        "uid": 247,
        "add_time": 1573698652,
        "up_time": 1593586978,
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "5efc3522b921e635efc95c05",
            "name": "Content-Type",
            "value": "application/json"
          }
        ],
        "req_body_form": [
          {
            "required": "1",
            "_id": "5efc3522b921e635efc95c0b",
            "name": "appKey",
            "type": "text",
            "example": ""
          },
          {
            "required": "1",
            "_id": "5efc3522b921e635efc95c0a",
            "name": "orderType",
            "type": "text",
            "example": "",
            "desc": "订单类型（1=支付订单；11=划转订单），不传查询所有订单"
          },
          {
            "required": "1",
            "_id": "5efc3522b921e635efc95c09",
            "name": "day",
            "type": "text",
            "example": "",
            "desc": "统计的日期，格式：yyyy-MM-dd，不符合格式参数异常；不传查询当日订单"
          },
          {
            "required": "1",
            "_id": "5efc3522b921e635efc95c08",
            "name": "pageNum",
            "type": "text",
            "example": "",
            "desc": "查询第几页，同分页逻辑；不传查所有"
          },
          {
            "required": "1",
            "_id": "5efc3522b921e635efc95c07",
            "name": "pageSize",
            "type": "text",
            "example": "",
            "desc": "每页大小，同分页逻辑；不传查2000（最大为2000，数据超过2000请分页查询）"
          },
          {
            "required": "1",
            "_id": "5efc3522b921e635efc95c06",
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
      },
      {
        "query_path": {
          "path": "/opay/cancelOrder",
          "params": []
        },
        "edit_uid": 0,
        "status": "undone",
        "type": "static",
        "req_body_is_json_schema": true,
        "res_body_is_json_schema": true,
        "api_opened": true,
        "index": 6,
        "tag": [],
        "_id": 7959,
        "method": "POST",
        "catid": 514,
        "title": "取消待支付订单",
        "path": "/opay/cancelOrder",
        "project_id": 146,
        "req_params": [],
        "res_body_type": "json",
        "uid": 361,
        "add_time": 1600864662,
        "up_time": 1603693694,
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "5f966c7e1205767e428f13c2",
            "name": "Content-Type",
            "value": "application/x-www-form-urlencoded"
          }
        ],
        "req_body_form": [
          {
            "required": "1",
            "_id": "5f966c7e1205767e428f13c4",
            "name": "appKey",
            "type": "text",
            "desc": "xfnh_1234"
          },
          {
            "required": "1",
            "_id": "5f966c7e1205767e428f13c3",
            "name": "orderNum",
            "type": "text",
            "example": "",
            "desc": "99999999999"
          }
        ],
        "__v": 0,
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"number\"},\"msg\":{\"type\":\"string\"}}}",
        "req_body_type": "form"
      }
    ]
  },
  {
    "index": 5,
    "name": "赠币",
    "desc": null,
    "add_time": 1573548744,
    "up_time": 1573548744,
    "list": [
      {
        "query_path": {
          "path": "/platformapi/chainup/open/opay/refundOrder",
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
        "path": "/platformapi/chainup/open/opay/refundOrder",
        "project_id": 146,
        "req_params": [],
        "res_body_type": "json",
        "uid": 247,
        "add_time": 1573698822,
        "up_time": 1595494988,
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "5f19524cb921e635efc96019",
            "name": "Content-Type",
            "value": "application/json"
          }
        ],
        "req_body_form": [
          {
            "required": "1",
            "_id": "5f19524cb921e635efc96022",
            "name": "appKey",
            "type": "text",
            "example": ""
          },
          {
            "required": "1",
            "_id": "5f19524cb921e635efc96021",
            "name": "payCoinSymbol",
            "type": "text",
            "example": "",
            "desc": "支付币种，大写如BTCappKey"
          },
          {
            "required": "1",
            "_id": "5f19524cb921e635efc96020",
            "name": "openId",
            "type": "text",
            "example": "",
            "desc": "用户的唯一id"
          },
          {
            "required": "1",
            "_id": "5f19524cb921e635efc9601f",
            "name": "userId",
            "type": "text",
            "example": "",
            "desc": "付款用户uid(与openid必须存在一个) ||同时存在优先取openid"
          },
          {
            "required": "1",
            "_id": "5f19524cb921e635efc9601e",
            "name": "assetType",
            "type": "text",
            "example": "",
            "desc": "支付账户类型：AB的AB部分，默认到可用账户"
          },
          {
            "required": "1",
            "_id": "5f19524cb921e635efc9601d",
            "name": "orderSceneType",
            "type": "text",
            "example": "",
            "desc": "订单的场景类型，数字枚举；"
          },
          {
            "required": "1",
            "_id": "5f19524cb921e635efc9601c",
            "name": "orderAmount",
            "type": "text",
            "example": "",
            "desc": "金额"
          },
          {
            "required": "1",
            "_id": "5f19524cb921e635efc9601b",
            "name": "appOrderId",
            "type": "text",
            "example": "",
            "desc": "商家端订单id，全局唯一"
          },
          {
            "required": "1",
            "_id": "5f19524cb921e635efc9601a",
            "name": "sign",
            "type": "text",
            "example": "",
            "desc": ""
          }
        ],
        "__v": 0,
        "markdown": "| ****assetType**** | **常用资产类型** |\n| --------- | ------ |\n| <span class=\"colour\" style=\"color:rgb(0, 128, 0)\">201</span> | <span class=\"colour\" style=\"color:rgb(0, 128, 0)\">正常余额</span> |",
        "desc": "<table>\n<thead>\n<tr>\n<th><strong><strong>assetType</strong></strong></th>\n<th><strong>常用资产类型</strong></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><span class=\"colour\" style=\"color:rgb(0, 128, 0)\">201</span></td>\n<td><span class=\"colour\" style=\"color:rgb(0, 128, 0)\">正常余额</span></td>\n</tr>\n</tbody>\n</table>\n",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"string\"},\"msg\":{\"type\":\"string\"},\"data\":{\"type\":\"object\",\"properties\":{\"orderNum\":{\"type\":\"string\"}}}}}",
        "req_body_type": "json",
        "req_body_other": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"appKey\":{\"type\":\"string\"},\"appOrderId\":{\"type\":\"string\",\"description\":\"商家端订单id，全局唯一\"},\"assetType\":{\"type\":\"string\",\"description\":\"支付账户类型：AB的AB部分，默认到可用账户\"},\"openId\":{\"type\":\"string\",\"description\":\"收款用户的唯一id，开放平台授权给应用的用户唯一标识\"},\"userId\":{\"type\":\"string\",\"description\":\"收款用户uid(与openid必须存在一个) ||同时存在优先取openid\"},\"orderAmount\":{\"type\":\"string\",\"description\":\"金额\"},\"orderSceneType\":{\"type\":\"string\",\"description\":\"订单的场景类型，数字枚举；\"},\"payCoinSymbol\":{\"type\":\"string\",\"description\":\"支付币种，大写如BTC\"},\"sign\":{\"type\":\"string\"}},\"required\":[\"appKey\",\"appOrderId\",\"assetType\",\"openId\",\"userId\",\"orderAmount\",\"orderSceneType\",\"payCoinSymbol\",\"sign\"]}"
      }
    ]
  },
  {
    "index": 6,
    "name": "用户信息接口",
    "desc": null,
    "add_time": 1573548767,
    "up_time": 1600657976,
    "list": [
      {
        "query_path": {
          "path": "/platformapi/chainup/open/user/user_superior",
          "params": []
        },
        "edit_uid": 0,
        "status": "done",
        "type": "static",
        "req_body_is_json_schema": true,
        "res_body_is_json_schema": true,
        "api_opened": true,
        "index": 4,
        "tag": [],
        "_id": 7281,
        "method": "POST",
        "catid": 526,
        "title": "邀请关系查询-上级",
        "path": "/platformapi/chainup/open/user/user_superior",
        "project_id": 146,
        "req_params": [],
        "res_body_type": "json",
        "uid": 455,
        "add_time": 1599556756,
        "up_time": 1600659420,
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "5f681fdc1205767e428f0e22",
            "name": "Content-Type",
            "value": "application/json"
          }
        ],
        "req_body_form": [
          {
            "required": "1",
            "_id": "5f681fdc1205767e428f0e23",
            "name": "uid\t",
            "type": "text"
          }
        ],
        "__v": 0,
        "markdown": "> **返回当前查询到的所有上级,最高五级**\n\n以下邀请关系为\nuid:5037287 --> uid:4930639\n![image.png](data:image/png;base64,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srIet5NRECBAgAABAgQIEFidwGaEFc+srO6O0BIBAgQIECBAgACBNREQVtZkIgyDAAECBAgQIECAAIG+wGaEFV9d3J9V7wgQIECAAAECBAhsgMAzDyv+KOQG3IMugQABAgQIECBAgMCowDMPK6PX5CABAgQIECBAgAABAhsgIKxswCS6BAIECBAgQIAAAQKbKCCsbOKsuiYCBAgQIECAAAECGyCw8rCyASYugQABAgQIECBAgACBNRAQVtZgEgyBAAECBAgQIECAAIFZAWFl1sQRAgQIECBAgAABAgTWQEBYWYNJMAQCBAgQIECAAAECBGYFhJVZE0cIECBAgAABAgQIEFgDAWFlDSbBEAgQIECAAAECBAgQmBUQVmZNHCFAgAABAgQIECBAYA0EhJU1mARDIECAAAECBAgQIEBgVkBYmTVxhAABAgQIECBAgACBNRCYfPnyJfwwcA+4B9wD7gH3gHvAPeAecA+4B9btHrCysgaJ0RAIECBAgAABAgQIEJgVEFZmTRwhQIAAAQIECBAgQGANBISVNZgEQyBAgAABAgQIECBAYFZAWJk1cYQAAQIECBAgQIAAgTUQEFbWYBIMgQABAgQIECBAgACBWQFhZdbEEQIECBAgQIAAAQIE1kBAWFmDSTAEAgQIECBAgAABAgRmBf4/2MOn3RXC6e4AAAAASUVORK5CYII=)",
        "desc": "<blockquote>\n<p><strong>返回当前查询到的所有上级,最高五级</strong></p>\n</blockquote>\n<p>以下邀请关系为<br>\nuid:5037287 --&gt; uid:4930639<br>\n<img src=\"data:image/png;base64,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srIet5NRECBAgAABAgQIEFidwGaEFc+srO6O0BIBAgQIECBAgACBNREQVtZkIgyDAAECBAgQIECAAIG+wGaEFV9d3J9V7wgQIECAAAECBAhsgMAzDyv+KOQG3IMugQABAgQIECBAgMCowDMPK6PX5CABAgQIECBAgAABAhsgIKxswCS6BAIECBAgQIAAAQKbKCCsbOKsuiYCBAgQIECAAAECGyCw8rCyASYugQABAgQIECBAgACBNRAQVtZgEgyBAAECBAgQIECAAIFZAWFl1sQRAgQIECBAgAABAgTWQEBYWYNJMAQCBAgQIECAAAECBGYFhJVZE0cIECBAgAABAgQIEFgDAWFlDSbBEAgQIECAAAECBAgQmBUQVmZNHCFAgAABAgQIECBAYA0EhJU1mARDIECAAAECBAgQIEBgVkBYmTVxhAABAgQIECBAgACBNRCYfPnyJfwwcA+4B9wD7gH3gHvAPeAecA+4B9btHrCysgaJ0RAIECBAgAABAgQIEJgVEFZmTRwhQIAAAQIECBAgQGANBISVNZgEQyBAgAABAgQIECBAYFZAWJk1cYQAAQIECBAgQIAAgTUQEFbWYBIMgQABAgQIECBAgACBWQFhZdbEEQIECBAgQIAAAQIE1kBAWFmDSTAEAgQIECBAgAABAgRmBf4/2MOn3RXC6e4AAAAASUVORK5CYII=\" alt=\"image.png\"></p>\n",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"string\"},\"msg\":{\"type\":\"string\"},\"data\":{\"type\":\"object\",\"properties\":{\"user\":{\"type\":\"object\",\"properties\":{\"uid\":{\"type\":\"number\",\"description\":\"用户id\"},\"inviteCode\":{\"type\":\"string\",\"description\":\"邀请码\"},\"invitedCode\":{\"type\":\"string\",\"description\":\"被邀请码\"},\"invitedUid\":{\"type\":\"number\",\"description\":\"邀请人Uid\"}}},\"level1\":{\"type\":\"object\",\"properties\":{\"uid\":{\"type\":\"number\",\"description\":\"用户id\"},\"inviteCode\":{\"type\":\"string\",\"description\":\"邀请码\"},\"invitedCode\":{\"type\":\"string\",\"description\":\"被邀请码\"},\"invitedUid\":{\"type\":\"number\",\"description\":\"邀请人Uid\"}}},\"level2\":{\"type\":\"object\",\"properties\":{\"uid\":{\"type\":\"number\",\"description\":\"用户id\"},\"inviteCode\":{\"type\":\"string\",\"description\":\"邀请码\"},\"invitedCode\":{\"type\":\"string\",\"description\":\"被邀请码\"},\"invitedUid\":{\"type\":\"number\",\"description\":\"邀请人Uid\"}}},\"level3\":{\"type\":\"object\",\"properties\":{\"uid\":{\"type\":\"number\",\"description\":\"用户id\"},\"inviteCode\":{\"type\":\"string\",\"description\":\"邀请码\"},\"invitedCode\":{\"type\":\"string\",\"description\":\"被邀请码\"},\"invitedUid\":{\"type\":\"number\",\"description\":\"邀请人Uid\"}}},\"level4\":{\"type\":\"object\",\"properties\":{\"uid\":{\"type\":\"number\",\"description\":\"用户id\"},\"inviteCode\":{\"type\":\"string\",\"description\":\"邀请码\"},\"invitedCode\":{\"type\":\"string\",\"description\":\"被邀请码\"},\"invitedUid\":{\"type\":\"number\",\"description\":\"邀请人Uid\"}}}}}}}",
        "req_body_type": "json",
        "req_body_other": "{\"type\":\"object\",\"title\":\"empty object\",\"properties\":{\"uid\":{\"type\":\"number\",\"mock\":{\"mock\":\"10002181\"},\"description\":\"用户uid,与openId和emailOrPhone三选一,优先uid\"},\"openId\":{\"type\":\"string\",\"mock\":{\"mock\":\"32432423\"},\"description\":\"openid,用户uid,与openId和emailOrPhone三选一,优先uid\"},\"emailOrPhone\":{\"type\":\"string\",\"mock\":{\"mock\":\"18310479050\"},\"description\":\"邮箱或地址, 与uid,openid二选一\"},\"sign\":{\"type\":\"string\"},\"appKey\":{\"type\":\"string\"}},\"required\":[\"uid\",\"openId\",\"emailOrPhone\",\"sign\",\"appKey\"]}"
      },
      {
        "query_path": {
          "path": "/platformapi/chainup/open/user/user_invite",
          "params": []
        },
        "edit_uid": 0,
        "status": "done",
        "type": "static",
        "req_body_is_json_schema": true,
        "res_body_is_json_schema": true,
        "api_opened": true,
        "index": 5,
        "tag": [],
        "_id": 6969,
        "method": "POST",
        "catid": 526,
        "title": "邀请关系查询-下级",
        "path": "/platformapi/chainup/open/user/user_invite",
        "project_id": 146,
        "req_params": [],
        "res_body_type": "json",
        "uid": 367,
        "add_time": 1598925928,
        "up_time": 1600659432,
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "5f681fe81205767e428f0e24",
            "name": "Content-Type",
            "value": "application/json"
          }
        ],
        "req_body_form": [],
        "__v": 0,
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"string\",\"mock\":{\"mock\":\"0\"},\"description\":\"返回码\"},\"msg\":{\"type\":\"string\",\"mock\":{\"mock\":\"suc\"},\"description\":\"返回消息\"},\"data\":{\"type\":\"object\",\"properties\":{\"levelOneCount\":{\"type\":\"number\",\"mock\":{\"mock\":\"4\"},\"description\":\"第一层子级\"},\"levelTwoCount\":{\"type\":\"number\",\"mock\":{\"mock\":\"9\"},\"description\":\"第二层子级\"},\"cuerrentUser\":{\"type\":\"object\",\"properties\":{\"uid\":{\"type\":\"number\",\"description\":\"当前用户uid\",\"mock\":{\"mock\":\"10002053\"}},\"nickname\":{\"type\":\"string\",\"mock\":{\"mock\":\"xuyang\"},\"description\":\"当前用户nickname\"},\"inviteCode\":{\"type\":\"string\",\"mock\":{\"mock\":\"EAAAQATW\"},\"description\":\"当前用户邀请码\"},\"invitedUid\":{\"type\":\"number\",\"description\":\"当前用户邀请人,不存在时返回-1\",\"mock\":{\"mock\":\"-1\"}},\"invitedCode\":{\"type\":\"string\",\"mock\":{\"mock\":\"\\\"'\"},\"description\":\"当前用户被邀请码,不存在返回空串\"},\"ctime\":{\"type\":\"string\",\"mock\":{\"mock\":\"2019-09-02 12:24:36\"}}},\"required\":[\"uid\",\"nickname\",\"inviteCode\",\"invitedUid\",\"invitedCode\",\"ctime\"]},\"userExtInviteVoList\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"uid\":{\"type\":\"number\",\"description\":\"uid\",\"mock\":{\"mock\":\"10002183\"}},\"nickname\":{\"type\":\"string\",\"description\":\"nickname\",\"mock\":{\"mock\":\"小明\"}},\"inviteCode\":{\"type\":\"string\",\"mock\":{\"mock\":\"XXXXXXXX\"},\"description\":\"邀请码\"},\"level\":{\"type\":\"number\",\"mock\":{\"mock\":\"1\"},\"description\":\"第一层子级\"},\"invitedUid\":{\"type\":\"number\",\"mock\":{\"mock\":\"10002181\"},\"description\":\"邀请人uid\"},\"invitedNickname\":{\"type\":\"string\",\"description\":\"邀请人nickname\",\"mock\":{\"mock\":\"小花\"}},\"invitedCode\":{\"type\":\"string\",\"mock\":{\"mock\":\"XXXXXXXX\"},\"description\":\"邀请人邀请码\"},\"phone\":{\"type\":\"string\",\"mock\":{\"mock\":\"18310479052\"},\"description\":\"手机号码\"},\"email\":{\"type\":\"string\",\"mock\":{\"mock\":\"111@163.com\"},\"description\":\"email\"},\"ctime\":{\"type\":\"string\",\"mock\":{\"mock\":\"2020-08-22 19:40:18\"},\"description\":\"注册时间\"},\"childLevel\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"uid\":{\"type\":\"number\",\"mock\":{\"mock\":\"10002065\"},\"description\":\"uid\"},\"nickname\":{\"type\":\"string\",\"mock\":{\"mock\":\"小明\"},\"description\":\"nickname\"},\"inviteCode\":{\"type\":\"string\",\"mock\":{\"mock\":\"XXXXXXXX\"},\"description\":\"邀请码\"},\"level\":{\"type\":\"number\",\"mock\":{\"mock\":\"2\"},\"description\":\"第二层子级\"},\"invitedUid\":{\"type\":\"number\",\"mock\":{\"mock\":\"10002183\"},\"description\":\"邀请人uid\"},\"invitedNickname\":{\"type\":\"string\",\"mock\":{\"mock\":\"小花\"},\"description\":\"邀请人nickname\"},\"invitedCode\":{\"type\":\"string\",\"mock\":{\"mock\":\"XXXXXXXX\"},\"description\":\"邀请人邀请码\"},\"phone\":{\"type\":\"string\",\"mock\":{\"mock\":\"18210479051\"},\"description\":\"手机号码\"},\"email\":{\"type\":\"string\",\"mock\":{\"mock\":\"111@163.com\"},\"description\":\"email\"},\"ctime\":{\"type\":\"string\",\"mock\":{\"mock\":\"2020-04-09 20:52:26\"},\"description\":\"注册时间\"}},\"required\":[\"uid\",\"level\",\"invitedUid\",\"phone\",\"email\",\"ctime\",\"nickname\",\"inviteCode\",\"invitedCode\",\"invitedNickname\"]}}}},\"description\":\"被邀请人列表\"}},\"required\":[\"cuerrentUser\"]}}}",
        "req_body_type": "json",
        "req_body_other": "{\"type\":\"object\",\"title\":\"empty object\",\"properties\":{\"uid\":{\"type\":\"number\",\"mock\":{\"mock\":\"10002181\"},\"description\":\"用户uid,与openId和emailOrPhone三选一,优先uid\"},\"openId\":{\"type\":\"string\",\"mock\":{\"mock\":\"32432423\"},\"description\":\"openid,用户uid,与openId和emailOrPhone三选一,优先uid\"},\"emailOrPhone\":{\"type\":\"string\",\"mock\":{\"mock\":\"18310479050\"},\"description\":\"邮箱或地址, 与uid,openid二选一\"},\"page\":{\"type\":\"number\",\"description\":\"翻页页数,不填默认为1\",\"mock\":{\"mock\":\"1\"}},\"pageSize\":{\"type\":\"number\",\"description\":\"每页数量,不填默认为100\",\"mock\":{\"mock\":\"100\"}},\"sign\":{\"type\":\"string\"},\"appKey\":{\"type\":\"string\"}},\"required\":[\"uid\",\"emailOrPhone\",\"sign\",\"appKey\",\"openId\"]}"
      }
    ]
  },
  {
    "index": 8,
    "name": "用户资产接口",
    "desc": "提现，充值，账户，场外等记录",
    "add_time": 1600232376,
    "up_time": 1600658491,
    "list": [
      {
        "query_path": {
          "path": "/platformapi/chainup/open/ouser/userAccounts",
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
        "_id": 2253,
        "method": "POST",
        "catid": 1501,
        "title": "用户资产查询（单币种）",
        "path": "/platformapi/chainup/open/ouser/userAccounts",
        "project_id": 146,
        "req_params": [],
        "res_body_type": "json",
        "uid": 247,
        "add_time": 1573698711,
        "up_time": 1600663203,
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "5f682ea31205767e428f0e50",
            "name": "Content-Type",
            "value": "application/json"
          }
        ],
        "req_body_form": [],
        "__v": 0,
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"string\"},\"msg\":{\"type\":\"string\"},\"data\":{\"type\":\"object\",\"properties\":{\"BTCPrecision\":{\"type\":\"string\",\"description\":\"币种参数 + precision ： 该币种交易所精度\"},\"accounts\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"uid\":{\"type\":\"string\"},\"balance\":{\"type\":\"string\",\"description\":\"账号余额\"},\"tag\":{\"type\":\"string\",\"description\":\"描述\"},\"type\":{\"type\":\"string\",\"description\":\"资产编号\"}},\"required\":[\"uid\",\"balance\",\"tag\",\"type\"]}},\"USDTPrecision\":{\"type\":\"string\",\"description\":\"币种参数 + precision ： 该币种交易所精度\"}}}}}",
        "req_body_type": "json",
        "req_body_other": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"appKey\":{\"type\":\"string\",\"description\":\"商家唯一编号\"},\"openId\":{\"type\":\"string\",\"description\":\"openId，userId必传一个，同时传递，取openId\"},\"userId\":{\"type\":\"string\",\"description\":\"openId，userId必传一个，同时传递，取openId\"},\"coinSymbols\":{\"type\":\"string\",\"description\":\"货币类型：如 ：BTC、USDT、BIKI、等；参考交易所内币种配置；多个币种用逗号分隔：例：\\\"USDT,BTC,ETH\\\"\"},\"assetType\":{\"type\":\"string\",\"description\":\"常用类型：\\\"201\\\" ：普通账户余额\"},\"sign\":{\"type\":\"string\",\"description\":\"签名\"}},\"required\":[\"appKey\",\"openId\",\"userId\",\"coinSymbols\",\"sign\"]}"
      },
      {
        "query_path": {
          "path": "/platformapi/chainup/open/user/accountBalance",
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
        "_id": 7365,
        "method": "POST",
        "catid": 1501,
        "title": "用户账户余额（全币种）",
        "path": "/platformapi/chainup/open/user/accountBalance",
        "project_id": 146,
        "req_params": [],
        "res_body_type": "json",
        "uid": 345,
        "add_time": 1600232618,
        "up_time": 1600779922,
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "5f69f6921205767e428f0ede",
            "name": "Content-Type",
            "value": "application/json"
          }
        ],
        "req_body_form": [],
        "__v": 0,
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"string\"},\"msg\":{\"type\":\"string\"},\"message\":{\"type\":\"null\"},\"data\":{\"type\":\"object\",\"properties\":{\"totalBalance\":{\"type\":\"string\",\"description\":\"总资产\"},\"totalBalanceSymbol\":{\"type\":\"string\",\"description\":\"总资产币种\"},\"platformCoin\":{\"type\":\"string\",\"description\":\"分红配置的平台币\"},\"allCoinMap\":{\"type\":\"object\",\"properties\":{\"LTC\":{\"type\":\"object\",\"properties\":{\"walletTransactionOpen\":{\"type\":\"number\",\"description\":\"币种是否开启钱包划转\"},\"isFiat\":{\"type\":\"number\",\"description\":\"是否为法币，0:数字货币，1法币\"},\"normal_balance\":{\"type\":\"string\",\"description\":\"用户现货正常余额\"},\"allBalance\":{\"type\":\"string\",\"description\":\"所有余额\"},\"exchange_symbol\":{\"type\":\"string\",\"description\":\"交易币对\"},\"present_coin_balance\":{\"type\":\"number\",\"description\":\"赠币账户\"},\"lock_position_balance\":{\"type\":\"string\",\"description\":\"锁仓账户\"},\"btcValuatin\":{\"type\":\"string\",\"description\":\"BTC折合\"},\"sort\":{\"type\":\"number\",\"description\":\"币种排序\"},\"depositOpen\":{\"type\":\"number\",\"description\":\"是否打开充值\"},\"lock_grant_divided_balance\":{\"type\":\"string\",\"description\":\"用户代币锁仓+挖矿锁仓账户余额\"},\"total_balance\":{\"type\":\"string\",\"description\":\"总余额\"},\"nc_lock_balance\":{\"type\":\"string\",\"description\":\"用户申购冻结余额\"},\"otcOpen\":{\"type\":\"number\",\"description\":\"是否开启场外\"},\"depositMin\":{\"type\":\"number\",\"description\":\"最小充值金额\"},\"checked\":{\"type\":\"string\",\"description\":\"是否隐藏零资产，默认给true\"},\"coinName\":{\"type\":\"string\",\"description\":\"名字\"},\"lock_balance\":{\"type\":\"string\",\"description\":\"冻结金额\"},\"allBtcValuatin\":{\"type\":\"string\",\"description\":\"所有折合btc\"},\"lock_position_v2_amount\":{\"type\":\"string\",\"description\":\"用户代币锁仓账户V2\"},\"withdrawOpen\":{\"type\":\"number\",\"description\":\"是否开启提现\"},\"overcharge_balance\":{\"type\":\"string\"}}},\"BCH\":{\"type\":\"object\",\"properties\":{\"walletTransactionOpen\":{\"type\":\"number\"},\"isFiat\":{\"type\":\"number\"},\"normal_balance\":{\"type\":\"string\"},\"allBalance\":{\"type\":\"string\"},\"exchange_symbol\":{\"type\":\"string\"},\"present_coin_balance\":{\"type\":\"number\"},\"lock_position_balance\":{\"type\":\"string\"},\"btcValuatin\":{\"type\":\"string\"},\"sort\":{\"type\":\"number\"},\"depositOpen\":{\"type\":\"number\"},\"lock_grant_divided_balance\":{\"type\":\"string\"},\"total_balance\":{\"type\":\"string\"},\"nc_lock_balance\":{\"type\":\"string\"},\"otcOpen\":{\"type\":\"number\"},\"depositMin\":{\"type\":\"number\"},\"checked\":{\"type\":\"string\"},\"coinName\":{\"type\":\"string\"},\"lock_balance\":{\"type\":\"string\"},\"allBtcValuatin\":{\"type\":\"string\"},\"lock_position_v2_amount\":{\"type\":\"string\"},\"withdrawOpen\":{\"type\":\"number\"},\"overcharge_balance\":{\"type\":\"string\"}}}},\"description\":\"所有币种的映射，key是币种名字大写，value是每个币种对应的资产详情，\"}}}}}",
        "req_body_type": "json",
        "req_body_other": "{\"type\":\"object\",\"title\":\"empty object\",\"properties\":{\"appKey\":{\"type\":\"string\",\"description\":\"appkey\"},\"openId\":{\"type\":\"string\",\"description\":\"openId\"},\"userId\":{\"type\":\"number\",\"description\":\"用户id\"},\"mobileNumber\":{\"type\":\"string\",\"description\":\"手机号码\"},\"email\":{\"type\":\"string\",\"description\":\"用户邮箱(openId,userId,mobileNumber,email)四选一必填\"}},\"required\":[\"appKey\"]}"
      },
      {
        "query_path": {
          "path": "/platformapi/chainup/open/user/depositRecord",
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
        "_id": 7353,
        "method": "POST",
        "catid": 1501,
        "title": "用户充值记录",
        "path": "/platformapi/chainup/open/user/depositRecord",
        "project_id": 146,
        "req_params": [],
        "res_body_type": "json",
        "uid": 345,
        "add_time": 1600232559,
        "up_time": 1600779932,
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "5f69f69c1205767e428f0edf",
            "name": "Content-Type",
            "value": "application/json"
          }
        ],
        "req_body_form": [],
        "__v": 0,
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"string\"},\"msg\":{\"type\":\"string\"},\"message\":{\"type\":\"null\"},\"data\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"symbol\":{\"type\":\"string\",\"description\":\"充值币种\"},\"id\":{\"type\":\"number\",\"description\":\"充值id\"},\"uid\":{\"type\":\"number\",\"description\":\"充值用户id\"},\"createdAt\":{\"type\":\"number\",\"description\":\"充值创建时间\"},\"addressTo\":{\"type\":\"string\",\"description\":\"充值地址\"},\"amount\":{\"type\":\"string\",\"description\":\"充值金额\"},\"txid\":{\"type\":\"string\",\"description\":\"txid\"},\"status\":{\"type\":\"number\",\"description\":\"充值状态 0 待确认，1 已完成 2 充值状态异常\"},\"depositType\":{\"type\":\"number\",\"description\":\"充值类型，0 外部充值 1 内部充值\"},\"statusDesc\":{\"type\":\"string\",\"description\":\"充值状态描述\"},\"mobileNumber\":{\"type\":\"string\",\"description\":\"用户手机号\"},\"email\":{\"type\":\"string\",\"description\":\"邮箱\"},\"riskLevel\":{\"type\":\"number\",\"description\":\"0:No Risk Detected   1:Low Risk  2:Medium Risk  3:High Risk\"}}}}}}",
        "req_body_type": "json",
        "req_body_other": "{\"type\":\"object\",\"title\":\"empty object\",\"properties\":{\"appKey\":{\"type\":\"string\",\"description\":\"appkey\"},\"openId\":{\"type\":\"string\",\"description\":\"openId\"},\"userId\":{\"type\":\"number\",\"description\":\"用户id\"},\"mobileNumber\":{\"type\":\"string\",\"description\":\"手机号码\"},\"email\":{\"type\":\"string\",\"description\":\"用户邮箱(openId,userId,mobileNumber,email)四选一必填\"},\"pageSize\":{\"type\":\"string\",\"description\":\"每页数量(默认，20，最大1000，可以等于1000)\"},\"pageNumber\":{\"type\":\"string\",\"description\":\"页数（默认1，第一页）\"}},\"required\":[\"appKey\"]}"
      },
      {
        "query_path": {
          "path": "/platformapi/chainup/open/user/withdrawRecord",
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
        "_id": 7359,
        "method": "POST",
        "catid": 1501,
        "title": "用户提现记录",
        "path": "/platformapi/chainup/open/user/withdrawRecord",
        "project_id": 146,
        "req_params": [],
        "res_body_type": "json",
        "uid": 345,
        "add_time": 1600232594,
        "up_time": 1600779938,
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "5f69f6a21205767e428f0ee0",
            "name": "Content-Type",
            "value": "application/json"
          }
        ],
        "req_body_form": [],
        "__v": 0,
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"string\"},\"msg\":{\"type\":\"string\"},\"message\":{\"type\":\"null\"},\"data\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"symbol\":{\"type\":\"string\",\"description\":\"提现币种\"},\"id\":{\"type\":\"number\",\"description\":\"提现id\"},\"uid\":{\"type\":\"number\",\"description\":\"用户id\"},\"createdAt\":{\"type\":\"number\",\"description\":\"提现创建时间\"},\"addressTo\":{\"type\":\"string\",\"description\":\"提现地址\"},\"amount\":{\"type\":\"string\",\"description\":\"提现金额\"},\"txid\":{\"type\":\"string\",\"description\":\"txid\"},\"status\":{\"type\":\"number\",\"description\":\"提现状态   0未审核 1 审核通过 2审核拒绝 3支付中，已打币 4支付失败  5已完成  6已撤销\"},\"statusDesc\":{\"type\":\"string\",\"description\":\"提现状态描述\"},\"fee\":{\"type\":\"string\",\"description\":\"手续费\"},\"mobileNumber\":{\"type\":\"string\",\"description\":\"手机号\"},\"email\":{\"type\":\"string\",\"description\":\"邮箱\"},\"warningLevel\":{\"type\":\"number\",\"description\":\"风控警告等级\"},\"warningLevelDesc\":{\"type\":\"string\",\"description\":\"警告等级提示\"},\"warningTip\":{\"type\":\"string\",\"description\":\"报警内容\"},\"warningTiplevel\":{\"type\":\"number\",\"description\":\"商户后台报警等级展示\"}}}}}}",
        "req_body_type": "json",
        "req_body_other": "{\"type\":\"object\",\"title\":\"empty object\",\"properties\":{\"appKey\":{\"type\":\"string\",\"description\":\"appkey\"},\"openId\":{\"type\":\"string\",\"description\":\"openId\"},\"userId\":{\"type\":\"number\",\"description\":\"用户id\"},\"mobileNumber\":{\"type\":\"string\",\"description\":\"手机号码\"},\"email\":{\"type\":\"string\",\"description\":\"用户邮箱(openId,userId,mobileNumber,email)四选一必填\"},\"pageSize\":{\"type\":\"string\",\"description\":\"每页数量(默认，20，最大1000，可以等于1000)\"},\"pageNumber\":{\"type\":\"string\",\"description\":\"页数（默认1，第一页）\"}},\"required\":[\"appKey\"]}"
      }
    ]
  },
  {
    "index": 9,
    "name": "用户交易查询接口",
    "desc": null,
    "add_time": 1590114181,
    "up_time": 1600658545,
    "list": [
      {
        "query_path": {
          "path": "/platformapi/chainup/open/record/orderList",
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
        "_id": 5364,
        "method": "POST",
        "catid": 1053,
        "title": "币币订单记录查询接口",
        "path": "/platformapi/chainup/open/record/orderList",
        "project_id": 146,
        "req_params": [],
        "res_body_type": "json",
        "uid": 361,
        "add_time": 1590114229,
        "up_time": 1605679707,
        "req_query": [
          {
            "required": "1",
            "_id": "5fb4ba5b1205767e428f16b3",
            "name": "uid",
            "example": "123654",
            "desc": "用户uid"
          },
          {
            "required": "0",
            "_id": "5fb4ba5b1205767e428f16b2",
            "name": "symbol",
            "example": "btcusdt",
            "desc": "查询币对"
          },
          {
            "required": "1",
            "_id": "5fb4ba5b1205767e428f16b1",
            "name": "appKey",
            "example": "xfnh_1234",
            "desc": "appKey"
          },
          {
            "required": "0",
            "_id": "5fb4ba5b1205767e428f16b0",
            "name": "startDate",
            "example": "2020-05-01 12:00:00",
            "desc": "订单查询起始时间"
          },
          {
            "required": "0",
            "_id": "5fb4ba5b1205767e428f16af",
            "name": "endDate",
            "example": "2020-05-05 12:00:00",
            "desc": "订单查询结束时间"
          },
          {
            "required": "0",
            "_id": "5fb4ba5b1205767e428f16ae",
            "name": "page",
            "example": "1",
            "desc": ""
          },
          {
            "required": "0",
            "_id": "5fb4ba5b1205767e428f16ad",
            "name": "pageSize",
            "example": "20",
            "desc": ""
          },
          {
            "required": "1",
            "_id": "5fb4ba5b1205767e428f16ac",
            "name": "sign",
            "example": "83bd1f23fd5a76e555c2bf3tee585f",
            "desc": "签名"
          }
        ],
        "req_headers": [
          {
            "required": "1",
            "_id": "5fb4ba5b1205767e428f16b4",
            "name": "Content-Type",
            "value": "application/x-www-form-urlencoded"
          }
        ],
        "req_body_form": [],
        "__v": 0,
        "markdown": "查询开始时间与结束时间不能超过7天",
        "desc": "<p>查询开始时间与结束时间不能超过7天</p>\n",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"string\"},\"msg\":{\"type\":\"string\"},\"data\":{\"type\":\"object\",\"properties\":{\"count\":{\"type\":\"number\"},\"list\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"volume\":{\"type\":\"number\",\"description\":\"下单数量\"},\"symbol\":{\"type\":\"string\",\"description\":\"币对\"},\"dealVolume\":{\"type\":\"number\",\"description\":\"已成交数量\"},\"orderId\":{\"type\":\"number\",\"description\":\"订单ID\"},\"totalPrice\":{\"type\":\"number\",\"description\":\"限价单委托金额\"},\"price\":{\"type\":\"number\",\"description\":\"限价单委托价格\"},\"ctime\":{\"type\":\"string\",\"description\":\"挂单时间\"},\"type\":{\"type\":\"string\",\"description\":\"limit=限价单；market市价单\"},\"orderSide\":{\"type\":\"string\",\"description\":\"SELL=卖出；BUY=买入\"},\"dealMoney\":{\"type\":\"number\",\"description\":\"已成交金额\"},\"status\":{\"type\":\"string\",\"description\":\"init=未初始订单；new=新订单；filled=完全成交订单；part filled=部分成交订单；canceled=已撤单；pending cancel=带撤单；expired=异常单\"}}}}}}}}",
        "req_body_type": "form"
      },
      {
        "query_path": {
          "path": "/platformapi/chainup/open/user/otcTradeRecord",
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
        "_id": 7347,
        "method": "POST",
        "catid": 1053,
        "title": "场外交易记录查询接口",
        "path": "/platformapi/chainup/open/user/otcTradeRecord",
        "project_id": 146,
        "req_params": [],
        "res_body_type": "json",
        "uid": 345,
        "add_time": 1600232504,
        "up_time": 1600779951,
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "5f69f6af1205767e428f0ee1",
            "name": "Content-Type",
            "value": "application/json"
          }
        ],
        "req_body_form": [],
        "__v": 0,
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"string\"},\"msg\":{\"type\":\"string\"},\"message\":{\"type\":\"null\"},\"data\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"totalPrice\":{\"type\":\"string\",\"description\":\"广告总价\"},\"payTime\":{\"type\":\"number\",\"description\":\"支付时间\"},\"type\":{\"type\":\"string\",\"description\":\"广告类型  \"},\"buyerId\":{\"type\":\"number\",\"description\":\"买卖类型 BUY买 SELL 卖\"},\"buyerComment\":{\"type\":\"string\",\"description\":\"给买方的评论\"},\"payCoin\":{\"type\":\"string\",\"description\":\"支付币种\"},\"sellerCommnetGrade\":{\"type\":\"number\",\"description\":\"给卖家的评论等级 0好评 1差评\"},\"coinSymbol\":{\"type\":\"string\",\"description\":\"交易币种\"},\"sellerId\":{\"type\":\"number\",\"description\":\"卖方uid\"},\"price\":{\"type\":\"string\",\"description\":\"广告单价\"},\"id\":{\"type\":\"number\",\"description\":\"广告id\"},\"isBlockTrade\":{\"type\":\"number\",\"description\":\"是否大宗交易，0：普通交易，1：大宗交易\"},\"side\":{\"type\":\"string\",\"description\":\"买卖方向 BUY 买入 SELL 卖出\"},\"sidCid\":{\"type\":\"number\",\"description\":\"卖方商户id\"},\"nickName\":{\"type\":\"string\",\"description\":\"昵称\"},\"advert\":{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"number\",\"description\":\"广告id\"},\"userId\":{\"type\":\"number\",\"description\":\"用户id\"},\"status\":{\"type\":\"number\",\"description\":\"广告状态 1发布中  2交易中 3过期 4关闭\"},\"side\":{\"type\":\"string\",\"description\":\"交易类型\"},\"coin\":{\"type\":\"string\",\"description\":\"交易货币(虚拟货币)'\"},\"country\":{\"type\":\"string\",\"description\":\"国家\"},\"paycoin\":{\"type\":\"string\",\"description\":\"支付货币（法币）\"},\"payment\":{\"type\":\"string\",\"description\":\"付款方式\"},\"bankname\":{\"type\":\"string\",\"description\":\"银行名称\"},\"priceRate\":{\"type\":\"number\",\"description\":\"交易价格与市场价的比率\"},\"priceRateType\":{\"type\":\"number\",\"description\":\"交易价格与市场价的比率类型 1为与市场价相同 2高于 3为低于\"},\"price\":{\"type\":\"number\",\"description\":\"价格\"},\"volume\":{\"type\":\"number\",\"description\":\"数量\"},\"feeRate\":{\"type\":\"number\",\"description\":\"费率\"},\"minTrade\":{\"type\":\"number\",\"description\":\"单笔最小交易额(金额)\"},\"maxTrade\":{\"type\":\"number\",\"description\":\"单笔最大交易额(金额)\"},\"beginDate\":{\"type\":\"number\",\"description\":\"开始日期\"},\"endDate\":{\"type\":\"number\",\"description\":\"结束日期\"},\"limitTime\":{\"type\":\"number\",\"description\":\"交易期限\"},\"terms\":{\"type\":\"string\",\"description\":\"交易条款\"},\"description\":{\"type\":\"string\",\"description\":\"付款信息\"},\"authType\":{\"type\":\"string\",\"description\":\"认证方式\"},\"minvolume\":{\"type\":\"number\",\"description\":\"累计最小交易量\"},\"sell\":{\"type\":\"number\",\"description\":\"当前广告实际出售数量\"},\"beginTime\":{\"type\":\"number\",\"description\":\"广告每天显示的开始时间\"},\"endTime\":{\"type\":\"number\",\"description\":\"广告每天显示的截止时间\"},\"ctime\":{\"type\":\"number\",\"description\":\"创建日期\"},\"personalFeeDiscount\":{\"type\":\"number\",\"description\":\"个人手续费折扣，1表示不打折\"},\"dealVolume\":{\"type\":\"number\"},\"muid\":{\"type\":\"number\",\"description\":\"最后更新人\"},\"mtime\":{\"type\":\"number\",\"description\":\"修改时间\"},\"autoReply\":{\"type\":\"string\",\"description\":\"自动回复消息\"},\"openType\":{\"type\":\"string\",\"description\":\"广告开放方式 DEFAULT:系统默认时间30天随时可见,CUSTOM:用户指定时间段内可见\"},\"numberCode\":{\"type\":\"string\",\"description\":\"国家数字编码\"},\"companyId\":{\"type\":\"number\",\"description\":\"商户id，0表示SAAS总平台\"},\"isBlockTrade\":{\"type\":\"number\",\"description\":\"是否大宗交易\"}},\"description\":\"广告\"},\"adsOwner\":{\"type\":\"number\",\"description\":\"广告拥有者id\"},\"adsId\":{\"type\":\"number\",\"description\":\"广告id\"},\"sellerComment\":{\"type\":\"string\",\"description\":\"给卖方的评论\"},\"buyerCommentGrade\":{\"type\":\"number\",\"description\":\"给买家的评论等级 0好评 1差评  默认好评\"},\"volume\":{\"type\":\"string\",\"description\":\"广告数量\"},\"bidCid\":{\"type\":\"number\",\"description\":\"买方商户id\"},\"sequence\":{\"type\":\"string\",\"description\":\"场外订单号码\"},\"realName\":{\"type\":\"string\",\"description\":\"真实姓名\"},\"feeAmount\":{\"type\":\"string\",\"description\":\"手续费额度\"},\"paySymbol\":{\"type\":\"string\",\"description\":\"支付币种，和payCoin一样，\"},\"createTime\":{\"type\":\"number\",\"description\":\"创建时间\"},\"status_text\":{\"type\":\"string\",\"description\":\"广告交易状态描述  status_unfinished  未完成   status_finished  已完成  otc.status1.buy.pending  待付款  otc.status1.sell.pending  待买家付款 otc.status2.buy.paid  待卖家放币  otc.status2.sell.paid  待放币\"},\"status\":{\"type\":\"number\",\"description\":\"广告交易状态  订单状态 待支付1 已支付2 交易成功3 取消4 申诉5  打币中6  异常订单7\"}}}}}}",
        "req_body_type": "json",
        "req_body_other": "{\"type\":\"object\",\"title\":\"empty object\",\"properties\":{\"appKey\":{\"type\":\"string\",\"description\":\"appkey\"},\"openId\":{\"type\":\"string\",\"description\":\"openId\"},\"userId\":{\"type\":\"number\",\"description\":\"用户id\"},\"mobileNumber\":{\"type\":\"string\",\"description\":\"手机号码\"},\"email\":{\"type\":\"string\",\"description\":\"用户邮箱(openId,userId,mobileNumber,email)四选一必填\"},\"pageSize\":{\"type\":\"string\",\"description\":\"每页数量(默认，20，最大1000，可以等于1000)\"},\"pageNumber\":{\"type\":\"string\",\"description\":\"页数（默认1，第一页）\"}},\"required\":[\"appKey\"]}"
      }
    ]
  }
]