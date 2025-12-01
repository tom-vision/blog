# Mysql 安装

## 麒麟10sp3
1. 确定glibc版本
```bash
ldd version
```

2. [下载mysql](https://dev.mysql.com/downloads/mysql/)
linux-Generic 可直接安装, source code 编译安装

3. 解压
```bash
tar -xvf filename.tar.xz
mv filename /data/mysql
```

4. 创建用户
```bash
groupadd mysql
useradd -g mysql mysql
```

5. 创建数据目录
```bash
mkdir /data/mysql/data
mkdir /data/mysql/log
mkdir /data/mysql/temp
touch /data/mysql/log/error.log
touch /data/mysql/my.cnf
chown -R mysql.mysql /data/mysql/
chmod -R 0750 /data/mysql/
```

6. 初始化
```bash
./bin/mysqld --initialize --console --user=mysql --basedir=/data/mysql --datadir=/data/mysql/data --log-error=/data/mysql/log/error.log
```

7. 查询密码
```bash
grep 'temporary password' /data/mysql/log/error.log
```

8. my.cnf 配置
```bash
[mysql]
#设置mysql客户端默认字符集
default-character-set=utf8mb4

[mysqld]
# sql_mode=NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO
user=mysql
skip-name-resolve

#设置3306端口
port = 3306

#缓存配置
tmp_table_size=1024M
max_heap_table_size=1024M

#设置mysql的安装目录
basedir=/data/mysql
#设置mysql数据库的数据的存放目录 错误日志
datadir=/data/mysql/data
tmpdir=/data/mysql/temp
pid-file=/data/mysql/mysql.pid
log-error=/data/mysql/log/error.log
socket=/data/mysql/temp/mysql.sock

#允许最大连接数
max_connections=200


#创建新表时将使用的默认存储引擎
default-storage-engine=INNODB

#此处是区分大写的，但是mysql8只有在初始化时设置lower_case_table_names=1才有效
#lower_case_table_names=1
max_allowed_packet=500M

#取消binlog
skip-log-bin

#开启load file
local-infile=1
secure_file_priv=

[client]
socket=/data/mysql/temp/mysql.sock
```

9. 软链
```bash
ln -s /data/mysql/my.cnf /etc/my.cnf
ln -s /data/mysql/bin/mysql /usr/local/bin/
```

10. 创建服务
```bash
cat > /etc/systemd/system/mysqld.service <<'EOF'
[Unit]
Description=mysql service
After=network.target

[Service]
User=mysql
Group=mysql
WorkingDirectory=/data/mysql
PrivateTmp=true
Type=simple
ExecStart=/data/mysql/bin/mysqld --defaults-file=/etc/my.cnf
ExecStop=/usr/bin/kill -15 $MAINPID
Restart=always
RestartSec=60
StartLimitInterval=0

[Install]
WantedBy=multi-user.target
```

11. 启动服务
```bash
systemctl enable --now mysqld.service
systemctl is-active mysqld.service
```

12. 修改初始密码
```bash
ALTER USER 'root'@'localhost' IDENTIFIED BY 'L3u$bUe4';
```