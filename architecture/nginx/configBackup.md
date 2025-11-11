# Nginx 配置文件备份30天

1. 创建备份脚本
```bash
#!/bin/bash

# Nginx配置备份脚本
# 每天自动备份Nginx配置文件，保留30天

# 配置变量
NGINX_DIR="/usr/local/nginx"                    # Nginx安装目录
BACKUP_DIR="/var/backups/nginx"                 # 备份文件存放目录
DATE=$(date +%Y%m%d)                            # 备份日期
RETENTION_DAYS=30                               # 备份保留天数

# 创建备份目录
mkdir -p "$BACKUP_DIR"

# 检查Nginx目录是否存在
if [ ! -d "$NGINX_DIR" ]; then
    echo "错误: Nginx目录 $NGINX_DIR 不存在!"
    exit 1
fi

# 创建以日期命名的备份目录
BACKUP_PATH="$BACKUP_DIR/nginx_conf_backup_$DATE"
mkdir -p "$BACKUP_PATH"

echo "开始备份Nginx配置文件: $(date)"

# 备份nginx.conf
if [ -f "$NGINX_DIR/conf/nginx.conf" ]; then
    echo "备份: nginx.conf"
    cp -p "$NGINX_DIR/conf/nginx.conf" "$BACKUP_PATH/"
else
    echo "警告: $NGINX_DIR/conf/nginx.conf 不存在"
fi

# 备份conf.d目录（如果存在）
if [ -d "$NGINX_DIR/conf/conf.d" ]; then
    echo "备份: conf.d目录"
    mkdir -p "$BACKUP_PATH/conf.d"
    cp -rp "$NGINX_DIR/conf/conf.d/"* "$BACKUP_PATH/conf.d/" 2>/dev/null
fi

# 备份vhost目录（如果存在）
if [ -d "$NGINX_DIR/conf/vhost" ]; then
    echo "备份: vhost目录"
    mkdir -p "$BACKUP_PATH/vhost"
    cp -rp "$NGINX_DIR/conf/vhost/"* "$BACKUP_PATH/vhost/" 2>/dev/null
fi

# 备份整个conf目录
echo "备份整个conf目录..."
CONF_BACKUP_PATH="$BACKUP_PATH/conf_full"
mkdir -p "$CONF_BACKUP_PATH"
cp -rp "$NGINX_DIR/conf/"* "$CONF_BACKUP_PATH/" 2>/dev/null

# 创建备份信息文件
echo "备份时间: $(date)" > "$BACKUP_PATH/backup_info.txt"
echo "备份目录: $BACKUP_PATH" >> "$BACKUP_PATH/backup_info.txt"
echo "文件列表:" >> "$BACKUP_PATH/backup_info.txt"
find "$BACKUP_PATH" -type f >> "$BACKUP_PATH/backup_info.txt" 2>/dev/null

# 打包备份文件
echo "打包备份文件..."
cd "$BACKUP_DIR"
tar -czf "nginx_conf_backup_$DATE.tar.gz" "nginx_conf_backup_$DATE"

# 检查打包是否成功
if [ $? -eq 0 ]; then
    echo "打包成功: nginx_conf_backup_$DATE.tar.gz"
    # 删除临时目录
    rm -rf "$BACKUP_PATH"
else
    echo "错误: 打包失败，保留临时目录 $BACKUP_PATH"
    exit 1
fi

# 清理30天前的旧备份
echo "清理$RETENTION_DAYS天前的旧备份..."
find "$BACKUP_DIR" -name "nginx_conf_backup_*.tar.gz" -mtime +$RETENTION_DAYS -delete

# 显示备份状态
echo "当前备份文件:"
ls -lh "$BACKUP_DIR"/nginx_conf_backup_*.tar.gz 2>/dev/null || echo "暂无备份文件"

echo "Nginx配置备份完成!"
```

2. 赋予执行权限：
```bash
chmod +x backup_nginx_conf.sh
```

3. 添加定时任务：
```bash
crontab -e
# 添加以下内容（每天凌晨2点执行）
0 2 * * * /path/to/backup_nginx_conf.sh >> /var/log/nginx_backup.log 2>&1
```