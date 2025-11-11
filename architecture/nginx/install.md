# Nginx 安装

## 麒麟10sp3
修改仓库时，记得把releaseserver改成8

因为$releasever会替换成当前系统的主版本号

麒麟是v10所以会替换成10，这里手动替换即可

1. 配置nginx yum源
```bash
cat > /etc/yum.repos.d/nginx.repo <<'EOF'
[nginx-stable]
name=nginx stable repo
baseurl=http://nginx.org/packages/centos/8/$basearch/
gpgcheck=1
enabled=1
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true

[nginx-mainline]
name=nginx mainline repo
baseurl=http://nginx.org/packages/mainline/centos/8/$basearch/
gpgcheck=1
enabled=0
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true
EOF

#查看仓库
yum repolist all
AI写代码
shell
```

2. 安装nginx
可以使用 yum provides nginx 来查看官方源有哪些nginx版本
```bash
yum install -y nginx-1:1.28.0-1.el8.ngx.x86_64
```

3. 启动nginx
```bash
systemctl enable --now nginx.service
systemctl is-active nginx.service
```