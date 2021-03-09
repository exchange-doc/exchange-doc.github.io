window.openapi =[
  {
    "index": 0,
    "name": "新手指引",
    "desc": null,
    "add_time": 1595404326,
    "up_time": 1595404326,
    "list": [
      {
        "query_path": {
          "path": "/demo/java",
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
        "_id": 6123,
        "method": "GET",
        "catid": 1261,
        "title": "代码示例",
        "path": "/demo/java",
        "project_id": 73,
        "req_params": [],
        "res_body_type": "json",
        "uid": 303,
        "add_time": 1595404384,
        "up_time": 1595492143,
        "req_query": [],
        "req_headers": [],
        "req_body_form": [],
        "__v": 0,
        "markdown": "```\n################################### Java版本-生成签名-start ################################\n@Test\nvoid test01() {\n    String secret = \"***密钥***\";\n\n    HashMap<String,String> dataMap = new HashMap<String,String>();\n    //接口所需参数\n    dataMap.put(\"api_key\", \"api_key\");\n    dataMap.put(\"type\", \"1\");\n    dataMap.put(\"side\", \"BUY\");\n    dataMap.put(\"volume\", \"10\");\n    dataMap.put(\"price\", \"0.0001\");\n    dataMap.put(\"symbol\", \"btcusdt\");\n    dataMap.put(\"time\", \"1593601408000\");\n    String sign = \"\";\n    try {\n        sign = this.getSign(dataMap, secret);\n    } catch (UnsupportedEncodingException e1) {\n        e1.printStackTrace();\n    }\n    System.out.println(\"签名sign：\"+sign);\n}\n\n//字典顺序排序map中的key，拼接字符串，securt拼接到最后，MD5 = sign\nprivate String getSign(HashMap<String,String> resultMap, String secret) throws UnsupportedEncodingException {\n    Set<String> keys = resultMap.keySet();\n    String[] paramArr = keys.toArray(new String[keys.size()]);\n    Arrays.sort(paramArr);\n    StringBuilder sb = new StringBuilder();\n    for(String key : paramArr) {\n        String value = resultMap.get(key);\n        sb.append(key).append(value);\n    }\n    String lastStr = sb.toString() + secret;\n    String digest = DigestUtils.md5Hex(lastStr.getBytes(\"UTF-8\"));\n\n    return digest;\n}\n################################### Java版本-生成签名-end ##################################\n\n\n\n\n######################################### curl版本 #########################################\ncurl -X POST \\\n  https://openapi.bitwind.com/open/api/create_order \\\n  -H 'Postman-Token: 957fef75-23a3-b30b-06b1-189676efc5ca' \\\n  -d 'api_key=api_key&price=5&side=BUY&sign=sign&symbol=btcusdt&time=1566445997732&type=1&volume=1'\n\n\n\n\n######################################### java版本 #########################################\nOkHttpClient client = new OkHttpClient();\n\nMediaType mediaType = MediaType.parse(\"application/x-www-form-urlencoded\");\nRequestBody body = RequestBody.create(mediaType, \"api_key=api_key&price=5&side=BUY&sign=sign&symbol=btcusdt&time=1566445997732&type=1&volume=1\");\nRequest request = new Request.Builder()\n  .url(\"https://openapi.bitwind.com/open/api/create_order\")\n  .post(body)\n  .addHeader(\"Content-Type\", \"application/x-www-form-urlencoded\")\n  .build();\n\nResponse response = client.newCall(request).execute();\n\n\n\n\n######################################### php版本 #########################################\n$curl = curl_init();\n\ncurl_setopt_array($curl, array(\n  CURLOPT_URL => \"https://openapi.bitwind.com/open/api/create_order\",\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_ENCODING => \"\",\n  CURLOPT_MAXREDIRS => 10,\n  CURLOPT_TIMEOUT => 30,\n  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n  CURLOPT_CUSTOMREQUEST => \"POST\",\n  CURLOPT_POSTFIELDS => \"api_key=api_key&price=5&side=BUY&sign=sign&symbol=btcusdt&time=1566445997732&type=1&volume=1\",\n  CURLOPT_HTTPHEADER => array(\n    \"Content-Type: application/x-www-form-urlencoded\"\n  ),\n));\n\n$response = curl_exec($curl);\n$err = curl_error($curl);\n\ncurl_close($curl);\n\nif ($err) {\n  echo \"cURL Error #:\" . $err;\n} else {\n  echo $response;\n}\n\n\n\n\n######################################### python版本 #########################################\nimport http.client\n\nconn = http.client.HTTPConnection(\"openapi,bitwind,com\")\n\npayload = \"api_key=api_key&price=5&side=BUY&sign=sign&symbol=btcusdt&time=1566445997732&type=1&volume=1\"\n\nheaders = {\n    'Content-Type': \"application/x-www-form-urlencoded\"\n    }\n\nconn.request(\"POST\", \"open,api,create_order\", payload, headers)\n\nres = conn.getresponse()\ndata = res.read()\n\nprint(data.decode(\"utf-8\"))\n\n\n\n\n######################################### go版本 #########################################\npackage main\n\nimport (\n  \"fmt\"\n  \"strings\"\n  \"net/http\"\n  \"io/ioutil\"\n)\n\nfunc main() {\n\n  url := \"https://openapi.bitwind.com/open/api/create_order\"\n\n  payload := strings.NewReader(\"api_key=api_key&price=5&side=BUY&sign=sign&symbol=btcusdt&time=1566445997732&type=1&volume=1\")\n\n  req, _ := http.NewRequest(\"POST\", url, payload)\n\n  req.Header.Add(\"Content-Type\", \"application/x-www-form-urlencoded\")\n\n  res, _ := http.DefaultClient.Do(req)\n\n  defer res.Body.Close()\n  body, _ := ioutil.ReadAll(res.Body)\n\n  fmt.Println(res)\n  fmt.Println(string(body))\n\n}\n```",
        "desc": "<pre><code>################################### Java版本-生成签名-start ################################\n@Test\nvoid test01() {\n&nbsp;&nbsp;&nbsp; String secret = \"***密钥***\";\n\n&nbsp;&nbsp;&nbsp; HashMap&lt;String,String&gt; dataMap = new HashMap&lt;String,String&gt;();\n&nbsp;&nbsp;&nbsp; //接口所需参数\n&nbsp;&nbsp;&nbsp; dataMap.put(\"api_key\", \"api_key\");\n&nbsp;&nbsp;&nbsp; dataMap.put(\"type\", \"1\");\n&nbsp;&nbsp;&nbsp; dataMap.put(\"side\", \"BUY\");\n&nbsp;&nbsp;&nbsp; dataMap.put(\"volume\", \"10\");\n&nbsp;&nbsp;&nbsp; dataMap.put(\"price\", \"0.0001\");\n&nbsp;&nbsp;&nbsp; dataMap.put(\"symbol\", \"btcusdt\");\n&nbsp;&nbsp;&nbsp; dataMap.put(\"time\", \"1593601408000\");\n&nbsp;&nbsp;&nbsp; String sign = \"\";\n&nbsp;&nbsp;&nbsp; try {\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; sign = this.getSign(dataMap, secret);\n&nbsp;&nbsp;&nbsp; } catch (UnsupportedEncodingException e1) {\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; e1.printStackTrace();\n&nbsp;&nbsp;&nbsp; }\n&nbsp;&nbsp;&nbsp; System.out.println(\"签名sign：\"+sign);\n}\n\n//字典顺序排序map中的key，拼接字符串，securt拼接到最后，MD5 = sign\nprivate String getSign(HashMap&lt;String,String&gt; resultMap, String secret) throws UnsupportedEncodingException {\n&nbsp;&nbsp;&nbsp; Set&lt;String&gt; keys = resultMap.keySet();\n&nbsp;&nbsp;&nbsp; String[] paramArr = keys.toArray(new String[keys.size()]);\n&nbsp;&nbsp;&nbsp; Arrays.sort(paramArr);\n&nbsp;&nbsp;&nbsp; StringBuilder sb = new StringBuilder();\n&nbsp;&nbsp;&nbsp; for(String key : paramArr) {\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; String value = resultMap.get(key);\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; sb.append(key).append(value);\n&nbsp;&nbsp;&nbsp; }\n&nbsp;&nbsp;&nbsp; String lastStr = sb.toString() + secret;\n&nbsp;&nbsp;&nbsp; String digest = DigestUtils.md5Hex(lastStr.getBytes(\"UTF-8\"));\n\n&nbsp;&nbsp;&nbsp; return digest;\n}\n################################### Java版本-生成签名-end ##################################\n\n\n\n\n######################################### curl版本 #########################################\ncurl -X POST \\\n&nbsp; https://openapi.bitwind.com/open/api/create_order \\\n&nbsp; -H 'Postman-Token: 957fef75-23a3-b30b-06b1-189676efc5ca' \\\n&nbsp; -d 'api_key=api_key&amp;price=5&amp;side=BUY&amp;sign=sign&amp;symbol=btcusdt&amp;time=1566445997732&amp;type=1&amp;volume=1'\n\n\n\n\n######################################### java版本 #########################################\nOkHttpClient client = new OkHttpClient();\n\nMediaType mediaType = MediaType.parse(\"application/x-www-form-urlencoded\");\nRequestBody body = RequestBody.create(mediaType, \"api_key=api_key&amp;price=5&amp;side=BUY&amp;sign=sign&amp;symbol=btcusdt&amp;time=1566445997732&amp;type=1&amp;volume=1\");\nRequest request = new Request.Builder()\n&nbsp; .url(\"https://openapi.bitwind.com/open/api/create_order\")\n&nbsp; .post(body)\n&nbsp; .addHeader(\"Content-Type\", \"application/x-www-form-urlencoded\")\n&nbsp; .build();\n\nResponse response = client.newCall(request).execute();\n\n\n\n\n######################################### php版本 #########################################\n$curl = curl_init();\n\ncurl_setopt_array($curl, array(\n&nbsp; CURLOPT_URL =&gt; \"https://openapi.bitwind.com/open/api/create_order\",\n&nbsp; CURLOPT_RETURNTRANSFER =&gt; true,\n&nbsp; CURLOPT_ENCODING =&gt; \"\",\n&nbsp; CURLOPT_MAXREDIRS =&gt; 10,\n&nbsp; CURLOPT_TIMEOUT =&gt; 30,\n&nbsp; CURLOPT_HTTP_VERSION =&gt; CURL_HTTP_VERSION_1_1,\n&nbsp; CURLOPT_CUSTOMREQUEST =&gt; \"POST\",\n&nbsp; CURLOPT_POSTFIELDS =&gt; \"api_key=api_key&amp;price=5&amp;side=BUY&amp;sign=sign&amp;symbol=btcusdt&amp;time=1566445997732&amp;type=1&amp;volume=1\",\n&nbsp; CURLOPT_HTTPHEADER =&gt; array(\n&nbsp;&nbsp;&nbsp; \"Content-Type: application/x-www-form-urlencoded\"\n&nbsp; ),\n));\n\n$response = curl_exec($curl);\n$err = curl_error($curl);\n\ncurl_close($curl);\n\nif ($err) {\n&nbsp; echo \"cURL Error #:\" . $err;\n} else {\n&nbsp; echo $response;\n}\n\n\n\n\n######################################### python版本 #########################################\nimport http.client\n\nconn = http.client.HTTPConnection(\"openapi,bitwind,com\")\n\npayload = \"api_key=api_key&amp;price=5&amp;side=BUY&amp;sign=sign&amp;symbol=btcusdt&amp;time=1566445997732&amp;type=1&amp;volume=1\"\n\nheaders = {\n&nbsp;&nbsp;&nbsp; 'Content-Type': \"application/x-www-form-urlencoded\"\n&nbsp;&nbsp;&nbsp; }\n\nconn.request(\"POST\", \"open,api,create_order\", payload, headers)\n\nres = conn.getresponse()\ndata = res.read()\n\nprint(data.decode(\"utf-8\"))\n\n\n\n\n######################################### go版本 #########################################\npackage main\n\nimport (\n&nbsp; \"fmt\"\n&nbsp; \"strings\"\n&nbsp; \"net/http\"\n&nbsp; \"io/ioutil\"\n)\n\nfunc main() {\n\n&nbsp; url := \"https://openapi.bitwind.com/open/api/create_order\"\n\n&nbsp; payload := strings.NewReader(\"api_key=api_key&amp;price=5&amp;side=BUY&amp;sign=sign&amp;symbol=btcusdt&amp;time=1566445997732&amp;type=1&amp;volume=1\")\n\n&nbsp; req, _ := http.NewRequest(\"POST\", url, payload)\n\n&nbsp; req.Header.Add(\"Content-Type\", \"application/x-www-form-urlencoded\")\n\n&nbsp; res, _ := http.DefaultClient.Do(req)\n\n&nbsp; defer res.Body.Close()\n&nbsp; body, _ := ioutil.ReadAll(res.Body)\n\n&nbsp; fmt.Println(res)\n&nbsp; fmt.Println(string(body))\n\n}\n</code></pre>\n",
        "res_body": ""
      }
    ]
  },
  {
    "index": 1,
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
        "res_body_is_json_schema": true,
        "api_opened": true,
        "index": 0,
        "tag": [],
        "_id": 1009,
        "title": "杠杆批量下单接口",
        "path": "/open/api/margin/mass_replace",
        "method": "POST",
        "desc": "<p>mass_place:下单参数。side：方向（买卖方向BUY、SELL）<br>\n-------------------------type：类型（1:限价委托、2:市价委托）<br>\n-------------------------volume：购买数量（多义，复用字段） type=1:表示买卖数量type=2:买则表示总价格，卖表示总数量<br>\n-------------------------price：委托单价，type=2不需要此参数<br>\n-------------------------fee_is_user_exchange_coin：(冗余字段)当交易所有平台币时，此参数表示是否使用用平台币</p>\n",
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "5f194366b921e635efc96002",
            "name": "Content-Type",
            "value": "application/x-www-form-urlencoded",
            "desc": ""
          }
        ],
        "req_body_type": "form",
        "req_body_form": [
          {
            "required": "0",
            "_id": "5f194366b921e635efc96008",
            "name": "mass_place",
            "type": "text",
            "example": "[{\"side\":\"SELL\",\"type\":\"1\",\"volume\":\"1\",\"price\":\"10\",\"fee_is_user_exchange_coin\":\"0\"}]",
            "desc": "mass_place:下单参数"
          },
          {
            "required": "1",
            "_id": "5f194366b921e635efc96007",
            "name": "symbol",
            "type": "text",
            "example": "btcusdt",
            "desc": "币种 ，例 btcusdt"
          },
          {
            "required": "1",
            "_id": "5f194366b921e635efc96006",
            "name": "time",
            "type": "text",
            "example": "1567415490190",
            "desc": "时间戳"
          },
          {
            "required": "1",
            "_id": "5f194366b921e635efc96005",
            "name": "sign",
            "type": "text",
            "example": "sign",
            "desc": "签名"
          },
          {
            "required": "1",
            "_id": "5f194366b921e635efc96004",
            "name": "api_key",
            "type": "text",
            "example": "api_key",
            "desc": "api_key"
          },
          {
            "required": "0",
            "_id": "5f194366b921e635efc96003",
            "name": "mass_cancel",
            "type": "text",
            "example": "[78321,78322,78323]",
            "desc": "撤单参数，订单id，多个订单id使用英文逗号分隔"
          }
        ],
        "project_id": 73,
        "catid": 228,
        "req_params": [],
        "res_body_type": "json",
        "uid": 204,
        "add_time": 1567158008,
        "up_time": 1595491174,
        "__v": 0,
        "markdown": "mass_place:下单参数。side：方向（买卖方向BUY、SELL）\n\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-type：类型（1:限价委托、2:市价委托）\n\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-volume：购买数量（多义，复用字段） type=1:表示买卖数量type=2:买则表示总价格，卖表示总数量\n\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-price：委托单价，type=2不需要此参数\n\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-fee\\_is\\_user\\_exchange\\_coin：\\(冗余字段\\)当交易所有平台币时，此参数表示是否使用用平台币",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"string\",\"mock\":{\"mock\":\"0\"}},\"msg\":{\"type\":\"string\",\"mock\":{\"mock\":\"success\"}},\"data\":{\"type\":\"object\",\"properties\":{\"mass_cancel\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"msg\":{\"type\":\"string\"},\"code\":{\"type\":\"string\"},\"order_id\":{\"type\":\"number\",\"description\":\"撤销订单id\"}},\"required\":[\"msg\",\"code\",\"order_id\"]},\"description\":\"批量撤单信息\"},\"mass_place\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"msg\":{\"type\":\"string\"},\"code\":{\"type\":\"string\"},\"order_id\":{\"type\":\"number\",\"description\":\"订单id\"}},\"required\":[\"msg\",\"code\",\"order_id\"]},\"description\":\"批量下单信息\"}}}},\"required\":[\"code\",\"msg\"]}"
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
        "up_time": 1595491497,
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "5f1944a9b921e635efc96010",
            "name": "Content-Type",
            "value": "application/x-www-form-urlencoded"
          }
        ],
        "req_body_form": [
          {
            "required": "1",
            "_id": "5f1944a9b921e635efc96018",
            "name": "side",
            "type": "text",
            "example": "SELL",
            "desc": "买卖方向BUY、SELL"
          },
          {
            "required": "1",
            "_id": "5f1944a9b921e635efc96017",
            "name": "type",
            "type": "text",
            "example": "1",
            "desc": "挂单类型，1:限价委托、2:市价委托"
          },
          {
            "required": "1",
            "_id": "5f1944a9b921e635efc96016",
            "name": "volume",
            "type": "text",
            "example": "0.001",
            "desc": "购买数量（多义，复用字段） type=1:表示买卖数量  type=2:买则表示总价格，卖表示总数量"
          },
          {
            "required": "1",
            "_id": "5f1944a9b921e635efc96015",
            "name": "symbol",
            "type": "text",
            "example": "bchusdt",
            "desc": "市场标记，bchusdt"
          },
          {
            "required": "1",
            "_id": "5f1944a9b921e635efc96014",
            "name": "time",
            "type": "text",
            "example": "1567415490190",
            "desc": "时间戳"
          },
          {
            "required": "1",
            "_id": "5f1944a9b921e635efc96013",
            "name": "api_key",
            "type": "text",
            "example": "1174082eaf4002419a0628d77439090c",
            "desc": "api_key"
          },
          {
            "required": "1",
            "_id": "5f1944a9b921e635efc96012",
            "name": "sign",
            "type": "text",
            "example": "74da381312ba855f5b03b867ef6d44b4",
            "desc": "签名"
          },
          {
            "required": "1",
            "_id": "5f1944a9b921e635efc96011",
            "name": "price",
            "type": "text",
            "example": "1",
            "desc": "委托单价，type=2不需要此参数"
          }
        ],
        "__v": 0,
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"string\",\"mock\":{\"mock\":\"0\"}},\"msg\":{\"type\":\"string\",\"mock\":{\"mock\":\"成功\"}},\"data\":{\"type\":\"object\",\"properties\":{\"order_id\":{\"type\":\"number\",\"description\":\"订单id\"}}}}}",
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
            "_id": "5df37eece465640ff231dfd4",
            "name": "Content-Type",
            "value": "application/x-www-form-urlencoded"
          }
        ],
        "req_body_type": "form",
        "req_body_form": [
          {
            "required": "1",
            "_id": "5df37eece465640ff231dfd9",
            "name": "order_id",
            "type": "text",
            "example": "10001",
            "desc": "订单id"
          },
          {
            "required": "1",
            "_id": "5df37eece465640ff231dfd8",
            "name": "symbol",
            "type": "text",
            "example": "bchusdt",
            "desc": "市场标记，bchusdt"
          },
          {
            "required": "1",
            "_id": "5df37eece465640ff231dfd7",
            "name": "api_key",
            "type": "text",
            "example": "1174082eaf4002419a0628d77439090c",
            "desc": "api_key"
          },
          {
            "required": "1",
            "_id": "5df37eece465640ff231dfd6",
            "name": "time",
            "type": "text",
            "example": "1567415490190",
            "desc": "时间戳"
          },
          {
            "required": "1",
            "_id": "5df37eece465640ff231dfd5",
            "name": "sign",
            "type": "text",
            "example": "sign",
            "desc": "签名"
          }
        ],
        "project_id": 73,
        "catid": 228,
        "req_params": [],
        "res_body_type": "json",
        "uid": 204,
        "add_time": 1567158008,
        "up_time": 1576238828,
        "__v": 0,
        "markdown": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"string\",\"mock\":{\"mock\":\"0\"}},\"msg\":{\"type\":\"string\",\"mock\":{\"mock\":\"成功\"}},\"data\":{\"type\":\"string\",\"mock\":{\"mock\":\"\\\"\\\"\"}}}}"
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
        "res_body_is_json_schema": true,
        "api_opened": true,
        "index": 0,
        "tag": [],
        "_id": 1015,
        "title": "现货批量下单接口V2",
        "path": "/open/api/mass_replaceV2",
        "method": "POST",
        "desc": "<p>mass_place 是需要发送到系统的一批订单，每次最多1000条<br>\nmass_cancel 是需要撤回的一批订单，每次最多1000条</p>\n<p>mass_place:下单参数。side：方向（买卖方向BUY、SELL）<br>\n-------------------------type：类型（1:限价委托、2:市价委托）<br>\n-------------------------volume：购买数量（多义，复用字段） type=1:表示买卖数量type=2:买则表示总价格，卖表示总数量<br>\n-------------------------price：委托单价，type=2不需要此参数<br>\n-------------------------fee_is_user_exchange_coin：(冗余字段)当交易所有平台币时，此参数表示是否使用用平台币支付手续费，0否，1是</p>\n",
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "5f19437db921e635efc96009",
            "name": "Content-Type",
            "value": "application/x-www-form-urlencoded",
            "desc": ""
          }
        ],
        "req_body_type": "form",
        "req_body_form": [
          {
            "required": "0",
            "_id": "5f19437db921e635efc9600f",
            "name": "mass_place",
            "type": "text",
            "example": "[{\"side\":\"SELL\",\"type\":\"1\",\"volume\":\"1\",\"price\":\"10\",\"fee_is_user_exchange_coin\":\"0\"}]",
            "desc": "mass_place:下单参数"
          },
          {
            "required": "1",
            "_id": "5f19437db921e635efc9600e",
            "name": "symbol",
            "type": "text",
            "example": "btcusdt",
            "desc": "币种 ，例 btcusdt"
          },
          {
            "required": "1",
            "_id": "5f19437db921e635efc9600d",
            "name": "time",
            "type": "text",
            "example": "1567415490190",
            "desc": "时间戳"
          },
          {
            "required": "1",
            "_id": "5f19437db921e635efc9600c",
            "name": "sign",
            "type": "text",
            "example": "sign",
            "desc": "签名"
          },
          {
            "required": "1",
            "_id": "5f19437db921e635efc9600b",
            "name": "api_key",
            "type": "text",
            "example": "api_key",
            "desc": "api_key"
          },
          {
            "required": "0",
            "_id": "5f19437db921e635efc9600a",
            "name": "mass_cancel",
            "type": "text",
            "example": "[78321,78322,78323]",
            "desc": "撤单参数，订单id，多个订单id使用英文逗号分隔"
          }
        ],
        "project_id": 73,
        "catid": 228,
        "req_params": [],
        "res_body_type": "json",
        "uid": 204,
        "add_time": 1567158009,
        "up_time": 1595491197,
        "__v": 0,
        "markdown": "mass_place 是需要发送到系统的一批订单，每次最多1000条\nmass_cancel 是需要撤回的一批订单，每次最多1000条\n\nmass_place:下单参数。side：方向（买卖方向BUY、SELL）\n\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-type：类型（1:限价委托、2:市价委托）\n\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-volume：购买数量（多义，复用字段） type=1:表示买卖数量type=2:买则表示总价格，卖表示总数量\n\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-price：委托单价，type=2不需要此参数\n\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-fee\\_is\\_user\\_exchange\\_coin：\\(冗余字段\\)当交易所有平台币时，此参数表示是否使用用平台币支付手续费，0否，1是",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"string\",\"mock\":{\"mock\":\"0\"}},\"msg\":{\"type\":\"string\",\"mock\":{\"mock\":\"success\"}},\"data\":{\"type\":\"object\",\"properties\":{\"mass_cancel\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"msg\":{\"type\":\"string\"},\"code\":{\"type\":\"string\"},\"order_id\":{\"type\":\"number\",\"description\":\"撤销订单id\"}},\"required\":[\"msg\",\"code\",\"order_id\"]},\"description\":\"批量撤单信息\"},\"mass_place\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"msg\":{\"type\":\"string\"},\"code\":{\"type\":\"string\"},\"order_id\":{\"type\":\"number\",\"description\":\"订单id\"}},\"required\":[\"msg\",\"code\",\"order_id\"]},\"description\":\"批量下单信息\"}}}},\"required\":[\"code\",\"msg\"]}"
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
        "res_body_is_json_schema": true,
        "api_opened": false,
        "index": 0,
        "tag": [],
        "_id": 1003,
        "title": "现货批量下单接口（已废弃）",
        "path": "/open/api/mass_replace",
        "method": "POST",
        "desc": "<h1><strong>已废弃</strong></h1>\n<p>mass_place 是需要发送到系统的一批订单，每次最多100条<br>\nmass_cancel 是需要撤回的一批订单，每次最多100条</p>\n",
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "5e42a945b1bfaf14a321cbfb",
            "name": "Content-Type",
            "value": "application/x-www-form-urlencoded",
            "desc": ""
          }
        ],
        "req_body_type": "form",
        "req_body_form": [
          {
            "required": "0",
            "_id": "5e42a945b1bfaf14a321cc01",
            "name": "mass_place",
            "type": "text",
            "example": "[{\"side\":\"SELL\",\"type\":\"1\",\"volume\":\"1\",\"price\":\"10\",\"fee_is_user_exchange_coin\":\"0\"}]",
            "desc": "mass_place:下单参数。side：方向（买卖方向BUY、SELL）\n--------------------------------type：类型（1:限价委托、2:市价委托）\n--------------------------------volume：购买数量（多义，复用字段） type=1:表示买卖数量type=2:买则表示总价格，卖表示总数量\n--------------------------------price：委托单价，type=2不需要此参数\n--------------------------------fee_is_user_exchange_coin：(冗余字段)当交易所有平台币时，此参数表示是否使用用平台币支付手续费，0否，1是"
          },
          {
            "required": "1",
            "_id": "5e42a945b1bfaf14a321cc00",
            "name": "symbol",
            "type": "text",
            "example": "btcusdt",
            "desc": "币种 ，例 btcusdt"
          },
          {
            "required": "1",
            "_id": "5e42a945b1bfaf14a321cbff",
            "name": "time",
            "type": "text",
            "example": "1567415490190",
            "desc": "时间戳"
          },
          {
            "required": "1",
            "_id": "5e42a945b1bfaf14a321cbfe",
            "name": "sign",
            "type": "text",
            "example": "sign",
            "desc": "签名"
          },
          {
            "required": "1",
            "_id": "5e42a945b1bfaf14a321cbfd",
            "name": "api_key",
            "type": "text",
            "example": "api_key",
            "desc": "api_key"
          },
          {
            "required": "0",
            "_id": "5e42a945b1bfaf14a321cbfc",
            "name": "mass_cancel",
            "type": "text",
            "example": "[78321,78322,78323]",
            "desc": "撤单参数，订单id，多个订单id使用英文逗号分隔"
          }
        ],
        "project_id": 73,
        "catid": 228,
        "req_params": [],
        "res_body_type": "json",
        "uid": 204,
        "add_time": 1567158008,
        "up_time": 1581427013,
        "__v": 0,
        "markdown": "# **已废弃**\n\nmass_place 是需要发送到系统的一批订单，每次最多100条\nmass_cancel 是需要撤回的一批订单，每次最多100条",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"string\",\"mock\":{\"mock\":\"0\"}},\"msg\":{\"type\":\"string\",\"mock\":{\"mock\":\"Successfully\"}},\"data\":{\"type\":\"object\",\"properties\":{\"mass_cancel\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"msg\":{\"type\":\"string\",\"mock\":{\"mock\":\"Successfully\"}},\"code\":{\"type\":\"string\",\"mock\":{\"mock\":\"0\"}},\"order_id\":{\"type\":\"number\",\"description\":\"撤销订单id\"}},\"required\":[\"msg\",\"code\",\"order_id\"]},\"description\":\"批量撤单信息\"},\"mass_place\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"msg\":{\"type\":\"string\",\"mock\":{\"mock\":\"Successfully\"}},\"code\":{\"type\":\"string\",\"mock\":{\"mock\":\"0\"}},\"order_id\":{\"type\":\"number\",\"description\":\"订单id\"}},\"required\":[\"msg\",\"code\",\"order_id\"]},\"description\":\"批量下单信息\"}}}}}",
        "req_body_other": ""
      }
    ]
  },
  {
    "index": 2,
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
          "path": "/open/pub/summary",
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
        "_id": 2931,
        "method": "GET",
        "catid": 628,
        "title": "交易摘要（Summary）",
        "path": "/open/pub/summary",
        "project_id": 73,
        "req_params": [],
        "res_body_type": "json",
        "uid": 361,
        "add_time": 1581403931,
        "up_time": 1595583165,
        "req_query": [],
        "req_headers": [],
        "req_body_form": [],
        "__v": 0,
        "markdown": "```\n## **注意！！！  接口中的24h均指今日0点到现在时间。**\n{\n\t\"code\": \"200\",\n\t\"msg\": \"success\",\n\t\"data\": {\n\t\t\"BAT_USDT\": {\n\t\t\t\"id\": \"52\",\n\t\t\t\"last\": \"0.2842\",\n\t\t\t\"lowestAsk\": \"0.2855\",\n\t\t\t\"highestBid\": \"0.2816\",\n\t\t\t\"percentChange\": \"7.81\",\n\t\t\t\"baseVolume\": \"373477.94\",\n\t\t\t\"quoteVolume\": \"106142.43\",\n\t\t\t\"isFrozen\": \"0\",\n\t\t\t\"high24hr\": \"0.2883\",\n\t\t\t\"low24hr\": \"0.2525\"\n\t\t}\n\t},\n\t\"coins\": {\n\t\t\"ENJ\": {\n\t\t\t\"name\": \" EnjinCoin\",\n\t\t\t\"withdraw\": \"ON\",\n\t\t\t\"deposit\": \"ON\"\n\t\t}\n\t}\n}\n```",
        "desc": "<pre><code>## **注意！！！&nbsp; 接口中的24h均指今日0点到现在时间。**\n{\n\t\"code\": \"200\",\n\t\"msg\": \"success\",\n\t\"data\": {\n\t\t\"BAT_USDT\": {\n\t\t\t\"id\": \"52\",\n\t\t\t\"last\": \"0.2842\",\n\t\t\t\"lowestAsk\": \"0.2855\",\n\t\t\t\"highestBid\": \"0.2816\",\n\t\t\t\"percentChange\": \"7.81\",\n\t\t\t\"baseVolume\": \"373477.94\",\n\t\t\t\"quoteVolume\": \"106142.43\",\n\t\t\t\"isFrozen\": \"0\",\n\t\t\t\"high24hr\": \"0.2883\",\n\t\t\t\"low24hr\": \"0.2525\"\n\t\t}\n\t},\n\t\"coins\": {\n\t\t\"ENJ\": {\n\t\t\t\"name\": \" EnjinCoin\",\n\t\t\t\"withdraw\": \"ON\",\n\t\t\t\"deposit\": \"ON\"\n\t\t}\n\t}\n}\n</code></pre>\n",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"string\"},\"msg\":{\"type\":\"string\"},\"data\":{\"type\":\"object\",\"properties\":{\"arr\":{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"string\"},\"last\":{\"type\":\"string\",\"description\":\"最新成交价格\"},\"lowestAsk\":{\"type\":\"string\",\"description\":\"24h内买方最低价格\"},\"highestBid\":{\"type\":\"string\",\"description\":\"24h内卖方最高价格\"},\"percentChange\":{\"type\":\"string\",\"description\":\"24h涨跌幅\"},\"baseVolume\":{\"type\":\"string\",\"description\":\"24h交易数量\"},\"quoteVolume\":{\"type\":\"string\",\"description\":\"24h交易金额\"},\"isFrozen\":{\"type\":\"string\",\"description\":\"是否被关闭\"},\"high24hr\":{\"type\":\"string\",\"description\":\"24h成交最高价\"},\"low24hr\":{\"type\":\"string\",\"description\":\"24h成交最低价\"}},\"description\":\"币对信息\"}},\"required\":[]},\"coins\":{\"type\":\"object\",\"properties\":{\"arr\":{\"type\":\"object\",\"properties\":{\"name\":{\"type\":\"string\",\"description\":\"币种简称\"},\"withdraw\":{\"type\":\"string\",\"description\":\"是否开启提现\"},\"deposit\":{\"type\":\"string\",\"description\":\"是否开启充值\"}}}},\"required\":[]}}}"
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
  },
  {
    "index": 3,
    "name": "K线行情",
    "desc": null,
    "add_time": 1575879748,
    "up_time": 1575879748,
    "list": [
      {
        "query_path": {
          "path": "/kline-api/ws",
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
        "_id": 5457,
        "method": "GET",
        "catid": 700,
        "title": "WS行情",
        "path": "wss://wspool.hiotc.pro/kline-api/ws",
        "project_id": 73,
        "req_params": [],
        "res_body_type": "json",
        "uid": 247,
        "add_time": 1591102093,
        "up_time": 1591102200,
        "req_query": [],
        "req_headers": [],
        "req_body_form": [],
        "__v": 0,
        "markdown": "订阅-K线行情\n\n* 请求:\n\n```\n{\"event\":\"sub\",\"params\":{\"channel\":\"market_$base$quote_kline_[1min/5min/15min/30min/60min/1day/1week/1month]\",\"cb_id\":\"自定义\"}}\n```\n\n* 返回订阅状态1次:\n\n```\n{\"event_rep\":\"subed\",\"channel\":\"market_$base$quote_kline_[1min/5min/15min/30min/60min/1day/1week/1month]\",\"cb_id\":\"原路返回\",\"ts\":1506584998239,\"status\":\"ok\"}\n```\n\n* 持续返回订阅消息:\n\n```\n{\n    \"channel\":\"market_$base$quote_kline_[1min/5min/15min/30min/60min/1day/1week/1month]\",//订阅的交易对行情$base$quote表示btckrw等\n    \"ts\":1506584998239,//请求时间\n    \"tick\":{\n        \"id\":1506602880,//时间刻度起始值\n        \"amount\":123.1221,//交易额\n        \"vol\":1212.12211,//交易量\n        \"open\":2233.22,//开盘价\n        \"close\":1221.11,//收盘价\n        \"high\":22322.22,//最高价\n        \"low\":2321.22//最低价\n    }\n}\n```\n\n### 订阅-前24小时行情\n\n* 请求:\n\n```\n{\"event\":\"sub\",\"params\":{\"channel\":\"market_$base$quote_ticker\",\"cb_id\":\"自定义\"}}\n```\n\n* 返回订阅状态1次:\n\n```\n{\"event_rep\":\"subed\",\"channel\":\"market_$base$quote_ticker\",\"cb_id\":\"原路返回\",\"ts\":1506584998239,\"status\":\"ok\",\"lower_frame\":\"0\"} // lower_frame: 0 币对没下架、 1 币对下架\n```\n\n* 持续返回订阅消息:\n\n```\n{\n    \"channel\":\"market_$base$quote_ticker\",//订阅的交易对行情$base$quote表示btckrw等\n    \"ts\":1506584998239,//请求时间\n    \"tick\":{\n        \"id\":1506584998,//冗余，无实际意义，时间戳\n        \"amount\":123.1221,//交易额\n        \"vol\":1212.12211,//交易量\n        \"open\":2233.22,//开盘价\n        \"close\":1221.11,//收盘价\n        \"high\":22322.22,//最高价\n        \"low\":2321.22,//最低价\n        \"rose\":-0.2922,//涨幅\n        \"ts\":1506584998239,//数据产生时间\n        \"lower_frame\":\"0\"\n    }\n}\n```\n\n### 订阅-深度盘口（高频）\n\n* 请求:\n\n```\n{\"event\":\"sub\",\"params\":{\"channel\":\"market_$base$quote_depth_step[0-2]\",\"cb_id\":\"自定义\",\"asks\":150,\"bids\":150}}\n```\n\n* 返回订阅状态1次:\n\n```\n{\"event_rep\":\"subed\",\"channel\":\"market_$base$quote_depth_step[0-2]\",\"cb_id\":\"原路返回\",\"asks\":150,\"bids\":150,\"ts\":1506584998239,\"status\":\"ok\"}\n```\n\n* 注：第一次订阅成功会立刻返回一次全量数据， 另外server也会定期推个全量数据给前端 避免数据出问题\n* 全量：前端直接替换原有盘口\n\n```\n{\n    \"channel\":\"market_$base$quote_depth_step[0-2]\",//$base$quote表示btckrw等,深度有3个维度，0、1、2\n    \"ts\":1506584998239,//请求时间\n    \"tick\":{\n        \"asks\":[//卖盘\n            [22112.22,0.9332],\n            [22112.21,0.2],\n        ],\n        \"buys\":[//买盘\n            [22111.22,0.9332],\n            [22111.21,0.2],\n        ]\n    }\n}\n```\n\n* 注： 增量盘口信息 前端只需要替换价格对应的数量即可， volume=0时删除， price与原有盘口某个价格段的price相等时更新volume, 新的price直接新增\n* 增量盘口信息（该盘口变化的价格段）\n\n```\n{\n    \"channel\":\"market_$base$quote_depth_step[0-2]\",//$base$quote表示btckrw等,深度有3个维度，0、1、2\n    \"ts\":1506584998239,//请求时间\n    \"tick\":{\n        \"side\": \"asks\", 买卖盘方向  asks： 卖盘  buys: 买盘\n        \"price\" : 133.55,  盘口对应的某个价格段\n        \"volume\" : 44.22   价格段对应的数量\n    }\n}\n```\n\n### 订阅-深度盘口\n\n* 请求:\n\n```\n{\"event\":\"sub\",\"params\":{\"channel\":\"market_$base$quote_depth_step[0-2]\",\"cb_id\":\"自定义\",\"asks\":150,\"bids\":150}}\n```\n\n* 返回订阅状态1次:\n\n```\n{\"event_rep\":\"subed\",\"channel\":\"market_$base$quote_depth_step[0-2]\",\"cb_id\":\"原路返回\",\"asks\":150,\"bids\":150,\"ts\":1506584998239,\"status\":\"ok\"}\n```\n\n* 持续返回订阅消息:\n\n```\n{\n    \"channel\":\"market_$base$quote_depth_step[0-2]\",//$base$quote表示btckrw等,深度有3个维度，0、1、2\n    \"ts\":1506584998239,//请求时间\n    \"tick\":{\n        \"asks\":[//卖盘\n            [22112.22,0.9332],\n            [22112.21,0.2]\n        ],\n        \"buys\":[//买盘\n            [22111.22,0.9332],\n            [22111.21,0.2]\n        ]\n    }\n}\n```\n\n### 订阅-实时成交信息\n\n* 请求:\n\n```\n{\"event\":\"sub\",\"params\":{\"channel\":\"market_$base$quote_trade_ticker\",\"cb_id\":\"自定义\"}}\n```\n\n* 返回订阅状态1次:\n\n```\n{\"event_rep\":\"subed\",\"channel\":\"market_$base$quote_trade_ticker\",\"cb_id\":\"原路返回\",\"ts\":1506584998239,\"status\":\"ok\"}\n```\n\n* 持续返回订阅消息:\n\n```\n{\n    \"channel\":\"market_$base$quote_trade_ticker\",//订阅的交易对行情$base$quote表示btckrw等\n    \"ts\":1506584998239,//请求时间\n    \"tick\":{\n        \"id\":12121,//data中最大交易ID\n        \"ts\":1506584998239,//data中最大时间\n        \"data\":[\n            {\n                \"id\":12121,//交易ID\n                \"side\":\"buy\",//买卖方向buy,sell\n                \"price\":32.233,//单价\n                \"vol\":232,//数量\n                \"amount\":323,//总额\n                \"ts\":1506584998239,//数据产生时间\n                \"ds\":'2017-09-10 23:12:21'\n            },\n            {\n                \"id\":12120,//交易ID\n                \"side\":\"buy\",//买卖方向buy,sell\n                \"price\":32.233,//单价\n                \"vol\":232,//数量\n                \"amount\":323,//总额\n                \"ts\":1506584998239,//数据产生时间\n                \"ds\":'2017-09-10 23:12:21'\n            }\n        ]\n    }\n}\n```\n\n### 请求-K线历史数据\n\n* 增加请求参数endIdx，pageSize（最多300，默认300条数据）,如果endIdx为空，则返回最近300条历史数据\n* 请求:\n\n```\n{\"event\":\"req\",\"params\":{\"channel\":\"market_$base$quote_kline_[1min/5min/15min/30min/60min/1day/1week/1month]\",\"cb_id\":\"自定义\",\"since\":\"1506602880\"}}//since缺省时返回最新300条，有值时返回大于since的最多1小时数据，since有强校验，不能早于当前1小时  since取到59\n```\n\n* 返回一次历史数据:\n\n```\n{\n    \"event_rep\":\"rep\",\"channel\":\"market_$base$quote_kline_[1min/5min/15min/30min/60min/1day/1week/1month]\",\"cb_id\":\"原路返回\",\n    \"since\":\"1506602880\",//since缺省时返回最新300条，有值时返回大于since的最多1小时数据，since有强校验，不能早于当前1小时\n    \"ts\":1506584998239,//请求时间\n    \"data\":[//300条\n        {\n            \"id\":1506602880,//时间刻度起始值\n            \"amount\":123.1221,//交易额\n            \"vol\":1212.12211,//交易量\n            \"open\":2233.22,//开盘价\n            \"close\":1221.11,//收盘价\n            \"high\":22322.22,//最高价\n            \"low\":2321.22//最低价\n        },\n        {\n            \"id\":1506602880,//时间刻度起始值\n            \"amount\":123.1221,//交易额\n            \"vol\":1212.12211,//交易量\n            \"open\":2233.22,//开盘价\n            \"close\":1221.11,//收盘价\n            \"high\":22322.22,//最高价\n            \"low\":2321.22//最低价\n        }\n    ]\n}\n```\n\n### 请求-成交历史数据\n\n* 请求:\n\n```\n{\"event\":\"req\",\"params\":{\"channel\":\"market_$base$quote_trade_ticker\",\"cb_id\":\"自定义\",\"top\":200}}\n```\n\n* 直接返回成交信息:\n\n```\n{\n    \"event_rep\":\"rep\",\"channel\":\"market_$base$quote_trade_ticker\",\"cb_id\":\"原路返回\",\"ts\":1506584998239,\"status\":\"ok\",\n    \"top\":200,//最大支持200\n    \"data\":[\n        {\n            \"id\":12121,//交易ID\n            \"side\":\"buy\",//买卖方向buy,sell\n            \"price\":32.233,//单价\n            \"vol\":232,//数量\n            \"amount\":323,//总额\n            \"ts\":1506584998239//数据产生时间\n        },\n        {\n            \"id\":12120,//交易ID\n            \"side\":\"buy\",//买卖方向buy,sell\n            \"price\":32.233,//单价\n            \"vol\":232,//数量\n            \"amount\":323,//总额\n            \"ts\":1506584998239,//数据产生时间\n            \"ds\":'2017-09-10 23:12:21'\n        }\n    ]\n}\n```\n\n### 请求-首页24行情数据\n\n* 请求方式:\n\n```\n{\"event\":\"req\",\"params\":{\"channel\":\"review\"}}\n```\n\n* 返回数据示例:\n\n```\n{\n   event_rep: \"rep\",\n   channel: \"review\",\n   data: {\n          bchbtc:  {amount: \"115.968833484\"close: \"0.07956\"high: \"0.086323\"low: \"0.079251\"open: \"0.086323\"rose: \"-0.07834528\"vol: \"1393.247\"}\n          bchusdt: {amount: \"416316.164145661\", close: \"513.56\", high: \"556.42\", low: \"510.85\", open: \"555.71\", …}\n          btcusdt: {amount: \"999341.34124\", close: \"6450.18\", high: \"6486.39\", low: \"6359.63\", open: \"6435.79\", …}\n   }\n}\n```",
        "desc": "<p>订阅-K线行情</p>\n<ul>\n<li>请求:</li>\n</ul>\n<pre><code>{\"event\":\"sub\",\"params\":{\"channel\":\"market_$base$quote_kline_[1min/5min/15min/30min/60min/1day/1week/1month]\",\"cb_id\":\"自定义\"}}\n</code></pre>\n<ul>\n<li>返回订阅状态1次:</li>\n</ul>\n<pre><code>{\"event_rep\":\"subed\",\"channel\":\"market_$base$quote_kline_[1min/5min/15min/30min/60min/1day/1week/1month]\",\"cb_id\":\"原路返回\",\"ts\":1506584998239,\"status\":\"ok\"}\n</code></pre>\n<ul>\n<li>持续返回订阅消息:</li>\n</ul>\n<pre><code>{\n    \"channel\":\"market_$base$quote_kline_[1min/5min/15min/30min/60min/1day/1week/1month]\",//订阅的交易对行情$base$quote表示btckrw等\n    \"ts\":1506584998239,//请求时间\n    \"tick\":{\n        \"id\":1506602880,//时间刻度起始值\n        \"amount\":123.1221,//交易额\n        \"vol\":1212.12211,//交易量\n        \"open\":2233.22,//开盘价\n        \"close\":1221.11,//收盘价\n        \"high\":22322.22,//最高价\n        \"low\":2321.22//最低价\n    }\n}\n</code></pre>\n<h3>订阅-前24小时行情</h3>\n<ul>\n<li>请求:</li>\n</ul>\n<pre><code>{\"event\":\"sub\",\"params\":{\"channel\":\"market_$base$quote_ticker\",\"cb_id\":\"自定义\"}}\n</code></pre>\n<ul>\n<li>返回订阅状态1次:</li>\n</ul>\n<pre><code>{\"event_rep\":\"subed\",\"channel\":\"market_$base$quote_ticker\",\"cb_id\":\"原路返回\",\"ts\":1506584998239,\"status\":\"ok\",\"lower_frame\":\"0\"} // lower_frame: 0 币对没下架、 1 币对下架\n</code></pre>\n<ul>\n<li>持续返回订阅消息:</li>\n</ul>\n<pre><code>{\n    \"channel\":\"market_$base$quote_ticker\",//订阅的交易对行情$base$quote表示btckrw等\n    \"ts\":1506584998239,//请求时间\n    \"tick\":{\n        \"id\":1506584998,//冗余，无实际意义，时间戳\n        \"amount\":123.1221,//交易额\n        \"vol\":1212.12211,//交易量\n        \"open\":2233.22,//开盘价\n        \"close\":1221.11,//收盘价\n        \"high\":22322.22,//最高价\n        \"low\":2321.22,//最低价\n        \"rose\":-0.2922,//涨幅\n        \"ts\":1506584998239,//数据产生时间\n        \"lower_frame\":\"0\"\n    }\n}\n</code></pre>\n<h3>订阅-深度盘口（高频）</h3>\n<ul>\n<li>请求:</li>\n</ul>\n<pre><code>{\"event\":\"sub\",\"params\":{\"channel\":\"market_$base$quote_depth_step[0-2]\",\"cb_id\":\"自定义\",\"asks\":150,\"bids\":150}}\n</code></pre>\n<ul>\n<li>返回订阅状态1次:</li>\n</ul>\n<pre><code>{\"event_rep\":\"subed\",\"channel\":\"market_$base$quote_depth_step[0-2]\",\"cb_id\":\"原路返回\",\"asks\":150,\"bids\":150,\"ts\":1506584998239,\"status\":\"ok\"}\n</code></pre>\n<ul>\n<li>注：第一次订阅成功会立刻返回一次全量数据， 另外server也会定期推个全量数据给前端 避免数据出问题</li>\n<li>全量：前端直接替换原有盘口</li>\n</ul>\n<pre><code>{\n    \"channel\":\"market_$base$quote_depth_step[0-2]\",//$base$quote表示btckrw等,深度有3个维度，0、1、2\n    \"ts\":1506584998239,//请求时间\n    \"tick\":{\n        \"asks\":[//卖盘\n            [22112.22,0.9332],\n            [22112.21,0.2],\n        ],\n        \"buys\":[//买盘\n            [22111.22,0.9332],\n            [22111.21,0.2],\n        ]\n    }\n}\n</code></pre>\n<ul>\n<li>注： 增量盘口信息 前端只需要替换价格对应的数量即可， volume=0时删除， price与原有盘口某个价格段的price相等时更新volume, 新的price直接新增</li>\n<li>增量盘口信息（该盘口变化的价格段）</li>\n</ul>\n<pre><code>{\n    \"channel\":\"market_$base$quote_depth_step[0-2]\",//$base$quote表示btckrw等,深度有3个维度，0、1、2\n    \"ts\":1506584998239,//请求时间\n    \"tick\":{\n        \"side\": \"asks\", 买卖盘方向  asks： 卖盘  buys: 买盘\n        \"price\" : 133.55,  盘口对应的某个价格段\n        \"volume\" : 44.22   价格段对应的数量\n    }\n}\n</code></pre>\n<h3>订阅-深度盘口</h3>\n<ul>\n<li>请求:</li>\n</ul>\n<pre><code>{\"event\":\"sub\",\"params\":{\"channel\":\"market_$base$quote_depth_step[0-2]\",\"cb_id\":\"自定义\",\"asks\":150,\"bids\":150}}\n</code></pre>\n<ul>\n<li>返回订阅状态1次:</li>\n</ul>\n<pre><code>{\"event_rep\":\"subed\",\"channel\":\"market_$base$quote_depth_step[0-2]\",\"cb_id\":\"原路返回\",\"asks\":150,\"bids\":150,\"ts\":1506584998239,\"status\":\"ok\"}\n</code></pre>\n<ul>\n<li>持续返回订阅消息:</li>\n</ul>\n<pre><code>{\n    \"channel\":\"market_$base$quote_depth_step[0-2]\",//$base$quote表示btckrw等,深度有3个维度，0、1、2\n    \"ts\":1506584998239,//请求时间\n    \"tick\":{\n        \"asks\":[//卖盘\n            [22112.22,0.9332],\n            [22112.21,0.2]\n        ],\n        \"buys\":[//买盘\n            [22111.22,0.9332],\n            [22111.21,0.2]\n        ]\n    }\n}\n</code></pre>\n<h3>订阅-实时成交信息</h3>\n<ul>\n<li>请求:</li>\n</ul>\n<pre><code>{\"event\":\"sub\",\"params\":{\"channel\":\"market_$base$quote_trade_ticker\",\"cb_id\":\"自定义\"}}\n</code></pre>\n<ul>\n<li>返回订阅状态1次:</li>\n</ul>\n<pre><code>{\"event_rep\":\"subed\",\"channel\":\"market_$base$quote_trade_ticker\",\"cb_id\":\"原路返回\",\"ts\":1506584998239,\"status\":\"ok\"}\n</code></pre>\n<ul>\n<li>持续返回订阅消息:</li>\n</ul>\n<pre><code>{\n    \"channel\":\"market_$base$quote_trade_ticker\",//订阅的交易对行情$base$quote表示btckrw等\n    \"ts\":1506584998239,//请求时间\n    \"tick\":{\n        \"id\":12121,//data中最大交易ID\n        \"ts\":1506584998239,//data中最大时间\n        \"data\":[\n            {\n                \"id\":12121,//交易ID\n                \"side\":\"buy\",//买卖方向buy,sell\n                \"price\":32.233,//单价\n                \"vol\":232,//数量\n                \"amount\":323,//总额\n                \"ts\":1506584998239,//数据产生时间\n                \"ds\":'2017-09-10 23:12:21'\n            },\n            {\n                \"id\":12120,//交易ID\n                \"side\":\"buy\",//买卖方向buy,sell\n                \"price\":32.233,//单价\n                \"vol\":232,//数量\n                \"amount\":323,//总额\n                \"ts\":1506584998239,//数据产生时间\n                \"ds\":'2017-09-10 23:12:21'\n            }\n        ]\n    }\n}\n</code></pre>\n<h3>请求-K线历史数据</h3>\n<ul>\n<li>增加请求参数endIdx，pageSize（最多300，默认300条数据）,如果endIdx为空，则返回最近300条历史数据</li>\n<li>请求:</li>\n</ul>\n<pre><code>{\"event\":\"req\",\"params\":{\"channel\":\"market_$base$quote_kline_[1min/5min/15min/30min/60min/1day/1week/1month]\",\"cb_id\":\"自定义\",\"since\":\"1506602880\"}}//since缺省时返回最新300条，有值时返回大于since的最多1小时数据，since有强校验，不能早于当前1小时  since取到59\n</code></pre>\n<ul>\n<li>返回一次历史数据:</li>\n</ul>\n<pre><code>{\n    \"event_rep\":\"rep\",\"channel\":\"market_$base$quote_kline_[1min/5min/15min/30min/60min/1day/1week/1month]\",\"cb_id\":\"原路返回\",\n    \"since\":\"1506602880\",//since缺省时返回最新300条，有值时返回大于since的最多1小时数据，since有强校验，不能早于当前1小时\n    \"ts\":1506584998239,//请求时间\n    \"data\":[//300条\n        {\n            \"id\":1506602880,//时间刻度起始值\n            \"amount\":123.1221,//交易额\n            \"vol\":1212.12211,//交易量\n            \"open\":2233.22,//开盘价\n            \"close\":1221.11,//收盘价\n            \"high\":22322.22,//最高价\n            \"low\":2321.22//最低价\n        },\n        {\n            \"id\":1506602880,//时间刻度起始值\n            \"amount\":123.1221,//交易额\n            \"vol\":1212.12211,//交易量\n            \"open\":2233.22,//开盘价\n            \"close\":1221.11,//收盘价\n            \"high\":22322.22,//最高价\n            \"low\":2321.22//最低价\n        }\n    ]\n}\n</code></pre>\n<h3>请求-成交历史数据</h3>\n<ul>\n<li>请求:</li>\n</ul>\n<pre><code>{\"event\":\"req\",\"params\":{\"channel\":\"market_$base$quote_trade_ticker\",\"cb_id\":\"自定义\",\"top\":200}}\n</code></pre>\n<ul>\n<li>直接返回成交信息:</li>\n</ul>\n<pre><code>{\n    \"event_rep\":\"rep\",\"channel\":\"market_$base$quote_trade_ticker\",\"cb_id\":\"原路返回\",\"ts\":1506584998239,\"status\":\"ok\",\n    \"top\":200,//最大支持200\n    \"data\":[\n        {\n            \"id\":12121,//交易ID\n            \"side\":\"buy\",//买卖方向buy,sell\n            \"price\":32.233,//单价\n            \"vol\":232,//数量\n            \"amount\":323,//总额\n            \"ts\":1506584998239//数据产生时间\n        },\n        {\n            \"id\":12120,//交易ID\n            \"side\":\"buy\",//买卖方向buy,sell\n            \"price\":32.233,//单价\n            \"vol\":232,//数量\n            \"amount\":323,//总额\n            \"ts\":1506584998239,//数据产生时间\n            \"ds\":'2017-09-10 23:12:21'\n        }\n    ]\n}\n</code></pre>\n<h3>请求-首页24行情数据</h3>\n<ul>\n<li>请求方式:</li>\n</ul>\n<pre><code>{\"event\":\"req\",\"params\":{\"channel\":\"review\"}}\n</code></pre>\n<ul>\n<li>返回数据示例:</li>\n</ul>\n<pre><code>{\n   event_rep: \"rep\",\n   channel: \"review\",\n   data: {\n          bchbtc:  {amount: \"115.968833484\"close: \"0.07956\"high: \"0.086323\"low: \"0.079251\"open: \"0.086323\"rose: \"-0.07834528\"vol: \"1393.247\"}\n          bchusdt: {amount: \"416316.164145661\", close: \"513.56\", high: \"556.42\", low: \"510.85\", open: \"555.71\", …}\n          btcusdt: {amount: \"999341.34124\", close: \"6450.18\", high: \"6486.39\", low: \"6359.63\", open: \"6435.79\", …}\n   }\n}\n</code></pre>\n",
        "res_body": ""
      },
      {
        "query_path": {
          "path": "/open/api/market_dept",
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
        "_id": 2664,
        "method": "GET",
        "catid": 700,
        "title": "查询买卖盘深度",
        "path": "/open/api/market_dept",
        "project_id": 73,
        "req_params": [],
        "res_body_type": "json",
        "uid": 367,
        "add_time": 1576133693,
        "up_time": 1576468104,
        "req_query": [
          {
            "required": "1",
            "_id": "5df6fe88e465640ff231e030",
            "name": "symbol",
            "example": "btcusdt",
            "desc": "市场标记，btcusdt"
          },
          {
            "required": "1",
            "_id": "5df6fe88e465640ff231e02f",
            "name": "type",
            "example": "step0",
            "desc": "深度类型，step0, step1, step2（合并深度0-2）；step0时，精度最高"
          }
        ],
        "req_headers": [],
        "req_body_form": [],
        "__v": 0,
        "markdown": "``` json\n{\n    \"code\": \"0\",\n    \"msg\": \"suc\",\n    \"data\": {\n        \"tick\": {\n            \"asks\": [//卖盘(BTCUSDT)\n                [\n                    7230.1782,//价格(USDT)\n                    6.133//数量(BTC)\n                ],\n                [\n                    7230.3757,\n                    0.007\n                ]\n            ],\n            \"bids\": [//买盘(BTCUSDT)\n                [\n                    7225.5867,//价格(USDT)\n                    0.001//数量(BTC)\n                ],\n                [\n                    7225.4409,\n                    1.425\n                ]\n            ],\n        }\n    }\n}\n```",
        "desc": "<pre><code data-language=\"json\" class=\"lang-json\">{\n&nbsp;&nbsp;&nbsp; \"code\": \"0\",\n&nbsp;&nbsp;&nbsp; \"msg\": \"suc\",\n&nbsp;&nbsp;&nbsp; \"data\": {\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \"tick\": {\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \"asks\": [//卖盘(BTCUSDT)\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7230.1782,//价格(USDT)\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6.133//数量(BTC)\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ],\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7230.3757,\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 0.007\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ]\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ],\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \"bids\": [//买盘(BTCUSDT)\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7225.5867,//价格(USDT)\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 0.001//数量(BTC)\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ],\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7225.4409,\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1.425\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ]\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ],\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }\n&nbsp;&nbsp;&nbsp; }\n}\n</code></pre>\n",
        "res_body": "{\"type\":\"object\",\"title\":\"empty object\",\"properties\":{\"code\":{\"type\":\"string\",\"mock\":{\"mock\":\"0\"}},\"msg\":{\"type\":\"string\",\"mock\":{\"mock\":\"suc\"},\"description\":\"code>0失败\"},\"data\":{\"type\":\"object\",\"properties\":{\"tick\":{\"type\":\"object\",\"properties\":{\"asks\":{\"type\":\"array\",\"items\":{\"type\":\"array\",\"items\":{\"type\":\"number\"},\"maxItems\":2,\"minItems\":2,\"uniqueItems\":true},\"description\":\"卖盘\"},\"bids\":{\"type\":\"array\",\"items\":{\"type\":\"array\",\"items\":{\"type\":\"number\"},\"minItems\":2,\"maxItems\":2,\"uniqueItems\":true},\"description\":\"买盘\"}},\"required\":[\"asks\",\"bids\"]}},\"required\":[\"tick\"]}},\"required\":[\"code\",\"msg\",\"data\"]}"
      },
      {
        "query_path": {
          "path": "/open/api/common/symbols",
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
        "_id": 2655,
        "method": "GET",
        "catid": 700,
        "title": "查询系统支持的所有交易对及精度",
        "path": "/open/api/common/symbols",
        "project_id": 73,
        "req_params": [],
        "res_body_type": "json",
        "uid": 367,
        "add_time": 1576131716,
        "up_time": 1576468092,
        "req_query": [],
        "req_headers": [],
        "req_body_form": [],
        "__v": 0,
        "markdown": "",
        "desc": "",
        "res_body": "{\"type\":\"object\",\"title\":\"empty object\",\"properties\":{\"code\":{\"type\":\"string\",\"mock\":{\"mock\":\"0\"}},\"msg\":{\"type\":\"string\",\"description\":\"code>0失败\",\"mock\":{\"mock\":\"suc\"}},\"data\":{\"type\":\"object\",\"properties\":{\"symbol\":{\"type\":\"string\",\"description\":\"交易对\"},\"base_coin\":{\"type\":\"string\",\"description\":\"基础币种\"},\"count_coin\":{\"type\":\"string\",\"description\":\"计价货币\"},\"price_precision\":{\"type\":\"integer\",\"description\":\"价格精度位数（0为个位）\"},\"amount_precision\":{\"type\":\"integer\",\"description\":\"数量精度位数（0为个位）\"}},\"required\":[\"symbol\",\"base_coin\",\"count_coin\",\"price_precision\",\"amount_precision\"]}},\"required\":[\"code\",\"msg\",\"data\"]}"
      },
      {
        "query_path": {
          "path": "/open/api/get_records",
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
        "_id": 2592,
        "method": "GET",
        "catid": 700,
        "title": "获取K线数据",
        "path": "/open/api/get_records",
        "project_id": 73,
        "req_params": [],
        "res_body_type": "json",
        "uid": 303,
        "add_time": 1575879823,
        "up_time": 1576222881,
        "req_query": [
          {
            "required": "1",
            "_id": "5df340a1e465640ff231dfc7",
            "name": "symbol",
            "example": "btcusdt",
            "desc": "市场标记，例如btcusdt、ethbtc"
          },
          {
            "required": "1",
            "_id": "5df340a1e465640ff231dfc6",
            "name": "period",
            "example": "1",
            "desc": "单位为分钟，例如1分钟则为1，一天则为1440"
          }
        ],
        "req_headers": [],
        "req_body_form": [],
        "__v": 0,
        "markdown": "``` json\n{\n    \"code\": \"0\", //code>0 失败\n    \"msg\": \"suc\",\n    \"message\": null,\n    \"data\": [\n        [\n            1575862380, //时间戳\n            7488.0048, //开盘价\n            7494.3289, //最高\n            7487.8441, //最低\n            7491.4864, //收盘价\n            61.85934342, //交易量\n            463413.3915064308 //交易额\n        ],\n        [\n            1575862440,\n            7491.2481,\n            7492.7238,\n            7490.505,\n            7491.0626,\n            47.8,\n            358101.3027824\n        ]\n    ]\n}\n```",
        "desc": "<pre><code data-language=\"json\" class=\"lang-json\">{\n    \"code\": \"0\", //code&gt;0 失败\n    \"msg\": \"suc\",\n    \"message\": null,\n    \"data\": [\n        [\n            1575862380, //时间戳\n            7488.0048, //开盘价\n            7494.3289, //最高\n            7487.8441, //最低\n            7491.4864, //收盘价\n            61.85934342, //交易量\n            463413.3915064308 //交易额\n        ],\n        [\n            1575862440,\n            7491.2481,\n            7492.7238,\n            7490.505,\n            7491.0626,\n            47.8,\n            358101.3027824\n        ]\n    ]\n}\n</code></pre>\n",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"string\",\"mock\":{\"mock\":\"0\"}},\"msg\":{\"type\":\"string\",\"mock\":{\"mock\":\"suc\"}},\"data\":{\"type\":\"array\",\"items\":{\"type\":\"array\",\"items\":{\"type\":\"number\"},\"minItems\":7,\"maxItems\":7,\"uniqueItems\":true}}}}"
      },
      {
        "query_path": {
          "path": "/open/api/market",
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
        "_id": 2658,
        "method": "GET",
        "catid": 700,
        "title": "获取各个币对的最新成交价",
        "path": "/open/api/market",
        "project_id": 73,
        "req_params": [],
        "res_body_type": "json",
        "uid": 367,
        "add_time": 1576132999,
        "up_time": 1576468098,
        "req_query": [
          {
            "required": "1",
            "_id": "5df6fe82e465640ff231e02e",
            "name": "api_key",
            "example": "api_key",
            "desc": "api_key"
          },
          {
            "required": "1",
            "_id": "5df6fe82e465640ff231e02d",
            "name": "time",
            "example": "1576131763759",
            "desc": "时间戳"
          },
          {
            "required": "1",
            "_id": "5df6fe82e465640ff231e02c",
            "name": "sign",
            "example": "sign",
            "desc": "签名"
          }
        ],
        "req_headers": [],
        "req_body_form": [],
        "__v": 0,
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"string\",\"mock\":{\"mock\":\"0\"}},\"msg\":{\"type\":\"string\",\"mock\":{\"mock\":\"suc\"}},\"data\":{\"type\":\"object\",\"properties\":{\"btcusdt\":{\"type\":\"number\",\"description\":\"币对名称\"},\"eoseth\":{\"type\":\"number\",\"description\":\"币对名称\"},\"ethusdt\":{\"type\":\"number\",\"description\":\"币对名称\"},\"xxx-xxx\":{\"type\":\"number\",\"description\":\"币对名称（其他开放交易的币对）\"}},\"required\":[]}}}"
      },
      {
        "query_path": {
          "path": "/open/api/get_ticker",
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
        "_id": 2595,
        "method": "GET",
        "catid": 700,
        "title": "获取当前行情",
        "path": "/open/api/get_ticker",
        "project_id": 73,
        "req_params": [],
        "res_body_type": "json",
        "uid": 303,
        "add_time": 1575883765,
        "up_time": 1575886744,
        "req_query": [
          {
            "required": "1",
            "_id": "5dee1f98e465640ff231de30",
            "name": "symbol",
            "example": "btcusdt",
            "desc": "市场标记，例如btcusdt、ethbtc"
          }
        ],
        "req_headers": [],
        "req_body_form": [],
        "__v": 0,
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"string\",\"mock\":{\"mock\":\"0\"}},\"msg\":{\"type\":\"string\",\"mock\":{\"mock\":\"suc\"}},\"data\":{\"type\":\"object\",\"properties\":{\"high\":{\"type\":\"string\",\"description\":\"最高价\"},\"vol\":{\"type\":\"string\",\"description\":\"交易量\"},\"last\":{\"type\":\"number\",\"description\":\"最新成交价\"},\"low\":{\"type\":\"string\",\"description\":\"最低价\"},\"buy\":{\"type\":\"number\",\"description\":\"买一价\"},\"sell\":{\"type\":\"number\",\"description\":\"卖一价\"},\"rose\":{\"type\":\"string\",\"description\":\"涨跌幅\"},\"time\":{\"type\":\"number\",\"description\":\"时间戳\"}}}}}"
      },
      {
        "query_path": {
          "path": "/open/api/get_allticker",
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
        "_id": 2643,
        "method": "GET",
        "catid": 700,
        "title": "获取所有交易对行情",
        "path": "/open/api/get_allticker",
        "project_id": 73,
        "req_params": [],
        "res_body_type": "json",
        "uid": 303,
        "add_time": 1576055361,
        "up_time": 1576468081,
        "req_query": [],
        "req_headers": [],
        "req_body_form": [],
        "__v": 0,
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"string\",\"mock\":{\"mock\":\"0\"}},\"msg\":{\"type\":\"string\",\"mock\":{\"mock\":\"suc\"}},\"data\":{\"type\":\"object\",\"properties\":{\"date\":{\"type\":\"number\",\"description\":\"返回数据时服务器时间\"},\"ticker\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"symbol\":{\"type\":\"string\",\"description\":\"交易对（交易对1(base)简称_交易对2(quote)简称）\"},\"high\":{\"type\":\"string\",\"description\":\"最高价\"},\"low\":{\"type\":\"string\",\"description\":\"最低价\"},\"buy\":{\"type\":\"number\",\"description\":\"买一价\"},\"sell\":{\"type\":\"number\",\"description\":\"卖一价\"},\"vol\":{\"type\":\"string\",\"description\":\"成交量(最近的24小时)\"},\"last\":{\"type\":\"number\",\"description\":\"最新成交价\"},\"rose\":{\"type\":\"string\",\"description\":\"涨跌幅\"}},\"required\":[\"symbol\",\"high\",\"low\",\"buy\",\"sell\",\"vol\",\"last\",\"rose\"]}}}}}}"
      },
      {
        "query_path": {
          "path": "/open/api/get_trades",
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
        "_id": 2646,
        "method": "GET",
        "catid": 700,
        "title": "获取行情成交记录",
        "path": "/open/api/get_trades",
        "project_id": 73,
        "req_params": [],
        "res_body_type": "json",
        "uid": 303,
        "add_time": 1576056024,
        "up_time": 1576468086,
        "req_query": [
          {
            "required": "1",
            "_id": "5df6fe76e465640ff231e02b",
            "name": "symbol",
            "example": "btcusdt",
            "desc": "市场标记，btcusdt"
          }
        ],
        "req_headers": [],
        "req_body_form": [],
        "__v": 0,
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"string\",\"mock\":{\"mock\":\"0\"}},\"msg\":{\"type\":\"string\",\"mock\":{\"mock\":\"suc\"}},\"data\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"number\",\"description\":\"成交id\"},\"amount\":{\"type\":\"number\",\"description\":\"成交数量\"},\"price\":{\"type\":\"number\",\"description\":\"成交价格\"},\"type\":{\"type\":\"string\",\"description\":\"主动单方向\"},\"ts\":{\"type\":\"number\",\"description\":\"成交时间（时间戳）\"},\"ds\":{\"type\":\"string\",\"description\":\"成交时间（日期格式）\"}},\"required\":[\"id\",\"amount\",\"price\",\"type\",\"ts\",\"ds\"]}}}}"
      }
    ]
  },
  {
    "index": 4,
    "name": "币币委托",
    "desc": null,
    "add_time": 1575886983,
    "up_time": 1575886983,
    "list": [
      {
        "query_path": {
          "path": "/open/api/v2/all_order",
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
        "_id": 2613,
        "method": "GET",
        "catid": 706,
        "title": "获取全部委托",
        "path": "/open/api/v2/all_order",
        "project_id": 73,
        "req_params": [],
        "res_body_type": "json",
        "uid": 303,
        "add_time": 1575950672,
        "up_time": 1577168513,
        "req_query": [
          {
            "required": "1",
            "_id": "5e01ae81e465640ff231e0a4",
            "name": "symbol",
            "example": "btcusdt",
            "desc": "市场标记，btcusdt"
          },
          {
            "required": "0",
            "_id": "5e01ae81e465640ff231e0a3",
            "name": "startDate",
            "example": "2019-12-10 12:00:01",
            "desc": "开始时间，精确到秒\"yyyy-MM-dd mm:hh:ss\""
          },
          {
            "required": "0",
            "_id": "5e01ae81e465640ff231e0a2",
            "name": "endDate",
            "example": "2019-12-10 18:00:01",
            "desc": "结束时间，精确到秒\"yyyy-MM-dd mm:hh:ss\""
          },
          {
            "required": "0",
            "_id": "5e01ae81e465640ff231e0a1",
            "name": "pageSize",
            "example": "20",
            "desc": "页面大小"
          },
          {
            "required": "0",
            "_id": "5e01ae81e465640ff231e0a0",
            "name": "page",
            "example": "1",
            "desc": "页码"
          },
          {
            "required": "1",
            "_id": "5e01ae81e465640ff231e09f",
            "name": "api_key",
            "example": "api_key",
            "desc": "api_key"
          },
          {
            "required": "1",
            "_id": "5e01ae81e465640ff231e09e",
            "name": "time",
            "example": "1575887255534",
            "desc": "时间戳"
          },
          {
            "required": "1",
            "_id": "5e01ae81e465640ff231e09d",
            "name": "sign",
            "example": "sign",
            "desc": "签名"
          }
        ],
        "req_headers": [],
        "req_body_form": [],
        "__v": 0,
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"string\"},\"msg\":{\"type\":\"string\"},\"data\":{\"type\":\"object\",\"properties\":{\"count\":{\"type\":\"number\"},\"orderList\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"number\",\"description\":\"订单id\"},\"side\":{\"type\":\"string\",\"description\":\"买卖方向\"},\"side_msg\":{\"type\":\"string\",\"description\":\"买卖方向信息\"},\"status\":{\"type\":\"number\",\"description\":\"订单状态\"},\"status_msg\":{\"type\":\"string\",\"description\":\"订单状态信息\"},\"created_at\":{\"type\":\"number\",\"description\":\"创建时间\"},\"price\":{\"type\":\"string\",\"description\":\"限价单挂单价格\"},\"volume\":{\"type\":\"string\",\"description\":\"挂单总数量\"},\"type\":{\"type\":\"number\",\"description\":\"委托订单类型\"},\"source\":{\"type\":\"number\",\"description\":\"订单来源\"},\"source_msg\":{\"type\":\"string\",\"description\":\"订单来源信息\"},\"total_price\":{\"type\":\"string\",\"description\":\"订单总金额\"},\"remain_volume\":{\"type\":\"string\",\"description\":\"未成交数量\"},\"deal_volume\":{\"type\":\"string\",\"description\":\"成交数量\"},\"avg_price\":{\"type\":\"string\",\"description\":\"成交均价\"},\"baseCoin\":{\"type\":\"string\",\"description\":\"基础货币\"},\"countCoin\":{\"type\":\"string\",\"description\":\"计价货币\"}},\"required\":[\"id\",\"side\",\"side_msg\",\"status\",\"status_msg\",\"created_at\",\"price\",\"volume\",\"type\",\"source\",\"source_msg\",\"total_price\",\"remain_volume\",\"deal_volume\",\"avg_price\",\"baseCoin\",\"countCoin\"]}}}}}}"
      },
      {
        "query_path": {
          "path": "/open/api/all_trade",
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
        "_id": 2637,
        "method": "GET",
        "catid": 706,
        "title": "获取全部成交记录",
        "path": "/open/api/all_trade",
        "project_id": 73,
        "req_params": [],
        "res_body_type": "json",
        "uid": 303,
        "add_time": 1576049770,
        "up_time": 1577168584,
        "req_query": [
          {
            "required": "1",
            "_id": "5e01aec8e465640ff231e0b2",
            "name": "symbol",
            "example": "btcusdt",
            "desc": "市场标记，btcusdt"
          },
          {
            "required": "0",
            "_id": "5e01aec8e465640ff231e0b1",
            "name": "startDate",
            "example": "2019-12-10 12:00:01",
            "desc": "开始时间，精确到秒“yyyy-MM-dd HH:mm:ss”"
          },
          {
            "required": "0",
            "_id": "5e01aec8e465640ff231e0b0",
            "name": "endDate",
            "example": "2019-12-10 18:00:01",
            "desc": "结束时间，精确到秒“yyyy-MM-dd HH:mm:ss”"
          },
          {
            "required": "0",
            "_id": "5e01aec8e465640ff231e0af",
            "name": "pageSize",
            "example": "20",
            "desc": "页面大小"
          },
          {
            "required": "0",
            "_id": "5e01aec8e465640ff231e0ae",
            "name": "page",
            "example": "1",
            "desc": "页码"
          },
          {
            "required": "1",
            "_id": "5e01aec8e465640ff231e0ad",
            "name": "api_key",
            "example": "api_key",
            "desc": "api_key"
          },
          {
            "required": "1",
            "_id": "5e01aec8e465640ff231e0ac",
            "name": "time",
            "example": "1575887255534",
            "desc": "时间戳"
          },
          {
            "required": "1",
            "_id": "5e01aec8e465640ff231e0ab",
            "name": "sign",
            "example": "sign",
            "desc": "签名"
          },
          {
            "required": "0",
            "_id": "5e01aec8e465640ff231e0aa",
            "name": "sort",
            "example": "1",
            "desc": "1表示id倒序（需要id倒序可以使用）"
          }
        ],
        "req_headers": [],
        "req_body_form": [],
        "__v": 0,
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"string\",\"mock\":{\"mock\":\"0\"}},\"msg\":{\"type\":\"string\",\"mock\":{\"mock\":\"suc\"}},\"data\":{\"type\":\"object\",\"properties\":{\"count\":{\"type\":\"number\"},\"resultList\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"number\",\"description\":\"成交id\"},\"side\":{\"type\":\"string\",\"description\":\"买卖方向\"},\"ask_user_id\":{\"type\":\"number\",\"description\":\"卖方用户id\"},\"bid_user_id\":{\"type\":\"number\",\"description\":\"买方用户id\"},\"type\":{\"type\":\"string\",\"description\":\"买卖方向信息\"},\"bid_id\":{\"type\":\"number\",\"description\":\"买单id\"},\"ask_id\":{\"type\":\"number\",\"description\":\"卖单id\"},\"price\":{\"type\":\"string\",\"description\":\"成交价格\"},\"volume\":{\"type\":\"string\",\"description\":\"成交数量\"},\"deal_price\":{\"type\":\"string\",\"description\":\"成交金额（price*volume）\"},\"fee\":{\"type\":\"string\",\"description\":\"买或卖单手续费\"},\"feeCoin\":{\"type\":\"string\",\"description\":\"买或卖单支付手续费的币种\"},\"ctime\":{\"type\":\"number\",\"description\":\"成交时间\"}}}}}}}}"
      },
      {
        "query_path": {
          "path": "/open/api/v2/new_order",
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
        "_id": 2598,
        "method": "GET",
        "catid": 706,
        "title": "获取当前委托v2",
        "path": "/open/api/v2/new_order",
        "project_id": 73,
        "req_params": [],
        "res_body_type": "json",
        "uid": 303,
        "add_time": 1575887017,
        "up_time": 1576055282,
        "req_query": [
          {
            "required": "1",
            "_id": "5df0b1f2e465640ff231df25",
            "name": "symbol",
            "example": "btcusdt",
            "desc": "市场标记，btcusdt"
          },
          {
            "required": "0",
            "_id": "5df0b1f2e465640ff231df24",
            "name": "pageSize",
            "example": "20",
            "desc": "页面大小"
          },
          {
            "required": "0",
            "_id": "5df0b1f2e465640ff231df23",
            "name": "page",
            "example": "1",
            "desc": "页码"
          },
          {
            "required": "1",
            "_id": "5df0b1f2e465640ff231df22",
            "name": "api_key",
            "example": "api_key",
            "desc": "api_key"
          },
          {
            "required": "1",
            "_id": "5df0b1f2e465640ff231df21",
            "name": "time",
            "example": "1575887255534",
            "desc": "时间戳"
          },
          {
            "required": "1",
            "_id": "5df0b1f2e465640ff231df20",
            "name": "sign",
            "example": "sign",
            "desc": "签名"
          }
        ],
        "req_headers": [],
        "req_body_form": [],
        "__v": 0,
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"string\",\"mock\":{\"mock\":\"0\"}},\"msg\":{\"type\":\"string\",\"mock\":{\"mock\":\"suc\"}},\"data\":{\"type\":\"object\",\"properties\":{\"count\":{\"type\":\"number\"},\"resultList\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"number\",\"description\":\"订单id\"},\"side\":{\"type\":\"string\",\"description\":\"买卖方向\"},\"side_msg\":{\"type\":\"string\",\"description\":\"买卖方向信息\"},\"status\":{\"type\":\"number\",\"description\":\"订单状态\"},\"status_msg\":{\"type\":\"string\",\"description\":\"订单状态信息\"},\"created_at\":{\"type\":\"number\",\"description\":\"订单创建时间\"},\"price\":{\"type\":\"string\",\"description\":\"限价单挂单价格\"},\"volume\":{\"type\":\"string\",\"description\":\"挂单总数量\"},\"type\":{\"type\":\"number\",\"description\":\"委托订单类型\"},\"source\":{\"type\":\"number\",\"description\":\"订单来源\"},\"source_msg\":{\"type\":\"string\",\"description\":\"订单来源信息\"},\"total_price\":{\"type\":\"string\",\"description\":\"订单总金额\"},\"remain_volume\":{\"type\":\"string\",\"description\":\"未成交数量\"},\"deal_volume\":{\"type\":\"string\",\"description\":\"成交数量\"},\"avg_price\":{\"type\":\"string\",\"description\":\"成交均价\"},\"baseCoin\":{\"type\":\"string\",\"description\":\"基础货币\"},\"countCoin\":{\"type\":\"string\",\"description\":\"计价货币\"}},\"required\":[\"id\",\"side\",\"side_msg\",\"status\",\"status_msg\",\"created_at\",\"price\",\"volume\",\"type\",\"source\",\"source_msg\",\"total_price\",\"remain_volume\",\"deal_volume\",\"avg_price\",\"baseCoin\",\"countCoin\"]}}}}}}"
      },
      {
        "query_path": {
          "path": "/open/api/v3/new_order",
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
        "_id": 2640,
        "method": "GET",
        "catid": 706,
        "title": "获取当前委托v3",
        "path": "/open/api/v3/new_order",
        "project_id": 73,
        "req_params": [],
        "res_body_type": "json",
        "req_query": [
          {
            "required": "1",
            "_id": "5e01aed6e465640ff231e0b9",
            "name": "symbol",
            "example": "btcusdt",
            "desc": "市场标记，btcusdt"
          },
          {
            "required": "0",
            "_id": "5e01aed6e465640ff231e0b8",
            "name": "pageSize",
            "example": "20",
            "desc": "页面大小"
          },
          {
            "required": "0",
            "_id": "5e01aed6e465640ff231e0b7",
            "name": "page",
            "example": "1",
            "desc": "页码"
          },
          {
            "required": "1",
            "_id": "5e01aed6e465640ff231e0b6",
            "name": "api_key",
            "example": "api_key",
            "desc": "api_key"
          },
          {
            "required": "1",
            "_id": "5e01aed6e465640ff231e0b5",
            "name": "time",
            "example": "1575887255534",
            "desc": "时间戳"
          },
          {
            "required": "1",
            "_id": "5e01aed6e465640ff231e0b4",
            "name": "sign",
            "example": "sign",
            "desc": "签名"
          },
          {
            "required": "1",
            "_id": "5e01aed6e465640ff231e0b3",
            "name": "pendingCancel",
            "example": "0",
            "desc": "0表示排除待撤单状态订单"
          }
        ],
        "req_headers": [],
        "req_body_form": [],
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"string\",\"mock\":{\"mock\":\"0\"}},\"msg\":{\"type\":\"string\",\"mock\":{\"mock\":\"suc\"}},\"data\":{\"type\":\"object\",\"properties\":{\"count\":{\"type\":\"number\"},\"resultList\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"number\",\"description\":\"订单id\"},\"side\":{\"type\":\"string\",\"description\":\"买卖方向\"},\"side_msg\":{\"type\":\"string\",\"description\":\"买卖方向信息\"},\"status\":{\"type\":\"number\",\"description\":\"订单状态\"},\"status_msg\":{\"type\":\"string\",\"description\":\"订单状态信息\"},\"created_at\":{\"type\":\"number\",\"description\":\"订单创建时间\"},\"price\":{\"type\":\"string\",\"description\":\"限价单挂单价格\"},\"volume\":{\"type\":\"string\",\"description\":\"挂单总数量\"},\"type\":{\"type\":\"number\",\"description\":\"委托订单类型\"},\"source\":{\"type\":\"number\",\"description\":\"订单来源\"},\"source_msg\":{\"type\":\"string\",\"description\":\"订单来源信息\"},\"total_price\":{\"type\":\"string\",\"description\":\"订单总金额\"},\"remain_volume\":{\"type\":\"string\",\"description\":\"未成交数量\"},\"deal_volume\":{\"type\":\"string\",\"description\":\"成交数量\"},\"avg_price\":{\"type\":\"string\",\"description\":\"成交均价\"},\"baseCoin\":{\"type\":\"string\",\"description\":\"基础货币\"},\"countCoin\":{\"type\":\"string\",\"description\":\"计价货币\"}},\"required\":[\"id\",\"side\",\"side_msg\",\"status\",\"status_msg\",\"created_at\",\"price\",\"volume\",\"type\",\"source\",\"source_msg\",\"total_price\",\"remain_volume\",\"deal_volume\",\"avg_price\",\"baseCoin\",\"countCoin\"]}}}}}}",
        "uid": 303,
        "add_time": 1576054876,
        "up_time": 1577168598,
        "__v": 0
      },
      {
        "query_path": {
          "path": "/open/api/order_info",
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
        "_id": 2631,
        "method": "GET",
        "catid": 706,
        "title": "获取订单详情",
        "path": "/open/api/order_info",
        "project_id": 73,
        "req_params": [],
        "res_body_type": "json",
        "uid": 303,
        "add_time": 1575959923,
        "up_time": 1577168563,
        "req_query": [
          {
            "required": "1",
            "_id": "5e01aeb3e465640ff231e0a9",
            "name": "order_id",
            "example": "orderId",
            "desc": "订单Id"
          },
          {
            "required": "1",
            "_id": "5e01aeb3e465640ff231e0a8",
            "name": "symbol",
            "example": "btcusdt",
            "desc": "市场标记，btcusdt"
          },
          {
            "required": "1",
            "_id": "5e01aeb3e465640ff231e0a7",
            "name": "api_key",
            "example": "api_key",
            "desc": "api_key"
          },
          {
            "required": "1",
            "_id": "5e01aeb3e465640ff231e0a6",
            "name": "time",
            "example": "1575887255534",
            "desc": "时间戳"
          },
          {
            "required": "1",
            "_id": "5e01aeb3e465640ff231e0a5",
            "name": "sign",
            "example": "sign",
            "desc": "签名"
          }
        ],
        "req_headers": [],
        "req_body_form": [],
        "__v": 0,
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"string\",\"mock\":{\"mock\":\"0\"}},\"msg\":{\"type\":\"string\",\"mock\":{\"mock\":\"suc\"}},\"data\":{\"type\":\"object\",\"properties\":{\"trade_list\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"volume\":{\"type\":\"string\",\"description\":\"成交数量\"},\"feeCoin\":{\"type\":\"string\",\"description\":\"买或卖单支付手续费的币种\"},\"price\":{\"type\":\"string\",\"description\":\"成交价格\"},\"fee\":{\"type\":\"string\",\"description\":\"买或卖单手续费\"},\"ctime\":{\"type\":\"number\",\"description\":\"成交时间\"},\"deal_price\":{\"type\":\"string\",\"description\":\"成交金额（volume*price）\"},\"id\":{\"type\":\"number\",\"description\":\"成交id\"},\"type\":{\"type\":\"string\",\"description\":\"买入或卖出信息\"}}},\"description\":\"成交信息\"},\"order_info\":{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"number\",\"description\":\"订单id\"},\"side\":{\"type\":\"string\",\"description\":\"买卖方向\"},\"side_msg\":{\"type\":\"string\",\"description\":\"买卖方向信息\"},\"status\":{\"type\":\"number\",\"description\":\"订单状态\"},\"status_msg\":{\"type\":\"string\",\"description\":\"订单状态信息\"},\"created_at\":{\"type\":\"number\",\"description\":\"订单创建时间\"},\"price\":{\"type\":\"string\",\"description\":\"限价单挂单价格\"},\"volume\":{\"type\":\"string\",\"description\":\"挂单总数量\"},\"type\":{\"type\":\"number\",\"description\":\"委托订单类型\"},\"source\":{\"type\":\"number\",\"description\":\"订单来源\"},\"source_msg\":{\"type\":\"string\",\"description\":\"订单来源信息\"},\"total_price\":{\"type\":\"string\",\"description\":\"订单总金额\"},\"remain_volume\":{\"type\":\"string\",\"description\":\"未成交数量\"},\"deal_volume\":{\"type\":\"string\",\"description\":\"成交数量\"},\"avg_price\":{\"type\":\"string\",\"description\":\"成交均价\"},\"baseCoin\":{\"type\":\"string\",\"description\":\"基础货币\"},\"countCoin\":{\"type\":\"string\",\"description\":\"计价货币\"},\"tradeList\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"volume\":{\"type\":\"string\"},\"feeCoin\":{\"type\":\"string\"},\"price\":{\"type\":\"string\"},\"fee\":{\"type\":\"string\"},\"ctime\":{\"type\":\"number\"},\"deal_price\":{\"type\":\"string\"},\"id\":{\"type\":\"number\"},\"type\":{\"type\":\"string\"}}},\"description\":\"成交信息（冗余）\"}},\"description\":\"订单信息\"}}}}}"
      }
    ]
  },
  {
    "index": 5,
    "name": "杠杆委托",
    "desc": null,
    "add_time": 1576053053,
    "up_time": 1576310437,
    "list": [
      {
        "query_path": {
          "path": "/open/api/margin/all_trade",
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
        "_id": 2661,
        "method": "GET",
        "catid": 724,
        "title": "获取杠杆全部成交记录",
        "path": "/open/api/margin/all_trade",
        "project_id": 73,
        "req_params": [],
        "res_body_type": "json",
        "req_query": [
          {
            "required": "1",
            "_id": "5df6fe11e465640ff231e02a",
            "name": "type",
            "example": "2",
            "desc": "2杠杆订单，1币币订单"
          },
          {
            "required": "1",
            "_id": "5df6fe11e465640ff231e029",
            "name": "symbol",
            "example": "btcusdt",
            "desc": "市场标记，btcusdt"
          },
          {
            "required": "0",
            "_id": "5df6fe11e465640ff231e028",
            "name": "startDate",
            "example": "2019-12-10 12:00:01",
            "desc": "开始时间，精确到秒“yyyy-MM-dd HH:mm:ss”"
          },
          {
            "required": "0",
            "_id": "5df6fe11e465640ff231e027",
            "name": "endDate",
            "example": "2019-12-10 18:00:01",
            "desc": "结束时间，精确到秒“yyyy-MM-dd HH:mm:ss”"
          },
          {
            "required": "0",
            "_id": "5df6fe11e465640ff231e026",
            "name": "pageSize",
            "example": "20",
            "desc": "页面大小"
          },
          {
            "required": "0",
            "_id": "5df6fe11e465640ff231e025",
            "name": "page",
            "example": "1",
            "desc": "页码"
          },
          {
            "required": "1",
            "_id": "5df6fe11e465640ff231e024",
            "name": "api_key",
            "example": "api_key",
            "desc": "api_key"
          },
          {
            "required": "1",
            "_id": "5df6fe11e465640ff231e023",
            "name": "time",
            "example": "1575887255534",
            "desc": "时间戳"
          },
          {
            "required": "1",
            "_id": "5df6fe11e465640ff231e022",
            "name": "sign",
            "example": "sign",
            "desc": "签名"
          },
          {
            "required": "0",
            "_id": "5df6fe11e465640ff231e021",
            "name": "sort",
            "example": "1",
            "desc": "1表示id倒序（需要id倒序可以使用）"
          }
        ],
        "req_headers": [],
        "req_body_form": [],
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"string\",\"mock\":{\"mock\":\"0\"}},\"msg\":{\"type\":\"string\",\"mock\":{\"mock\":\"suc\"}},\"data\":{\"type\":\"object\",\"properties\":{\"count\":{\"type\":\"number\"},\"resultList\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"number\",\"description\":\"成交id\"},\"side\":{\"type\":\"string\",\"description\":\"买卖方向\"},\"ask_user_id\":{\"type\":\"number\",\"description\":\"卖方用户id\"},\"bid_user_id\":{\"type\":\"number\",\"description\":\"买方用户id\"},\"type\":{\"type\":\"string\",\"description\":\"买卖方向信息\"},\"bid_id\":{\"type\":\"number\",\"description\":\"买单id\"},\"ask_id\":{\"type\":\"number\",\"description\":\"卖单id\"},\"price\":{\"type\":\"string\",\"description\":\"成交价格\"},\"volume\":{\"type\":\"string\",\"description\":\"成交数量\"},\"deal_price\":{\"type\":\"string\",\"description\":\"成交金额（price*volume）\"},\"fee\":{\"type\":\"string\",\"description\":\"买或卖单手续费\"},\"feeCoin\":{\"type\":\"string\",\"description\":\"买或卖单支付手续费的币种\"},\"ctime\":{\"type\":\"number\",\"description\":\"成交时间\"}}}}}}}}",
        "uid": 303,
        "add_time": 1576133681,
        "up_time": 1576467985,
        "__v": 0
      },
      {
        "query_path": {
          "path": "/open/api/margin/new_order",
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
        "_id": 2652,
        "method": "GET",
        "catid": 724,
        "title": "获取杠杆当前委托",
        "path": "/open/api/margin/new_order",
        "project_id": 73,
        "req_params": [],
        "res_body_type": "json",
        "uid": 303,
        "add_time": 1576131643,
        "up_time": 1576467978,
        "req_query": [
          {
            "required": "1",
            "_id": "5df6fe0ae465640ff231e020",
            "name": "type",
            "example": "2",
            "desc": "2杠杆订单，1币币订单"
          },
          {
            "required": "1",
            "_id": "5df6fe0ae465640ff231e01f",
            "name": "symbol",
            "example": "btcusdt",
            "desc": "市场标记，btcusdt"
          },
          {
            "required": "0",
            "_id": "5df6fe0ae465640ff231e01e",
            "name": "startDate",
            "example": "2019-12-12 12",
            "desc": "开始时间，精确到秒“yyyy-MM-dd mm:hh:ss”"
          },
          {
            "required": "0",
            "_id": "5df6fe0ae465640ff231e01d",
            "name": "endDate",
            "example": "2019-12-12 18",
            "desc": "结束时间，精确到秒“yyyy-MM-dd mm:hh:ss”"
          },
          {
            "required": "0",
            "_id": "5df6fe0ae465640ff231e01c",
            "name": "pageSize",
            "example": "20",
            "desc": "页面大小"
          },
          {
            "required": "0",
            "_id": "5df6fe0ae465640ff231e01b",
            "name": "page",
            "example": "1",
            "desc": "页码"
          },
          {
            "required": "1",
            "_id": "5df6fe0ae465640ff231e01a",
            "name": "api_key",
            "example": "api_key",
            "desc": "api_key"
          },
          {
            "required": "1",
            "_id": "5df6fe0ae465640ff231e019",
            "name": "time",
            "example": "1576131763759",
            "desc": "时间戳"
          },
          {
            "required": "1",
            "_id": "5df6fe0ae465640ff231e018",
            "name": "sign",
            "example": "sign",
            "desc": "签名"
          }
        ],
        "req_headers": [],
        "req_body_form": [],
        "__v": 0,
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"string\",\"mock\":{\"mock\":\"0\"}},\"msg\":{\"type\":\"string\",\"mock\":{\"mock\":\"suc\"}},\"data\":{\"type\":\"object\",\"properties\":{\"count\":{\"type\":\"number\"},\"resultList\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"id\":{\"type\":\"number\",\"description\":\"订单id\"},\"side\":{\"type\":\"string\",\"description\":\"买卖方向\"},\"side_msg\":{\"type\":\"string\",\"description\":\"买卖方向信息\"},\"status\":{\"type\":\"number\",\"description\":\"订单状态\"},\"status_msg\":{\"type\":\"string\",\"description\":\"订单状态信息\"},\"created_at\":{\"type\":\"number\",\"description\":\"订单创建时间\"},\"price\":{\"type\":\"string\",\"description\":\"限价单挂单价格\"},\"volume\":{\"type\":\"string\",\"description\":\"挂单总数量\"},\"type\":{\"type\":\"number\",\"description\":\"委托订单类型\"},\"source\":{\"type\":\"number\",\"description\":\"订单来源\"},\"source_msg\":{\"type\":\"string\",\"description\":\"订单来源信息\"},\"total_price\":{\"type\":\"string\",\"description\":\"订单总金额\"},\"remain_volume\":{\"type\":\"string\",\"description\":\"未成交数量\"},\"deal_volume\":{\"type\":\"string\",\"description\":\"成交数量\"},\"avg_price\":{\"type\":\"string\",\"description\":\"成交均价\"},\"baseCoin\":{\"type\":\"string\",\"description\":\"基础货币\"},\"countCoin\":{\"type\":\"string\",\"description\":\"计价货币\"}}}}}}}}"
      }
    ]
  },
  {
    "index": 6,
    "name": "账户资产",
    "desc": null,
    "add_time": 1576136824,
    "up_time": 1576310427,
    "list": [
      {
        "query_path": {
          "path": "/open/api/user/info",
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
        "_id": 5676,
        "method": "POST",
        "catid": 736,
        "title": "用户信息",
        "path": "/open/api/user/info",
        "project_id": 73,
        "req_params": [],
        "res_body_type": "json",
        "uid": 303,
        "add_time": 1592298820,
        "up_time": 1593585682,
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "5efc3012b921e635efc95baa",
            "name": "Content-Type",
            "value": "application/json"
          }
        ],
        "req_body_form": [],
        "__v": 0,
        "req_body_other": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"api_key\":{\"type\":\"string\"},\"time\":{\"type\":\"string\"},\"sign\":{\"type\":\"string\"}},\"required\":[\"api_key\",\"time\",\"sign\"]}",
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"string\",\"description\":\"0成功\"},\"msg\":{\"type\":\"string\"},\"data\":{\"type\":\"object\",\"properties\":{\"uid\":{\"type\":\"number\",\"description\":\"uid\"},\"mobileNumber\":{\"type\":\"string\",\"description\":\"手机\"},\"email\":{\"type\":\"string\",\"description\":\"邮箱\"},\"inviteCode\":{\"type\":\"string\",\"description\":\"邀请码\"}}}}}",
        "req_body_type": "json"
      },
      {
        "query_path": {
          "path": "/open/api/do_withdraw",
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
        "_id": 5439,
        "method": "POST",
        "catid": 736,
        "title": "用户提现",
        "path": "/open/api/do_withdraw",
        "project_id": 73,
        "req_params": [],
        "res_body_type": "json",
        "uid": 359,
        "add_time": 1590661699,
        "up_time": 1615258483,
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "6046e3741205767e428f28f2",
            "name": "Content-Type",
            "value": "application/json"
          }
        ],
        "req_body_form": [],
        "__v": 0,
        "req_body_other": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"api_key\":{\"type\":\"string\",\"description\":\"api_Key\"},\"time\":{\"type\":\"string\",\"description\":\"时间戳\"},\"sign\":{\"type\":\"string\",\"description\":\"签名\"},\"fee\":{\"type\":\"string\",\"description\":\"手续费额度\"},\"symbol\":{\"type\":\"string\",\"description\":\"币种\"},\"amount\":{\"type\":\"string\",\"description\":\"提现额度\"},\"address\":{\"type\":\"string\",\"description\":\"提现地址（必须是信任地址）\"}},\"required\":[\"api_key\",\"time\",\"sign\",\"fee\",\"symbol\",\"amount\",\"address\"]}",
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"string\",\"description\":\"0.成功 other.失败\"},\"msg\":{\"type\":\"string\",\"description\":\"提示语\"},\"data\":{\"type\":\"object\",\"properties\":{},\"required\":[]}},\"required\":[\"code\",\"msg\"]}",
        "req_body_type": "json"
      },
      {
        "query_path": {
          "path": "/open/api/margin/symbol/balance",
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
        "_id": 2667,
        "method": "POST",
        "catid": 736,
        "title": "获取杠杆资产余额",
        "path": "/open/api/margin/symbol/balance",
        "project_id": 73,
        "req_params": [],
        "res_body_type": "json",
        "uid": 303,
        "add_time": 1576133898,
        "up_time": 1576467969,
        "req_query": [
          {
            "required": "1",
            "_id": "5df6fe01e465640ff231e016",
            "name": "symbol",
            "example": "btcusdt",
            "desc": "币对名称"
          },
          {
            "required": "1",
            "_id": "5df6fe01e465640ff231e015",
            "name": "api_key",
            "example": "api_key",
            "desc": "api_key"
          },
          {
            "required": "1",
            "_id": "5df6fe01e465640ff231e014",
            "name": "time",
            "example": "1576131763759",
            "desc": "时间戳"
          },
          {
            "required": "1",
            "_id": "5df6fe01e465640ff231e013",
            "name": "sign",
            "example": "sign",
            "desc": "签名"
          }
        ],
        "req_headers": [
          {
            "required": "1",
            "_id": "5df6fe01e465640ff231e017",
            "name": "Content-Type",
            "value": "application/x-www-form-urlencoded"
          }
        ],
        "req_body_form": [],
        "__v": 0,
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"string\",\"mock\":{\"mock\":\"0\"}},\"msg\":{\"type\":\"string\",\"mock\":{\"mock\":\"suc\"}},\"data\":{\"type\":\"object\",\"properties\":{\"symbol\":{\"type\":\"string\",\"description\":\"币对名称\"},\"riskRate\":{\"type\":\"number\",\"description\":\"风险率\"},\"quoteTotalBalance\":{\"type\":\"number\",\"description\":\"quote杠杆总资产（正常+冻结）\"},\"quoteNormalBalance\":{\"type\":\"number\",\"description\":\"quote杠杆正常余额\"},\"quoteLockBalance\":{\"type\":\"number\",\"description\":\"quote杠杆冻结余额\"},\"burstPrice\":{\"type\":\"number\",\"description\":\"爆仓价\"},\"baseLockBalance\":{\"type\":\"number\",\"description\":\"base杠杆冻结余额\"},\"baseNormalBalance\":{\"type\":\"number\",\"description\":\"base杠杆正常余额\"},\"quoteCoin\":{\"type\":\"string\",\"description\":\"计价货币（quote资产）\"},\"baseCoin\":{\"type\":\"string\",\"description\":\"基础货币（base资产）\"},\"baseTotalBalance\":{\"type\":\"number\",\"description\":\"base杠杆总资产（正常+冻结）\"}}}}}",
        "req_body_type": "form"
      },
      {
        "query_path": {
          "path": "/open/api/user/account",
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
        "_id": 2670,
        "method": "GET",
        "catid": 736,
        "title": "资产余额",
        "path": "/open/api/user/account",
        "project_id": 73,
        "req_params": [],
        "res_body_type": "json",
        "uid": 303,
        "add_time": 1576136840,
        "up_time": 1576467961,
        "req_query": [
          {
            "required": "1",
            "_id": "5df6fdf9e465640ff231e012",
            "name": "api_key",
            "example": "api_key",
            "desc": "api_key"
          },
          {
            "required": "1",
            "_id": "5df6fdf9e465640ff231e011",
            "name": "time",
            "example": "1576131763759",
            "desc": "时间戳"
          },
          {
            "required": "1",
            "_id": "5df6fdf9e465640ff231e010",
            "name": "sign",
            "example": "sign",
            "desc": "签名"
          }
        ],
        "req_headers": [],
        "req_body_form": [],
        "__v": 0,
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"string\",\"mock\":{\"mock\":\"0\"}},\"msg\":{\"type\":\"string\",\"mock\":{\"mock\":\"suc\"}},\"data\":{\"type\":\"object\",\"properties\":{\"total_asset\":{\"type\":\"string\",\"description\":\"总资产\"},\"coin_list\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"normal\":{\"type\":\"string\",\"description\":\"可用余额账户\"},\"btcValuatin\":{\"type\":\"string\",\"description\":\"BTC估值\"},\"locked\":{\"type\":\"string\",\"description\":\"冻结账户\"},\"coin\":{\"type\":\"string\",\"description\":\"数字货币名称\"}},\"required\":[\"normal\",\"btcValuatin\",\"locked\",\"coin\"]}}}}}}"
      }
    ]
  },
  {
    "index": 7,
    "name": "子账号",
    "desc": null,
    "add_time": 1589260824,
    "up_time": 1589260824,
    "list": [
      {
        "query_path": {
          "path": "/open/api/sub/create_transaction",
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
        "_id": 4953,
        "method": "POST",
        "catid": 937,
        "title": "主副账号资金划转",
        "path": "/open/api/sub/create_transaction",
        "project_id": 73,
        "req_params": [],
        "res_body_type": "json",
        "uid": 359,
        "add_time": 1589261695,
        "up_time": 1615258395,
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "6046e31b1205767e428f28f1",
            "name": "Content-Type",
            "value": "application/json"
          }
        ],
        "req_body_form": [],
        "__v": 0,
        "req_body_other": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"amount\":{\"type\":\"string\",\"description\":\"转账数额\"},\"api_key\":{\"type\":\"string\",\"description\":\"主账号apikey\"},\"sign\":{\"type\":\"string\",\"description\":\"签名\"},\"time\":{\"type\":\"string\",\"description\":\"时间戳\"},\"transaction_type\":{\"type\":\"string\",\"description\":\"转账类型：\\nEXCHANGE:    【主账号币币账户 <==> 子账号币币账户】\\nCONTRACT：【主账号币币账户 <==> 子账号合约账户】\"},\"transaction_side\":{\"type\":\"string\",\"description\":\"转账方向：\\nTO_SUB：转往子账号\\nTO_ROOT：转往主账号\"},\"api_key_sub\":{\"type\":\"string\",\"description\":\"子账号apikey\"},\"coin\":{\"type\":\"string\",\"description\":\"转账币种\"}}}",
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"string\",\"description\":\"0成功 其他失败\"},\"msg\":{\"type\":\"string\",\"description\":\"提示语\"},\"message\":{\"type\":\"null\"},\"data\":{\"type\":\"null\"}}}",
        "req_body_type": "json"
      },
      {
        "query_path": {
          "path": "/open/api/sub/create_user",
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
        "_id": 4947,
        "method": "POST",
        "catid": 937,
        "title": "创建子账号&openApi（单个）",
        "path": "/open/api/sub/create_user",
        "project_id": 73,
        "req_params": [],
        "res_body_type": "json",
        "uid": 359,
        "add_time": 1589260869,
        "up_time": 1615275974,
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "604727c61205767e428f28f9",
            "name": "Content-Type",
            "value": "application/json"
          }
        ],
        "req_body_form": [],
        "__v": 0,
        "req_body_other": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"api_key\":{\"type\":\"string\",\"description\":\"apikey\"},\"sign\":{\"type\":\"string\",\"description\":\"签名（1.先将参数以其参数名的字典序升序进行排序2.遍历排序后的字典，将所有参数按\\\"keyvalue\\\"格式拼接在一起3.使用MD5对待签名串求签）\"},\"time\":{\"type\":\"string\",\"description\":\"时间戳（与当前时间差值在30秒内）\"},\"mobileNumber\":{\"type\":\"string\",\"description\":\"手机号\"},\"email\":{\"type\":\"string\",\"description\":\"邮箱\"},\"loginPword\":{\"type\":\"string\",\"description\":\"密码\"}},\"required\":[\"api_key\",\"sign\",\"time\"]}",
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"string\",\"description\":\"返回码（非0皆为失败）\"},\"msg\":{\"type\":\"string\"},\"message\":{\"type\":\"null\"},\"data\":{\"type\":\"object\",\"properties\":{\"secretKey\":{\"type\":\"string\",\"description\":\"secretKey\"},\"token\":{\"type\":\"string\",\"description\":\"token\"},\"uid\":{\"type\":\"string\"}},\"description\":\"返回数据\"}}}",
        "req_body_type": "json"
      },
      {
        "query_path": {
          "path": "/open/api/sub/create_batch_user",
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
        "_id": 4950,
        "method": "POST",
        "catid": 937,
        "title": "创建子账号&openApi（批量）",
        "path": "/open/api/sub/create_batch_user",
        "project_id": 73,
        "req_params": [],
        "res_body_type": "json",
        "uid": 359,
        "add_time": 1589261188,
        "up_time": 1595490527,
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "5f1940dfb921e635efc95fe1",
            "name": "Content-Type",
            "value": "application/json"
          }
        ],
        "req_body_form": [],
        "__v": 0,
        "req_body_other": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"api_key\":{\"type\":\"string\",\"description\":\"api_key\"},\"sign\":{\"type\":\"string\",\"description\":\"签名\"},\"time\":{\"type\":\"string\",\"description\":\"时间戳\"},\"batchParams\":{\"type\":\"string\",\"description\":\"批量标识\"}}}",
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"string\"},\"msg\":{\"type\":\"string\"},\"message\":{\"type\":\"null\"},\"data\":{\"type\":\"object\",\"properties\":{\"mapList\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"secretKey\":{\"type\":\"string\"},\"id\":{\"type\":\"string\",\"description\":\"批量标识\"},\"token\":{\"type\":\"string\"}},\"required\":[\"secretKey\",\"id\",\"token\"]}}}}}}",
        "req_body_type": "json"
      }
    ]
  },
  {
    "index": 8,
    "name": "App打包",
    "desc": null,
    "add_time": 1590380386,
    "up_time": 1590380386,
    "list": [
      {
        "query_path": {
          "path": "/open/api/upload_app_sign",
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
        "_id": 5382,
        "method": "POST",
        "catid": 1061,
        "title": "上传客户端签名",
        "path": "/open/api/upload_app_sign",
        "project_id": 73,
        "req_params": [],
        "res_body_type": "json",
        "uid": 359,
        "add_time": 1590380427,
        "up_time": 1590399933,
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "5ecb93bdb921e635efc95611",
            "name": "Content-Type",
            "value": "application/json"
          }
        ],
        "req_body_form": [],
        "__v": 0,
        "req_body_other": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"appSign\":{\"type\":\"string\",\"description\":\"android签名/iOS证书地址\"},\"systemType\":{\"type\":\"string\",\"description\":\" 0:android   1:ios\"},\"sign\":{\"type\":\"string\",\"description\":\"签名串（脚本调用的固定秘钥）\"},\"companyId\":{\"type\":\"number\",\"description\":\"商户ID\"}},\"required\":[\"appSign\",\"systemType\",\"sign\",\"companyId\"]}",
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"string\"},\"msg\":{\"type\":\"string\"},\"data\":{\"type\":\"null\"}}}",
        "req_body_type": "json"
      }
    ]
  },
  {
    "index": 9,
    "name": "KV管理",
    "desc": null,
    "add_time": 1590475001,
    "up_time": 1590475001,
    "list": [
      {
        "query_path": {
          "path": "/kv/common_config",
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
        "_id": 5412,
        "method": "POST",
        "catid": 1069,
        "title": "获取KV通用配置",
        "path": "/kv/common_config",
        "project_id": 73,
        "req_params": [],
        "res_body_type": "json",
        "uid": 359,
        "add_time": 1590475026,
        "up_time": 1590475091,
        "req_query": [],
        "req_headers": [
          {
            "required": "1",
            "_id": "5eccb953b921e635efc9564f",
            "name": "Content-Type",
            "value": "application/json"
          }
        ],
        "req_body_form": [],
        "__v": 0,
        "req_body_other": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"sign\":{\"type\":\"string\"},\"companyId\":{\"type\":\"string\"},\"configKey\":{\"type\":\"string\"}},\"required\":[\"sign\",\"companyId\",\"configKey\"]}",
        "markdown": "",
        "desc": "",
        "res_body": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"string\"},\"msg\":{\"type\":\"string\"},\"data\":{\"type\":\"string\"}},\"required\":[\"code\",\"msg\",\"data\"]}",
        "req_body_type": "json"
      }
    ]
  }
]