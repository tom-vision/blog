# 绿盟WAF SSL证书制作

## 1、准备所需材料
1. 服务器私钥server.key
2. 签名过的公钥xxx.cer或xxx.crt或xxx.pem
3. CA证书（包括中级证书，根证书）

注意，这里摆放顺序很有讲究，**公钥**须在文件最顶端，然后是**CA证书（中级证书，根证书）**，最后**是私钥**。

更改该文件为`unix`格式（仅针对于linux服务器，Windows服务器可不用更改格式默认为Windows format）

## 2、保存该文件为.cer文件
生成时在使用nginx所需的证书时，发现`pem`已包含根证书信息，摆放时注意内容不要重复

## 3、nginx配置cer文件
将ssl_certificate配置更改为新生成的cer文件

## 4、WAF端配置

配置时需注意域名白名单，可以能拦截POST请求

nginx配置项ssl_protocols里的TLSv版本与WAF上的配置勾选
![wafSSLConfig](/public/assets/tools/waf/waf_ssl_conf.png)
