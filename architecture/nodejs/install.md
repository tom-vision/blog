# Node.js 安装

## nvm
1. 安装
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
# 重新加载bash配置
source ~/.bashrc
```

2. 使用NVM安装Node.js 24
```bash
nvm list-remote | grep v24

# 安装Node.js 24的最新版本
nvm install v24

# 设置为默认版本
nvm alias default v24.x86_64
```