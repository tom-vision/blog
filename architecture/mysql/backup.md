# 备份

1. 创建备份用户
```bash
CREATE USER 'backup'@'localhost' IDENTIFIED by '9¬6QÙcãËCyOcÓaf«UÕæ6r×îìåð·çDBÔ3';
grant select, show view ,trigger ,event ,lock tables, process, reload, replication client, super ON *.* TO 'backup'@'localhost';
flush privileges;
```

2. 创建备份脚本
```bash
cat > /usr/local/bin/mysql_backup.sh <<'EOF'
#!/bin/bash
backup_dir="/data/mysql/backup"
backup_file="mysql_backup_$(date +%Y%m%d%H%M%S).sql"
backup_user="backup"
backup_password="9¬6QÙcãËCyOcÓaf«UÕæ6r×îìåð·çDBÔ3"
backup_host="localhost"
backup_port="3306"
backup_dbs="mysql"
backup_cmd="/data/mysql/bin/mysqldump"
backup_opts="--single-transaction --quick --lock-tables=false"
backup_cmd="$backup_cmd $backup_opts -u$backup_user -p$backup_password -h$backup_host -P$backup_port $backup_dbs"
if [ ! -d $backup_dir ]; then
    mkdir -p $backup_dir
fi
$backup_cmd > $backup_dir/$backup_file
EOF
```

3. 配置定时任务
```bash
crontab -e
# 每天凌晨3点备份
0 3 * * * /usr/local/bin/mysql_backup.sh
```
