# MySQL 8 SSL 配置指南

## 自动生成证书配置

MySQL 8.0 提供了自动生成 SSL 证书的功能，可以通过以下步骤配置：

1. 编辑 MySQL 配置文件 `my.cnf` 或 `my.ini`：
> ssl=ON 在 MySQL 8.0.34 之后 已经被官方移除，因此不能再出现在配置文件中。
```ini
[mysqld]
auto_generate_certs=ON
```
2. 重启服务
```bash
systemctl daemon-reexec
systemctl restart mysqld
```
3. 验证SSL是否成功启用
```sql
SHOW VARIABLES LIKE 'have_ssl';
SHOW VARIABLES LIKE 'ssl%';
```
确认如下输出：
- `have_ssl` = `YES`
- `ssl_ca`, `ssl_cert`, `ssl_key` 等变量不为空
- 如果删除了 `.pem` 文件，`mysqld` 应该会在 `datadir` 下重新生成它们

