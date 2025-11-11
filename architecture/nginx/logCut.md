# Nginx 日志按日期切割

在日常运维中，Nginx 的访问日志和错误日志会随着时间的推移不断增长，最终可能导致日志文件过大，影响管理和分析的效率。为了解决这个问题，我们可以将日志按日期切割，生成每日的独立日志文件。这不仅方便日志的管理，还能更高效地进行问题排查和数据分析。


1. 创建日志切割脚本： 创建一个日志切割脚本并且添加以下内容：

```bash
vim /usr/local/nginx/sbin/cut_nginx_log.sh
```

```bash
#!/bin/bash
set -euo pipefail

log_path="/var/log/nginx"
pid_file="/run/nginx.pid"
today=$(date -d "yesterday" +"%Y-%m-%d")

# 切割访问日志
if [ -f "$log_path/access.log" ]; then
  mv "$log_path/access.log" "$log_path/access_$today.log"
fi

# 切割错误日志
if [ -f "$log_path/error.log" ]; then
  mv "$log_path/error.log" "$log_path/error_$today.log"
fi

# 通知 Nginx 重新生成日志文件
if [ -f "$pid_file" ]; then
  kill -USR1 "$(cat "$pid_file")"
fi

# 清理超过 60 天的历史日志（按修改时间）
# 先打印将要删除的文件，确认后再执行删除
find "$log_path" -maxdepth 1 -type f -name 'access_*.log' -mtime +60 -print -delete
find "$log_path" -maxdepth 1 -type f -name 'error_*.log' -mtime +60 -print -delete
```

2. 赋予执行权限：

```bash
chmod +x /usr/local/nginx/sbin/cut_nginx_log.sh
```

3. 设置定时任务： 使用 crontab 配置每天凌晨切割日志：

```bash
crontab -e
```
```bash
0 0 * * * /usr/local/nginx/sbin/cut_nginx_log.sh
```

4. 运行脚本测试