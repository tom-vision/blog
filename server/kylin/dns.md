# 麒麟系统DNS配置

1. 修改 `/etc/systemd/resolved.conf`，添加dns地址
2. 修改 `/etc/resolv.conf`，添加dns地址
3. 重载配置 `sudo systemctl daemon-reload`
4. 重启服务 `sudo systemctl restart systemd-resolved`