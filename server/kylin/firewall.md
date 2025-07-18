# 麒麟系统端口配置

## 查询全部已开放的端口
```bash
firewall-cmd --list-all
```

## 查询某个端口是否开放
```bash
firewall-cmd --query-port=[端口]/tcp
```

## 开放端口
```bash
firewall-cmd --permanent --add-port=[端口]/tcp
```

## 关闭端口
```bash
firewall-cmd --permanent --remove-port=[端口]/tcp
```

## 刷新服务（开放、关闭端口操作后需要刷新才能生效）
```bash
firewall-cmd --reload
```